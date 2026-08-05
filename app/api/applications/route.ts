import { NextRequest, NextResponse } from 'next/server';
import { cmsClient } from '@/lib/cms';
import { pushLeadToCrm } from '@/lib/crm';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // ── Multi-step apply form ─────────────────────────────────────────────────
    // Documents are uploaded directly from the browser to Supabase Storage
    // (see app/apply/page.tsx), so this route only ever receives their
    // already-uploaded storage paths — never raw file bytes. This keeps the
    // request body small regardless of document size, avoiding the hosting
    // platform's serverless function payload limit (~4.5MB on Vercel).
    if ('program' in body && 'qualification' in body) {
      const {
        first_name = '', last_name = '', email = '', phone = '',
        program = '', qualification = '', experience = '',
        dob, gender, regNumber, stateCouncil, yearOfReg, practiceType,
        hospitalName, clinicName, city, modePreference, reason,
        documents,
      } = body;

      const full_name = [first_name, last_name].filter(Boolean).join(' ');

      if (!full_name || !email || !phone || !program || !qualification) {
        return NextResponse.json({ error: 'Required fields missing' }, { status: 400 });
      }

      const { data, error } = await cmsClient
        .from('applications')
        .insert([{
          first_name,
          last_name,
          full_name,
          email,
          phone,
          program,
          program_interest: program,
          status: 'new',
          qualification,
          experience:      experience    || null,
          dob:             dob           || null,
          gender:          gender        || null,
          reg_number:      regNumber     || null,
          state_council:   stateCouncil  || null,
          year_of_reg:     yearOfReg     || null,
          practice_type:   practiceType  || null,
          hospital_name:   hospitalName  || null,
          clinic_name:     clinicName    || null,
          city:            city          || null,
          mode_preference: modePreference || null,
          reason:          reason        || null,
          documents:       Array.isArray(documents) && documents.length > 0 ? documents : null,
        }])
        .select()
        .single();

      if (error) {
        console.error('Supabase error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      await pushLeadToCrm({
        full_name,
        email,
        phone,
        course_interested: program,
        message: `Qualification: ${qualification}${experience ? `, Experience: ${experience}` : ''}`,
        form_type: 'application',
      });

      return NextResponse.json({ success: true, data });
    }

    // ── Simple JSON enroll (fallback) ─────────────────────────────────────────
    const { full_name, email, phone, program_interest } = body;

    if (!full_name || !email || !phone || !program_interest) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const { data, error } = await cmsClient
      .from('applications')
      .insert([{ full_name, email, phone, program_interest, status: 'new' }])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    await pushLeadToCrm({
      full_name,
      email,
      phone,
      course_interested: program_interest,
      form_type: 'counselling',
    });

    return NextResponse.json({ success: true, data });

  } catch (err) {
    console.error('Application error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  const { data, error } = await cmsClient
    .from('applications')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ data });
}

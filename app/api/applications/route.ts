import { NextRequest, NextResponse } from 'next/server';
import { cmsClient } from '@/lib/cms';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type') ?? '';

    // ── Multi-step apply form (FormData) ─────────────────────────────────────
    if (contentType.includes('multipart/form-data')) {
      const fd = await request.formData();
      const first_name   = fd.get('first_name')    as string;
      const last_name    = fd.get('last_name')     as string;
      const email        = fd.get('email')         as string;
      const phone        = fd.get('phone')         as string;
      const program      = fd.get('program')       as string;
      const qualification = fd.get('qualification') as string;
      const experience   = fd.get('experience')    as string;
      const rawMessage   = fd.get('message')       as string;

      let extra: Record<string, string> = {};
      try { extra = JSON.parse(rawMessage || '{}'); } catch {}

      const full_name = [first_name, last_name].filter(Boolean).join(' ');

      if (!first_name || !email || !phone || !program || !qualification) {
        return NextResponse.json({ error: 'Required fields missing' }, { status: 400 });
      }

      // Collect uploaded document filenames (upload skipped — just record names)
      const docKeys = ['doc_degree', 'doc_registration', 'doc_govtId', 'doc_photo'];
      const docNames: string[] = [];
      for (const key of docKeys) {
        const file = fd.get(key) as File | null;
        if (file && file.size > 0) docNames.push(file.name);
      }

      const { data, error } = await cmsClient
        .from('applications')
        .insert([{
          full_name,
          email,
          phone,
          program_interest: program,
          status: 'new',
          qualification,
          experience:      experience   || null,
          dob:             extra.dob    || null,
          gender:          extra.gender || null,
          reg_number:      extra.regNumber     || null,
          state_council:   extra.stateCouncil  || null,
          year_of_reg:     extra.yearOfReg     || null,
          practice_type:   extra.practiceType  || null,
          hospital_name:   extra.hospitalName  || null,
          clinic_name:     extra.clinicName    || null,
          city:            extra.city          || null,
          mode_preference: extra.modePreference || null,
          reason:          extra.reason        || null,
          documents:       docNames.length > 0 ? docNames : null,
        }])
        .select()
        .single();

      if (error) {
        console.error('Supabase error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
      return NextResponse.json({ success: true, data });
    }

    // ── Simple JSON enroll (fallback) ─────────────────────────────────────────
    const body = await request.json();
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

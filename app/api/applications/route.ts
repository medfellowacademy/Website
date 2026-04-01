import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const fd = await request.formData();
    const first_name = fd.get('first_name') as string;
    const last_name   = fd.get('last_name')  as string;
    const email        = fd.get('email')       as string;
    const phone        = fd.get('phone')       as string;
    const program      = fd.get('program')     as string;
    const qualification = fd.get('qualification') as string;
    const experience   = fd.get('experience')  as string;
    const rawMessage   = fd.get('message')     as string;

    // Parse the extra JSON fields that the apply form sends inside 'message'
    let extraFields: Record<string, string> = {};
    try { extraFields = JSON.parse(rawMessage || '{}'); } catch { extraFields = {}; }

    const {
      dob, gender, regNumber, stateCouncil, yearOfReg,
      practiceType, hospitalName, clinicName, city, modePreference, reason,
    } = extraFields;

    // Collect uploaded document names (doc_degree, doc_registration, etc.)
    const docKeys = ['doc_degree', 'doc_registration', 'doc_govtId', 'doc_photo'];
    const uploadedDocs = docKeys
      .map(k => fd.get(k) as File | null)
      .filter((f): f is File => f !== null && f.size > 0)
      .map(f => f.name);

    const message = uploadedDocs.length > 0
      ? `[Uploaded documents: ${uploadedDocs.join(', ')}]`
      : null;

    if (!first_name || !email || !phone || !program || !qualification) {
      return NextResponse.json({ error: 'Required fields missing' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('applications')
      .insert([{
        first_name, last_name, email, phone, program, qualification, experience, message,
        status: 'pending',
        dob: dob || null,
        gender: gender || null,
        reg_number: regNumber || null,
        state_council: stateCouncil || null,
        year_of_reg: yearOfReg || null,
        practice_type: practiceType || null,
        hospital_name: hospitalName || null,
        clinic_name: clinicName || null,
        city: city || null,
        mode_preference: modePreference || null,
        reason: reason || null,
      }])
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
  const { data, error } = await supabase
    .from('applications')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ data });
}

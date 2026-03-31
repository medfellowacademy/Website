import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const fd = await request.formData();
    const first_name = fd.get('first_name') as string;
    const last_name = fd.get('last_name') as string;
    const email = fd.get('email') as string;
    const phone = fd.get('phone') as string;
    const program = fd.get('program') as string;
    const qualification = fd.get('qualification') as string;
    const experience = fd.get('experience') as string;
    const message = fd.get('message') as string;

    const files = fd.getAll('documents') as File[];
    const documentNames = files.filter(f => f.size > 0).map(f => f.name);
    const fullMessage = documentNames.length > 0
      ? `${message}\n\n[Attached documents: ${documentNames.join(', ')}]`
      : message;

    if (!first_name || !email || !phone || !program || !qualification) {
      return NextResponse.json({ error: 'Required fields missing' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('applications')
      .insert([{ first_name, last_name, email, phone, program, qualification, experience, message: fullMessage, status: 'pending' }])
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

import { NextRequest, NextResponse } from 'next/server';
import { cmsClient } from '@/lib/cms';
import { pushLeadToCrm } from '@/lib/crm';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email and message are required' }, { status: 400 });
    }

    const { data, error } = await cmsClient
      .from('contact_enquiries')
      .insert([{ name, email, phone, subject, message, status: 'new' }])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (phone) {
      await pushLeadToCrm({
        full_name: name,
        email,
        phone,
        course_interested: subject || 'General Enquiry',
        message,
        form_type: 'contact',
      });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  const { data, error } = await cmsClient
    .from('contact_enquiries')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ data });
}

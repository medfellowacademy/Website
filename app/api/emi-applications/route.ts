import { NextRequest, NextResponse } from 'next/server';
import { createEmiApplication, logEmiNotification } from '@/lib/cms';
import { sendEmiReceivedNotice } from '@/lib/notify';
import { pushLeadToCrm } from '@/lib/crm';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      full_name = '', email = '', phone = '', program = '', city = '', country = '',
      qualification = '', employment_type = '', monthly_income = '',
      course_fee, preferred_emi_months = '', notes = '',
    } = body;

    if (!full_name || !email || !phone) {
      return NextResponse.json({ error: 'Name, email and phone are required' }, { status: 400 });
    }

    const application = await createEmiApplication({
      full_name, email, phone, program, city, country, qualification,
      employment_type, monthly_income,
      course_fee: course_fee ? Number(course_fee) : null,
      preferred_emi_months,
      notes,
    });

    // Best-effort side effects — never block the applicant's success response.
    const { emailResult, smsResult } = await sendEmiReceivedNotice({ full_name, email, phone });
    await Promise.all([
      logEmiNotification(application.id, { channel: 'email', event: 'received', ok: emailResult.ok }),
      logEmiNotification(application.id, { channel: 'sms', event: 'received', ok: smsResult.ok }),
    ]);
    await pushLeadToCrm({
      full_name, email, phone,
      course_interested: program,
      message: `EMI application${course_fee ? ` — course fee ₹${course_fee}` : ''}`,
      form_type: 'application',
    });

    return NextResponse.json({ success: true, data: application });
  } catch (err: any) {
    console.error('EMI application error:', err);
    return NextResponse.json({ error: err?.message ?? 'Internal server error' }, { status: 500 });
  }
}

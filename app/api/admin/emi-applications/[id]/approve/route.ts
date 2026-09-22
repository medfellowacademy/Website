import { NextRequest, NextResponse } from 'next/server';
import { getEmiApplicationById, updateEmiApplication, logEmiNotification } from '@/lib/cms';
import { sendEmiApprovedNotice } from '@/lib/notify';

export const dynamic = 'force-dynamic';

// Marks the application eligible AND sets its EMI plan in one action — the
// applicant is only ever told "approved" once the terms are final.
export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const {
      emi_months, emi_monthly_amount, emi_start_date = '',
      emi_processing_fee, emi_notes = '', reviewed_by = 'Admin',
    } = body;

    if (!emi_months || !emi_monthly_amount) {
      return NextResponse.json({ error: 'EMI tenure and monthly amount are required to approve' }, { status: 400 });
    }

    const application = await updateEmiApplication(id, {
      status: 'approved',
      emi_months: Number(emi_months),
      emi_monthly_amount: Number(emi_monthly_amount),
      emi_start_date,
      emi_processing_fee: emi_processing_fee ? Number(emi_processing_fee) : null,
      emi_notes,
      reviewed_by,
      reviewed_at: new Date().toISOString(),
    });

    const { emailResult, smsResult } = await sendEmiApprovedNotice(application);
    await Promise.all([
      logEmiNotification(id, { channel: 'email', event: 'approved', ok: emailResult.ok }),
      logEmiNotification(id, { channel: 'sms', event: 'approved', ok: smsResult.ok }),
    ]);

    const finalRecord = await getEmiApplicationById(id);
    return NextResponse.json({ success: true, data: finalRecord });
  } catch (e: any) {
    console.error('EMI approve error:', e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

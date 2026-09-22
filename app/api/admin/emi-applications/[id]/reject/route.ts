import { NextRequest, NextResponse } from 'next/server';
import { getEmiApplicationById, updateEmiApplication, logEmiNotification } from '@/lib/cms';
import { sendEmiNotEligibleNotice } from '@/lib/notify';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { review_notes = '', reviewed_by = 'Admin' } = body;

    const application = await updateEmiApplication(id, {
      status: 'not_eligible',
      review_notes,
      reviewed_by,
      reviewed_at: new Date().toISOString(),
    });

    const { emailResult, smsResult } = await sendEmiNotEligibleNotice(application);
    await Promise.all([
      logEmiNotification(id, { channel: 'email', event: 'not_eligible', ok: emailResult.ok }),
      logEmiNotification(id, { channel: 'sms', event: 'not_eligible', ok: smsResult.ok }),
    ]);

    const finalRecord = await getEmiApplicationById(id);
    return NextResponse.json({ success: true, data: finalRecord });
  } catch (e: any) {
    console.error('EMI reject error:', e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

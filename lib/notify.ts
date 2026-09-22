// Email (Resend) + SMS (Twilio) senders for the EMI application flow.
//
// Best-effort, same philosophy as lib/crm.ts: a missing/misconfigured
// provider or a delivery failure must never break the request that
// triggered it (form submission, admin approve/reject). Every call logs a
// warning and resolves { ok: false } instead of throwing.

import { Resend } from 'resend';
import twilio from 'twilio';

const resendApiKey = process.env.RESEND_API_KEY;
const emailFrom = process.env.EMI_NOTIFY_FROM_EMAIL || 'MedFellow Academy <onboarding@resend.dev>';

const twilioSid = process.env.TWILIO_ACCOUNT_SID;
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
const twilioFromNumber = process.env.TWILIO_FROM_NUMBER;

const resend = resendApiKey ? new Resend(resendApiKey) : null;
const twilioClient = twilioSid && twilioAuthToken ? twilio(twilioSid, twilioAuthToken) : null;

export interface NotifyResult {
  ok: boolean;
  skipped?: boolean;
  error?: string;
}

export async function sendEmail(to: string, subject: string, html: string): Promise<NotifyResult> {
  if (!resend) {
    console.warn('RESEND_API_KEY not configured — skipping email:', subject);
    return { ok: false, skipped: true };
  }
  try {
    const { error } = await resend.emails.send({ from: emailFrom, to, subject, html });
    if (error) {
      console.error('Resend send error:', error);
      return { ok: false, error: error.message };
    }
    return { ok: true };
  } catch (err: any) {
    console.error('Resend send exception:', err);
    return { ok: false, error: err?.message ?? 'unknown error' };
  }
}

export async function sendSms(to: string, body: string): Promise<NotifyResult> {
  if (!twilioClient || !twilioFromNumber) {
    console.warn('Twilio not configured — skipping SMS');
    return { ok: false, skipped: true };
  }
  try {
    await twilioClient.messages.create({ to, from: twilioFromNumber, body });
    return { ok: true };
  } catch (err: any) {
    console.error('Twilio send error:', err);
    return { ok: false, error: err?.message ?? 'unknown error' };
  }
}

// ─── EMI-specific message templates ────────────────────────────────────────

const BRAND_GREEN = '#15401E';

function emailShell(title: string, bodyHtml: string): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #111827;">
      <div style="background:${BRAND_GREEN}; padding: 20px 24px; border-radius: 8px 8px 0 0;">
        <span style="color:#fff; font-size: 18px; font-weight: 700;">MedFellow Academy</span>
      </div>
      <div style="border: 1px solid #E5E7EB; border-top: none; padding: 24px; border-radius: 0 0 8px 8px;">
        <h2 style="color:${BRAND_GREEN}; margin-top: 0;">${title}</h2>
        ${bodyHtml}
        <p style="color:#6B7280; font-size: 13px; margin-top: 32px;">
          Questions? Reply to this email or WhatsApp us — we're happy to help.
        </p>
      </div>
    </div>
  `;
}

export async function sendEmiReceivedNotice(app: { full_name: string; email: string; phone: string }) {
  const html = emailShell(
    'We’ve received your EMI application',
    `<p>Hi ${app.full_name},</p>
     <p>Thanks for applying for an EMI (installment) plan with MedFellow Academy. Our team is reviewing your
     application now and will get back to you shortly with the outcome.</p>
     <p>You don't need to do anything else right now.</p>`,
  );
  const sms = `MedFellow Academy: Hi ${app.full_name}, we've received your EMI application and it's under review. We'll notify you once it's processed.`;
  const [emailResult, smsResult] = await Promise.all([
    sendEmail(app.email, 'Your EMI application has been received — MedFellow Academy', html),
    sendSms(app.phone, sms),
  ]);
  return { emailResult, smsResult };
}

export async function sendEmiApprovedNotice(app: {
  full_name: string;
  email: string;
  phone: string;
  program: string;
  emi_months: number | null;
  emi_monthly_amount: number | null;
  emi_start_date: string;
  emi_processing_fee: number | null;
  emi_notes: string;
}) {
  const fmt = (n: number | null) => (n == null ? '—' : `₹${n.toLocaleString('en-IN')}`);
  const html = emailShell(
    'You’re eligible — your EMI plan is ready',
    `<p>Hi ${app.full_name},</p>
     <p>Good news — your EMI application${app.program ? ` for <strong>${app.program}</strong>` : ''} has been
     reviewed and approved. Here are your plan details:</p>
     <table style="width:100%; border-collapse: collapse; margin: 16px 0;">
       <tr><td style="padding:8px 0; border-bottom:1px solid #F1F1F1; color:#6B7280;">Tenure</td><td style="padding:8px 0; border-bottom:1px solid #F1F1F1; text-align:right; font-weight:600;">${app.emi_months ?? '—'} months</td></tr>
       <tr><td style="padding:8px 0; border-bottom:1px solid #F1F1F1; color:#6B7280;">Monthly amount</td><td style="padding:8px 0; border-bottom:1px solid #F1F1F1; text-align:right; font-weight:600;">${fmt(app.emi_monthly_amount)}</td></tr>
       <tr><td style="padding:8px 0; border-bottom:1px solid #F1F1F1; color:#6B7280;">Start date</td><td style="padding:8px 0; border-bottom:1px solid #F1F1F1; text-align:right; font-weight:600;">${app.emi_start_date || '—'}</td></tr>
       <tr><td style="padding:8px 0; color:#6B7280;">Processing fee</td><td style="padding:8px 0; text-align:right; font-weight:600;">${fmt(app.emi_processing_fee)}</td></tr>
     </table>
     ${app.emi_notes ? `<p style="background:#F7FAF8; border:1px solid #e8f2ea; border-radius:8px; padding:12px 16px;">${app.emi_notes}</p>` : ''}
     <p>Our admissions team will reach out to confirm the next steps.</p>`,
  );
  const sms = `MedFellow Academy: Good news ${app.full_name}! Your EMI plan is approved — ${app.emi_months ?? '—'} months at ${fmt(app.emi_monthly_amount)}/month, starting ${app.emi_start_date || 'soon'}. Check your email for full details.`;
  const [emailResult, smsResult] = await Promise.all([
    sendEmail(app.email, 'Your EMI plan is approved — MedFellow Academy', html),
    sendSms(app.phone, sms),
  ]);
  return { emailResult, smsResult };
}

export async function sendEmiNotEligibleNotice(app: { full_name: string; email: string; phone: string; review_notes: string }) {
  const html = emailShell(
    'Update on your EMI application',
    `<p>Hi ${app.full_name},</p>
     <p>Thank you for applying for an EMI plan with MedFellow Academy. After review, we're unable to offer an
     installment plan for this application at this time.</p>
     ${app.review_notes ? `<p style="background:#FEF3C7; border-left:4px solid #F59E0B; border-radius: 0 8px 8px 0; padding:12px 16px;">${app.review_notes}</p>` : ''}
     <p>You're welcome to reach out to our admissions team to discuss other payment options.</p>`,
  );
  const sms = `MedFellow Academy: Hi ${app.full_name}, we're unable to offer an EMI plan for your application right now. Please check your email for details, or contact us to discuss other options.`;
  const [emailResult, smsResult] = await Promise.all([
    sendEmail(app.email, 'Update on your EMI application — MedFellow Academy', html),
    sendSms(app.phone, sms),
  ]);
  return { emailResult, smsResult };
}

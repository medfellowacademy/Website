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
const LOGO_URL = 'https://www.medfellowacademy.com/logo.png';
const SITE_URL = 'https://www.medfellowacademy.com';

function emailShell(title: string, bodyHtml: string): string {
  return `
  <div style="background:#F3F4F6; padding: 32px 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">
    <div style="max-width: 560px; margin: 0 auto;">

      <!-- Header -->
      <div style="background:${BRAND_GREEN}; padding: 28px 32px; border-radius: 12px 12px 0 0; text-align:center;">
        <img src="${LOGO_URL}" alt="MedFellow Academy" height="36" style="height:36px; width:auto; display:inline-block;" />
      </div>

      <!-- Body card -->
      <div style="background:#ffffff; border: 1px solid #E5E7EB; border-top: none; padding: 36px 32px; color:#1F2937;">
        <h1 style="color:${BRAND_GREEN}; margin: 0 0 20px; font-size: 21px; font-weight: 700; line-height: 1.3;">${title}</h1>
        <div style="font-size: 14.5px; line-height: 1.65; color:#374151;">
          ${bodyHtml}
        </div>
      </div>

      <!-- Footer -->
      <div style="background:#FAFAF9; border: 1px solid #E5E7EB; border-top: 1px solid #F1F1F1; border-radius: 0 0 12px 12px; padding: 24px 32px; text-align:center;">
        <p style="margin:0 0 6px; font-size:13px; font-weight:600; color:#15401E;">MedFellow Academy</p>
        <p style="margin:0 0 14px; font-size:12.5px; color:#6B7280; line-height:1.6;">
          Mahavir House, Basheer Bagh, Hyderabad 500029<br/>
          <a href="mailto:info@medfellow.in" style="color:#6B7280; text-decoration:underline;">info@medfellow.in</a>
          &nbsp;·&nbsp;
          <a href="tel:+919985044993" style="color:#6B7280; text-decoration:underline;">+91 99850 44993</a>
        </p>
        <p style="margin:0; font-size:12px; color:#9CA3AF;">
          <a href="${SITE_URL}" style="color:#9CA3AF; text-decoration:underline;">medfellowacademy.com</a>
          &nbsp;·&nbsp; This is an automated message regarding your EMI application.
        </p>
      </div>

    </div>
  </div>
  `;
}

function closingLine(): string {
  return `<p style="margin: 28px 0 0; padding-top: 20px; border-top: 1px solid #F1F1F1; font-size: 13px; color:#9CA3AF;">
    Questions? Just reply to this email or WhatsApp us at <a href="https://wa.me/919985044993" style="color:${BRAND_GREEN}; text-decoration:underline;">+91 99850 44993</a> — we're happy to help.
  </p>`;
}

export async function sendEmiReceivedNotice(app: { full_name: string; email: string; phone: string }) {
  const html = emailShell(
    'We’ve received your EMI application',
    `<p style="margin:0 0 14px;">Hi ${app.full_name},</p>
     <p style="margin:0 0 14px;">Thanks for applying for an EMI (installment) plan with MedFellow Academy. Our team reviews every
     application individually and will get back to you shortly with the outcome.</p>
     <p style="margin:0;">You don't need to do anything else right now.</p>
     ${closingLine()}`,
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
  emi_registration_amount: number | null;
  emi_notes: string;
}) {
  const fmt = (n: number | null) => (n == null ? '—' : `₹${n.toLocaleString('en-IN')}`);
  const row = (label: string, value: string, last = false) => `
    <tr>
      <td style="padding:11px 0; ${last ? '' : 'border-bottom:1px solid #EFEFEF;'} color:#6B7280; font-size:13.5px;">${label}</td>
      <td style="padding:11px 0; ${last ? '' : 'border-bottom:1px solid #EFEFEF;'} text-align:right; font-weight:700; color:#111827; font-size:14px;">${value}</td>
    </tr>`;
  const html = emailShell(
    'You’re eligible — your EMI plan is ready',
    `<p style="margin:0 0 14px;">Hi ${app.full_name},</p>
     <p style="margin:0 0 20px;">Good news — your EMI application${app.program ? ` for <strong>${app.program}</strong>` : ''} has been
     reviewed and approved. Here are your plan details:</p>
     <table style="width:100%; border-collapse: collapse; background:#F7FAF8; border:1px solid #e8f2ea; border-radius:10px; padding:4px 18px; margin: 0 0 20px;">
       ${app.emi_registration_amount != null ? row('Registration amount (upfront)', fmt(app.emi_registration_amount)) : ''}
       ${row('Tenure', `${app.emi_months ?? '—'} months`)}
       ${row('Monthly amount', fmt(app.emi_monthly_amount))}
       ${row('Start date', app.emi_start_date || '—')}
       ${row('Processing fee', fmt(app.emi_processing_fee), true)}
     </table>
     ${app.emi_notes ? `<p style="background:#FFFBEB; border:1px solid #FDE68A; border-radius:8px; padding:12px 16px; margin: 0 0 20px; font-size:13.5px;">${app.emi_notes}</p>` : ''}
     <p style="margin:0;">Our admissions team will reach out shortly to confirm the next steps.</p>
     ${closingLine()}`,
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
    `<p style="margin:0 0 14px;">Hi ${app.full_name},</p>
     <p style="margin:0 0 14px;">Thank you for applying for an EMI plan with MedFellow Academy. After careful review, we're unable to
     offer an installment plan for this application at this time.</p>
     ${app.review_notes ? `<p style="background:#FEF3C7; border-left:3px solid #F59E0B; border-radius: 0 8px 8px 0; padding:12px 16px; margin: 0 0 14px; font-size:13.5px;">${app.review_notes}</p>` : ''}
     <p style="margin:0;">You're welcome to reach out to our admissions team to discuss other payment options.</p>
     ${closingLine()}`,
  );
  const sms = `MedFellow Academy: Hi ${app.full_name}, we're unable to offer an EMI plan for your application right now. Please check your email for details, or contact us to discuss other options.`;
  const [emailResult, smsResult] = await Promise.all([
    sendEmail(app.email, 'Update on your EMI application — MedFellow Academy', html),
    sendSms(app.phone, sms),
  ]);
  return { emailResult, smsResult };
}

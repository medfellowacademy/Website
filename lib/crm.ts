// Pushes website enquiries directly into the Medical Education CRM as leads,
// in addition to the existing Supabase CMS storage. Best-effort: never throws,
// so a CRM outage can't break the website's own form submission.

const CRM_API_URL = process.env.CRM_API_URL;
const CRM_WEBHOOK_SECRET = process.env.CRM_WEBHOOK_SECRET;

export interface CrmLeadPayload {
  full_name: string;
  email?: string | null;
  phone: string;
  course_interested?: string;
  country?: string;
  message?: string;
  form_type: 'contact' | 'counselling' | 'application';
}

export async function pushLeadToCrm(payload: CrmLeadPayload): Promise<void> {
  if (!CRM_API_URL || !CRM_WEBHOOK_SECRET) {
    console.warn('CRM_API_URL / CRM_WEBHOOK_SECRET not configured - skipping CRM push');
    return;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const res = await fetch(`${CRM_API_URL}/api/public/website-lead`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Webhook-Secret': CRM_WEBHOOK_SECRET,
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    if (!res.ok) {
      console.error('CRM lead push failed:', res.status, await res.text());
    }
  } catch (err) {
    console.error('CRM lead push error:', err);
  } finally {
    clearTimeout(timeout);
  }
}

'use client';

import { useMemo, useState } from 'react';
import { CheckCircle2, Mail, MessageSquare, Clock, User, GraduationCap, Wallet } from 'lucide-react';

const inputCls =
  'w-full px-3.5 py-2.5 border border-[#D1D5DB] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#15401E]/15 focus:border-[#15401E] bg-white transition-all';
const labelCls = 'block text-[0.8125rem] font-semibold text-[#374151] mb-1.5';

const EMPLOYMENT_OPTIONS = ['', 'Salaried', 'Self-employed / Private practice', 'Government service', 'Currently studying', 'Other'];

const COUNTRY_OPTIONS = ['', 'India', 'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Oman', 'Kuwait', 'Bahrain', 'Other'];

const EMI_TENURE_OPTIONS = ['', '2 months', '3 months', '4 months', '5 months', '6 months'];

const OTHER = 'Other (please specify)';

interface FormState {
  full_name: string;
  email: string;
  phone: string;
  program: string;
  program_other: string;
  city: string;
  country: string;
  country_other: string;
  qualification: string;
  employment_type: string;
  monthly_income: string;
  course_fee: string;
  preferred_emi_months: string;
  currency: 'INR' | 'USD';
  notes: string;
  consent: boolean;
}

const BLANK: FormState = {
  full_name: '', email: '', phone: '', program: '', program_other: '', city: '', country: '', country_other: '',
  qualification: '', employment_type: '', monthly_income: '', course_fee: '', preferred_emi_months: '',
  currency: 'INR', notes: '', consent: false,
};

function SectionLabel({ icon: Icon, children }: { icon: React.ComponentType<{ className?: string }>; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="w-7 h-7 rounded-full bg-[#e8f2ea] text-[#15401E] flex items-center justify-center shrink-0">
        <Icon className="w-[15px] h-[15px]" />
      </span>
      <h3 className="text-[0.8125rem] font-bold uppercase tracking-wide text-[#111827]">{children}</h3>
    </div>
  );
}

export default function EmiApplicationForm({ programOptions }: { programOptions: string[] }) {
  const [form, setForm] = useState<FormState>(BLANK);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function set<K extends keyof FormState>(k: K, v: FormState[K]) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  const symbol = form.currency === 'USD' ? '$' : '₹';

  const estimatedMonthly = useMemo(() => {
    const fee = Number(form.course_fee);
    const months = parseInt(form.preferred_emi_months, 10);
    if (!fee || !months) return null;
    return Math.round(fee / months);
  }, [form.course_fee, form.preferred_emi_months]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    if (!form.full_name.trim() || !form.email.trim() || !form.phone.trim()) {
      setError('Name, email and phone are required.');
      return;
    }
    if (!form.consent) {
      setError('Please confirm the consent checkbox before submitting.');
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        ...form,
        program: form.program === OTHER ? form.program_other : form.program,
        country: form.country === 'Other' ? form.country_other : form.country,
        preferred_emi_months: form.preferred_emi_months,
      };
      const res = await fetch('/api/emi-applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? 'Something went wrong. Please try again.');
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message ?? 'Something went wrong. Please try again.');
    }
    setSubmitting(false);
  }

  if (submitted) {
    return (
      <div className="text-center py-4">
        <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-8 h-8 text-emerald-500" />
        </div>
        <p className="font-bold text-[#111827] text-xl">Application received</p>
        <p className="text-[0.9375rem] text-[#6B7280] mt-2 max-w-sm mx-auto">
          Thanks, {form.full_name.split(' ')[0]}! We&apos;ve sent a confirmation to {form.email} and a text to{' '}
          {form.phone}.
        </p>

        <div className="mt-6 bg-[#F7FAF8] border border-[#e8f2ea] rounded-xl p-5 text-left max-w-sm mx-auto space-y-3">
          <div className="flex items-start gap-3">
            <Mail className="w-4 h-4 text-[#15401E] mt-0.5 shrink-0" />
            <p className="text-[0.8125rem] text-[#374151]">Confirmation email &amp; SMS — sent just now</p>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-[#15401E] mt-0.5 shrink-0" />
            <p className="text-[0.8125rem] text-[#374151]">Our team reviews your application individually</p>
          </div>
          <div className="flex items-start gap-3">
            <MessageSquare className="w-4 h-4 text-[#15401E] mt-0.5 shrink-0" />
            <p className="text-[0.8125rem] text-[#374151]">You&apos;ll get the outcome — and your EMI plan if approved — by email &amp; SMS</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">{error}</div>
      )}

      <div>
        <SectionLabel icon={User}>Your Details</SectionLabel>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Full Name *</label>
            <input value={form.full_name} onChange={(e) => set('full_name', e.target.value)} placeholder="Dr. Anita Sharma" className={inputCls} required />
          </div>
          <div>
            <label className={labelCls}>Phone (with country code) *</label>
            <input value={form.phone} onChange={(e) => set('phone', e.target.value)} placeholder="+91 98765 43210" className={inputCls} required />
          </div>
        </div>
        <div className="mt-4">
          <label className={labelCls}>Email *</label>
          <input type="email" value={form.email} onChange={(e) => set('email', e.target.value)} placeholder="you@example.com" className={inputCls} required />
        </div>
        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <div>
            <label className={labelCls}>Country</label>
            <select value={form.country} onChange={(e) => set('country', e.target.value)} className={inputCls}>
              {COUNTRY_OPTIONS.map((o) => <option key={o} value={o}>{o || 'Select…'}</option>)}
            </select>
            {form.country === 'Other' && (
              <input value={form.country_other} onChange={(e) => set('country_other', e.target.value)} placeholder="Enter your country" className={inputCls + ' mt-2'} />
            )}
          </div>
          <div>
            <label className={labelCls}>City</label>
            <input value={form.city} onChange={(e) => set('city', e.target.value)} placeholder="Hyderabad" className={inputCls} />
          </div>
        </div>
        <div className="mt-4">
          <label className={labelCls}>Highest Qualification</label>
          <input value={form.qualification} onChange={(e) => set('qualification', e.target.value)} placeholder="MBBS" className={inputCls} />
        </div>
      </div>

      <div className="pt-6 border-t border-[#F1F1F1]">
        <SectionLabel icon={GraduationCap}>Course</SectionLabel>
        <div>
          <label className={labelCls}>Fellowship / Program</label>
          <select value={form.program} onChange={(e) => set('program', e.target.value)} className={inputCls}>
            <option value="">Select a program…</option>
            {programOptions.map((name) => <option key={name} value={name}>{name}</option>)}
            <option value={OTHER}>{OTHER}</option>
          </select>
          {form.program === OTHER && (
            <input value={form.program_other} onChange={(e) => set('program_other', e.target.value)} placeholder="Type the program name" className={inputCls + ' mt-2'} />
          )}
        </div>
      </div>

      <div className="pt-6 border-t border-[#F1F1F1]">
        <SectionLabel icon={Wallet}>Financial Details</SectionLabel>
        <p className="text-[0.75rem] text-[#9CA3AF] -mt-2 mb-4">Helps our team assess an installment plan that works for you.</p>
        <div className="mb-4">
          <label className={labelCls}>Currency</label>
          <div className="inline-flex rounded-xl border border-[#D1D5DB] overflow-hidden">
            {(['INR', 'USD'] as const).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => set('currency', c)}
                className={`px-5 py-2 text-sm font-semibold transition-colors ${
                  form.currency === c ? 'bg-[#15401E] text-white' : 'bg-white text-[#374151] hover:bg-[#F7FAF8]'
                }`}
              >
                {c === 'INR' ? '₹ INR' : '$ USD'}
              </button>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Employment Type</label>
            <select value={form.employment_type} onChange={(e) => set('employment_type', e.target.value)} className={inputCls}>
              {EMPLOYMENT_OPTIONS.map((o) => <option key={o} value={o}>{o || 'Select…'}</option>)}
            </select>
          </div>
          <div>
            <label className={labelCls}>Approximate Monthly Income ({form.currency})</label>
            <input value={form.monthly_income} onChange={(e) => set('monthly_income', e.target.value)} placeholder={form.currency === 'USD' ? '$2,000' : '₹50,000'} className={inputCls} />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <div>
            <label className={labelCls}>Course Fee ({symbol})</label>
            <input type="number" min="0" onWheel={(e) => e.currentTarget.blur()} value={form.course_fee} onChange={(e) => set('course_fee', e.target.value)} placeholder={form.currency === 'USD' ? '1,700' : '1,40,000'} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Preferred EMI Tenure</label>
            <select value={form.preferred_emi_months} onChange={(e) => set('preferred_emi_months', e.target.value)} className={inputCls}>
              {EMI_TENURE_OPTIONS.map((o) => <option key={o} value={o}>{o || 'Select…'}</option>)}
            </select>
          </div>
        </div>
        {estimatedMonthly != null && (
          <p className="text-[0.8125rem] text-[#15401E] bg-[#F7FAF8] border border-[#e8f2ea] rounded-lg px-3.5 py-2.5 mt-3">
            Rough estimate: <strong>{symbol}{estimatedMonthly.toLocaleString(form.currency === 'USD' ? 'en-US' : 'en-IN')}/month</strong> for {form.preferred_emi_months}.
            This is only a guide — your admin-approved plan may differ (e.g. after a registration amount).
          </p>
        )}
        <div className="mt-4">
          <label className={labelCls}>Anything else we should know? <span className="text-[#9CA3AF] font-normal">(optional)</span></label>
          <textarea value={form.notes} onChange={(e) => set('notes', e.target.value)} rows={3} className={inputCls + ' resize-y'} placeholder="Timing preferences, questions, etc." />
        </div>
      </div>

      <div>
        <label className="flex items-start gap-2.5 text-[0.8125rem] text-[#374151] leading-relaxed cursor-pointer">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(e) => set('consent', e.target.checked)}
            className="w-4 h-4 mt-0.5 accent-[#15401E] shrink-0"
          />
          <span>
            I confirm the details above are accurate, and I authorize MedFellow Academy to contact me by email,
            SMS or WhatsApp regarding this application. Submitting this form does not guarantee an EMI plan —
            every application is reviewed individually.
          </span>
        </label>
        <button
          type="submit"
          disabled={submitting}
          className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-[#15401E] text-white rounded-xl font-semibold text-[0.9375rem] hover:bg-[#0f2e15] disabled:opacity-60 transition-colors mt-4"
        >
          {submitting ? 'Submitting…' : 'Submit Application'}
        </button>
      </div>
    </form>
  );
}

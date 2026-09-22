'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const inputCls =
  'w-full px-3.5 py-2.5 border border-[#D1D5DB] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#15401E]/15 focus:border-[#15401E] bg-white transition-all';
const labelCls = 'block text-[0.8125rem] font-semibold text-[#374151] mb-1.5';

const EMPLOYMENT_OPTIONS = ['', 'Salaried', 'Self-employed / Private practice', 'Government service', 'Currently studying', 'Other'];

interface FormState {
  full_name: string;
  email: string;
  phone: string;
  program: string;
  city: string;
  qualification: string;
  employment_type: string;
  monthly_income: string;
  course_fee: string;
  notes: string;
}

const BLANK: FormState = {
  full_name: '', email: '', phone: '', program: '', city: '',
  qualification: '', employment_type: '', monthly_income: '', course_fee: '', notes: '',
};

export default function EmiApplicationForm() {
  const [form, setForm] = useState<FormState>(BLANK);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function set<K extends keyof FormState>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    if (!form.full_name.trim() || !form.email.trim() || !form.phone.trim()) {
      setError('Name, email and phone are required.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/emi-applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
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
      <div className="text-center py-6">
        <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-7 h-7 text-emerald-500" />
        </div>
        <p className="font-bold text-[#111827] text-lg">Application received</p>
        <p className="text-[0.9375rem] text-[#6B7280] mt-2 max-w-sm mx-auto">
          Thanks, {form.full_name.split(' ')[0]}! We&apos;ve emailed and texted you a confirmation. Our team will
          review your application and let you know the outcome shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">{error}</div>
      )}

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

      <div>
        <label className={labelCls}>Email *</label>
        <input type="email" value={form.email} onChange={(e) => set('email', e.target.value)} placeholder="you@example.com" className={inputCls} required />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Fellowship / Program</label>
          <input value={form.program} onChange={(e) => set('program', e.target.value)} placeholder="Fellowship in Dermatology" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>City</label>
          <input value={form.city} onChange={(e) => set('city', e.target.value)} placeholder="Hyderabad" className={inputCls} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Highest Qualification</label>
          <input value={form.qualification} onChange={(e) => set('qualification', e.target.value)} placeholder="MBBS" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Employment Type</label>
          <select value={form.employment_type} onChange={(e) => set('employment_type', e.target.value)} className={inputCls}>
            {EMPLOYMENT_OPTIONS.map((o) => <option key={o} value={o}>{o || 'Select…'}</option>)}
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Approximate Monthly Income</label>
          <input value={form.monthly_income} onChange={(e) => set('monthly_income', e.target.value)} placeholder="₹50,000" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Course Fee (₹)</label>
          <input type="number" min="0" value={form.course_fee} onChange={(e) => set('course_fee', e.target.value)} placeholder="1,40,000" className={inputCls} />
        </div>
      </div>

      <div>
        <label className={labelCls}>Anything else we should know? <span className="text-[#9CA3AF] font-normal">(optional)</span></label>
        <textarea value={form.notes} onChange={(e) => set('notes', e.target.value)} rows={3} className={inputCls + ' resize-y'} placeholder="Preferred EMI tenure, timing, etc." />
      </div>

      <p className="text-[0.75rem] text-[#9CA3AF] leading-relaxed">
        Submitting this form does not guarantee an EMI plan. Our team reviews every application individually,
        and you&apos;ll receive an email and SMS with the outcome.
      </p>

      <button
        type="submit"
        disabled={submitting}
        className="w-full inline-flex items-center justify-center px-6 py-3 bg-[#15401E] text-white rounded-xl font-semibold text-[0.9375rem] hover:bg-[#0f2e15] disabled:opacity-60 transition-colors"
      >
        {submitting ? 'Submitting…' : 'Submit Application'}
      </button>
    </form>
  );
}

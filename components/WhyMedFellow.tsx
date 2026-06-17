'use client';
import { useState } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';

const COURSES = [
  'Cardiology Fellowship',
  'Dermatology Fellowship',
  'Diabetology Fellowship',
  'Emergency Medicine Fellowship',
  'Endocrinology Fellowship',
  'Gastroenterology Fellowship',
  'Gynaecology & Obstetrics Fellowship',
  'Internal Medicine Fellowship',
  'Nephrology Fellowship',
  'Neurology Fellowship',
  'Oncology Fellowship',
  'Ophthalmology Fellowship',
  'Orthopaedics Fellowship',
  'Paediatrics Fellowship',
  'Psychiatry Fellowship',
  'Pulmonology Fellowship',
  'Radiology Fellowship',
  'Reproductive Medicine Fellowship',
  'Sports Medicine Fellowship',
  'Urology Fellowship',
  'Other',
];

const DEFAULT_WHY_POINTS = [
  { title: 'No career break needed', desc: 'All programs are structured around working doctors — asynchronous modules with live weekend sessions.' },
  { title: 'Hands-on hospital rotations', desc: 'Supervised clinical training at 20+ premier hospitals across India with direct patient exposure.' },
  { title: 'Internationally accredited', desc: 'ACTD-accredited certificates recognised globally and by leading hospital recruitment boards.' },
  { title: 'Dedicated faculty mentors', desc: 'Every fellow is paired with a senior specialist for 1:1 guidance throughout the program.' },
];

interface WhyMedFellowProps {
  heading?: string;
  subtitle?: string;
  whyPoints?: { title: string; desc: string }[];
  stats?: { value: string; label: string; sub: string }[];
}

export default function WhyMedFellow({ heading, subtitle, whyPoints }: WhyMedFellowProps = {}) {
  const displayPoints = (whyPoints && whyPoints.length > 0) ? whyPoints : DEFAULT_WHY_POINTS;

  const [form, setForm]       = useState({ name: '', email: '', course: '' });
  const [status, setStatus]   = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errMsg, setErrMsg]   = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.course) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.course,
          message: `Course enquiry from homepage: ${form.course}`,
        }),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
    } catch {
      setErrMsg('Something went wrong. Please try again.');
      setStatus('error');
    }
  }

  return (
    <section className="section-padding bg-white border-b border-[#E5E7EB]">
      <div className="container-custom">

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">

          {/* Left: why points */}
          <div>
            <span className="section-label">Why MedFellow</span>
            <h2 className="section-title mt-1 mb-2">{heading || 'Built for practicing doctors'}</h2>
            <p className="section-subtitle mb-8">
              {subtitle || "India's only fellowship platform that lets you specialise while continuing to work — with real hospital training and internationally accredited outcomes."}
            </p>

            <div className="grid sm:grid-cols-2 gap-px bg-[#E5E7EB] border border-[#E5E7EB] rounded-lg overflow-hidden">
              {displayPoints.map((pt, i) => (
                <div key={i} className="bg-white p-5 hover:bg-[#FAFAFA] transition-colors">
                  <h3 className="text-[0.9375rem] font-semibold text-[#111827] mb-1">{pt.title}</h3>
                  <p className="text-[0.8125rem] text-[#6B7280] leading-relaxed">{pt.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: enquiry form */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-white border border-[#E5E7EB] rounded-2xl shadow-sm overflow-hidden">
              {/* Header */}
              <div className="px-6 py-5 bg-[#15401E]">
                <p className="text-white font-bold text-lg leading-snug">Get Free Counselling</p>
                <p className="text-white/70 text-sm mt-0.5">Talk to a program advisor today</p>
              </div>

              {status === 'success' ? (
                <div className="px-6 py-12 flex flex-col items-center text-center gap-3">
                  <CheckCircle className="w-12 h-12 text-[#15401E]" />
                  <p className="font-semibold text-[#111827] text-lg">Thank you, {form.name}!</p>
                  <p className="text-sm text-[#6B7280]">Our team will reach out to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#374151] mb-1.5 uppercase tracking-wide">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. John Smith"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full border border-[#D1D5DB] rounded-lg px-4 py-2.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#15401E] focus:ring-1 focus:ring-[#15401E] transition"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-[#374151] mb-1.5 uppercase tracking-wide">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="w-full border border-[#D1D5DB] rounded-lg px-4 py-2.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#15401E] focus:ring-1 focus:ring-[#15401E] transition"
                    />
                  </div>

                  {/* Course */}
                  <div>
                    <label className="block text-xs font-semibold text-[#374151] mb-1.5 uppercase tracking-wide">Course Interested</label>
                    <select
                      required
                      value={form.course}
                      onChange={e => setForm(f => ({ ...f, course: e.target.value }))}
                      className="w-full border border-[#D1D5DB] rounded-lg px-4 py-2.5 text-sm text-[#111827] bg-white focus:outline-none focus:border-[#15401E] focus:ring-1 focus:ring-[#15401E] transition appearance-none"
                    >
                      <option value="">Select a course…</option>
                      {COURSES.map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  {status === 'error' && (
                    <p className="text-xs text-red-500">{errMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex items-center justify-center gap-2 bg-[#15401E] hover:bg-[#0f2e14] text-white font-semibold py-3 rounded-lg text-sm transition disabled:opacity-60"
                  >
                    {status === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
                    {status === 'loading' ? 'Submitting…' : 'Request Free Counselling'}
                  </button>

                  <p className="text-[0.7rem] text-center text-[#9CA3AF]">
                    No spam. We respect your privacy.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

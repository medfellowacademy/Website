'use client';
import { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageSquarePlus } from 'lucide-react';

const COURSES = [
  'Fellowship in Emergency Medicine',
  'Fellowship in Clinical Cardiology',
  'Fellowship in Critical Care Medicine',
  'Fellowship in Diabetes Mellitus',
  'Fellowship in Gastroenterology',
  'Fellowship in Endocrinology',
  'Fellowship in Nephrology',
  'Fellowship in Gynecology & Obstetrics',
  'Fellowship in High-Risk Pregnancy',
  'Fellowship in Fetal Medicine',
  'Fellowship in Cosmetic Gynecology',
  'Fellowship in Reproductive Medicine',
  'Fellowship in Laparoscopy & Hysteroscopy',
  'Fellowship in Interventional Cardiology',
  'Fellowship in 2D Echocardiography',
  'Fellowship in Pediatric Echocardiography',
  'Fellowship in Interventional Radiology',
  'Fellowship in Urology',
  'Fellowship in Neurosurgery',
  'Fellowship in Spine Surgery',
  'Fellowship in Orthopedics',
  'Fellowship in Arthroscopy & Sports Medicine',
  'Fellowship in Minimal Access & Robotic Surgery',
  'Fellowship in General Surgery',
  'Fellowship in Cardiothoracic Surgery',
  'Fellowship in Maxillofacial & Oral Surgery',
  'Fellowship in Oral Implantology & Laser Dentistry',
  'Other / Not sure yet',
];

const inputCls =
  'w-full px-3.5 py-2.5 rounded-lg border border-[#D1D5DB] text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#15401E]/25 focus:border-[#15401E] bg-white transition-all';
const labelCls = 'block text-xs font-semibold text-[#374151] mb-1';

export default function EnquiryModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('open-enquiry-modal', handler);
    return () => window.removeEventListener('open-enquiry-modal', handler);
  }, []);
  const [form, setForm] = useState({ name: '', phone: '', email: '', course: '' });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  function update(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.email.trim() || !form.course) {
      setError('Please fill in all fields.');
      return;
    }
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: 'Course Enquiry',
          message: `Interested in: ${form.course}`,
        }),
      });
      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error ?? 'Submission failed');
      }
      setDone(true);
    } catch (err: any) {
      setError(err?.message ?? 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  function handleClose() {
    setOpen(false);
    setTimeout(() => {
      setDone(false);
      setError('');
      setForm({ name: '', phone: '', email: '', course: '' });
    }, 300);
  }

  return (
    <>
      {/* Floating trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-40 flex items-center gap-2 px-3 py-2.5 text-[0.8125rem] font-semibold text-white rounded-r-xl shadow-lg transition-all hover:pl-4"
        style={{ background: '#15401E', writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        aria-label="Open enquiry form"
      >
        <MessageSquarePlus className="w-4 h-4" style={{ writingMode: 'horizontal-tb' }} />
        <span style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}>Enquire Now</span>
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
        >
          {/* Modal */}
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#F3F4F6]" style={{ background: '#15401E' }}>
              <div>
                <h2 className="text-base font-bold text-white">Enquire Now</h2>
                <p className="text-xs text-white/70 mt-0.5">We'll get back to you within 24 hours</p>
              </div>
              <button
                onClick={handleClose}
                className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-5">
              {done ? (
                <div className="text-center py-6">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#e8f2ea' }}>
                    <CheckCircle2 className="w-7 h-7 text-[#15401E]" />
                  </div>
                  <h3 className="text-base font-bold text-[#111827] mb-1">Enquiry Received!</h3>
                  <p className="text-sm text-[#6B7280]">
                    Thank you, <span className="font-semibold text-[#111827]">{form.name}</span>. Our team will contact you shortly.
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-5 px-6 py-2 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    style={{ background: '#15401E' }}
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {error && (
                    <div className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                      {error}
                    </div>
                  )}

                  <div>
                    <label className={labelCls}>Full Name *</label>
                    <input
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      className={inputCls}
                      placeholder="Dr. Amit Sharma"
                    />
                  </div>

                  <div>
                    <label className={labelCls}>Phone Number *</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      className={inputCls}
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className={labelCls}>Email Address *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      className={inputCls}
                      placeholder="doctor@example.com"
                    />
                  </div>

                  <div>
                    <label className={labelCls}>Course Interested In *</label>
                    <select
                      value={form.course}
                      onChange={(e) => update('course', e.target.value)}
                      className={inputCls}
                    >
                      <option value="">Select a fellowship program…</option>
                      {COURSES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60 mt-1"
                    style={{ background: '#15401E' }}
                  >
                    <Send className="w-3.5 h-3.5" />
                    {submitting ? 'Submitting…' : 'Submit Enquiry'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

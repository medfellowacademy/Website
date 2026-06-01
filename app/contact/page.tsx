'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Send, CheckCircle2, MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight } from "lucide-react";

const PROGRAMS = [
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

const inputCls = 'w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-[0.9375rem] text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#15401E]/20 focus:border-[#15401E] bg-white transition-all';
const labelCls = 'block text-[0.8125rem] font-semibold text-[#374151] mb-1.5';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', program: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function update(field: string, value: string) {
    setFormData(f => ({ ...f, [field]: value }));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.program ? `Inquiry about ${formData.program}` : 'General Inquiry',
          message: formData.message || `Interested in: ${formData.program}`,
        }),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'Submission failed');
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#15401E] pt-16 pb-20">
        <div className="container-custom text-center">
          <span className="inline-block text-[0.6875rem] font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4"
            style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.80)' }}>
            Contact Us
          </span>
          <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-white mb-3 leading-tight">
            We'd love to hear from you
          </h1>
          <p className="text-[1rem] max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.72)' }}>
            Have questions about our fellowship programs? Our advisors are ready to help you find the right fit.
          </p>
        </div>
      </section>

      {/* Main content — overlaps hero */}
      <section className="container-custom -mt-8 pb-20">
        <div className="grid lg:grid-cols-[1fr_380px] gap-6 items-start">

          {/* Form card */}
          <div className="bg-white rounded-2xl shadow-lg border border-[#E5E7EB] overflow-hidden">
            <div className="px-6 py-5 border-b border-[#F3F4F6]">
              <h2 className="text-[1.0625rem] font-bold text-[#111827]">Send us a message</h2>
              <p className="text-[0.8125rem] text-[#6B7280] mt-0.5">We reply within 24 hours on business days</p>
            </div>

            <div className="p-6">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#e8f2ea' }}>
                    <CheckCircle2 className="w-8 h-8 text-[#15401E]" />
                  </div>
                  <h3 className="text-[1.125rem] font-bold text-[#111827] mb-2">Message Sent!</h3>
                  <p className="text-[0.9375rem] text-[#6B7280] max-w-xs mx-auto">
                    Thank you, <span className="font-semibold text-[#111827]">{formData.name}</span>. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', program: '', message: '' }); }}
                    className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    style={{ background: '#15401E' }}
                  >
                    Send another message <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3">{error}</div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>Full Name *</label>
                      <input type="text" required placeholder="Dr. Jane Smith" className={inputCls}
                        value={formData.name} onChange={e => update('name', e.target.value)} />
                    </div>
                    <div>
                      <label className={labelCls}>Phone Number *</label>
                      <input type="tel" required placeholder="+91 99850 44993" className={inputCls}
                        value={formData.phone} onChange={e => update('phone', e.target.value)} />
                    </div>
                  </div>

                  <div>
                    <label className={labelCls}>Email Address *</label>
                    <input type="email" required placeholder="you@example.com" className={inputCls}
                      value={formData.email} onChange={e => update('email', e.target.value)} />
                  </div>

                  <div>
                    <label className={labelCls}>Program of Interest</label>
                    <select className={inputCls} value={formData.program} onChange={e => update('program', e.target.value)}>
                      <option value="">Select a fellowship program…</option>
                      {PROGRAMS.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className={labelCls}>Message <span className="text-[#9CA3AF] font-normal">(optional)</span></label>
                    <textarea rows={4} placeholder="Tell us how we can help you…" className={`${inputCls} resize-none`}
                      value={formData.message} onChange={e => update('message', e.target.value)} />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-[0.9375rem] font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                    style={{ background: '#15401E' }}
                  >
                    <Send className="w-4 h-4" />
                    {submitting ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-4">

            {/* Contact info card */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] overflow-hidden">
              <div className="px-5 py-4 border-b border-[#F3F4F6]">
                <h2 className="text-[0.9375rem] font-bold text-[#111827]">Contact Information</h2>
              </div>
              <div className="divide-y divide-[#F3F4F6]">
                {[
                  { Icon: MapPin,  label: 'Address',  content: 'Flat No-307, Mahavir House, Basheer Bagh, Hyderabad – 500029, Telangana, India' },
                  { Icon: Phone,   label: 'Phone',    content: '+91 9985044993' },
                  { Icon: Mail,    label: 'Email',    content: 'info@medfellow.in' },
                ].map(({ Icon, label, content }) => (
                  <div key={label} className="flex items-start gap-3.5 px-5 py-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: '#e8f2ea' }}>
                      <Icon className="w-4 h-4 text-[#15401E]" />
                    </div>
                    <div>
                      <p className="text-[0.75rem] font-semibold text-[#9CA3AF] uppercase tracking-wide mb-0.5">{label}</p>
                      <p className="text-[0.875rem] text-[#374151] leading-relaxed">{content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office hours */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] overflow-hidden">
              <div className="flex items-center gap-2.5 px-5 py-4 border-b border-[#F3F4F6]">
                <Clock className="w-4 h-4 text-[#15401E]" />
                <h2 className="text-[0.9375rem] font-bold text-[#111827]">Office Hours</h2>
              </div>
              <div className="px-5 py-4 space-y-2.5">
                {[
                  { day: 'Monday – Friday', hours: '9:00 AM – 6:00 PM' },
                  { day: 'Saturday',        hours: '10:00 AM – 4:00 PM' },
                  { day: 'Sunday',          hours: 'Closed' },
                ].map((row) => (
                  <div key={row.day} className="flex items-center justify-between">
                    <span className="text-[0.875rem] text-[#6B7280]">{row.day}</span>
                    <span className={`text-[0.875rem] font-semibold ${row.hours === 'Closed' ? 'text-red-500' : 'text-[#111827]'}`}>{row.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919985044993"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 px-5 py-4 rounded-2xl border border-[#C6DFC9] hover:border-[#15401E] transition-all group"
              style={{ background: '#f0f9f1' }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: '#25D366' }}>
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[0.875rem] font-bold text-[#111827]">Chat on WhatsApp</p>
                <p className="text-[0.75rem] text-[#6B7280]">Typically replies within minutes</p>
              </div>
              <ArrowRight className="w-4 h-4 text-[#15401E] group-hover:translate-x-1 transition-transform" />
            </a>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

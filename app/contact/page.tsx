'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

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
          message: formData.message,
        }),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'Submission failed');
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', program: '', message: '' });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Page header */}
      <section className="border-b border-[#E5E7EB] py-10 md:py-14">
        <div className="container-custom">
          <span className="section-label">Contact</span>
          <h1 className="section-title mt-2 mb-3">Get in Touch</h1>
          <p className="section-subtitle">
            Have questions? We&apos;re here to help you start your fellowship journey.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10">

            {/* Contact Form */}
            <div>
              <h2 className="text-[1.0625rem] font-semibold text-[#111827] mb-5">Send us a Message</h2>

              {submitted ? (
                <div className="p-6 bg-[#e8f2ea] border border-[#C6DFC9] rounded-lg text-center">
                  <div className="text-2xl mb-2">✅</div>
                  <p className="font-semibold text-[#15401E] mb-1">Message sent!</p>
                  <p className="text-[0.875rem] text-[#374151]">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[0.8125rem] font-semibold text-[#374151] mb-1.5">Full Name *</label>
                    <input
                      type="text" required placeholder="Dr. Jane Smith"
                      className="field-input"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-[0.8125rem] font-semibold text-[#374151] mb-1.5">Email Address *</label>
                    <input
                      type="email" required placeholder="you@example.com"
                      className="field-input"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-[0.8125rem] font-semibold text-[#374151] mb-1.5">Phone Number *</label>
                    <input
                      type="tel" required placeholder="+91 99850 44993"
                      className="field-input"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-[0.8125rem] font-semibold text-[#374151] mb-1.5">Program of Interest</label>
                    <select
                      className="field-input"
                      value={formData.program}
                      onChange={(e) => setFormData({...formData, program: e.target.value})}
                    >
                      <option value="">Select a program</option>
                      <option value="arthroscopy">Arthroscopy and Arthroplasty</option>
                      <option value="gastro">Gastroenterology</option>
                      <option value="reproductive">Reproductive Medicine</option>
                      <option value="pain">Pain Management</option>
                      <option value="diabeto">Diabetology</option>
                      <option value="endo">Endocrinology</option>
                      <option value="rheum">Rheumatology</option>
                      <option value="neuro">Neurology</option>
                      <option value="radio">Radiology</option>
                      <option value="usg">Ultrasonography</option>
                      <option value="cardio">Interventional Cardiology</option>
                      <option value="ortho">Orthopedics</option>
                      <option value="gyn">Gynecology & Obstetrics</option>
                      <option value="surgery">General Surgery</option>
                      <option value="spine">Spine Surgery</option>
                      <option value="emergency">Emergency Medicine</option>
                      <option value="critical">Critical Care Medicine</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[0.8125rem] font-semibold text-[#374151] mb-1.5">Message</label>
                    <textarea
                      rows={4} placeholder="Tell us how we can help you..."
                      className="field-input resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <button type="submit" disabled={submitting} className="btn-primary w-full py-3 disabled:opacity-60">
                    {submitting ? 'Sending…' : 'Send Message'}
                  </button>
                  {error && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-[0.8125rem] text-center">{error}</div>
                  )}
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-[1.0625rem] font-semibold text-[#111827] mb-5">Contact Information</h2>
              <div className="space-y-4">
                {[
                  { icon: '📍', title: 'Address', body: 'Med Fellow Academy\n3-6-622 Flat No - 307, Mahavir house, Basheer bagh\nHyderabad - 500029, Telangana, India' },
                  { icon: '📞', title: 'Phone', body: '+91 9985044993\nMon–Fri: 9:00 AM – 6:00 PM' },
                  { icon: '✉️', title: 'Email', body: 'info@medfellow.in' },
                ].map((item, i) => (
                  <div key={i} className="card p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 bg-[#e8f2ea] rounded-md flex items-center justify-center text-base shrink-0">{item.icon}</div>
                      <div>
                        <h3 className="text-[0.875rem] font-semibold text-[#111827] mb-1">{item.title}</h3>
                        <p className="text-[0.8125rem] text-[#6B7280] whitespace-pre-line leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="card p-5">
                  <h3 className="text-[0.875rem] font-semibold text-[#111827] mb-3">Office Hours</h3>
                  <div className="space-y-2 text-[0.8125rem]">
                    {[
                      { day: 'Monday – Friday', hours: '9:00 AM – 6:00 PM' },
                      { day: 'Saturday', hours: '10:00 AM – 4:00 PM' },
                      { day: 'Sunday', hours: 'Closed' },
                    ].map((row, i) => (
                      <div key={i} className="flex justify-between">
                        <span className="text-[#6B7280]">{row.day}</span>
                        <span className="font-semibold text-[#111827]">{row.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

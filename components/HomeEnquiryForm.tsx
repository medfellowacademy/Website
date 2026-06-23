'use client';
import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function HomeEnquiryForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, subject: 'Homepage Enquiry' }),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json?.error || `Error ${res.status}: Please try again.`);
        return;
      }
      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error('Enquiry form error:', err);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-[#F8FAF8] py-16 border-b border-[#E5E7EB]">
      <div className="container-custom max-w-3xl mx-auto px-4 sm:px-6 md:px-8">

        <div className="text-center mb-10">
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title mt-1 mb-1.5">Have a question? We're here to help</h2>
          <p className="section-subtitle mx-auto">Fill in your details and our admissions team will get back to you within 24 hours.</p>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center justify-center gap-4 py-14 px-6 bg-white rounded-2xl border border-[#E5E7EB] shadow-sm">
            <div className="w-16 h-16 rounded-full bg-[#e8f2ea] flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-[#15401E]" />
            </div>
            <h3 className="text-xl font-bold text-[#111827]">Enquiry Received!</h3>
            <p className="text-[#6B7280] text-center max-w-sm">
              Thank you! Our admissions team will contact you within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-2 text-[0.875rem] text-[#15401E] font-semibold underline underline-offset-2"
            >
              Submit another enquiry
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6 sm:p-8 flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[0.8125rem] font-semibold text-[#374151] mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Dr. John Smith"
                  className="w-full px-4 py-3 text-[0.875rem] border border-[#D1D5DB] rounded-xl bg-white text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#15401E]/30 focus:border-[#15401E] transition"
                />
              </div>
              <div>
                <label className="block text-[0.8125rem] font-semibold text-[#374151] mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 text-[0.875rem] border border-[#D1D5DB] rounded-xl bg-white text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#15401E]/30 focus:border-[#15401E] transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-[0.8125rem] font-semibold text-[#374151] mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="doctor@example.com"
                className="w-full px-4 py-3 text-[0.875rem] border border-[#D1D5DB] rounded-xl bg-white text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#15401E]/30 focus:border-[#15401E] transition"
              />
            </div>

            <div>
              <label className="block text-[0.8125rem] font-semibold text-[#374151] mb-1.5">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Tell us which program you're interested in, or ask any question..."
                className="w-full px-4 py-3 text-[0.875rem] border border-[#D1D5DB] rounded-xl bg-white text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#15401E]/30 focus:border-[#15401E] transition resize-none"
              />
            </div>

            {error && (
              <p className="text-[0.8125rem] text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-2.5">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto sm:self-start bg-[#15401E] hover:bg-[#0f2e15] text-white text-[0.9375rem] font-semibold px-8 py-3 rounded-xl transition-colors disabled:opacity-60"
            >
              <Send className="w-4 h-4" />
              {submitting ? 'Sending...' : 'Send Enquiry'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

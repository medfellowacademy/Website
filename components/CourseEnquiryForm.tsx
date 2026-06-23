'use client';
import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function CourseEnquiryForm({ courseName }: { courseName?: string }) {
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
        body: JSON.stringify({
          ...form,
          subject: courseName ? `Course Enquiry: ${courseName}` : 'Course Enquiry',
        }),
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
    <div className="border border-[#E5E7EB] rounded-xl overflow-hidden mt-2">
      {/* Header */}
      <div className="bg-[#15401E] px-4 py-3.5">
        <p className="text-white font-semibold text-sm">Enquire About This Program</p>
        <p className="text-[#a3c4a8] text-xs mt-0.5">Get a callback from our admissions team</p>
      </div>

      {submitted ? (
        <div className="flex flex-col items-center justify-center gap-3 py-8 px-4 bg-[#FAFAFA]">
          <div className="w-12 h-12 rounded-full bg-[#e8f2ea] flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-[#15401E]" />
          </div>
          <p className="text-sm font-semibold text-[#111827] text-center">Enquiry Sent!</p>
          <p className="text-xs text-[#6B7280] text-center">Our team will contact you within 24 hours.</p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs text-[#15401E] font-medium underline underline-offset-2 mt-1"
          >
            Send another enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-4 flex flex-col gap-3">
          <div>
            <label className="block text-xs font-semibold text-[#374151] mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Dr. John Smith"
              className="w-full px-3 py-2.5 text-sm border border-[#D1D5DB] rounded-lg bg-white text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#15401E]/30 focus:border-[#15401E] transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#374151] mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="+91 98765 43210"
              className="w-full px-3 py-2.5 text-sm border border-[#D1D5DB] rounded-lg bg-white text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#15401E]/30 focus:border-[#15401E] transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#374151] mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="doctor@example.com"
              className="w-full px-3 py-2.5 text-sm border border-[#D1D5DB] rounded-lg bg-white text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#15401E]/30 focus:border-[#15401E] transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#374151] mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={3}
              placeholder="Any questions about this program?"
              className="w-full px-3 py-2.5 text-sm border border-[#D1D5DB] rounded-lg bg-white text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#15401E]/30 focus:border-[#15401E] transition resize-none"
            />
          </div>

          {error && (
            <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center justify-center gap-2 w-full bg-[#15401E] hover:bg-[#0f2e15] text-white text-sm font-semibold px-4 py-3 rounded-lg transition-colors disabled:opacity-60"
          >
            <Send className="w-3.5 h-3.5" />
            {submitting ? 'Sending...' : 'Send Enquiry'}
          </button>
        </form>
      )}
    </div>
  );
}

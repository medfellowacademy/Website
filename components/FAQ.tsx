'use client';
import { useState } from 'react';
import { ChevronDown, Send, CheckCircle } from 'lucide-react';
import { analytics } from '@/lib/analytics';

interface FaqItem { q: string; a: string; }

const FAQS: FaqItem[] = [
  { q: 'Who is eligible to apply?', a: 'Most programs are open to MBBS graduates and above. Super-specialty programs require a relevant postgraduate qualification (MD/MS/DNB). Specific eligibility is listed on each program page.' },
  { q: 'How long are the programs?', a: 'All fellowship programs run for 12 months, structured for working professionals — fully online, hybrid (online + periodic rotations), or full offline onsite training.' },
  { q: 'Are certificates internationally recognised?', a: 'Yes. Certificates are ACTD-accredited and recognised by partner hospitals and academic institutions globally in 40+ countries.' },
  { q: 'Can I continue working while enrolled?', a: 'Absolutely. Online modules are asynchronous and self-paced. Live sessions are on weekends. Hospital rotations are planned in advance around your schedule.' },
  { q: 'What income growth do fellows typically see?', a: 'Alumni report an average 156% income increase within 18 months. Emergency Medicine fellows often move from Rs 60-80K/month to Rs 2.5-4L/month as specialists.' },
  { q: 'What is the fee and are there EMI options?', a: 'Online programs start from Rs 1.5 lakhs. Easy EMI options are available through our financial partners. Contact admissions for a detailed fee breakdown.' },
  { q: 'How does hospital-based training work?', a: 'Fellows attend supervised clinical rotations at super speciality hospitals and Super Speciality Hospital — in OTs, ICUs and specialty departments with senior faculty mentors.' },
  { q: 'Is there placement support after completion?', a: 'Yes. We provide dedicated placement assistance — resume building, interview prep and introductions to our hospital and corporate network. Our alumni spans 500+ specialists.' },
  { q: 'How do I apply?', a: 'Click Apply Now, fill in your details, select your program and submit documents. The application takes under 10 minutes. Our committee responds within 3-5 working days.' },
];

export default function FAQ({ faqs }: { faqs?: FaqItem[] }) {
  const items = faqs && faqs.length > 0 ? faqs : FAQS;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
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
        body: JSON.stringify({ ...form, subject: 'FAQ Enquiry' }),
      });
      if (!res.ok) throw new Error('Failed to send');
      setSubmitted(true);
      setForm({ name: '', phone: '', email: '', message: '' });
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  const toggle = (i: number) => {
    const opening = openIndex !== i;
    setOpenIndex(opening ? i : null);
    if (opening) analytics.faqOpen(items[i].q, i);
  };

  return (
    <section className="section-padding bg-white border-b border-[#E5E7EB]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container-custom max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <span className="section-label">FAQ</span>
          <h2 className="section-title mt-1 mb-1.5">Frequently asked questions</h2>
          <p className="section-subtitle mx-auto">Everything you need to know before taking the next step.</p>
        </div>

        <div className="divide-y divide-[#F3F4F6] border border-[#E5E7EB] rounded-lg overflow-hidden">
          {items.map((faq, i) => (
            <div key={i} className="bg-white">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#FAFAFA] transition-colors"
              >
                <span
                  className="text-[0.9375rem] font-medium pr-4 leading-snug"
                  style={{ color: openIndex === i ? '#15401E' : '#111827' }}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
                  style={{ color: openIndex === i ? '#15401E' : '#9CA3AF' }}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4 text-[0.875rem] text-[#4B5563] leading-relaxed border-t border-[#F3F4F6] pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 border border-[#E5E7EB] rounded-lg overflow-hidden">
          <div className="px-5 py-4 bg-[#15401E]">
            <p className="text-white font-semibold text-[0.9375rem]">Still have questions?</p>
            <p className="text-[#a3c4a8] text-[0.8125rem] mt-0.5">Send us an enquiry and we'll get back to you within 24 hours.</p>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-3 py-10 px-5 bg-[#FAFAFA]">
              <CheckCircle className="w-10 h-10 text-[#15401E]" />
              <p className="text-[0.9375rem] font-semibold text-[#111827]">Enquiry sent successfully!</p>
              <p className="text-[0.8125rem] text-[#6B7280] text-center">Our team will reach out to you within 24 hours.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 text-[0.8125rem] text-[#15401E] font-medium underline"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-5 bg-[#FAFAFA] flex flex-col gap-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[0.8125rem] font-medium text-[#374151] mb-1">Full Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Dr. John Smith"
                    className="w-full px-3 py-2.5 text-[0.875rem] border border-[#D1D5DB] rounded-md bg-white text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#15401E] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-[0.8125rem] font-medium text-[#374151] mb-1">Phone Number <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2.5 text-[0.875rem] border border-[#D1D5DB] rounded-md bg-white text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#15401E] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[0.8125rem] font-medium text-[#374151] mb-1">Email Address <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="doctor@example.com"
                  className="w-full px-3 py-2.5 text-[0.875rem] border border-[#D1D5DB] rounded-md bg-white text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#15401E] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-[0.8125rem] font-medium text-[#374151] mb-1">Your Message <span className="text-red-500">*</span></label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us which program you're interested in or ask your question..."
                  className="w-full px-3 py-2.5 text-[0.875rem] border border-[#D1D5DB] rounded-md bg-white text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#15401E] focus:border-transparent resize-none"
                />
              </div>

              {error && <p className="text-[0.8125rem] text-red-600">{error}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 bg-[#15401E] hover:bg-[#0f2e15] text-white text-[0.875rem] font-semibold px-5 py-2.5 rounded-md transition-colors disabled:opacity-60"
              >
                <Send className="w-4 h-4" />
                {submitting ? 'Sending...' : 'Send Enquiry'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

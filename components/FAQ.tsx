'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';
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

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 py-4 px-5 bg-[#FAFAFA] border border-[#E5E7EB] rounded-lg">
          <div>
            <p className="text-[0.9375rem] font-medium text-[#111827]">Still have questions?</p>
            <p className="text-[0.8125rem] text-[#6B7280]">Mon–Sat, 9am–6pm IST</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-[#15401E] hover:text-[#0f2e15] transition-colors"
          >
            Contact our team <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

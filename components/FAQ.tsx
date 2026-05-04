'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'Who is eligible to apply for a MedFellow fellowship?',
    a: 'Most programs are open to MBBS graduates and above. Super-specialty programs require a relevant postgraduate qualification (MD/MS/DNB). Specific eligibility criteria are listed on each program page.',
  },
  {
    q: 'How long do the fellowship programs run?',
    a: 'All fellowship programs are 12 months in duration. They are structured in flexible formats — fully online, hybrid (online + periodic hospital rotations), and full offline (onsite hospital training).',
  },
  {
    q: 'Are these programs recognised internationally?',
    a: 'Yes. Upon completion, you receive an internationally accredited fellowship certificate. Our programs are designed in alignment with global clinical standards and are recognised by partner hospitals and academic institutions.',
  },
  {
    q: 'Can I continue my practice while enrolled?',
    a: 'Absolutely — most fellows enroll while actively practicing. Our online modules are asynchronous and self-paced, with scheduled live sessions on weekends. Hospital rotations are planned in advance.',
  },
  {
    q: 'What is the fee structure and are there EMI options?',
    a: 'Fees vary by program and training format. Online programs start from ₹1.5 lakhs. We offer easy EMI options through our financial partners. Contact our admissions team for a detailed fee breakdown.',
  },
  {
    q: 'How does the hospital-based training work?',
    a: 'We have partnerships with premier hospitals including AIIMS, Apollo, Fortis, and Max Healthcare. Fellows attend supervised clinical rotations in OTs, ICUs, and specialty departments with senior faculty mentors.',
  },
  {
    q: 'Is there career placement support after completion?',
    a: 'Yes. We provide dedicated placement assistance including resume building, interview preparation, and introductions to our hospital and corporate partners. Our alumni network spans 500+ specialists.',
  },
  {
    q: 'How do I apply and how long does the process take?',
    a: 'Click "Apply Now", fill in your details, select your program, and submit your documents. The application takes under 10 minutes. Our academic committee reviews applications and responds within 3–5 working days.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-8 sm:py-10 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-medium mb-2 px-4" style={{ color: '#1B4F72' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm px-4" style={{ color: '#5D6D7E' }}>
            Everything you need to know before taking the next step.
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-2">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-lg overflow-hidden"
              style={{ border: '0.5px solid #BFC9CA' }}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 text-left"
              >
                <span className="text-xs sm:text-sm font-medium pr-3 sm:pr-4" style={{ color: '#1B4F72' }}>
                  {faq.q}
                </span>
                <ChevronDown 
                  className={`w-4 h-4 flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                  style={{ color: openIndex === i ? '#2E86C1' : '#BFC9CA' }}
                />
              </button>

              {openIndex === i && (
                <div 
                  className="px-4 sm:px-5 pb-3 sm:pb-4 text-xs sm:text-sm"
                  style={{ color: '#5D6D7E', lineHeight: 1.7, borderTop: '0.5px solid #BFC9CA', paddingTop: '0.75rem' }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs sm:text-sm mt-5 sm:mt-6 px-4" style={{ color: '#5D6D7E' }}>
          Still have questions?{' '}
          <a href="/contact" className="font-medium hover:underline" style={{ color: '#2E86C1' }}>
            Contact our team
          </a>
        </p>
      </div>
    </section>
  );
}

'use client';
import Link from 'next/link';
import { BookOpen, CreditCard, Award, Briefcase, ArrowRight } from 'lucide-react';

const STEPS = [
  { step: '01', icon: BookOpen,  title: 'Browse programs',    desc: 'Explore full syllabi, faculty profiles and hospital partners before committing.' },
  { step: '02', icon: CreditCard,title: 'Enroll & learn',     desc: 'Secure your seat, get instant access and study at your own pace with live weekend sessions.' },
  { step: '03', icon: Award,     title: 'Complete & certify', desc: 'Finish rotations and receive your internationally accredited fellowship certificate.' },
  { step: '04', icon: Briefcase, title: 'Get placed',         desc: 'Leverage our placement network at 20+ hospitals and our 500+ alumni community.' },
];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-white border-b border-[#E5E7EB]">
      <div className="container-custom">

        <div className="mb-8">
          <span className="section-label">Your journey</span>
          <h2 className="section-title mt-1 mb-1.5">How it works</h2>
          <p className="section-subtitle">A clear four-step path from application to career placement.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="bg-white border border-[#E5E7EB] rounded-lg p-5 hover:border-[#C6DFC9] hover:shadow-sm transition-all duration-150"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-md bg-[#e8f2ea] flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#15401E]" />
                  </div>
                  <span className="text-[0.75rem] font-bold text-[#9CA3AF] tracking-wider">STEP {s.step}</span>
                </div>
                <h3 className="text-[0.9375rem] font-semibold text-[#111827] mb-1.5">{s.title}</h3>
                <p className="text-[0.8125rem] text-[#6B7280] leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/apply"
            className="btn-primary"
          >
            Apply in 10 minutes <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

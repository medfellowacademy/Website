'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star } from 'lucide-react';
import { analytics } from '@/lib/analytics';

interface HeroProps {
  heading?: string;
  subheading?: string;
  stats?: { value: string; label: string }[];
}

export default function Hero(_props: HeroProps = {}) {
  return (
    <section className="bg-white border-b border-[#E5E7EB]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] xl:grid-cols-[1fr_520px] gap-0 lg:min-h-[400px]">

          {/* ── Left: Content ── */}
          <div className="flex flex-col justify-center py-6 lg:py-8 lg:pr-10 order-2 lg:order-1">

            {/* Rating pill */}
            <div className="flex items-center gap-2 mb-3">
              <span className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </span>
              <span className="text-[0.8125rem] font-medium text-[#374151]">4.9 · Trusted by 500+ doctors</span>
            </div>

            {/* Heading */}
            <h1 className="text-[clamp(1.5rem,3.5vw,2.375rem)] font-bold text-[#111827] leading-[1.2] tracking-tight mb-4">
              MedFellow Academy<br />
              <span className="text-[#15401E]">Where Doctors Evolve</span>
            </h1>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 mb-5">
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#15401E] text-white text-sm font-semibold rounded-md hover:bg-[#0f2e15] transition-colors"
                onClick={() => analytics.ctaClick('hero_explore_programs', '/programs', 'hero')}
              >
                Explore programs <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#15401E] text-sm font-semibold rounded-md border border-[#C6DFC9] hover:border-[#15401E] transition-colors"
                onClick={() => analytics.applyClick('hero_apply_now')}
              >
                Apply for June 2026
              </Link>
            </div>

            {/* Social proof micro-bar */}
            <div className="pt-6 border-t border-[#F3F4F6] flex flex-wrap gap-x-8 gap-y-2">
              {[
                { v: '60+', l: 'Specialties' },
                { v: '500+', l: 'Doctors trained' },
                { v: '20+', l: 'Hospital partners' },
                { v: '98%', l: 'Placement rate' },
              ].map(({ v, l }) => (
                <div key={l} className="flex items-baseline gap-1.5">
                  <span className="text-[1.125rem] font-bold text-[#111827]">{v}</span>
                  <span className="text-[0.8125rem] text-[#9CA3AF]">{l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Image ── */}
          <div className="relative order-1 lg:order-2 flex items-end justify-center bg-white min-h-[180px] lg:min-h-0 overflow-hidden">
            <Image
              src="/hero-team.png"
              alt="MedFellow Academy — Expert Medical Team"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-contain object-bottom"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

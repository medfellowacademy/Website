'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star } from 'lucide-react';
import { analytics } from '@/lib/analytics';

interface HeroProps {
  heading?: string;
  subheading?: string;
  stats?: { value: string; label: string }[];
  ratingText?: string;
  enrollText?: string;
}

const DEFAULT_STATS = [
  { value: '60+',  label: 'Specialties' },
  { value: '500+', label: 'Doctors trained' },
  { value: '20+',  label: 'Hospital partners' },
  { value: '98%',  label: 'Placement rate' },
];

export default function Hero({
  heading,
  subheading,
  stats,
  ratingText,
  enrollText,
}: HeroProps = {}) {
  const displayStats = (stats && stats.length > 0) ? stats : DEFAULT_STATS;
  const displayHeading = heading || 'MedFellow Academy\nWhere Doctors Evolve';
  const [headingLine1, headingLine2] = displayHeading.includes('\n')
    ? displayHeading.split('\n')
    : [displayHeading, ''];

  return (
    <section className="bg-white border-b border-[#E5E7EB] overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] xl:grid-cols-[1fr_520px] gap-0 lg:min-h-[400px]">

          {/* ── Left: Content — always first on mobile ── */}
          <div className="flex flex-col justify-center pt-8 pb-6 lg:py-8 lg:pr-10">

            {/* Rating pill */}
            <div className="flex items-center gap-2 mb-3">
              <span className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </span>
              <span className="text-[0.8125rem] font-medium text-[#374151]">{ratingText || '4.9 · Trusted by 500+ doctors'}</span>
            </div>

            {/* Heading */}
            <h1 className="text-[clamp(1.625rem,5vw,2.375rem)] font-bold text-[#111827] leading-[1.2] tracking-tight mb-4">
              {headingLine1}<br />
              <span className="text-[#15401E]">{headingLine2 || 'Where Doctors Evolve'}</span>
            </h1>

            {subheading && (
              <p className="text-[0.9375rem] text-[#6B7280] mb-4 max-w-lg">{subheading}</p>
            )}

            {/* CTA */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-6">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#15401E] text-white text-sm font-semibold rounded-md hover:bg-[#0f2e15] transition-colors"
                onClick={() => analytics.ctaClick('hero_explore_programs', '/courses', 'hero')}
              >
                Explore programs <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#15401E] text-sm font-semibold rounded-md border border-[#C6DFC9] hover:border-[#15401E] transition-colors"
                onClick={() => analytics.applyClick('hero_apply_now')}
              >
                {enrollText || 'Enroll for June 2026'}
              </Link>
            </div>

            {/* Social proof micro-bar */}
            <div className="pt-5 border-t border-[#F3F4F6] grid grid-cols-2 sm:flex sm:flex-wrap gap-x-6 gap-y-3">
              {displayStats.map(({ value, label }) => (
                <div key={label} className="flex items-baseline gap-1.5">
                  <span className="text-[1.125rem] font-bold text-[#111827]">{value}</span>
                  <span className="text-[0.8125rem] text-[#9CA3AF]">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Image — below content on mobile ── */}
          <div className="flex items-end justify-center bg-white h-56 sm:h-72 lg:h-auto">
            <Image
              src="/hero-team.png"
              alt="MedFellow Academy — Expert Medical Team"
              width={520}
              height={420}
              priority
              className="w-full h-full object-contain object-bottom"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

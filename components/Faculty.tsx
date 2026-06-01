'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { type FacultyMember, FACULTY_DATA, toFacultySlug } from '@/lib/faculty-data';

export type { FacultyMember };
export { FACULTY_DATA, toFacultySlug };

export default function Faculty({ members }: { members?: FacultyMember[] }) {
  const data = members && members.length > 0 ? members : FACULTY_DATA;

  return (
    <section className="section-padding bg-white border-b border-[#E5E7EB]">
      <div className="container-custom">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
          <div>
            <span className="section-label">Our Faculty</span>
            <h2 className="section-title mt-1">Learn from practicing specialists</h2>
          </div>
          <Link
            href="/faculty"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#15401E] hover:text-[#0f2e15] transition-colors flex-shrink-0"
          >
            View all faculty <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Cards — full image, name + title only */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {data.map((m, i) => {
            const slug = toFacultySlug(m.name);
            return (
              <Link
                key={i}
                href={`/faculty/${slug}`}
                className="group block bg-white border border-[#E5E7EB] rounded-xl overflow-hidden hover:border-[#C6DFC9] hover:shadow-md transition-all duration-200"
              >
                {/* Full image */}
                <div className="relative w-full bg-[#F9FAFB]" style={{ aspectRatio: '3/4' }}>
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    className="object-contain object-bottom group-hover:scale-[1.02] transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 280px"
                  />
                  <span
                    className="absolute top-2.5 left-2.5 px-2 py-0.5 text-[10px] font-bold rounded-md text-white"
                    style={{ background: m.accentColor }}
                  >
                    {m.specialty}
                  </span>
                </div>

                {/* Name + title + arrow */}
                <div className="p-3.5">
                  <h3 className="text-[0.9rem] font-bold text-[#111827] leading-tight mb-0.5 group-hover:text-[#15401E] transition-colors">
                    {m.name}
                  </h3>
                  <p className="text-[0.75rem] text-[#6B7280] leading-snug mb-2">{m.title}</p>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: m.accentLight, color: m.accentColor }}
                    >
                      {m.fellowsTrained} fellows
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#9CA3AF] group-hover:text-[#15401E] group-hover:translate-x-0.5 transition-all" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 px-5 py-4 bg-[#FAFAFA] border border-[#E5E7EB] rounded-lg">
          <p className="text-[0.9375rem] text-[#374151]">
            <span className="font-semibold text-[#111827]">Every fellow gets a dedicated faculty mentor</span> — assigned on Day 1.
          </p>
          <Link
            href="/faculty"
            className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-[#15401E] hover:text-[#0f2e15] flex-shrink-0 transition-colors"
          >
            Meet all faculty <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

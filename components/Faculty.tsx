'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface FacultyMember {
  name: string;
  title: string;
  credentials: string;
  experience: string;
  specialty: string;
  bio: string;
  quote: string;
  specialties: string[];
  studentRating: number;
  fellowsTrained: string;
  highlights: string[];
  photo: string;
  accentColor: string;
  accentLight: string;
}

export const FACULTY_DATA: FacultyMember[] = [
  {
    name: 'Dr. Kiran Vadapalli',
    title: 'Faculty – Critical Care Medicine',
    credentials: 'DM Critical Care Medicine',
    experience: '10+ Years in Critical Care Medicine',
    specialty: 'Critical Care',
    bio: 'Specialist in critical care with extensive ICU experience, training fellows in ventilator management and hemodynamic monitoring.',
    quote: 'Mastering critical care means mastering every second.',
    specialties: ['ICU Management', 'Ventilator Care', 'Hemodynamics'],
    studentRating: 4.9,
    fellowsTrained: '100+',
    highlights: ['DM Critical Care Medicine', 'ICU Specialist'],
    photo: '/faculty/dr-kiran-vadapalli.jpg',
    accentColor: '#15401E',
    accentLight: '#e8f2ea',
  },
  {
    name: 'Dr. Supriya Kumari',
    title: 'Consultant – IVF & Infertility',
    credentials: 'MBBS, MD (OBG), DNB (OBG), DM Reproductive Medicine',
    experience: 'DM Reproductive Medicine from AIIMS New Delhi',
    specialty: 'Reproductive Medicine',
    bio: 'DM in Reproductive Medicine from AIIMS New Delhi. Expert in IVF, ICSI, and advanced infertility treatments guiding fellows through hands-on ART procedures.',
    quote: 'Every IVF cycle is a story of hope and science.',
    specialties: ['IVF & ICSI', 'Infertility', 'Fetal Medicine'],
    studentRating: 4.9,
    fellowsTrained: '80+',
    highlights: ['DM from AIIMS New Delhi', 'ART Specialist'],
    photo: '/faculty/dr-supriya-kumari.jpg',
    accentColor: '#BE185D',
    accentLight: '#FCE7F3',
  },
  {
    name: 'Dr. MD Munner Ahmed',
    title: 'Faculty – Internal Medicine',
    credentials: 'MBBS, MD Internal Medicine',
    experience: 'Specialist in Internal Medicine & Emergency Medicine',
    specialty: 'Internal Medicine',
    bio: 'Experienced internist with expertise spanning family medicine and emergency care, bringing real-world clinical insight to fellowship training.',
    quote: 'Internal medicine is the foundation of all clinical practice.',
    specialties: ['Internal Medicine', 'Emergency Medicine', 'Family Medicine'],
    studentRating: 4.8,
    fellowsTrained: '120+',
    highlights: ['MD Internal Medicine', 'Emergency Specialist'],
    photo: '/faculty/dr-md-munner-ahmed.jpg',
    accentColor: '#1E40AF',
    accentLight: '#DBEAFE',
  },
  {
    name: 'Dr. Mounika Murari',
    title: 'Faculty – Oral & Maxillofacial Surgery',
    credentials: 'BDS, MDS (Oral & Maxillofacial Surgery)',
    experience: 'Specialist in Oral & Maxillofacial Surgery',
    specialty: 'Oral Surgery',
    bio: 'Specialist in oral and maxillofacial surgery with expertise in facial trauma, orthognathic surgery and oral oncology, guiding fellows through advanced surgical techniques.',
    quote: 'Precision in surgery begins with thorough understanding of anatomy.',
    specialties: ['Oral Surgery', 'Facial Trauma', 'Dental Surgery'],
    studentRating: 4.9,
    fellowsTrained: '50+',
    highlights: ['MDS Oral & Maxillofacial Surgery', 'Surgical Specialist'],
    photo: '/faculty/dr-mounika-murari.jpg',
    accentColor: '#0F766E',
    accentLight: '#CCFBF1',
  },
];

export function toFacultySlug(name: string) {
  return name
    .toLowerCase()
    .replace(/\./g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

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
                  {/* Specialty badge */}
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

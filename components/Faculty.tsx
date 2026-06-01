'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react';

interface FacultyMember {
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

const FACULTY_DATA: FacultyMember[] = [
  {
    name: 'Dr. Kiran Vadapalli',
    title: 'Faculty – Critical Care Medicine',
    credentials: 'DM Critical Care Medicine',
    experience: '10+ Years',
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
    experience: '10+ Years',
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
    experience: '10+ Years',
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
    experience: '8+ Years',
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
          <p className="text-[0.875rem] text-[#6B7280] max-w-xs sm:text-right">
            Senior specialists with proven clinical expertise.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.map((m, i) => (
            <div
              key={i}
              className="bg-white border border-[#E5E7EB] rounded-lg overflow-hidden hover:border-[#D1D5DB] hover:shadow-sm transition-all duration-150"
            >
              {/* Photo */}
              <div className="relative h-56 overflow-hidden bg-[#F3F4F6]">
                <Image
                  src={m.photo}
                  alt={m.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 280px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span
                  className="absolute top-2.5 left-2.5 px-2 py-0.5 text-[11px] font-semibold rounded"
                  style={{ background: m.accentColor, color: '#fff' }}
                >
                  {m.specialty}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-[0.9375rem] font-semibold text-[#111827] leading-tight">{m.name}</h3>
                  <div className="flex items-center gap-0.5 flex-shrink-0">
                    <Star className="w-3 h-3 fill-[#F59E0B] text-[#F59E0B]" />
                    <span className="text-[0.75rem] font-semibold text-[#374151]">{m.studentRating}</span>
                  </div>
                </div>
                <p className="text-[0.75rem] text-[#6B7280] mb-0.5">{m.title}</p>
                <p className="text-[0.75rem] text-[#9CA3AF] mb-3">{m.credentials} · {m.experience}</p>

                <p className="text-[0.8125rem] text-[#4B5563] leading-relaxed mb-3 line-clamp-2">{m.bio}</p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {m.specialties.map((s, j) => (
                    <span
                      key={j}
                      className="text-[11px] font-medium px-2 py-0.5 rounded"
                      style={{ background: m.accentLight, color: m.accentColor }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="pt-2.5 border-t border-[#F3F4F6] flex items-center justify-between">
                  <span className="text-[0.75rem] text-[#9CA3AF]">{m.fellowsTrained} fellows</span>
                  <span className="text-[0.75rem] font-medium" style={{ color: m.accentColor }}>{m.highlights[0]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 px-5 py-4 bg-[#FAFAFA] border border-[#E5E7EB] rounded-lg">
          <p className="text-[0.9375rem] text-[#374151]">
            <span className="font-semibold text-[#111827]">Every fellow gets a dedicated faculty mentor</span> — assigned on Day 1.
          </p>
          <Link
            href="/programs"
            className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-[#15401E] hover:text-[#0f2e15] flex-shrink-0 transition-colors"
          >
            Browse programs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

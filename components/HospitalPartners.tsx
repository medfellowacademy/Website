'use client';
import { motion } from 'framer-motion';

const HOSPITALS = [
  'Super Speciality Hospital',
  'Super Speciality Hospital',
  'Super Speciality Hospital',
  'Super Speciality Hospital',
  'Super Speciality Hospital',
  'Super Speciality Hospital',
  'Narayana Health',
  'Super Speciality Hospital',
  'KIMS Hospitals',
  'Super Speciality Hospital',
  'Columbia Asia',
  'Amrita Hospitals',
];

// Duplicate for seamless loop
const DOUBLED = [...HOSPITALS, ...HOSPITALS];

function HospitalBadge({ name }: { name: string }) {
  return (
    <div className="flex-shrink-0 px-6 py-3 bg-white rounded-full border border-gray-200 mx-3 hover:border-[#2c5282] hover:shadow-sm transition-all duration-200">
      <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export default function HospitalPartners() {
  return (
    <section className="py-16 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p className="text-center text-xs font-semibold text-gray-500 uppercase tracking-widest">
          Clinical Training at Premier Institutions
        </p>
      </div>

      {/* Marquee track */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex marquee-track">
          {DOUBLED.map((name, i) => (
            <HospitalBadge key={i} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, GraduationCap, ArrowRight, Star, Sparkles } from 'lucide-react';
import { getProgramImage } from '@/lib/course-images';

export interface FeaturedProgram {
  name: string;
  duration: string;
  eligibility: string;
  description: string;
  highlights: string[];
  icon: string;
  image: string;
  onlinePrice: number;
  month11_1: number;
  month10_2?: number;
  month9_3?: number;
  month6_6?: number;
  month12Offline?: number;
  isPopular?: boolean;
  isNew?: boolean;
  slug?: string;
}

const DEFAULT_PROGRAMS: FeaturedProgram[] = [
  { name: "Fellowship in Emergency Medicine", slug: "fellowship-in-emergency-medicine", duration: "12 Months", eligibility: "MBBS + 2 yrs", description: "Advanced emergency care, trauma management and critical decision-making.", highlights: ["ICU Rotations", "Trauma Management", "Toxicology"], icon: "🚑", image: getProgramImage("fellowship-in-emergency-medicine"), onlinePrice: 160000, month11_1: 180000, isPopular: true },
  { name: "Fellowship in Clinical Cardiology", slug: "fellowship-in-clinical-cardiology", duration: "12 Months", eligibility: "MD Medicine / DNB", description: "Cardiovascular disease management, ECG and echo diagnostics.", highlights: ["ECG Interpretation", "Echocardiography", "Cardiac Emergencies"], icon: "❤️", image: getProgramImage("fellowship-in-clinical-cardiology"), onlinePrice: 160000, month11_1: 190000, isPopular: true },
  { name: "Fellowship in Gastroenterology", slug: "fellowship-in-gastroenterology", duration: "12 Months", eligibility: "MD Medicine / DNB", description: "Diagnostic and therapeutic GI procedures including endoscopy and ERCP.", highlights: ["Endoscopy", "Colonoscopy", "ERCP"], icon: "🔬", image: getProgramImage("fellowship-in-gastroenterology"), onlinePrice: 180000, month11_1: 195000, isPopular: true },
  { name: "Fellowship in Critical Care Medicine", slug: "fellowship-in-critical-care-medicine", duration: "12 Months", eligibility: "MD / DNB Medicine", description: "ICU management of critically ill patients with ventilator and hemodynamics training.", highlights: ["Ventilator Management", "Hemodynamics", "POCUS"], icon: "🏥", image: getProgramImage("fellowship-in-critical-care-medicine"), onlinePrice: 150000, month11_1: 180000 },
  { name: "Fellowship in Endocrinology", slug: "fellowship-in-endocrinology", duration: "12 Months", eligibility: "MD Medicine / DNB", description: "Comprehensive hormone disorder and metabolic disease management.", highlights: ["Thyroid Disorders", "Pituitary Disorders", "Bone Health"], icon: "⚕️", image: getProgramImage("fellowship-in-endocrinology"), onlinePrice: 180000, month11_1: 210000, isNew: true },
  { name: "Fellowship in Reproductive Medicine", slug: "fellowship-in-reproductive-medicine", duration: "12 Months", eligibility: "MD / MS Obs & Gyn", description: "Infertility management and assisted reproductive techniques.", highlights: ["IVF", "ICSI", "Fertility Preservation"], icon: "👶", image: getProgramImage("fellowship-in-reproductive-medicine"), onlinePrice: 160000, month11_1: 210000, isNew: true },
  { name: "Fellowship in Nephrology", slug: "fellowship-in-nephrology", duration: "12 Months", eligibility: "MD Medicine / DNB", description: "Kidney diseases, dialysis management and transplant medicine.", highlights: ["Dialysis", "Kidney Disorders", "Transplant Medicine"], icon: "🫘", image: getProgramImage("fellowship-in-nephrology"), onlinePrice: 160000, month11_1: 195000 },
  { name: "Fellowship in Gynecology & Obstetrics", slug: "fellowship-in-gynecology-obstetrics", duration: "12 Months", eligibility: "MS / MD Obs & Gyn", description: "High-risk obstetrics and advanced gynecological surgical procedures.", highlights: ["High-Risk Pregnancy", "Laparoscopic Surgery", "Fetal Medicine"], icon: "🤰", image: getProgramImage("fellowship-in-gynecology-obstetrics"), onlinePrice: 145000, month11_1: 190000, isPopular: true },
  { name: "Fellowship in Arthroscopy & Sports Medicine", slug: "fellowship-in-arthroscopy-sports-medicine", duration: "12 Months", eligibility: "MS Orthopedics / DNB", description: "Sports injuries, arthroscopy and arthroplasty with surgical competency.", highlights: ["Sports Medicine", "Knee & Shoulder", "Arthroplasty"], icon: "🦴", image: getProgramImage("fellowship-in-arthroscopy-sports-medicine"), onlinePrice: 180000, month11_1: 210000, isPopular: true },
];

function ProgramCard({ program }: { program: FeaturedProgram }) {
  const slug = program.slug || program.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const priceL = (program.onlinePrice / 100000).toFixed(1);

  return (
    <Link
      href={`/programs/${slug}`}
      className="group flex flex-col rounded-xl overflow-hidden border border-gray-100 hover:border-[#C6DFC9] hover:shadow-md transition-all duration-200 bg-white"
    >
      {/* Image area — full image, no crop */}
      <div className="relative w-full overflow-hidden bg-[#f1f5f2]" style={{ aspectRatio: '16/10' }}>
        <Image
          src={program.image}
          alt={program.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain transition-transform duration-300 group-hover:scale-105"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-1.5">
          {program.isPopular && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-semibold rounded bg-[#15401E] text-white shadow-sm">
              <Star className="w-2.5 h-2.5 fill-current" /> Popular
            </span>
          )}
          {program.isNew && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-semibold rounded bg-white text-[#15401E] shadow-sm border border-[#C6DFC9]">
              <Sparkles className="w-2.5 h-2.5" /> New
            </span>
          )}
        </div>
        {/* Price badge */}
        <div className="absolute bottom-3 right-3">
          <span className="text-[0.8125rem] font-bold text-white bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md">₹{priceL}L+</span>
        </div>
      </div>

      {/* Text content */}
      <div className="flex flex-col gap-2 px-4 py-3.5">
        <h3 className="text-[0.9375rem] font-semibold leading-snug line-clamp-2" style={{ color: '#FF6B00' }}>
          {program.name}
        </h3>

        {/* Duration + Eligibility */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 text-[11px] text-[#6B7280]">
            <Clock className="w-3 h-3" />{program.duration}
          </span>
          <span className="text-[#D1D5DB] text-xs">·</span>
          <span className="inline-flex items-center gap-1 text-[11px] text-[#6B7280]">
            <GraduationCap className="w-3 h-3" />{program.eligibility}
          </span>
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1.5">
          {program.highlights.slice(0, 3).map((h, i) => (
            <span key={i} className="text-[10px] px-2 py-0.5 bg-[#F3F4F6] text-[#374151] rounded border border-[#E5E7EB]">{h}</span>
          ))}
        </div>

        {/* View details */}
        <div className="flex items-center justify-end pt-0.5 border-t border-gray-50 mt-0.5">
          <span className="inline-flex items-center gap-1 text-[0.75rem] font-semibold text-[#15401E] group-hover:gap-2 transition-all">
            View details <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function FellowshipPrograms({ programs: propPrograms }: { programs?: FeaturedProgram[] }) {
  const programs = propPrograms && propPrograms.length > 0 ? propPrograms : DEFAULT_PROGRAMS;
  const featured = programs.slice(0, 9);

  return (
    <section id="programs" className="section-padding bg-white">
      <div className="container-custom">

        {/* Header */}
        <div className="mb-8">
          <span className="section-label">Fellowship Programs</span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mt-1">
            <div>
              <h2 className="section-title">Popular Specializations</h2>
              <p className="section-subtitle mt-1.5">12-month programs designed for practicing doctors — online, hybrid, and offline formats.</p>
            </div>
            <Link
              href="/courses"
              className="flex-shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-[#15401E] hover:text-[#0f2e15] transition-colors"
            >
              All {programs.length} programs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((program, i) => (
            <ProgramCard key={i} program={program} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 py-6 px-6 bg-[#FAFAFA] border border-[#E5E7EB] rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-[0.9375rem] font-semibold text-[#111827]">Not sure which fellowship to choose?</p>
            <p className="text-[0.8125rem] text-[#6B7280] mt-0.5">Our advisors help you find the right fit — free consultation.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link href="/contact" className="btn-outline text-sm">Talk to an advisor</Link>
            <Link href="/courses" className="btn-primary text-sm">
              Browse all programs <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

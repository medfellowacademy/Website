"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import { PROGRAM_IMAGES, DEFAULT_PROGRAM_IMAGE } from "@/lib/course-images";

export interface ProgramCard {
  name: string;
  slug: string;
  category?: string;
  icon: string;
  duration: string;
  eligibility: string;
  description: string;
  highlights: string[];
  image?: string;
  onlinePrice?: number | null;
}

const SLUG_CATEGORIES: Record<string, string> = {
  "fellowship-in-emergency-medicine": "Critical Care & Emergency",
  "fellowship-in-critical-care-medicine": "Critical Care & Emergency",
  "fellowship-in-diabetes-mellitus": "Medical Specialties",
  "fellowship-in-gynecology-obstetrics": "Surgical Specialties",
  "fellowship-in-high-risk-pregnancy": "Surgical Specialties",
  "fellowship-in-fetal-medicine": "Surgical Specialties",
  "fellowship-in-cosmetic-gynecology": "Reproductive Medicine",
  "fellowship-in-laparoscopy-hysteroscopy": "Surgical Specialties",
  "fellowship-in-reproductive-medicine": "Reproductive Medicine",
  "fellowship-in-maxillofacial-oral-surgery": "Surgical Specialties",
  "fellowship-in-oral-implantology-laser-dentistry": "Surgical Specialties",
  "fellowship-in-urology": "Surgical Specialties",
  "fellowship-in-neurosurgery": "Surgical Specialties",
  "fellowship-in-cardiothoracic-surgery": "Surgical Specialties",
  "fellowship-in-general-surgery-1-year": "Surgical Specialties",
  "fellowship-in-minimal-access-robotic-surgery": "Surgical Specialties",
  "fellowship-in-spine-surgery": "Surgical Specialties",
  "fellowship-in-orthopedics": "Surgical Specialties",
  "fellowship-in-arthroscopy": "Surgical Specialties",
  "fellowship-in-arthroscopy-and-arthroplasty": "Surgical Specialties",
  "fellowship-in-interventional-cardiology": "Interventional & Diagnostic",
  "fellowship-in-pediatric-echocardiography": "Interventional & Diagnostic",
  "fellowship-in-2d-echocardiography": "Interventional & Diagnostic",
  "fellowship-in-interventional-radiology": "Interventional & Diagnostic",
};

const POPULAR_SLUGS = new Set([
  "fellowship-in-emergency-medicine",
  "fellowship-in-critical-care-medicine",
  "fellowship-in-interventional-cardiology",
  "fellowship-in-diabetes-mellitus",
]);

function getCategory(slug: string): string {
  return SLUG_CATEGORIES[slug] ?? "Medical Specialties";
}

const COURSES_PER_PAGE = 9;
const CATEGORIES = [
  "All",
  "Critical Care & Emergency",
  "Medical Specialties",
  "Surgical Specialties",
  "Interventional & Diagnostic",
  "Reproductive Medicine",
];

export default function ProgramsClient({ programs }: { programs: ProgramCard[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const enriched = programs.map((p) => ({
    ...p,
    category: p.category ?? getCategory(p.slug),
    image: p.image ?? PROGRAM_IMAGES[p.slug] ?? DEFAULT_PROGRAM_IMAGE,
  }));

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return enriched.filter((p) => {
      const catOk = selectedCategory === "All" || p.category === selectedCategory;
      const searchOk =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        (p.category ?? "").toLowerCase().includes(q);
      return catOk && searchOk;
    });
  }, [enriched, searchQuery, selectedCategory]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / COURSES_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const startIdx = (safePage - 1) * COURSES_PER_PAGE;
  const visible = filtered.slice(startIdx, startIdx + COURSES_PER_PAGE);

  const goToPage = (p: number) => {
    setCurrentPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container-custom max-w-screen-2xl">
      {/* Category pills — horizontally scrollable on mobile */}
      <div className="flex gap-2 mb-6 sm:mb-8 overflow-x-auto scrollbar-hide pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-start">
        {CATEGORIES.map((cat) => {
          const count =
            cat === "All"
              ? enriched.length
              : enriched.filter((p) => p.category === cat).length;
          const active = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentPage(1);
              }}
              className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                active
                  ? "bg-[#15401E] text-white border-[#15401E]"
                  : "bg-white text-gray-700 border-gray-200 hover:border-[#15401E] hover:text-[#15401E]"
              }`}
            >
              {cat}
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
                  active ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Search */}
      <div className="mb-6 md:mb-8">
        <div className="relative max-w-xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search by course name, specialty, or keyword…"
            className="w-full rounded-md border border-[#D1D5DB] bg-white pl-10 pr-10 py-2.5 text-[0.875rem] text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#15401E]/20 focus:border-[#15401E] transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        <p className="mt-2 text-xs text-text-secondary">
          Showing {filtered.length === 0 ? 0 : startIdx + 1}–
          {Math.min(startIdx + COURSES_PER_PAGE, filtered.length)} of{" "}
          {filtered.length} courses
        </p>
      </div>

      {/* Grid — text-only cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {visible.map((program) => {
          const isPopular = POPULAR_SLUGS.has(program.slug);
          return (
            <Link
              key={program.slug}
              href={`/courses/${program.slug}`}
              className="program-card overflow-hidden group"
            >
              {/* Image — full image, no crop */}
              <div className="relative w-full overflow-hidden bg-[#f1f5f2]" style={{ aspectRatio: '16/10' }}>
                <Image
                  src={program.image!}
                  alt={program.name}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {isPopular && (
                  <span className="absolute top-2.5 left-2.5 badge-popular">Popular</span>
                )}
                <span className="absolute bottom-2.5 right-3 text-white text-[11px] font-semibold bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded">
                  {program.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col grow">
                {/* Title row */}
                <div className="flex items-start gap-2 mb-2">
                  <span className="text-xl leading-none shrink-0 mt-0.5">{program.icon}</span>
                  <h3 className="text-[0.9375rem] font-semibold leading-snug line-clamp-2" style={{ color: '#FF6B00' }}>
                    {program.name}
                  </h3>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#6B7280] mb-3">
                  <span>{program.eligibility}</span>
                  <span className="text-[#D1D5DB]">·</span>
                  <span>{program.duration}</span>
                  {program.onlinePrice && (
                    <>
                      <span className="text-[#D1D5DB]">·</span>
                      <span className="font-medium text-[#15401E]">
                        From ₹{(program.onlinePrice / 100000).toFixed(2)}L
                      </span>
                    </>
                  )}
                </div>

                {/* Tag chips */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {program.highlights.slice(0, 3).map((h, idx) => (
                    <span
                      key={idx}
                      className="text-[0.6875rem] px-2 py-0.5 bg-[#F3F4F6] text-[#374151] rounded border border-[#E5E7EB]"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-auto flex items-center justify-between pt-3 border-t border-[#F3F4F6]">
                  <span className="text-xs text-[#15401E] font-medium">View Course</span>
                  <ArrowRight className="w-4 h-4 text-[#15401E]" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="mt-6 rounded-xl border border-dashed border-gray-300 bg-white p-6 text-center text-text-secondary">
          No courses found for &quot;{searchQuery}&quot;.
        </div>
      )}

      {filtered.length > 0 && totalPages > 1 && (
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => goToPage(Math.max(1, safePage - 1))}
            disabled={safePage === 1}
            className="px-3 py-2 rounded-lg border border-gray-300 bg-white text-sm font-medium disabled:opacity-50"
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => goToPage(p)}
              className={`px-3 py-2 rounded-lg text-sm font-semibold border ${
                p === safePage
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-primary border-gray-300"
              }`}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => goToPage(Math.min(totalPages, safePage + 1))}
            disabled={safePage === totalPages}
            className="px-3 py-2 rounded-lg border border-gray-300 bg-white text-sm font-medium disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      {/* CTA */}
      <div className="mt-10 md:mt-14 text-center bg-[#15401E] rounded-lg p-8 md:p-12 text-white">
        <h3 className="text-[1.25rem] md:text-[1.5rem] font-bold mb-2" style={{ color: '#FFFFFF' }}>
          Ready to Start Your Fellowship Journey?
        </h3>
        <p className="text-[0.9rem] text-white/70 mb-6 max-w-xl mx-auto">
          Join hundreds of doctors who have advanced their careers through our
          fellowship courses.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/apply"
            className="px-6 py-3 bg-white text-[#15401E] rounded-md font-semibold text-[0.875rem] hover:bg-[#f0f9f1] transition-colors"
          >
            Apply Now
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 bg-transparent border border-white/50 text-white rounded-md font-semibold text-[0.875rem] hover:bg-white/10 transition-colors"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}

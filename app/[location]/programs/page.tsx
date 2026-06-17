'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useMemo, useState, use, useEffect } from 'react';
import { Search, X, ArrowRight, Star, ChevronDown, Check, Globe } from 'lucide-react';
import { notFound } from 'next/navigation';

interface CountryPage {
  slug: string;
  country_name: string;
  is_published: boolean;
  hero_badge: string;
  hero_heading: string;
  hero_subheading: string;
  hero_checks: string[];
  stats: { value: string; label: string }[];
  why_heading: string;
  why_points: { icon: string; title: string; desc: string }[];
  featured_specialties: { number: string; icon: string; name: string; slug: string; description: string; demandDriver: string }[];
  testimonials: { quote: string; author: string; role: string; rating: number }[];
  faqs: { question: string; answer: string }[];
  meta_title: string;
  meta_description: string;
}

const ALL_PROGRAMS = [
  { name: 'Fellowship in Emergency Medicine',        slug: 'fellowship-in-emergency-medicine',         category: 'Critical Care & Emergency',    icon: '🚑', duration: '12 Months', eligibility: 'MBBS',                   onlinePrice: 150000, highlights: ['ICU Rotations', 'Trauma Management', 'Toxicology'] },
  { name: 'Fellowship in Critical Care Medicine',    slug: 'fellowship-in-critical-care-medicine',     category: 'Critical Care & Emergency',    icon: '🏥', duration: '12 Months', eligibility: 'MD/DNB Medicine',        onlinePrice: 150000, highlights: ['Ventilator Management', 'Hemodynamics', 'POCUS'] },
  { name: 'Fellowship in Internal Medicine',         slug: 'fellowship-in-internal-medicine',          category: 'Medical Specialties',          icon: '⚕️', duration: '12 Months', eligibility: 'MBBS',                   onlinePrice: 175000, highlights: ['Critical Care', 'Clinical Diagnosis', 'Patient Mgmt'] },
  { name: 'Fellowship in Clinical Cardiology',       slug: 'fellowship-in-clinical-cardiology',        category: 'Medical Specialties',          icon: '❤️', duration: '12 Months', eligibility: 'MBBS/MD',                onlinePrice: 160000, highlights: ['ECG', 'Echo', 'Cardiac Emergencies'] },
  { name: 'Fellowship in Endocrinology',             slug: 'fellowship-in-endocrinology',              category: 'Medical Specialties',          icon: '⚕️', duration: '12 Months', eligibility: 'MD Medicine/DNB',        onlinePrice: 180000, highlights: ['Thyroid', 'Pituitary', 'Bone Health'] },
  { name: 'Fellowship in Gastroenterology',          slug: 'fellowship-in-gastroenterology',           category: 'Medical Specialties',          icon: '🔬', duration: '12 Months', eligibility: 'MD/DNB Medicine',        onlinePrice: 180000, highlights: ['Endoscopy', 'Colonoscopy', 'ERCP'] },
  { name: 'Fellowship in Nephrology',                slug: 'fellowship-in-nephrology',                 category: 'Medical Specialties',          icon: '🫘', duration: '12 Months', eligibility: 'MD/DNB Medicine',        onlinePrice: 180000, highlights: ['Dialysis', 'Kidney Disorders', 'Transplant'] },
  { name: 'Fellowship in Pediatrics',                slug: 'fellowship-in-pediatrics',                 category: 'Medical Specialties',          icon: '👶', duration: '12 Months', eligibility: 'MD Pediatrics/DNB',      onlinePrice: 150000, highlights: ['Neonatal Care', 'Pediatric Emergencies', 'Development'] },
  { name: 'Fellowship in Neonatology',               slug: 'fellowship-in-neonatology',                category: 'Medical Specialties',          icon: '🍼', duration: '12 Months', eligibility: 'MD/DNB Pediatrics',      onlinePrice: 190000, highlights: ['NICU Training', 'Case-based', 'Neonatal Emergency'] },
  { name: 'Fellowship in Dermatology',               slug: 'fellowship-in-dermatology',                category: 'Medical Specialties',          icon: '✨', duration: '12 Months', eligibility: 'MBBS',                   onlinePrice: 160000, highlights: ['Cosmetic Procedures', 'Laser Therapy', 'Skin Surgery'] },
  { name: 'Fellowship in Reproductive Medicine',     slug: 'fellowship-in-reproductive-medicine',      category: 'Reproductive Medicine',        icon: '🧬', duration: '12 Months', eligibility: 'MD/MS/DNB/DGO',          onlinePrice: 160000, highlights: ['IVF', 'ICSI', 'Fertility Preservation'] },
  { name: 'Fellowship in Gynecology & Obstetrics',   slug: 'fellowship-in-gynecology-obstetrics',      category: 'Surgical Specialties',         icon: '🤰', duration: '12 Months', eligibility: 'MS/MD Obs & Gyn',        onlinePrice: 145000, highlights: ['High-Risk Pregnancy', 'Laparoscopy', 'Fetal Medicine'] },
  { name: 'Fellowship in Orthopaedics',              slug: 'fellowship-in-orthopedics',                category: 'Surgical Specialties',         icon: '🦴', duration: '12 Months', eligibility: 'MS/DNB Orthopaedics',    onlinePrice: 160000, highlights: ['Trauma Surgery', 'Sports Medicine', 'Fractures'] },
  { name: 'Fellowship in Arthroscopy & Arthroplasty', slug: 'fellowship-in-arthroscopy-and-arthroplasty', category: 'Surgical Specialties',    icon: '🦴', duration: '12 Months', eligibility: 'MS/DNB Ortho',           onlinePrice: 180000, highlights: ['Arthroscopy', 'Joint Replacement', 'Sports'] },
  { name: 'Fellowship in General Surgery',           slug: 'fellowship-in-general-surgery-1-year',     category: 'Surgical Specialties',         icon: '🩺', duration: '12 Months', eligibility: 'MS/DNB Surgery',         onlinePrice: 200000, highlights: ['Core Surgery', 'Trauma', 'Minimal Access'] },
  { name: 'Fellowship in Minimal Access & Robotic Surgery', slug: 'fellowship-in-minimal-access-robotic-surgery', category: 'Surgical Specialties', icon: '🤖', duration: '12 Months', eligibility: 'MS/DNB Surgery', onlinePrice: 200000, highlights: ['Laparoscopy', 'Robotics', 'ERAS'] },
  { name: 'Fellowship in Urology',                   slug: 'fellowship-in-urology',                    category: 'Surgical Specialties',         icon: '🧪', duration: '12 Months', eligibility: 'MBBS/MS/DNB',            onlinePrice: 170000, highlights: ['Uro-Oncology', 'Endoscopy', 'Reconstruction'] },
  { name: 'Fellowship in Clinical Cardiology',       slug: 'fellowship-in-2d-echocardiography',        category: 'Interventional & Diagnostic',  icon: '🫀', duration: '12 Months', eligibility: 'MBBS/MD/DNB',            onlinePrice: 160000, highlights: ['2D Echo', 'Doppler', 'TEE'] },
  { name: 'Fellowship in Interventional Cardiology', slug: 'fellowship-in-interventional-cardiology',  category: 'Interventional & Diagnostic',  icon: '❤️', duration: '24 Months', eligibility: 'DM/DNB Cardiology',      onlinePrice: 220000, highlights: ['Angioplasty', 'Device Implant', 'Structural'] },
  { name: 'Fellowship in Radiology',                 slug: 'fellowship-in-radiology',                  category: 'Medical Specialties',          icon: '🩻', duration: '12 Months', eligibility: 'MBBS/MD/DNB',            onlinePrice: 170000, highlights: ['Cross-sectional', 'Reporting', 'Radiation Safety'] },
  { name: 'Fellowship in Medical Oncology',          slug: 'fellowship-in-medical-oncology',           category: 'Medical Specialties',          icon: '🎗️', duration: '12 Months', eligibility: 'MD/DNB Medicine',        onlinePrice: 180000, highlights: ['Systemic Therapy', 'Precision Oncology', 'Tumor Board'] },
  { name: 'Fellowship in Cosmetic & Aesthetic Medicine', slug: 'fellowship-in-cosmetic-aesthetic-medicine', category: 'Medical Specialties',   icon: '💆', duration: '12 Months', eligibility: 'MBBS',                   onlinePrice: 150000, highlights: ['Facial Aesthetics', 'Injectables', 'Laser & IPL'] },
  { name: 'Fellowship in Family Medicine',           slug: 'fellowship-in-family-medicine',            category: 'Medical Specialties',          icon: '👨‍👩‍👧‍👦', duration: '12 Months', eligibility: 'MBBS',             onlinePrice: 150000, highlights: ['Primary Care', 'Preventive Medicine', 'Community'] },
  { name: 'Fellowship in Clinical Neurology',        slug: 'fellowship-in-clinical-neurology',         category: 'Medical Specialties',          icon: '🧠', duration: '12 Months', eligibility: 'MBBS/MD/DNB',            onlinePrice: 180000, highlights: ['Stroke', 'Epilepsy', 'Neurodegeneration'] },
  { name: 'Fellowship in Psychiatric Medicine',      slug: 'fellowship-in-psychiatric-medicine',       category: 'Medical Specialties',          icon: '🧠', duration: '12 Months', eligibility: 'MBBS/MD/DNB',            onlinePrice: 150000, highlights: ['Emergency Psychiatry', 'Psychopharmacology', 'Ethics'] },
  { name: 'Fellowship in Pain Management',           slug: 'fellowship-in-pain-management',            category: 'Medical Specialties',          icon: '💉', duration: '12 Months', eligibility: 'MBBS/MD/DNB',            onlinePrice: 150000, highlights: ['Pain Medicine', 'Interventional', 'Palliative'] },
  { name: 'Fellowship in Rheumatology',              slug: 'fellowship-in-rheumatology',               category: 'Medical Specialties',          icon: '🩺', duration: '12 Months', eligibility: 'MBBS/MD/DNB',            onlinePrice: 180000, highlights: ['Rheumatic Diseases', 'Immunology', 'Procedural'] },
];

const CATEGORIES = ['All', 'Critical Care & Emergency', 'Medical Specialties', 'Surgical Specialties', 'Interventional & Diagnostic', 'Reproductive Medicine'];

export default function LocationProgramsPage({ params }: { params: Promise<{ location: string }> }) {
  const { location } = use(params);
  const slug = location.toLowerCase();

  const [cmsPage, setCmsPage] = useState<CountryPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const COURSES_PER_PAGE = 9;

  useEffect(() => {
    fetch(`/api/country-page?slug=${slug}`)
      .then(r => r.json())
      .then(j => { setCmsPage(j.data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [slug]);

  const filteredPrograms = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return ALL_PROGRAMS.filter(p => {
      const catMatch = selectedCategory === 'All' || p.category === selectedCategory;
      const searchMatch = !q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
      return catMatch && searchMatch;
    });
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredPrograms.length / COURSES_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const start = (safePage - 1) * COURSES_PER_PAGE;
  const visible = filteredPrograms.slice(start, start + COURSES_PER_PAGE);

  if (!loading && !cmsPage) return notFound();
  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-gray-400 text-sm">Loading…</div>
    </div>
  );

  const cp = cmsPage!;
  const headingLines = cp.hero_heading.split('\n');

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #15401E 0%, #0f2e15 100%)' }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-white/20" />
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-white/10" />
        </div>
        <div className="max-w-5xl mx-auto px-5 py-16 md:py-24 relative z-10 text-center">
          {cp.hero_badge && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(255,255,255,0.15)' }}>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-medium text-white">{cp.hero_badge}</span>
            </div>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {headingLines.map((line, i) => <span key={i}>{line}{i < headingLines.length - 1 && <br />}</span>)}
          </h1>
          {cp.hero_subheading && (
            <p className="text-white/85 text-lg mb-8 max-w-2xl mx-auto">{cp.hero_subheading}</p>
          )}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Link href="/apply" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white rounded-lg font-semibold text-lg hover:opacity-90 transition-all shadow-lg" style={{ color: '#15401E' }}>
              Apply Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-all">
              Schedule Consultation
            </Link>
          </div>
          {cp.hero_checks.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-white/85">
              {cp.hero_checks.map((c, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      {cp.stats.length > 0 && (
        <section className="py-8 bg-[#e8f2ea]">
          <div className="max-w-5xl mx-auto px-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {cp.stats.map((s, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold" style={{ color: '#15401E' }}>{s.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Section */}
      {cp.why_points.length > 0 && (
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-5">
            {cp.why_heading && <h2 className="text-3xl font-bold text-center mb-10" style={{ color: '#15401E' }}>{cp.why_heading}</h2>}
            <div className="grid md:grid-cols-3 gap-6">
              {cp.why_points.map((p, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                  {p.icon && <div className="text-4xl mb-4">{p.icon}</div>}
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#15401E' }}>{p.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Specialties */}
      {cp.featured_specialties.length > 0 && (
        <section className="py-16 bg-[#F2F3F4]">
          <div className="max-w-5xl mx-auto px-5">
            <h2 className="text-3xl font-bold text-center mb-2" style={{ color: '#15401E' }}>Top Fellowship Programs for {cp.country_name} Doctors</h2>
            <p className="text-center text-gray-500 mb-10">High-demand specialties aligned with {cp.country_name} healthcare career growth</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {cp.featured_specialties.map((s, i) => (
                <Link key={i} href={`/${slug}/programs/${s.slug}`} className="group bg-white p-6 rounded-2xl hover:shadow-xl transition-all border border-gray-100">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="text-4xl">{s.icon}</div>
                    <div className="text-2xl font-bold text-gray-100">{s.number}</div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-[#15401E] transition-colors" style={{ color: '#15401E' }}>{s.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{s.description}</p>
                  {s.demandDriver && (
                    <p className="text-xs text-[#15401E] bg-[#e8f2ea] rounded-lg px-3 py-2">{s.demandDriver}</p>
                  )}
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-sm text-[#15401E] font-medium">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Programs */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#15401E' }}>All Fellowship Programs</h2>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-6">
            {CATEGORIES.map(cat => {
              const count = cat === 'All' ? ALL_PROGRAMS.length : ALL_PROGRAMS.filter(p => p.category === cat).length;
              const active = selectedCategory === cat;
              return (
                <button key={cat} onClick={() => { setSelectedCategory(cat); setCurrentPage(1); }}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border transition-all ${active ? 'bg-[#15401E] text-white border-[#15401E]' : 'bg-white text-gray-700 border-gray-200 hover:border-[#15401E] hover:text-[#15401E]'}`}>
                  {cat}
                  <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${active ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>{count}</span>
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="relative max-w-md mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input value={searchQuery} onChange={e => { setSearchQuery(e.target.value); setCurrentPage(1); }}
              placeholder="Search programs…"
              className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#15401E]/20 focus:border-[#15401E]" />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {visible.map((p, i) => (
              <Link key={i} href={`/${slug}/programs/${p.slug}`} className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all">
                <div className="p-4">
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-2xl">{p.icon}</span>
                    <h3 className="text-sm font-semibold leading-snug" style={{ color: '#FF6B00' }}>{p.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-3">
                    <span>{p.eligibility}</span>
                    <span>·</span>
                    <span>{p.duration}</span>
                    {p.onlinePrice && <span className="text-[#15401E] font-medium">From ₹{(p.onlinePrice / 100000).toFixed(1)}L</span>}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {p.highlights.slice(0, 3).map((h, j) => (
                      <span key={j} className="text-[0.6875rem] px-2 py-0.5 bg-gray-100 text-gray-600 rounded border border-gray-200">{h}</span>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-[#15401E] font-medium">
                    View Program <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex flex-wrap gap-2 justify-center">
              <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={safePage === 1} className="px-3 py-2 border border-gray-200 rounded-lg text-sm disabled:opacity-40">Prev</button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                <button key={p} onClick={() => setCurrentPage(p)} className={`px-3 py-2 rounded-lg text-sm font-semibold border ${p === safePage ? 'bg-[#15401E] text-white border-[#15401E]' : 'bg-white border-gray-200'}`}>{p}</button>
              ))}
              <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={safePage === totalPages} className="px-3 py-2 border border-gray-200 rounded-lg text-sm disabled:opacity-40">Next</button>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      {cp.testimonials.length > 0 && (
        <section className="py-16 bg-[#e8f2ea]">
          <div className="max-w-5xl mx-auto px-5">
            <h2 className="text-3xl font-bold text-center mb-10" style={{ color: '#15401E' }}>What {cp.country_name} Doctors Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {cp.testimonials.map((t, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: t.rating ?? 5 }).map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="text-sm text-gray-600 italic mb-4">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ background: '#15401E' }}>
                      {t.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold" style={{ color: '#15401E' }}>{t.author}</div>
                      <div className="text-xs text-gray-500">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {cp.faqs.length > 0 && (
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-5">
            <h2 className="text-3xl font-bold text-center mb-10" style={{ color: '#15401E' }}>Frequently Asked Questions</h2>
            <div className="space-y-3">
              {cp.faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full p-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <span className="font-medium pr-4" style={{ color: '#15401E' }}>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} style={{ color: '#15401E' }} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5">
                      <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-5">
          <div className="p-10 rounded-3xl text-center text-white" style={{ background: 'linear-gradient(135deg, #15401E, #0f2e15)' }}>
            <Globe className="w-10 h-10 mx-auto mb-4 opacity-60" />
            <h2 className="text-2xl font-bold mb-3">Ready to Start Your Fellowship?</h2>
            <p className="text-white/80 mb-6">Get your admissions decision within 72 hours.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/apply" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white rounded-lg font-semibold hover:opacity-90 transition-all" style={{ color: '#15401E' }}>
                Apply Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all">
                Talk to Advisor
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

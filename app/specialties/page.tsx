'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Search, ArrowRight } from 'lucide-react';

export default function SpecialtiesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const specialties = [
    {
      id: 'emergency-medicine',
      name: 'Fellowship in Emergency Medicine',
      slug: '/emergency-medicine',
      category: 'Critical Care & Emergency',
      icon: '🚑',
      tagline: 'Master Trauma Care & Critical Emergencies',
      description: 'Build practical expertise in trauma care, critical emergencies, resuscitation, and rapid patient management through industry-focused clinical training.',
      duration: '12 Months',
      eligibility: 'MBBS, MD/MS, General Practitioners',
      highlights: ['Trauma & Emergency Care', 'Airway Management', 'Resuscitation Protocols', 'Critical Patient Stabilization'],
      color: 'from-red-600 to-orange-500',
      bgColor: 'from-red-50 to-orange-50'
    },
    {
      id: 'reproductive-medicine',
      name: 'Fellowship in Reproductive Medicine',
      slug: '/reproductive-medicine',
      category: 'Reproductive Medicine',
      icon: '🧬',
      tagline: 'Master IVF & Fertility Management',
      description: 'Master the science and practice of infertility management, IVF procedures, and assisted reproductive techniques with expert-led training.',
      duration: '12 Months',
      eligibility: 'MBBS, MD/MS OBGYN',
      highlights: ['IVF Procedures', 'Assisted Reproduction', 'Infertility Management', 'Advanced Reproductive Techniques'],
      color: 'from-pink-600 to-purple-500',
      bgColor: 'from-pink-50 to-purple-50'
    },
    {
      id: 'endocrinology',
      name: 'Fellowship in Endocrinology',
      slug: '#',
      category: 'Medical Specialties',
      icon: '🩺',
      tagline: 'Specialize in Hormonal & Metabolic Disorders',
      description: 'Advanced training in endocrine disorders, diabetes management, thyroid diseases, and metabolic complications.',
      duration: '12 Months',
      eligibility: 'MD Medicine/DNB',
      highlights: ['Diabetes Management', 'Thyroid Disorders', 'Hormone Therapy', 'Metabolic Diseases'],
      color: 'from-blue-600 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      comingSoon: true
    },
    {
      id: 'gastroenterology',
      name: 'Fellowship in Gastroenterology',
      slug: '#',
      category: 'Medical Specialties',
      icon: '🔬',
      tagline: 'Master GI Procedures & Digestive Disorders',
      description: 'Expert training in endoscopy, colonoscopy, hepatology, and management of gastrointestinal disorders.',
      duration: '12 Months',
      eligibility: 'MD Medicine/DNB',
      highlights: ['Endoscopy', 'Colonoscopy', 'Hepatology', 'GI Procedures'],
      color: 'from-green-600 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      comingSoon: true
    },
    {
      id: 'nephrology',
      name: 'Fellowship in Nephrology',
      slug: '#',
      category: 'Medical Specialties',
      icon: '💧',
      tagline: 'Specialize in Kidney & Renal Diseases',
      description: 'Comprehensive training in renal disorders, dialysis management, transplantation, and acute kidney injury.',
      duration: '12 Months',
      eligibility: 'MD Medicine/DNB',
      highlights: ['Dialysis Management', 'Kidney Transplant', 'Renal Disorders', 'Acute Kidney Injury'],
      color: 'from-cyan-600 to-blue-500',
      bgColor: 'from-cyan-50 to-blue-50',
      comingSoon: true
    },
    {
      id: 'neonatology',
      name: 'Fellowship in Neonatology',
      slug: '#',
      category: 'Pediatric Specialties',
      icon: '👶',
      tagline: 'Advanced Neonatal & Premature Infant Care',
      description: 'Expert training in NICU management, premature infant care, resuscitation, and neonatal complications.',
      duration: '12 Months',
      eligibility: 'MD Pediatrics/DNB',
      highlights: ['NICU Management', 'Premature Care', 'Resuscitation', 'Neonatal Emergencies'],
      color: 'from-yellow-600 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50',
      comingSoon: true
    },
    {
      id: 'pediatrics',
      name: 'Fellowship in Pediatrics',
      slug: '#',
      category: 'Pediatric Specialties',
      icon: '🏥',
      tagline: 'Comprehensive Pediatric Care & Training',
      description: 'Advanced training in pediatric management, child development, immunization, and common pediatric disorders.',
      duration: '12 Months',
      eligibility: 'MBBS, MD/MS',
      highlights: ['Child Development', 'Immunization', 'Pediatric Procedures', 'Common Pediatric Diseases'],
      color: 'from-indigo-600 to-purple-500',
      bgColor: 'from-indigo-50 to-purple-50',
      comingSoon: true
    },
    {
      id: 'arthroscopy',
      name: 'Fellowship in Arthroscopy & Arthroplasty',
      slug: '#',
      category: 'Surgical Specialties',
      icon: '🦴',
      tagline: 'Master Orthopedic Surgical Techniques',
      description: 'Expert training in arthroscopic procedures, joint arthroplasty, sports medicine, and orthopedic surgery.',
      duration: '12 Months',
      eligibility: 'MS Orthopedics/DNB',
      highlights: ['Arthroscopic Surgery', 'Joint Replacement', 'Sports Medicine', 'Orthopedic Procedures'],
      color: 'from-purple-600 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      comingSoon: true
    }
  ];

  const filteredSpecialties = specialties.filter(specialty =>
    specialty.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    specialty.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    specialty.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const categories = ['All', ...Array.from(new Set(specialties.map(s => s.category)))];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl"></div>
        </div>

        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-4">
              Medical Fellowship Specialties
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Choose from our comprehensive range of medical fellowship programs designed to advance your career and expertise in your chosen specialty.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search specialties... (e.g., Emergency, IVF, Pediatrics)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 md:py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-base md:text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white border-b border-gray-100">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                {specialties.length}
              </div>
              <p className="text-gray-600">Fellowship Programs</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
                {specialties.filter(s => !s.comingSoon).length}
              </div>
              <p className="text-gray-600">Available Now</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-red-600 mb-2">
                {specialties.filter(s => s.comingSoon).length}
              </div>
              <p className="text-gray-600">Coming Soon</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 mb-2">
                1000+
              </div>
              <p className="text-gray-600">Doctors Trained</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Grid */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container max-w-6xl mx-auto px-4">
          {filteredSpecialties.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 mb-4">No specialties found matching your search.</p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredSpecialties.map((specialty) => (
                <Link
                  key={specialty.id}
                  href={specialty.comingSoon ? '#' : specialty.slug}
                  className={`group relative overflow-hidden rounded-2xl transition-all duration-300 ${
                    specialty.comingSoon ? 'cursor-not-allowed opacity-75' : 'hover:shadow-2xl hover:scale-105'
                  }`}
                >
                  {/* Card Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${specialty.bgColor}`}></div>

                  {/* Border Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${specialty.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>

                  {/* Content */}
                  <div className="relative p-6 md:p-8 h-full flex flex-col">
                    {/* Icon */}
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{specialty.icon}</div>

                    {/* Coming Soon Badge */}
                    {specialty.comingSoon && (
                      <div className="absolute top-4 right-4 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold">
                        Coming Soon
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{specialty.name}</h3>

                    {/* Tagline */}
                    <p className="text-sm md:text-base font-semibold bg-clip-text text-transparent bg-gradient-to-r mb-3" style={{
                      backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`
                    }}>
                      {specialty.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-6 flex-grow">{specialty.description}</p>

                    {/* Key Info */}
                    <div className="space-y-2 mb-6 text-sm">
                      <div className="flex items-center gap-2 text-gray-700">
                        <span className="font-semibold">⏱️ Duration:</span>
                        <span>{specialty.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <span className="font-semibold">🎓 Eligibility:</span>
                        <span>{specialty.eligibility}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <p className="text-xs font-semibold text-gray-600 mb-2">Key Topics:</p>
                      <div className="flex flex-wrap gap-2">
                        {specialty.highlights.slice(0, 2).map((highlight, idx) => (
                          <span key={idx} className="text-xs bg-white/80 px-2 py-1 rounded-full text-gray-700 border border-gray-200">
                            {highlight}
                          </span>
                        ))}
                        {specialty.highlights.length > 2 && (
                          <span className="text-xs bg-white/80 px-2 py-1 rounded-full text-gray-700 border border-gray-200">
                            +{specialty.highlights.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className={`flex items-center gap-2 font-bold transition-all ${
                      specialty.comingSoon
                        ? 'text-gray-500'
                        : `bg-gradient-to-r ${specialty.color} text-white px-4 py-2 rounded-lg group-hover:translate-x-1`
                    }`}>
                      {specialty.comingSoon ? (
                        <>
                          <span>Notify Me</span>
                          <span>🔔</span>
                        </>
                      ) : (
                        <>
                          <span>Explore Program</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Category Filter Info */}
      <section className="py-12 md:py-16 bg-white border-t border-gray-100">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Browse by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <div
                key={category}
                className="px-4 md:px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full text-gray-700 font-medium cursor-pointer hover:shadow-md transition-all text-sm md:text-base"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Programs */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-12">
            Why Choose MedFellow Academy?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🏆', title: 'Industry-Recognized', desc: 'Internationally accredited programs' },
              { icon: '👨‍🏫', title: 'Expert Faculty', desc: 'Learn from experienced specialists' },
              { icon: '🏥', title: 'Real Clinical Exposure', desc: 'Hands-on training in hospitals' },
              { icon: '💼', title: 'Career Support', desc: 'Job placement assistance & mentorship' },
              { icon: '🌍', title: 'Global Network', desc: 'Connect with doctors worldwide' },
              { icon: '📚', title: 'Continuous Learning', desc: 'Updated curriculum & resources' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="white" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#dots)" />
          </svg>
        </div>

        <div className="container max-w-6xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-6">
            Ready to Advance Your Medical Career?
          </h2>
          <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto mb-8">
            Choose a specialty that matches your passion and start your journey with MedFellow Academy today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/emergency-medicine"
              className="px-8 py-4 bg-white text-purple-600 font-bold rounded-full hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Explore Emergency Medicine
            </a>
            <a
              href="/reproductive-medicine"
              className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white hover:bg-white/30 transition-all transform hover:scale-105"
            >
              Explore Reproductive Medicine
            </a>
            <a
              href="tel:+919985044993"
              className="px-8 py-4 bg-yellow-400 text-purple-600 font-bold rounded-full hover:shadow-2xl transition-all transform hover:scale-105"
            >
              📞 Call Us Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

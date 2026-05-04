"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check, Globe, Award, Clock, Star, Sparkles, Heart, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function DubaiProgramsHub() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const prioritySpecialties = [
    {
      number: "01",
      icon: "👶",
      name: "Pediatrics Fellowship",
      slug: "fellowship-in-pediatrics",
      description: "Build strong child care expertise with flexible training suited for pediatric practice in Dubai.",
      demandDriver: "Expanding maternity and child health infrastructure across Dubai."
    },
    {
      number: "02",
      icon: "⚕️",
      name: "Endocrinology Fellowship",
      slug: "fellowship-in-endocrinology",
      description: "Enhance skills in diabetes and hormonal care with practical training aligned to Dubai clinics.",
      demandDriver: "The Gulf has one of the world's highest diabetes prevalence rates."
    },
    {
      number: "03",
      icon: "🫘",
      name: "Nephrology Fellowship",
      slug: "fellowship-in-nephrology",
      description: "Strengthen kidney care and dialysis expertise with structured learning for real clinical needs.",
      demandDriver: "Elevated CKD prevalence linked to diabetes drives sustained hiring."
    },
    {
      number: "04",
      icon: "🔬",
      name: "Gastroenterology Fellowship",
      slug: "fellowship-in-gastroenterology",
      description: "Learn modern approaches to digestive disorders with flexible, case-based clinical training.",
      demandDriver: "Growing endoscopy and hepatology demand in Dubai tertiary care hospitals."
    },
    {
      number: "05",
      icon: "🧬",
      name: "Reproductive Medicine Fellowship",
      slug: "fellowship-in-reproductive-medicine",
      description: "Build expertise in IVF and fertility care with training designed for Dubai healthcare demand.",
      demandDriver: "Dubai medical tourism prioritises fertility care. Private IVF clinics expanding."
    },
    {
      number: "06",
      icon: "🍼",
      name: "Neonatology Fellowship",
      slug: "fellowship-in-neonatology",
      description: "Develop NICU and newborn care skills with structured training for pediatric specialists.",
      demandDriver: "NICU expansion across private and government hospital networks in Dubai."
    }
  ];

  const testimonials = [
    {
      quote: "The Pediatrics fellowship was decisive in my consultant application. The structured curriculum was exactly what my CV was missing.",
      author: "Dr Arjun Menon",
      role: "Consultant Pediatrician · Dubai Healthcare City",
      rating: 5
    },
    {
      quote: "The fully online format worked around my Dubai practice hours. DHA accepted the certification without question.",
      author: "Dr Shalini Rao",
      role: "Endocrinologist · Al Barsha",
      rating: 5
    },
    {
      quote: "The Arthroscopy fellowship gave me the intensive training I needed. My sports medicine practice doubled referrals in 6 months.",
      author: "Dr Nikhil Agarwal",
      role: "Orthopedic Surgeon · Jumeirah",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Is MedFellow Academy recognised for DHA specialist applications in Dubai?",
      answer: "MedFellow Academy fellowship certificates strengthen the specialty training section of DHA specialist applications. DHA reviewers weigh the certificate during categorisation, and fellows consistently report it accelerates the review process."
    },
    {
      question: "Can I continue practising in Dubai during the fellowship?",
      answer: "Yes. The entire 12-month curriculum is delivered online with recorded sessions, live weekly interactions, and flexible assignments. Dubai-based doctors typically spend 8-12 hours per week on coursework."
    },
    {
      question: "What are the total fees including the optional clinical rotation?",
      answer: "Fully online format ranges from ₹1.73L to ₹2.19L (approximately AED 7,600-9,600). The hybrid format ranges from ₹2.07L to ₹2.41L. EMI options are available."
    },
    {
      question: "Which fellowship has the highest ROI for doctors in Dubai?",
      answer: "Based on hiring trends: Endocrinology (diabetes prevalence), Reproductive Medicine (fertility sector), Pediatrics and Neonatology (maternity care expansion), and Arthroscopy (sports medicine growth)."
    },
    {
      question: "Do I need to travel to India for any part of the fellowship?",
      answer: "No, not for the fully online format. The entire 12-month curriculum is delivered online. Only the optional hybrid format requires a 1-month clinical rotation in India."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1B4F72 0%, #2E86C1 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full" style={{ background: '#D6EAF8' }}></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full" style={{ background: '#AED6F1' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 lg:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)' }}
            >
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#52BE80' }}></div>
              <span className="text-sm font-medium text-white">APRIL 2026 INTAKE · DUBAI PRIORITY LANE</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 sm:mb-6 leading-tight px-2"
            >
              Fellowship Programs for<br />Doctors in Dubai
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed px-2"
            >
              46 fellowships built for working doctors. DHA-aligned credentials.<br/>
              Fully online or hybrid. Specialise without pausing your practice.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-4"
            >
              <Link href="/apply" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white rounded-lg font-medium hover:opacity-90 transition-all shadow-lg text-lg" style={{ color: '#1B4F72' }}>
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white transition-all text-lg hover:text-[#1B4F72]">
                Schedule Consultation
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/90 px-4"
            >
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" style={{ color: '#52BE80' }} />
                <span>DHA-aligned credentials</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" style={{ color: '#52BE80' }} />
                <span>12-month structured</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" style={{ color: '#52BE80' }} />
                <span>72h decision</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-10 md:py-12" style={{ background: '#EAF2FB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-semibold mb-1" style={{ color: '#1B4F72' }}>46+</div>
              <div className="text-xs md:text-sm" style={{ color: '#5D6D7E' }}>Specialty Fellowships</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-semibold mb-1" style={{ color: '#1B4F72' }}>4,200+</div>
              <div className="text-xs md:text-sm" style={{ color: '#5D6D7E' }}>Doctors Trained Globally</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-semibold mb-1" style={{ color: '#1B4F72' }}>22+</div>
              <div className="text-xs md:text-sm" style={{ color: '#5D6D7E' }}>Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-semibold mb-1" style={{ color: '#1B4F72' }}>4.8/5</div>
              <div className="text-xs md:text-sm" style={{ color: '#5D6D7E' }}>Rated by Doctors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Dubai Doctors Need Fellowship */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: '#D6EAF8', color: '#2E86C1' }}>
                <Sparkles className="w-4 h-4" />
                THE 2026 CREDENTIALING GAP
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#1B4F72' }}>
                Why Indian Doctors in Dubai<br/>Need a Specialist Fellowship
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: '#5D6D7E' }}>
                The 2026 credentialing gap every practising doctor faces.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all" style={{ border: '1px solid #BFC9CA' }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: '#D6EAF8' }}>
                  <span className="text-3xl">📋</span>
                </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4" style={{ color: '#1B4F72' }}>DHA raised the bar</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#5D6D7E' }}>
                  January 2026 guidelines weight structured fellowship training more heavily for specialist categorisation.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all" style={{ border: '1px solid #BFC9CA' }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: '#D6EAF8' }}>
                  <span className="text-3xl">🏥</span>
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#1B4F72' }}>Where Dubai hires</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#5D6D7E' }}>
                  Mediclinic, Aster, NMC and Dubai Healthcare City favour candidates with specialty fellowship credentials.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all" style={{ border: '1px solid #BFC9CA' }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: '#D6EAF8' }}>
                  <span className="text-3xl">⏰</span>
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#1B4F72' }}>You can't pause practice</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#5D6D7E' }}>
                  Most Dubai doctors can't take 2-3 years off. The credential gap stays open — unless training fits around clinical hours.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl" style={{ background: '#EAF2FB', border: '1px solid #AED6F1' }}>
              <p className="text-center mb-2 font-medium" style={{ color: '#1B4F72' }}>
                Not sure which of the 46 specialties fits your career goals?
              </p>
              <p className="text-center text-sm mb-6" style={{ color: '#5D6D7E' }}>
                Book a free 20-minute consultation with our medical education advisors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/apply" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all shadow-lg text-white" style={{ background: '#1B4F72' }}>
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white rounded-lg font-medium transition-all" style={{ border: '2px solid #1B4F72', color: '#1B4F72' }}>
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Priority Specialties */}
      <section className="py-12 sm:py-16 md:py-20" style={{ background: '#F2F3F4' }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: '#D6EAF8', color: '#2E86C1' }}>
              <Globe className="w-4 h-4" />
              TOP FELLOWSHIP PROGRAMS
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#1B4F72' }}>
              Explore Top Fellowships<br/>for Dubai Doctors
            </h2>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: '#5D6D7E' }}>
              Upgrade your specialisation without pausing your practice. High-demand fellowships aligned with DHA career growth.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12">
            {prioritySpecialties.map((specialty, index) => (
              <Link
                key={index}
                href={`/programs/${specialty.slug}`}
                className="group bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl hover:shadow-xl transition-all duration-300"
                style={{ border: '1px solid #BFC9CA' }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl">{specialty.icon}</div>
                  <div className="text-3xl font-semibold" style={{ color: '#D6EAF8' }}>{specialty.number}</div>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#2E86C1] transition-colors" style={{ color: '#1B4F72' }}>
                  {specialty.name}
                </h3>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: '#5D6D7E' }}>
                  {specialty.description}
                </p>
                <div className="pt-4 border-t flex items-center gap-2 text-sm" style={{ borderColor: '#BFC9CA', color: '#2E86C1' }}>
                  <Award className="w-4 h-4" />
                  <span className="font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ml-auto" />
                </div>
              </Link>
            ))}
          </div>

          {/* All Programs CTA */}
          <div className="p-10 rounded-2xl text-white text-center" style={{ background: 'linear-gradient(135deg, #1B4F72 0%, #2E86C1 100%)' }}>
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-2xl font-semibold mb-3">All Fellowship Programs for Dubai Doctors</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Explore 46+ specialties designed to help doctors in Dubai build skills and grow their careers.
            </p>
            <Link href="/programs" className="inline-flex items-center gap-2 px-8 py-4 bg-white rounded-lg font-medium hover:opacity-90 transition-all shadow-lg" style={{ color: '#1B4F72' }}>
              Browse All 46 Specialties
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: '#D6EAF8', color: '#2E86C1' }}>
              <Heart className="w-4 h-4" />
              DOCTOR STORIES
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#1B4F72' }}>
              What Dubai Doctors Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all"
                style={{ border: '1px solid #BFC9CA' }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#F39C12' }} />
                  ))}
                </div>
                <p className="text-sm mb-6 leading-relaxed italic" style={{ color: '#5D6D7E' }}>
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-semibold text-white" style={{ background: '#2E86C1' }}>
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-medium" style={{ color: '#1B4F72' }}>{testimonial.author}</div>
                    <div className="text-xs" style={{ color: '#5D6D7E' }}>{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20" style={{ background: '#EAF2FB' }}>
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: '#D6EAF8', color: '#2E86C1' }}>
              <Users className="w-4 h-4" />
              FREQUENTLY ASKED
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#1B4F72' }}>
              Common Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden"
                style={{ border: '1px solid #BFC9CA' }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium pr-8" style={{ color: '#1B4F72' }}>{faq.question}</span>
                  <ArrowRight
                    className={`w-5 h-5 shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-90' : ''
                    }`}
                    style={{ color: '#2E86C1' }}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-sm leading-relaxed" style={{ color: '#5D6D7E' }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-8">
          <div className="p-12 rounded-3xl text-center text-white" style={{ background: 'linear-gradient(135deg, #1B4F72 0%, #2E86C1 100%)' }}>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Ready to Start Your Fellowship?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Apply now and get your admission decision within 72 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white rounded-lg font-medium hover:opacity-90 transition-all shadow-lg text-lg" style={{ color: '#1B4F72' }}>
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white transition-all text-lg hover:text-[#1B4F72]">
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

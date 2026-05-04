"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check, Globe, Award, Clock, Star, Sparkles, Heart, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function SaudiArabiaProgramsHub() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const prioritySpecialties = [
    {
      number: "01",
      icon: "👶",
      name: "Pediatrics Fellowship",
      slug: "fellowship-in-pediatrics",
      description: "Build advanced child care expertise with flexible training suited for pediatric practice in Saudi Arabia.",
      demandDriver: "Expanding maternity and child health infrastructure across Saudi Arabia."
    },
    {
      number: "02",
      icon: "⚕️",
      name: "Endocrinology Fellowship",
      slug: "fellowship-in-endocrinology",
      description: "Master diabetes and hormonal disorders in high-demand roles across Saudi Arabia.",
      demandDriver: "The Gulf has one of the world's highest diabetes prevalence rates."
    },
    {
      number: "03",
      icon: "🫘",
      name: "Nephrology Fellowship",
      slug: "fellowship-in-nephrology",
      description: "Gain expertise in CKD, dialysis, and renal care management.",
      demandDriver: "Elevated CKD prevalence linked to diabetes drives sustained hiring."
    },
    {
      number: "04",
      icon: "🔬",
      name: "Gastroenterology Fellowship",
      slug: "fellowship-in-gastroenterology",
      description: "Learn GI disorders and clinical digestive care essentials.",
      demandDriver: "Growing endoscopy and hepatology demand in Saudi tertiary care hospitals."
    },
    {
      number: "05",
      icon: "🧬",
      name: "Reproductive Medicine Fellowship",
      slug: "fellowship-in-reproductive-medicine",
      description: "Enter the growing IVF and fertility specialty space.",
      demandDriver: "Medical tourism prioritises fertility care. Private IVF clinics expanding."
    },
    {
      number: "06",
      icon: "🍼",
      name: "Neonatology Fellowship",
      slug: "fellowship-in-neonatology",
      description: "Strengthen NICU and newborn emergency care skills.",
      demandDriver: "NICU expansion across private and government hospital networks."
    }
  ];

  const testimonials = [
    {
      quote: "The Nephrology fellowship was perfect for my schedule in Riyadh. SCFHS recognised my specialist training immediately after certification. I transitioned to consultant within 6 months.",
      author: "Dr Suresh Nair",
      role: "Consultant Nephrologist · Riyadh",
      rating: 5
    },
    {
      quote: "Running a pediatric clinic in Jeddah left no time for traditional fellowship. MedFellow's online format let me specialise while my practice kept growing.",
      author: "Dr Kavitha Reddy",
      role: "Pediatrician · Jeddah",
      rating: 5
    },
    {
      quote: "The Gastroenterology fellowship hybrid format gave me intensive hands-on training directly translatable to my endoscopy practice in Dammam.",
      author: "Dr Vikram Singh",
      role: "Gastroenterologist · Dammam",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Is MedFellow Academy recognised for SCFHS specialist applications?",
      answer: "MedFellow Academy fellowship certificates strengthen the specialty training section of SCFHS specialist applications. Fellows consistently report it accelerates the categorisation review process."
    },
    {
      question: "Can I continue practising in Saudi Arabia during the fellowship?",
      answer: "Yes. The entire 12-month curriculum is delivered online with recorded sessions, live weekly interactions, and flexible assignments. Doctors typically spend 8-12 hours per week on coursework."
    },
    {
      question: "What are the total fees including the optional clinical rotation?",
      answer: "Fully online format ranges from ₹1.73L to ₹2.19L (approximately SAR 7,800-9,900). The hybrid format ranges from ₹2.07L to ₹2.41L. EMI options are available."
    },
    {
      question: "Which fellowship has the highest ROI for doctors in Saudi Arabia?",
      answer: "Based on hiring trends: Endocrinology (diabetes prevalence), Reproductive Medicine (fertility sector), Pediatrics and Neonatology (maternity care under Vision 2030), and Arthroscopy (sports medicine)."
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
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F766E 0%, #14B8A6 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full" style={{ background: '#D5F5F6' }}></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full" style={{ background: '#99F6E4' }}></div>
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
              <span className="text-sm font-medium text-white">APRIL 2026 INTAKE · SAUDI ARABIA PRIORITY LANE</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 sm:mb-6 leading-tight px-2"
            >
              Fellowship Programs for<br />Doctors in Saudi Arabia
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed px-2"
            >
              46 fellowships built for working doctors. SCFHS-aligned credentials.<br/>
              Fully online or hybrid. Specialise without pausing your practice.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <Link href="/apply" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white rounded-lg font-medium hover:opacity-90 transition-all shadow-lg text-lg" style={{ color: '#0F766E' }}>
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white transition-all text-lg hover:text-[#0F766E]">
                Schedule Consultation
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/90"
            >
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" style={{ color: '#52BE80' }} />
                <span>SCFHS-aligned credentials</span>
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
      <section className="py-8 sm:py-10 md:py-12" style={{ background: '#D5F5F6' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-semibold mb-1" style={{ color: '#0F766E' }}>46+</div>
              <div className="text-xs md:text-sm" style={{ color: '#5D6D7E' }}>Specialty Fellowships</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-semibold mb-1" style={{ color: '#0F766E' }}>4,200+</div>
              <div className="text-xs md:text-sm" style={{ color: '#5D6D7E' }}>Doctors Trained Globally</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-semibold mb-1" style={{ color: '#0F766E' }}>22+</div>
              <div className="text-xs md:text-sm" style={{ color: '#5D6D7E' }}>Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-semibold mb-1" style={{ color: '#0F766E' }}>4.8/5</div>
              <div className="text-xs md:text-sm" style={{ color: '#5D6D7E' }}>Rated by Doctors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Saudi Doctors Need Fellowship */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style={{ background: '#14B8A6' }}></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-5" style={{ background: '#0F766E' }}></div>
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium mb-6 shadow-sm"
                style={{ background: 'linear-gradient(135deg, #99F6E4 0%, #5EEAD4 100%)', color: '#0F766E' }}
              >
                <Sparkles className="w-4 h-4" />
                VISION 2030 HEALTHCARE
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 leading-tight" style={{ color: '#1B4F72' }}
              >
                Why Indian Doctors in Saudi Arabia<br/>Need a Specialist Fellowship
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: '#5D6D7E' }}
              >
                The 2026 credentialing gap every practising doctor faces.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group relative bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300"
                style={{ border: '2px solid #E5E7EB' }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 -mr-16 -mt-16" style={{ background: 'linear-gradient(135deg, #0F766E 0%, #14B8A6 100%)' }}></div>
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #0F766E 0%, #14B8A6 100%)' }}>
                    <span className="text-4xl">📋</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4" style={{ color: '#0F766E' }}>SCFHS raised the bar</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#5D6D7E' }}>
                    Recent guidelines weight structured fellowship training more heavily for specialist categorisation.
                  </p>
                  <div className="mt-6 pt-4 border-t" style={{ borderColor: '#E5E7EB' }}>
                    <div className="flex items-center gap-2 text-xs font-medium" style={{ color: '#14B8A6' }}>
                      <Check className="w-4 h-4" />
                      <span>New SCFHS Standards</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group relative bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300"
                style={{ border: '2px solid #E5E7EB' }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 -mr-16 -mt-16" style={{ background: 'linear-gradient(135deg, #14B8A6 0%, #2DD4BF 100%)' }}></div>
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #14B8A6 0%, #2DD4BF 100%)' }}>
                    <span className="text-4xl">🏥</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4" style={{ color: '#0F766E' }}>Where Saudi hires</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#5D6D7E' }}>
                    MOH facilities and private groups favour candidates with specialty fellowship credentials.
                  </p>
                  <div className="mt-6 pt-4 border-t" style={{ borderColor: '#E5E7EB' }}>
                    <div className="flex items-center gap-2 text-xs font-medium" style={{ color: '#14B8A6' }}>
                      <Award className="w-4 h-4" />
                      <span>MOH & Private Groups</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group relative bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300"
                style={{ border: '2px solid #E5E7EB' }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 -mr-16 -mt-16" style={{ background: 'linear-gradient(135deg, #2DD4BF 0%, #5EEAD4 100%)' }}></div>
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #2DD4BF 0%, #5EEAD4 100%)' }}>
                    <span className="text-4xl">⏰</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4" style={{ color: '#0F766E' }}>You can't pause practice</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#5D6D7E' }}>
                    Most doctors can't take 2-3 years off. The credential gap stays open — unless training fits around clinical hours.
                  </p>
                  <div className="mt-6 pt-4 border-t" style={{ borderColor: '#E5E7EB' }}>
                    <div className="flex items-center gap-2 text-xs font-medium" style={{ color: '#14B8A6' }}>
                      <Clock className="w-4 h-4" />
                      <span>Flexible Online Learning</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="p-8 rounded-2xl" style={{ background: '#D5F5F6', border: '1px solid #99F6E4' }}>
              <p className="text-center mb-2 font-medium" style={{ color: '#0F766E' }}>
                Not sure which of the 46 specialties fits your career goals?
              </p>
              <p className="text-center text-sm mb-6" style={{ color: '#5D6D7E' }}>
                Book a free 20-minute consultation with our medical education advisors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/apply" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all shadow-lg text-white" style={{ background: '#0F766E' }}>
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white rounded-lg font-medium transition-all" style={{ border: '2px solid #0F766E', color: '#0F766E' }}>
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Priority Specialties */}
      <section className="py-20" style={{ background: '#F2F3F4' }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: '#99F6E4', color: '#0F766E' }}>
              <Globe className="w-4 h-4" />
              TOP FELLOWSHIP PROGRAMS
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#1B4F72' }}>
              Explore Top Fellowships<br/>for Saudi Doctors
            </h2>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: '#5D6D7E' }}>
              Upgrade your specialisation without pausing your practice. High-demand fellowships aligned with SCFHS career growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {prioritySpecialties.map((specialty, index) => (
              <Link
                key={index}
                href={`/programs/${specialty.slug}`}
                className="group bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300"
                style={{ border: '1px solid #BFC9CA' }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl">{specialty.icon}</div>
                  <div className="text-3xl font-semibold" style={{ color: '#99F6E4' }}>{specialty.number}</div>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#14B8A6] transition-colors" style={{ color: '#0F766E' }}>
                  {specialty.name}
                </h3>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: '#5D6D7E' }}>
                  {specialty.description}
                </p>
                <div className="pt-4 border-t flex items-center gap-2 text-sm" style={{ borderColor: '#BFC9CA', color: '#14B8A6' }}>
                  <Award className="w-4 h-4" />
                  <span className="font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ml-auto" />
                </div>
              </Link>
            ))}
          </div>

          {/* All Programs CTA */}
          <div className="p-10 rounded-2xl text-white text-center" style={{ background: 'linear-gradient(135deg, #0F766E 0%, #14B8A6 100%)' }}>
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-2xl font-semibold mb-3">All Fellowship Programs for Saudi Doctors</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Explore 46+ specialties designed to help doctors in Saudi Arabia build skills and grow their careers.
            </p>
            <Link href="/programs" className="inline-flex items-center gap-2 px-8 py-4 bg-white rounded-lg font-medium hover:opacity-90 transition-all shadow-lg" style={{ color: '#0F766E' }}>
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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: '#99F6E4', color: '#0F766E' }}>
              <Heart className="w-4 h-4" />
              DOCTOR STORIES
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#1B4F72' }}>
              What Saudi Doctors Say
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
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-semibold text-white" style={{ background: '#14B8A6' }}>
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-medium" style={{ color: '#0F766E' }}>{testimonial.author}</div>
                    <div className="text-xs" style={{ color: '#5D6D7E' }}>{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20" style={{ background: '#D5F5F6' }}>
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: '#99F6E4', color: '#0F766E' }}>
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
                  <span className="font-medium pr-8" style={{ color: '#0F766E' }}>{faq.question}</span>
                  <ArrowRight
                    className={`w-5 h-5 shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-90' : ''
                    }`}
                    style={{ color: '#14B8A6' }}
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
          <div className="p-12 rounded-3xl text-center text-white" style={{ background: 'linear-gradient(135deg, #0F766E 0%, #14B8A6 100%)' }}>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Ready to Start Your Fellowship?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Apply now and get your admission decision within 72 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white rounded-lg font-medium hover:opacity-90 transition-all shadow-lg text-lg" style={{ color: '#0F766E' }}>
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white transition-all text-lg hover:text-[#0F766E]">
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

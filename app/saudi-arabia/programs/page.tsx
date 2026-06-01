"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check, Globe, Award, Clock, Star, Sparkles, Heart, Users, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function SaudiArabiaProgramsHub() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const prioritySpecialties = [
    {
      number: "00",
      icon: "🧠",
      name: "All Fellowship Programs",
      slug: "all-programs",
      description: "Explore 40+ specialties designed for Saudi Arabia doctors.",
      demandDriver: "Browse the complete catalog across medical, surgical, and procedural pathways."
    },
    {
      number: "01",
      icon: "👶",
      name: "Pediatrics Fellowship",
      slug: "fellowship-in-pediatrics",
      description: "Build strong child care expertise with flexible training suited for pediatric practice in Saudi Arabia.",
      demandDriver: "Expanding maternity and child health infrastructure across Saudi Arabia."
    },
    {
      number: "02",
      icon: "⚕️",
      name: "Endocrinology Fellowship",
      slug: "fellowship-in-endocrinology",
      description: "Enhance skills in diabetes and hormonal care with practical training aligned to Saudi Arabia clinics.",
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
      demandDriver: "Growing endoscopy and hepatology demand in Saudi Arabia tertiary care hospitals."
    },
    {
      number: "05",
      icon: "🧬",
      name: "Reproductive Medicine Fellowship",
      slug: "fellowship-in-reproductive-medicine",
      description: "Build expertise in IVF and fertility care with training designed for Saudi Arabia healthcare demand.",
      demandDriver: "Saudi Arabia medical tourism prioritises fertility care. Private IVF clinics expanding."
    },
    {
      number: "06",
      icon: "🍼",
      name: "Neonatology Fellowship",
      slug: "fellowship-in-neonatology",
      description: "Develop NICU and newborn care skills with structured training for pediatric specialists.",
      demandDriver: "NICU expansion across private and government hospital networks in Saudi Arabia."
    },
    {
      number: "07",
      icon: "🦴",
      name: "Arthroscopy and Arthroplasty Fellowship",
      slug: "fellowship-in-arthroscopy-and-arthroplasty",
      description: "Advance joint surgery and sports injury skills with practical orthopedic training programs.",
      demandDriver: "Saudi Arabia sports medicine and orthopedic sector growth, especially in urban centres."
    }
  ];

  const testimonials = [
    {
      quote: "The Nephrology fellowship was a perfect fit for my schedule at a Riyadh tertiary hospital. SCFHS recognised my specialist training profile immediately after certification. I transitioned to a consultant role within 6 months.",
      author: "Dr Suresh Nair",
      role: "Consultant Nephrologist · Riyadh",
      rating: 5
    },
    {
      quote: "Running a pediatric clinic in Jeddah left no time for a traditional fellowship. MedFellow's online format let me specialise while my practice kept growing. The certification helped me expand my clinic to a second location in Jeddah.",
      author: "Dr Kavitha Reddy",
      role: "Pediatrician · Jeddah",
      rating: 5
    },
    {
      quote: "I enrolled in the Gastroenterology fellowship specifically because I wanted the hybrid format. The 1 month clinical rotation in India was intensive, hands on, and directly translatable to my endoscopy practice in Dammam.",
      author: "Dr Vikram Singh",
      role: "Gastroenterologist · Dammam",
      rating: 5
    },
    {
      quote: "Saudi Arabia has growing demand for IVF specialists given Vision 2030 healthcare reforms. The MedFellow Reproductive Medicine fellowship gave me the structured specialty credential I needed to launch my own fertility clinic partnership in Riyadh.",
      author: "Dr Ananya Pillai",
      role: "IVF Specialist · Riyadh",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Is MedFellow Academy recognised for SCFHS specialist applications in Saudi Arabia?",
      answer: "MedFellow Academy fellowship certificates are India issued specialty credentials. They strengthen the specialty training section of a SCFHS specialist application, but they do not replace SCFHS licensing exams. Every SCFHS credentialed specialist role in Saudi Arabia requires the official SCFHS licensing pathway. What the fellowship does is add a structured, documented specialty credential to the CV that SCFHS reviewers weigh during specialist categorisation. Fellows practising in Saudi Arabia consistently report that the certificate accelerates the specialist categorisation review when submitted alongside MBBS and MD documents."
    },
    {
      question: "Can I continue practising in Saudi Arabia during the fellowship?",
      answer: "Yes. The entire 12-month curriculum is delivered online with recorded sessions, live weekly interactions, and flexible assignments. Saudi Arabia-based doctors typically spend 8-12 hours per week on coursework, scheduled around their clinic hours. You never need to leave Saudi Arabia for the fully online format. If you choose the hybrid format, the 1-month India clinical rotation can be scheduled during your annual leave or planned around low patient volume weeks at your practice."
    },
    {
      question: "How does MedFellow compare to Medline Academics for Saudi Arabia based doctors?",
      answer: "The two providers serve different needs. MedFellow offers 46 specialties delivered fully online with optional hybrid rotation, which suits Saudi Arabia doctors who want breadth of specialty choice and zero travel disruption. Medline Academics, based in Bengaluru, focuses deeply on Reproductive Medicine, Andrology, and Embryology with hybrid or offline delivery that requires travel to Bengaluru for practical components. If you are set on IVF or embryology specifically and can travel, Medline is a strong choice. If you want flexibility across multiple specialties, MedFellow is the better fit."
    },
    {
      question: "What are the total fees for a MedFellow fellowship including optional clinical rotation?",
      answer: "Fully online format ranges from INR 1,50,000 to INR 1,90,000 for most specialties. The hybrid format (11 months online plus 1 month clinical rotation in India) typically ranges from INR 1,80,000 to INR 2,10,000. At April 2026 exchange rates, INR 1,50,000 is approximately AED 6,600 or SAR 6,750. EMI options are available across all programs. Exchange rates fluctuate, so confirm the current quote with admissions before remitting."
    },
    {
      question: "Which fellowship has the highest ROI for doctors in Saudi Arabia?",
      answer: "Based on hiring trends across Saudi Arabia, the highest ROI specialties for working doctors are Endocrinology (driven by diabetes prevalence), Reproductive Medicine (driven by fertility sector growth), Pediatrics and Neonatology (driven by maternity care expansion), and Arthroscopy or Arthroplasty (driven by sports medicine and urban lifestyle growth). The right choice depends on your current specialty. A doctor with MD Medicine benefits most from Endocrinology or Nephrology. A doctor with MS Orthopedics benefits most from Arthroscopy. A doctor with MD or DNB Pediatrics benefits most from Neonatology."
    },
    {
      question: "Do I need to travel to India for any part of the fellowship?",
      answer: "No, not for the fully online format. The entire 12-month curriculum is delivered online with no India travel required. Only the optional hybrid format requires a 1-month clinical rotation in India. For non-procedural specialties like Endocrinology, Nephrology, or general Pediatrics, the fully online format is often sufficient. For procedural specialties like Arthroscopy, Reproductive Medicine, or Gastroenterology endoscopy, the hybrid format with the 1-month rotation is strongly recommended because procedural skills require supervised hands on exposure."
    },
    {
      question: "What documents do I need to apply as a Saudi Arabia based doctor?",
      answer: "The standard application requires: your MBBS degree certificate, your MD or MS or DNB postgraduate certificate (for specialties requiring postgraduate qualification), a valid medical practice licence from Saudi Arabia or India, a short statement of intent explaining your specialty goals, and a recent CV. Saudi Arabia applicants typically scan and upload documents through the MedFellow application portal. There is no requirement for document attestation at the application stage."
    },
    {
      question: "How quickly will I get an admissions decision?",
      answer: "Saudi Arabia based applicants typically receive an admissions decision within 72 hours of complete document submission. The process runs as follows: You submit the online application. Admissions reviews credentials within 24 hours. You have a 20-minute video or WhatsApp consultation with an advisor. Admissions issues a final decision within 48 hours of the consultation. If you want to accelerate the process, applying with complete documents and scheduling the consultation within 48 hours brings the total decision timeline under 5 working days."
    },
    {
      question: "Will the certificate be recognised by hospitals I want to work at in Saudi Arabia?",
      answer: "The fellowship certificate is recognised as a structured specialty credential by private hospitals across Saudi Arabia when submitted alongside your MBBS and postgraduate degrees. Recognition at government SCFHS hospitals is subject to the official SCFHS specialist categorisation process, where the fellowship is weighted as supplementary specialist training rather than as a standalone qualifying credential. The practical effect is that the certificate strengthens private hospital applications directly and supports public hospital applications as part of the broader credential set."
    },
    {
      question: "Can I speak to a MedFellow advisor before I apply?",
      answer: "Yes. You can reach the MedFellow admissions team via three channels: Call +91 99850 44993 during Monday to Friday, 9 AM to 6 PM IST (11 AM to 8 PM GST). Email info@medfellow.in for written queries with a 24-hour response SLA. Or message WhatsApp Admissions for the fastest response: most Saudi Arabia enquiries are acknowledged within 15 minutes during working hours."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #15401E 0%, #15401E 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full" style={{ background: '#e8f2ea' }}></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full" style={{ background: '#C8E6D0' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 py-16 sm:py-20 md:py-24 lg:py-28 relative z-10">
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
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-4"
            >
              <Link href="/apply" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white rounded-lg font-medium hover:opacity-90 transition-all shadow-lg text-lg" style={{ color: '#15401E' }}>
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white transition-all text-lg hover:text-[#15401E]">
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
      <section className="py-8 sm:py-10 md:py-12" style={{ background: '#e8f2ea' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-semibold mb-1" style={{ color: '#15401E' }}>46+</div>
              <div className="text-xs md:text-sm" style={{ color: '#6B7280' }}>Specialty Fellowships</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-semibold mb-1" style={{ color: '#15401E' }}>3,500+</div>
              <div className="text-xs md:text-sm" style={{ color: '#6B7280' }}>Doctors Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-semibold mb-1" style={{ color: '#15401E' }}>25+</div>
              <div className="text-xs md:text-sm" style={{ color: '#6B7280' }}>Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-semibold mb-1" style={{ color: '#15401E' }}>4.8/5</div>
              <div className="text-xs md:text-sm" style={{ color: '#6B7280' }}>Rated by Doctors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Saudi Arabia Doctors Need Fellowship */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: '#e8f2ea', color: '#15401E' }}>
                <Sparkles className="w-4 h-4" />
                THE 2026 CREDENTIALING GAP
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#15401E' }}>
                Why Indian Doctors in Saudi Arabia<br/>Need a Specialist Fellowship
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: '#6B7280' }}>
                The 2026 credentialing gap every practising doctor faces.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all" style={{ border: '1px solid #E5E7EB' }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: '#e8f2ea' }}>
                  <span className="text-3xl">📋</span>
                </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4" style={{ color: '#15401E' }}>SCFHS raised the bar</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                    February 2026 SCFHS expansion of specialty pathways under Vision 2030 raised the weight of structured fellowship training.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all" style={{ border: '1px solid #E5E7EB' }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: '#e8f2ea' }}>
                  <span className="text-3xl">🏥</span>
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#15401E' }}>Where Saudi Arabia hires</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                  Riyadh, Jeddah, and Dammam tertiary hospitals favour candidates with specialty fellowship credentials.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all" style={{ border: '1px solid #E5E7EB' }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: '#e8f2ea' }}>
                  <span className="text-3xl">⏰</span>
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#15401E' }}>You can't pause practice</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                  Most Saudi Arabia doctors can't take 2-3 years off. The credential gap stays open — unless training fits around clinical hours.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl" style={{ background: '#e8f2ea', border: '1px solid #C8E6D0' }}>
              <p className="text-center mb-2 font-medium" style={{ color: '#15401E' }}>
                Not sure which of the 46 specialties fits your career goals?
              </p>
              <p className="text-center text-sm mb-6" style={{ color: '#6B7280' }}>
                Book a free 20-minute consultation with our medical education advisors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/apply" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all shadow-lg text-white" style={{ background: '#15401E' }}>
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white rounded-lg font-medium transition-all" style={{ border: '2px solid #15401E', color: '#15401E' }}>
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Priority Specialties */}
      <section className="py-12 sm:py-16 md:py-20" style={{ background: '#F2F3F4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: '#e8f2ea', color: '#15401E' }}>
              <Globe className="w-4 h-4" />
              TOP FELLOWSHIP PROGRAMS FOR SAUDI DOCTORS
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#15401E' }}>
              Explore Top Fellowships<br/>for Saudi Arabia Doctors
            </h2>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: '#6B7280' }}>
              Upgrade your specialisation without pausing your practice. High-demand fellowships aligned with SCFHS career growth.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12">
            {prioritySpecialties.map((specialty, index) => (
              <Link
                key={index}
                href={specialty.slug === "all-programs" ? "/saudi-arabia/programs" : `/saudi-arabia/programs/${specialty.slug}`}
                className="group bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl hover:shadow-xl transition-all duration-300"
                style={{ border: '1px solid #E5E7EB' }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl">{specialty.icon}</div>
                  <div className="text-3xl font-semibold" style={{ color: '#e8f2ea' }}>{specialty.number}</div>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#15401E] transition-colors" style={{ color: '#15401E' }}>
                  {specialty.name}
                </h3>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: '#6B7280' }}>
                  {specialty.description}
                </p>
                <div className="pt-4 border-t flex items-center gap-2 text-sm" style={{ borderColor: '#E5E7EB', color: '#15401E' }}>
                  <Award className="w-4 h-4" />
                  <span className="font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ml-auto" />
                </div>
              </Link>
            ))}
          </div>

          {/* All Programs CTA */}
          <div className="p-10 rounded-2xl text-white text-center" style={{ background: 'linear-gradient(135deg, #15401E 0%, #15401E 100%)' }}>
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-2xl font-semibold mb-3">All Fellowship Programs for Saudi Arabia Doctors</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Explore 40+ specialties designed to help doctors in Saudi Arabia build skills and grow their careers.
            </p>
            <Link href="/saudi-arabia/programs" className="inline-flex items-center gap-2 px-8 py-4 bg-white rounded-lg font-medium hover:opacity-90 transition-all shadow-lg" style={{ color: '#15401E' }}>
              Browse All 46 Specialties
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: '#e8f2ea', color: '#15401E' }}>
              <Heart className="w-4 h-4" />
              DOCTOR STORIES
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#15401E' }}>
              What Saudi Arabia Doctors Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all"
                style={{ border: '1px solid #E5E7EB' }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#F39C12' }} />
                  ))}
                </div>
                <p className="text-sm mb-6 leading-relaxed italic" style={{ color: '#6B7280' }}>
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-semibold text-white" style={{ background: '#15401E' }}>
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-medium" style={{ color: '#15401E' }}>{testimonial.author}</div>
                    <div className="text-xs" style={{ color: '#6B7280' }}>{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20" style={{ background: '#e8f2ea' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-5 md:px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: '#e8f2ea', color: '#15401E' }}>
              <Users className="w-4 h-4" />
              FREQUENTLY ASKED
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#15401E' }}>
              Common Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden"
                style={{ border: '1px solid #E5E7EB' }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium pr-8" style={{ color: '#15401E' }}>{faq.question}</span>
                  <ArrowRight
                    className={`w-5 h-5 shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-90' : ''
                    }`}
                    style={{ color: '#15401E' }}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 Priority Specialties */}
      <section className="py-20" style={{ background: '#F2F3F4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: '#e8f2ea', color: '#15401E' }}>
                <Globe className="w-4 h-4" />
                MARKET DEMAND
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#15401E' }}>
                7 Priority Specialties for<br/>Saudi Arabia Based Doctors
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: '#6B7280' }}>
                Which fellowships deliver the highest career return for your Saudi Arabia practice
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  number: "01",
                  name: "Pediatrics Fellowship",
                  demandDriver: "Expanding maternity and child health infrastructure across Saudi Arabia",
                  ideal: "Ideal for MD Pediatrics or DNB holders targeting consultant pediatrician roles",
                  icon: "👶"
                },
                {
                  number: "02",
                  name: "Endocrinology Fellowship",
                  demandDriver: "The Gulf has one of the world's highest diabetes prevalence rates, making endocrinology the single most in demand adult specialty",
                  ideal: "Ideal for MD Medicine or equivalent targeting endocrinology consultant roles",
                  icon: "⚕️"
                },
                {
                  number: "03",
                  name: "Nephrology Fellowship",
                  demandDriver: "Elevated CKD prevalence linked to diabetes drives sustained hiring in dialysis and transplant medicine",
                  ideal: "Ideal for MD Medicine or DM Nephrology holders",
                  icon: "🫘"
                },
                {
                  number: "04",
                  name: "Gastroenterology Fellowship",
                  demandDriver: "Growing endoscopy and hepatology demand in Saudi Arabia tertiary care hospitals",
                  ideal: "Ideal for MD Medicine or DM Gastroenterology holders",
                  icon: "🔬"
                },
                {
                  number: "05",
                  name: "Reproductive Medicine (IVF) Fellowship",
                  demandDriver: "Saudi Arabia medical tourism sector prioritises fertility care. Private IVF clinics are expanding rapidly",
                  ideal: "Ideal for obstetricians and gynecologists targeting fertility medicine",
                  icon: "🧬"
                },
                {
                  number: "06",
                  name: "Neonatology Fellowship",
                  demandDriver: "NICU expansion across private and government hospital networks in Saudi Arabia",
                  ideal: "Ideal for MD or DNB Pediatrics holders targeting neonatology consultant roles",
                  icon: "🍼"
                },
                {
                  number: "07",
                  name: "Arthroscopy and Arthroplasty Fellowship",
                  demandDriver: "Saudi Arabia sports medicine and orthopedic sector growth, especially in urban centres",
                  ideal: "Ideal for MS Orthopedics holders targeting sports medicine and joint surgery",
                  icon: "🦴"
                }
              ].map((specialty, index) => (
                <div key={index} className="bg-white p-6 md:p-8 rounded-xl" style={{ border: '1px solid #E5E7EB' }}>
                  <div className="flex gap-4 items-start mb-4">
                    <div className="text-3xl">{specialty.icon}</div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: '#15401E' }}>SPECIALTY {specialty.number}</p>
                      <h3 className="text-xl font-semibold" style={{ color: '#15401E' }}>{specialty.name}</h3>
                    </div>
                  </div>
                  <div className="ml-12">
                    <div className="mb-4 pb-4 border-b" style={{ borderColor: '#E5E7EB' }}>
                      <p className="text-sm" style={{ color: '#6B7280' }}>
                        <strong>Demand driver:</strong> {specialty.demandDriver}
                      </p>
                    </div>
                    <p className="text-sm" style={{ color: '#6B7280' }}>
                      <strong>Ideal for:</strong> {specialty.ideal}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Provider Comparison */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: '#e8f2ea', color: '#15401E' }}>
                <Award className="w-4 h-4" />
                COMPARISON
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#15401E' }}>
                MedFellow vs Other<br/>Academics: Side by Side
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: '#6B7280' }}>
                Two India based fellowship providers compared for Saudi Arabia doctors
              </p>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm" style={{ border: '1px solid #E5E7EB' }}>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr style={{ background: '#e8f2ea', borderBottom: '2px solid #C8E6D0' }}>
                      <th className="px-6 py-4 text-left" style={{ color: '#15401E' }}><strong>Feature</strong></th>
                      <th className="px-6 py-4 text-left" style={{ color: '#15401E' }}><strong>MedFellow Academy</strong></th>
                      <th className="px-6 py-4 text-left" style={{ color: '#15401E' }}><strong>Medline Academics</strong></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                      <td className="px-6 py-4 text-sm" style={{ color: '#15401E' }}>Program Breadth</td>
                      <td className="px-6 py-4 text-sm" style={{ color: '#6B7280' }}>46 specialties across 5 categories</td>
                      <td className="px-6 py-4 text-sm" style={{ color: '#6B7280' }}>Focused on Reproductive Medicine, Andrology, Embryology</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                      <td className="px-6 py-4 text-sm" style={{ color: '#15401E' }}>Primary Delivery Mode</td>
                      <td className="px-6 py-4 text-sm" style={{ color: '#6B7280' }}>Fully Online (12 months) or Hybrid</td>
                      <td className="px-6 py-4 text-sm" style={{ color: '#6B7280' }}>Hybrid or Offline (theory online, practicals in Bengaluru)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                      <td className="px-6 py-4 text-sm" style={{ color: '#15401E' }}>Duration</td>
                      <td className="px-6 py-4 text-sm" style={{ color: '#6B7280' }}>12 months structured</td>
                      <td className="px-6 py-4 text-sm" style={{ color: '#6B7280' }}>9 months theory + offline practicum</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                      <td className="px-6 py-4 text-sm" style={{ color: '#15401E' }}>Fit for Saudi Arabia Working Doctors</td>
                      <td className="px-6 py-4 text-sm" style={{ color: '#6B7280' }}>Designed for working doctors, no travel required for fully online format</td>
                      <td className="px-6 py-4 text-sm" style={{ color: '#6B7280' }}>Requires travel to Bengaluru for practical components</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                      <td className="px-6 py-4 text-sm" style={{ color: '#15401E' }}>SCFHS CV Positioning</td>
                      <td className="px-6 py-4 text-sm" style={{ color: '#6B7280' }}>Certification structured for specialist CV use</td>
                      <td className="px-6 py-4 text-sm" style={{ color: '#6B7280' }}>Certification recognised in fertility sector specifically</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                      <td className="px-6 py-4 text-sm" style={{ color: '#15401E' }}>Fee Transparency</td>
                      <td className="px-6 py-4 text-sm" style={{ color: '#6B7280' }}>Published fee ranges on every program page</td>
                      <td className="px-6 py-4 text-sm" style={{ color: '#6B7280' }}>Fees on application only, contact required</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                      <td className="px-6 py-4 text-sm" style={{ color: '#15401E' }}>Payment Options</td>
                      <td className="px-6 py-4 text-sm" style={{ color: '#6B7280' }}>EMI available, INR billing</td>
                      <td className="px-6 py-4 text-sm" style={{ color: '#6B7280' }}>Contact for quote</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm" style={{ color: '#15401E' }}>Specialty Depth (IVF)</td>
                      <td className="px-6 py-4 text-sm" style={{ color: '#6B7280' }}>IVF fellowship covers core ART curriculum</td>
                      <td className="px-6 py-4 text-sm" style={{ color: '#6B7280' }}>Deeper IVF depth including lab simulation training</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-6 border-t" style={{ borderColor: '#E5E7EB', background: '#e8f2ea' }}>
                <p className="text-sm font-medium mb-2" style={{ color: '#15401E' }}>Best Fit For</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium mb-1" style={{ color: '#15401E' }}>MedFellow Academy</p>
                    <p className="text-sm" style={{ color: '#6B7280' }}>Doctors wanting flexible online specialty credentials across 46 fields</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1" style={{ color: '#15401E' }}>Medline Academics</p>
                    <p className="text-sm" style={{ color: '#6B7280' }}>Doctors focused specifically on IVF and embryology who can travel to Bengaluru</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-xl" style={{ background: '#e8f2ea', border: '1px solid #C8E6D0' }}>
              <p className="text-sm font-medium mb-2" style={{ color: '#15401E' }}>The Practical Takeaway for Saudi Arabia Doctors</p>
              <p className="text-sm" style={{ color: '#6B7280' }}>
                MedFellow suits doctors who want breadth of specialty choice and fully online flexibility. Medline Academics suits doctors with a narrow focus on IVF and embryology who can travel to Bengaluru. Both are legitimate providers. The right choice depends on your specialty focus and travel flexibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Structure & Learning */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: '#e8f2ea', color: '#15401E' }}>
                <Clock className="w-4 h-4" />
                CURRICULUM STRUCTURE
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#15401E' }}>
                What a MedFellow Online<br/>Fellowship Covers
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: '#6B7280' }}>
                Curriculum structure, duration, and certification outcomes explained
              </p>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-2xl mb-8" style={{ border: '1px solid #E5E7EB' }}>
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{ color: '#15401E' }}>12</div>
                  <p className="text-sm" style={{ color: '#6B7280' }}>Months Duration</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{ color: '#15401E' }}>100%</div>
                  <p className="text-sm" style={{ color: '#6B7280' }}>Online Delivery</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{ color: '#15401E' }}>Monthly</div>
                  <p className="text-sm" style={{ color: '#6B7280' }}>Module Schedule</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{ color: '#15401E' }}>Formal</div>
                  <p className="text-sm" style={{ color: '#6B7280' }}>Certificate</p>
                </div>
              </div>

              <div className="border-t pt-8" style={{ borderColor: '#E5E7EB' }}>
                <h3 className="text-xl font-semibold mb-6" style={{ color: '#15401E' }}>Every Fellowship Includes:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <Check className="w-5 h-5 shrink-0" style={{ color: '#52BE80' }} />
                    <div>
                      <p className="font-medium" style={{ color: '#15401E' }}>Live Case Discussions</p>
                      <p className="text-sm" style={{ color: '#6B7280' }}>Interactive clinical scenarios weekly</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Check className="w-5 h-5 shrink-0" style={{ color: '#52BE80' }} />
                    <div>
                      <p className="font-medium" style={{ color: '#15401E' }}>Recorded Lectures</p>
                      <p className="text-sm" style={{ color: '#6B7280' }}>Access anytime, from anywhere</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Check className="w-5 h-5 shrink-0" style={{ color: '#52BE80' }} />
                    <div>
                      <p className="font-medium" style={{ color: '#15401E' }}>Protocol Driven Learning</p>
                      <p className="text-sm" style={{ color: '#6B7280' }}>Evidence-based clinical pathways</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Check className="w-5 h-5 shrink-0" style={{ color: '#52BE80' }} />
                    <div>
                      <p className="font-medium" style={{ color: '#15401E' }}>Structured Assessments</p>
                      <p className="text-sm" style={{ color: '#6B7280' }}>Regular evaluation and feedback</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Check className="w-5 h-5 shrink-0" style={{ color: '#52BE80' }} />
                    <div>
                      <p className="font-medium" style={{ color: '#15401E' }}>Case Based Curriculum</p>
                      <p className="text-sm" style={{ color: '#6B7280' }}>Real clinical scenarios you encounter in Saudi Arabia practice</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Check className="w-5 h-5 shrink-0" style={{ color: '#52BE80' }} />
                    <div>
                      <p className="font-medium" style={{ color: '#15401E' }}>Optional 1-Month Rotation</p>
                      <p className="text-sm" style={{ color: '#6B7280' }}>Clinical hands-on experience for procedural specialties</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl" style={{ background: '#e8f2ea', border: '1px solid #C8E6D0' }}>
              <p style={{ color: '#15401E' }} className="mb-2 font-medium">
                Certification Strength
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                The curriculum is case based. You work through the exact clinical scenarios you encounter in your Saudi Arabia practice. This is not theoretical education. It is clinical education delivered in a flexible format. At the end of the 12 months, you receive a formal fellowship certificate that strengthens your specialist CV for SCFHS credentialing and consultant track hospital applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SCFHS Career Pathway */}
      <section className="py-20" style={{ background: '#F2F3F4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: '#e8f2ea', color: '#15401E' }}>
                <Award className="w-4 h-4" />
                CAREER ALIGNMENT
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#15401E' }}>
                How MedFellow Aligns to the<br/>SCFHS Career Pathway
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: '#6B7280' }}>
                Practical mapping from fellowship certification to consultant eligibility
              </p>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-2xl" style={{ border: '1px solid #E5E7EB' }}>
              <div className="mb-8 pb-8 border-b" style={{ borderColor: '#E5E7EB' }}>
                <h3 className="text-lg font-semibold mb-4" style={{ color: '#15401E' }}>What the fellowship credential signals</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: '#e8f2ea' }}>
                      <span className="text-xl">📚</span>
                    </div>
                    <p className="font-medium" style={{ color: '#15401E' }}>Structured Specialty Training</p>
                    <p className="text-sm mt-2" style={{ color: '#6B7280' }}>Documented expertise in your chosen field</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: '#e8f2ea' }}>
                      <span className="text-xl">💪</span>
                    </div>
                    <p className="font-medium" style={{ color: '#15401E' }}>Commitment</p>
                    <p className="text-sm mt-2" style={{ color: '#6B7280' }}>12-month rigorous dedication to specialisation</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: '#e8f2ea' }}>
                      <span className="text-xl">🎯</span>
                    </div>
                    <p className="font-medium" style={{ color: '#15401E' }}>Consultant Readiness</p>
                    <p className="text-sm mt-2" style={{ color: '#6B7280' }}>Evidence of consultant-level responsibility</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-6" style={{ color: '#15401E' }}>Real example: Endocrinology pathway</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-white" style={{ background: '#15401E' }}>1</div>
                    <div>
                      <p className="font-medium" style={{ color: '#15401E' }}>Doctor A (without fellowship)</p>
                      <p className="text-sm" style={{ color: '#6B7280' }}>MBBS + MD Medicine = Good foundation for consultant consideration</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-white" style={{ background: '#52BE80' }}>2</div>
                    <div>
                      <p className="font-medium" style={{ color: '#15401E' }}>Doctor B (with fellowship)</p>
                      <p className="text-sm" style={{ color: '#6B7280' }}>MBBS + MD Medicine + MedFellow Endocrinology = Stronger specialist profile with documented specialty training</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm" style={{ color: '#6B7280' }}>
                The practical takeaway: A MedFellow fellowship is not a substitute for SCFHS licensing exams. It is a credential that materially strengthens the specialist training section of your SCFHS application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Learning Formats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: '#e8f2ea', color: '#15401E' }}>
                <Globe className="w-4 h-4" />
                DELIVERY OPTIONS
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#15401E' }}>
                Fully Online vs Hybrid Format:<br/>Which One Suits Saudi Arabia Doctors?
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: '#6B7280' }}>
                Choosing the right delivery mode without disrupting your clinical practice
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-8 rounded-2xl" style={{ border: '2px solid #C8E6D0' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-2xl" style={{ background: '#e8f2ea' }}>
                  💻
                </div>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: '#15401E' }}>Fully Online Format</h3>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: '#6B7280' }}>
                  12 months, completely online. No India travel required. Never leave Saudi Arabia.
                </p>
                <div className="space-y-3 mb-6 pb-6 border-b" style={{ borderColor: '#E5E7EB' }}>
                  <div className="flex gap-3">
                    <Check className="w-5 h-5 shrink-0" style={{ color: '#52BE80' }} />
                    <p className="text-sm" style={{ color: '#6B7280' }}>All lectures and case discussions online</p>
                  </div>
                  <div className="flex gap-3">
                    <Check className="w-5 h-5 shrink-0" style={{ color: '#52BE80' }} />
                    <p className="text-sm" style={{ color: '#6B7280' }}>Recorded sessions for flexible access</p>
                  </div>
                  <div className="flex gap-3">
                    <Check className="w-5 h-5 shrink-0" style={{ color: '#52BE80' }} />
                    <p className="text-sm" style={{ color: '#6B7280' }}>8-12 hours per week commitment</p>
                  </div>
                </div>
                <p className="text-sm font-medium" style={{ color: '#15401E' }}>Best for:</p>
                <p className="text-sm" style={{ color: '#6B7280' }}>Endocrinology, Nephrology, general Pediatrics — non-procedural specialties</p>
              </div>

              <div className="bg-white p-8 rounded-2xl" style={{ border: '2px solid #C8E6D0' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-2xl" style={{ background: '#e8f2ea' }}>
                  🏥
                </div>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: '#15401E' }}>Hybrid Format</h3>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: '#6B7280' }}>
                  11 months online + 1 month clinical rotation in India
                </p>
                <div className="space-y-3 mb-6 pb-6 border-b" style={{ borderColor: '#E5E7EB' }}>
                  <div className="flex gap-3">
                    <Check className="w-5 h-5 shrink-0" style={{ color: '#52BE80' }} />
                    <p className="text-sm" style={{ color: '#6B7280' }}>All online components plus hands-on practicum</p>
                  </div>
                  <div className="flex gap-3">
                    <Check className="w-5 h-5 shrink-0" style={{ color: '#52BE80' }} />
                    <p className="text-sm" style={{ color: '#6B7280' }}>Supervised procedural training in India</p>
                  </div>
                  <div className="flex gap-3">
                    <Check className="w-5 h-5 shrink-0" style={{ color: '#52BE80' }} />
                    <p className="text-sm" style={{ color: '#6B7280' }}>Schedule during annual leave or low volume weeks</p>
                  </div>
                </div>
                <p className="text-sm font-medium" style={{ color: '#15401E' }}>Best for:</p>
                <p className="text-sm" style={{ color: '#6B7280' }}>Arthroscopy, Reproductive Medicine, Gastroenterology — procedural specialties</p>
              </div>
            </div>

            <div className="p-8 rounded-2xl text-white text-center" style={{ background: 'linear-gradient(135deg, #15401E 0%, #15401E 100%)' }}>
              <p className="mb-4 font-medium">Prefer to talk? Speak with an admissions advisor</p>
              <p className="text-sm mb-4">Monday to Friday, 9 AM to 6 PM IST (11 AM to 8 PM GST)</p>
              <Link href="tel:+919985044993" className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-lg font-medium text-lg" style={{ color: '#15401E' }}>
                <Phone className="w-5 h-5" />
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Pricing */}
      <section className="py-20" style={{ background: '#F2F3F4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: '#e8f2ea', color: '#15401E' }}>
                <Award className="w-4 h-4" />
                INVESTMENT
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#15401E' }}>
                Fees, EMI Options, and<br/>Payment Pathways for Saudi Arabia Applicants
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: '#6B7280' }}>
                Transparent pricing with INR to local currency guidance
              </p>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-2xl mb-8" style={{ border: '1px solid #E5E7EB' }}>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="p-6 rounded-xl" style={{ background: '#e8f2ea' }}>
                  <h3 className="text-xl font-semibold mb-4" style={{ color: '#15401E' }}>Fully Online Format</h3>
                  <div className="mb-4 pb-4 border-b" style={{ borderColor: '#C8E6D0' }}>
                    <p className="text-sm mb-1" style={{ color: '#6B7280' }}>INR Range</p>
                    <p className="text-2xl font-bold" style={{ color: '#15401E' }}>₹1,50,000 - ₹1,90,000</p>
                  </div>
                  <div className="mb-4 pb-4 border-b" style={{ borderColor: '#C8E6D0' }}>
                    <p className="text-sm mb-1" style={{ color: '#6B7280' }}>April 2026 Exchange</p>
                    <p className="text-sm font-medium" style={{ color: '#15401E' }}>≈ AED 6,600 | ≈ SAR 6,750</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5" style={{ color: '#52BE80' }} />
                    <p className="text-sm" style={{ color: '#6B7280' }}>EMI available across all programs</p>
                  </div>
                </div>

                <div className="p-6 rounded-xl" style={{ background: '#e8f2ea' }}>
                  <h3 className="text-xl font-semibold mb-4" style={{ color: '#15401E' }}>Hybrid Format</h3>
                  <div className="mb-4 pb-4 border-b" style={{ borderColor: '#C8E6D0' }}>
                    <p className="text-sm mb-1" style={{ color: '#6B7280' }}>INR Range</p>
                    <p className="text-2xl font-bold" style={{ color: '#15401E' }}>₹1,80,000 - ₹2,10,000</p>
                  </div>
                  <div className="mb-4 pb-4 border-b" style={{ borderColor: '#C8E6D0' }}>
                    <p className="text-sm mb-1" style={{ color: '#6B7280' }}>Includes 1-month rotation</p>
                    <p className="text-sm font-medium" style={{ color: '#15401E' }}>in India partner hospitals</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5" style={{ color: '#52BE80' }} />
                    <p className="text-sm" style={{ color: '#6B7280' }}>EMI available across all programs</p>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t" style={{ borderColor: '#E5E7EB' }}>
                <p className="text-sm mb-2" style={{ color: '#6B7280' }}>
                  <strong>Payment is billed in INR</strong>, which avoids forex loading for Indian origin doctors who still hold INR accounts.
                </p>
                <p className="text-sm" style={{ color: '#6B7280' }}>
                  Exchange rates fluctuate, so confirm the current quote with admissions before remitting.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl text-white text-center" style={{ background: 'linear-gradient(135deg, #15401E 0%, #15401E 100%)' }}>
              <p className="mb-4 font-medium">Get your exact fee quote today</p>
              <Link href="mailto:info@medfellow.in" className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-lg font-medium" style={{ color: '#15401E' }}>
                <Mail className="w-5 h-5" />
                Email Admissions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: '#e8f2ea', color: '#15401E' }}>
                <Check className="w-4 h-4" />
                APPLICATION PROCESS
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#15401E' }}>
                How to Apply: A 5 Step<br/>Process for Saudi Arabia Based Doctors
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: '#6B7280' }}>
                From enquiry to admissions decision in under 7 days
              </p>
            </div>

            <div className="space-y-6 mb-8">
              {[
                {
                  step: 1,
                  title: "Fill Online Application",
                  description: "Visit medfellowacademy.com/apply with your MBBS or MD credentials and preferred specialty."
                },
                {
                  step: 2,
                  title: "Schedule Advisor Call",
                  description: "Book a 20-minute call with a MedFellow admissions advisor via WhatsApp or phone. Saudi Arabia applicants receive priority scheduling."
                },
                {
                  step: 3,
                  title: "Submit Documents",
                  description: "Medical degree certificates, valid practice licence, and a short statement of intent explaining your specialty goals."
                },
                {
                  step: 4,
                  title: "Receive Decision",
                  description: "Admissions decision within 72 hours of complete document submission — typically 5 working days total."
                },
                {
                  step: 5,
                  title: "Confirm Enrollment",
                  description: "Confirm your seat with the enrolment fee and receive the onboarding welcome pack with your start date."
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl text-white font-bold" style={{ background: '#15401E' }}>
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-semibold" style={{ color: '#15401E' }}>{item.title}</h3>
                    <p className="text-sm mt-1" style={{ color: '#6B7280' }}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-2xl text-white text-center" style={{ background: 'linear-gradient(135deg, #15401E 0%, #15401E 100%)' }}>
              <p className="mb-4 font-medium">Ready for the April 2026 batch?</p>
              <p className="text-sm mb-6">Receive a priority decision within 72 hours for Saudi Arabia based applicants</p>
              <Link href="/apply" className="inline-flex items-center gap-2 px-8 py-4 bg-white rounded-lg font-medium text-lg" style={{ color: '#15401E' }}>
                Start Application
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* First Month Experience */}
      <section className="py-20" style={{ background: '#F2F3F4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: '#e8f2ea', color: '#15401E' }}>
                <Sparkles className="w-4 h-4" />
                ONBOARDING
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#15401E' }}>
                What to Expect After<br/>You Enrol: First 30 Days
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: '#6B7280' }}>
                Onboarding, faculty access, and first month curriculum walkthrough
              </p>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-2xl mb-8" style={{ border: '1px solid #E5E7EB' }}>
              <div className="space-y-8">
                {[
                  {
                    week: "Week 1",
                    title: "Platform Onboarding & Faculty Introduction",
                    description: "Access to the complete curriculum library. Meet your faculty team and understand the learning structure.",
                    icon: "🎯"
                  },
                  {
                    week: "Week 2",
                    title: "First Live Module Session",
                    description: "Join your first live case discussion and Q&A with faculty. Real-time interaction and networking with peers.",
                    icon: "📚"
                  },
                  {
                    week: "Week 3",
                    title: "First Case-Based Assignment",
                    description: "Apply learning to clinical scenarios. Submit your first assignment and begin the assessment cycle.",
                    icon: "📋"
                  },
                  {
                    week: "Week 4",
                    title: "Faculty Feedback & Month Ahead",
                    description: "Receive feedback on your first assignment. Get a preview of month two content and adjust your schedule accordingly.",
                    icon: "💬"
                  }
                ].map((item, index) => (
                  <div key={index} className="pb-8 border-b last:border-0 last:pb-0" style={{ borderColor: '#E5E7EB' }}>
                    <div className="flex gap-4 items-start">
                      <div className="text-3xl">{item.icon}</div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold mb-1" style={{ color: '#15401E' }}>{item.week}</p>
                        <h3 className="font-semibold mb-2" style={{ color: '#15401E' }}>{item.title}</h3>
                        <p className="text-sm" style={{ color: '#6B7280' }}>{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t" style={{ borderColor: '#E5E7EB' }}>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                  <strong>The first 30 days set the tone for the full fellowship.</strong> You'll transition from orientation to active learning within the first week, and by week 3, you'll be fully integrated into the curriculum with regular faculty contact and structured assessments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: '#e8f2ea', color: '#15401E' }}>
                <Award className="w-4 h-4" />
                CAREER GROWTH
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#15401E' }}>
                Real Career Outcomes:<br/>Where MedFellow Fellows Work in Saudi Arabia
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: '#6B7280' }}>
                Consultant roles, private practice expansion, and specialist placements
              </p>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-2xl" style={{ border: '1px solid #E5E7EB' }}>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{ color: '#15401E' }}>↗️</div>
                  <h3 className="font-semibold mb-2" style={{ color: '#15401E' }}>Consultant Promotion</h3>
                  <p className="text-sm" style={{ color: '#6B7280' }}>Transition from Medical Officer to Consultant at SCFHS hospitals</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{ color: '#15401E' }}>🏪</div>
                  <h3 className="font-semibold mb-2" style={{ color: '#15401E' }}>Private Practice Growth</h3>
                  <p className="text-sm" style={{ color: '#6B7280' }}>Transition from general practice to specialist clinic ownership</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{ color: '#15401E' }}>👥</div>
                  <h3 className="font-semibold mb-2" style={{ color: '#15401E' }}>Leadership Roles</h3>
                  <p className="text-sm" style={{ color: '#6B7280' }}>Appointment to department head roles at tertiary care centres</p>
                </div>
              </div>

              <div className="p-6 rounded-xl border-t" style={{ borderColor: '#E5E7EB', background: '#e8f2ea' }}>
                <p style={{ color: '#15401E' }} className="font-medium mb-2">
                  The Common Pattern
                </p>
                <p className="text-sm" style={{ color: '#6B7280' }}>
                  The fellowship does not guarantee placement. It removes a credentialing barrier. Once that barrier is removed, the doctor's clinical experience in Saudi Arabia does the rest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Before Footer */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-5 md:px-6">
          <div className="p-12 rounded-3xl text-center text-white" style={{ background: 'linear-gradient(135deg, #15401E 0%, #15401E 100%)' }}>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Ready to Start Your Fellowship?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Apply now and get your admission decision within 72 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white rounded-lg font-medium hover:opacity-90 transition-all shadow-lg text-lg" style={{ color: '#15401E' }}>
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white transition-all text-lg hover:text-[#15401E]">
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

"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from 'next/image';
import { useState } from "react";
import { ArrowRight, Check, Phone, Mail, MessageCircle } from "lucide-react";

export default function DubaiProgramsHub() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const prioritySpecialties = [
    {
      number: "01",
      icon: "🧠",
      name: "Pediatrics Fellowship",
      slug: "fellowship-in-pediatrics",
      description: "Build strong child care expertise with flexible training suited for pediatric practice in Dubai.",
      demandDriver: "Expanding maternity and child health infrastructure across Dubai. Ideal for MD Pediatrics or DNB holders targeting consultant pediatrician roles."
    },
    {
      number: "02",
      icon: "🧬",
      name: "Endocrinology Fellowship",
      slug: "fellowship-in-endocrinology",
      description: "Enhance skills in diabetes and hormonal care with practical training aligned to Dubai clinics.",
      demandDriver: "The Gulf has one of the world's highest diabetes prevalence rates — the single most in-demand adult specialty."
    },
    {
      number: "03",
      icon: "🩺",
      name: "Nephrology Fellowship",
      slug: "fellowship-in-nephrology",
      description: "Strengthen kidney care and dialysis expertise with structured learning for real clinical needs.",
      demandDriver: "Elevated CKD prevalence linked to diabetes drives sustained hiring in dialysis and transplant medicine."
    },
    {
      number: "04",
      icon: "🧪",
      name: "Gastroenterology Fellowship",
      slug: "fellowship-in-gastroenterology",
      description: "Learn modern approaches to digestive disorders with flexible, case-based clinical training.",
      demandDriver: "Growing endoscopy and hepatology demand in Dubai tertiary care hospitals."
    },
    {
      number: "05",
      icon: "👶",
      name: "Reproductive Medicine Fellowship",
      slug: "fellowship-in-reproductive-medicine",
      description: "Build expertise in IVF and fertility care with training designed for Dubai healthcare demand.",
      demandDriver: "Dubai medical tourism prioritises fertility care. Private IVF clinics are expanding rapidly."
    },
    {
      number: "06",
      icon: "🍼",
      name: "Neonatology Fellowship",
      slug: "fellowship-in-neonatology",
      description: "Develop NICU and newborn care skills with structured training for pediatric specialists.",
      demandDriver: "NICU expansion across private and government hospital networks in Dubai."
    },
    {
      number: "07",
      icon: "🦴",
      name: "Arthroscopy & Arthroplasty Fellowship",
      slug: "fellowship-in-arthroscopy-and-arthroplasty",
      description: "Advance joint surgery and sports injury skills with practical orthopedic training programs.",
      demandDriver: "Dubai sports medicine and orthopedic sector growth, especially in urban centres."
    }
  ];

  const testimonials = [
    {
      quote: "I completed the Pediatrics fellowship while practising at a DHCC clinic. The certification was decisive in my consultant application. The structured curriculum was the exact training my CV was missing.",
      author: "Dr Arjun Menon",
      role: "Consultant Pediatrician · Dubai Healthcare City",
      rating: 5
    },
    {
      quote: "The fully online format worked around my Dubai practice hours. The faculty was accessible, the case studies relevant, and DHA accepted the certification without question. I now lead endocrinology at my clinic.",
      author: "Dr Shalini Rao",
      role: "Endocrinologist · Al Barsha",
      rating: 5
    },
    {
      quote: "The Arthroscopy fellowship with the hybrid rotation was exactly what I needed. The 1-month practicum in India was intensive. My sports medicine practice in Jumeirah doubled referrals in 6 months.",
      author: "Dr Nikhil Agarwal",
      role: "Orthopedic Surgeon · Jumeirah",
      rating: 5
    },
    {
      quote: "I was a general pediatrician for 8 years before I enrolled in Neonatology. The program gave me the structured NICU training I needed. I now work in a DHA hospital NICU as a neonatology consultant.",
      author: "Dr Deepa Krishnan",
      role: "Neonatologist · Dubai",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Is MedFellow Academy recognised for DHA specialist applications in Dubai?",
      answer: "MedFellow Academy fellowship certificates are India-issued specialty credentials. They strengthen the specialty training section of a DHA specialist application but do not replace DHA licensing exams. DHA reviewers weigh the certificate during specialist categorisation, and fellows consistently report the credential accelerates the categorisation review when submitted alongside MBBS and MD documents."
    },
    {
      question: "Can I continue practising in Dubai during the fellowship?",
      answer: "Yes. The entire 12-month curriculum is delivered online with recorded sessions, live weekly interactions, and flexible assignments. Dubai-based doctors typically spend 8-12 hours per week on coursework, scheduled around their clinic hours. You never need to leave Dubai for the fully online format."
    },
    {
      question: "How does MedFellow compare to Medline Academics for Dubai-based doctors?",
      answer: "MedFellow offers 46 specialties delivered fully online with optional hybrid rotation, which suits Dubai doctors who want breadth of specialty choice and zero travel disruption. Medline Academics focuses deeply on Reproductive Medicine, Andrology, and Embryology with hybrid or offline delivery requiring travel to Bengaluru."
    },
    {
      question: "What are the total fees including the optional clinical rotation?",
      answer: "Fully online format ranges from ₹1,50,000 to ₹1,90,000 (approximately AED 6,600-8,300). The hybrid format ranges from ₹1,80,000 to ₹2,10,000. EMI options are available across all programs."
    },
    {
      question: "Which fellowship has the highest ROI for doctors in Dubai?",
      answer: "Based on hiring trends: Endocrinology (driven by diabetes prevalence), Reproductive Medicine (fertility sector growth), Pediatrics and Neonatology (maternity care expansion), and Arthroscopy/Arthroplasty (sports medicine growth). The right choice depends on your current specialty."
    },
    {
      question: "Do I need to travel to India for any part of the fellowship?",
      answer: "No, not for the fully online format. The entire 12-month curriculum is delivered online with no India travel required. Only the optional hybrid format requires a 1-month clinical rotation in India, which can be scheduled during your annual leave."
    },
    {
      question: "What documents do I need to apply as a Dubai-based doctor?",
      answer: "You need: MBBS degree certificate, MD/MS/DNB postgraduate certificate (where required), valid medical practice licence from Dubai or India, a short statement of intent, and a recent CV. Documents can be scanned and uploaded through the application portal."
    },
    {
      question: "How quickly will I get an admissions decision?",
      answer: "Dubai-based applicants typically receive an admissions decision within 72 hours of complete document submission. The process includes credential review, a 20-minute consultation, and final decision within 48 hours of consultation."
    },
    {
      question: "Will the certificate be recognised by hospitals in Dubai?",
      answer: "The fellowship certificate is recognised as a structured specialty credential by private hospitals across Dubai when submitted alongside your MBBS and postgraduate degrees. For DHA hospitals, it's weighted as supplementary specialist training that strengthens your overall application."
    },
    {
      question: "Can I speak to a MedFellow advisor before I apply?",
      answer: "Yes. Call +91 99850 44993 during Monday-Friday, 9 AM-6 PM IST (11 AM-8 PM GST), email info@medfellow.in, or message on WhatsApp for the fastest response."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e40af] via-[#2563eb] to-[#3b82f6] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNIDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">APRIL 2026 INTAKE · DUBAI PRIORITY LANE</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Online Fellowship Programs for Doctors in Dubai
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              46 fellowships built for working doctors in Dubai. DHA-aligned credentials. Fully online or hybrid. Specialise without pausing your practice.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/apply" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#2563eb] rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-xl text-lg">
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#2563eb] transition-all text-lg">
                Schedule Consultation
              </Link>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>DHA-aligned credentials</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>12-month structured</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>72h decision</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#2563eb] mb-2">52+</div>
              <div className="text-sm text-gray-600">Specialty Fellowships</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#2563eb] mb-2">4,200+</div>
              <div className="text-sm text-gray-600">Doctors Trained Globally</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#2563eb] mb-2">22+</div>
              <div className="text-sm text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#2563eb] mb-2">4.8/5</div>
              <div className="text-sm text-gray-600">Rated by Doctors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Dubai Doctors Need Fellowship */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-[#2563eb]/10 text-[#2563eb] rounded-full text-sm font-semibold mb-4">
                THE 2026 CREDENTIALING GAP
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Indian Doctors in Dubai Need a Specialist Fellowship
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                The 2026 credentialing gap every practising doctor faces.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#2563eb]/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">DHA raised the bar</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  January 2026 guidelines weight structured fellowship training more heavily for specialist categorisation across DHA-regulated hospitals.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#2563eb]/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Where Dubai hires</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Mediclinic, Aster, NMC and the Dubai Healthcare City network favour candidates with specialty fellowship credentials on consultant tracks.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#2563eb]/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⏰</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">You can't pause practice</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Most Dubai doctors can't take 2-3 years off campus. The credential gap stays open — unless training fits around clinical hours.
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gradient-to-br from-[#2563eb]/5 to-transparent rounded-xl border border-[#2563eb]/20">
              <p className="text-center text-gray-700 mb-4">
                <strong>Not sure which of the 46 specialties fits your career goals?</strong>
              </p>
              <p className="text-center text-gray-600 text-sm mb-6">
                Book a free 20-minute consultation with our medical education advisors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/apply" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2563eb] text-white rounded-lg font-semibold hover:bg-[#1e40af] transition-all">
                  Apply Now
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-[#2563eb] text-[#2563eb] rounded-lg font-semibold hover:bg-[#2563eb] hover:text-white transition-all">
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 Priority Specialties */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-[#2563eb]/10 text-[#2563eb] rounded-full text-sm font-semibold mb-4">
                TOP FELLOWSHIP PROGRAMS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Explore Top Fellowships for Dubai Doctors
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Upgrade your specialisation without pausing your practice. High-demand fellowships aligned with DHA career growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {prioritySpecialties.slice(0, 6).map((specialty, index) => (
                <Link
                  key={index}
                  href={`/dubai/programs/${specialty.slug}`}
                  className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-[#2563eb] hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl">{specialty.icon}</div>
                    <div className="text-2xl font-bold text-gray-300">{specialty.number}</div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#2563eb] transition-colors">
                    {specialty.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {specialty.description}
                  </p>
                  <div className="flex items-center gap-2 text-[#2563eb] text-sm font-semibold">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}

              {/* 7th Specialty */}
              <Link
                href={`/dubai/programs/${prioritySpecialties[6].slug}`}
                className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-[#2563eb] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{prioritySpecialties[6].icon}</div>
                  <div className="text-2xl font-bold text-gray-300">{prioritySpecialties[6].number}</div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#2563eb] transition-colors">
                  {prioritySpecialties[6].name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {prioritySpecialties[6].description}
                </p>
                <div className="flex items-center gap-2 text-[#2563eb] text-sm font-semibold">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>

            {/* All Programs Link */}
            <div className="bg-gradient-to-br from-[#2563eb] to-[#1e40af] p-8 rounded-xl text-white text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-3">All Fellowship Programs for Dubai Doctors</h3>
              <p className="text-white/90 mb-6">
                Explore 40+ specialties designed to help doctors in Dubai build skills and grow their careers.
              </p>
              <Link href="/programs" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#2563eb] rounded-lg font-semibold hover:bg-gray-50 transition-all">
                Browse all 46 specialties
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-[#2563eb]/10 text-[#2563eb] rounded-full text-sm font-semibold mb-4">
                PROGRAM STRUCTURE
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What a MedFellow Online Fellowship Covers
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Curriculum, duration, and certification — explained.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 mb-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                Every fellowship is a <strong>12-month online program</strong> of monthly modules, live case discussions, recorded lectures and structured assessments. Case-based, not theoretical. You receive a formal fellowship certificate that strengthens your specialist CV for DHA credentialing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="w-12 h-12 bg-[#2563eb]/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Monthly modules</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Protocol-driven curriculum built around the cases you see in your Dubai clinic, not theory.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="w-12 h-12 bg-[#2563eb]/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎥</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Live + recorded</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Weekly live case discussions plus on-demand lectures fit around clinic and family schedules.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="w-12 h-12 bg-[#2563eb]/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Optional rotation</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  1-month India rotation for procedural specialties — schedule it inside your annual leave.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="w-12 h-12 bg-[#2563eb]/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Formal certificate</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Issued at month 12, structured for the DHA specialist application and consultant track CV.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DHA Pathway */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-[#2563eb]/10 text-[#2563eb] rounded-full text-sm font-semibold mb-4">
                DHA CAREER PATHWAY
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How MedFellow Aligns to the DHA Pathway
              </h2>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 mb-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                A MedFellow fellowship is <strong>not a substitute for DHA licensing exams</strong>. It is a credential that materially strengthens the specialist training section of your DHA application.
              </p>
              <p className="text-gray-700 leading-relaxed">
                A doctor with MBBS plus MD and a MedFellow fellowship in Endocrinology presents a stronger specialist profile than the same doctor with MBBS plus MD alone. The certificate signals structured training, commitment, and consultant-level readiness.
              </p>
            </div>

            {/* DHA Steps */}
            <div className="bg-gradient-to-br from-[#2563eb]/5 to-transparent p-8 rounded-xl border border-[#2563eb]/20">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">DHA SPECIALIST TRACK</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-[#2563eb] text-white rounded-full font-bold text-sm flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">MBBS</h4>
                    <p className="text-sm text-gray-600">Base eligibility</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-[#2563eb] text-white rounded-full font-bold text-sm flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">MD / MS / DNB</h4>
                    <p className="text-sm text-gray-600">Postgraduate qualification</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-[#10b981] text-white rounded-full font-bold text-sm flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">MedFellow Fellowship</h4>
                    <p className="text-sm text-gray-600">Specialist credential booster</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-[#10b981] text-white rounded-full font-bold text-sm flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">DHA Specialist Categorisation</h4>
                    <p className="text-sm text-gray-600">Consultant track unlocked</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-[#2563eb]/10 text-[#2563eb] rounded-full text-sm font-semibold mb-4">
                DOCTOR SUCCESS STORIES
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Testimonials from MedFellow Fellows in Dubai
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-[#2563eb]/10 text-[#2563eb] rounded-full text-sm font-semibold mb-4">
                TRANSPARENT PRICING
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Fees, EMI Options & Payment Pathways
              </h2>
              <p className="text-lg text-gray-600">
                INR billing avoids forex loading. EMI available across all programs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-[#2563eb] transition-colors">
                <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold mb-4">
                  FULLY ONLINE
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">12 months · No travel required</h3>
                <div className="mb-6">
                  <div className="text-3xl font-bold text-[#2563eb] mb-1">₹1,50,000 – ₹1,90,000</div>
                  <div className="text-sm text-gray-600">≈ AED 6,600 – 8,300 (April 2026)</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>46 specialties available</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Live + recorded sessions</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Case-based assessments</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Formal fellowship certificate</span>
                  </li>
                </ul>
                <Link href="/apply" className="block w-full text-center px-6 py-3 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition-all">
                  Apply for this format
                </Link>
              </div>

              <div className="bg-gradient-to-br from-[#2563eb] to-[#1e40af] p-8 rounded-xl text-white relative overflow-hidden">
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold">
                  RECOMMENDED
                </div>
                <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold mb-4">
                  HYBRID
                </div>
                <h3 className="text-xl font-bold mb-2">11 months online + 1 month rotation</h3>
                <div className="mb-6">
                  <div className="text-3xl font-bold mb-1">₹1,80,000 – ₹2,10,000</div>
                  <div className="text-sm text-white/80">≈ AED 7,900 – 9,200 (April 2026)</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Everything in Fully Online</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>1-month India clinical rotation</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Supervised procedural exposure</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Recommended for procedural specialties</span>
                  </li>
                </ul>
                <Link href="/apply" className="block w-full text-center px-6 py-3 bg-white text-[#2563eb] rounded-lg font-semibold hover:bg-gray-50 transition-all">
                  Apply for this format
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-[#2563eb]/10 text-[#2563eb] rounded-full text-sm font-semibold mb-4">
                SIMPLE APPLICATION PROCESS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How to Apply: 5 Steps for Dubai Doctors
              </h2>
              <p className="text-lg text-gray-600">
                From enquiry to admissions decision in under 7 days.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Submit application",
                  description: "Fill the form at medfellowacademy.com/apply with your MBBS or MD credentials and preferred specialty."
                },
                {
                  step: "02",
                  title: "20-minute advisor call",
                  description: "Schedule via WhatsApp or phone. Dubai applicants get priority scheduling."
                },
                {
                  step: "03",
                  title: "Submit documents",
                  description: "Medical degree certificates, valid practice licence, short statement of intent."
                },
                {
                  step: "04",
                  title: "Decision in 72 hours",
                  description: "Admissions decision delivered within 72 hours of complete document submission."
                },
                {
                  step: "05",
                  title: "Confirm seat",
                  description: "Pay enrolment fee and receive the onboarding welcome pack with your start date."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex items-center justify-center w-14 h-14 bg-[#2563eb] text-white rounded-full font-bold text-lg flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-[#2563eb]/10 text-[#2563eb] rounded-full text-sm font-semibold mb-4">
                COMMON QUESTIONS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Detailed FAQs
              </h2>
              <p className="text-lg text-gray-600">
                Online Fellowship Programs for Doctors in Dubai, answered in detail.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                        openFaq === index ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#2563eb] via-[#1e40af] to-[#1e3a8a] rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCA0LjNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
              </div>
              
              <div className="relative z-10">
                <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
                  APRIL 2026 BATCH · DUBAI PRIORITY LANE
                </div>
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                  Ready to Start Your Specialist Journey in Dubai?
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  46 fellowship programs. Online and flexible. Designed for Dubai doctors.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Link href="/apply" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#2563eb] rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-xl">
                    Apply Now
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#2563eb] transition-all">
                    Schedule Consultation
                  </Link>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 text-sm border-t border-white/20 pt-6">
                  <a href="tel:+919985044993" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                    <Phone className="w-4 h-4" />
                    <span>+91 99850 44993</span>
                  </a>
                  <a href="mailto:info@medfellow.in" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                    <Mail className="w-4 h-4" />
                    <span>info@medfellow.in</span>
                  </a>
                  <a href="https://wa.me/919985044993" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Admissions</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-gray-600">
              www.medfellowacademy.com · Dubai Emirate Programs Hub · Confidential · April 2026
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

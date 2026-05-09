"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check, Clock, Award, Star, Sparkles, Users, MapPin, BookOpen, Target } from "lucide-react";
import { motion } from "framer-motion";

interface ProgramPageProps {
  params: {
    slug: string;
  };
}

// Dubai-specific fellowship data
const dubaiProgramsData: { [key: string]: any } = {
  "fellowship-in-pediatrics": {
    title: "Fellowship in Pediatrics for Doctors in Dubai",
    name: "Pediatrics Fellowship",
    icon: "👶",
    duration: "12 Months",
    eligibility: "MD Pediatrics / DNB Pediatrics",
    description: "Build advanced child care expertise with flexible online training aligned to Dubai's expanding pediatric healthcare sector.",
    overview: "A 12-month structured online program designed for doctors in Dubai to enhance expertise in neonatal care, pediatric emergencies, and child development while continuing clinical practice.",
    highlights: [
      "NICU fundamentals and management",
      "Pediatric emergencies and critical care",
      "Child development and growth monitoring",
      "Immunization protocols and disease prevention",
      "Pediatric procedures and clinical skills"
    ],
    whyDubai: {
      demand: "Dubai's healthcare sector is expanding rapidly, driven by medical tourism and strong investment in maternal and child healthcare infrastructure.",
      credentialing: "With DHA's evolving specialist licensing framework, fellowship credentials are increasingly preferred for consultant-level progression.",
      opportunities: [
        "DHA-regulated hospitals",
        "Private pediatric clinics",
        "Dubai Healthcare City centers",
        "Multispecialty healthcare facilities"
      ]
    },
    curricula: [
      {
        month: "Months 1-3",
        title: "Fundamentals of Pediatric Practice",
        modules: [
          "Pediatric physical examination and assessment",
          "Normal child development and growth",
          "Neonatal assessment and care",
          "Common pediatric presentations"
        ]
      },
      {
        month: "Months 4-6",
        title: "Pediatric Acute Care",
        modules: [
          "Pediatric emergencies and resuscitation",
          "Acute respiratory infections",
          "Gastrointestinal emergencies",
          "Febrile child management"
        ]
      },
      {
        month: "Months 7-9",
        title: "Chronic Disease Management",
        modules: [
          "Asthma and allergies in children",
          "Diabetes and metabolic disorders",
          "Chronic kidney disease",
          "Neurological disorders"
        ]
      },
      {
        month: "Months 10-12",
        title: "Specialization & Capstone",
        modules: [
          "Advanced clinical cases",
          "Research methodology in pediatrics",
          "DHA-aligned practice standards",
          "Capstone project and assessment"
        ]
      }
    ],
    careerOutcomes: [
      {
        role: "Consultant Pediatrician",
        description: "Lead pediatric departments at DHA-regulated hospitals"
      },
      {
        role: "Specialist Private Practice",
        description: "Establish or lead pediatric clinics in Dubai"
      },
      {
        role: "Department Head",
        description: "Head pediatrics departments at tertiary care centers"
      },
      {
        role: "Medical Tourism Leader",
        description: "Lead pediatric care at international healthcare facilities"
      }
    ],
    pricing: {
      onlineFormat: {
        price: "₹1,50,000 - ₹1,70,000",
        aed: "~AED 6,600 - 7,500",
        sar: "~SAR 6,750 - 7,650",
        format: "12 months fully online"
      },
      hybridFormat: {
        price: "₹1,80,000 - ₹2,00,000",
        aed: "~AED 7,900 - 8,800",
        sar: "~SAR 8,050 - 8,950",
        format: "11 months online + 1 month clinical rotation"
      }
    },
    applicationProcess: [
      {
        step: 1,
        title: "Submit Online Application",
        description: "Fill application with MBBS and MD/DNB certificates"
      },
      {
        step: 2,
        title: "Admission Consultation",
        description: "20-minute call with admissions advisor (priority for Dubai applicants)"
      },
      {
        step: 3,
        title: "Document Submission",
        description: "Medical degree certificates, practice license, statement of intent"
      },
      {
        step: 4,
        title: "Admission Decision",
        description: "Decision within 72 hours of complete document submission"
      },
      {
        step: 5,
        title: "Enrollment & Onboarding",
        description: "Confirm seat, receive welcome pack, and start date"
      }
    ],
    faqs: [
      {
        question: "Is this fellowship recognized by DHA for specialist applications?",
        answer: "Yes. The MedFellow Pediatrics fellowship strengthens your specialist training section of DHA applications. It is weighted as supplementary specialist training that demonstrates structured expertise and commitment to the field."
      },
      {
        question: "Can I work in Dubai while doing the fellowship?",
        answer: "Absolutely. The 12-month program is 100% online with recorded sessions and flexible assignments. Most Dubai doctors complete it in 8-12 hours per week around their clinic schedules."
      },
      {
        question: "What's the difference between online and hybrid formats?",
        answer: "Online: 12 months fully remote, no travel required. Hybrid: 11 months online + 1 month clinical rotation in India for hands-on pediatric procedures. Choose based on your specialty focus."
      },
      {
        question: "How quickly can I start after applying?",
        answer: "Dubai applicants typically get an admission decision within 72 hours. Once approved, you can start with the next batch, typically within 2-4 weeks."
      },
      {
        question: "What hospitals hire MedFellow graduates in Dubai?",
        answer: "Graduates work at Mediclinic, Aster, NMC, Dubai Healthcare City centers, and private pediatric clinics. The fellowship demonstrates the specialist credentialing that these facilities require."
      }
    ],
    testimonials: [
      {
        quote: "The Pediatrics fellowship was decisive in my consultant application at DHCC. The structured curriculum gave my CV exactly what was missing.",
        author: "Dr Arjun Menon",
        role: "Consultant Pediatrician, Dubai Healthcare City",
        rating: 5
      },
      {
        quote: "Working full-time while completing the fellowship was seamless. The faculty was accessible and the cases were relevant to my Dubai practice.",
        author: "Dr Priya Sharma",
        role: "Pediatrician, Al Barsha",
        rating: 5
      }
    ]
  }
};

export default function DubaiProgramDetail({ params }: ProgramPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const program = dubaiProgramsData[params.slug];

  if (!program) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Program not found</h1>
            <Link href="/dubai/programs" className="text-blue-600 hover:underline">
              Back to Dubai Programs
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1B4F72 0%, #2E86C1 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full" style={{ background: '#D6EAF8' }}></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full" style={{ background: '#AED6F1' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 lg:py-32 relative z-10">
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
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-4 sm:mb-6 leading-tight px-2"
            >
              {program.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed px-2"
            >
              {program.overview}
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
                <span>12 Months Online</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" style={{ color: '#52BE80' }} />
                <span>DHA-Aligned</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" style={{ color: '#52BE80' }} />
                <span>No Travel Required</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 sm:py-10 md:py-12" style={{ background: '#EAF2FB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-semibold mb-1" style={{ color: '#1B4F72' }}>12</div>
              <div className="text-xs md:text-sm" style={{ color: '#5D6D7E' }}>Months Duration</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-semibold mb-1" style={{ color: '#1B4F72' }}>100%</div>
              <div className="text-xs md:text-sm" style={{ color: '#5D6D7E' }}>Online Format</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-semibold mb-1" style={{ color: '#1B4F72' }}>72h</div>
              <div className="text-xs md:text-sm" style={{ color: '#5D6D7E' }}>Decision Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-semibold mb-1" style={{ color: '#1B4F72' }}>4.8/5</div>
              <div className="text-xs md:text-sm" style={{ color: '#5D6D7E' }}>Rated by Doctors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Pediatrics in Dubai */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: '#D6EAF8', color: '#2E86C1' }}>
                <MapPin className="w-4 h-4" />
                DUBAI OPPORTUNITY
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#1B4F72' }}>
                Why Pediatrics Fellowship<br/>is High Demand in Dubai
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-8 rounded-2xl" style={{ border: '1px solid #BFC9CA' }}>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: '#1B4F72' }}>Market Growth</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#5D6D7E' }}>
                  {program.whyDubai.demand}
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl" style={{ border: '1px solid #BFC9CA' }}>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: '#1B4F72' }}>Credentialing Advantage</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#5D6D7E' }}>
                  {program.whyDubai.credentialing}
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl" style={{ border: '1px solid #BFC9CA' }}>
              <h3 className="text-xl font-semibold mb-6" style={{ color: '#1B4F72' }}>Career Opportunities in Dubai</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {program.whyDubai.opportunities.map((opportunity, index) => (
                  <div key={index} className="flex gap-3">
                    <Check className="w-5 h-5 shrink-0" style={{ color: '#52BE80' }} />
                    <p className="text-sm" style={{ color: '#5D6D7E' }}>{opportunity}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20" style={{ background: '#F2F3F4' }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: '#D6EAF8', color: '#2E86C1' }}>
                <BookOpen className="w-4 h-4" />
                CURRICULUM
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#1B4F72' }}>
                12-Month Curriculum<br/>Overview
              </h2>
            </div>

            <div className="space-y-6">
              {program.curricula.map((curriculum, index) => (
                <div key={index} className="bg-white p-6 md:p-8 rounded-xl" style={{ border: '1px solid #BFC9CA' }}>
                  <div className="flex gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold" style={{ background: '#2E86C1' }}>
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: '#2E86C1' }}>{curriculum.month}</p>
                      <h3 className="text-lg font-semibold" style={{ color: '#1B4F72' }}>{curriculum.title}</h3>
                    </div>
                  </div>
                  <ul className="ml-16 space-y-2">
                    {curriculum.modules.map((module, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span style={{ color: '#52BE80' }}>•</span>
                        <span className="text-sm" style={{ color: '#5D6D7E' }}>{module}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: '#D6EAF8', color: '#2E86C1' }}>
                <Target className="w-4 h-4" />
                CAREER PATHS
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#1B4F72' }}>
                Where Graduates Work<br/>in Dubai
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {program.careerOutcomes.map((outcome, index) => (
                <div key={index} className="bg-white p-6 rounded-xl" style={{ border: '1px solid #BFC9CA' }}>
                  <h3 className="font-semibold mb-2" style={{ color: '#1B4F72' }}>{outcome.role}</h3>
                  <p className="text-sm" style={{ color: '#5D6D7E' }}>{outcome.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20" style={{ background: '#EAF2FB' }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: '#D6EAF8', color: '#2E86C1' }}>
                <Award className="w-4 h-4" />
                INVESTMENT
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#1B4F72' }}>
                Transparent Pricing
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-8 rounded-2xl" style={{ border: '2px solid #2E86C1' }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#1B4F72' }}>Fully Online Format</h3>
                <div className="mb-4 pb-4 border-b" style={{ borderColor: '#BFC9CA' }}>
                  <p className="text-sm mb-1" style={{ color: '#5D6D7E' }}>INR</p>
                  <p className="text-2xl font-bold" style={{ color: '#2E86C1' }}>{program.pricing.onlineFormat.price}</p>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs" style={{ color: '#5D6D7E' }}>AED</p>
                    <p className="font-semibold" style={{ color: '#1B4F72' }}>{program.pricing.onlineFormat.aed}</p>
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: '#5D6D7E' }}>SAR</p>
                    <p className="font-semibold" style={{ color: '#1B4F72' }}>{program.pricing.onlineFormat.sar}</p>
                  </div>
                  <p className="text-xs pt-2" style={{ color: '#5D6D7E' }}>{program.pricing.onlineFormat.format}</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl" style={{ border: '2px solid #AED6F1' }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#1B4F72' }}>Hybrid Format</h3>
                <div className="mb-4 pb-4 border-b" style={{ borderColor: '#BFC9CA' }}>
                  <p className="text-sm mb-1" style={{ color: '#5D6D7E' }}>INR</p>
                  <p className="text-2xl font-bold" style={{ color: '#2E86C1' }}>{program.pricing.hybridFormat.price}</p>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs" style={{ color: '#5D6D7E' }}>AED</p>
                    <p className="font-semibold" style={{ color: '#1B4F72' }}>{program.pricing.hybridFormat.aed}</p>
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: '#5D6D7E' }}>SAR</p>
                    <p className="font-semibold" style={{ color: '#1B4F72' }}>{program.pricing.hybridFormat.sar}</p>
                  </div>
                  <p className="text-xs pt-2" style={{ color: '#5D6D7E' }}>{program.pricing.hybridFormat.format}</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl text-center" style={{ border: '1px solid #BFC9CA' }}>
              <p className="text-sm mb-1" style={{ color: '#5D6D7E' }}>EMI options available on all programs</p>
              <p className="text-xs" style={{ color: '#5D6D7E' }}>Exchange rates as of April 2026. Contact admissions for current rates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: '#D6EAF8', color: '#2E86C1' }}>
                <Check className="w-4 h-4" />
                HOW TO APPLY
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#1B4F72' }}>
                5-Step Application<br/>Process
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: '#5D6D7E' }}>
                From enquiry to admission decision in under 7 days
              </p>
            </div>

            <div className="space-y-6">
              {program.applicationProcess.map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl text-white font-bold" style={{ background: '#2E86C1' }}>
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-semibold" style={{ color: '#1B4F72' }}>{item.title}</h3>
                    <p className="text-sm mt-1" style={{ color: '#5D6D7E' }}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ background: '#F2F3F4' }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: '#D6EAF8', color: '#2E86C1' }}>
                <Star className="w-4 h-4" />
                DOCTOR STORIES
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#1B4F72' }}>
                What Dubai Doctors Say
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {program.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl" style={{ border: '1px solid #BFC9CA' }}>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#F39C12' }} />
                    ))}
                  </div>
                  <p className="text-sm mb-6 leading-relaxed italic" style={{ color: '#5D6D7E' }}>
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-medium" style={{ color: '#1B4F72' }}>{testimonial.author}</div>
                    <div className="text-xs" style={{ color: '#5D6D7E' }}>{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
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
            {program.faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden" style={{ border: '1px solid #BFC9CA' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium pr-8" style={{ color: '#1B4F72' }}>{faq.question}</span>
                  <ArrowRight
                    className={`w-5 h-5 shrink-0 transition-transform ${openFaq === index ? 'rotate-90' : ''}`}
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
              Ready to Start Your Pediatrics Fellowship?
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
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

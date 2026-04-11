'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, GraduationCap, TrendingUp, Star, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card3D from './3d/Card3D';
import FlipCard3D from './3d/FlipCard3D';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FellowshipPrograms() {
  const programs = [
    {
      name: "Fellowship in Emergency Medicine",
      duration: "12 Months",
      eligibility: "MBBS with 2+ years",
      description: "Advanced training in emergency care, trauma management, and critical decision-making.",
      highlights: ["ICU Rotations", "Trauma Management", "Toxicology"],
      icon: "🚑",
      image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&q=80",
      onlinePrice: 150000,
      month11_1: 170000,
      month10_2: 220000,
      month9_3: 250000,
      month6_6: 350000,
      month12Offline: 440000,
      isPopular: true
    },
    {
      name: "Fellowship in Diabetes Mellitus",
      duration: "12 Months",
      eligibility: "MD Medicine/DNB",
      description: "Focused training in diabetes care, insulin management, and metabolic disorders.",
      highlights: ["Insulin Therapy", "Metabolic Disorders", "Diabetic Complications"],
      icon: "🩺",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      onlinePrice: 150000,
      month11_1: 170000,
      month10_2: 240000,
      month9_3: 280000,
      month6_6: 450000,
      month12Offline: 570000
    },
    {
      name: "Fellowship in Gynecology & Obstetrics",
      duration: "12 Months",
      eligibility: "MS/MD Obs & Gyn",
      description: "Advanced training in high-risk obstetrics and gynecological procedures.",
      highlights: ["High-Risk Pregnancy", "Laparoscopic Surgery", "Fetal Medicine"],
      icon: "🤰",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80",
      onlinePrice: 145000,
      month11_1: 190000,
      month10_2: 230000,
      month9_3: 280000,
      month6_6: 390000,
      month12Offline: 520000,
      isPopular: true
    },
    {
      name: "Fellowship in Pediatrics",
      duration: "12 Months",
      eligibility: "MD Pediatrics/DNB",
      description: "Comprehensive training in pediatric care and child health management.",
      highlights: ["Neonatal Care", "Pediatric Emergencies", "Child Development"],
      icon: "👶",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
      onlinePrice: 150000,
      month11_1: 180000,
      month10_2: 240000,
      month9_3: 280000,
      month6_6: 470000,
      month12Offline: 580000
    },
    {
      name: "Fellowship in Dermatology",
      duration: "12 Months",
      eligibility: "MD/DNB Dermatology",
      description: "Advanced training in dermatological procedures and cosmetic dermatology.",
      highlights: ["Cosmetic Procedures", "Laser Therapy", "Skin Surgery"],
      icon: "✨",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      onlinePrice: 160000,
      month11_1: 185000,
      month10_2: 230000,
      month9_3: 250000,
      month6_6: 390000,
      month12Offline: 520000
    },
    {
      name: "Fellowship in Cosmetic and Aesthetic Medicine",
      duration: "12 Months",
      eligibility: "MBBS",
      description: "Comprehensive training in cosmetic medicine, aesthetic procedures, and evidence-based practice.",
      highlights: ["Facial Aesthetics", "Injectable Treatments", "Laser & IPL", "Clinical Ethics"],
      icon: "💆",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
      onlinePrice: 150000,
      month11_1: 180000,
      month10_2: 230000,
      month9_3: 270000,
      month6_6: 390000,
      month12Offline: 520000,
      isNew: true
    },
    {
      name: "Fellowship in Internal Medicine",
      duration: "12 Months",
      eligibility: "MD Medicine/DNB",
      description: "Comprehensive training in adult medicine and clinical decision-making.",
      highlights: ["Critical Care", "Clinical Diagnosis", "Patient Management"],
      icon: "⚕️",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
      onlinePrice: 175000,
      month11_1: 185000,
      month10_2: 220000,
      month9_3: 240000,
      month6_6: 350000,
      month12Offline: 450000
    },
    {
      name: "Fellowship in Clinical Cardiology",
      duration: "12 Months",
      eligibility: "MD Medicine/DNB",
      description: "Specialized training in cardiovascular disease management and diagnostics.",
      highlights: ["ECG Interpretation", "Echo Cardiography", "Cardiac Emergencies"],
      icon: "❤️",
      image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=800&q=80",
      onlinePrice: 160000,
      month11_1: 190000,
      month10_2: 240000,
      month9_3: 280000,
      month6_6: 480000,
      month12Offline: 650000,
      isPopular: true
    },
    {
      name: "Fellowship in Critical Care Medicine",
      duration: "12 Months",
      eligibility: "MD/DNB Medicine/Anesthesia",
      description: "Comprehensive training in managing critically ill patients in ICU settings.",
      highlights: ["Ventilator Management", "Hemodynamics", "Point-of-Care Ultrasound"],
      icon: "🏥",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80",
      onlinePrice: 150000,
      month11_1: 180000,
      month10_2: 230000,
      month9_3: 270000,
      month6_6: 450000,
      month12Offline: 590000
    },
    {
      name: "Fellowship in Family Medicine",
      duration: "12 Months",
      eligibility: "MBBS",
      description: "Comprehensive training in primary care and family health management.",
      highlights: ["Primary Care", "Preventive Medicine", "Community Health"],
      icon: "👨‍👩‍👧‍👦",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      onlinePrice: 150000,
      month11_1: 170000,
      month10_2: 220000,
      month9_3: 250000,
      month6_6: 330000,
      month12Offline: 440000
    },
    {
      name: "Fellowship in Endocrinology",
      duration: "12 Months",
      eligibility: "MD Medicine/DNB",
      description: "Comprehensive training in hormone disorders and endocrine system management.",
      highlights: ["Thyroid Disorders", "Pituitary Disorders", "Bone Health"],
      icon: "⚕️",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80",
      onlinePrice: 180000,
      month11_1: 210000,
      month10_2: 240000,
      month9_3: 280000,
      month6_6: 490000,
      month12Offline: 650000,
      isNew: true
    },
    {
      name: "Fellowship in Orthopedics",
      duration: "12 Months",
      eligibility: "MS Orthopedics/DNB",
      description: "Comprehensive training in orthopedic surgery and trauma management.",
      highlights: ["Trauma Surgery", "Sports Medicine", "Fracture Management"],
      icon: "🦴",
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80",
      onlinePrice: 160000,
      month11_1: 180000,
      month10_2: 240000,
      month9_3: 270000,
      month6_6: 430000,
      month12Offline: 560000
    },
    {
      name: "Fellowship in Nephrology",
      duration: "12 Months",
      eligibility: "MD Medicine/DNB",
      description: "Specialized training in kidney diseases and dialysis management.",
      highlights: ["Dialysis", "Kidney Disorders", "Transplant Medicine"],
      icon: "🫘",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
      onlinePrice: 180000,
      month11_1: 195000,
      month10_2: 250000,
      month9_3: 290000,
      month6_6: 490000,
      month12Offline: 690000
    },
    {
      name: "Fellowship in Gastroenterology",
      duration: "12 Months",
      eligibility: "MD Medicine/DNB",
      description: "Comprehensive training in diagnostic and therapeutic gastroenterology procedures.",
      highlights: ["Endoscopy", "Colonoscopy", "ERCP"],
      icon: "🔬",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80",
      onlinePrice: 180000,
      month11_1: 195000,
      month10_2: 240000,
      month9_3: 280000,
      month6_6: 490000,
      month12Offline: 680000,
      isPopular: true
    },
    {
      name: "Fellowship in Reproductive Medicine",
      duration: "12 Months",
      eligibility: "MD/MS Obs & Gyn",
      description: "Specialized training in infertility management and assisted reproductive techniques.",
      highlights: ["IVF", "ICSI", "Fertility Preservation"],
      icon: "👶",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80",
      onlinePrice: 160000,
      month11_1: 210000,
      month10_2: 250000,
      month9_3: 290000,
      month6_6: 490000,
      month12Offline: 690000,
      isNew: true
    },
    {
      name: "Fellowship in Neonatology",
      duration: "12 Months",
      eligibility: "MD Pediatrics/DNB",
      description: "Advanced training in newborn critical care and neonatal intensive care.",
      highlights: ["NICU Management", "Neonatal Resuscitation", "Premature Care"],
      icon: "👶",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
      onlinePrice: 190000,
      month11_1: 210000,
      month10_2: 245000,
      month9_3: 285000,
      month6_6: 490000,
      month12Offline: 650000
    },
    {
      name: "Fellowship in Interventional Cardiology",
      duration: "24 Months",
      eligibility: "DM/DNB Cardiology",
      description: "Specialized training in coronary interventions and structural heart procedures.",
      highlights: ["Angioplasty", "Device Implantation", "Structural Interventions"],
      icon: "❤️",
      image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=800&q=80",
      onlinePrice: 220000,
      month11_1: 260000,
      month10_2: 290000,
      month9_3: 330000,
      month6_6: 500000,
      month12Offline: 700000
    },
    {
      name: "Fellowship in Arthroscopy and Arthroplasty",
      duration: "12 Months",
      eligibility: "MS Orthopedics/DNB",
      description: "Advanced training in arthroscopic procedures and joint replacement surgery.",
      highlights: ["Knee Arthroscopy", "Hip Replacement", "Shoulder Surgery"],
      icon: "🦴",
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80",
      onlinePrice: 180000,
      month11_1: 210000,
      month10_2: 240000,
      month9_3: 280000,
      month6_6: 490000,
      month12Offline: 610000,
      isPopular: true
    }
  ];

  // Show only featured programs on homepage (first 6)
  const featuredPrograms = programs.slice(0, 6);
  
  const gridRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll('.program-card');
      
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 60,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <section id="programs" className="section-padding bg-linear-to-br from-background to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-pulse-3d" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-3d" style={{ animationDelay: '1s' }} />
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-5 py-2 glass-card rounded-full mb-6"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(244,162,97,0.2)" }}
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-primary">FEATURED PROGRAMS</span>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-primary mb-6">
            Popular <span className="gradient-text">Fellowship Programs</span>
          </h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto">
            Explore our most sought-after specializations with proven career outcomes
          </p>
        </motion.div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredPrograms.map((program, index) => (
            <div key={index} className="program-card">
              <FlipCard3D
                className="h-full"
                cardClassName="h-full min-h-[500px]"
                frontContent={
                  <div className="card overflow-hidden h-full relative group">
                    {/* Badges */}
                    <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
                      {program.isPopular && (
                        <motion.span 
                          className="badge badge-popular flex items-center gap-1 shadow-lg"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Star className="w-3 h-3 fill-current" />
                          POPULAR
                        </motion.span>
                      )}
                      {program.isNew && (
                        <motion.span 
                          className="badge badge-new flex items-center gap-1 shadow-lg"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Sparkles className="w-3 h-3" />
                          NEW
                        </motion.span>
                      )}
                    </div>

                    {/* Program Image */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={program.image}
                        alt={program.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/40 to-transparent" />
                      
                      {/* Icon Badge with 3D effect */}
                      <motion.div 
                        className="absolute bottom-4 left-4 w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-2xl"
                        whileHover={{ scale: 1.15, rotate: 360 }}
                        transition={{ type: "spring", stiffness: 200, duration: 0.6 }}
                      >
                        {program.icon}
                      </motion.div>

                      {/* Price Badge on Image */}
                      <motion.div 
                        className="absolute bottom-4 right-4 glass-card px-3 py-2 rounded-lg"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="flex items-center gap-2 text-white text-xs font-bold">
                          <TrendingUp className="w-3 h-3" />
                          <span>From ₹{(program.onlinePrice / 100000).toFixed(2)}L</span>
                        </div>
                      </motion.div>
                    </div>

                    <div className="p-6">
                      {/* Program Name */}
                      <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                        {program.name}
                      </h3>

                      {/* Duration & Eligibility */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="inline-flex items-center gap-1 px-3 py-1 glass-card rounded-full text-sm font-medium text-primary">
                          <Clock className="w-3 h-3" />
                          {program.duration}
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">
                          <GraduationCap className="w-3 h-3" />
                          {program.eligibility}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-text-secondary mb-4 leading-relaxed text-sm line-clamp-2">
                        {program.description}
                      </p>

                      {/* Highlights */}
                      <div className="mb-6">
                        <p className="text-xs font-semibold text-primary mb-2 flex items-center gap-1">
                          <Star className="w-3 h-3 text-accent" />
                          Key Focus Areas:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {program.highlights.slice(0, 3).map((highlight, idx) => (
                            <span key={idx} className="text-xs px-2 py-1 bg-primary/5 text-primary rounded-md border border-primary/10">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Hover indicator */}
                      <div className="mt-auto pt-4 border-t border-gray-100">
                        <div className="text-sm text-center text-accent font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                          Hover for more details →
                        </div>
                      </div>
                    </div>
                  </div>
                }
                backContent={
                  <div className="card overflow-hidden h-full relative bg-linear-to-br from-primary to-secondary text-white p-6 flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-bold mb-6">
                        {program.name}
                      </h3>
                      
                      {/* All Highlights */}
                      <div className="mb-6">
                        <p className="text-sm font-semibold mb-3 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent" />
                          What You'll Learn:
                        </p>
                        <ul className="space-y-2">
                          {program.highlights.map((highlight, idx) => (
                            <motion.li 
                              key={idx} 
                              className="flex items-start gap-2 text-sm"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <Star className="w-3 h-3 text-accent mt-1 shrink-0" />
                              <span>{highlight}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Pricing */}
                      <div className="mb-6">
                        <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                          <div className="text-sm opacity-90 mb-3">Program Fee</div>
                          <div className="flex items-baseline gap-2 mb-3">
                            <div className="text-2xl font-bold text-accent">
                              ₹{program.onlinePrice.toLocaleString('en-IN')}
                            </div>
                            <div className="text-xs opacity-75">Fully Online</div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-xs opacity-80">
                              <span>11 Months(online) + 1 month (clinical)</span>
                              <span>₹{program.month11_1.toLocaleString('en-IN')}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Full Description */}
                      <p className="text-sm opacity-90 mb-6">
                        {program.description}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <Link 
                      href={`/programs/${program.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      className="mt-auto"
                    >
                      <motion.div
                        className="w-full px-6 py-3 bg-accent text-white rounded-xl font-bold text-center flex items-center justify-center gap-2 shadow-xl"
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(244,162,97,0.4)" }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        View Full Details
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </Link>
                  </div>
                }
              />
            </div>
          ))}
        </div>

        {/* View All Button with Magnetic Effect */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/programs">
            <motion.div
              className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-primary to-secondary text-white rounded-xl font-bold text-lg group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 60px rgba(0,102,204,0.3)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              View All 17 Programs
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </Link>
          <p className="text-sm text-text-secondary mt-4">
            Including Critical Care, Emergency Medicine, Spine Surgery & more
          </p>
        </motion.div>

        {/* CTA Section with enhanced effects */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative overflow-hidden rounded-3xl group">
            <div className="absolute inset-0 bg-linear-to-br from-primary via-secondary to-primary"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&q=80')] bg-cover bg-center opacity-10"></div>
            
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-accent/20 via-transparent to-secondary/20"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <div className="relative z-10 p-8 lg:p-16 text-center text-white">
              <motion.h3 
                className="text-3xl lg:text-4xl font-heading font-bold mb-4"
                whileHover={{ scale: 1.05 }}
              >
                Can't Find What You're Looking For?
              </motion.h3>
              <p className="text-lg lg:text-xl mb-8 opacity-95 max-w-2xl mx-auto">
                We offer customized fellowship programs tailored to your specialization needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.div
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-bold group"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'oklch(0.76 0.12 70)',
                      color: 'white',
                      boxShadow: "0 20px 40px rgba(244,162,97,0.4)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Contact Us
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </Link>
                <Link href="/fellowship-matcher">
                  <motion.div
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur border-2 border-white/30 text-white rounded-xl font-bold"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'white',
                      color: 'oklch(0.26 0.06 252)',
                      boxShadow: "0 20px 40px rgba(255,255,255,0.3)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Find Your Perfect Match
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

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
      name: "Fellowship in Arthroscopy and Arthroplasty",
      duration: "12 Months",
      eligibility: "MS Orthopedics/DNB",
      description: "Advanced training in arthroscopic procedures and joint replacement surgery.",
      highlights: ["Knee Arthroscopy", "Hip Replacement", "Shoulder Surgery"],
      icon: "🦴",
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80",
      isPopular: true,
      placementRate: "98%",
      avgSalaryIncrease: "165%"
    },
    {
      name: "Fellowship in Gastroenterology",
      duration: "12 Months",
      eligibility: "MD Medicine/DNB",
      description: "Comprehensive training in diagnostic and therapeutic gastroenterology procedures.",
      highlights: ["Endoscopy", "Colonoscopy", "ERCP"],
      icon: "🔬",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80",
      isPopular: true,
      placementRate: "96%",
      avgSalaryIncrease: "172%"
    },
    {
      name: "Fellowship in Reproductive Medicine",
      duration: "12 Months",
      eligibility: "MD/MS Obs & Gyn",
      description: "Specialized training in infertility management and assisted reproductive techniques.",
      highlights: ["IVF", "ICSI", "Fertility Preservation"],
      icon: "👶",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80",
      isNew: true,
      placementRate: "94%",
      avgSalaryIncrease: "145%"
    },
    {
      name: "Fellowship in Pain Management",
      duration: "12 Months",
      eligibility: "MD/DNB Anesthesia",
      description: "Expert training in interventional pain management and chronic pain treatment.",
      highlights: ["Nerve Blocks", "Spinal Interventions", "Chronic Pain"],
      icon: "💊",
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
      isPopular: true,
      placementRate: "95%",
      avgSalaryIncrease: "158%"
    },
    {
      name: "Fellowship in Diabetology",
      duration: "12 Months",
      eligibility: "MD Medicine/DNB",
      description: "Focused training in diabetes care, insulin management, and metabolic disorders.",
      highlights: ["Insulin Therapy", "Metabolic Disorders", "Diabetic Complications"],
      icon: "🩺",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      placementRate: "93%",
      avgSalaryIncrease: "140%"
    },
    {
      name: "Fellowship in Endocrinology",
      duration: "12 Months",
      eligibility: "MD Medicine/DNB",
      description: "Comprehensive training in hormone disorders and endocrine system management.",
      highlights: ["Thyroid Disorders", "Pituitary Disorders", "Bone Health"],
      icon: "⚕️",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80",
      isNew: true,
      placementRate: "92%",
      avgSalaryIncrease: "135%"
    },
    {
      name: "Fellowship in Rheumatology",
      duration: "12 Months",
      eligibility: "MD Medicine/DNB",
      description: "Advanced training in autoimmune diseases and musculoskeletal disorders.",
      highlights: ["Arthritis Management", "Autoimmune Diseases", "Biologics"],
      icon: "🦾",
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80"
    },
    {
      name: "Fellowship in Neurology",
      duration: "12 Months",
      eligibility: "MD Medicine/DNB",
      description: "Specialized training in neurological disorders and neurocritical care.",
      highlights: ["Stroke Management", "Epilepsy", "Neurodegenerative Disorders"],
      icon: "🧠",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80"
    },
    {
      name: "Fellowship in Radiology",
      duration: "12 Months",
      eligibility: "MD Radio-Diagnosis",
      description: "Advanced imaging techniques and interventional radiology procedures.",
      highlights: ["CT/MRI", "Interventional Radiology", "Cross-sectional Imaging"],
      icon: "📡",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80"
    },
    {
      name: "Fellowship in Ultrasonography",
      duration: "6 Months",
      eligibility: "MBBS/MD",
      description: "Focused training in diagnostic ultrasound and point-of-care sonography.",
      highlights: ["Abdominal USG", "Obstetric USG", "Vascular Doppler"],
      icon: "📊",
      image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=800&q=80"
    },
    {
      name: "Fellowship in Interventional Cardiology",
      duration: "24 Months",
      eligibility: "DM/DNB Cardiology",
      description: "Specialized training in coronary interventions and structural heart procedures.",
      highlights: ["Angioplasty", "Device Implantation", "Structural Interventions"],
      icon: "❤️",
      image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=800&q=80"
    },
    {
      name: "Fellowship in Orthopedics",
      duration: "12 Months",
      eligibility: "MS Orthopedics/DNB",
      description: "Comprehensive training in orthopedic surgery and trauma management.",
      highlights: ["Trauma Surgery", "Sports Medicine", "Fracture Management"],
      icon: "🦴",
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80"
    },
    {
      name: "Fellowship in Gynecology & Obstetrics",
      duration: "12 Months",
      eligibility: "MS/MD Obs & Gyn",
      description: "Advanced training in high-risk obstetrics and gynecological procedures.",
      highlights: ["High-Risk Pregnancy", "Laparoscopic Surgery", "Fetal Medicine"],
      icon: "🤰",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80"
    },
    {
      name: "Fellowship in General Surgery",
      duration: "12 Months",
      eligibility: "MS General Surgery",
      description: "Expert training in advanced general surgical techniques and procedures.",
      highlights: ["Laparoscopy", "GI Surgery", "Emergency Surgery"],
      icon: "🏥",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80"
    },
    {
      name: "Fellowship in Spine Surgery",
      duration: "12 Months",
      eligibility: "MS Orthopedics/Neurosurgery",
      description: "Specialized training in spinal disorders and minimally invasive spine surgery.",
      highlights: ["Spinal Decompression", "Spinal Fusion", "Minimally Invasive"],
      icon: "🦴",
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80"
    },
    {
      name: "Fellowship in Emergency Medicine",
      duration: "12 Months",
      eligibility: "MBBS with 2+ years",
      description: "Advanced training in emergency care, trauma management, and critical decision-making.",
      highlights: ["ICU Rotations", "Trauma Management", "Toxicology"],
      icon: "🚑",
      image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&q=80"
    },
    {
      name: "Fellowship in Critical Care Medicine",
      duration: "12 Months",
      eligibility: "MD/DNB Medicine/Anesthesia",
      description: "Comprehensive training in managing critically ill patients in ICU settings.",
      highlights: ["Ventilator Management", "Hemodynamics", "Point-of-Care Ultrasound"],
      icon: "🏥",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80"
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
    <section id="programs" className="section-padding bg-gradient-to-br from-background to-gray-50 relative overflow-hidden">
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
          <h2 className="text-4xl lg:text-5xl font-heading font-extrabold text-primary mb-6">
            Popular <span className="gradient-text">Fellowship Programs</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
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
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                      
                      {/* Icon Badge with 3D effect */}
                      <motion.div 
                        className="absolute bottom-4 left-4 w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-2xl"
                        whileHover={{ scale: 1.15, rotate: 360 }}
                        transition={{ type: "spring", stiffness: 200, duration: 0.6 }}
                      >
                        {program.icon}
                      </motion.div>

                      {/* Quick Stats on Image */}
                      <motion.div 
                        className="absolute bottom-4 right-4 glass-card px-3 py-2 rounded-lg"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="flex items-center gap-2 text-white text-xs font-bold">
                          <TrendingUp className="w-3 h-3" />
                          <span>{program.avgSalaryIncrease}</span>
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
                  <div className="card overflow-hidden h-full relative bg-gradient-to-br from-primary to-secondary text-white p-6 flex flex-col">
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
                              <Star className="w-3 h-3 text-accent mt-1 flex-shrink-0" />
                              <span>{highlight}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="bg-white/10 backdrop-blur rounded-lg p-3">
                          <div className="text-2xl font-bold text-accent">
                            {program.placementRate}
                          </div>
                          <div className="text-xs opacity-90">Placement Rate</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur rounded-lg p-3">
                          <div className="text-2xl font-bold text-accent">
                            {program.avgSalaryIncrease}
                          </div>
                          <div className="text-xs opacity-90">Avg. Salary ↑</div>
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold text-lg group"
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
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&q=80')] bg-cover bg-center opacity-10"></div>
            
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-secondary/20"
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

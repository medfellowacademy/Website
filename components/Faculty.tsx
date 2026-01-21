'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Star } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card3D from './3d/Card3D';
import FlipCard3D from './3d/FlipCard3D';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Faculty() {
  const faculty = [
    {
      name: "Dr. Rajesh Kumar",
      title: "Director, Emergency Medicine",
      credentials: "MD, FCCM, FCEM",
      institution: "Apollo Hospitals",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
      experience: "25+ Years",
      specialties: ["Emergency Care", "Critical Care", "Trauma Management"],
      achievements: "500+ Fellows Trained • 100+ Publications",
      expertise: {
        clinical: 95,
        research: 88,
        teaching: 92
      }
    },
    {
      name: "Dr. Priya Sharma",
      title: "Head, Critical Care Division",
      credentials: "MD, DNB, EDIC",
      institution: "AIIMS, New Delhi",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
      experience: "18+ Years",
      specialties: ["ICU Management", "Mechanical Ventilation", "Sepsis Care"],
      achievements: "National Award Winner • 75+ Publications",
      expertise: {
        clinical: 90,
        research: 95,
        teaching: 89
      }
    },
    {
      name: "Dr. Arun Mehta",
      title: "Senior Consultant, Interventional Cardiology",
      credentials: "DM Cardiology, FSCAI",
      institution: "Fortis Heart Institute",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80",
      experience: "22+ Years",
      specialties: ["Angioplasty", "Structural Heart", "Complex Interventions"],
      achievements: "5000+ Procedures • International Faculty",
      expertise: {
        clinical: 98,
        research: 82,
        teaching: 87
      }
    },
    {
      name: "Dr. Sunita Rao",
      title: "Professor, Pediatric Intensive Care",
      credentials: "MD Pediatrics, MRCPCH",
      institution: "St. John's Medical College",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80",
      experience: "20+ Years",
      specialties: ["Pediatric ICU", "Neonatology", "Pediatric Emergency"],
      achievements: "Award-Winning Educator • 60+ Publications",
      expertise: {
        clinical: 93,
        research: 85,
        teaching: 96
      }
    }
  ];
  
  const gridRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll('.faculty-card');
      
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 80,
          rotateX: -15,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 75%',
            end: 'bottom 25%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <section id="faculty" className="section-padding bg-gradient-to-br from-white via-secondary/5 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-3d" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-3d" style={{ animationDelay: '1.5s' }} />
      
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
            whileHover={{ scale: 1.05 }}
          >
            <Award className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-primary">EXPERT FACULTY</span>
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            Faculty & <span className="gradient-text">Mentors</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Learn from distinguished clinicians and academic leaders with decades of experience
          </p>
        </motion.div>

        <div ref={gridRef} className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {faculty.map((member, index) => (
            <div key={index} className="faculty-card">
              <FlipCard3D
                className="h-full"
                cardClassName="h-full min-h-[400px]"
                frontContent={
                  <div className="card p-8 h-full group hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-start gap-6 mb-6">
                        <motion.div 
                          className="relative w-28 h-28 rounded-2xl overflow-hidden flex-shrink-0 ring-4 ring-primary/20 group-hover:ring-accent/40 transition-all"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                        
                        <div className="flex-1">
                          <h3 className="text-2xl font-heading font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                            {member.name}
                          </h3>
                          <p className="text-secondary font-semibold mb-2 text-sm">
                            {member.title}
                          </p>
                          <p className="text-xs text-text-secondary mb-1">
                            {member.credentials}
                          </p>
                          <p className="text-xs text-text-tertiary flex items-center gap-1">
                            <BookOpen className="w-3 h-3" />
                            {member.institution}
                          </p>
                        </div>
                      </div>

                      {/* Experience Badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-lg mb-4 w-fit">
                        <Star className="w-4 h-4 text-accent" />
                        <span className="text-sm font-bold text-accent">{member.experience} Experience</span>
                      </div>

                      {/* Specialties */}
                      <div className="mb-6">
                        <p className="text-xs font-semibold text-primary mb-2">Specializations:</p>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty, idx) => (
                            <motion.span 
                              key={idx} 
                              className="text-xs px-3 py-1 bg-primary/5 text-primary rounded-full border border-primary/10"
                              whileHover={{ scale: 1.1, backgroundColor: 'oklch(0.26 0.06 252)', color: 'white' }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              {specialty}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mt-auto pt-4 border-t border-gray-100">
                        <p className="text-sm text-text-secondary flex items-center gap-2">
                          <Award className="w-4 h-4 text-accent" />
                          {member.achievements}
                        </p>
                      </div>

                      {/* Hover indicator */}
                      <div className="mt-4 text-center">
                        <p className="text-xs text-accent font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                          Hover for expertise details →
                        </p>
                      </div>
                    </div>
                  </div>
                }
                backContent={
                  <div className="card h-full p-8 bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden">
                    {/* Decorative pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
                      <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent rounded-full translate-y-1/2 -translate-x-1/2" />
                    </div>
                    
                    <div className="relative z-10 h-full flex flex-col">
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-heading font-bold mb-2">
                          {member.name}
                        </h3>
                        <p className="text-sm opacity-90">{member.title}</p>
                      </div>

                      {/* Expertise Bars */}
                      <div className="flex-1">
                        <p className="text-sm font-semibold mb-4 flex items-center gap-2">
                          <Star className="w-4 h-4 text-accent" />
                          Expertise Levels:
                        </p>
                        
                        <div className="space-y-4">
                          {/* Clinical Skills */}
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="flex items-center gap-1">
                                <Users className="w-3 h-3" /> Clinical Practice
                              </span>
                              <span className="font-bold">{member.expertise.clinical}%</span>
                            </div>
                            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                              <motion.div 
                                className="h-full bg-accent rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${member.expertise.clinical}%` }}
                                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                              />
                            </div>
                          </div>

                          {/* Research */}
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="flex items-center gap-1">
                                <BookOpen className="w-3 h-3" /> Research & Publications
                              </span>
                              <span className="font-bold">{member.expertise.research}%</span>
                            </div>
                            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                              <motion.div 
                                className="h-full bg-accent rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${member.expertise.research}%` }}
                                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                              />
                            </div>
                          </div>

                          {/* Teaching */}
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="flex items-center gap-1">
                                <Award className="w-3 h-3" /> Teaching & Mentorship
                              </span>
                              <span className="font-bold">{member.expertise.teaching}%</span>
                            </div>
                            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                              <motion.div 
                                className="h-full bg-accent rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${member.expertise.teaching}%` }}
                                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Institution Badge */}
                      <div className="mt-6 pt-4 border-t border-white/20">
                        <div className="text-center">
                          <p className="text-xs opacity-75 mb-1">Currently at</p>
                          <p className="font-semibold">{member.institution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

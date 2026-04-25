'use client';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Star } from 'lucide-react';
import { useRef, useEffect, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card3D from './3d/Card3D';
import FlipCard3D from './3d/FlipCard3D';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface FacultyExpertise {
  clinical: number;
  research: number;
  teaching: number;
}

interface FacultyMember {
  name: string;
  title: string;
  credentials: string;
  experience: string;
  specialties: string[];
  achievements: string;
  expertise: FacultyExpertise;
}

const FACULTY_DATA: FacultyMember[] = [
    {
      name: "Dr. Rajesh Kumar",
      title: "Director, Emergency Medicine",
      credentials: "MD, FCCM, FCEM",
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
      experience: "20+ Years",
      specialties: ["Pediatric ICU", "Neonatology", "Pediatric Emergency"],
      achievements: "Award-Winning Educator • 60+ Publications",
      expertise: {
        clinical: 93,
        research: 75,
        teaching: 96
      }
    }
  ];

export default function Faculty() {
  const faculty = useMemo(() => FACULTY_DATA, []);
  const gridRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll('.faculty-card');
    
    const animation = gsap.fromTo(
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

    // Cleanup function to prevent memory leaks
    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
    };
  }, []);

  return (
    <section id="faculty" className="section-padding bg-white relative overflow-hidden" aria-labelledby="faculty-heading">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-3d" aria-hidden="true" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-3d" style={{ animationDelay: '1.5s' }} aria-hidden="true" />
      
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
            <Award className="w-4 h-4 text-accent" aria-hidden="true" />
            <span className="text-sm font-semibold text-primary">EXPERT FACULTY</span>
          </motion.div>
          <h2 id="faculty-heading" className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            Faculty & <span className="gradient-text">Mentors</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Learn from distinguished clinicians and academic leaders with decades of experience
          </p>
        </motion.div>

        <div ref={gridRef} className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {faculty.map((member: FacultyMember, index: number) => (
            <div key={index} className="faculty-card">
              <FlipCard3D
                className="h-full"
                cardClassName="h-full min-h-[400px]"
                frontContent={
                  <div className="card p-8 h-full group hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 ring-4 ring-primary/20 group-hover:ring-accent/40 transition-all" aria-hidden="true">
                          <Users className="w-8 h-8 text-white" aria-hidden="true" />
                        </div>
                        
                        <h3 className="text-2xl font-heading font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-secondary font-semibold mb-2 text-sm">
                          {member.title}
                        </p>
                        <p className="text-xs text-text-secondary">
                          {member.credentials}
                        </p>
                      </div>

                      {/* Experience Badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-lg mb-4 w-fit">
                        <Star className="w-4 h-4 text-accent" aria-hidden="true" />
                        <span className="text-sm font-bold text-accent">{member.experience} Experience</span>
                      </div>

                      {/* Specialties */}
                      <div className="mb-6">
                        <p className="text-xs font-semibold text-primary mb-2">Specializations:</p>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty, idx) => (
                            <motion.span 
                              key={idx} 
                              className="text-xs px-3 py-1 bg-primary/5 text-primary rounded-full border border-primary/10 hover:bg-primary hover:text-white"
                              whileHover={{ scale: 1.1 }}
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
                          <Award className="w-4 h-4 text-accent" aria-hidden="true" />
                          {member.achievements}
                        </p>
                      </div>

                      {/* Hover indicator */}
                      <div className="mt-4 text-center">
                        <p className="text-xs text-accent font-semibold opacity-0 group-hover:opacity-100 transition-opacity" aria-live="polite">
                          Hover for expertise details →
                        </p>
                      </div>
                    </div>
                  </div>
                }
                backContent={
                  <div className="card h-full p-8 bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden" role="complementary" aria-label={`${member.name} expertise details`}>
                    {/* Decorative pattern */}
                    <div className="absolute inset-0 opacity-10" aria-hidden="true">
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
                          <Star className="w-4 h-4 text-accent" aria-hidden="true" />
                          Expertise Levels:
                        </p>
                        
                        <div className="space-y-4">
                          {/* Clinical Skills */}
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="flex items-center gap-1">
                                <Users className="w-3 h-3" aria-hidden="true" /> Clinical Practice
                              </span>
                              <span className="font-bold">{member.expertise.clinical}%</span>
                            </div>
                            <div className="h-2 bg-white/20 rounded-full overflow-hidden" role="progressbar" aria-valuenow={member.expertise.clinical} aria-valuemin={0} aria-valuemax={100} aria-label="Clinical Practice">
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
                                <BookOpen className="w-3 h-3" aria-hidden="true" /> Research & Publications
                              </span>
                              <span className="font-bold">{member.expertise.research}%</span>
                            </div>
                            <div className="h-2 bg-white/20 rounded-full overflow-hidden" role="progressbar" aria-valuenow={member.expertise.research} aria-valuemin={0} aria-valuemax={100} aria-label="Research & Publications">
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
                                <Award className="w-3 h-3" aria-hidden="true" /> Teaching & Mentorship
                              </span>
                              <span className="font-bold">{member.expertise.teaching}%</span>
                            </div>
                            <div className="h-2 bg-white/20 rounded-full overflow-hidden" role="progressbar" aria-valuenow={member.expertise.teaching} aria-valuemin={0} aria-valuemax={100} aria-label="Teaching & Mentorship">
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

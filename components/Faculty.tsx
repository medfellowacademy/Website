'use client';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Star, Quote, Heart, GraduationCap, Stethoscope } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface FacultyMember {
  name: string;
  initials: string;
  title: string;
  credentials: string;
  experience: string;
  bio: string;
  quote: string;
  specialties: string[];
  studentRating: number;
  fellowsTrained: string;
  highlights: string[];
  color: string;
}

const FACULTY_DATA: FacultyMember[] = [
  {
    name: 'Dr. Rajesh Kumar',
    initials: 'RK',
    title: 'Director, Emergency Medicine',
    credentials: 'MD, FCCM, FCEM',
    experience: '25+ Years',
    bio: 'Passionate about emergency medicine education and mentoring the next generation of specialists.',
    quote: 'Every patient teaches us something new. That\'s what I share with my fellows.',
    specialties: ['Emergency Care', 'Critical Care', 'Trauma'],
    studentRating: 4.9,
    fellowsTrained: '500+',
    highlights: ['National Teaching Award 2023', '100+ Publications', 'TEDx Speaker'],
    color: '#1B4F72',
  },
  {
    name: 'Dr. Priya Sharma',
    initials: 'PS',
    title: 'Head, Critical Care Division',
    credentials: 'MD, DNB, EDIC',
    experience: '18+ Years',
    bio: 'Dedicated to advancing critical care through evidence-based practice and compassionate teaching.',
    quote: 'In ICU, we don\'t just save lives—we teach doctors to think critically under pressure.',
    specialties: ['ICU Management', 'Mechanical Ventilation', 'Sepsis'],
    studentRating: 4.8,
    fellowsTrained: '350+',
    highlights: ['Best Mentor Award', '75+ Publications', 'International Faculty'],
    color: '#0F766E',
  },
  {
    name: 'Dr. Arun Mehta',
    initials: 'AM',
    title: 'Senior Consultant, Interventional Cardiology',
    credentials: 'DM Cardiology, FSCAI',
    experience: '22+ Years',
    bio: 'Combining technical excellence with a deep commitment to hands-on training for cardiology fellows.',
    quote: 'I believe in learning by doing. My fellows perform procedures from day one—under guidance.',
    specialties: ['Angioplasty', 'Structural Heart', 'Complex Interventions'],
    studentRating: 4.9,
    fellowsTrained: '280+',
    highlights: ['5000+ Procedures', 'SCAI Faculty', 'Excellence Award'],
    color: '#1E40AF',
  },
  {
    name: 'Dr. Sunita Rao',
    initials: 'SR',
    title: 'Professor, Pediatric Intensive Care',
    credentials: 'MD Pediatrics, MRCPCH',
    experience: '20+ Years',
    bio: 'Specializing in pediatric care with a focus on empathetic teaching and clinical excellence.',
    quote: 'Children aren\'t small adults. I teach my fellows to see the world through a child\'s eyes.',
    specialties: ['Pediatric ICU', 'Neonatology', 'Emergency'],
    studentRating: 5.0,
    fellowsTrained: '400+',
    highlights: ['Educator of the Year', '60+ Publications', 'Child Health Advocate'],
    color: '#BE185D',
  },
];

function FacultyCard({ member, index, inView }: { member: FacultyMember; index: number; inView: boolean }) {
  return (
    <motion.div
      className="bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl group"
      style={{ border: '1px solid #E5E7EB' }}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* Header with Avatar */}
      <div className="relative p-8 pb-6" style={{ background: `linear-gradient(135deg, ${member.color} 0%, ${member.color}dd 100%)` }}>
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 bg-white -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full opacity-10 bg-white -ml-12 -mb-12"></div>
        
        <div className="relative flex items-start gap-5">
          {/* Avatar */}
          <div className="relative">
            <div 
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-xl"
              style={{ background: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)' }}
            >
              {member.initials}
            </div>
            {/* Online indicator */}
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-4 border-white"></div>
          </div>

          {/* Name & Title */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-white mb-1">{member.name}</h3>
            <p className="text-white/90 text-sm mb-2">{member.title}</p>
            <div className="flex items-center gap-3 text-white/80 text-xs">
              <span className="font-medium">{member.credentials}</span>
              <span>•</span>
              <span>{member.experience}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 pt-6 space-y-5">
        {/* Bio */}
        <p className="text-sm leading-relaxed" style={{ color: '#5D6D7E' }}>
          {member.bio}
        </p>

        {/* Quote */}
        <div className="relative p-4 rounded-xl" style={{ background: '#EAF2FB' }}>
          <Quote className="absolute top-3 left-3 w-6 h-6 opacity-20" style={{ color: member.color }} />
          <p className="text-sm italic leading-relaxed pl-6" style={{ color: '#1B4F72' }}>
            &ldquo;{member.quote}&rdquo;
          </p>
        </div>

        {/* Rating & Fellows Trained */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-current"
                  style={{ color: i < Math.floor(member.studentRating) ? '#F59E0B' : '#D1D5DB' }}
                />
              ))}
            </div>
            <span className="text-sm font-semibold" style={{ color: '#1B4F72' }}>
              {member.studentRating}
            </span>
          </div>
          <div className="h-4 w-px bg-gray-200"></div>
          <div className="flex items-center gap-2 text-sm" style={{ color: '#5D6D7E' }}>
            <GraduationCap className="w-4 h-4" />
            <span className="font-medium">{member.fellowsTrained} Fellows</span>
          </div>
        </div>

        {/* Specialties */}
        <div>
          <p className="text-xs font-medium uppercase tracking-wide mb-3" style={{ color: '#5D6D7E' }}>
            Specializations
          </p>
          <div className="flex flex-wrap gap-2">
            {member.specialties.map((s, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-full text-xs font-medium"
                style={{ background: '#D6EAF8', color: '#2E86C1' }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="pt-4 border-t" style={{ borderColor: '#E5E7EB' }}>
          <div className="space-y-2">
            {member.highlights.map((highlight, i) => (
              <div key={i} className="flex items-center gap-2">
                <Award className="w-4 h-4 flex-shrink-0" style={{ color: '#F59E0B' }} />
                <span className="text-xs" style={{ color: '#5D6D7E' }}>{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Faculty() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full" style={{ background: '#1B4F72' }}></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full" style={{ background: '#2E86C1' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4">
            <span 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{ background: '#D6EAF8', color: '#2E86C1' }}
            >
              <Heart className="w-4 h-4" />
              MEET OUR FACULTY
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#1B4F72' }}>
            Learn from the Best
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#5D6D7E' }}>
            Our faculty members are not just teachers—they&apos;re practicing clinicians who bring real-world 
            experience to every session. Get mentored by doctors who truly care about your growth.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {FACULTY_DATA.map((member, index) => (
            <FacultyCard key={index} member={member} index={index} inView={inView} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl" style={{ background: '#EAF2FB' }}>
            <p className="text-lg font-medium" style={{ color: '#1B4F72' }}>
              Want to learn from these experts?
            </p>
            <p className="text-sm max-w-2xl" style={{ color: '#5D6D7E' }}>
              Our faculty includes 50+ visiting specialists from premier institutions. 
              Each fellow gets personalized mentorship throughout the program.
            </p>
            <a
              href="/programs"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all hover:opacity-90 shadow-lg"
              style={{ background: '#1B4F72', color: '#FFFFFF' }}
            >
              View All Programs
              <Award className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

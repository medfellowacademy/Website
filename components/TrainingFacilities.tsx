'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Hospital, Monitor, FlaskConical, UserRound, CheckCircle } from 'lucide-react';

const TABS = [
  {
    id: 'hospital',
    label: 'Hospital Training',
    Icon: Hospital,
    headline: 'Clinical Rotations at Premier Hospitals',
    description: 'Structured, supervised clinical practice at India\'s top institutions — AIIMS, Apollo, Fortis, Max Healthcare, and Medanta. Fellows rotate through OTs, ICUs, and specialty departments with direct patient exposure.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=85',
    points: [
      'OT, ICU & emergency department rotations',
      'Supervised patient management & case presentation',
      'Exposure to 1000+ cases per program year',
      'Letters of training from partner hospitals',
    ],
    badge: '20+ Hospital Partners',
    badgeColor: 'bg-slate-50 text-[#213F5F] border-slate-200',
  },
  {
    id: 'digital',
    label: 'Digital Learning',
    Icon: Monitor,
    headline: '24/7 Online Learning Platform',
    description: 'A structured digital curriculum built for practicing doctors. Live weekly sessions with faculty, recorded lectures, case-based learning modules, journal access, and peer discussion forums — all accessible on any device.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=85',
    points: [
      'Live weekend sessions with senior specialists',
      'On-demand recorded lecture library',
      '500+ clinical case studies & MCQs',
      'International journal & textbook access',
    ],
    badge: 'Learn Anytime, Anywhere',
    badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
  },
  {
    id: 'simulation',
    label: 'Simulation Labs',
    Icon: FlaskConical,
    headline: 'Advanced Simulation & Procedural Training',
    description: 'Practice complex procedures in high-fidelity simulation labs before performing them on patients. Catheterisation labs, laparoscopy simulators, intubation mannequins, and ultrasound phantoms — all available at partner centres.',
    image: 'https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=1200&q=85',
    points: [
      'High-fidelity surgical simulation suites',
      'Catheterisation & intervention lab access',
      'Laparoscopy & endoscopy skill trainers',
      'Structured OSATS competency assessments',
    ],
    badge: 'Zero Risk Skills Training',
    badgeColor: 'bg-slate-50 text-[#213F5F] border-slate-200',
  },
  {
    id: 'mentorship',
    label: 'Expert Mentorship',
    Icon: UserRound,
    headline: 'One-on-One Senior Specialist Mentorship',
    description: 'Every fellow is paired with a dedicated senior faculty mentor for the duration of their program. Small batch sizes ensure personalised attention, career guidance, and access to your mentor\'s professional network.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=85',
    points: [
      'Dedicated faculty mentor assigned on Day 1',
      'Monthly 1:1 progress review sessions',
      'Career guidance & placement introductions',
      'Lifelong alumni network access',
    ],
    badge: '50+ Faculty Mentors',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
  },
];

export default function TrainingFacilities() {
  const [activeTab, setActiveTab] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const tab = TABS[activeTab];

  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden" ref={ref}>
      {/* Soft gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2c5282] via-[#213F5F] to-slate-400 opacity-40" />

      <div className="container-custom relative z-10">

        {/* Header */}
        <motion.div className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="inline-block px-4 py-1.5 bg-slate-50 text-[#213F5F] text-xs font-semibold tracking-widest rounded-full border border-slate-200 mb-5">
            WORLD-CLASS INFRASTRUCTURE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Training That Matches{' '}
            <span className="text-[#213F5F]">Global Standards</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Four pillars of training infrastructure designed to build confident, competent specialists.
          </p>
        </motion.div>

        {/* Tab strip */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
        >
          {TABS.map((t, i) => {
            const Icon = t.Icon;
            const isActive = i === activeTab;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-3 sm:px-5 py-2.5 rounded-xl font-semibold text-sm border transition-all duration-200 ${
                  isActive
                    ? 'bg-[#213F5F] text-white border-[#213F5F] shadow-lg shadow-[#213F5F]/30'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#2B6CB0] hover:text-[#2B6CB0]'
                }`}
                title={t.label}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span className="hidden sm:inline">{t.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-video md:aspect-auto md:h-[380px] order-2 md:order-1">
              <Image
                src={tab.image}
                alt={tab.headline}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1a3a5c]/60 to-transparent" />
              {/* Badge */}
              <span className={`absolute top-4 left-4 inline-block px-3.5 py-1.5 text-xs font-semibold rounded-full border ${tab.badgeColor} backdrop-blur-sm`}>
                {tab.badge}
              </span>
            </div>

            {/* Text */}
            <div className="order-1 md:order-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                {tab.headline}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-7 text-sm sm:text-base">
                {tab.description}
              </p>
              <ul className="space-y-3">
                {tab.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

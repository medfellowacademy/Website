'use client';
import { useState } from 'react';
import Image from 'next/image';
import { CheckCircle, Hospital, Monitor, UserRound } from 'lucide-react';

const TABS = [
  {
    id: 'hospital',
    label: 'Hospital Training',
    Icon: Hospital,
    headline: 'Clinical rotations at premier hospitals',
    description: 'Supervised practice at super speciality hospitals across India. Fellows rotate through OTs, ICUs and specialty departments with direct patient exposure.',
    image: '/Hospital Training.jpeg',
    points: [
      'OT, ICU & emergency department rotations',
      'Supervised patient management & case presentations',
      'Exposure to 1,000+ cases per program year',
      'Hospital letters of training on completion',
    ],
    tag: '20+ Hospital Partners',
  },
  {
    id: 'digital',
    label: 'Digital Learning',
    Icon: Monitor,
    headline: '24/7 online learning platform',
    description: 'Structured digital curriculum built for working doctors. Live weekly sessions, recorded lectures, case-based modules, journal access and peer forums — on any device.',
    image: '/Digital Learning.jpeg',
    points: [
      'Live weekend sessions with senior specialists',
      'On-demand lecture library',
      '500+ clinical case studies & MCQs',
      'International journal & textbook access',
    ],
    tag: 'Learn anytime, anywhere',
  },
  {
    id: 'mentorship',
    label: 'Expert Mentorship',
    Icon: UserRound,
    headline: 'One-on-one senior specialist mentorship',
    description: 'Every fellow is paired with a dedicated senior faculty mentor. Small batches ensure personal attention, career guidance and access to your mentor\'s professional network.',
    image: '/Expert Mentorship.jpg',
    points: [
      'Dedicated faculty mentor assigned on Day 1',
      'Monthly 1:1 progress review sessions',
      'Career guidance & placement introductions',
      'Lifelong alumni network access',
    ],
    tag: '50+ Faculty Mentors',
  },
];

export default function TrainingFacilities() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = TABS[activeTab];

  return (
    <section className="section-padding bg-[#FAFAFA] border-b border-[#E5E7EB]">
      <div className="container-custom">

        <div className="mb-8">
          <span className="section-label">Infrastructure</span>
          <h2 className="section-title mt-1 mb-1.5">Training that matches global standards</h2>
          <p className="section-subtitle">Three pillars designed to build confident, competent specialists.</p>
        </div>

        {/* Tab strip */}
        <div className="flex gap-1 mb-7 bg-white border border-[#E5E7EB] rounded-lg p-1 w-fit">
          {TABS.map((t, i) => {
            const Icon = t.Icon;
            const active = i === activeTab;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-[0.875rem] font-medium transition-all duration-150 ${
                  active
                    ? 'bg-[#15401E] text-white shadow-sm'
                    : 'text-[#6B7280] hover:text-[#374151] hover:bg-[#F9FAFB]'
                }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span className="hidden sm:inline">{t.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-start">
          {/* Image */}
          <div className="relative rounded-lg overflow-hidden border border-[#E5E7EB] aspect-video md:aspect-auto md:h-72">
            <Image
              src={tab.image}
              alt={tab.headline}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#15401E]/50 to-transparent" />
            <span className="absolute bottom-3 left-3 text-[0.75rem] font-semibold text-white bg-[#15401E]/70 backdrop-blur-sm px-2.5 py-1 rounded">
              {tab.tag}
            </span>
          </div>

          {/* Text */}
          <div>
            <h3 className="text-[1.125rem] font-semibold text-[#111827] mb-2">{tab.headline}</h3>
            <p className="text-[0.875rem] text-[#6B7280] leading-relaxed mb-5">{tab.description}</p>
            <ul className="space-y-2.5">
              {tab.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#15401E] flex-shrink-0 mt-0.5" />
                  <span className="text-[0.875rem] text-[#374151]">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

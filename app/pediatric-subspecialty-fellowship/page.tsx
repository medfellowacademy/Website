'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const SUBSPECIALTIES = [
  { icon: '🩺', title: 'Pediatric Endocrinology', text: 'Understand pediatric hormonal, metabolic, growth, and developmental disorders.' },
  { icon: '❤️', title: 'Pediatric Echocardiography', text: 'Build knowledge of pediatric cardiac assessment and echocardiographic evaluation.' },
  { icon: '🧠', title: 'Pediatric Neurology', text: 'Learn approaches to neurological disorders, developmental conditions, seizures, and related pediatric cases.' },
  { icon: '🏥', title: 'Pediatric Critical Care', text: 'Strengthen your understanding of critically ill children, emergency management, and intensive pediatric care.' },
  { icon: '👶', title: 'Neonatology', text: 'Develop knowledge of newborn care, neonatal conditions, and management of high-risk neonates.' },
];

const LEARNING_MODULES = [
  {
    icon: '🩺',
    title: 'Pediatric Endocrinology',
    items: ['Pediatric growth and development disorders', 'Diabetes and metabolic disorders', 'Thyroid and hormonal disorders', 'Puberty-related conditions', 'Common pediatric endocrine cases'],
  },
  {
    icon: '❤️',
    title: 'Pediatric Echocardiography',
    items: ['Fundamentals of pediatric cardiac imaging', 'Understanding pediatric cardiac anatomy', 'Echocardiographic assessment', 'Recognition of common congenital heart conditions', 'Case-based cardiac evaluation'],
  },
  {
    icon: '🧠',
    title: 'Pediatric Neurology',
    items: ['Seizure and epilepsy evaluation', 'Developmental and neurological disorders', 'Pediatric headache and common neurological conditions', 'Neurological examination', 'Case-based neurological assessment'],
  },
  {
    icon: '🏥',
    title: 'Pediatric Critical Care',
    items: ['Recognition of critically ill children', 'Pediatric emergency assessment', 'Respiratory and cardiovascular emergencies', 'Critical care principles', 'Case-based management of acute pediatric conditions'],
  },
  {
    icon: '👶',
    title: 'Neonatology',
    items: ['Essential newborn care', 'High-risk newborn assessment', 'Neonatal emergencies', 'Common neonatal conditions', 'Principles of neonatal intensive care'],
  },
];

export default function PediatricSubspecialtyFellowshipPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    qualification: '',
    location: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [headerFormData, setHeaderFormData] = useState({
    name: '',
    email: '',
    phone: '',
    qualification: ''
  });
  const [showHeaderForm, setShowHeaderForm] = useState(false);
  const [headerSubmitting, setHeaderSubmitting] = useState(false);
  const [headerSubmitted, setHeaderSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: 'Combined Pediatric Subspecialty Fellowship Program - Inquiry',
          message: `Qualification: ${formData.qualification}\nLocation: ${formData.location}\n\nMessage: ${formData.message}`
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', qualification: '', location: '', message: '' });
      } else {
        alert('Failed to submit. Please try again.');
      }
    } catch (error) {
      alert('Error submitting form. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleHeaderChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setHeaderFormData({ ...headerFormData, [e.target.name]: e.target.value });
  };

  const handleHeaderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHeaderSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: headerFormData.name,
          email: headerFormData.email,
          phone: headerFormData.phone,
          subject: 'Combined Pediatric Subspecialty Fellowship Program - Check Eligibility',
          message: `Qualification: ${headerFormData.qualification}`
        })
      });

      if (response.ok) {
        setHeaderSubmitted(true);
        setHeaderFormData({ name: '', email: '', phone: '', qualification: '' });
        setTimeout(() => {
          setShowHeaderForm(false);
          setHeaderSubmitted(false);
        }, 1500);
      } else {
        alert('Failed to submit. Please try again.');
      }
    } catch (error) {
      alert('Error submitting form. Please try again.');
    } finally {
      setHeaderSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Apply CTA - Mobile Only */}
      <div className={`fixed bottom-0 left-0 right-0 bg-gradient-to-r from-accent via-primary to-secondary text-white py-3 px-3 shadow-2xl z-40 md:hidden transform transition-transform duration-300 ${scrolled ? 'translate-y-0' : 'translate-y-20'}`}>
        <button
          onClick={() => setShowForm(true)}
          className="w-full bg-white text-primary font-bold py-4 rounded-full hover:bg-accent hover:text-white transition-all transform active:scale-95 shadow-lg flex items-center justify-center gap-2 text-sm"
        >
          <span className="animate-pulse text-base">🚀</span> Check Your Eligibility
        </button>
      </div>

      {/* Minimal Logo Header */}
      <header className="bg-white py-3 md:py-4 border-b border-gray-100">
        <div className="container-custom max-w-6xl mx-auto px-4 flex items-center justify-between gap-3">
          <div className="relative w-32 h-10 md:w-40 md:h-12 shrink-0">
            <Image src="/logo.png" alt="MedFellow Academy" fill className="object-contain object-left" sizes="160px" priority />
          </div>
          <button
            onClick={() => setShowHeaderForm(true)}
            className="px-4 py-2 md:px-6 md:py-2.5 bg-gradient-to-r from-accent via-primary to-secondary text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-105 text-xs md:text-sm shrink-0"
          >
            Apply Now
          </button>
        </div>
      </header>

      {/* Hero Section - Headline Only */}
      <section className="relative overflow-hidden min-h-[55vh] md:min-h-[70vh] lg:min-h-[85vh] flex items-center">
        {/* Full Background Image */}
        <div className="absolute inset-0">
          <img
            src="/courses/pediatrics.jpg"
            alt="Pediatric Subspecialty Fellowship - Doctor with Child Patient"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40"></div>
        </div>

        <div className="relative z-10 container-custom max-w-5xl mx-auto px-4 py-16 md:py-24 lg:py-28 text-center">
          <p className="text-sm md:text-lg lg:text-xl font-semibold tracking-wide text-accent mb-3 md:mb-5">
            Advance Beyond General Pediatrics
          </p>
          <h1 className="font-heading font-extrabold mb-4 md:mb-8 leading-tight text-white">
            <span className="block text-2xl md:text-4xl lg:text-5xl">Combined Pediatric Subspecialty</span>
            <span className="block text-4xl md:text-6xl lg:text-7xl mt-1 md:mt-2 bg-clip-text text-transparent bg-gradient-to-r from-accent via-yellow-400 to-accent">
              Fellowship Program
            </span>
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-white/95 leading-relaxed font-light max-w-3xl mx-auto">
            Gain specialized clinical knowledge across 5 high-demand areas of pediatric care with one
            comprehensive fellowship program.
          </p>
        </div>
      </section>

      {/* Check Eligibility Form - Below Hero */}
      <section className="py-10 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#fafafa]"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom max-w-2xl relative z-10 px-4">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-primary via-secondary to-accent px-5 py-5 md:px-8 md:py-6 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.1) 75%)', backgroundSize: '30px 30px' }}></div>
              <div className="relative z-10">
                <h2 className="text-lg md:text-2xl font-heading font-extrabold mb-1.5 text-white">
                  Check Your Eligibility
                </h2>
                <p className="text-xs md:text-sm text-white/95">
                  Get complete program information from our academic counselors
                </p>
              </div>
            </div>

            <div className="p-4 md:p-6">
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none hover:border-gray-300 text-sm"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none hover:border-gray-300 text-sm"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number (WhatsApp) *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none hover:border-gray-300 text-sm"
                />
                <select
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none hover:border-gray-300 bg-white text-sm"
                >
                  <option value="">Select Your Qualification *</option>
                  <option value="MBBS">MBBS</option>
                  <option value="MD/DNB Pediatrics">MD/DNB Pediatrics</option>
                  <option value="General Practitioner">General Practitioner</option>
                  <option value="Other">Other</option>
                </select>
                <input
                  type="text"
                  name="location"
                  placeholder="Your City/Location *"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none hover:border-gray-300 text-sm"
                />

                <button
                  type="submit"
                  disabled={submitting}
                  className="group w-full bg-gradient-to-r from-accent via-primary to-secondary text-white font-extrabold py-4 rounded-2xl hover:shadow-2xl transition-all shadow-xl text-sm md:text-base disabled:opacity-50 relative overflow-hidden transform hover:scale-[1.02]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {submitting ? (
                      <>Submitting...</>
                    ) : submitted ? (
                      <>Submitted! We&apos;ll contact you soon.</>
                    ) : (
                      <>Check Your Eligibility - Limited Admissions!</>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
                <p className="text-center text-xs text-gray-500">
                  Your information is 100% secure. No spam, guaranteed.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Explore 5 Specialized Areas */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom max-w-6xl px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-primary mb-3">
              Explore 5 Specialized Areas
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              One comprehensive fellowship spanning the most in-demand areas of pediatric subspecialty care.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
            {SUBSPECIALTIES.map((s) => (
              <div key={s.title} className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-5 border border-primary/10 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="text-sm font-bold text-primary mb-2">{s.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Program - Enhanced */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-white via-primary/5 to-secondary/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>

        <div className="container-custom max-w-6xl relative z-10 px-4">
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold mb-4 md:mb-6">
              WHY CHOOSE A COMBINED PEDIATRIC FELLOWSHIP?
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent mb-4 md:mb-6">
              One Program. Five Specialized Learning Areas.
            </h2>
            <p className="text-base md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Modern pediatric practice increasingly requires doctors to recognize and manage complex
              conditions across multiple specialties. This fellowship helps you broaden your clinical
              knowledge and approach pediatric cases with greater confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="bg-[#15401E] rounded-2xl md:rounded-3xl p-6 md:p-10 text-white shadow-2xl transform hover:scale-105 transition-transform">
              <div className="text-4xl md:text-6xl mb-4 md:mb-6">📈</div>
              <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 text-white">Growing Need for Specialists</h3>
              <p className="text-white/90 text-sm md:text-lg leading-relaxed">
                Modern healthcare increasingly requires pediatricians who can recognize and manage complex
                conditions across multiple subspecialties, not just general pediatrics.
              </p>
            </div>

            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-2xl border-2 border-primary/20 transform hover:scale-105 transition-transform">
              <div className="text-4xl md:text-6xl mb-4 md:mb-6">🎯</div>
              <h3 className="text-xl md:text-3xl font-bold text-primary mb-3 md:mb-4">Multispecialty Confidence</h3>
              <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
                Build <span className="font-bold text-secondary">practical clinical knowledge</span>,{' '}
                <span className="font-bold text-secondary">case-based judgment</span>, and{' '}
                <span className="font-bold text-secondary">specialty-focused expertise</span> across five
                high-demand pediatric subspecialties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Gain - Premium Design */}
      <section className="py-10 md:py-20 bg-gradient-to-br from-gray-50 via-white to-primary/5 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>

        <div className="container-custom max-w-7xl relative z-10 px-4">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-primary text-white px-4 md:px-8 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold mb-4 md:mb-6 shadow-lg">
              <span className="animate-pulse">⭐</span>
              WHAT YOU GAIN
              <span className="animate-pulse">⭐</span>
            </div>
            <h2 className="text-2xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent px-4">
              Course Highlights
            </h2>
            <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
              Experience training that combines <span className="text-primary font-bold">multispecialty pediatric learning</span> with <span className="text-secondary font-bold">case-based clinical education</span>
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {[
              {
                icon: '🩺',
                title: 'Multispecialty Pediatric Learning',
                text: 'Broaden clinical knowledge across five pediatric subspecialties',
                color: 'from-blue-500 to-cyan-500',
                bgColor: 'from-blue-50 to-cyan-50'
              },
              {
                icon: '📋',
                title: 'Case-Based Clinical Education',
                text: 'Learn through real clinical scenarios and discussions',
                color: 'from-purple-500 to-pink-500',
                bgColor: 'from-purple-50 to-pink-50'
              },
              {
                icon: '👨‍⚕️',
                title: 'Expert Faculty Mentorship',
                text: 'Learn from experienced pediatric specialists',
                color: 'from-orange-500 to-red-500',
                bgColor: 'from-orange-50 to-red-50'
              },
              {
                icon: '📚',
                title: 'Specialty-Focused Learning Modules',
                text: 'Structured modules for each pediatric subspecialty',
                color: 'from-green-500 to-emerald-500',
                bgColor: 'from-green-50 to-emerald-50'
              },
              {
                icon: '🧩',
                title: 'Practical Clinical Knowledge',
                text: 'Apply concepts directly to everyday pediatric practice',
                color: 'from-indigo-500 to-purple-500',
                bgColor: 'from-indigo-50 to-purple-50'
              },
              {
                icon: '💻',
                title: 'Flexible Learning Format',
                text: 'Online classes designed for working doctors',
                color: 'from-pink-500 to-rose-500',
                bgColor: 'from-pink-50 to-rose-50'
              },
              {
                icon: '🎓',
                title: 'Fellowship Certification',
                text: 'Recognized certification upon successful completion',
                color: 'from-teal-500 to-cyan-500',
                bgColor: 'from-teal-50 to-cyan-50'
              },
              {
                icon: '🚀',
                title: 'Career-Focused Skill Development',
                text: 'Build a professional profile across subspecialties',
                color: 'from-amber-500 to-orange-500',
                bgColor: 'from-amber-50 to-orange-50'
              }
            ].map((item, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/30 transform hover:-translate-y-3"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} opacity-0 group-hover:opacity-100 rounded-xl md:rounded-2xl transition-opacity duration-500`}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Circle */}
                  <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${item.color} rounded-xl md:rounded-2xl flex items-center justify-center text-3xl md:text-3xl mb-3 md:mb-5 shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-xs leading-relaxed mb-3 md:mb-4">
                    {item.text}
                  </p>

                  {/* Animated Underline */}
                  <div className={`h-1 bg-gradient-to-r ${item.color} rounded-full w-12 group-hover:w-full transition-all duration-500`}></div>

                  {/* Corner Badge */}
                  <div className="absolute top-3 right-3 md:top-4 md:right-4 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg">
                    ✓
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-8 md:mt-12 px-4">
            <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
              Ready to expand your pediatric expertise?
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="group inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 text-sm md:text-base"
            >
              <span className="text-lg md:text-xl group-hover:animate-bounce">🚀</span>
              <span>Start Your Fellowship Journey</span>
              <span className="text-lg md:text-xl group-hover:animate-bounce">🚀</span>
            </button>
          </div>
        </div>
      </section>

      {/* What You Will Learn */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-primary mb-4">
            What You Will Learn
          </h2>
          <p className="text-center text-text-secondary mb-12 text-lg max-w-2xl mx-auto">
            Five structured learning tracks covering the core knowledge areas of each pediatric subspecialty.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LEARNING_MODULES.map((module, i) => (
              <div key={i} className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10">
                <div className="text-4xl mb-4">{module.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-4">{module.title}</h3>
                <ul className="space-y-2">
                  {module.items.map((item, j) => (
                    <li key={j} className="text-sm text-text-secondary flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learn From Real Clinical Cases */}
      <section className="py-14 bg-[#15401E]">
        <div className="container-custom max-w-4xl text-center px-4">
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-white mb-4">
            Learn From Real Clinical Cases
          </h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed">
            Move beyond textbook knowledge. Learn through case-based discussions, clinical scenarios,
            expert guidance, and specialty-focused learning designed to help you connect medical knowledge
            with real-world pediatric practice.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-primary mb-4">
            Why MedFellow Academy?
          </h2>
          <p className="text-center text-text-secondary mb-12 text-lg">Learn. Specialize. Advance.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Specialty-focused curriculum',
              'Experienced medical faculty',
              'Case-based learning',
              'Flexible learning options',
              'Dedicated academic support',
              'Fellowship certification'
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-4 shadow-sm flex items-center gap-3 hover:shadow-md transition-shadow">
                <div className="w-8 h-8 bg-[#15401E] rounded-full flex items-center justify-center text-white font-bold shrink-0">
                  ✓
                </div>
                <p className="text-text-primary font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Enroll */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-primary mb-4">
            Who Should Enroll?
          </h2>
          <p className="text-center text-text-secondary mb-12 text-lg">This program is designed for:</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: 'MBBS Doctors', text: 'Doctors seeking advanced pediatric knowledge and subspecialty exposure.', icon: '🎓' },
              { title: 'MD/DNB Pediatrics', text: 'Pediatricians looking to expand their knowledge across specialized areas of pediatric care.', icon: '👨‍⚕️' },
              { title: 'Medical Professionals Interested in Pediatrics', text: 'Doctors looking to develop focused expertise in pediatric subspecialties.', icon: '🩺' },
              { title: 'Practicing Pediatricians', text: 'Professionals seeking structured upskilling and broader clinical exposure.', icon: '👩‍⚕️' }
            ].map((applicant, i) => (
              <div key={i} className="text-center bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{applicant.icon}</div>
                <p className="font-semibold text-primary text-sm mb-2">{applicant.title}</p>
                <p className="text-xs text-text-secondary leading-relaxed">{applicant.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-text-secondary mt-8 max-w-2xl mx-auto">
            Eligibility may vary by individual fellowship track. Speak with our academic counselor to
            confirm your eligibility.
          </p>
        </div>
      </section>

      {/* Is This Fellowship Right For You */}
      <section className="py-16 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-primary mb-4">
            Is This Fellowship Right For You?
          </h2>
          <p className="text-center text-text-secondary mb-10 text-lg">If you want to:</p>
          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              'Expand your pediatric clinical knowledge',
              'Explore multiple pediatric subspecialties',
              'Strengthen your approach to complex pediatric cases',
              'Learn from experienced medical professionals',
              'Add specialized training to your professional profile',
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-md flex items-center gap-4 hover:shadow-xl transition-shadow">
                <span className="text-2xl text-secondary shrink-0">→</span>
                <p className="text-text-primary font-medium">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-text-secondary mt-10 text-lg font-medium">
            This combined fellowship program could be your next step.
          </p>
        </div>
      </section>

      {/* Training Hospitals */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-primary mb-4">
            Training Hospitals
          </h2>
          <p className="text-center text-text-secondary mb-12 text-lg max-w-2xl mx-auto">
            Fellows train hands-on at our partnered hospitals, gaining real patient exposure alongside experienced clinical teams
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                src: '/hospital-medicover.png',
                alt: 'Medicover Hospitals',
                description: 'Multi-specialty tertiary care network with dedicated pediatric and neonatal care units.',
                tags: ['Multi-Specialty', 'Pediatric Care'],
              },
              {
                src: '/hospital-premier.jpg',
                alt: 'Premier Hospital - Trauma, Emergency, Critical Care',
                description: 'Specialty hospital delivering high-acuity clinical exposure across pediatric emergency and critical care.',
                tags: ['Pediatric Emergency', 'Critical Care'],
              },
            ].map((hospital) => (
              <div key={hospital.src} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col items-center text-center">
                <div className="relative w-full h-20 md:h-24 mb-4 md:mb-5">
                  <Image src={hospital.src} alt={hospital.alt} fill className="object-contain" sizes="(max-width: 640px) 90vw, 400px" />
                </div>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">{hospital.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {hospital.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Certificate */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-primary mb-4">
            Fellowship Completion Certificate
          </h2>
          <p className="text-center text-text-secondary mb-12 text-lg max-w-2xl mx-auto">
            Receive an internationally accredited certificate upon successful completion of your fellowship
          </p>
          <div className="bg-white rounded-2xl p-3 md:p-4 shadow-2xl border border-gray-100 max-w-2xl mx-auto">
            <div className="relative w-full aspect-[5/3]">
              <Image
                src="/sample-certificate.jpg"
                alt="Sample MedFellow Academy Fellowship Completion Certificate"
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 768px) 90vw, 700px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-primary mb-12">
            What Our Fellows Say
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { quote: 'The combined format let me build real confidence across neonatology and critical care instead of choosing just one track. The case discussions made all the difference.', author: 'Dr. A. Krishnan', role: 'MD Pediatrics, NICU Consultant' },
              { quote: 'Covering endocrinology and neurology in one structured program saved me time while giving me genuine subspecialty depth.', author: 'Dr. R. Bose', role: 'MBBS, Pediatrician' },
              { quote: 'The pediatric echocardiography module was especially valuable — I can now approach cardiac cases with far more clarity.', author: 'Dr. S. Kapoor', role: 'DNB Pediatrics, Fellow' },
              { quote: 'Flexible online sessions let me continue my hospital duties while upgrading my knowledge across five subspecialties.', author: 'Dr. M. Pillai', role: 'MD Pediatrics, Consultant' },
              { quote: 'The faculty mentorship and case-based approach helped me manage complex pediatric cases with much more confidence.', author: 'Dr. T. Anand', role: 'MBBS, General Practitioner' },
              { quote: 'This fellowship gave me a broader clinical foundation that has strengthened every part of my pediatric practice.', author: 'Dr. V. Nair', role: 'MD Pediatrics, Fellow' },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-primary">
                <p className="text-text-primary italic mb-6 text-lg">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#15401E] rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.author.split(' ')[1][0]}
                  </div>
                  <div>
                    <p className="font-bold text-primary">{testimonial.author}</p>
                    <p className="text-sm text-text-secondary">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-primary mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              { q: 'Do I have to complete all 5 subspecialties?', a: 'The combined program covers all 5 pediatric subspecialty areas as a single structured curriculum. Speak with our academic counselor about how the tracks are structured.' },
              { q: 'Is the program online or offline?', a: 'It includes online learning with optional hands-on clinical exposure.' },
              { q: 'Will I get certification?', a: 'Yes, upon successful completion of the program.' }
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-primary transition-colors">
                <h3 className="font-bold text-primary mb-2 text-lg">{faq.q}</h3>
                <p className="text-text-secondary">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#15401E] text-white">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">
            Ready to Expand Your Pediatric Expertise?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get complete information about the program, eligibility, curriculum, fees, and admission process.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
            <p className="text-2xl font-bold mb-4">🚀 Limited Admissions Available</p>
            <p className="text-lg mb-2">📞 Call/WhatsApp: +91 99850 44993</p>
            <p className="text-lg">🌐 medfellowacademy.com</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowForm(true)}
              className="px-10 py-5 bg-accent text-white font-bold rounded-full hover:bg-accent/90 transition-all shadow-2xl text-xl hover:scale-105"
            >
              👉 Check Your Eligibility
            </button>
          </div>
        </div>
      </section>

      {/* Header Apply Now Modal */}
      {showHeaderForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowHeaderForm(false)}>
          <div className="bg-white rounded-xl md:rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="p-4 md:p-6 lg:p-8">
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <h3 className="text-lg md:text-2xl font-bold text-primary">Apply Now</h3>
                <button onClick={() => setShowHeaderForm(false)} className="text-2xl md:text-3xl text-gray-400 hover:text-gray-600 w-10 h-10 flex items-center justify-center">×</button>
              </div>
              <form onSubmit={handleHeaderSubmit} className="space-y-3 md:space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={headerFormData.name}
                  onChange={handleHeaderChange}
                  required
                  className="w-full px-4 py-3 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-base"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={headerFormData.email}
                  onChange={handleHeaderChange}
                  required
                  className="w-full px-4 py-3 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-base"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={headerFormData.phone}
                  onChange={handleHeaderChange}
                  required
                  className="w-full px-4 py-3 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-base"
                />
                <select
                  name="qualification"
                  value={headerFormData.qualification}
                  onChange={handleHeaderChange}
                  required
                  className="w-full px-4 py-3 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-base"
                >
                  <option value="">Select Qualification *</option>
                  <option value="MBBS">MBBS</option>
                  <option value="MD/DNB Pediatrics">MD/DNB Pediatrics</option>
                  <option value="General Practitioner">General Practitioner</option>
                  <option value="Other">Other</option>
                </select>
                <button
                  type="submit"
                  disabled={headerSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 md:py-5 rounded-xl hover:opacity-90 transition-all shadow-lg disabled:opacity-50 text-base md:text-lg"
                >
                  {headerSubmitting ? '⏳ Submitting...' : headerSubmitted ? '✅ Submitted Successfully!' : '🚀 Submit Application'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowForm(false)}>
          <div className="bg-white rounded-xl md:rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="p-4 md:p-6 lg:p-8">
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <h3 className="text-lg md:text-2xl font-bold text-primary">Check Your Eligibility</h3>
                <button onClick={() => setShowForm(false)} className="text-2xl md:text-3xl text-gray-400 hover:text-gray-600 w-10 h-10 flex items-center justify-center">×</button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-base"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-base"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-base"
                />
                <select
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-base"
                >
                  <option value="">Select Qualification *</option>
                  <option value="MBBS">MBBS</option>
                  <option value="MD/DNB Pediatrics">MD/DNB Pediatrics</option>
                  <option value="General Practitioner">General Practitioner</option>
                  <option value="Other">Other</option>
                </select>
                <input
                  type="text"
                  name="location"
                  placeholder="Your City/Location *"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-base"
                />
                <textarea
                  name="message"
                  placeholder="Any specific questions? (Optional)"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-base"
                ></textarea>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 md:py-5 rounded-xl hover:opacity-90 transition-all shadow-lg disabled:opacity-50 text-base md:text-lg"
                >
                  {submitting ? '⏳ Submitting...' : submitted ? '✅ Submitted Successfully!' : '🚀 Submit Application'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

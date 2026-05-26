'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

const ArrowRight = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export default function EmergencyMedicinePage() {
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
          subject: 'Fellowship in Emergency Medicine - Inquiry',
          message: `Qualification: ${formData.qualification}\nLocation: ${formData.location}\n\nMessage: ${formData.message}`
        })
      });
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setFormData({ name: '', email: '', phone: '', qualification: '', location: '', message: '' });
          setSubmitted(false);
        }, 4000);
      } else {
        alert('Failed to submit. Please try again.');
      }
    } catch {
      alert('Error submitting form. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const scrollToForm = () => {
    document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <WhatsAppWidget />

      {/* Sticky mobile CTA */}
      <div className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${scrolled ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="bg-white border-t border-gray-200 shadow-2xl px-4 py-3">
          <button
            onClick={scrollToForm}
            className="w-full bg-red-600 text-white font-bold py-3.5 rounded-lg text-sm tracking-wide"
          >
            Apply Now — Limited Seats
          </button>
        </div>
      </div>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative h-[90vh] min-h-[620px] overflow-hidden flex flex-col">
        {/* Background image + overlay */}
        <div className="absolute inset-0">
          <img
            src="/emergency-med.jpg"
            alt="Emergency Medicine"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/40" />
        </div>

        {/* Main content — centred vertically */}
        <div className="relative z-10 flex-1 flex items-center pt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="max-w-2xl space-y-6">

              <span className="inline-block px-4 py-1.5 bg-red-600/25 border border-red-500/50 text-red-300 text-xs font-semibold uppercase tracking-widest rounded-full">
                Fellowship in Emergency Medicine
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
                Become the Doctor Who Stays Calm When Every Second Matters
              </h1>

              <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                Build practical expertise in trauma care, critical emergencies, resuscitation, and rapid patient management through industry-focused clinical training.
              </p>

              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {[
                  'Practical Emergency Care Training',
                  'Expert Mentorship',
                  'Real-World Clinical Exposure',
                  'Career Growth Opportunities',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-slate-200 text-sm">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <button
                  onClick={scrollToForm}
                  className="px-8 py-3.5 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold rounded-lg transition-colors text-sm tracking-wide"
                >
                  Apply Now
                </button>
                <a
                  href="tel:+919985044993"
                  className="px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold rounded-lg transition-colors text-sm text-center"
                >
                  Call: +91 99850 44993
                </a>
              </div>

              <div className="flex items-center gap-6 pt-1 text-slate-400 text-xs">
                <span className="text-red-400 font-semibold uppercase tracking-wider">Limited Seats Available</span>
                <span className="text-slate-600">|</span>
                <span>medfellowacademy.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar pinned to the bottom of the hero */}
        <div className="relative z-10 bg-black/50 backdrop-blur-sm border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10">
              {[
                { value: '6–12', label: 'Month Duration' },
                { value: '100+', label: 'Doctors Trained' },
                { value: '24/7', label: 'Hospital Access' },
                { value: '98%',  label: 'Success Rate' },
              ].map((s) => (
                <div key={s.label} className="py-5 px-4 text-center">
                  <p className="text-2xl md:text-3xl font-extrabold text-red-400">{s.value}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY EMERGENCY MEDICINE ───────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center space-y-6">
          <p className="text-red-600 text-xs font-bold uppercase tracking-widest">Why This Specialty</p>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900">Why Emergency Medicine?</h2>
          <div className="w-12 h-1 bg-red-600 mx-auto rounded-full"></div>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Emergency medicine is one of the fastest-growing and most demanding specialties in healthcare today. Hospitals and healthcare centres need doctors who can make fast, confident decisions during trauma cases, cardiac emergencies, and critical situations.
          </p>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            This fellowship helps you build the practical skills and clinical confidence required in modern emergency care.
          </p>
        </div>
      </section>

      {/* ── WHAT YOU WILL LEARN ──────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-12">
          <div className="text-center space-y-4">
            <p className="text-red-600 text-xs font-bold uppercase tracking-widest">Curriculum</p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900">What You Will Learn</h2>
            <div className="w-12 h-1 bg-red-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Trauma & Emergency Care', icon: '🩺' },
              { title: 'Airway Management', icon: '🫁' },
              { title: 'Resuscitation Protocols', icon: '❤️' },
              { title: 'Critical Patient Stabilization', icon: '🏥' },
              { title: 'Rapid Clinical Decision-Making', icon: '🧠' },
              { title: 'Emergency Procedures', icon: '⚕️' },
              { title: 'Acute Care Management', icon: '📋' },
              { title: 'BLS & ACLS Protocols', icon: '📌' },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 p-5 border border-gray-100 rounded-xl bg-gray-50 hover:border-red-200 hover:bg-red-50 transition-colors"
              >
                <CheckIcon />
                <span className="text-slate-700 font-medium text-sm leading-snug">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY MEDFELLOW ────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-12">
          <div className="text-center space-y-4">
            <p className="text-red-400 text-xs font-bold uppercase tracking-widest">Our Advantage</p>
            <h2 className="text-2xl md:text-4xl font-extrabold">Why Choose MedFellow Academy?</h2>
            <div className="w-12 h-1 bg-red-500 mx-auto rounded-full"></div>
            <p className="text-slate-400 text-base max-w-2xl mx-auto">Premium training designed for serious healthcare professionals</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Industry-Focused Curriculum', desc: 'Built around real emergency protocols used in active hospital settings.' },
              { title: 'Case-Based Practical Learning', desc: 'Learn through real cases, simulations, and hands-on clinical drills.' },
              { title: 'Experienced Faculty', desc: 'Mentors with 12–15 years of frontline emergency medicine experience.' },
              { title: 'Real Clinical Exposure', desc: '24/7 access to partner hospital emergency departments.' },
              { title: 'Flexible Learning Structure', desc: 'Train without disrupting your existing practice schedule.' },
              { title: 'Career-Oriented Training', desc: 'Job placement guidance and career support included.' },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-red-500/40 transition-all">
                <div className="w-8 h-8 rounded-full bg-red-600/20 flex items-center justify-center mb-4">
                  <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO SHOULD APPLY + CAREER ────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">

            {/* Who should apply */}
            <div className="space-y-7">
              <div className="space-y-3">
                <p className="text-red-600 text-xs font-bold uppercase tracking-widest">Eligibility</p>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Who Should Apply?</h2>
                <div className="w-10 h-1 bg-red-600 rounded-full"></div>
              </div>
              <ul className="space-y-3">
                {[
                  'MBBS Doctors',
                  'General Practitioners',
                  'Medical Graduates',
                  'Doctors Interested in Emergency and Acute Care',
                  'Professionals Looking to Upgrade Clinical Skills',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={scrollToForm}
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors text-sm"
              >
                Apply Now <ArrowRight />
              </button>
            </div>

            {/* Career opportunities */}
            <div className="space-y-7">
              <div className="space-y-3">
                <p className="text-red-600 text-xs font-bold uppercase tracking-widest">After the Program</p>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Career Opportunities</h2>
                <div className="w-10 h-1 bg-red-600 rounded-full"></div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">After completing the program, you can explore opportunities in:</p>
              <ul className="space-y-3">
                {[
                  'Hospital Emergency Departments',
                  'Trauma and Critical Care Units',
                  'Multi-Speciality Hospitals',
                  'Acute Care Practice',
                  'Advanced Clinical Roles',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-red-500 flex-shrink-0"></span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAM BENEFITS BANNER ──────────────────────────────── */}
      <section className="py-14 md:py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-2xl md:text-3xl font-extrabold">Program Benefits</h2>
            <p className="text-red-100 text-sm">What you gain when you enrol</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              'Improve Clinical Confidence',
              'Build High-Demand Skills',
              'Enhance Career Opportunities',
              'Gain Practical Emergency Expertise',
              'Stay Ahead in Modern Healthcare',
            ].map((benefit) => (
              <div key={benefit} className="flex items-start gap-2 p-4 bg-white/10 rounded-lg">
                <svg className="w-4 h-4 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium leading-snug">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
          <div className="text-center space-y-4">
            <p className="text-red-600 text-xs font-bold uppercase tracking-widest">Success Stories</p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900">What Doctors Say</h2>
            <div className="w-12 h-1 bg-red-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                quote: 'Excellent practical exposure and real emergency care learning. This fellowship changed how I approach critical cases in my daily practice.',
                author: 'MBBS Doctor',
                role: 'Emergency Physician',
              },
              {
                quote: 'This fellowship helped me improve my confidence in handling critical cases. The mentors and the hospital exposure were outstanding.',
                author: 'General Practitioner',
                role: 'Acute Care Specialist',
              },
            ].map((t, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm space-y-5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed text-sm italic">"{t.quote}"</p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="font-semibold text-slate-900 text-sm">{t.author}</p>
                  <p className="text-red-600 text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLICATION FORM ─────────────────────────────────────── */}
      <section id="apply-form" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl space-y-10">
          <div className="text-center space-y-4">
            <p className="text-red-600 text-xs font-bold uppercase tracking-widest">Enrol Today</p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900">Start Your Application</h2>
            <div className="w-12 h-1 bg-red-600 mx-auto rounded-full"></div>
            <p className="text-slate-500 text-sm">Our advisors will contact you within 24 hours</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 md:p-10">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Application Submitted</h3>
                <p className="text-slate-500 text-sm">We will reach out to you within 24 hours. Check your phone and email.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Dr. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-slate-900 placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="dr.john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-slate-900 placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-slate-900 placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Qualification</label>
                    <select
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-slate-900 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors text-sm bg-white"
                    >
                      <option value="">Select Qualification</option>
                      <option value="MBBS">MBBS</option>
                      <option value="MD/MS">MD / MS</option>
                      <option value="General Practitioner">General Practitioner</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">City / Location</label>
                    <input
                      type="text"
                      name="location"
                      placeholder="Mumbai, India"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-slate-900 placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Questions (Optional)</label>
                    <input
                      type="text"
                      name="message"
                      placeholder="Any specific questions?"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-slate-900 placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors text-sm"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-red-600 hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-colors text-sm tracking-wide mt-2"
                >
                  {submitting ? 'Submitting...' : 'Submit Application'}
                </button>

                <p className="text-center text-xs text-gray-400">
                  We will contact you within 24 hours. Your details are safe with us.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center space-y-8">
          <div className="space-y-4">
            <p className="text-red-400 text-xs font-bold uppercase tracking-widest">Take the Next Step</p>
            <h2 className="text-2xl md:text-4xl font-extrabold">Upgrade Your Emergency Medicine Skills Today</h2>
            <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
              The future of emergency care belongs to doctors who are prepared to act when every second matters.
            </p>
          </div>

          <div className="inline-block bg-red-600/20 border border-red-500/30 text-red-300 text-xs font-semibold uppercase tracking-widest px-5 py-2 rounded-full">
            Limited Seats Available
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <button
              onClick={scrollToForm}
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors text-sm tracking-wide"
            >
              Apply Now
            </button>
            <a
              href="tel:+919985044993"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-lg transition-colors text-sm text-center"
            >
              Call / WhatsApp: +91 99850 44993
            </a>
          </div>

          <p className="text-slate-400 text-sm pt-2">medfellowacademy.com</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

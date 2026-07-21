'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ReproductiveMedicinePage() {
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
          subject: 'Fellowship in Reproductive Medicine - Inquiry',
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

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Apply CTA - Mobile Only */}
      <div className={`fixed bottom-0 left-0 right-0 bg-gradient-to-r from-accent via-primary to-secondary text-white py-3 px-3 shadow-2xl z-40 md:hidden transform transition-transform duration-300 ${scrolled ? 'translate-y-0' : 'translate-y-20'}`}>
        <button
          onClick={() => setShowForm(true)}
          className="w-full bg-white text-primary font-bold py-4 rounded-full hover:bg-accent hover:text-white transition-all transform active:scale-95 shadow-lg flex items-center justify-center gap-2 text-sm"
        >
          <span className="animate-pulse text-base">🚀</span> Apply Now - Limited Seats
        </button>
      </div>

      {/* Hero Section - Headline Only */}
      <section className="relative overflow-hidden">
        {/* Full Background Image */}
        <div className="absolute inset-0">
          <img
            src="/fertility-consultation.png"
            alt="Fertility Consultation - Doctor with Couple"
            className="w-full h-full object-cover transform scale-x-[-1]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40"></div>
        </div>

        <div className="relative z-10 container-custom max-w-4xl mx-auto px-4 py-16 md:py-24 lg:py-28 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-3 md:mb-6 leading-tight text-white">
            <span className="block">Fellowship Program in</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-accent via-yellow-400 to-accent">
              Reproductive Medicine
            </span>
          </h1>
          <p className="text-sm md:text-lg lg:text-xl text-white/95 leading-relaxed font-light max-w-2xl mx-auto">
            Master the science and practice of infertility management, IVF procedures, and assisted reproductive techniques with expert-led training.
          </p>
        </div>
      </section>

      {/* Book Free Counselling Form - Below Hero */}
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
                <h2 className="text-lg md:text-2xl font-heading font-extrabold mb-1.5">
                  Book Your FREE Counselling Session
                </h2>
                <p className="text-xs md:text-sm text-white/95">
                  Get personalized guidance from our fertility training experts
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
                  <option value="MD/MS OBGYN">MD/MS OBGYN</option>
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
                      <>Book FREE Counselling - Limited Slots!</>
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

      {/* About the Program - Enhanced */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-white via-primary/5 to-secondary/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>

        <div className="container-custom max-w-6xl relative z-10 px-4">
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold mb-4 md:mb-6">
              PROGRAM OVERVIEW
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent mb-4 md:mb-6">
              About the Fellowship Program
            </h2>
            <p className="text-base md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              The <span className="text-primary font-bold">Fellowship in Reproductive Medicine</span> is designed for doctors who want to specialize in <span className="text-secondary font-bold">fertility care</span>, <span className="text-secondary font-bold">IVF</span>, and <span className="text-secondary font-bold">assisted reproduction</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="bg-[#15401E] rounded-2xl md:rounded-3xl p-6 md:p-10 text-white shadow-2xl transform hover:scale-105 transition-transform">
              <div className="text-4xl md:text-6xl mb-4 md:mb-6">📈</div>
              <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">Rising Global Demand</h3>
              <p className="text-white/90 text-sm md:text-lg leading-relaxed">
                With infertility cases rising globally, fertility specialists are in high demand. This is your opportunity to enter a growing, rewarding field.
              </p>
            </div>

            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-2xl border-2 border-primary/20 transform hover:scale-105 transition-transform">
              <div className="text-4xl md:text-6xl mb-4 md:mb-6">🎯</div>
              <h3 className="text-xl md:text-3xl font-bold text-primary mb-3 md:mb-4">Complete Training</h3>
              <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
                We equip you with <span className="font-bold text-secondary">practical skills</span>, <span className="font-bold text-secondary">clinical confidence</span>, and <span className="font-bold text-secondary">advanced knowledge</span> to excel in this high-demand specialty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights - Premium Design */}
      <section className="py-10 md:py-20 bg-gradient-to-br from-gray-50 via-white to-primary/5 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        
        <div className="container-custom max-w-7xl relative z-10 px-4">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-primary text-white px-4 md:px-8 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold mb-4 md:mb-6 shadow-lg">
              <span className="animate-pulse">⭐</span>
              WHAT MAKES US DIFFERENT
              <span className="animate-pulse">⭐</span>
            </div>
            <h2 className="text-2xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent px-4">
              Course Highlights
            </h2>
            <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
              Experience world-class training that combines <span className="text-primary font-bold">cutting-edge theory</span> with <span className="text-secondary font-bold">hands-on clinical practice</span>
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {[
              { 
                icon: '🎓', 
                title: 'Comprehensive Training',
                text: 'Complete IVF & fertility management program', 
                color: 'from-blue-500 to-cyan-500',
                bgColor: 'from-blue-50 to-cyan-50'
              },
              { 
                icon: '👥', 
                title: 'Real Patient Exposure',
                text: 'Hands-on training with actual clinical cases', 
                color: 'from-purple-500 to-pink-500',
                bgColor: 'from-purple-50 to-pink-50'
              },
              { 
                icon: '📹', 
                title: 'Live Demonstrations',
                text: 'Watch procedures performed by experts', 
                color: 'from-orange-500 to-red-500',
                bgColor: 'from-orange-50 to-red-50'
              },
              { 
                icon: '🔬', 
                title: 'Modern ART Techniques',
                text: 'Latest assisted reproductive technologies', 
                color: 'from-green-500 to-emerald-500',
                bgColor: 'from-green-50 to-emerald-50'
              },
              { 
                icon: '👨‍⚕️', 
                title: 'Expert Mentorship',
                text: 'Learn from experienced fertility specialists', 
                color: 'from-indigo-500 to-purple-500',
                bgColor: 'from-indigo-50 to-purple-50'
              },
              { 
                icon: '💻', 
                title: 'Flexible Learning',
                text: 'Online classes + practical clinical exposure', 
                color: 'from-pink-500 to-rose-500',
                bgColor: 'from-pink-50 to-rose-50'
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
                  <div className={`w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br ${item.color} rounded-xl md:rounded-2xl flex items-center justify-center text-3xl md:text-4xl mb-3 md:mb-5 shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    {item.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
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
              Ready to transform your medical career?
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-primary mb-12">
            What You Will Learn
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🔍',
                title: 'Core Reproductive Medicine',
                items: ['Female & Male Infertility Evaluation', 'Hormonal assessment & diagnostics', 'Ovulation induction protocols']
              },
              {
                icon: '🧪',
                title: 'IVF & ART Techniques',
                items: ['IVF, ICSI & Embryo Transfer', 'Ovarian stimulation protocols', 'Cryopreservation techniques']
              },
              {
                icon: '🔬',
                title: 'Embryology Basics',
                items: ['Lab setup & embryo culture', 'Handling gametes & embryos']
              },
              {
                icon: '👩‍⚕️',
                title: 'Clinical Practice',
                items: ['Patient counseling & case planning', 'Treatment protocols & success optimization']
              }
            ].map((module, i) => (
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

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-primary mb-12">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Industry-relevant, practical curriculum',
              'Real clinical & IVF lab exposure',
              'Learn from experienced fertility experts',
              'Recognized fellowship certification',
              'Personalized mentorship & guidance',
              'Career & IVF clinic setup support'
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

      {/* Who Should Apply */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-primary mb-12">
            Who Should Apply?
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: 'MBBS Doctors', icon: '🎓' },
              { title: 'MD/MS (OBGYN / Relevant Specialties)', icon: '👨‍⚕️' },
              { title: 'General Practitioners', icon: '🩺' },
              { title: 'Gynecologists looking to specialize in fertility', icon: '👩‍⚕️' }
            ].map((applicant, i) => (
              <div key={i} className="text-center bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{applicant.icon}</div>
                <p className="font-semibold text-primary text-sm">{applicant.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-primary mb-12">
            Career Opportunities
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '🏥', text: 'Work in IVF & fertility centers' },
              { icon: '👩‍⚕️', text: 'Start your own fertility clinic' },
              { icon: '📈', text: 'High-growth specialty with strong income potential' },
              { icon: '🌍', text: 'Opportunities in global fertility & wellness industry' }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md flex items-center gap-4 hover:shadow-xl transition-shadow">
                <div className="text-4xl">{item.icon}</div>
                <p className="text-text-primary font-semibold">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Outcomes */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-primary mb-4">
            Program Outcomes
          </h2>
          <p className="text-center text-text-secondary mb-12 text-lg">After completion, you will be able to:</p>
          <div className="space-y-4">
            {[
              'Independently evaluate infertility cases',
              'Assist/perform IVF-related procedures',
              'Design treatment protocols',
              'Build and grow a fertility practice'
            ].map((outcome, i) => (
              <div key={i} className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6 flex items-center gap-4 border-l-4 border-primary">
                <div className="w-10 h-10 bg-[#15401E] rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">
                  {i + 1}
                </div>
                <p className="text-text-primary font-medium text-lg">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Hospitals */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-primary mb-4">
            Training Hospitals
          </h2>
          <p className="text-center text-text-secondary mb-12 text-lg">
            Gain real clinical exposure at our partnered training hospitals
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              { src: '/hospital-medicover.png', alt: 'Medicover Hospitals' },
              { src: '/hospital-premier.jpg', alt: 'Premier Hospital - Trauma, Emergency, Critical Care' },
            ].map((hospital) => (
              <div key={hospital.src} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex items-center justify-center hover:shadow-xl transition-shadow">
                <div className="relative w-full h-24">
                  <Image src={hospital.src} alt={hospital.alt} fill className="object-contain" sizes="(max-width: 640px) 90vw, 400px" />
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
              { quote: 'This program helped me confidently step into IVF practice. The hands-on lab exposure made all the difference.', author: 'Dr. A. Sharma', role: 'MBBS, Fertility Consultant' },
              { quote: 'Excellent hands-on exposure and mentorship. I now handle complex infertility cases with much more confidence.', author: 'Dr. R. Mehta', role: 'MD OBGYN, IVF Specialist' },
              { quote: 'The embryology and ART modules were incredibly detailed. It bridged the gap between theory and real clinical practice.', author: 'Dr. K. Nair', role: 'MS OBGYN, Reproductive Medicine Fellow' },
              { quote: 'Flexible online sessions let me continue my practice while learning. The faculty mentorship was outstanding.', author: 'Dr. P. Verma', role: 'MBBS, General Practitioner' },
              { quote: 'From ovarian stimulation protocols to embryo transfer, every module was clinically relevant and well-structured.', author: 'Dr. S. Iyer', role: 'MD OBGYN, IVF Consultant' },
              { quote: 'This fellowship gave me the clinical confidence and credentials to start my own fertility clinic.', author: 'Dr. N. Reddy', role: 'MS OBGYN, Fertility Specialist' },
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
              { q: 'Is prior IVF experience required?', a: 'No, basic clinical knowledge is sufficient.' },
              { q: 'Is the program online or offline?', a: 'It includes online learning with optional hands-on training.' },
              { q: 'Will I get certification?', a: 'Yes, upon successful completion.' }
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
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Start Your Journey in Reproductive Medicine Today
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join one of the fastest-growing medical specialties and build a rewarding career in fertility care.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
            <p className="text-2xl font-bold mb-4">🚀 Limited Seats Available</p>
            <p className="text-lg mb-2">📞 Call/WhatsApp: +91-9985044993</p>
            <p className="text-lg">🌐 www.medfellowacademy.com</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowForm(true)}
              className="px-10 py-5 bg-accent text-white font-bold rounded-full hover:bg-accent/90 transition-all shadow-2xl text-xl hover:scale-105"
            >
              👉 Apply Now
            </button>
            <button
              onClick={() => setShowForm(true)}
              className="px-10 py-5 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-all shadow-2xl text-xl hover:scale-105"
            >
              📞 Book Free Counseling
            </button>
          </div>
        </div>
      </section>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowForm(false)}>
          <div className="bg-white rounded-xl md:rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="p-4 md:p-6 lg:p-8">
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <h3 className="text-lg md:text-2xl font-bold text-primary">Apply Now</h3>
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
                  <option value="MD/MS OBGYN">MD/MS OBGYN</option>
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

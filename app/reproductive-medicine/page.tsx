'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';

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
      <Navbar />
      <WhatsAppWidget />

      {/* Sticky Apply CTA - Enhanced */}
      <div className={`fixed bottom-0 left-0 right-0 bg-gradient-to-r from-accent via-primary to-secondary text-white py-4 px-4 shadow-2xl z-40 md:hidden transform transition-transform duration-300 ${scrolled ? 'translate-y-0' : 'translate-y-20'}`}>
        <button
          onClick={() => setShowForm(true)}
          className="w-full bg-white text-primary font-bold py-3.5 rounded-full hover:bg-accent hover:text-white transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
        >
          <span className="animate-pulse">🚀</span> Apply Now - Limited Seats
        </button>
      </div>

      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-primary-dark text-white py-24 md:py-36 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-lg px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-white/20 shadow-xl hover:bg-white/20 transition-all">
              <span className="text-2xl animate-bounce">🌟</span>
              <span>Advance Your Career in Fertility & IVF</span>
              <span className="text-2xl animate-bounce" style={{ animationDelay: '0.5s' }}>🌟</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-6 leading-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">Fellowship in</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-accent via-yellow-400 to-accent animate-pulse">Reproductive Medicine</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed max-w-4xl mx-auto font-light">
              Master the science and practice of <span className="font-semibold text-accent">infertility management</span>, <span className="font-semibold text-accent">IVF procedures</span>, and <span className="font-semibold text-accent">assisted reproductive techniques</span> with expert-led training.
            </p>

            {/* Key Benefits - Enhanced */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { icon: '🎯', text: 'Hands-on Clinical Learning', color: 'from-blue-500 to-cyan-500' },
                { icon: '🔬', text: 'IVF Lab & Procedure Exposure', color: 'from-purple-500 to-pink-500' },
                { icon: '👨‍⚕️', text: 'Expert Mentorship', color: 'from-orange-500 to-red-500' },
                { icon: '🚀', text: 'Career & Clinic Setup Support', color: 'from-green-500 to-emerald-500' }
              ].map((item, i) => (
                <div key={i} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-5 border border-white/20 shadow-2xl hover:bg-white/20 hover:scale-105 transition-all duration-300 hover:shadow-accent/50">
                  <div className={`text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300`}>{item.icon}</div>
                  <p className="text-sm font-bold leading-tight">{item.text}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Enhanced */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-8">
              <button
                onClick={() => setShowForm(true)}
                className="group px-10 py-5 bg-gradient-to-r from-accent via-yellow-400 to-accent text-primary font-extrabold rounded-full hover:shadow-2xl transition-all shadow-xl text-lg relative overflow-hidden transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <span className="text-2xl group-hover:animate-bounce">🚀</span>
                  Apply Now - Limited Seats!
                  <span className="text-2xl group-hover:animate-bounce">🚀</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-accent to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <a
                href="tel:+919876543210"
                className="px-10 py-5 bg-white/95 text-primary font-bold rounded-full hover:bg-white transition-all shadow-2xl text-lg flex items-center gap-3 hover:scale-105 transform"
              >
                <span className="text-2xl">📞</span>
                <span>Call: +91-98765-43210</span>
              </a>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mt-12 pt-12 border-t border-white/20">
              {[
                { number: '500+', label: 'Doctors Trained' },
                { number: '95%', label: 'Success Rate' },
                { number: '10+', label: 'Years Experience' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl md:text-5xl font-extrabold text-accent mb-2">{stat.number}</div>
                  <div className="text-sm md:text-base text-white/80 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-accent/20 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute top-40 right-40 w-12 h-12 bg-secondary/20 rounded-full animate-bounce" style={{ animationDuration: '5s', animationDelay: '0.5s' }}></div>
      </section>

      {/* Lead Form Above Fold - Enhanced */}
      <section className="py-16 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom max-w-6xl relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-primary via-secondary to-accent p-8 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.1) 75%)', backgroundSize: '30px 30px' }}></div>
              <div className="relative z-10">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-bold mb-4">
                  ⚡ LIMITED TIME OFFER
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-3">
                  📋 Book Your FREE Counseling Session
                </h2>
                <p className="text-lg text-white/95 max-w-2xl mx-auto">
                  Get personalized guidance from our fertility training experts and kickstart your IVF specialization journey!
                </p>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-primary transition-colors">
                    👤 Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Dr. John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none hover:border-gray-300"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-primary transition-colors">
                    📧 Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="drjohn@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none hover:border-gray-300"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-primary transition-colors">
                    📱 Phone Number (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91-98765-43210"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none hover:border-gray-300"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-primary transition-colors">
                    🎓 Qualification
                  </label>
                  <select
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none hover:border-gray-300 bg-white"
                  >
                    <option value="">Select Your Qualification</option>
                    <option value="MBBS">MBBS</option>
                    <option value="MD/MS OBGYN">MD/MS OBGYN</option>
                    <option value="General Practitioner">General Practitioner</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-primary transition-colors">
                    📍 Your City/Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Mumbai, India"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none hover:border-gray-300"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-primary transition-colors">
                    💬 Any Questions? (Optional)
                  </label>
                  <input
                    type="text"
                    name="message"
                    placeholder="Ask us anything..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none hover:border-gray-300"
                  />
                </div>

                <div className="md:col-span-2 mt-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="group w-full bg-gradient-to-r from-accent via-primary to-secondary text-white font-extrabold py-5 rounded-2xl hover:shadow-2xl transition-all shadow-xl text-lg disabled:opacity-50 relative overflow-hidden transform hover:scale-[1.02]"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {submitting ? (
                        <>
                          <span className="animate-spin">⏳</span>
                          Submitting...
                        </>
                      ) : submitted ? (
                        <>
                          <span className="animate-bounce">✅</span>
                          Submitted! We'll contact you soon.
                        </>
                      ) : (
                        <>
                          <span className="text-2xl group-hover:animate-bounce">📞</span>
                          Book FREE Counseling - Limited Slots!
                          <span className="text-2xl group-hover:animate-bounce">📞</span>
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </button>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    🔒 Your information is 100% secure. No spam, guaranteed.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* About the Program - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-white via-primary/5 to-secondary/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        
        <div className="container-custom max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
              PROGRAM OVERVIEW
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent mb-6">
              🔬 About the Fellowship Program
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              The <span className="text-primary font-bold">Fellowship in Reproductive Medicine</span> is designed for doctors who want to specialize in <span className="text-secondary font-bold">fertility care</span>, <span className="text-secondary font-bold">IVF</span>, and <span className="text-secondary font-bold">assisted reproduction</span>.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-10 text-white shadow-2xl transform hover:scale-105 transition-transform">
              <div className="text-6xl mb-6">📈</div>
              <h3 className="text-3xl font-bold mb-4">Rising Global Demand</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                With infertility cases rising globally, fertility specialists are in high demand. This is your opportunity to enter a growing, rewarding field.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-primary/20 transform hover:scale-105 transition-transform">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-3xl font-bold text-primary mb-4">Complete Training</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                We equip you with <span className="font-bold text-secondary">practical skills</span>, <span className="font-bold text-secondary">clinical confidence</span>, and <span className="font-bold text-secondary">advanced knowledge</span> to excel in this high-demand specialty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights - Enhanced */}
      <section className="py-20 bg-white relative">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-accent to-primary text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
              WHAT MAKES US DIFFERENT
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-4">
              🎯 Course Highlights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience comprehensive training that combines theory with real-world practice
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🎓', text: 'Comprehensive IVF & fertility training', color: 'from-blue-500 to-cyan-500' },
              { icon: '👥', text: 'Hands-on exposure to real patient cases', color: 'from-purple-500 to-pink-500' },
              { icon: '📹', text: 'Live procedure demonstrations', color: 'from-orange-500 to-red-500' },
              { icon: '🔬', text: 'Training in modern ART techniques', color: 'from-green-500 to-emerald-500' },
              { icon: '👨‍⚕️', text: 'Mentorship by experienced fertility specialists', color: 'from-indigo-500 to-purple-500' },
              { icon: '💻', text: 'Flexible learning (Online + Practical exposure)', color: 'from-pink-500 to-rose-500' }
            ].map((item, i) => (
              <div key={i} className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary transform hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  {item.icon}
                </div>
                <p className="text-gray-800 font-bold text-lg leading-tight">{item.text}</p>
                <div className="mt-4 w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full group-hover:w-full transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Will Learn */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-primary mb-12">
            📚 What You Will Learn
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
            💡 Why Choose Us?
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
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold shrink-0">
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
            👩‍⚕️ Who Should Apply?
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
            🚀 Career Opportunities
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
            📊 Program Outcomes
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
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">
                  {i + 1}
                </div>
                <p className="text-text-primary font-medium text-lg">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-primary mb-12">
            ⭐ What Our Fellows Say
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { quote: 'This program helped me confidently step into IVF practice.', author: 'Dr. A. Sharma', role: 'MBBS, Fertility Consultant' },
              { quote: 'Excellent hands-on exposure and mentorship.', author: 'Dr. R. Mehta', role: 'MD OBGYN, IVF Specialist' }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-primary">
                <div className="text-4xl text-primary mb-4">💬</div>
                <p className="text-text-primary italic mb-6 text-lg">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
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
            ❓ Frequently Asked Questions
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
      <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-secondary text-white">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            📣 Start Your Journey in Reproductive Medicine Today
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join one of the fastest-growing medical specialties and build a rewarding career in fertility care.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
            <p className="text-2xl font-bold mb-4">🚀 Limited Seats Available</p>
            <p className="text-lg mb-2">📞 Call/WhatsApp: +91-98765-43210</p>
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
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-primary">Apply Now</h3>
                <button onClick={() => setShowForm(false)} className="text-3xl text-gray-400 hover:text-gray-600">×</button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <select
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <textarea
                  name="message"
                  placeholder="Any specific questions? (Optional)"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-xl hover:opacity-90 transition-all shadow-lg disabled:opacity-50"
                >
                  {submitting ? '⏳ Submitting...' : submitted ? '✅ Submitted Successfully!' : '🚀 Submit Application'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';

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
          subject: 'Fellowship in Emergency Medicine - Inquiry',
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

      {/* Sticky Apply CTA - Mobile Only */}
      <div className={`fixed bottom-0 left-0 right-0 bg-gradient-to-r from-accent via-primary to-secondary text-white py-3 px-3 shadow-2xl z-40 md:hidden transform transition-transform duration-300 ${scrolled ? 'translate-y-0' : 'translate-y-20'}`}>
        <button
          onClick={() => setShowForm(true)}
          className="w-full bg-white text-primary font-bold py-4 rounded-full hover:bg-accent hover:text-white transition-all transform active:scale-95 shadow-lg flex items-center justify-center gap-2 text-sm"
        >
          <span className="animate-pulse text-base">🚀</span> Apply Now - Limited Seats
        </button>
      </div>

      {/* Hero Section - Full Width Background Image */}
      <section className="relative h-[70vh] md:h-[70vh] lg:h-[85vh] overflow-hidden">
        {/* Full Background Image - Left to Right */}
        <div className="absolute inset-0">
          <img 
            src="/emergency-med.jpg" 
            alt="Emergency Medicine - Doctors and Paramedics Team" 
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay for better text contrast on left side */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        {/* Content Overlay - Top Left Corner */}
        <div className="absolute top-6 md:top-12 lg:top-16 left-4 md:left-12 lg:left-16 right-4 md:right-auto max-w-full md:max-w-xl lg:max-w-2xl">
          {/* Main Heading */}
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-3 md:mb-6 leading-tight">
            <span className="block">Become the Doctor Who</span>
            <span className="block">Stays Calm When Every</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-accent via-yellow-400 to-accent">Second Matters</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-sm md:text-lg lg:text-xl text-white/95 leading-relaxed font-light mb-4 md:mb-8">
            Fellowship in Emergency Medicine
          </p>

          <p className="text-sm md:text-base lg:text-lg text-white/90 leading-relaxed font-light mb-6 md:mb-8">
            Build practical expertise in trauma care, critical emergencies, resuscitation, and rapid patient management through industry-focused clinical training.
          </p>

          {/* Key Benefits Bullets */}
          <div className="space-y-2 mb-6 md:mb-8">
            <div className="flex items-center gap-2 text-white/95 text-xs md:text-sm">
              <span className="text-lg">✔</span>
              <span>Practical Emergency Care Training</span>
            </div>
            <div className="flex items-center gap-2 text-white/95 text-xs md:text-sm">
              <span className="text-lg">✔</span>
              <span>Expert Mentorship</span>
            </div>
            <div className="flex items-center gap-2 text-white/95 text-xs md:text-sm">
              <span className="text-lg">✔</span>
              <span>Real-World Clinical Exposure</span>
            </div>
            <div className="flex items-center gap-2 text-white/95 text-xs md:text-sm">
              <span className="text-lg">✔</span>
              <span>Career Growth Opportunities</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
            <button
              onClick={() => setShowForm(true)}
              className="group px-5 md:px-8 py-3 md:py-4 bg-gradient-to-r from-accent via-yellow-400 to-accent text-primary font-extrabold rounded-full hover:shadow-2xl transition-all shadow-xl text-xs md:text-base lg:text-lg relative overflow-hidden transform hover:scale-105 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2 justify-center">
                <span className="text-base md:text-xl group-hover:animate-bounce">🚀</span>
                Apply Now - Limited Seats!
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-accent to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <a
              href="tel:+919985044993"
              className="px-5 md:px-8 py-3 md:py-4 bg-white/95 text-primary font-bold rounded-full hover:bg-white transition-all shadow-xl text-xs md:text-base lg:text-lg flex items-center gap-2 hover:scale-105 transform justify-center w-full sm:w-auto"
            >
              <span className="text-base md:text-xl">📞</span>
              <span className="whitespace-nowrap">Call: +91-9985044993</span>
            </a>
          </div>

          {/* Urgency Badge */}
          <div className="flex items-center gap-2 mt-6 md:mt-8 text-yellow-300 font-bold text-xs md:text-sm animate-pulse">
            <span className="text-lg">🚀</span>
            Limited Seats Available
          </div>
        </div>
      </section>

      {/* Lead Form Above Fold - Enhanced */}
      <section className="py-8 md:py-16 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom max-w-6xl relative z-10 px-4">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-primary via-secondary to-accent p-6 md:p-8 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.1) 75%)', backgroundSize: '30px 30px' }}></div>
              <div className="relative z-10">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold mb-3 md:mb-4">
                  ⚡ LIMITED TIME OFFER
                </div>
                <h2 className="text-xl md:text-3xl lg:text-4xl font-heading font-extrabold mb-2 md:mb-3">
                  📋 Book Your FREE Counseling Session
                </h2>
                <p className="text-sm md:text-lg text-white/95 max-w-2xl mx-auto">
                  Get personalized guidance from our emergency medicine training experts and kickstart your specialized fellowship journey!
                </p>
              </div>
            </div>

            <div className="p-4 md:p-8 lg:p-10">
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4 md:gap-6">
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
                    placeholder="+91-9985044993"
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
                    <option value="MD/MS">MD/MS</option>
                    <option value="General Practitioner">General Practitioner</option>
                    <option value="Other Medical Graduate">Other Medical Graduate</option>
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
                    className="group w-full bg-gradient-to-r from-primary via-secondary to-accent text-white font-extrabold py-5 rounded-2xl hover:shadow-2xl transition-all shadow-xl text-lg disabled:opacity-50 relative overflow-hidden transform hover:scale-[1.02]"
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

      {/* Why Emergency Medicine Section */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="container-custom max-w-6xl relative z-10 px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
              WHY THIS FIELD?
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent mb-6">
              🏥 Why Emergency Medicine?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Emergency medicine is one of the fastest-growing and most demanding specialties in healthcare today. Hospitals and healthcare centers need doctors who can make fast, confident decisions during trauma cases, cardiac emergencies, and critical situations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl border border-primary/20 hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-primary mb-3">High Demand Specialty</h3>
              <p className="text-gray-700">Growing demand across hospitals for trained emergency medicine specialists with hands-on expertise.</p>
            </div>

            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 p-8 rounded-2xl border border-secondary/20 hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-bold text-secondary mb-3">Build Practical Skills</h3>
              <p className="text-gray-700">Develop real-world emergency handling capabilities that are immediately applicable in clinical practice.</p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl border border-primary/20 hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-primary mb-3">Rapid Decision-Making</h3>
              <p className="text-gray-700">Master the ability to make fast, confident clinical decisions during critical situations and trauma cases.</p>
            </div>

            <div className="bg-gradient-to-br from-secondary/10 to-primary/10 p-8 rounded-2xl border border-secondary/20 hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-secondary mb-3">Career Growth</h3>
              <p className="text-gray-700">Unlock opportunities in hospitals, trauma centers, and advanced clinical roles with specialized training.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Will Learn Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="container-custom max-w-6xl relative z-10 px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
              CURRICULUM
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent mb-6">
              📚 What You Will Learn
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🩹', title: 'Trauma & Emergency Care', desc: 'Comprehensive trauma management protocols' },
              { icon: '🫁', title: 'Airway Management', desc: 'Advanced airway handling techniques' },
              { icon: '💓', title: 'Resuscitation Protocols', desc: 'Advanced life support and resuscitation' },
              { icon: '🚨', title: 'Critical Patient Stabilization', desc: 'Emergency stabilization procedures' },
              { icon: '⚡', title: 'Rapid Clinical Decision-Making', desc: 'Fast diagnostic and treatment decisions' },
              { icon: '🔧', title: 'Emergency Procedures', desc: 'Critical hands-on emergency procedures' },
              { icon: '🏥', title: 'Acute Care Management', desc: 'Acute condition management strategies' },
              { icon: '❤️', title: 'BLS & ACLS Protocols', desc: 'Certification in life support protocols' },
              { icon: '🧠', title: 'Clinical Confidence', desc: 'Build expertise and professional confidence' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border-l-4 border-primary hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">{item.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose MedFellow Section */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="container-custom max-w-6xl relative z-10 px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
              WHY US?
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent mb-6">
              ⭐ Why Choose MedFellow Academy?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              { icon: '🎯', title: 'Industry-Focused Curriculum', desc: 'Designed based on real-world emergency medicine practices' },
              { icon: '📖', title: 'Case-Based Practical Learning', desc: 'Learn through real clinical case studies and scenarios' },
              { icon: '👨‍🏫', title: 'Experienced Faculty & Mentors', desc: 'Learn from seasoned emergency medicine professionals' },
              { icon: '🏥', title: 'Real Clinical Exposure', desc: 'Direct training in active emergency departments' },
              { icon: '📅', title: 'Flexible Learning Structure', desc: 'Adapt training to your schedule and pace' },
              { icon: '🚀', title: 'Career-Oriented Training', desc: 'Focus on job-ready skills and certifications' },
              { icon: '🛠️', title: 'Hands-on Skill Development', desc: 'Practical procedures and real-world simulations' },
              { icon: '🌟', title: 'Mentorship Support', desc: '1-on-1 guidance from experienced practitioners' }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 group">
                <div className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Apply Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 relative overflow-hidden">
        <div className="container-custom max-w-6xl relative z-10 px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
              ELIGIBILITY
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent mb-6">
              👥 Who Should Apply?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              '✔ MBBS Doctors',
              '✔ General Practitioners',
              '✔ Medical Graduates',
              '✔ Doctors Interested in Emergency & Acute Care',
              '✔ Professionals Looking to Upgrade Clinical Skills',
              '✔ Doctors Seeking Career Advancement'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white p-6 rounded-lg border-l-4 border-primary hover:shadow-lg transition-all">
                <div className="text-2xl">👨‍⚕️</div>
                <p className="text-gray-700 font-medium">{item.replace('✔ ', '')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="container-custom max-w-6xl relative z-10 px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
              OPPORTUNITIES
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent mb-6">
              🌟 Career Opportunities
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              After completing the program, you can explore opportunities in:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🏥', title: 'Hospital Emergency Departments', desc: 'Lead emergency teams in major hospitals' },
              { icon: '🚑', title: 'Trauma & Critical Care Units', desc: 'Specialize in trauma and ICU management' },
              { icon: '🏨', title: 'Multi-Speciality Hospitals', desc: 'Work in advanced healthcare facilities' },
              { icon: '🩺', title: 'Acute Care Practice', desc: 'Start your own emergency care practice' },
              { icon: '📈', title: 'Advanced Clinical Roles', desc: 'Progress to senior and leadership positions' },
              { icon: '🎓', title: 'Teaching & Training', desc: 'Train and mentor the next generation' }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-xl border border-primary/20 hover:shadow-xl transition-all text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Benefits Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 relative overflow-hidden">
        <div className="container-custom max-w-6xl relative z-10 px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
              BENEFITS
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent mb-6">
              🎁 Program Benefits
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { icon: '💪', title: 'Improve Clinical Confidence', desc: 'Build expertise and confidence in emergency situations' },
              { icon: '🔥', title: 'Build High-Demand Skills', desc: 'Acquire competencies highly valued in the market' },
              { icon: '📈', title: 'Enhance Career Opportunities', desc: 'Open doors to premium job positions and roles' },
              { icon: '🎯', title: 'Gain Practical Emergency Expertise', desc: 'Master real-world emergency care techniques' },
              { icon: '🌟', title: 'Stay Ahead in Modern Healthcare', desc: 'Keep updated with latest emergency medicine practices' },
              { icon: '🤝', title: 'Professional Network', desc: 'Connect with fellow practitioners and experts' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border-l-4 border-primary hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="container-custom max-w-6xl relative z-10 px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
              TESTIMONIALS
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent mb-6">
              💬 What Our Doctors Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                quote: 'Excellent practical exposure and real emergency care learning. The hands-on training was transformative for my career.',
                author: 'Dr. Rajesh Kumar',
                title: 'Emergency Medicine Specialist'
              },
              {
                quote: 'This fellowship helped me improve confidence in handling critical cases. I now lead trauma teams with expertise.',
                author: 'Dr. Priya Sharma',
                title: 'Senior Emergency Physician'
              },
              {
                quote: 'The mentorship from experienced faculty was invaluable. I gained practical skills that directly impact patient care.',
                author: 'Dr. Amit Patel',
                title: 'Hospital Emergency Department'
              },
              {
                quote: 'Best investment in my medical career. Opened doors to premium positions and advanced clinical roles.',
                author: 'Dr. Sarah Ahmed',
                title: 'Trauma & Critical Care Lead'
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl border border-primary/20 hover:shadow-xl transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 font-medium italic mb-6">"{testimonial.quote}"</p>
                <div className="border-t border-primary/20 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-primary text-sm">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary via-secondary to-accent relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container-custom max-w-6xl relative z-10 px-4 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-4 md:mb-6 leading-tight">
            Upgrade Your Emergency Medicine <span className="block">Skills Today</span>
          </h2>

          <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed">
            The future of emergency care belongs to doctors who are prepared to act when every second matters. Join MedFellow Academy and transform your career.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 md:mb-12">
            <button
              onClick={() => setShowForm(true)}
              className="group px-8 md:px-12 py-4 md:py-5 bg-white text-primary font-extrabold rounded-full hover:shadow-2xl transition-all shadow-xl text-base md:text-lg relative overflow-hidden transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-3 justify-center">
                <span className="text-2xl group-hover:animate-bounce">🚀</span>
                Apply Now - Limited Seats
                <span className="text-2xl group-hover:animate-bounce">🚀</span>
              </span>
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
            <a
              href="tel:+919985044993"
              className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-full font-bold hover:bg-white/30 transition-all"
            >
              <span className="text-2xl">📞</span>
              <span>Call: +91-9985044993</span>
            </a>
            <a
              href="https://wa.me/919985044993"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-full font-bold hover:bg-white/30 transition-all"
            >
              <span className="text-2xl">💬</span>
              <span>WhatsApp: +91-9985044993</span>
            </a>
          </div>

          <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full font-bold">
            🌐 medfellowacademy.com
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

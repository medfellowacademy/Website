'use client';
import { useState } from 'react';
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

      {/* Sticky Apply CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary text-white py-3 px-4 shadow-2xl z-40 md:hidden">
        <button
          onClick={() => setShowForm(true)}
          className="w-full bg-white text-primary font-bold py-3 rounded-full hover:bg-accent hover:text-white transition-colors"
        >
          🚀 Apply Now - Limited Seats
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold mb-6">
              🌟 Advance Your Career in Fertility & IVF
            </div>
            
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Fellowship in<br />
              <span className="text-accent">Reproductive Medicine</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Master the science and practice of infertility management, IVF procedures, and assisted reproductive techniques with expert-led training.
            </p>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-4 gap-4 mb-10">
              {[
                { icon: '✔️', text: 'Hands-on Clinical Learning' },
                { icon: '✔️', text: 'IVF Lab & Procedure Exposure' },
                { icon: '✔️', text: 'Expert Mentorship' },
                { icon: '✔️', text: 'Career & Clinic Setup Support' }
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="text-sm font-semibold">{item.text}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => setShowForm(true)}
                className="px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent/90 transition-all shadow-xl hover:scale-105 text-lg"
              >
                🚀 Apply Now - Limited Seats
              </button>
              <a
                href="tel:+919876543210"
                className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-all shadow-xl text-lg"
              >
                📞 Call: +91-98765-43210
              </a>
            </div>

            <p className="mt-6 text-white/80 text-sm">
              📞 Call/WhatsApp: +91-98765-43210 | 
              <button onClick={() => setShowForm(true)} className="underline ml-2 hover:text-white">
                Download Brochure
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Lead Form Above Fold */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-primary">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-2">
                📋 Book Free Counseling Session
              </h2>
              <p className="text-text-secondary">Get personalized guidance from our fertility training experts</p>
            </div>

            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleChange}
                required
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleChange}
                required
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <select
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                required
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <textarea
                name="message"
                placeholder="Any specific questions? (Optional)"
                value={formData.message}
                onChange={handleChange}
                rows={1}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              ></textarea>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-xl hover:opacity-90 transition-all shadow-lg disabled:opacity-50"
                >
                  {submitting ? '⏳ Submitting...' : submitted ? '✅ Submitted! We\'ll contact you soon.' : '📞 Book Free Counseling'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* About the Program */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              🔬 About the Program
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
              The Fellowship in Reproductive Medicine is designed for doctors who want to specialize in fertility care, IVF, and assisted reproduction.
            </p>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed mt-4">
              With infertility cases rising globally, this program equips you with practical skills, clinical confidence, and advanced knowledge to excel in this high-demand field.
            </p>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-primary mb-12">
            🎯 Course Highlights
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Comprehensive IVF & fertility training',
              'Hands-on exposure to real patient cases',
              'Live procedure demonstrations',
              'Training in modern ART techniques',
              'Mentorship by experienced fertility specialists',
              'Flexible learning (Online + Practical exposure)'
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md border-l-4 border-primary hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✔️</span>
                  <p className="text-text-primary font-medium">{item}</p>
                </div>
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

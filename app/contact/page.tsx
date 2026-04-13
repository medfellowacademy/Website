'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.program ? `Inquiry about ${formData.program}` : 'General Inquiry',
          message: formData.message,
        }),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'Submission failed');
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', program: '', message: '' });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-linear-to-br from-primary to-primary-dark text-white py-12 md:py-20">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4 md:mb-6">Contact Us</h1>
          <p className="text-base md:text-xl max-w-3xl mx-auto opacity-90">
            Have questions? We&apos;re here to help you start your fellowship journey
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    title="Full Name"
                    placeholder="Dr. Jane Smith"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    title="Email Address"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    title="Phone Number"
                    placeholder="+91 99850 44993"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Program of Interest</label>
                  <select
                    title="Program of Interest"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                    value={formData.program}
                    onChange={(e) => setFormData({...formData, program: e.target.value})}
                  >
                    <option value="">Select a program</option>
                    <option value="arthroscopy">Arthroscopy and Arthroplasty</option>
                    <option value="gastro">Gastroenterology</option>
                    <option value="reproductive">Reproductive Medicine</option>
                    <option value="pain">Pain Management</option>
                    <option value="diabeto">Diabetology</option>
                    <option value="endo">Endocrinology</option>
                    <option value="rheum">Rheumatology</option>
                    <option value="neuro">Neurology</option>
                    <option value="radio">Radiology</option>
                    <option value="usg">Ultrasonography</option>
                    <option value="cardio">Interventional Cardiology</option>
                    <option value="ortho">Orthopedics</option>
                    <option value="gyn">Gynecology & Obstetrics</option>
                    <option value="surgery">General Surgery</option>
                    <option value="spine">Spine Surgery</option>
                    <option value="emergency">Emergency Medicine</option>
                    <option value="critical">Critical Care Medicine</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Message</label>
                  <textarea
                    rows={5}
                    title="Message"
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button type="submit" disabled={submitting} className="w-full btn-primary py-4 text-lg disabled:opacity-60">
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitted && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 font-medium text-center">
                    ✅ Thank you! We will contact you shortly.
                  </div>
                )}
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center">
                    ❌ {error}
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="card p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white text-xl shrink-0">
                      📍
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-primary mb-2">Address</h3>
                      <p className="text-text-secondary">
                        Med Fellow Academy<br />
                        23-5-449, Second Floor, Nagul Chinta<br />
                        Hyderabad- 500065, Telangana, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-linear-to-br from-secondary to-accent rounded-lg flex items-center justify-center text-white text-xl shrink-0">
                      📞
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-primary mb-2">Phone</h3>
                      <p className="text-text-secondary">
                        +91 9985044993<br />
                        Mon-Fri: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-linear-to-br from-accent to-primary rounded-lg flex items-center justify-center text-white text-xl shrink-0">
                      ✉️
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-primary mb-2">Email</h3>
                      <p className="text-text-secondary">
                        info@medfellow.in
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card p-6 bg-linear-to-br from-primary/5 to-secondary/5">
                  <h3 className="font-heading font-bold text-primary mb-3">Office Hours</h3>
                  <div className="space-y-2 text-text-secondary">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-semibold">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-semibold">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-semibold">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

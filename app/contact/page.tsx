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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you shortly.');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-heading font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Have questions? We're here to help you start your fellowship journey
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Program of Interest</label>
                  <select
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button type="submit" className="w-full btn-primary py-4 text-lg">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="card p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white text-xl shrink-0">
                      📍
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-primary mb-2">Address</h3>
                      <p className="text-text-secondary">
                        Med Fellow Academy<br />
                        123 Medical Plaza, 4th Floor<br />
                        Mumbai, Maharashtra 400001<br />
                        India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center text-white text-xl shrink-0">
                      📞
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-primary mb-2">Phone</h3>
                      <p className="text-text-secondary">
                        +91 98765 43210<br />
                        +91 98765 43211<br />
                        Mon-Fri: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center text-white text-xl shrink-0">
                      ✉️
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-primary mb-2">Email</h3>
                      <p className="text-text-secondary">
                        info@medfellowacademy.com<br />
                        admissions@medfellowacademy.com<br />
                        support@medfellowacademy.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
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

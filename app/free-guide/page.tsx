"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FreeGuide() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialty: "",
    experience: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send data to your CRM/email service
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-4xl font-heading font-bold text-primary mb-4">
                Check Your Email!
              </h1>
              <p className="text-xl text-text-secondary mb-8">
                We&apos;ve sent the <strong>Complete Fellowship Selection Guide 2026</strong> to <strong>{formData.email}</strong>
              </p>
              <div className="card p-6 mb-8">
                <h3 className="text-lg font-bold text-primary mb-3">What&apos;s Inside Your Guide:</h3>
                <ul className="text-left space-y-2 text-text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Specialty-wise salary comparison (all fellowships)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">✓</span>
                    <span>ROI calculator for each program</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Hospital accreditation checklist</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Fellowship vs PG Diploma detailed comparison</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Decision-making framework</span>
                  </li>
                </ul>
              </div>
              <div className="bg-accent/10 p-6 rounded-lg mb-8">
                <p className="text-sm text-text-secondary">
                  <strong className="text-primary">Next Steps:</strong> Our admissions team will reach out within 24 hours to answer your questions and help you find the perfect fellowship for your career goals.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/programs" className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-accent transition-all">
                  Browse Programs
                </a>
                <a href="/fellowship-matcher" className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all">
                  Take the Quiz
                </a>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="bg-linear-to-br from-primary to-primary-dark text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur rounded-full mb-4">
              <span className="text-sm font-semibold">🎁 FREE DOWNLOAD</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Complete Fellowship Selection Guide 2026
            </h1>
            <p className="text-xl opacity-90 mb-6">
              45-page comprehensive guide to choosing the right medical fellowship for maximum career growth and ROI
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span>📄</span>
                <span>45 pages</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📊</span>
                <span>Data-backed insights</span>
              </div>
              <div className="flex items-center gap-2">
                <span>💯</span>
                <span>100% Free</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Left: What's Inside */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                What You&apos;ll Learn
              </h2>
              
              <div className="space-y-6">
                <div className="card p-6">
                  <h3 className="text-xl font-heading font-bold text-primary mb-3">
                    Chapter 1: Understanding Your Options
                  </h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li>• Fellowship vs DNB vs PG Diploma comparison</li>
                    <li>• MCI recognition: what matters and what doesn&apos;t</li>
                    <li>• International certifications worth pursuing</li>
                  </ul>
                </div>

                <div className="card p-6">
                  <h3 className="text-xl font-heading font-bold text-primary mb-3">
                    Chapter 2: Specialty-Wise Breakdown
                  </h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li>• Salary ranges for 15+ specialties (verified data)</li>
                    <li>• Job market demand analysis</li>
                    <li>• Private practice vs hospital employment</li>
                  </ul>
                </div>

                <div className="card p-6">
                  <h3 className="text-xl font-heading font-bold text-primary mb-3">
                    Chapter 3: ROI Calculator
                  </h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li>• Program cost vs lifetime earnings</li>
                    <li>• Break-even timeline for each specialty</li>
                    <li>• Hidden costs to watch for</li>
                  </ul>
                </div>

                <div className="card p-6">
                  <h3 className="text-xl font-heading font-bold text-primary mb-3">
                    Chapter 4: Quality Checklist
                  </h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li>• 20-point program evaluation framework</li>
                    <li>• Red flags to avoid</li>
                    <li>• Questions to ask during visits</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="sticky top-24">
              <div className="card p-8 shadow-2xl">
                <h2 className="text-2xl font-heading font-bold text-primary mb-2 text-center">
                  Get Your Free Guide
                </h2>
                <p className="text-text-secondary mb-6 text-center">
                  Instant download. No credit card required.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Dr. John Smith"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="doctor@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Current Specialty
                    </label>
                    <select
                      name="specialty"
                      value={formData.specialty}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select...</option>
                      <option value="mbbs">MBBS</option>
                      <option value="md-medicine">MD Medicine</option>
                      <option value="md-pediatrics">MD Pediatrics</option>
                      <option value="ms-surgery">MS Surgery</option>
                      <option value="md-anesthesia">MD Anesthesia</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Years of Experience
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select...</option>
                      <option value="0-2">0-2 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="6-10">6-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-accent text-white rounded-lg font-bold hover:bg-accent/90 transition-all text-lg"
                  >
                    📥 Download Free Guide
                  </button>

                  <p className="text-xs text-text-secondary text-center">
                    By downloading, you agree to receive emails from Med Fellow Academy. Unsubscribe anytime.
                  </p>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center gap-4 text-sm text-text-secondary">
                    <div className="flex items-center gap-1">
                      <span className="text-green-600">✓</span>
                      <span>5,000+ downloads</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-green-600">✓</span>
                      <span>4.9/5 rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">
            What Doctors Are Saying
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="card p-6">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-sm text-text-secondary mb-3">
                &quot;This guide saved me months of research. The ROI calculator alone is worth gold!&quot;
              </p>
              <p className="text-xs font-semibold text-primary">- Dr. Amit Patel, Mumbai</p>
            </div>

            <div className="card p-6">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-sm text-text-secondary mb-3">
                &quot;Finally, honest data about fellowship salaries. No fluff, just facts.&quot;
              </p>
              <p className="text-xs font-semibold text-primary">- Dr. Priya Sharma, Delhi</p>
            </div>

            <div className="card p-6">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-sm text-text-secondary mb-3">
                &quot;The quality checklist helped me avoid a bad program. Thank you!&quot;
              </p>
              <p className="text-xs font-semibold text-primary">- Dr. Rajiv Kumar, Bangalore</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

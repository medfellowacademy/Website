'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    qualification: '',
    yearOfPassing: '',
    program: '',
    experience: '',
    currentInstitution: '',
    statement: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    alert('Application submitted successfully! We will review and contact you shortly.');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-heading font-bold mb-6">Apply for Fellowship</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Take the first step towards advancing your medical career
          </p>
          <div className="mt-6 inline-flex items-center gap-4 text-sm">
            <span className="px-4 py-2 bg-white/20 rounded-full">⏰ Next Batch: March 2026</span>
            <span className="px-4 py-2 bg-white/20 rounded-full">📅 Application Deadline: Feb 28, 2026</span>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          {/* Application Steps */}
          <div className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">Application Process</h2>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="font-semibold text-primary mb-2">Submit Application</h3>
                <p className="text-sm text-text-secondary">Complete the online form</p>
                <p className="text-xs text-accent mt-1 font-semibold">1-2 days</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="font-semibold text-primary mb-2">Document Review</h3>
                <p className="text-sm text-text-secondary">We verify your credentials</p>
                <p className="text-xs text-accent mt-1 font-semibold">3-5 days</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="font-semibold text-primary mb-2">Interview</h3>
                <p className="text-sm text-text-secondary">Virtual/In-person with faculty</p>
                <p className="text-xs text-accent mt-1 font-semibold">Within 7 days</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  4
                </div>
                <h3 className="font-semibold text-primary mb-2">Admission</h3>
                <p className="text-sm text-text-secondary">Receive offer letter & fee details</p>
                <p className="text-xs text-accent mt-1 font-semibold">Within 3 days</p>
              </div>
            </div>
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 text-center">
              <p className="text-sm text-primary"><strong>Total Timeline:</strong> Complete admission process in 14-20 days from application submission</p>
            </div>
          </div>

          {/* Application Form */}
          <div className="card p-8 lg:p-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-8">Application Form</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-4">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Highest Qualification *</label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none"
                      value={formData.qualification}
                      onChange={(e) => setFormData({...formData, qualification: e.target.value})}
                    >
                      <option value="">Select qualification</option>
                      <option value="MBBS">MBBS</option>
                      <option value="MD">MD</option>
                      <option value="MS">MS</option>
                      <option value="DNB">DNB</option>
                      <option value="DM">DM</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Academic Information */}
              <div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-4">Academic Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Year of Passing *</label>
                    <input
                      type="number"
                      required
                      min="1980"
                      max="2026"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none"
                      value={formData.yearOfPassing}
                      onChange={(e) => setFormData({...formData, yearOfPassing: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Years of Experience *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., 3 years"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none"
                      value={formData.experience}
                      onChange={(e) => setFormData({...formData, experience: e.target.value})}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-primary mb-2">Current Institution/Hospital</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none"
                      value={formData.currentInstitution}
                      onChange={(e) => setFormData({...formData, currentInstitution: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              {/* Program Selection */}
              <div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-4">Program Selection</h3>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Fellowship Program *</label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none"
                    value={formData.program}
                    onChange={(e) => setFormData({...formData, program: e.target.value})}
                  >
                    <option value="">Select a program</option>
                    <option value="arthroscopy">Fellowship in Arthroscopy and Arthroplasty</option>
                    <option value="gastro">Fellowship in Gastroenterology</option>
                    <option value="reproductive">Fellowship in Reproductive Medicine</option>
                    <option value="pain">Fellowship in Pain Management</option>
                    <option value="diabeto">Fellowship in Diabetology</option>
                    <option value="endo">Fellowship in Endocrinology</option>
                    <option value="rheum">Fellowship in Rheumatology</option>
                    <option value="neuro">Fellowship in Neurology</option>
                    <option value="radio">Fellowship in Radiology</option>
                    <option value="usg">Fellowship in Ultrasonography</option>
                    <option value="cardio">Fellowship in Interventional Cardiology</option>
                    <option value="ortho">Fellowship in Orthopedics</option>
                    <option value="gyn">Fellowship in Gynecology & Obstetrics</option>
                    <option value="surgery">Fellowship in General Surgery</option>
                    <option value="spine">Fellowship in Spine Surgery</option>
                    <option value="emergency">Fellowship in Emergency Medicine</option>
                    <option value="critical">Fellowship in Critical Care Medicine</option>
                  </select>
                </div>
              </div>

              {/* Statement of Purpose */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Statement of Purpose *</label>
                <textarea
                  required
                  rows={6}
                  placeholder="Tell us why you want to pursue this fellowship and your career goals..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none"
                  value={formData.statement}
                  onChange={(e) => setFormData({...formData, statement: e.target.value})}
                ></textarea>
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                <p className="text-sm text-text-secondary">
                  <strong className="text-accent">Note:</strong> After submitting this form, you will be contacted by our admissions team 
                  within 48 hours to discuss the next steps and document requirements.
                </p>
              </div>

              <button type="submit" className="w-full btn-primary py-4 text-lg">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

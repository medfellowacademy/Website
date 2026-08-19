'use client';
import { useState } from 'react';
import Image from 'next/image';

const PROGRAMS = [
  {
    icon: '🩺',
    name: 'Fellowship in Pediatric Endocrinology',
    text: 'Develop specialized knowledge in pediatric endocrine and metabolic disorders, growth abnormalities, diabetes, thyroid disorders, and hormonal conditions.',
  },
  {
    icon: '❤️',
    name: 'Fellowship in Pediatric Echocardiography',
    text: 'Build focused knowledge in pediatric cardiac assessment and echocardiographic evaluation, including congenital and acquired heart conditions.',
  },
  {
    icon: '🧠',
    name: 'Fellowship in Pediatric Neurology',
    text: 'Strengthen your understanding of pediatric neurological conditions, seizures, epilepsy, developmental disorders, and neurological assessment.',
  },
  {
    icon: '🏥',
    name: 'Fellowship in Pediatric Critical Care',
    text: 'Develop knowledge of pediatric emergencies, critical illnesses, intensive care principles, and management of critically ill children.',
  },
  {
    icon: '👶',
    name: 'Fellowship in Neonatology',
    text: 'Gain focused knowledge in newborn assessment, neonatal conditions, high-risk newborn care, and essential neonatal management.',
  },
];

const INTEREST_MAP = [
  { interest: 'Interested in hormones, growth & metabolism?', program: 'Pediatric Endocrinology' },
  { interest: 'Interested in pediatric cardiac imaging?', program: 'Pediatric Echocardiography' },
  { interest: 'Interested in neurological disorders in children?', program: 'Pediatric Neurology' },
  { interest: 'Interested in emergency & intensive pediatric care?', program: 'Pediatric Critical Care' },
  { interest: 'Interested in newborn & high-risk neonatal care?', program: 'Neonatology' },
];

const APPLICANTS = [
  { title: 'MBBS Doctors', text: 'Explore specialized pediatric fellowship opportunities relevant to your career goals.', icon: '🎓' },
  { title: 'MD/DNB Pediatrics', text: 'Deepen your knowledge in a specific pediatric subspecialty.', icon: '👨‍⚕️' },
  { title: 'Practicing Pediatricians', text: 'Upgrade your knowledge and develop focused expertise in your area of interest.', icon: '🩺' },
  { title: 'Other Eligible Medical Professionals', text: 'Eligibility may vary depending on the selected fellowship program.', icon: '👩‍⚕️' },
];

export default function PediatricSubspecialtyFellowshipPage() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    qualification: '',
    fellowship: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const scrollToForm = (fellowship?: string) => {
    if (fellowship) {
      setFormData((prev) => ({ ...prev, fellowship }));
    }
    document.getElementById('program-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
          phone: formData.mobile,
          subject: `Pediatric Fellowship Programs - ${formData.fellowship || 'General Inquiry'}`,
          message: `Qualification: ${formData.qualification}\nFellowship Interested In: ${formData.fellowship}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', mobile: '', email: '', qualification: '', fellowship: '' });
      } else {
        alert('Failed to submit. Please try again.');
      }
    } catch (error) {
      alert('Error submitting form. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky CTA - Mobile Only */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-accent via-primary to-secondary text-white py-3 px-3 shadow-2xl z-40 md:hidden">
        <button
          onClick={() => scrollToForm()}
          className="w-full bg-white text-primary font-bold py-4 rounded-full hover:bg-accent hover:text-white transition-all transform active:scale-95 shadow-lg flex items-center justify-center gap-2 text-sm"
        >
          <span className="animate-pulse text-base">🚀</span> Get Program Details
        </button>
      </div>

      {/* Minimal Logo Header */}
      <header className="bg-white py-3 md:py-4 border-b border-gray-100">
        <div className="container-custom max-w-6xl mx-auto px-4 flex items-center justify-between gap-3">
          <div className="relative w-32 h-10 md:w-40 md:h-12 shrink-0">
            <Image src="/logo.png" alt="MedFellow Academy" fill className="object-contain object-left" sizes="160px" priority />
          </div>
          <button
            onClick={() => scrollToForm()}
            className="px-4 py-2 md:px-6 md:py-2.5 bg-gradient-to-r from-accent via-primary to-secondary text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-105 text-xs md:text-sm shrink-0"
          >
            Apply Now
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-[#0f2e15] via-[#15401E] to-[#1c5228]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 container-custom max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm md:text-base font-bold tracking-widest text-accent mb-4 uppercase">
            Pediatric Fellowship Programs
          </p>
          <h1 className="font-heading font-extrabold mb-6 leading-tight text-white text-3xl md:text-5xl lg:text-6xl">
            Build Specialized Expertise in Pediatric Care
          </h1>
          <p className="text-base md:text-xl text-white/90 leading-relaxed font-light max-w-2xl mx-auto">
            Specialized Fellowship Programs designed for doctors who want to develop focused knowledge and
            clinical expertise in Pediatric care.
          </p>
        </div>
      </section>

      {/* Choose Your Pediatric Subspecialty */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-custom max-w-6xl px-4">
          <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-center text-primary mb-3">
            Choose Your Pediatric Subspecialty
          </h2>
          <p className="text-center text-text-secondary max-w-2xl mx-auto mb-10 md:mb-14 text-base md:text-lg">
            Five focused fellowship programs — pick the one that matches your career interest.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAMS.map((p) => (
              <div key={p.name} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-primary/30 transition-all flex flex-col">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-3">{p.name}</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6 grow">{p.text}</p>
                <button
                  onClick={() => scrollToForm(p.name.replace('Fellowship in ', ''))}
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-[#15401E] text-white rounded-full font-semibold text-sm hover:bg-[#0f2e15] transition-colors self-start"
                >
                  Get Program Details →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose a Pediatric Fellowship */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container-custom max-w-4xl px-4">
          <div className="text-center mb-10">
            <div className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-5 py-1.5 rounded-full text-xs md:text-sm font-bold mb-5">
              WHY CHOOSE A PEDIATRIC FELLOWSHIP?
            </div>
            <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-primary mb-4">
              Go Beyond General Pediatric Practice
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Focused fellowship training can help you develop deeper knowledge in the pediatric area you
              want to pursue.
            </p>
          </div>
          <p className="text-center font-semibold text-primary mb-6">What You Can Expect</p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              'Specialty-focused curriculum',
              'Clinical case-based learning',
              'Expert faculty guidance',
              'Practical medical knowledge',
              'Flexible learning options',
              'Academic support',
              'Fellowship certification',
              'Career-focused learning',
            ].map((item) => (
              <div key={item} className="bg-white rounded-lg p-4 shadow-sm flex items-center gap-3 hover:shadow-md transition-shadow">
                <div className="w-7 h-7 bg-[#15401E] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                  ✓
                </div>
                <p className="text-text-primary font-medium text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Which Fellowship Is Right For You */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-custom max-w-3xl px-4">
          <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-center text-primary mb-3">
            Which Pediatric Fellowship Is Right For You?
          </h2>
          <p className="text-center text-text-secondary mb-10 text-base md:text-lg">Choose Based on Your Career Interest</p>
          <div className="space-y-3">
            {INTEREST_MAP.map((row) => (
              <button
                key={row.program}
                onClick={() => scrollToForm(row.program)}
                className="w-full text-left bg-gradient-to-br from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 rounded-xl p-5 flex items-center justify-between gap-4 border border-primary/10 transition-colors group"
              >
                <p className="font-medium text-text-primary">{row.interest}</p>
                <span className="flex items-center gap-2 text-primary font-bold shrink-0 group-hover:translate-x-1 transition-transform">
                  → {row.program}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-12 bg-[#15401E] rounded-2xl p-8 text-center">
            <p className="text-white text-lg md:text-xl font-bold mb-2">Not Sure Which Program Fits Your Career?</p>
            <p className="text-white/85 mb-6">
              Talk to our Academic Counselor and get guidance based on your qualification and career goals.
            </p>
            <button
              onClick={() => scrollToForm()}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-primary rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              Talk to an Academic Counselor
            </button>
          </div>
        </div>
      </section>

      {/* Who Can Apply */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container-custom max-w-5xl px-4">
          <div className="text-center mb-10">
            <div className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-5 py-1.5 rounded-full text-xs md:text-sm font-bold mb-5">
              DESIGNED FOR MEDICAL PROFESSIONALS
            </div>
            <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-primary mb-4">
              Who Can Apply?
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              The programs are designed for eligible doctors and medical professionals seeking advanced
              knowledge in pediatric subspecialty areas.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {APPLICANTS.map((a) => (
              <div key={a.title} className="text-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{a.icon}</div>
                <p className="font-semibold text-primary text-sm mb-2">{a.title}</p>
                <p className="text-xs text-text-secondary leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="font-semibold text-primary mb-4">Check Your Eligibility</p>
            <button
              onClick={() => scrollToForm()}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#15401E] text-white rounded-full font-bold hover:bg-[#0f2e15] transition-colors shadow-lg"
            >
              Check Eligibility & Details
            </button>
          </div>
        </div>
      </section>

      {/* Learn From Experienced Medical Faculty */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-custom max-w-3xl px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-primary mb-3">
            Learn From Experienced Medical Faculty
          </h2>
          <p className="text-lg font-semibold text-secondary mb-8">
            Focused Learning. Relevant Cases. Expert Guidance.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            Our fellowship programs are designed around specialty-focused learning to help doctors
            understand important concepts, clinical cases, and current approaches within their selected
            pediatric subspecialty.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Build Knowledge That Supports Your Clinical Practice — learn according to your chosen specialty
            and develop a stronger understanding of relevant pediatric conditions and clinical management
            concepts.
          </p>
        </div>
      </section>

      {/* Journey CTA Banner */}
      <section className="py-16 md:py-20 bg-[#15401E] text-white">
        <div className="container-custom max-w-3xl text-center px-4">
          <h2 className="text-2xl md:text-4xl font-heading font-bold mb-3 text-white">
            Your Pediatric Specialization Journey Starts Here
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Choose Your Specialty. Build Your Expertise. Advance Your Career.
          </p>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Explore our Pediatric Fellowship Programs and find the specialization that matches your
            professional goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToForm()}
              className="px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent/90 transition-all shadow-2xl hover:scale-105"
            >
              Apply Now
            </button>
            <button
              onClick={() => scrollToForm()}
              className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-all shadow-2xl hover:scale-105"
            >
              Get Program Details
            </button>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section id="program-form" className="py-14 md:py-20 bg-[#fafafa] relative overflow-hidden scroll-mt-20">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>

        <div className="container-custom max-w-2xl relative z-10 px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-primary mb-2">
              Get Complete Program Information
            </h2>
            <p className="text-base md:text-lg text-text-secondary">Interested in a Pediatric Fellowship?</p>
          </div>

          <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-primary via-secondary to-accent px-5 py-5 md:px-8 md:py-6 text-white">
              <p className="font-bold mb-3">Fill out the form and our Academic Counselor will help you with:</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
                {['Eligibility', 'Course curriculum', 'Program duration', 'Learning format', 'Certification', 'Fees', 'Admission process'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 md:p-8">
              <p className="font-bold text-primary mb-4">Request Program Details</p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none hover:border-gray-300 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Enter Mobile Number"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none hover:border-gray-300 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none hover:border-gray-300 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Medical Qualification</label>
                  <select
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none hover:border-gray-300 bg-white text-sm"
                  >
                    <option value="">Select Qualification</option>
                    <option value="MBBS">MBBS</option>
                    <option value="MD/DNB Pediatrics">MD/DNB Pediatrics</option>
                    <option value="Practicing Pediatrician">Practicing Pediatrician</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-2">Choose Your Fellowship</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Pediatric Endocrinology', 'Pediatric Echocardiography', 'Pediatric Neurology', 'Pediatric Critical Care', 'Neonatology'].map((f) => (
                      <button
                        key={f}
                        type="button"
                        onClick={() => setFormData({ ...formData, fellowship: f })}
                        className={`px-3 py-2.5 rounded-xl text-xs font-semibold border-2 transition-colors ${
                          formData.fellowship === f
                            ? 'bg-[#15401E] border-[#15401E] text-white'
                            : 'bg-white border-gray-200 text-gray-700 hover:border-primary/40'
                        }`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="group w-full bg-gradient-to-r from-accent via-primary to-secondary text-white font-extrabold py-4 rounded-2xl hover:shadow-2xl transition-all shadow-xl text-sm md:text-base disabled:opacity-50 relative overflow-hidden transform hover:scale-[1.02] mt-2"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {submitting ? (
                      <>Submitting...</>
                    ) : submitted ? (
                      <>Submitted! Our Academic Counselor will contact you shortly.</>
                    ) : (
                      <>Get Fellowship Details</>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
                <p className="text-center text-xs text-gray-500">
                  Our Academic Counselor will contact you shortly.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Band */}
      <section className="py-14 bg-[#0f2e15] text-white text-center">
        <div className="container-custom max-w-2xl px-4">
          <p className="text-lg md:text-xl font-heading font-bold mb-2">MedFellow Academy</p>
          <p className="text-white/80 mb-6">Empowering Doctors Through Advanced Medical Education</p>
          <p className="text-white/90 mb-1">📞 Call / WhatsApp: +91 99850 44993</p>
          <p className="text-white/90 mb-6">🌐 medfellowacademy.com</p>
          <p className="text-accent font-semibold text-sm tracking-wide">
            Admissions Open | Explore Your Pediatric Fellowship
          </p>
        </div>
      </section>
    </div>
  );
}

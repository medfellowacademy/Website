'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

const PROGRAMS = [
  "Fellowship in Emergency Medicine",
  "Fellowship in Critical Care Medicine",
  "Fellowship in Internal Medicine",
  "Fellowship in Family Medicine",
  "Fellowship in Clinical Cardiology",
  "Fellowship in Interventional Cardiology",
  "Fellowship in 2D Echocardiography",
  "Fellowship in Cardiothoracic Surgery",
  "Fellowship in Pediatric Echocardiography",
  "Fellowship in Gynecology & Obstetrics",
  "Fellowship in High-Risk Pregnancy",
  "Fellowship in Fetal Medicine",
  "Fellowship in Laparoscopy & Hysteroscopy",
  "Fellowship in Cosmetic Gynecology",
  "Fellowship in Reproductive Medicine",
  "Fellowship in Diabetes Mellitus",
  "Fellowship in Endocrinology",
  "Fellowship in Gastroenterology",
  "Fellowship in Nephrology",
  "Fellowship in Urology",
  "Fellowship in Dermatology",
  "Fellowship in Trichology",
  "Fellowship in Cosmetic & Aesthetic Medicine",
  "Fellowship in Rheumatology",
  "Fellowship in Pain Management",
  "Fellowship in Psychiatry",
  "Fellowship in Pediatrics",
  "Fellowship in Neonatology",
  "Fellowship in Pediatric Neurology",
  "Fellowship in Pediatric Endocrinology",
  "Fellowship in Neurosurgery",
  "Fellowship in Clinical Neurology",
  "Fellowship in Medical Oncology",
  "Fellowship in Clinical Hematology",
  "Fellowship in Head & Neck Oncology",
  "Fellowship in Spine Surgery",
  "Fellowship in General Surgery",
  "Fellowship in Minimal Access & Robotic Surgery",
  "Fellowship in Orthopedics",
  "Fellowship in Arthroscopy & Arthroplasty",
  "Fellowship in Cardiothoracic Surgery",
  "Fellowship in Radiology",
  "Fellowship in Interventional Radiology",
  "Fellowship in Maxillofacial & Oral Surgery",
  "Fellowship in Oral Implantology & Laser Dentistry",
];

export default function EnrollPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', course: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function update(field: string, value: string) {
    setForm(f => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.course) {
      setError('Please fill in all fields.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: form.name,
          email: form.email,
          phone: form.phone,
          program_interest: form.course,
        }),
      });
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again or WhatsApp us.');
    } finally {
      setLoading(false);
    }
  }

  const inputCls = "w-full px-4 py-3 border border-[#D1D5DB] rounded-lg text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#15401E]/20 focus:border-[#15401E] bg-white transition-all";

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <Navbar />

      <section className="section-padding">
        <div className="container-custom max-w-lg">

          {submitted ? (
            /* ── Success State ── */
            <div className="bg-white rounded-2xl border border-[#E5E7EB] p-10 text-center shadow-sm">
              <div className="w-16 h-16 bg-[#e8f2ea] rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-8 h-8 text-[#15401E]" />
              </div>
              <h2 className="text-2xl font-bold text-[#111827] mb-2">Enrollment Received!</h2>
              <p className="text-[#6B7280] mb-6">
                Thank you, <strong>{form.name}</strong>. Our team will contact you within 24 hours regarding the <strong>{form.course}</strong>.
              </p>
              <a
                href={`https://wa.me/919985044993?text=Hi, I just enrolled for ${encodeURIComponent(form.course)}. My name is ${encodeURIComponent(form.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-lg text-sm font-semibold hover:bg-[#1ebe5d] transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          ) : (
            /* ── Form ── */
            <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm overflow-hidden">
              {/* Header */}
              <div className="bg-[#15401E] px-8 py-8 text-white text-center">
                <h1 className="text-2xl font-bold mb-1">Enroll Now</h1>
                <p className="text-white/70 text-sm">Fill in your details and we'll get back to you within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="px-8 py-8 space-y-5">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
                    {error}
                  </div>
                )}

                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => update('name', e.target.value)}
                    className={inputCls}
                    placeholder="Dr. Your Name"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => update('email', e.target.value)}
                    className={inputCls}
                    placeholder="you@example.com"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-1.5">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => update('phone', e.target.value)}
                    className={inputCls}
                    placeholder="+91 99850 44993"
                    required
                  />
                </div>

                {/* Course */}
                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-1.5">Course Interested In *</label>
                  <select
                    value={form.course}
                    onChange={e => update('course', e.target.value)}
                    className={inputCls}
                    required
                  >
                    <option value="">— Select a fellowship program —</option>
                    {PROGRAMS.map(p => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#15401E] hover:bg-[#0f2e15] text-white rounded-lg font-semibold text-sm disabled:opacity-60 transition-colors"
                >
                  {loading ? 'Submitting…' : (
                    <>Submit Enrollment <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>

                <p className="text-center text-xs text-[#9CA3AF]">
                  By submitting, you agree to be contacted by our admissions team.
                </p>
              </form>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const PROGRAMS = [
  { value: 'arthroscopy', label: 'Arthroscopy & Arthroplasty', icon: '🦴' },
  { value: 'gastro', label: 'Gastroenterology', icon: '🫀' },
  { value: 'reproductive', label: 'Reproductive Medicine', icon: '🧬' },
  { value: 'pain', label: 'Pain Management', icon: '💊' },
  { value: 'diabeto', label: 'Diabetology', icon: '🩺' },
  { value: 'endo', label: 'Endocrinology', icon: '⚗️' },
  { value: 'rheum', label: 'Rheumatology', icon: '🔬' },
  { value: 'neuro', label: 'Neurology', icon: '🧠' },
  { value: 'radio', label: 'Radiology', icon: '🩻' },
  { value: 'usg', label: 'Ultrasonography', icon: '📡' },
  { value: 'cardio', label: 'Interventional Cardiology', icon: '❤️' },
  { value: 'ortho', label: 'Orthopedics', icon: '🦷' },
  { value: 'gyn', label: 'Gynecology & Obstetrics', icon: '👶' },
  { value: 'surgery', label: 'General Surgery', icon: '🏥' },
  { value: 'spine', label: 'Spine Surgery', icon: '🔩' },
  { value: 'emergency', label: 'Emergency Medicine', icon: '🚑' },
  { value: 'critical', label: 'Critical Care Medicine', icon: '💉' },
];

const STEPS = [
  { id: 1, title: 'Personal Info', desc: 'Your basic details' },
  { id: 2, title: 'Academic & Program', desc: 'Qualifications & choice' },
  { id: 3, title: 'Documents & Goals', desc: 'Upload & statement' },
];

export default function ApplyPage() {
  const [step, setStep] = useState(1);
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
  const [documentFiles, setDocumentFiles] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const update = (field: string, value: string) => setFormData(prev => ({ ...prev, [field]: value }));

  const canAdvanceStep1 = formData.fullName && formData.email && formData.phone;
  const canAdvanceStep2 = formData.qualification && formData.yearOfPassing && formData.experience && formData.program;
  const canSubmit = canAdvanceStep1 && canAdvanceStep2 && formData.statement;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const nameParts = formData.fullName.trim().split(' ');
      const first_name = nameParts[0] || '';
      const last_name = nameParts.slice(1).join(' ') || '';

      const fd = new FormData();
      fd.append('first_name', first_name);
      fd.append('last_name', last_name);
      fd.append('email', formData.email);
      fd.append('phone', formData.phone);
      fd.append('program', formData.program);
      fd.append('qualification', formData.qualification);
      fd.append('experience', formData.experience);
      fd.append('message', formData.statement);
      documentFiles.forEach((file) => fd.append('documents', file));

      const res = await fetch('/api/applications', { method: 'POST', body: fd });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'Submission failed');
      setSubmitted(true);
      setDocumentFiles([]);
      setFormData({ fullName: '', email: '', phone: '', qualification: '', yearOfPassing: '', program: '', experience: '', currentInstitution: '', statement: '' });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-primary via-primary-dark to-secondary px-4 py-20">
          <div className="text-center text-white max-w-lg">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-5xl mx-auto mb-8 animate-bounce">🎉</div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Application Submitted!</h2>
            <p className="text-white/80 text-lg mb-8">Our admissions team will contact you within 48 hours to discuss next steps.</p>
            <a href="/" className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-accent hover:text-white transition-colors">
              Back to Home
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-secondary py-14 md:py-20">
        {/* Decorative blobs */}
        <div className="absolute top-[-60px] right-[-60px] w-80 h-80 bg-secondary/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-[-40px] left-[-40px] w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{backgroundImage:'repeating-linear-gradient(0deg,transparent,transparent 39px,white 39px,white 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,white 39px,white 40px)'}} />

        <div className="container-custom relative z-10 text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 rounded-full text-sm font-medium mb-5 backdrop-blur-sm border border-white/20">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Applications Open · Next Batch: March 2026
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4 leading-tight">
            Begin Your <span className="text-accent">Fellowship</span> Journey
          </h1>
          <p className="text-white/75 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Join 500+ doctors who have transformed their careers through our fellowship programs.
          </p>
          {/* Stat chips */}
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {[['🏥','17 Specialties'],['👨‍⚕️','500+ Alumni'],['📅','Deadline: Apr 30, 2026']].map(([icon, label]) => (
              <span key={label as string} className="flex items-center gap-2 px-4 py-2 bg-white/15 border border-white/20 rounded-full backdrop-blur-sm">
                <span>{icon}</span><span className="font-medium">{label}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-10 md:py-16">
        <div className="container-custom max-w-6xl">
          <div className="grid lg:grid-cols-[300px_1fr] gap-8 items-start">

            {/* ── Left: Sticky sidebar ── */}
            <div className="lg:sticky lg:top-24">
              {/* Step tracker */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
                <p className="text-xs uppercase tracking-widest text-text-tertiary font-semibold mb-5">Your Progress</p>
                <div className="space-y-1">
                  {STEPS.map((s, i) => {
                    const done = step > s.id;
                    const active = step === s.id;
                    return (
                      <div key={s.id} className="relative">
                        <div className={`flex items-center gap-4 p-3 rounded-xl transition-all ${active ? 'bg-primary/8' : ''}`}>
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-all
                            ${done ? 'bg-secondary text-white' : active ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-gray-100 text-gray-400'}`}>
                            {done ? '✓' : s.id}
                          </div>
                          <div>
                            <p className={`text-sm font-semibold leading-none mb-1 ${active ? 'text-primary' : done ? 'text-secondary' : 'text-gray-400'}`}>{s.title}</p>
                            <p className="text-xs text-text-tertiary">{s.desc}</p>
                          </div>
                        </div>
                        {i < STEPS.length - 1 && (
                          <div className={`ml-8 w-0.5 h-4 my-0.5 rounded-full transition-colors ${step > s.id ? 'bg-secondary' : 'bg-gray-200'}`} />
                        )}
                      </div>
                    );
                  })}
                </div>
                {/* Progress bar */}
                <div className="mt-6">
                  <div className="flex justify-between text-xs text-text-tertiary mb-2">
                    <span>Completion</span>
                    <span>{Math.round(((step - 1) / 3) * 100)}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"
                      style={{ width: `${((step - 1) / 3) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Why apply card */}
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-white">
                <p className="font-heading font-bold text-base mb-4">Why MedFellow?</p>
                <ul className="space-y-3 text-sm text-white/85">
                  {['Industry-recognized certifications','Expert faculty & mentors','Hands-on clinical training','Career placement support'].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">✦</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── Right: Form panel ── */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Step header */}
              <div className="px-6 md:px-10 pt-8 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white font-bold text-sm">
                    {step}
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-heading font-bold text-primary">{STEPS[step - 1].title}</h2>
                    <p className="text-sm text-text-secondary">{STEPS[step - 1].desc}</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="px-6 md:px-10 py-8">

                  {/* ─── Step 1: Personal Info ─── */}
                  {step === 1 && (
                    <div className="space-y-5 animate-fade-in-up">
                      <div className="grid md:grid-cols-2 gap-5">
                        <FloatLabel label="Full Name *">
                          <input type="text" required placeholder="Dr. Jane Smith"
                            className="field-input"
                            value={formData.fullName} onChange={e => update('fullName', e.target.value)} />
                        </FloatLabel>
                        <FloatLabel label="Email Address *">
                          <input type="email" required placeholder="you@example.com"
                            className="field-input"
                            value={formData.email} onChange={e => update('email', e.target.value)} />
                        </FloatLabel>
                        <FloatLabel label="Phone Number *">
                          <input type="tel" required placeholder="+91 99850 44993"
                            className="field-input"
                            value={formData.phone} onChange={e => update('phone', e.target.value)} />
                        </FloatLabel>
                        <FloatLabel label="Current Institution / Hospital">
                          <input type="text" placeholder="e.g., Apollo Hospitals"
                            className="field-input"
                            value={formData.currentInstitution} onChange={e => update('currentInstitution', e.target.value)} />
                        </FloatLabel>
                      </div>
                    </div>
                  )}

                  {/* ─── Step 2: Academic & Program ─── */}
                  {step === 2 && (
                    <div className="space-y-8 animate-fade-in-up">
                      <div className="grid md:grid-cols-3 gap-5">
                        <FloatLabel label="Highest Qualification *">
                          <select required className="field-input"
                            value={formData.qualification} onChange={e => update('qualification', e.target.value)}>
                            <option value="">Select</option>
                            {['MBBS','MD','MS','DNB','DM','Other'].map(q => <option key={q} value={q}>{q}</option>)}
                          </select>
                        </FloatLabel>
                        <FloatLabel label="Year of Passing *">
                          <input type="number" required min="1980" max="2026" placeholder="2020"
                            className="field-input"
                            value={formData.yearOfPassing} onChange={e => update('yearOfPassing', e.target.value)} />
                        </FloatLabel>
                        <FloatLabel label="Years of Experience *">
                          <input type="text" required placeholder="e.g., 3 years"
                            className="field-input"
                            value={formData.experience} onChange={e => update('experience', e.target.value)} />
                        </FloatLabel>
                      </div>

                      {/* Visual program picker */}
                      <div>
                        <p className="text-sm font-semibold text-primary mb-3">Select Fellowship Program *</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-72 overflow-y-auto pr-1 custom-scroll">
                          {PROGRAMS.map(p => (
                            <button
                              type="button"
                              key={p.value}
                              onClick={() => update('program', p.value)}
                              className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-left text-sm transition-all
                                ${formData.program === p.value
                                  ? 'border-secondary bg-secondary/10 text-secondary font-semibold shadow-sm'
                                  : 'border-gray-200 text-text-secondary hover:border-primary/30 hover:bg-primary/5'
                                }`}
                            >
                              <span className="text-lg shrink-0">{p.icon}</span>
                              <span className="leading-tight text-xs">{p.label}</span>
                            </button>
                          ))}
                        </div>
                        {formData.program && (
                          <p className="mt-2 text-xs text-secondary font-medium">
                            ✓ Selected: {PROGRAMS.find(p => p.value === formData.program)?.label}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* ─── Step 3: Documents & Statement ─── */}
                  {step === 3 && (
                    <div className="space-y-7 animate-fade-in-up">
                      {/* Document drag zone */}
                      <div>
                        <p className="text-sm font-semibold text-primary mb-2">Upload Documents</p>
                        <p className="text-xs text-text-secondary mb-4">Degree certificate, medical registration, ID proof, or experience letter — PDF, JPG, PNG, DOC (max 5MB each)</p>
                        <div className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all
                          ${documentFiles.length > 0 ? 'border-secondary bg-secondary/5' : 'border-gray-200 hover:border-primary/40 hover:bg-gray-50'}`}>
                          <input type="file" id="documents" multiple accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                            onChange={e => setDocumentFiles(prev => [...prev, ...Array.from(e.target.files || [])])} />
                          <div className="text-4xl mb-2">📂</div>
                          <p className="text-primary font-semibold text-sm">Drag & drop or click to upload</p>
                          <p className="text-xs text-text-tertiary mt-1">PDF · JPG · PNG · DOC up to 5MB each</p>
                        </div>
                        {documentFiles.length > 0 && (
                          <div className="mt-3 space-y-2">
                            {documentFiles.map((file, i) => (
                              <div key={i} className="flex items-center justify-between px-4 py-2 bg-secondary/8 border border-secondary/20 rounded-xl text-sm">
                                <div className="flex items-center gap-2 text-secondary font-medium min-w-0">
                                  <span>📄</span>
                                  <span className="truncate">{file.name}</span>
                                </div>
                                <button type="button"
                                  onClick={() => setDocumentFiles(f => f.filter((_, j) => j !== i))}
                                  className="shrink-0 ml-3 w-5 h-5 flex items-center justify-center rounded-full bg-red-100 text-red-400 hover:bg-red-200 text-xs font-bold">
                                  ×
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Statement */}
                      <div>
                        <label className="text-sm font-semibold text-primary block mb-2">Statement of Purpose *</label>
                        <textarea required rows={6}
                          placeholder="Tell us why you want to pursue this fellowship and what career goals you aim to achieve..."
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none resize-none text-sm leading-relaxed transition-all"
                          value={formData.statement} onChange={e => update('statement', e.target.value)} />
                        <p className="text-xs text-text-tertiary mt-1 text-right">{formData.statement.length} characters</p>
                      </div>

                      {/* Terms note */}
                      <div className="flex gap-3 p-4 bg-accent/10 border border-accent/20 rounded-xl">
                        <span className="text-accent text-lg shrink-0">ℹ️</span>
                        <p className="text-xs text-text-secondary leading-relaxed">
                          After submitting, our admissions team will contact you within <strong className="text-primary">48 hours</strong> to discuss the next steps.
                        </p>
                      </div>

                      {error && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm text-center">
                          ❌ {error}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* ── Navigation footer ── */}
                <div className="px-6 md:px-10 py-6 bg-gray-50 border-t border-gray-100 flex items-center justify-between gap-4">
                  {step > 1 ? (
                    <button type="button" onClick={() => setStep(s => s - 1)}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 text-text-secondary hover:border-primary hover:text-primary text-sm font-semibold transition-all">
                      ← Back
                    </button>
                  ) : <div />}

                  {step < 3 ? (
                    <button type="button"
                      disabled={step === 1 ? !canAdvanceStep1 : !canAdvanceStep2}
                      onClick={() => setStep(s => s + 1)}
                      className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none">
                      Continue →
                    </button>
                  ) : (
                    <button type="submit" disabled={submitting || !canSubmit}
                      className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-secondary to-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-secondary/25 hover:shadow-secondary/40 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none">
                      {submitting ? (
                        <><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />Submitting...</>
                      ) : '🚀 Submit Application'}
                    </button>
                  )}
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FloatLabel({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-text-secondary uppercase tracking-wide">{label}</label>
      {children}
    </div>
  );
}

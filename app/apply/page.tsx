'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const PROGRAMS = [
  // ORTHOPEDICS (4)
  { value: 'rheumatology', label: 'Fellowship in Rheumatology' },
  { value: 'pain-management', label: 'Fellowship in Pain Management' },
  { value: 'orthopedics', label: 'Fellowship in Orthopedics' },
  { value: 'arthroscopy-arthroplasty', label: 'Fellowship in Arthroscopy & Arthroplasty' },
  
  // SURGERY (6)
  { value: 'pediatric-surgery-surg', label: 'Fellowship in Pediatric Surgery' },
  { value: 'spine-surgery', label: 'Fellowship in Spine Surgery' },
  { value: 'robotic-surgery', label: 'Fellowship in Robotic Surgery' },
  { value: 'minimal-access-surgery', label: 'Fellowship in Minimal Access Surgery' },
  { value: 'minimal-access-robotic-surgery', label: 'Fellowship in Minimal Access & Robotic Surgery' },
  { value: 'gi-endoscopy', label: 'Fellowship in GI Endoscopy' },
  { value: 'laparoscopy-hysteroscopy-surg', label: 'Fellowship in Laparoscopy & Hysteroscopy' },
  
  // DENTAL (2)
  { value: 'oral-implantology-laser', label: 'Fellowship in Oral Implantology and Laser Dentistry' },
  { value: 'maxillofacial-oral-surgery', label: 'Fellowship in Maxillofacial and Oral Surgery' },
  
  // UROLOGY (2)
  { value: 'urology', label: 'Fellowship in Urology' },
  { value: 'nephrology', label: 'Fellowship in Nephrology' },
  
  // MEDICINE (4)
  { value: 'psychiatric-medicine-med', label: 'Fellowship in Psychiatric Medicine' },
  { value: 'family-medicine', label: 'Fellowship in Family Medicine' },
  { value: 'emergency-medicine', label: 'Fellowship in Emergency Medicine' },
  { value: 'internal-medicine', label: 'Fellowship in Internal Medicine' },
  { value: 'Interventional Pain Management', label: 'Fellowship in Interventional Pain Management & Regional Anesthesiology'},
  
  // DERMATOLOGY (3)
  { value: 'trichology', label: 'Fellowship in Trichology' },
  { value: 'dermatology', label: 'Fellowship in Dermatology' },
  { value: 'cosmetology-aesthetic', label: 'Fellowship in Cosmetology and Aesthetic Medicine' },
  
  // OBSTETRICS & GYNECOLOGY (6)
  { value: 'high-risk-pregnancy', label: 'Fellowship in High Risk Pregnancy' },
  { value: 'fetal-medicine', label: 'Fellowship in Fetal Medicine' },
  { value: 'laparoscopy-hysteroscopy-gyn', label: 'Fellowship in Laparoscopy and Hysteroscopy' },
  { value: 'cosmetic-gynecology', label: 'Fellowship in Cosmetic Gynecology' },
  { value: 'obstetrics-gynecology', label: 'Fellowship in Obstetrics and Gynecology' },
  { value: 'gynecologic-oncology', label: 'Fellowship in Gynecologic Oncology' },
  
  // CARDIOLOGY (5)
  { value: 'echocardiography-cardio', label: 'Fellowship in Echocardiography' },
  { value: 'interventional-cardiology', label: 'Fellowship in Interventional Cardiology' },
  { value: 'clinical-cardiology', label: 'Fellowship in Clinical Cardiology' },
  { value: 'cardiothoracic-surgery', label: 'Fellowship in Cardiothoracic Surgery' },
  { value: 'cardio-oncology-cardio', label: 'Fellowship in Cardio Oncology' },
  
  // PEDIATRIC (6)
  { value: 'neonatology', label: 'Fellowship in Neonatology' },
  { value: 'pediatrics', label: 'Fellowship in Pediatrics' },
  { value: 'pediatric-neurology-ped', label: 'Fellowship in Pediatric Neurology' },
  { value: 'pediatric-surgery-ped', label: 'Fellowship in Pediatric Surgery' },
  { value: 'pediatric-endocrinology', label: 'Fellowship in Pediatric Endocrinology' },
  { value: 'pediatric-echocardiography', label: 'Fellowship in Pediatric Echocardiography' },
  
  // NEUROLOGY (3)
  { value: 'pediatric-neurology-neuro', label: 'Fellowship in Pediatric Neurology' },
  { value: 'psychiatric-medicine-neuro', label: 'Fellowship in Psychiatric Medicine' },
  { value: 'neurology', label: 'Fellowship in Neurology' },
  
  // ONCOLOGY (4)
  { value: 'head-neck-oncology', label: 'Fellowship in Head and Neck Oncology' },
  { value: 'medical-oncology', label: 'Fellowship in Medical Oncology' },
  { value: 'clinical-hematology', label: 'Fellowship in Clinical Hematology' },
  { value: 'cardio-oncology-onco', label: 'Fellowship in Cardio Oncology' },
  
  // RADIOLOGY (2)
  { value: 'radiology', label: 'Fellowship in Radiology' },
  { value: 'interventional-radiology', label: 'Fellowship in Interventional Radiology' },
];

const PRACTICE_TYPES = [
  { value: 'gp', label: 'General Practitioner' },
  { value: 'consultant', label: 'Consultant' },
  { value: 'surgeon', label: 'Surgeon' },
  { value: 'hospital_employed', label: 'Hospital-employed' },
  { value: 'clinic_owner', label: 'Clinic Owner' },
];

const STEPS = [
  { id: 1, title: 'Personal Details', desc: 'Your basic information' },
  { id: 2, title: 'Professional Details', desc: 'Qualifications & practice' },
  { id: 3, title: 'Course Selection', desc: 'Program & preferences' },
  { id: 4, title: 'Documents & Declaration', desc: 'Upload & confirm' },
];

const DECLARATIONS = [
  'I confirm that I am a qualified medical professional with a valid registration to practice.',
  'I declare that all information provided by me is true and accurate to the best of my knowledge.',
  'I understand that submission of false information may lead to cancellation of my application without refund.',
  'I agree to comply with all academic requirements, assessments, and program guidelines of MedFellow Academy.',
  'I understand that this fellowship is an educational program and does not grant a new medical license or specialist recognition under statutory bodies.',
  'I agree to maintain professional ethics during training, especially during hospital-based practical sessions.',
];

const TERMS_SECTIONS = [
  {
    title: 'A. Eligibility',
    items: [
      'Applicant must hold a valid MBBS degree (for speciality programs).',
      'Super-speciality programs require a relevant postgraduate qualification or equivalent experience.',
      'MedFellow reserves the right to accept/reject applications.',
    ],
  },
  {
    title: 'B. Certification Clause',
    items: [
      'Fellowship certification is awarded upon: completion of academic modules, attendance compliance, and assessment clearance.',
    ],
  },
  {
    title: 'C. Training Clause',
    items: [
      'Hands-on training is subject to hospital availability, case load, and specialty-specific conditions.',
      'MedFellow acts as a facilitator between the doctor and the hospital.',
    ],
  },
  {
    title: 'D. Payment & Refund Policy',
    items: [
      'Within 7 days of enrollment - Partial refund applicable.',
      'After course access is granted - No refund.',
      'GST and transaction charges are non-refundable.',
    ],
  },
  {
    title: 'E. Usage & Conduct',
    items: [
      'Candidate must not misuse certification or claim a specialist title unlawfully.',
      'Must follow ethical medical practice norms at all times.',
    ],
  },
  {
    title: 'F. Data Privacy',
    items: [
      'Applicant data will be stored securely and used for academic and communication purposes only.',
      'MedFellow may use anonymised data for analytics and send course-related communication.',
    ],
  },
];

const DOC_SLOTS = [
  { key: 'degree',       label: 'MBBS / PG Degree Certificate',     accept: '.pdf,.jpg,.jpeg,.png', hint: 'PDF or Image' },
  { key: 'registration', label: 'Medical Registration Certificate',  accept: '.pdf,.jpg,.jpeg,.png', hint: 'PDF or Image' },
  { key: 'govtId',       label: 'Govt ID Proof (Aadhar / Passport)', accept: '.pdf,.jpg,.jpeg,.png', hint: 'PDF or Image' },
  { key: 'photo',        label: 'Recent Photograph',                 accept: '.jpg,.jpeg,.png',      hint: 'JPG or PNG' },
];

export default function ApplyPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '', dob: '', gender: '', phone: '', email: '',
    qualification: '', regNumber: '', stateCouncil: '', yearOfReg: '',
    practiceType: '', experience: '', hospitalName: '', clinicName: '', city: '',
    program: '', modePreference: '', reason: '',
  });
  const [documents, setDocuments] = useState<Record<string, File | null>>({
    degree: null, registration: null, govtId: null, photo: null,
  });
  const [declarations, setDeclarations] = useState<boolean[]>(new Array(DECLARATIONS.length).fill(false));
  const [termsOpen, setTermsOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const u = (field: string, value: string) => setFormData(prev => ({ ...prev, [field]: value }));

  const canStep1 = !!(formData.fullName && formData.dob && formData.gender && formData.phone && formData.email);
  const canStep2 = !!(formData.qualification && formData.regNumber && formData.stateCouncil && formData.yearOfReg && formData.practiceType && formData.experience);
  const canStep3 = !!(formData.program && formData.modePreference && formData.reason);
  const allDeclared = declarations.every(Boolean);
  const canAdvance = step === 1 ? canStep1 : step === 2 ? canStep2 : step === 3 ? canStep3 : false;
  const canSubmit = canStep1 && canStep2 && canStep3 && allDeclared;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
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
      fd.append('message', JSON.stringify({
        dob: formData.dob, gender: formData.gender,
        regNumber: formData.regNumber, stateCouncil: formData.stateCouncil,
        yearOfReg: formData.yearOfReg, practiceType: formData.practiceType,
        hospitalName: formData.hospitalName, clinicName: formData.clinicName,
        city: formData.city, modePreference: formData.modePreference,
        reason: formData.reason,
      }));
      Object.entries(documents).forEach(([key, file]) => {
        if (file) fd.append(`doc_${key}`, file);
      });
      const res = await fetch('/api/applications', { method: 'POST', body: fd });
      
      // Check if response is JSON before parsing
      const contentType = res.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error(`Server error: ${res.status} ${res.statusText}`);
      }
      
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'Submission failed');
      setSubmitted(true);
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
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Application Submitted!</h2>
            <p className="text-white/80 text-lg mb-8">Our admissions team will contact you within 48 hours to discuss next steps.</p>
            <a href="/" className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-accent hover:text-white transition-colors">Back to Home</a>
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
      <section className="relative overflow-hidden bg-white border-b border-gray-100 py-16 md:py-24">
        {/* Decorative blobs */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Applications Open — Next Batch: April 2026
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 leading-tight mb-5">
              Begin Your{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">Fellowship</span>
                <span className="absolute left-0 bottom-1 w-full h-3 bg-accent/25 rounded-sm -z-10" />
              </span>{' '}
              Journey
            </h1>

            {/* Sub-copy */}
            <p className="text-gray-500 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
              Take the next step in your medical career with our nationally recognised fellowship programs.
            </p>

            {/* Pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                { icon: '🩺', label: '17 Specialties' },
                { icon: '📅', label: 'Deadline: Apr 30, 2026' },
                { icon: '✅', label: 'Nationally Recognised' },
              ].map(({ icon, label }) => (
                <span key={label} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700">
                  <span>{icon}</span>{label}
                </span>
              ))}
            </div>

            {/* CTA row */}
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="#application-form"
                className="inline-block px-7 py-3.5 bg-primary text-white font-bold rounded-full shadow-lg shadow-primary/25 hover:bg-primary-dark transition-colors text-sm"
              >
                Apply Now
              </a>
              <a href="/programs" className="text-sm font-semibold text-primary hover:text-primary-dark underline underline-offset-4 transition-colors">
                Explore Programs →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-10 md:py-16">
        <div className="container-custom max-w-6xl">
          <div className="grid lg:grid-cols-[300px_1fr] gap-8 items-start">

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Step tracker */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <p className="text-xs uppercase tracking-widest text-text-tertiary font-semibold mb-5">Your Progress</p>
                <div className="space-y-1">
                  {STEPS.map((s, i) => {
                    const done = step > s.id;
                    const active = step === s.id;
                    return (
                      <div key={s.id}>
                        <div className={`flex items-center gap-4 p-3 rounded-xl transition-all ${active ? 'bg-primary/8' : ''}`}>
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-all
                            ${done ? 'bg-secondary text-white' : active ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-gray-100 text-gray-400'}`}>
                            {done ? 'Done' : s.id}
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
                <div className="mt-6">
                  <div className="flex justify-between text-xs text-text-tertiary mb-2">
                    <span>Completion</span>
                    <span>{Math.round(((step - 1) / STEPS.length) * 100)}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"
                      style={{ width: `${((step - 1) / STEPS.length) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Why card */}
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-white">
                <p className="font-heading font-bold text-base mb-4">Why MedFellow?</p>
                <ul className="space-y-3 text-sm text-white/85">
                  {['Industry-recognized certifications', 'Expert faculty & mentors', 'Hands-on clinical training', 'Career placement support'].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-accent mt-0.5 font-bold">+</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form panel */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Step header */}
              <div className="px-6 md:px-10 pt-8 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white font-bold text-sm">{step}</div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-heading font-bold text-primary">{STEPS[step - 1].title}</h2>
                    <p className="text-sm text-text-secondary">{STEPS[step - 1].desc}</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="px-6 md:px-10 py-8">

                  {/* Step 1: Personal Details */}
                  {step === 1 && (
                    <div className="space-y-5 animate-fade-in-up">
                      <div className="grid md:grid-cols-2 gap-5">
                        <FL label="Full Name (as per medical license) *" className="md:col-span-2">
                          <input type="text" required placeholder="Dr. Jane Smith" className="field-input"
                            value={formData.fullName} onChange={e => u('fullName', e.target.value)} />
                        </FL>
                        <FL label="Date of Birth *">
                          <input type="date" required className="field-input"
                            value={formData.dob} onChange={e => u('dob', e.target.value)} />
                        </FL>
                        <FL label="Gender *">
                          <select required className="field-input" value={formData.gender} onChange={e => u('gender', e.target.value)}>
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                            <option value="prefer_not">Prefer not to say</option>
                          </select>
                        </FL>
                        <FL label="Contact Number *">
                          <input type="tel" required placeholder="+91 99850 44993" className="field-input"
                            value={formData.phone} onChange={e => u('phone', e.target.value)} />
                        </FL>
                        <FL label="Email ID *">
                          <input type="email" required placeholder="you@example.com" className="field-input"
                            value={formData.email} onChange={e => u('email', e.target.value)} />
                        </FL>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Professional Details */}
                  {step === 2 && (
                    <div className="space-y-8 animate-fade-in-up">
                      <div className="grid md:grid-cols-2 gap-5">
                        <FL label="Medical Qualification *">
                          <select required className="field-input" value={formData.qualification} onChange={e => u('qualification', e.target.value)}>
                            <option value="">Select qualification</option>
                            {['MBBS', 'MD', 'MS', 'DNB', 'Others'].map(q => <option key={q} value={q}>{q}</option>)}
                          </select>
                        </FL>
                        <FL label="Medical Council Registration Number *">
                          <input type="text" required placeholder="e.g. MCI-123456" className="field-input"
                            value={formData.regNumber} onChange={e => u('regNumber', e.target.value)} />
                        </FL>
                        <FL label="State Medical Council Name *">
                          <input type="text" required placeholder="e.g. Maharashtra Medical Council" className="field-input"
                            value={formData.stateCouncil} onChange={e => u('stateCouncil', e.target.value)} />
                        </FL>
                        <FL label="Year of Registration *">
                          <input type="number" required min="1970" max="2026" placeholder="e.g. 2018" className="field-input"
                            value={formData.yearOfReg} onChange={e => u('yearOfReg', e.target.value)} />
                        </FL>
                        <FL label="Years of Experience *" className="md:col-span-2">
                          <input type="text" required placeholder="e.g. 5 years" className="field-input"
                            value={formData.experience} onChange={e => u('experience', e.target.value)} />
                        </FL>
                      </div>

                      {/* Practice Type */}
                      <div>
                        <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-3">Current Practice Type *</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {PRACTICE_TYPES.map(pt => (
                            <button type="button" key={pt.value} onClick={() => u('practiceType', pt.value)}
                              className={`px-4 py-3 rounded-xl border text-sm font-medium text-left transition-all
                                ${formData.practiceType === pt.value
                                  ? 'border-secondary bg-secondary/10 text-secondary'
                                  : 'border-gray-200 text-text-secondary hover:border-primary/30 hover:bg-primary/5'}`}>
                              {pt.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Workplace */}
                      <div>
                        <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-3">Current Workplace</p>
                        <div className="grid md:grid-cols-3 gap-5">
                          <FL label="Hospital Name">
                            <input type="text" placeholder="e.g. Apollo Hospitals" className="field-input"
                              value={formData.hospitalName} onChange={e => u('hospitalName', e.target.value)} />
                          </FL>
                          <FL label="Clinic Name">
                            <input type="text" placeholder="e.g. City Clinic" className="field-input"
                              value={formData.clinicName} onChange={e => u('clinicName', e.target.value)} />
                          </FL>
                          <FL label="City">
                            <input type="text" placeholder="e.g. Mumbai" className="field-input"
                              value={formData.city} onChange={e => u('city', e.target.value)} />
                          </FL>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Course Selection */}
                  {step === 3 && (
                    <div className="space-y-8 animate-fade-in-up">
                      {/* Program picker */}
                      <div>
                        <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-3">Select Fellowship Program *</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-64 overflow-y-auto pr-1 custom-scroll">
                          {PROGRAMS.map(p => (
                            <button type="button" key={p.value} onClick={() => u('program', p.value)}
                              className={`px-3 py-2.5 rounded-xl border text-left transition-all
                                ${formData.program === p.value
                                  ? 'border-secondary bg-secondary/10 text-secondary font-semibold shadow-sm'
                                  : 'border-gray-200 text-text-secondary hover:border-primary/30 hover:bg-primary/5'}`}>
                              <span className="leading-tight text-xs">{p.label}</span>
                            </button>
                          ))}
                        </div>
                        {formData.program && (
                          <p className="mt-2 text-xs text-secondary font-medium">
                            Selected: {PROGRAMS.find(p => p.value === formData.program)?.label}
                          </p>
                        )}
                      </div>

                      {/* Mode Preference */}
                      <div>
                        <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-3">Mode Preference *</p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {[
                            { value: 'online_handson', label: 'Online + Hands-on Training', desc: 'In-depth clinical exposure with practical sessions' },
                            { value: 'online_only', label: 'Online Only', desc: 'Flexible digital learning from anywhere' },
                          ].map(m => (
                            <button type="button" key={m.value} onClick={() => u('modePreference', m.value)}
                              className={`flex items-start gap-3 p-4 rounded-xl border text-left transition-all
                                ${formData.modePreference === m.value
                                  ? 'border-secondary bg-secondary/10 shadow-sm'
                                  : 'border-gray-200 hover:border-primary/30 hover:bg-primary/5'}`}>
                              <div>
                                <p className={`text-sm font-semibold ${formData.modePreference === m.value ? 'text-secondary' : 'text-primary'}`}>{m.label}</p>
                                <p className="text-xs text-text-tertiary mt-0.5">{m.desc}</p>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Reason */}
                      <FL label="Reason for Joining *">
                        <textarea required rows={5}
                          placeholder="Tell us what motivated you to apply and how this fellowship aligns with your career goals..."
                          className="field-input resize-none"
                          value={formData.reason} onChange={e => u('reason', e.target.value)} />
                      </FL>
                    </div>
                  )}

                  {/* Step 4: Documents + Declaration */}
                  {step === 4 && (
                    <div className="space-y-8 animate-fade-in-up">

                      {/* Document upload slots */}
                      <div>
                        <p className="text-sm font-semibold text-primary mb-1">Document Upload</p>
                        <p className="text-xs text-text-secondary mb-4">Upload clear copies of each document - PDF, JPG, or PNG, max 5MB each.</p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {DOC_SLOTS.map(slot => (
                            <div key={slot.key}
                              className={`relative border-2 rounded-xl p-4 transition-all
                                ${documents[slot.key] ? 'border-secondary bg-secondary/5' : 'border-dashed border-gray-300 hover:border-primary/40 hover:bg-gray-50'}`}>
                              <input type="file" id={`doc_${slot.key}`} accept={slot.accept}
                                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                                onChange={e => {
                                  const file = e.target.files?.[0] || null;
                                  // Validate file size (max 5MB)
                                  if (file && file.size > 5 * 1024 * 1024) {
                                    setError(`File "${file.name}" is too large. Maximum size is 5MB.`);
                                    e.target.value = ''; // Reset input
                                    return;
                                  }
                                  setError(''); // Clear any previous errors
                                  setDocuments(prev => ({ ...prev, [slot.key]: file }));
                                }} />
                              <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold shrink-0
                                  ${documents[slot.key] ? 'bg-secondary/20 text-secondary' : 'bg-gray-100 text-gray-400'}`}>
                                  {documents[slot.key] ? 'Done' : 'Upload'}
                                </div>
                                <div className="min-w-0">
                                  <p className={`text-xs font-semibold leading-tight ${documents[slot.key] ? 'text-secondary' : 'text-primary'}`}>
                                    {slot.label}
                                  </p>
                                  <p className="text-xs text-text-tertiary mt-0.5 truncate">
                                    {documents[slot.key] ? documents[slot.key]!.name : slot.hint}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Terms accordion */}
                      <div className="border border-gray-200 rounded-xl overflow-hidden">
                        <button type="button" onClick={() => setTermsOpen(v => !v)}
                          className="w-full flex items-center justify-between px-5 py-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left">
                          <span className="text-sm font-semibold text-primary">Terms and Conditions - Please Read</span>
                          <span className={`text-text-tertiary text-xs font-bold transition-transform duration-200 ${termsOpen ? 'rotate-180' : ''}`}>v</span>
                        </button>
                        {termsOpen && (
                          <div className="px-5 py-4 space-y-5 text-xs text-text-secondary max-h-64 overflow-y-auto custom-scroll border-t border-gray-100">
                            {TERMS_SECTIONS.map(sec => (
                              <div key={sec.title}>
                                <p className="font-semibold text-primary mb-2">{sec.title}</p>
                                <ul className="space-y-1 list-disc list-inside leading-relaxed">
                                  {sec.items.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Declaration checkboxes */}
                      <div>
                        <p className="text-sm font-semibold text-primary mb-1">Declaration by Applicant</p>
                        <p className="text-xs text-text-secondary mb-4">All declarations must be confirmed before submitting your application.</p>
                        <div className="space-y-2">
                          {DECLARATIONS.map((decl, i) => (
                            <label key={i}
                              className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all
                                ${declarations[i] ? 'border-secondary bg-secondary/5' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'}`}>
                              <div className="relative shrink-0 mt-0.5">
                                <input type="checkbox" className="sr-only" checked={declarations[i]}
                                  onChange={e => {
                                    const copy = [...declarations];
                                    copy[i] = e.target.checked;
                                    setDeclarations(copy);
                                  }} />
                                <div className={`w-5 h-5 rounded flex items-center justify-center border-2 transition-all
                                  ${declarations[i] ? 'bg-secondary border-secondary' : 'border-gray-300 bg-white'}`}>
                                  {declarations[i] && <span className="text-white text-xs font-bold leading-none">v</span>}
                                </div>
                              </div>
                              <p className="text-xs text-text-secondary leading-relaxed">{decl}</p>
                            </label>
                          ))}
                        </div>
                        {!allDeclared && (
                          <p className="mt-3 text-xs text-accent font-medium">
                            Please confirm all 6 declarations to submit.
                          </p>
                        )}
                      </div>

                      {error && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm text-center">
                          {error}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Navigation */}
                <div className="px-6 md:px-10 py-6 bg-gray-50 border-t border-gray-100 flex items-center justify-between gap-4">
                  {step > 1 ? (
                    <button type="button" onClick={() => setStep(s => s - 1)}
                      className="px-6 py-3 rounded-xl border border-gray-200 text-text-secondary hover:border-primary hover:text-primary text-sm font-semibold transition-all">
                      Back
                    </button>
                  ) : <div />}

                  {step < STEPS.length ? (
                    <button type="button" disabled={!canAdvance} onClick={() => setStep(s => s + 1)}
                      className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none">
                      Continue
                    </button>
                  ) : (
                    <button type="submit" disabled={submitting || !canSubmit}
                      className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-secondary to-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-secondary/25 hover:shadow-secondary/40 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none">
                      {submitting ? (
                        <><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Submitting...</>
                      ) : 'Submit Application'}
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

function FL({ label, children, className }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col gap-1.5 ${className ?? ''}`}>
      <label className="text-xs font-semibold text-text-secondary uppercase tracking-wide">{label}</label>
      {children}
    </div>
  );
}

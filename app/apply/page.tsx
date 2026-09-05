'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

const PROGRAMS = [
  // Critical Care & Emergency
  { value: 'emergency-medicine', label: 'Fellowship in Emergency Medicine' },
  { value: 'critical-care', label: 'Fellowship in Critical Care' },
  { value: 'internal-medicine', label: 'Fellowship in Internal Medicine' },
  { value: 'family-medicine', label: 'Fellowship in Family Medicine' },
  { value: 'Infectious Disease', label: 'Fellowship in Infectious Disease' },
  { value: ' Palliative Medicine & Supportive Care', label: 'Fellowship Palliative Medicine & Supportive Care' },
  // Cardiology
  { value: 'clinical-cardiology', label: 'Fellowship in Clinical Cardiology' },
  { value: 'echocardiography', label: 'Fellowship in Echocardiography' },
  { value: 'interventional-cardiology', label: 'Fellowship in Interventional Cardiology' },
  { value: 'pediatric-cardiology', label: 'Fellowship in Pediatric Cardiology' },
  { value: 'cardiothoracic-vascular-surgery', label: 'Fellowship in Cardiothoracic and Vascular Surgery' },
  // Obstetrics & Gynecology
  { value: 'obstetrics-gynecology', label: 'Fellowship in Obstetrics & Gynecology' },
  { value: 'high-risk-pregnancy', label: 'Fellowship in High Risk Pregnancy' },
  { value: 'fetal-medicine', label: 'Fellowship in Fetal Medicine' },
  { value: 'fetal-echocardiography', label: 'Fellowship in Fetal Echocardiography' },
  { value: 'laparoscopy-hysteroscopy', label: 'Fellowship in Laparoscopy & Hysteroscopy' },
  { value: 'cosmetic-gynecology', label: 'Fellowship in Cosmetic Gynecology' },
  { value: 'gyne-oncology', label: 'Fellowship in Gynaecological Oncology' },
  // Reproductive Medicine & IVF
  { value: 'reproductive-medicine', label: 'Fellowship in Reproductive Medicine' },
  { value: 'embryology', label: 'Fellowship in Embryology' },
  // Diabetes & Endocrinology
  { value: 'diabetology', label: 'Fellowship in Diabetology (Diabetes Mellitus)' },
  { value: 'endocrinology', label: 'Fellowship in Endocrinology' },
  { value: 'paediatric-endocrinology', label: 'Fellowship in Paediatric Endocrinology' },
  // Gastroenterology
  { value: 'gastroenterology', label: 'Fellowship in Gastroenterology' },
  { value: 'gi-endoscopy', label: 'Fellowship in GI Endoscopy' },
  // Dermatology & Aesthetics
  { value: 'dermatology', label: 'Fellowship in Dermatology' },
  { value: 'trichology', label: 'Fellowship in Trichology' },
  { value: 'cosmetology-aesthetic-medicine', label: 'Fellowship in Cosmetology & Aesthetic Medicine' },
  // Surgery
  { value: 'general-surgery', label: 'Fellowship in General Surgery' },
  { value: 'minimal-access-surgery', label: 'Fellowship in Minimal Access Surgery' },
   { value: 'Minimal Invasive-surgery', label: 'Fellowship in Minimal Invasive Surgery' },
  { value: 'arthroscopy-arthroplasty', label: 'Fellowship in Arthroscopy & Arthroplasty' },
  { value: 'orthopedics', label: 'Fellowship in Orthopedics' },
  { value: 'spinal-cord-surgery', label: 'Fellowship in Spinal Cord Surgery' },
  { value: 'spine-medicine', label: 'Fellowship in Spine Medicine' },
  { value: 'neuro-surgery', label: 'Fellowship in Neurosurgery' },
  { value: 'plastic-surgery', label: 'Fellowship in Plastic Surgery' },
  { value: 'microsurgery', label: 'Fellowship in Microsurgery' },
  { value: 'vascular-surgery', label: 'Fellowship in Vascular Surgery' },
  { value: 'paediatric-surgery', label: 'Fellowship in Paediatric Surgery' },
  { value: 'orthognathic-surgery-maxillofacial-trauma', label: 'Fellowship in Orthognathic Surgery & Maxillofacial Trauma' },
  { value: 'orthodontics', label: 'Fellowship in Orthodontics' },
  // Oncology
  { value: 'surgical-oncology', label: 'Fellowship in Surgical Oncology' },
  { value: 'medical-oncology', label: 'Fellowship in Medical Oncology' },
  { value: 'head-neck-oncology', label: 'Fellowship in Head and Neck Oncology' },
  { value: 'endocrine-breast-onco-surgery', label: 'Fellowship in Endocrine and Breast Onco Surgery' },
  { value: 'oral-oncology', label: 'Fellowship in Oral Oncology' },
  // Paediatrics
  { value: 'pediatrics', label: 'Fellowship in Pediatrics' },
  { value: 'neonatology', label: 'Fellowship in Neonatology' },
  { value: 'pediatric-neurology', label: 'Fellowship in Pediatric Neurology' },
  { value: 'paediatric-echocardiography', label: 'Fellowship in Paediatric Echocardiography' },
  { value: 'pediatric-orthopedics', label: 'Fellowship in Pediatric Orthopedics' },
  // Neurology
  { value: 'neurology', label: 'Fellowship in Neurology' },
  // Radiology & Imaging
  { value: 'radiology', label: 'Fellowship in Radiology' },
  { value: 'neuroradiology', label: 'Fellowship in Neuroradiology' },
  { value: 'interventional-radiology', label: 'Fellowship in Interventional Radiology' },
  { value: 'interventional-neuro-radiology', label: 'Fellowship in Interventional Neuroradiology' },
  { value: 'musculoskeletal-ultrasound', label: 'Fellowship in Musculoskeletal Ultrasound' },
  { value: 'vascular-ultrasound', label: 'Fellowship in Vascular Ultrasound' },
  { value: 'Breast Imaging', label: 'Fellowship in Breast Imaging' },
  { value: 'usg', label: 'Fellowship in USG' },
  // Pain & Anaesthesia
  { value: 'pain-management', label: 'Fellowship in Pain Management' },
  { value: 'interventional-pain-management', label: 'Fellowship in Interventional Pain Management & Regional Anaesthesiology' },
  { value: 'anesthesiology', label: 'Fellowship in Anesthesiology' },
  // Nephrology & Urology
  { value: 'nephrology', label: 'Fellowship in Nephrology' },
  { value: 'urology', label: 'Fellowship in Urology' },
  { value: 'endourology', label: 'Fellowship in Endourology' },
  // Other Specialties
  { value: 'pulmonary-medicine', label: 'Fellowship in Pulmonary Medicine' },
  { value: 'rheumatology', label: 'Fellowship in Rheumatology' },
  { value: 'psychiatry', label: 'Fellowship in Psychiatry' },
  { value: 'ophthalmology', label: 'Fellowship in Ophthalmology' },
  { value: 'oral-implantology-laser-dentistry', label: 'Fellowship in Oral Implantology and Laser Dentistry' },
  { value: 'maxillofacial-surgery', label: 'Fellowship in Maxillofacial Surgery' },
  { value: 'epidemiology', label: 'Fellowship in Epidemiology' },
  { value: 'sexology', label: 'Fellowship in Sexology' },
  { value: 'otorhinolaryngology-ent', label: 'Fellowship in Otorhinolaryngology (ENT)' },
  { value: 'clinical-nutrition', label: 'Fellowship in Clinical Nutrition' },
  { value: 'Bariatric Endoscopy', label: 'Fellowship in Bariatric Endoscopy' },
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

// Documents upload directly from the browser to Supabase Storage (bypassing
// our own API route entirely), so this only needs to guard against
// unreasonably large files — not the hosting platform's request body limit.
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB per file

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
      // Upload documents directly to Supabase Storage from the browser, so
      // large files never pass through our own API route.
      const folderId = crypto.randomUUID();
      const documentPaths: string[] = [];
      for (const [key, file] of Object.entries(documents)) {
        if (!file) continue;
        const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
        const storagePath = `applications/${folderId}/${key}/${safeName}`;
        const { error: uploadError } = await supabase.storage
          .from('application-documents')
          .upload(storagePath, file, { contentType: file.type, upsert: true });
        if (uploadError) {
          throw new Error(`Failed to upload ${safeName}: ${uploadError.message}`);
        }
        documentPaths.push(storagePath);
      }

      const nameParts = formData.fullName.trim().split(' ');
      const first_name = nameParts[0] || '';
      const last_name = nameParts.slice(1).join(' ') || '';
      const res = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name,
          last_name,
          email: formData.email,
          phone: formData.phone,
          program: formData.program,
          qualification: formData.qualification,
          experience: formData.experience,
          dob: formData.dob,
          gender: formData.gender,
          regNumber: formData.regNumber,
          stateCouncil: formData.stateCouncil,
          yearOfReg: formData.yearOfReg,
          practiceType: formData.practiceType,
          hospitalName: formData.hospitalName,
          clinicName: formData.clinicName,
          city: formData.city,
          modePreference: formData.modePreference,
          reason: formData.reason,
          documents: documentPaths,
        }),
      });
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
        <div className="flex-1 flex items-center justify-center bg-white px-4 py-20">
          <div className="text-center max-w-lg">
            <div className="w-20 h-20 bg-[#e8f2ea] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-[#15401E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-[1.75rem] font-bold text-[#111827] mb-3">Application Submitted!</h2>
            <p className="text-[0.9375rem] text-[#6B7280] mb-8">Our admissions team will contact you within 48 hours to discuss next steps.</p>
            <a href="/" className="btn-primary">Back to Home</a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="py-10 md:py-16">
        <div className="container-custom max-w-6xl">
          <div className="grid lg:grid-cols-[300px_1fr] gap-8 items-start">

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 space-y-6">
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
                <div className="mt-6">
                  <div className="flex justify-between text-xs text-text-tertiary mb-2">
                    <span>Completion</span>
                    <span>{Math.round(((step - 1) / STEPS.length) * 100)}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#15401E] rounded-full transition-all duration-500"
                      style={{ width: `${((step - 1) / STEPS.length) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Form panel */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-6 md:px-10 pt-8 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#15401E] rounded-lg flex items-center justify-center text-white font-bold text-sm">{step}</div>
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
                    <div className="space-y-5">
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
                    <div className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-5">
                        <FL label="Medical Qualification *">
                          <select required className="field-input" value={formData.qualification} onChange={e => u('qualification', e.target.value)}>
                            <option value="">Select qualification</option>
                            {['MBBS', 'MD', 'MS', 'DNB',  'BDS', 'MDS','Others'].map(q => <option key={q} value={q}>{q}</option>)}
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
                          <input type="number" required min="1970" max="2030" placeholder="e.g. 2018" className="field-input"
                            value={formData.yearOfReg} onChange={e => u('yearOfReg', e.target.value)} />
                        </FL>
                        <FL label="Years of Experience *" className="md:col-span-2">
                          <input type="text" required placeholder="e.g. 5 years" className="field-input"
                            value={formData.experience} onChange={e => u('experience', e.target.value)} />
                        </FL>
                      </div>

                      <div>
                        <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-3">Current Practice Type *</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {PRACTICE_TYPES.map(pt => (
                            <button type="button" key={pt.value} onClick={() => u('practiceType', pt.value)}
                              className={`px-4 py-3 rounded-xl border text-sm font-medium text-left transition-all
                                ${formData.practiceType === pt.value
                                  ? 'border-[#15401E] bg-[#e8f2ea] text-[#15401E]'
                                  : 'border-gray-200 text-text-secondary hover:border-gray-300 hover:bg-gray-50'}`}>
                              {pt.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-3">Current Workplace</p>
                        <div className="grid md:grid-cols-3 gap-5">
                          <FL label="Hospital Name">
                            <input type="text" placeholder="e.g. Apollo Hospital" className="field-input"
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
                    <div className="space-y-8">
                      <div>
                        <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-3">Select Fellowship Program *</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-64 overflow-y-auto pr-1">
                          {PROGRAMS.map(p => (
                            <button type="button" key={p.value} onClick={() => u('program', p.value)}
                              className={`px-3 py-2.5 rounded-xl border text-left transition-all
                                ${formData.program === p.value
                                  ? 'border-[#15401E] bg-[#e8f2ea] text-[#15401E] font-semibold shadow-sm'
                                  : 'border-gray-200 text-text-secondary hover:border-gray-300 hover:bg-gray-50'}`}>
                              <span className="leading-tight text-xs">{p.label}</span>
                            </button>
                          ))}
                        </div>
                        {formData.program && (
                          <p className="mt-2 text-xs text-[#15401E] font-medium">
                            Selected: {PROGRAMS.find(p => p.value === formData.program)?.label}
                          </p>
                        )}
                      </div>

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
                                  ? 'border-[#15401E] bg-[#e8f2ea] shadow-sm'
                                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'}`}>
                              <div>
                                <p className={`text-sm font-semibold ${formData.modePreference === m.value ? 'text-[#15401E]' : 'text-[#111827]'}`}>{m.label}</p>
                                <p className="text-xs text-[#6B7280] mt-0.5">{m.desc}</p>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

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
                    <div className="space-y-8">
                      <div>
                        <p className="text-sm font-semibold text-primary mb-1">Document Upload</p>
                        <p className="text-xs text-text-secondary mb-4">Upload clear copies of each document — PDF, JPG, or PNG, max 10MB each.</p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {DOC_SLOTS.map(slot => (
                            <div key={slot.key}
                              className={`relative border-2 rounded-xl p-4 transition-all
                                ${documents[slot.key] ? 'border-[#15401E] bg-[#e8f2ea]/30' : 'border-dashed border-gray-300 hover:border-gray-400 hover:bg-gray-50'}`}>
                              <input type="file" id={`doc_${slot.key}`} accept={slot.accept}
                                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                                onChange={e => {
                                  const file = e.target.files?.[0] || null;
                                  if (file && file.size > MAX_FILE_SIZE) {
                                    setError(`File "${file.name}" is too large. Maximum size is 10MB per file.`);
                                    e.target.value = '';
                                    return;
                                  }
                                  setError('');
                                  setDocuments(prev => ({ ...prev, [slot.key]: file }));
                                }} />
                              <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold shrink-0
                                  ${documents[slot.key] ? 'bg-[#15401E]/20 text-[#15401E]' : 'bg-gray-100 text-gray-400'}`}>
                                  {documents[slot.key] ? '✓' : '↑'}
                                </div>
                                <div className="min-w-0">
                                  <p className={`text-xs font-semibold leading-tight ${documents[slot.key] ? 'text-[#15401E]' : 'text-[#111827]'}`}>
                                    {slot.label}
                                  </p>
                                  <p className="text-xs text-[#9CA3AF] mt-0.5 truncate">
                                    {documents[slot.key] ? documents[slot.key]!.name : slot.hint}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="border border-gray-200 rounded-xl overflow-hidden">
                        <button type="button" onClick={() => setTermsOpen(v => !v)}
                          className="w-full flex items-center justify-between px-5 py-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left">
                          <span className="text-sm font-semibold text-primary">Terms and Conditions — Please Read</span>
                          <span className={`text-text-tertiary text-xs font-bold transition-transform duration-200 inline-block ${termsOpen ? 'rotate-180' : ''}`}>▼</span>
                        </button>
                        {termsOpen && (
                          <div className="px-5 py-4 space-y-5 text-xs text-text-secondary max-h-64 overflow-y-auto border-t border-gray-100">
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

                      <div>
                        <p className="text-sm font-semibold text-primary mb-1">Declaration by Applicant</p>
                        <p className="text-xs text-text-secondary mb-4">All declarations must be confirmed before submitting your application.</p>
                        <div className="space-y-2">
                          {DECLARATIONS.map((decl, i) => (
                            <label key={i}
                              className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all
                                ${declarations[i] ? 'border-[#15401E] bg-[#e8f2ea]/30' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'}`}>
                              <div className="relative shrink-0 mt-0.5">
                                <input type="checkbox" className="sr-only" checked={declarations[i]}
                                  onChange={e => {
                                    const copy = [...declarations];
                                    copy[i] = e.target.checked;
                                    setDeclarations(copy);
                                  }} />
                                <div className={`w-5 h-5 rounded flex items-center justify-center border-2 transition-all
                                  ${declarations[i] ? 'bg-[#15401E] border-[#15401E]' : 'border-gray-300 bg-white'}`}>
                                  {declarations[i] && <span className="text-white text-xs font-bold leading-none">✓</span>}
                                </div>
                              </div>
                              <p className="text-xs text-text-secondary leading-relaxed">{decl}</p>
                            </label>
                          ))}
                        </div>
                        {!allDeclared && (
                          <p className="mt-3 text-xs text-[#DC2626] font-medium">
                            Please confirm all {DECLARATIONS.length} declarations to submit.
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
                      className="px-6 py-3 rounded-xl border border-gray-200 text-text-secondary hover:border-[#15401E] hover:text-[#15401E] text-sm font-semibold transition-all">
                      Back
                    </button>
                  ) : <div />}

                  {step < STEPS.length ? (
                    <button type="button" disabled={!canAdvance} onClick={() => setStep(s => s + 1)}
                      className="px-8 py-3 bg-[#15401E] hover:bg-[#0f2e15] text-white rounded-xl text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-all">
                      Continue
                    </button>
                  ) : (
                    <button type="submit" disabled={submitting || !canSubmit}
                      className="px-8 py-3 bg-[#15401E] hover:bg-[#0f2e15] text-white rounded-xl text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-2">
                      {submitting ? (
                        <><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Submitting…</>
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

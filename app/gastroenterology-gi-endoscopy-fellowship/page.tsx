'use client';
import { useState } from 'react';
import Image from 'next/image';

const FELLOWSHIPS = ['Fellowship in Gastroenterology', 'Fellowship in GI Endoscopy', 'Interested in Both'];

const HIGHLIGHTS = [
  'Focused Specialty Learning',
  'Expert Faculty Mentorship',
  'Case-Based Clinical Learning',
  'Practical Knowledge & Skill Development',
];

const PROGRAMS = [
  {
    icon: '🩺',
    name: 'Fellowship in Gastroenterology',
    text: 'Develop a deeper understanding of digestive system disorders, their diagnosis, evaluation, and management.',
    learnIntro: 'Strengthen your understanding of common and complex gastrointestinal conditions.',
    topics: [
      'Gastrointestinal Anatomy & Physiology',
      'Acid-Peptic Disorders & GERD',
      'Liver Diseases & Hepatology',
      'Pancreatic & Biliary Disorders',
      'Inflammatory Bowel Disease',
      'Irritable Bowel Syndrome',
      'Gastrointestinal Bleeding',
      'Diagnostic Approaches & Patient Management',
    ],
  },
  {
    icon: '🔬',
    name: 'Fellowship in GI Endoscopy',
    text: 'Build focused knowledge of gastrointestinal endoscopic procedures, techniques, indications, and clinical applications.',
    learnIntro: 'Develop knowledge of diagnostic and therapeutic endoscopy and its clinical applications.',
    topics: [
      'Upper GI Endoscopy',
      'Colonoscopy',
      'Endoscopic Procedures & Techniques',
      'Endoscopic Anatomy',
      'Indications & Contraindications',
      'Polypectomy & Biopsy Techniques',
      'Gastrointestinal Bleeding Management',
      'Endoscopic Complications & Patient Safety',
    ],
  },
];

const WHY = [
  { icon: '👨‍⚕️', title: 'Expert Faculty Mentorship', text: 'Learn from experienced medical professionals and specialty faculty.' },
  { icon: '📚', title: 'Specialized Curriculum', text: 'Explore focused topics relevant to Gastroenterology and GI Endoscopy.' },
  { icon: '🗂️', title: 'Case-Based Learning', text: 'Understand clinical conditions through relevant case discussions.' },
  { icon: '🛠️', title: 'Practical Learning Focus', text: 'Strengthen your understanding of diagnostic approaches and clinical procedures.' },
  { icon: '⏰', title: 'Flexible Learning Approach', text: 'Continue your professional development alongside your existing commitments, subject to program format.' },
  { icon: '📈', title: 'Career-Oriented Education', text: 'Build specialty knowledge that supports your continued medical growth.' },
];

const APPLICANTS = [
  { icon: '🎓', title: 'MBBS Graduates' },
  { icon: '🩺', title: 'MD/DNB in General Medicine' },
  { icon: '👩‍⚕️', title: 'Doctors from relevant medical specialties' },
  { icon: '🏥', title: 'Practicing Physicians' },
  { icon: '🔬', title: 'Eligible Medical Professionals interested in Gastroenterology and GI Endoscopy' },
];

const FAQS = [
  {
    q: 'What fellowship programs are available in this specialty?',
    a: 'MedFellow Academy offers Fellowship in Gastroenterology and Fellowship in GI Endoscopy.',
  },
  {
    q: 'Can I apply for both fellowship programs?',
    a: 'You can enquire about both programs. Our academic counsellor can guide you based on your qualifications and interests.',
  },
  {
    q: 'Who is eligible for these fellowship programs?',
    a: 'Eligibility depends on the individual program. Doctors with relevant medical qualifications can enquire to confirm their eligibility.',
  },
  {
    q: 'What topics are covered in Gastroenterology?',
    a: 'The curriculum may cover digestive disorders, liver diseases, pancreatic and biliary conditions, IBD, GERD, and gastrointestinal patient management.',
  },
  {
    q: 'What topics are covered in GI Endoscopy?',
    a: 'The curriculum may include upper GI endoscopy, colonoscopy, endoscopic techniques, biopsy, polypectomy, and procedural safety.',
  },
  {
    q: 'How can I get complete course details?',
    a: 'Submit the enquiry form on this page. Our academic counsellor will contact you with program information, eligibility, and admission details.',
  },
];

const QUALIFICATIONS = ['MBBS', 'MD/DNB General Medicine', 'Other relevant specialty', 'Other'];

const inputCls =
  'w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none hover:border-gray-300 text-sm';

const EMPTY_FORM = { name: '', mobile: '', email: '', qualification: '', fellowship: '' };

export default function GastroenterologyGiEndoscopyFellowshipPage() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openModal = (fellowship?: string) => {
    if (fellowship) setFormData((prev) => ({ ...prev, fellowship }));
    setSubmitted(false);
    setShowModal(true);
  };

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fellowship) {
      alert('Please select your fellowship program.');
      return;
    }
    setSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.mobile,
          subject: `Gastroenterology & GI Endoscopy - ${formData.fellowship}`,
          message: `Qualification: ${formData.qualification}\nFellowship Interested In: ${formData.fellowship}\nSource: Gastroenterology & GI Endoscopy landing page`,
        }),
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData(EMPTY_FORM);
        if (showModal) {
          setTimeout(() => {
            setShowModal(false);
            setSubmitted(false);
          }, 1800);
        }
      } else {
        alert('Failed to submit. Please try again.');
      }
    } catch {
      alert('Error submitting form. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const fellowshipPicker = (
    <div>
      <label className="block text-xs font-semibold text-gray-600 mb-2">Select Your Fellowship Program</label>
      <div className="grid gap-2">
        {FELLOWSHIPS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFormData({ ...formData, fellowship: f })}
            className={`px-3 py-2.5 rounded-xl text-sm font-semibold border-2 text-left transition-colors ${
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
  );

  const contactFields = (
    <>
      <input type="text" name="name" placeholder="Full Name *" value={formData.name} onChange={handleChange} required className={inputCls} />
      <input type="tel" name="mobile" placeholder="Mobile Number *" value={formData.mobile} onChange={handleChange} required className={inputCls} />
      <input type="email" name="email" placeholder="Email Address *" value={formData.email} onChange={handleChange} required className={inputCls} />
      <select name="qualification" value={formData.qualification} onChange={handleChange} required className={`${inputCls} bg-white`}>
        <option value="">Medical Qualification *</option>
        {QUALIFICATIONS.map((q) => (
          <option key={q} value={q}>{q}</option>
        ))}
      </select>
    </>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky CTA - Mobile Only */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-accent via-primary to-secondary text-white py-3 px-3 shadow-2xl z-40 md:hidden">
        <button
          onClick={() => openModal()}
          className="w-full bg-white text-primary font-bold py-4 rounded-full hover:bg-accent hover:text-white transition-all transform active:scale-95 shadow-lg flex items-center justify-center gap-2 text-sm"
        >
          <span className="animate-pulse text-base">🚀</span> Get Complete Course Details
        </button>
      </div>

      {/* Minimal Logo Header */}
      <header className="bg-white py-3 md:py-4 border-b border-gray-100">
        <div className="container-custom max-w-6xl mx-auto px-4 flex items-center justify-between gap-3">
          <div className="relative w-32 h-10 md:w-40 md:h-12 shrink-0">
            <Image src="/logo.png" alt="MedFellow Academy" fill className="object-contain object-left" sizes="160px" priority />
          </div>
          <button
            onClick={() => openModal()}
            className="px-4 py-2 md:px-6 md:py-2.5 bg-gradient-to-r from-accent via-primary to-secondary text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-105 text-xs md:text-sm shrink-0"
          >
            Apply Now
          </button>
        </div>
      </header>

      {/* 1. Hero */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center py-16 md:py-24">
        <div className="absolute inset-0">
          <Image
            src="/courses/gastroenterology.jpg"
            alt="Gastroenterology and GI Endoscopy Fellowship Programs"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30"></div>
        </div>

        <div className="relative z-10 container-custom max-w-6xl mx-auto px-4">
          <div className="max-w-2xl">
            <p className="text-sm md:text-base font-bold tracking-widest text-accent mb-4 uppercase">
              Medical Fellowship Programs
            </p>
            <h1 className="font-heading font-extrabold mb-5 leading-tight text-white text-3xl md:text-5xl lg:text-6xl">
              Advance Your Expertise in Gastroenterology &amp; GI Endoscopy
            </h1>
            <p className="text-base md:text-xl text-white/90 leading-relaxed font-light mb-4">
              Build focused knowledge in digestive health, gastrointestinal disorders, and endoscopic procedures with
              specialized fellowship programs from MedFellow Academy.
            </p>
            <p className="text-sm md:text-base text-white/75 leading-relaxed mb-7">
              Explore opportunities to strengthen your clinical understanding and advance your expertise in
              Gastroenterology and GI Endoscopy.
            </p>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-8">
              {HIGHLIGHTS.map((h) => (
                <div key={h} className="flex items-center gap-2.5 text-white">
                  <span className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                  <span className="text-sm md:text-base font-medium">{h}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => openModal()}
                className="px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent/90 transition-all shadow-2xl hover:scale-105"
              >
                Apply Now
              </button>
              <button
                onClick={scrollToForm}
                className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-all shadow-2xl hover:scale-105"
              >
                Enquire Today
              </button>
            </div>
            <p className="text-white/70 text-sm mt-4">Get Complete Course Details</p>
          </div>
        </div>
      </section>

      {/* 2. Lead Form */}
      <section id="lead-form" className="py-14 md:py-20 bg-[#fafafa] relative overflow-hidden scroll-mt-4">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>

        <div className="container-custom max-w-2xl relative z-10 px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-primary mb-2">
              Take the Next Step in Your Medical Career
            </h2>
            <p className="text-base md:text-lg text-text-secondary">
              Fill in your details to receive complete information about our fellowship programs.
            </p>
          </div>

          <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-primary via-secondary to-accent px-5 py-5 md:px-8 md:py-6 text-white">
              <p className="font-bold mb-3">Our academic counsellor will help you with:</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
                {['Program details', 'Eligibility', 'Curriculum', 'Duration', 'Fees', 'Admission process'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-3">
                {contactFields}
                {fellowshipPicker}
                <button
                  type="submit"
                  disabled={submitting}
                  className="group w-full bg-gradient-to-r from-accent via-primary to-secondary text-white font-extrabold py-4 rounded-2xl hover:shadow-2xl transition-all shadow-xl text-sm md:text-base disabled:opacity-50 relative overflow-hidden transform hover:scale-[1.02] mt-2"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {submitting ? 'Submitting...' : submitted && !showModal ? 'Submitted! Our academic counsellor will contact you shortly.' : 'Get Course Details'}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
                <p className="text-center text-xs text-gray-500">
                  Our academic counsellor will contact you with program details and eligibility information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About the Fellowship Programs */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-custom max-w-6xl px-4">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-primary mb-4">
              Specialized Learning in Gastroenterology &amp; GI Endoscopy
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              Gastroenterology is a specialized field focused on diagnosing and managing disorders of the digestive
              system. GI Endoscopy plays an important role in evaluating gastrointestinal conditions and performing
              diagnostic and therapeutic procedures.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              MedFellow Academy offers focused fellowship learning pathways for doctors who want to strengthen their
              knowledge and develop specialized skills in these areas.
            </p>
          </div>
          <p className="text-center font-semibold text-primary mb-6">Explore our two fellowship programs:</p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {PROGRAMS.map((p) => (
              <div key={p.name} className="bg-white rounded-2xl p-7 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-primary/30 transition-all flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-3xl mb-5">{p.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{p.name}</h3>
                <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-6 grow">{p.text}</p>
                <button
                  onClick={() => openModal(p.name)}
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#15401E] text-white rounded-full font-semibold text-sm hover:bg-[#0f2e15] transition-colors self-start"
                >
                  Explore Program →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What Will You Learn */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container-custom max-w-6xl px-4">
          <div className="text-center mb-10">
            <div className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-5 py-1.5 rounded-full text-xs md:text-sm font-bold mb-5">
              CURRICULUM HIGHLIGHTS
            </div>
            <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-primary">What Will You Learn?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {PROGRAMS.map((p) => (
              <div key={p.name} className="bg-white rounded-2xl p-6 md:p-8 shadow-md">
                <h3 className="text-lg md:text-xl font-bold text-primary mb-2">{p.name}</h3>
                <p className="text-sm text-text-secondary mb-5">{p.learnIntro}</p>
                <ul className="space-y-2.5">
                  {p.topics.map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-[#15401E] rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">✓</span>
                      <span className="text-sm md:text-base text-text-primary font-medium">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-xs md:text-sm text-gray-500 mt-8">
            Final curriculum and procedural training depend on the respective program structure.
          </p>
        </div>
      </section>

      {/* 5. Why Choose MedFellow */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-custom max-w-6xl px-4">
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-5 py-1.5 rounded-full text-xs md:text-sm font-bold mb-5">
              WHY CHOOSE MEDFELLOW ACADEMY?
            </div>
            <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-primary mb-4">Take Your Medical Expertise Further</h2>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Choose a fellowship program designed to support focused medical learning and professional development.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY.map((w) => (
              <div key={w.title} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{w.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-2">{w.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Who Can Apply */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container-custom max-w-5xl px-4">
          <div className="text-center mb-10">
            <div className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-5 py-1.5 rounded-full text-xs md:text-sm font-bold mb-5">
              DESIGNED FOR MEDICAL PROFESSIONALS
            </div>
            <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-primary mb-4">Who Can Apply?</h2>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              These fellowship programs may be suitable for:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {APPLICANTS.map((a) => (
              <div key={a.title} className="text-center bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{a.icon}</div>
                <p className="font-semibold text-primary text-sm leading-snug">{a.title}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-600 mb-6">Eligibility is subject to the individual program&apos;s admission criteria.</p>
          <div className="text-center">
            <button
              onClick={() => openModal()}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#15401E] text-white rounded-full font-bold hover:bg-[#0f2e15] transition-colors shadow-lg"
            >
              Check Your Eligibility
            </button>
          </div>
        </div>
      </section>

      {/* 7. Why Specialize */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-custom max-w-3xl px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-primary mb-6">
            Why Specialize in Gastroenterology &amp; GI Endoscopy?
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-5">
            Digestive health conditions require accurate evaluation, clinical understanding, and appropriate management.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-5">
            With growing demand for specialized gastrointestinal care, developing focused knowledge in Gastroenterology
            and GI Endoscopy can help doctors strengthen their clinical capabilities and explore further professional
            opportunities.
          </p>
          <p className="text-lg font-semibold text-secondary">
            Take a step towards advancing your expertise in this specialized medical field.
          </p>
        </div>
      </section>

      {/* 8. Lead Conversion Section */}
      <section className="py-16 md:py-20 bg-[#15401E] text-white">
        <div className="container-custom max-w-3xl text-center px-4">
          <div className="inline-block bg-accent text-white px-5 py-1.5 rounded-full text-xs md:text-sm font-bold mb-5">
            ADMISSIONS ENQUIRY OPEN
          </div>
          <h2 className="text-2xl md:text-4xl font-heading font-bold mb-4 text-white">Ready to Advance Your Expertise?</h2>
          <p className="text-lg md:text-xl text-white/90 mb-3">
            Explore Fellowship Programs in Gastroenterology and GI Endoscopy with MedFellow Academy.
          </p>
          <p className="text-white/80 mb-3 max-w-xl mx-auto">
            Get complete details about the curriculum, eligibility, duration, and admission process.
          </p>
          <p className="text-white font-semibold mb-8">Enquire Now and Take the Next Step in Your Medical Career.</p>
          <button
            onClick={() => openModal()}
            className="px-10 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent/90 transition-all shadow-2xl hover:scale-105"
          >
            Apply Now
          </button>
        </div>
      </section>

      {/* 9. FAQs */}
      <section className="py-14 md:py-20 bg-[#fafafa]">
        <div className="container-custom max-w-3xl px-4">
          <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-center text-primary mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <details key={f.q} className="group bg-white rounded-xl border border-gray-200 shadow-sm open:shadow-md transition-shadow" open={i === 0}>
                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none">
                  <span className="font-semibold text-primary text-sm md:text-base">{i + 1}. {f.q}</span>
                  <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="px-5 pb-5 text-sm md:text-base text-gray-700 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Final CTA Banner */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary via-secondary to-primary text-white">
        <div className="container-custom max-w-3xl text-center px-4">
          <h2 className="text-2xl md:text-4xl font-heading font-bold mb-4 text-white">
            Your Next Step in Specialty Learning Starts Here!
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-2">
            Explore specialized fellowship programs in Gastroenterology and GI Endoscopy.
          </p>
          <p className="text-white/80 mb-8">Get the guidance you need to choose the right program for your professional goals.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openModal()}
              className="px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent/90 transition-all shadow-2xl hover:scale-105"
            >
              Apply Now
            </button>
            <button
              onClick={scrollToForm}
              className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-all shadow-2xl hover:scale-105"
            >
              Enquire Today
            </button>
          </div>
        </div>
      </section>

      {/* 11. Footer */}
      <section className="py-14 pb-28 md:pb-14 bg-[#0f2e15] text-white text-center">
        <div className="container-custom max-w-2xl px-4">
          <p className="text-lg md:text-xl font-heading font-bold mb-2">MedFellow Academy – Learn. Practice. Grow.</p>
          <p className="text-white/80 mb-6">
            Empowering doctors through specialized medical fellowship programs and focused clinical education.
          </p>
          <p className="text-white/90 mb-1">
            🌐 <a href="https://www.medfellowacademy.com" className="hover:underline">www.medfellowacademy.com</a>
          </p>
          <p className="text-white/90 mb-1">
            ✉️ <a href="mailto:info@medfellow.in" className="hover:underline">info@medfellow.in</a>
          </p>
          <p className="text-white/90">
            📞 <a href="tel:+919985044993" className="hover:underline">+91 99850 44993</a>
          </p>
        </div>
      </section>

      {/* Popup Enquiry Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-xl md:rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 md:p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg md:text-xl font-bold text-primary">Get Complete Course Details</h3>
                <button onClick={() => setShowModal(false)} aria-label="Close" className="text-2xl md:text-3xl text-gray-400 hover:text-gray-600 w-9 h-9 flex items-center justify-center shrink-0">×</button>
              </div>
              <p className="text-sm text-text-secondary mb-5">
                Our academic counsellor will contact you with program details and eligibility information.
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                {contactFields}
                {fellowshipPicker}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-xl hover:opacity-90 transition-all shadow-lg disabled:opacity-50 text-sm md:text-base mt-1"
                >
                  {submitting ? '⏳ Submitting...' : submitted ? "✅ Submitted! We'll contact you shortly." : '🚀 Get Course Details'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

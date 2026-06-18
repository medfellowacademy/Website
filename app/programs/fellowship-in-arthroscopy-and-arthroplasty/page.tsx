import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle, ChevronDown, Star, BookOpen, Users, Award, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fellowship in Arthroscopy and Arthroplasty for Joint Care | MedFellow Academy',
  description: 'Develop advanced knowledge in joint care with fellowship education focused on arthroscopy, arthroplasty, and evidence-based management. Enroll now.',
  keywords: 'Fellowship in Arthroscopy and Arthroplasty, Arthroplasty Fellowship, Joint Replacement Fellowship, Arthroscopy and Arthroplasty Course, Knee Replacement Training, Hip Replacement Course, Joint Reconstruction Fellowship, Online Arthroplasty Fellowship, Advanced Orthopedic Fellowship',
  alternates: { canonical: 'https://www.medfellowacademy.com/programs/fellowship-in-arthroscopy-and-arthroplasty' },
  openGraph: {
    title: 'Fellowship in Arthroscopy and Arthroplasty | MedFellow Academy',
    description: 'Advanced Joint Preservation, Arthroscopic Techniques, and Joint Replacement Education for Doctors. Flexible online fellowship. Apply now.',
    url: 'https://www.medfellowacademy.com/programs/fellowship-in-arthroscopy-and-arthroplasty',
    siteName: 'MedFellow Academy',
    type: 'website',
  },
};

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.medfellowacademy.com' },
        { '@type': 'ListItem', position: 2, name: 'Programs', item: 'https://www.medfellowacademy.com/programs' },
        { '@type': 'ListItem', position: 3, name: 'Fellowship in Arthroscopy and Arthroplasty', item: 'https://www.medfellowacademy.com/programs/fellowship-in-arthroscopy-and-arthroplasty' },
      ],
    },
    {
      '@type': 'Course',
      name: 'Fellowship in Arthroscopy and Arthroplasty',
      description: 'Advanced medical fellowship in arthroscopy, arthroplasty, joint replacement, and evidence-based orthopedic care for practicing doctors.',
      provider: {
        '@type': 'Organization',
        name: 'MedFellow Academy',
        sameAs: 'https://www.medfellowacademy.com',
      },
      educationalLevel: 'Postgraduate',
      courseMode: 'Online',
      duration: 'P12M',
      occupationalCategory: 'Orthopedic Surgery',
      teaches: [
        'Fundamentals of Arthroscopy',
        'Knee Arthroscopy',
        'Shoulder Arthroscopy',
        'Hip and Ankle Arthroscopy',
        'Total Knee Arthroplasty',
        'Total Hip Arthroplasty',
        'Joint Reconstruction',
        'Sports Medicine Principles',
        'Rehabilitation Protocols',
      ],
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'Online',
        instructor: { '@type': 'Organization', name: 'MedFellow Academy Faculty' },
        startDate: '2026-01-01',
      },
      offers: {
        '@type': 'Offer',
        price: '180000',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        url: 'https://www.medfellowacademy.com/apply',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the Fellowship in Arthroscopy and Arthroplasty?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Fellowship in Arthroscopy and Arthroplasty is an advanced medical education program designed to help doctors strengthen expertise in sports injury management, joint preservation strategies, arthroscopic principles, joint replacement concepts, and evidence-based orthopedic care.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this Arthroscopy and Arthroplasty Fellowship suitable for practicing doctors?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The program is specifically designed for working healthcare professionals who want to enhance their orthopedic and musculoskeletal care knowledge while continuing clinical practice.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does the fellowship cover knee and hip replacement concepts?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The curriculum includes knee replacement principles, hip replacement concepts, implant selection fundamentals, rehabilitation planning, and evidence-based orthopedic management strategies.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will I learn about sports injuries and arthroscopic joint assessment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Participants gain structured knowledge in sports injury evaluation, meniscal pathology concepts, ligament injury assessment, shoulder instability evaluation, and arthroscopic principles.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does the fellowship include joint preservation and reconstruction concepts?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The program covers joint preservation strategies, reconstruction planning principles, rehabilitation concepts, and long-term musculoskeletal care approaches.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the Arthroscopy and Arthroplasty fellowship program delivered online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The fellowship follows a flexible online learning model designed for busy healthcare professionals who want to continue clinical practice while advancing their orthopedic expertise.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does MedFellow Academy provide certification after the fellowship?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Eligible participants receive certification upon successful completion of fellowship requirements from MedFellow Academy.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why do doctors choose MedFellow Academy for orthopedic fellowships?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Doctors choose MedFellow Academy for flexible learning, evidence-based medical education, expert faculty support, structured curriculum, and career-focused fellowship programs in orthopedic surgery.',
          },
        },
      ],
    },
  ],
};

const CURRICULUM = [
  { module: 'Module 1: Foundations of Arthroscopy', topics: ['Principles and evolution', 'Instrumentation and optics (0°, 30°, 70°)', 'Fluid management', 'Portal placement and triangulation', 'Patient positioning', 'OR setup, ergonomics and sterilization', 'Neurovascular safety', 'Complication prevention'] },
  { module: 'Module 2: Knee Arthroscopy', topics: ['Diagnostic arthroscopy: standard portals, systematic evaluation', 'Meniscal injuries: tear classification and vascular zones', 'Repair vs meniscectomy techniques', 'ACL and PCL reconstruction concepts', 'Cartilage lesions: ICRS grading, microfracture, OATS', 'Multiligament injuries', 'Revision ACL principles'] },
  { module: 'Module 3: Shoulder Arthroscopy', topics: ['Diagnostic arthroscopy', 'Rotator cuff repair', 'Bankart repair and instability', 'SLAP lesions', 'Hill-Sachs lesion', 'Subacromial decompression', 'Frozen shoulder release'] },
  { module: 'Module 4: Hip, Ankle & Upper Limb Arthroscopy', topics: ['Hip: FAI and labral repair', 'Portal placement and traction', 'Ankle: impingement and osteochondral lesions', 'Elbow and wrist overview', 'Loose bodies', 'TFCC injuries', 'Ganglion excision'] },
  { module: 'Module 5: Sports Medicine Principles', topics: ['Injury mechanisms and athlete evaluation', 'Imaging (MRI/USG basics)', 'Rehabilitation protocols', 'Return-to-play guidelines', 'Biologics: PRP evidence-based', 'Injury prevention'] },
  { module: 'Module 6: Principles of Arthroplasty', topics: ['Indications and contraindications', 'Preoperative planning and templating', 'Implant biomechanics', 'Cemented vs uncemented', 'ERAS protocols'] },
  { module: 'Module 7: Total Knee Arthroplasty (TKA)', topics: ['Alignment: Mechanical vs Kinematic', 'Surgical approaches', 'Gap balancing and ligament balancing', 'Implant selection', 'Robotic TKA and navigation systems', 'Patient-specific instrumentation (PSI)'] },
  { module: 'Module 8: Total Hip Arthroplasty (THA)', topics: ['Surgical approaches', 'Femoral and acetabular preparation', 'Bearing surfaces and dual mobility', 'Dysplastic hips', 'Revision THA', 'Periprosthetic fractures and complex reconstructions'] },
  { module: 'Module 9: Shoulder Arthroplasty', topics: ['Anatomical vs reverse replacement', 'Cuff arthropathy management', 'Implant positioning principles'] },
  { module: 'Module 10: Complications & Revision Surgery', topics: ['Arthroscopy complications: infection, arthrofibrosis, graft failure', 'Arthroplasty complications: PJI, aseptic loosening, instability', 'Periprosthetic fractures', 'Revision strategies and algorithms'] },
  { module: 'Module 11: Rehabilitation & Outcomes', topics: ['Post-op rehab protocols (ACL, TKA, THA)', 'Return-to-function vs return-to-sport', 'PROMs: IKDC, Lysholm, Oxford Knee Score, Harris Hip Score'] },
  { module: 'Module 12: Research & Clinical Practice', topics: ['Literature reading and critical appraisal', 'Case documentation and clinical audits', 'Registry data interpretation', 'Medico-legal documentation'] },
];

const FAQS = [
  { q: 'What is the Fellowship in Arthroscopy and Arthroplasty?', a: 'The Fellowship in Arthroscopy and Arthroplasty is an advanced medical education program designed to help doctors strengthen expertise in sports injury management, joint preservation strategies, arthroscopic principles, joint replacement concepts, and evidence-based orthopedic care.' },
  { q: 'Is this Arthroscopy and Arthroplasty Fellowship suitable for practicing doctors?', a: 'Yes. The program is specifically designed for working healthcare professionals who want to enhance their orthopedic and musculoskeletal care knowledge while continuing clinical practice.' },
  { q: 'Does the fellowship cover knee and hip replacement concepts?', a: 'Yes. The curriculum includes knee replacement principles, hip replacement concepts, implant selection fundamentals, rehabilitation planning, and evidence-based orthopedic management strategies.' },
  { q: 'Will I learn about sports injuries and arthroscopic joint assessment?', a: 'Yes. Participants gain structured knowledge in sports injury evaluation, meniscal pathology concepts, ligament injury assessment, shoulder instability evaluation, and arthroscopic principles.' },
  { q: 'Does the fellowship include joint preservation and reconstruction concepts?', a: 'Yes. The program covers joint preservation strategies, reconstruction planning principles, rehabilitation concepts, and long-term musculoskeletal care approaches.' },
  { q: 'Is the program delivered online?', a: 'Yes. The fellowship follows a flexible online learning model designed for busy healthcare professionals.' },
  { q: 'Does MedFellow Academy provide certification?', a: 'Yes. Eligible participants receive certification upon successful completion of fellowship requirements.' },
  { q: 'Why do doctors choose MedFellow Academy?', a: 'Doctors choose MedFellow Academy for flexible learning, evidence-based medical education, expert faculty support, structured curriculum, and career-focused fellowship programs.' },
];

const RELATED = [
  { title: 'Fellowship in Minimal Access & Robotic Surgery', slug: 'fellowship-in-minimal-access-surgery', desc: 'Strengthen understanding of minimally invasive surgical techniques, robotic-assisted procedures, and precision surgical innovation.', icon: '🔬' },
  { title: 'Fellowship in General Surgery (1 Year)', slug: 'fellowship-in-general-surgery', desc: 'Build expertise in surgical assessment, perioperative care, trauma management, and evidence-based surgical practice.', icon: '⚕️' },
  { title: 'Fellowship in Radiology', slug: 'fellowship-in-radiology', desc: 'Enhance diagnostic imaging interpretation skills and evidence-based clinical decision-making.', icon: '🩻' },
  { title: 'Fellowship in Interventional Radiology', slug: 'fellowship-in-interventional-radiology', desc: 'Develop understanding of image-guided procedures, minimally invasive interventions, and modern procedural medicine.', icon: '💉' },
  { title: 'Fellowship in Anesthesia', slug: 'fellowship-in-anesthesia', desc: 'Improve knowledge of perioperative medicine, anesthesia principles, patient safety, and critical care support.', icon: '😷' },
  { title: 'Fellowship in Spinal Cord Surgery', slug: 'fellowship-in-spinal-cord-surgery', desc: 'Advance expertise in spinal disorders, surgical planning, and evidence-based spinal care.', icon: '🦴' },
];

const READ_MORE = [
  { title: 'Fellowship in Arthroscopy', slug: 'fellowship-in-arthroscopy-arthroplasty', desc: 'Develop expertise in minimally invasive joint procedures, sports injury management, and musculoskeletal care.', icon: '🦵' },
  { title: 'Fellowship in Psychiatric Medicine', slug: 'fellowship-in-psychiatry', desc: 'Strengthen understanding of mental health disorders, psychiatric evaluation, and evidence-based patient care.', icon: '🧠' },
  { title: 'Fellowship in Pediatric Neurology', slug: 'fellowship-in-pediatric-neurology', desc: 'Enhance knowledge of childhood neurological conditions, developmental disorders, and specialized neurological management.', icon: '👶' },
  { title: 'Fellowship in Radiology', slug: 'fellowship-in-radiology', desc: 'Build skills in diagnostic imaging, radiological interpretation, and clinical decision support.', icon: '🩻' },
  { title: 'Fellowship in 2D Echocardiography', slug: 'fellowship-in-echocardiography', desc: 'Advance skills in non-invasive cardiac imaging, cardiovascular assessment, and diagnostic interpretation.', icon: '❤️' },
  { title: 'Fellowship in Interventional Radiology', slug: 'fellowship-in-interventional-radiology', desc: 'Advance expertise in image-guided procedures and minimally invasive therapeutic interventions.', icon: '💉' },
];

export default function ArthroscopyArthroplastyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />
      <div className="min-h-screen bg-white">
        <Navbar />

        {/* ── BREADCRUMB ── */}
        <nav aria-label="Breadcrumb" className="bg-[#f8faf8] border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
            <ol className="flex items-center gap-1.5 text-xs text-gray-500 flex-wrap">
              <li><Link href="/" className="hover:text-[#15401E] transition-colors">Home</Link></li>
              <li className="text-gray-300">/</li>
              <li><Link href="/programs" className="hover:text-[#15401E] transition-colors">Programs</Link></li>
              <li className="text-gray-300">/</li>
              <li className="text-[#15401E] font-medium">Fellowship in Arthroscopy and Arthroplasty</li>
            </ol>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section className="relative bg-[#15401E] overflow-hidden min-h-[320px] md:min-h-[360px]">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="/courses/arthroscopy-arthroplasty.jpg"
              alt="Fellowship in Arthroscopy and Arthroplasty"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#15401E]/95 via-[#15401E]/80 to-[#15401E]/40" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-semibold text-white/80 mb-3">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                Advanced Joint Preservation &amp; Replacement Education
              </div>

              {/* H1 */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-2">
                Fellowship in{' '}
                <span className="text-amber-400">Arthroscopy</span>{' '}
                and{' '}
                <span className="text-amber-400">Arthroplasty</span>
              </h1>

              {/* Sub-heading */}
              <p className="text-base text-white/85 font-medium mb-3 leading-snug">
                Advanced Joint Preservation, Arthroscopic Techniques, and Joint Replacement Education for Doctors
              </p>

              {/* Description */}
              <p className="text-white/70 text-sm leading-relaxed mb-5 max-w-xl">
                The <strong className="text-white">Fellowship in Arthroscopy and Arthroplasty</strong> is designed for healthcare professionals who want to strengthen expertise in sports injury management, joint reconstruction concepts, arthroplasty principles, and evidence-based orthopedic care through flexible online medical education.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-amber-400 hover:bg-amber-300 text-[#15401E] font-bold rounded-xl text-sm transition-all shadow-lg hover:shadow-xl"
                >
                  Apply Now <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/919985044993"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-xl text-sm transition-all"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── JUMP TO SECTION ── */}
        <div className="bg-[#f8faf8] border-b border-[#e8f2ea]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider shrink-0">Jump to:</span>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'Why This Training', href: '#why-heading' },
                  { label: 'Curriculum', href: '#curriculum-heading' },
                  { label: 'Flexible Learning', href: '#flexible-heading' },
                  { label: 'Who Can Apply', href: '#eligibility-heading' },
                  { label: 'Career Opportunities', href: '#career-heading' },
                  { label: 'How to Apply', href: '#apply-heading' },
                  { label: 'FAQs', href: '#faq-heading' },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:bg-[#15401E] hover:text-white hover:border-[#15401E] transition-all"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-[1fr_340px] gap-10 lg:gap-16">

            {/* ── LEFT: all sections ── */}
            <div className="space-y-16">

              {/* 1. WHY TRAINING MATTERS */}
              <section aria-labelledby="why-heading">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e8f2ea] rounded-full text-xs font-semibold text-[#15401E] mb-4">
                  Excellence Through Orthopedic Education
                </div>
                <h2 id="why-heading" className="text-2xl md:text-3xl font-bold text-[#15401E] mb-4">
                  Why Advanced Arthroscopy and Arthroplasty Training Matters
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The growing prevalence of osteoarthritis, sports injuries, degenerative joint disorders, and mobility-related conditions has increased the demand for orthopedic specialists with expertise in joint preservation and reconstruction.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  This <strong>Fellowship in Arthroscopy and Arthroplasty</strong> helps doctors strengthen understanding of arthroscopic principles, joint replacement concepts, rehabilitation strategies, and evidence-based orthopedic care through structured academic education.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Participants gain exposure to contemporary orthopedic practices that support improved patient outcomes and professional growth.
                </p>
              </section>

              {/* 2. WHAT YOU WILL LEARN */}
              <section aria-labelledby="curriculum-heading">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e8f2ea] rounded-full text-xs font-semibold text-[#15401E] mb-4">
                  Comprehensive Arthroscopy and Arthroplasty Fellowship Curriculum
                </div>
                <h2 id="curriculum-heading" className="text-2xl md:text-3xl font-bold text-[#15401E] mb-3">
                  What You Will Learn During the Fellowship
                </h2>
                <p className="text-gray-600 mb-6">
                  The fellowship curriculum focuses on modern orthopedic concepts and advanced joint care principles across 12 structured modules.
                </p>

                {/* Curriculum Accordion */}
                <h3 className="text-lg font-bold text-[#15401E] mb-4">Full Curriculum — 12 Modules</h3>
                <div className="space-y-2 mb-8">
                  {CURRICULUM.map((mod, i) => (
                    <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                      <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none bg-white hover:bg-[#f8faf8] transition-colors">
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 bg-[#15401E] text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</span>
                          <span className="font-semibold text-sm text-[#15401E]">{mod.module}</span>
                        </div>
                        <ChevronDown className="w-4 h-4 text-gray-400 shrink-0 group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="px-5 pb-4 pt-1 bg-[#f8faf8] border-t border-gray-100">
                        <ul className="space-y-1.5">
                          {mod.topics.map((t, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 bg-[#15401E] rounded-full shrink-0 mt-1.5" />
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </details>
                  ))}
                </div>

              </section>

              {/* 3. CONTINUE PRACTICE WHILE LEARNING */}
              <section aria-labelledby="flexible-heading">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e8f2ea] rounded-full text-xs font-semibold text-[#15401E] mb-4">
                  Flexible Learning for Healthcare Professionals
                </div>
                <h2 id="flexible-heading" className="text-2xl md:text-3xl font-bold text-[#15401E] mb-4">
                  Continue Clinical Practice While Advancing Arthroscopy and Arthroplasty Expertise
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The fellowship is designed for doctors balancing professional responsibilities with continuing education. Through flexible online learning, participants can continue medical practice while developing expertise in joint preservation and replacement strategies.
                </p>
                <div className="bg-[#15401E] rounded-2xl p-6 md:p-8">
                  <h3 className="text-white font-bold text-lg mb-5">Program Highlights</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      'Flexible online learning access',
                      'Recorded academic sessions',
                      'Faculty-guided discussions',
                      'Self-paced study modules',
                      'Evidence-based curriculum',
                      'Practical case-based learning',
                      'Professional-friendly structure',
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                        <span className="text-white/85 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-white/60 text-sm mt-5 pt-5 border-t border-white/10">
                    This program is especially valuable for doctors seeking advanced education in <strong className="text-white/80">arthroscopy</strong>, <strong className="text-white/80">arthroplasty</strong>, and <strong className="text-white/80">orthopedic reconstruction</strong>.
                  </p>
                </div>
              </section>

              {/* 4. WHO CAN APPLY */}
              <section aria-labelledby="eligibility-heading">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e8f2ea] rounded-full text-xs font-semibold text-[#15401E] mb-4">
                  Eligibility &amp; Professional Growth
                </div>
                <h2 id="eligibility-heading" className="text-2xl md:text-3xl font-bold text-[#15401E] mb-4">
                  Who Can Apply for the Fellowship in Arthroscopy and Arthroplasty?
                </h2>
                <p className="text-gray-600 mb-6">This fellowship program is suitable for:</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { icon: '🎓', text: 'MBBS graduates' },
                    { icon: '🦴', text: 'Orthopedic surgeons' },
                    { icon: '🩺', text: 'Orthopedic residents' },
                    { icon: '👨‍⚕️', text: 'Medical practitioners' },
                    { icon: '⚽', text: 'Sports medicine professionals' },
                    { icon: '🏥', text: 'Healthcare professionals interested in orthopedic care' },
                    { icon: '📚', text: 'Doctors seeking advanced arthroplasty education' },
                    { icon: '🧬', text: 'Clinicians managing musculoskeletal disorders' },
                    { icon: '🔬', text: 'Professionals interested in evidence-based orthopedic healthcare' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl hover:border-[#C6DFC9] hover:bg-[#f8faf8] transition-all">
                      <span className="text-2xl shrink-0">{item.icon}</span>
                      <span className="text-sm font-medium text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* 6. CAREER OPPORTUNITIES */}
              <section aria-labelledby="career-heading">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e8f2ea] rounded-full text-xs font-semibold text-[#15401E] mb-4">
                  Career Growth Through Joint Reconstruction Excellence
                </div>
                <h2 id="career-heading" className="text-2xl md:text-3xl font-bold text-[#15401E] mb-4">
                  Career Opportunities After Arthroscopy and Arthroplasty Fellowship
                </h2>
                <p className="text-gray-600 mb-6">
                  Doctors completing an <strong>Arthroscopy and Arthroplasty Fellowship</strong> often explore opportunities such as:
                </p>
                <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                  {[
                    'Arthroplasty Specialist',
                    'Joint Replacement Consultant',
                    'Orthopedic Surgeon',
                    'Joint Reconstruction Specialist',
                    'Sports Medicine Consultant',
                    'Musculoskeletal Care Professional',
                    'Clinical Educator',
                    'Academic Faculty Member',
                    'Hospital-Based Orthopedic Specialist',
                    'Multidisciplinary Orthopedic Care Team Member',
                  ].map((opp, i) => (
                    <li key={i} className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0">
                      <span className="w-6 h-6 bg-[#e8f2ea] text-[#15401E] rounded-full flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</span>
                      <span className="text-sm text-gray-700">{opp}</span>
                    </li>
                  ))}
                </ol>
              </section>

              {/* 7. SKILLS */}
              <section aria-labelledby="skills-heading">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e8f2ea] rounded-full text-xs font-semibold text-[#15401E] mb-4">
                  Advanced Orthopedic Skills Development
                </div>
                <h2 id="skills-heading" className="text-2xl md:text-3xl font-bold text-[#15401E] mb-4">
                  Skills Doctors Can Strengthen Through Fellowship Education
                </h2>
                <p className="text-gray-600 mb-6">Participants improve understanding of:</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    'Joint replacement planning',
                    'Arthroscopic procedure principles',
                    'Sports injury assessment',
                    'Ligament injury evaluation',
                    'Knee and hip replacement concepts',
                    'Rehabilitation strategies',
                    'Clinical decision-making skills',
                    'Evidence-based treatment planning',
                    'Musculoskeletal patient management',
                    'Multidisciplinary care coordination',
                    'Professional communication skills',
                    'Long-term orthopedic monitoring',
                  ].map((skill, i) => (
                    <div key={i} className="flex items-start gap-2 p-3 bg-[#f8faf8] rounded-lg border border-[#e8f2ea]">
                      <CheckCircle className="w-4 h-4 text-[#15401E] shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* 8. RELATED PROGRAMS */}
              <section aria-labelledby="related-heading">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e8f2ea] rounded-full text-xs font-semibold text-[#15401E] mb-4">
                  Integrated Specialty Learning Pathways
                </div>
                <h2 id="related-heading" className="text-2xl md:text-3xl font-bold text-[#15401E] mb-6">
                  Explore Related Fellowship Programs for Advanced Clinical Expertise
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {RELATED.map((p, i) => (
                    <Link key={i} href={`/programs/${p.slug}`} className="group flex gap-4 p-5 bg-white border border-gray-100 rounded-2xl hover:border-[#15401E]/30 hover:shadow-md transition-all">
                      <span className="text-3xl shrink-0">{p.icon}</span>
                      <div>
                        <p className="font-semibold text-[#15401E] text-sm group-hover:underline">{p.title}</p>
                        <p className="text-xs text-gray-500 mt-1 leading-relaxed">{p.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              {/* 9. HOW TO APPLY */}
              <section aria-labelledby="apply-heading">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e8f2ea] rounded-full text-xs font-semibold text-[#15401E] mb-4">
                  Easy Enrollment Process for Doctors
                </div>
                <h2 id="apply-heading" className="text-2xl md:text-3xl font-bold text-[#15401E] mb-4">
                  How to Apply for the Fellowship in Arthroscopy and Arthroplasty
                </h2>
                <p className="text-gray-600 mb-8">
                  The enrollment process is designed to be simple and convenient for healthcare professionals interested in advancing expertise in joint preservation and replacement care.
                </p>
                <div className="space-y-0 mb-8">
                  {[
                    { step: '01', title: 'Submit Your Online Enquiry', desc: 'Fill out the online application form with your basic details and medical degree information.' },
                    { step: '02', title: 'Connect with the Admissions Team', desc: 'Our team will reach out to guide you through the eligibility and enrollment process.' },
                    { step: '03', title: 'Share Academic & Professional Details', desc: 'Provide your medical qualifications and professional background for eligibility verification.' },
                    { step: '04', title: 'Complete Eligibility Verification', desc: 'Our admissions team reviews your qualifications and confirms program suitability.' },
                    { step: '05', title: 'Confirm Enrollment', desc: 'Complete enrollment formalities and secure your place in the fellowship program.' },
                    { step: '06', title: 'Receive Program Access & Begin Learning', desc: 'Get your login credentials and start your arthroscopy and arthroplasty fellowship journey.' },
                  ].map((item, i, arr) => (
                    <div key={i} className="flex gap-4 relative">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 bg-[#15401E] rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">{item.step}</div>
                        {i < arr.length - 1 && <div className="w-0.5 flex-1 bg-[#e8f2ea] my-1.5" />}
                      </div>
                      <div className="pb-6">
                        <div className="font-bold text-[#15401E] text-sm mb-1 mt-2">{item.title}</div>
                        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="/apply" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#15401E] hover:bg-[#0f2e14] text-white font-bold rounded-xl transition-all">
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://wa.me/919985044993"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.118 1.533 5.847L.057 23.493a.75.75 0 0 0 .92.92l5.713-1.473A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.74 9.74 0 0 1-4.94-1.339l-.353-.21-3.662.944.969-3.572-.229-.368A9.75 9.75 0 1 1 12 21.75z"/></svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </section>

              {/* 10. COMPARISON TABLE */}
              <section aria-labelledby="comparison-heading">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e8f2ea] rounded-full text-xs font-semibold text-[#15401E] mb-4">
                  Why Choose MedFellow Academy
                </div>
                <h2 id="comparison-heading" className="text-2xl md:text-3xl font-bold text-[#15401E] mb-6">
                  MedFellow Academy vs Other Fellowship Providers
                </h2>
                <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                  <table className="w-full text-sm min-w-[600px]">
                    <thead>
                      <tr>
                        <th className="text-left px-5 py-4 bg-[#f8faf8] text-[#15401E] font-bold border-b border-gray-200 w-[30%]">
                          Comparison Factors
                        </th>
                        <th className="text-left px-5 py-4 bg-[#15401E] text-white font-bold border-b border-[#0f2e14] w-[35%]">
                          ✅ MedFellow Academy
                        </th>
                        <th className="text-left px-5 py-4 bg-gray-50 text-gray-500 font-bold border-b border-gray-200 w-[35%]">
                          Other Fellowship Providers
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          factor: 'Program Structure',
                          medfellow: 'Structured fellowship programs with specialty-focused modules, clinical concepts, and case-based learning',
                          others: 'Program structure and learning depth may vary between providers',
                        },
                        {
                          factor: 'Clinical Learning Approach',
                          medfellow: 'Focuses on practical understanding, evidence-based care, clinical decision-making, and real-world scenarios',
                          others: 'Some programs may focus more on theoretical learning and certification',
                        },
                        {
                          factor: 'Flexible Learning',
                          medfellow: 'Designed for working doctors with flexible online access, recorded sessions, and self-paced learning',
                          others: 'Flexibility depends on the provider and course format',
                        },
                        {
                          factor: 'Specialty-Focused Training',
                          medfellow: 'Offers advanced fellowships across multiple medical specialties with dedicated curriculum planning',
                          others: 'May offer limited specialties or broader non-focused courses',
                        },
                        {
                          factor: 'Case Discussions & Mentorship',
                          medfellow: 'Includes clinical case discussions, guided learning, and faculty support',
                          others: 'Mentorship and practical case exposure may differ',
                        },
                        {
                          factor: 'Skill Development Focus',
                          medfellow: 'Helps doctors improve clinical confidence, treatment planning, and specialty knowledge',
                          others: 'Focus may vary between knowledge delivery and certificate completion',
                        },
                        {
                          factor: 'Doctor-Friendly Education',
                          medfellow: 'Allows doctors to continue practice while upgrading skills through professional-friendly programs',
                          others: 'Some courses may have fixed schedules or limited accessibility',
                        },
                        {
                          factor: 'Career Growth Support',
                          medfellow: 'Designed to enhance expertise, expand clinical capabilities, and support professional advancement',
                          others: 'Career relevance depends on curriculum quality and training approach',
                        },
                      ].map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f8faf8]'}>
                          <td className="px-5 py-4 font-semibold text-gray-800 border-b border-gray-100 align-top">
                            {row.factor}
                          </td>
                          <td className="px-5 py-4 text-[#15401E] border-b border-gray-100 align-top">
                            <div className="flex items-start gap-2">
                              <span className="text-emerald-500 font-bold shrink-0 mt-0.5">✓</span>
                              <span>{row.medfellow}</span>
                            </div>
                          </td>
                          <td className="px-5 py-4 text-gray-400 border-b border-gray-100 align-top text-xs">
                            {row.others}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 11. TESTIMONIALS */}
              <section aria-labelledby="testimonials-heading">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e8f2ea] rounded-full text-xs font-semibold text-[#15401E] mb-4">
                  Doctor Success Stories
                </div>
                <h2 id="testimonials-heading" className="text-2xl md:text-3xl font-bold text-[#15401E] mb-6">
                  Testimonials from Doctors Who Chose Fellowship Training
                </h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { quote: 'The fellowship provided excellent insights into joint replacement concepts, sports injury management, and evidence-based orthopedic care.', author: 'Dr. Rahul', role: 'Orthopedic Surgeon' },
                    { quote: 'The flexible online format allowed me to continue practice while strengthening my understanding of arthroplasty planning and rehabilitation principles.', author: 'Dr. Chaitanya', role: 'MS Orthopaedics' },
                    { quote: 'The curriculum offered structured learning in arthroscopy and arthroplasty through highly relevant case-based discussions.', author: 'Dr. Bharat', role: 'Joint Care Specialist' },
                  ].map((t, i) => (
                    <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                      <div className="flex gap-0.5 mb-4">
                        {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                      </div>
                      <p className="text-sm text-gray-600 italic leading-relaxed mb-4">"{t.quote}"</p>
                      <div>
                        <p className="font-semibold text-[#15401E] text-sm">{t.author}</p>
                        <p className="text-xs text-gray-400">{t.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 11. FAQs */}
              <section aria-labelledby="faq-heading">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e8f2ea] rounded-full text-xs font-semibold text-[#15401E] mb-4">
                  Frequently Asked Questions
                </div>
                <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-[#15401E] mb-6">
                  Arthroscopy and Arthroplasty Fellowship FAQs
                </h2>
                <div className="space-y-3">
                  {FAQS.map((faq, i) => (
                    <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                      <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none bg-white hover:bg-[#f8faf8] transition-colors">
                        <h3 className="font-semibold text-[#15401E] text-sm pr-4">{faq.q}</h3>
                        <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="px-5 pb-5 pt-3 bg-[#f8faf8] border-t border-gray-100">
                        <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* 12. READ MORE */}
              <section aria-labelledby="readmore-heading">
                <h2 id="readmore-heading" className="text-xl font-bold text-[#15401E] mb-5">Read More</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {READ_MORE.map((p, i) => (
                    <Link key={i} href={`/programs/${p.slug}`} className="group flex flex-col gap-2 p-4 bg-white border border-gray-100 rounded-xl hover:border-[#15401E]/30 hover:shadow-sm transition-all">
                      <span className="text-2xl">{p.icon}</span>
                      <p className="font-semibold text-[#15401E] text-sm group-hover:underline leading-snug">{p.title}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
                    </Link>
                  ))}
                </div>
              </section>

            </div>

            {/* ── RIGHT SIDEBAR ── */}
            <aside className="space-y-5 lg:sticky lg:top-6 self-start">

              {/* Enrollment Card */}
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="bg-[#15401E] px-6 py-5">
                  <p className="text-white font-bold text-lg">Enroll in This Fellowship</p>
                  <p className="text-white/65 text-sm mt-1">2026 intake — rolling admissions open</p>
                </div>
                <div className="px-6 py-5 border-b border-gray-100">
                  <div className="text-3xl font-extrabold text-[#15401E]">₹1,80,000</div>
                  <div className="text-xs text-gray-400 mt-1">Starting price · fully online</div>
                </div>
                <div className="px-6 py-4 space-y-3 border-b border-gray-100 text-sm">
                  {[
                    { icon: '📅', label: 'Duration', value: '12 Months' },
                    { icon: '🎓', label: 'Eligibility', value: 'MS / MD / DNB Ortho' },
                    { icon: '🏆', label: 'Certificate', value: 'Fellowship Certificate' },
                    { icon: '🗓️', label: 'Admission', value: 'Rolling Admissions', green: true },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-lg shrink-0">{row.icon}</span>
                      <div>
                        <div className="text-xs text-gray-400">{row.label}</div>
                        <div className={`font-semibold text-sm ${row.green ? 'text-emerald-600' : 'text-gray-800'}`}>{row.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-6 py-5 space-y-3">
                  <Link href="/apply" className="block w-full text-center py-3.5 bg-[#15401E] hover:bg-[#0f2e14] text-white font-bold rounded-xl transition-all text-sm">
                    Apply Now →
                  </Link>
                  <a
                    href="https://wa.me/919985044993"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 border-2 border-green-500 text-green-600 hover:bg-green-50 font-semibold rounded-xl transition-all text-sm"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.118 1.533 5.847L.057 23.493a.75.75 0 0 0 .92.92l5.713-1.473A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.74 9.74 0 0 1-4.94-1.339l-.353-.21-3.662.944.969-3.572-.229-.368A9.75 9.75 0 1 1 12 21.75z"/></svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Pricing Breakdown */}
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="px-5 py-4 border-b border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Fee Structure</p>
                </div>
                <div className="divide-y divide-gray-50">
                  {[
                    { label: 'Fully Online', price: '₹1,80,000', tag: null },
                    { label: '11 Online + 1 Clinical', price: '₹2,10,000', tag: 'Popular' },

                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between px-5 py-3 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-600">{row.label}</span>
                        {row.tag && <span className="text-[10px] font-bold bg-[#15401E] text-white px-1.5 py-0.5 rounded-full">{row.tag}</span>}
                      </div>
                      <span className="font-bold text-sm text-[#15401E]">{row.price}</span>
                    </div>
                  ))}
                </div>
                <div className="px-5 py-4 bg-emerald-50">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">💳</span>
                    <div>
                      <p className="text-xs font-semibold text-emerald-800">EMI Options Available</p>
                      <p className="text-xs text-emerald-600">0% interest · 6–12 months</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Signals */}
              <div className="bg-[#f8faf8] border border-[#e8f2ea] rounded-2xl p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Why MedFellow</p>
                <div className="space-y-3">
                  {[
                    { icon: '✅', text: 'ACTD-accredited certificate' },
                    { icon: '🏥', text: '20+ hospital partners' },
                    { icon: '👨‍🏫', text: 'Expert faculty mentors' },
                    { icon: '📱', text: 'Lifetime recorded access' },
                    { icon: '🤝', text: 'Placement assistance' },
                    { icon: '⏸️', text: 'Pause facility available' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <span>{item.icon}</span>
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>


            </aside>
          </div>
        </div>

        {/* ── FINAL CTA BANNER ── */}
        <section className="bg-[#15401E] py-14 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-xs text-white/70 font-semibold mb-5">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              🟢 Ready to Advance Your Arthroscopy and Arthroplasty Expertise?
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Apply for 2026 Intake
            </h2>
            <p className="text-white/70 text-base mb-3">MedFellow Academy</p>
            <p className="text-white/55 text-sm mb-8">
              Flexible Online Fellowship in Arthroscopy and Arthroplasty — designed for practicing doctors
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 px-8 py-4 bg-amber-400 hover:bg-amber-300 text-[#15401E] font-bold rounded-xl text-base transition-all shadow-lg"
              >
                Apply Now <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/919985044993"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-xl text-base transition-all"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

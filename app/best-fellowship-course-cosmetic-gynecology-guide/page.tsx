import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Best Fellowship in Cosmetic Gynecology: Eligibility, Fees, Syllabus & Career Scope | MedFellow",
  description:
    "Complete guide to the Fellowship in Cosmetic Gynecology — eligibility, fees, syllabus, curriculum, and career scope for doctors advancing into aesthetic and functional women's healthcare.",
  keywords: "fellowship in cosmetic gynecology, best fellowship in cosmetic gynecology, cosmetic gynecology course",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/best-fellowship-course-cosmetic-gynecology-guide/" },
  openGraph: {
    title: "Best Fellowship in Cosmetic Gynecology: Eligibility, Fees, Syllabus & Career Scope",
    description:
      "Complete guide to the Fellowship in Cosmetic Gynecology — eligibility, fees, syllabus, curriculum, and career scope for doctors.",
    type: "article",
    url: "https://www.medfellowacademy.com/best-fellowship-course-cosmetic-gynecology-guide/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Fellowship in Cosmetic Gynecology" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Fellowship in Cosmetic Gynecology: Eligibility, Fees, Syllabus & Career Scope",
    description: "Complete guide to the Fellowship in Cosmetic Gynecology for doctors.",
  },
};

const CURRICULUM_MODULES = [
  "Fundamentals of Cosmetic Gynecology",
  "Anatomy and Physiology",
  "Patient Evaluation and Counseling",
  "Non-Surgical Cosmetic Procedures",
  "Surgical Cosmetic Gynecology",
  "Urogynecology and Functional Corrections",
  "Sexual Medicine Integration",
  "Devices and Technology",
  "Perioperative Care",
  "Complications and Risk Management",
  "Clinical Training and Hands-on",
  "Practice Setup and Aesthetic Business",
];

const LEARNING_AREAS = [
  "Fundamentals of Cosmetic Gynecology",
  "Women's wellness assessment principles",
  "Functional gynecology concepts",
  "Patient counseling approaches",
  "Aesthetic gynecology principles",
  "Vaginal rejuvenation concepts",
  "Energy-based technologies overview",
  "PRP applications in women's wellness",
  "Clinical safety protocols",
  "Treatment planning principles",
  "Complication prevention approaches",
  "Patient selection concepts",
  "Clinical case discussions",
  "Evidence-based women's healthcare",
  "Multidisciplinary care coordination",
  "Risk assessment and clinical decision-making",
];

const PROGRAM_HIGHLIGHTS = [
  "Flexible online learning access",
  "Recorded academic sessions",
  "Faculty-guided discussions",
  "Self-paced study modules",
  "Evidence-based curriculum",
  "Practical case-based learning",
  "Professional-friendly structure",
];

const PREPARATION_POINTS = [
  "Comprehensive patient assessment and medical history evaluation",
  "Clinical examination and suitability assessment",
  "Discussion of treatment expectations and goals",
  "Counseling regarding procedural benefits and limitations",
  "Understanding safety protocols and informed consent processes",
  "Review of lifestyle factors and pre-procedure recommendations",
  "Risk assessment and individualized treatment planning",
  "Post-procedure care and recovery guidance concepts",
];

const CONFIDENCE_AREAS = [
  "Patient assessment principles",
  "Women's wellness approaches",
  "Treatment planning concepts",
  "Clinical communication skills",
  "Safety protocols",
  "Functional gynecology concepts",
  "Clinical decision-making skills",
  "Evidence-based treatment planning",
  "Multidisciplinary care coordination",
  "Professional communication",
  "Long-term patient management",
  "Quality improvement initiatives",
];

const ELIGIBILITY = [
  "MBBS graduates",
  "MD Obstetrics & Gynecology doctors",
  "MS Obstetrics & Gynecology professionals",
  "Practicing gynecologists",
  "Women's healthcare specialists",
  "Medical practitioners interested in aesthetic gynecology",
  "Doctors seeking advanced fellowship education",
  "Clinicians involved in women's health services",
  "Professionals interested in evidence-based gynecology",
];

const CAREER_OPPORTUNITIES = [
  "Cosmetic Gynecology Specialist",
  "Women's Wellness Consultant",
  "Clinical Gynecology Specialist",
  "Women's Healthcare Professional",
  "Aesthetic Practice Consultant",
  "Hospital-Based Women's Health Specialist",
  "Academic Faculty Member",
  "Medical Educator",
  "Clinical Research Professional",
  "Healthcare Quality Specialist",
];

const SKILLS = [
  "Women's wellness assessment",
  "Clinical communication skills",
  "Patient counseling approaches",
  "Evidence-based decision making",
  "Treatment planning strategies",
  "Risk assessment principles",
  "Functional gynecology concepts",
  "Professional communication",
  "Multidisciplinary coordination",
  "Quality improvement initiatives",
  "Clinical case analysis",
  "Long-term care planning",
];

const APPLY_STEPS = [
  "Submit your online enquiry",
  "Connect with admissions team",
  "Share academic and professional details",
  "Complete eligibility verification",
  "Confirm enrollment",
  "Receive program access and begin learning",
];

const RELATED_FELLOWSHIPS = [
  { name: "Fellowship in Reproductive Medicine", slug: "fellowship-in-reproductive-medicine" },
  { name: "Fellowship in Gynecology & Obstetrics", slug: "fellowship-in-gynecology-obstetrics" },
  { name: "Fellowship in Laparoscopy & Hysteroscopy", slug: "fellowship-in-laparoscopy-hysteroscopy" },
];

const FAQS = [
  {
    q: "Is this Cosmetic Gynecology Fellowship suitable for practicing doctors?",
    a: "Yes. The program is designed for healthcare professionals who want to improve their Cosmetic Gynecology knowledge while continuing medical practice.",
  },
  {
    q: "Does the fellowship cover women's wellness and aesthetic gynecology concepts?",
    a: "Yes. The curriculum includes aesthetic gynecology principles, women's wellness approaches, treatment planning, and patient assessment concepts.",
  },
  {
    q: "Will I learn patient counseling and treatment planning approaches?",
    a: "Yes. Participants gain structured knowledge in communication strategies, treatment planning concepts, safety principles, and patient-centered care.",
  },
  {
    q: "Is the program delivered online?",
    a: "Yes. The fellowship follows a flexible online learning model designed for healthcare professionals.",
  },
  {
    q: "Does MedFellow Academy provide certification?",
    a: "Yes. Eligible participants receive certification after successful completion of fellowship requirements.",
  },
  {
    q: "Why do doctors choose MedFellow Academy?",
    a: "Doctors choose MedFellow Academy for flexible learning, expert faculty support, structured curriculum, and career-focused fellowship education.",
  },
];

export default function CosmeticGynecologyGuidePage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Breadcrumb + Hero */}
      <section className="border-b border-[#E5E7EB] py-10 md:py-14">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-text-secondary mb-6">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <span>Best Fellowship in Cosmetic Gynecology</span>
          </div>

          <span className="section-label">Future of Women&apos;s Wellness Specialization</span>
          <h1 className="section-title mt-2 mb-4 !text-3xl md:!text-4xl">
            Best Fellowship Course in Cosmetic Gynecology: Advanced Aesthetic Gynecology, Women&apos;s
            Wellness, and Functional Gynecological Education for Doctors
          </h1>

          <p className="text-[1rem] text-text-secondary leading-relaxed mb-4">
            Women&apos;s healthcare continues to evolve with increasing focus on wellness, functional
            restoration, and aesthetic concerns. Cosmetic Gynecology has emerged as an important specialty
            area that combines clinical expertise with modern procedural approaches designed to support
            women&apos;s health and quality of life.
          </p>
          <p className="text-[1rem] text-text-secondary leading-relaxed mb-4">
            The Fellowship in Cosmetic Gynecology is designed for doctors seeking to strengthen knowledge in
            aesthetic gynecology concepts, patient assessment principles, women&apos;s wellness procedures,
            and evidence-based clinical practice through flexible medical education.
          </p>
          <p className="text-[1rem] text-text-secondary leading-relaxed mb-8">
            This Cosmetic Gynecology Fellowship supports doctors interested in expanding clinical expertise
            while continuing professional practice. The program combines modern concepts, structured
            academic education, and practical case-based discussions designed to support advanced
            women&apos;s healthcare.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#15401E] text-white rounded-md font-semibold text-[0.9375rem] hover:bg-[#0f2e15] transition-colors"
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white border border-[#D1D5DB] text-[#15401E] rounded-md font-semibold text-[0.9375rem] hover:border-[#15401E] transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-4">

        {/* What Is Cosmetic Gynecology */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Understanding Modern Women&apos;s Wellness</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mt-2 mb-4">What Is Cosmetic Gynecology?</h2>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Cosmetic Gynecology is a specialized field within women&apos;s healthcare that focuses on
            aesthetic enhancement, functional restoration, and overall intimate wellness. It combines
            gynecological expertise with modern clinical approaches to address concerns related to comfort,
            confidence, and quality of life while supporting patient-centered care.
          </p>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed">
            As awareness of women&apos;s wellness continues to increase, Cosmetic Gynecology has become an
            evolving area of practice for healthcare professionals. The field emphasizes individualized
            patient assessment, evidence-based treatment planning, and modern healthcare concepts that help
            improve patient experiences and support comprehensive women&apos;s health management.
          </p>
        </section>

        {/* What Does Our Fellowship Cover */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Comprehensive Fellowship Learning</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mt-2 mb-4">What Does Our Cosmetic Gynecology Fellowship Cover?</h2>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-6">
            MedFellow Academy provides a comprehensive Cosmetic Gynecology Fellowship curriculum designed to
            deliver structured theoretical and procedural learning across 12 modules — from foundational
            anatomy and patient evaluation through surgical and non-surgical procedures, urogynecology,
            complication management, and practice setup.
          </p>
          <div className="grid sm:grid-cols-2 gap-2.5">
            {CURRICULUM_MODULES.map((m, i) => (
              <div key={m} className="flex items-start gap-2.5 card p-3">
                <span className="text-[0.75rem] font-bold text-[#15401E] bg-[#e8f2ea] rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-[0.875rem] text-[#374151]">{m}</span>
              </div>
            ))}
          </div>
          <Link href="/courses/fellowship-in-cosmetic-gynecology" className="inline-block mt-5 text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            View the full syllabus, fees, and duration →
          </Link>
        </section>

        {/* Why Advanced Training Matters */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Excellence Through Women&apos;s Healthcare Education</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mt-2 mb-4">Why Advanced Cosmetic Gynecology Training Matters</h2>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Modern healthcare increasingly requires physicians to understand aesthetic concerns, patient
            expectations, functional restoration principles, and evolving women&apos;s wellness approaches.
          </p>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            This Cosmetic Gynecology Training helps doctors strengthen understanding of aesthetic gynecology
            concepts, clinical assessment principles, patient counseling strategies, and evidence-based
            practice through structured academic education.
          </p>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed">
            Participants gain exposure to contemporary women&apos;s healthcare practices that support
            patient-centered care and professional growth.
          </p>
        </section>

        {/* What You Will Learn */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Comprehensive Cosmetic Gynecology Fellowship Curriculum</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mt-2 mb-4">What You Will Learn During the Fellowship</h2>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            The fellowship curriculum focuses on modern Cosmetic Gynecology concepts and advanced
            women&apos;s wellness principles. Key learning areas include:
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {LEARNING_AREAS.map((a) => (
              <div key={a} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{a}</span>
              </div>
            ))}
          </div>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mt-5">
            Doctors interested in Cosmetic Gynecology Fellowship, Cosmetic Gynecology Course, or Aesthetic
            Gynecology Fellowship can improve clinical confidence through specialty-focused academic
            learning.
          </p>
        </section>

        {/* Flexible Learning */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Structured Academic Learning Journey</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mt-2 mb-1">Your Fellowship Learning Roadmap</h2>
          <p className="text-[0.8125rem] text-text-secondary mb-6">Flexible Learning for Healthcare Professionals</p>
          <h3 className="text-xl font-bold text-[#111827] mb-4">Continue Clinical Practice While Advancing Cosmetic Gynecology Expertise</h3>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            The fellowship is designed for doctors balancing professional responsibilities with continuing
            education. Through flexible online learning, participants can continue medical practice while
            strengthening expertise in Cosmetic Gynecology.
          </p>
          <p className="text-[0.875rem] font-semibold text-[#111827] mb-3">Program Highlights</p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-5">
            {PROGRAM_HIGHLIGHTS.map((h) => (
              <div key={h} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{h}</span>
              </div>
            ))}
          </div>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed">
            This program is valuable for doctors seeking advanced education in Cosmetic Gynecology for
            Gynecologists.
          </p>
        </section>

        {/* Preparation */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Patient Preparation &amp; Clinical Readiness</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mt-2 mb-4">How Do You Prepare for Cosmetic Gynecology Surgery?</h2>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Proper preparation plays an important role in achieving safe procedures and supporting better
            patient experiences. Cosmetic Gynecology involves individualized evaluation, and preparation may
            vary depending on patient history, treatment goals, and procedural requirements.
          </p>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Doctors participating in the fellowship gain understanding of preparation principles commonly
            involved in cosmetic gynecology procedures, including:
          </p>
          <div className="space-y-2">
            {PREPARATION_POINTS.map((p) => (
              <div key={p} className="flex items-start gap-2.5 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{p}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Build Confidence */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Trust Through Evidence-Based Women&apos;s Healthcare</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mt-2 mb-4">Build Confidence in Modern Cosmetic Gynecology Practice</h2>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Advanced fellowship education helps doctors strengthen their understanding of modern aesthetic
            and functional women&apos;s healthcare while improving patient communication and evidence-based
            clinical decision-making. As patient expectations and treatment approaches continue to evolve,
            gynecologists require structured education that supports confident clinical practice and
            informed treatment planning.
          </p>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            The fellowship is designed to provide comprehensive learning that helps doctors develop
            practical knowledge across important areas of Cosmetic Gynecology and women&apos;s wellness
            care. The fellowship supports expertise development in:
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {CONFIDENCE_AREAS.map((a) => (
              <div key={a} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{a}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Eligibility */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Eligibility &amp; Professional Growth</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mt-2 mb-4">Who Can Apply for the Fellowship in Cosmetic Gynecology?</h2>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">This fellowship program is suitable for:</p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {ELIGIBILITY.map((e) => (
              <div key={e} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{e}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Related Fellowships */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Integrated Specialty Learning Pathways</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mt-2 mb-5">Explore Related Fellowship Programs for Advanced Clinical Expertise</h2>
          <div className="grid sm:grid-cols-3 gap-3">
            {RELATED_FELLOWSHIPS.map((f) => (
              <Link
                key={f.slug}
                href={`/courses/${f.slug}`}
                className="card p-4 hover:shadow-md transition-all group"
              >
                <span className="text-[0.875rem] font-semibold text-[#111827] group-hover:text-[#15401E]">{f.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Career Growth Through Women&apos;s Healthcare Excellence</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mt-2 mb-4">Career Opportunities After Cosmetic Gynecology Fellowship</h2>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            Doctors completing a Cosmetic Gynecology Fellowship often explore opportunities such as:
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {CAREER_OPPORTUNITIES.map((c) => (
              <div key={c} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{c}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Advanced Clinical Skills Development</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mt-2 mb-4">Skills Doctors Can Strengthen Through Fellowship Education</h2>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">Participants improve understanding of:</p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {SKILLS.map((s) => (
              <div key={s} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{s}</span>
              </div>
            ))}
          </div>
        </section>

        {/* How to Apply */}
        <section className="py-8">
          <span className="section-label">Easy Enrollment Process for Doctors</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mt-2 mb-5">How to Apply for the Fellowship in Cosmetic Gynecology</h2>
          <div className="space-y-3 mb-5">
            {APPLY_STEPS.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#15401E] text-white text-[0.8125rem] font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <span className="text-[0.9375rem] text-[#374151]">{step}</span>
              </div>
            ))}
          </div>
          <p className="text-[0.875rem] text-text-secondary mb-6">
            The admissions team provides support throughout the enrollment process.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#15401E] text-white rounded-md font-semibold text-[0.9375rem] hover:bg-[#0f2e15] transition-colors"
          >
            Apply Now
          </Link>
        </section>
      </div>

      <FAQ faqs={FAQS} />

      <Footer />
    </div>
  );
}

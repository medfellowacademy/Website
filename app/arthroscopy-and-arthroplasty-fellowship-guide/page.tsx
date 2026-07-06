import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import TopicClusterLinks from "@/components/TopicClusterLinks";
import {
  Star,
  BookOpen,
  GraduationCap,
  Award,
  ListChecks,
  Clock,
  ClipboardList,
  ShieldCheck,
  Users,
  Link2,
  Briefcase,
  Target,
  ClipboardCheck,
  Quote,
} from "lucide-react";

const CLUSTER_LINKS = [
  { label: "Best Fellowship Course in Arthroscopy and Arthroplasty (Guide)", href: "/arthroscopy-and-arthroplasty-fellowship-guide", type: "guide" as const },
  { label: "Arthroscopy vs Arthroplasty Fellowship: Which Should You Choose?", href: "/blog/arthroscopy-vs-arthroplasty-fellowship", type: "blog" as const },
  { label: "Career Scope After Fellowship in Arthroscopy and Arthroplasty", href: "/blog/career-scope-after-fellowship-in-arthroscopy-and-arthroplasty", type: "blog" as const },
  { label: "Arthroplasty Fellowship Eligibility, Syllabus, Duration & Admission Guide", href: "/blog/arthroplasty-fellowship-eligibility-syllabus-duration-admission", type: "blog" as const },
];

function SectionHeading({ icon: Icon, children }: { icon: React.ComponentType<{ className?: string }>; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mt-2 mb-4">
      <span className="w-9 h-9 rounded-full bg-[#e8f2ea] text-[#15401E] flex items-center justify-center shrink-0">
        <Icon className="w-[18px] h-[18px]" />
      </span>
      <h2 className="text-2xl md:text-3xl font-bold text-[#111827]">{children}</h2>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Best Fellowship Course in Arthroscopy and Arthroplasty: Complete Guide for Orthopedic Surgeons | MedFellow",
  description:
    "Complete guide to the Fellowship in Arthroscopy and Arthroplasty — eligibility, curriculum, career scope, and how orthopedic surgeons can strengthen long-term career growth.",
  keywords: "best fellowship in arthroscopy and arthroplasty, fellowship in arthroplasty, arthroscopy fellowship course",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/arthroscopy-and-arthroplasty-fellowship-guide/" },
  openGraph: {
    title: "Best Fellowship Course in Arthroscopy and Arthroplasty: Complete Guide for Orthopedic Surgeons",
    description:
      "Complete guide to the Fellowship in Arthroscopy and Arthroplasty — eligibility, curriculum, and career scope for orthopedic surgeons.",
    type: "article",
    url: "https://www.medfellowacademy.com/arthroscopy-and-arthroplasty-fellowship-guide/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Fellowship in Arthroscopy and Arthroplasty" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Fellowship Course in Arthroscopy and Arthroplasty: Complete Guide for Orthopedic Surgeons",
    description: "Complete guide to the Fellowship in Arthroscopy and Arthroplasty for orthopedic surgeons.",
  },
};

const CURRICULUM_MODULES = [
  "Foundations of Arthroscopy",
  "Knee Arthroscopy",
  "Shoulder Arthroscopy",
  "Hip and Ankle Arthroscopy",
  "Advanced Sports Medicine Concepts",
  "Core Arthroplasty Principles",
  "Total Knee Arthroplasty",
  "Total Hip Arthroplasty",
  "Shoulder Arthroplasty",
  "Complication Management",
  "Rehabilitation and Outcomes",
  "Integrated Practice and Research",
];

const LEARNING_AREAS = [
  "Fundamentals of arthroscopy and arthroplasty",
  "Orthopedic anatomy review",
  "Sports injury assessment principles",
  "Knee arthroscopy training concepts",
  "Shoulder arthroscopy techniques",
  "Ligament injury management",
  "Cartilage preservation concepts",
  "Hip replacement education",
  "Total knee replacement concepts",
  "Patient evaluation methods",
  "Rehabilitation strategies",
  "Evidence-based orthopedic practice",
  "Clinical decision-making approaches",
  "Risk assessment principles",
  "Case-based orthopedic discussions",
  "Multidisciplinary care coordination",
  "Complication prevention approaches",
];

const PROGRAM_HIGHLIGHTS = [
  "Flexible online learning access",
  "Recorded academic sessions",
  "Faculty-guided discussions",
  "Self-paced study modules",
  "Evidence-based curriculum",
  "Practical case discussions",
  "Professional-friendly learning structure",
  "Continuous academic support",
];

const PREPARATION_POINTS = [
  "Comprehensive orthopedic assessment principles",
  "Clinical examination approaches",
  "Imaging interpretation concepts",
  "Patient communication strategies",
  "Treatment planning frameworks",
  "Evidence-based decision-making",
  "Rehabilitation considerations",
  "Clinical documentation practices",
  "Long-term patient outcome evaluation",
];

const CONFIDENCE_AREAS = [
  "Patient assessment principles",
  "Treatment planning concepts",
  "Clinical communication skills",
  "Sports medicine approaches",
  "Rehabilitation concepts",
  "Diagnostic interpretation",
  "Evidence-based practice",
  "Multidisciplinary collaboration",
  "Professional communication",
  "Long-term orthopedic care planning",
  "Clinical quality improvement principles",
];

const ELIGIBILITY = [
  "MS Orthopedics graduates",
  "DNB Orthopedics specialists",
  "Practicing orthopedic surgeons",
  "Sports medicine professionals",
  "Doctors pursuing orthopedic subspecialization",
  "Healthcare professionals seeking advanced orthopedic education",
  "Clinicians involved in orthopedic care",
  "Doctors interested in minimally invasive orthopedic procedures",
  "Professionals seeking structured fellowship education",
];

const CAREER_OPPORTUNITIES = [
  "Orthopedic Consultant",
  "Sports Medicine Specialist",
  "Joint Replacement Specialist",
  "Orthopedic Hospital Specialist",
  "Clinical Educator",
  "Medical Faculty Member",
  "Research Professional",
  "Orthopedic Practice Consultant",
  "Healthcare Quality Specialist",
  "Academic Contributor",
  "Clinical Training Professional",
];

const SKILLS = [
  "Orthopedic patient assessment",
  "Clinical communication skills",
  "Evidence-based decision-making",
  "Diagnostic interpretation",
  "Treatment planning strategies",
  "Rehabilitation approaches",
  "Risk assessment principles",
  "Professional communication",
  "Multidisciplinary coordination",
  "Clinical case analysis",
  "Long-term care planning",
  "Orthopedic procedural understanding",
];

const APPLY_STEPS = [
  "Submit your online enquiry",
  "Connect with the admissions team",
  "Share academic and professional details",
  "Complete eligibility verification",
  "Receive admission guidance",
  "Confirm enrollment",
  "Receive learning platform access and begin training",
];

const RELATED_FELLOWSHIPS = [
  { name: "Fellowship in Orthopedics", slug: "fellowship-in-orthopedics" },
  { name: "Fellowship in Spine Surgery", slug: "fellowship-in-spine-surgery" },
  { name: "Fellowship in Pain Management", slug: "fellowship-in-pain-management" },
];

const TESTIMONIALS = [
  {
    name: "Dr. Rahul Mehta",
    role: "Orthopedic Surgeon",
    text: "The structured learning modules and case discussions improved my understanding of sports injuries and orthopedic decision-making. The fellowship helped me strengthen my confidence in modern orthopedic practice.",
  },
  {
    name: "Dr. Arjun Nair",
    role: "Consultant Orthopedic Specialist",
    text: "The curriculum was relevant to day-to-day orthopedic practice and provided practical insights into joint preservation and replacement concepts.",
  },
  {
    name: "Dr. Karthik Reddy",
    role: "Orthopedic Consultant",
    text: "The flexibility of the program allowed me to continue my hospital responsibilities while developing additional orthopedic expertise.",
  },
];

const FAQS = [
  {
    q: "Is this fellowship suitable for practicing orthopedic doctors?",
    a: "Yes. The fellowship is designed for doctors who want to strengthen orthopedic knowledge and continue clinical responsibilities simultaneously.",
  },
  {
    q: "What does an arthroscopy fellowship course include?",
    a: "An arthroscopy fellowship course commonly includes sports injury concepts, knee arthroscopy training, shoulder arthroscopy techniques, patient assessment methods, rehabilitation principles, and case-based learning.",
  },
  {
    q: "What is covered in a fellowship in arthroplasty?",
    a: "A fellowship in arthroplasty generally includes joint replacement principles, implant concepts, rehabilitation approaches, patient selection methods, and treatment planning frameworks.",
  },
  {
    q: "Can I continue clinical practice during the program?",
    a: "Yes. Flexible learning pathways are designed to help doctors continue professional responsibilities while pursuing additional education.",
  },
  {
    q: "Does the fellowship include case discussions?",
    a: "Yes. Participants are exposed to structured case discussions and practical orthopedic learning approaches.",
  },
  {
    q: "Does MedFellow Academy provide certification?",
    a: "Yes. Eligible participants receive certification after successfully completing fellowship requirements.",
  },
  {
    q: "What is the duration of an Arthroscopy and Arthroplasty Fellowship course?",
    a: "Most fellowship programs are completed in 12 months, although the duration may differ based on the curriculum and training format.",
  },
  {
    q: "Is a Fellowship in Arthroscopy and Arthroplasty worth it?",
    a: "Yes. For orthopedic surgeons aiming to specialize in sports injuries, minimally invasive surgery, and joint replacement procedures, a fellowship can strengthen clinical skills, improve employability, and support long-term career growth.",
  },
];

export default function ArthroscopyArthroplastyGuidePage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Breadcrumb + Hero */}
      <section className="border-b border-[#E5E7EB] py-10 md:py-14">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-text-secondary mb-6">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <span>Fellowship in Arthroscopy and Arthroplasty</span>
          </div>

          <span className="section-label">Orthopedic Career Advancement</span>
          <h1 className="section-title mt-2 mb-4 !text-3xl md:!text-4xl">
            Fellowship in Arthroscopy and Arthroplasty: Complete Guide
          </h1>

          <p className="text-[1rem] text-text-secondary leading-relaxed mb-4">
            Orthopedic practice is evolving rapidly with increasing demand for minimally invasive
            procedures, sports injury treatment, and advanced joint reconstruction approaches. Modern
            healthcare environments increasingly seek orthopedic specialists with focused expertise beyond
            conventional surgical training.
          </p>
          <p className="text-[1rem] text-text-secondary leading-relaxed mb-4">
            The growing demand for specialized orthopedic care has encouraged many surgeons to pursue the
            best fellowship in arthroscopy and arthroplasty to strengthen clinical knowledge and support
            long-term professional development. A structured arthroscopy fellowship course provides focused
            education in sports injury assessment, minimally invasive concepts, and joint preservation
            strategies, while a fellowship in arthroplasty strengthens understanding of joint replacement
            planning, rehabilitation principles, and patient-centered orthopedic care.
          </p>
          <p className="text-[1rem] text-text-secondary leading-relaxed mb-8">
            This guide helps orthopedic surgeons understand fellowship pathways, curriculum structures,
            eligibility requirements, clinical skills development, and long-term career opportunities.
          </p>

          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
            <Image
              src="/courses/arthroscopy-arthroplasty.jpg"
              alt="Fellowship in Arthroscopy and Arthroplasty"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>

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

      <div className="container-custom max-w-6xl py-4">
      <div className="grid lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2">

        {/* What Is Arthroscopy and Arthroplasty */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Orthopedic Subspecialization Pathway</span>
          <SectionHeading icon={BookOpen}>What Is Arthroscopy and Arthroplasty?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Arthroscopy and Arthroplasty are specialized branches of orthopedic practice focused on
            restoring mobility, reducing pain, and improving patient function through advanced treatment
            approaches.
          </p>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Arthroscopy primarily focuses on minimally invasive techniques that help evaluate and manage
            joint-related conditions through small surgical access methods and specialized instruments.
          </p>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed">
            Arthroplasty focuses on restoring damaged joints through reconstruction and replacement
            approaches designed to improve long-term joint function and quality of life. As healthcare
            systems increasingly emphasize patient outcomes and faster recovery approaches, these areas
            continue to become highly important within orthopedic practice.
          </p>
        </section>

        {/* What Does Our Fellowship Cover */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Comprehensive Fellowship Learning</span>
          <SectionHeading icon={GraduationCap}>What Does Our Arthroscopy and Arthroplasty Fellowship Cover?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-6">
            MedFellow Academy provides a comprehensive fellowship curriculum designed to support structured
            theoretical and clinical learning — phased across arthroscopy and sports medicine, arthroplasty
            and joint replacement, and integrated practice with research.
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
          <Link href="/courses/fellowship-in-arthroscopy-and-arthroplasty" className="inline-block mt-5 text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            View the full syllabus, fees, and duration →
          </Link>
        </section>

        {/* Why Advanced Training Matters */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Excellence Through Orthopedic Education</span>
          <SectionHeading icon={Award}>Why Advanced Arthroscopy and Arthroplasty Training Matters</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Modern orthopedic practice increasingly requires physicians to understand sports injuries,
            degenerative joint conditions, minimally invasive techniques, and evolving treatment approaches.
          </p>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            An arthroscopy fellowship course helps doctors improve understanding of clinical evaluation
            methods, patient selection principles, rehabilitation planning, and evidence-based orthopedic
            care. Participants gain exposure to structured learning pathways that support professional
            growth and contemporary orthopedic practice.
          </p>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed">
            Doctors pursuing the best fellowship in arthroscopy and arthroplasty often seek educational
            pathways that improve clinical confidence while supporting future specialization goals.
          </p>
        </section>

        {/* What You Will Learn */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Comprehensive Orthopedic Fellowship Curriculum</span>
          <SectionHeading icon={ListChecks}>What You Will Learn During the Fellowship</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            The fellowship curriculum focuses on modern orthopedic concepts, minimally invasive approaches,
            and advanced joint management principles designed for contemporary orthopedic practice. Key
            learning areas include:
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
            Doctors interested in an arthroscopy fellowship course or fellowship in arthroplasty can
            strengthen clinical understanding through specialty-focused education.
          </p>
        </section>

        {/* Flexible Learning */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Flexible Learning for Healthcare Professionals</span>
          <SectionHeading icon={Clock}>Continue Clinical Practice While Advancing Orthopedic Expertise</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            The fellowship is designed for doctors balancing clinical responsibilities with continuing
            education requirements. Through flexible learning pathways, participants can continue patient
            care while expanding orthopedic knowledge.
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
            This fellowship pathway is valuable for doctors seeking advanced orthopedic learning without
            interrupting ongoing clinical responsibilities.
          </p>
        </section>

        {/* Preparation */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Clinical Preparation &amp; Readiness</span>
          <SectionHeading icon={ClipboardList}>How Do Orthopedic Surgeons Prepare for Advanced Fellowship Training?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Successful fellowship learning begins with understanding the foundational knowledge and
            practical concepts necessary for advanced orthopedic education. Doctors participating in
            fellowship education commonly strengthen understanding of:
          </p>
          <div className="space-y-2">
            {PREPARATION_POINTS.map((p) => (
              <div key={p} className="flex items-start gap-2.5 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{p}</span>
              </div>
            ))}
          </div>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mt-5">
            Preparation before advanced orthopedic education helps improve learning effectiveness and
            practical application.
          </p>
        </section>

        {/* Build Confidence */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Trust Through Evidence-Based Orthopedic Learning</span>
          <SectionHeading icon={ShieldCheck}>Build Confidence in Modern Orthopedic Practice</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Advanced fellowship education helps doctors improve understanding of modern orthopedic concepts
            while strengthening clinical reasoning and patient-centered care approaches. As healthcare
            expectations continue changing, orthopedic surgeons increasingly require structured education
            supporting confident and informed clinical decisions.
          </p>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">The fellowship supports development in:</p>
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
          <SectionHeading icon={Users}>Who Can Apply for the Fellowship in Arthroscopy and Arthroplasty?</SectionHeading>
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
          <SectionHeading icon={Link2}>Explore Related Fellowship Programs for Advanced Clinical Expertise</SectionHeading>
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
          <span className="section-label">Career Growth Through Orthopedic Excellence</span>
          <SectionHeading icon={Briefcase}>Career Opportunities After Arthroscopy and Arthroplasty Fellowship</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            Doctors completing an orthopedic fellowship often explore opportunities such as:
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
          <SectionHeading icon={Target}>Skills Doctors Can Strengthen Through Fellowship Education</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">Participants commonly improve understanding of:</p>
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
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Easy Enrollment Process for Doctors</span>
          <SectionHeading icon={ClipboardCheck}>How to Apply for the Fellowship in Arthroscopy and Arthroplasty</SectionHeading>
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
            The admissions team provides support throughout the enrollment journey and helps simplify the
            process for doctors seeking advanced orthopedic education.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#15401E] text-white rounded-md font-semibold text-[0.9375rem] hover:bg-[#0f2e15] transition-colors"
          >
            Apply Now
          </Link>
        </section>

        {/* Testimonials */}
        <section className="py-8">
          <span className="section-label">Doctor Success Stories</span>
          <SectionHeading icon={Quote}>Testimonials from Doctors Who Chose Fellowship Training</SectionHeading>
          <div className="grid sm:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="card p-5">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-[0.875rem] text-[#374151] leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <p className="text-[0.875rem] font-semibold text-[#111827]">{t.name}</p>
                <p className="text-[0.8125rem] text-text-secondary">{t.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="lg:col-span-1">
        <TopicClusterLinks title="Arthroscopy & Arthroplasty Resources" links={CLUSTER_LINKS} />
      </div>
      </div>
      </div>

      <FAQ faqs={FAQS} />

      <Footer />
    </div>
  );
}

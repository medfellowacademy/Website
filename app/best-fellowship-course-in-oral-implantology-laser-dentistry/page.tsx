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
  ListChecks,
  Clock,
  ShieldCheck,
  Users,
  Award,
  Briefcase,
  Sparkles,
  BarChart3,
  Quote,
} from "lucide-react";

const CLUSTER_LINKS = [
  { label: "Best Fellowship Course in Oral Implantology & Laser Dentistry (Guide)", href: "/best-fellowship-course-in-oral-implantology-laser-dentistry", type: "guide" as const },
  { label: "How to Choose an Oral Implantology & Laser Dentistry Fellowship", href: "/blog/how-to-choose-an-oral-implantology-laser-dentistry-fellowship-course", type: "blog" as const },
  { label: "Questions to Ask Before Joining an Oral Implantology & Laser Dentistry Fellowship", href: "/blog/questions-to-ask-before-joining-an-oral-implantology-laser-dentistry-fellowship", type: "blog" as const },
  { label: "Online vs Offline Oral Implantology & Laser Dentistry Fellowship", href: "/blog/online-vs-offline-oral-implantology-laser-dentistry-fellowship", type: "blog" as const },
  { label: "Is an Oral Implantology & Laser Dentistry Fellowship Worth It?", href: "/blog/is-an-oral-implantology-laser-dentistry-fellowship-worth-it", type: "blog" as const },
  { label: "Career Opportunities After an Oral Implantology & Laser Dentistry Fellowship", href: "/blog/career-opportunities-after-an-oral-implantology-laser-dentistry-fellowship", type: "blog" as const },
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
  title: "Best Fellowship Course in Oral Implantology & Laser Dentistry | MedFellow Academy",
  description:
    "Compare the best Fellowship Course in Oral Implantology & Laser Dentistry. Explore eligibility, curriculum, career opportunities, fees, and flexible online learning.",
  keywords: "best fellowship course in oral implantology & laser dentistry, fellowship in oral implantology & laser dentistry, oral implantology fellowship, laser dentistry fellowship, online oral implantology fellowship",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/best-fellowship-course-in-oral-implantology-laser-dentistry/" },
  openGraph: {
    title: "Best Fellowship Course in Oral Implantology & Laser Dentistry",
    description:
      "Compare the best Fellowship Course in Oral Implantology & Laser Dentistry. Explore eligibility, curriculum, career opportunities, fees, and flexible online learning.",
    type: "article",
    url: "https://www.medfellowacademy.com/best-fellowship-course-in-oral-implantology-laser-dentistry/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Fellowship in Oral Implantology & Laser Dentistry" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Fellowship Course in Oral Implantology & Laser Dentistry",
    description: "Compare the best Fellowship Course in Oral Implantology & Laser Dentistry.",
  },
};

const CURRICULUM_GROUPS = [
  { title: "Implant Dentistry Foundations", items: ["Implant biology", "Osseointegration principles", "Patient assessment", "Treatment planning"] },
  { title: "Surgical Implant Concepts", items: ["Implant placement principles", "Bone quality assessment", "Implant complications", "Risk evaluation"] },
  { title: "Prosthetic Implant Dentistry", items: ["Prosthetic planning", "Occlusion", "Restoration concepts", "Long-term maintenance"] },
  { title: "Laser Dentistry", items: ["Soft tissue lasers", "Hard tissue applications", "Laser safety", "Clinical indications"] },
  { title: "Digital Dentistry", items: ["CBCT interpretation", "Digital smile planning", "Guided implant concepts", "Digital workflow"] },
  { title: "Clinical Case Discussions", items: ["Evidence-based treatment planning", "Implant complications", "Patient communication", "Ethical practice"] },
];

const BENEFITS = [
  "Understand modern implant dentistry concepts",
  "Learn evidence-based treatment planning",
  "Improve patient assessment skills",
  "Explore laser-assisted dental procedures",
  "Build confidence in implant case selection",
  "Strengthen clinical decision making",
  "Understand digital implant workflows",
  "Stay updated with advances in implantology",
  "Continue learning while maintaining clinical practice",
];

const PROGRAM_HIGHLIGHTS = [
  "Flexible online learning",
  "Weekend sessions",
  "Recorded lectures",
  "Structured curriculum",
  "Faculty mentorship",
  "Case-based discussions",
  "Continuous academic support",
  "Professional-friendly schedule",
];

const SKILLS = [
  "Implant treatment planning",
  "Implant case selection",
  "Digital diagnostics",
  "CBCT interpretation",
  "Laser-assisted procedures",
  "Soft tissue management",
  "Prosthetic planning",
  "Clinical documentation",
  "Patient communication",
  "Risk assessment",
  "Evidence-based decision making",
  "Long-term implant maintenance",
];

const ELIGIBILITY = [
  "BDS Graduates (subject to program eligibility)",
  "MDS Graduates",
  "General Dental Practitioners",
  "Prosthodontists",
  "Periodontists",
  "Oral Surgeons",
  "Implant Dentists",
  "Dental Specialists seeking advanced fellowship education",
];

const WHY_MEDFELLOW = [
  "Flexible online education",
  "Structured academic curriculum",
  "Expert faculty guidance",
  "Evidence-based learning",
  "Regular clinical discussions",
  "Continuous mentorship",
  "Career-focused education",
  "Learning designed for working professionals",
];

const CAREER_OPPORTUNITIES = [
  "Implant Dentist",
  "Consultant Dental Surgeon",
  "Cosmetic Dentistry Practice",
  "Multispecialty Dental Clinic",
  "Implant Referral Centre",
  "Hospital Dental Department",
  "Academic Faculty",
  "Clinical Trainer",
  "Research Opportunities",
  "Private Practice Expansion",
];

const CASE_STUDIES = [
  {
    title: "Growing an Implant-Focused Dental Practice",
    text: "Dr. Anil, a general dentist with five years of clinical experience, wanted to introduce implant consultations into his practice. Through the fellowship, he gained a stronger understanding of implant treatment planning, patient assessment, and digital workflows. After completing the program, he expanded his services and increased referrals for implant-supported rehabilitation.",
  },
  {
    title: "Integrating Laser Dentistry into Daily Practice",
    text: "Dr. Neha had experience in restorative dentistry but wanted to incorporate laser-assisted procedures for soft tissue management. The fellowship helped her understand laser applications, clinical indications, and patient communication. She now offers a wider range of minimally invasive treatment options in her clinic.",
  },
];

const COMPARISON_ROWS = [
  { feature: "Learning Format", medfellow: "Flexible online with optional clinical training", others: "Mostly classroom or fixed schedules" },
  { feature: "Curriculum", medfellow: "Structured and comprehensive", others: "Often limited or topic-specific" },
  { feature: "Faculty Support", medfellow: "Continuous mentorship", others: "Session-based guidance" },
  { feature: "Case-Based Learning", medfellow: "Regular clinical discussions", others: "Varies by institution" },
  { feature: "Designed for Working Dentists", medfellow: "Yes", others: "Not always" },
  { feature: "Learning Resources", medfellow: "Recorded sessions and study material", others: "Limited in many programs" },
  { feature: "Career Support", medfellow: "Guidance and placement assistance", others: "Often unavailable" },
  { feature: "Overall Value", medfellow: "Long-term professional development", others: "Usually focused on short-term learning" },
];

const TESTIMONIALS = [
  {
    name: "Dr. Rohan Mehta",
    role: "General Dental Practitioner",
    text: "The structured curriculum and faculty guidance helped me better understand implant treatment planning. I could immediately apply many concepts in my daily practice.",
  },
  {
    name: "Dr. Shalini Verma",
    role: "Prosthodontist",
    text: "The flexibility of the fellowship allowed me to continue my clinic while learning modern implantology and laser dentistry concepts. The case discussions were especially valuable.",
  },
  {
    name: "Dr. Vivek Rao",
    role: "Consultant Dental Surgeon",
    text: "The program covered digital workflows, implant planning, and laser applications in a practical way. It has strengthened my confidence in managing advanced dental cases.",
  },
];

const FAQS = [
  {
    q: "Is an Oral Implantology & Laser Dentistry Fellowship worth pursuing?",
    a: "Dentists often choose fellowship training to strengthen their knowledge of implant planning, laser applications, digital workflows, and evidence-based treatment concepts while continuing their clinical practice.",
  },
  {
    q: "Can BDS graduates apply for the fellowship?",
    a: "Eligibility depends on the specific program. Some fellowship programs accept BDS graduates, while others may have additional eligibility requirements. Always review the admission criteria before applying.",
  },
  {
    q: "Will I learn about dental implants and laser dentistry in the same program?",
    a: "Yes. The curriculum is designed to introduce both implantology and laser dentistry concepts, helping participants understand how these disciplines complement modern dental practice.",
  },
  {
    q: "Is the fellowship suitable for practicing dentists?",
    a: "Yes. Flexible online learning with recorded sessions allows many dentists to continue treating patients while pursuing advanced education.",
  },
  {
    q: "Does the fellowship include digital dentistry concepts?",
    a: "Yes. Participants are introduced to topics such as CBCT interpretation, digital treatment planning, and guided implant workflows as part of the structured curriculum.",
  },
  {
    q: "How is a fellowship different from a short-term implant workshop?",
    a: "A fellowship offers a structured, comprehensive curriculum with faculty mentorship and case-based discussions, whereas workshops typically focus on a single technique over a short period.",
  },
  {
    q: "Can this fellowship help me expand my dental practice?",
    a: "Many dentists use fellowship training to broaden their clinical knowledge, enhance patient confidence, and introduce advanced treatment options such as implant consultations and laser-assisted procedures.",
  },
  {
    q: "What should I look for when choosing an implantology fellowship?",
    a: "Consider the curriculum, faculty expertise, flexibility, clinical relevance, mentorship, certification, and the availability of ongoing academic support.",
  },
];

export default function OralImplantologyLaserDentistryGuidePage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Breadcrumb + Hero */}
      <section className="border-b border-[#E5E7EB] py-10 md:py-14">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-text-secondary mb-6">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <span>Fellowship in Oral Implantology & Laser Dentistry</span>
          </div>

          <span className="section-label">Master Modern Implant Dentistry</span>
          <h1 className="section-title mt-2 mb-4 !text-3xl md:!text-4xl">
            Best Fellowship Course in Oral Implantology & Laser Dentistry
          </h1>

          <p className="text-[1rem] text-text-secondary leading-relaxed mb-4">
            Dental practice is evolving rapidly with growing demand for implant-supported restorations,
            minimally invasive laser procedures, digital workflows, and patient-focused treatment planning.
            Patients today expect predictable outcomes, faster healing, and advanced treatment options,
            making continuous education essential for dental professionals.
          </p>
          <p className="text-[1rem] text-text-secondary leading-relaxed mb-4">
            The Best Fellowship Course in Oral Implantology & Laser Dentistry is designed for dentists who
            want to strengthen their understanding of implant dentistry, laser-assisted procedures, treatment
            planning, digital diagnostics, and evidence-based clinical concepts while continuing their
            professional practice.
          </p>
          <p className="text-[1rem] text-text-secondary leading-relaxed mb-8">
            This fellowship combines structured academic learning, faculty mentorship, case-based
            discussions, and flexible online education to help participants build confidence in modern
            implant and laser dentistry.
          </p>

          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
            <Image
              src="/courses/oral-implantology.jpg"
              alt="Best Fellowship Course in Oral Implantology & Laser Dentistry"
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

        {/* Why More Dentists Are Pursuing */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Growing Demand for Advanced Skills</span>
          <SectionHeading icon={Sparkles}>Why More Dentists Are Pursuing a Fellowship in Oral Implantology & Laser Dentistry</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Modern dentistry extends beyond routine restorative care. Dental implants have become a
            preferred solution for replacing missing teeth, while laser dentistry is increasingly used for
            soft tissue procedures, periodontal therapy, implant maintenance, and patient comfort.
          </p>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-6">
            A structured fellowship helps dentists stay current with these advances by providing organized
            learning, practical case discussions, and evidence-based treatment principles.
          </p>
          <p className="text-[0.875rem] font-semibold text-[#111827] mb-3">Benefits of Fellowship Training</p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {BENEFITS.map((b) => (
              <div key={b} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{b}</span>
              </div>
            ))}
          </div>
        </section>

        {/* What You Will Learn */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Comprehensive Clinical Learning</span>
          <SectionHeading icon={GraduationCap}>What You Will Learn During the Fellowship</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-6">
            The fellowship follows a progressive curriculum designed to strengthen theoretical understanding
            and clinical reasoning.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {CURRICULUM_GROUPS.map((g) => (
              <div key={g.title} className="card p-4">
                <p className="text-[0.9375rem] font-semibold text-[#111827] mb-2.5">{g.title}</p>
                <div className="space-y-1.5">
                  {g.items.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-[0.8125rem] text-[#374151]">
                      <span className="text-[#15401E] mt-0.5">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mt-5">
            Participants gain practical knowledge through structured academic modules and faculty-led
            discussions.
          </p>
          <Link href="/courses/fellowship-in-oral-implantology-laser-dentistry" className="inline-block mt-5 text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            View the full curriculum, fees, and duration →
          </Link>
        </section>

        {/* Flexible Learning */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Flexible Learning for Dentists</span>
          <SectionHeading icon={Clock}>Learn Without Interrupting Your Practice</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            This fellowship is designed for busy dental professionals who want to advance their education
            while continuing to treat patients.
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
            The flexible format allows participants to immediately apply new concepts in clinical practice.
          </p>
        </section>

        {/* Develop Clinical Confidence */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Develop Clinical Confidence</span>
          <SectionHeading icon={ShieldCheck}>Skills You Can Strengthen Through the Fellowship</SectionHeading>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {SKILLS.map((s) => (
              <div key={s} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{s}</span>
              </div>
            ))}
          </div>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mt-5">
            These competencies help dentists deliver more predictable, patient-focused care.
          </p>
        </section>

        {/* Eligibility */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Find Out If You Qualify</span>
          <SectionHeading icon={Users}>Who Can Apply for the Fellowship?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            The fellowship is intended for dental professionals seeking advanced education in implantology
            and laser dentistry.
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-5">
            {ELIGIBILITY.map((e) => (
              <div key={e} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{e}</span>
              </div>
            ))}
          </div>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#15401E] text-white rounded-md font-semibold text-[0.9375rem] hover:bg-[#0f2e15] transition-colors"
          >
            Check Program Eligibility
          </Link>
        </section>

        {/* Why Choose MedFellow */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Why Choose MedFellow Academy</span>
          <SectionHeading icon={Award}>Why Dentists Choose MedFellow Academy</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            MedFellow Academy offers fellowship programs developed around the needs of practicing dental
            professionals.
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {WHY_MEDFELLOW.map((w) => (
              <div key={w} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{w}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Expand Your Career</span>
          <SectionHeading icon={Briefcase}>Career Opportunities After Completing the Fellowship</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            Advanced education in implantology and laser dentistry can support professional development
            across multiple practice settings. Potential opportunities include:
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

        {/* Success Stories */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Success Through Learning</span>
          <SectionHeading icon={BookOpen}>Real Success Stories from Dental Professionals</SectionHeading>
          <div className="grid sm:grid-cols-2 gap-4">
            {CASE_STUDIES.map((c) => (
              <div key={c.title} className="card p-5">
                <p className="text-[0.9375rem] font-semibold text-[#111827] mb-2">{c.title}</p>
                <p className="text-[0.875rem] text-[#374151] leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">See the MedFellow Difference</span>
          <SectionHeading icon={BarChart3}>MedFellow Academy vs Other Fellowship Providers</SectionHeading>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E5E7EB]">
                  <th className="py-3 pr-4 text-[0.8125rem] font-semibold text-[#111827]">Feature</th>
                  <th className="py-3 pr-4 text-[0.8125rem] font-semibold text-[#15401E]">MedFellow Academy</th>
                  <th className="py-3 text-[0.8125rem] font-semibold text-[#111827]">Other Fellowship Providers</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.feature} className="border-b border-[#F3F4F6]">
                    <td className="py-3 pr-4 text-[0.875rem] font-medium text-[#111827] align-top">{row.feature}</td>
                    <td className="py-3 pr-4 text-[0.875rem] text-[#374151] align-top">{row.medfellow}</td>
                    <td className="py-3 text-[0.875rem] text-text-secondary align-top">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-8">
          <span className="section-label">What Dentists Say</span>
          <SectionHeading icon={Quote}>Reviews from Fellowship Participants</SectionHeading>
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

        {/* Final CTA */}
        <section className="py-8">
          <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">
              Build Your Future in Implant and Laser Dentistry
            </h2>
            <p className="text-text-secondary mb-6">
              Advance your knowledge in implantology, laser dentistry, digital treatment planning, and
              evidence-based patient care through a flexible fellowship designed for practicing dental
              professionals.
            </p>
            <Link href="/apply" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-center">
              Apply for the Upcoming Batch
            </Link>
          </div>
        </section>
      </div>

      <div className="lg:col-span-1">
        <TopicClusterLinks title="Oral Implantology & Laser Dentistry Resources" links={CLUSTER_LINKS} />
      </div>
      </div>
      </div>

      <FAQ faqs={FAQS} />

      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import TopicClusterLinks from "@/components/TopicClusterLinks";
import {
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
  Quote,
  HelpCircle,
} from "lucide-react";

const CLUSTER_LINKS = [
  { label: "Best Fellowship Course in Oral Implantology & Laser Dentistry (Guide)", href: "/best-fellowship-course-in-oral-implantology-laser-dentistry", type: "guide" as const },
  { label: "How to Choose an Oral Implantology & Laser Dentistry Fellowship", href: "/blog/how-to-choose-an-oral-implantology-laser-dentistry-fellowship", type: "blog" as const },
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
    "Compare the best fellowship course in oral implantology & laser dentistry. Explore eligibility, curriculum, career opportunities, and flexible online learning for dentists.",
  keywords:
    "fellowship in oral implantology & laser dentistry, best fellowship course in oral implantology, oral implantology fellowship, laser dentistry fellowship, online oral implantology fellowship",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/best-fellowship-course-in-oral-implantology-laser-dentistry" },
  openGraph: {
    title: "Best Fellowship Course in Oral Implantology & Laser Dentistry",
    description:
      "A structured fellowship covering implant dentistry, laser-assisted procedures, digital workflows and evidence-based treatment planning, with flexible online learning.",
    type: "article",
    url: "https://www.medfellowacademy.com/best-fellowship-course-in-oral-implantology-laser-dentistry",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy Fellowship in Oral Implantology & Laser Dentistry" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Fellowship Course in Oral Implantology & Laser Dentistry",
    description: "A complete guide for dentists seeking structured, flexible advanced training in implant and laser dentistry.",
  },
};

const STATS = [
  { icon: "🎓", value: "46+", label: "Medical Fellowship Programs" },
  { icon: "🦷", value: "3,500+", label: "Healthcare Professionals Trained" },
  { icon: "💡", value: "Advanced", label: "Implant & Laser Dentistry Education" },
  { icon: "⭐", value: "4.8/5", label: "Doctor Satisfaction Rating" },
];

const BENEFITS = [
  "Understand modern implant dentistry concepts",
  "Learn evidence-based treatment planning",
  "Improve patient assessment skills",
  "Explore laser-assisted dental procedures",
  "Build confidence in implant case selection",
  "Strengthen clinical decision making",
  "Understand digital implant workflows",
  "Continue learning while maintaining clinical practice",
];

const MODULES = [
  { title: "Implant Dentistry Foundations", text: "Implant biology, osseointegration principles, patient assessment, and treatment planning." },
  { title: "Surgical Implant Concepts", text: "Implant placement principles, bone quality assessment, implant complications, and risk evaluation." },
  { title: "Prosthetic Implant Dentistry", text: "Prosthetic planning, occlusion, restoration concepts, and long-term maintenance." },
  { title: "Laser Dentistry", text: "Soft tissue lasers, hard tissue applications, laser safety, and clinical indications." },
  { title: "Digital Dentistry", text: "CBCT interpretation, digital smile planning, guided implant concepts, and digital workflow." },
  { title: "Clinical Case Discussions", text: "Evidence-based treatment planning, implant complications, patient communication, and ethical practice." },
];

const PROGRAM_HIGHLIGHTS = [
  "Flexible online learning", "Weekend sessions", "Recorded lectures", "Structured curriculum",
  "Faculty mentorship", "Case-based discussions", "Continuous academic support", "Professional-friendly schedule",
];

const SKILLS = [
  "Implant treatment planning", "Implant case selection", "Digital diagnostics", "CBCT interpretation",
  "Laser-assisted procedures", "Soft tissue management", "Prosthetic planning", "Clinical documentation",
  "Patient communication", "Risk assessment", "Evidence-based decision making", "Long-term implant maintenance",
];

const ELIGIBLE = [
  "BDS graduates (subject to program eligibility)", "MDS graduates", "General dental practitioners",
  "Prosthodontists", "Periodontists", "Oral surgeons", "Implant dentists",
  "Dental specialists seeking advanced fellowship education",
];

const WHY_MEDFELLOW = [
  "Flexible online education", "Structured academic curriculum", "Expert faculty guidance",
  "Evidence-based learning", "Regular clinical discussions", "Continuous mentorship",
  "Career-focused education", "Learning designed for working professionals",
];

const CAREER_ROLES = [
  "Implant Dentist", "Consultant Dental Surgeon", "Cosmetic Dentistry Practice", "Multispecialty Dental Clinic",
  "Implant Referral Centre", "Hospital Dental Department", "Academic Faculty / Clinical Trainer",
  "Research Opportunities", "Private Practice Expansion",
];

const CASE_STUDIES = [
  {
    title: "Case Study 1: Growing an Implant-Focused Practice",
    text: "A general dentist with a few years of clinical experience wanted to introduce implant consultations into practice. A stronger understanding of implant treatment planning, patient assessment, and digital workflows helped expand services and referrals for implant-supported rehabilitation. Illustrative example, not a verified individual outcome.",
  },
  {
    title: "Case Study 2: Integrating Laser Dentistry",
    text: "A dentist with a restorative background wanted to incorporate laser-assisted procedures for soft tissue management. Learning laser applications, clinical indications, and patient communication supported a wider range of minimally invasive treatment options. Illustrative example, not a verified individual outcome.",
  },
];

const COMPARISON_ROWS = [
  { feature: "Learning format", medfellow: "Flexible online with optional clinical training", other: "Mostly classroom or fixed schedules" },
  { feature: "Curriculum", medfellow: "Structured and comprehensive", other: "Often limited or topic-specific" },
  { feature: "Faculty support", medfellow: "Continuous mentorship", other: "Session-based guidance" },
  { feature: "Case-based learning", medfellow: "Regular clinical discussions", other: "Varies by institution" },
  { feature: "Designed for working dentists", medfellow: "Yes", other: "Not always" },
  { feature: "Learning resources", medfellow: "Recorded sessions and study material", other: "Limited in many programs" },
  { feature: "Career support", medfellow: "Guidance and placement assistance", other: "Often unavailable" },
];

const RELATED_LINKS = [
  { name: "Fellowship Course in Oral Implantology & Laser Dentistry", desc: "Explore eligibility, curriculum, fees, and career opportunities.", href: "/courses/fellowship-in-oral-implantology-laser-dentistry" },
  { name: "How to Choose an Oral Implantology & Laser Dentistry Fellowship", desc: "How to evaluate implantology fellowships before enrolling.", href: "/blog/how-to-choose-an-oral-implantology-laser-dentistry-fellowship" },
  { name: "Questions to Ask Before Joining an Oral Implantology & Laser Dentistry Fellowship", desc: "The questions every dentist should ask before applying.", href: "/blog/questions-to-ask-before-joining-an-oral-implantology-laser-dentistry-fellowship" },
  { name: "Online vs Offline Oral Implantology & Laser Dentistry Fellowship", desc: "Compare learning formats to choose the option that fits your goals.", href: "/blog/online-vs-offline-oral-implantology-laser-dentistry-fellowship" },
  { name: "Is an Oral Implantology & Laser Dentistry Fellowship Worth It?", desc: "The benefits, limitations, and factors to consider before enrolling.", href: "/blog/is-an-oral-implantology-laser-dentistry-fellowship-worth-it" },
  { name: "Career Opportunities After an Oral Implantology & Laser Dentistry Fellowship", desc: "How advanced training can support long-term career growth.", href: "/blog/career-opportunities-after-an-oral-implantology-laser-dentistry-fellowship" },
];

const FAQS = [
  { q: "Is an oral implantology & laser dentistry fellowship worth pursuing?", a: "Dentists often choose fellowship training to strengthen their knowledge of implant planning, laser applications, digital workflows, and evidence-based treatment concepts while continuing clinical practice. Value depends on how well the curriculum and format match your goals." },
  { q: "Can BDS graduates apply for the fellowship?", a: "Eligibility depends on the specific program. Some fellowships accept BDS graduates while others have additional requirements. Always review the admission criteria before applying." },
  { q: "Will I learn about dental implants and laser dentistry in the same program?", a: "Yes. The curriculum introduces both implantology and laser dentistry, showing how these disciplines complement modern dental practice." },
  { q: "Is the fellowship suitable for practising dentists?", a: "Yes. Flexible online learning with recorded sessions allows many dentists to continue treating patients while pursuing advanced education." },
  { q: "Does the fellowship include digital dentistry concepts?", a: "Yes. Participants are introduced to CBCT interpretation, digital treatment planning, and guided implant workflows within the structured curriculum." },
  { q: "How is a fellowship different from a short-term implant workshop?", a: "A fellowship offers a structured, comprehensive curriculum with faculty mentorship and case-based discussions, whereas workshops usually focus on a single technique over a short period." },
  { q: "Can this fellowship help me expand my dental practice?", a: "Many dentists use fellowship training to broaden clinical knowledge, build patient confidence, and introduce advanced options such as implant consultations and laser-assisted procedures, within their scope of practice." },
  { q: "What should I look for when choosing an implantology fellowship?", a: "Consider the curriculum, faculty expertise, flexibility, clinical relevance, mentorship, certification, and the availability of ongoing academic support." },
];

export default function OralImplantologyGuidePage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="border-b border-[#E5E7EB] py-10 md:py-14">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-text-secondary mb-6">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/courses" className="hover:text-primary">Courses</Link>
            <span>/</span>
            <span>Best Fellowship Course in Oral Implantology &amp; Laser Dentistry</span>
          </div>

          <span className="section-label">Master Modern Implant Dentistry</span>
          <h1 className="section-title mt-2 mb-4 !text-3xl md:!text-4xl">
            Best Fellowship Course in Oral Implantology &amp; Laser Dentistry
          </h1>

          <p className="text-[1rem] text-text-secondary leading-relaxed mb-4">
            Dental practice is evolving fast, with growing demand for implant-supported restorations, minimally
            invasive laser procedures, digital workflows, and patient-focused treatment planning. Patients expect
            predictable outcomes and advanced options — which makes continuous education essential for dental
            professionals.
          </p>
          <p className="text-[1rem] text-text-secondary leading-relaxed mb-8">
            The best fellowship course in oral implantology &amp; laser dentistry helps dentists strengthen their
            understanding of implant dentistry, laser-assisted procedures, treatment planning, digital
            diagnostics, and evidence-based clinical concepts — through structured academic learning, faculty
            mentorship, case-based discussions, and flexible online education, without interrupting practice.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/apply" className="inline-flex items-center justify-center px-6 py-3 bg-[#15401E] text-white rounded-md font-semibold text-[0.9375rem] hover:bg-[#0f2e15] transition-colors">
              Apply Now
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-white border border-[#D1D5DB] text-[#15401E] rounded-md font-semibold text-[0.9375rem] hover:border-[#15401E] transition-colors">
              Schedule Consultation
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10">
            {STATS.map((s) => (
              <div key={s.label} className="card p-4 text-center">
                <div className="text-xl mb-1">{s.icon}</div>
                <div className="text-lg font-bold text-[#15401E]">{s.value}</div>
                <div className="text-[0.75rem] text-text-secondary leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container-custom max-w-6xl py-4">
      <div className="grid lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2">

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Growing Demand for Advanced Skills</span>
          <SectionHeading icon={Award}>Why More Dentists Are Pursuing This Fellowship</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Modern dentistry extends beyond routine restorative care. Dental implants have become a preferred
            solution for replacing missing teeth, while laser dentistry is increasingly used for soft tissue
            procedures, periodontal therapy, implant maintenance, and patient comfort. A structured fellowship
            helps dentists stay current through organised learning, practical case discussions, and
            evidence-based treatment principles.
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {BENEFITS.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Comprehensive Clinical Learning</span>
          <SectionHeading icon={ListChecks}>What You Will Learn During the Fellowship</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-6">
            The fellowship follows a progressive curriculum designed to strengthen theoretical understanding and
            clinical reasoning across six broad areas:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {MODULES.map((m) => (
              <div key={m.title} className="card p-4">
                <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-1.5">{m.title}</h3>
                <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Flexible Learning for Dentists</span>
          <SectionHeading icon={Clock}>Learn Without Interrupting Your Practice</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            This fellowship is designed for busy dental professionals who want to advance their education while
            continuing to treat patients. The flexible format lets participants apply new concepts immediately in
            clinical practice.
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-4">
            {PROGRAM_HIGHLIGHTS.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg">
            <p className="text-[0.875rem] text-[#374151] leading-relaxed">
              <strong>Ask what &quot;hands-on&quot; means.</strong> Clarify whether practical exposure includes
              observation, demonstration, simulation, or supervised procedures. Exposure and independent
              procedural competency are not the same.
            </p>
          </div>
          <Link href="/blog/online-vs-offline-oral-implantology-laser-dentistry-fellowship" className="inline-block mt-4 text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            Compare in detail: Online vs Offline Oral Implantology &amp; Laser Dentistry Fellowship →
          </Link>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Develop Clinical Confidence</span>
          <SectionHeading icon={Target}>Skills You Can Strengthen Through the Fellowship</SectionHeading>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {SKILLS.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Find Out If You Qualify</span>
          <SectionHeading icon={Users}>Who Can Apply for the Fellowship?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            The fellowship is intended for dental professionals seeking advanced education in implantology and
            laser dentistry. Typical eligibility from the course brief includes:
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-4">
            {ELIGIBLE.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg">
            <p className="text-[0.875rem] text-[#374151] leading-relaxed">
              Always confirm the current admission criteria with the fellowship provider before applying. A
              fellowship certificate is an educational credential; registration, licensing, and procedural
              privileges are governed separately by the applicable authorities.
            </p>
          </div>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Why Choose MedFellow Academy</span>
          <SectionHeading icon={GraduationCap}>Why Dentists Choose MedFellow Academy</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            MedFellow Academy builds fellowship programs around the needs of practising dental professionals —
            structured academic learning, experienced faculty, and flexible study designed for working clinicians.
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {WHY_MEDFELLOW.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Expand Your Career</span>
          <SectionHeading icon={Briefcase}>Career Opportunities After Completing the Fellowship</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Advanced education in implantology and laser dentistry can support professional development across
            multiple practice settings:
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-4">
            {CAREER_ROLES.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg">
            <p className="text-[0.875rem] text-[#374151] leading-relaxed">
              Career outcomes depend on your existing qualification, experience, employer, and the regulations
              that apply where you practise. A fellowship is an addition to professional education, not an
              automatic replacement for a recognised postgraduate qualification.
            </p>
          </div>
          <Link href="/blog/career-opportunities-after-an-oral-implantology-laser-dentistry-fellowship" className="inline-block mt-4 text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            Read more: Career Opportunities After an Oral Implantology &amp; Laser Dentistry Fellowship →
          </Link>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Success Through Learning</span>
          <SectionHeading icon={Quote}>Illustrative Case Studies</SectionHeading>
          <div className="grid md:grid-cols-2 gap-4">
            {CASE_STUDIES.map((c) => (
              <div key={c.title} className="card p-5">
                <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-2">{c.title}</h3>
                <p className="text-[0.8125rem] text-[#374151] leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">See the MedFellow Difference</span>
          <SectionHeading icon={ShieldCheck}>MedFellow Academy vs Other Fellowship Providers</SectionHeading>
          <div className="overflow-x-auto rounded-lg border border-[#E5E7EB] mb-4">
            <table className="w-full text-[0.875rem] text-left">
              <thead className="bg-[#15401E] text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Factor</th>
                  <th className="px-4 py-3 font-semibold">MedFellow Academy</th>
                  <th className="px-4 py-3 font-semibold">Other Fellowship Providers</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((r, i) => (
                  <tr key={r.feature} className={i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"}>
                    <td className="px-4 py-3 font-medium text-[#111827] border-t border-[#F3F4F6]">{r.feature}</td>
                    <td className="px-4 py-3 text-[#374151] border-t border-[#F3F4F6]">{r.medfellow}</td>
                    <td className="px-4 py-3 text-[#374151] border-t border-[#F3F4F6]">{r.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Choose With Confidence</span>
          <SectionHeading icon={HelpCircle}>Is This Fellowship Worth It?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            The fellowship can be worthwhile when it fills a genuine knowledge or professional-development gap —
            for dentists who want structured education in implant planning, laser applications, digital workflows,
            and evidence-based treatment concepts, with a flexible route to keep learning while working. Value
            depends on whether the curriculum matches your goals, whether the format suits your schedule, and
            whether you understand what the certificate represents.
          </p>
          <Link href="/blog/is-an-oral-implantology-laser-dentistry-fellowship-worth-it" className="inline-block text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            Read the full analysis: Is an Oral Implantology &amp; Laser Dentistry Fellowship Worth It? →
          </Link>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Take the Next Step</span>
          <SectionHeading icon={ClipboardList}>Build Your Future in Implant and Laser Dentistry</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            Advance your knowledge in implantology, laser dentistry, digital treatment planning, and
            evidence-based patient care through a flexible fellowship designed for practising dental
            professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/apply" className="inline-flex items-center justify-center px-6 py-3 bg-[#15401E] text-white rounded-md font-semibold text-[0.9375rem] hover:bg-[#0f2e15] transition-colors">
              Apply Now
            </Link>
            <Link href="/courses/fellowship-in-oral-implantology-laser-dentistry" className="inline-flex items-center justify-center px-6 py-3 bg-white border border-[#D1D5DB] text-[#15401E] rounded-md font-semibold text-[0.9375rem] hover:border-[#15401E] transition-colors">
              Explore the Fellowship Course
            </Link>
          </div>
        </section>

        <section className="py-8">
          <span className="section-label">Explore More Learning</span>
          <SectionHeading icon={Link2}>Explore the Cluster</SectionHeading>
          <div className="grid sm:grid-cols-2 gap-3">
            {RELATED_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="card p-4 hover:shadow-md transition-all group">
                <span className="text-[0.875rem] font-semibold text-[#111827] group-hover:text-[#15401E] block mb-1">{l.name}</span>
                <span className="text-[0.8125rem] text-text-secondary">{l.desc}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <div className="lg:col-span-1">
        <TopicClusterLinks title="Implant & Laser Dentistry Resources" links={CLUSTER_LINKS} />
      </div>
      </div>
      </div>

      <FAQ faqs={FAQS} />

      <Footer />
    </div>
  );
}

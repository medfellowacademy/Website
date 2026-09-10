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
  { label: "Best Fellowship Course in Maxillofacial & Oral Surgery (Guide)", href: "/courses/best-fellowship-course-in-maxillofacial-oral-surgery", type: "guide" as const },
  { label: "How to Choose a Maxillofacial & Oral Surgery Fellowship", href: "/blog/how-to-choose-a-maxillofacial-oral-surgery-fellowship-course", type: "blog" as const },
  { label: "Questions to Ask Before Joining a Maxillofacial & Oral Surgery Fellowship", href: "/blog/questions-to-ask-before-joining-a-maxillofacial-oral-surgery-fellowship", type: "blog" as const },
  { label: "Online vs Offline Maxillofacial & Oral Surgery Fellowship", href: "/blog/online-vs-offline-maxillofacial-oral-surgery-fellowship-course", type: "blog" as const },
  { label: "Is a Maxillofacial & Oral Surgery Fellowship Worth It?", href: "/blog/is-maxillofacial-oral-surgery-fellowship-worth-it", type: "blog" as const },
  { label: "Can BDS Doctors Pursue a Maxillofacial & Oral Surgery Fellowship?", href: "/blog/maxillofacial-oral-surgery-fellowship-after-md-obg", type: "blog" as const },
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
  title: "Best Fellowship Course in Maxillofacial & Oral Surgery | MedFellow Academy",
  description:
    "Compare the best fellowship course in maxillofacial & oral surgery — dentoalveolar surgery, facial trauma, implants, oral pathology, TMJ and digital planning, with flexible online learning.",
  keywords:
    "fellowship in maxillofacial & oral surgery, best fellowship course in maxillofacial oral surgery, maxillofacial surgery fellowship, oral surgery fellowship, online maxillofacial fellowship",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/courses/best-fellowship-course-in-maxillofacial-oral-surgery/" },
  openGraph: {
    title: "Best Fellowship Course in Maxillofacial & Oral Surgery",
    description:
      "A structured fellowship covering surgical principles, dentoalveolar surgery, facial trauma, implants, oral pathology, TMJ, reconstruction and digital planning.",
    type: "article",
    url: "https://www.medfellowacademy.com/courses/best-fellowship-course-in-maxillofacial-oral-surgery/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy Fellowship in Maxillofacial & Oral Surgery" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Fellowship Course in Maxillofacial & Oral Surgery",
    description: "A complete guide for dental specialists seeking structured, flexible advanced training in oral and maxillofacial surgery.",
  },
};

const STATS = [
  { icon: "🎓", value: "46+", label: "Medical Fellowship Programs" },
  { icon: "🦷", value: "3,500+", label: "Doctors Trained" },
  { icon: "🏥", value: "Advanced", label: "Oral Surgery Education" },
  { icon: "⭐", value: "4.8/5", label: "Doctor Satisfaction Rating" },
];

const BENEFITS = [
  "Improve clinical decision making",
  "Understand modern surgical protocols",
  "Build confidence in complex oral surgery",
  "Expand knowledge of facial trauma management",
  "Learn digital surgical planning concepts",
  "Strengthen implant surgery understanding",
  "Improve multidisciplinary patient management",
  "Stay updated with evidence-based surgical practice",
];

const MODULES = [
  { title: "Oral & Maxillofacial Surgical Principles", text: "Surgical anatomy, asepsis, patient assessment, clinical examination, and diagnostic imaging." },
  { title: "Dentoalveolar Surgery", text: "Surgical extractions, impacted teeth, bone preservation, and surgical planning." },
  { title: "Dental Implant Concepts", text: "Implant treatment planning, bone quality assessment, guided implant concepts, and implant complications." },
  { title: "Facial Trauma", text: "Maxillofacial fractures, soft tissue injuries, emergency management, and trauma rehabilitation." },
  { title: "Oral Pathology", text: "Oral lesions, cysts, tumours, and biopsy principles." },
  { title: "TMJ Disorders", text: "Diagnosis, conservative management, and surgical considerations." },
  { title: "Reconstructive Surgery", text: "Bone grafting principles, soft tissue management, and facial reconstruction concepts." },
  { title: "Digital Dentistry", text: "CBCT interpretation, digital workflow, surgical planning software, and guided surgery." },
  { title: "Clinical Case Discussions", text: "Treatment planning, multidisciplinary care, ethical practice, and complication management." },
];

const PROGRAM_HIGHLIGHTS = [
  "Flexible online learning", "Weekend sessions", "Recorded lectures", "Expert faculty",
  "Structured curriculum", "Clinical case discussions", "Continuous mentorship", "Professional-friendly schedule",
];

const SKILLS = [
  "Oral surgical assessment", "Surgical planning", "Implant treatment concepts", "Facial trauma evaluation",
  "Oral pathology interpretation", "Patient communication", "Digital diagnostics", "Clinical documentation",
  "Evidence-based treatment planning", "Risk assessment", "Ethical decision making", "Multidisciplinary collaboration",
];

const ELIGIBLE = [
  "MDS Oral & Maxillofacial Surgery", "Qualified oral surgeons", "Practising maxillofacial surgeons",
  "Dental specialists", "Hospital-based dental consultants", "Academic faculty",
  "Specialists seeking advanced fellowship education",
];

const WHY_MEDFELLOW = [
  "Flexible online learning", "Industry-leading faculty", "Updated, evidence-based curriculum",
  "Regular clinical case discussions", "Continuous mentoring", "Career-focused education",
  "Professional networking", "Learning designed for practising specialists",
];

const CAREER_ROLES = [
  "Consultant Oral & Maxillofacial Surgeon", "Hospital Maxillofacial Unit", "Trauma Centre", "Dental Implant Centre",
  "Head & Neck Surgical Team", "Academic Institutions / Teaching Faculty", "Research Opportunities",
  "Multispecialty Hospitals", "Specialty Dental Practice",
];

const CASE_STUDIES = [
  {
    title: "Case Study 1: From Routine Practice to Hospital-Based Care",
    text: "An MDS Oral & Maxillofacial Surgery graduate wanted greater exposure to complex trauma and reconstructive cases. Strengthening multidisciplinary treatment planning and advanced imaging interpretation supported a move into a consultant role with more responsibility for facial trauma management. Illustrative example, not a verified individual outcome.",
  },
  {
    title: "Case Study 2: Expanding Implant and Surgical Services",
    text: "A surgeon with an established private practice wanted to broaden the range of procedures managed confidently. Deeper knowledge of implant planning, oral pathology, and surgical decision making supported adding advanced surgical consultation services. Illustrative example, not a verified individual outcome.",
  },
];

const COMPARISON_ROWS = [
  { feature: "Learning format", medfellow: "Flexible online with scheduled sessions", other: "Mostly classroom or fixed schedules" },
  { feature: "Curriculum", medfellow: "Structured and comprehensive across nine areas", other: "Often technique-specific" },
  { feature: "Faculty support", medfellow: "Continuous mentorship", other: "Session-based guidance" },
  { feature: "Case-based learning", medfellow: "Regular clinical discussions", other: "Varies by provider" },
  { feature: "Designed for working specialists", medfellow: "Yes", other: "Not always" },
  { feature: "Learning resources", medfellow: "Recorded lectures and study material", other: "Limited in many programs" },
  { feature: "Career support", medfellow: "Academic guidance and networking", other: "Often limited" },
];

const RELATED_LINKS = [
  { name: "Fellowship Course in Maxillofacial & Oral Surgery", desc: "Explore eligibility, curriculum, fees, and career opportunities.", href: "/courses/fellowship-in-maxillofacial-oral-surgery" },
  { name: "How to Choose a Maxillofacial & Oral Surgery Fellowship", desc: "Compare programs and select a fellowship that matches your career goals.", href: "/blog/how-to-choose-a-maxillofacial-oral-surgery-fellowship-course" },
  { name: "Questions to Ask Before Joining a Fellowship", desc: "Ask the right questions before enrolling in an oral surgery fellowship.", href: "/blog/questions-to-ask-before-joining-a-maxillofacial-oral-surgery-fellowship" },
  { name: "Online vs Offline Maxillofacial Fellowship", desc: "Understand the benefits of both learning formats before deciding.", href: "/blog/online-vs-offline-maxillofacial-oral-surgery-fellowship-course" },
  { name: "Is a Maxillofacial & Oral Surgery Fellowship Worth It?", desc: "The benefits, limitations, and factors to consider before enrolling.", href: "/blog/is-maxillofacial-oral-surgery-fellowship-worth-it" },
  { name: "Can BDS Doctors Pursue a Maxillofacial & Oral Surgery Fellowship?", desc: "Eligibility and pathways for dental graduates considering advanced training.", href: "/blog/maxillofacial-oral-surgery-fellowship-after-md-obg" },
];

const FAQS = [
  { q: "Is a Fellowship in Maxillofacial & Oral Surgery worth pursuing after MDS?", a: "Many specialists choose a fellowship to deepen their knowledge in trauma, implantology, reconstructive surgery, digital workflows, and multidisciplinary care. It can strengthen clinical confidence and support long-term career development." },
  { q: "How is a fellowship different from attending workshops?", a: "Workshops usually focus on specific techniques over a short period, while a fellowship follows a structured curriculum with progressive learning, faculty guidance, and case-based discussions." },
  { q: "Can I continue my clinical practice during the fellowship?", a: "Yes. Flexible online learning with scheduled sessions allows most participants to continue their professional responsibilities while studying." },
  { q: "Does the fellowship cover implant dentistry?", a: "Yes. Participants learn implant treatment planning, patient selection, surgical principles, complication management, and evidence-based implant concepts." },
  { q: "Will I learn about facial trauma management?", a: "Yes. The curriculum introduces facial trauma assessment, fracture management principles, emergency care concepts, and multidisciplinary treatment planning." },
  { q: "Is digital dentistry included?", a: "Yes. CBCT interpretation, digital planning, and guided surgical workflows are incorporated into the learning experience." },
  { q: "Is this fellowship useful for private practitioners?", a: "Yes. Many clinicians pursue fellowship training to broaden the scope of services they offer and improve patient outcomes through structured learning, within their qualifications and regulations." },
  { q: "Does the fellowship include clinical case discussions?", a: "Yes. Case-based discussions help participants understand practical decision making, treatment planning, and management of complex oral and maxillofacial cases." },
  { q: "How do I choose the best fellowship in Maxillofacial & Oral Surgery?", a: "Look for an evidence-based curriculum, experienced faculty, flexible learning for working professionals, structured case discussions, clear certification, and strong academic support." },
  { q: "Is a fellowship the same as a formal specialist qualification?", a: "No. A fellowship certificate is an educational credential and is different from a recognised postgraduate or specialist qualification. Specialist registration and scope of practice are governed separately." },
];

export default function MaxillofacialGuidePage() {
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
            <span>Best Fellowship Course in Maxillofacial &amp; Oral Surgery</span>
          </div>

          <span className="section-label">Master Advanced Oral Surgery</span>
          <h1 className="section-title mt-2 mb-4 !text-3xl md:!text-4xl">
            Best Fellowship Course in Maxillofacial &amp; Oral Surgery
          </h1>

          <p className="text-[1rem] text-text-secondary leading-relaxed mb-4">
            Oral and maxillofacial surgery keeps evolving — facial trauma management, implantology, reconstructive
            surgery, oral pathology, digital surgical planning, and minimally invasive procedures. As patient
            expectations and treatment complexity rise, specialists are expected to develop broader clinical
            expertise and stay current with modern surgical techniques.
          </p>
          <p className="text-[1rem] text-text-secondary leading-relaxed mb-8">
            The best fellowship course in maxillofacial &amp; oral surgery is designed for qualified dental
            professionals who want structured academic learning while continuing clinical practice — combining
            evidence-based education, case discussions, expert faculty guidance, and flexible learning to
            strengthen decision making across a wide range of oral and maxillofacial conditions.
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
          <span className="section-label">Growing Career Opportunities</span>
          <SectionHeading icon={Award}>Why More Dentists Are Choosing This Fellowship</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Demand for qualified oral and maxillofacial surgeons keeps growing because of facial trauma, dental
            implant procedures, oral cancer management, corrective jaw surgery, cosmetic facial procedures, and
            multidisciplinary care. Hospitals, trauma centres, specialty clinics, and academic institutions value
            professionals with advanced clinical knowledge beyond conventional postgraduate education.
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
          <span className="section-label">Build Surgical Excellence</span>
          <SectionHeading icon={ListChecks}>What You Will Learn During the Fellowship</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-6">
            The curriculum is structured to provide comprehensive academic understanding through progressive
            learning modules:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {MODULES.map((m) => (
              <div key={m.title} className="card p-4">
                <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-1.5">{m.title}</h3>
                <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
          <Link href="/blog/how-to-choose-a-maxillofacial-oral-surgery-fellowship-course" className="inline-block mt-5 text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            Read more: How to Choose a Maxillofacial &amp; Oral Surgery Fellowship →
          </Link>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Learn Without Pausing Practice</span>
          <SectionHeading icon={Clock}>A Flexible Fellowship for Busy Specialists</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Continuing education should not require putting your career on hold. This fellowship is designed for
            practising professionals who want advanced education alongside existing commitments, and to apply new
            concepts immediately in daily practice.
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
          <Link href="/blog/online-vs-offline-maxillofacial-oral-surgery-fellowship-course" className="inline-block mt-4 text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            Compare in detail: Online vs Offline Maxillofacial &amp; Oral Surgery Fellowship →
          </Link>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Clinical Skills That Matter</span>
          <SectionHeading icon={Target}>Skills You Can Strengthen Through This Fellowship</SectionHeading>
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
          <span className="section-label">Designed for Qualified Dentists</span>
          <SectionHeading icon={Users}>Who Can Apply?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            The fellowship is intended for dental professionals seeking advanced education in oral and
            maxillofacial surgery. Typical eligibility from the course brief includes:
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
          <Link href="/blog/maxillofacial-oral-surgery-fellowship-after-md-obg" className="inline-block mt-4 text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            Read more: Can BDS Doctors Pursue a Maxillofacial &amp; Oral Surgery Fellowship? →
          </Link>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Why Doctors Trust MedFellow</span>
          <SectionHeading icon={GraduationCap}>Why Choose MedFellow Academy?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            MedFellow Academy develops fellowship programs that combine flexible education with clinically
            relevant learning, designed specifically for practising specialists.
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
          <SectionHeading icon={Briefcase}>Career Opportunities After Fellowship</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Graduates may strengthen their professional profile across multiple healthcare environments:
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
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Real Learning. Real Clinical Growth.</span>
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
          <span className="section-label">Compare Your Options</span>
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
            for specialists who want structured education in trauma, implantology, reconstructive surgery, oral
            pathology, and digital workflows, with a flexible route to keep learning while working. Value depends
            on whether the curriculum matches your goals, whether the format suits your schedule, and whether you
            understand what the certificate represents.
          </p>
          <Link href="/blog/is-maxillofacial-oral-surgery-fellowship-worth-it" className="inline-block text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            Read the full analysis: Is a Maxillofacial &amp; Oral Surgery Fellowship Worth It? →
          </Link>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Advance Your Surgical Career</span>
          <SectionHeading icon={ClipboardList}>Take the Next Step in Oral &amp; Maxillofacial Surgery</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            Strengthen your expertise through a structured fellowship designed for practising specialists. Learn
            from experienced faculty, explore evidence-based surgical concepts, and continue your clinical
            practice while advancing your career.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/apply" className="inline-flex items-center justify-center px-6 py-3 bg-[#15401E] text-white rounded-md font-semibold text-[0.9375rem] hover:bg-[#0f2e15] transition-colors">
              Apply Now
            </Link>
            <Link href="/courses/fellowship-in-maxillofacial-oral-surgery" className="inline-flex items-center justify-center px-6 py-3 bg-white border border-[#D1D5DB] text-[#15401E] rounded-md font-semibold text-[0.9375rem] hover:border-[#15401E] transition-colors">
              Explore the Fellowship Course
            </Link>
          </div>
        </section>

        <section className="py-8">
          <span className="section-label">Continue Your Research</span>
          <SectionHeading icon={Link2}>Explore the Maxillofacial &amp; Oral Surgery Cluster</SectionHeading>
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
        <TopicClusterLinks title="Maxillofacial & Oral Surgery Resources" links={CLUSTER_LINKS} />
      </div>
      </div>
      </div>

      <FAQ faqs={FAQS} />

      <Footer />
    </div>
  );
}

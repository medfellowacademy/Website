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
  ClipboardCheck,
  Quote,
  HelpCircle,
} from "lucide-react";

const CLUSTER_LINKS = [
  { label: "Best Fellowship Course in General Surgery (Guide)", href: "/courses/best-fellowship-course-in-general-surgery", type: "guide" as const },
  { label: "How to Choose a General Surgery Fellowship", href: "/blog/how-to-choose-a-general-surgery-fellowship", type: "blog" as const },
  { label: "Questions to Ask Before Joining a General Surgery Fellowship", href: "/blog/questions-to-ask-before-joining-a-general-surgery-fellowship", type: "blog" as const },
  { label: "Online vs Offline General Surgery Fellowship", href: "/blog/online-vs-offline-general-surgery-fellowship", type: "blog" as const },
  { label: "Is a General Surgery Fellowship Worth It?", href: "/blog/is-a-general-surgery-fellowship-worth-it", type: "blog" as const },
  { label: "Skills You Learn During a General Surgery Fellowship", href: "/blog/skills-you-learn-during-a-general-surgery-fellowship", type: "blog" as const },
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
  title: "Best Fellowship Course in General Surgery | MedFellow Academy",
  description:
    "Compare the best fellowship course in general surgery — trauma and emergency surgery, GI, hepatobiliary, laparoscopy, hernia, critical care and surgical oncology, in a 12-month hybrid, 15-module program.",
  keywords:
    "fellowship in general surgery, best general surgery fellowship, general surgery fellowship course, general surgery training, laparoscopic surgery fellowship",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/courses/best-fellowship-course-in-general-surgery/" },
  openGraph: {
    title: "Best Fellowship Course in General Surgery",
    description:
      "A 12-month hybrid fellowship covering surgical principles, trauma, GI, hepatobiliary, breast, endocrine, vascular, laparoscopic, hernia, anorectal, critical care and oncology.",
    type: "article",
    url: "https://www.medfellowacademy.com/courses/best-fellowship-course-in-general-surgery/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy Fellowship in General Surgery" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Fellowship Course in General Surgery",
    description: "A complete guide for doctors seeking structured advanced training across core general surgery.",
  },
};

const STATS = [
  { icon: "🎓", value: "46+", label: "Medical Fellowship Programs" },
  { icon: "👨‍⚕️", value: "3,500+", label: "Doctors Trained" },
  { icon: "🩺", value: "12 months", label: "Hybrid, 15-Module Curriculum" },
  { icon: "⭐", value: "4.8/5", label: "Doctor Satisfaction Rating" },
];

const MODULES = [
  "Principles of Surgery", "Surgical Infections", "Trauma and Emergency Surgery", "Gastrointestinal Surgery",
  "Hepatobiliary and Pancreatic Surgery", "Breast Surgery", "Thyroid and Endocrine Surgery",
  "Urology for General Surgeons", "Vascular Surgery Basics", "Laparoscopic Surgery",
  "Hernia Surgery", "Anorectal Surgery", "Surgical Critical Care", "Surgical Oncology", "Skills and Procedures Training",
];

const WHY_TRAIN = [
  { title: "Develop Core Surgical Knowledge", text: "Surgical anatomy, wound healing, infections, fluid and electrolyte management, surgical nutrition, perioperative evaluation, and postoperative care." },
  { title: "Build Emergency Surgery Knowledge", text: "Acute abdomen, trauma, bowel obstruction, perforation, bleeding, sepsis, and other urgent surgical presentations." },
  { title: "Understand Minimally Invasive Surgery", text: "Laparoscopic principles, patient selection, instrumentation, operative planning, and postoperative considerations." },
  { title: "Strengthen Perioperative Care", text: "Preoperative optimisation, anaesthesia considerations, pain management, fluid management, infection prevention, and complication recognition." },
  { title: "Develop Multidisciplinary Skills", text: "Discussing surgical cases with anaesthesiologists, radiologists, intensivists, gastroenterologists, oncologists, and emergency physicians." },
];

const SKILLS = [
  { title: "Clinical Assessment", text: "Evaluating patients with common and complex surgical conditions." },
  { title: "Surgical Decision-Making", text: "How diagnosis, imaging, disease severity, risk factors, and patient characteristics influence treatment planning." },
  { title: "Emergency Management", text: "A structured understanding of acute surgical presentations and emergency management principles." },
  { title: "Minimally Invasive Surgery", text: "Laparoscopic principles and modern minimally invasive approaches." },
  { title: "Perioperative Care", text: "Patient preparation, postoperative monitoring, pain management, fluid balance, infection prevention, and complication recognition." },
  { title: "Critical Care", text: "Principles involved in managing critically ill surgical patients." },
  { title: "Multidisciplinary Communication", text: "Communicating surgical findings and treatment plans with other healthcare professionals." },
  { title: "Evidence-Based Practice", text: "Evaluating research, reviewing clinical evidence, and incorporating it into clinical decision-making." },
];

const FEE_ROWS = [
  { option: "Fully Online", duration: "12 months", fee: "₹1,80,000" },
  { option: "Online + Clinical Month", duration: "11 online + 1 clinical month (hospital attachment)", fee: "₹2,30,000" },
];

const COMPARISON_ROWS = [
  { feature: "Structured curriculum", medfellow: "Yes — 15 modules over 12 months", hospital: "Usually", short: "Varies" },
  { feature: "Flexible learning", medfellow: "Yes — recorded sessions, weekend live classes", hospital: "Usually limited", short: "Often" },
  { feature: "Clinical component", medfellow: "Available in the 11+1 pathway", hospital: "Usually stronger", short: "Usually limited" },
  { feature: "Duration", medfellow: "12 months", hospital: "Varies", short: "Usually shorter" },
  { feature: "Case-based learning", medfellow: "Yes", hospital: "Yes", short: "Varies" },
  { feature: "Operative experience", medfellow: "Observation / supervised, per pathway", hospital: "Usually stronger", short: "Limited" },
  { feature: "Suitable for working doctors", medfellow: "Yes", hospital: "Often difficult", short: "Yes" },
];

const CAREER_AREAS = [
  { title: "General Surgical Practice", text: "Applying advanced knowledge within roles permitted by your existing qualifications and professional registration." },
  { title: "Laparoscopic Surgery", text: "Supporting professional development where minimally invasive procedures fall within your scope of practice." },
  { title: "Trauma and Emergency Care", text: "Valuable training for doctors working in emergency and trauma-related environments." },
  { title: "Hospital-Based Surgical Teams", text: "Supporting participation in multidisciplinary surgical teams." },
  { title: "Academic and Teaching Development", text: "Teaching, academic presentations, clinical audits, and continuing education." },
];

const CASE_STUDIES = [
  {
    title: "Case Study 1: The Working Hospital Surgeon",
    text: "A surgeon already working in a hospital wants to strengthen knowledge of laparoscopic surgery, emergency procedures, hernia surgery, gastrointestinal surgery, and perioperative management without stepping away from responsibilities. A flexible fellowship provides structured learning around the existing schedule — the key considerations are whether the schedule is realistic and whether the practical component matches expectations. Illustrative example, not a verified learner outcome.",
  },
  {
    title: "Case Study 2: Exploring Before a Longer-Term Path",
    text: "A doctor wants a broader understanding of general surgical conditions before deciding on a longer-term professional pathway. A structured fellowship exposes them to gastrointestinal surgery, hepatobiliary surgery, breast surgery, endocrine surgery, trauma, critical care, and surgical oncology, while formal specialist requirements remain governed separately. Illustrative example, not a verified learner outcome.",
  },
];

const RELATED_LINKS = [
  { name: "Fellowship Course in General Surgery", desc: "Explore eligibility, curriculum, fees, and career opportunities.", href: "/courses/fellowship-in-general-surgery-1-year" },
  { name: "How to Choose a General Surgery Fellowship", desc: "Compare curriculum, faculty, clinical exposure, and fees.", href: "/blog/how-to-choose-a-general-surgery-fellowship" },
  { name: "Questions to Ask Before Joining a General Surgery Fellowship", desc: "A checklist to evaluate the program before you enrol.", href: "/blog/questions-to-ask-before-joining-a-general-surgery-fellowship" },
  { name: "Online vs Offline General Surgery Fellowship", desc: "Compare online, offline, and hybrid formats for a surgical fellowship.", href: "/blog/online-vs-offline-general-surgery-fellowship" },
  { name: "Is a General Surgery Fellowship Worth It?", desc: "The benefits, limitations, and factors to consider before enrolling.", href: "/blog/is-a-general-surgery-fellowship-worth-it" },
  { name: "Skills You Learn During a General Surgery Fellowship", desc: "Assessment, decision-making, emergency management, and perioperative skills.", href: "/blog/skills-you-learn-during-a-general-surgery-fellowship" },
];

const FAQS = [
  { q: "What is a General Surgery Fellowship?", a: "A focused educational program that can provide advanced learning in surgical assessment, surgical conditions, operative principles, perioperative care, emergency surgery, critical care, and related areas." },
  { q: "Who is eligible for a General Surgery Fellowship?", a: "Eligibility depends on the institution. The current MedFellow Academy course lists MS/DNB General Surgery or an equivalent medical qualification." },
  { q: "What does the MedFellow General Surgery Fellowship cover?", a: "15 modules — principles of surgery, surgical infections, trauma and emergency surgery, gastrointestinal surgery, hepatobiliary and pancreatic surgery, breast surgery, endocrine surgery, urology for general surgeons, vascular basics, laparoscopy, hernia surgery, anorectal surgery, critical care, surgical oncology, and skills and procedures training." },
  { q: "How long is the General Surgery Fellowship?", a: "The MedFellow Academy program is structured as a 12-month fellowship." },
  { q: "Can I pursue the fellowship while working?", a: "The current course offers a fully online format with recorded sessions and weekend live classes, making it suitable for doctors who need flexibility." },
  { q: "Is clinical training included?", a: "MedFellow currently offers an 11 Online + 1 Clinical Month option that includes hospital attachment. Verify the exact activities, supervision, and practical scope before enrolling." },
  { q: "Does the fellowship include laparoscopic surgery?", a: "Yes. Laparoscopic (minimal access) surgery is one of the listed modules in the current curriculum." },
  { q: "How much does the MedFellow General Surgery Fellowship cost?", a: "The current listed fee is ₹1,80,000 for the fully online option and ₹2,30,000 for the 11 Online + 1 Clinical Month option, with EMI options available. Fees can change — confirm before enrolling." },
  { q: "Is a General Surgery Fellowship equivalent to a formal specialist qualification?", a: "No. A fellowship certificate and a formally recognised postgraduate or specialist qualification are different credentials. Professional recognition depends on the relevant regulatory framework." },
  { q: "Does completing the fellowship guarantee a job?", a: "No educational program should be treated as a guarantee of employment. Career outcomes depend on qualifications, experience, registration, employer requirements, and location." },
];

export default function GeneralSurgeryGuidePage() {
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
            <span>Best Fellowship Course in General Surgery</span>
          </div>

          <span className="section-label">Advance Your Surgical Career</span>
          <h1 className="section-title mt-2 mb-4 !text-3xl md:!text-4xl">
            Best Fellowship Course in General Surgery
          </h1>

          <p className="text-[1rem] text-text-secondary leading-relaxed mb-4">
            A general surgery fellowship can help doctors strengthen their knowledge of core surgical practice,
            emergency care, minimally invasive surgery, hernia surgery, gastrointestinal surgery, critical care,
            and other important areas. Choosing the best fellowship is about more than a strong title — compare
            the curriculum, faculty, clinical exposure, practical learning, training format, assessments,
            certification, fees, and long-term professional relevance.
          </p>
          <p className="text-[1rem] text-text-secondary leading-relaxed mb-8">
            The MedFellow Academy Fellowship in General Surgery is structured as a 12-month program with hybrid
            delivery and 15 modules — principles of surgery, surgical infections, trauma and emergency surgery,
            gastrointestinal surgery, hepatobiliary and pancreatic surgery, breast surgery, endocrine surgery,
            urology for general surgeons, vascular basics, laparoscopy, hernia surgery, anorectal surgery,
            critical care, surgical oncology, and skills and procedures training. Current fees are listed at
            &#8377;1,80,000 (fully online) and &#8377;2,30,000 (11 online + 1 clinical month), with EMI options.
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
          <span className="section-label">Build Strong Surgical Foundations</span>
          <SectionHeading icon={Award}>Why Choose General Surgery Training?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            General surgery provides a broad foundation for managing surgical conditions across multiple organ
            systems and clinical situations. Structured training organises diagnosis, treatment planning,
            perioperative care, emergency management, and postoperative follow-up into a coherent pathway.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {WHY_TRAIN.map((item) => (
              <div key={item.title} className="card p-4">
                <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-1.5">{item.title}</h3>
                <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Learn What the Course Covers</span>
          <SectionHeading icon={ListChecks}>What Will You Learn in the Fellowship?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            A comprehensive fellowship covers both foundational and advanced areas of surgical practice. The
            current MedFellow course lists 15 modules:
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {MODULES.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <Link href="/blog/skills-you-learn-during-a-general-surgery-fellowship" className="inline-block mt-5 text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            Read more: Skills You Learn During a General Surgery Fellowship →
          </Link>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Build Skills That Matter</span>
          <SectionHeading icon={Target}>What Skills Can You Develop?</SectionHeading>
          <div className="grid sm:grid-cols-2 gap-4">
            {SKILLS.map((item) => (
              <div key={item.title} className="card p-4">
                <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-1.5">{item.title}</h3>
                <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Choose Your Learning Format</span>
          <SectionHeading icon={Clock}>Online, Offline or Hybrid General Surgery?</SectionHeading>
          <div className="grid sm:grid-cols-3 gap-4 mb-4">
            <div className="card p-4">
              <h3 className="text-[0.875rem] font-bold text-[#15401E] mb-2">Online</h3>
              <p className="text-[0.8125rem] text-text-secondary leading-relaxed">Useful for doctors wanting flexibility — lectures, case discussions, recorded sessions, assignments, assessments, and research-oriented learning.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-[0.875rem] font-bold text-[#15401E] mb-2">Offline</h3>
              <p className="text-[0.8125rem] text-text-secondary leading-relaxed">Greater opportunities for direct faculty interaction, hospital exposure, observation, simulation, and supervised clinical learning.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-[0.875rem] font-bold text-[#15401E] mb-2">Hybrid</h3>
              <p className="text-[0.8125rem] text-text-secondary leading-relaxed">Online academic learning with in-person components — useful for working doctors who also want some hospital-based exposure.</p>
            </div>
          </div>
          <p className="text-[0.875rem] text-text-secondary leading-relaxed mb-4">
            MedFellow currently offers a fully online 12-month option and an 11-online-month plus 1-clinical-month
            option for its General Surgery fellowship.
          </p>
          <Link href="/blog/online-vs-offline-general-surgery-fellowship" className="inline-block text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            Compare in detail: Online vs Offline General Surgery Fellowship →
          </Link>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Check Your Eligibility First</span>
          <SectionHeading icon={Users}>Who Can Pursue a General Surgery Fellowship?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Eligibility differs between institutions — always check the official requirements. The MedFellow
            Academy course currently lists <strong>MS/DNB General Surgery or an equivalent medical
            qualification</strong>. Confirm your postgraduate qualification, professional registration, and any
            experience expectations before applying.
          </p>
          <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg">
            <p className="text-[0.875rem] text-[#374151] leading-relaxed">
              A fellowship provides focused additional education. It should not automatically be treated as a
              replacement for a formally recognised surgical residency or specialist qualification — professional
              recognition, specialist registration, licensing, and hospital privileges depend on the relevant
              jurisdiction and regulatory authority.
            </p>
          </div>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Understand the Practical Component</span>
          <SectionHeading icon={ClipboardCheck}>How Important Is Clinical Exposure?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            For a surgical fellowship, clinical exposure deserves careful evaluation. The term can mean case
            discussions, hospital observation, operating-room observation, simulation, skills training, or
            supervised clinical activities — ask the provider to explain exactly what is included, who supervises
            it, and what level of participation is permitted. For hospital-based exposure, verify the centre,
            duration, attendance requirements, and any additional expenses.
          </p>
          <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg">
            <p className="text-[0.875rem] text-[#374151] leading-relaxed">
              Clinical exposure should not automatically be interpreted as independent procedural competency.
              Procedural competency requires appropriate training, supervision, case experience, assessment, and
              authorisation within the applicable clinical setting.
            </p>
          </div>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Compare the Financial Investment</span>
          <SectionHeading icon={ClipboardList}>How Much Does a General Surgery Fellowship Cost?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Fees vary by provider, duration, delivery model, and clinical components. The current MedFellow page
            lists:
          </p>
          <div className="overflow-x-auto rounded-lg border border-[#E5E7EB] mb-4">
            <table className="w-full text-[0.875rem] text-left">
              <thead className="bg-[#15401E] text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Training Option</th>
                  <th className="px-4 py-3 font-semibold">Duration</th>
                  <th className="px-4 py-3 font-semibold">Current Listed Fee</th>
                </tr>
              </thead>
              <tbody>
                {FEE_ROWS.map((r, i) => (
                  <tr key={r.option} className={i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"}>
                    <td className="px-4 py-3 font-medium text-[#111827] border-t border-[#F3F4F6]">{r.option}</td>
                    <td className="px-4 py-3 text-[#374151] border-t border-[#F3F4F6]">{r.duration}</td>
                    <td className="px-4 py-3 text-[#374151] border-t border-[#F3F4F6]">{r.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[0.875rem] text-text-secondary leading-relaxed">
            Look beyond tuition — check registration, assessment, certification, clinical attachment, travel,
            accommodation, and learning-resource costs, and review EMI terms carefully if you use them. Compare
            value, not just price, and confirm the latest fee before enrolling.
          </p>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Make the Right Comparison</span>
          <SectionHeading icon={ShieldCheck}>MedFellow vs Other General Surgery Fellowships</SectionHeading>
          <div className="overflow-x-auto rounded-lg border border-[#E5E7EB] mb-4">
            <table className="w-full text-[0.875rem] text-left">
              <thead className="bg-[#15401E] text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Factor</th>
                  <th className="px-4 py-3 font-semibold">MedFellow Academy</th>
                  <th className="px-4 py-3 font-semibold">Hospital-Based Fellowship</th>
                  <th className="px-4 py-3 font-semibold">Short Surgery Course</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((r, i) => (
                  <tr key={r.feature} className={i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"}>
                    <td className="px-4 py-3 font-medium text-[#111827] border-t border-[#F3F4F6]">{r.feature}</td>
                    <td className="px-4 py-3 text-[#374151] border-t border-[#F3F4F6]">{r.medfellow}</td>
                    <td className="px-4 py-3 text-[#374151] border-t border-[#F3F4F6]">{r.hospital}</td>
                    <td className="px-4 py-3 text-[#374151] border-t border-[#F3F4F6]">{r.short}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">See Where Training Can Lead</span>
          <SectionHeading icon={Briefcase}>Career Opportunities After Fellowship</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            A general surgery fellowship can support professional development in several areas, depending on your
            underlying qualifications, experience, registration, and local requirements. The current course
            identifies career directions including General Surgeon, Laparoscopic Surgeon, and Trauma Surgeon —
            career areas, not guaranteed outcomes.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {CAREER_AREAS.map((c) => (
              <div key={c.title} className="card p-4">
                <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-1.5">{c.title}</h3>
                <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">See Different Learning Goals</span>
          <SectionHeading icon={Quote}>Client Case Studies</SectionHeading>
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
          <span className="section-label">Know the Value Before Joining</span>
          <SectionHeading icon={HelpCircle}>Is a General Surgery Fellowship Worth It?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            A fellowship can be valuable when it fills a genuine knowledge or professional-development need — to
            strengthen general surgery knowledge, study a broader range of surgical conditions, improve clinical
            decision-making, learn about minimally invasive surgery, build trauma and emergency knowledge, or
            continue education while working. If your primary goal is a formal specialist qualification or
            independent operative privileges, evaluate the program carefully — a fellowship should not be assumed
            to replace a recognised residency or regulatory pathway. The right question is not just whether the
            fee is worth it, but what knowledge, exposure, and skills it will add to your existing qualifications.
          </p>
          <Link href="/blog/is-a-general-surgery-fellowship-worth-it" className="inline-block text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            Read the full analysis: Is a General Surgery Fellowship Worth It? →
          </Link>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Explore Your Fellowship Options</span>
          <SectionHeading icon={ClipboardList}>Take the Next Step in Your Surgical Career</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            Explore the MedFellow Academy Fellowship in General Surgery to review the 15-module curriculum,
            eligibility, learning format, fees, and clinical training options — then choose the pathway that fits
            your professional schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/apply" className="inline-flex items-center justify-center px-6 py-3 bg-[#15401E] text-white rounded-md font-semibold text-[0.9375rem] hover:bg-[#0f2e15] transition-colors">
              Apply Now
            </Link>
            <Link href="/courses/fellowship-in-general-surgery-1-year" className="inline-flex items-center justify-center px-6 py-3 bg-white border border-[#D1D5DB] text-[#15401E] rounded-md font-semibold text-[0.9375rem] hover:border-[#15401E] transition-colors">
              Explore the Fellowship Course
            </Link>
          </div>
        </section>

        <section className="py-8">
          <span className="section-label">Continue Your Surgery Research</span>
          <SectionHeading icon={Link2}>Explore the General Surgery Cluster</SectionHeading>
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
        <TopicClusterLinks title="General Surgery Resources" links={CLUSTER_LINKS} />
      </div>
      </div>
      </div>

      <FAQ faqs={FAQS} />

      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import TopicClusterLinks from "@/components/TopicClusterLinks";
import {
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
  HelpCircle,
} from "lucide-react";

const CLUSTER_LINKS = [
  { label: "Best Fellowship Course in Cardiothoracic Surgery (Guide)", href: "/courses/best-fellowship-course-in-cardiothoracic-surgery", type: "guide" as const },
  { label: "How to Choose a Cardiothoracic Surgery Fellowship", href: "/blog/how-to-choose-a-cardiothoracic-surgery-fellowship", type: "blog" as const },
  { label: "Questions to Ask Before Joining a Cardiothoracic Surgery Fellowship", href: "/blog/questions-to-ask-before-joining-a-cardiothoracic-surgery-fellowship", type: "blog" as const },
  { label: "Online vs Offline Cardiothoracic Surgery Fellowship", href: "/blog/online-vs-offline-cardiothoracic-surgery-fellowship", type: "blog" as const },
  { label: "Is a Cardiothoracic Surgery Fellowship Worth It?", href: "/blog/is-a-cardiothoracic-surgery-fellowship-worth-it", type: "blog" as const },
  { label: "Career Opportunities After a Cardiothoracic Surgery Fellowship", href: "/blog/career-opportunities-after-a-cardiothoracic-surgery-fellowship", type: "blog" as const },
  { label: "Skills You Learn During a Cardiothoracic Surgery Fellowship", href: "/blog/skills-you-learn-during-a-cardiothoracic-surgery-fellowship", type: "blog" as const },
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
  title: "Best Fellowship Course in Cardiothoracic Surgery | MedFellow",
  description:
    "Explore best and advanced cardiothoracic surgery training designed for doctors seeking structured specialty learning — curriculum, clinical exposure, skills, eligibility, formats, certification and career scope.",
  keywords:
    "cardiothoracic surgery fellowship, fellowship in cardiothoracic surgery, best cardiothoracic surgery fellowship, cardiothoracic surgery fellowship course, cardiothoracic surgery training",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/courses/best-fellowship-course-in-cardiothoracic-surgery/" },
  openGraph: {
    title: "Best Fellowship Course in Cardiothoracic Surgery",
    description:
      "Explore advanced cardiothoracic surgery training designed for doctors seeking structured specialty learning.",
    type: "article",
    url: "https://www.medfellowacademy.com/courses/best-fellowship-course-in-cardiothoracic-surgery/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Fellowship in Cardiothoracic Surgery" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Fellowship Course in Cardiothoracic Surgery",
    description: "A complete guide for doctors seeking structured advanced training in cardiac and thoracic surgical care.",
  },
};

const STATS = [
  { icon: "🎓", value: "46+", label: "Medical Fellowship Programs" },
  { icon: "👨‍⚕️", value: "3,500+", label: "Doctors Trained" },
  { icon: "🫀", value: "Cardiac & Thoracic", label: "Specialty Focus" },
  { icon: "⭐", value: "4.8/5", label: "Doctor Satisfaction Rating" },
];

const CURRICULUM_AREAS = [
  "Cardiovascular and thoracic anatomy",
  "Cardiac physiology and hemodynamics",
  "Coronary artery disease",
  "CABG principles",
  "Valve disorders and surgical management",
  "Aortic disease",
  "Congenital heart disease",
  "Thoracic and lung surgery",
  "Cardiopulmonary bypass",
  "ECMO and mechanical circulatory support",
  "Cardiac and thoracic imaging",
  "Minimally invasive and robotic approaches",
  "Cardiothoracic critical care",
  "Research and evidence-based practice",
];

const CORE_LEARNING = [
  { title: "Cardiovascular Foundations", text: "Cardiac anatomy, physiology, hemodynamics, cardiovascular pathology, and the principles of surgical evaluation." },
  { title: "Coronary Artery Disease", text: "Evaluation of coronary disease and the principles of coronary revascularization, including CABG concepts, graft selection, operative planning, and postoperative management." },
  { title: "Valvular Heart Disease", text: "Common valve disorders, indications for intervention, principles of valve repair and replacement, and perioperative considerations." },
  { title: "Aortic Surgery", text: "Aortic aneurysms, dissections, aortic root disease, surgical planning, and postoperative surveillance." },
  { title: "Thoracic Surgery", text: "Lung, airway, mediastinal, and chest wall disorders along with the principles of thoracic surgical intervention." },
  { title: "Congenital and Pediatric Cardiac Conditions", text: "Congenital cardiac anatomy, common defects, surgical principles, and special considerations in pediatric patients (depending on program scope)." },
  { title: "Cardiopulmonary Bypass and ECMO", text: "Principles of extracorporeal circulation, cardiopulmonary bypass, myocardial protection, bypass-related complications, and the clinical role of ECMO." },
  { title: "Imaging and Diagnostics", text: "Connecting clinical findings with ECG, echocardiography, CT, MRI, angiography, and other relevant investigations." },
  { title: "Critical Care and Postoperative Management", text: "Hemodynamic monitoring, ventilation, vasoactive support, arrhythmia management, renal support, infection control, and recognition of postoperative complications." },
  { title: "Minimally Invasive and Emerging Techniques", text: "Minimally invasive, robotic, hybrid, and technology-assisted approaches, plus evolving standards of care." },
];

const WHAT_MAKES_BEST = [
  { title: "Relevant and Structured Curriculum", text: "A curriculum that moves from foundational science to clinical evaluation, surgical principles, perioperative care, and advanced topics." },
  { title: "Experienced Faculty", text: "Complex surgical concepts are easier to understand when connected to real-world decision-making, case discussions, complications, and current practice." },
  { title: "Case-Based Learning", text: "Exposure to case-based thinking — how patient findings influence investigations, surgical planning, perioperative management, and postoperative care." },
  { title: "Clinical or Practical Exposure", text: "Structured clinical exposure, simulation, observerships, or hands-on opportunities where applicable. Exposure is not the same as independent procedural competency." },
  { title: "Flexible Learning Format", text: "A flexible or hybrid model can make advanced education easier to manage alongside professional responsibilities." },
  { title: "Assessment and Academic Support", text: "Meaningful assessment through assignments, case discussions, examinations, presentations, projects, or other academic activities." },
];

const CHOOSE_CHECKLIST = [
  { title: "Review the Curriculum", text: "Check whether the syllabus covers the cardiac, thoracic, diagnostic, perioperative, critical care, and emerging areas relevant to your goals." },
  { title: "Check Faculty Experience", text: "Review faculty qualifications, clinical backgrounds, teaching experience, and areas of expertise." },
  { title: "Ask About Clinical Exposure", text: "Find out exactly what is included — observation, supervised practical exposure, simulation, case discussions, or hospital-based training." },
  { title: "Understand the Certificate", text: "Ask who issues the certificate, what it represents academically, and how it may be used professionally." },
  { title: "Check Duration and Schedule", text: "A course should fit realistically into your professional schedule without compromising learning quality." },
  { title: "Compare Total Cost", text: "Do not compare tuition alone — consider learning resources, assessments, clinical components, travel, accommodation, and other mandatory expenses." },
  { title: "Look at Career Relevance", text: "The strongest program supports your actual professional objective rather than simply adding another credential." },
];

const COMPARISON_ROWS = [
  { feature: "Structured curriculum", medfellow: "Yes", hospital: "Yes", cert: "Varies" },
  { feature: "Flexible learning", medfellow: "Yes", hospital: "Limited", cert: "Usually yes" },
  { feature: "Case-based academic learning", medfellow: "Yes", hospital: "Yes", cert: "Varies" },
  { feature: "Clinical exposure", medfellow: "Program-dependent", hospital: "Usually strong", cert: "Usually limited" },
  { feature: "Suitable for working doctors", medfellow: "Yes", hospital: "Often difficult", cert: "Yes" },
  { feature: "Duration", medfellow: "Program-specific", hospital: "Often longer", cert: "Often shorter" },
  { feature: "Advanced specialty focus", medfellow: "Yes", hospital: "Yes", cert: "Varies" },
  { feature: "Best suited for", medfellow: "Structured specialty learning and professional development", hospital: "Intensive hospital-based training", cert: "Short-term upskilling" },
];

const SKILLS = [
  { title: "Clinical Assessment Skills", text: "Structured evaluation of patients presenting with cardiovascular and thoracic conditions." },
  { title: "Diagnostic Interpretation", text: "An integrated understanding of ECG, echocardiography, CT, MRI, angiography, and related investigations." },
  { title: "Surgical Decision-Making", text: "How diagnosis, anatomy, comorbidities, operative risk, and available treatment options influence surgical planning." },
  { title: "Perioperative Management", text: "Optimization before surgery, intraoperative principles, and postoperative monitoring." },
  { title: "Critical Care Knowledge", text: "Hemodynamic support, mechanical ventilation, arrhythmias, infection, renal complications, and low cardiac output states." },
  { title: "Evidence-Based Practice", text: "Evaluating clinical literature, participating in academic discussions, conducting audits, and using current evidence." },
];

const CAREER_AREAS = [
  "Cardiothoracic surgery departments", "Cardiac and thoracic care teams", "Multidisciplinary cardiovascular services",
  "Academic and teaching environments", "Clinical research", "Continuing specialty education", "Further advanced surgical training",
];

const CASE_STUDIES = [
  {
    title: "Case Study 1: The Working Doctor",
    text: "A working doctor wants structured exposure to cardiothoracic surgery but cannot leave current professional responsibilities for a long residential program. A flexible fellowship can help the doctor maintain regular work while building knowledge through structured classes, case discussions, academic projects, and any included clinical exposure.",
  },
  {
    title: "Case Study 2: The Surgeon Planning Further Training",
    text: "A surgeon already working in a related specialty wants stronger academic exposure to cardiovascular and thoracic conditions before pursuing additional formal training. A targeted fellowship can provide a structured framework for reviewing anatomy, diagnostics, perioperative care, surgical principles, and emerging technologies. These are illustrative examples, not testimonials.",
  },
];

const RELATED_LINKS = [
  { name: "Fellowship Course in Cardiothoracic Surgery", desc: "Review the curriculum, clinical exposure, faculty expertise, training format, fees, and career opportunities.", href: "/courses/fellowship-in-cardiothoracic-surgery" },
  { name: "How to Choose a Cardiothoracic Surgery Fellowship", desc: "Compare curriculum, faculty, clinical exposure, fees, and learning formats.", href: "/blog/how-to-choose-a-cardiothoracic-surgery-fellowship" },
  { name: "Questions to Ask Before Joining a Cardiothoracic Surgery Fellowship", desc: "Use this checklist before selecting a cardiothoracic surgery fellowship course.", href: "/blog/questions-to-ask-before-joining-a-cardiothoracic-surgery-fellowship" },
  { name: "Online vs Offline Cardiothoracic Surgery Fellowship", desc: "Compare flexibility, academic learning, clinical exposure, and practical training.", href: "/blog/online-vs-offline-cardiothoracic-surgery-fellowship" },
  { name: "Is a Cardiothoracic Surgery Fellowship Worth It?", desc: "Understand the potential benefits, limitations, and career considerations.", href: "/blog/is-a-cardiothoracic-surgery-fellowship-worth-it" },
  { name: "Career Opportunities After a Cardiothoracic Surgery Fellowship", desc: "Explore potential professional pathways after advanced cardiothoracic training.", href: "/blog/career-opportunities-after-a-cardiothoracic-surgery-fellowship" },
  { name: "Skills You Learn During a Cardiothoracic Surgery Fellowship", desc: "The clinical, diagnostic, perioperative, and academic skills covered by fellowship training.", href: "/blog/skills-you-learn-during-a-cardiothoracic-surgery-fellowship" },
];

const FAQS = [
  {
    q: "What is a cardiothoracic surgery fellowship?",
    a: "A cardiothoracic surgery fellowship is advanced specialty training focused on the cardiovascular system, thoracic organs, surgical principles, perioperative care, critical care, diagnostics, and related areas.",
  },
  {
    q: "What is covered in a cardiothoracic surgery fellowship course?",
    a: "A comprehensive course may cover cardiac anatomy and physiology, coronary disease, CABG, valve disease, aortic surgery, thoracic surgery, congenital conditions, cardiopulmonary bypass, ECMO, imaging, critical care, minimally invasive techniques, and research.",
  },
  {
    q: "Is an online cardiothoracic surgery fellowship useful?",
    a: "Online learning can be useful for academic knowledge, case discussions, and structured specialty education. However, doctors should separately evaluate practical or clinical exposure because online learning alone cannot replicate supervised procedural experience.",
  },
  {
    q: "Who can apply for a cardiothoracic surgery fellowship?",
    a: "Eligibility depends on the specific institution. Medical qualifications, postgraduate training, professional registration, specialty background, and experience may all be considered.",
  },
  {
    q: "How long does a cardiothoracic surgery fellowship take?",
    a: "Duration varies by provider and program design. Doctors should check the official course page for the current duration, curriculum, and schedule.",
  },
  {
    q: "Does a fellowship make me a cardiothoracic surgeon?",
    a: "Not automatically. A fellowship certificate should not be treated as a replacement for a formal recognized superspecialty qualification or specialist registration where such requirements apply.",
  },
  {
    q: "Can a fellowship improve my cardiothoracic surgery knowledge?",
    a: "Yes. A structured curriculum can deepen knowledge of cardiothoracic conditions, diagnostics, surgical principles, perioperative care, critical care, and newer technologies.",
  },
  {
    q: "How do I choose the best cardiothoracic surgery fellowship?",
    a: "Compare curriculum, faculty, practical exposure, learning format, assessments, certificate issuer, duration, total cost, academic support, and relevance to your long-term career goals.",
  },
  {
    q: "What is the difference between cardiothoracic surgery and cardiac surgery?",
    a: "Cardiac surgery primarily focuses on surgical conditions of the heart and related structures, while cardiothoracic surgery encompasses both cardiac and thoracic conditions, including diseases involving the lungs, mediastinum, airway, and chest.",
  },
  {
    q: "Can working doctors pursue a cardiothoracic fellowship?",
    a: "Some programs are designed with working professionals in mind, particularly when the academic component is flexible. The schedule and clinical requirements should be checked before enrollment.",
  },
];

export default function CardiothoracicGuidePage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Breadcrumb + Hero */}
      <section className="border-b border-[#E5E7EB] py-10 md:py-14">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-text-secondary mb-6">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/courses" className="hover:text-primary">Courses</Link>
            <span>/</span>
            <span>Best Fellowship Course in Cardiothoracic Surgery</span>
          </div>

          <span className="section-label">Build Advanced Surgical Knowledge</span>
          <h1 className="section-title mt-2 mb-4 !text-3xl md:!text-4xl">
            Best Fellowship Course in Cardiothoracic Surgery
          </h1>

          <p className="text-[1rem] text-text-secondary leading-relaxed mb-4">
            A Cardiothoracic Surgery Fellowship can help qualified doctors and surgeons strengthen their
            understanding of cardiovascular and thoracic conditions, surgical decision-making, perioperative
            care, advanced imaging, critical care, and evolving surgical techniques.
          </p>
          <p className="text-[1rem] text-text-secondary leading-relaxed mb-8">
            Choosing the best fellowship in cardiothoracic surgery is not simply about selecting a course with
            an attractive title. The quality of the curriculum, faculty, clinical relevance, learning format,
            case-based education, assessment methods, and opportunities for practical exposure all matter.
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

        {/* Why It Matters */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Go Beyond General Surgical Knowledge</span>
          <SectionHeading icon={Award}>Why Cardiothoracic Training Matters</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Cardiothoracic surgery requires an understanding of complex anatomy, physiology, imaging, operative
            principles, perioperative decision-making, and intensive postoperative care. A strong fellowship
            curriculum should connect these areas rather than treating them as isolated subjects.
          </p>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-3">
            Training may cover the fundamentals of coronary artery disease, valvular heart disease, aortic
            pathology, and congenital heart conditions, alongside thoracic surgery extending beyond the heart
            to the lungs, airways, mediastinum, and chest wall. Successful cardiothoracic care also involves
            much more than the operation itself:
          </p>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed">
            Preoperative assessment, risk evaluation, anesthesia considerations, postoperative monitoring,
            ventilation, hemodynamic management, infection prevention, and recognition of complications are all
            important components of patient care.
          </p>
        </section>

        {/* What Makes the Best Fellowship */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Choose Training With Purpose</span>
          <SectionHeading icon={GraduationCap}>What Makes the Best Fellowship?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            There is no single fellowship that is automatically the best for every doctor. The right program
            depends on professional background, learning goals, desired clinical exposure, and long-term career
            plans. When comparing a Best Cardiothoracic Surgery Fellowship, consider these factors:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {WHAT_MAKES_BEST.map((item) => (
              <div key={item.title} className="card p-4">
                <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-1.5">{item.title}</h3>
                <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Curriculum */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Explore the Core Learning Areas</span>
          <SectionHeading icon={ListChecks}>What Will You Learn in a Cardiothoracic Fellowship?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            The exact curriculum differs by institution, but a comprehensive Fellowship in Cardiothoracic
            Surgery may cover:
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {CURRICULUM_AREAS.map((item) => (
              <span key={item} className="px-3 py-1 bg-[#e8f2ea] text-[#15401E] rounded-full text-[0.8125rem] font-medium">{item}</span>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {CORE_LEARNING.map((m) => (
              <div key={m.title} className="card p-4">
                <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-1.5">{m.title}</h3>
                <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
          <Link href="/blog/skills-you-learn-during-a-cardiothoracic-surgery-fellowship" className="inline-block mt-5 text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            Read more: Skills You Learn During a Cardiothoracic Surgery Fellowship →
          </Link>
        </section>

        {/* Who Should Consider */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Match the Course to Your Goals</span>
          <SectionHeading icon={Users}>Who Should Consider This Fellowship?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            A cardiothoracic fellowship may be relevant for doctors seeking advanced academic exposure in
            cardiovascular and thoracic surgery, especially those looking to deepen their knowledge without
            immediately committing to a longer formal superspecialty pathway. Eligibility varies considerably
            between programs.
          </p>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            In India, formal superspecialty pathways in cardiothoracic surgery exist through recognized
            postgraduate medical education routes. The National Board of Examinations in Medical Sciences lists
            Cardio Thoracic Surgery among its superspecialty disciplines and also lists a direct six-year
            Cardio Vascular &amp; Thoracic Surgery route. Doctors should distinguish between academic fellowship
            training (advanced knowledge, structured education, professional development) and a formal
            superspecialty qualification (governed by the relevant medical education and regulatory framework).
          </p>
          <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg">
            <p className="text-[0.875rem] text-[#374151] leading-relaxed">
              A fellowship certificate should not be assumed to independently confer specialist registration,
              consultant status, or procedural privileges. Those depend on the applicable regulator, employer,
              hospital, and jurisdiction.
            </p>
          </div>
        </section>

        {/* Format */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Pick the Format That Fits</span>
          <SectionHeading icon={Clock}>Online, Offline or Hybrid: Which Is Better?</SectionHeading>
          <div className="grid sm:grid-cols-3 gap-4 mb-4">
            <div className="card p-4">
              <h3 className="text-[0.875rem] font-bold text-[#15401E] mb-2">Online</h3>
              <p className="text-[0.8125rem] text-text-secondary leading-relaxed">Useful for doctors who need flexibility — access lectures, case discussions, presentations, assessments, and digital learning resources alongside professional commitments.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-[0.875rem] font-bold text-[#15401E] mb-2">Offline</h3>
              <p className="text-[0.8125rem] text-text-secondary leading-relaxed">Face-to-face training may provide greater opportunities for direct interaction, hospital-based observation, supervised clinical learning, and exposure to the surgical environment.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-[0.875rem] font-bold text-[#15401E] mb-2">Hybrid</h3>
              <p className="text-[0.8125rem] text-text-secondary leading-relaxed">Combines academic learning with appropriate practical or clinical exposure — a practical balance between flexibility and clinical learning for working doctors.</p>
            </div>
          </div>
          <p className="text-[0.875rem] text-text-secondary leading-relaxed">
            The key question is not whether online or offline is universally better. It is whether the
            program&apos;s format matches the learning outcomes it promises.
          </p>
          <Link href="/blog/online-vs-offline-cardiothoracic-surgery-fellowship" className="inline-block mt-4 text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            Compare in detail: Online vs Offline Cardiothoracic Surgery Fellowship →
          </Link>
        </section>

        {/* How to Choose */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Compare Before You Enroll</span>
          <SectionHeading icon={ClipboardList}>How to Choose the Best Fellowship Course</SectionHeading>
          <div className="grid sm:grid-cols-2 gap-4">
            {CHOOSE_CHECKLIST.map((item) => (
              <div key={item.title} className="card p-4">
                <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-1.5">{item.title}</h3>
                <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Compare What Matters Most</span>
          <SectionHeading icon={ShieldCheck}>MedFellow vs Other Fellowship Options</SectionHeading>
          <div className="overflow-x-auto rounded-lg border border-[#E5E7EB] mb-4">
            <table className="w-full text-[0.875rem] text-left">
              <thead className="bg-[#15401E] text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Factor</th>
                  <th className="px-4 py-3 font-semibold">MedFellow Academy</th>
                  <th className="px-4 py-3 font-semibold">Traditional Hospital Fellowship</th>
                  <th className="px-4 py-3 font-semibold">Short Certificate Course</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((r, i) => (
                  <tr key={r.feature} className={i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"}>
                    <td className="px-4 py-3 font-medium text-[#111827] border-t border-[#F3F4F6]">{r.feature}</td>
                    <td className="px-4 py-3 text-[#374151] border-t border-[#F3F4F6]">{r.medfellow}</td>
                    <td className="px-4 py-3 text-[#374151] border-t border-[#F3F4F6]">{r.hospital}</td>
                    <td className="px-4 py-3 text-[#374151] border-t border-[#F3F4F6]">{r.cert}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[0.875rem] text-text-secondary leading-relaxed">
            The most important comparison is not the brand name. It is the learning outcome, supervision,
            clinical exposure, curriculum depth, faculty quality, and relevance to your career goal.
          </p>
        </section>

        {/* Skills */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Build Knowledge That Supports Practice</span>
          <SectionHeading icon={Target}>Skills You Can Develop During Training</SectionHeading>
          <div className="grid sm:grid-cols-2 gap-4">
            {SKILLS.map((item) => (
              <div key={item.title} className="card p-4">
                <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-1.5">{item.title}</h3>
                <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Career */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Turn Advanced Learning Into Value</span>
          <SectionHeading icon={Briefcase}>Career Opportunities After a Fellowship</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            A Cardiothoracic Surgery Fellowship may support professional development in areas such as:
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-4">
            {CAREER_AREAS.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-[0.875rem] text-text-secondary leading-relaxed mb-3">
            Career outcomes depend on a doctor&apos;s underlying qualification, registration, experience,
            hospital requirements, and local regulations. For doctors who ultimately want to practise as
            independent cardiothoracic surgeons, a fellowship should be viewed as an additional educational
            component rather than a substitute for the formal specialist training pathway required by the
            relevant regulator.
          </p>
          <Link href="/blog/career-opportunities-after-a-cardiothoracic-surgery-fellowship" className="inline-block text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            Explore career pathways in detail →
          </Link>
        </section>

        {/* Is It Worth It */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Make the Decision Strategically</span>
          <SectionHeading icon={HelpCircle}>Is a Cardiothoracic Fellowship Worth It?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            A fellowship can be worthwhile when its learning outcomes align with your career plans. It may be
            especially valuable when you are looking for focused specialty education, flexible professional
            development, advanced academic knowledge, or preparation for further training. However, doctors
            should always ask what the fellowship will add to their existing qualifications and whether the
            program&apos;s recognition and clinical components match their intended use.
          </p>
          <Link href="/blog/is-a-cardiothoracic-surgery-fellowship-worth-it" className="inline-block text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            Read the full analysis: Is a Cardiothoracic Surgery Fellowship Worth It? →
          </Link>
        </section>

        {/* Case Studies */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">See How Different Goals Shape Choices</span>
          <SectionHeading icon={Quote}>Illustrative Career Case Studies</SectionHeading>
          <div className="grid md:grid-cols-2 gap-4">
            {CASE_STUDIES.map((c) => (
              <div key={c.title} className="card p-5">
                <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-2">{c.title}</h3>
                <p className="text-[0.8125rem] text-[#374151] leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Explore Your Fellowship Options</span>
          <SectionHeading icon={ClipboardCheck}>Take the Next Step in Your Training</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            Choosing the right Fellowship in Cardiothoracic Surgery is a career decision, not simply a course
            purchase. Review the curriculum, faculty, delivery format, clinical exposure, eligibility
            requirements, assessment structure, certification, and career relevance before enrolling.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#15401E] text-white rounded-md font-semibold text-[0.9375rem] hover:bg-[#0f2e15] transition-colors"
            >
              Apply Now
            </Link>
            <Link
              href="/courses/fellowship-in-cardiothoracic-surgery"
              className="inline-flex items-center justify-center px-6 py-3 bg-white border border-[#D1D5DB] text-[#15401E] rounded-md font-semibold text-[0.9375rem] hover:border-[#15401E] transition-colors"
            >
              Explore the Fellowship Course
            </Link>
          </div>
        </section>

        {/* Related */}
        <section className="py-8">
          <span className="section-label">Related Resources</span>
          <SectionHeading icon={Link2}>Continue Your Cardiothoracic Journey</SectionHeading>
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
        <TopicClusterLinks title="Cardiothoracic Surgery Resources" links={CLUSTER_LINKS} />
      </div>
      </div>
      </div>

      <FAQ faqs={FAQS} />

      <Footer />
    </div>
  );
}

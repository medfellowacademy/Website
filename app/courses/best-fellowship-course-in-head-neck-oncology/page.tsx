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
  { label: "Best Fellowship Course in Head & Neck Oncology (Guide)", href: "/courses/best-fellowship-course-in-head-neck-oncology", type: "guide" as const },
  { label: "How to Choose a Head & Neck Oncology Fellowship", href: "/blog/how-to-choose-a-head-neck-oncology-fellowship", type: "blog" as const },
  { label: "Questions to Ask Before Joining a Head & Neck Oncology Fellowship", href: "/blog/questions-to-ask-before-joining-a-head-neck-oncology-fellowship", type: "blog" as const },
  { label: "Online vs Offline Head & Neck Oncology Fellowship", href: "/blog/online-vs-offline-head-neck-oncology-fellowship", type: "blog" as const },
  { label: "Skills You Learn During a Head & Neck Oncology Fellowship", href: "/blog/skills-you-learn-during-a-head-neck-oncology-fellowship", type: "blog" as const },
  { label: "Career Opportunities After a Head & Neck Oncology Fellowship", href: "/blog/career-opportunities-after-a-head-neck-oncology-fellowship", type: "blog" as const },
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
  title: "Best Fellowship Course in Head & Neck Oncology | MedFellow Academy",
  description:
    "Compare the best fellowship course in head & neck oncology — diagnosis, staging, site-specific cancers, surgical oncology, reconstruction, radiation and systemic therapy, in a 12-month hybrid program.",
  keywords:
    "fellowship in head & neck oncology, best head & neck oncology fellowship, head & neck oncology fellowship course, head & neck oncology training, head and neck surgical oncology fellowship",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/courses/best-fellowship-course-in-head-neck-oncology/" },
  openGraph: {
    title: "Best Fellowship Course in Head & Neck Oncology",
    description:
      "A 12-month hybrid fellowship covering diagnosis and staging, site-specific cancers, surgical oncology, reconstruction, radiation, systemic therapy and multidisciplinary cancer care.",
    type: "article",
    url: "https://www.medfellowacademy.com/courses/best-fellowship-course-in-head-neck-oncology/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy Fellowship in Head & Neck Oncology" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Fellowship Course in Head & Neck Oncology",
    description: "A complete guide for doctors seeking structured advanced training in head and neck surgical oncology.",
  },
};

const STATS = [
  { icon: "🎓", value: "46+", label: "Medical Fellowship Programs" },
  { icon: "👨‍⚕️", value: "3,500+", label: "Doctors Trained" },
  { icon: "🩺", value: "12 months", label: "Hybrid Curriculum" },
  { icon: "⭐", value: "4.8/5", label: "Doctor Satisfaction Rating" },
];

const MODULES = [
  "Fundamentals of Head & Neck Oncology",
  "Diagnostic Evaluation and Staging",
  "Site-Specific Cancers",
  "Surgical Oncology",
  "Reconstruction and Rehabilitation",
  "Radiation Oncology in Head & Neck",
  "Systemic Therapy in Head & Neck Cancer",
  "Multidisciplinary Cancer Care & Tumor Boards",
  "Postoperative and Palliative Care",
  "Research, Communication and Ethics in Oncology",
];

const SUBSITES = [
  "Oral cavity", "Oropharynx", "Nasopharynx", "Hypopharynx", "Larynx",
  "Salivary glands", "Thyroid", "Sinonasal tract", "Skin and related head and neck structures",
];

const WHAT_MAKES_BEST = [
  { title: "Diagnostic Evaluation and Staging", text: "Principles of diagnostic work-up, pathology, imaging, and staging — stage strongly influences treatment strategy by site, extent, nodal involvement, and patient factors." },
  { title: "Site-Specific Cancer Learning", text: "Multiple anatomical subsites with different presentation and treatment patterns, organised around disease-site learning (as in the AHNS standardised curriculum)." },
  { title: "Surgical Oncology", text: "Oncologic resection principles, neck management, margins, functional preservation, and postoperative planning across different tumors." },
  { title: "Reconstruction and Rehabilitation", text: "A dedicated module connecting oncologic surgery with restoring speech, swallowing, breathing, facial movement, and appearance." },
  { title: "Radiation and Systemic Therapy", text: "How radiation and medical oncology integrate with surgery — before, after, or as definitive treatment — within multidisciplinary planning." },
  { title: "Postoperative and Palliative Care", text: "Wound, bleeding, infection, airway, functional and nutritional considerations, plus symptom management, survivorship, and quality of life." },
];

const CORE_LEARNING = [
  { title: "Fundamentals of Head & Neck Oncology", text: "Oncology principles, anatomy, tumor biology, risk factors, patterns of spread, and core treatment concepts." },
  { title: "Diagnostic Evaluation and Staging", text: "The role of history, examination, biopsy, pathology, imaging, and staging in evaluating suspected cancer." },
  { title: "Site-Specific Cancer Management", text: "The distinct diagnostic and treatment considerations for each head and neck subsite." },
  { title: "Surgical Oncology", text: "Resection planning, neck management, surgical margins, complication awareness, and functional considerations." },
  { title: "Reconstruction and Rehabilitation", text: "Principles of restoring structure and function following cancer treatment." },
  { title: "Radiation and Systemic Therapy", text: "An integrated understanding of how radiation and systemic treatments fit multidisciplinary care." },
  { title: "Tumor Board Decision-Making", text: "Case-based learning on how surgery, radiation, medical oncology, radiology, and pathology contribute to treatment planning." },
  { title: "Research and Evidence-Based Practice", text: "Reviewing evidence, interpreting literature, developing research questions, and applying evidence in clinical decisions." },
  { title: "Communication and Ethics", text: "A dedicated module for difficult conversations about diagnosis, options, outcomes, recurrence, and quality of life." },
];

const SKILLS = [
  { title: "Clinical Assessment", text: "A systematic approach to patients presenting with suspicious head and neck symptoms or lesions." },
  { title: "Diagnostic Reasoning", text: "Connecting clinical findings with pathology and imaging." },
  { title: "Cancer Staging", text: "How stage influences treatment planning and prognosis." },
  { title: "Surgical Decision-Making", text: "Indications, treatment planning, oncologic principles, and functional considerations." },
  { title: "Multidisciplinary Collaboration", text: "How specialists contribute to tumor board and integrated cancer care." },
  { title: "Postoperative Care", text: "Postoperative monitoring and complication management." },
  { title: "Rehabilitation and Survivorship", text: "Functional recovery, rehabilitation, quality of life, and longer-term follow-up." },
  { title: "Research and Evidence Appraisal", text: "Literature review, evidence interpretation, clinical research, and academic presentation." },
];

const FEE_ROWS = [
  { option: "Fully Online", duration: "12 months", fee: "₹1,70,000" },
  { option: "Online + Clinical Month", duration: "11 online + 1 clinical month (hospital attachment)", fee: "₹2,20,000" },
];

const COMPARISON_ROWS = [
  { feature: "Structured curriculum", medfellow: "Yes — 10 modules across the oncology pathway", hospital: "Usually", short: "Varies" },
  { feature: "Flexible learning", medfellow: "Yes — self-paced + weekend live classes", hospital: "Usually limited", short: "Often" },
  { feature: "Multidisciplinary / tumor board exposure", medfellow: "Listed as a learning outcome", hospital: "Usually strong", short: "Rare" },
  { feature: "Clinical component", medfellow: "Available in the 11+1 pathway", hospital: "Usually stronger", short: "Usually limited" },
  { feature: "Duration", medfellow: "12 months", hospital: "Varies", short: "Usually shorter" },
  { feature: "Operative experience", medfellow: "Observation / supervised, per pathway", hospital: "Usually stronger", short: "Limited" },
  { feature: "Suitable for working doctors", medfellow: "Yes", hospital: "Often difficult", short: "Yes" },
];

const CAREER_AREAS = [
  { title: "Head and Neck Oncology Practice", text: "Working within appropriate head and neck oncology teams, aligned with your existing qualifications and scope." },
  { title: "Surgical Oncology Teams", text: "Contributing alongside multidisciplinary surgical and oncology teams." },
  { title: "Skull Base and Complex Head & Neck Care", text: "Additional knowledge that may support work in complex anatomical regions and advanced oncology services." },
  { title: "Academic Medicine", text: "Teaching, presentations, research, and continuing academic development." },
  { title: "Further Specialty Training", text: "As part of a broader professional development pathway — verify separately the formal qualifications needed for specialist recognition." },
];

const CASE_STUDIES = [
  {
    title: "Case Study 1: The Working Specialist",
    text: "A specialist wants structured education in head and neck oncology but needs to continue clinical practice. A flexible online or hybrid fellowship can provide a structured academic pathway covering diagnosis, staging, surgical oncology, multidisciplinary care, and evidence-based practice while allowing the doctor to keep working. The key consideration is whether the clinical component meets expectations. Illustrative scenario, not a verified learner outcome.",
  },
  {
    title: "Case Study 2: Exploring Before Formal Training",
    text: "A doctor with a relevant qualification wants broader exposure to head and neck cancer management before deciding on additional formal training. A structured fellowship helps organise learning across site-specific management, surgery, reconstruction, radiation, systemic therapy, postoperative care, research, and multidisciplinary decision-making. Illustrative scenario, not a verified learner outcome.",
  },
];

const RELATED_LINKS = [
  { name: "Fellowship Course in Head & Neck Oncology", desc: "Explore eligibility, curriculum, fees, and career opportunities.", href: "/courses/fellowship-in-head-neck-oncology" },
  { name: "How to Choose a Head & Neck Oncology Fellowship", desc: "Compare curriculum, faculty, clinical exposure, multidisciplinary learning, and fees.", href: "/blog/how-to-choose-a-head-neck-oncology-fellowship" },
  { name: "Questions to Ask Before Joining a Head & Neck Oncology Fellowship", desc: "A checklist to evaluate the program before you enrol.", href: "/blog/questions-to-ask-before-joining-a-head-neck-oncology-fellowship" },
  { name: "Online vs Offline Head & Neck Oncology Fellowship", desc: "Compare online, offline, and hybrid formats for a surgical oncology fellowship.", href: "/blog/online-vs-offline-head-neck-oncology-fellowship" },
  { name: "Skills You Learn During a Head & Neck Oncology Fellowship", desc: "The assessment, staging, surgical reasoning, and multidisciplinary skills developed in training.", href: "/blog/skills-you-learn-during-a-head-neck-oncology-fellowship" },
  { name: "Career Opportunities After a Head & Neck Oncology Fellowship", desc: "Oncology teams, skull base care, academics, and further training pathways.", href: "/blog/career-opportunities-after-a-head-neck-oncology-fellowship" },
];

const FAQS = [
  { q: "What is a Head & Neck Oncology fellowship?", a: "An advanced educational program focused on the diagnosis, staging, treatment, surgical oncology, reconstruction, rehabilitation, multidisciplinary management, and follow-up of head and neck cancers." },
  { q: "What does a Head & Neck Oncology fellowship usually cover?", a: "Fundamentals, diagnostic evaluation and staging, site-specific cancers, surgical oncology, reconstruction, radiation oncology, systemic therapy, multidisciplinary care, postoperative management, palliative care, survivorship, research, communication, and ethics." },
  { q: "Who is eligible for the MedFellow Head & Neck Oncology fellowship?", a: "The current course lists MS, DNB, MD, or an equivalent relevant qualification. Verify your individual eligibility before applying." },
  { q: "How long is the MedFellow Head & Neck Oncology fellowship?", a: "The current course is listed as 12 months, offered in hybrid format — a fully online option and an 11 online + 1 clinical month option with hospital attachment." },
  { q: "How much does the MedFellow Head & Neck Oncology fellowship cost?", a: "The current page lists ₹1,70,000 for the fully online option and ₹2,20,000 for the 11 online + 1 clinical month option. Confirm the latest fee before enrolment." },
  { q: "Is practical surgical training included?", a: "That depends on the pathway. Ask whether practical exposure means observation, simulation, supervised training, or hands-on procedural participation. A fellowship certificate is not automatic evidence of independent operative competence." },
  { q: "What is the benefit of tumor board exposure?", a: "Tumor board learning helps doctors understand how surgery, radiation oncology, medical oncology, pathology, and radiology contribute to treatment planning. It is listed among the MedFellow learning outcomes." },
  { q: "Why is staging important in head and neck oncology?", a: "Staging provides a structured way of describing disease extent and is central to treatment planning and prognostic assessment." },
  { q: "Can I pursue the fellowship while working?", a: "The current program states that online modules are self-paced with recorded sessions and weekend live classes, making the format suitable for working doctors." },
  { q: "Does completing the fellowship make me a specialist head and neck oncologic surgeon?", a: "Not automatically. A fellowship certificate does not necessarily replace formal specialist or super-specialty training, registration, licensing, or hospital credentialing." },
];

export default function HeadNeckOncologyGuidePage() {
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
            <span>Best Fellowship Course in Head &amp; Neck Oncology</span>
          </div>

          <span className="section-label">Advance Your Oncology Expertise</span>
          <h1 className="section-title mt-2 mb-4 !text-3xl md:!text-4xl">
            Best Fellowship Course in Head &amp; Neck Oncology
          </h1>

          <p className="text-[1rem] text-text-secondary leading-relaxed mb-4">
            A head &amp; neck oncology fellowship provides structured advanced education in the diagnosis,
            staging, surgical management, reconstruction, rehabilitation, and multidisciplinary care of patients
            with head and neck cancers. It is a complex specialty because treatment usually coordinates surgery
            with radiation oncology, medical oncology, radiology, pathology, reconstruction, speech and
            swallowing rehabilitation, and supportive care — so choosing the best fellowship means comparing
            curriculum, faculty, clinical exposure, multidisciplinary learning, format, assessments, and fees,
            not just course names.
          </p>
          <p className="text-[1rem] text-text-secondary leading-relaxed mb-8">
            The MedFellow Academy Fellowship in Head &amp; Neck Oncology is currently structured as a 12-month
            hybrid program for doctors with an MS, DNB, MD, or equivalent relevant qualification. Its curriculum
            spans fundamentals, diagnostic evaluation and staging, site-specific cancers, surgical oncology,
            reconstruction and rehabilitation, radiation oncology, systemic therapy, multidisciplinary cancer
            care, postoperative and palliative care, research, communication, and ethics. Current fees are listed
            at &#8377;1,70,000 (fully online) and &#8377;2,20,000 (11 online + 1 clinical month with hospital
            attachment).
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
          <span className="section-label">Build a Strong Oncology Foundation</span>
          <SectionHeading icon={Award}>Why Choose Head &amp; Neck Oncology Training?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Head and neck cancer care requires an integrated understanding of anatomy, pathology, imaging,
            staging, surgery, oncology, reconstruction, rehabilitation, and patient communication. Head and neck
            anatomy is closely connected to speech, swallowing, breathing, vision, hearing, facial movement,
            endocrine function, and appearance — so a structured fellowship helps doctors understand the
            anatomical relationships that influence diagnosis, surgical planning, resection, reconstruction, and
            functional preservation, and how pathology, imaging, stage, tumor biology, patient health, and
            treatment goals shape management. Modern management often involves multiple specialties, and the
            MedFellow program lists multidisciplinary tumor board exposure among its learning outcomes.
          </p>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Choose a Curriculum With Depth</span>
          <SectionHeading icon={GraduationCap}>What Makes the Best Head &amp; Neck Oncology Fellowship?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            The best fellowship is not simply the one with the longest syllabus or the highest price — it should
            reflect how head and neck cancer is actually evaluated and managed. The MedFellow curriculum is
            organised into ten modules:
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-5">
            {MODULES.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {WHAT_MAKES_BEST.map((item) => (
              <div key={item.title} className="card p-4">
                <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-1.5">{item.title}</h3>
                <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Learn From Real Oncology Cases</span>
          <SectionHeading icon={ListChecks}>What Will You Learn in the Fellowship?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            A well-designed program connects fundamental knowledge with clinical decision-making across the full
            oncology pathway. Site-specific learning spans cancers of the:
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-5">
            {SUBSITES.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
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
          <Link href="/blog/skills-you-learn-during-a-head-neck-oncology-fellowship" className="inline-block mt-5 text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            Read more: Skills You Learn During a Head &amp; Neck Oncology Fellowship →
          </Link>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Assess Your Clinical Exposure</span>
          <SectionHeading icon={Target}>How Important Is Clinical Exposure?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            For a surgical oncology fellowship, clinical exposure deserves careful attention — programs do not
            all use &quot;clinical training&quot; the same way. It may include case discussions, tumor board
            participation, hospital-based and operating-room observation, clinical mentoring, simulation, or
            supervised practical training. Ask the provider to define exactly what is included, whether surgeries
            are observed or supervised, and who supervises the learning.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {SKILLS.slice(0, 8).map((r) => (
              <div key={r.title} className="card p-4">
                <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-1.5">{r.title}</h3>
                <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg">
            <p className="text-[0.875rem] text-[#374151] leading-relaxed">
              Watching an operation and performing a procedure are not equivalent. Independent surgical
              competency depends on formal training, supervised experience, demonstrated performance, assessment,
              institutional privileges, and regulatory requirements — a fellowship certificate should not
              automatically be treated as evidence of independent procedural competence.
            </p>
          </div>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Find a Format That Fits</span>
          <SectionHeading icon={Clock}>Online, Offline or Hybrid?</SectionHeading>
          <div className="grid sm:grid-cols-3 gap-4 mb-4">
            <div className="card p-4">
              <h3 className="text-[0.875rem] font-bold text-[#15401E] mb-2">Online Learning</h3>
              <p className="text-[0.8125rem] text-text-secondary leading-relaxed">Useful for lectures, recorded sessions, case discussions, literature review, assignments, assessments, and academic presentations — attractive for working doctors who need flexibility.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-[0.875rem] font-bold text-[#15401E] mb-2">Offline Learning</h3>
              <p className="text-[0.8125rem] text-text-secondary leading-relaxed">More opportunity for direct faculty interaction, hospital exposure, clinical observation, simulation, and practical learning.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-[0.875rem] font-bold text-[#15401E] mb-2">Hybrid Learning</h3>
              <p className="text-[0.8125rem] text-text-secondary leading-relaxed">The MedFellow program is a 12-month hybrid course — a fully online option and an 11 online + 1 clinical month option with hospital attachment.</p>
            </div>
          </div>
          <Link href="/blog/online-vs-offline-head-neck-oncology-fellowship" className="inline-block mt-1 text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            Compare in detail: Online vs Offline Head &amp; Neck Oncology Fellowship →
          </Link>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Check Your Eligibility First</span>
          <SectionHeading icon={Users}>Who Can Apply for This Fellowship?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Eligibility differs between institutions. The current MedFellow course lists eligibility as MS, DNB,
            MD, or equivalent relevant qualification — relevant backgrounds may include specialties involved in
            head and neck surgery, oncology, otolaryngology, maxillofacial care, or related surgical disciplines.
            Verify your individual eligibility before applying, and check registration and credentialing
            requirements separately if you intend to use the fellowship in another healthcare system.
          </p>
          <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg">
            <p className="text-[0.875rem] text-[#374151] leading-relaxed">
              An educational fellowship provides additional specialty learning, but it should not automatically
              be considered equivalent to formal residency, super-specialty training, specialist registration,
              or independent surgical privileges.
            </p>
          </div>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Understand the Investment</span>
          <SectionHeading icon={ClipboardCheck}>What Should You Check About Fees?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Course fees should be evaluated alongside overall educational value — tuition, registration,
            assessment fees, any clinical placement costs, travel, accommodation, study materials, and other
            mandatory expenses. The current MedFellow page lists:
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
            Fees and course structures can change, so confirm the latest fee directly before enrolment. Compare
            value — curriculum, faculty, clinical exposure, assessment, support, flexibility, and total cost —
            not just price. The cheapest option is not automatically the most useful.
          </p>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Compare Before You Enroll</span>
          <SectionHeading icon={ShieldCheck}>MedFellow vs Other Fellowship Options</SectionHeading>
          <div className="overflow-x-auto rounded-lg border border-[#E5E7EB] mb-4">
            <table className="w-full text-[0.875rem] text-left">
              <thead className="bg-[#15401E] text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Factor</th>
                  <th className="px-4 py-3 font-semibold">MedFellow Academy</th>
                  <th className="px-4 py-3 font-semibold">Hospital-Based Fellowship</th>
                  <th className="px-4 py-3 font-semibold">Short Oncology Course</th>
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
          <p className="text-[0.875rem] text-text-secondary leading-relaxed">
            A hospital-based fellowship may suit someone seeking intensive in-person operative experience, while
            a flexible hybrid program may appeal to a working doctor seeking structured academic learning with a
            defined clinical component.
          </p>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Plan for Long-Term Growth</span>
          <SectionHeading icon={Briefcase}>Career Opportunities After Fellowship</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Value should be considered alongside your existing qualifications and professional scope. The current
            course identifies career directions including Head &amp; Neck Oncologic Surgeon,
            Otolaryngologist-Oncologist, and Skull Base Surgeon.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {CAREER_AREAS.map((c) => (
              <div key={c.title} className="card p-4">
                <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-1.5">{c.title}</h3>
                <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
          <Link href="/blog/career-opportunities-after-a-head-neck-oncology-fellowship" className="inline-block text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            Read more: Career Opportunities After a Head &amp; Neck Oncology Fellowship →
          </Link>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Learn From Practical Scenarios</span>
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
          <span className="section-label">Make an Informed Investment</span>
          <SectionHeading icon={HelpCircle}>Is a Head &amp; Neck Oncology Fellowship Worth It?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            A fellowship can be valuable when it fills a genuine knowledge or professional-development need — to
            strengthen head and neck oncology knowledge, improve diagnostic and staging understanding, study
            surgical oncology principles, learn about reconstruction and rehabilitation, understand radiation and
            systemic treatment, develop multidisciplinary decision-making, build research skills, or continue
            professional learning while working. Value is ultimately determined by what the fellowship adds to
            your existing qualifications and experience; a certificate alone should not be the sole reason for
            enrolment.
          </p>
          <Link href="/blog/how-to-choose-a-head-neck-oncology-fellowship" className="inline-block text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            Read next: How to Choose a Head &amp; Neck Oncology Fellowship →
          </Link>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Explore Your Fellowship Options</span>
          <SectionHeading icon={ClipboardList}>Take the Next Step in Your Oncology Training</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            Explore the MedFellow Academy Fellowship in Head &amp; Neck Oncology to review the curriculum,
            eligibility, duration, training mode, fees, and admission details — then choose the pathway that fits
            your professional schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/apply" className="inline-flex items-center justify-center px-6 py-3 bg-[#15401E] text-white rounded-md font-semibold text-[0.9375rem] hover:bg-[#0f2e15] transition-colors">
              Apply Now
            </Link>
            <Link href="/courses/fellowship-in-head-neck-oncology" className="inline-flex items-center justify-center px-6 py-3 bg-white border border-[#D1D5DB] text-[#15401E] rounded-md font-semibold text-[0.9375rem] hover:border-[#15401E] transition-colors">
              Explore the Fellowship Course
            </Link>
          </div>
        </section>

        <section className="py-8">
          <span className="section-label">Continue Your Oncology Research</span>
          <SectionHeading icon={Link2}>Explore the Head &amp; Neck Oncology Cluster</SectionHeading>
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
        <TopicClusterLinks title="Head & Neck Oncology Resources" links={CLUSTER_LINKS} />
      </div>
      </div>
      </div>

      <FAQ faqs={FAQS} />

      <Footer />
    </div>
  );
}

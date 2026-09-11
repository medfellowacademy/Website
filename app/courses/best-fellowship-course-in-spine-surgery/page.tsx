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
  { label: "Best Fellowship Course in Spine Surgery (Guide)", href: "/courses/best-fellowship-course-in-spine-surgery", type: "guide" as const },
  { label: "How to Choose a Spine Surgery Fellowship", href: "/blog/how-to-choose-a-spine-surgery-fellowship", type: "blog" as const },
  { label: "Questions to Ask Before Joining a Spine Surgery Fellowship", href: "/blog/questions-to-ask-before-joining-a-spine-surgery-fellowship", type: "blog" as const },
  { label: "Online vs Offline Spine Surgery Fellowship", href: "/blog/online-vs-offline-spine-surgery-fellowship", type: "blog" as const },
  { label: "Is a Spine Surgery Fellowship Worth It?", href: "/blog/is-a-spine-surgery-fellowship-worth-it", type: "blog" as const },
  { label: "Skills You Learn During a Spine Surgery Fellowship", href: "/blog/skills-you-learn-during-a-spine-surgery-fellowship", type: "blog" as const },
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
  title: "Best Fellowship Course in Spine Surgery | MedFellow Academy",
  description:
    "Compare the best fellowship course in spine surgery — degenerative disorders, spinal trauma, deformity, infections and tumours, minimally invasive surgery and rehabilitation, in a 12-month hybrid program.",
  keywords:
    "fellowship in spine surgery, best spine surgery fellowship, spine surgery fellowship course, spine surgery training, minimally invasive spine fellowship",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/courses/best-fellowship-course-in-spine-surgery/" },
  openGraph: {
    title: "Best Fellowship Course in Spine Surgery",
    description:
      "A 12-month hybrid fellowship covering spine fundamentals, degenerative disorders, trauma, infections and tumours, deformity, minimally invasive surgery, pain management and rehabilitation.",
    type: "article",
    url: "https://www.medfellowacademy.com/courses/best-fellowship-course-in-spine-surgery/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy Fellowship in Spine Surgery" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Fellowship Course in Spine Surgery",
    description: "A complete guide for orthopaedic surgeons and neurosurgeons seeking structured advanced spine training.",
  },
};

const STATS = [
  { icon: "🎓", value: "46+", label: "Medical Fellowship Programs" },
  { icon: "👨‍⚕️", value: "3,500+", label: "Doctors Trained" },
  { icon: "🩺", value: "12 months", label: "Hybrid, 7-Module Curriculum" },
  { icon: "⭐", value: "4.8/5", label: "Doctor Satisfaction Rating" },
];

const MODULES = [
  "Spine Fundamentals and Basic Sciences",
  "Degenerative Spine Disorders",
  "Spine Trauma",
  "Spinal Infections and Tumours",
  "Deformity and Pediatric Spine",
  "Advanced and Minimally Invasive Spine Surgery",
  "Pain Management and Rehabilitation",
];

const BENEFITS = [
  "Understand common and complex cervical, thoracic and lumbar spine conditions",
  "Develop a systematic approach to spine assessment and red-flag identification",
  "Strengthen diagnostic reasoning by correlating clinical findings with imaging",
  "Understand surgical decision-making — when surgery may be considered and why",
  "Learn modern spine approaches: minimally invasive surgery, navigation, endoscopy",
  "Build knowledge of postoperative care, rehabilitation and complication recognition",
];

const CORE_LEARNING = [
  { title: "Spine Fundamentals and Basic Sciences", text: "Anatomy, biomechanics, spinal pathology, and neurological principles — connecting symptoms and imaging with the underlying pathology." },
  { title: "Degenerative Spine Disorders", text: "Degenerative disc disease, cervical and lumbar spondylosis, stenosis, disc herniation, spondylolisthesis, radiculopathy and myelopathy — assessment, indications, and postoperative considerations." },
  { title: "Spine Trauma", text: "Spinal fractures, dislocations, instability, neurological injury, initial stabilisation, surgical planning, and postoperative management." },
  { title: "Spinal Infections and Tumours", text: "Clinical presentation, imaging, differential diagnosis, treatment planning, and multidisciplinary management." },
  { title: "Deformity and Pediatric Spine", text: "Scoliosis, kyphosis, complex deformities, pediatric spine conditions, assessment principles, and correction strategies." },
  { title: "Advanced and Minimally Invasive Spine Surgery", text: "Minimally invasive approaches, endoscopic techniques, navigation, image guidance, instrumentation, fusion principles, and technology-assisted surgery." },
  { title: "Pain Management and Rehabilitation", text: "Pain management, rehabilitation, functional recovery, and multidisciplinary follow-up as an integrated part of comprehensive spine care." },
];

const SKILLS = [
  { title: "Spine Assessment", text: "History, physical and neurological examination, symptom patterns, and functional limitations." },
  { title: "Imaging Interpretation", text: "How X-ray, CT and MRI findings correlate with clinical presentation." },
  { title: "Surgical Planning", text: "The principles used to evaluate whether surgery may be appropriate and how clinical factors shape the plan." },
  { title: "Degenerative Spine Management", text: "Conservative, interventional, and surgical management options for common degenerative conditions." },
  { title: "Trauma Management Knowledge", text: "Spinal trauma assessment, stabilisation, neurological evaluation, imaging, and surgical principles." },
  { title: "Deformity Evaluation", text: "Key considerations in scoliosis, kyphosis, complex deformity, and pediatric spine disorders." },
  { title: "Minimally Invasive Surgery Knowledge", text: "The principles behind minimally invasive approaches, navigation, and technology-assisted techniques." },
  { title: "Postoperative Care", text: "Neurological monitoring, pain management, wound care, rehabilitation, complication recognition, and follow-up." },
];

const FEE_ROWS = [
  { option: "Fully Online", duration: "12 months", fee: "₹1,90,000" },
  { option: "Online + Clinical Month", duration: "11 online + 1 clinical month (hospital attachment)", fee: "₹2,40,000" },
];

const COMPARISON_ROWS = [
  { feature: "Structured curriculum", medfellow: "Yes — 7 modules over 12 months", hospital: "Usually", short: "Varies" },
  { feature: "Flexible learning", medfellow: "Yes — fully online option with recorded access", hospital: "Usually limited", short: "Often" },
  { feature: "Clinical component", medfellow: "Available in the 11+1 pathway", hospital: "Usually stronger", short: "Usually limited" },
  { feature: "Minimally invasive / navigation content", medfellow: "Dedicated module", hospital: "Varies", short: "Often narrow" },
  { feature: "Duration", medfellow: "12 months", hospital: "Varies", short: "Usually shorter" },
  { feature: "Operative experience", medfellow: "Observation / supervised, per pathway", hospital: "Usually stronger", short: "Limited" },
  { feature: "Suitable for working doctors", medfellow: "Yes", hospital: "Often difficult", short: "Yes" },
];

const CAREER_AREAS = [
  { title: "Spine-Focused Clinical Practice", text: "For appropriately qualified specialists, advanced spine education can strengthen knowledge relevant to spine-focused roles." },
  { title: "Minimally Invasive Spine Practice", text: "Additional training in minimally invasive concepts can support development in this increasingly specialised area." },
  { title: "Multidisciplinary Spine Care", text: "Working alongside neurosurgeons, orthopaedic surgeons, neurologists, radiologists, physiotherapists, pain specialists, and rehabilitation teams." },
  { title: "Academic and Teaching Roles", text: "Teaching, presentations, case discussions, and academic activities." },
  { title: "Research", text: "Outcomes, imaging, surgical techniques, biomechanics, rehabilitation, minimally invasive procedures, and patient-reported outcomes." },
];

const CASE_STUDIES = [
  {
    title: "Case Study 1: The Working Orthopaedic Specialist",
    text: "An orthopaedic specialist wants a more focused understanding of spine disorders but needs to continue clinical practice. A flexible fellowship provides structured learning in degenerative disease, trauma, deformity, minimally invasive surgery, and postoperative care without a complete break from responsibilities — the doctor should still check how much clinical exposure is included. Illustrative scenario, not a verified learner outcome.",
  },
  {
    title: "Case Study 2: The Neurosurgeon Deepening Spine Expertise",
    text: "A neurosurgeon wants to deepen expertise in spinal deformity, trauma, degenerative disease, navigation, and minimally invasive approaches. A structured spine fellowship organises these topics into a dedicated curriculum with case-based learning and, depending on the pathway, clinical exposure. Illustrative scenario, not a verified learner outcome.",
  },
];

const RELATED_LINKS = [
  { name: "Fellowship Course in Spine Surgery", desc: "Explore eligibility, curriculum, fees, and career opportunities.", href: "/courses/fellowship-in-spine-surgery" },
  { name: "How to Choose a Spine Surgery Fellowship", desc: "Compare curriculum, faculty, clinical exposure, technology content, and fees.", href: "/blog/how-to-choose-a-spine-surgery-fellowship" },
  { name: "Questions to Ask Before Joining a Spine Surgery Fellowship", desc: "A checklist to evaluate the program before you enrol.", href: "/blog/questions-to-ask-before-joining-a-spine-surgery-fellowship" },
  { name: "Online vs Offline Spine Surgery Fellowship", desc: "Compare online, offline, and hybrid formats for a surgical spine fellowship.", href: "/blog/online-vs-offline-spine-surgery-fellowship" },
  { name: "Is a Spine Surgery Fellowship Worth It?", desc: "The benefits, limitations, and factors to consider before enrolling.", href: "/blog/is-a-spine-surgery-fellowship-worth-it" },
  { name: "Skills You Learn During a Spine Surgery Fellowship", desc: "Assessment, imaging, surgical planning, deformity, minimally invasive concepts, and postoperative care.", href: "/blog/skills-you-learn-during-a-spine-surgery-fellowship" },
];

const FAQS = [
  { q: "Who is eligible for a spine surgery fellowship?", a: "Eligibility varies by institution. MedFellow's current Fellowship in Spine Surgery lists MS/MD/DNB Orthopaedics or Neurosurgery as eligible qualifications." },
  { q: "What does a spine surgery fellowship teach?", a: "A comprehensive program covers spine fundamentals, degenerative disorders, spinal trauma, infections and tumours, deformity, pediatric spine, minimally invasive surgery, pain management, and rehabilitation." },
  { q: "Does a spine fellowship include hands-on surgery?", a: "That depends on the program and training mode. Ask whether the practical component involves observation, simulation, supervised activities, or hands-on procedural training." },
  { q: "What is the difference between a spine fellowship and a general orthopaedic fellowship?", a: "A spine fellowship focuses specifically on spinal conditions and their surgical and clinical management, while a general orthopaedic fellowship covers a broader area such as trauma, sports medicine, or joints." },
  { q: "Is online spine surgery training useful?", a: "Online learning is useful for structured academic education, case discussions, imaging concepts, and theory. It does not independently reproduce supervised operative experience." },
  { q: "Will I learn minimally invasive spine surgery?", a: "A modern program introduces minimally invasive approaches, navigation, endoscopic techniques, and instrumentation. The depth of training varies by course." },
  { q: "How long is the MedFellow Spine Surgery fellowship?", a: "The current course is 12 months, offered in hybrid format — a fully online option and an 11 online + 1 clinical month option with hospital attachment." },
  { q: "How much does the MedFellow Spine Surgery fellowship cost?", a: "The current page lists ₹1,90,000 for fully online training and ₹2,40,000 for 11 months online plus one clinical month, with EMI options. Confirm the latest fee before enrolment." },
  { q: "Can I pursue the fellowship while working?", a: "The fully online option has recorded access and there is a hybrid option, so the structure is flexible for doctors balancing professional responsibilities." },
  { q: "Does a spine fellowship make me a spine surgeon?", a: "Not automatically. A fellowship is additional education and does not replace the formal specialist qualification, licensing, credentialing, or competency requirements for independent spine surgery practice." },
];

export default function SpineSurgeryGuidePage() {
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
            <span>Best Fellowship Course in Spine Surgery</span>
          </div>

          <span className="section-label">Build Advanced Spine Expertise</span>
          <h1 className="section-title mt-2 mb-4 !text-3xl md:!text-4xl">
            Best Fellowship Course in Spine Surgery
          </h1>

          <p className="text-[1rem] text-text-secondary leading-relaxed mb-4">
            A spine surgery fellowship helps qualified doctors develop advanced knowledge across degenerative
            spine disorders, spinal trauma, deformity, tumours, infections, minimally invasive techniques, pain
            management, and rehabilitation. Choosing the best program is about more than an impressive title —
            compare curriculum, faculty, clinical exposure, teaching methods, assessment, flexibility,
            eligibility, and professional relevance before enrolling.
          </p>
          <p className="text-[1rem] text-text-secondary leading-relaxed mb-8">
            MedFellow Academy currently offers a 12-month Fellowship in Spine Surgery for MS/MD/DNB Orthopaedics
            or Neurosurgery, with a hybrid delivery model. The published curriculum has seven modules — spine
            fundamentals, degenerative disorders, trauma, infections and tumours, deformity and pediatric spine,
            advanced and minimally invasive surgery, and pain management and rehabilitation. Current fees are
            listed at &#8377;1,90,000 (fully online) and &#8377;2,40,000 (11 online + 1 clinical month), with EMI
            options on the course page.
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
          <span className="section-label">Strengthen Your Spine Surgery Training</span>
          <SectionHeading icon={Award}>Why Choose a Spine Surgery Fellowship?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Spine care has become increasingly specialised, with doctors managing degenerative, traumatic,
            deformity-related, infectious, and neoplastic spinal conditions. A structured fellowship organises
            this knowledge into a progressive learning pathway rather than requiring doctors to study individual
            topics separately. Contemporary spine education also increasingly includes minimally invasive
            surgery, navigation, endoscopic approaches, advanced instrumentation, and technology-assisted
            planning.
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
          <span className="section-label">Master the Core Curriculum</span>
          <SectionHeading icon={ListChecks}>What Will You Learn in the Fellowship?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            The curriculum is one of the most important factors when comparing a fellowship. MedFellow&apos;s
            current course is structured into seven modules across 12 months:
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
            {CORE_LEARNING.map((m) => (
              <div key={m.title} className="card p-4">
                <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-1.5">{m.title}</h3>
                <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Develop Skills That Matter Clinically</span>
          <SectionHeading icon={Target}>What Skills Can You Develop?</SectionHeading>
          <div className="grid sm:grid-cols-2 gap-4">
            {SKILLS.map((item) => (
              <div key={item.title} className="card p-4">
                <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-1.5">{item.title}</h3>
                <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <Link href="/blog/skills-you-learn-during-a-spine-surgery-fellowship" className="inline-block mt-5 text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            Read more: Skills You Learn During a Spine Surgery Fellowship →
          </Link>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Choose the Right Learning Model</span>
          <SectionHeading icon={Clock}>Online, Offline or Hybrid Spine Training?</SectionHeading>
          <div className="grid sm:grid-cols-3 gap-4 mb-4">
            <div className="card p-4">
              <h3 className="text-[0.875rem] font-bold text-[#15401E] mb-2">Fully Online</h3>
              <p className="text-[0.8125rem] text-text-secondary leading-relaxed">A 12-month option with live sessions recorded for later access — useful for lectures, case discussions, academic learning, assignments, assessments, and research-oriented learning.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-[0.875rem] font-bold text-[#15401E] mb-2">Hybrid</h3>
              <p className="text-[0.8125rem] text-text-secondary leading-relaxed">An 11-month online + 1 clinical month option with hospital attachment — a balance between flexible academic learning and in-person clinical exposure.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-[0.875rem] font-bold text-[#15401E] mb-2">Offline</h3>
              <p className="text-[0.8125rem] text-text-secondary leading-relaxed">Fully in-person fellowships may offer more continuous hospital-based interaction, depending on the institution and structure.</p>
            </div>
          </div>
          <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg">
            <p className="text-[0.875rem] text-[#374151] leading-relaxed">
              Online education, clinical observation, supervised training, and independent procedural competency
              are different levels of professional learning. Ask exactly what the practical component includes.
            </p>
          </div>
          <Link href="/blog/online-vs-offline-spine-surgery-fellowship" className="inline-block mt-4 text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            Compare in detail: Online vs Offline Spine Surgery Fellowship →
          </Link>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Know Who Can Apply</span>
          <SectionHeading icon={Users}>Who Can Pursue a Spine Surgery Fellowship?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Eligibility differs between institutions — always verify the specific requirements. MedFellow&apos;s
            current Fellowship in Spine Surgery lists <strong>MS/MD/DNB Orthopaedics or Neurosurgery</strong> as
            the eligibility requirement. Both orthopaedic specialists and neurosurgeons pursue dedicated spine
            training to deepen knowledge in spinal pathology, surgical approaches, deformity, trauma, and
            minimally invasive procedures. Confirm your postgraduate qualification, registration, and any
            documentation requirements before applying.
          </p>
          <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg">
            <p className="text-[0.875rem] text-[#374151] leading-relaxed">
              A fellowship complements your existing qualification. It should not be interpreted as a replacement
              for a formal specialist qualification, board certification, licensing requirement, or independent
              surgical credentialing.
            </p>
          </div>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Evaluate the Practical Component</span>
          <SectionHeading icon={ClipboardCheck}>How Much Clinical Exposure Do You Need?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Clinical exposure is especially important for a surgical fellowship, and it can mean very different
            things — hospital attachment, operating-room observation, case discussions, simulation, skills
            training, supervised clinical activities, or procedural participation. If you are seeking hands-on
            learning, ask who supervises the training, what procedures are included, how long the practical
            component is, whether participation is observational or supervised, and how competency is assessed.
          </p>
          <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg">
            <p className="text-[0.875rem] text-[#374151] leading-relaxed">
              Case volume can be relevant, but training quality also depends on supervision, case complexity,
              assessment, feedback, and the learner&apos;s demonstrated competence.
            </p>
          </div>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Compare Your Fellowship Options</span>
          <SectionHeading icon={GraduationCap}>What Makes the Best Spine Fellowship?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            The best fellowship for one doctor may not be right for another. Use these criteria — curriculum
            quality, faculty expertise, clinical relevance, practical exposure, technology and modern techniques,
            learning flexibility, assessment, certification, and professional relevance — when comparing programs.
          </p>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Understand the Cost</span>
          <SectionHeading icon={ClipboardList}>How Much Does Spine Fellowship Training Cost?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Cost should be evaluated alongside everything included in the program. MedFellow&apos;s current page
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
            Ask whether the quoted fee includes tuition, any clinical attachment, assessments, certification,
            learning materials, and administrative charges — and account for travel, accommodation, and time away
            from work for a clinical component. Compare value, not just price, and confirm the latest fee with
            admissions before enrolment.
          </p>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Compare Before You Choose</span>
          <SectionHeading icon={ShieldCheck}>MedFellow vs Other Spine Fellowships</SectionHeading>
          <div className="overflow-x-auto rounded-lg border border-[#E5E7EB] mb-4">
            <table className="w-full text-[0.875rem] text-left">
              <thead className="bg-[#15401E] text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Factor</th>
                  <th className="px-4 py-3 font-semibold">MedFellow Academy</th>
                  <th className="px-4 py-3 font-semibold">Hospital-Based Fellowship</th>
                  <th className="px-4 py-3 font-semibold">Short Spine Course</th>
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
          <span className="section-label">Build a Better Career Path</span>
          <SectionHeading icon={Briefcase}>Career Opportunities After Spine Training</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            A Fellowship in Spine Surgery may support professional development in several directions, always
            dependent on your existing qualification, clinical experience, registration, employer requirements,
            and local regulations:
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
          <span className="section-label">See How Learning Fits Different Goals</span>
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
          <span className="section-label">Make the Right Choice</span>
          <SectionHeading icon={HelpCircle}>Is a Spine Surgery Fellowship Worth It?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            A spine surgery fellowship can be worthwhile when it fills a specific learning or professional-
            development gap — to develop deeper spine knowledge, improve diagnostic reasoning, understand surgical
            planning, study degenerative disease and spinal trauma, explore deformity management, learn minimally
            invasive concepts, strengthen postoperative care knowledge, or continue structured education while
            working. A doctor seeking academic knowledge may prioritise curriculum and faculty; a doctor seeking
            clinical exposure should emphasise supervised learning and hospital-based components.
          </p>
          <Link href="/blog/is-a-spine-surgery-fellowship-worth-it" className="inline-block text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            Read the full analysis: Is a Spine Surgery Fellowship Worth It? →
          </Link>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Explore Your Fellowship Options</span>
          <SectionHeading icon={ClipboardList}>Take the Next Step in Your Spine Training</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            Explore the MedFellow Academy Fellowship in Spine Surgery to review the seven-module curriculum,
            eligibility, learning format, fees, and clinical training options — then choose the pathway that fits
            your professional schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/apply" className="inline-flex items-center justify-center px-6 py-3 bg-[#15401E] text-white rounded-md font-semibold text-[0.9375rem] hover:bg-[#0f2e15] transition-colors">
              Apply Now
            </Link>
            <Link href="/courses/fellowship-in-spine-surgery" className="inline-flex items-center justify-center px-6 py-3 bg-white border border-[#D1D5DB] text-[#15401E] rounded-md font-semibold text-[0.9375rem] hover:border-[#15401E] transition-colors">
              Explore the Fellowship Course
            </Link>
          </div>
        </section>

        <section className="py-8">
          <span className="section-label">Continue Your Spine Fellowship Research</span>
          <SectionHeading icon={Link2}>Explore the Spine Surgery Cluster</SectionHeading>
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
        <TopicClusterLinks title="Spine Surgery Resources" links={CLUSTER_LINKS} />
      </div>
      </div>
      </div>

      <FAQ faqs={FAQS} />

      <Footer />
    </div>
  );
}

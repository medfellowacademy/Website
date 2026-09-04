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
  { label: "Best Fellowship Course in Dermatology (Guide)", href: "/courses/best-fellowship-course-in-dermatology", type: "guide" as const },
  { label: "How to Choose a Dermatology Fellowship", href: "/blog/how-to-choose-a-dermatology-fellowship", type: "blog" as const },
  { label: "Questions to Ask Before Joining a Dermatology Fellowship", href: "/blog/questions-to-ask-before-joining-a-dermatology-fellowship", type: "blog" as const },
  { label: "Online vs Offline Dermatology Fellowship", href: "/blog/online-vs-offline-dermatology-fellowship", type: "blog" as const },
  { label: "Skills You Learn During a Dermatology Fellowship", href: "/blog/skills-you-learn-during-a-dermatology-fellowship", type: "blog" as const },
  { label: "Is a Dermatology Fellowship Worth It?", href: "/blog/is-a-dermatology-fellowship-worth-it", type: "blog" as const },
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
  title: "Best Dermatology Fellowship Course | MedFellow Academy",
  description:
    "Explore the best dermatology fellowship course with clinical, cosmetic and procedural training, flexible learning options and a structured 12-month curriculum.",
  keywords:
    "dermatology fellowship course, best fellowship course in dermatology, best dermatology fellowship, dermatology training, fellowship in dermatology",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/courses/best-fellowship-course-in-dermatology/" },
  openGraph: {
    title: "Best Dermatology Fellowship Course",
    description:
      "A structured 12-month dermatology fellowship covering clinical, cosmetic and procedural training with flexible learning options.",
    type: "article",
    url: "https://www.medfellowacademy.com/courses/best-fellowship-course-in-dermatology/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Fellowship in Dermatology" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Dermatology Fellowship Course",
    description: "A complete guide for doctors seeking structured advanced training in clinical, cosmetic and procedural dermatology.",
  },
};

const STATS = [
  { icon: "🎓", value: "46+", label: "Medical Fellowship Programs" },
  { icon: "👨‍⚕️", value: "3,500+", label: "Doctors Trained" },
  { icon: "🩺", value: "12 months", label: "Structured Curriculum" },
  { icon: "⭐", value: "4.8/5", label: "Doctor Satisfaction Rating" },
];

const MODULES = [
  "Foundations of Clinical Dermatology",
  "Skin Lesions & Dermato-Oncology",
  "Regional Dermatology",
  "Inflammatory Skin Disorders",
  "Infectious & Tropical Dermatology",
  "Dermatology in Special Populations & Aesthetic Basics",
];

const COMMON_CONDITIONS = [
  "Acne", "Dermatitis", "Psoriasis", "Fungal infections", "Bacterial and viral skin infections",
  "Pigmentary disorders", "Hair and nail disorders", "Allergic skin conditions", "Autoimmune and inflammatory diseases",
];

const WHAT_MAKES_BEST = [
  { title: "A Structured Curriculum", text: "A logical progression from dermatology foundations to clinical disorders, diagnosis, procedures, and advanced applications — organized into six modules." },
  { title: "Relevant Clinical Exposure", text: "Understand exactly what “clinical exposure” means — case discussions, clinical observation, hospital attachment, demonstrations, simulation, supervised practical learning, and hands-on procedures are not interchangeable." },
  { title: "Experienced Faculty", text: "Teachers who can connect dermatology concepts with real clinical cases and current practice." },
  { title: "Meaningful Assessment", text: "A clear explanation of how learners are assessed — examinations, assignments, case discussions, presentations, or projects." },
  { title: "Flexible Learning Options", text: "A fully online 12-month option and an 11 online + 1 clinical month option with hospital attachment. Online live sessions are recorded and classes are held on weekends." },
  { title: "Clear Certification", text: "Understand who issues the certificate and what it represents. Academic completion is not automatically equivalent to specialist registration or independent privileges." },
];

const CORE_LEARNING = [
  { title: "Foundations of Clinical Dermatology", text: "Skin anatomy and physiology, dermatological terminology, lesion identification, history-taking, physical examination, and differential diagnosis." },
  { title: "Skin Lesions and Dermato-Oncology", text: "Suspicious lesions, skin tumors, cancer-related presentations, and the principles of dermatological assessment." },
  { title: "Regional Dermatology", text: "Organizing diagnosis based on body location and clinical presentation, since different regions present with distinctive conditions." },
  { title: "Inflammatory Skin Disorders", text: "Eczema, psoriasis, dermatitis, and other inflammatory disorders." },
  { title: "Infectious and Tropical Dermatology", text: "Common bacterial, viral, fungal, and parasitic skin infections, including conditions relevant in tropical settings." },
  { title: "Special Populations & Aesthetic Basics", text: "Pediatric, elderly, pregnant, or immunocompromised patients, plus aesthetic basics — with cosmetic procedures and laser therapy identified among the learning areas." },
  { title: "Skin Surgery and Procedures", text: "Principles surrounding dermatological surgery and relevant procedures. The precise practical scope depends on the training component selected." },
];

const SKILLS = [
  { title: "Skin Examination", text: "A systematic approach to examining lesions, distributions, morphology, and affected areas." },
  { title: "Clinical Diagnosis", text: "Moving from patient history and examination findings toward a focused differential diagnosis." },
  { title: "Diagnostic Interpretation", text: "Familiarity with investigations that support dermatological diagnosis and management." },
  { title: "Treatment Planning", text: "How disease severity, patient factors, diagnosis, and treatment objectives influence management." },
  { title: "Procedural Awareness", text: "Knowledge around dermatological procedures, skin surgery, cosmetic procedures, and laser-based approaches within the course scope." },
  { title: "Patient Consultation", text: "Clear communication for long-term treatment, expectation management, adherence, and follow-up." },
  { title: "Case-Based Reasoning", text: "Connecting theoretical concepts with real-world decision-making through clinical cases." },
  { title: "Evidence-Based Practice", text: "Reviewing literature, comparing treatment approaches, and continuing to learn as dermatology evolves." },
];

const FEE_ROWS = [
  { option: "Fully Online", duration: "12 months", fee: "₹1,40,000" },
  { option: "Online + Clinical Month", duration: "11 online + 1 clinical month", fee: "₹1,75,000" },
];

const COMPARISON_ROWS = [
  { feature: "Structured curriculum", medfellow: "Yes", hospital: "Usually", short: "Varies" },
  { feature: "Flexible learning", medfellow: "Yes", hospital: "Usually limited", short: "Often" },
  { feature: "Online learning", medfellow: "Yes", hospital: "Limited", short: "Often" },
  { feature: "Clinical component", medfellow: "Available in selected pathway", hospital: "Usually stronger", short: "Usually limited" },
  { feature: "Duration", medfellow: "12 months", hospital: "Varies", short: "Usually shorter" },
  { feature: "Case-based learning", medfellow: "Yes", hospital: "Yes", short: "Varies" },
  { feature: "Practical exposure", medfellow: "Depends on selected pathway", hospital: "Usually stronger", short: "Limited" },
  { feature: "Suitable for working doctors", medfellow: "Yes", hospital: "Often difficult", short: "Yes" },
  { feature: "Best suited for", medfellow: "Structured specialty education and flexible learning", hospital: "Intensive clinical training", short: "Focused upskilling" },
];

const CAREER_AREAS = [
  { title: "Dermatology-Focused Clinical Work", text: "Strengthen understanding of common and complex skin conditions." },
  { title: "Cosmetic Dermatology", text: "Support doctors interested in aesthetic dermatology, within their permitted scope of practice and training." },
  { title: "Procedural Dermatology", text: "Understand dermatological procedures and treatment principles." },
  { title: "Academic and Teaching Development", text: "Support academic presentations, research, clinical discussions, and continued medical education." },
  { title: "Further Specialty Development", text: "Use fellowship education as part of a broader long-term training plan." },
];

const CASE_STUDIES = [
  {
    title: "Case Study 1: The Working Doctor",
    text: "A doctor is already working full-time but wants structured education in dermatology without leaving clinical practice. A flexible fellowship pathway can allow the doctor to complete the academic component alongside existing responsibilities while using the clinical option where appropriate. The key consideration is whether the selected training format matches the doctor's actual learning needs.",
  },
  {
    title: "Case Study 2: The Doctor Exploring Aesthetic Dermatology",
    text: "A doctor wants to build stronger foundational knowledge in clinical dermatology while becoming familiar with cosmetic dermatology, laser therapy, and dermatological procedures. A structured fellowship can provide a framework for learning these areas rather than relying only on isolated workshops or short courses. These are illustrative case studies, not verified individual learner outcomes.",
  },
];

const RELATED_LINKS = [
  { name: "Fellowship Course in Dermatology", desc: "Build focused knowledge in clinical, cosmetic and procedural dermatology.", href: "/courses/fellowship-in-dermatology" },
  { name: "How to Choose a Dermatology Fellowship", desc: "Compare eligibility, curriculum, faculty, practical exposure, fees, and career relevance.", href: "/blog/how-to-choose-a-dermatology-fellowship" },
  { name: "Questions to Ask Before Joining a Dermatology Fellowship", desc: "A checklist to evaluate curriculum, clinical training, certification, fees, and learning format.", href: "/blog/questions-to-ask-before-joining-a-dermatology-fellowship" },
  { name: "Online vs Offline Dermatology Fellowship", desc: "Compare online, offline, and hybrid dermatology fellowship formats.", href: "/blog/online-vs-offline-dermatology-fellowship" },
  { name: "Skills You Learn During a Dermatology Fellowship", desc: "The clinical, diagnostic, procedural, and patient-care skills developed through fellowship training.", href: "/blog/skills-you-learn-during-a-dermatology-fellowship" },
  { name: "Is a Dermatology Fellowship Worth It?", desc: "The potential benefits, limitations, career value, and factors to consider before enrolling.", href: "/blog/is-a-dermatology-fellowship-worth-it" },
];

const FAQS = [
  {
    q: "What is the best dermatology fellowship course?",
    a: "The best dermatology fellowship is the one that matches your professional objective, qualifications, preferred learning format, desired clinical exposure, and long-term plans. Curriculum quality and practical relevance are more important than the course title alone.",
  },
  {
    q: "Who is eligible for the MedFellow Fellowship in Dermatology?",
    a: "The current MedFellow course page lists MBBS as the eligibility requirement. Always verify the current admission criteria before applying.",
  },
  {
    q: "How long is the MedFellow Dermatology fellowship?",
    a: "The current program is structured as a 12-month fellowship.",
  },
  {
    q: "Is the Dermatology fellowship online or offline?",
    a: "MedFellow currently offers a fully online 12-month option and an 11-month online plus 1 clinical month option with hospital attachment.",
  },
  {
    q: "Can I study while working full-time?",
    a: "The current course page states that online modules can be studied flexibly, with recorded sessions and weekend live classes.",
  },
  {
    q: "Does the course include clinical training?",
    a: "The current course provides an option combining 11 months of online learning with 1 clinical month and hospital attachment. The exact practical activities should be confirmed with the admissions team before enrollment.",
  },
  {
    q: "Does the dermatology fellowship include cosmetic dermatology and laser therapy?",
    a: "Yes. The current course page identifies cosmetic dermatology, aesthetic basics, and laser therapy among its learning areas, and states that the program includes training in dermatological surgery.",
  },
  {
    q: "How much does the MedFellow Dermatology fellowship cost?",
    a: "The current listed fee starts at ₹1,40,000 for the fully online option and ₹1,75,000 for the online plus clinical month option. Fees can change, so confirm the current amount before enrollment.",
  },
  {
    q: "Is a dermatology fellowship the same as an MD or formal specialist qualification?",
    a: "No. A fellowship certificate and a formally recognized postgraduate or specialist qualification are different credentials. Professional recognition depends on the relevant educational and regulatory framework.",
  },
  {
    q: "Is an online dermatology fellowship enough for hands-on procedures?",
    a: "Online education can provide academic and case-based learning, but it cannot independently replace supervised clinical or procedural training. Check exactly what practical exposure is included.",
  },
  {
    q: "How is a dermatology fellowship different from a short-term course?",
    a: "A fellowship generally provides a broader and more structured learning pathway, while a short-term course usually focuses on a narrower topic or specific skill. Compare curriculum depth, duration, faculty interaction, assessment, and clinical exposure.",
  },
];

export default function DermatologyGuidePage() {
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
            <span>Best Fellowship Course in Dermatology</span>
          </div>

          <span className="section-label">Advance Your Dermatology Skills</span>
          <h1 className="section-title mt-2 mb-4 !text-3xl md:!text-4xl">
            Best Fellowship Course in Dermatology
          </h1>

          <p className="text-[1rem] text-text-secondary leading-relaxed mb-4">
            A Dermatology Fellowship can help doctors build focused knowledge in skin diseases, dermatological
            diagnosis, cosmetic dermatology, laser therapy, and dermatological procedures. Choosing the best
            dermatology fellowship is about much more than finding a course with a strong title — compare the
            curriculum, faculty, clinical exposure, learning format, practical components, assessments,
            certification, fees, and how the program fits your professional goals.
          </p>
          <p className="text-[1rem] text-text-secondary leading-relaxed mb-8">
            MedFellow Academy&apos;s Fellowship in Dermatology is structured as a 12-month hybrid program with
            six broad modules covering clinical dermatology, skin lesions and dermato-oncology, regional
            dermatology, inflammatory disorders, infectious and tropical dermatology, and special populations
            with aesthetic basics. The current course page lists MBBS eligibility, rolling admissions, and
            training options ranging from fully online learning to an 11-month online plus 1 clinical month
            pathway, with fees starting at &#8377;1,40,000 (fully online) and &#8377;1,75,000 (11 online + 1
            clinical month).
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

        {/* Why Consider */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Build Stronger Dermatology Knowledge</span>
          <SectionHeading icon={Award}>Why Consider Dermatology Training?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Dermatology involves much more than treating visible skin problems. Diagnosis often depends on
            detailed history-taking, lesion recognition, examination, pattern recognition, appropriate
            investigations, and understanding how systemic conditions can present through the skin. A strong
            program should combine foundational dermatology with practical clinical reasoning and relevant
            procedural knowledge. A broad curriculum can help doctors build knowledge around conditions such as:
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-4">
            {COMMON_CONDITIONS.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed">
            Modern dermatology also includes aesthetic and cosmetic applications. MedFellow&apos;s course
            specifically lists cosmetic procedures, laser therapy, and skin surgery among its learning areas.
            Dermatological procedures may include lesion evaluation, skin surgery principles, cosmetic
            procedures, and laser-based treatment concepts, depending on the scope of training provided.
          </p>
        </section>

        {/* What Makes the Best */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Choose a Curriculum That Fits</span>
          <SectionHeading icon={GraduationCap}>What Makes the Best Dermatology Fellowship?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            There is no single fellowship that is the best choice for every doctor. The right program depends on
            your current qualification, clinical experience, learning objectives, available time, preferred
            training format, and long-term professional plans. MedFellow&apos;s current course is organized into
            six modules:
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

        {/* Core Learning */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Explore the Core Learning Areas</span>
          <SectionHeading icon={ListChecks}>What Will You Learn in a Dermatology Fellowship?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-6">
            A well-structured Fellowship in Dermatology should help doctors connect foundational dermatology
            with clinical diagnosis, disease management, procedures, and patient care.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {CORE_LEARNING.map((m) => (
              <div key={m.title} className="card p-4">
                <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-1.5">{m.title}</h3>
                <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
          <Link href="/blog/skills-you-learn-during-a-dermatology-fellowship" className="inline-block mt-5 text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            Read more: Skills You Learn During a Dermatology Fellowship →
          </Link>
        </section>

        {/* Skills */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Build Practical Clinical Confidence</span>
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

        {/* Format */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Flexible Learning for Working Doctors</span>
          <SectionHeading icon={Clock}>Online, Offline or Hybrid Dermatology Fellowship?</SectionHeading>
          <div className="grid sm:grid-cols-3 gap-4 mb-4">
            <div className="card p-4">
              <h3 className="text-[0.875rem] font-bold text-[#15401E] mb-2">Fully Online</h3>
              <p className="text-[0.8125rem] text-text-secondary leading-relaxed">A 12-month program with recorded access to online sessions — useful for lectures, case discussions, academic learning, assignments, assessments, and literature review.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-[0.875rem] font-bold text-[#15401E] mb-2">Clinical Training Option</h3>
              <p className="text-[0.8125rem] text-text-secondary leading-relaxed">An 11-month online + 1 clinical month option with hospital attachment — more relevant for doctors who specifically want an in-person clinical component.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-[0.875rem] font-bold text-[#15401E] mb-2">Hybrid Learning</h3>
              <p className="text-[0.8125rem] text-text-secondary leading-relaxed">Online academic learning combined with selected in-person training — a useful balance between flexibility and clinical exposure for working doctors.</p>
            </div>
          </div>
          <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg">
            <p className="text-[0.875rem] text-[#374151] leading-relaxed">
              <strong>Ask what &quot;hands-on&quot; means.</strong> Always clarify whether practical exposure
              includes observation, demonstration, simulation, supervised procedures, or another training
              model. Exposure and independent procedural competency are not the same.
            </p>
          </div>
          <Link href="/blog/online-vs-offline-dermatology-fellowship" className="inline-block mt-4 text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            Compare in detail: Online vs Offline Dermatology Fellowship →
          </Link>
        </section>

        {/* Eligibility */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Know Who Can Apply</span>
          <SectionHeading icon={Users}>Who Can Join a Dermatology Fellowship?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Eligibility is one of the first factors to check. MedFellow&apos;s current Dermatology course page
            lists MBBS as the eligibility requirement — however, doctors should always verify the current
            admission requirements before applying because course rules may change. Your existing clinical
            background can influence how useful different parts of the fellowship will be.
          </p>
          <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg">
            <p className="text-[0.875rem] text-[#374151] leading-relaxed">
              A fellowship certificate is an educational credential. Local specialist registration, licensing,
              scope of practice, and procedural privileges are governed separately by the applicable
              authorities and institutions.
            </p>
          </div>
        </section>

        {/* Cost */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Make a Smarter Investment</span>
          <SectionHeading icon={ClipboardCheck}>How Much Does a Dermatology Fellowship Cost?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Course fees should be evaluated together with curriculum, duration, learning format, clinical
            exposure, faculty interaction, and academic support. MedFellow&apos;s current page lists:
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
            The course page also currently lists EMI options, including 0% interest options for eligible plans.
            Ask whether the fee includes course access, assessments, certification, clinical attachment,
            learning resources, and academic support — and check whether travel, accommodation, or other
            expenses are separate. The cheapest course is not necessarily the best option.
          </p>
        </section>

        {/* Comparison */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Compare Before You Choose</span>
          <SectionHeading icon={ShieldCheck}>MedFellow vs Other Dermatology Fellowships</SectionHeading>
          <div className="overflow-x-auto rounded-lg border border-[#E5E7EB] mb-4">
            <table className="w-full text-[0.875rem] text-left">
              <thead className="bg-[#15401E] text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Factor</th>
                  <th className="px-4 py-3 font-semibold">MedFellow Academy</th>
                  <th className="px-4 py-3 font-semibold">Hospital-Based Fellowship</th>
                  <th className="px-4 py-3 font-semibold">Short Dermatology Course</th>
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
            A hospital-based fellowship may provide a different level of direct clinical immersion, while an
            online or hybrid fellowship may offer greater flexibility. The better choice depends on your
            specific goal.
          </p>
        </section>

        {/* Career */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Build a Career Plan</span>
          <SectionHeading icon={Briefcase}>Career Opportunities After Dermatology Fellowship</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            A Dermatology Fellowship can contribute to professional development in several ways, depending on
            your underlying qualification, experience, employer, and regulatory environment. The current
            MedFellow course page identifies career areas including dermatology, cosmetic dermatology, and
            dermatological surgery.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {CAREER_AREAS.map((c) => (
              <div key={c.title} className="card p-4">
                <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-1.5">{c.title}</h3>
                <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg">
            <p className="text-[0.875rem] text-[#374151] leading-relaxed">
              A fellowship should be considered an addition to professional education rather than an automatic
              replacement for a recognized postgraduate specialty qualification.
            </p>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Learn From Realistic Goals</span>
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

        {/* Is It Worth It */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Choose With Confidence</span>
          <SectionHeading icon={HelpCircle}>Is a Dermatology Fellowship Worth It?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            A dermatology fellowship can be worthwhile when it fills a genuine knowledge or professional-
            development gap — for doctors who want structured dermatology education, broader clinical knowledge,
            exposure to cosmetic dermatology, understanding of laser therapy, procedural dermatology knowledge,
            case-based learning, flexible study options, or a foundation for continued professional development.
            However, value depends on what you expect from the program. Before enrolling, ask whether the
            curriculum matches your goals, whether the training format is practical for your schedule, whether
            the clinical component is clearly defined, and whether you understand what the certificate
            represents.
          </p>
          <Link href="/blog/is-a-dermatology-fellowship-worth-it" className="inline-block text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            Read the full analysis: Is a Dermatology Fellowship Worth It? →
          </Link>
        </section>

        {/* CTA */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Explore Your Fellowship Options</span>
          <SectionHeading icon={ClipboardList}>Take the Next Step in Your Training</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            Explore the MedFellow Academy Fellowship in Dermatology to review the curriculum, eligibility,
            learning format, fees, and available clinical training options — then choose the learning pathway
            that fits your professional schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#15401E] text-white rounded-md font-semibold text-[0.9375rem] hover:bg-[#0f2e15] transition-colors"
            >
              Apply Now
            </Link>
            <Link
              href="/courses/fellowship-in-dermatology"
              className="inline-flex items-center justify-center px-6 py-3 bg-white border border-[#D1D5DB] text-[#15401E] rounded-md font-semibold text-[0.9375rem] hover:border-[#15401E] transition-colors"
            >
              Explore the Fellowship Course
            </Link>
          </div>
        </section>

        {/* Related */}
        <section className="py-8">
          <span className="section-label">Continue Your Dermatology Research</span>
          <SectionHeading icon={Link2}>Explore the Dermatology Cluster</SectionHeading>
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
        <TopicClusterLinks title="Dermatology Resources" links={CLUSTER_LINKS} />
      </div>
      </div>
      </div>

      <FAQ faqs={FAQS} />

      <Footer />
    </div>
  );
}

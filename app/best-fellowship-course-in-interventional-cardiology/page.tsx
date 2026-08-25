import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import TopicClusterLinks from "@/components/TopicClusterLinks";
import {
  HeartPulse,
  GraduationCap,
  Clock,
  Target,
  Users,
  ListChecks,
  Briefcase,
  Award,
  Link2,
  ClipboardCheck,
} from "lucide-react";

const CLUSTER_LINKS = [
  { label: "Best Fellowship Course in Interventional Cardiology (Guide)", href: "/best-fellowship-course-in-interventional-cardiology", type: "guide" as const },
  { label: "How to Choose an Interventional Cardiology Fellowship", href: "/blog/how-to-choose-interventional-cardiology-fellowship", type: "blog" as const },
  { label: "Questions to Ask Before Joining an Interventional Cardiology Fellowship", href: "/blog/questions-to-ask-before-joining-interventional-cardiology-fellowship", type: "blog" as const },
  { label: "Online vs Offline Interventional Cardiology Fellowship", href: "/blog/online-vs-offline-interventional-cardiology-fellowship", type: "blog" as const },
  { label: "Is an Interventional Cardiology Fellowship Worth It?", href: "/blog/is-interventional-cardiology-fellowship-worth-it", type: "blog" as const },
  { label: "Skills You Learn During an Interventional Cardiology Fellowship", href: "/blog/skills-you-learn-interventional-cardiology-fellowship", type: "blog" as const },
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
  title: "Best Fellowship Course in Interventional Cardiology | MedFellow Academy",
  description:
    "Explore the Best Fellowship Course in Interventional Cardiology, including curriculum, eligibility, skills, learning options, career pathways, and FAQs.",
  keywords:
    "Best Fellowship Course in Interventional Cardiology, Fellowship in Interventional Cardiology, Interventional Cardiology Fellowship, Online Interventional Cardiology Fellowship, Interventional Cardiology Course",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/best-fellowship-course-in-interventional-cardiology/" },
  openGraph: {
    title: "Best Fellowship Course in Interventional Cardiology | MedFellow Academy",
    description:
      "Explore the Best Fellowship Course in Interventional Cardiology, including curriculum, eligibility, skills, learning options, career pathways, and FAQs.",
    type: "article",
    url: "https://www.medfellowacademy.com/best-fellowship-course-in-interventional-cardiology/",
    images: [{ url: "https://www.medfellowacademy.com/courses/interventional-cardiology.jpg", width: 1200, height: 630, alt: "MedFellow Fellowship in Interventional Cardiology" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Fellowship Course in Interventional Cardiology | MedFellow Academy",
    description: "Curriculum, eligibility, skills, learning options, career pathways, and FAQs for the Fellowship in Interventional Cardiology.",
  },
};

const KEY_BENEFITS = [
  "Strengthen understanding of coronary artery disease",
  "Develop knowledge of catheter-based interventions",
  "Understand coronary angiography and hemodynamics",
  "Learn principles of PCI and stent-based treatment",
  "Understand patient selection and procedural planning",
  "Explore intravascular imaging concepts",
  "Improve recognition of procedural complications",
  "Strengthen cardiovascular emergency management",
  "Develop evidence-based clinical decision making",
  "Stay updated with evolving interventional techniques",
];

const CURRICULUM_GROUPS = [
  {
    icon: HeartPulse,
    title: "Coronary Anatomy and Disease",
    desc: "Participants develop a stronger understanding of coronary anatomy, coronary artery disease, ischemia, lesion characteristics, and the clinical factors that influence treatment decisions.",
  },
  {
    icon: ListChecks,
    title: "Cardiac Catheterization and Angiography",
    items: ["Cath lab workflow", "Vascular access principles", "Coronary angiography", "Hemodynamic assessment", "Catheter and guidewire concepts", "Contrast-related considerations", "Procedural safety"],
  },
  {
    icon: Target,
    title: "Percutaneous Coronary Intervention",
    items: ["Patient selection", "Lesion assessment", "Balloon angioplasty concepts", "Stent selection principles", "Procedural planning", "Post-procedure monitoring", "Recognition of complications"],
  },
  {
    icon: Award,
    title: "Intravascular Imaging and Physiology",
    items: ["IVUS", "OCT", "FFR", "Hemodynamic measurements", "Coronary physiology"],
  },
  {
    icon: ClipboardCheck,
    title: "Complication Recognition and Patient Safety",
    items: ["Hemodynamic instability", "Acute coronary syndromes", "Bleeding and vascular complications", "Contrast-related complications", "Arrhythmias", "Pericardial complications", "Post-procedure monitoring"],
  },
];

const FLEXIBLE_HIGHLIGHTS = [
  "Online lectures",
  "Recorded sessions",
  "Structured modules",
  "Faculty discussions",
  "Case-based learning",
  "Digital study resources",
  "Scheduled academic sessions",
];

const CLINICAL_SKILLS = [
  "Cardiovascular patient assessment",
  "Risk stratification",
  "Clinical decision making",
  "Treatment planning",
  "Interpretation of investigations",
  "Patient counselling",
  "Periprocedural care",
];

const INTERVENTIONAL_SKILLS = [
  "Coronary angiography concepts",
  "Cath lab workflow",
  "Hemodynamic assessment",
  "PCI principles",
  "Device selection concepts",
  "Intravascular imaging",
  "Coronary physiology",
  "Complication recognition",
];

const PROFESSIONAL_SKILLS = [
  "Multidisciplinary communication",
  "Evidence-based practice",
  "Clinical documentation",
  "Research interpretation",
  "Case presentation",
  "Continuous professional development",
];

const ELIGIBILITY_CHECKS = [
  "Your postgraduate qualification",
  "Cardiology specialization requirements",
  "Clinical experience requirements",
  "Fellowship-specific eligibility",
  "Licensing requirements",
  "Clinical training requirements",
  "Assessment and certification conditions",
];

const CHOOSE_FACTORS = [
  { label: "Curriculum depth", desc: "Does the program cover coronary intervention, cath lab principles, imaging, physiology, complications, and patient management?" },
  { label: "Faculty expertise", desc: "Are you learning from experienced cardiologists with relevant clinical and academic backgrounds?" },
  { label: "Clinical exposure", desc: "If hands-on training is advertised, understand exactly where it takes place, who supervises it, and what competencies are expected." },
  { label: "Learning flexibility", desc: "Can working doctors realistically attend sessions and complete academic requirements?" },
  { label: "Case-based education", desc: "Does the program use real clinical scenarios to develop decision-making skills?" },
  { label: "Assessment", desc: "Are there structured assessments, case reviews, logbooks, or other methods of evaluating learning?" },
  { label: "Certification", desc: "Understand exactly who awards the certificate and what it represents." },
  { label: "Career support", desc: "Look for academic guidance, professional development resources, and appropriate career counselling." },
];

const CAREER_OPPORTUNITIES = [
  "Hospital-Based Cardiology Practice",
  "Cath Lab and Cardiovascular Services",
  "Academic Medicine and Medical Education",
  "Cardiovascular Specialty Centres",
  "Clinical Research and Continuing Education",
];

const COMPARISON_ROWS = [
  { feature: "Learning Format", medfellow: "Flexible medical education", others: "Varies" },
  { feature: "Curriculum", medfellow: "Structured fellowship curriculum", others: "Varies" },
  { feature: "Case Discussions", medfellow: "Included in structured learning", others: "Varies" },
  { feature: "Faculty Guidance", medfellow: "Academic support", others: "Varies" },
  { feature: "Working Doctor Friendly", medfellow: "Yes", others: "Depends on program" },
  { feature: "Learning Resources", medfellow: "Digital learning resources", others: "Varies" },
  { feature: "Career Guidance", medfellow: "Available", others: "Varies" },
  { feature: "Clinical Training", medfellow: "Depends on selected program", others: "Depends on provider" },
];

const FAQS = [
  {
    q: "Who is eligible for an Interventional Cardiology Fellowship?",
    a: "Eligibility depends on the institution and program. Many formal interventional cardiology fellowships are intended for doctors who have completed specialist cardiology training such as DM or DNB Cardiology. Always verify the specific program requirements before applying.",
  },
  {
    q: "Is an online Interventional Cardiology Fellowship enough to perform PCI independently?",
    a: "No. Online academic learning cannot by itself establish independent procedural competency. PCI requires appropriate supervised clinical training, procedural experience, institutional credentialing, and compliance with applicable regulations.",
  },
  {
    q: "What should an Interventional Cardiology fellowship curriculum include?",
    a: "Look for coronary anatomy, angiography, hemodynamics, PCI principles, intravascular imaging, coronary physiology, patient selection, complication management, and case-based learning.",
  },
  {
    q: "Does the fellowship include cath lab training?",
    a: "This depends on the specific program and training mode. Before enrolling, ask whether clinical exposure is included, where it occurs, how long it lasts, and whether procedures are performed under appropriate supervision.",
  },
  {
    q: "What is the difference between a Cardiology and Interventional Cardiology fellowship?",
    a: "A general cardiology fellowship provides broad cardiovascular training. An interventional cardiology fellowship focuses more specifically on catheter-based diagnostic and therapeutic procedures and the clinical decision making surrounding them.",
  },
  {
    q: "Is Interventional Cardiology a good career option?",
    a: "It can be a rewarding specialty for appropriately qualified doctors interested in cardiovascular procedures, technology, acute care, and complex clinical decision making. Career opportunities depend on qualifications, procedural competency, experience, and local credentialing requirements.",
  },
  {
    q: "What technologies should I learn during an Interventional Cardiology fellowship?",
    a: "Depending on the program, learning may include IVUS, OCT, FFR, coronary physiology, modern catheter systems, imaging technologies, and contemporary PCI equipment.",
  },
  {
    q: "How long does an Interventional Cardiology fellowship take?",
    a: "Duration varies by institution. One-year programs are common, while some advanced clinical fellowships may have longer structures.",
  },
];

export default function InterventionalCardiologyGuidePage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Breadcrumb + Hero */}
      <section className="border-b border-[#E5E7EB] py-10 md:py-14">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-text-secondary mb-6">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <span>Best Fellowship Course in Interventional Cardiology</span>
          </div>

          <span className="section-label">Advance Your Interventional Cardiology Career</span>
          <h1 className="section-title mt-2 mb-4 !text-3xl md:!text-4xl">
            Best Fellowship Course in Interventional Cardiology
          </h1>

          <p className="text-[1rem] text-text-secondary leading-relaxed mb-4">
            Interventional cardiology has transformed the way many cardiovascular conditions are diagnosed and
            treated. Advances in coronary intervention, catheter-based procedures, intravascular imaging,
            hemodynamic assessment, and structural heart therapies have created a growing need for doctors to
            keep their knowledge and clinical skills current.
          </p>
          <p className="text-[1rem] text-text-secondary leading-relaxed mb-4">
            Choosing the Best Fellowship Course in Interventional Cardiology is therefore about more than
            finding a course with an attractive title. Doctors should look for a structured curriculum,
            experienced faculty, relevant case discussions, appropriate clinical exposure, and a learning
            format that matches their professional goals.
          </p>
          <p className="text-[1rem] text-text-secondary leading-relaxed mb-8">
            A well-designed fellowship can help eligible doctors deepen their understanding of coronary artery
            disease, catheter-based interventions, patient selection, procedural planning, cardiovascular
            emergencies, and post-procedure care. For doctors already working in clinical practice, flexible
            medical education can also make it easier to continue professional responsibilities while pursuing
            structured advanced learning.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
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

          <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
            <Image
              src="/courses/interventional-cardiology.jpg"
              alt="Best Fellowship Course in Interventional Cardiology"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        </div>
      </section>

      <div className="container-custom max-w-6xl py-4">
      <div className="grid lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2">

        {/* Why Pursue */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Growing Need for Advanced Cardiac Care</span>
          <SectionHeading icon={HeartPulse}>Why Pursue a Fellowship in Interventional Cardiology?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Interventional cardiology requires a combination of clinical judgment, anatomical understanding,
            technical knowledge, procedural planning, and patient safety awareness. A fellowship provides an
            opportunity to build on existing cardiology knowledge and explore advanced areas of cardiovascular
            intervention in a structured environment.
          </p>
          <p className="text-[0.875rem] font-semibold text-[#111827] mb-3">Key Benefits of Fellowship Training</p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-5">
            {KEY_BENEFITS.map((b) => (
              <div key={b} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{b}</span>
              </div>
            ))}
          </div>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed">
            Professional training frameworks also emphasize the importance of diagnostic catheterization,
            vascular access, angiography, hemodynamic assessment, and progressively developing technical skills
            during interventional cardiology training. A fellowship should therefore be evaluated based on the
            quality and depth of training, rather than simply its duration or certificate.
          </p>
        </section>

        {/* Curriculum */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Learn What Modern Interventional Cardiology Requires</span>
          <SectionHeading icon={GraduationCap}>What You Will Learn During the Fellowship</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-6">
            The curriculum should expose participants to the major concepts required for contemporary
            interventional cardiology practice.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {CURRICULUM_GROUPS.map((g) => (
              <div key={g.title} className="card p-4">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <span className="w-8 h-8 rounded-full bg-[#e8f2ea] text-[#15401E] flex items-center justify-center shrink-0">
                    <g.icon className="w-4 h-4" />
                  </span>
                  <span className="text-[0.9375rem] font-semibold text-[#111827]">{g.title}</span>
                </div>
                {g.desc && <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{g.desc}</p>}
                {g.items && (
                  <ul className="space-y-1">
                    {g.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-[0.8125rem] text-[#374151]">
                        <span className="text-[#15401E] mt-0.5">✓</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <Link href="/courses/fellowship-in-interventional-cardiology" className="inline-block mt-5 text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            View the full syllabus, fees, and duration →
          </Link>
        </section>

        {/* Flexible Learning */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Flexible Learning for Working Doctors</span>
          <SectionHeading icon={Clock}>Can You Pursue an Interventional Cardiology Fellowship While Working?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            Many experienced doctors want to pursue additional education without completely stepping away from
            their current professional responsibilities. A flexible fellowship format can make academic
            learning more manageable through:
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-5">
            {FLEXIBLE_HIGHLIGHTS.map((h) => (
              <div key={h} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{h}</span>
              </div>
            ))}
          </div>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed">
            However, online education and clinical procedural training are not interchangeable. Interventional
            procedures require appropriate supervised clinical experience and institutional training. This
            distinction is particularly important in interventional cardiology because procedural competence
            develops through structured clinical exposure, case volume, supervision, assessment, and ongoing
            practice.
          </p>
        </section>

        {/* Skills */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Develop Skills for Advanced Practice</span>
          <SectionHeading icon={Target}>Skills You Can Develop During the Fellowship</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            A strong fellowship should help participants develop more than theoretical knowledge.
          </p>
          <p className="text-[0.875rem] font-semibold text-[#111827] mb-2">Clinical Skills</p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-5">
            {CLINICAL_SKILLS.map((s) => (
              <div key={s} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{s}</span>
              </div>
            ))}
          </div>
          <p className="text-[0.875rem] font-semibold text-[#111827] mb-2">Interventional Skills</p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-5">
            {INTERVENTIONAL_SKILLS.map((s) => (
              <div key={s} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{s}</span>
              </div>
            ))}
          </div>
          <p className="text-[0.875rem] font-semibold text-[#111827] mb-2">Professional Skills</p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {PROFESSIONAL_SKILLS.map((s) => (
              <div key={s} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{s}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Eligibility */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Know Your Eligibility First</span>
          <SectionHeading icon={Users}>Who Should Consider an Interventional Cardiology Fellowship?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Eligibility varies significantly between fellowship providers, universities, hospitals, and
            regulatory pathways. Many established interventional cardiology fellowships are designed for
            doctors who have already completed specialist cardiology training.
          </p>
          <p className="text-[0.875rem] font-semibold text-[#111827] mb-3">Before Applying, Check</p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-4">
            {ELIGIBILITY_CHECKS.map((e) => (
              <div key={e} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{e}</span>
              </div>
            ))}
          </div>
          <p className="text-[0.875rem] text-text-secondary leading-relaxed">
            Important: Eligibility for an educational fellowship should not be confused with eligibility for
            independent interventional practice. Doctors should verify the requirements of their relevant
            medical regulator, employer, hospital, and credentialing authority.
          </p>
        </section>

        {/* How to Choose / Why Choose Us */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Choose Training That Fits Your Goals</span>
          <SectionHeading icon={ListChecks}>How to Choose the Best Interventional Cardiology Fellowship</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            Not every fellowship provides the same educational experience. Before enrolling, compare programs
            carefully.
          </p>
          <div className="space-y-3">
            {CHOOSE_FACTORS.map((f) => (
              <div key={f.label} className="card p-4">
                <p className="text-[0.875rem] font-semibold text-[#111827] mb-1">{f.label}</p>
                <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Explore Your Career Pathways</span>
          <SectionHeading icon={Briefcase}>Career Opportunities After an Interventional Cardiology Fellowship</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            Career opportunities depend on your existing qualifications, clinical experience, procedural
            competency, licensing, and local credentialing requirements. Doctors completing an Interventional
            Cardiology Fellowship often explore opportunities such as:
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

        {/* Case Studies */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Real Learning, Real Progress</span>
          <SectionHeading icon={Award}>Client Case Studies</SectionHeading>
          <div className="space-y-4">
            <div className="card p-5">
              <p className="text-[0.9375rem] font-semibold text-[#111827] mb-2">Case Study 1: Strengthening Coronary Knowledge</p>
              <p className="text-[0.875rem] text-text-secondary leading-relaxed">
                A cardiologist with an established clinical practice wanted to update his knowledge of
                contemporary coronary intervention. Instead of leaving practice for a full-time program, he
                chose structured fellowship learning that allowed him to study coronary anatomy, angiographic
                interpretation, PCI principles, and advanced imaging concepts alongside his existing
                responsibilities. The structured curriculum and case discussions helped him organize his
                knowledge and approach complex cardiovascular cases more systematically.
              </p>
            </div>
            <div className="card p-5">
              <p className="text-[0.9375rem] font-semibold text-[#111827] mb-2">Case Study 2: Building a Stronger Interventional Foundation</p>
              <p className="text-[0.875rem] text-text-secondary leading-relaxed">
                A young cardiologist looking to develop a stronger foundation in interventional cardiology
                wanted exposure to current cath lab concepts and evidence-based treatment approaches. Through
                structured academic learning and clinical case discussions, she developed a better
                understanding of patient selection, procedural planning, coronary physiology, and
                post-procedure care.
              </p>
            </div>
          </div>
          <p className="text-[0.8125rem] text-text-secondary leading-relaxed mt-4">
            Individual outcomes vary based on prior qualifications, clinical exposure, practice setting, and
            applicable credentialing requirements.
          </p>
        </section>

        {/* Comparison Table */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Compare Before You Enrol</span>
          <SectionHeading icon={Link2}>MedFellow Academy vs Other Fellowship Providers</SectionHeading>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 text-[0.8125rem] font-bold text-[#111827]">Feature</th>
                  <th className="py-3 pr-4 text-[0.8125rem] font-bold text-[#15401E]">MedFellow Academy</th>
                  <th className="py-3 text-[0.8125rem] font-bold text-[#111827]">Other Providers</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((r) => (
                  <tr key={r.feature} className="border-b border-[#F3F4F6]">
                    <td className="py-3 pr-4 text-[0.875rem] text-[#374151] font-medium">{r.feature}</td>
                    <td className="py-3 pr-4 text-[0.875rem] text-[#374151]">{r.medfellow}</td>
                    <td className="py-3 text-[0.875rem] text-text-secondary">{r.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[0.875rem] text-text-secondary leading-relaxed mt-4">
            The right choice ultimately depends on your qualification, learning objectives, desired clinical
            exposure, and long-term career plans.
          </p>
        </section>

        {/* Final CTA */}
        <section className="py-8">
          <span className="section-label">Take the Next Step</span>
          <SectionHeading icon={ClipboardCheck}>Advance Your Interventional Cardiology Knowledge</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            The best fellowship is not simply the one with the most attractive title or shortest duration. It
            is the program that provides relevant academic depth, experienced mentorship, appropriate clinical
            learning, and a structure that matches your professional goals.
          </p>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-6">
            If you are an appropriately qualified doctor looking to strengthen your understanding of modern
            interventional cardiology, a structured fellowship can provide a focused pathway for continued
            professional development. Explore the Fellowship Course in Interventional Cardiology at MedFellow
            Academy and evaluate the curriculum, eligibility, learning format, clinical components, and
            certification carefully before making your decision.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#15401E] text-white rounded-md font-semibold text-[0.9375rem] hover:bg-[#0f2e15] transition-colors"
          >
            Apply Now
          </Link>
        </section>
      </div>

      <div className="lg:col-span-1">
        <TopicClusterLinks title="Interventional Cardiology Resources" links={CLUSTER_LINKS} />
      </div>
      </div>
      </div>

      <FAQ faqs={FAQS} />

      <Footer />
    </div>
  );
}

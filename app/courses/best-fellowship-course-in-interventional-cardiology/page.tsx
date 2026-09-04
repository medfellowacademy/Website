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
} from "lucide-react";

const CLUSTER_LINKS = [
  { label: "Best Fellowship Course in Interventional Cardiology (Guide)", href: "/courses/best-fellowship-course-in-interventional-cardiology", type: "guide" as const },
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
    "best fellowship course in interventional cardiology, fellowship in interventional cardiology, interventional cardiology fellowship, online interventional cardiology fellowship, interventional cardiology course",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/courses/best-fellowship-course-in-interventional-cardiology/" },
  openGraph: {
    title: "Best Fellowship Course in Interventional Cardiology",
    description:
      "Explore the Best Fellowship Course in Interventional Cardiology, including curriculum, eligibility, skills, learning options, career pathways, and FAQs.",
    type: "article",
    url: "https://www.medfellowacademy.com/courses/best-fellowship-course-in-interventional-cardiology/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Fellowship in Interventional Cardiology" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Fellowship Course in Interventional Cardiology",
    description: "A complete guide for doctors seeking structured advanced learning in catheter-based cardiovascular care.",
  },
};

const STATS = [
  { icon: "🎓", value: "46+", label: "Medical Fellowship Programs" },
  { icon: "👨‍⚕️", value: "3,500+", label: "Doctors Successfully Trained" },
  { icon: "❤️", value: "Advanced", label: "Cardiology Learning" },
  { icon: "⭐", value: "4.8/5", label: "Doctor Satisfaction Rating" },
];

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

const CATH_LAB_TOPICS = [
  "Cath lab workflow",
  "Vascular access principles",
  "Coronary angiography",
  "Hemodynamic assessment",
  "Catheter and guidewire concepts",
  "Contrast-related considerations",
  "Procedural safety",
];

const PCI_TOPICS = [
  "Patient selection",
  "Lesion assessment",
  "Balloon angioplasty concepts",
  "Stent selection principles",
  "Procedural planning",
  "Post-procedure monitoring",
  "Recognition of complications",
];

const IMAGING_TOPICS = ["IVUS", "OCT", "FFR", "Hemodynamic measurements", "Coronary physiology"];

const COMPLICATION_TOPICS = [
  "Hemodynamic instability",
  "Acute coronary syndromes",
  "Bleeding and vascular complications",
  "Contrast-related complications",
  "Arrhythmias",
  "Pericardial complications",
  "Post-procedure monitoring",
];

const FLEXIBLE_FORMAT = [
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

const WHAT_TO_LOOK_FOR = [
  { title: "Curriculum depth", text: "Does the program cover coronary intervention, cath lab principles, imaging, physiology, complications, and patient management?" },
  { title: "Faculty expertise", text: "Are you learning from experienced cardiologists with relevant clinical and academic backgrounds?" },
  { title: "Clinical exposure", text: "If hands-on training is advertised, understand exactly where it takes place, who supervises it, and what competencies are expected." },
  { title: "Learning flexibility", text: "Can working doctors realistically attend sessions and complete academic requirements?" },
  { title: "Case-based education", text: "Does the program use real clinical scenarios to develop decision-making skills?" },
  { title: "Assessment", text: "Are there structured assessments, case reviews, logbooks, or other methods of evaluating learning?" },
  { title: "Certification", text: "Understand exactly who awards the certificate and what it represents." },
  { title: "Career support", text: "Look for academic guidance, professional development resources, and appropriate career counselling." },
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

const CASE_STUDIES = [
  {
    title: "Case Study 1: Strengthening Coronary Knowledge",
    text: "A cardiologist with an established clinical practice wanted to update his knowledge of contemporary coronary intervention. Instead of leaving practice for a full-time program, he chose structured fellowship learning that allowed him to study coronary anatomy, angiographic interpretation, PCI principles, and advanced imaging concepts alongside his existing responsibilities. The structured curriculum and case discussions helped him organize his knowledge and approach complex cardiovascular cases more systematically.",
  },
  {
    title: "Case Study 2: Building a Stronger Interventional Foundation",
    text: "A young cardiologist looking to develop a stronger foundation in interventional cardiology wanted exposure to current cath lab concepts and evidence-based treatment approaches. Through structured academic learning and clinical case discussions, she developed a better understanding of patient selection, procedural planning, coronary physiology, and post-procedure care. Individual outcomes vary based on prior qualifications, clinical exposure, practice setting, and applicable credentialing requirements.",
  },
];

const RELATED_LINKS = [
  { name: "Fellowship in Interventional Cardiology", desc: "Explore eligibility, curriculum, fees, and admission details.", href: "/courses/fellowship-in-interventional-cardiology" },
  { name: "How to Choose an Interventional Cardiology Fellowship", desc: "Learn what to compare before selecting a fellowship.", href: "/blog/how-to-choose-interventional-cardiology-fellowship" },
  { name: "Questions to Ask Before Joining an Interventional Cardiology Fellowship", desc: "Get a practical checklist before enrolling.", href: "/blog/questions-to-ask-before-joining-interventional-cardiology-fellowship" },
  { name: "Online vs Offline Interventional Cardiology Fellowship", desc: "Compare learning formats for working doctors.", href: "/blog/online-vs-offline-interventional-cardiology-fellowship" },
  { name: "Skills You Learn During an Interventional Cardiology Fellowship", desc: "Explore key clinical and interventional learning areas.", href: "/blog/skills-you-learn-interventional-cardiology-fellowship" },
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
    a: "Duration varies by institution. One-year programs are common, while some advanced clinical fellowships may have longer structures. For example, DY Patil University's program is one year, while the NBE FNB Interventional Cardiology pathway is a two-year program.",
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
            <Link href="/courses" className="hover:text-primary">Courses</Link>
            <span>/</span>
            <span>Best Fellowship Course in Interventional Cardiology</span>
          </div>

          <span className="section-label">Advanced Learning for Modern Cardiovascular Practice</span>
          <h1 className="section-title mt-2 mb-4 !text-3xl md:!text-4xl">
            Best Fellowship Course in Interventional Cardiology
          </h1>

          <p className="text-[1rem] text-text-secondary leading-relaxed mb-4">
            Interventional cardiology has transformed the way many cardiovascular conditions are diagnosed
            and treated. Advances in coronary intervention, catheter-based procedures, intravascular imaging,
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
            A well-designed Fellowship in Interventional Cardiology can help eligible doctors deepen their
            understanding of coronary artery disease, catheter-based interventions, patient selection,
            procedural planning, cardiovascular emergencies, and post-procedure care. For doctors already
            working in clinical practice, a flexible online interventional cardiology fellowship can also make
            it easier to continue professional responsibilities while pursuing structured advanced learning.
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

        {/* Why Pursue */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Growing Need for Advanced Cardiac Care</span>
          <SectionHeading icon={Award}>Why Pursue a Fellowship in Interventional Cardiology?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Interventional cardiology requires a combination of clinical judgment, anatomical understanding,
            technical knowledge, procedural planning, and patient safety awareness. A fellowship provides an
            opportunity to build on existing cardiology knowledge and explore advanced areas of cardiovascular
            intervention in a structured environment.
          </p>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            Professional training frameworks emphasize diagnostic catheterization, vascular access,
            angiography, hemodynamic assessment, and progressively developing technical skills during
            interventional cardiology training. A fellowship should therefore be evaluated based on the
            quality and depth of training, rather than simply its duration or certificate.
          </p>
          <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-3">Key Benefits of Fellowship Training</h3>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {KEY_BENEFITS.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* What You Will Learn */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Learn What Modern Interventional Cardiology Requires</span>
          <SectionHeading icon={ListChecks}>What You Will Learn During the Fellowship</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-6">
            The curriculum should expose participants to the major concepts required for contemporary
            interventional cardiology practice.
          </p>

          <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-1.5">Coronary Anatomy and Disease</h3>
          <p className="text-[0.875rem] text-text-secondary leading-relaxed mb-5">
            Participants develop a stronger understanding of coronary anatomy, coronary artery disease,
            ischemia, lesion characteristics, and the clinical factors that influence treatment decisions.
            This foundation is important when interpreting angiographic findings and considering appropriate
            treatment strategies.
          </p>

          <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-1.5">Cardiac Catheterization and Angiography</h3>
          <p className="text-[0.875rem] text-text-secondary leading-relaxed mb-3">The fellowship can introduce participants to:</p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-3">
            {CATH_LAB_TOPICS.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-[0.8125rem] text-text-secondary leading-relaxed mb-5 italic">
            National Board FNB curricula identify interpretation of hemodynamic records and angiographic
            images, together with understanding interventional techniques, as important educational objectives.
          </p>

          <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-1.5">Percutaneous Coronary Intervention</h3>
          <p className="text-[0.875rem] text-text-secondary leading-relaxed mb-3">
            Participants can develop a structured understanding of PCI, including:
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-3">
            {PCI_TOPICS.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-[0.8125rem] text-text-secondary leading-relaxed mb-5 italic">
            These concepts should be learned within the appropriate level of supervised clinical training. A
            fellowship certificate should not be presented as a substitute for required specialist
            qualifications, institutional credentialing, licensing, or supervised procedural competency.
          </p>

          <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-1.5">Intravascular Imaging and Physiology</h3>
          <p className="text-[0.875rem] text-text-secondary leading-relaxed mb-3">
            Modern interventional cardiology increasingly uses technologies such as:
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            {IMAGING_TOPICS.map((item) => (
              <span key={item} className="px-3 py-1 bg-[#e8f2ea] text-[#15401E] rounded-full text-[0.8125rem] font-medium">{item}</span>
            ))}
          </div>
          <p className="text-[0.8125rem] text-text-secondary leading-relaxed mb-5">
            These tools can help clinicians understand lesion characteristics and guide treatment decisions.
            Contemporary fellowship curricula include advanced imaging and coronary physiology as important
            components of interventional training.
          </p>

          <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-1.5">Complication Recognition and Patient Safety</h3>
          <p className="text-[0.875rem] text-text-secondary leading-relaxed mb-3">
            Interventional cardiology involves high-risk clinical situations. Doctors need to understand
            potential complications and appropriate emergency responses. Learning areas may include:
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {COMPLICATION_TOPICS.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Flexible Learning */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Flexible Learning for Working Doctors</span>
          <SectionHeading icon={Clock}>Can You Pursue an Interventional Cardiology Fellowship While Working?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Many experienced doctors want to pursue additional education without completely stepping away from
            their current professional responsibilities. A flexible fellowship format can make academic
            learning more manageable through:
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-5">
            {FLEXIBLE_FORMAT.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed">
            However, online education and clinical procedural training are not interchangeable. Interventional
            procedures require appropriate supervised clinical experience and institutional training.
            Procedural competence develops through structured clinical exposure, case volume, supervision,
            assessment, and ongoing practice. International competency frameworks similarly emphasize
            substantial clinical and procedural experience in the cath lab as part of advanced interventional
            cardiology training.
          </p>
        </section>

        {/* Skills */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Develop Skills for Advanced Practice</span>
          <SectionHeading icon={Target}>Skills You Can Develop During the Fellowship</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            A strong fellowship should help participants develop more than theoretical knowledge.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="card p-4">
              <h3 className="text-[0.875rem] font-bold text-[#15401E] mb-2.5">Clinical Skills</h3>
              <div className="space-y-1.5">
                {CLINICAL_SKILLS.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-[0.8125rem] text-[#374151]">
                    <span className="text-[#15401E] mt-0.5">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card p-4">
              <h3 className="text-[0.875rem] font-bold text-[#15401E] mb-2.5">Interventional Skills</h3>
              <div className="space-y-1.5">
                {INTERVENTIONAL_SKILLS.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-[0.8125rem] text-[#374151]">
                    <span className="text-[#15401E] mt-0.5">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card p-4">
              <h3 className="text-[0.875rem] font-bold text-[#15401E] mb-2.5">Professional Skills</h3>
              <div className="space-y-1.5">
                {PROFESSIONAL_SKILLS.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-[0.8125rem] text-[#374151]">
                    <span className="text-[#15401E] mt-0.5">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Know Your Eligibility First</span>
          <SectionHeading icon={Users}>Who Should Consider an Interventional Cardiology Fellowship?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Eligibility varies significantly between fellowship providers, universities, hospitals, and
            regulatory pathways. Many established interventional cardiology fellowships are designed for
            doctors who have already completed specialist cardiology training. For example, DY Patil
            University&apos;s program specifies Post DNB/DM Cardiology eligibility, while other institutional
            programs similarly target qualified cardiologists.
          </p>
          <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-3">Before Applying, Check</h3>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-5">
            {ELIGIBILITY_CHECKS.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg">
            <p className="text-[0.875rem] text-[#374151] leading-relaxed">
              <strong>Important:</strong> Eligibility for an educational fellowship should not be confused with
              eligibility for independent interventional practice. Doctors should verify the requirements of
              their relevant medical regulator, employer, hospital, and credentialing authority.
            </p>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Choose Training That Fits Your Goals</span>
          <SectionHeading icon={ClipboardList}>How to Choose the Best Interventional Cardiology Fellowship</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            Not every fellowship provides the same educational experience. Before enrolling, compare programs
            carefully against the following factors.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {WHAT_TO_LOOK_FOR.map((item) => (
              <div key={item.title} className="card p-4">
                <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-1.5">{item.title}</h3>
                <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <Link href="/blog/how-to-choose-interventional-cardiology-fellowship" className="inline-block mt-5 text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            Read the full guide: How to Choose an Interventional Cardiology Fellowship →
          </Link>
        </section>

        {/* Comparison */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Compare Before You Enrol</span>
          <SectionHeading icon={ShieldCheck}>MedFellow Academy vs Other Fellowship Providers</SectionHeading>
          <div className="overflow-x-auto rounded-lg border border-[#E5E7EB] mb-4">
            <table className="w-full text-[0.875rem] text-left">
              <thead className="bg-[#15401E] text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Feature</th>
                  <th className="px-4 py-3 font-semibold">MedFellow Academy</th>
                  <th className="px-4 py-3 font-semibold">Other Providers</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((r, i) => (
                  <tr key={r.feature} className={i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"}>
                    <td className="px-4 py-3 font-medium text-[#111827] border-t border-[#F3F4F6]">{r.feature}</td>
                    <td className="px-4 py-3 text-[#374151] border-t border-[#F3F4F6]">{r.medfellow}</td>
                    <td className="px-4 py-3 text-[#374151] border-t border-[#F3F4F6]">{r.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[0.875rem] text-text-secondary leading-relaxed">
            The right choice ultimately depends on your qualification, learning objectives, desired clinical
            exposure, and long-term career plans.
          </p>
        </section>

        {/* Case Studies */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Real Learning, Real Progress</span>
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

        {/* Admission */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Your Fellowship Journey</span>
          <SectionHeading icon={ClipboardCheck}>Take the Next Step</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            The best fellowship is not simply the one with the most attractive title or shortest duration. It
            is the program that provides relevant academic depth, experienced mentorship, appropriate clinical
            learning, and a structure that matches your professional goals. If you are an appropriately
            qualified doctor looking to strengthen your understanding of modern interventional cardiology, a
            structured fellowship can provide a focused pathway for continued professional development.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#15401E] text-white rounded-md font-semibold text-[0.9375rem] hover:bg-[#0f2e15] transition-colors"
            >
              Apply Now
            </Link>
            <Link
              href="/courses/fellowship-in-interventional-cardiology"
              className="inline-flex items-center justify-center px-6 py-3 bg-white border border-[#D1D5DB] text-[#15401E] rounded-md font-semibold text-[0.9375rem] hover:border-[#15401E] transition-colors"
            >
              Explore the Fellowship Course
            </Link>
          </div>
        </section>

        {/* Related */}
        <section className="py-8">
          <span className="section-label">Continue Your Medical Learning</span>
          <SectionHeading icon={Link2}>More Courses &amp; Information</SectionHeading>
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
        <TopicClusterLinks title="Interventional Cardiology Resources" links={CLUSTER_LINKS} />
      </div>
      </div>
      </div>

      <FAQ faqs={FAQS} />

      <Footer />
    </div>
  );
}

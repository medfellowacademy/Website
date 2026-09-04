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
  { label: "Best Fellowship Course in Neurosurgery (Guide)", href: "/courses/best-fellowship-course-in-neurosurgery", type: "guide" as const },
  { label: "How to Choose a Neurosurgery Fellowship", href: "/blog/how-to-choose-a-neurosurgery-fellowship", type: "blog" as const },
  { label: "Online vs Offline Neurosurgery Fellowship", href: "/blog/online-vs-offline-neurosurgery-fellowship", type: "blog" as const },
  { label: "Career Opportunities After a Neurosurgery Fellowship", href: "/blog/career-opportunities-after-a-neurosurgery-fellowship", type: "blog" as const },
  { label: "Skills You Learn During a Neurosurgery Fellowship", href: "/blog/skills-you-learn-during-a-neurosurgery-fellowship", type: "blog" as const },
  { label: "Neurosurgery Fellowship Curriculum: What Will You Learn?", href: "/blog/neurosurgery-fellowship-curriculum", type: "blog" as const },
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
  title: "Best Fellowship Course in Neurosurgery | MedFellow",
  description:
    "Explore the best fellowship course in neurosurgery, including curriculum, clinical exposure, skills, eligibility, learning formats, certification and career scope.",
  keywords:
    "best fellowship course in neurosurgery, neurosurgery fellowship, fellowship in neurosurgery, neurosurgery fellowship course, neurosurgery fellowship program",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/courses/best-fellowship-course-in-neurosurgery/" },
  openGraph: {
    title: "Best Fellowship Course in Neurosurgery",
    description:
      "Explore the best fellowship course in neurosurgery, including curriculum, clinical exposure, skills, eligibility, learning formats, certification and career scope.",
    type: "article",
    url: "https://www.medfellowacademy.com/courses/best-fellowship-course-in-neurosurgery/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Fellowship in Neurosurgery" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Fellowship Course in Neurosurgery",
    description: "A complete guide for doctors seeking structured advanced training in a neurosurgical subspecialty.",
  },
};

const STATS = [
  { icon: "🎓", value: "46+", label: "Medical Fellowship Programs" },
  { icon: "👨‍⚕️", value: "3,500+", label: "Doctors Trained" },
  { icon: "🧠", value: "Subspecialty", label: "Focused Learning" },
  { icon: "⭐", value: "4.8/5", label: "Doctor Satisfaction Rating" },
];

const SUBSPECIALTY_TOPICS = [
  "Neurotrauma", "Spine surgery", "Cerebrovascular neurosurgery", "Skull base surgery", "Neuro-oncology",
  "Pediatric neurosurgery", "Functional neurosurgery", "Neurocritical care", "Neuroendoscopy",
  "Stereotactic and minimally invasive techniques", "Perioperative neurosurgical management",
];

const WHY_PURSUE = [
  "Develop expertise in a neurosurgical subspecialty",
  "Strengthen clinical decision-making",
  "Understand advanced diagnostic approaches",
  "Improve knowledge of complex neurosurgical conditions",
  "Learn current treatment strategies",
  "Gain exposure to specialized case discussions",
  "Develop academic and research skills",
  "Expand your professional scope",
  "Prepare for a focused neurosurgical career pathway",
];

const CANDIDATES = [
  "Have completed relevant postgraduate medical training",
  "Are pursuing advanced neurosurgical knowledge",
  "Work in neurosurgical departments",
  "Want to develop a subspecialty interest",
  "Are involved in neurological or neurosurgical patient care",
  "Want to strengthen their academic profile",
  "Are looking for structured advanced learning alongside clinical practice",
];

const CURRICULUM = [
  { title: "Neuroanatomy and Surgical Anatomy", text: "Brain anatomy, cranial nerves, cerebral vascular anatomy, spinal anatomy, skull base anatomy, surgical corridors, and functional neuroanatomy." },
  { title: "Neurotrauma", text: "Assessment and management principles for traumatic brain injury, intracranial hemorrhage, skull fractures, spinal trauma, and neurocritical care considerations." },
  { title: "Spine and Spinal Disorders", text: "Degenerative spinal conditions, disc disorders, spinal stenosis, spinal tumors, spinal trauma, deformity, surgical planning, and postoperative care." },
  { title: "Cerebrovascular Neurosurgery", text: "Intracranial aneurysms, arteriovenous malformations, intracranial hemorrhage, ischemic cerebrovascular disease, vascular imaging, and perioperative management." },
  { title: "Neuro-Oncology", text: "Primary and metastatic brain tumors, spinal tumors, tumor imaging, surgical planning, multidisciplinary care, and postoperative management." },
  { title: "Skull Base and Complex Cranial Surgery", text: "Skull base anatomy, skull base tumors, cranial nerve disorders, surgical approaches, multidisciplinary treatment, and postoperative complications." },
  { title: "Pediatric Neurosurgery", text: "Hydrocephalus, congenital neurological disorders, pediatric brain tumors, craniosynostosis, spinal dysraphism, and pediatric neurotrauma." },
];

const SKILLS = [
  "Neurological assessment", "Interpretation of neuroimaging", "Case evaluation",
  "Surgical planning principles", "Perioperative decision-making", "Patient risk assessment",
  "Complication recognition", "Postoperative management", "Multidisciplinary communication",
  "Evidence-based clinical decision-making", "Case presentation", "Academic and research skills",
];

const SUBSPECIALTIES = [
  { title: "Spine Surgery", text: "Surgical management of disorders involving the spine and spinal cord." },
  { title: "Neuro-Oncology", text: "Surgical and multidisciplinary management of tumors affecting the brain and spine." },
  { title: "Cerebrovascular Neurosurgery", text: "Vascular conditions affecting the brain and associated surgical management." },
  { title: "Skull Base Surgery", text: "Complex lesions and conditions involving the skull base and nearby neurovascular structures." },
  { title: "Pediatric Neurosurgery", text: "Neurosurgical conditions affecting infants, children, and adolescents." },
  { title: "Functional Neurosurgery", text: "Advanced treatment approaches for selected movement disorders, epilepsy, pain, and other neurological conditions." },
  { title: "Neurotrauma", text: "Assessment and management of traumatic neurological injuries." },
  { title: "Neurocritical Care", text: "Intensive management of patients with severe neurological and neurosurgical conditions." },
];

const RESIDENCY_ROWS = [
  { factor: "Purpose", residency: "Broad specialty training", fellowship: "Advanced focused training" },
  { factor: "Scope", residency: "Comprehensive neurosurgery", fellowship: "Selected subspecialty" },
  { factor: "Career stage", residency: "Core postgraduate training", fellowship: "Usually after relevant specialty training" },
  { factor: "Curriculum", residency: "Broad", fellowship: "More specialized" },
  { factor: "Clinical exposure", residency: "Broad range", fellowship: "Focused case mix" },
  { factor: "Subspecialty focus", residency: "Limited", fellowship: "Usually stronger" },
];

const CLINICAL_QUESTIONS = [
  "Where is the clinical training conducted?",
  "What types of cases are available?",
  "How frequently are cases discussed?",
  "Can fellows observe procedures?",
  "Can fellows assist under supervision?",
  "Are practical sessions included?",
  "Is there access to operating-room environments?",
  "Is simulation available?",
  "Who supervises the training?",
  "Is the clinical exposure documented as part of the fellowship?",
];

const COMPARISON_ROWS = [
  { feature: "Learning Format", medfellow: "Flexible online/hybrid options", others: "Often fixed offline schedules" },
  { feature: "Curriculum", medfellow: "Structured, specialty-focused modules", others: "Varies by provider" },
  { feature: "Working Doctors", medfellow: "Designed for flexible learning", others: "May require fixed commitments" },
  { feature: "Case-Based Learning", medfellow: "Included as part of structured learning", others: "Depends on the program" },
  { feature: "Faculty Support", medfellow: "Faculty-led academic guidance", others: "Varies by institution" },
  { feature: "Clinical Exposure", medfellow: "Depends on the specific program", others: "Often hospital-based" },
  { feature: "Hands-On Training", medfellow: "Depends on course format", others: "Varies significantly" },
  { feature: "Assessment", medfellow: "Structured assessments", others: "Provider-dependent" },
  { feature: "Certification", medfellow: "Fellowship certificate as per program", others: "Varies by provider" },
];

const CAREER_PATHWAYS = [
  "Neurosurgical hospitals", "Specialty centers", "Academic institutions", "Research organizations",
  "Spine-focused practice", "Neuro-oncology teams", "Neurotrauma services", "Cerebrovascular services",
  "Pediatric neurosurgical services", "Teaching and academic roles",
];

const ENROL_QUESTIONS = [
  "What is included in the curriculum?",
  "Who are the faculty members?",
  "How much clinical exposure is provided?",
  "What does hands-on training actually include?",
  "Where does practical training take place?",
  "Can fellows observe or assist procedures?",
  "What are the eligibility requirements?",
  "How long is the fellowship?",
  "How are fellows assessed?",
  "Who awards the certificate and what does it represent?",
  "Are there additional fees?",
  "Can working doctors complete the program?",
  "Are research opportunities available?",
  "Does the program meet any specific regulatory or credentialing requirement?",
];

const CASE_STUDIES = [
  {
    title: "Case Study 1: Working Doctor Seeking Flexibility",
    text: "A practising doctor wanted to pursue advanced neurosurgical education without taking an extended break from professional responsibilities. After comparing the curriculum, learning schedule, faculty access, assessment structure, and clinical requirements, they chose a flexible fellowship format that allowed them to strengthen knowledge through organized modules, case-based learning, and academic discussions while maintaining their practice. Flexibility can be important for working doctors, but it should always be balanced against the level of clinical and practical training required.",
  },
  {
    title: "Case Study 2: Doctor Building a Subspecialty Focus",
    text: "A doctor wanted to develop deeper knowledge in a specific area of neurosurgery rather than relying only on broad general training. They evaluated fellowship programs based on specialty relevance, curriculum depth, faculty expertise, clinical exposure, and research opportunities. Focused fellowship education helped organize advanced learning around their intended area of professional development. A fellowship is most valuable when its curriculum aligns closely with the doctor's intended clinical and academic direction.",
  },
];

const RELATED_LINKS = [
  { name: "Fellowship Course in Neurosurgery", desc: "Explore the neurosurgery fellowship course, program structure, eligibility, and learning details.", href: "/courses/fellowship-in-neurosurgery" },
  { name: "How to Choose a Neurosurgery Fellowship", desc: "Compare neurosurgery fellowships based on curriculum, faculty, clinical exposure, and career goals.", href: "/blog/how-to-choose-a-neurosurgery-fellowship" },
  { name: "Online vs Offline Neurosurgery Fellowship", desc: "Compare online and offline learning formats, clinical exposure, flexibility, and practical training.", href: "/blog/online-vs-offline-neurosurgery-fellowship" },
  { name: "Career Opportunities After a Neurosurgery Fellowship", desc: "Explore potential career pathways after advanced neurosurgery training.", href: "/blog/career-opportunities-after-a-neurosurgery-fellowship" },
  { name: "Skills You Learn During a Neurosurgery Fellowship", desc: "The clinical, analytical, academic, and professional skills developed during fellowship training.", href: "/blog/skills-you-learn-during-a-neurosurgery-fellowship" },
  { name: "Neurosurgery Fellowship Curriculum", desc: "The major subjects and learning areas covered in neurosurgery fellowship training.", href: "/blog/neurosurgery-fellowship-curriculum" },
];

const FAQS = [
  {
    q: "What is the best fellowship course in neurosurgery?",
    a: "The best fellowship depends on your career objective and area of interest. Compare curriculum, faculty, clinical exposure, practical training, assessment, certification, duration, flexibility, and career relevance before choosing a program.",
  },
  {
    q: "Who is eligible for a neurosurgery fellowship?",
    a: "Eligibility varies by program. Some fellowships may require specific postgraduate qualifications, neurosurgical training, medical registration, or clinical experience. Always check the current eligibility criteria of the specific institution.",
  },
  {
    q: "What do you learn in a neurosurgery fellowship?",
    a: "Depending on the specialty, training may cover neurotrauma, spine surgery, cerebrovascular disorders, neuro-oncology, skull base surgery, pediatric neurosurgery, neurocritical care, functional neurosurgery, imaging, perioperative care, and research.",
  },
  {
    q: "Is a neurosurgery fellowship different from neurosurgery residency?",
    a: "Yes. Residency generally provides core specialty training, while a fellowship usually provides more focused advanced training in a particular area of neurosurgery. Requirements vary by country and institution.",
  },
  {
    q: "Can a neurosurgery fellowship be completed online?",
    a: "Some programs offer online academic or hybrid training. However, online education should not automatically be considered equivalent to supervised hands-on clinical training. Check the practical component carefully.",
  },
  {
    q: "Does an online neurosurgery fellowship provide hands-on surgical training?",
    a: "Not necessarily. If hands-on training is important, ask specifically where clinical training takes place, which procedures are included, how supervision works, and whether fellows observe, assist, or perform procedures.",
  },
  {
    q: "How long is a neurosurgery fellowship?",
    a: "Duration varies considerably according to the fellowship, country, institution, and clinical requirements. Always compare duration with the actual curriculum and clinical exposure.",
  },
  {
    q: "How much does a neurosurgery fellowship cost?",
    a: "Fees vary by institution and program format. Compare total costs, including tuition, examination, certification, clinical training, travel, accommodation, and other mandatory expenses.",
  },
  {
    q: "Does a neurosurgery fellowship certificate provide specialist registration?",
    a: "Not automatically. A fellowship certificate should not be assumed to provide specialist registration, licensing, or regulatory recognition. Doctors should verify the requirements of the relevant medical authority.",
  },
  {
    q: "How should I compare two neurosurgery fellowship programs?",
    a: "Compare their curriculum, faculty, clinical exposure, practical training, assessment, certification, duration, fees, flexibility, research opportunities, and relevance to your intended career pathway.",
  },
];

export default function NeurosurgeryGuidePage() {
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
            <span>Best Fellowship Course in Neurosurgery</span>
          </div>

          <span className="section-label">Advance Your Neurosurgery Skills</span>
          <h1 className="section-title mt-2 mb-4 !text-3xl md:!text-4xl">
            Best Fellowship Course in Neurosurgery
          </h1>

          <p className="text-[1rem] text-text-secondary leading-relaxed mb-4">
            A neurosurgery fellowship can help doctors build advanced knowledge in specialized areas of
            neurological and neurosurgical care. Depending on the fellowship, training may cover areas such as
            neurotrauma, spine surgery, cerebrovascular disorders, skull base surgery, neuro-oncology,
            pediatric neurosurgery, neurocritical care, and other subspecialty topics.
          </p>
          <p className="text-[1rem] text-text-secondary leading-relaxed mb-8">
            Choosing the best fellowship course in neurosurgery requires more than comparing course names and
            fees. Doctors should evaluate the curriculum, faculty expertise, clinical exposure, practical
            training, learning format, assessment, eligibility, certification, and career relevance. The right
            fellowship is ultimately the one that matches your existing qualification, professional goals,
            learning requirements, and desired area of specialization.
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

        {/* What Is a Neurosurgery Fellowship */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Understand Neurosurgery Fellowship Training</span>
          <SectionHeading icon={BookOpen}>What Is a Neurosurgery Fellowship?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            A neurosurgery fellowship is advanced postgraduate training designed to deepen knowledge and
            clinical understanding in a specific area of neurosurgery or neurological care. Depending on the
            program, fellows may study specialized topics such as:
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-5">
            {SUBSPECIALTY_TOPICS.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed">
            The exact scope depends on the institution and fellowship structure. Doctors should review the
            actual curriculum instead of assuming that every neurosurgery fellowship provides the same clinical
            or procedural training. For working doctors, an online or hybrid fellowship may provide structured
            academic learning while allowing them to continue professional responsibilities, while an offline
            program may offer greater access to an institutional clinical environment.
          </p>
        </section>

        {/* Why Pursue */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Build Specialized Neurosurgery Expertise</span>
          <SectionHeading icon={Award}>Why Pursue a Neurosurgery Fellowship?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            Neurosurgery is a complex and rapidly developing specialty. Advanced fellowship training can help
            doctors develop deeper knowledge in selected areas and understand contemporary approaches to
            diagnosis, treatment planning, perioperative care, and patient management. A fellowship may be
            valuable if you want to:
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {WHY_PURSUE.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Who Should Consider */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Is Neurosurgery Training Right for You?</span>
          <SectionHeading icon={Users}>Who Should Consider This Fellowship Course?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            A neurosurgery fellowship is generally intended for appropriately qualified medical professionals
            who want advanced training in neurosurgical or closely related areas. Depending on the program,
            eligibility may require specific postgraduate qualifications, registration, clinical experience, or
            prior neurosurgical training. Potential candidates may include doctors who:
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-4">
            {CANDIDATES.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-[0.8125rem] text-text-secondary leading-relaxed italic">
            Always verify the specific eligibility requirements of the fellowship before applying.
          </p>
        </section>

        {/* Curriculum */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Explore Advanced Neurosurgery Topics</span>
          <SectionHeading icon={ListChecks}>Explore the Neurosurgery Fellowship Curriculum</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-6">
            A strong neurosurgery fellowship curriculum should be aligned with the program&apos;s intended
            learning outcomes and specialty focus. Depending on the fellowship, curriculum areas may include:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {CURRICULUM.map((m) => (
              <div key={m.title} className="card p-4">
                <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-1.5">{m.title}</h3>
                <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
          <Link href="/blog/neurosurgery-fellowship-curriculum" className="inline-block mt-5 text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            Read the full curriculum guide →
          </Link>
        </section>

        {/* Skills */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Develop Advanced Clinical Skills</span>
          <SectionHeading icon={Target}>Skills You Learn During a Neurosurgery Fellowship</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            A well-structured fellowship should help doctors develop knowledge and decision-making skills
            relevant to their area of training. Depending on the program and level of clinical exposure, these
            may include:
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-5">
            {SKILLS.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg">
            <p className="text-[0.875rem] text-[#374151] leading-relaxed">
              The level of independent procedural responsibility should always be verified with the
              institution. A fellowship certificate does not automatically mean that a doctor is independently
              trained or authorized to perform every procedure covered academically.
            </p>
          </div>
        </section>

        {/* Learning Format */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Choose Your Learning Format</span>
          <SectionHeading icon={Clock}>Compare Online, Offline and Hybrid Training</SectionHeading>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="card p-4">
              <h3 className="text-[0.875rem] font-bold text-[#15401E] mb-2">Online</h3>
              <p className="text-[0.8125rem] text-text-secondary leading-relaxed">Remote access to academic content, flexible schedules, recorded sessions where available, virtual case discussions, and the ability to continue professional responsibilities. Not automatically equivalent to hands-on clinical training.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-[0.875rem] font-bold text-[#15401E] mb-2">Offline</h3>
              <p className="text-[0.8125rem] text-text-secondary leading-relaxed">Greater access to hospitals, neurosurgical departments, patients, faculty, case discussions, surgical observation, and clinical teams. May require relocation, fixed schedules, and time away from existing responsibilities.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-[0.875rem] font-bold text-[#15401E] mb-2">Hybrid</h3>
              <p className="text-[0.8125rem] text-text-secondary leading-relaxed">Combines online academic learning with offline clinical or practical components — a balance of flexibility and applied learning for working doctors, provided the clinical component is clearly defined.</p>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Choose Training With Purpose</span>
          <SectionHeading icon={GraduationCap}>How to Choose the Best Neurosurgery Fellowship</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            There is no single fellowship that is best for every doctor. Before enrolling, evaluate curriculum
            quality (does it cover the neurosurgical areas relevant to your career goals?), faculty expertise,
            clinical exposure, assessment structure, and certification — understanding exactly who awards the
            certificate and what credential you receive. Do not assume that a fellowship automatically provides
            specialist registration, licensing, or regulatory recognition in a particular country.
          </p>
          <Link href="/blog/how-to-choose-a-neurosurgery-fellowship" className="inline-block text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            Read the complete guide: How to Choose a Neurosurgery Fellowship →
          </Link>
        </section>

        {/* Clinical Exposure */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Look Beyond the Course Brochure</span>
          <SectionHeading icon={ClipboardList}>Clinical Exposure: What Should You Check?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            A program may advertise &quot;hands-on training,&quot; but you should clarify what this means. Ask:
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {CLINICAL_QUESTIONS.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Subspecialties */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Find Your Neurosurgery Focus</span>
          <SectionHeading icon={Link2}>Neurosurgery Subspecialties to Explore</SectionHeading>
          <div className="grid sm:grid-cols-2 gap-4">
            {SUBSPECIALTIES.map((s) => (
              <div key={s.title} className="card p-4">
                <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-1.5">{s.title}</h3>
                <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Fellowship vs Residency */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Know the Training Difference</span>
          <SectionHeading icon={ShieldCheck}>Neurosurgery Fellowship vs Residency</SectionHeading>
          <div className="overflow-x-auto rounded-lg border border-[#E5E7EB] mb-4">
            <table className="w-full text-[0.875rem] text-left">
              <thead className="bg-[#15401E] text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Factor</th>
                  <th className="px-4 py-3 font-semibold">Residency</th>
                  <th className="px-4 py-3 font-semibold">Fellowship</th>
                </tr>
              </thead>
              <tbody>
                {RESIDENCY_ROWS.map((r, i) => (
                  <tr key={r.factor} className={i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"}>
                    <td className="px-4 py-3 font-medium text-[#111827] border-t border-[#F3F4F6]">{r.factor}</td>
                    <td className="px-4 py-3 text-[#374151] border-t border-[#F3F4F6]">{r.residency}</td>
                    <td className="px-4 py-3 text-[#374151] border-t border-[#F3F4F6]">{r.fellowship}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[0.875rem] text-text-secondary leading-relaxed">
            A fellowship should not be viewed as a substitute for required residency or specialist training
            unless the specific program and regulatory framework explicitly state otherwise.
          </p>
        </section>

        {/* Duration & Fees */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Plan Your Training Time</span>
          <SectionHeading icon={ClipboardCheck}>Duration, Commitment &amp; Fees</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Fellowship duration varies according to the program, specialty, clinical requirements, and
            educational model. Before enrolling, ask about total program duration, weekly learning hours,
            clinical attendance, practical training, assessment dates, assignments, examination requirements,
            and research requirements — and whether the schedule allows you to continue your professional
            responsibilities.
          </p>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed">
            The cost of a fellowship should be evaluated alongside the training provided. Compare tuition fees,
            registration fees, examination charges, clinical training charges, certification fees, travel,
            accommodation, time away from practice, and learning resources. A lower fee does not necessarily
            mean better value, and a higher fee does not automatically guarantee superior training.
          </p>
        </section>

        {/* Career */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Build Your Future in Neurosurgery</span>
          <SectionHeading icon={Briefcase}>Career Opportunities After a Neurosurgery Fellowship</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Advanced training can support different professional pathways depending on your underlying
            qualification, clinical experience, fellowship focus, and local professional regulations. Potential
            areas may include:
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-4">
            {CAREER_PATHWAYS.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg">
            <p className="text-[0.875rem] text-[#374151] leading-relaxed">
              Career outcomes should not be guaranteed by a fellowship provider. Your eligibility for a
              particular position will depend on the requirements of the employer and applicable medical
              regulations.
            </p>
          </div>
        </section>

        {/* Is It Worth It */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Decide If It Fits Your Goals</span>
          <SectionHeading icon={HelpCircle}>Is a Neurosurgery Fellowship Worth It?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            A neurosurgery fellowship can be worthwhile when it provides training that fills a specific
            knowledge or skill gap in your career. It may be valuable if you want to develop focused
            subspecialty knowledge, strengthen clinical decision-making, expand academic expertise, gain
            exposure to specialized cases, develop research skills, or prepare for a focused clinical role.
          </p>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed">
            The value depends on the quality and recognition of the program, the relevance of its curriculum,
            and the type of clinical exposure provided. The better question is not simply &quot;Is a
            neurosurgery fellowship worth it?&quot; but &quot;Does this fellowship provide the training I need
            for my intended career pathway?&quot;
          </p>
        </section>

        {/* Questions to Ask */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Ask Before You Enrol</span>
          <SectionHeading icon={HelpCircle}>Questions to Ask Before Joining</SectionHeading>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {ENROL_QUESTIONS.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">MedFellow vs Other Providers</span>
          <SectionHeading icon={ShieldCheck}>MedFellow vs Other Neurosurgery Fellowships</SectionHeading>
          <div className="overflow-x-auto rounded-lg border border-[#E5E7EB] mb-4">
            <table className="w-full text-[0.875rem] text-left">
              <thead className="bg-[#15401E] text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Factor</th>
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
            The comparison should always be made based on your own training requirements. A hospital-based
            fellowship may offer greater direct clinical exposure, while a flexible fellowship may be more
            suitable for doctors who need to continue working.
          </p>
        </section>

        {/* Case Studies */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Learning That Supports Careers</span>
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

        {/* CTA */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Choose Your Next Step Wisely</span>
          <SectionHeading icon={Award}>Final Takeaway for Doctors</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            Choosing the best fellowship course in neurosurgery requires careful evaluation. Look beyond the
            course title and compare the curriculum, faculty, clinical exposure, practical training, learning
            format, assessments, certification, fees, and career relevance. The best neurosurgery fellowship is
            the one that matches your qualifications, career goals, learning needs, and desired area of
            specialization.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#15401E] text-white rounded-md font-semibold text-[0.9375rem] hover:bg-[#0f2e15] transition-colors"
            >
              Apply Now
            </Link>
            <Link
              href="/courses/fellowship-in-neurosurgery"
              className="inline-flex items-center justify-center px-6 py-3 bg-white border border-[#D1D5DB] text-[#15401E] rounded-md font-semibold text-[0.9375rem] hover:border-[#15401E] transition-colors"
            >
              Explore the Fellowship Course
            </Link>
          </div>
        </section>

        {/* Related */}
        <section className="py-8">
          <span className="section-label">Continue Your Neurosurgery Journey</span>
          <SectionHeading icon={Link2}>Explore More Fellowship Information</SectionHeading>
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
        <TopicClusterLinks title="Neurosurgery Resources" links={CLUSTER_LINKS} />
      </div>
      </div>
      </div>

      <FAQ faqs={FAQS} />

      <Footer />
    </div>
  );
}

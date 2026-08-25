import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import TopicClusterLinks from "@/components/TopicClusterLinks";
import {
  Star,
  BookOpen,
  GraduationCap,
  Clock,
  ShieldCheck,
  Users,
  Award,
  Briefcase,
  Sparkles,
  BarChart3,
  Quote,
} from "lucide-react";

const CLUSTER_LINKS = [
  { label: "Best Fellowship Course in Neurosurgery (Guide)", href: "/best-fellowship-course-in-neurosurgery", type: "guide" as const },
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
  title: "Best Fellowship Course in Neurosurgery | MedFellow Academy",
  description:
    "Explore the best fellowship course in neurosurgery, including curriculum, clinical exposure, skills, eligibility, learning formats, certification and career scope.",
  keywords: "best fellowship course in neurosurgery, neurosurgery fellowship, fellowship in neurosurgery, neurosurgery fellowship course, neurosurgery fellowship program",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/best-fellowship-course-in-neurosurgery/" },
  openGraph: {
    title: "Best Fellowship Course in Neurosurgery",
    description:
      "Explore the best fellowship course in neurosurgery, including curriculum, clinical exposure, skills, eligibility, learning formats, certification and career scope.",
    type: "article",
    url: "https://www.medfellowacademy.com/best-fellowship-course-in-neurosurgery/",
    images: [{ url: "https://www.medfellowacademy.com/courses/neurosurgery.jpg", width: 1200, height: 630, alt: "MedFellow Fellowship in Neurosurgery" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Fellowship Course in Neurosurgery",
    description: "Explore the best fellowship course in neurosurgery for doctors.",
  },
};

const CURRICULUM_GROUPS = [
  { title: "Neuroanatomy and Surgical Anatomy", text: "Advanced understanding of brain anatomy, cranial nerves, cerebral vascular anatomy, spinal anatomy, skull base anatomy, and surgical corridors." },
  { title: "Neurotrauma", text: "Assessment and management principles for traumatic brain injury, intracranial hemorrhage, skull fractures, spinal trauma, and neurocritical care considerations." },
  { title: "Spine and Spinal Disorders", text: "Degenerative spinal conditions, disc disorders, spinal stenosis, spinal tumors, spinal trauma, deformity, and surgical planning." },
  { title: "Cerebrovascular Neurosurgery", text: "Intracranial aneurysms, arteriovenous malformations, intracranial hemorrhage, vascular imaging, and perioperative management." },
  { title: "Neuro-Oncology", text: "Primary and metastatic brain tumors, spinal tumors, tumor imaging, surgical planning, and multidisciplinary care." },
  { title: "Skull Base and Complex Cranial Surgery", text: "Skull base anatomy, skull base tumors, cranial nerve disorders, surgical approaches, and multidisciplinary treatment." },
  { title: "Pediatric Neurosurgery", text: "Hydrocephalus, congenital neurological disorders, pediatric brain tumors, craniosynostosis, and spinal dysraphism." },
  { title: "Functional Neurosurgery and Neurocritical Care", text: "Movement disorders, epilepsy, pain, stereotactic and minimally invasive techniques, and intensive management of complex patients." },
];

const BENEFITS = [
  "Develop expertise in a neurosurgical subspecialty",
  "Strengthen clinical decision-making",
  "Understand advanced diagnostic approaches",
  "Improve knowledge of complex neurosurgical conditions",
  "Learn current treatment strategies",
  "Gain exposure to specialized case discussions",
  "Develop academic and research skills",
  "Expand your professional scope",
];

const PROGRAM_HIGHLIGHTS = [
  "Remote access to academic content",
  "Flexible learning schedules",
  "Recorded sessions where available",
  "Virtual case discussions",
  "Reduced relocation requirements",
  "Ability to continue professional responsibilities",
  "Structured, module-based curriculum",
  "Faculty-led case discussions",
];

const SKILLS = [
  "Neurological assessment",
  "Interpretation of neuroimaging",
  "Case evaluation",
  "Surgical planning principles",
  "Perioperative decision-making",
  "Patient risk assessment",
  "Complication recognition",
  "Postoperative management",
  "Multidisciplinary communication",
  "Evidence-based clinical decision-making",
  "Case presentation",
  "Academic and research skills",
];

const ELIGIBILITY = [
  "Doctors who have completed relevant postgraduate medical training",
  "Doctors pursuing advanced neurosurgical knowledge",
  "Doctors working in neurosurgical departments",
  "Doctors who want to develop a subspecialty interest",
  "Doctors involved in neurological or neurosurgical patient care",
  "Doctors looking for structured advanced learning alongside clinical practice",
];

const WHY_MEDFELLOW = [
  "Flexible online and hybrid learning options designed for working doctors",
  "Structured, specialty-focused curriculum modules",
  "Faculty-led academic guidance and case-based learning",
  "Clinical case discussions that support decision-making",
  "Transparent assessment and certification structure",
  "Continuous academic support throughout the program",
  "Recorded sessions for anytime learning where available",
  "Program formats built around real clinical and career relevance",
];

const CAREER_OPPORTUNITIES = [
  "Neurosurgical Hospitals",
  "Specialty Centers",
  "Academic Institutions",
  "Research Organizations",
  "Spine-Focused Practice",
  "Neuro-Oncology Teams",
  "Neurotrauma Services",
  "Cerebrovascular Services",
  "Pediatric Neurosurgical Services",
  "Teaching and Academic Roles",
];

const CASE_STUDIES = [
  {
    title: "Working Doctor Seeking Flexibility",
    text: "A practising doctor wanted to pursue advanced neurosurgical education without taking an extended break from professional responsibilities. Before enrolling, the doctor compared the curriculum, learning schedule, faculty access, assessment structure, and clinical requirements before selecting a flexible fellowship format. The structured program provided an opportunity to strengthen knowledge through organized modules, case-based learning, and academic discussions while maintaining professional responsibilities. Flexibility can be an important consideration for working doctors, but it should always be balanced against the level of clinical and practical training required.",
  },
  {
    title: "Doctor Building a Subspecialty Focus",
    text: "A doctor wanted to develop deeper knowledge in a specific area of neurosurgery rather than relying only on broad general training. The doctor evaluated fellowship programs based on specialty relevance, curriculum depth, faculty expertise, clinical exposure, and research opportunities. Focused fellowship education helped organize advanced learning around the doctor's intended area of professional development — a reminder that a fellowship is most valuable when its curriculum aligns closely with the doctor's intended clinical and academic direction.",
  },
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
  { feature: "Best For", medfellow: "Doctors seeking flexible advanced learning", others: "Doctors seeking institution-specific training" },
];

const TESTIMONIALS = [
  {
    name: "Neurosurgery Fellow",
    role: "MedFellow Academy Learner",
    text: "I joined mainly to strengthen my understanding of complex neurosurgical conditions and treatment approaches. The neuroanatomy, neurotrauma, and case-based discussions were particularly informative. It's a good way to build advanced knowledge, but it should not be considered equivalent to full-time neurosurgical residency or subspecialty training.",
  },
  {
    name: "Neurosurgery Fellow",
    role: "MedFellow Academy Learner",
    text: "I took this program mainly to improve my understanding of neurosurgical imaging and clinical decision-making. The sections on neurotrauma, spine conditions, and surgical planning were detailed and easy to follow. I feel more confident interpreting cases and discussing treatment options. However, hands-on surgical experience is something you need to evaluate separately.",
  },
  {
    name: "Neurosurgery Fellow",
    role: "MedFellow Academy Learner",
    text: "I joined the fellowship to develop a stronger foundation in specialized neurosurgery topics while continuing my professional responsibilities. The structured modules and case discussions helped me connect theoretical concepts with clinical situations. It was useful for expanding my knowledge, although the level of practical and procedural exposure is something I would recommend checking carefully before enrolling.",
  },
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
    q: "What clinical exposure should I look for in a neurosurgery fellowship?",
    a: "Look for exposure relevant to the fellowship's specialty, case discussions, imaging interpretation, perioperative management, supervised clinical learning, and clearly defined practical or procedural opportunities.",
  },
  {
    q: "What neurosurgery subspecialties can I pursue through fellowship training?",
    a: "Depending on available programs, areas can include spine surgery, cerebrovascular neurosurgery, skull base surgery, neuro-oncology, pediatric neurosurgery, functional neurosurgery, neurotrauma, and neurocritical care.",
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
            <span>Fellowship in Neurosurgery</span>
          </div>

          <span className="section-label">Advance Your Neurosurgery Skills</span>
          <h1 className="section-title mt-2 mb-4 !text-3xl md:!text-4xl">
            Best Fellowship Course in Neurosurgery
          </h1>

          <p className="text-[1rem] text-text-secondary leading-relaxed mb-4">
            A neurosurgery fellowship can help doctors build advanced knowledge in specialized areas of
            neurological and neurosurgical care. Depending on the fellowship, training may cover areas such
            as neurotrauma, spine surgery, cerebrovascular disorders, skull base surgery, neuro-oncology,
            pediatric neurosurgery, neurocritical care, and other subspecialty topics.
          </p>
          <p className="text-[1rem] text-text-secondary leading-relaxed mb-8">
            Choosing the best fellowship course in neurosurgery requires more than comparing course names
            and fees. Doctors should evaluate the curriculum, faculty expertise, clinical exposure, practical
            training, learning format, assessment, eligibility, certification, and career relevance.
          </p>

          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
            <Image
              src="/courses/neurosurgery.jpg"
              alt="Best Fellowship Course in Neurosurgery"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>

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
        </div>
      </section>

      <div className="container-custom max-w-6xl py-4">
      <div className="grid lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2">

        {/* What Is */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Understand Neurosurgery Fellowship Training</span>
          <SectionHeading icon={Sparkles}>What Is a Neurosurgery Fellowship?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            A neurosurgery fellowship is advanced postgraduate training designed to deepen knowledge and
            clinical understanding in a specific area of neurosurgery or neurological care. Depending on the
            program, fellows may study specialized topics such as neurotrauma, spine surgery, cerebrovascular
            neurosurgery, skull base surgery, neuro-oncology, pediatric neurosurgery, functional
            neurosurgery, neurocritical care, neuroendoscopy, stereotactic and minimally invasive techniques,
            and perioperative neurosurgical management.
          </p>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            For working doctors, flexibility is also an important consideration. An online or hybrid
            fellowship may provide structured academic learning while allowing doctors to continue their
            professional responsibilities, while an offline program may offer greater access to an
            institutional clinical environment.
          </p>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed">
            The exact scope depends on the institution and fellowship structure. Doctors should therefore
            review the actual curriculum instead of assuming that every neurosurgery fellowship provides the
            same clinical or procedural training. The right fellowship is ultimately the one that matches
            your existing qualification, professional goals, learning requirements, and desired area of
            specialization.
          </p>
        </section>

        {/* Why Pursue */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Build Specialized Neurosurgery Expertise</span>
          <SectionHeading icon={Sparkles}>Why Pursue a Fellowship in Neurosurgery?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-6">
            Neurosurgery is a complex and rapidly developing specialty. Advanced fellowship training can help
            doctors develop deeper knowledge in selected areas and understand contemporary approaches to
            diagnosis, treatment planning, perioperative care, and patient management. The value of a
            fellowship depends heavily on the quality and relevance of its training.
          </p>
          <p className="text-[0.875rem] font-semibold text-[#111827] mb-3">A fellowship may be valuable if you want to:</p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {BENEFITS.map((b) => (
              <div key={b} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{b}</span>
              </div>
            ))}
          </div>
        </section>

        {/* What You Will Learn */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Explore Advanced Neurosurgery Topics</span>
          <SectionHeading icon={GraduationCap}>Explore the Neurosurgery Fellowship Curriculum</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-6">
            A strong neurosurgery fellowship curriculum should be aligned with the program&apos;s intended
            learning outcomes and specialty focus. Depending on the fellowship, curriculum areas may include:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {CURRICULUM_GROUPS.map((g) => (
              <div key={g.title} className="card p-4">
                <p className="text-[0.9375rem] font-semibold text-[#111827] mb-2">{g.title}</p>
                <p className="text-[0.8125rem] text-[#374151] leading-relaxed">{g.text}</p>
              </div>
            ))}
          </div>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mt-5">
            The exact subspecialty coverage varies between fellowship programs. Faculty-led case discussions
            encourage participants to analyse investigations, consider differential diagnoses, and make
            evidence-based decisions.
          </p>
          <Link href="/courses/fellowship-in-neurosurgery" className="inline-block mt-5 text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            View the full curriculum, fees, and duration →
          </Link>
        </section>

        {/* Flexible Learning */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Choose Your Learning Format</span>
          <SectionHeading icon={Clock}>Compare Online, Offline and Hybrid Training</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            The format of a neurosurgery fellowship can significantly affect the learning experience. Online
            training can be useful for doctors who need flexibility, while offline programs may provide
            greater access to hospitals, neurosurgical departments, and clinical teams. A hybrid model can
            combine online academic learning with offline clinical or practical components, provided the
            clinical component is clearly defined.
          </p>
          <p className="text-[0.875rem] font-semibold text-[#111827] mb-3">Potential benefits of flexible learning formats</p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-5">
            {PROGRAM_HIGHLIGHTS.map((h) => (
              <div key={h} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{h}</span>
              </div>
            ))}
          </div>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed">
            However, online academic education should not automatically be considered equivalent to
            hands-on clinical training. This learner-friendly format enables doctors to develop advanced
            knowledge without necessarily stepping away from their existing practice.
          </p>
        </section>

        {/* Skills */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Develop Advanced Clinical Skills</span>
          <SectionHeading icon={ShieldCheck}>Skills You Learn During a Neurosurgery Fellowship</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            A well-structured fellowship should help doctors develop knowledge and decision-making skills
            relevant to their area of training. Depending on the program and level of clinical exposure,
            these may include:
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {SKILLS.map((s) => (
              <div key={s} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{s}</span>
              </div>
            ))}
          </div>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mt-5">
            The level of independent procedural responsibility should always be verified with the
            institution. A fellowship certificate does not automatically mean that a doctor is independently
            trained or authorized to perform every procedure covered academically.
          </p>
        </section>

        {/* Eligibility */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Is Neurosurgery Training Right for You?</span>
          <SectionHeading icon={Users}>Who Should Consider This Fellowship Course?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            A neurosurgery fellowship is generally intended for appropriately qualified medical professionals
            who want advanced training in neurosurgical or closely related areas. Depending on the program,
            eligibility may require specific postgraduate qualifications, registration, clinical experience,
            or prior neurosurgical training. Potential candidates may include:
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-5">
            {ELIGIBILITY.map((e) => (
              <div key={e} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{e}</span>
              </div>
            ))}
          </div>
          <p className="text-[0.875rem] text-text-secondary leading-relaxed mb-5">
            Always verify the specific eligibility requirements of the fellowship before applying.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#15401E] text-white rounded-md font-semibold text-[0.9375rem] hover:bg-[#0f2e15] transition-colors"
          >
            Check Your Eligibility
          </Link>
        </section>

        {/* Why Choose MedFellow */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Choose the Right Academy</span>
          <SectionHeading icon={Award}>Why Choose MedFellow Academy for Your Neurosurgery Fellowship?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            Selecting the right fellowship is just as important as choosing the specialty itself. At
            MedFellow Academy, every fellowship is developed with the needs of busy healthcare professionals
            in mind.
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {WHY_MEDFELLOW.map((w) => (
              <div key={w} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{w}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Build Your Future in Neurosurgery</span>
          <SectionHeading icon={Briefcase}>Career Opportunities After a Neurosurgery Fellowship</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            Advanced training can support different professional pathways depending on your underlying
            qualification, clinical experience, fellowship focus, and local professional regulations.
            Potential areas may include:
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {CAREER_OPPORTUNITIES.map((c) => (
              <div key={c} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{c}</span>
              </div>
            ))}
          </div>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mt-5">
            Career outcomes should not be guaranteed by a fellowship provider. Your eligibility for a
            particular position will depend on the requirements of the employer and applicable medical
            regulations.
          </p>
        </section>

        {/* Success Stories */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Learning That Supports Careers</span>
          <SectionHeading icon={BookOpen}>Client Case Studies</SectionHeading>
          <div className="grid sm:grid-cols-2 gap-4">
            {CASE_STUDIES.map((c) => (
              <div key={c.title} className="card p-5">
                <p className="text-[0.9375rem] font-semibold text-[#111827] mb-2">{c.title}</p>
                <p className="text-[0.875rem] text-[#374151] leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Compare Before You Decide</span>
          <SectionHeading icon={BarChart3}>MedFellow Academy vs Other Neurosurgery Fellowships</SectionHeading>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E5E7EB]">
                  <th className="py-3 pr-4 text-[0.8125rem] font-semibold text-[#111827]">Feature</th>
                  <th className="py-3 pr-4 text-[0.8125rem] font-semibold text-[#15401E]">MedFellow Academy</th>
                  <th className="py-3 text-[0.8125rem] font-semibold text-[#111827]">Other Providers</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.feature} className="border-b border-[#F3F4F6]">
                    <td className="py-3 pr-4 text-[0.875rem] font-medium text-[#111827] align-top">{row.feature}</td>
                    <td className="py-3 pr-4 text-[0.875rem] text-[#374151] align-top">{row.medfellow}</td>
                    <td className="py-3 text-[0.875rem] text-text-secondary align-top">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-8">
          <span className="section-label">Hear From Fellow Learners</span>
          <SectionHeading icon={Quote}>Reviews From Neurosurgery Learners</SectionHeading>
          <div className="grid sm:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="card p-5">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-[0.875rem] text-[#374151] leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <p className="text-[0.875rem] font-semibold text-[#111827]">{t.name}</p>
                <p className="text-[0.8125rem] text-text-secondary">{t.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-8">
          <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">
              Choose Your Next Step Wisely in Neurosurgery
            </h2>
            <p className="text-text-secondary mb-6">
              Choosing the best fellowship course in neurosurgery requires careful evaluation — look beyond
              the course title and compare the curriculum, faculty, clinical exposure, practical training,
              learning format, assessments, certification, fees, and career relevance. Whatever format you
              choose, verify exactly what the fellowship provides.
            </p>
            <Link href="/apply" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-center">
              Schedule a Free Consultation
            </Link>
          </div>
        </section>
      </div>

      <div className="lg:col-span-1">
        <TopicClusterLinks title="Neurosurgery Fellowship Resources" links={CLUSTER_LINKS} />
      </div>
      </div>
      </div>

      <FAQ faqs={FAQS} />

      <Footer />
    </div>
  );
}

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
  { label: "Best Fellowship Course in Reproductive Medicine (Guide)", href: "/courses/best-fellowship-course-in-reproductive-medicine", type: "guide" as const },
  { label: "How to Choose a Reproductive Medicine Fellowship", href: "/blog/how-to-choose-reproductive-medicine-fellowship", type: "blog" as const },
  { label: "Questions to Ask Before Joining a Reproductive Medicine Fellowship", href: "/blog/questions-to-ask-before-joining-reproductive-medicine-fellowship", type: "blog" as const },
  { label: "Online vs Offline Reproductive Medicine Fellowship", href: "/blog/online-vs-offline-reproductive-medicine-fellowship", type: "blog" as const },
  { label: "Career Opportunities After a Reproductive Medicine Fellowship", href: "/blog/career-opportunities-after-reproductive-medicine-fellowship", type: "blog" as const },
  { label: "Reproductive Medicine Fellowship Curriculum: What Will You Learn?", href: "/blog/reproductive-medicine-fellowship-curriculum", type: "blog" as const },
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
  title: "Best Fellowship Course in Reproductive Medicine | MedFellow Academy",
  description:
    "Explore the Best Fellowship Course in Reproductive Medicine, including curriculum, eligibility, skills, learning options, career pathways, costs, and FAQs.",
  keywords:
    "best fellowship course in reproductive medicine, fellowship in reproductive medicine, reproductive medicine fellowship, fellowship course in reproductive medicine, reproductive medicine fellowship course",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/courses/best-fellowship-course-in-reproductive-medicine/" },
  openGraph: {
    title: "Best Fellowship Course in Reproductive Medicine",
    description:
      "Explore the Best Fellowship Course in Reproductive Medicine, including curriculum, eligibility, skills, learning options, career pathways, and FAQs.",
    type: "article",
    url: "https://www.medfellowacademy.com/courses/best-fellowship-course-in-reproductive-medicine/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Fellowship in Reproductive Medicine" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Fellowship Course in Reproductive Medicine",
    description: "A complete guide for doctors seeking structured advanced training in infertility and fertility care.",
  },
};

const STATS = [
  { icon: "🎓", value: "46+", label: "Medical Fellowship Programs" },
  { icon: "👨‍⚕️", value: "3,500+", label: "Doctors Trained" },
  { icon: "🧬", value: "Advanced", label: "Fertility Education" },
  { icon: "⭐", value: "4.8/5", label: "Doctor Satisfaction Rating" },
];

const WHY_PURSUE = [
  "Strengthen infertility assessment skills",
  "Understand reproductive endocrinology",
  "Improve fertility-related patient counselling",
  "Learn principles of assisted reproductive technology",
  "Understand IVF and ICSI concepts",
  "Develop knowledge of male and female infertility",
  "Understand fertility preservation",
  "Explore reproductive genetics",
  "Improve treatment planning",
  "Discuss complex fertility cases",
  "Stay updated with evolving reproductive medicine practices",
];

const CORE_SCIENCES = [
  "Male and female reproductive anatomy",
  "Reproductive physiology",
  "Menstrual cycle",
  "Ovulation",
  "Oogenesis and spermatogenesis",
  "Reproductive endocrinology",
  "Fertilization",
  "Implantation",
  "Ovarian reserve",
  "Reproductive genetics",
];

const INFERTILITY_EVAL = [
  "Infertility history taking",
  "Clinical assessment",
  "Female infertility evaluation",
  "Male infertility evaluation",
  "Hormonal investigations",
  "Semen analysis",
  "Ovarian reserve testing",
  "Pelvic ultrasound",
  "Tubal assessment",
  "Genetic evaluation",
];

const ENDOCRINOLOGY = [
  "PCOS",
  "Ovulation disorders",
  "Thyroid disorders",
  "Hyperprolactinemia",
  "Premature ovarian insufficiency",
  "Diminished ovarian reserve",
  "Menstrual disorders",
  "Hormonal management",
];

const ART_TOPICS = [
  "IUI", "IVF", "ICSI", "Controlled ovarian stimulation", "Follicular monitoring",
  "Oocyte retrieval concepts", "Embryo culture", "Embryo transfer", "Cryopreservation",
  "Frozen embryo transfer", "Embryo selection", "ART-related complications",
];

const SKILLS_ASSESSMENT = [
  "Infertility history", "Reproductive history", "Clinical examination", "Risk assessment",
  "Previous fertility treatment", "Treatment history",
];

const SKILLS_INVESTIGATION = [
  "Hormonal investigations", "Semen analysis", "Ovarian reserve markers",
  "Ultrasound findings", "Tubal evaluation", "Genetic investigations",
];

const SKILLS_PLANNING = [
  "Expectant management", "Ovulation induction", "IUI", "IVF", "ICSI",
  "Fertility preservation", "Referral to specialist services",
];

const CLINICAL_EXPOSURE = [
  "Fertility clinic consultations", "Infertility workups", "Ultrasound and follicular monitoring",
  "IUI procedures", "Oocyte retrieval observation or training", "Embryo transfer", "Hysteroscopy",
  "Laparoscopy", "Andrology", "Embryology", "ART laboratory workflow",
];

const SUPERVISION_QUESTIONS = [
  "Is the exposure observational or hands-on?",
  "Who supervises clinical activities?",
  "How many cases are available?",
  "Is there a hospital attachment?",
  "Is a logbook maintained?",
  "How is competency assessed?",
];

const HOW_TO_CHOOSE = [
  { title: "Review the Curriculum", text: "Look for comprehensive coverage of infertility, reproductive endocrinology, ART, IVF, ICSI, fertility preservation, male infertility, genetics, ultrasound, embryology, and ethics." },
  { title: "Check Faculty Expertise", text: "Review the qualifications and experience of the faculty and how much access fellows receive to them." },
  { title: "Understand Clinical Exposure", text: "Do not assume a “clinical fellowship” automatically means extensive hands-on procedural training — ask for specific details." },
  { title: "Check Assessment Methods", text: "A structured fellowship should explain how your learning will be evaluated." },
  { title: "Verify Certification", text: "Understand who awards the certificate, whether it is a fellowship certificate or academic qualification, and what it represents." },
  { title: "Compare Total Costs", text: "Consider tuition alongside travel, accommodation, clinical attachment costs, study materials, examination fees, and administrative charges." },
];

const COMPARISON_ROWS = [
  { feature: "Flexible Learning", medfellow: "Yes", others: "Varies" },
  { feature: "Structured Curriculum", medfellow: "Yes", others: "Varies" },
  { feature: "Case-Based Learning", medfellow: "Yes", others: "Varies" },
  { feature: "Faculty Support", medfellow: "Yes", others: "Varies" },
  { feature: "Working Doctor Friendly", medfellow: "Yes", others: "Depends on program" },
  { feature: "Digital Resources", medfellow: "Yes", others: "Varies" },
  { feature: "Career Guidance", medfellow: "Yes", others: "Varies" },
  { feature: "Clinical Component", medfellow: "Based on selected program", others: "Varies" },
];

const ELIGIBLE_DOCTORS = [
  "MBBS doctors",
  "MS Obstetrics & Gynecology",
  "MD Obstetrics & Gynecology",
  "DNB Obstetrics & Gynecology",
  "DGO-qualified doctors",
  "Practising gynecologists",
  "Doctors with an interest in fertility medicine",
];

const CAREER_PATHWAYS = [
  { title: "Fertility and IVF Centres", text: "Opportunities in fertility clinics and reproductive medicine centres for appropriately qualified doctors." },
  { title: "Infertility Practice", text: "Strengthen infertility evaluation, counselling, investigations, and treatment planning." },
  { title: "Women's Healthcare", text: "Reproductive medicine knowledge can complement broader women's health services." },
  { title: "Academic Medicine", text: "Teaching, case presentations, research, conferences, and continuing medical education." },
  { title: "Fertility Research", text: "ART outcomes, reproductive genetics, embryology, fertility preservation, ovarian reserve, and infertility treatment." },
];

const FEE_INCLUDES = [
  "Classes", "Learning materials", "Assessments", "Certification", "Clinical attachment",
  "Hospital training", "Simulation", "Laboratory exposure", "Examination", "Faculty support",
];

const ONLINE_OFFLINE_ROWS = [
  { factor: "Flexibility", online: "High", offline: "Lower" },
  { factor: "Working Doctors", online: "Highly suitable", offline: "More difficult" },
  { factor: "Travel", online: "Minimal", offline: "Required" },
  { factor: "Academic Learning", online: "Online", offline: "Classroom" },
  { factor: "Case Discussions", online: "Online", offline: "In-person" },
  { factor: "Clinical Exposure", online: "Depends on program", offline: "Potentially greater" },
  { factor: "Laboratory Exposure", online: "Limited unless separately arranged", offline: "Potentially available" },
  { factor: "Cost", online: "Often lower", offline: "Often higher" },
  { factor: "Work-Life Balance", online: "Better", offline: "More demanding" },
];

const CASE_STUDIES = [
  {
    title: "Case Study 1: Building a Structured Infertility Assessment",
    text: "A patient presents with difficulty conceiving and a history suggesting possible ovulatory dysfunction. A reproductive medicine curriculum guides doctors through a detailed reproductive history, ovulation assessment, hormonal evaluation, ultrasound, ovarian reserve considerations, relevant partner evaluation, and treatment planning — with the focus on developing a structured approach rather than immediately selecting a treatment.",
  },
  {
    title: "Case Study 2: Choosing an Appropriate ART Pathway",
    text: "A couple has completed an initial infertility evaluation and needs a discussion of assisted reproductive options. Doctors analyse female age, ovarian reserve, male factor, previous treatment, tubal factors, duration of infertility, patient preferences, and expected outcomes — demonstrating how clinical information, patient goals, and available options are considered together when developing a fertility care plan.",
  },
];

const RELATED_LINKS = [
  { name: "Fellowship Course in Reproductive Medicine", desc: "Explore the fellowship curriculum, eligibility, duration, and learning format.", href: "/courses/fellowship-in-reproductive-medicine" },
  { name: "How to Choose a Reproductive Medicine Fellowship", desc: "Compare curriculum, faculty, clinical exposure, flexibility, and fees.", href: "/blog/how-to-choose-reproductive-medicine-fellowship" },
  { name: "Questions to Ask Before Joining a Reproductive Medicine Fellowship", desc: "The key questions to ask about curriculum, clinical exposure, fees, faculty, and certification.", href: "/blog/questions-to-ask-before-joining-reproductive-medicine-fellowship" },
  { name: "Online vs Offline Reproductive Medicine Fellowship", desc: "Compare flexibility, clinical exposure, practical training, and overall learning experience.", href: "/blog/online-vs-offline-reproductive-medicine-fellowship" },
  { name: "Career Opportunities After a Reproductive Medicine Fellowship", desc: "Potential career pathways after advanced reproductive medicine training.", href: "/blog/career-opportunities-after-reproductive-medicine-fellowship" },
  { name: "Reproductive Medicine Fellowship Curriculum", desc: "Understand the curriculum, eligibility, and what to check before applying.", href: "/blog/reproductive-medicine-fellowship-curriculum" },
];

const FAQS = [
  {
    q: "What is the best Fellowship Course in Reproductive Medicine?",
    a: "The best program depends on your qualifications and career objectives. Look for a fellowship with a structured curriculum, experienced faculty, relevant clinical exposure, transparent certification, appropriate assessment, and learning support.",
  },
  {
    q: "What does a Reproductive Medicine Fellowship teach?",
    a: "A comprehensive program may cover infertility evaluation, reproductive endocrinology, male and female infertility, ART, IVF, ICSI, fertility preservation, reproductive genetics, ultrasound, embryology, counselling, ethics, and case-based clinical decision making.",
  },
  {
    q: "Is a Reproductive Medicine Fellowship suitable for practicing gynecologists?",
    a: "Yes, depending on the program's eligibility criteria and learning format. Flexible or hybrid programs may be particularly useful for doctors who want to continue clinical practice while studying.",
  },
  {
    q: "Does a Reproductive Medicine Fellowship include IVF training?",
    a: "Many reproductive medicine programs cover IVF principles, but the extent of practical training varies. Some programs provide clinical or laboratory exposure, while others focus primarily on academic learning.",
  },
  {
    q: "Does an online fellowship provide hands-on IVF training?",
    a: "Not necessarily. Online learning can provide strong theoretical and case-based education, but hands-on IVF, embryology, oocyte retrieval, embryo transfer, or other procedures require appropriate supervised clinical or laboratory training.",
  },
  {
    q: "Can MBBS doctors apply for a Reproductive Medicine Fellowship?",
    a: "Eligibility varies by provider. Some programs accept MBBS or equivalent qualifications, while advanced university or national fellowship pathways may require postgraduate Obstetrics and Gynecology qualifications.",
  },
  {
    q: "Is a Reproductive Medicine Fellowship the same as an FNB in Reproductive Medicine?",
    a: "No. They should not be treated as interchangeable qualifications. The FNB Reproductive Medicine pathway is a specific National Board training program with its own eligibility, entrance, duration, and institutional requirements.",
  },
  {
    q: "How long does a Reproductive Medicine Fellowship take?",
    a: "Duration varies significantly. Current programs range from shorter fellowships to one-year and longer structured programs.",
  },
  {
    q: "Can a fellowship guarantee a career in IVF?",
    a: "No. A fellowship can support professional development, but employment and independent clinical practice depend on your qualifications, experience, licensing, credentialing, and employer requirements.",
  },
];

export default function ReproductiveMedicineGuidePage() {
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
            <span>Best Fellowship Course in Reproductive Medicine</span>
          </div>

          <span className="section-label">Advanced Training in Fertility, Infertility and Reproductive Healthcare</span>
          <h1 className="section-title mt-2 mb-4 !text-3xl md:!text-4xl">
            Best Fellowship Course in Reproductive Medicine
          </h1>

          <p className="text-[1rem] text-text-secondary leading-relaxed mb-4">
            Reproductive medicine is an evolving field that brings together infertility management, reproductive
            endocrinology, assisted reproductive technology, fertility preservation, reproductive genetics, and
            patient-centred fertility care.
          </p>
          <p className="text-[1rem] text-text-secondary leading-relaxed mb-4">
            For doctors looking to build expertise in this area, choosing the right Fellowship Course in
            Reproductive Medicine requires more than comparing course fees or duration. The quality of the
            curriculum, faculty expertise, clinical exposure, case discussions, learning format, assessment
            methods, and certification all matter.
          </p>
          <p className="text-[1rem] text-text-secondary leading-relaxed mb-8">
            This guide explains what to look for in a Fellowship in Reproductive Medicine, what you can learn,
            who should consider the program, and how to compare different training options.
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

        {/* Why Training Matters */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Growing Fertility Care Needs</span>
          <SectionHeading icon={Award}>Why Reproductive Medicine Training Matters</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Infertility care has become increasingly specialized, requiring doctors to understand both the
            underlying causes of infertility and the expanding range of treatment options. Modern reproductive
            medicine education can cover female and male infertility evaluation, reproductive endocrinology,
            ovarian reserve assessment, ovulation disorders, assisted reproductive technologies, fertility
            preservation, reproductive genetics, and fertility counselling.
          </p>
          <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-3">Why Doctors Pursue Reproductive Medicine Training</h3>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {WHY_PURSUE.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Curriculum */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Comprehensive Fertility Curriculum</span>
          <SectionHeading icon={ListChecks}>What Should You Learn in a Reproductive Medicine Fellowship?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-6">
            A strong curriculum should progress from reproductive biology and infertility evaluation to
            treatment planning and advanced reproductive technologies.
          </p>

          <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-3">Core Reproductive Sciences</h3>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
            {CORE_SCIENCES.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-3">Infertility Evaluation</h3>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
            {INFERTILITY_EVAL.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-3">Reproductive Endocrinology</h3>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
            {ENDOCRINOLOGY.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-3">Assisted Reproductive Technology</h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {ART_TOPICS.map((item) => (
              <span key={item} className="px-3 py-1 bg-[#e8f2ea] text-[#15401E] rounded-full text-[0.8125rem] font-medium">{item}</span>
            ))}
          </div>
          <p className="text-[0.8125rem] text-text-secondary leading-relaxed italic">
            The precise level of practical exposure varies substantially between fellowship providers, so
            doctors should verify what is actually included rather than assuming that every program offers
            hands-on training.
          </p>
        </section>

        {/* Skills */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Build Practical Clinical Understanding</span>
          <SectionHeading icon={Target}>What Skills Can You Develop?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            A good Fellowship Course in Reproductive Medicine should move beyond lectures and help doctors
            develop practical clinical reasoning.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-4">
            <div className="card p-4">
              <h3 className="text-[0.875rem] font-bold text-[#15401E] mb-2.5">Patient Assessment</h3>
              <div className="space-y-1.5">
                {SKILLS_ASSESSMENT.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-[0.8125rem] text-[#374151]">
                    <span className="text-[#15401E] mt-0.5">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card p-4">
              <h3 className="text-[0.875rem] font-bold text-[#15401E] mb-2.5">Fertility Investigation</h3>
              <div className="space-y-1.5">
                {SKILLS_INVESTIGATION.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-[0.8125rem] text-[#374151]">
                    <span className="text-[#15401E] mt-0.5">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card p-4">
              <h3 className="text-[0.875rem] font-bold text-[#15401E] mb-2.5">Treatment Planning</h3>
              <div className="space-y-1.5">
                {SKILLS_PLANNING.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-[0.8125rem] text-[#374151]">
                    <span className="text-[#15401E] mt-0.5">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-[0.875rem] text-text-secondary leading-relaxed">
            Fertility treatment can involve emotional, financial, ethical, and medical considerations, so
            doctors should also develop communication skills that help patients understand diagnosis,
            treatment choices, expected outcomes, risks, alternatives, timelines, and follow-up requirements.
          </p>
        </section>

        {/* Case-Based Learning */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Learn From Real Fertility Cases</span>
          <SectionHeading icon={BookOpen}>Why Case-Based Learning Matters</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Reproductive medicine involves individualised treatment decisions. Two patients with infertility
            may have completely different clinical histories, investigations, reproductive goals, and treatment
            options. Case-based learning helps doctors connect theoretical knowledge with clinical reasoning.
          </p>
          <p className="text-[0.875rem] text-text-secondary leading-relaxed">
            Cases may include PCOS-related infertility, diminished ovarian reserve, male factor infertility,
            endometriosis, tubal factor infertility, recurrent pregnancy loss, recurrent implantation failure,
            unexplained infertility, advanced maternal age, fertility preservation, and ART-related
            complications — encouraging doctors to consider the likely cause, appropriate investigations,
            available treatment options, patient priorities, expected benefits and risks, and when referral or
            advanced treatment should be considered.
          </p>
        </section>

        {/* Flexible Learning */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Flexible Learning for Doctors</span>
          <SectionHeading icon={Clock}>Can You Study Reproductive Medicine While Practising?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Many doctors cannot step away from their clinical practice for an extended period. A flexible
            fellowship model can make advanced education more manageable through online academic sessions,
            recorded learning resources, structured modules, case-based discussions, faculty guidance, digital
            learning resources, flexible study schedules, and continuous academic support.
          </p>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed">
            However, doctors should distinguish between online academic learning and supervised clinical
            training. Some established reproductive medicine programs use hybrid formats combining online theory
            with simulation or hands-on components, while other programs are primarily clinical and
            hospital-based.
          </p>
        </section>

        {/* Clinical Exposure */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Clinical Exposure Makes a Difference</span>
          <SectionHeading icon={ClipboardList}>What Clinical Exposure Should You Look For?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            If clinical training is an important objective, ask exactly what the fellowship provides. Potential
            areas of exposure include:
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-5">
            {CLINICAL_EXPOSURE.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-3">Ask About Supervision</h3>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {SUPERVISION_QUESTIONS.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Compare Before You Enrol</span>
          <SectionHeading icon={GraduationCap}>How to Choose the Best Reproductive Medicine Fellowship</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            There is no single fellowship that is best for every doctor. The right program depends on your
            qualifications, career objectives, preferred learning format, and desired level of clinical
            exposure.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {HOW_TO_CHOOSE.map((item) => (
              <div key={item.title} className="card p-4">
                <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-1.5">{item.title}</h3>
                <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <Link href="/blog/how-to-choose-reproductive-medicine-fellowship" className="inline-block mt-5 text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            Read the full guide: How to Choose a Reproductive Medicine Fellowship →
          </Link>
        </section>

        {/* Comparison */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">MedFellow vs Other Options</span>
          <SectionHeading icon={ShieldCheck}>MedFellow Academy vs Other Fellowship Options</SectionHeading>
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
            The comparison should ultimately be based on curriculum, faculty, clinical exposure, learning
            format, certification, assessment, and career relevance, rather than marketing claims alone.
          </p>
        </section>

        {/* Eligibility */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Who Should Apply?</span>
          <SectionHeading icon={Users}>Who Can Apply for a Reproductive Medicine Fellowship?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Eligibility varies considerably between programs. Some advanced or university-linked reproductive
            medicine fellowships specifically require postgraduate qualifications in Obstetrics and Gynecology.
            For example, the National Board&apos;s FNB Reproductive Medicine pathway requires DNB/MS in
            Obstetrics and Gynecology and involves a structured two-year training program. Other private or
            online fellowship providers may have broader eligibility criteria.
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-4">
            {ELIGIBLE_DOCTORS.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-[0.8125rem] text-text-secondary leading-relaxed italic">
            Always check the specific eligibility requirements of the fellowship you are considering.
          </p>
        </section>

        {/* Career */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Growing Fertility Career Options</span>
          <SectionHeading icon={Briefcase}>Career Opportunities After a Reproductive Medicine Fellowship</SectionHeading>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {CAREER_PATHWAYS.map((c) => (
              <div key={c.title} className="card p-4">
                <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-1.5">{c.title}</h3>
                <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg">
            <p className="text-[0.875rem] text-[#374151] leading-relaxed">
              A fellowship does not by itself guarantee employment, specialist registration, or independent
              procedural privileges. Career outcomes depend on the doctor&apos;s existing qualifications,
              experience, licensing, credentialing, and employer requirements.
            </p>
          </div>
        </section>

        {/* Cost */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Understand the Investment</span>
          <SectionHeading icon={ClipboardCheck}>How Much Does a Reproductive Medicine Fellowship Cost?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Fees vary widely depending on institution, duration, clinical exposure, faculty, learning format,
            hospital attachment, certification, laboratory training, and location. Comparing price alone can be
            misleading. Ask whether the fee covers:
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {FEE_INCLUDES.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Online vs Offline */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Choose Your Learning Format</span>
          <SectionHeading icon={Link2}>Online vs Offline Reproductive Medicine Fellowship</SectionHeading>
          <div className="overflow-x-auto rounded-lg border border-[#E5E7EB] mb-4">
            <table className="w-full text-[0.875rem] text-left">
              <thead className="bg-[#15401E] text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Factor</th>
                  <th className="px-4 py-3 font-semibold">Online Fellowship</th>
                  <th className="px-4 py-3 font-semibold">Offline Fellowship</th>
                </tr>
              </thead>
              <tbody>
                {ONLINE_OFFLINE_ROWS.map((r, i) => (
                  <tr key={r.factor} className={i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"}>
                    <td className="px-4 py-3 font-medium text-[#111827] border-t border-[#F3F4F6]">{r.factor}</td>
                    <td className="px-4 py-3 text-[#374151] border-t border-[#F3F4F6]">{r.online}</td>
                    <td className="px-4 py-3 text-[#374151] border-t border-[#F3F4F6]">{r.offline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[0.875rem] text-text-secondary leading-relaxed">
            A hybrid Reproductive Medicine Fellowship can potentially combine flexible academic education with
            selected clinical or practical components. The right choice depends on whether your priority is
            academic knowledge, clinical exposure, procedural training, or a combination of these.
          </p>
        </section>

        {/* Case Studies */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Case-Based Learning in Practice</span>
          <SectionHeading icon={Quote}>Case Studies</SectionHeading>
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
          <span className="section-label">Build Your Fertility Medicine Expertise</span>
          <SectionHeading icon={Award}>Choose the Fellowship That Fits Your Goals</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            Choosing the Best Fellowship Course in Reproductive Medicine is ultimately about finding the right
            match between your qualifications, career goals, learning preferences, and desired level of clinical
            exposure. A strong program should give you more than a certificate — it should provide
            structured knowledge, relevant case discussions, faculty guidance, and a clear understanding of
            modern reproductive medicine.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#15401E] text-white rounded-md font-semibold text-[0.9375rem] hover:bg-[#0f2e15] transition-colors"
            >
              Apply Now
            </Link>
            <Link
              href="/courses/fellowship-in-reproductive-medicine"
              className="inline-flex items-center justify-center px-6 py-3 bg-white border border-[#D1D5DB] text-[#15401E] rounded-md font-semibold text-[0.9375rem] hover:border-[#15401E] transition-colors"
            >
              Explore the Fellowship Course
            </Link>
          </div>
        </section>

        {/* Related */}
        <section className="py-8">
          <span className="section-label">Continue Your Medical Education</span>
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
        <TopicClusterLinks title="Reproductive Medicine Resources" links={CLUSTER_LINKS} />
      </div>
      </div>
      </div>

      <FAQ faqs={FAQS} />

      <Footer />
    </div>
  );
}

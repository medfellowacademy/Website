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
  { label: "Best Fellowship Course in Reproductive Medicine (Guide)", href: "/best-fellowship-course-in-reproductive-medicine", type: "guide" as const },
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
    "Compare the Best Fellowship Course in Reproductive Medicine. Explore curriculum, eligibility, clinical exposure, career opportunities, and flexible learning formats.",
  keywords: "best fellowship course in reproductive medicine, fellowship in reproductive medicine, reproductive medicine fellowship, fellowship course in reproductive medicine, reproductive medicine fellowship course",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/best-fellowship-course-in-reproductive-medicine/" },
  openGraph: {
    title: "Best Fellowship Course in Reproductive Medicine",
    description:
      "Compare the Best Fellowship Course in Reproductive Medicine. Explore curriculum, eligibility, clinical exposure, career opportunities, and flexible learning formats.",
    type: "article",
    url: "https://www.medfellowacademy.com/best-fellowship-course-in-reproductive-medicine/",
    images: [{ url: "https://www.medfellowacademy.com/courses/reproductive-medicine.jpg", width: 1200, height: 630, alt: "MedFellow Fellowship in Reproductive Medicine" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Fellowship Course in Reproductive Medicine",
    description: "Compare the Best Fellowship Course in Reproductive Medicine for doctors.",
  },
};

const CURRICULUM_GROUPS = [
  { title: "Core Reproductive Sciences", text: "Male and female reproductive anatomy, reproductive physiology, the menstrual cycle, ovulation, oogenesis and spermatogenesis, fertilization, implantation, and ovarian reserve." },
  { title: "Infertility Evaluation", text: "Infertility history taking, clinical assessment, female and male infertility evaluation, hormonal investigations, semen analysis, ovarian reserve testing, and tubal assessment." },
  { title: "Reproductive Endocrinology", text: "PCOS, ovulation disorders, thyroid disorders, hyperprolactinemia, premature ovarian insufficiency, diminished ovarian reserve, and hormonal management." },
  { title: "Assisted Reproductive Technology", text: "IUI, IVF, ICSI, controlled ovarian stimulation, follicular monitoring, oocyte retrieval concepts, embryo culture and transfer, and cryopreservation." },
  { title: "Fertility Preservation", text: "Oocyte, sperm, and embryo cryopreservation concepts, and the clinical indications for fertility preservation before medical treatment." },
  { title: "Reproductive Genetics", text: "Genetic causes of infertility, recurrent pregnancy loss, genetic counselling principles, and preimplantation genetic testing concepts." },
  { title: "Reproductive Ultrasound & Embryology", text: "Follicular monitoring, ovarian assessment, endometrial evaluation, and the clinical relevance of embryology and IVF laboratory workflow." },
  { title: "Case-Based Clinical Decision Making", text: "Faculty-led discussions on real fertility scenarios that connect diagnosis, investigation, and treatment planning." },
];

const BENEFITS = [
  "Strengthen infertility assessment skills",
  "Understand reproductive endocrinology",
  "Improve fertility-related patient counselling",
  "Learn principles of assisted reproductive technology",
  "Understand IVF and ICSI concepts",
  "Develop knowledge of male and female infertility",
  "Understand fertility preservation",
  "Explore reproductive genetics",
];

const PROGRAM_HIGHLIGHTS = [
  "Online academic sessions",
  "Recorded learning resources",
  "Structured modules",
  "Case-based discussions",
  "Faculty guidance",
  "Digital learning resources",
  "Flexible study schedules",
  "Continuous academic support",
];

const SKILLS = [
  "Structured infertility history taking",
  "Reproductive history assessment",
  "Clinical examination skills",
  "Fertility investigation interpretation",
  "Hormonal and ovarian reserve assessment",
  "Ultrasound and tubal evaluation interpretation",
  "Evidence-based treatment planning",
  "ART pathway decision making",
  "Fertility preservation counselling",
  "Patient counselling on diagnosis and options",
  "Clinical documentation",
  "Multidisciplinary collaboration",
];

const ELIGIBILITY = [
  "MBBS doctors",
  "MS Obstetrics & Gynecology graduates",
  "MD Obstetrics & Gynecology graduates",
  "DNB Obstetrics & Gynecology graduates",
  "DGO-qualified doctors",
  "Practising gynecologists with an interest in fertility medicine",
];

const WHY_MEDFELLOW = [
  "Flexible online learning designed for working doctors",
  "Structured curriculum covering core and advanced reproductive medicine topics",
  "Faculty guidance from experienced educators",
  "Case-based discussions that strengthen clinical decision making",
  "Evidence-based academic content",
  "Continuous academic support",
  "Digital learning resources for anytime access",
  "Recorded sessions for anytime learning",
  "Professional-friendly scheduling",
  "Career-focused fellowship education",
];

const CAREER_OPPORTUNITIES = [
  "Fertility & IVF Clinic Roles",
  "Reproductive Medicine Centres",
  "Hospital Fertility Departments",
  "Women's Healthcare Practice",
  "Academic Medicine & Teaching",
  "Fertility Research",
  "Private Fertility-Focused Practice",
  "Multidisciplinary Fertility Teams",
  "Fertility Counselling & Patient Education",
  "Further Advanced Reproductive Training",
];

const CASE_STUDIES = [
  {
    title: "Building a Structured Approach to Infertility Assessment",
    text: "Dr. Anjali, a practising gynecologist, wanted a more structured way to evaluate patients presenting with difficulty conceiving. Through case-based fellowship discussions covering reproductive history, ovulation assessment, hormonal evaluation, ultrasound, and ovarian reserve considerations, she developed a systematic approach to infertility assessment rather than jumping straight to a treatment decision.",
  },
  {
    title: "Learning to Choose the Right ART Pathway",
    text: "Dr. Rohan, an OBG consultant, wanted to strengthen his understanding of assisted reproductive technology decision-making. Working through a case involving female age, ovarian reserve, male factor, and prior treatment history helped him see how clinical findings, patient goals, and available options need to be weighed together when recommending an ART pathway.",
  },
];

const COMPARISON_ROWS = [
  { feature: "Learning Format", medfellow: "Flexible online with structured academic learning", others: "Mostly classroom or fixed schedules" },
  { feature: "Curriculum", medfellow: "Comprehensive and structured", others: "Often limited or topic-specific" },
  { feature: "Case-Based Learning", medfellow: "Regular clinical case discussions", others: "Varies by provider" },
  { feature: "Faculty Support", medfellow: "Continuous mentorship", others: "Limited to classroom sessions" },
  { feature: "Working Doctor Friendly", medfellow: "Designed for practising doctors", others: "May require time away from practice" },
  { feature: "Digital Resources", medfellow: "Recorded lectures and study materials", others: "Limited learning resources" },
  { feature: "Career Guidance", medfellow: "Structured academic and career guidance", others: "Often limited" },
  { feature: "Clinical Component", medfellow: "Based on selected program", others: "Varies by provider" },
];

const TESTIMONIALS = [
  {
    name: "MedFellow Academy Learner",
    role: "Gynecologist",
    text: "The structured curriculum helped me organise my understanding of infertility evaluation and reproductive medicine in a much more practical way.",
  },
  {
    name: "MedFellow Academy Learner",
    role: "Obstetrician & Gynecologist",
    text: "The flexible learning format made it easier to continue my clinical practice while studying advanced reproductive medicine concepts.",
  },
  {
    name: "MedFellow Academy Learner",
    role: "Fertility Practitioner",
    text: "The case discussions were particularly useful because they helped connect reproductive medicine theory with real clinical decision making.",
  },
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
    q: "What should I check before joining a Reproductive Medicine Fellowship?",
    a: "Check eligibility, curriculum, faculty, clinical exposure, laboratory exposure, assessment, certification, total fees, learning format, schedule, and career support.",
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
            <span>Fellowship in Reproductive Medicine</span>
          </div>

          <span className="section-label">Advanced Fertility Education</span>
          <h1 className="section-title mt-2 mb-4 !text-3xl md:!text-4xl">
            Best Fellowship Course in Reproductive Medicine
          </h1>

          <p className="text-[1rem] text-text-secondary leading-relaxed mb-4">
            Reproductive medicine is an evolving field that brings together infertility management,
            reproductive endocrinology, assisted reproductive technology, fertility preservation,
            reproductive genetics, and patient-centred fertility care.
          </p>
          <p className="text-[1rem] text-text-secondary leading-relaxed mb-4">
            For doctors looking to build expertise in this area, choosing the right Fellowship course in
            Reproductive Medicine requires more than comparing course fees or duration. The quality of the
            curriculum, faculty expertise, clinical exposure, case discussions, learning format, assessment
            methods, and certification all matter.
          </p>
          <p className="text-[1rem] text-text-secondary leading-relaxed mb-8">
            This guide explains what to look for in a fellowship, what you can learn, who should consider the
            program, and how to compare different training options.
          </p>

          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
            <Image
              src="/courses/reproductive-medicine.jpg"
              alt="Best Fellowship Course in Reproductive Medicine"
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

        {/* Why Pursue */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Growing Fertility Care Needs</span>
          <SectionHeading icon={Sparkles}>Why Reproductive Medicine Training Matters</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Infertility care has become increasingly specialized, requiring doctors to understand both the
            underlying causes of infertility and the expanding range of treatment options.
          </p>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-6">
            Modern reproductive medicine education can cover female and male infertility evaluation,
            reproductive endocrinology, ovarian reserve assessment, ovulation disorders, assisted reproductive
            technologies, fertility preservation, reproductive genetics, and fertility counselling. The goal
            is not simply to collect another qualification. It is to develop knowledge that can be applied
            meaningfully to fertility and reproductive healthcare.
          </p>
          <p className="text-[0.875rem] font-semibold text-[#111827] mb-3">Why Doctors Pursue Reproductive Medicine Training</p>
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
          <span className="section-label">Comprehensive Fertility Curriculum</span>
          <SectionHeading icon={GraduationCap}>What Should You Learn in a Reproductive Medicine Fellowship?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-6">
            A strong curriculum should progress from reproductive biology and infertility evaluation to
            treatment planning and advanced reproductive technologies.
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
            The precise level of practical exposure varies substantially between fellowship providers, so
            doctors should verify what is actually included rather than assuming that every program offers
            hands-on training.
          </p>
          <Link href="/courses/fellowship-in-reproductive-medicine" className="inline-block mt-5 text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            View the full curriculum, fees, and duration →
          </Link>
        </section>

        {/* Flexible Learning */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Flexible Learning for Doctors</span>
          <SectionHeading icon={Clock}>Can You Study Reproductive Medicine While Practising?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            Many doctors cannot step away from their clinical practice for an extended period. A flexible
            fellowship model can make advanced education more manageable for working professionals.
          </p>
          <p className="text-[0.875rem] font-semibold text-[#111827] mb-3">Benefits of Flexible Learning</p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-5">
            {PROGRAM_HIGHLIGHTS.map((h) => (
              <div key={h} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{h}</span>
              </div>
            ))}
          </div>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed">
            However, doctors should distinguish between online academic learning and supervised clinical
            training. Some established reproductive medicine programs use hybrid formats combining online
            theory with simulation or hands-on components, while other programs are primarily clinical and
            hospital-based.
          </p>
        </section>

        {/* Build Practical Expertise */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Build Practical Clinical Understanding</span>
          <SectionHeading icon={ShieldCheck}>What Skills Can You Develop During the Fellowship?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            A good Fellowship Course in Reproductive Medicine should move beyond lectures and help doctors
            develop practical clinical reasoning across patient assessment, fertility investigation,
            treatment planning, and patient counselling.
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
            Fertility treatment can involve emotional, financial, ethical, and medical considerations, so
            these competencies support better patient care and prepare participants for evolving clinical
            challenges in modern reproductive medicine.
          </p>
        </section>

        {/* Eligibility */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Who Should Apply?</span>
          <SectionHeading icon={Users}>Who Can Apply for a Reproductive Medicine Fellowship?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            Eligibility varies considerably between programs. Some advanced or university-linked reproductive
            medicine fellowships specifically require postgraduate qualifications in Obstetrics and
            Gynecology — for example, the National Board&apos;s FNB Reproductive Medicine pathway requires
            DNB/MS in Obstetrics and Gynecology and involves a structured two-year training program. Other
            private or online fellowship providers may have broader eligibility criteria.
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-5">
            {ELIGIBILITY.map((e) => (
              <div key={e} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{e}</span>
              </div>
            ))}
          </div>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#15401E] text-white rounded-md font-semibold text-[0.9375rem] hover:bg-[#0f2e15] transition-colors"
          >
            Check Your Eligibility
          </Link>
        </section>

        {/* Why Choose MedFellow */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Learn From Experienced Educators</span>
          <SectionHeading icon={Award}>Why Choose MedFellow Academy for Your Reproductive Medicine Fellowship?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            MedFellow Academy&apos;s fellowship model is designed for doctors who want to continue their
            professional responsibilities while pursuing structured medical education, without treating
            flexibility as a replacement for clinical training where hands-on experience is required.
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
          <span className="section-label">Growing Fertility Career Options</span>
          <SectionHeading icon={Briefcase}>Career Opportunities After a Reproductive Medicine Fellowship</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            Reproductive medicine training can support professional development across several areas. Roles
            you can explore include:
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
            A fellowship does not by itself guarantee employment, specialist registration, or independent
            procedural privileges. Career outcomes depend on your existing qualifications, experience,
            licensing, credentialing, and employer requirements.
          </p>
        </section>

        {/* Success Stories */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Learn From Real Fertility Cases</span>
          <SectionHeading icon={BookOpen}>Case-Based Learning in Practice</SectionHeading>
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
          <span className="section-label">Compare Before You Enrol</span>
          <SectionHeading icon={BarChart3}>MedFellow Academy vs Other Fellowship Options</SectionHeading>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E5E7EB]">
                  <th className="py-3 pr-4 text-[0.8125rem] font-semibold text-[#111827]">Feature</th>
                  <th className="py-3 pr-4 text-[0.8125rem] font-semibold text-[#15401E]">MedFellow Academy</th>
                  <th className="py-3 text-[0.8125rem] font-semibold text-[#111827]">Other Fellowship Providers</th>
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
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mt-5">
            The comparison should ultimately be based on curriculum, faculty, clinical exposure, learning
            format, certification, assessment, and career relevance, rather than marketing claims alone.
          </p>
        </section>

        {/* Testimonials */}
        <section className="py-8">
          <span className="section-label">Real Learning Experiences</span>
          <SectionHeading icon={Quote}>What Doctors Value in Fellowship Learning</SectionHeading>
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
              Choose the Fellowship That Fits Your Goals
            </h2>
            <p className="text-text-secondary mb-6">
              Choosing the Best Fellowship Course in Reproductive Medicine is ultimately about finding the
              right match between your qualifications, career goals, learning preferences, and desired level
              of clinical exposure. For doctors who want to build their understanding of fertility and
              reproductive healthcare while continuing their professional journey, a well-designed Fellowship
              in Reproductive Medicine can provide a structured pathway for continuous learning.
            </p>
            <Link href="/apply" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-center">
              Schedule a Free Consultation
            </Link>
          </div>
        </section>
      </div>

      <div className="lg:col-span-1">
        <TopicClusterLinks title="Reproductive Medicine Fellowship Resources" links={CLUSTER_LINKS} />
      </div>
      </div>
      </div>

      <FAQ faqs={FAQS} />

      <Footer />
    </div>
  );
}

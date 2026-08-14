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
  { label: "Best Fellowship Course in Urology (Guide)", href: "/best-fellowship-course-in-urology", type: "guide" as const },
  { label: "How to Choose a Urology Fellowship", href: "/blog/how-to-choose-a-urology-fellowship", type: "blog" as const },
  { label: "Questions to Ask Before Joining a Urology Fellowship", href: "/blog/questions-to-ask-before-joining-a-urology-fellowship", type: "blog" as const },
  { label: "Online vs Offline Urology Fellowship", href: "/blog/online-vs-offline-urology-fellowship", type: "blog" as const },
  { label: "Career Opportunities After a Urology Fellowship", href: "/blog/career-opportunities-after-a-urology-fellowship", type: "blog" as const },
  { label: "Who Can Apply for a Urology Fellowship? Eligibility Guide", href: "/blog/who-can-apply-for-a-urology-fellowship-eligibility-guide", type: "blog" as const },
  { label: "Skills You Will Learn During a Urology Fellowship", href: "/blog/skills-you-will-learn-during-a-urology-fellowship", type: "blog" as const },
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
  title: "Best Fellowship Course in Urology | MedFellow Academy",
  description:
    "Compare the Best Fellowship Course in Urology. Explore eligibility, curriculum, career opportunities, fees, and flexible online learning for surgeons.",
  keywords: "best fellowship course in urology, fellowship in urology, urology fellowship, online urology fellowship, urology fellowship course",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/best-fellowship-course-in-urology/" },
  openGraph: {
    title: "Best Fellowship Course in Urology",
    description:
      "Compare the Best Fellowship Course in Urology. Explore eligibility, curriculum, career opportunities, fees, and flexible online learning for surgeons.",
    type: "article",
    url: "https://www.medfellowacademy.com/best-fellowship-course-in-urology/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Fellowship in Urology" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Fellowship Course in Urology",
    description: "Compare the Best Fellowship Course in Urology for surgeons.",
  },
};

const CURRICULUM_GROUPS = [
  { title: "Foundations of Clinical Urology", text: "Urological anatomy, physiology, patient evaluation, diagnostic investigations, and clinical examination." },
  { title: "Endourology and Stone Management", text: "Ureteroscopy, percutaneous nephrolithotomy, laser lithotripsy, patient selection, and postoperative care." },
  { title: "Uro-Oncology", text: "Kidney, bladder, prostate, and testicular cancers — staging systems and multidisciplinary treatment planning." },
  { title: "Reconstructive Urology", text: "Urethral reconstruction, urinary diversion, trauma management, and reconstructive procedures." },
  { title: "Andrology and Male Infertility", text: "Male reproductive health, erectile dysfunction, infertility evaluation, and hormonal disorders." },
  { title: "Female Urology & Pelvic Floor Disorders", text: "Urinary incontinence, pelvic floor dysfunction, recurrent UTIs, and voiding disorders." },
  { title: "Pediatric Urology", text: "Congenital anomalies, vesicoureteral reflux, undescended testes, and hydronephrosis." },
  { title: "Emerging Technologies", text: "Robotic surgery, laparoscopic techniques, laser applications, and AI in urological practice." },
];

const BENEFITS = [
  "Develop advanced knowledge in modern urology",
  "Strengthen clinical decision making",
  "Understand minimally invasive surgical concepts",
  "Improve patient assessment and management",
  "Learn current evidence-based treatment approaches",
  "Enhance multidisciplinary collaboration",
  "Stay updated with evolving technologies",
  "Support long-term professional growth",
];

const PROGRAM_HIGHLIGHTS = [
  "Flexible online learning",
  "Weekend academic sessions",
  "Recorded lectures for revision",
  "Structured module-based curriculum",
  "Faculty mentorship",
  "Interactive clinical discussions",
  "Evidence-based learning",
  "Continuous academic support",
];

const SKILLS = [
  "Clinical evaluation of urological disorders",
  "Diagnostic interpretation",
  "Evidence-based treatment planning",
  "Stone disease management concepts",
  "Urological emergency assessment",
  "Patient counselling",
  "Clinical documentation",
  "Multidisciplinary collaboration",
  "Surgical decision making",
  "Long-term patient follow-up",
  "Professional communication",
  "Ethical clinical practice",
];

const ELIGIBILITY = [
  "MS General Surgery graduates",
  "DNB General Surgery graduates",
  "Practicing General Surgeons",
  "Consultants interested in Urology",
  "Doctors preparing for super-specialty careers",
  "Surgeons seeking structured fellowship education",
];

const WHY_MEDFELLOW = [
  "Flexible online learning designed for working professionals",
  "Structured curriculum covering core and advanced urology topics",
  "Experienced faculty from reputed institutions",
  "Clinical case discussions that improve decision making",
  "Evidence-based academic content",
  "Continuous academic guidance",
  "Recorded sessions for anytime learning",
  "Career-focused fellowship programs",
  "Professional networking opportunities",
  "Hybrid learning options for selected programs",
];

const CAREER_OPPORTUNITIES = [
  "Urology Consultant",
  "Endourology Specialist",
  "Uro-Oncology Team Member",
  "Reconstructive Urology Practice",
  "Academic Faculty",
  "Medical College Educator",
  "Clinical Research Associate",
  "Multispecialty Hospital Consultant",
  "Specialty Urology Centre",
  "Private Surgical Practice",
];

const CASE_STUDIES = [
  {
    title: "Building Confidence in Endourology",
    text: "Dr. Ramesh, a practicing General Surgeon, wanted to strengthen his understanding of modern stone disease management before expanding his surgical practice. Through the fellowship, he gained structured academic exposure to endourology, current treatment guidelines, and case discussions on minimally invasive procedures. The knowledge helped him improve patient counselling and collaborate more effectively with specialist urology teams.",
  },
  {
    title: "Advancing Towards a Specialized Career",
    text: "Dr. Priya had several years of experience in general surgery but wanted to pursue a stronger focus on urology. She enrolled in the fellowship to deepen her understanding of uro-oncology, reconstructive urology, and evidence-based patient management. The structured curriculum and faculty guidance helped her build greater confidence while preparing for future career opportunities in specialty hospitals.",
  },
];

const COMPARISON_ROWS = [
  { feature: "Learning Format", medfellow: "Flexible online with optional clinical training", others: "Mostly classroom or fixed schedules" },
  { feature: "Curriculum", medfellow: "Structured and comprehensive", others: "Often limited or topic-specific" },
  { feature: "Faculty Support", medfellow: "Continuous mentorship", others: "Limited to classroom sessions" },
  { feature: "Case-Based Learning", medfellow: "Regular clinical case discussions", others: "Varies by provider" },
  { feature: "Flexibility", medfellow: "Designed for working doctors", others: "May require time away from practice" },
  { feature: "Learning Resources", medfellow: "Recorded lectures and study materials", others: "Limited learning resources" },
  { feature: "Career Support", medfellow: "Academic guidance and career assistance", others: "Often limited" },
  { feature: "Overall Experience", medfellow: "Long-term professional development", others: "Primarily focused on short-term learning" },
];

const TESTIMONIALS = [
  {
    name: "Dr. Amit Verma",
    role: "MS General Surgery",
    text: "The fellowship provided a structured approach to learning modern urology. The case discussions helped me understand how current guidelines can be applied in everyday clinical practice.",
  },
  {
    name: "Dr. Neha Kulkarni",
    role: "Consultant Surgeon",
    text: "The flexibility of the online program allowed me to continue my hospital duties while upgrading my knowledge. The faculty support throughout the course was excellent.",
  },
  {
    name: "Dr. Sandeep Rao",
    role: "General Surgeon",
    text: "I particularly appreciated the comprehensive curriculum covering endourology, uro-oncology, and reconstructive urology. The fellowship has strengthened my confidence in managing complex cases.",
  },
];

const FAQS = [
  {
    q: "Is a Fellowship in Urology worth pursuing?",
    a: "A fellowship helps doctors stay updated with modern clinical practices, strengthens evidence-based decision making, and supports long-term professional development in urology.",
  },
  {
    q: "Can I study while working full time?",
    a: "Yes. Many fellowship programs are designed with flexible online learning, allowing doctors to continue their clinical responsibilities while studying.",
  },
  {
    q: "What topics are usually covered in a Urology fellowship?",
    a: "Most structured fellowships include endourology, uro-oncology, reconstructive urology, male infertility, female urology, pediatric urology, and case-based clinical discussions.",
  },
  {
    q: "Will I learn about minimally invasive urology?",
    a: "Yes. Modern fellowship programs introduce concepts related to minimally invasive procedures, laser technologies, and current treatment approaches for common urological conditions.",
  },
  {
    q: "How do I choose the best Urology fellowship?",
    a: "Look for a program with a structured curriculum, experienced faculty, flexible learning options, clinical case discussions, academic support, and a strong reputation for medical education.",
  },
  {
    q: "Is an online Urology fellowship effective?",
    a: "A well-designed online fellowship can provide high-quality academic learning through recorded lectures, live sessions, faculty interaction, and case-based discussions, making it suitable for practicing doctors.",
  },
  {
    q: "Does the fellowship improve career opportunities?",
    a: "A fellowship demonstrates commitment to continuous learning and can strengthen your profile for roles in hospitals, specialty centres, academics, and clinical research.",
  },
  {
    q: "What should I compare before joining a fellowship?",
    a: "Compare the curriculum, faculty, duration, flexibility, academic support, certification, learning resources, and career guidance offered by each program.",
  },
];

export default function UrologyGuidePage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Breadcrumb + Hero */}
      <section className="border-b border-[#E5E7EB] py-10 md:py-14">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-text-secondary mb-6">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <span>Fellowship in Urology</span>
          </div>

          <span className="section-label">Advance Your Urology Career</span>
          <h1 className="section-title mt-2 mb-4 !text-3xl md:!text-4xl">
            Best Fellowship Course in Urology
          </h1>

          <p className="text-[1rem] text-text-secondary leading-relaxed mb-4">
            Urology has evolved into one of the most technology-driven surgical specialties. From
            endourology and laser procedures to robotic surgery and uro-oncology, modern urologists are
            expected to combine strong clinical judgment with advanced procedural knowledge. As the burden
            of kidney stones, prostate disorders, urinary tract diseases, male infertility, and urological
            cancers continues to rise, specialists with updated training are increasingly sought after
            across hospitals and specialty centres.
          </p>
          <p className="text-[1rem] text-text-secondary leading-relaxed mb-4">
            Choosing the Best Fellowship Course in Urology is an important step for doctors who want to
            deepen their expertise while continuing their professional practice. A structured fellowship
            provides academic learning, expert mentorship, case-based discussions, and exposure to
            evidence-based clinical approaches that help strengthen everyday decision making.
          </p>
          <p className="text-[1rem] text-text-secondary leading-relaxed mb-8">
            Whether you are looking to enhance your surgical knowledge, prepare for advanced urology
            practice, or improve career prospects in India or overseas, a comprehensive fellowship offers an
            opportunity to continue learning without interrupting your medical career.
          </p>

          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
            <Image
              src="/courses/urology.jpg"
              alt="Best Fellowship Course in Urology"
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
          <span className="section-label">Growing Demand for Urologists</span>
          <SectionHeading icon={Sparkles}>Why Pursue a Fellowship in Urology?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            The field of urology is expanding rapidly due to increasing cases of kidney stone disease,
            prostate enlargement, urinary tract disorders, male infertility, and urological cancers. At the
            same time, advances in minimally invasive surgery, laser technology, and robotic-assisted
            procedures have transformed the way patients are diagnosed and treated.
          </p>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-6">
            For practicing surgeons, keeping pace with these developments requires continuous learning
            beyond postgraduate education. A fellowship offers a structured pathway to understand modern
            diagnostic techniques, treatment protocols, and evidence-based clinical practices while learning
            from experienced faculty.
          </p>
          <p className="text-[0.875rem] font-semibold text-[#111827] mb-3">Benefits of a Urology Fellowship</p>
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
          <span className="section-label">Comprehensive Clinical Learning</span>
          <SectionHeading icon={GraduationCap}>What You Will Learn During the Fellowship</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-6">
            A well-designed fellowship provides balanced academic learning that combines theory with
            practical clinical understanding through structured modules and real-world case discussions.
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
            One of the most valuable aspects of fellowship training is learning through real clinical
            scenarios — faculty-led case discussions encourage participants to analyse investigations,
            consider differential diagnoses, and make evidence-based decisions.
          </p>
          <Link href="/courses/fellowship-in-urology" className="inline-block mt-5 text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            View the full curriculum, fees, and duration →
          </Link>
        </section>

        {/* Flexible Learning */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Flexible Learning for Doctors</span>
          <SectionHeading icon={Clock}>Continue Learning While You Continue Practising</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            Many doctors hesitate to pursue higher education because of demanding clinical schedules. A
            flexible fellowship removes this barrier by allowing participants to continue their professional
            responsibilities while advancing their medical knowledge.
          </p>
          <p className="text-[0.875rem] font-semibold text-[#111827] mb-3">Program Highlights</p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-5">
            {PROGRAM_HIGHLIGHTS.map((h) => (
              <div key={h} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{h}</span>
              </div>
            ))}
          </div>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed">
            This learner-friendly format enables doctors to develop advanced knowledge without stepping away
            from their existing practice.
          </p>
        </section>

        {/* Build Practical Expertise */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Build Practical Expertise</span>
          <SectionHeading icon={ShieldCheck}>Skills You Can Develop During the Fellowship</SectionHeading>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {SKILLS.map((s) => (
              <div key={s} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{s}</span>
              </div>
            ))}
          </div>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mt-5">
            These competencies support better patient care and prepare participants for evolving clinical
            challenges in modern urology.
          </p>
        </section>

        {/* Eligibility */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Find the Right Eligibility</span>
          <SectionHeading icon={Users}>Who Can Apply for a Fellowship in Urology?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            The Fellowship in Urology is designed for doctors who want to strengthen their clinical
            knowledge and stay updated with advances in modern urological practice.
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
          <span className="section-label">Choose the Right Academy</span>
          <SectionHeading icon={Award}>Why Choose MedFellow Academy for Your Urology Fellowship?</SectionHeading>
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
          <span className="section-label">Expand Your Career Options</span>
          <SectionHeading icon={Briefcase}>Career Opportunities After a Fellowship in Urology</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            The demand for trained urology professionals continues to grow as healthcare systems invest in
            advanced surgical services, minimally invasive procedures, and specialized urological care.
            Roles you can explore include:
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
            Many doctors also use fellowship training to improve referral networks, expand the services
            offered within their clinics, and prepare for opportunities in healthcare systems across the
            Gulf region and other international markets.
          </p>
        </section>

        {/* Success Stories */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Real Clinical Growth</span>
          <SectionHeading icon={BookOpen}>Success Stories from Our Fellows</SectionHeading>
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
          <SectionHeading icon={BarChart3}>MedFellow Academy vs Other Fellowship Providers</SectionHeading>
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
        </section>

        {/* Testimonials */}
        <section className="py-8">
          <span className="section-label">Hear From Our Fellows</span>
          <SectionHeading icon={Quote}>What Doctors Say About the Fellowship</SectionHeading>
          <div className="grid sm:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="card p-5">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
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
              Take the Next Step Towards Advanced Urology Training
            </h2>
            <p className="text-text-secondary mb-6">
              Whether your goal is to enhance your current practice, explore specialized areas of urology,
              or advance your professional journey, MedFellow Academy provides a flexible and evidence-based
              learning experience designed for today&apos;s healthcare professionals.
            </p>
            <Link href="/apply" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-center">
              Schedule a Free Consultation
            </Link>
          </div>
        </section>
      </div>

      <div className="lg:col-span-1">
        <TopicClusterLinks title="Urology Fellowship Resources" links={CLUSTER_LINKS} />
      </div>
      </div>
      </div>

      <FAQ faqs={FAQS} />

      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import TopicClusterLinks from "@/components/TopicClusterLinks";
import Link from "next/link";
import Image from "next/image";

const CLUSTER_LINKS = [
  { label: "Best Fellowship Course in Cardiothoracic Surgery (Guide)", href: "/courses/best-fellowship-course-in-cardiothoracic-surgery", type: "guide" as const },
  { label: "How to Choose a Cardiothoracic Surgery Fellowship", href: "/blog/how-to-choose-a-cardiothoracic-surgery-fellowship", type: "blog" as const },
  { label: "Questions to Ask Before Joining a Cardiothoracic Surgery Fellowship", href: "/blog/questions-to-ask-before-joining-a-cardiothoracic-surgery-fellowship", type: "blog" as const },
  { label: "Online vs Offline Cardiothoracic Surgery Fellowship", href: "/blog/online-vs-offline-cardiothoracic-surgery-fellowship", type: "blog" as const },
  { label: "Is a Cardiothoracic Surgery Fellowship Worth It?", href: "/blog/is-a-cardiothoracic-surgery-fellowship-worth-it", type: "blog" as const },
  { label: "Career Opportunities After a Cardiothoracic Surgery Fellowship", href: "/blog/career-opportunities-after-a-cardiothoracic-surgery-fellowship", type: "blog" as const },
  { label: "Skills You Learn During a Cardiothoracic Surgery Fellowship", href: "/blog/skills-you-learn-during-a-cardiothoracic-surgery-fellowship", type: "blog" as const },
];

export const metadata: Metadata = {
  title: "How to Choose a Cardiothoracic Surgery Fellowship | MedFellow Academy",
  description:
    "Learn how to choose a cardiothoracic surgery fellowship by comparing curriculum, clinical exposure, faculty, eligibility, fees, format, and career opportunities.",
  keywords:
    "how to choose a cardiothoracic surgery fellowship, cardiothoracic surgery fellowship, cardiothoracic surgery fellowship course, best cardiothoracic surgery fellowship, online cardiothoracic surgery fellowship",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/how-to-choose-a-cardiothoracic-surgery-fellowship/" },
  openGraph: {
    title: "How to Choose a Cardiothoracic Surgery Fellowship",
    description:
      "Compare curriculum, clinical exposure, faculty, eligibility, fees, format, and career opportunities before enrolling.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/how-to-choose-a-cardiothoracic-surgery-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Choose a Cardiothoracic Surgery Fellowship",
    description: "A practical guide to comparing cardiothoracic fellowship programs before enrollment.",
  },
};

const FAQS = [
  {
    q: "How do I choose the best cardiothoracic surgery fellowship?",
    a: "Compare the curriculum, faculty, clinical exposure, eligibility, duration, learning format, assessment, certification, fees, and career relevance before choosing a program.",
  },
  {
    q: "What should I look for in a cardiothoracic surgery fellowship?",
    a: "Look for a structured curriculum covering cardiac and thoracic surgery, experienced faculty, relevant clinical exposure, appropriate assessments, and a format that fits your professional requirements.",
  },
  {
    q: "Is an online cardiothoracic surgery fellowship useful?",
    a: "An online fellowship can be useful for structured academic learning and flexibility. However, doctors should verify whether the program includes practical or clinical exposure and understand exactly what the course provides.",
  },
  {
    q: "How long does a cardiothoracic surgery fellowship take?",
    a: "The duration varies between institutions. Compare the program duration with its curriculum, clinical exposure, assessments, and overall learning outcomes.",
  },
  {
    q: "What is included in a cardiothoracic surgery fellowship curriculum?",
    a: "Depending on the program, the curriculum may include adult cardiac surgery, coronary surgery, valvular surgery, thoracic surgery, congenital cardiac surgery, cardiothoracic critical care, minimally invasive surgery, and robotic surgery.",
  },
  {
    q: "Who can apply for a cardiothoracic surgery fellowship?",
    a: "Eligibility depends on the specific fellowship. Doctors should review the provider's qualification, registration, and experience requirements before applying.",
  },
  {
    q: "Is a cardiothoracic surgery fellowship a replacement for specialist training?",
    a: "Generally, a fellowship should not automatically be considered a replacement for a required postgraduate specialist qualification or licensing pathway. Doctors should verify the requirements applicable to their jurisdiction and professional role.",
  },
  {
    q: "How much does a cardiothoracic surgery fellowship cost?",
    a: "Fees vary by institution, duration, delivery format, and included training components. Compare the total cost rather than looking only at the advertised tuition fee.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Choose a Cardiothoracic Surgery Fellowship",
  description:
    "Learn how to choose a cardiothoracic surgery fellowship by comparing curriculum, clinical exposure, faculty, eligibility, fees, format, and career opportunities.",
  image: "https://www.medfellowacademy.com/courses/cardiothoracic.jpg",
  datePublished: "2026-09-03",
  dateModified: "2026-09-03",
  author: { "@type": "Organization", name: "MedFellow Academy" },
  publisher: {
    "@type": "Organization",
    name: "MedFellow Academy",
    logo: { "@type": "ImageObject", url: "https://www.medfellowacademy.com/logo.png" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.medfellowacademy.com/blog/how-to-choose-a-cardiothoracic-surgery-fellowship/",
  },
};

const SURGICAL_INTERESTS = [
  "Adult cardiac surgery", "Coronary artery surgery", "Valvular heart surgery", "Thoracic surgery",
  "Congenital cardiac surgery", "Cardiothoracic critical care", "Minimally invasive surgery", "Robotic-assisted surgery",
];

const EXPERIENCE_QUESTIONS = [
  "What cardiothoracic skills do I already have?",
  "Which areas require additional training?",
  "Do I need structured academic learning?",
  "Am I looking for advanced clinical exposure?",
  "Can I commit to full-time training?",
  "Do I need a flexible learning format?",
];

const CURRICULUM_ROWS = [
  { area: "Adult Cardiac Surgery", look: "Core cardiac surgical principles and procedures" },
  { area: "Coronary Surgery", look: "CABG principles and patient selection" },
  { area: "Valvular Surgery", look: "Surgical management of valve disease" },
  { area: "Thoracic Surgery", look: "Lung, mediastinal and chest procedures" },
  { area: "Congenital Surgery", look: "Principles of congenital cardiac conditions" },
  { area: "Critical Care", look: "Postoperative ICU and patient management" },
  { area: "Minimally Invasive Surgery", look: "Modern surgical approaches" },
  { area: "Robotic Surgery", look: "Introduction to robotic-assisted techniques" },
];

const CLINICAL_QUESTIONS = [
  "Is clinical exposure included?",
  "Where does the clinical training take place?",
  "Is operative observation available?",
  "Are case discussions part of the program?",
  "How are surgical procedures taught?",
  "Is ICU and postoperative management covered?",
  "Will I receive exposure to multidisciplinary decision-making?",
];

const FACULTY_CHECKS = [
  "Academic qualifications", "Clinical experience", "Surgical specialization",
  "Teaching experience", "Research background", "Hospital or institutional affiliations",
];

const FORMAT_ROWS = [
  { factor: "Flexibility", online: "High", offline: "Low to moderate", hybrid: "High" },
  { factor: "Location dependency", online: "Low", offline: "High", hybrid: "Moderate" },
  { factor: "Faculty interaction", online: "Virtual", offline: "In-person", hybrid: "Both" },
  { factor: "Clinical exposure", online: "Program dependent", offline: "Usually on-site", hybrid: "Program dependent" },
  { factor: "Suitable for working doctors", online: "Often", offline: "Less flexible", hybrid: "Often" },
  { factor: "Practical learning", online: "Depends on program", offline: "Stronger on-site", hybrid: "Depends on program" },
  { factor: "Travel requirement", online: "Lower", offline: "Higher", hybrid: "Moderate" },
];

const FEE_ITEMS = [
  "Total tuition fee", "Registration charges", "Examination or assessment fees", "Learning resources",
  "Clinical training charges, if applicable", "Travel and accommodation requirements", "Payment schedules",
  "Refund or cancellation policies",
];

const ENROL_QUESTIONS = [
  "Who is eligible for the fellowship?",
  "How long is the program?",
  "What topics are covered in the curriculum?",
  "Who teaches the program?",
  "What clinical exposure is included?",
  "Is the fellowship online, offline, or hybrid?",
  "How are doctors assessed?",
  "What certificate is awarded?",
  "What are the total fees, and are there additional charges?",
  "What are the attendance requirements?",
  "Can working doctors complete the program?",
  "What support is available during the fellowship?",
  "What are the expected learning outcomes?",
  "Does the program align with my career goals?",
];

const SELECTION_ROWS = [
  { factor: "Curriculum", evaluate: "Breadth and clinical relevance" },
  { factor: "Faculty", evaluate: "Expertise and teaching experience" },
  { factor: "Clinical Exposure", evaluate: "Case-based and practical learning" },
  { factor: "Format", evaluate: "Online, offline or hybrid" },
  { factor: "Duration", evaluate: "Time commitment" },
  { factor: "Eligibility", evaluate: "Qualification and experience" },
  { factor: "Assessment", evaluate: "Exams and evaluations" },
  { factor: "Certification", evaluate: "Certificate and completion criteria" },
  { factor: "Fees", evaluate: "Total cost" },
  { factor: "Flexibility", evaluate: "Compatibility with clinical practice" },
  { factor: "Career Relevance", evaluate: "Alignment with professional goals" },
];

export default function BlogArticle() {
  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Navbar />

      <article className="section-padding">
        <div className="container-custom max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 text-sm text-text-secondary mb-6">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-primary">Blog</Link>
              <span>/</span>
              <span>How to Choose a Cardiothoracic Surgery Fellowship</span>
            </div>

            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">
                Fellowship Guides
              </span>
              <span className="text-sm text-text-secondary">⏱️ 10 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              How to Choose a Cardiothoracic Surgery Fellowship
            </h1>

            <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                  MA
                </div>
                <div>
                  <p className="font-semibold text-primary">Med Fellow Academy</p>
                  <p className="text-sm text-text-secondary">Medical Education Experts</p>
                </div>
              </div>
            </div>

            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10">
              <Image
                src="/courses/cardiothoracic.jpg"
                alt="How to Choose a Cardiothoracic Surgery Fellowship"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Choosing the right cardiothoracic surgery fellowship is an important career decision for doctors
                looking to build advanced expertise in cardiac and thoracic surgical care. The right program
                should offer more than a certificate — it should provide a structured curriculum, relevant
                clinical exposure, experienced faculty, practical learning opportunities, and skills that
                support your long-term career goals.
              </p>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-8">
                <p className="text-lg font-semibold text-primary mb-3">Key Takeaways</p>
                <ul className="space-y-2 text-text-secondary">
                  <li>✓ Start with your career goals and surgical interests</li>
                  <li>✓ Compare curriculum breadth, not just the course title</li>
                  <li>✓ Clarify exactly what &quot;clinical exposure&quot; and &quot;hands-on&quot; mean</li>
                  <li>✓ Verify certification, recognition, and total cost independently</li>
                </ul>
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Start With Your Career Goals</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Before comparing fellowship programs, understand what you want to achieve. Cardiothoracic
                surgery covers several areas — a fellowship should match the area in which you want to develop
                greater knowledge and confidence:
              </p>
              <div className="flex flex-wrap gap-2 mb-6 not-prose">
                {SURGICAL_INTERESTS.map((li) => (
                  <span key={li} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-[0.8125rem] font-medium">{li}</span>
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-4">
                Think about your current qualification, surgical exposure, and professional responsibilities:
              </p>
              <ul className="space-y-2 mb-8">
                {EXPERIENCE_QUESTIONS.map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Compare the Fellowship Curriculum</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Curriculum should be one of the first factors you compare. Look for programs that cover the
                major components of cardiothoracic surgery rather than focusing on a narrow theoretical area:
              </p>
              <div className="overflow-x-auto rounded-lg border border-gray-200 mb-6 not-prose">
                <table className="w-full text-sm text-left">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Curriculum Area</th>
                      <th className="px-4 py-3 font-semibold">What to Look For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CURRICULUM_ROWS.map((r, i) => (
                      <tr key={r.area} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 font-medium text-primary border-t border-gray-100">{r.area}</td>
                        <td className="px-4 py-3 text-text-secondary border-t border-gray-100">{r.look}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                The curriculum should also be regularly reviewed to ensure that the training reflects
                contemporary cardiothoracic practice.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Evaluate Clinical Exposure</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                One of the most important differences between fellowship programs is the amount and quality of
                clinical exposure provided. Before joining, ask:
              </p>
              <ul className="space-y-2 mb-8">
                {CLINICAL_QUESTIONS.map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
              <p className="text-text-secondary leading-relaxed mb-8">
                Do not assume that a program offering a fellowship certificate automatically provides the same
                level of practical exposure as every other program.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Check Faculty Expertise</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Faculty quality can significantly influence the learning experience. Look for information about
                the faculty&apos;s:
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-6 not-prose">
                {FACULTY_CHECKS.map((li) => (
                  <div key={li} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary">
                    <span className="text-secondary mt-0.5">✓</span>
                    <span>{li}</span>
                  </div>
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                A strong faculty should be able to connect theoretical concepts with real-world clinical
                decision-making.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Understand the Training Format</h2>
              <div className="overflow-x-auto rounded-lg border border-gray-200 mb-6 not-prose">
                <table className="w-full text-sm text-left">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Factor</th>
                      <th className="px-4 py-3 font-semibold">Online</th>
                      <th className="px-4 py-3 font-semibold">Offline</th>
                      <th className="px-4 py-3 font-semibold">Hybrid</th>
                    </tr>
                  </thead>
                  <tbody>
                    {FORMAT_ROWS.map((r, i) => (
                      <tr key={r.factor} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 font-medium text-primary border-t border-gray-100">{r.factor}</td>
                        <td className="px-4 py-3 text-text-secondary border-t border-gray-100">{r.online}</td>
                        <td className="px-4 py-3 text-text-secondary border-t border-gray-100">{r.offline}</td>
                        <td className="px-4 py-3 text-text-secondary border-t border-gray-100">{r.hybrid}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                The better option depends on your career goals, current workload, location, and the actual
                clinical components offered by the program.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Verify Eligibility, Duration &amp; Fees</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Eligibility requirements vary between fellowship providers and specialties. Before applying,
                check the required medical qualification, specialty or postgraduate qualification, registration
                requirements, clinical experience requirements, institutional prerequisites, and documentation
                requirements. Do not judge a fellowship only by its duration — compare the duration against the
                curriculum, clinical exposure, assessments, faculty interaction, and learning outcomes. When
                comparing fees, look beyond the advertised tuition:
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 not-prose">
                {FEE_ITEMS.map((li) => (
                  <div key={li} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary">
                    <span className="text-secondary mt-0.5">✓</span>
                    <span>{li}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Review Assessment, Certification &amp; Recognition</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Understand how your learning will be assessed — regular assessments, case-based evaluations,
                assignments, final examination, attendance requirements, clinical assessments, and a completion
                certificate. Understand what the certificate represents and whether the fellowship is intended
                as additional professional education or as a formal specialist qualification. Look for
                transparent information about the course provider, academic structure, faculty, clinical
                partners, curriculum, certification, duration, assessment methodology, and admission
                requirements. Be cautious of programs that make broad claims about specialist recognition,
                licensing, or guaranteed career outcomes without providing supporting information.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Look at Career Relevance</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                A cardiothoracic surgery fellowship can help doctors develop additional knowledge and skills
                relevant to cardiac and thoracic surgical practice — potential directions include cardiac
                surgery practice, thoracic surgery practice, cardiothoracic departments, critical care
                settings, academic medicine, surgical teaching, research, and multidisciplinary cardiac care.
                However, a fellowship should be viewed as additional specialized training and not automatically
                assumed to replace a required postgraduate surgical qualification, specialist registration, or
                licensing requirement.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Questions to Ask Before Joining</h2>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 not-prose">
                {ENROL_QUESTIONS.map((li) => (
                  <div key={li} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary">
                    <span className="text-secondary mt-0.5">✓</span>
                    <span>{li}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Compare Cardiothoracic Fellowships</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                When comparing two or more courses, evaluate them using the same criteria:
              </p>
              <div className="overflow-x-auto rounded-lg border border-gray-200 mb-8 not-prose">
                <table className="w-full text-sm text-left">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Selection Factor</th>
                      <th className="px-4 py-3 font-semibold">What to Evaluate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SELECTION_ROWS.map((r, i) => (
                      <tr key={r.factor} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 font-medium text-primary border-t border-gray-100">{r.factor}</td>
                        <td className="px-4 py-3 text-text-secondary border-t border-gray-100">{r.evaluate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Build Advanced Knowledge Without Pausing Your Career
                </h3>
                <p className="text-text-secondary mb-6">
                  Explore the MedFellow Academy Fellowship in Cardiothoracic Surgery to review the current
                  curriculum, eligibility, duration, delivery format, and admission information.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/courses/fellowship-in-cardiothoracic-surgery" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-center">
                    View Fellowship Details
                  </Link>
                  <Link href="/courses/best-fellowship-course-in-cardiothoracic-surgery" className="inline-block px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all text-center">
                    Read the Full Guide
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-2xl shrink-0">
                  MF
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-primary mb-2">About Med Fellow Academy</h3>
                  <p className="text-text-secondary mb-4">
                    MedFellow Academy provides structured, flexible fellowship courses for practicing
                    doctors — combining evidence-based curriculum, expert faculty mentorship, and hands-on
                    clinical training across 60+ specialties.
                  </p>
                  <div className="flex gap-4">
                    <Link href="/courses" className="text-secondary font-semibold hover:text-primary">
                      View Our Courses →
                    </Link>
                    <Link href="/blog" className="text-secondary font-semibold hover:text-primary">
                      More Articles →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <TopicClusterLinks title="Cardiothoracic Surgery Resources" links={CLUSTER_LINKS} />
          </div>
          </div>
        </div>
      </article>

      <FAQ faqs={FAQS} />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-primary mb-6">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/courses/best-fellowship-course-in-cardiothoracic-surgery" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">Fellowship Guide</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Best Fellowship Course in Cardiothoracic Surgery
                </h3>
                <p className="text-sm text-text-secondary">A complete guide to curriculum, clinical exposure, skills, eligibility, formats, and career scope...</p>
              </Link>
              <Link href="/blog/questions-to-ask-before-joining-a-cardiothoracic-surgery-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Questions to Ask Before Joining a Cardiothoracic Surgery Fellowship
                </h3>
                <p className="text-sm text-text-secondary">A detailed checklist before applying to a cardiothoracic surgery fellowship...</p>
              </Link>
              <Link href="/blog/online-vs-offline-cardiothoracic-surgery-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Online vs Offline Cardiothoracic Surgery Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Compare flexibility, academic learning, clinical exposure, and practical training...</p>
              </Link>
              <Link href="/blog/is-a-cardiothoracic-surgery-fellowship-worth-it" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Career Planning</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Is a Cardiothoracic Surgery Fellowship Worth It?
                </h3>
                <p className="text-sm text-text-secondary">Understand the potential benefits, limitations, and career considerations...</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import TopicClusterLinks from "@/components/TopicClusterLinks";
import Link from "next/link";
import Image from "next/image";

const CLUSTER_LINKS = [
  { label: "Best Fellowship Course in Reproductive Medicine (Guide)", href: "/courses/best-fellowship-course-in-reproductive-medicine", type: "guide" as const },
  { label: "How to Choose a Reproductive Medicine Fellowship", href: "/blog/how-to-choose-reproductive-medicine-fellowship", type: "blog" as const },
  { label: "Questions to Ask Before Joining a Reproductive Medicine Fellowship", href: "/blog/questions-to-ask-before-joining-reproductive-medicine-fellowship", type: "blog" as const },
  { label: "Online vs Offline Reproductive Medicine Fellowship", href: "/blog/online-vs-offline-reproductive-medicine-fellowship", type: "blog" as const },
  { label: "Career Opportunities After a Reproductive Medicine Fellowship", href: "/blog/career-opportunities-after-reproductive-medicine-fellowship", type: "blog" as const },
  { label: "Reproductive Medicine Fellowship Curriculum: What Will You Learn?", href: "/blog/reproductive-medicine-fellowship-curriculum", type: "blog" as const },
];

export const metadata: Metadata = {
  title: "Online vs Offline Reproductive Medicine Fellowship | MedFellow Academy",
  description:
    "Compare online vs offline reproductive medicine fellowships, including clinical exposure, flexibility, curriculum, practical training, fees, and certification.",
  keywords:
    "online vs offline reproductive medicine fellowship, online reproductive medicine fellowship, offline reproductive medicine fellowship, reproductive medicine fellowship, reproductive medicine fellowship course",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/online-vs-offline-reproductive-medicine-fellowship/" },
  openGraph: {
    title: "Online vs Offline Reproductive Medicine Fellowship",
    description:
      "Compare clinical exposure, flexibility, curriculum, practical training, fees, and certification between online and offline formats.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/online-vs-offline-reproductive-medicine-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online vs Offline Reproductive Medicine Fellowship",
    description: "Which learning format fits working doctors — a side-by-side comparison.",
  },
};

const FAQS = [
  {
    q: "Is an online reproductive medicine fellowship as good as an offline fellowship?",
    a: "It depends on the program. Online training can be strong for academic learning and flexibility, while offline training may provide greater access to on-site clinical environments. Compare curriculum, faculty, assessment, and practical exposure rather than judging quality solely by format.",
  },
  {
    q: "Can I get hands-on training in an online reproductive medicine fellowship?",
    a: "Only if the program specifically includes a practical or clinical component. Ask where the training takes place, what procedures are covered, how many sessions are provided, and whether you observe, assist, or perform procedures under supervision.",
  },
  {
    q: "Is offline training better for learning IVF?",
    a: "Offline training may provide more opportunities for direct observation of IVF workflows and interaction with fertility and embryology teams. However, the actual exposure depends on the institution and program structure.",
  },
  {
    q: "Can working doctors pursue an online reproductive medicine fellowship?",
    a: "Yes, online programs can be more convenient for working doctors because they may reduce relocation and provide flexible academic schedules. Check the weekly workload, live sessions, attendance, and clinical requirements before enrolling.",
  },
  {
    q: "Does an online fellowship provide clinical exposure?",
    a: "Not necessarily. Some programs may include separate clinical or practical components, while others may be entirely academic. This should be verified with the fellowship provider before enrollment.",
  },
  {
    q: "Is a hybrid reproductive medicine fellowship better than online or offline?",
    a: "A hybrid fellowship can be useful when it combines structured online academic learning with meaningful clinical exposure. However, hybrid does not automatically mean better. Check the quality and duration of each component.",
  },
  {
    q: "Will an online fellowship teach embryology?",
    a: "It can provide academic training in embryology, but laboratory exposure depends on the program. Ask whether you will only study embryology theoretically or have access to an IVF laboratory for observation.",
  },
  {
    q: "Does online learning reduce the value of a reproductive medicine fellowship certificate?",
    a: "The value of a certificate should not be judged simply by whether the course is online or offline. Check the awarding institution, curriculum, assessment, credential, and whether it meets your intended professional purpose.",
  },
  {
    q: "Which is better for a doctor who already has a busy practice?",
    a: "An online or hybrid fellowship may be more practical if you need flexibility and want to continue working. However, if intensive clinical training is your priority and you can take time away from practice, an offline program may be more suitable.",
  },
  {
    q: "What should I check before choosing an online reproductive medicine fellowship?",
    a: "Check the curriculum, faculty, live sessions, recorded content, assessments, clinical exposure, practical training, IVF and embryology coverage, certification, total fees, time commitment, and support available to fellows.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Online vs Offline Reproductive Medicine Fellowship",
  description:
    "Compare online vs offline reproductive medicine fellowships across curriculum, clinical exposure, flexibility, faculty, assessment, cost, and career considerations.",
  image: "https://www.medfellowacademy.com/courses/reproductive-medicine.jpg",
  datePublished: "2026-08-15",
  dateModified: "2026-08-15",
  author: { "@type": "Organization", name: "MedFellow Academy" },
  publisher: {
    "@type": "Organization",
    name: "MedFellow Academy",
    logo: { "@type": "ImageObject", url: "https://www.medfellowacademy.com/logo.png" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.medfellowacademy.com/blog/online-vs-offline-reproductive-medicine-fellowship/",
  },
};

const GOALS = [
  "Strengthen infertility management knowledge",
  "Learn reproductive endocrinology",
  "Understand assisted reproductive technology",
  "Develop knowledge of IVF, ICSI, and IUI",
  "Improve fertility assessment skills",
  "Learn about reproductive ultrasound",
  "Understand fertility preservation",
  "Gain exposure to embryology",
  "Build a fertility-focused practice",
  "Continue working while completing advanced training",
];

const COMPARE_ROWS = [
  { factor: "Academic learning", online: "Strong potential", offline: "Strong potential" },
  { factor: "Flexibility", online: "Usually higher", offline: "Usually lower" },
  { factor: "Clinical environment", online: "May be limited or separate", offline: "Usually integrated" },
  { factor: "Faculty interaction", online: "Virtual", offline: "In person" },
  { factor: "Procedural observation", online: "Depends on program", offline: "Usually easier to access" },
  { factor: "Hands-on training", online: "Must be specifically verified", offline: "Often more accessible" },
  { factor: "Relocation", online: "Usually not required", offline: "May be required" },
  { factor: "Working alongside course", online: "Often easier", offline: "May be difficult" },
  { factor: "Travel costs", online: "Usually lower", offline: "Potentially higher" },
  { factor: "Hospital exposure", online: "Depends on program", offline: "Usually stronger" },
];

const ONLINE_ADVANTAGES = [
  "Flexible learning schedules", "Access from different locations", "Reduced relocation requirements",
  "Lower travel requirements", "Recorded lectures in some programs", "Easier integration with clinical practice",
  "Access to digital learning resources", "Virtual case discussions",
];

const ONLINE_CANNOT_REPLACE = [
  "Direct patient interaction", "Physical examination", "Ultrasound scanning practice",
  "Procedural observation", "Procedure assistance", "IVF laboratory exposure",
  "Direct interaction with clinical teams",
];

const OFFLINE_ADVANTAGES = [
  "Direct patient exposure", "In-person faculty interaction", "Procedural observation",
  "Clinical case discussions", "Hospital or fertility center exposure", "Immediate feedback",
  "Direct networking", "Greater immersion in the clinical environment",
];

const OFFLINE_CONSIDER = [
  "Relocation", "Accommodation", "Travel", "Time away from your current practice", "Fixed schedules",
  "Additional living expenses", "Limited flexibility", "Opportunity cost of reducing clinical work",
];

const ASK_ONLINE = [
  "Is clinical exposure included?",
  "Where does it take place?",
  "Is it mandatory?",
  "Can online fellows attend clinical sessions?",
  "How many clinical sessions are included?",
  "Are procedures observed or performed?",
  "Who supervises practical training?",
  "Is simulation available?",
  "Is there access to an IVF laboratory?",
];

const ASK_OFFLINE = [
  "How many patients do fellows see?",
  "How many procedures are observed?",
  "Can fellows assist with procedures?",
  "Are ultrasound sessions included?",
  "Is there access to an IVF laboratory?",
  "Are fellows involved in case discussions?",
  "What is the faculty-to-fellow ratio?",
  "Is practical participation supervised?",
];

const PRIORITY_ROWS = [
  { priority: "Flexible learning", fit: "Online" },
  { priority: "Continue clinical practice", fit: "Online" },
  { priority: "No relocation", fit: "Online" },
  { priority: "Structured academic learning", fit: "Online or Offline" },
  { priority: "Intensive clinical immersion", fit: "Offline" },
  { priority: "Frequent face-to-face mentoring", fit: "Offline" },
  { priority: "Direct hospital exposure", fit: "Offline" },
  { priority: "Procedural observation", fit: "Usually Offline" },
  { priority: "Flexible schedule", fit: "Online" },
  { priority: "Combination of flexibility and clinical exposure", fit: "Hybrid" },
];

const MISTAKES = [
  { mistake: "Choosing only by course fee", better: "A cheaper program may not offer the same curriculum, faculty access, or clinical exposure" },
  { mistake: "Assuming offline means better", better: "Offline delivery does not automatically guarantee quality practical training" },
  { mistake: "Assuming online means only theory", better: "Some online programs provide extensive academic training and separate clinical components" },
  { mistake: "Ignoring your work schedule", better: "A full-time program may not be practical with an established practice" },
  { mistake: "Not checking certification", better: "Always understand who awards the certificate and what it represents" },
  { mistake: "Not asking about practical exposure", better: "If hands-on training matters, ask detailed questions rather than relying on promotional terms" },
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
              <span>Online vs Offline Reproductive Medicine Fellowship</span>
            </div>

            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">
                Fellowship Guides
              </span>
              <span className="text-sm text-text-secondary">⏱️ 11 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Online vs Offline Reproductive Medicine Fellowship
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
                src="/courses/reproductive-medicine.jpg"
                alt="Online vs Offline Reproductive Medicine Fellowship"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Choosing between an online and offline reproductive medicine fellowship can be difficult,
                especially for doctors who want advanced training without putting their current clinical
                practice on hold. An offline fellowship may provide greater access to hospital-based clinical
                environments and supervised procedures, while an online or hybrid fellowship can offer
                flexibility for working doctors and structured academic learning. The right choice depends on
                what you want to learn, how much practical exposure you need, your work commitments, and where
                you want to use the fellowship qualification.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Start With Your Learning Goals</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Before choosing online or offline training, decide what you expect from the fellowship. You may
                be looking to:
              </p>
              <ul className="space-y-2 mb-8">
                {GOALS.map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Compare Online and Offline Learning</h2>
              <div className="overflow-x-auto rounded-lg border border-gray-200 mb-6 not-prose">
                <table className="w-full text-sm text-left">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Factor</th>
                      <th className="px-4 py-3 font-semibold">Online Fellowship</th>
                      <th className="px-4 py-3 font-semibold">Offline Fellowship</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARE_ROWS.map((r, i) => (
                      <tr key={r.factor} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 font-medium text-primary border-t border-gray-100">{r.factor}</td>
                        <td className="px-4 py-3 text-text-secondary border-t border-gray-100">{r.online}</td>
                        <td className="px-4 py-3 text-text-secondary border-t border-gray-100">{r.offline}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                The table is a starting point. The actual quality of a fellowship depends on its curriculum,
                faculty, clinical exposure, assessment, and training structure.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Understand Online Reproductive Medicine Fellowships</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                A well-structured online fellowship can provide access to lectures, case discussions, study
                material, assessments, and faculty interaction through digital platforms. Advantages of online
                learning include:
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-6 not-prose">
                {ONLINE_ADVANTAGES.map((li) => (
                  <div key={li} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary">
                    <span className="text-secondary mt-0.5">✓</span>
                    <span>{li}</span>
                  </div>
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-4">
                Online education should not automatically be treated as equivalent to hands-on clinical
                training. Certain aspects of reproductive medicine are difficult to replicate completely
                through a screen, including:
              </p>
              <ul className="space-y-2 mb-8">
                {ONLINE_CANNOT_REPLACE.map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-accent text-xl mt-1">✕</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Understand Offline Reproductive Medicine Fellowships</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Offline fellowships generally place doctors within a hospital, fertility center, teaching
                institution, or other clinical environment, creating more opportunities for direct interaction
                with patients, faculty, clinical teams, and procedures. Advantages include:
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-6 not-prose">
                {OFFLINE_ADVANTAGES.map((li) => (
                  <div key={li} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary">
                    <span className="text-secondary mt-0.5">✓</span>
                    <span>{li}</span>
                  </div>
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-4">
                Offline training can also involve practical challenges. You may need to consider:
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 not-prose">
                {OFFLINE_CONSIDER.map((li) => (
                  <div key={li} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary">
                    <span className="text-secondary mt-0.5">•</span>
                    <span>{li}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Compare Clinical and Practical Exposure</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                For reproductive medicine, this may be the most important comparison. A fellowship can teach
                you the theory of IVF, infertility, reproductive endocrinology, and fertility preservation
                online — but clinical competence requires appropriate supervised exposure.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-8 not-prose">
                <div className="card p-5">
                  <h3 className="text-[0.9375rem] font-bold text-primary mb-3">Ask an Online Program</h3>
                  <div className="space-y-1.5">
                    {ASK_ONLINE.map((li) => (
                      <div key={li} className="flex items-start gap-2 text-[0.8125rem] text-text-secondary">
                        <span className="text-secondary mt-0.5">✓</span>
                        <span>{li}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="card p-5">
                  <h3 className="text-[0.9375rem] font-bold text-primary mb-3">Ask an Offline Program</h3>
                  <div className="space-y-1.5">
                    {ASK_OFFLINE.map((li) => (
                      <div key={li} className="flex items-start gap-2 text-[0.8125rem] text-text-secondary">
                        <span className="text-secondary mt-0.5">✓</span>
                        <span>{li}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                The word &quot;offline&quot; does not guarantee clinical quality. The actual training structure
                matters.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Look Beyond the Format</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                The delivery format does not determine the quality of the curriculum. A strong online program
                can have a better academic structure than a poorly designed offline program, just as a strong
                offline fellowship can offer clinical exposure that an online program cannot replicate. Review
                whether the curriculum covers infertility evaluation, male and female infertility, reproductive
                endocrinology, ovulation induction, IUI, IVF, ICSI, embryology, fertility preservation,
                reproductive ultrasound, reproductive genetics, recurrent pregnancy loss, endometriosis, ART
                complications, patient counseling, and ethics — and ask for module names, learning objectives,
                session frequency, clinical components, assessment structure, and faculty information.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Compare Fees, Certification &amp; Networking</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Tuition is only one part of the cost of a fellowship. Online fellowships may involve fewer
                expenses related to relocation, accommodation, daily commuting, extended travel, and time away
                from practice — but check whether separate clinical training or workshops involve additional
                charges. Offline fellowships may require tuition, accommodation, travel, local transportation,
                food, relocation, lost income, and additional training expenses. Whether the fellowship is
                online or offline, understand who awards the certificate, the exact credential, the completion
                requirements, and whether the qualification is accepted for the specific professional purpose
                you have in mind. If you require regulatory recognition, specialist registration, licensing, or
                credentialing in a particular country, verify the requirements of the relevant medical
                authority separately.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Online vs Offline: Which Is Better?</h2>
              <div className="overflow-x-auto rounded-lg border border-gray-200 mb-6 not-prose">
                <table className="w-full text-sm text-left">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Your Priority</th>
                      <th className="px-4 py-3 font-semibold">Better Fit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PRIORITY_ROWS.map((r, i) => (
                      <tr key={r.priority} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 font-medium text-primary border-t border-gray-100">{r.priority}</td>
                        <td className="px-4 py-3 text-text-secondary border-t border-gray-100">{r.fit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                For many working doctors, a hybrid model may offer a practical balance between academic
                flexibility and clinical exposure, provided the clinical component is clearly structured.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Common Mistakes Doctors Make</h2>
              <div className="overflow-x-auto rounded-lg border border-gray-200 mb-8 not-prose">
                <table className="w-full text-sm text-left">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Common Mistake</th>
                      <th className="px-4 py-3 font-semibold">A Better Approach</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MISTAKES.map((r, i) => (
                      <tr key={r.mistake} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 font-medium text-primary border-t border-gray-100">{r.mistake}</td>
                        <td className="px-4 py-3 text-text-secondary border-t border-gray-100">{r.better}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Choose Learning That Fits Your Career
                </h3>
                <p className="text-text-secondary mb-6">
                  Explore MedFellow Academy&apos;s Fellowship in Reproductive Medicine and review the
                  curriculum, eligibility, duration, learning format, and program details.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/courses/fellowship-in-reproductive-medicine" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-center">
                    View Fellowship Details
                  </Link>
                  <Link href="/courses/best-fellowship-course-in-reproductive-medicine" className="inline-block px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all text-center">
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
            <TopicClusterLinks title="Reproductive Medicine Resources" links={CLUSTER_LINKS} />
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
              <Link href="/courses/best-fellowship-course-in-reproductive-medicine" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">Fellowship Guide</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Best Fellowship Course in Reproductive Medicine
                </h3>
                <p className="text-sm text-text-secondary">A complete guide to curriculum, eligibility, skills, learning options, and career pathways...</p>
              </Link>
              <Link href="/blog/how-to-choose-reproductive-medicine-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  How to Choose a Reproductive Medicine Fellowship
                </h3>
                <p className="text-sm text-text-secondary">What to evaluate before enrolling in a fellowship...</p>
              </Link>
              <Link href="/blog/questions-to-ask-before-joining-reproductive-medicine-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Questions to Ask Before Joining a Reproductive Medicine Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Use this checklist to evaluate fellowship providers...</p>
              </Link>
              <Link href="/blog/reproductive-medicine-fellowship-curriculum" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Clinical Skills</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Reproductive Medicine Fellowship Curriculum: What Will You Learn?
                </h3>
                <p className="text-sm text-text-secondary">The major subjects and clinical skills covered in fellowship training...</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import TopicClusterLinks from "@/components/TopicClusterLinks";
import Link from "next/link";
import Image from "next/image";

const CLUSTER_LINKS = [
  { label: "Best Fellowship Course in Urology (Guide)", href: "/best-fellowship-course-in-urology", type: "guide" as const },
  { label: "How to Choose a Urology Fellowship", href: "/blog/how-to-choose-a-urology-fellowship", type: "blog" as const },
  { label: "Questions to Ask Before Joining a Urology Fellowship", href: "/blog/questions-to-ask-before-joining-a-urology-fellowship", type: "blog" as const },
  { label: "Online vs Offline Urology Fellowship", href: "/blog/online-vs-offline-urology-fellowship", type: "blog" as const },
  { label: "Career Opportunities After a Urology Fellowship", href: "/blog/career-opportunities-after-a-urology-fellowship", type: "blog" as const },
  { label: "Who Can Apply for a Urology Fellowship? Eligibility Guide", href: "/blog/who-can-apply-for-a-urology-fellowship-eligibility-guide", type: "blog" as const },
  { label: "Skills You Will Learn During a Urology Fellowship", href: "/blog/skills-you-will-learn-during-a-urology-fellowship", type: "blog" as const },
];

export const metadata: Metadata = {
  title: "Skills You Will Learn During a Urology Fellowship | MedFellow Academy",
  description:
    "Discover the essential skills you will learn during a Urology fellowship, from endourology and uro-oncology to patient care, clinical decision making, and minimally invasive procedures.",
  keywords: "skills you will learn during a urology fellowship, urology fellowship skills, fellowship in urology, urology fellowship course, urology clinical skills",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/skills-you-will-learn-during-a-urology-fellowship/" },
  openGraph: {
    title: "Skills You Will Learn During a Urology Fellowship Course",
    description:
      "Discover the essential skills you will learn during a Urology fellowship, from endourology and uro-oncology to patient care, clinical decision making, and minimally invasive procedures.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/skills-you-will-learn-during-a-urology-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skills You Will Learn During a Urology Fellowship",
    description: "From endourology and uro-oncology to clinical decision making.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Skills You Will Learn During a Urology Fellowship Course",
  description:
    "Discover the essential skills you will learn during a Urology fellowship, from endourology and uro-oncology to patient care, clinical decision making, and minimally invasive procedures.",
  image: "https://www.medfellowacademy.com/courses/urology.jpg",
  datePublished: "2026-08-06",
  dateModified: "2026-08-06",
  author: { "@type": "Organization", name: "MedFellow Academy" },
  publisher: {
    "@type": "Organization",
    name: "MedFellow Academy",
    logo: { "@type": "ImageObject", url: "https://www.medfellowacademy.com/logo.png" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.medfellowacademy.com/blog/skills-you-will-learn-during-a-urology-fellowship/",
  },
};

const FAQS = [
  {
    q: "Will I learn minimally invasive urology during the fellowship?",
    a: "Yes. Most structured fellowships introduce concepts related to endourology, laser procedures, and other minimally invasive treatment approaches.",
  },
  {
    q: "Is a fellowship focused only on surgical skills?",
    a: "No. In addition to surgical concepts, participants strengthen diagnostic reasoning, patient assessment, communication, and evidence-based clinical decision making.",
  },
  {
    q: "Can I improve my understanding of uro-oncology?",
    a: "Yes. Many fellowship programs include dedicated modules covering common urological cancers, staging, treatment principles, and multidisciplinary care.",
  },
  {
    q: "Does the fellowship include case discussions?",
    a: "Yes. Case-based learning is a core component of most fellowships and helps participants apply theoretical concepts to real clinical scenarios.",
  },
  {
    q: "Are these skills useful for practicing surgeons?",
    a: "Absolutely. The fellowship is designed to help practicing doctors refine their knowledge and stay updated with evolving clinical practices while continuing their professional responsibilities.",
  },
  {
    q: "Can I pursue the fellowship while working?",
    a: "Many fellowship programs offer flexible online learning with recorded sessions, making them suitable for working healthcare professionals.",
  },
];

const SKILL_MODULES = [
  {
    title: "1. Comprehensive Clinical Assessment",
    text: "Every successful treatment plan begins with a thorough patient assessment. During a fellowship, participants learn systematic approaches to evaluating patients presenting with common and complex urological conditions.",
    items: ["Comprehensive history taking", "Physical examination", "Symptom assessment", "Risk factor identification", "Differential diagnosis", "Clinical documentation"],
  },
  {
    title: "2. Diagnostic Interpretation",
    text: "Modern urology relies heavily on diagnostic investigations. A fellowship helps participants understand how to interpret findings and integrate them into clinical decision making.",
    items: ["Urine investigations", "Imaging interpretation", "Ultrasound principles", "CT and MRI correlation", "Laboratory investigations", "Diagnostic algorithms"],
  },
  {
    title: "3. Understanding Endourology",
    text: "Endourology has transformed the management of kidney stones and urinary tract disorders. Fellowship participants gain academic exposure to modern treatment concepts, patient selection, and postoperative care.",
    items: ["Kidney stone evaluation", "Treatment planning", "Laser lithotripsy concepts", "Ureteroscopy principles", "Percutaneous stone management", "Preventing recurrence"],
  },
  {
    title: "4. Uro-Oncology Principles",
    text: "Managing urological cancers requires multidisciplinary collaboration and evidence-based decision making. A fellowship introduces participants to the fundamentals of cancer diagnosis, staging, and treatment planning.",
    items: ["Prostate cancer", "Bladder cancer", "Kidney cancer", "Testicular cancer", "Patient counselling", "Follow-up planning"],
  },
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
              <span>Skills You Will Learn During a Urology Fellowship Course</span>
            </div>

            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">
                Clinical Skills
              </span>
              <span className="text-sm text-text-secondary">⏱️ 8 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Skills You Will Learn During a Urology Fellowship Course
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
                src="/courses/urology.jpg"
                alt="Skills You Will Learn During a Urology Fellowship"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Modern urology is one of the fastest-evolving surgical specialties, with continuous
                advancements in minimally invasive procedures, laser technologies, robotic surgery, and
                evidence-based patient care. While postgraduate training provides a strong clinical
                foundation, many doctors pursue a fellowship to deepen their understanding of complex
                urological conditions and strengthen the skills needed in day-to-day practice.
              </p>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-8">
                <p className="text-lg font-semibold text-primary mb-3">Key Takeaways</p>
                <ul className="space-y-2 text-text-secondary">
                  <li>✓ Skills range from patient assessment and diagnostics to endourology and uro-oncology</li>
                  <li>✓ Case-based learning is central to how clinical judgment is built</li>
                  <li>✓ Communication and shared decision making are taught alongside surgical concepts</li>
                  <li>✓ These competencies apply across hospitals, specialty centres, and private practice</li>
                </ul>
              </div>

              <p className="text-text-secondary leading-relaxed mb-8">
                A structured Urology Fellowship goes beyond textbooks. It combines academic learning, expert
                guidance, and case-based discussions to help doctors develop stronger clinical judgment and
                stay updated with current treatment approaches. This guide walks through the core skills
                gained during a fellowship.
              </p>

              {SKILL_MODULES.map((m) => (
                <div key={m.title}>
                  <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">{m.title}</h2>
                  <p className="text-text-secondary leading-relaxed mb-4">{m.text}</p>
                  <ul className="space-y-2 mb-8">
                    {m.items.map((li) => (
                      <li key={li} className="flex items-start gap-3">
                        <span className="text-secondary text-xl mt-1">✓</span>
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="relative w-full h-56 md:h-72 rounded-xl overflow-hidden my-10">
                <Image
                  src="/courses/urology.jpg"
                  alt="Clinical decision making and case-based learning in a Urology fellowship"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 700px"
                />
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                5. Clinical Decision Making
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                One of the greatest benefits of fellowship education is learning how experienced specialists
                approach complex clinical scenarios. Participants strengthen their ability to:
              </p>
              <ul className="space-y-2 mb-8">
                {["Analyse investigations", "Prioritise treatment options", "Assess surgical risks", "Plan follow-up care", "Discuss multidisciplinary management", "Apply current clinical guidelines"].map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
              <p className="text-text-secondary leading-relaxed mb-8">
                These skills improve confidence in both routine and challenging cases.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                6. Counselling and Shared Decision Making
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Successful urological care depends not only on clinical expertise but also on clear
                communication. During a fellowship, participants learn how to explain diagnoses, discuss
                treatment options, and involve patients in shared decision making.
              </p>
              <ul className="space-y-2 mb-8">
                {["Explaining procedures", "Discussing risks and benefits", "Managing patient expectations", "Supporting informed consent", "Long-term follow-up counselling"].map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                7. Case-Based Clinical Learning
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Case discussions are one of the most valuable aspects of fellowship education. Reviewing
                real clinical scenarios helps participants understand how theoretical knowledge is applied
                in everyday practice. Benefits include improved analytical thinking, better treatment
                planning, exposure to uncommon cases, peer learning, faculty feedback, and evidence-based
                discussions.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                8. Understanding Modern Urology Technologies
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Technology continues to reshape urological practice. A fellowship introduces participants to
                the concepts behind many of these advancements:
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8">
                {["Robotic-assisted surgery", "Laparoscopic techniques", "Laser applications", "Digital imaging", "Artificial intelligence in urology", "Clinical innovations"].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="text-secondary mt-0.5">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                Understanding these developments prepares doctors for the future of urological care.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                How These Skills Support Professional Growth
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                The knowledge gained during a fellowship extends beyond clinical practice. It can also
                contribute to career development by helping doctors build confidence, expand their
                professional network, and stay current with advances in the specialty — supporting
                opportunities in multispecialty hospitals, specialty urology centres, academic institutions,
                clinical research, medical education, and advanced surgical practice.
              </p>

              <div className="bg-primary/5 p-8 rounded-xl mb-8">
                <p className="text-lg leading-relaxed text-text-secondary">
                  A Urology fellowship is more than an academic qualification. It is an opportunity to
                  strengthen clinical reasoning, improve patient care, and stay current with advances in one
                  of the most dynamic surgical specialties.
                </p>
              </div>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Ready to Strengthen Your Clinical Expertise?
                </h3>
                <p className="text-text-secondary mb-6">
                  Explore the Fellowship in Urology at MedFellow Academy and take the next step towards
                  advanced clinical skills.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/courses/fellowship-in-urology" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-center">
                    View Fellowship Details
                  </Link>
                  <Link href="/best-fellowship-course-in-urology" className="inline-block px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all text-center">
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
            <TopicClusterLinks title="Urology Fellowship Resources" links={CLUSTER_LINKS} />
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
              <Link href="/courses/fellowship-in-urology" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">Course</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Fellowship in Urology
                </h3>
                <p className="text-sm text-text-secondary">Explore the curriculum, eligibility, fees, and admission process...</p>
              </Link>
              <Link href="/best-fellowship-course-in-urology" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guide</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Best Fellowship Course in Urology
                </h3>
                <p className="text-sm text-text-secondary">Compare programs and choose the right fellowship for your career...</p>
              </Link>
              <Link href="/blog/how-to-choose-a-urology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  How to Choose a Urology Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Learn the key factors to consider before enrolling...</p>
              </Link>
              <Link href="/blog/career-opportunities-after-a-urology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Career Planning</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Career Opportunities After a Urology Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Discover career pathways after completing fellowship training...</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

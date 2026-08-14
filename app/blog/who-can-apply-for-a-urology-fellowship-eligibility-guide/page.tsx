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
  title: "Who Can Apply for a Urology Fellowship? Eligibility Guide | MedFellow Academy",
  description:
    "Learn who can apply for a Urology fellowship, eligibility criteria, qualifications, career pathways, and how to choose the right program.",
  keywords: "who can apply for a urology fellowship, urology fellowship eligibility, fellowship in urology, urology fellowship for general surgeons, urology fellowship course",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/who-can-apply-for-a-urology-fellowship-eligibility-guide/" },
  openGraph: {
    title: "Who Can Apply for a Urology Fellowship? A Complete Eligibility Guide",
    description:
      "Learn who can apply for a Urology fellowship, eligibility criteria, qualifications, career pathways, and how to choose the right program.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/who-can-apply-for-a-urology-fellowship-eligibility-guide/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Who Can Apply for a Urology Fellowship? Eligibility Guide",
    description: "Eligibility criteria, qualifications, and career pathways.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Who Can Apply for a Urology Fellowship? A Complete Eligibility Guide",
  description:
    "Learn who can apply for a Urology fellowship, eligibility criteria, qualifications, career pathways, and how to choose the right program.",
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
    "@id": "https://www.medfellowacademy.com/blog/who-can-apply-for-a-urology-fellowship-eligibility-guide/",
  },
};

const FAQS = [
  {
    q: "Who is eligible for a Urology fellowship?",
    a: "Most programs are intended for doctors with postgraduate training in General Surgery, such as MS or DNB graduates. Eligibility may vary between institutions.",
  },
  {
    q: "Can a practicing surgeon pursue a fellowship while working?",
    a: "Yes. Many fellowships offer flexible online learning with recorded sessions, making them suitable for working professionals.",
  },
  {
    q: "Is previous Urology experience required?",
    a: "Not necessarily. Some programs are designed to help eligible surgeons build foundational and advanced knowledge in urology.",
  },
  {
    q: "Does eligibility differ between institutions?",
    a: "Yes. Admission criteria may vary, so applicants should always review the official requirements before applying.",
  },
  {
    q: "How long is a typical Urology fellowship?",
    a: "Program duration varies, but many structured fellowships are completed over approximately 12 months.",
  },
  {
    q: "What documents are usually required?",
    a: "Applicants are generally asked to provide proof of their medical qualifications, registration details, identification, and other documents specified by the institution.",
  },
  {
    q: "Is an online Urology fellowship effective?",
    a: "A well-designed online fellowship can provide structured academic learning, faculty interaction, and case-based discussions while allowing doctors to continue practicing.",
  },
  {
    q: "How do I choose the best Urology fellowship?",
    a: "Look for a program that offers a comprehensive curriculum, experienced faculty, flexible learning, academic support, and content that aligns with your career goals.",
  },
];

const CORE_LEARNING_AREAS = [
  "Clinical urology",
  "Endourology",
  "Stone disease management",
  "Uro-oncology",
  "Reconstructive urology",
  "Male infertility",
  "Female urology",
  "Pediatric urology",
  "Urological emergencies",
  "Diagnostic imaging",
  "Clinical case discussions",
  "Evidence-based patient management",
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
              <span>Who Can Apply for a Urology Fellowship? Eligibility Guide</span>
            </div>

            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">
                Fellowship Guides
              </span>
              <span className="text-sm text-text-secondary">⏱️ 7 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Who Can Apply for a Urology Fellowship? A Complete Eligibility Guide
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
                alt="Who Can Apply for a Urology Fellowship - Eligibility Guide"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Choosing a Urology fellowship is an important step for doctors who want to build advanced
                knowledge in diagnosing and managing diseases of the urinary tract and male reproductive
                system. Before comparing curricula, faculty, or learning formats, one of the first questions
                most doctors ask is, &ldquo;Am I eligible for a Urology fellowship?&rdquo;
              </p>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-8">
                <p className="text-lg font-semibold text-primary mb-3">Key Takeaways</p>
                <ul className="space-y-2 text-text-secondary">
                  <li>✓ Most programs expect a General Surgery postgraduate background (MS/DNB)</li>
                  <li>✓ Practicing surgeons and consultants can apply alongside recent graduates</li>
                  <li>✓ Prior urology experience is usually not mandatory</li>
                  <li>✓ Always confirm the specific institution&apos;s admission criteria before applying</li>
                </ul>
              </div>

              <p className="text-text-secondary leading-relaxed mb-8">
                The answer depends on the program and the institution offering it. Some fellowships are
                designed for practicing general surgeons who want structured academic learning, while others
                may be intended for doctors pursuing subspecialty training. If you are planning to advance
                your expertise in endourology, uro-oncology, reconstructive urology, or minimally invasive
                urological care, this guide explains who can apply and what to consider before enrolling.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                What Is the Typical Eligibility for a Urology Fellowship?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Most Urology fellowship programs are intended for doctors with a strong foundation in
                surgical practice. Since urology is a surgical specialty, applicants are generally expected
                to have completed postgraduate training in General Surgery or an equivalent qualification.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "MS in General Surgery",
                  "DNB in General Surgery",
                  "Practicing General Surgeons",
                  "Consultants looking to strengthen their knowledge in Urology",
                  "Doctors preparing for advanced surgical careers",
                ].map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
              <p className="text-text-secondary leading-relaxed mb-8">
                Some institutions may have additional requirements related to work experience, licensing, or
                clinical practice. Always review the admission criteria of the specific fellowship before
                applying.
              </p>

              <div className="relative w-full h-56 md:h-72 rounded-xl overflow-hidden my-10">
                <Image
                  src="/courses/urology.jpg"
                  alt="General surgeons reviewing eligibility for a Urology fellowship"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 700px"
                />
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Who Should Consider a Urology Fellowship?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                A fellowship is suitable for doctors who want to continue learning while expanding their
                clinical capabilities. You may benefit from a Urology fellowship if you:
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Want to build confidence in managing common urological conditions",
                  "Wish to understand minimally invasive urological procedures",
                  "Are interested in endourology or stone disease management",
                  "Want greater exposure to uro-oncology concepts",
                  "Plan to work in multispecialty hospitals",
                  "Intend to enhance your academic profile",
                  "Are preparing for future subspecialty opportunities",
                  "Want flexible learning alongside your current practice",
                ].map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                What Knowledge Does a Urology Fellowship Provide?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Eligibility is only one part of choosing the right program. It is equally important to
                understand what you will learn during the fellowship. Most comprehensive programs include
                academic modules on:
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8">
                {CORE_LEARNING_AREAS.map((a) => (
                  <div key={a} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="text-secondary mt-0.5">✓</span>
                    <span>{a}</span>
                  </div>
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                Rather than focusing on isolated topics, a structured fellowship provides a broader
                understanding of modern urological practice.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Common Eligibility Questions Doctors Ask
              </h2>
              <p className="text-text-secondary leading-relaxed mb-2">
                <strong>Can MBBS graduates apply?</strong> Most Urology fellowship programs are designed for
                doctors who have completed postgraduate surgical training. Eligibility requirements vary by
                institution, so applicants should always verify the program&apos;s admission criteria.
              </p>
              <p className="text-text-secondary leading-relaxed mb-2">
                <strong>Can practicing General Surgeons apply?</strong> Yes. Many fellowship programs are
                specifically designed for practicing surgeons who want to strengthen their knowledge in
                urology while continuing their clinical practice.
              </p>
              <p className="text-text-secondary leading-relaxed mb-2">
                <strong>Can I apply if I already work in a hospital?</strong> Yes. Flexible fellowship
                programs are often developed for working doctors and provide online learning, recorded
                lectures, and weekend academic sessions.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                <strong>Do I need prior Urology experience?</strong> Not always. Some fellowships focus on
                structured academic learning and accept eligible surgeons who want to develop their
                understanding of urology.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                What Should You Look for Before Applying?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Meeting the eligibility criteria is only the first step. Before enrolling, ask yourself:
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Does the curriculum cover modern urology topics?",
                  "Are experienced faculty members involved?",
                  "Is the learning format suitable for working professionals?",
                  "Does the fellowship include clinical case discussions?",
                  "Are recorded lectures available?",
                  "Is there ongoing academic support?",
                  "Does the program align with your long-term career goals?",
                ].map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                How Can a Urology Fellowship Support Your Career?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Continuous medical education plays an important role in career progression. A fellowship
                demonstrates a commitment to staying current with evolving surgical practices and
                evidence-based patient care. Doctors who complete fellowship training often use it to
                strengthen their academic profile, enhance clinical decision making, improve patient
                counselling, expand professional opportunities, prepare for leadership roles, and build
                confidence in managing complex cases.
              </p>

              <div className="bg-primary/5 p-8 rounded-xl mb-8">
                <p className="text-lg leading-relaxed text-text-secondary">
                  Understanding the eligibility requirements is the first step towards choosing the right
                  fellowship. Once you know that your qualifications align with the program, focus on
                  selecting a curriculum that supports your professional goals, strengthens your clinical
                  knowledge, and fits your schedule.
                </p>
              </div>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Ready to Check Your Eligibility?
                </h3>
                <p className="text-text-secondary mb-6">
                  Explore the Fellowship in Urology at MedFellow Academy and check the admission criteria.
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
                <p className="text-sm text-text-secondary">Explore the complete curriculum, fees, and admission process...</p>
              </Link>
              <Link href="/best-fellowship-course-in-urology" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guide</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Best Fellowship Course in Urology
                </h3>
                <p className="text-sm text-text-secondary">Compare features and choose the right fellowship...</p>
              </Link>
              <Link href="/blog/how-to-choose-a-urology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  How to Choose a Urology Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Learn how to compare fellowship programs with confidence...</p>
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

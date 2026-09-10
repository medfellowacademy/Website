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
  title: "Who Can Apply for a Urology Fellowship? Eligibility Guide | MedFellow",
  description:
    "A complete eligibility guide for the urology fellowship — typical qualifications, who benefits most, required documents, and what to check before applying.",
  keywords:
    "urology fellowship eligibility, who can apply for urology fellowship, urology fellowship after MS, urology fellowship requirements, fellowship in urology",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/who-can-apply-for-a-urology-fellowship-eligibility-guide/" },
  openGraph: {
    title: "Who Can Apply for a Urology Fellowship? Eligibility Guide",
    description: "Typical qualifications, who benefits most, required documents, and what to check before applying.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/who-can-apply-for-a-urology-fellowship-eligibility-guide/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: { card: "summary_large_image", title: "Who Can Apply for a Urology Fellowship?", description: "An eligibility guide for the urology fellowship." },
};

const FAQS = [
  { q: "Who is eligible for a urology fellowship?", a: "Most programs are intended for doctors with postgraduate training in General Surgery, such as MS or DNB graduates, and practising general surgeons. Eligibility may vary between institutions, so always check the official criteria." },
  { q: "Can MBBS graduates apply?", a: "Most urology fellowship programs are designed for doctors who have completed postgraduate surgical training. Requirements vary by institution, so verify the program's admission criteria before applying." },
  { q: "Can a practising surgeon pursue a fellowship while working?", a: "Yes. Many fellowships offer flexible online learning with recorded sessions and weekend classes, making them suitable for working professionals." },
  { q: "Is previous urology experience required?", a: "Not necessarily. Some programs are designed to help eligible surgeons build foundational and advanced knowledge in urology through structured academic learning." },
  { q: "Does eligibility differ between institutions?", a: "Yes. Admission criteria may vary, so applicants should always review the official requirements before applying." },
  { q: "How long is a typical urology fellowship?", a: "Program duration varies, but many structured fellowships are designed to be completed over approximately 12 months." },
  { q: "What documents are usually required?", a: "Applicants are generally asked for proof of medical qualifications, registration details, identification, and other documents specified by the institution." },
  { q: "How do I choose the best urology fellowship?", a: "Look for a comprehensive curriculum, experienced faculty, flexible learning, ongoing academic support, and content aligned with your career goals." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Who Can Apply for a Urology Fellowship? A Complete Eligibility Guide",
  description: "Typical eligibility, who benefits most, and what to check before applying for a urology fellowship.",
  image: "https://www.medfellowacademy.com/courses/urology.jpg",
  datePublished: "2026-09-10",
  dateModified: "2026-09-10",
  author: { "@type": "Organization", name: "MedFellow Academy" },
  publisher: { "@type": "Organization", name: "MedFellow Academy", logo: { "@type": "ImageObject", url: "https://www.medfellowacademy.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.medfellowacademy.com/blog/who-can-apply-for-a-urology-fellowship-eligibility-guide/" },
};

const QUALIFICATIONS = ["MS in General Surgery", "DNB in General Surgery", "Practising general surgeons", "Consultants strengthening their knowledge in urology", "Doctors preparing for advanced surgical careers"];
const BENEFIT_IF = [
  "You want to build confidence in managing common urological conditions",
  "You wish to understand minimally invasive urological procedures",
  "You are interested in endourology or stone disease management",
  "You want more exposure to uro-oncology concepts",
  "You plan to work in multispecialty hospitals",
  "You intend to enhance your academic profile",
  "You are preparing for future subspecialty opportunities",
  "You want flexible learning alongside your current practice",
];
const CORE_AREAS = ["Clinical urology", "Endourology", "Stone disease management", "Uro-oncology", "Reconstructive urology", "Male infertility", "Female urology", "Pediatric urology", "Urological emergencies", "Diagnostic imaging", "Clinical case discussions", "Evidence-based patient management"];
const BEFORE_APPLY = [
  "Does the curriculum cover modern urology topics?",
  "Are experienced faculty members involved?",
  "Is the learning format suitable for working professionals?",
  "Does the fellowship include clinical case discussions?",
  "Are recorded lectures available?",
  "Is there ongoing academic support?",
  "Does the program align with your long-term career goals?",
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
              <Link href="/" className="hover:text-primary">Home</Link><span>/</span>
              <Link href="/blog" className="hover:text-primary">Blog</Link><span>/</span>
              <span>Who Can Apply for a Urology Fellowship?</span>
            </div>
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">Fellowship Guides</span>
              <span className="text-sm text-text-secondary">⏱️ 8 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Who Can Apply for a Urology Fellowship? A Complete Eligibility Guide</h1>
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">MA</div>
                <div><p className="font-semibold text-primary">Med Fellow Academy</p><p className="text-sm text-text-secondary">Medical Education Experts</p></div>
              </div>
            </div>
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10">
              <Image src="/courses/urology.jpg" alt="Who Can Apply for a Urology Fellowship" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Before comparing curricula, faculty, or learning formats, most doctors ask a simpler question
                first: <em>&quot;Am I eligible for a urology fellowship?&quot;</em> The answer depends on the
                program and the institution. Some fellowships are built for practising general surgeons who want
                structured academic learning; others target doctors pursuing subspecialty training. Understanding
                the criteria early helps you choose a fellowship that fits your qualifications and goals.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Typical Eligibility for a Urology Fellowship</h2>
              <p className="text-text-secondary leading-relaxed mb-4">Because urology is a surgical specialty, applicants are generally expected to have completed postgraduate training in General Surgery or an equivalent qualification. Commonly accepted backgrounds include:</p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-6 not-prose">
                {QUALIFICATIONS.map((t) => (<div key={t} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary"><span className="text-secondary mt-0.5">✓</span><span>{t}</span></div>))}
              </div>
              <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg mb-8 not-prose">
                <p className="text-sm text-text-secondary leading-relaxed">Some institutions add requirements related to work experience, licensing, or clinical practice. Always review the admission criteria of the specific fellowship before applying.</p>
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Who Benefits Most</h2>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 not-prose">
                {BENEFIT_IF.map((t) => (<div key={t} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary"><span className="text-secondary mt-0.5">✓</span><span>{t}</span></div>))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">What a Urology Fellowship Covers</h2>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 not-prose">
                {CORE_AREAS.map((t) => (<div key={t} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary"><span className="text-secondary mt-0.5">✓</span><span>{t}</span></div>))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">Rather than isolated topics, a structured fellowship provides a broader understanding of modern urological practice.</p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">What to Check Before You Apply</h2>
              <div className="space-y-2 mb-8 not-prose">
                {BEFORE_APPLY.map((c) => (<div key={c} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary"><span className="text-secondary mt-0.5">✓</span><span>{c}</span></div>))}
              </div>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Check Your Eligibility</h3>
                <p className="text-text-secondary mb-6">Explore the MedFellow Academy Fellowship in Urology curriculum and confirm the current eligibility criteria before you apply.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/courses/fellowship-in-urology" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-center">View Fellowship Details</Link>
                  <Link href="/best-fellowship-course-in-urology" className="inline-block px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all text-center">Read the Full Guide</Link>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-2xl shrink-0">MF</div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-primary mb-2">About Med Fellow Academy</h3>
                  <p className="text-text-secondary mb-4">MedFellow Academy provides structured, flexible fellowship courses for practising doctors — combining an evidence-based curriculum, expert faculty mentorship, and case-based clinical learning across a wide range of specialties.</p>
                  <div className="flex gap-4"><Link href="/courses" className="text-secondary font-semibold hover:text-primary">View Our Courses →</Link><Link href="/blog" className="text-secondary font-semibold hover:text-primary">More Articles →</Link></div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1"><TopicClusterLinks title="Urology Resources" links={CLUSTER_LINKS} /></div>
          </div>
        </div>
      </article>
      <FAQ faqs={FAQS} />
      <section className="section-padding bg-background">
        <div className="container-custom"><div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-primary mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/best-fellowship-course-in-urology" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">Fellowship Guide</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Best Fellowship Course in Urology</h3>
              <p className="text-sm text-text-secondary">A complete guide to curriculum, learning format, eligibility, and career pathways...</p>
            </Link>
            <Link href="/blog/how-to-choose-a-urology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">How to Choose a Urology Fellowship</h3>
              <p className="text-sm text-text-secondary">Compare curriculum, faculty, format, and career support before enrolling...</p>
            </Link>
            <Link href="/blog/questions-to-ask-before-joining-a-urology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Questions to Ask Before Joining a Urology Fellowship</h3>
              <p className="text-sm text-text-secondary">The questions every doctor should ask before applying...</p>
            </Link>
            <Link href="/blog/career-opportunities-after-a-urology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Career Planning</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Career Opportunities After a Urology Fellowship</h3>
              <p className="text-sm text-text-secondary">Specialist career pathways after completing fellowship training...</p>
            </Link>
          </div>
        </div></div>
      </section>
      <Footer />
    </div>
  );
}

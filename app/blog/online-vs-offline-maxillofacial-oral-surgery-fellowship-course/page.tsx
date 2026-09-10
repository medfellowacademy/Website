import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import TopicClusterLinks from "@/components/TopicClusterLinks";
import Link from "next/link";
import Image from "next/image";

const CLUSTER_LINKS = [
  { label: "Best Fellowship Course in Maxillofacial & Oral Surgery (Guide)", href: "/courses/best-fellowship-course-in-maxillofacial-oral-surgery", type: "guide" as const },
  { label: "How to Choose a Maxillofacial & Oral Surgery Fellowship", href: "/blog/how-to-choose-a-maxillofacial-oral-surgery-fellowship-course", type: "blog" as const },
  { label: "Questions to Ask Before Joining a Maxillofacial & Oral Surgery Fellowship", href: "/blog/questions-to-ask-before-joining-a-maxillofacial-oral-surgery-fellowship", type: "blog" as const },
  { label: "Online vs Offline Maxillofacial & Oral Surgery Fellowship", href: "/blog/online-vs-offline-maxillofacial-oral-surgery-fellowship-course", type: "blog" as const },
  { label: "Is a Maxillofacial & Oral Surgery Fellowship Worth It?", href: "/blog/is-maxillofacial-oral-surgery-fellowship-worth-it", type: "blog" as const },
  { label: "Can BDS Doctors Pursue a Maxillofacial & Oral Surgery Fellowship?", href: "/blog/maxillofacial-oral-surgery-fellowship-after-md-obg", type: "blog" as const },
];

export const metadata: Metadata = {
  title: "Online vs Offline Maxillofacial & Oral Surgery Fellowship | MedFellow",
  description:
    "Compare online, offline and hybrid maxillofacial & oral surgery fellowship formats — structure, faculty interaction, clinical exposure, cost and what matters for working specialists.",
  keywords:
    "online maxillofacial & oral surgery fellowship, offline maxillofacial fellowship, hybrid maxillofacial fellowship, maxillofacial fellowship course, oral surgery fellowship",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/online-vs-offline-maxillofacial-oral-surgery-fellowship-course/" },
  openGraph: {
    title: "Online vs Offline Maxillofacial & Oral Surgery Fellowship",
    description: "Structure, faculty interaction, clinical exposure, cost and what matters for working specialists.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/online-vs-offline-maxillofacial-oral-surgery-fellowship-course/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: { card: "summary_large_image", title: "Online vs Offline Maxillofacial & Oral Surgery Fellowship", description: "Compare fellowship learning formats for oral surgeons." },
};

const FAQS = [
  { q: "Is an online Maxillofacial & Oral Surgery fellowship respected?", a: "A structured online fellowship from a recognised institution with a comprehensive curriculum and experienced faculty can provide valuable academic learning for practising specialists." },
  { q: "Can I continue my dental practice while studying online?", a: "Yes. This is one of the biggest advantages of online fellowships — most participants continue their clinical work while studying." },
  { q: "Will I miss practical learning in an online fellowship?", a: "Many online fellowships include detailed clinical case discussions, treatment planning exercises, and optional clinical attachments depending on the program." },
  { q: "Which is more affordable: online or offline fellowships?", a: "Online programs often reduce additional costs such as travel, accommodation, and time away from practice, making them more cost-effective overall." },
  { q: "Which fellowship is better for experienced oral surgeons?", a: "Experienced specialists who want to upgrade their knowledge while continuing practice often prefer flexible online fellowship programs." },
  { q: "Is an online fellowship suitable for hospital consultants?", a: "Yes. Many hospital-based consultants choose online programs because they fit around busy clinical schedules." },
  { q: "Does learning online affect career growth?", a: "Career growth depends more on the quality of learning, practical application, and professional development than on whether the program is delivered online or offline." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Online vs Offline Maxillofacial & Oral Surgery Fellowship",
  description: "A comparison of online, offline and hybrid maxillofacial and oral surgery fellowship formats.",
  image: "https://www.medfellowacademy.com/courses/maxillofacial.jpg",
  datePublished: "2026-09-10",
  dateModified: "2026-09-10",
  author: { "@type": "Organization", name: "MedFellow Academy" },
  publisher: { "@type": "Organization", name: "MedFellow Academy", logo: { "@type": "ImageObject", url: "https://www.medfellowacademy.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.medfellowacademy.com/blog/online-vs-offline-maxillofacial-oral-surgery-fellowship-course/" },
};

const ONLINE = ["Live interactive classes", "Recorded lectures", "Structured learning modules", "Clinical case discussions", "Faculty mentorship", "Assignments and assessments", "Evidence-based curriculum", "Flexible study schedule"];
const OFFLINE = ["Face-to-face lectures", "Clinical demonstrations", "Direct interaction with faculty", "Hospital exposure", "Surgical observations", "Fixed academic schedules"];
const ONLINE_BENEFITS = ["Learn while maintaining clinical practice", "Study from any location", "Revisit recorded sessions", "Lower overall expenses", "Better work-life balance", "Access to experienced faculty", "Immediate application in daily practice"];
const OFFLINE_BENEFITS = ["Direct hospital exposure", "Face-to-face faculty interaction", "In-person peer networking", "Live surgical observation", "Campus-based learning experience"];
const LOOK_FOR = ["Structured curriculum", "Experienced faculty", "Evidence-based teaching", "Clinical case discussions", "Flexible learning support", "Assessment methods", "Certification", "Alumni outcomes", "Academic mentoring", "Career guidance"];

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
              <span>Online vs Offline Maxillofacial &amp; Oral Surgery Fellowship</span>
            </div>
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">Fellowship Guides</span>
              <span className="text-sm text-text-secondary">⏱️ 8 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Online vs Offline Maxillofacial &amp; Oral Surgery Fellowship</h1>
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">MA</div>
                <div><p className="font-semibold text-primary">Med Fellow Academy</p><p className="text-sm text-text-secondary">Medical Education Experts</p></div>
              </div>
            </div>
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10">
              <Image src="/courses/maxillofacial.jpg" alt="Online vs Offline Maxillofacial and Oral Surgery Fellowship" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Many oral and maxillofacial surgeons wonder whether an online fellowship provides the same
                academic value as a classroom-based program. The answer depends on your career goals, clinical
                responsibilities, learning style, and the quality of the program. Today&apos;s online fellowships
                have evolved well beyond recorded lectures — structured curricula, live faculty sessions,
                case-based discussion, assessments, mentorship, and optional clinical observerships.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">What an Online Fellowship Includes</h2>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 not-prose">
                {ONLINE.map((t) => (<div key={t} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary"><span className="text-secondary mt-0.5">✓</span><span>{t}</span></div>))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">What an Offline Fellowship Includes</h2>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 not-prose">
                {OFFLINE.map((t) => (<div key={t} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary"><span className="text-secondary mt-0.5">✓</span><span>{t}</span></div>))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">Offline learning may suit professionals who can dedicate full-time or extended periods to training, but it often requires relocation, travel, or leave from clinical work.</p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Benefits of an Online Fellowship</h2>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 not-prose">
                {ONLINE_BENEFITS.map((t) => (<div key={t} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary"><span className="text-secondary mt-0.5">✓</span><span>{t}</span></div>))}
              </div>
              <h2 className="text-3xl font-heading font-bold text-primary mt-8 mb-6">Advantages of an Offline Fellowship</h2>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 not-prose">
                {OFFLINE_BENEFITS.map((t) => (<div key={t} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary"><span className="text-secondary mt-0.5">✓</span><span>{t}</span></div>))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">What to Look for in Any Fellowship</h2>
              <div className="space-y-2 mb-8 not-prose">
                {LOOK_FOR.map((c) => (<div key={c} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary"><span className="text-secondary mt-0.5">✓</span><span>{c}</span></div>))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">The quality of the curriculum matters more than whether the lectures are delivered online or in person. For many practising specialists, a structured online fellowship provides the right balance between professional responsibilities and continued education.</p>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Advance Your Career Without a Career Break</h3>
                <p className="text-text-secondary mb-6">Explore the MedFellow Academy Fellowship in Maxillofacial &amp; Oral Surgery — flexible, structured, and evidence-based for practising specialists.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/courses/fellowship-in-maxillofacial-oral-surgery" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-center">View Fellowship Details</Link>
                  <Link href="/courses/best-fellowship-course-in-maxillofacial-oral-surgery" className="inline-block px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all text-center">Read the Full Guide</Link>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-2xl shrink-0">MF</div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-primary mb-2">About Med Fellow Academy</h3>
                  <p className="text-text-secondary mb-4">MedFellow Academy provides structured, flexible fellowship courses for practising doctors and dentists — combining an evidence-based curriculum, expert faculty mentorship, and case-based clinical learning across a wide range of specialties.</p>
                  <div className="flex gap-4"><Link href="/courses" className="text-secondary font-semibold hover:text-primary">View Our Courses →</Link><Link href="/blog" className="text-secondary font-semibold hover:text-primary">More Articles →</Link></div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1"><TopicClusterLinks title="Maxillofacial & Oral Surgery Resources" links={CLUSTER_LINKS} /></div>
          </div>
        </div>
      </article>
      <FAQ faqs={FAQS} />
      <section className="section-padding bg-background">
        <div className="container-custom"><div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-primary mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/courses/best-fellowship-course-in-maxillofacial-oral-surgery" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">Fellowship Guide</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Best Fellowship Course in Maxillofacial &amp; Oral Surgery</h3>
              <p className="text-sm text-text-secondary">A complete guide to curriculum, learning format, eligibility, and career pathways...</p>
            </Link>
            <Link href="/blog/how-to-choose-a-maxillofacial-oral-surgery-fellowship-course" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">How to Choose a Maxillofacial &amp; Oral Surgery Fellowship</h3>
              <p className="text-sm text-text-secondary">The most important factors to consider before enrolling...</p>
            </Link>
            <Link href="/blog/is-maxillofacial-oral-surgery-fellowship-worth-it" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Career Planning</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Is a Maxillofacial &amp; Oral Surgery Fellowship Worth It?</h3>
              <p className="text-sm text-text-secondary">The benefits, limitations, and factors to consider before enrolling...</p>
            </Link>
            <Link href="/blog/questions-to-ask-before-joining-a-maxillofacial-oral-surgery-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Questions to Ask Before Joining a Maxillofacial &amp; Oral Surgery Fellowship</h3>
              <p className="text-sm text-text-secondary">The questions every specialist should ask before applying...</p>
            </Link>
          </div>
        </div></div>
      </section>
      <Footer />
    </div>
  );
}

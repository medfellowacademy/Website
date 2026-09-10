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
  title: "How to Choose a Maxillofacial & Oral Surgery Fellowship | MedFellow",
  description:
    "How to choose a maxillofacial & oral surgery fellowship — define career goals, review the curriculum, evaluate faculty, check the learning format, case-based teaching and certification.",
  keywords:
    "how to choose a maxillofacial & oral surgery fellowship, maxillofacial surgery fellowship, oral surgery fellowship course, online maxillofacial fellowship, best maxillofacial fellowship",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/how-to-choose-a-maxillofacial-oral-surgery-fellowship-course/" },
  openGraph: {
    title: "How to Choose a Maxillofacial & Oral Surgery Fellowship",
    description: "Career goals, curriculum, faculty, learning format, case-based teaching and certification.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/how-to-choose-a-maxillofacial-oral-surgery-fellowship-course/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: { card: "summary_large_image", title: "How to Choose a Maxillofacial & Oral Surgery Fellowship", description: "How to evaluate an oral surgery fellowship before enrolling." },
};

const FAQS = [
  { q: "How do I know if a Maxillofacial & Oral Surgery Fellowship is good?", a: "Look for a structured curriculum, experienced faculty, case-based learning, flexible delivery, academic mentorship, and learning outcomes that match your career goals." },
  { q: "Is an online fellowship effective for surgeons?", a: "A well-designed online fellowship provides theoretical knowledge, case discussions, and expert guidance while allowing participants to continue clinical practice. Procedural competency needs supervised clinical training." },
  { q: "Should I choose a short course or a fellowship?", a: "If your goal is long-term professional development and deeper clinical understanding, a fellowship generally offers a more comprehensive experience than a short course." },
  { q: "Does faculty experience matter?", a: "Yes. Faculty with extensive clinical and academic experience provide valuable insight into complex surgical cases and current best practice." },
  { q: "How important are clinical case discussions?", a: "They help participants understand treatment planning, complication management, and clinical reasoning — one of the most valuable components of fellowship education." },
  { q: "Can I pursue a fellowship while working full time?", a: "Yes. Many programs are designed with flexible schedules, recorded lectures, and weekend sessions for practising professionals." },
  { q: "What should I compare before enrolling?", a: "Compare curriculum, faculty, flexibility, learning resources, mentorship, certification, duration, and overall educational value instead of focusing only on fees." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Choose a Maxillofacial & Oral Surgery Fellowship",
  description: "The most important factors to consider before enrolling in a maxillofacial and oral surgery fellowship.",
  image: "https://www.medfellowacademy.com/courses/maxillofacial.jpg",
  datePublished: "2026-09-10",
  dateModified: "2026-09-10",
  author: { "@type": "Organization", name: "MedFellow Academy" },
  publisher: { "@type": "Organization", name: "MedFellow Academy", logo: { "@type": "ImageObject", url: "https://www.medfellowacademy.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.medfellowacademy.com/blog/how-to-choose-a-maxillofacial-oral-surgery-fellowship-course/" },
};

const FACTORS = [
  { title: "Define your career objectives", text: "Decide what you want over the next five to ten years — hospital consultant, expanded private surgical practice, implant surgery depth, facial trauma expertise, academic work, or modern digital workflows — and match the fellowship to those goals." },
  { title: "Review the curriculum carefully", text: "Look for structured learning in oral surgical principles, maxillofacial trauma, dental implant concepts, oral pathology, TMJ disorders, reconstructive surgery, CBCT interpretation, digital planning, surgical complications, and multidisciplinary care." },
  { title: "Evaluate faculty and mentorship", text: "Look for experienced, actively practising oral and maxillofacial surgeons, regular academic interaction, clinical case discussions, evidence-based teaching, and mentorship throughout." },
  { title: "Consider the learning format", text: "Ask whether lectures are recorded, whether classes are on weekends, whether you can study while practising, whether support is available outside sessions, and whether optional clinical exposure is included." },
  { title: "Look for case-based discussions", text: "Case presentations, treatment planning, radiographic interpretation, surgical decision making, complication management, and interactive discussion turn concepts into practice." },
  { title: "Understand the certification", text: "Verify who issues the certificate, whether the curriculum is structured, whether there are defined learning outcomes and assessments, and whether it supports professional development." },
  { title: "Compare total value, not just fees", text: "Weigh curriculum quality, faculty expertise, duration, flexibility, clinical discussions, student support, learning resources, and career guidance together." },
];

const MISTAKES = ["Course fees alone", "Marketing claims", "Social media advertisements", "Certificate design", "Course duration alone"];

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
              <span>How to Choose a Maxillofacial &amp; Oral Surgery Fellowship</span>
            </div>
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">Fellowship Guides</span>
              <span className="text-sm text-text-secondary">⏱️ 9 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">How to Choose a Maxillofacial &amp; Oral Surgery Fellowship</h1>
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">MA</div>
                <div><p className="font-semibold text-primary">Med Fellow Academy</p><p className="text-sm text-text-secondary">Medical Education Experts</p></div>
              </div>
            </div>
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10">
              <Image src="/courses/maxillofacial.jpg" alt="How to Choose a Maxillofacial and Oral Surgery Fellowship" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Choosing a fellowship is one of the most important career decisions after postgraduate dental
                education. A good fellowship should do more than add a certificate — it should improve your
                clinical knowledge, strengthen decision making, and prepare you for the evolving demands of oral
                and maxillofacial surgery. This guide covers the factors that actually matter.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">7 Factors to Weigh Before You Enrol</h2>
              <div className="space-y-4 mb-8 not-prose">
                {FACTORS.map((s, i) => (
                  <div key={s.title} className="card p-5">
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#15401E] text-white text-[0.8125rem] font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                      <div><h3 className="text-[1rem] font-bold text-primary mb-1">{s.title}</h3><p className="text-sm text-text-secondary leading-relaxed">{s.text}</p></div>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Mistakes to Avoid</h2>
              <p className="text-text-secondary leading-relaxed mb-3">Don&apos;t choose a fellowship based only on:</p>
              <div className="space-y-2 mb-8 not-prose">
                {MISTAKES.map((c) => (<div key={c} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary"><span className="text-secondary mt-0.5">✓</span><span>{c}</span></div>))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">Focus instead on educational quality, structured learning, faculty experience, and long-term professional development.</p>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Find the Right Fellowship for Your Goals</h3>
                <p className="text-text-secondary mb-6">Explore the MedFellow Academy Fellowship in Maxillofacial &amp; Oral Surgery and review the curriculum, faculty, and learning format.</p>
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
            <Link href="/blog/questions-to-ask-before-joining-a-maxillofacial-oral-surgery-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Questions to Ask Before Joining a Maxillofacial &amp; Oral Surgery Fellowship</h3>
              <p className="text-sm text-text-secondary">The questions every specialist should ask before applying...</p>
            </Link>
            <Link href="/blog/online-vs-offline-maxillofacial-oral-surgery-fellowship-course" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Online vs Offline Maxillofacial &amp; Oral Surgery Fellowship</h3>
              <p className="text-sm text-text-secondary">Compare learning formats to find the option that fits your schedule...</p>
            </Link>
            <Link href="/blog/is-maxillofacial-oral-surgery-fellowship-worth-it" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Career Planning</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Is a Maxillofacial &amp; Oral Surgery Fellowship Worth It?</h3>
              <p className="text-sm text-text-secondary">The benefits, limitations, and factors to consider before enrolling...</p>
            </Link>
          </div>
        </div></div>
      </section>
      <Footer />
    </div>
  );
}

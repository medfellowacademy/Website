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
  title: "Can BDS Doctors Pursue a Fellowship in Maxillofacial & Oral Surgery? | MedFellow",
  description:
    "Eligibility for a maxillofacial & oral surgery fellowship for BDS graduates — the standard BDS → MDS pathway, where a fellowship fits, and what to check before applying.",
  keywords:
    "maxillofacial & oral surgery fellowship for BDS, can BDS do maxillofacial surgery, oral surgery fellowship after BDS, maxillofacial surgery course for BDS, fellowship in maxillofacial surgery",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/maxillofacial-oral-surgery-fellowship-after-md-obg/" },
  openGraph: {
    title: "Can BDS Doctors Pursue a Fellowship in Maxillofacial & Oral Surgery?",
    description: "The standard BDS → MDS pathway, where a fellowship fits, and what to check before applying.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/maxillofacial-oral-surgery-fellowship-after-md-obg/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: { card: "summary_large_image", title: "Can BDS Doctors Pursue a Maxillofacial & Oral Surgery Fellowship?", description: "Eligibility and pathways for dental graduates." },
};

const FAQS = [
  { q: "Can a BDS graduate join a Maxillofacial & Oral Surgery fellowship?", a: "Some academic fellowship programs may accept BDS graduates, while others are intended for MDS-qualified specialists. Always check the eligibility criteria of the specific program." },
  { q: "Can a fellowship make me an Oral and Maxillofacial Surgeon?", a: "No. A fellowship does not replace the MDS qualification required to become an Oral and Maxillofacial Surgeon." },
  { q: "Should I complete MDS before pursuing a fellowship?", a: "For specialist OMFS practice, completing MDS is the standard pathway. Fellowship training is generally pursued after or alongside specialist education, depending on program eligibility." },
  { q: "Is a fellowship useful after BDS?", a: "If you meet the eligibility criteria, a fellowship can help expand your knowledge in focused areas and support professional development. It should be viewed as complementary to, not a substitute for, specialist training." },
  { q: "Does a fellowship improve clinical knowledge?", a: "Yes. A well-designed fellowship can enhance theoretical understanding, clinical reasoning, and exposure to advanced concepts, depending on the curriculum." },
  { q: "What should I check before applying?", a: "Review the eligibility criteria, curriculum, faculty, learning format, assessment methods, certification, and whether the program aligns with your career goals." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Can BDS Doctors Pursue a Fellowship in Maxillofacial & Oral Surgery?",
  description: "Eligibility for a maxillofacial and oral surgery fellowship for BDS graduates and where a fellowship fits alongside MDS training.",
  image: "https://www.medfellowacademy.com/courses/maxillofacial.jpg",
  datePublished: "2026-09-10",
  dateModified: "2026-09-10",
  author: { "@type": "Organization", name: "MedFellow Academy" },
  publisher: { "@type": "Organization", name: "MedFellow Academy", logo: { "@type": "ImageObject", url: "https://www.medfellowacademy.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.medfellowacademy.com/blog/maxillofacial-oral-surgery-fellowship-after-md-obg/" },
};

const PATHWAY = ["Complete BDS", "Clear NEET MDS", "Pursue MDS in Oral & Maxillofacial Surgery", "Consider a fellowship for advanced skills after or alongside specialist training, where eligible"];
const AFTER_MDS = ["Advanced implantology", "Facial trauma", "Digital surgical planning", "Reconstructive techniques", "Hospital-based oral surgery", "Complex case discussions"];
const GROWTH = ["Strengthen clinical decision making", "Learn from experienced faculty", "Understand evidence-based treatment planning", "Improve confidence with complex cases", "Stay updated with advances in oral surgery", "Continue learning while maintaining professional commitments"];
const CHECK = ["Eligibility requirements", "Curriculum depth", "Faculty experience", "Case-based learning", "Flexibility for working professionals", "Academic support", "Certification", "Clinical exposure, if offered", "Alumni feedback"];

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
              <span>Can BDS Doctors Pursue a Maxillofacial &amp; Oral Surgery Fellowship?</span>
            </div>
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">Fellowship Guides</span>
              <span className="text-sm text-text-secondary">⏱️ 7 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Can BDS Doctors Pursue a Fellowship in Maxillofacial &amp; Oral Surgery?</h1>
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">MA</div>
                <div><p className="font-semibold text-primary">Med Fellow Academy</p><p className="text-sm text-text-secondary">Medical Education Experts</p></div>
              </div>
            </div>
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10">
              <Image src="/courses/maxillofacial.jpg" alt="Can BDS Doctors Pursue a Fellowship in Maxillofacial and Oral Surgery" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg mb-8 not-prose">
                <p className="text-sm text-text-secondary leading-relaxed">
                  <strong>Important:</strong> In India, becoming an Oral and Maxillofacial Surgeon typically
                  requires BDS followed by MDS in Oral and Maxillofacial Surgery. A fellowship is an advanced
                  training program and does not replace the MDS qualification required to practise as an OMFS
                  specialist.
                </p>
              </div>

              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                If you are a BDS graduate interested in oral surgery, the usual pathway runs through specialist
                training. Some fellowship or certificate programs may accept BDS graduates for focused academic
                learning, but eligibility varies by institution — always review the specific admission criteria
                before applying.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">The Usual Pathway</h2>
              <div className="space-y-2 mb-8 not-prose">
                {PATHWAY.map((c, i) => (
                  <div key={c} className="flex items-start gap-3 text-[0.9375rem] text-text-secondary">
                    <span className="w-6 h-6 rounded-full bg-[#e8f2ea] text-[#15401E] text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                    <span>{c}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Where a Fellowship Fits</h2>
              <p className="text-text-secondary leading-relaxed mb-3">After specialist education, many dentists choose a fellowship to deepen knowledge in areas such as:</p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 not-prose">
                {AFTER_MDS.map((t) => (<div key={t} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary"><span className="text-secondary mt-0.5">✓</span><span>{t}</span></div>))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">How a Fellowship Supports Professional Growth</h2>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 not-prose">
                {GROWTH.map((t) => (<div key={t} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary"><span className="text-secondary mt-0.5">✓</span><span>{t}</span></div>))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">How to Select the Right Fellowship</h2>
              <div className="space-y-2 mb-8 not-prose">
                {CHECK.map((c) => (<div key={c} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary"><span className="text-secondary mt-0.5">✓</span><span>{c}</span></div>))}
              </div>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Check Eligibility and Curriculum</h3>
                <p className="text-text-secondary mb-6">Explore the MedFellow Academy Fellowship in Maxillofacial &amp; Oral Surgery and confirm the current eligibility criteria before you apply.</p>
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
            <Link href="/blog/questions-to-ask-before-joining-a-maxillofacial-oral-surgery-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Questions to Ask Before Joining a Maxillofacial &amp; Oral Surgery Fellowship</h3>
              <p className="text-sm text-text-secondary">The questions every specialist should ask before applying...</p>
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

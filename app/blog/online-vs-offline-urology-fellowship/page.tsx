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
  title: "Online vs Offline Urology Fellowship | MedFellow",
  description:
    "Compare online, offline and hybrid urology fellowship formats — structure, faculty interaction, clinical exposure, flexibility and what matters most for working surgeons.",
  keywords:
    "online urology fellowship, offline urology fellowship, hybrid urology fellowship, online vs offline urology fellowship, urology fellowship course",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/online-vs-offline-urology-fellowship/" },
  openGraph: {
    title: "Online vs Offline Urology Fellowship",
    description: "Compare online, offline and hybrid urology fellowship formats and decide which fits your schedule and goals.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/online-vs-offline-urology-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: { card: "summary_large_image", title: "Online vs Offline Urology Fellowship", description: "Compare urology fellowship learning formats." },
};

const FAQS = [
  { q: "Is an online urology fellowship effective?", a: "Yes. A well-designed online fellowship provides comprehensive academic learning through live sessions, recorded lectures, and clinical case discussions while allowing doctors to continue working." },
  { q: "Which is better: an online or offline urology fellowship?", a: "It depends on your professional commitments and learning preferences. Working doctors often choose online fellowships for flexibility; others prefer classroom-based learning if they can commit full time." },
  { q: "Can I continue my hospital practice during an online fellowship?", a: "Yes. Most online fellowship programs are designed to fit around the schedules of practising doctors, with weekend sessions and recorded lectures." },
  { q: "Do online fellowships include faculty interaction?", a: "Many programs offer live classes, question-and-answer sessions, and case discussions with experienced faculty." },
  { q: "What should I look for before enrolling?", a: "Review the curriculum, faculty, learning format, academic support, flexibility, certification, and whether the fellowship aligns with your career goals." },
  { q: "Does an online fellowship provide clinical knowledge?", a: "Yes. Many online programs use case-based discussions, evidence-based learning, and expert-led sessions to strengthen clinical decision making. Procedural competency still needs supervised clinical exposure." },
  { q: "Is an offline fellowship always better?", a: "Not necessarily. The quality of the curriculum, faculty, and academic support often matters more than the learning format alone." },
  { q: "Which fellowship is better for doctors planning to work abroad?", a: "Choose a program with a structured curriculum, clear certification, and learning aligned with current evidence-based urological practice." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Online vs Offline Urology Fellowship",
  description: "A comparison of online, offline and hybrid urology fellowship formats for practising surgeons.",
  image: "https://www.medfellowacademy.com/courses/urology.jpg",
  datePublished: "2026-09-10",
  dateModified: "2026-09-10",
  author: { "@type": "Organization", name: "MedFellow Academy" },
  publisher: { "@type": "Organization", name: "MedFellow Academy", logo: { "@type": "ImageObject", url: "https://www.medfellowacademy.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.medfellowacademy.com/blog/online-vs-offline-urology-fellowship/" },
};

const ONLINE_FEATURES = ["Live expert sessions", "Recorded lectures for revision", "Case-based discussions", "Faculty interaction", "Digital assessments", "Flexible study schedules"];
const OFFLINE_FEATURES = ["Face-to-face lectures", "Clinical observations", "Hospital rounds", "Direct faculty interaction", "On-site assessments", "Structured classroom learning"];

const COMPARE_ROWS = [
  { factor: "Flexibility", online: "High — study evenings and weekends", offline: "Fixed schedule; may need leave or relocation" },
  { factor: "Continuing practice", online: "Designed around clinical duties", offline: "Often requires a career break" },
  { factor: "Faculty access", online: "Live sessions, Q&A, case discussions", offline: "In-person, ward-based interaction" },
  { factor: "Clinical exposure", online: "Case-based; optional clinical attachment in some programs", offline: "Institution-specific hospital exposure" },
  { factor: "Revision", online: "Recorded lectures available any time", offline: "Depends on personal notes" },
  { factor: "Best suited for", online: "Working doctors upgrading knowledge", offline: "Doctors able to commit full time" },
];

const COMPARE_BEFORE = [
  { title: "Curriculum", text: "Look for structured coverage of endourology, uro-oncology, reconstructive urology, female urology, pediatric urology, male infertility, and clinical case discussions." },
  { title: "Faculty", text: "Choose programs led by experienced clinicians actively involved in patient care and medical education." },
  { title: "Academic guidance", text: "Continuous mentorship, doubt-clearing sessions, and interactive discussions significantly improve the learning experience." },
  { title: "Career development", text: "Some fellowships add career guidance, networking, and professional support after course completion." },
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
              <span>Online vs Offline Urology Fellowship</span>
            </div>
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">Fellowship Guides</span>
              <span className="text-sm text-text-secondary">⏱️ 8 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Online vs Offline Urology Fellowship</h1>
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">MA</div>
                <div><p className="font-semibold text-primary">Med Fellow Academy</p><p className="text-sm text-text-secondary">Medical Education Experts</p></div>
              </div>
            </div>
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10">
              <Image src="/courses/urology.jpg" alt="Online vs Offline Urology Fellowship" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                One of the biggest decisions when choosing a urology fellowship is whether to study online or in a
                traditional offline program. Both formats have advantages. The right choice depends on your
                professional commitments, career goals, preferred learning style, and the academic support you
                expect — and for many practising doctors, flexibility now matters as much as curriculum quality.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">What an Online Urology Fellowship Offers</h2>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 not-prose">
                {ONLINE_FEATURES.map((t) => (
                  <div key={t} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary"><span className="text-secondary mt-0.5">✓</span><span>{t}</span></div>
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">Structured academic learning is delivered through live virtual classes, recorded lectures, digital study materials, and interactive case discussions — without relocating or taking a break from work.</p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">What an Offline Urology Fellowship Offers</h2>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 not-prose">
                {OFFLINE_FEATURES.map((t) => (
                  <div key={t} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary"><span className="text-secondary mt-0.5">✓</span><span>{t}</span></div>
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">Offline fellowships run at a teaching hospital or academic institution on a fixed schedule, and may require participants to relocate or take leave from regular practice.</p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Online vs Offline: Key Differences</h2>
              <div className="overflow-x-auto rounded-lg border border-gray-200 mb-8 not-prose">
                <table className="w-full text-sm text-left">
                  <thead className="bg-primary text-white"><tr><th className="px-4 py-3 font-semibold">Factor</th><th className="px-4 py-3 font-semibold">Online</th><th className="px-4 py-3 font-semibold">Offline</th></tr></thead>
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
              <p className="text-text-secondary leading-relaxed mb-8">If continuing clinical practice while pursuing advanced education is your priority, an online or hybrid fellowship usually offers a better balance between work and learning.</p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Look Beyond the Format</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-8 not-prose">
                {COMPARE_BEFORE.map((c) => (
                  <div key={c.title} className="card p-4"><h3 className="text-[0.9375rem] font-bold text-primary mb-1.5">{c.title}</h3><p className="text-[0.8125rem] text-text-secondary leading-relaxed">{c.text}</p></div>
                ))}
              </div>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Ready to Advance Your Urology Career?</h3>
                <p className="text-text-secondary mb-6">Whether you prefer online flexibility or a hybrid experience, choose a fellowship with a structured curriculum, experienced faculty, and evidence-based education.</p>
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
            <Link href="/blog/skills-you-will-learn-during-a-urology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Clinical Skills</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Skills You Will Learn During a Urology Fellowship</h3>
              <p className="text-sm text-text-secondary">The clinical, diagnostic, and decision-making skills developed in training...</p>
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

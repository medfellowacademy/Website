import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import TopicClusterLinks from "@/components/TopicClusterLinks";
import Link from "next/link";
import Image from "next/image";

const CLUSTER_LINKS = [
  { label: "Best Fellowship Course in Spine Surgery (Guide)", href: "/courses/best-fellowship-course-in-spine-surgery", type: "guide" as const },
  { label: "How to Choose a Spine Surgery Fellowship", href: "/blog/how-to-choose-a-spine-surgery-fellowship", type: "blog" as const },
  { label: "Questions to Ask Before Joining a Spine Surgery Fellowship", href: "/blog/questions-to-ask-before-joining-a-spine-surgery-fellowship", type: "blog" as const },
  { label: "Online vs Offline Spine Surgery Fellowship", href: "/blog/online-vs-offline-spine-surgery-fellowship", type: "blog" as const },
  { label: "Is a Spine Surgery Fellowship Worth It?", href: "/blog/is-a-spine-surgery-fellowship-worth-it", type: "blog" as const },
  { label: "Skills You Learn During a Spine Surgery Fellowship", href: "/blog/skills-you-learn-during-a-spine-surgery-fellowship", type: "blog" as const },
];

export const metadata: Metadata = {
  title: "Is a Spine Surgery Fellowship Worth It? | MedFellow",
  description:
    "Whether a spine surgery fellowship is worth it — the benefits, skills you build, career impact, full-time vs flexible learning, and what to compare before enrolling.",
  keywords:
    "is a spine surgery fellowship worth it, spine surgery fellowship benefits, spine fellowship career, spine surgery training, best spine surgery fellowship",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/is-a-spine-surgery-fellowship-worth-it/" },
  openGraph: {
    title: "Is a Spine Surgery Fellowship Worth It?",
    description: "Benefits, skills, career impact, full-time vs flexible learning, and what to compare before enrolling.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/is-a-spine-surgery-fellowship-worth-it/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: { card: "summary_large_image", title: "Is a Spine Surgery Fellowship Worth It?", description: "Benefits, limitations, and factors to consider before enrolling." },
};

const FAQS = [
  { q: "Is a spine surgery fellowship worth it for an orthopaedic surgeon or neurosurgeon?", a: "If you want deeper spine-specific knowledge, better clinical decision-making, and structured exposure to degenerative disease, trauma, deformity, and minimally invasive techniques, many specialists find a fellowship valuable for professional growth." },
  { q: "Will it make me a better spine surgeon?", a: "It can strengthen clinical reasoning, imaging interpretation, and surgical planning knowledge. Independent operative competency still depends on formal, supervised surgical training." },
  { q: "Is an online spine fellowship worth considering?", a: "A well-designed online fellowship provides strong academic value through structured modules, case discussions, and faculty access — useful for doctors who want to keep practising while they learn." },
  { q: "How much time should I expect to commit?", a: "It varies by program. Flexible fellowships are designed so practising specialists can study alongside clinical responsibilities; confirm the expected weekly commitment before enrolling." },
  { q: "Does completing a fellowship increase income?", a: "Not automatically. It may strengthen your profile and open opportunities, but income depends on experience, location, employer, and scope of practice." },
  { q: "How is a fellowship different from formal specialist training?", a: "Fellowship education complements your qualification; it is not a substitute for formal specialist or super-specialty training, registration, licensing, or hospital credentialing." },
  { q: "What should I compare before deciding?", a: "Curriculum, faculty, clinical exposure, assessment, support, and total cost — not fee alone — against your specific professional objective." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Is a Spine Surgery Fellowship Worth It?",
  description: "The benefits, skills, and career impact of a spine surgery fellowship, and what to compare before enrolling.",
  image: "https://www.medfellowacademy.com/courses/spine-surgery.jpg",
  datePublished: "2026-09-11",
  dateModified: "2026-09-11",
  author: { "@type": "Organization", name: "MedFellow Academy" },
  publisher: { "@type": "Organization", name: "MedFellow Academy", logo: { "@type": "ImageObject", url: "https://www.medfellowacademy.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.medfellowacademy.com/blog/is-a-spine-surgery-fellowship-worth-it/" },
};

const WHY = ["Deeper spine-specific knowledge", "Better clinical decision-making", "Exposure to different spine conditions", "Familiarity with modern techniques", "Academic and research development"];
const SKILLS = ["Patient assessment", "Imaging interpretation", "Surgical planning", "Trauma management", "Deformity management", "Minimally invasive spine techniques", "Postoperative and rehabilitation knowledge"];
const CAREER = ["Develop a focused specialty profile", "Support clinical professional development", "Prepare for further training", "Strengthen academic opportunities", "Expand knowledge for multidisciplinary practice"];
const COMPARE = ["Compare the curriculum", "Compare the faculty", "Compare clinical exposure", "Compare assessment", "Compare support", "Compare the total cost"];

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
              <span>Is a Spine Surgery Fellowship Worth It?</span>
            </div>
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">Career Planning</span>
              <span className="text-sm text-text-secondary">⏱️ 9 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Is a Spine Surgery Fellowship Worth It?</h1>
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">MA</div>
                <div><p className="font-semibold text-primary">Med Fellow Academy</p><p className="text-sm text-text-secondary">Medical Education Experts</p></div>
              </div>
            </div>
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10">
              <Image src="/courses/spine-surgery.jpg" alt="Is a Spine Surgery Fellowship Worth It" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Spine care has become increasingly specialised, and many orthopaedic surgeons and neurosurgeons
                weigh a fellowship against continuing to build experience on the job. The right answer depends on
                your goals — a fellowship is worthwhile when it fills a genuine knowledge or professional-
                development gap, not simply because it adds a credential.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Why Doctors Pursue Spine Fellowship Training</h2>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 not-prose">
                {WHY.map((t) => (<div key={t} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary"><span className="text-secondary mt-0.5">✓</span><span>{t}</span></div>))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Skills You Can Expect to Build</h2>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 not-prose">
                {SKILLS.map((t) => (<div key={t} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary"><span className="text-secondary mt-0.5">✓</span><span>{t}</span></div>))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Career Impact</h2>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 not-prose">
                {CAREER.map((t) => (<div key={t} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary"><span className="text-secondary mt-0.5">✓</span><span>{t}</span></div>))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Full-Time Training vs Flexible Learning</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Full-time, in-person training can offer more continuous hospital-based interaction. Flexible
                learning lets you continue practising while you study. Neither is inherently better — the right
                choice depends on whether your priority is flexibility or clinical exposure.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">What to Compare Before Deciding</h2>
              <div className="space-y-2 mb-8 not-prose">
                {COMPARE.map((c) => (<div key={c} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary"><span className="text-secondary mt-0.5">✓</span><span>{c}</span></div>))}
              </div>
              <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg mb-8 not-prose">
                <p className="text-sm text-text-secondary leading-relaxed">Fellowship education complements your existing qualification. It is not a substitute for formal specialist or super-specialty training, registration, licensing, or hospital credentialing.</p>
              </div>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Weigh the Curriculum Against Your Goals</h3>
                <p className="text-text-secondary mb-6">Explore the MedFellow Academy Fellowship in Spine Surgery and decide whether the seven-module curriculum matches what you want to build.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/courses/fellowship-in-spine-surgery" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-center">View Fellowship Details</Link>
                  <Link href="/courses/best-fellowship-course-in-spine-surgery" className="inline-block px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all text-center">Read the Full Guide</Link>
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
          <div className="lg:col-span-1"><TopicClusterLinks title="Spine Surgery Resources" links={CLUSTER_LINKS} /></div>
          </div>
        </div>
      </article>
      <FAQ faqs={FAQS} />
      <section className="section-padding bg-background">
        <div className="container-custom"><div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-primary mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/courses/best-fellowship-course-in-spine-surgery" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">Fellowship Guide</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Best Fellowship Course in Spine Surgery</h3>
              <p className="text-sm text-text-secondary">A complete guide to curriculum, learning format, eligibility, fees and career pathways...</p>
            </Link>
            <Link href="/blog/skills-you-learn-during-a-spine-surgery-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Clinical Skills</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Skills You Learn During a Spine Surgery Fellowship</h3>
              <p className="text-sm text-text-secondary">Assessment, imaging, surgical planning, deformity, minimally invasive concepts and postoperative care...</p>
            </Link>
            <Link href="/blog/how-to-choose-a-spine-surgery-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">How to Choose a Spine Surgery Fellowship</h3>
              <p className="text-sm text-text-secondary">A practical framework for comparing fellowship providers...</p>
            </Link>
            <Link href="/blog/online-vs-offline-spine-surgery-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Online vs Offline Spine Surgery Fellowship</h3>
              <p className="text-sm text-text-secondary">Compare online, offline and hybrid formats for a surgical spine fellowship...</p>
            </Link>
          </div>
        </div></div>
      </section>
      <Footer />
    </div>
  );
}

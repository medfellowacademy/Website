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
  title: "Online vs Offline Spine Surgery Fellowship | MedFellow",
  description:
    "Compare online, offline and hybrid spine surgery fellowships — flexibility, hospital exposure, case discussions, surgical observation, and the exposure-vs-competency distinction.",
  keywords:
    "online spine surgery fellowship, offline spine surgery fellowship, hybrid spine surgery fellowship, spine surgery fellowship course, spine surgery training",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/online-vs-offline-spine-surgery-fellowship/" },
  openGraph: {
    title: "Online vs Offline Spine Surgery Fellowship",
    description: "Flexibility, hospital exposure, case discussions, surgical observation, and the exposure-vs-competency distinction.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/online-vs-offline-spine-surgery-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: { card: "summary_large_image", title: "Online vs Offline Spine Surgery Fellowship", description: "Compare fellowship learning formats for spine surgery." },
};

const FAQS = [
  { q: "Is an online spine surgery fellowship respected?", a: "A structured online fellowship with a comprehensive curriculum, experienced faculty, and case discussions can provide strong academic value, particularly for working doctors." },
  { q: "Can I learn spine surgery through an online fellowship alone?", a: "Online learning builds strong knowledge of indications, imaging, and surgical principles, but it cannot reproduce supervised operative experience on its own." },
  { q: "Which format suits a working doctor best?", a: "Online or hybrid formats usually suit doctors who cannot leave clinical responsibilities for a residential program. Offline suits those who can commit to in-person, full-time training." },
  { q: "Does a hybrid fellowship include hands-on training?", a: "It combines structured online academics with a defined in-person or clinical component — ask exactly what that component includes and whether participation is observational or supervised." },
  { q: "Is offline training automatically hands-on?", a: "No. An offline program can still be largely observational. Clarify the level of supervised practical training regardless of format." },
  { q: "Which is more cost-effective?", a: "Online programs typically reduce travel, accommodation, and time-away-from-work costs, making them more cost-effective for many practising doctors." },
  { q: "Does the learning format affect long-term career growth?", a: "Career growth depends more on the quality of learning, practical application, and professional development than on delivery format alone." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Online vs Offline Spine Surgery Fellowship",
  description: "A comparison of online, offline and hybrid spine surgery fellowship formats.",
  image: "https://www.medfellowacademy.com/courses/spine-surgery.jpg",
  datePublished: "2026-09-11",
  dateModified: "2026-09-11",
  author: { "@type": "Organization", name: "MedFellow Academy" },
  publisher: { "@type": "Organization", name: "MedFellow Academy", logo: { "@type": "ImageObject", url: "https://www.medfellowacademy.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.medfellowacademy.com/blog/online-vs-offline-spine-surgery-fellowship/" },
};

const ONLINE_BENEFITS = ["Learn from anywhere", "Continue working while learning", "Revisit recorded content", "Participate in case discussions", "Learn without frequent travel"];
const OFFLINE_BENEFITS = ["Learn in a clinical setting", "Interact with faculty directly", "Observe surgical procedures", "Build professional connections", "Follow a fixed schedule"];
const HYBRID_BENEFITS = ["Complete academic learning online", "Attend selected in-person components", "Reduce time away from practice", "Combine flexibility with exposure"];

const CHOOSE_WHEN = [
  { title: "You need flexibility", text: "Working around clinical duties without relocating favours online or hybrid learning." },
  { title: "You want more hospital exposure", text: "Direct faculty interaction and surgical observation favour offline or a hybrid with a strong clinical component." },
  { title: "You want both academic and clinical learning", text: "A hybrid model balances structured online theory with a defined in-person or clinical component." },
  { title: "You are planning further specialty training", text: "Check how the format and credential are viewed by the program you plan to pursue next." },
];

const EXPOSURE_TYPES = ["Hospital training", "Simulation-based learning", "Operating-room observation", "Supervised practical training"];

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
              <span>Online vs Offline Spine Surgery Fellowship</span>
            </div>
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">Fellowship Guides</span>
              <span className="text-sm text-text-secondary">⏱️ 9 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Online vs Offline Spine Surgery Fellowship</h1>
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">MA</div>
                <div><p className="font-semibold text-primary">Med Fellow Academy</p><p className="text-sm text-text-secondary">Medical Education Experts</p></div>
              </div>
            </div>
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10">
              <Image src="/courses/spine-surgery.jpg" alt="Online vs Offline Spine Surgery Fellowship" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                For a spine surgery fellowship, the online-versus-offline decision matters most where the two
                formats genuinely differ: hands-on exposure. Academic learning, imaging interpretation, and case
                discussion translate well to any format — supervised operative training does not. The right
                choice depends on your professional responsibilities and what you actually need the fellowship to
                deliver.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Benefits of Online Learning</h2>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 not-prose">
                {ONLINE_BENEFITS.map((t) => (<div key={t} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary"><span className="text-secondary mt-0.5">✓</span><span>{t}</span></div>))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Benefits of Offline Learning</h2>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 not-prose">
                {OFFLINE_BENEFITS.map((t) => (<div key={t} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary"><span className="text-secondary mt-0.5">✓</span><span>{t}</span></div>))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Benefits of Hybrid Learning</h2>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 not-prose">
                {HYBRID_BENEFITS.map((t) => (<div key={t} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary"><span className="text-secondary mt-0.5">✓</span><span>{t}</span></div>))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Which Should You Choose?</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-8 not-prose">
                {CHOOSE_WHEN.map((c) => (
                  <div key={c.title} className="card p-4"><h3 className="text-[0.9375rem] font-bold text-primary mb-1.5">{c.title}</h3><p className="text-[0.8125rem] text-text-secondary leading-relaxed">{c.text}</p></div>
                ))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">What &quot;Clinical Exposure&quot; Can Mean</h2>
              <div className="space-y-2 mb-6 not-prose">
                {EXPOSURE_TYPES.map((c) => (<div key={c} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary"><span className="text-secondary mt-0.5">✓</span><span>{c}</span></div>))}
              </div>
              <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg mb-8 not-prose">
                <p className="text-sm text-text-secondary leading-relaxed">Clinical exposure is not automatically hands-on surgery. Ask whether you will be observing or participating, and under what supervision — in both online and offline programs.</p>
              </div>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Compare Your Training Options</h3>
                <p className="text-text-secondary mb-6">Explore the MedFellow Academy Fellowship in Spine Surgery — a fully online 12-month option and an 11 online + 1 clinical month pathway with hospital attachment.</p>
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
            <Link href="/blog/how-to-choose-a-spine-surgery-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">How to Choose a Spine Surgery Fellowship</h3>
              <p className="text-sm text-text-secondary">A practical framework for comparing fellowship providers...</p>
            </Link>
            <Link href="/blog/skills-you-learn-during-a-spine-surgery-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Clinical Skills</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Skills You Learn During a Spine Surgery Fellowship</h3>
              <p className="text-sm text-text-secondary">Assessment, imaging, surgical planning, deformity, minimally invasive concepts and postoperative care...</p>
            </Link>
            <Link href="/blog/is-a-spine-surgery-fellowship-worth-it" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Career Planning</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Is a Spine Surgery Fellowship Worth It?</h3>
              <p className="text-sm text-text-secondary">The benefits, limitations, and factors to consider before enrolling...</p>
            </Link>
          </div>
        </div></div>
      </section>
      <Footer />
    </div>
  );
}

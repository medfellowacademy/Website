import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import TopicClusterLinks from "@/components/TopicClusterLinks";
import Link from "next/link";
import Image from "next/image";

const CLUSTER_LINKS = [
  { label: "Best Fellowship Course in General Surgery (Guide)", href: "/courses/best-fellowship-course-in-general-surgery", type: "guide" as const },
  { label: "How to Choose a General Surgery Fellowship", href: "/blog/how-to-choose-a-general-surgery-fellowship", type: "blog" as const },
  { label: "Questions to Ask Before Joining a General Surgery Fellowship", href: "/blog/questions-to-ask-before-joining-a-general-surgery-fellowship", type: "blog" as const },
  { label: "Online vs Offline General Surgery Fellowship", href: "/blog/online-vs-offline-general-surgery-fellowship", type: "blog" as const },
  { label: "Is a General Surgery Fellowship Worth It?", href: "/blog/is-a-general-surgery-fellowship-worth-it", type: "blog" as const },
  { label: "Skills You Learn During a General Surgery Fellowship", href: "/blog/skills-you-learn-during-a-general-surgery-fellowship", type: "blog" as const },
];

export const metadata: Metadata = {
  title: "Online vs Offline General Surgery Fellowship | MedFellow",
  description:
    "Compare online, offline and hybrid general surgery fellowships — flexibility, hospital exposure, case discussions, practical learning, and what to check before choosing.",
  keywords:
    "online general surgery fellowship, offline general surgery fellowship, hybrid general surgery fellowship, general surgery fellowship course, general surgery training",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/online-vs-offline-general-surgery-fellowship/" },
  openGraph: {
    title: "Online vs Offline General Surgery Fellowship",
    description: "Flexibility, hospital exposure, case discussions, practical learning, and what to check before choosing.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/online-vs-offline-general-surgery-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: { card: "summary_large_image", title: "Online vs Offline General Surgery Fellowship", description: "Compare fellowship learning formats for general surgery." },
};

const FAQS = [
  { q: "Is an online general surgery fellowship effective?", a: "A well-structured online fellowship provides strong academic value through lectures, recorded sessions, case discussions, and assessments — but it has real limitations for hands-on procedural learning." },
  { q: "Can I get hospital exposure through an online fellowship?", a: "Some online programs include an optional clinical or hospital-attachment component. Confirm exactly what is offered before assuming online means no clinical exposure at all." },
  { q: "Is offline training automatically more hands-on?", a: "Not necessarily. Offline training offers direct faculty interaction and hospital-based learning, but the actual level of supervised practical training still needs to be confirmed." },
  { q: "What should working doctors check before choosing a format?", a: "How much weekly time is realistically required, whether the schedule fits around clinical duties, and whether the practical component (if any) is compatible with your job." },
  { q: "Is hybrid always the best compromise?", a: "It combines flexibility with some clinical exposure, which suits many working doctors, but do not confuse flexibility with lower commitment — hybrid programs still require consistent engagement." },
  { q: "Which format is more affordable?", a: "Online programs generally reduce travel, accommodation, and time-away-from-work costs compared to offline or hybrid options with a clinical component." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Online vs Offline General Surgery Fellowship",
  description: "A comparison of online, offline and hybrid general surgery fellowship formats.",
  image: "https://www.medfellowacademy.com/courses/general-surgery.jpg",
  datePublished: "2026-09-11",
  dateModified: "2026-09-11",
  author: { "@type": "Organization", name: "MedFellow Academy" },
  publisher: { "@type": "Organization", name: "MedFellow Academy", logo: { "@type": "ImageObject", url: "https://www.medfellowacademy.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.medfellowacademy.com/blog/online-vs-offline-general-surgery-fellowship/" },
};

const DECIDE = [
  { title: "Are you looking for flexibility?", text: "Online or hybrid formats let you continue clinical duties while studying." },
  { title: "Do you need hospital exposure?", text: "Offline or hybrid programs with a defined clinical component provide more direct exposure." },
  { title: "Are you focused on academic learning?", text: "Online delivery covers lectures, case discussions, and assessments effectively." },
  { title: "Do you want practical surgical experience?", text: "Check exactly what 'hands-on' means in any format — observation and supervised participation are not the same." },
];

const ONLINE_NOTES = { benefits: "Learn from anywhere, continue working, revisit recorded content, and participate in case discussions without frequent travel.", limits: "Limited direct hospital or operating-room exposure unless the program adds an optional clinical component." };
const OFFLINE_NOTES = { benefits: "Direct faculty interaction, hospital-based learning, and practical skill development through in-person sessions.", limits: "Requires more time away from practice and may involve travel or relocation." };
const HYBRID_NOTES = { benefits: "Academic learning completed online, with selected in-person components for exposure, reducing time away from practice.", limits: "Requires committing to both the online modules and the in-person schedule." };

const CHECK_COSTS = ["Online costs — usually the lowest, mainly tuition", "Offline costs — tuition plus travel, accommodation, and time away from work", "Hybrid costs — tuition plus limited travel/accommodation for the in-person component"];

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
              <span>Online vs Offline General Surgery Fellowship</span>
            </div>
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">Fellowship Guides</span>
              <span className="text-sm text-text-secondary">⏱️ 9 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Online vs Offline General Surgery Fellowship</h1>
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">MA</div>
                <div><p className="font-semibold text-primary">Med Fellow Academy</p><p className="text-sm text-text-secondary">Medical Education Experts</p></div>
              </div>
            </div>
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10">
              <Image src="/courses/general-surgery.jpg" alt="Online vs Offline General Surgery Fellowship" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Choosing between online, offline, and hybrid general surgery fellowships comes down to what you
                actually need — flexibility, academic depth, or hands-on hospital exposure. Here is what each
                format typically offers, and how to decide.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Ask Yourself First</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-8 not-prose">
                {DECIDE.map((c) => (
                  <div key={c.title} className="card p-4"><h3 className="text-[0.9375rem] font-bold text-primary mb-1.5">{c.title}</h3><p className="text-[0.8125rem] text-text-secondary leading-relaxed">{c.text}</p></div>
                ))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Online Fellowship</h2>
              <p className="text-text-secondary leading-relaxed mb-2"><strong>Benefits:</strong> {ONLINE_NOTES.benefits}</p>
              <p className="text-text-secondary leading-relaxed mb-8"><strong>Limitations:</strong> {ONLINE_NOTES.limits}</p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-8 mb-6">Offline Fellowship</h2>
              <p className="text-text-secondary leading-relaxed mb-2"><strong>Benefits:</strong> {OFFLINE_NOTES.benefits}</p>
              <p className="text-text-secondary leading-relaxed mb-8"><strong>Limitations:</strong> {OFFLINE_NOTES.limits}</p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-8 mb-6">Hybrid Fellowship</h2>
              <p className="text-text-secondary leading-relaxed mb-2"><strong>Benefits:</strong> {HYBRID_NOTES.benefits}</p>
              <p className="text-text-secondary leading-relaxed mb-8"><strong>Limitations:</strong> {HYBRID_NOTES.limits}</p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">What Working Doctors Should Check</h2>
              <div className="space-y-2 mb-8 not-prose">
                {CHECK_COSTS.map((c) => (<div key={c} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary"><span className="text-secondary mt-0.5">✓</span><span>{c}</span></div>))}
              </div>
              <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg mb-8 not-prose">
                <p className="text-sm text-text-secondary leading-relaxed">Ask what &quot;hands-on&quot; actually means in any format you are considering — observation, simulation, and supervised participation are different levels of exposure, and none of them automatically equals independent competency.</p>
              </div>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Compare Your Training Options</h3>
                <p className="text-text-secondary mb-6">Explore the MedFellow Academy Fellowship in General Surgery — a fully online 12-month option and an 11 online + 1 clinical month pathway with hospital attachment.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/courses/fellowship-in-general-surgery-1-year" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-center">View Fellowship Details</Link>
                  <Link href="/courses/best-fellowship-course-in-general-surgery" className="inline-block px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all text-center">Read the Full Guide</Link>
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
          <div className="lg:col-span-1"><TopicClusterLinks title="General Surgery Resources" links={CLUSTER_LINKS} /></div>
          </div>
        </div>
      </article>
      <FAQ faqs={FAQS} />
      <section className="section-padding bg-background">
        <div className="container-custom"><div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-primary mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/courses/best-fellowship-course-in-general-surgery" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">Fellowship Guide</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Best Fellowship Course in General Surgery</h3>
              <p className="text-sm text-text-secondary">A complete guide to curriculum, learning format, eligibility, fees and career pathways...</p>
            </Link>
            <Link href="/blog/how-to-choose-a-general-surgery-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">How to Choose a General Surgery Fellowship</h3>
              <p className="text-sm text-text-secondary">A practical framework for comparing fellowship providers...</p>
            </Link>
            <Link href="/blog/skills-you-learn-during-a-general-surgery-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Clinical Skills</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Skills You Learn During a General Surgery Fellowship</h3>
              <p className="text-sm text-text-secondary">Assessment, emergency management, perioperative care, and surgical planning skills...</p>
            </Link>
            <Link href="/blog/is-a-general-surgery-fellowship-worth-it" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Career Planning</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Is a General Surgery Fellowship Worth It?</h3>
              <p className="text-sm text-text-secondary">The benefits, limitations, and factors to consider before enrolling...</p>
            </Link>
          </div>
        </div></div>
      </section>
      <Footer />
    </div>
  );
}

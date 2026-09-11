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
  title: "Is a General Surgery Fellowship Worth It? | MedFellow",
  description:
    "Whether a general surgery fellowship is worth it — the benefits, skills you build, the exposure-vs-competency distinction, career impact, and what to compare before enrolling.",
  keywords:
    "is a general surgery fellowship worth it, general surgery fellowship benefits, general surgery fellowship career, general surgery training, best general surgery fellowship",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/is-a-general-surgery-fellowship-worth-it/" },
  openGraph: {
    title: "Is a General Surgery Fellowship Worth It?",
    description: "Benefits, skills, the exposure-vs-competency distinction, career impact, and what to compare before enrolling.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/is-a-general-surgery-fellowship-worth-it/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: { card: "summary_large_image", title: "Is a General Surgery Fellowship Worth It?", description: "Benefits, limitations, and factors to consider before enrolling." },
};

const FAQS = [
  { q: "When does a general surgery fellowship make sense?", a: "When you want structured learning, broader surgical knowledge, the ability to continue learning while working, and you have a clear learning objective rather than just wanting another certificate." },
  { q: "What are the main benefits?", a: "Advanced surgical knowledge, broader clinical understanding, stronger clinical decision-making, exposure to minimally invasive surgery, emergency surgery knowledge, perioperative and critical care knowledge, academic development, and professional confidence." },
  { q: "Is clinical exposure enough to guarantee competency?", a: "No. Clinical exposure can include case discussions, hospital observation, simulation, or supervised activities — none of these on their own guarantee independent procedural competency, which requires formal supervised training and assessment." },
  { q: "What skills does it build?", a: "Clinical assessment, diagnostic reasoning, surgical planning, laparoscopic principles, emergency management, perioperative management, critical care, multidisciplinary communication, and evidence-based practice." },
  { q: "How does it help my career?", a: "It can strengthen existing surgical practice, develop interest in laparoscopic surgery, build emergency surgery knowledge, support academic growth, and prepare for further training — while career recognition still depends on formal qualifications and local regulations." },
  { q: "What should I compare before deciding?", a: "Curriculum, faculty, clinical exposure, assessment, and total cost — against your specific professional objective, not the fee alone." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Is a General Surgery Fellowship Worth It?",
  description: "The benefits, skills, and career impact of a general surgery fellowship, and what to compare before enrolling.",
  image: "https://www.medfellowacademy.com/courses/general-surgery.jpg",
  datePublished: "2026-09-11",
  dateModified: "2026-09-11",
  author: { "@type": "Organization", name: "MedFellow Academy" },
  publisher: { "@type": "Organization", name: "MedFellow Academy", logo: { "@type": "ImageObject", url: "https://www.medfellowacademy.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.medfellowacademy.com/blog/is-a-general-surgery-fellowship-worth-it/" },
};

const WHEN_VALUABLE = ["When you want structured learning", "When you want broader surgical knowledge", "When you want to continue learning while working", "When you have a clear learning objective"];
const BENEFITS = [
  "Advanced surgical knowledge", "Broader clinical understanding", "Stronger clinical decision-making",
  "Exposure to minimally invasive surgery", "Emergency surgery knowledge", "Perioperative and critical care knowledge",
  "Academic development", "Professional confidence",
];
const SKILLS = ["Clinical assessment", "Diagnostic reasoning", "Surgical planning", "Laparoscopic principles", "Emergency management", "Perioperative management", "Critical care", "Multidisciplinary communication", "Evidence-based practice"];
const CAREER = ["Strengthen existing surgical practice", "Develop interest in laparoscopic surgery", "Build emergency surgery knowledge", "Support academic growth", "Prepare for further training"];

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
              <span>Is a General Surgery Fellowship Worth It?</span>
            </div>
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">Career Planning</span>
              <span className="text-sm text-text-secondary">⏱️ 10 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Is a General Surgery Fellowship Worth It?</h1>
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">MA</div>
                <div><p className="font-semibold text-primary">Med Fellow Academy</p><p className="text-sm text-text-secondary">Medical Education Experts</p></div>
              </div>
            </div>
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10">
              <Image src="/courses/general-surgery.jpg" alt="Is a General Surgery Fellowship Worth It" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                A general surgery fellowship is worth considering when it fills a genuine knowledge or
                professional-development gap — not simply because it promises another credential. The value
                depends on your objective, your available time, and how honestly the program describes what it
                actually delivers.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">When It Can Be Valuable</h2>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 not-prose">
                {WHEN_VALUABLE.map((t) => (<div key={t} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary"><span className="text-secondary mt-0.5">✓</span><span>{t}</span></div>))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">8 Benefits Doctors Report</h2>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 not-prose">
                {BENEFITS.map((t) => (<div key={t} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary"><span className="text-secondary mt-0.5">✓</span><span>{t}</span></div>))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Clinical Exposure vs Competency</h2>
              <p className="text-text-secondary leading-relaxed mb-8">Clinical exposure can include case discussions, hospital observation, simulation, or supervised activities. Observation is not the same as hands-on training, and clinical exposure alone does not guarantee competency — independent procedural competency requires formal, supervised, assessed training.</p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Skills You Can Expect to Build</h2>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 not-prose">
                {SKILLS.map((t) => (<div key={t} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary"><span className="text-secondary mt-0.5">✓</span><span>{t}</span></div>))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Career Impact</h2>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-6 not-prose">
                {CAREER.map((t) => (<div key={t} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary"><span className="text-secondary mt-0.5">✓</span><span>{t}</span></div>))}
              </div>
              <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg mb-8 not-prose">
                <p className="text-sm text-text-secondary leading-relaxed">Career recognition depends on your formal qualifications, registration, and local regulations. A fellowship complements your professional profile — it does not replace a recognised residency or specialist qualification.</p>
              </div>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Weigh the Curriculum Against Your Goals</h3>
                <p className="text-text-secondary mb-6">Explore the MedFellow Academy Fellowship in General Surgery and decide whether the 15-module curriculum matches what you want to build.</p>
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
            <Link href="/blog/skills-you-learn-during-a-general-surgery-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Clinical Skills</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Skills You Learn During a General Surgery Fellowship</h3>
              <p className="text-sm text-text-secondary">Assessment, emergency management, perioperative care, and surgical planning skills...</p>
            </Link>
            <Link href="/blog/how-to-choose-a-general-surgery-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">How to Choose a General Surgery Fellowship</h3>
              <p className="text-sm text-text-secondary">A practical framework for comparing fellowship providers...</p>
            </Link>
            <Link href="/blog/online-vs-offline-general-surgery-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Online vs Offline General Surgery Fellowship</h3>
              <p className="text-sm text-text-secondary">Compare online, offline and hybrid formats for a surgical fellowship...</p>
            </Link>
          </div>
        </div></div>
      </section>
      <Footer />
    </div>
  );
}

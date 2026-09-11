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
  title: "How to Choose a General Surgery Fellowship | MedFellow",
  description:
    "A practical framework for choosing a general surgery fellowship — career goals, curriculum breadth, faculty, clinical exposure, duration, fees and certification.",
  keywords:
    "how to choose a general surgery fellowship, best general surgery fellowship, general surgery fellowship course, general surgery training, laparoscopic surgery fellowship",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/how-to-choose-a-general-surgery-fellowship/" },
  openGraph: {
    title: "How to Choose a General Surgery Fellowship",
    description: "Career goals, curriculum breadth, faculty, clinical exposure, duration, fees and certification.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/how-to-choose-a-general-surgery-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: { card: "summary_large_image", title: "How to Choose a General Surgery Fellowship", description: "A framework for comparing general surgery fellowships." },
};

const FAQS = [
  { q: "What matters most when choosing a general surgery fellowship?", a: "A curriculum that covers core surgical fundamentals, gastrointestinal surgery, trauma and emergency surgery, and laparoscopic and minimally invasive techniques — plus any specialist modules relevant to your goals — supported by experienced, clinically active faculty." },
  { q: "Is a longer fellowship always better?", a: "No. Longer does not always mean better. What matters is whether the curriculum, faculty, and clinical exposure match your available time and learning objective." },
  { q: "How should I evaluate clinical exposure?", a: "Understand exactly what it means, ask about hands-on training, check whether there is a hospital attachment, and distinguish exposure from independent competency." },
  { q: "How do I compare fees?", a: "Compare the total cost, weigh cost against learning value, and check payment terms carefully before enrolling." },
  { q: "What should I know about the certificate?", a: "Who issues it, what it represents, whether it is a specialist qualification, and whether it will meet local licensing or registration requirements — confirm before enrolling, not after." },
  { q: "Should I choose online, offline, or hybrid?", a: "It depends on whether you prioritise flexibility, hospital exposure, or a balance of both. Match the format to your actual objective, not convenience alone." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Choose a General Surgery Fellowship",
  description: "A practical framework for comparing general surgery fellowship providers before enrolling.",
  image: "https://www.medfellowacademy.com/courses/general-surgery.jpg",
  datePublished: "2026-09-11",
  dateModified: "2026-09-11",
  author: { "@type": "Organization", name: "MedFellow Academy" },
  publisher: { "@type": "Organization", name: "MedFellow Academy", logo: { "@type": "ImageObject", url: "https://www.medfellowacademy.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.medfellowacademy.com/blog/how-to-choose-a-general-surgery-fellowship/" },
};

const FACTORS = [
  { title: "Define your goal", text: "Do you want broader surgical knowledge, more practical exposure, a specific surgical interest, or preparation for further training? Your goal should shape every other choice." },
  { title: "Check curriculum breadth", text: "Look for core surgical fundamentals, gastrointestinal surgery coverage, trauma and emergency surgery, laparoscopic and minimally invasive surgery, and relevant specialist modules — then check the learning outcomes are clearly defined." },
  { title: "Review faculty", text: "Check qualifications, relevant clinical expertise, and how much genuine faculty interaction you will get." },
  { title: "Clarify clinical exposure", text: "Understand exactly what clinical exposure means, ask about hands-on training, check hospital attachments, and distinguish exposure from competency." },
  { title: "Choose the right format", text: "Online, offline, and hybrid each suit different priorities — decide which one actually matches your objective." },
  { title: "Weigh duration against depth", text: "Longer does not always mean better. Consider your available time and whether a one-year format is enough for your goals." },
  { title: "Compare cost against value", text: "Compare the total cost, weigh it against learning value, and review payment terms carefully." },
  { title: "Understand the certificate", text: "Who issues it, what it represents, whether it is a specialist qualification, and whether it will meet local requirements." },
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
              <span>How to Choose a General Surgery Fellowship</span>
            </div>
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">Fellowship Guides</span>
              <span className="text-sm text-text-secondary">⏱️ 10 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">How to Choose a General Surgery Fellowship</h1>
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">MA</div>
                <div><p className="font-semibold text-primary">Med Fellow Academy</p><p className="text-sm text-text-secondary">Medical Education Experts</p></div>
              </div>
            </div>
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10">
              <Image src="/courses/general-surgery.jpg" alt="How to Choose a General Surgery Fellowship" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                General surgery fellowships can look similar on paper — most mention comprehensive curricula,
                experienced faculty, and flexible learning. The real difference shows up in curriculum depth,
                clinical exposure, faculty engagement, and certification. This is a practical framework for
                comparing programs before you enrol.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">8 Factors to Compare</h2>
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

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Compare the Curriculum</h3>
                <p className="text-text-secondary mb-6">Explore the MedFellow Academy Fellowship in General Surgery and compare its 15 modules with your professional goals.</p>
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
            <Link href="/blog/questions-to-ask-before-joining-a-general-surgery-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Questions to Ask Before Joining a General Surgery Fellowship</h3>
              <p className="text-sm text-text-secondary">The questions every doctor should ask before applying...</p>
            </Link>
            <Link href="/blog/online-vs-offline-general-surgery-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Online vs Offline General Surgery Fellowship</h3>
              <p className="text-sm text-text-secondary">Compare online, offline and hybrid formats for a surgical fellowship...</p>
            </Link>
            <Link href="/blog/skills-you-learn-during-a-general-surgery-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Clinical Skills</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Skills You Learn During a General Surgery Fellowship</h3>
              <p className="text-sm text-text-secondary">Assessment, emergency management, perioperative care, and surgical planning skills...</p>
            </Link>
          </div>
        </div></div>
      </section>
      <Footer />
    </div>
  );
}

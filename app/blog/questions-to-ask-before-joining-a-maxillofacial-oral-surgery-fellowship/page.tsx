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
  title: "Questions to Ask Before Joining a Maxillofacial & Oral Surgery Fellowship | MedFellow",
  description:
    "The key questions to ask before enrolling in a maxillofacial & oral surgery fellowship — curriculum, faculty, flexibility, clinical exposure, certification, cost and career value.",
  keywords:
    "questions to ask maxillofacial fellowship, maxillofacial & oral surgery fellowship, oral surgery fellowship course, online maxillofacial fellowship, maxillofacial fellowship requirements",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-a-maxillofacial-oral-surgery-fellowship/" },
  openGraph: {
    title: "Questions to Ask Before Joining a Maxillofacial & Oral Surgery Fellowship",
    description: "Curriculum, faculty, flexibility, clinical exposure, certification, cost and career value — what to ask before you enrol.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-a-maxillofacial-oral-surgery-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: { card: "summary_large_image", title: "Questions to Ask Before Joining a Maxillofacial & Oral Surgery Fellowship", description: "The questions every specialist should ask before applying." },
};

const FAQS = [
  { q: "How do I know if a Maxillofacial & Oral Surgery Fellowship is good?", a: "Look for an evidence-based curriculum, experienced faculty, structured modules, case-based learning, flexibility for working professionals, and transparent information about certification and academic support." },
  { q: "Should I choose a fellowship based only on fees?", a: "No. A lower fee does not always provide better value. Compare the curriculum, faculty, learning experience, and career support before deciding." },
  { q: "Is an online fellowship worth considering?", a: "Many online fellowships are designed for practising specialists and provide flexible learning, recorded sessions, and expert-led discussions that fit alongside clinical practice." },
  { q: "What should I ask during an admission counselling session?", a: "Ask about the curriculum, faculty, assessments, learning format, certification, clinical exposure, mentorship, fees, and expected learning outcomes." },
  { q: "How important are case discussions in a fellowship?", a: "Case discussions help you apply theoretical concepts to real clinical situations, improve treatment planning, and strengthen decision-making skills." },
  { q: "Does every fellowship include hands-on training?", a: "No. Some programs focus on academic learning, while others may offer optional clinical attachments or observational training. Always clarify what is included before enrolling." },
  { q: "How long should a quality fellowship be?", a: "The ideal duration depends on the curriculum, but a structured program that allows progressive learning over several months often provides greater depth than a short-term course." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Questions to Ask Before Joining a Maxillofacial & Oral Surgery Fellowship",
  description: "The key questions to ask before enrolling in a maxillofacial and oral surgery fellowship.",
  image: "https://www.medfellowacademy.com/courses/maxillofacial.jpg",
  datePublished: "2026-09-10",
  dateModified: "2026-09-10",
  author: { "@type": "Organization", name: "MedFellow Academy" },
  publisher: { "@type": "Organization", name: "MedFellow Academy", logo: { "@type": "ImageObject", url: "https://www.medfellowacademy.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-a-maxillofacial-oral-surgery-fellowship/" },
};

const QUESTIONS = [
  { q: "Why do I want to pursue this fellowship?", a: "Define your objective — better oral surgery skills, facial trauma management, implantology, an academic career, hospital-based practice, or structured learning while continuing clinical work." },
  { q: "Does the curriculum cover modern maxillofacial surgery?", a: "Look for facial trauma, dental implant planning, oral pathology, maxillofacial infections, TMJ disorders, orthognathic surgery concepts, digital dentistry, CBCT interpretation, reconstructive surgery, and clinical case discussions." },
  { q: "Who are the faculty members?", a: "Ask whether instructors are experienced, actively practising oral and maxillofacial surgeons, whether they teach through real cases, and whether mentorship is available throughout." },
  { q: "Is the fellowship flexible for working professionals?", a: "Ask whether the program offers online learning, weekend classes, recorded lectures, flexible schedules, and self-paced study materials." },
  { q: "Does the program include clinical case discussions?", a: "Look for case presentations, treatment planning, radiographic interpretation, surgical decision making, complication management, and interactive discussions." },
  { q: "Is there any clinical attachment or hands-on opportunity?", a: "Ask about hospital attachment, observational training, clinical demonstrations, live surgery exposure, and faculty interaction during clinical sessions — so expectations are realistic." },
  { q: "Who issues the fellowship certificate?", a: "Understand which institution awards it, whether it follows assessments, whether it reflects structured training, and whether the program is academically organised." },
  { q: "What does the fee include?", a: "Check whether it covers study material, recorded lectures, live sessions, any clinical attachment, assessments, certification, and alumni access." },
  { q: "Will this fellowship help my career?", a: "Consider whether it may improve clinical confidence, expand patient services, strengthen hospital opportunities, enhance your academic profile, or build referral networks." },
  { q: "How does this fellowship compare with others?", a: "Beyond fees, evaluate curriculum, faculty, flexibility, clinical learning, case discussions, academic support, career guidance, and alumni feedback." },
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
              <span>Questions to Ask Before Joining a Maxillofacial &amp; Oral Surgery Fellowship</span>
            </div>
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">Fellowship Guides</span>
              <span className="text-sm text-text-secondary">⏱️ 9 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Questions to Ask Before Joining a Maxillofacial &amp; Oral Surgery Fellowship</h1>
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">MA</div>
                <div><p className="font-semibold text-primary">Med Fellow Academy</p><p className="text-sm text-text-secondary">Medical Education Experts</p></div>
              </div>
            </div>
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10">
              <Image src="/courses/maxillofacial.jpg" alt="Questions to Ask Before Joining a Maxillofacial and Oral Surgery Fellowship" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                A well-structured Maxillofacial &amp; Oral Surgery Fellowship should help you build advanced
                clinical knowledge, strengthen decision making, and support long-term career growth. Before
                enrolling, evaluate the curriculum, faculty, learning format, certification, and clinical
                exposure — these questions make that comparison objective.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">10 Questions Worth Asking</h2>
              <div className="space-y-4 mb-8 not-prose">
                {QUESTIONS.map((s, i) => (
                  <div key={s.q} className="card p-5">
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#15401E] text-white text-[0.8125rem] font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                      <div><h3 className="text-[1rem] font-bold text-primary mb-1">{s.q}</h3><p className="text-sm text-text-secondary leading-relaxed">{s.a}</p></div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-text-secondary leading-relaxed mb-8">
                The right fellowship aligns with your career goals, offers comprehensive learning, and fits your
                professional schedule. Asking these questions before enrolling helps you decide with confidence.
              </p>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Ask Us Directly</h3>
                <p className="text-text-secondary mb-6">Explore the MedFellow Academy Fellowship in Maxillofacial &amp; Oral Surgery and get clear answers about the curriculum, faculty, and certification.</p>
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
            <Link href="/blog/online-vs-offline-maxillofacial-oral-surgery-fellowship-course" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Online vs Offline Maxillofacial &amp; Oral Surgery Fellowship</h3>
              <p className="text-sm text-text-secondary">Compare learning formats to find the option that fits your schedule...</p>
            </Link>
            <Link href="/blog/maxillofacial-oral-surgery-fellowship-after-md-obg" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Can BDS Doctors Pursue a Maxillofacial &amp; Oral Surgery Fellowship?</h3>
              <p className="text-sm text-text-secondary">Eligibility and pathways for dental graduates considering advanced training...</p>
            </Link>
          </div>
        </div></div>
      </section>
      <Footer />
    </div>
  );
}

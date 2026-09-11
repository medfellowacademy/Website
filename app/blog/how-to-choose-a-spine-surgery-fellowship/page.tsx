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
  title: "How to Choose a Spine Surgery Fellowship | MedFellow",
  description:
    "A practical framework for choosing a spine surgery fellowship — career goals, curriculum coverage, faculty, clinical exposure, learning format, eligibility, assessment and certification.",
  keywords:
    "how to choose a spine surgery fellowship, best spine surgery fellowship, spine surgery fellowship course, spine surgery training, minimally invasive spine fellowship",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/how-to-choose-a-spine-surgery-fellowship/" },
  openGraph: {
    title: "How to Choose a Spine Surgery Fellowship",
    description: "Career goals, curriculum coverage, faculty, clinical exposure, learning format, eligibility, assessment and certification.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/how-to-choose-a-spine-surgery-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: { card: "summary_large_image", title: "How to Choose a Spine Surgery Fellowship", description: "A framework for comparing spine surgery fellowships." },
};

const FAQS = [
  { q: "What matters most when choosing a spine surgery fellowship?", a: "A curriculum that covers spine fundamentals, degenerative disorders, trauma, deformity, infections and tumours, minimally invasive surgery, and rehabilitation — supported by experienced faculty and case-based learning that fits your goals." },
  { q: "Is an online spine fellowship effective?", a: "Online learning is effective for structured academic education, imaging concepts, case discussions, and theory. It does not independently reproduce supervised operative experience." },
  { q: "Should I choose a spine fellowship over a general orthopaedic fellowship?", a: "If your goal is focused spinal expertise across degenerative disease, trauma, deformity, and minimally invasive approaches, a spine fellowship offers depth that a broader orthopaedic fellowship does not." },
  { q: "How important is imaging in spine training?", a: "Very. Spine treatment decisions require correlating clinical findings with X-ray, CT, and MRI, so imaging interpretation should be a clear part of the curriculum." },
  { q: "What eligibility should I check?", a: "Your postgraduate qualification, professional registration, clinical experience, and any specialty-specific or documentation requirements. MedFellow's course lists MS/MD/DNB Orthopaedics or Neurosurgery." },
  { q: "What does the certificate represent?", a: "Understand who issues it and what the credential is. A fellowship is additional education and does not replace a formal specialist qualification, licensing, or independent surgical credentialing." },
  { q: "How should I compare fees?", a: "Compare the total cost including any clinical attachment, assessments, certification, and materials, plus travel and time away from work — then weigh value across curriculum, faculty, exposure, support, and flexibility." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Choose a Spine Surgery Fellowship",
  description: "A practical framework for comparing spine surgery fellowship providers before enrolling.",
  image: "https://www.medfellowacademy.com/courses/spine-surgery.jpg",
  datePublished: "2026-09-10",
  dateModified: "2026-09-10",
  author: { "@type": "Organization", name: "MedFellow Academy" },
  publisher: { "@type": "Organization", name: "MedFellow Academy", logo: { "@type": "ImageObject", url: "https://www.medfellowacademy.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.medfellowacademy.com/blog/how-to-choose-a-spine-surgery-fellowship/" },
};

const FACTORS = [
  { title: "Define your goal", text: "Decide whether you want to strengthen spine knowledge, develop clinical decision-making, gain practical exposure, prepare for further training, or continue learning while working — your objective drives every other choice." },
  { title: "Check curriculum coverage", text: "Look for spine fundamentals, degenerative spine disorders, spine trauma, deformity and pediatric spine, infection and tumour topics, minimally invasive spine surgery, and rehabilitation — not just one narrow area." },
  { title: "Evaluate faculty and mentorship", text: "Review faculty qualifications and clinical relevance, ask how much faculty interaction you will get, and look for case-based learning." },
  { title: "Clarify clinical exposure", text: "Ask what clinical exposure actually means, whether training is hands-on, how long the practical component is, whether there is hospital attachment, and remember that exposure is not the same as competency." },
  { title: "Choose the learning format", text: "An online spine fellowship offers maximum flexibility; a hybrid adds selected in-person or clinical components; offline provides continuous hospital-based interaction. Match the format to your objective." },
  { title: "Confirm eligibility", text: "Check your medical qualification, whether prior experience is required, international requirements if relevant, and confirm eligibility before payment." },
  { title: "Understand assessment and certification", text: "Ask whether there are examinations, whether case discussions are assessed, whether assignments are included, who issues the certificate, and what the credential represents." },
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
              <span>How to Choose a Spine Surgery Fellowship</span>
            </div>
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">Fellowship Guides</span>
              <span className="text-sm text-text-secondary">⏱️ 10 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">How to Choose a Spine Surgery Fellowship</h1>
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">MA</div>
                <div><p className="font-semibold text-primary">Med Fellow Academy</p><p className="text-sm text-text-secondary">Medical Education Experts</p></div>
              </div>
            </div>
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10">
              <Image src="/courses/spine-surgery.jpg" alt="How to Choose a Spine Surgery Fellowship" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Spine surgery fellowships can look similar on the surface — most mention advanced training,
                minimally invasive surgery, and modern spine care. The actual learning experience varies with the
                curriculum, faculty, clinical exposure, teaching methods, assessment, and flexibility. This is a
                practical framework for comparing programs before you enrol.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">7 Factors to Compare</h2>
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

              <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg mb-8 not-prose">
                <p className="text-sm text-text-secondary leading-relaxed">Online education, clinical observation, supervised training, and independent procedural competency are different levels of professional learning. A fellowship certificate does not automatically establish independent surgical competence.</p>
              </div>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Compare the Curriculum</h3>
                <p className="text-text-secondary mb-6">Explore the MedFellow Academy Fellowship in Spine Surgery and compare its seven modules with your professional goals.</p>
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
            <Link href="/blog/questions-to-ask-before-joining-a-spine-surgery-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Questions to Ask Before Joining a Spine Surgery Fellowship</h3>
              <p className="text-sm text-text-secondary">The questions every doctor should ask before applying...</p>
            </Link>
            <Link href="/blog/online-vs-offline-spine-surgery-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Online vs Offline Spine Surgery Fellowship</h3>
              <p className="text-sm text-text-secondary">Compare online, offline and hybrid formats for a surgical spine fellowship...</p>
            </Link>
            <Link href="/blog/skills-you-learn-during-a-spine-surgery-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Clinical Skills</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Skills You Learn During a Spine Surgery Fellowship</h3>
              <p className="text-sm text-text-secondary">Assessment, imaging, surgical planning, deformity, minimally invasive concepts and postoperative care...</p>
            </Link>
          </div>
        </div></div>
      </section>
      <Footer />
    </div>
  );
}

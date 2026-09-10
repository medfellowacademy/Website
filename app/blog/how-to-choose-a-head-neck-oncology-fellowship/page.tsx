import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import TopicClusterLinks from "@/components/TopicClusterLinks";
import Link from "next/link";
import Image from "next/image";

const CLUSTER_LINKS = [
  { label: "Best Fellowship Course in Head & Neck Oncology (Guide)", href: "/courses/best-fellowship-course-in-head-neck-oncology", type: "guide" as const },
  { label: "How to Choose a Head & Neck Oncology Fellowship", href: "/blog/how-to-choose-a-head-neck-oncology-fellowship", type: "blog" as const },
  { label: "Questions to Ask Before Joining a Head & Neck Oncology Fellowship", href: "/blog/questions-to-ask-before-joining-a-head-neck-oncology-fellowship", type: "blog" as const },
  { label: "Online vs Offline Head & Neck Oncology Fellowship", href: "/blog/online-vs-offline-head-neck-oncology-fellowship", type: "blog" as const },
  { label: "Skills You Learn During a Head & Neck Oncology Fellowship", href: "/blog/skills-you-learn-during-a-head-neck-oncology-fellowship", type: "blog" as const },
  { label: "Career Opportunities After a Head & Neck Oncology Fellowship", href: "/blog/career-opportunities-after-a-head-neck-oncology-fellowship", type: "blog" as const },
];

export const metadata: Metadata = {
  title: "How to Choose a Head & Neck Oncology Fellowship | MedFellow",
  description:
    "A practical framework for choosing a head & neck oncology fellowship — career goals, curriculum depth, faculty, clinical and surgical exposure, tumor boards, reconstruction, format, eligibility, certification and fees.",
  keywords:
    "how to choose a head & neck oncology fellowship, best head & neck oncology fellowship, head & neck oncology fellowship course, head and neck surgical oncology fellowship, head & neck oncology training",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/how-to-choose-a-head-neck-oncology-fellowship/" },
  openGraph: {
    title: "How to Choose a Head & Neck Oncology Fellowship",
    description: "Career goals, curriculum depth, faculty, clinical exposure, tumor boards, reconstruction, format, eligibility, certification and fees.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/how-to-choose-a-head-neck-oncology-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: { card: "summary_large_image", title: "How to Choose a Head & Neck Oncology Fellowship", description: "A framework for comparing head and neck oncology fellowships." },
};

const FAQS = [
  { q: "What matters most when choosing a head & neck oncology fellowship?", a: "The curriculum should reflect how head and neck cancer is actually managed — diagnosis, staging, site-specific cancers, surgical oncology, reconstruction, radiation, systemic therapy, postoperative care, and survivorship — supported by experienced faculty and multidisciplinary (tumor board) learning." },
  { q: "Does 'surgical' in a fellowship title mean operative training?", a: "Not necessarily. Ask whether surgeries are observed, whether supervised participation is possible, how much hospital exposure is provided, and who supervises. Observation and independent operative competency are not the same." },
  { q: "How important is tumor board exposure?", a: "Very. Tumor boards show how surgery, radiation oncology, medical oncology, radiology, and pathology contribute to treatment planning. Ask how often they are held, whether fellows present cases, and whether faculty give feedback." },
  { q: "Should the curriculum include reconstruction?", a: "Yes. Head and neck cancer surgery can create complex functional and anatomical defects, so a strong program connects ablative surgery with reconstruction and functional rehabilitation." },
  { q: "What eligibility should I check?", a: "Which qualifications are accepted, any experience requirements, and international registration rules. Accredited head and neck oncologic surgery fellowships generally expect completion of a recognised surgical residency; educational fellowships may differ." },
  { q: "What does the certificate represent?", a: "Understand who issues it, whether there is an assessment, and what it means. Completing a fellowship does not automatically provide specialist registration, specialist status, independent surgical privileges, or a formal super-specialty qualification." },
  { q: "How should I compare fees?", a: "Compare total cost including registration, assessment, any clinical placement, travel, accommodation, and materials — then compare value across curriculum depth, faculty access, clinical exposure, tumor board participation, reconstruction training, assessment, and support." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Choose a Head & Neck Oncology Fellowship",
  description: "A practical framework for comparing head and neck oncology fellowship providers before enrolling.",
  image: "https://www.medfellowacademy.com/courses/head-neck-oncology.jpg",
  datePublished: "2026-09-10",
  dateModified: "2026-09-10",
  author: { "@type": "Organization", name: "MedFellow Academy" },
  publisher: { "@type": "Organization", name: "MedFellow Academy", logo: { "@type": "ImageObject", url: "https://www.medfellowacademy.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.medfellowacademy.com/blog/how-to-choose-a-head-neck-oncology-fellowship/" },
};

const FACTORS = [
  { title: "Start with your career goal", text: "Decide what you want the fellowship to achieve — advanced oncology knowledge, surgical oncology exposure, reconstruction training, multidisciplinary cancer care, or academic and research development. Your objective should influence every other decision." },
  { title: "Evaluate the curriculum", text: "Ask for the complete syllabus. Check cancer-site coverage across oral cavity, oropharynx, hypopharynx, larynx, nasopharynx, salivary glands, thyroid and sinonasal tract; diagnostic and staging content (including TNM); surgical oncology; reconstruction; and non-surgical oncology (radiation and systemic therapy)." },
  { title: "Check faculty and mentorship", text: "Review faculty experience in head and neck surgical oncology and related specialties, look for multidisciplinary faculty, and ask how often fellows actually interact with them — live, virtually, in case discussions, or in clinical settings." },
  { title: "Clarify clinical and surgical exposure", text: "Ask about case volume, which procedures or surgical areas are covered, your role (observation, planning sessions, supervised participation), and supervision. Separate exposure from competency." },
  { title: "Confirm tumor board participation", text: "Ask how often tumor boards are held, whether fellows present cases, whether different specialties are represented, and whether experienced faculty explain the reasoning behind treatment choices." },
  { title: "Assess the reconstruction component", text: "Understand the reconstructive curriculum, whether functional rehabilitation is included, and whether reconstruction is integrated with oncologic decision-making." },
  { title: "Choose the right format", text: "Online suits working doctors who need flexibility; offline offers more direct faculty interaction and hospital exposure; hybrid combines structured online academics with selected in-person or clinical components. Match the format to your learning outcomes." },
  { title: "Check eligibility, certification and fees", text: "Verify accepted qualifications and experience requirements, understand who issues the certificate and what it represents, and compare the full cost — not just the advertised tuition — against overall educational value." },
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
              <span>How to Choose a Head &amp; Neck Oncology Fellowship</span>
            </div>
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">Fellowship Guides</span>
              <span className="text-sm text-text-secondary">⏱️ 11 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">How to Choose a Head &amp; Neck Oncology Fellowship</h1>
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">MA</div>
                <div><p className="font-semibold text-primary">Med Fellow Academy</p><p className="text-sm text-text-secondary">Medical Education Experts</p></div>
              </div>
            </div>
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10">
              <Image src="/courses/head-neck-oncology.jpg" alt="How to Choose a Head and Neck Oncology Fellowship" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Head and neck oncology fellowships can look very similar on the surface — most mention advanced
                oncology, surgical training, reconstruction, multidisciplinary care, and research. The actual
                learning experience varies significantly with the curriculum, faculty, clinical exposure, case
                volume, tumor board participation, and format. This guide is a practical framework for comparing
                providers before you decide.
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

              <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg mb-8 not-prose">
                <p className="text-sm text-text-secondary leading-relaxed">
                  Do not assume a fellowship advertised as &quot;surgical&quot; automatically means independent
                  operative training. Independent surgical competency depends on formal training, supervised
                  experience, demonstrated performance, assessment, institutional privileges, and regulatory
                  requirements — a certificate is not automatic evidence of independent procedural competence.
                </p>
              </div>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Compare the Curriculum</h3>
                <p className="text-text-secondary mb-6">Explore the MedFellow Academy Fellowship in Head &amp; Neck Oncology and compare its ten modules with your current knowledge and goals.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/courses/fellowship-in-head-neck-oncology" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-center">View Fellowship Details</Link>
                  <Link href="/courses/best-fellowship-course-in-head-neck-oncology" className="inline-block px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all text-center">Read the Full Guide</Link>
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
          <div className="lg:col-span-1"><TopicClusterLinks title="Head & Neck Oncology Resources" links={CLUSTER_LINKS} /></div>
          </div>
        </div>
      </article>
      <FAQ faqs={FAQS} />
      <section className="section-padding bg-background">
        <div className="container-custom"><div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-primary mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/courses/best-fellowship-course-in-head-neck-oncology" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">Fellowship Guide</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Best Fellowship Course in Head &amp; Neck Oncology</h3>
              <p className="text-sm text-text-secondary">A complete guide to curriculum, learning format, eligibility, fees and career pathways...</p>
            </Link>
            <Link href="/blog/questions-to-ask-before-joining-a-head-neck-oncology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Questions to Ask Before Joining a Head &amp; Neck Oncology Fellowship</h3>
              <p className="text-sm text-text-secondary">A 15-question checklist plus red flags to watch for...</p>
            </Link>
            <Link href="/blog/online-vs-offline-head-neck-oncology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Online vs Offline Head &amp; Neck Oncology Fellowship</h3>
              <p className="text-sm text-text-secondary">Compare online, offline and hybrid formats for a surgical oncology fellowship...</p>
            </Link>
            <Link href="/blog/skills-you-learn-during-a-head-neck-oncology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Clinical Skills</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Skills You Learn During a Head &amp; Neck Oncology Fellowship</h3>
              <p className="text-sm text-text-secondary">Assessment, staging, surgical reasoning, reconstruction awareness and multidisciplinary skills...</p>
            </Link>
          </div>
        </div></div>
      </section>
      <Footer />
    </div>
  );
}

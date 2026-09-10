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
  title: "Career Opportunities After a Head & Neck Oncology Fellowship | MedFellow",
  description:
    "Career pathways after a head & neck oncology fellowship — surgical oncology teams, multidisciplinary cancer care, reconstructive and functional care, academic medicine, research and further training.",
  keywords:
    "career after head & neck oncology fellowship, head & neck oncology fellowship career, head and neck surgical oncology jobs, head & neck oncology fellowship, head & neck oncology training",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/career-opportunities-after-a-head-neck-oncology-fellowship/" },
  openGraph: {
    title: "Career Opportunities After a Head & Neck Oncology Fellowship",
    description: "Surgical oncology teams, multidisciplinary cancer care, reconstructive and functional care, academic medicine, research and further training.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/career-opportunities-after-a-head-neck-oncology-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: { card: "summary_large_image", title: "Career Opportunities After a Head & Neck Oncology Fellowship", description: "Career pathways after fellowship training in head and neck oncology." },
};

const FAQS = [
  { q: "What can I do after a head and neck oncology fellowship?", a: "Depending on your existing qualifications and scope, you may work within head and neck surgical oncology teams, multidisciplinary cancer care, reconstructive and functional care, academic medicine, or clinical research — and use the fellowship as part of a pathway toward further training." },
  { q: "Can a fellowship alone make me a head and neck surgical oncologist?", a: "Not on its own. Independent specialist practice depends on formal specialist or super-specialty training, supervised experience, assessment, registration, and hospital credentialing. An educational fellowship complements that pathway." },
  { q: "Does the fellowship help with tumor board and multidisciplinary work?", a: "Yes. Fellows learn to participate in tumor boards, understand multimodality treatment, and coordinate longitudinal patient care across specialties." },
  { q: "Is there scope in reconstructive and functional care?", a: "Understanding microvascular reconstruction, functional preservation, and reconstructive team practice is professionally valuable, especially alongside oncologic decision-making." },
  { q: "Can it support an academic career?", a: "Yes — teaching students, residents and junior doctors, presenting at conferences, publishing, and building a faculty career are common directions." },
  { q: "What further training might follow?", a: "Advanced surgical fellowships, research fellowships, international training, and continuing medical education are typical next steps, depending on your goals and eligibility." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Career Opportunities After a Head & Neck Oncology Fellowship",
  description: "Career pathways and professional growth after completing a head and neck oncology fellowship.",
  image: "https://www.medfellowacademy.com/courses/head-neck-oncology.jpg",
  datePublished: "2026-09-10",
  dateModified: "2026-09-10",
  author: { "@type": "Organization", name: "MedFellow Academy" },
  publisher: { "@type": "Organization", name: "MedFellow Academy", logo: { "@type": "ImageObject", url: "https://www.medfellowacademy.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.medfellowacademy.com/blog/career-opportunities-after-a-head-neck-oncology-fellowship/" },
};

const PATHWAYS = [
  { title: "Head & Neck Surgical Oncology", text: "Working within head and neck surgical oncology teams in cancer centres, medical colleges, and multispecialty hospitals — aligned with your existing qualifications and scope." },
  { title: "Multidisciplinary Cancer Care", text: "Participating in tumor boards, understanding multimodality treatment, and coordinating longitudinal patient care with radiation and medical oncology, radiology, and pathology." },
  { title: "Reconstructive and Functional Care", text: "Contributing to microvascular reconstruction, functional preservation, and reconstructive team practice alongside oncologic surgery." },
  { title: "Academic Medicine", text: "Teaching medical students, residents and junior doctors, presenting at conferences, and building a faculty career." },
  { title: "Clinical and Translational Research", text: "Clinical research, translational research, clinical trials, and publications — building a research portfolio in the specialty." },
  { title: "Further Specialty Training", text: "Advanced surgical fellowships, research fellowships, international training, and continuing medical education as next steps." },
];

const BUILD = ["Build a strong clinical foundation", "Participate actively in cases", "Build your academic portfolio", "Develop professional connections", "Continue learning after graduation"];

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
              <span>Career Opportunities After a Head &amp; Neck Oncology Fellowship</span>
            </div>
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">Career Planning</span>
              <span className="text-sm text-text-secondary">⏱️ 9 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Career Opportunities After a Head &amp; Neck Oncology Fellowship</h1>
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">MA</div>
                <div><p className="font-semibold text-primary">Med Fellow Academy</p><p className="text-sm text-text-secondary">Medical Education Experts</p></div>
              </div>
            </div>
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10">
              <Image src="/courses/head-neck-oncology.jpg" alt="Career Opportunities After a Head and Neck Oncology Fellowship" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                The value of a head &amp; neck oncology fellowship should be considered alongside your existing
                qualifications and professional scope. Advanced specialty education can support work in oncology
                teams and open academic, research, and further-training pathways — the current MedFellow course
                identifies career directions including Head &amp; Neck Oncologic Surgeon, Otolaryngologist-
                Oncologist, and Skull Base Surgeon.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Career Pathways After the Fellowship</h2>
              <div className="space-y-4 mb-8 not-prose">
                {PATHWAYS.map((r, i) => (
                  <div key={r.title} className="card p-5">
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#15401E] text-white text-[0.8125rem] font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                      <div><h3 className="text-[1rem] font-bold text-primary mb-1">{r.title}</h3><p className="text-sm text-text-secondary leading-relaxed">{r.text}</p></div>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">How to Make the Most of It</h2>
              <div className="space-y-2 mb-8 not-prose">
                {BUILD.map((c) => (<div key={c} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary"><span className="text-secondary mt-0.5">✓</span><span>{c}</span></div>))}
              </div>

              <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg mb-8 not-prose">
                <p className="text-sm text-text-secondary leading-relaxed">A fellowship alone does not make you a head and neck surgical oncologist. Independent specialist practice depends on formal specialist or super-specialty training, supervised experience, assessment, registration, and hospital credentialing. Career outcomes also depend on your existing qualifications, experience, employer, and local regulations.</p>
              </div>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Choose Your Next Career Step</h3>
                <p className="text-text-secondary mb-6">Explore the MedFellow Academy Fellowship in Head &amp; Neck Oncology to review the curriculum, clinical component, and how it fits your professional development plan.</p>
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
            <Link href="/blog/skills-you-learn-during-a-head-neck-oncology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Clinical Skills</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Skills You Learn During a Head &amp; Neck Oncology Fellowship</h3>
              <p className="text-sm text-text-secondary">Assessment, staging, surgical reasoning, reconstruction awareness and multidisciplinary skills...</p>
            </Link>
            <Link href="/blog/how-to-choose-a-head-neck-oncology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">How to Choose a Head &amp; Neck Oncology Fellowship</h3>
              <p className="text-sm text-text-secondary">A practical framework for comparing fellowship providers...</p>
            </Link>
            <Link href="/blog/questions-to-ask-before-joining-a-head-neck-oncology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Questions to Ask Before Joining a Head &amp; Neck Oncology Fellowship</h3>
              <p className="text-sm text-text-secondary">A 15-question checklist plus red flags to watch for...</p>
            </Link>
          </div>
        </div></div>
      </section>
      <Footer />
    </div>
  );
}

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
  title: "Skills You Learn During a Head & Neck Oncology Fellowship | MedFellow",
  description:
    "The clinical, diagnostic, surgical-reasoning, reconstruction, multidisciplinary, research and communication skills doctors build during a head & neck oncology fellowship.",
  keywords:
    "head & neck oncology fellowship skills, skills in head & neck oncology, head and neck surgical oncology training, head & neck oncology fellowship curriculum, head & neck oncology training",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/skills-you-learn-during-a-head-neck-oncology-fellowship/" },
  openGraph: {
    title: "Skills You Learn During a Head & Neck Oncology Fellowship",
    description: "Clinical assessment, diagnosis and staging, surgical reasoning, reconstruction awareness, multidisciplinary care, research and communication.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/skills-you-learn-during-a-head-neck-oncology-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: { card: "summary_large_image", title: "Skills You Learn During a Head & Neck Oncology Fellowship", description: "The clinical and decision-making skills developed in a head and neck oncology fellowship." },
};

const FAQS = [
  { q: "Will I learn to operate during a head & neck oncology fellowship?", a: "You build strong knowledge of surgical indications, oncologic resection principles, site-specific surgery, and functional planning. Independent operative competency requires formal, supervised, assessed surgical training beyond an educational fellowship." },
  { q: "Is staging a core skill?", a: "Yes. Understanding TNM staging and how stage influences treatment intent, modality choice, and prognosis is central to head and neck oncology practice." },
  { q: "Does the fellowship build reconstruction skills?", a: "It builds reconstruction awareness — understanding reconstructive options, matching reconstruction to the defect, and post-reconstruction care — and how reconstruction integrates with oncologic decisions." },
  { q: "How much of the learning is multidisciplinary?", a: "A significant part. Fellows learn to present cases clearly, defend a treatment plan, understand different specialist perspectives, and participate in collaborative tumor board decisions." },
  { q: "Are research skills included?", a: "Yes — searching and critically reading the literature, developing clinical questions, participating in research projects, and understanding clinical trials." },
  { q: "What communication skills are developed?", a: "Explaining complex treatment plans, discussing functional consequences, communicating difficult news, and working effectively with other specialists." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Skills You Learn During a Head & Neck Oncology Fellowship",
  description: "The clinical, diagnostic, surgical-reasoning, reconstruction, multidisciplinary, research and communication skills developed during a head and neck oncology fellowship.",
  image: "https://www.medfellowacademy.com/courses/head-neck-oncology.jpg",
  datePublished: "2026-09-10",
  dateModified: "2026-09-10",
  author: { "@type": "Organization", name: "MedFellow Academy" },
  publisher: { "@type": "Organization", name: "MedFellow Academy", logo: { "@type": "ImageObject", url: "https://www.medfellowacademy.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.medfellowacademy.com/blog/skills-you-learn-during-a-head-neck-oncology-fellowship/" },
};

const SKILL_AREAS = [
  { title: "Clinical Assessment and Diagnosis", text: "Recognising common head and neck cancers, building a structured diagnostic approach, and improving imaging interpretation to connect clinical findings with pathology." },
  { title: "Cancer Staging and Treatment Intent", text: "Understanding TNM staging, treatment intent (curative vs palliative), how to compare treatment modalities, and patient-specific planning based on health, function, and goals." },
  { title: "Surgical Oncology Reasoning", text: "Surgical indications, oncologic resection principles, site-specific surgery, margins and neck management, and planning around functional outcomes." },
  { title: "Reconstruction Awareness", text: "Reconstruction principles, reconstructive options, matching reconstruction to the defect, and post-reconstruction care — integrated with oncologic decisions." },
  { title: "Multidisciplinary Cancer Care", text: "Presenting cases clearly, defending a treatment plan, understanding specialist perspectives, and participating in collaborative tumor board decisions." },
  { title: "Postoperative and Survivorship Care", text: "Postoperative monitoring, recognising common complications early, survivorship, palliative care principles, and supporting long-term patient needs." },
  { title: "Research and Evidence Appraisal", text: "Searching and critically reading medical literature, developing clinical questions, participating in research projects, and understanding clinical trials." },
  { title: "Communication and Leadership", text: "Explaining complex treatment plans, discussing functional consequences, communicating difficult news, working across specialties, and developing leadership skills." },
];

const FOR_WHOM = [
  { title: "For clinical assessment", text: "Structured evaluation, diagnostic reasoning, and staging." },
  { title: "For surgical development", text: "Indications, oncologic principles, and functional planning knowledge." },
  { title: "For multidisciplinary care", text: "Tumor board participation and collaborative decision-making." },
  { title: "For academic growth", text: "Literature appraisal, research participation, and presentation skills." },
  { title: "For working doctors", text: "A flexible pathway to build all of the above alongside clinical practice." },
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
              <span>Skills You Learn During a Head &amp; Neck Oncology Fellowship</span>
            </div>
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">Clinical Skills</span>
              <span className="text-sm text-text-secondary">⏱️ 10 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Skills You Learn During a Head &amp; Neck Oncology Fellowship</h1>
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">MA</div>
                <div><p className="font-semibold text-primary">Med Fellow Academy</p><p className="text-sm text-text-secondary">Medical Education Experts</p></div>
              </div>
            </div>
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10">
              <Image src="/courses/head-neck-oncology.jpg" alt="Skills You Learn During a Head and Neck Oncology Fellowship" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Head and neck oncology sits at the intersection of anatomy, pathology, imaging, surgery,
                radiation, systemic therapy, reconstruction, and rehabilitation. A structured fellowship builds
                the reasoning to move from clinical suspicion to a multidisciplinary treatment plan — and to
                follow patients through recovery, survivorship, and evidence-based follow-up.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">8 Skill Areas Developed in Fellowship Training</h2>
              <div className="space-y-4 mb-8 not-prose">
                {SKILL_AREAS.map((s, i) => (
                  <div key={s.title} className="card p-5">
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#15401E] text-white text-[0.8125rem] font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                      <div><h3 className="text-[1rem] font-bold text-primary mb-1">{s.title}</h3><p className="text-sm text-text-secondary leading-relaxed">{s.text}</p></div>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Which Skills to Prioritise</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-8 not-prose">
                {FOR_WHOM.map((c) => (
                  <div key={c.title} className="card p-4"><h3 className="text-[0.9375rem] font-bold text-primary mb-1.5">{c.title}</h3><p className="text-[0.8125rem] text-text-secondary leading-relaxed">{c.text}</p></div>
                ))}
              </div>

              <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg mb-8 not-prose">
                <p className="text-sm text-text-secondary leading-relaxed">Fellowship learning strengthens knowledge and clinical reasoning. Independent operative competency requires formal, supervised, assessed surgical training, and a fellowship certificate is not a substitute for specialist or super-specialty qualification.</p>
              </div>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Explore the Full Training Path</h3>
                <p className="text-text-secondary mb-6">Explore the MedFellow Academy Fellowship in Head &amp; Neck Oncology and review how each skill area is taught and assessed.</p>
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
            <Link href="/blog/career-opportunities-after-a-head-neck-oncology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Career Planning</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Career Opportunities After a Head &amp; Neck Oncology Fellowship</h3>
              <p className="text-sm text-text-secondary">Oncology teams, skull base care, academics, research and further training...</p>
            </Link>
            <Link href="/blog/how-to-choose-a-head-neck-oncology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">How to Choose a Head &amp; Neck Oncology Fellowship</h3>
              <p className="text-sm text-text-secondary">A practical framework for comparing fellowship providers...</p>
            </Link>
            <Link href="/blog/online-vs-offline-head-neck-oncology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Online vs Offline Head &amp; Neck Oncology Fellowship</h3>
              <p className="text-sm text-text-secondary">Compare online, offline and hybrid formats for a surgical oncology fellowship...</p>
            </Link>
          </div>
        </div></div>
      </section>
      <Footer />
    </div>
  );
}

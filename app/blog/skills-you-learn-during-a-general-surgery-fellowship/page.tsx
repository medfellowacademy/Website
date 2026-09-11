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
  title: "Skills You Learn During a General Surgery Fellowship | MedFellow",
  description:
    "The clinical assessment, emergency, laparoscopic, hernia, gastrointestinal, perioperative, critical-care and procedural skills doctors build during a general surgery fellowship.",
  keywords:
    "general surgery fellowship skills, skills in general surgery fellowship, general surgery training skills, general surgery fellowship curriculum, general surgery training",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/skills-you-learn-during-a-general-surgery-fellowship/" },
  openGraph: {
    title: "Skills You Learn During a General Surgery Fellowship",
    description: "Clinical assessment, emergency management, laparoscopic principles, perioperative care, critical care, and procedural skills.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/skills-you-learn-during-a-general-surgery-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: { card: "summary_large_image", title: "Skills You Learn During a General Surgery Fellowship", description: "The clinical and decision-making skills developed in a general surgery fellowship." },
};

const FAQS = [
  { q: "Will I learn to perform surgical procedures?", a: "You build strong knowledge of surgical planning, patient selection, and procedural principles across laparoscopy, hernia repair, and basic procedures. Independent operative competency requires formal, supervised, assessed surgical training beyond an educational fellowship." },
  { q: "Does the fellowship cover emergency surgery skills?", a: "Yes — acute abdomen assessment, trauma assessment, recognising surgical emergencies, and prioritising management under time pressure." },
  { q: "Is imaging interpretation part of the training?", a: "Yes. Interpreting basic surgical investigations and imaging, and connecting imaging findings with the patient's clinical picture, are core skills." },
  { q: "What perioperative skills are developed?", a: "Preoperative optimisation, postoperative monitoring, recognising complications early, and understanding recovery." },
  { q: "Does it include critical care skills?", a: "Yes — assessing the unstable patient, understanding surgical critical care principles, recognising when to escalate, and decision-making under pressure." },
  { q: "What procedural skills are covered?", a: "Wound management, basic surgical procedures, drain and catheter management, suturing and tissue handling, and procedure safety." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Skills You Learn During a General Surgery Fellowship",
  description: "The clinical, diagnostic and decision-making skills doctors develop during a general surgery fellowship.",
  image: "https://www.medfellowacademy.com/courses/general-surgery.jpg",
  datePublished: "2026-09-11",
  dateModified: "2026-09-11",
  author: { "@type": "Organization", name: "MedFellow Academy" },
  publisher: { "@type": "Organization", name: "MedFellow Academy", logo: { "@type": "ImageObject", url: "https://www.medfellowacademy.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.medfellowacademy.com/blog/skills-you-learn-during-a-general-surgery-fellowship/" },
};

const SKILL_AREAS = [
  { title: "Clinical Assessment and Decision-Making", text: "Clinical assessment, decision-making, surgical risk assessment, and perioperative planning for common and complex surgical conditions." },
  { title: "Emergency and Trauma Skills", text: "Acute abdomen assessment, trauma assessment, recognising surgical emergencies, and prioritising management under pressure." },
  { title: "Laparoscopic and Hernia Skills", text: "Laparoscopic surgery principles, patient selection, hernia assessment, and hernia repair principles." },
  { title: "Gastrointestinal and Hepatobiliary Knowledge", text: "Gastrointestinal assessment, understanding common surgical conditions, surgical planning skills, and hepatobiliary and pancreatic knowledge." },
  { title: "Perioperative Care", text: "Preoperative optimisation, postoperative monitoring, recognising complications, and understanding recovery." },
  { title: "Critical Care Skills", text: "Assessing the unstable patient, surgical critical care principles, recognising when to escalate, and decision-making under pressure." },
  { title: "Diagnostic and Imaging Skills", text: "Interpreting basic surgical investigations and imaging, and connecting imaging findings with the patient's clinical picture." },
  { title: "Procedural Skills", text: "Wound management, basic surgical procedures, drain and catheter management, suturing and tissue handling, and procedure safety." },
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
              <span>Skills You Learn During a General Surgery Fellowship</span>
            </div>
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">Clinical Skills</span>
              <span className="text-sm text-text-secondary">⏱️ 10 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Skills You Learn During a General Surgery Fellowship</h1>
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">MA</div>
                <div><p className="font-semibold text-primary">Med Fellow Academy</p><p className="text-sm text-text-secondary">Medical Education Experts</p></div>
              </div>
            </div>
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10">
              <Image src="/courses/general-surgery.jpg" alt="Skills You Learn During a General Surgery Fellowship" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                General surgery draws on assessment, diagnostics, operative planning, perioperative care, and
                critical thinking under pressure. A structured fellowship builds the reasoning to move from a
                patient&apos;s presentation through investigation to a safe, well-planned surgical decision —
                across gastrointestinal, hepatobiliary, hernia, laparoscopic, trauma, and critical-care contexts.
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

              <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg mb-8 not-prose">
                <p className="text-sm text-text-secondary leading-relaxed">Fellowship learning strengthens knowledge and clinical reasoning. Independent operative competency requires formal, supervised, assessed surgical training, and a fellowship certificate is not a substitute for a specialist qualification.</p>
              </div>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Build Skills That Improve Patient Care</h3>
                <p className="text-text-secondary mb-6">Explore the MedFellow Academy Fellowship in General Surgery and review how each skill area is taught and assessed across the 15 modules.</p>
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
            <Link href="/blog/is-a-general-surgery-fellowship-worth-it" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Career Planning</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Is a General Surgery Fellowship Worth It?</h3>
              <p className="text-sm text-text-secondary">The benefits, limitations, and factors to consider before enrolling...</p>
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

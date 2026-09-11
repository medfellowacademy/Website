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
  title: "Skills You Learn During a Spine Surgery Fellowship | MedFellow",
  description:
    "The clinical assessment, imaging, surgical-planning, degenerative, trauma, deformity, minimally invasive and postoperative-care skills doctors build in a spine surgery fellowship.",
  keywords:
    "spine surgery fellowship skills, skills in spine surgery fellowship, spine surgery training skills, spine surgery fellowship curriculum, spine surgery training",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/skills-you-learn-during-a-spine-surgery-fellowship/" },
  openGraph: {
    title: "Skills You Learn During a Spine Surgery Fellowship",
    description: "Assessment, imaging interpretation, surgical planning, degenerative and trauma management, deformity, minimally invasive concepts, and postoperative care.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/skills-you-learn-during-a-spine-surgery-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: { card: "summary_large_image", title: "Skills You Learn During a Spine Surgery Fellowship", description: "The clinical and decision-making skills developed in a spine surgery fellowship." },
};

const FAQS = [
  { q: "Will I learn to operate during a spine surgery fellowship?", a: "You build strong knowledge of surgical indications, approaches, instrumentation principles, and complex case planning. Independent operative competency requires formal, supervised, assessed surgical training beyond an educational fellowship." },
  { q: "How important is imaging interpretation?", a: "Central. Spine decisions depend on correlating history and examination with X-ray, CT, and MRI findings, and using imaging for surgical planning." },
  { q: "Does the fellowship cover trauma and deformity separately?", a: "Yes. Trauma covers assessment of traumatic spine injuries, neurological risk, stabilisation principles, and emergency decision-making. Deformity covers spinal alignment, adult deformity, pediatric spine conditions, and complex reconstruction." },
  { q: "Are minimally invasive concepts included?", a: "Yes — MIS principles, navigation concepts, and advanced technology are typically introduced, with depth varying by program." },
  { q: "What postoperative skills are developed?", a: "Immediate postoperative monitoring, recognising postoperative complications, understanding rehabilitation, and connecting history, examination, and imaging through follow-up." },
  { q: "Are these skills useful for both orthopaedic surgeons and neurosurgeons?", a: "Yes. MedFellow's current eligibility lists MS/MD/DNB Orthopaedics or Neurosurgery, and the curriculum is designed to be relevant to both backgrounds." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Skills You Learn During a Spine Surgery Fellowship",
  description: "The clinical, diagnostic and decision-making skills doctors develop during a spine surgery fellowship.",
  image: "https://www.medfellowacademy.com/courses/spine-surgery.jpg",
  datePublished: "2026-09-11",
  dateModified: "2026-09-11",
  author: { "@type": "Organization", name: "MedFellow Academy" },
  publisher: { "@type": "Organization", name: "MedFellow Academy", logo: { "@type": "ImageObject", url: "https://www.medfellowacademy.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.medfellowacademy.com/blog/skills-you-learn-during-a-spine-surgery-fellowship/" },
};

const SKILL_AREAS = [
  { title: "Spine History and Examination", text: "Taking a focused spine history, performing an examination, recognising red flags, and connecting symptoms with underlying pathology." },
  { title: "Imaging Interpretation", text: "X-ray evaluation, MRI interpretation, CT imaging, and using imaging findings for surgical planning." },
  { title: "Surgical Indications and Planning", text: "Understanding surgical indications, comparing surgical and conservative options, surgical approaches, instrumentation, and complex case planning." },
  { title: "Degenerative Spine Management", text: "Common degenerative conditions, decompression principles, fusion principles, and matching treatment to the patient." },
  { title: "Spine Trauma", text: "Assessing traumatic spine injuries, recognising neurological risk, stabilisation principles, and emergency decision-making." },
  { title: "Deformity Assessment", text: "Understanding spinal alignment, adult deformity, pediatric spine conditions, and complex reconstruction." },
  { title: "Minimally Invasive Concepts", text: "MIS principles, navigation concepts, and advanced technology in spine surgery." },
  { title: "Postoperative Care", text: "Immediate postoperative monitoring, recognising complications, understanding rehabilitation, and connecting history, examination, and imaging on follow-up." },
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
              <span>Skills You Learn During a Spine Surgery Fellowship</span>
            </div>
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">Clinical Skills</span>
              <span className="text-sm text-text-secondary">⏱️ 10 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Skills You Learn During a Spine Surgery Fellowship</h1>
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">MA</div>
                <div><p className="font-semibold text-primary">Med Fellow Academy</p><p className="text-sm text-text-secondary">Medical Education Experts</p></div>
              </div>
            </div>
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10">
              <Image src="/courses/spine-surgery.jpg" alt="Skills You Learn During a Spine Surgery Fellowship" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Spine surgery draws on anatomy, biomechanics, imaging, surgical decision-making, and
                rehabilitation. A structured fellowship builds the reasoning to move from a patient&apos;s history
                and examination through imaging correlation to a defensible treatment plan — across degenerative
                disease, trauma, deformity, and minimally invasive techniques.
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
                <p className="text-text-secondary mb-6">Explore the MedFellow Academy Fellowship in Spine Surgery and review how each skill area is taught and assessed across the seven modules.</p>
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
            <Link href="/blog/is-a-spine-surgery-fellowship-worth-it" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Career Planning</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Is a Spine Surgery Fellowship Worth It?</h3>
              <p className="text-sm text-text-secondary">The benefits, limitations, and factors to consider before enrolling...</p>
            </Link>
            <Link href="/blog/how-to-choose-a-spine-surgery-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">How to Choose a Spine Surgery Fellowship</h3>
              <p className="text-sm text-text-secondary">A practical framework for comparing fellowship providers...</p>
            </Link>
            <Link href="/blog/online-vs-offline-spine-surgery-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Online vs Offline Spine Surgery Fellowship</h3>
              <p className="text-sm text-text-secondary">Compare online, offline and hybrid formats for a surgical spine fellowship...</p>
            </Link>
          </div>
        </div></div>
      </section>
      <Footer />
    </div>
  );
}

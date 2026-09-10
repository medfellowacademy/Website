import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import TopicClusterLinks from "@/components/TopicClusterLinks";
import Link from "next/link";
import Image from "next/image";

const CLUSTER_LINKS = [
  { label: "Best Fellowship Course in Urology (Guide)", href: "/best-fellowship-course-in-urology", type: "guide" as const },
  { label: "How to Choose a Urology Fellowship", href: "/blog/how-to-choose-a-urology-fellowship", type: "blog" as const },
  { label: "Questions to Ask Before Joining a Urology Fellowship", href: "/blog/questions-to-ask-before-joining-a-urology-fellowship", type: "blog" as const },
  { label: "Online vs Offline Urology Fellowship", href: "/blog/online-vs-offline-urology-fellowship", type: "blog" as const },
  { label: "Career Opportunities After a Urology Fellowship", href: "/blog/career-opportunities-after-a-urology-fellowship", type: "blog" as const },
  { label: "Who Can Apply for a Urology Fellowship? Eligibility Guide", href: "/blog/who-can-apply-for-a-urology-fellowship-eligibility-guide", type: "blog" as const },
  { label: "Skills You Will Learn During a Urology Fellowship", href: "/blog/skills-you-will-learn-during-a-urology-fellowship", type: "blog" as const },
];

export const metadata: Metadata = {
  title: "Skills You Will Learn During a Urology Fellowship | MedFellow",
  description:
    "The clinical, diagnostic and decision-making skills doctors build in a urology fellowship — assessment, diagnostics, endourology, uro-oncology, counselling and case-based reasoning.",
  keywords:
    "urology fellowship skills, skills in urology fellowship, urology training skills, urology fellowship curriculum, fellowship in urology",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/skills-you-will-learn-during-a-urology-fellowship/" },
  openGraph: {
    title: "Skills You Will Learn During a Urology Fellowship",
    description: "Assessment, diagnostics, endourology, uro-oncology, counselling and case-based reasoning.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/skills-you-will-learn-during-a-urology-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: { card: "summary_large_image", title: "Skills You Will Learn During a Urology Fellowship", description: "The clinical and decision-making skills developed in a urology fellowship." },
};

const FAQS = [
  { q: "Will I learn minimally invasive urology during the fellowship?", a: "Most structured fellowships introduce concepts related to endourology, laser procedures, and other minimally invasive approaches. Independent procedural competency still requires supervised clinical training." },
  { q: "Is a fellowship focused only on surgical skills?", a: "No. Alongside surgical concepts, participants strengthen diagnostic reasoning, patient assessment, communication, and evidence-based clinical decision making." },
  { q: "Can I improve my understanding of uro-oncology?", a: "Yes. Many fellowship programs include dedicated modules on common urological cancers, staging, treatment principles, and multidisciplinary care." },
  { q: "Does the fellowship include case discussions?", a: "Yes. Case-based learning is a core component of most fellowships and helps participants apply theoretical concepts to real clinical scenarios." },
  { q: "Are these skills useful for practising surgeons?", a: "Yes. The fellowship is designed to help practising doctors refine their knowledge and stay current while continuing their professional responsibilities." },
  { q: "Can I pursue the fellowship while working?", a: "Many fellowship programs offer flexible online learning with recorded sessions, making them suitable for working healthcare professionals." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Skills You Will Learn During a Urology Fellowship",
  description: "The clinical, diagnostic and decision-making skills doctors develop during a urology fellowship.",
  image: "https://www.medfellowacademy.com/courses/urology.jpg",
  datePublished: "2026-09-10",
  dateModified: "2026-09-10",
  author: { "@type": "Organization", name: "MedFellow Academy" },
  publisher: { "@type": "Organization", name: "MedFellow Academy", logo: { "@type": "ImageObject", url: "https://www.medfellowacademy.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.medfellowacademy.com/blog/skills-you-will-learn-during-a-urology-fellowship/" },
};

const SKILL_AREAS = [
  { title: "Comprehensive Clinical Assessment", text: "Systematic history taking, physical examination, symptom assessment, risk factor identification, differential diagnosis, and clinical documentation for common and complex urological presentations." },
  { title: "Diagnostic Interpretation", text: "Reading urine investigations, ultrasound principles, CT and MRI correlation, and laboratory investigations, and integrating them into diagnostic algorithms and evidence-based decisions." },
  { title: "Endourology and Stone Disease", text: "Kidney stone evaluation, treatment planning, laser lithotripsy concepts, ureteroscopy principles, percutaneous stone management, and recurrence prevention." },
  { title: "Uro-Oncology Principles", text: "Fundamentals of diagnosis, staging, and treatment planning for prostate, bladder, kidney, and testicular cancers, plus patient counselling and follow-up planning." },
  { title: "Clinical Decision Making", text: "Analysing investigations, prioritising treatment options, assessing surgical risk, planning follow-up, discussing multidisciplinary management, and applying current guidelines." },
  { title: "Counselling and Shared Decision Making", text: "Explaining procedures, discussing risks and benefits, managing expectations, supporting informed consent, and long-term follow-up counselling." },
  { title: "Case-Based Clinical Learning", text: "Improved analytical thinking, better treatment planning, exposure to uncommon cases, peer learning, faculty feedback, and evidence-based discussion." },
  { title: "Understanding Modern Technologies", text: "The concepts behind robotic-assisted surgery, laparoscopic techniques, laser applications, digital imaging, and artificial intelligence in urology." },
];

const CAREER_SUPPORT = ["Multispecialty hospitals", "Specialty urology centres", "Academic institutions", "Clinical research", "Medical education", "Advanced surgical practice"];

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
              <span>Skills You Will Learn During a Urology Fellowship</span>
            </div>
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">Clinical Skills</span>
              <span className="text-sm text-text-secondary">⏱️ 10 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Skills You Will Learn During a Urology Fellowship</h1>
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">MA</div>
                <div><p className="font-semibold text-primary">Med Fellow Academy</p><p className="text-sm text-text-secondary">Medical Education Experts</p></div>
              </div>
            </div>
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10">
              <Image src="/courses/urology.jpg" alt="Skills You Will Learn During a Urology Fellowship" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Modern urology is one of the fastest-evolving surgical specialties, with continuous advances in
                minimally invasive procedures, laser technologies, robotic surgery, and evidence-based patient
                care. A structured fellowship goes beyond textbooks — combining academic learning, expert
                guidance, and case-based discussion to build stronger clinical judgment.
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

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">How These Skills Support Professional Growth</h2>
              <p className="text-text-secondary leading-relaxed mb-4">The knowledge gained during a fellowship extends beyond clinical practice — helping doctors build confidence, expand their professional network, and stay current with the specialty. It can support opportunities in:</p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-6 not-prose">
                {CAREER_SUPPORT.map((li) => (<div key={li} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary"><span className="text-secondary mt-0.5">✓</span><span>{li}</span></div>))}
              </div>
              <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg mb-8 not-prose">
                <p className="text-sm text-text-secondary leading-relaxed">Fellowship learning strengthens clinical reasoning and knowledge. Independent procedural competency requires appropriate supervised clinical training, and a fellowship certificate is different from a formal super-specialty qualification.</p>
              </div>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Build Skills That Improve Patient Care</h3>
                <p className="text-text-secondary mb-6">Explore the MedFellow Academy Fellowship in Urology and review how each skill area is taught and assessed.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/courses/fellowship-in-urology" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-center">View Fellowship Details</Link>
                  <Link href="/best-fellowship-course-in-urology" className="inline-block px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all text-center">Read the Full Guide</Link>
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
          <div className="lg:col-span-1"><TopicClusterLinks title="Urology Resources" links={CLUSTER_LINKS} /></div>
          </div>
        </div>
      </article>
      <FAQ faqs={FAQS} />
      <section className="section-padding bg-background">
        <div className="container-custom"><div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-primary mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/best-fellowship-course-in-urology" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">Fellowship Guide</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Best Fellowship Course in Urology</h3>
              <p className="text-sm text-text-secondary">A complete guide to curriculum, learning format, eligibility, and career pathways...</p>
            </Link>
            <Link href="/blog/career-opportunities-after-a-urology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Career Planning</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Career Opportunities After a Urology Fellowship</h3>
              <p className="text-sm text-text-secondary">Specialist career pathways after completing fellowship training...</p>
            </Link>
            <Link href="/blog/how-to-choose-a-urology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">How to Choose a Urology Fellowship</h3>
              <p className="text-sm text-text-secondary">Compare curriculum, faculty, format, and career support before enrolling...</p>
            </Link>
            <Link href="/blog/online-vs-offline-urology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Online vs Offline Urology Fellowship</h3>
              <p className="text-sm text-text-secondary">Compare learning formats to find the option that fits your schedule...</p>
            </Link>
          </div>
        </div></div>
      </section>
      <Footer />
    </div>
  );
}

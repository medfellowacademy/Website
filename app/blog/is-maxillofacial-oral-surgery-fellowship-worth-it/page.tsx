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
  title: "Is a Maxillofacial & Oral Surgery Fellowship Worth It? | MedFellow",
  description:
    "Whether a maxillofacial & oral surgery fellowship is worth it after MDS — the benefits, how it improves clinical practice, career impact, fellowship vs workshops, and when to wait.",
  keywords:
    "is a maxillofacial & oral surgery fellowship worth it, maxillofacial fellowship after MDS, oral surgery fellowship benefits, maxillofacial fellowship course, online maxillofacial fellowship",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/is-maxillofacial-oral-surgery-fellowship-worth-it/" },
  openGraph: {
    title: "Is a Maxillofacial & Oral Surgery Fellowship Worth It?",
    description: "Benefits, clinical impact, career growth, fellowship vs workshops, and when to wait.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/is-maxillofacial-oral-surgery-fellowship-worth-it/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: { card: "summary_large_image", title: "Is a Maxillofacial & Oral Surgery Fellowship Worth It?", description: "Benefits, limitations, and factors to consider before enrolling." },
};

const FAQS = [
  { q: "Is a Maxillofacial & Oral Surgery Fellowship worth it after MDS?", a: "If you want to deepen your understanding of oral surgery, implantology, trauma management, and digital workflows while continuing clinical practice, many specialists find a structured fellowship valuable for professional growth." },
  { q: "Will a fellowship help me become a better surgeon?", a: "A fellowship can strengthen clinical reasoning, treatment planning, and evidence-based decision making — skills that often contribute to greater confidence in surgical practice." },
  { q: "Does completing a fellowship increase salary?", a: "Salary depends on experience, location, employer, and scope of practice. A fellowship may enhance your qualifications and open doors, but it does not guarantee a specific income increase." },
  { q: "Is an online fellowship respected?", a: "Programs that provide a structured curriculum, experienced faculty, case-based discussions, and recognised certification can offer meaningful academic value, particularly for working professionals." },
  { q: "How much time should I dedicate each week?", a: "Most flexible fellowship programs are designed so that practising specialists can study alongside their clinical responsibilities. The exact commitment varies by program." },
  { q: "Can I pursue a fellowship while running my own clinic?", a: "Yes. Many participants are practising clinicians who continue seeing patients while completing the fellowship through flexible learning schedules." },
  { q: "How is a fellowship different from attending workshops?", a: "Workshops usually focus on individual procedures, while a fellowship provides comprehensive learning, continuous mentorship, and broader clinical understanding." },
  { q: "What should I look for before joining a fellowship?", a: "Evaluate the curriculum, faculty experience, flexibility, case-based learning, academic support, certification, and whether the program aligns with your career goals." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Is a Maxillofacial & Oral Surgery Fellowship Worth It?",
  description: "The benefits, clinical impact, and factors to weigh before enrolling in a maxillofacial and oral surgery fellowship.",
  image: "https://www.medfellowacademy.com/courses/maxillofacial.jpg",
  datePublished: "2026-09-10",
  dateModified: "2026-09-10",
  author: { "@type": "Organization", name: "MedFellow Academy" },
  publisher: { "@type": "Organization", name: "MedFellow Academy", logo: { "@type": "ImageObject", url: "https://www.medfellowacademy.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.medfellowacademy.com/blog/is-maxillofacial-oral-surgery-fellowship-worth-it/" },
};

const WHY = ["Structured academic learning", "Exposure to current evidence-based practice", "Clinical case discussions", "Faculty mentorship", "Better understanding of multidisciplinary patient care", "Opportunities to strengthen professional confidence"];
const CONFIDENCE = [
  { title: "Better treatment planning", text: "Understanding when surgery is appropriate, selecting the right pathway, and anticipating complications." },
  { title: "Improved implant decision making", text: "Learning evidence-based implant planning rather than relying only on procedural experience." },
  { title: "Enhanced trauma management", text: "Understanding facial injuries, emergency assessment, and multidisciplinary management." },
  { title: "Stronger diagnostic skills", text: "Interpreting CBCT scans, oral pathology, and complex imaging more effectively." },
  { title: "Better patient communication", text: "Explaining treatment options, risks, expected outcomes, and post-operative care with confidence." },
];
const CAREER = ["Multispecialty hospitals", "Trauma centres", "Specialty dental clinics", "Implantology practices", "Academic institutions", "Teaching hospitals", "Research", "Head and neck surgery teams"];
const WAIT_IF = ["You are looking only for a certificate", "You cannot dedicate regular time to learning", "You expect immediate financial returns", "You are not interested in updating your clinical knowledge"];

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
              <span>Is a Maxillofacial &amp; Oral Surgery Fellowship Worth It?</span>
            </div>
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">Career Planning</span>
              <span className="text-sm text-text-secondary">⏱️ 9 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Is a Maxillofacial &amp; Oral Surgery Fellowship Worth It?</h1>
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">MA</div>
                <div><p className="font-semibold text-primary">Med Fellow Academy</p><p className="text-sm text-text-secondary">Medical Education Experts</p></div>
              </div>
            </div>
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10">
              <Image src="/courses/maxillofacial.jpg" alt="Is a Maxillofacial and Oral Surgery Fellowship Worth It" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                After MDS in oral and maxillofacial surgery — or years of clinical practice — many specialists
                ask whether a fellowship is worth the time, effort, and investment. The answer depends on your
                goals. If you want to strengthen clinical knowledge, stay current with modern techniques, build
                confidence in complex cases, or expand career opportunities, a structured fellowship can be a
                valuable next step.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Why More Oral Surgeons Pursue Fellowship Training</h2>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 not-prose">
                {WHY.map((t) => (<div key={t} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary"><span className="text-secondary mt-0.5">✓</span><span>{t}</span></div>))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">Unlike workshops that focus on a single procedure, a fellowship connects the different aspects of oral surgery rather than teaching isolated techniques.</p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">How a Fellowship Can Improve Your Practice</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-8 not-prose">
                {CONFIDENCE.map((c) => (
                  <div key={c.title} className="card p-4"><h3 className="text-[0.9375rem] font-bold text-primary mb-1.5">{c.title}</h3><p className="text-[0.8125rem] text-text-secondary leading-relaxed">{c.text}</p></div>
                ))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Career Growth Beyond the Clinic</h2>
              <p className="text-text-secondary leading-relaxed mb-3">No fellowship guarantees a promotion or higher income, but advanced education can strengthen your professional profile. Graduates pursue opportunities in:</p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 not-prose">
                {CAREER.map((t) => (<div key={t} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary"><span className="text-secondary mt-0.5">✓</span><span>{t}</span></div>))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">When to Wait Before Joining</h2>
              <p className="text-text-secondary leading-relaxed mb-3">A fellowship may not be the right choice right now if:</p>
              <div className="space-y-2 mb-6 not-prose">
                {WAIT_IF.map((c) => (<div key={c} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary"><span className="text-secondary mt-0.5">✓</span><span>{c}</span></div>))}
              </div>
              <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg mb-8 not-prose">
                <p className="text-sm text-text-secondary leading-relaxed">The greatest value comes when participants actively engage with the curriculum and apply what they learn in practice. A fellowship certificate is an educational credential and does not replace a recognised specialist qualification.</p>
              </div>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Take the Next Step in Your Professional Journey</h3>
                <p className="text-text-secondary mb-6">Explore the MedFellow Academy Fellowship in Maxillofacial &amp; Oral Surgery — structured learning that fits around your professional commitments.</p>
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

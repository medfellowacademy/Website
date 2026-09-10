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
  title: "Career Opportunities After a Urology Fellowship | MedFellow",
  description:
    "Explore career pathways after a urology fellowship — consultant roles, endourology and uro-oncology teams, academics, research and specialty urology practice.",
  keywords:
    "career after urology fellowship, urology fellowship scope, urology fellowship career, jobs after urology fellowship, fellowship in urology",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/career-opportunities-after-a-urology-fellowship/" },
  openGraph: {
    title: "Career Opportunities After a Urology Fellowship",
    description: "Consultant roles, endourology and uro-oncology teams, academics, research and specialty urology practice.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/career-opportunities-after-a-urology-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: { card: "summary_large_image", title: "Career Opportunities After a Urology Fellowship", description: "Specialist career pathways after fellowship training." },
};

const FAQS = [
  { q: "Does a urology fellowship improve career opportunities?", a: "A fellowship demonstrates commitment to continuous learning and can strengthen your profile for roles in hospitals, specialty centres, academics, and clinical research — within your qualification and the regulations where you practise." },
  { q: "What roles can I explore after a urology fellowship?", a: "Common pathways include urology consultant, endourology or stone-clinic focus, uro-oncology team member, reconstructive urology practice, academic faculty, clinical research associate, and consultant roles in multispecialty or specialty urology centres." },
  { q: "Can a fellowship help me work abroad?", a: "It can support your profile, but international practice depends on local licensing, registration, and credentialing. Choose a program with a structured curriculum and clear certification, and check the requirements of the destination country." },
  { q: "Is a fellowship the same as a super-specialty qualification?", a: "No. A fellowship certificate is an educational credential and is different from a recognised postgraduate or super-specialty qualification. Specialist registration and scope of practice are governed separately." },
  { q: "Does a fellowship help with academic and teaching roles?", a: "Yes. Structured academic learning, case presentations, and evidence appraisal build a foundation for teaching, presentations, and continued medical education activity." },
  { q: "How soon can a fellowship influence my practice?", a: "Many doctors apply new clinical reasoning, patient counselling, and guideline-based management during the program itself, then use the credential to expand services or referral networks afterwards." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Career Opportunities After a Urology Fellowship",
  description: "Career pathways and professional growth after completing a urology fellowship.",
  image: "https://www.medfellowacademy.com/courses/urology.jpg",
  datePublished: "2026-09-10",
  dateModified: "2026-09-10",
  author: { "@type": "Organization", name: "MedFellow Academy" },
  publisher: { "@type": "Organization", name: "MedFellow Academy", logo: { "@type": "ImageObject", url: "https://www.medfellowacademy.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.medfellowacademy.com/blog/career-opportunities-after-a-urology-fellowship/" },
};

const ROLES = [
  { title: "Urology Consultant", text: "Managing common and complex urological conditions in hospitals and clinics, with stronger evidence-based decision making." },
  { title: "Endourology / Stone Clinic Focus", text: "Applying modern concepts in stone disease evaluation, treatment planning, and follow-up within your scope of practice." },
  { title: "Uro-Oncology Team Member", text: "Contributing to multidisciplinary planning for kidney, bladder, prostate, and testicular cancers." },
  { title: "Reconstructive Urology Practice", text: "Understanding urethral reconstruction, urinary diversion, and trauma management pathways." },
  { title: "Academic Faculty / Educator", text: "Teaching, case presentations, and continued medical education in medical colleges and training programs." },
  { title: "Clinical Research Associate", text: "Participating in studies, audits, and evidence generation in urological practice." },
  { title: "Multispecialty Hospital Consultant", text: "Providing urology input in larger institutions and referral networks." },
  { title: "Specialty Urology Centre", text: "Working within a focused urology service with defined clinical pathways." },
  { title: "Private Surgical Practice", text: "Expanding the range of urological services offered in your own practice." },
];

const GROWTH = [
  "Strengthen your academic profile", "Enhance clinical decision making", "Improve patient counselling",
  "Expand professional opportunities", "Prepare for leadership roles", "Build confidence in complex cases",
  "Stay updated with advances in minimally invasive urology",
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
              <span>Career Opportunities After a Urology Fellowship</span>
            </div>
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">Career Planning</span>
              <span className="text-sm text-text-secondary">⏱️ 8 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Career Opportunities After a Urology Fellowship</h1>
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">MA</div>
                <div><p className="font-semibold text-primary">Med Fellow Academy</p><p className="text-sm text-text-secondary">Medical Education Experts</p></div>
              </div>
            </div>
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10">
              <Image src="/courses/urology.jpg" alt="Career Opportunities After a Urology Fellowship" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Demand for trained urology professionals continues to grow as healthcare systems invest in
                advanced surgical services, minimally invasive procedures, and specialised urological care.
                Completing a fellowship strengthens your professional profile and signals a commitment to
                continuous medical education — which can open doors across several clinical, academic, and
                research pathways.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Roles You Can Explore</h2>
              <div className="space-y-4 mb-8 not-prose">
                {ROLES.map((r, i) => (
                  <div key={r.title} className="card p-5">
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#15401E] text-white text-[0.8125rem] font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                      <div><h3 className="text-[1rem] font-bold text-primary mb-1">{r.title}</h3><p className="text-sm text-text-secondary leading-relaxed">{r.text}</p></div>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">How Fellowship Training Supports Career Growth</h2>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-6 not-prose">
                {GROWTH.map((li) => (
                  <div key={li} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary"><span className="text-secondary mt-0.5">✓</span><span>{li}</span></div>
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                Many doctors also use fellowship training to improve referral networks, expand the services
                offered within their clinics, and prepare for opportunities in healthcare systems across the Gulf
                region and other international markets.
              </p>

              <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg mb-8 not-prose">
                <p className="text-sm text-text-secondary leading-relaxed">
                  Career outcomes depend on your existing qualification, experience, employer, and the
                  regulations that apply where you practise. A fellowship certificate is different from a formal
                  super-specialty qualification and does not automatically confer specialist registration or
                  independent procedural privileges.
                </p>
              </div>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Plan Your Next Career Move</h3>
                <p className="text-text-secondary mb-6">Explore the MedFellow Academy Fellowship in Urology to review the curriculum, learning format, and career support.</p>
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
            <Link href="/blog/skills-you-will-learn-during-a-urology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Clinical Skills</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Skills You Will Learn During a Urology Fellowship</h3>
              <p className="text-sm text-text-secondary">The clinical, diagnostic, and decision-making skills developed in training...</p>
            </Link>
            <Link href="/blog/who-can-apply-for-a-urology-fellowship-eligibility-guide" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Who Can Apply for a Urology Fellowship?</h3>
              <p className="text-sm text-text-secondary">An eligibility guide covering qualifications and background...</p>
            </Link>
            <Link href="/blog/how-to-choose-a-urology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">How to Choose a Urology Fellowship</h3>
              <p className="text-sm text-text-secondary">Compare curriculum, faculty, format, and career support before enrolling...</p>
            </Link>
          </div>
        </div></div>
      </section>
      <Footer />
    </div>
  );
}

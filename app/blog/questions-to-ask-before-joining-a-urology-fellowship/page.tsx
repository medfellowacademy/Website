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
  title: "Questions to Ask Before Joining a Urology Fellowship | MedFellow",
  description:
    "The key questions to ask before enrolling in a urology fellowship — about curriculum, faculty, flexibility, case-based learning, eligibility, support and career value.",
  keywords:
    "questions to ask before urology fellowship, urology fellowship requirements, urology fellowship course, fellowship in urology, urology training",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-a-urology-fellowship/" },
  openGraph: {
    title: "Questions to Ask Before Joining a Urology Fellowship",
    description: "Curriculum, faculty, flexibility, case-based learning, eligibility, support and career value — what to ask before you enrol.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-a-urology-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: { card: "summary_large_image", title: "Questions to Ask Before Joining a Urology Fellowship", description: "The questions every doctor should ask before applying." },
};

const FAQS = [
  { q: "How do I know if a urology fellowship is right for me?", a: "If you want to strengthen your understanding of modern urology, improve clinical decision making, and continue learning while practising, a fellowship can be a valuable option." },
  { q: "Is an online urology fellowship effective?", a: "A well-designed online fellowship with structured modules, faculty interaction, and case discussions can provide a high-quality learning experience for working doctors." },
  { q: "What should I compare before joining a fellowship?", a: "Compare the curriculum, faculty, flexibility, learning resources, case discussions, academic support, certification, and career guidance — not just the fee." },
  { q: "Are case discussions important in a fellowship?", a: "Yes. They help participants apply theoretical knowledge to real clinical situations and improve clinical reasoning." },
  { q: "Does faculty experience matter?", a: "Yes. Experienced faculty bring practical insights that enhance learning and provide guidance based on real-world clinical practice." },
  { q: "Can I continue working while pursuing a fellowship?", a: "Most flexible fellowship programs are designed to allow doctors to continue their clinical responsibilities while studying." },
  { q: "How long does a urology fellowship usually take?", a: "Duration varies by institution, but many structured fellowship programs are designed to be completed over about 12 months." },
  { q: "Why choose a structured fellowship instead of a short course?", a: "A structured fellowship offers a comprehensive curriculum, continuous faculty mentorship, and case-based learning — a deeper educational experience than most short-term courses." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Questions to Ask Before Joining a Urology Fellowship",
  description: "The key questions to ask before enrolling in a urology fellowship.",
  image: "https://www.medfellowacademy.com/courses/urology.jpg",
  datePublished: "2026-09-10",
  dateModified: "2026-09-10",
  author: { "@type": "Organization", name: "MedFellow Academy" },
  publisher: { "@type": "Organization", name: "MedFellow Academy", logo: { "@type": "ImageObject", url: "https://www.medfellowacademy.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-a-urology-fellowship/" },
};

const QUESTIONS = [
  { q: "Does this fellowship match my career objectives?", a: "Decide what skills you want to develop — endourology, uro-oncology, reconstructive urology, or minimally invasive procedures — and check the curriculum aligns with your long-term goals." },
  { q: "What topics are covered in the fellowship?", a: "Look for structured coverage of endourology, kidney stone management, uro-oncology, female urology, pediatric urology, reconstructive urology, male infertility, urological emergencies, case discussions, and evidence-based treatment planning." },
  { q: "Who will be teaching the program?", a: "Ask whether faculty are practising urologists, whether they have teaching and mentoring experience, and whether you will be able to interact with them during the course." },
  { q: "Is the fellowship suitable for working doctors?", a: "Check for flexible online learning, weekend live sessions, recorded lectures, self-paced modules, and mobile-friendly access so you can keep treating patients." },
  { q: "Does the fellowship include clinical case discussions?", a: "Look for interactive case presentations, treatment planning discussions, faculty feedback, evidence-based management, and practical decision-making exercises." },
  { q: "Am I eligible for this fellowship?", a: "Review the required qualification, clinical experience, necessary documents, admission process, and selection criteria before applying." },
  { q: "What learning support is available?", a: "Ask whether participants receive academic mentorship, faculty guidance, recorded resources, discussion forums, doubt-clearing sessions, and ongoing academic support." },
  { q: "Will this fellowship support my career growth?", a: "Consider whether it strengthens your clinical profile, prepares you for advanced practice, offers networking with specialists, and provides career guidance." },
  { q: "How does this fellowship compare with other programs?", a: "Compare curriculum depth, faculty, flexibility, learning resources, academic support, certification, and career guidance across programs rather than choosing on name or duration alone." },
  { q: "Why does asking questions before joining matter?", a: "A fellowship is an investment in your future. Detailed questions help you confirm the program meets your expectations and supports your professional goals before you commit." },
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
              <span>Questions to Ask Before Joining a Urology Fellowship</span>
            </div>
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">Fellowship Guides</span>
              <span className="text-sm text-text-secondary">⏱️ 9 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Questions to Ask Before Joining a Urology Fellowship</h1>
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">MA</div>
                <div><p className="font-semibold text-primary">Med Fellow Academy</p><p className="text-sm text-text-secondary">Medical Education Experts</p></div>
              </div>
            </div>
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10">
              <Image src="/courses/urology.jpg" alt="Questions to Ask Before Joining a Urology Fellowship" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Choosing a urology fellowship is one of the most important decisions for doctors who want to
                strengthen their knowledge and advance their careers. Not every course offers the same
                curriculum, faculty support, flexibility, or career benefits — so it is worth evaluating a
                program beyond its brochure. These questions will help you make an informed decision.
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
                A fellowship should provide structured learning, experienced faculty, practical discussions, and
                the flexibility that busy healthcare professionals need. Evaluate the overall learning experience
                and how it contributes to your growth as a clinician.
              </p>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Ask Us Directly</h3>
                <p className="text-text-secondary mb-6">Explore the MedFellow Academy Fellowship in Urology and get clear answers about the curriculum, faculty, format, and certification before you apply.</p>
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
            <Link href="/blog/how-to-choose-a-urology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">How to Choose a Urology Fellowship</h3>
              <p className="text-sm text-text-secondary">Compare curriculum, faculty, format, and career support before enrolling...</p>
            </Link>
            <Link href="/blog/who-can-apply-for-a-urology-fellowship-eligibility-guide" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Who Can Apply for a Urology Fellowship?</h3>
              <p className="text-sm text-text-secondary">An eligibility guide covering qualifications and background...</p>
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

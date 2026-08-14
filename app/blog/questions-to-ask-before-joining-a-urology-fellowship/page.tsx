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
  title: "15 Questions to Ask Before Joining a Urology Fellowship | MedFellow Academy",
  description:
    "Discover the essential questions to ask before joining a Urology fellowship. Compare curriculum, faculty, learning format, career support, and eligibility.",
  keywords: "questions to ask before joining a urology fellowship, urology fellowship course, how to choose a urology fellowship, best urology fellowship, fellowship in urology",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-a-urology-fellowship/" },
  openGraph: {
    title: "15 Questions to Ask Before Joining a Urology Fellowship Course",
    description:
      "Discover the essential questions to ask before joining a Urology fellowship. Compare curriculum, faculty, learning format, career support, and eligibility.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-a-urology-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "15 Questions to Ask Before Joining a Urology Fellowship",
    description: "Essential questions to ask before choosing the right urology fellowship program.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "15 Questions to Ask Before Joining a Urology Fellowship Course",
  description:
    "Discover the essential questions to ask before joining a Urology fellowship. Compare curriculum, faculty, learning format, career support, and eligibility.",
  image: "https://www.medfellowacademy.com/courses/urology.jpg",
  datePublished: "2026-08-06",
  dateModified: "2026-08-06",
  author: { "@type": "Organization", name: "MedFellow Academy" },
  publisher: {
    "@type": "Organization",
    name: "MedFellow Academy",
    logo: { "@type": "ImageObject", url: "https://www.medfellowacademy.com/logo.png" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-a-urology-fellowship/",
  },
};

const FAQS = [
  {
    q: "How do I know if a Urology fellowship is right for me?",
    a: "If you want to strengthen your understanding of modern urology, improve clinical decision-making, and continue learning while practicing, a fellowship can be a valuable option.",
  },
  {
    q: "Is an online Urology fellowship effective?",
    a: "A well-designed online fellowship with structured modules, faculty interaction, and case discussions can provide a high-quality learning experience for working doctors.",
  },
  {
    q: "What should I compare before joining a fellowship?",
    a: "Compare the curriculum, faculty, flexibility, learning resources, case discussions, academic support, certification, and career guidance.",
  },
  {
    q: "Are case discussions important in a fellowship?",
    a: "Yes. They help participants apply theoretical knowledge to real clinical situations and improve clinical reasoning.",
  },
  {
    q: "Does faculty experience matter?",
    a: "Absolutely. Experienced faculty bring practical insights that enhance learning and provide guidance based on real-world clinical practice.",
  },
  {
    q: "Can I continue working while pursuing a fellowship?",
    a: "Most flexible fellowship programs are designed to allow doctors to continue their clinical responsibilities while studying.",
  },
  {
    q: "How long does a Urology fellowship usually take?",
    a: "The duration varies by institution, but many structured fellowship programs are designed to be completed over 12 months.",
  },
  {
    q: "Why should I choose a structured fellowship instead of a short course?",
    a: "A structured fellowship offers a comprehensive curriculum, continuous faculty mentorship, and case-based learning, providing a deeper educational experience than most short-term courses.",
  },
];

const COMPARE_TABLE = [
  { q: "Curriculum", why: "Determines the depth of learning" },
  { q: "Faculty", why: "Influences educational quality" },
  { q: "Flexibility", why: "Helps balance work and study" },
  { q: "Learning Resources", why: "Supports continuous learning" },
  { q: "Case Discussions", why: "Improves clinical reasoning" },
  { q: "Academic Support", why: "Enhances the learning experience" },
  { q: "Certification", why: "Reflects successful completion" },
  { q: "Career Guidance", why: "Supports long-term professional growth" },
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
              <Link href="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-primary">Blog</Link>
              <span>/</span>
              <span>15 Questions to Ask Before Joining a Urology Fellowship Course</span>
            </div>

            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">
                Fellowship Guides
              </span>
              <span className="text-sm text-text-secondary">⏱️ 8 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              15 Questions to Ask Before Joining a Urology Fellowship Course
            </h1>

            <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                  MA
                </div>
                <div>
                  <p className="font-semibold text-primary">Med Fellow Academy</p>
                  <p className="text-sm text-text-secondary">Medical Education Experts</p>
                </div>
              </div>
            </div>

            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10">
              <Image
                src="/courses/urology.jpg"
                alt="Questions to Ask Before Joining a Urology Fellowship"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Choosing a Urology Fellowship is one of the most important decisions for doctors who want to
                strengthen their knowledge and advance their careers in urological practice. While many
                fellowship programs promise advanced learning, not every course offers the same curriculum,
                faculty support, flexibility, or career benefits.
              </p>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-8">
                <p className="text-lg font-semibold text-primary mb-3">Key Takeaways</p>
                <ul className="space-y-2 text-text-secondary">
                  <li>✓ Match the fellowship to your specific career objective, not just its reputation</li>
                  <li>✓ A comprehensive curriculum and experienced faculty matter more than the brochure</li>
                  <li>✓ Confirm flexibility and case-based learning before you commit</li>
                  <li>✓ Compare programs on the same factors, not just the course fee</li>
                </ul>
              </div>

              <p className="text-text-secondary leading-relaxed mb-8">
                Before enrolling, it is worth spending time evaluating the program beyond its brochure or
                website. Asking the right questions can help you select a fellowship that aligns with your
                career goals, learning preferences, and future aspirations.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                1. Does This Fellowship Match My Career Objectives?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Every doctor&apos;s career path is different. Some want to strengthen their understanding of
                endourology, while others are interested in uro-oncology, reconstructive urology, or
                minimally invasive procedures. Before applying, ask what skills you want to develop and
                whether the curriculum aligns with your area of interest.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                2. What Topics Are Covered in the Fellowship?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                A good fellowship should offer a structured curriculum covering both foundational and
                advanced concepts — endourology, kidney stone management, uro-oncology, female urology,
                pediatric urology, reconstructive urology, male infertility, urological emergencies, clinical
                case discussions, and evidence-based treatment planning. The more comprehensive the
                curriculum, the better prepared you will be for modern clinical practice.
              </p>

              <div className="relative w-full h-56 md:h-72 rounded-xl overflow-hidden my-10">
                <Image
                  src="/courses/urology.jpg"
                  alt="Evaluating faculty and curriculum before joining a Urology fellowship"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 700px"
                />
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                3. Who Will Be Teaching the Program?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Faculty play a significant role in your learning experience. Ask whether the faculty are
                practicing urologists, whether they have experience in teaching and mentoring, and whether
                there will be opportunities to interact with them during the course.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                4. Is the Fellowship Suitable for Working Doctors?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Many doctors cannot take a career break to pursue additional education. Consider whether the
                fellowship offers flexible online learning, weekend live sessions, recorded lectures,
                self-paced modules, and mobile-friendly access.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                5. Does the Fellowship Include Clinical Case Discussions?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Reading textbooks is important, but discussing real clinical cases develops better clinical
                reasoning. Look for programs that include interactive case presentations, treatment planning
                discussions, faculty feedback, evidence-based management approaches, and practical
                decision-making exercises.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                6. Am I Eligible for This Fellowship?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Before submitting your application, review the eligibility requirements carefully — required
                qualification, clinical experience, necessary documents, admission process, and selection
                criteria.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                7. What Type of Learning Support Is Available?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                A fellowship should offer more than lectures. Ask whether participants receive academic
                mentorship, faculty guidance, recorded learning resources, discussion forums,
                doubt-clearing sessions, and ongoing academic support.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                8. Will This Fellowship Support My Career Growth?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Before enrolling, ask whether the fellowship will strengthen your clinical profile, prepare
                you for advanced practice, offer networking opportunities with specialists, and provide
                career guidance.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                9. How Does This Fellowship Compare with Other Programs?
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-sm font-semibold text-primary">Compare This Factor</th>
                      <th className="py-3 text-sm font-semibold text-primary">Why It Matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARE_TABLE.map((row) => (
                      <tr key={row.q} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-sm font-medium text-primary align-top">{row.q}</td>
                        <td className="py-3 text-sm text-text-secondary align-top">{row.why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                10. Why Is It Important to Ask Questions Before Joining?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Choosing a fellowship is an investment in your future. Asking detailed questions before
                enrolling helps you understand whether the program meets your expectations and supports your
                professional goals. Rather than selecting a program based only on its name or duration,
                evaluate the overall learning experience and how it contributes to your growth as a
                clinician.
              </p>

              <div className="bg-primary/5 p-8 rounded-xl mb-8">
                <p className="text-lg leading-relaxed text-text-secondary">
                  A fellowship should provide structured learning, experienced faculty, practical
                  discussions, and the flexibility needed by busy healthcare professionals. Use these
                  questions as your checklist before you commit.
                </p>
              </div>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Ready to Advance Your Urology Knowledge?
                </h3>
                <p className="text-text-secondary mb-6">
                  If you are looking for a structured Urology fellowship with a comprehensive curriculum,
                  expert faculty, flexible online learning, and case-based discussions, explore the
                  Fellowship in Urology at MedFellow Academy.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/courses/fellowship-in-urology" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-center">
                    View Fellowship Details
                  </Link>
                  <Link href="/best-fellowship-course-in-urology" className="inline-block px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all text-center">
                    Read the Full Guide
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-2xl shrink-0">
                  MF
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-primary mb-2">About Med Fellow Academy</h3>
                  <p className="text-text-secondary mb-4">
                    MedFellow Academy provides structured, flexible fellowship courses for practicing
                    doctors — combining evidence-based curriculum, expert faculty mentorship, and hands-on
                    clinical training across 60+ specialties.
                  </p>
                  <div className="flex gap-4">
                    <Link href="/courses" className="text-secondary font-semibold hover:text-primary">
                      View Our Courses →
                    </Link>
                    <Link href="/blog" className="text-secondary font-semibold hover:text-primary">
                      More Articles →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <TopicClusterLinks title="Urology Fellowship Resources" links={CLUSTER_LINKS} />
          </div>
          </div>
        </div>
      </article>

      <FAQ faqs={FAQS} />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-primary mb-6">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/best-fellowship-course-in-urology" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">Fellowship Guide</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Best Fellowship Course in Urology
                </h3>
                <p className="text-sm text-text-secondary">Compare fellowship programs and choose the right one...</p>
              </Link>
              <Link href="/blog/how-to-choose-a-urology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  How to Choose a Urology Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Learn the key factors that make a fellowship worth pursuing...</p>
              </Link>
              <Link href="/blog/online-vs-offline-urology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Online vs Offline Urology Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Compare learning formats for busy healthcare professionals...</p>
              </Link>
              <Link href="/blog/career-opportunities-after-a-urology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Career Planning</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Career Opportunities After a Urology Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Discover career pathways after completing advanced fellowship training...</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

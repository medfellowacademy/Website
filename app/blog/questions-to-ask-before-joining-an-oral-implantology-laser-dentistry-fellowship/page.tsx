import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import TopicClusterLinks from "@/components/TopicClusterLinks";
import Link from "next/link";
import Image from "next/image";

const CLUSTER_LINKS = [
  { label: "Best Fellowship Course in Oral Implantology & Laser Dentistry (Guide)", href: "/best-fellowship-course-in-oral-implantology-laser-dentistry", type: "guide" as const },
  { label: "How to Choose an Oral Implantology & Laser Dentistry Fellowship", href: "/blog/how-to-choose-an-oral-implantology-laser-dentistry-fellowship-course", type: "blog" as const },
  { label: "Questions to Ask Before Joining an Oral Implantology & Laser Dentistry Fellowship", href: "/blog/questions-to-ask-before-joining-an-oral-implantology-laser-dentistry-fellowship", type: "blog" as const },
  { label: "Online vs Offline Oral Implantology & Laser Dentistry Fellowship", href: "/blog/online-vs-offline-oral-implantology-laser-dentistry-fellowship", type: "blog" as const },
  { label: "Is an Oral Implantology & Laser Dentistry Fellowship Worth It?", href: "/blog/is-an-oral-implantology-laser-dentistry-fellowship-worth-it", type: "blog" as const },
  { label: "Career Opportunities After an Oral Implantology & Laser Dentistry Fellowship", href: "/blog/career-opportunities-after-an-oral-implantology-laser-dentistry-fellowship", type: "blog" as const },
];

export const metadata: Metadata = {
  title: "Questions to Ask Before Joining an Oral Implantology Fellowship | MedFellow Academy",
  description:
    "Planning to join an Oral Implantology & Laser Dentistry Fellowship? Discover the essential questions to ask before choosing the right program.",
  keywords: "questions to ask before joining an oral implantology & laser dentistry fellowship, oral implantology fellowship, laser dentistry fellowship, oral implantology course, online oral implantology fellowship",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-an-oral-implantology-laser-dentistry-fellowship/" },
  openGraph: {
    title: "Questions to Ask Before Joining an Oral Implantology Fellowship",
    description:
      "Planning to join an Oral Implantology & Laser Dentistry Fellowship? Discover the essential questions to ask before choosing the right program.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-an-oral-implantology-laser-dentistry-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Questions to Ask Before Joining an Oral Implantology Fellowship",
    description: "The essential questions to ask before choosing the right implantology fellowship.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Questions to Ask Before Joining an Oral Implantology & Laser Dentistry Fellowship",
  description:
    "Planning to join an Oral Implantology & Laser Dentistry Fellowship? Discover the essential questions to ask before choosing the right program.",
  image: "https://www.medfellowacademy.com/courses/oral-implantology.jpg",
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
    "@id": "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-an-oral-implantology-laser-dentistry-fellowship/",
  },
};

const FAQS = [
  {
    q: "How do I know if a fellowship is worth joining?",
    a: "Review the curriculum, faculty expertise, flexibility, academic support, and whether the program aligns with your professional goals.",
  },
  {
    q: "Should I compare more than one fellowship before enrolling?",
    a: "Yes. Comparing multiple programs helps you evaluate curriculum quality, learning format, mentorship, and overall value.",
  },
  {
    q: "Is online learning effective for implantology fellowships?",
    a: "Online learning can be effective when supported by a structured curriculum, experienced faculty, case-based discussions, and opportunities for interaction.",
  },
  {
    q: "What is the biggest mistake dentists make when choosing a fellowship?",
    a: "Many focus only on the course fee instead of evaluating the curriculum, faculty experience, learning outcomes, and long-term career benefits.",
  },
  {
    q: "Should I choose a fellowship based only on the certificate?",
    a: "No. The quality of learning, faculty guidance, and curriculum are often more important than the certificate itself.",
  },
  {
    q: "Are recorded lectures important?",
    a: "Yes. Recorded sessions allow participants to revisit complex topics and learn at their own pace.",
  },
  {
    q: "How important are case discussions?",
    a: "Case discussions help dentists understand treatment planning, clinical decision making, and the management of real-world scenarios.",
  },
  {
    q: "What should I ask during a counselling session?",
    a: "Ask about eligibility, curriculum, faculty, learning schedule, certification, assessments, academic support, and available resources.",
  },
];

const COMPARE_TABLE = [
  { q: "Who is eligible for the fellowship?", why: "Ensures you meet admission requirements" },
  { q: "Is the curriculum comprehensive?", why: "Determines the depth of learning" },
  { q: "Are experienced faculty involved?", why: "Improves the quality of education" },
  { q: "Is learning flexible?", why: "Helps you continue clinical practice" },
  { q: "Are case discussions included?", why: "Builds practical clinical reasoning" },
  { q: "Is academic support available?", why: "Enhances the overall learning experience" },
  { q: "Does the program align with my career goals?", why: "Supports long-term professional development" },
  { q: "Are learning resources available after sessions?", why: "Enables continuous revision and learning" },
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
              <span>Questions to Ask Before Joining an Oral Implantology & Laser Dentistry Fellowship</span>
            </div>

            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">
                Fellowship Guides
              </span>
              <span className="text-sm text-text-secondary">⏱️ 8 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Questions to Ask Before Joining an Oral Implantology & Laser Dentistry Fellowship
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
                src="/courses/oral-implantology.jpg"
                alt="Questions to Ask Before Joining an Oral Implantology & Laser Dentistry Fellowship"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Choosing a fellowship is an important step in your professional journey. While many programs
                promise advanced learning, not every fellowship offers the same curriculum, faculty support,
                flexibility, or clinical relevance. Before investing your time and money, it is worth asking
                the right questions.
              </p>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-8">
                <p className="text-lg font-semibold text-primary mb-3">Key Takeaways</p>
                <ul className="space-y-2 text-text-secondary">
                  <li>✓ Confirm eligibility before you shortlist any program</li>
                  <li>✓ A comprehensive curriculum matters more than a low course fee</li>
                  <li>✓ Faculty experience and case-based discussions build real clinical confidence</li>
                  <li>✓ Ongoing academic support and flexible learning keep the fellowship realistic to complete</li>
                </ul>
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                1. Am I Eligible for the Fellowship?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Eligibility requirements vary between institutions. Before applying, ask: who can apply? Is
                the program open to BDS graduates, MDS graduates, or both? Are there any minimum clinical
                experience requirements? Are international applicants eligible?
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Understanding the eligibility criteria early can save time and help you shortlist the right
                programs.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                2. Does the Curriculum Cover Modern Implantology and Laser Dentistry?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                A strong fellowship should go beyond basic concepts. Look for topics such as implant
                treatment planning, osseointegration, CBCT interpretation, digital implant workflows, implant
                complications, laser safety, soft and hard tissue laser applications, prosthetic planning, and
                evidence-based treatment planning.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                A structured curriculum helps ensure comprehensive learning rather than isolated lectures.
              </p>

              <div className="relative w-full h-56 md:h-72 rounded-xl overflow-hidden my-10">
                <Image
                  src="/courses/oral-implantology.jpg"
                  alt="Evaluating an Oral Implantology & Laser Dentistry fellowship faculty and curriculum"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 700px"
                />
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                3. Who Are the Faculty Members?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Faculty experience plays a major role in the quality of education. Do the faculty actively
                practice implant dentistry? What are their academic qualifications? Do they have teaching
                experience? Are guest faculty included? Will participants have opportunities to interact with
                instructors? Learning from experienced clinicians can provide valuable practical insights.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                4. Can I Continue My Clinical Practice While Studying?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Many dentists cannot take extended breaks from practice. Ask whether the fellowship offers
                flexible online learning, weekend sessions, recorded lectures, self-paced study material, and
                access to learning resources after live sessions.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                A flexible program makes it easier to balance education with professional responsibilities.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                5. Are Clinical Case Discussions Included?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Case-based learning helps bridge the gap between theory and clinical decision making. Find
                out whether the fellowship includes implant planning discussions, complex case reviews,
                treatment planning exercises, complication management, patient communication scenarios, and
                interactive learning sessions.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                These experiences can strengthen clinical reasoning and improve confidence.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                6. What Certification Will I Receive?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Before enrolling, understand who issues the certificate, whether the curriculum is
                structured, whether the program includes assessments, and what the completion requirements
                are. A well-defined certification process reflects an organized educational program.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                7. Will I Receive Ongoing Academic Support?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Learning does not end after a lecture. Consider whether the program offers faculty
                mentorship, academic coordinators, discussion forums, doubt-clearing sessions, study
                resources, and recorded content. Continuous support can significantly improve the learning
                experience.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                8. Will This Fellowship Support My Career Goals?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Different dentists have different career objectives. Ask yourself: do I want to expand my
                private practice? Am I planning to focus on implant dentistry? Do I want to improve patient
                confidence? Am I interested in laser-assisted procedures? Does the curriculum align with my
                future plans?
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Selecting a fellowship that matches your goals is often more valuable than simply choosing
                the lowest-cost option.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Questions to Compare Before Enrolling
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-sm font-semibold text-primary">Question</th>
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

              <div className="bg-primary/5 p-8 rounded-xl mb-8">
                <p className="text-lg leading-relaxed text-text-secondary">
                  Selecting the right fellowship is about finding a program that supports your learning
                  goals, fits your professional schedule, and helps you grow as a dental professional.
                  Compare your options carefully, ask the right questions, and choose a fellowship that
                  offers structured education, experienced faculty, and long-term value.
                </p>
              </div>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Ready to Choose Wisely?
                </h3>
                <p className="text-text-secondary mb-6">
                  Explore MedFellow Academy&apos;s Fellowship in Oral Implantology & Laser Dentistry — a
                  structured, flexible curriculum designed to answer every one of the questions above.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/courses/fellowship-in-oral-implantology-laser-dentistry" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-center">
                    View Fellowship Details
                  </Link>
                  <Link href="/best-fellowship-course-in-oral-implantology-laser-dentistry" className="inline-block px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all text-center">
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
            <TopicClusterLinks title="Oral Implantology & Laser Dentistry Resources" links={CLUSTER_LINKS} />
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
              <Link href="/best-fellowship-course-in-oral-implantology-laser-dentistry" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">Fellowship Guide</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Best Fellowship Course in Oral Implantology & Laser Dentistry
                </h3>
                <p className="text-sm text-text-secondary">Compare features, curriculum, and benefits before enrolling...</p>
              </Link>
              <Link href="/blog/how-to-choose-an-oral-implantology-laser-dentistry-fellowship-course" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  How to Choose an Oral Implantology & Laser Dentistry Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Learn the key factors to evaluate before selecting a fellowship...</p>
              </Link>
              <Link href="/blog/online-vs-offline-oral-implantology-laser-dentistry-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Online vs Offline Oral Implantology & Laser Dentistry Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Compare both learning formats and choose the one that fits your career goals...</p>
              </Link>
              <Link href="/blog/career-opportunities-after-an-oral-implantology-laser-dentistry-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Career Planning</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Career Opportunities After an Oral Implantology & Laser Dentistry Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Discover how advanced training can support long-term career growth...</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

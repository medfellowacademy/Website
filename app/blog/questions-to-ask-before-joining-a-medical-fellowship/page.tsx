import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import TopicClusterLinks from "@/components/TopicClusterLinks";
import Link from "next/link";
import Image from "next/image";

const CLUSTER_LINKS = [
  { label: "Best Fellowship Course in High-Risk Pregnancy (Guide)", href: "/courses/best-fellowship-course-in-high-risk-pregnancy", type: "guide" as const },
  { label: "How to Choose a High-Risk Pregnancy Fellowship", href: "/blog/how-to-choose-a-high-risk-pregnancy-fellowship", type: "blog" as const },
  { label: "Online vs Offline High-Risk Pregnancy Fellowship", href: "/blog/online-vs-offline-high-risk-pregnancy-fellowship", type: "blog" as const },
  { label: "Is a High-Risk Pregnancy Fellowship Worth It?", href: "/blog/is-high-risk-pregnancy-fellowship-worth-it", type: "blog" as const },
  { label: "High-Risk Pregnancy Fellowship After MD OBG", href: "/blog/high-risk-pregnancy-fellowship-after-md-obg", type: "blog" as const },
  { label: "Questions to Ask Before Joining a Medical Fellowship", href: "/blog/questions-to-ask-before-joining-a-medical-fellowship", type: "blog" as const },
];

export const metadata: Metadata = {
  title: "Questions to Ask Before Joining a Medical Fellowship: A Complete Checklist for Doctors | MedFellow Academy",
  description:
    "Planning to join a medical fellowship? Discover the most important questions every doctor should ask about curriculum, faculty, certification, clinical training, fees, flexibility, and career outcomes before enrolling.",
  keywords: "questions to ask before joining a medical fellowship, medical fellowship, fellowship course, medical fellowship course, fellowship for doctors",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-a-medical-fellowship/" },
  openGraph: {
    title: "Questions to Ask Before Joining a Medical Fellowship: A Complete Checklist for Doctors",
    description:
      "Discover the most important questions every doctor should ask about curriculum, faculty, certification, clinical training, fees, flexibility, and career outcomes before enrolling.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-a-medical-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Questions to Ask Before Joining a Medical Fellowship",
    description: "A complete checklist for doctors evaluating any fellowship program before enrolling.",
  },
};

const FAQS = [
  {
    q: "Why should I ask questions before joining a medical fellowship?",
    a: "Asking the right questions helps you understand whether the fellowship aligns with your professional goals, learning expectations, and clinical interests. It also allows you to compare different programs objectively rather than relying solely on advertisements or recommendations.",
  },
  {
    q: "What is the most important factor to consider before joining a fellowship?",
    a: "While several factors matter, the curriculum should be your highest priority. A well-structured curriculum supported by experienced faculty, practical learning, and evidence-based teaching usually provides the greatest long-term educational value.",
  },
  {
    q: "How can I compare two fellowship programs effectively?",
    a: "Compare programs using consistent criteria such as curriculum quality, faculty expertise, teaching methodology, flexibility, academic support, assessment process, certification, and relevance to your career goals. Looking at multiple factors helps you make a more informed decision.",
  },
  {
    q: "Is it important to review faculty profiles before enrolling?",
    a: "Yes. Faculty members play a major role in the quality of fellowship education. Reviewing their clinical experience, teaching background, and academic contributions helps you understand the expertise you'll be learning from throughout the program.",
  },
  {
    q: "Can practicing doctors pursue a medical fellowship without interrupting their clinical work?",
    a: "Many fellowship programs are designed specifically for working professionals and offer flexible learning options such as live online classes, recorded sessions, and self-paced study modules. These formats allow doctors to continue their clinical practice while upgrading their knowledge.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Questions to Ask Before Joining a Medical Fellowship: A Complete Checklist for Doctors",
  description:
    "Planning to join a medical fellowship? Discover the most important questions every doctor should ask about curriculum, faculty, certification, clinical training, fees, flexibility, and career outcomes before enrolling.",
  image: "https://www.medfellowacademy.com/courses/high-risk-pregnancy.jpg",
  datePublished: "2026-07-15",
  dateModified: "2026-07-15",
  author: { "@type": "Organization", name: "MedFellow Academy" },
  publisher: {
    "@type": "Organization",
    name: "MedFellow Academy",
    logo: { "@type": "ImageObject", url: "https://www.medfellowacademy.com/logo.png" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-a-medical-fellowship/",
  },
};

const GOAL_TABLE = [
  { goal: "Improve clinical confidence", evaluate: "Practical case discussions and faculty interaction" },
  { goal: "Subspecialize", evaluate: "Comprehensive curriculum in your chosen field" },
  { goal: "Continue practicing while studying", evaluate: "Flexible learning model" },
  { goal: "Academic growth", evaluate: "Experienced faculty and evidence-based content" },
  { goal: "Career advancement", evaluate: "Certification, curriculum quality, and long-term relevance" },
];

const VALUE_FACTORS = [
  { title: "Curriculum Quality", text: "Determines the depth and relevance of learning." },
  { title: "Faculty Expertise", text: "Influences the quality of academic discussions." },
  { title: "Learning Methodology", text: "Improves knowledge retention and clinical application." },
  { title: "Flexibility", text: "Allows doctors to continue practicing while learning." },
  { title: "Academic Support", text: "Encourages continuous engagement throughout the fellowship." },
  { title: "Career Relevance", text: "Ensures learning contributes to long-term professional growth." },
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
              <span>Questions to Ask Before Joining a Medical Fellowship</span>
            </div>

            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">
                Fellowship Guides
              </span>
              <span className="text-sm text-text-secondary">⏱️ 9 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Questions to Ask Before Joining a Medical Fellowship
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
                src="/courses/high-risk-pregnancy.jpg"
                alt="Questions to Ask Before Joining a Medical Fellowship"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Choosing a medical fellowship is one of the most important educational decisions you&apos;ll
                make after completing your postgraduate training. Many doctors make the mistake of selecting
                a fellowship based on its popularity, advertisements, or recommendations from colleagues
                without evaluating whether it actually meets their professional needs. This guide outlines
                the essential questions every doctor should ask before joining a medical fellowship.
              </p>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-8">
                <p className="text-lg font-semibold text-primary mb-3">Key Takeaways</p>
                <ul className="space-y-2 text-text-secondary">
                  <li>✓ Define your learning goals before comparing any fellowship program</li>
                  <li>✓ The curriculum should always be your first priority</li>
                  <li>✓ Faculty quality, teaching methodology, and mentorship shape real outcomes</li>
                  <li>✓ Certification matters less than the knowledge and skills behind it</li>
                </ul>
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Why Asking the Right Questions Matters
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                A fellowship is more than a short-term academic commitment — it requires an investment of
                time, effort, and resources, often while balancing clinical responsibilities. Asking detailed
                questions before enrolling helps you understand exactly what the fellowship offers and
                whether it aligns with your expectations.
              </p>
              <h3 className="text-2xl font-heading font-bold text-primary mt-10 mb-4">Define Your Learning Goals First</h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {GOAL_TABLE.map((row) => (
                  <div key={row.goal} className="card p-4">
                    <p className="font-semibold text-primary mb-1 text-sm">{row.goal}</p>
                    <p className="text-sm text-text-secondary">{row.evaluate}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Question 1 — What Does the Curriculum Actually Cover?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                The curriculum should always be your first priority because it determines what you will learn
                throughout the fellowship. Before enrolling, request the complete curriculum and review it
                carefully — a well-designed curriculum should prepare you for real-world practice rather than
                simply introducing isolated subjects.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Can I view the complete curriculum before enrolling?",
                  "How frequently is the curriculum updated?",
                  "Does the fellowship include evidence-based guidelines?",
                  "Are practical case discussions incorporated?",
                  "Does the curriculum progress systematically from basic to advanced concepts?",
                ].map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>

              <div className="relative w-full h-56 md:h-72 rounded-xl overflow-hidden my-10">
                <Image
                  src="/courses/high-risk-pregnancy.jpg"
                  alt="Evaluating a medical fellowship before enrolling"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 700px"
                />
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Question 2 — Who Will Be Teaching the Fellowship?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                The quality of education often depends more on the faculty than the institution itself. Before
                joining a fellowship, review the faculty profiles carefully:
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Are the faculty actively practicing clinicians?",
                  "What is their academic experience?",
                  "Will there be opportunities for interaction?",
                  "Is mentorship available during the fellowship?",
                  "Can participants discuss clinical cases with faculty?",
                ].map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Question 3 — How Is the Fellowship Delivered?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Today&apos;s medical fellowships are offered online, hybrid, or in classroom formats — none is
                inherently better than the others. For practicing doctors, flexibility often matters, but it
                should never come at the cost of academic quality. Instead of simply asking whether the
                course is online or offline, ask how participants are expected to learn throughout the
                program.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Question 4 — Does the Fellowship Provide Practical Clinical Learning?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Medicine cannot be mastered through theory alone. When evaluating a program, ask how practical
                learning is incorporated:
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Does the fellowship encourage participants to analyse patient cases?",
                  "Are clinical scenarios discussed during sessions?",
                  "Do faculty explain why one management option is preferred over another?",
                ].map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Question 5 — Will the Fellowship Fit Into Your Professional Schedule?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Before enrolling, ask yourself:
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Can I attend the sessions consistently?",
                  "Are recordings available if I miss a class?",
                  "Is the academic schedule realistic for practicing doctors?",
                  "Will I be able to balance learning with patient care?",
                ].map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Question 6 — How Will My Learning Be Assessed?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                A structured assessment process helps participants identify areas that need improvement while
                reinforcing key concepts. Ask the admissions team whether there are regular assessments, how
                learning is evaluated, and whether feedback will be provided.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Question 7 — What Certification Will You Receive?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Certification should never be the only reason for joining a fellowship, but it&apos;s still
                worth understanding exactly what is awarded and the eligibility requirements for successful
                completion. A certificate backed by meaningful learning carries far greater professional value
                than one earned through minimal academic engagement.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Question 8 — What Academic Support Will You Receive?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Learning doesn&apos;t end when a lecture finishes. A well-structured fellowship should provide
                opportunities for participants to interact with faculty, clarify doubts, and receive guidance
                whenever required.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Question 9 — Is the Fellowship Worth the Investment?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Instead of asking whether the course is expensive, consider whether it offers good educational
                value:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {VALUE_FACTORS.map((f) => (
                  <div key={f.title} className="card p-4">
                    <p className="font-semibold text-primary mb-1 text-sm">{f.title}</p>
                    <p className="text-sm text-text-secondary">{f.text}</p>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 p-8 rounded-xl mb-8">
                <p className="text-lg font-semibold text-primary mb-4">Final Checklist Before Joining Any Medical Fellowship</p>
                <ul className="space-y-2 text-text-secondary">
                  {[
                    "Have I reviewed the complete curriculum?",
                    "Do I understand the learning methodology?",
                    "Have I evaluated the faculty profiles?",
                    "Does the fellowship include practical clinical learning?",
                    "Is the program flexible enough for my schedule?",
                    "Are assessments and certification clearly explained?",
                    "Is academic mentorship available?",
                    "Does the fellowship align with my career goals?",
                  ].map((li) => (
                    <li key={li} className="flex items-start gap-3">
                      <span className="text-primary text-xl mt-1">✓</span>
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Ready to Ask the Right Questions?
                </h3>
                <p className="text-text-secondary mb-6">
                  Explore MedFellow Academy&apos;s fellowship programs — structured, evidence-based curricula
                  designed for practicing doctors across 60+ specialties.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/courses" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-center">
                    Explore Fellowship Programs
                  </Link>
                  <Link href="/courses/best-fellowship-course-in-high-risk-pregnancy" className="inline-block px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all text-center">
                    Read the High-Risk Pregnancy Guide
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
            <TopicClusterLinks title="High-Risk Pregnancy Resources" links={CLUSTER_LINKS} />
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
              <Link href="/courses/best-fellowship-course-in-high-risk-pregnancy" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">Fellowship Guide</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Best Fellowship Course in High-Risk Pregnancy
                </h3>
                <p className="text-sm text-text-secondary">A complete guide to curriculum, eligibility, career opportunities, and clinical training...</p>
              </Link>
              <Link href="/blog/how-to-choose-a-high-risk-pregnancy-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  How to Choose a High-Risk Pregnancy Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Compare curriculum, faculty, learning methodology, and career goals...</p>
              </Link>
              <Link href="/blog/online-vs-offline-high-risk-pregnancy-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Online vs Offline High-Risk Pregnancy Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Compare learning formats to choose what fits your professional schedule...</p>
              </Link>
              <Link href="/blog/is-high-risk-pregnancy-fellowship-worth-it" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Career Planning</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Is a High-Risk Pregnancy Fellowship Worth It?
                </h3>
                <p className="text-sm text-text-secondary">Discover the clinical and career benefits before making your decision...</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

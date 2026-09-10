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
  title: "How to Choose a Urology Fellowship | MedFellow",
  description:
    "A practical guide to choosing the right urology fellowship — how to compare curriculum, faculty, learning format, case-based teaching, eligibility and career support.",
  keywords:
    "how to choose a urology fellowship, best urology fellowship, urology fellowship course, urology training, fellowship in urology",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/how-to-choose-a-urology-fellowship/" },
  openGraph: {
    title: "How to Choose a Urology Fellowship",
    description:
      "Compare curriculum, faculty, learning format, case-based teaching, eligibility and career support before enrolling in a urology fellowship.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/how-to-choose-a-urology-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Choose a Urology Fellowship",
    description: "The key factors to compare before enrolling in a urology fellowship.",
  },
};

const FAQS = [
  { q: "What is the most important factor when choosing a urology fellowship?", a: "The curriculum should align with your career goals and cover modern urology comprehensively — endourology, uro-oncology, reconstructive urology, andrology, female and pediatric urology — supported by experienced faculty and case-based learning." },
  { q: "Can I complete a urology fellowship while working full time?", a: "Yes. Many programs offer flexible online learning with recorded sessions and weekend live classes, making them suitable for practising doctors." },
  { q: "Should I choose an online or offline fellowship?", a: "It depends on your schedule, learning preferences, and access to clinical training. Online fellowships are convenient for working professionals; some programs also include an optional clinical attachment." },
  { q: "How can I compare two fellowship programs?", a: "Compare the curriculum, faculty, duration, learning format, academic support, certification, and career guidance rather than focusing only on the course fee." },
  { q: "Does case-based learning make a difference?", a: "Yes. Discussing real clinical scenarios improves clinical reasoning, treatment planning, and confidence in managing patients." },
  { q: "Is faculty mentorship important?", a: "Experienced faculty provide practical insights, answer clinical questions, and guide participants through complex topics, so mentorship is an important part of fellowship training." },
  { q: "What questions should I ask before enrolling?", a: "Ask about the curriculum, learning schedule, eligibility, assessments, faculty interaction, certification, and available academic support." },
  { q: "How do I know if a fellowship is right for me?", a: "Choose a program that fits your qualifications, supports your career goals, and offers flexible, evidence-based learning with ongoing academic guidance." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Choose a Urology Fellowship",
  description:
    "A practical guide to choosing the right urology fellowship by comparing curriculum, faculty, learning format, case-based teaching, eligibility and career support.",
  image: "https://www.medfellowacademy.com/courses/urology.jpg",
  datePublished: "2026-09-10",
  dateModified: "2026-09-10",
  author: { "@type": "Organization", name: "MedFellow Academy" },
  publisher: {
    "@type": "Organization",
    name: "MedFellow Academy",
    logo: { "@type": "ImageObject", url: "https://www.medfellowacademy.com/logo.png" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.medfellowacademy.com/blog/how-to-choose-a-urology-fellowship/",
  },
};

const CURRICULUM_TOPICS = [
  "Clinical urology", "Endourology", "Kidney stone management", "Uro-oncology", "Female urology",
  "Pediatric urology", "Male infertility", "Reconstructive urology", "Urological emergencies",
  "Evidence-based treatment planning",
];

const FACTORS = [
  { title: "Define your career goals", text: "Decide whether you want to strengthen general urology, focus on endourology and minimally invasive procedures, or build depth in uro-oncology or reconstructive urology. A fellowship that matches your aspirations gives more long-term value than one chosen for convenience." },
  { title: "Compare the curriculum", text: "A structured curriculum builds knowledge progressively rather than presenting isolated topics. Check that it covers core and advanced urology across the areas you care about." },
  { title: "Check the faculty and mentorship", text: "Find out whether instructors are experienced, actively practising urologists, and whether the program includes live discussions or mentoring sessions where you can interact with them." },
  { title: "Consider the learning format", text: "For working doctors, look for online learning, weekend sessions, recorded lectures, self-paced modules, and mobile-friendly access so you can keep your clinical responsibilities." },
  { title: "Look for case-based discussions", text: "Case presentations, clinical reasoning exercises, treatment planning discussions, and faculty feedback translate textbook knowledge into practice and strengthen evidence-based decision making." },
  { title: "Verify eligibility and certification", text: "Review the required qualifications, experience, admission process, assessment methods, and the certificate awarded on successful completion before you apply." },
  { title: "Consider career support", text: "Some providers offer academic guidance, career counselling, alumni networking, and professional development resources that help you build connections after the program ends." },
];

const CHECKLIST = [
  "Does the curriculum match my career goals?",
  "Is the faculty experienced and clinically active?",
  "Can I continue working while studying?",
  "Are case discussions included?",
  "Does the program provide ongoing academic support?",
  "Will I receive a clear fellowship certificate?",
  "Does the program offer genuine flexibility?",
  "Is the curriculum regularly updated?",
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
              <span>How to Choose a Urology Fellowship</span>
            </div>

            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">Fellowship Guides</span>
              <span className="text-sm text-text-secondary">⏱️ 9 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              How to Choose a Urology Fellowship
            </h1>

            <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">MA</div>
                <div>
                  <p className="font-semibold text-primary">Med Fellow Academy</p>
                  <p className="text-sm text-text-secondary">Medical Education Experts</p>
                </div>
              </div>
            </div>

            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10">
              <Image src="/courses/urology.jpg" alt="How to Choose a Urology Fellowship" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Choosing a urology fellowship is an important step for doctors who want to strengthen their
                clinical knowledge and prepare for future career opportunities. With many programs available —
                some focused on academic learning, others on case discussions, flexible schedules, or clinical
                exposure — the best fellowship is not simply the cheapest or shortest. It is the one that aligns
                with your professional goals, supports your learning style, and develops skills relevant to
                modern urological practice.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">7 Factors to Weigh Before You Enrol</h2>
              <div className="space-y-4 mb-8 not-prose">
                {FACTORS.map((s, i) => (
                  <div key={s.title} className="card p-5">
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#15401E] text-white text-[0.8125rem] font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                      <div>
                        <h3 className="text-[1rem] font-bold text-primary mb-1">{s.title}</h3>
                        <p className="text-sm text-text-secondary leading-relaxed">{s.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Curriculum Topics to Look For</h2>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 not-prose">
                {CURRICULUM_TOPICS.map((t) => (
                  <div key={t} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary">
                    <span className="text-secondary mt-0.5">✓</span>
                    <span>{t}</span>
                  </div>
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                A structured curriculum should build knowledge progressively. Ask not only <em>&quot;what topics
                are covered?&quot;</em> but <em>&quot;how are they taught, discussed, and assessed?&quot;</em>
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Checklist Before Choosing a Urology Fellowship</h2>
              <div className="space-y-2 mb-8 not-prose">
                {CHECKLIST.map((c) => (
                  <div key={c} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary">
                    <span className="text-secondary mt-0.5">✓</span>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                If most answers are yes, the fellowship is likely a strong fit for your professional development.
              </p>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Take the Next Step in Your Urology Career</h3>
                <p className="text-text-secondary mb-6">
                  Explore the MedFellow Academy Fellowship in Urology and review the curriculum, faculty, learning
                  format, and career support. Ask how each area is actually taught and assessed.
                </p>
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
                  <p className="text-text-secondary mb-4">
                    MedFellow Academy provides structured, flexible fellowship courses for practising doctors —
                    combining an evidence-based curriculum, expert faculty mentorship, and case-based clinical
                    learning across a wide range of specialties.
                  </p>
                  <div className="flex gap-4">
                    <Link href="/courses" className="text-secondary font-semibold hover:text-primary">View Our Courses →</Link>
                    <Link href="/blog" className="text-secondary font-semibold hover:text-primary">More Articles →</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <TopicClusterLinks title="Urology Resources" links={CLUSTER_LINKS} />
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
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Best Fellowship Course in Urology</h3>
                <p className="text-sm text-text-secondary">A complete guide to curriculum, learning format, eligibility, and career pathways...</p>
              </Link>
              <Link href="/blog/questions-to-ask-before-joining-a-urology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Questions to Ask Before Joining a Urology Fellowship</h3>
                <p className="text-sm text-text-secondary">The questions every doctor should ask before applying...</p>
              </Link>
              <Link href="/blog/online-vs-offline-urology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Online vs Offline Urology Fellowship</h3>
                <p className="text-sm text-text-secondary">Compare learning formats to find the option that fits your schedule...</p>
              </Link>
              <Link href="/blog/who-can-apply-for-a-urology-fellowship-eligibility-guide" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Who Can Apply for a Urology Fellowship?</h3>
                <p className="text-sm text-text-secondary">An eligibility guide covering qualifications and background...</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import TopicClusterLinks from "@/components/TopicClusterLinks";
import Link from "next/link";
import Image from "next/image";

const CLUSTER_LINKS = [
  { label: "Best Fellowship Course in Oral Implantology & Laser Dentistry (Guide)", href: "/best-fellowship-course-in-oral-implantology-laser-dentistry", type: "guide" as const },
  { label: "How to Choose an Oral Implantology & Laser Dentistry Fellowship", href: "/blog/how-to-choose-an-oral-implantology-laser-dentistry-fellowship", type: "blog" as const },
  { label: "Questions to Ask Before Joining an Oral Implantology & Laser Dentistry Fellowship", href: "/blog/questions-to-ask-before-joining-an-oral-implantology-laser-dentistry-fellowship", type: "blog" as const },
  { label: "Online vs Offline Oral Implantology & Laser Dentistry Fellowship", href: "/blog/online-vs-offline-oral-implantology-laser-dentistry-fellowship", type: "blog" as const },
  { label: "Is an Oral Implantology & Laser Dentistry Fellowship Worth It?", href: "/blog/is-an-oral-implantology-laser-dentistry-fellowship-worth-it", type: "blog" as const },
  { label: "Career Opportunities After an Oral Implantology & Laser Dentistry Fellowship", href: "/blog/career-opportunities-after-an-oral-implantology-laser-dentistry-fellowship", type: "blog" as const },
];

export const metadata: Metadata = {
  title: "How to Choose an Oral Implantology & Laser Dentistry Fellowship | MedFellow",
  description:
    "How to evaluate an oral implantology & laser dentistry fellowship — eligibility, curriculum, faculty, learning format, case discussions, certification and career fit.",
  keywords:
    "how to choose an oral implantology fellowship, oral implantology fellowship, laser dentistry fellowship, implant dentistry course, fellowship in implant dentistry",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/how-to-choose-an-oral-implantology-laser-dentistry-fellowship/" },
  openGraph: {
    title: "How to Choose an Oral Implantology & Laser Dentistry Fellowship",
    description: "Eligibility, curriculum, faculty, learning format, case discussions, certification and career fit.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/how-to-choose-an-oral-implantology-laser-dentistry-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: { card: "summary_large_image", title: "How to Choose an Oral Implantology & Laser Dentistry Fellowship", description: "How to evaluate implantology fellowships before enrolling." },
};

const FAQS = [
  { q: "How do I know if a fellowship is worth joining?", a: "Review the curriculum, faculty expertise, flexibility, academic support, certification, and whether the program aligns with your professional goals — not just the fee." },
  { q: "Should I compare more than one fellowship before enrolling?", a: "Yes. Comparing multiple programs helps you evaluate curriculum quality, learning format, mentorship, and overall value." },
  { q: "Is online learning effective for implantology fellowships?", a: "It can be, when supported by a structured curriculum, experienced faculty, case-based discussions, and opportunities for interaction." },
  { q: "What is the biggest mistake dentists make when choosing a fellowship?", a: "Focusing only on the course fee instead of evaluating the curriculum, faculty experience, learning outcomes, and long-term career benefits." },
  { q: "Should I choose a fellowship based only on the certificate?", a: "No. The quality of learning, faculty guidance, and curriculum are usually more important than the certificate itself." },
  { q: "Are recorded lectures important?", a: "Yes. Recorded sessions let participants revisit complex topics and learn at their own pace." },
  { q: "How important are case discussions?", a: "They help dentists understand treatment planning, clinical decision making, and the management of real-world scenarios." },
  { q: "What should I ask during a counselling session?", a: "Ask about eligibility, curriculum, faculty, learning schedule, certification, assessments, academic support, and available resources." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Choose an Oral Implantology & Laser Dentistry Fellowship",
  description: "A framework for evaluating an oral implantology and laser dentistry fellowship before enrolling.",
  image: "https://www.medfellowacademy.com/courses/oral-implantology.jpg",
  datePublished: "2026-09-10",
  dateModified: "2026-09-10",
  author: { "@type": "Organization", name: "MedFellow Academy" },
  publisher: { "@type": "Organization", name: "MedFellow Academy", logo: { "@type": "ImageObject", url: "https://www.medfellowacademy.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.medfellowacademy.com/blog/how-to-choose-an-oral-implantology-laser-dentistry-fellowship/" },
};

const FACTORS = [
  { title: "Eligibility", text: "Confirm who can apply — BDS graduates, MDS graduates, or both — and whether there are minimum clinical experience requirements or rules for international applicants." },
  { title: "Curriculum depth", text: "Look for implant treatment planning, osseointegration, CBCT interpretation, digital implant workflows, implant complications, laser safety, soft and hard tissue laser applications, prosthetic planning, and evidence-based treatment planning." },
  { title: "Faculty", text: "Check whether faculty actively practise implant dentistry, their academic qualifications and teaching experience, whether guest faculty are included, and how much you can interact with instructors." },
  { title: "Learning format", text: "For working dentists, look for flexible online learning, weekend sessions, recorded lectures, self-paced material, and access to resources after live sessions." },
  { title: "Case-based discussions", text: "Implant planning discussions, complex case reviews, treatment planning exercises, complication management, and patient communication scenarios strengthen clinical reasoning." },
  { title: "Certification", text: "Understand who issues the certificate, whether the curriculum is structured, whether there are assessments, and what the completion requirements are." },
  { title: "Ongoing academic support", text: "Faculty mentorship, academic coordinators, discussion forums, doubt-clearing sessions, and recorded content all improve the learning experience." },
  { title: "Career fit", text: "Match the program to your goals — expanding a private practice, focusing on implant dentistry, adding laser-assisted procedures — rather than choosing the lowest-cost option." },
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
              <span>How to Choose an Oral Implantology &amp; Laser Dentistry Fellowship</span>
            </div>
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">Fellowship Guides</span>
              <span className="text-sm text-text-secondary">⏱️ 9 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">How to Choose an Oral Implantology &amp; Laser Dentistry Fellowship</h1>
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">MA</div>
                <div><p className="font-semibold text-primary">Med Fellow Academy</p><p className="text-sm text-text-secondary">Medical Education Experts</p></div>
              </div>
            </div>
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10">
              <Image src="/courses/oral-implantology.jpg" alt="How to Choose an Oral Implantology and Laser Dentistry Fellowship" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Many programs promise advanced learning, but not every fellowship offers the same curriculum,
                faculty support, flexibility, or clinical relevance. Before investing time and money, work
                through a clear set of factors so you can identify a program that aligns with your career goals
                and supports long-term professional growth.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">8 Factors to Evaluate</h2>
              <div className="space-y-4 mb-8 not-prose">
                {FACTORS.map((s, i) => (
                  <div key={s.title} className="card p-5">
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#15401E] text-white text-[0.8125rem] font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                      <div><h3 className="text-[1rem] font-bold text-primary mb-1">{s.title}</h3><p className="text-sm text-text-secondary leading-relaxed">{s.text}</p></div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-text-secondary leading-relaxed mb-8">
                A structured curriculum with faculty mentorship and case-based discussions offers more than a
                short-term workshop focused on a single technique. Choosing a program that matches your learning
                goals is as important as choosing the specialty itself.
              </p>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Compare With Confidence</h3>
                <p className="text-text-secondary mb-6">Explore the MedFellow Academy Fellowship in Oral Implantology &amp; Laser Dentistry and review the curriculum, faculty, format, and certification.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/courses/fellowship-in-oral-implantology-laser-dentistry" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-center">View Fellowship Details</Link>
                  <Link href="/best-fellowship-course-in-oral-implantology-laser-dentistry" className="inline-block px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all text-center">Read the Full Guide</Link>
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
          <div className="lg:col-span-1"><TopicClusterLinks title="Implant & Laser Dentistry Resources" links={CLUSTER_LINKS} /></div>
          </div>
        </div>
      </article>
      <FAQ faqs={FAQS} />
      <section className="section-padding bg-background">
        <div className="container-custom"><div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-primary mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/best-fellowship-course-in-oral-implantology-laser-dentistry" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">Fellowship Guide</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Best Fellowship Course in Oral Implantology &amp; Laser Dentistry</h3>
              <p className="text-sm text-text-secondary">A complete guide to curriculum, learning format, eligibility, and career pathways...</p>
            </Link>
            <Link href="/blog/questions-to-ask-before-joining-an-oral-implantology-laser-dentistry-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Questions to Ask Before Joining</h3>
              <p className="text-sm text-text-secondary">The questions every dentist should ask before applying...</p>
            </Link>
            <Link href="/blog/online-vs-offline-oral-implantology-laser-dentistry-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Online vs Offline Oral Implantology &amp; Laser Dentistry Fellowship</h3>
              <p className="text-sm text-text-secondary">Compare learning formats to find the option that fits your goals...</p>
            </Link>
            <Link href="/blog/is-an-oral-implantology-laser-dentistry-fellowship-worth-it" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Career Planning</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Is an Oral Implantology &amp; Laser Dentistry Fellowship Worth It?</h3>
              <p className="text-sm text-text-secondary">The benefits, limitations, and factors to consider before enrolling...</p>
            </Link>
          </div>
        </div></div>
      </section>
      <Footer />
    </div>
  );
}

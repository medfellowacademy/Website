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
  title: "Questions to Ask Before Joining an Oral Implantology & Laser Dentistry Fellowship | MedFellow",
  description:
    "Eight questions every dentist should ask before enrolling in an oral implantology & laser dentistry fellowship — eligibility, curriculum, faculty, flexibility, certification and support.",
  keywords:
    "questions to ask oral implantology fellowship, oral implantology fellowship, laser dentistry fellowship, implant dentistry course, fellowship in oral implantology",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-an-oral-implantology-laser-dentistry-fellowship/" },
  openGraph: {
    title: "Questions to Ask Before Joining an Oral Implantology & Laser Dentistry Fellowship",
    description: "Eligibility, curriculum, faculty, flexibility, case discussions, certification and support — what to ask before you enrol.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-an-oral-implantology-laser-dentistry-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: { card: "summary_large_image", title: "Questions to Ask Before Joining an Oral Implantology & Laser Dentistry Fellowship", description: "The questions every dentist should ask before applying." },
};

const FAQS = [
  { q: "How do I know if a fellowship is worth joining?", a: "Review the curriculum, faculty expertise, flexibility, academic support, and whether the program aligns with your professional goals." },
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
  headline: "Questions to Ask Before Joining an Oral Implantology & Laser Dentistry Fellowship",
  description: "Eight questions every dentist should ask before enrolling in an oral implantology and laser dentistry fellowship.",
  image: "https://www.medfellowacademy.com/courses/oral-implantology.jpg",
  datePublished: "2026-09-10",
  dateModified: "2026-09-10",
  author: { "@type": "Organization", name: "MedFellow Academy" },
  publisher: { "@type": "Organization", name: "MedFellow Academy", logo: { "@type": "ImageObject", url: "https://www.medfellowacademy.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-an-oral-implantology-laser-dentistry-fellowship/" },
};

const QUESTIONS = [
  { q: "Am I eligible for the fellowship?", a: "Ask who can apply, whether the program is open to BDS graduates, MDS graduates, or both, whether there are minimum clinical experience requirements, and whether international applicants are eligible." },
  { q: "Does the curriculum cover modern implantology and laser dentistry?", a: "Look for implant treatment planning, osseointegration, CBCT interpretation, digital implant workflows, implant complications, laser safety, soft and hard tissue laser applications, prosthetic planning, and evidence-based treatment planning." },
  { q: "Who are the faculty members?", a: "Ask whether faculty actively practise implant dentistry, their academic qualifications and teaching experience, whether guest faculty are included, and how much interaction with instructors is possible." },
  { q: "Can I continue my clinical practice while studying?", a: "Ask whether the fellowship offers flexible online learning, weekend sessions, recorded lectures, self-paced material, and access to resources after live sessions." },
  { q: "Are clinical case discussions included?", a: "Find out whether the fellowship includes implant planning discussions, complex case reviews, treatment planning exercises, complication management, and patient communication scenarios." },
  { q: "What certification will I receive?", a: "Understand who issues the certificate, whether the curriculum is structured, whether there are assessments, and what the completion requirements are." },
  { q: "Will I receive ongoing academic support?", a: "Consider whether the program offers faculty mentorship, academic coordinators, discussion forums, doubt-clearing sessions, study resources, and recorded content." },
  { q: "Will this fellowship support my career goals?", a: "Decide whether you want to expand your private practice, focus on implant dentistry, add laser-assisted procedures, or improve patient confidence — and check the curriculum aligns with those plans." },
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
              <span>Questions to Ask Before Joining an Oral Implantology &amp; Laser Dentistry Fellowship</span>
            </div>
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">Fellowship Guides</span>
              <span className="text-sm text-text-secondary">⏱️ 8 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Questions to Ask Before Joining an Oral Implantology &amp; Laser Dentistry Fellowship</h1>
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">MA</div>
                <div><p className="font-semibold text-primary">Med Fellow Academy</p><p className="text-sm text-text-secondary">Medical Education Experts</p></div>
              </div>
            </div>
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10">
              <Image src="/courses/oral-implantology.jpg" alt="Questions to Ask Before Joining an Oral Implantology and Laser Dentistry Fellowship" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Many programs promise advanced learning, but not every fellowship offers the same curriculum,
                faculty support, flexibility, or clinical relevance. Before investing your time and money, ask
                these questions to identify a program that aligns with your career goals and supports long-term
                professional growth.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">8 Questions Worth Asking</h2>
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
                Comparing multiple programs beyond their delivery format — on curriculum, faculty, mentorship,
                and certification — helps you choose a fellowship that offers structured education and long-term
                value.
              </p>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Ask Us Directly</h3>
                <p className="text-text-secondary mb-6">Explore the MedFellow Academy Fellowship in Oral Implantology &amp; Laser Dentistry and get clear answers about the curriculum, faculty, and certification before you apply.</p>
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
            <Link href="/blog/how-to-choose-an-oral-implantology-laser-dentistry-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">How to Choose an Oral Implantology &amp; Laser Dentistry Fellowship</h3>
              <p className="text-sm text-text-secondary">A framework for evaluating implantology fellowships before enrolling...</p>
            </Link>
            <Link href="/blog/online-vs-offline-oral-implantology-laser-dentistry-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Online vs Offline Oral Implantology &amp; Laser Dentistry Fellowship</h3>
              <p className="text-sm text-text-secondary">Compare learning formats to find the option that fits your goals...</p>
            </Link>
            <Link href="/blog/career-opportunities-after-an-oral-implantology-laser-dentistry-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Career Planning</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Career Opportunities After an Oral Implantology &amp; Laser Dentistry Fellowship</h3>
              <p className="text-sm text-text-secondary">How advanced training can support long-term career growth...</p>
            </Link>
          </div>
        </div></div>
      </section>
      <Footer />
    </div>
  );
}

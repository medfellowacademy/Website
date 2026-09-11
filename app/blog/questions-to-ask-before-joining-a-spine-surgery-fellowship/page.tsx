import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import TopicClusterLinks from "@/components/TopicClusterLinks";
import Link from "next/link";
import Image from "next/image";

const CLUSTER_LINKS = [
  { label: "Best Fellowship Course in Spine Surgery (Guide)", href: "/courses/best-fellowship-course-in-spine-surgery", type: "guide" as const },
  { label: "How to Choose a Spine Surgery Fellowship", href: "/blog/how-to-choose-a-spine-surgery-fellowship", type: "blog" as const },
  { label: "Questions to Ask Before Joining a Spine Surgery Fellowship", href: "/blog/questions-to-ask-before-joining-a-spine-surgery-fellowship", type: "blog" as const },
  { label: "Online vs Offline Spine Surgery Fellowship", href: "/blog/online-vs-offline-spine-surgery-fellowship", type: "blog" as const },
  { label: "Is a Spine Surgery Fellowship Worth It?", href: "/blog/is-a-spine-surgery-fellowship-worth-it", type: "blog" as const },
  { label: "Skills You Learn During a Spine Surgery Fellowship", href: "/blog/skills-you-learn-during-a-spine-surgery-fellowship", type: "blog" as const },
];

export const metadata: Metadata = {
  title: "Questions to Ask Before Joining a Spine Surgery Fellowship | MedFellow",
  description:
    "The key questions to ask before enrolling in a spine surgery fellowship — goals, eligibility, curriculum, faculty, clinical and surgical exposure, format, assessment and certification.",
  keywords:
    "questions to ask spine surgery fellowship, spine surgery fellowship course, spine fellowship eligibility, spine surgery training, best spine surgery fellowship",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-a-spine-surgery-fellowship/" },
  openGraph: {
    title: "Questions to Ask Before Joining a Spine Surgery Fellowship",
    description: "Goals, eligibility, curriculum, faculty, clinical exposure, format, assessment and certification — what to ask before you enrol.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-a-spine-surgery-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: { card: "summary_large_image", title: "Questions to Ask Before Joining a Spine Surgery Fellowship", description: "The questions every doctor should ask before applying." },
};

const FAQS = [
  { q: "What should I ask about clinical and surgical exposure?", a: "Ask whether training is observational, whether there is simulation or skills training, whether there is supervised hands-on training, how much hospital exposure is provided, and whether exposure equals independent surgical practice (it does not)." },
  { q: "Which eligibility questions matter most?", a: "What medical qualification is required, whether postgraduate training is mandatory, whether previous spine experience is required, and whether there are additional admission conditions. MedFellow lists MS/MD/DNB Orthopaedics or Neurosurgery." },
  { q: "What curriculum coverage should I confirm?", a: "Whether it covers degenerative spine disorders, spine trauma, deformity and pediatric spine, tumours and infections, and minimally invasive spine surgery." },
  { q: "How is learning assessed?", a: "Ask whether there are examinations, whether case presentations are included, whether there is a research project, and whether you receive feedback." },
  { q: "What certification will I receive?", a: "Ask who issues the certificate and what the credential is called. A fellowship is additional education and does not replace formal specialist training, licensing, or credentialing." },
  { q: "Is a hybrid format better for working doctors?", a: "A hybrid combines online academic learning with selected in-person or clinical components, reducing time away from practice while still providing exposure. Fully online offers maximum flexibility." },
  { q: "What faculty questions should I ask?", a: "Faculty qualifications, whether they are active in spine practice, and how much faculty interaction you will actually get during the program." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Questions to Ask Before Joining a Spine Surgery Fellowship",
  description: "The key questions to ask before enrolling in a spine surgery fellowship.",
  image: "https://www.medfellowacademy.com/courses/spine-surgery.jpg",
  datePublished: "2026-09-10",
  dateModified: "2026-09-10",
  author: { "@type": "Organization", name: "MedFellow Academy" },
  publisher: { "@type": "Organization", name: "MedFellow Academy", logo: { "@type": "ImageObject", url: "https://www.medfellowacademy.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-a-spine-surgery-fellowship/" },
};

const QUESTIONS = [
  { q: "What do I actually want from this fellowship?", a: "Advanced spine knowledge, clinical exposure, hands-on surgical training, or flexibility while working — be honest about your priority before comparing programs." },
  { q: "What medical qualification is required?", a: "Is postgraduate training mandatory, is previous spine experience required, and are there additional admission conditions? Confirm eligibility before payment." },
  { q: "Does the curriculum cover the full range of spine practice?", a: "Degenerative spine disorders, spine trauma, deformity and pediatric spine, tumours and infections, and minimally invasive spine surgery." },
  { q: "Who are the faculty, and how much will I interact with them?", a: "Faculty qualifications, whether they are active in spine practice, and how much live interaction and case discussion the program provides." },
  { q: "What does the clinical exposure actually include?", a: "Is it observational, is there simulation or skills training, is there supervised hands-on training, and how much hospital exposure is provided?" },
  { q: "Is clinical exposure the same as independent surgical practice?", a: "No. Observation and even supervised participation are different from independent operative competency, which requires formal training, assessment, and credentialing." },
  { q: "What does the online and offline component include?", a: "What is delivered online, what (if anything) is delivered in person, and how flexible the schedule is for a working doctor." },
  { q: "How is my learning assessed?", a: "Examinations, case presentations, a research project, and feedback — a structured method rather than attendance alone." },
  { q: "Who issues the certificate and what is it called?", a: "Understand the credential and what it represents before enrolling." },
  { q: "Does this fellowship fit my career plan?", a: "If you plan further formal training, verify the recognition and entry requirements of the next program." },
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
              <span>Questions to Ask Before Joining a Spine Surgery Fellowship</span>
            </div>
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">Fellowship Guides</span>
              <span className="text-sm text-text-secondary">⏱️ 10 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Questions to Ask Before Joining a Spine Surgery Fellowship</h1>
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">MA</div>
                <div><p className="font-semibold text-primary">Med Fellow Academy</p><p className="text-sm text-text-secondary">Medical Education Experts</p></div>
              </div>
            </div>
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10">
              <Image src="/courses/spine-surgery.jpg" alt="Questions to Ask Before Joining a Spine Surgery Fellowship" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                A spine surgery fellowship is a significant investment of time and money. The right questions —
                about goals, eligibility, curriculum, faculty, clinical and surgical exposure, format,
                assessment, and certification — make the comparison objective and help you avoid unrealistic
                expectations.
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

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Ask Us Directly</h3>
                <p className="text-text-secondary mb-6">Explore the MedFellow Academy Fellowship in Spine Surgery and get clear answers about the curriculum, clinical component, assessment, and certification.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/courses/fellowship-in-spine-surgery" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-center">View Fellowship Details</Link>
                  <Link href="/courses/best-fellowship-course-in-spine-surgery" className="inline-block px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all text-center">Read the Full Guide</Link>
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
          <div className="lg:col-span-1"><TopicClusterLinks title="Spine Surgery Resources" links={CLUSTER_LINKS} /></div>
          </div>
        </div>
      </article>
      <FAQ faqs={FAQS} />
      <section className="section-padding bg-background">
        <div className="container-custom"><div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-primary mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/courses/best-fellowship-course-in-spine-surgery" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">Fellowship Guide</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Best Fellowship Course in Spine Surgery</h3>
              <p className="text-sm text-text-secondary">A complete guide to curriculum, learning format, eligibility, fees and career pathways...</p>
            </Link>
            <Link href="/blog/how-to-choose-a-spine-surgery-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">How to Choose a Spine Surgery Fellowship</h3>
              <p className="text-sm text-text-secondary">A practical framework for comparing fellowship providers...</p>
            </Link>
            <Link href="/blog/online-vs-offline-spine-surgery-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Online vs Offline Spine Surgery Fellowship</h3>
              <p className="text-sm text-text-secondary">Compare online, offline and hybrid formats for a surgical spine fellowship...</p>
            </Link>
            <Link href="/blog/is-a-spine-surgery-fellowship-worth-it" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Career Planning</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Is a Spine Surgery Fellowship Worth It?</h3>
              <p className="text-sm text-text-secondary">The benefits, limitations, and factors to consider before enrolling...</p>
            </Link>
          </div>
        </div></div>
      </section>
      <Footer />
    </div>
  );
}

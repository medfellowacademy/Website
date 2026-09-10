import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import TopicClusterLinks from "@/components/TopicClusterLinks";
import Link from "next/link";
import Image from "next/image";

const CLUSTER_LINKS = [
  { label: "Best Fellowship Course in Head & Neck Oncology (Guide)", href: "/courses/best-fellowship-course-in-head-neck-oncology", type: "guide" as const },
  { label: "How to Choose a Head & Neck Oncology Fellowship", href: "/blog/how-to-choose-a-head-neck-oncology-fellowship", type: "blog" as const },
  { label: "Questions to Ask Before Joining a Head & Neck Oncology Fellowship", href: "/blog/questions-to-ask-before-joining-a-head-neck-oncology-fellowship", type: "blog" as const },
  { label: "Online vs Offline Head & Neck Oncology Fellowship", href: "/blog/online-vs-offline-head-neck-oncology-fellowship", type: "blog" as const },
  { label: "Skills You Learn During a Head & Neck Oncology Fellowship", href: "/blog/skills-you-learn-during-a-head-neck-oncology-fellowship", type: "blog" as const },
  { label: "Career Opportunities After a Head & Neck Oncology Fellowship", href: "/blog/career-opportunities-after-a-head-neck-oncology-fellowship", type: "blog" as const },
];

export const metadata: Metadata = {
  title: "Questions to Ask Before Joining a Head & Neck Oncology Fellowship | MedFellow",
  description:
    "The key questions to ask before enrolling in a head & neck oncology fellowship — eligibility, curriculum, clinical and surgical exposure, tumor boards, reconstruction, assessment, certification, fees and red flags.",
  keywords:
    "questions to ask head & neck oncology fellowship, head & neck oncology fellowship course, head and neck surgical oncology fellowship, head & neck oncology training, best head & neck oncology fellowship",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-a-head-neck-oncology-fellowship/" },
  openGraph: {
    title: "Questions to Ask Before Joining a Head & Neck Oncology Fellowship",
    description: "Eligibility, curriculum, clinical exposure, tumor boards, reconstruction, assessment, certification, fees and red flags.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-a-head-neck-oncology-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: { card: "summary_large_image", title: "Questions to Ask Before Joining a Head & Neck Oncology Fellowship", description: "The questions every doctor should ask before applying." },
};

const FAQS = [
  { q: "What should I ask about clinical and surgical exposure?", a: "Ask whether it means case discussions, tumor board participation, hospital or operating-room observation, simulation, or supervised practical training — and who supervises. Watching an operation is not the same as performing one." },
  { q: "How is learning assessed in a good fellowship?", a: "Look for structured methods — examinations, case presentations, projects, or portfolio review — rather than attendance alone." },
  { q: "What does the certificate represent?", a: "Understand who issues it and whether there is an assessment. Completing an educational fellowship does not automatically provide specialist registration, specialist status, independent surgical privileges, or a formal super-specialty qualification." },
  { q: "Which eligibility should I confirm?", a: "Which qualifications are accepted, any prior surgical experience requirements, and registration rules if you plan to use the fellowship in another country. Accredited head and neck oncologic surgery fellowships usually expect a recognised surgical residency." },
  { q: "What are the full fellowship fees?", a: "Ask what tuition includes and what is extra — registration, assessment, any clinical placement, travel, accommodation, and materials — then compare value, not just price." },
  { q: "Does the fellowship include reconstruction and tumor boards?", a: "For a comprehensive program, both matter. Ask whether reconstruction is integrated with oncologic decision-making and whether fellows present at multidisciplinary tumor boards with faculty feedback." },
  { q: "What are common red flags?", a: "Vague descriptions of clinical exposure, no defined assessment, unclear certification, over-promised operative training, and a curriculum limited to a single subsite or to a broad oncology introduction only." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Questions to Ask Before Joining a Head & Neck Oncology Fellowship",
  description: "The key questions to ask before enrolling in a head and neck oncology fellowship.",
  image: "https://www.medfellowacademy.com/courses/head-neck-oncology.jpg",
  datePublished: "2026-09-10",
  dateModified: "2026-09-10",
  author: { "@type": "Organization", name: "MedFellow Academy" },
  publisher: { "@type": "Organization", name: "MedFellow Academy", logo: { "@type": "ImageObject", url: "https://www.medfellowacademy.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-a-head-neck-oncology-fellowship/" },
};

const QUESTIONS = [
  { q: "What do I want from head & neck oncology training?", a: "Advanced oncology knowledge, surgical oncology exposure, reconstruction understanding, multidisciplinary care, or academic and research development — your objective drives every other choice." },
  { q: "What are the eligibility requirements?", a: "Which qualifications are accepted, any prior surgical experience expected, and international registration requirements if relevant." },
  { q: "What exactly does the curriculum cover?", a: "Diagnosis and staging (including TNM), multiple head and neck subsites, surgical oncology, reconstruction and rehabilitation, radiation oncology, systemic therapy, postoperative care, palliative care, and survivorship." },
  { q: "What kind of clinical and surgical exposure is included?", a: "Case volume, which procedures or surgical areas are covered, your role (observation, planning, supervised participation), and who supervises the learning." },
  { q: "Does the fellowship include reconstruction training?", a: "Whether the reconstructive curriculum covers flap surgery, functional restoration, and rehabilitation, and whether it is integrated with oncologic decision-making." },
  { q: "Will I get tumor board exposure?", a: "How often tumor boards are held, whether fellows present cases, whether multiple specialties are represented, and whether faculty explain their reasoning." },
  { q: "Who will teach and mentor me?", a: "Faculty experience in head and neck surgical oncology and related specialties, and how often — and how — fellows actually interact with them." },
  { q: "How will my learning be assessed?", a: "Examinations, case presentations, projects, or portfolio review — a structured method rather than attendance alone." },
  { q: "What certification will I receive, and what does it represent?", a: "Who issues it, whether there is an assessment, and whether it is academic fellowship education rather than specialist recognition." },
  { q: "What are the full fellowship fees, and what is extra?", a: "Tuition, registration, assessment, any clinical placement, travel, accommodation, and study materials — compared against overall educational value." },
];

const RED_FLAGS = [
  "Vague or undefined description of clinical and surgical exposure",
  "No structured assessment or completion requirements",
  "Unclear who issues the certificate or what it represents",
  "Over-promised independent operative training",
  "Curriculum limited to one subsite or only a broad oncology overview",
  "No multidisciplinary or tumor board component",
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
              <span>Questions to Ask Before Joining a Head &amp; Neck Oncology Fellowship</span>
            </div>
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">Fellowship Guides</span>
              <span className="text-sm text-text-secondary">⏱️ 10 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Questions to Ask Before Joining a Head &amp; Neck Oncology Fellowship</h1>
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">MA</div>
                <div><p className="font-semibold text-primary">Med Fellow Academy</p><p className="text-sm text-text-secondary">Medical Education Experts</p></div>
              </div>
            </div>
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10">
              <Image src="/courses/head-neck-oncology.jpg" alt="Questions to Ask Before Joining a Head and Neck Oncology Fellowship" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                A head &amp; neck oncology fellowship is a significant investment of time and money. The right
                questions — about eligibility, curriculum, clinical and surgical exposure, tumor boards,
                reconstruction, assessment, certification, and fees — make the comparison objective and help you
                avoid unrealistic expectations.
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

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Red Flags to Watch For</h2>
              <div className="space-y-2 mb-8 not-prose">
                {RED_FLAGS.map((c) => (<div key={c} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary"><span className="text-red-400 mt-0.5">•</span><span>{c}</span></div>))}
              </div>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Ask Us Directly</h3>
                <p className="text-text-secondary mb-6">Explore the MedFellow Academy Fellowship in Head &amp; Neck Oncology and get clear answers about the curriculum, clinical component, assessment, and certification.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/courses/fellowship-in-head-neck-oncology" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-center">View Fellowship Details</Link>
                  <Link href="/courses/best-fellowship-course-in-head-neck-oncology" className="inline-block px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all text-center">Read the Full Guide</Link>
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
          <div className="lg:col-span-1"><TopicClusterLinks title="Head & Neck Oncology Resources" links={CLUSTER_LINKS} /></div>
          </div>
        </div>
      </article>
      <FAQ faqs={FAQS} />
      <section className="section-padding bg-background">
        <div className="container-custom"><div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-primary mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/courses/best-fellowship-course-in-head-neck-oncology" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">Fellowship Guide</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Best Fellowship Course in Head &amp; Neck Oncology</h3>
              <p className="text-sm text-text-secondary">A complete guide to curriculum, learning format, eligibility, fees and career pathways...</p>
            </Link>
            <Link href="/blog/how-to-choose-a-head-neck-oncology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">How to Choose a Head &amp; Neck Oncology Fellowship</h3>
              <p className="text-sm text-text-secondary">A practical framework for comparing fellowship providers...</p>
            </Link>
            <Link href="/blog/online-vs-offline-head-neck-oncology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Online vs Offline Head &amp; Neck Oncology Fellowship</h3>
              <p className="text-sm text-text-secondary">Compare online, offline and hybrid formats for a surgical oncology fellowship...</p>
            </Link>
            <Link href="/blog/career-opportunities-after-a-head-neck-oncology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Career Planning</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Career Opportunities After a Head &amp; Neck Oncology Fellowship</h3>
              <p className="text-sm text-text-secondary">Oncology teams, skull base care, academics, research and further training...</p>
            </Link>
          </div>
        </div></div>
      </section>
      <Footer />
    </div>
  );
}

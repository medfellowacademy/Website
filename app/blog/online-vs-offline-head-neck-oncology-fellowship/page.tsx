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
  title: "Online vs Offline Head & Neck Oncology Fellowship | MedFellow",
  description:
    "Compare online, offline and hybrid head & neck oncology fellowships — academic learning, case discussions, tumor board and hospital exposure, surgical observation, and the exposure-vs-competency distinction.",
  keywords:
    "online head & neck oncology fellowship, offline head & neck oncology fellowship, hybrid head & neck oncology fellowship, head & neck oncology fellowship course, head and neck surgical oncology fellowship",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/online-vs-offline-head-neck-oncology-fellowship/" },
  openGraph: {
    title: "Online vs Offline Head & Neck Oncology Fellowship",
    description: "Academic learning, case discussions, tumor board and hospital exposure, surgical observation, and the exposure-vs-competency distinction.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/online-vs-offline-head-neck-oncology-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: { card: "summary_large_image", title: "Online vs Offline Head & Neck Oncology Fellowship", description: "Compare fellowship learning formats for head and neck oncology." },
};

const FAQS = [
  { q: "Is an online head & neck oncology fellowship as good as an offline one?", a: "For academic learning — lectures, case discussions, literature review, assignments, assessments — a well-structured online fellowship can be equivalent. Direct operative experience is where offline and hospital-based models differ." },
  { q: "Can I learn head and neck cancer surgery through an online fellowship?", a: "Online learning can build strong knowledge of surgical principles, indications, and planning, but it cannot reproduce supervised operative training. Independent surgical competency needs formal, supervised, assessed experience." },
  { q: "Which is better for a working doctor, online or offline?", a: "Working doctors who cannot leave clinical responsibilities usually prefer online or hybrid formats. Offline suits those who can commit to residential, in-person training." },
  { q: "Does a hybrid fellowship include hands-on surgical training?", a: "A hybrid program combines structured online academics with selected in-person or clinical components. Ask exactly what the clinical month or attachment includes — observation, simulation, or supervised participation." },
  { q: "Do online fellowships include tumor board exposure?", a: "Many do, through virtual tumor boards with case presentations and specialist discussion. Ask how often they run and whether fellows present." },
  { q: "Is offline learning automatically hands-on?", a: "No. An offline program can still be largely observational. Clarify the level of supervised practical training in either format." },
  { q: "Does learning online affect career growth?", a: "Career growth depends more on the quality of learning, practical application, and professional development than on whether the program is delivered online or offline." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Online vs Offline Head & Neck Oncology Fellowship",
  description: "A comparison of online, offline and hybrid head and neck oncology fellowship formats.",
  image: "https://www.medfellowacademy.com/courses/head-neck-oncology.jpg",
  datePublished: "2026-09-10",
  dateModified: "2026-09-10",
  author: { "@type": "Organization", name: "MedFellow Academy" },
  publisher: { "@type": "Organization", name: "MedFellow Academy", logo: { "@type": "ImageObject", url: "https://www.medfellowacademy.com/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.medfellowacademy.com/blog/online-vs-offline-head-neck-oncology-fellowship/" },
};

const FORMATS = [
  { title: "Online Fellowship", text: "Academic content through live virtual classes, recorded lectures, digital materials, case discussions, assignments, and assessments. Useful for working doctors who cannot leave clinical responsibilities for a residential program." },
  { title: "Offline Fellowship", text: "Classroom or hospital-based teaching on a fixed schedule, with direct faculty interaction, hospital exposure, clinical observation, and in-person peer networking." },
  { title: "Hybrid Fellowship", text: "Structured online academic education combined with selected in-person or clinical components — a practical middle ground. The MedFellow program is a 12-month hybrid course with a fully online option and an 11 online + 1 clinical month option." },
];

const COMPARE_ROWS = [
  { factor: "Academic learning", online: "Strong — structured modules, recorded content", offline: "Strong — in-person lectures and discussion" },
  { factor: "Case discussions", online: "Live and recorded, with faculty", offline: "In-person, ward-based" },
  { factor: "Tumor board exposure", online: "Often via virtual tumor boards", offline: "In-person multidisciplinary meetings" },
  { factor: "Hospital / OR observation", online: "Limited; optional attachments in some programs", offline: "Institution-specific exposure" },
  { factor: "Supervised operative training", online: "Not provided by online learning alone", offline: "Possible, depending on the program" },
  { factor: "Flexibility for working doctors", online: "High", offline: "Low — may need leave or relocation" },
  { factor: "Cost", online: "Usually lower (no travel / accommodation)", offline: "Usually higher" },
];

const LOOK_FOR = ["Is the curriculum comprehensive?", "Are faculty members experienced?", "Are case discussions included?", "Is practical exposure clearly defined?", "How are you assessed?", "What does the certificate represent?"];

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
              <span>Online vs Offline Head &amp; Neck Oncology Fellowship</span>
            </div>
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">Fellowship Guides</span>
              <span className="text-sm text-text-secondary">⏱️ 9 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Online vs Offline Head &amp; Neck Oncology Fellowship</h1>
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">MA</div>
                <div><p className="font-semibold text-primary">Med Fellow Academy</p><p className="text-sm text-text-secondary">Medical Education Experts</p></div>
              </div>
            </div>
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10">
              <Image src="/courses/head-neck-oncology.jpg" alt="Online vs Offline Head and Neck Oncology Fellowship" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                For a surgical oncology fellowship, the online-versus-offline question matters more than usual —
                because the two formats differ most on operative exposure. Academic learning, case discussions,
                and even tumor board participation translate well online; supervised hands-on training does not.
                The right choice depends on your professional responsibilities and what you need the fellowship
                to deliver.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">The Three Formats</h2>
              <div className="grid sm:grid-cols-1 gap-4 mb-8 not-prose">
                {FORMATS.map((c) => (
                  <div key={c.title} className="card p-4"><h3 className="text-[0.9375rem] font-bold text-primary mb-1.5">{c.title}</h3><p className="text-[0.8125rem] text-text-secondary leading-relaxed">{c.text}</p></div>
                ))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Side by Side</h2>
              <div className="overflow-x-auto rounded-lg border border-gray-200 mb-8 not-prose">
                <table className="w-full text-sm text-left">
                  <thead className="bg-primary text-white"><tr><th className="px-4 py-3 font-semibold">Factor</th><th className="px-4 py-3 font-semibold">Online</th><th className="px-4 py-3 font-semibold">Offline</th></tr></thead>
                  <tbody>
                    {COMPARE_ROWS.map((r, i) => (
                      <tr key={r.factor} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 font-medium text-primary border-t border-gray-100">{r.factor}</td>
                        <td className="px-4 py-3 text-text-secondary border-t border-gray-100">{r.online}</td>
                        <td className="px-4 py-3 text-text-secondary border-t border-gray-100">{r.offline}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Choose Based on Your Priority</h2>
              <p className="text-text-secondary leading-relaxed mb-3">
                <strong>Choose online</strong> if you prioritise flexibility and structured academic learning
                while continuing to practise. <strong>Choose offline</strong> if clinical immersion and in-person
                operative exposure are your priority and you can commit the time. <strong>Choose hybrid</strong>
                {" "}if you want both — structured online academics plus a defined clinical component.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">What to Compare in Any Format</h2>
              <div className="space-y-2 mb-8 not-prose">
                {LOOK_FOR.map((c) => (<div key={c} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary"><span className="text-secondary mt-0.5">✓</span><span>{c}</span></div>))}
              </div>
              <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg mb-8 not-prose">
                <p className="text-sm text-text-secondary leading-relaxed">Neither format automatically confers independent operative competency. A fellowship certificate is not a substitute for formal specialist or super-specialty training, registration, licensing, or hospital credentialing.</p>
              </div>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Compare Your Training Options</h3>
                <p className="text-text-secondary mb-6">Explore the MedFellow Academy Fellowship in Head &amp; Neck Oncology — a 12-month hybrid program with a fully online option and an 11 online + 1 clinical month pathway.</p>
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
            <Link href="/blog/skills-you-learn-during-a-head-neck-oncology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Clinical Skills</span>
              <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">Skills You Learn During a Head &amp; Neck Oncology Fellowship</h3>
              <p className="text-sm text-text-secondary">Assessment, staging, surgical reasoning, reconstruction awareness and multidisciplinary skills...</p>
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

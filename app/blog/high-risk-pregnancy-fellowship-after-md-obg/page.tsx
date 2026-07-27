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
  title: "High-Risk Pregnancy Fellowship After MD OBG: Why It Matters for Your Career | MedFellow Academy",
  description:
    "Explore why pursuing a High-Risk Pregnancy Fellowship after MD OBG can strengthen clinical expertise, improve maternal care, expand career opportunities, and support long-term professional growth.",
  keywords: "high-risk pregnancy fellowship after MD OBG, maternal fetal medicine after MD obstetrics, fellowship after MD OBG, obstetrics fellowship course",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/high-risk-pregnancy-fellowship-after-md-obg/" },
  openGraph: {
    title: "High-Risk Pregnancy Fellowship After MD OBG: Why It Matters for Your Career",
    description:
      "Explore why pursuing a High-Risk Pregnancy Fellowship after MD OBG can strengthen clinical expertise, improve maternal care, and expand career opportunities.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/high-risk-pregnancy-fellowship-after-md-obg/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "High-Risk Pregnancy Fellowship After MD OBG",
    description: "Why this fellowship matters for your career after postgraduate training.",
  },
};

const FAQS = [
  {
    q: "Should I pursue a High-Risk Pregnancy Fellowship immediately after completing MD OBG?",
    a: "There is no fixed rule. Many doctors choose to pursue a fellowship soon after MD/MS/DNB because their academic knowledge is still fresh, making it easier to build advanced clinical skills. Others prefer gaining practical experience first. The right timing depends on your career goals and learning priorities.",
  },
  {
    q: "Does a High-Risk Pregnancy Fellowship replace the learning gained during MD OBG?",
    a: "No. Postgraduate training provides comprehensive education in Obstetrics and Gynecology, while a High-Risk Pregnancy Fellowship builds upon that foundation by offering focused learning in maternal medicine, pregnancy complications, and evidence-based clinical management.",
  },
  {
    q: "Can I pursue a High-Risk Pregnancy Fellowship while working as a consultant?",
    a: "Yes. Many fellowship programs are designed for practicing doctors and offer flexible learning options such as live online classes, recorded sessions, and self-paced study materials. This enables doctors to continue their clinical responsibilities while upgrading their knowledge.",
  },
  {
    q: "What skills can I develop through a High-Risk Pregnancy Fellowship?",
    a: "A structured fellowship helps doctors strengthen clinical reasoning, pregnancy risk assessment, maternal medicine knowledge, evidence-based decision-making, fetal surveillance, patient counselling, and multidisciplinary management of complicated pregnancies.",
  },
  {
    q: "How do I choose the right High-Risk Pregnancy Fellowship after MD OBG?",
    a: "Evaluate the fellowship based on its curriculum, faculty expertise, teaching methodology, case-based learning, academic mentorship, flexibility, certification, and how well it aligns with your long-term professional goals rather than choosing solely based on duration or cost.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "High-Risk Pregnancy Fellowship After MD OBG: Why It Matters for Your Career",
  description:
    "Explore why pursuing a High-Risk Pregnancy Fellowship after MD OBG can strengthen clinical expertise, improve maternal care, expand career opportunities, and support long-term professional growth.",
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
    "@id": "https://www.medfellowacademy.com/blog/high-risk-pregnancy-fellowship-after-md-obg/",
  },
};

const MD_VS_FELLOWSHIP = [
  { md: "Broad obstetrics and gynecology training", fellowship: "Focused advanced education in High-Risk Pregnancy" },
  { md: "General clinical exposure", fellowship: "Specialized maternal medicine learning" },
  { md: "Foundation of obstetric practice", fellowship: "Advanced clinical reasoning" },
  { md: "Residency-based learning", fellowship: "Structured fellowship curriculum" },
  { md: "Independent clinical practice", fellowship: "Evidence-based subspecialty development" },
];

const CAREER_PATHWAYS = [
  { title: "Consultant Obstetrician & Gynecologist", text: "Builds confidence in managing complicated pregnancies" },
  { title: "High-Risk Pregnancy Clinics", text: "Strengthens expertise in maternal medicine and antenatal care" },
  { title: "Tertiary Care Hospitals", text: "Supports multidisciplinary management of complex cases" },
  { title: "Medical Colleges", text: "Enhances academic knowledge for teaching and mentoring" },
  { title: "Corporate Hospitals", text: "Adds value through evidence-based obstetric practice" },
  { title: "Women's Healthcare Centres", text: "Improves comprehensive management of high-risk pregnancies" },
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
              <span>High-Risk Pregnancy Fellowship After MD OBG</span>
            </div>

            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">
                Career Planning
              </span>
              <span className="text-sm text-text-secondary">⏱️ 9 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              High-Risk Pregnancy Fellowship After MD OBG — Is It the Right Next Step?
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
                alt="High-Risk Pregnancy Fellowship After MD OBG"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Completing an MD in Obstetrics &amp; Gynecology is a significant milestone, but for many
                newly qualified Obstetricians and Gynecologists, postgraduate education feels like the
                beginning of the journey rather than the destination. Clinical practice quickly highlights the
                growing complexity of modern obstetrics — one of the main reasons many doctors consider
                pursuing a High-Risk Pregnancy Fellowship after MD OBG.
              </p>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-8">
                <p className="text-lg font-semibold text-primary mb-3">Key Takeaways</p>
                <ul className="space-y-2 text-text-secondary">
                  <li>✓ A fellowship builds on MD training rather than repeating it</li>
                  <li>✓ Pursuing it early keeps academic knowledge fresh and shapes clinical thinking sooner</li>
                  <li>✓ Experienced consultants benefit equally by updating existing knowledge</li>
                  <li>✓ The decision should be guided by career goals, not a fixed rule</li>
                </ul>
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Why Many Doctors Consider Fellowship Training After MD OBG
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Once doctors begin independent practice, they often encounter situations that require more
                specialized knowledge — a patient with severe pre-eclampsia and fetal growth restriction, a
                pregnant woman with congenital heart disease, multiple pregnancies with evolving
                complications, or complex medical disorders requiring multidisciplinary management.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                While residency introduces these conditions, fellowship training provides the opportunity to
                explore them in greater depth. Rather than replacing postgraduate education, a fellowship
                builds upon it by focusing on advanced clinical reasoning and contemporary maternal
                healthcare.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                MD OBG vs High-Risk Pregnancy Fellowship
              </h2>
              <div className="overflow-x-auto rounded-lg border border-gray-200 mb-8 not-prose">
                <table className="w-full text-sm text-left">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-3 font-semibold">MD/MS/DNB OBG</th>
                      <th className="px-4 py-3 font-semibold">High-Risk Pregnancy Fellowship</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MD_VS_FELLOWSHIP.map((r, i) => (
                      <tr key={r.md} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 text-text-secondary border-t border-gray-100">{r.md}</td>
                        <td className="px-4 py-3 font-medium text-primary border-t border-gray-100">{r.fellowship}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                This comparison highlights why fellowship education should be viewed as an extension of
                postgraduate learning rather than a replacement.
              </p>

              <div className="relative w-full h-56 md:h-72 rounded-xl overflow-hidden my-10">
                <Image
                  src="/courses/high-risk-pregnancy.jpg"
                  alt="Building a career in high-risk obstetrics after MD OBG"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 700px"
                />
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                What Clinical Skills Can You Strengthen Through a Fellowship?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Instead of simply expanding theoretical knowledge, fellowship education helps doctors develop
                structured approaches to patient care. Participants learn to:
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Assess maternal and fetal risks systematically",
                  "Interpret current evidence and clinical guidelines",
                  "Develop individualized pregnancy management plans",
                  "Improve multidisciplinary communication",
                  "Strengthen patient counselling",
                  "Enhance clinical decision-making during complicated pregnancies",
                ].map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Career Pathways After a High-Risk Pregnancy Fellowship
              </h2>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {CAREER_PATHWAYS.map((c) => (
                  <div key={c.title} className="card p-4">
                    <p className="font-semibold text-primary mb-1 text-sm">{c.title}</p>
                    <p className="text-sm text-text-secondary">{c.text}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Why Early Fellowship Training Can Be Advantageous
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                The knowledge gained during postgraduate training is still fresh, making it easier to connect
                advanced concepts with previous clinical learning. Benefits of pursuing a fellowship soon
                after MD/MS/DNB include:
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Strengthens confidence during the early years of practice",
                  "Keeps knowledge aligned with current evidence-based guidelines",
                  "Develops structured clinical reasoning",
                  "Encourages lifelong learning from the beginning of your career",
                  "Supports gradual development of expertise in maternal medicine",
                ].map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
              <p className="text-text-secondary leading-relaxed mb-8">
                However, doctors with several years of experience can benefit equally, as fellowship training
                helps update existing knowledge and introduces contemporary clinical practices.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Signs That You&apos;re Ready for a High-Risk Pregnancy Fellowship
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">A fellowship may be the right choice if you:</p>
              <ul className="space-y-2 mb-8">
                {[
                  "Want to improve your confidence in managing complicated pregnancies",
                  "Frequently encounter patients with maternal medical disorders",
                  "Feel the need to update your knowledge beyond postgraduate training",
                  "Aspire to work in tertiary care hospitals or specialized maternal healthcare units",
                  "Want to build expertise in evidence-based obstetric practice",
                  "Believe in continuous professional development",
                ].map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-primary/5 p-8 rounded-xl mb-8">
                <p className="text-lg leading-relaxed text-text-secondary">
                  Completing an MD/MS/DNB in Obstetrics &amp; Gynecology marks the beginning of independent
                  clinical practice, but it is rarely the end of professional learning. Whether you pursue a
                  fellowship immediately after MD OBG or after gaining a few years of experience, the decision
                  should be guided by your career aspirations, clinical interests, and commitment to
                  continuous learning.
                </p>
              </div>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Ready to Take the Next Step After MD OBG?
                </h3>
                <p className="text-text-secondary mb-6">
                  Explore MedFellow Academy&apos;s Fellowship in High-Risk Pregnancy — designed to build on
                  your postgraduate training with focused, evidence-based clinical education.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/courses/fellowship-in-high-risk-pregnancy" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-center">
                    View Fellowship Details
                  </Link>
                  <Link href="/courses/best-fellowship-course-in-high-risk-pregnancy" className="inline-block px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all text-center">
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
              <Link href="/blog/is-high-risk-pregnancy-fellowship-worth-it" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Career Planning</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Is a High-Risk Pregnancy Fellowship Worth It?
                </h3>
                <p className="text-sm text-text-secondary">Discover the clinical and career benefits before making your decision...</p>
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

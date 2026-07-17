import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import TopicClusterLinks from "@/components/TopicClusterLinks";
import Link from "next/link";
import Image from "next/image";

const CLUSTER_LINKS = [
  { label: "Best Fellowship Course in Fetal Medicine (Guide)", href: "/courses/best-fellowship-course-in-fetal-medicine", type: "guide" as const },
  { label: "How to Choose the Best Fellowship Course in Fetal Medicine", href: "/blog/how-to-choose-the-fellowship-course-in-fetal-medicine", type: "blog" as const },
  { label: "Fellowship Course Curriculum and Clinical Training in Fetal Medicine", href: "/blog/fetal-medicine-fellowship-curriculum-and-clinical-training", type: "blog" as const },
  { label: "Career Opportunities After Fellowship in Fetal Medicine", href: "/blog/career-opportunities-after-fellowship-in-fetal-medicine", type: "blog" as const },
  { label: "Fetal Medicine vs Maternal Fetal Medicine: Understanding the Differences", href: "/blog/fetal-medicine-vs-maternal-fetal-medicine-differences", type: "blog" as const },
];

export const metadata: Metadata = {
  title: "Fetal Medicine vs Maternal Fetal Medicine: What's the Difference? | MedFellow",
  description:
    "Confused between Fetal Medicine and Maternal Fetal Medicine? Learn the key differences in scope, training, patient care, career pathways, and fellowship opportunities for Obstetricians and Gynecologists.",
  keywords: "fetal medicine vs maternal fetal medicine, difference between fetal medicine and maternal fetal medicine, fetal medicine, maternal fetal medicine, fetal medicine fellowship",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/fetal-medicine-vs-maternal-fetal-medicine-differences/" },
  openGraph: {
    title: "Fetal Medicine vs Maternal Fetal Medicine: What's the Difference?",
    description:
      "Confused between Fetal Medicine and Maternal Fetal Medicine? Learn the key differences in scope, training, patient care, career pathways, and fellowship opportunities.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/fetal-medicine-vs-maternal-fetal-medicine-differences/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fetal Medicine vs Maternal Fetal Medicine: What's the Difference?",
    description: "Learn the key differences in scope, training, and career pathways between Fetal Medicine and Maternal Fetal Medicine.",
  },
};

const FAQS = [
  {
    q: "Why do some countries use the term Maternal Fetal Medicine while others use Fetal Medicine?",
    a: "Different countries follow different medical education systems and professional terminology. In the United States, the recognized subspecialty is Maternal-Fetal Medicine, whereas countries such as the UK and India commonly use the term Fetal Medicine. Despite the difference in terminology, both focus on advanced pregnancy care and prenatal diagnosis.",
  },
  {
    q: "Is the training curriculum different between Fetal Medicine and Maternal Fetal Medicine?",
    a: "The core principles of prenatal diagnosis, fetal assessment, and high-risk pregnancy management are largely similar. However, curriculum structure and emphasis may vary depending on the institution, country, and governing medical body offering the fellowship or subspecialty training.",
  },
  {
    q: "Can an Obstetrician pursue a Fellowship in Fetal Medicine without training abroad?",
    a: "Yes. Many institutions offer structured Fellowship in Fetal Medicine programs that provide advanced education in prenatal imaging, fetal assessment, and evidence-based maternal healthcare. Doctors should review the curriculum, faculty, and clinical learning opportunities before enrolling.",
  },
  {
    q: "Does the fellowship title matter when applying for future opportunities?",
    a: "Healthcare institutions generally assess a doctor's knowledge, clinical competency, and experience rather than focusing only on the fellowship title. A comprehensive curriculum and strong clinical training are often more important than terminology.",
  },
  {
    q: "How can doctors decide which fellowship is suitable for their career goals?",
    a: "Doctors should compare the curriculum, faculty expertise, case-based learning, flexibility, certification, and institutional credibility. Choosing a fellowship that aligns with long-term clinical interests and professional objectives is more valuable than selecting a course based only on its name.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Fetal Medicine vs Maternal Fetal Medicine: What's the Difference?",
  description:
    "Confused between Fetal Medicine and Maternal Fetal Medicine? Learn the key differences in scope, training, patient care, career pathways, and fellowship opportunities.",
  image: "https://www.medfellowacademy.com/courses/fetal-medicine.jpg",
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
    "@id": "https://www.medfellowacademy.com/blog/fetal-medicine-vs-maternal-fetal-medicine-differences/",
  },
};

const COMPARISON_ROWS = [
  { aspect: "Primary focus", fm: "Fetal health and prenatal diagnosis", mfm: "Maternal health and fetal wellbeing" },
  { aspect: "Clinical emphasis", fm: "Fetal imaging and diagnosis", mfm: "High-risk pregnancy management" },
  { aspect: "Typical investigations", fm: "Anomaly scan, Doppler, fetal echocardiography", mfm: "Maternal assessment with fetal surveillance" },
  { aspect: "Common terminology", fm: "UK, Europe, India", mfm: "USA, Canada" },
  { aspect: "Patient approach", fm: "Fetus-centred", mfm: "Mother and fetus together" },
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
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-text-secondary mb-6">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-primary">Blog</Link>
              <span>/</span>
              <span>Fetal Medicine vs Maternal Fetal Medicine Differences</span>
            </div>

            {/* Category & Reading Time */}
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">
                Clinical Insights
              </span>
              <span className="text-sm text-text-secondary">⏱️ 8 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Fetal Medicine vs Maternal Fetal Medicine: Understanding the Key Differences
            </h1>

            {/* Author */}
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

            {/* Hero Image */}
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10">
              <Image
                src="/courses/fetal-medicine.jpg"
                alt="Fetal Medicine vs Maternal Fetal Medicine"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Many Obstetricians and Gynecologists come across the terms Fetal Medicine and Maternal Fetal
                Medicine (MFM) while exploring advanced training opportunities. Because these terms are often
                used interchangeably in different countries and healthcare systems, they can create confusion
                among doctors planning their career progression. This article clarifies the similarities and
                differences between the two, explains how they are practiced globally, and helps readers
                understand which terminology is more commonly used in different educational and clinical
                settings.
              </p>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-8">
                <p className="text-lg font-semibold text-primary mb-3">Key Takeaways</p>
                <ul className="space-y-2 text-text-secondary">
                  <li>✓ &quot;Fetal Medicine&quot; and &quot;Maternal Fetal Medicine&quot; largely describe the same clinical territory, named differently by region</li>
                  <li>✓ Fetal Medicine leans fetus-centred; MFM integrates maternal disease management alongside fetal care</li>
                  <li>✓ Terminology varies more than clinical practice does</li>
                  <li>✓ Career opportunities depend on curriculum quality and clinical competency, not the fellowship title</li>
                </ul>
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Are Fetal Medicine and Maternal Fetal Medicine the Same?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                It is easy to see why the two terms get confused. In many countries — especially the United
                Kingdom and several Commonwealth nations — the term Fetal Medicine is widely used, while in
                countries such as the United States, the broader specialty is generally referred to as
                Maternal-Fetal Medicine (MFM).
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Both disciplines share the common goal of improving maternal and fetal outcomes through
                advanced prenatal care, but the terminology and emphasis may differ depending on healthcare
                systems and training structures.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Understanding the Scope of Fetal Medicine
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Fetal Medicine primarily concentrates on the unborn baby and includes:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "Prenatal diagnosis",
                  "Detailed fetal ultrasound",
                  "Fetal anomaly assessment",
                  "Doppler evaluation",
                  "Fetal echocardiography",
                  "Genetic screening and counselling",
                  "Monitoring fetal growth and wellbeing",
                ].map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
              <p className="text-text-secondary leading-relaxed mb-8">
                These services help identify fetal conditions early and support evidence-based pregnancy
                management.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Understanding the Scope of Maternal Fetal Medicine
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Maternal Fetal Medicine is a broader subspecialty that combines fetal care with the management
                of complex maternal medical conditions affecting pregnancy. MFM specialists often manage
                pregnancies complicated by:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "Hypertension",
                  "Diabetes",
                  "Autoimmune disorders",
                  "Multiple pregnancies",
                  "Placental disorders",
                  "Previous obstetric complications",
                  "Maternal medical illnesses",
                ].map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
              <p className="text-text-secondary leading-relaxed mb-8">
                In MFM practice, maternal assessment and fetal assessment are closely integrated.
              </p>

              <div className="relative w-full h-56 md:h-72 rounded-xl overflow-hidden my-10">
                <Image
                  src="/courses/fetal-medicine.jpg"
                  alt="Comparing Fetal Medicine and Maternal Fetal Medicine practice"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 700px"
                />
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Fetal Medicine vs Maternal Fetal Medicine: A Comparison
              </h2>
              <div className="overflow-x-auto rounded-lg border border-gray-200 mb-8 not-prose">
                <table className="w-full text-sm text-left">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-3 font-semibold whitespace-nowrap">Aspect</th>
                      <th className="px-4 py-3 font-semibold whitespace-nowrap">Fetal Medicine</th>
                      <th className="px-4 py-3 font-semibold whitespace-nowrap">Maternal Fetal Medicine</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON_ROWS.map((r, i) => (
                      <tr key={r.aspect} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 font-medium text-primary border-t border-gray-100 whitespace-nowrap">{r.aspect}</td>
                        <td className="px-4 py-3 text-text-secondary border-t border-gray-100">{r.fm}</td>
                        <td className="px-4 py-3 text-text-secondary border-t border-gray-100">{r.mfm}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                Despite these distinctions, both specialties overlap significantly in clinical practice.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Why Are the Terms Used Interchangeably?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Medical education, professional societies, and healthcare systems use different terminology
                because of:
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8">
                {[
                  "International training systems",
                  "Regional naming conventions",
                  "Similar clinical responsibilities",
                  "Overlapping educational objectives",
                ].map((li) => (
                  <div key={li} className="flex items-start gap-2 text-text-secondary">
                    <span className="text-secondary text-xl mt-0.5">✓</span>
                    <span>{li}</span>
                  </div>
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                The takeaway is that terminology varies more than clinical practice does.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Which Fellowship Is Right for You?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Rather than choosing based on the course title, doctors should evaluate:
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Fellowship curriculum",
                  "Faculty expertise",
                  "Clinical exposure",
                  "Learning methodology",
                  "Institutional credibility",
                  "Career objectives",
                ].map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Does the Difference Affect Career Opportunities?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Employers and healthcare institutions usually value clinical competency more than terminology.
                Fellowship-trained doctors may work in:
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "High-risk pregnancy units",
                  "Advanced prenatal imaging services",
                  "Academic institutions",
                  "Multidisciplinary maternal healthcare teams",
                ].map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
              <p className="text-text-secondary leading-relaxed mb-8">
                Career opportunities depend on expertise, experience, and institutional requirements rather
                than the label of the fellowship.
              </p>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Build Expertise in Modern Fetal Medicine
                </h3>
                <p className="text-text-secondary mb-6">
                  Whether your career path is described as Fetal Medicine or Maternal Fetal Medicine,
                  structured fellowship education helps strengthen clinical knowledge, evidence-based
                  decision-making, and confidence in managing complex pregnancies.
                </p>
                <Link href="/apply" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-center">
                  Apply Now
                </Link>
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Fetal Medicine and Maternal Fetal Medicine: More Similar Than Different
              </h2>
              <div className="bg-primary/5 p-8 rounded-xl mb-8">
                <p className="text-lg leading-relaxed text-text-secondary">
                  Fetal Medicine and Maternal Fetal Medicine often describe closely related areas of advanced
                  obstetric care. While terminology varies across countries and healthcare systems, both focus
                  on improving outcomes for mothers and babies through early diagnosis, specialized assessment,
                  and multidisciplinary management. Doctors should focus on the quality of fellowship training,
                  curriculum, and clinical learning rather than choosing a program based solely on its title.
                </p>
              </div>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Ready to Advance Your Expertise in Fetal Medicine?
                </h3>
                <p className="text-text-secondary mb-6">
                  Explore MedFellow Academy&apos;s Fellowship in Fetal Medicine — a structured, flexible
                  online curriculum designed for practicing Obstetricians and Gynecologists.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/courses/fellowship-in-fetal-medicine" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-center">
                    View Fellowship Details
                  </Link>
                  <Link href="/courses/best-fellowship-course-in-fetal-medicine" className="inline-block px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all text-center">
                    Read the Full Guide
                  </Link>
                </div>
              </div>
            </div>

            {/* Author Bio */}
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
            <TopicClusterLinks title="Fetal Medicine Resources" links={CLUSTER_LINKS} />
          </div>
          </div>
        </div>
      </article>

      <FAQ faqs={FAQS} />

      {/* Related Resources */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-primary mb-6">Related Resources</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/courses/best-fellowship-course-in-fetal-medicine" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">
                  Fellowship Guide
                </span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Best Fellowship Course in Fetal Medicine
                </h3>
                <p className="text-sm text-text-secondary">Understand fellowship pathways, eligibility, curriculum, and professional development...</p>
              </Link>

              <Link href="/blog/how-to-choose-the-fellowship-course-in-fetal-medicine" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">
                  Fellowship Guides
                </span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  How to Choose the Best Fellowship Course in Fetal Medicine
                </h3>
                <p className="text-sm text-text-secondary">Learn how to evaluate curriculum, faculty, learning methodology, and career relevance...</p>
              </Link>

              <Link href="/blog/fetal-medicine-fellowship-curriculum-and-clinical-training" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">
                  Clinical Skills
                </span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Fellowship Course Curriculum and Clinical Training in Fetal Medicine
                </h3>
                <p className="text-sm text-text-secondary">Explore the curriculum, case-based learning, and faculty mentorship offered in the fellowship...</p>
              </Link>

              <Link href="/blog/career-opportunities-after-fellowship-in-fetal-medicine" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">
                  Career Planning
                </span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Career Opportunities After Fellowship in Fetal Medicine
                </h3>
                <p className="text-sm text-text-secondary">Discover how advanced fellowship training supports long-term professional growth...</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

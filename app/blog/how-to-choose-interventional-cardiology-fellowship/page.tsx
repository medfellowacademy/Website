import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import TopicClusterLinks from "@/components/TopicClusterLinks";
import Link from "next/link";
import Image from "next/image";

const CLUSTER_LINKS = [
  { label: "Best Fellowship Course in Interventional Cardiology (Guide)", href: "/best-fellowship-course-in-interventional-cardiology", type: "guide" as const },
  { label: "How to Choose an Interventional Cardiology Fellowship", href: "/blog/how-to-choose-interventional-cardiology-fellowship", type: "blog" as const },
  { label: "Questions to Ask Before Joining an Interventional Cardiology Fellowship", href: "/blog/questions-to-ask-before-joining-interventional-cardiology-fellowship", type: "blog" as const },
  { label: "Online vs Offline Interventional Cardiology Fellowship", href: "/blog/online-vs-offline-interventional-cardiology-fellowship", type: "blog" as const },
  { label: "Is an Interventional Cardiology Fellowship Worth It?", href: "/blog/is-interventional-cardiology-fellowship-worth-it", type: "blog" as const },
  { label: "Skills You Learn During an Interventional Cardiology Fellowship", href: "/blog/skills-you-learn-interventional-cardiology-fellowship", type: "blog" as const },
];

export const metadata: Metadata = {
  title: "How to Choose an Interventional Cardiology Fellowship | MedFellow Academy",
  description:
    "Learn how to choose an Interventional Cardiology Fellowship by comparing eligibility, curriculum, faculty, clinical exposure, flexibility, fees, and career support.",
  keywords:
    "How to Choose an Interventional Cardiology Fellowship, Interventional Cardiology Fellowship, Fellowship in Interventional Cardiology, Best Interventional Cardiology Fellowship, Interventional Cardiology Course",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/how-to-choose-interventional-cardiology-fellowship/" },
  openGraph: {
    title: "How to Choose an Interventional Cardiology Fellowship",
    description:
      "Learn how to choose an Interventional Cardiology Fellowship by comparing eligibility, curriculum, faculty, clinical exposure, flexibility, fees, and career support.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/how-to-choose-interventional-cardiology-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/courses/interventional-cardiology.jpg", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Choose an Interventional Cardiology Fellowship",
    description: "Compare eligibility, curriculum, faculty, clinical exposure, flexibility, fees, and career support before choosing a fellowship.",
  },
};

const FAQS = [
  {
    q: "What is the most important factor when choosing an Interventional Cardiology Fellowship?",
    a: "The curriculum and clinical training structure are among the most important factors. Also evaluate faculty expertise, eligibility, certification, learning format, and whether the program matches your career objectives.",
  },
  {
    q: "Is an online Interventional Cardiology Fellowship enough for PCI training?",
    a: "Online learning can provide valuable academic knowledge, but it does not replace supervised clinical procedural training. PCI competency requires appropriate clinical experience and institutional supervision.",
  },
  {
    q: "Should I choose a one-year or two-year fellowship?",
    a: "Duration alone should not determine your decision. Compare the curriculum, clinical exposure, supervision, assessment, and learning outcomes of each program.",
  },
  {
    q: "What should I look for in an Interventional Cardiology curriculum?",
    a: "Look for coronary anatomy, angiography, hemodynamics, PCI principles, intravascular imaging, coronary physiology, patient selection, complications, and evidence-based clinical decision making.",
  },
  {
    q: "Can I pursue a fellowship while continuing my practice?",
    a: "Flexible online or hybrid programs may allow doctors to continue working while studying. Check the weekly workload, live-session schedule, and clinical requirements before enrolling.",
  },
  {
    q: "Is clinical exposure important in an Interventional Cardiology Fellowship?",
    a: "Yes. Clinical exposure is particularly important for procedural specialties. Ask exactly what type of supervised clinical training the program provides.",
  },
  {
    q: "Can MBBS doctors apply for an Interventional Cardiology Fellowship?",
    a: "Eligibility varies, but many formal interventional cardiology fellowship programs require prior specialist cardiology training. Check the specific program's eligibility criteria rather than assuming that MBBS alone is sufficient.",
  },
  {
    q: "Does completing a fellowship make me an independent interventional cardiologist?",
    a: "Not necessarily. Fellowship certification does not automatically confer specialist registration, procedural privileges, or independent practice rights. These depend on applicable qualifications, regulations, institutional credentialing, and demonstrated competency.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Choose an Interventional Cardiology Fellowship",
  description:
    "Learn how to choose an Interventional Cardiology Fellowship by comparing eligibility, curriculum, faculty, clinical exposure, flexibility, fees, and career support.",
  image: "https://www.medfellowacademy.com/courses/interventional-cardiology.jpg",
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
    "@id": "https://www.medfellowacademy.com/blog/how-to-choose-interventional-cardiology-fellowship/",
  },
};

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
              <span>How to Choose an Interventional Cardiology Fellowship</span>
            </div>

            {/* Category & Reading Time */}
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">
                Fellowship Guides
              </span>
              <span className="text-sm text-text-secondary">⏱️ 9 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              How to Choose an Interventional Cardiology Fellowship
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
                src="/courses/interventional-cardiology.jpg"
                alt="How to Choose an Interventional Cardiology Fellowship"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Choosing an Interventional Cardiology Fellowship is an important decision for doctors who want
                to strengthen their knowledge of catheter-based cardiovascular care and modern interventional
                techniques. With different programs offering different curricula, durations, learning formats,
                faculty profiles, and clinical opportunities, it can be difficult to know which fellowship is
                actually right for you. This guide explains the key factors doctors should evaluate before
                joining an Interventional Cardiology Fellowship.
              </p>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-8">
                <p className="text-lg font-semibold text-primary mb-3">Key Takeaways</p>
                <ul className="space-y-2 text-text-secondary">
                  <li>✓ The best fellowship is not necessarily the one with the shortest duration or lowest fee</li>
                  <li>✓ Look for structured learning covering coronary anatomy, PCI, imaging, and complications</li>
                  <li>✓ Clinical exposure and faculty expertise matter as much as the curriculum outline</li>
                  <li>✓ Understand what the certificate represents before you compare fees</li>
                </ul>
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                1. Define What You Want From the Fellowship
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Before comparing institutions, first identify why you want to pursue the fellowship. Are you
                looking to:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "Strengthen your interventional cardiology knowledge",
                  "Understand modern PCI techniques",
                  "Improve your cath lab knowledge",
                  "Learn about coronary physiology",
                  "Understand intravascular imaging",
                  "Develop better clinical decision making",
                  "Prepare for a future interventional cardiology role",
                  "Continue professional education while working",
                ].map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
              <p className="text-text-secondary leading-relaxed mb-8">
                Your objective should influence the type of fellowship you choose. A doctor seeking advanced
                academic knowledge may prioritize curriculum and faculty expertise, while someone specifically
                looking for supervised clinical exposure should carefully examine the program&apos;s hands-on
                training structure.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                2. What Should the Curriculum Include?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                A comprehensive curriculum is one of the most important factors when comparing fellowships.
                Look for coverage of:
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Coronary anatomy and cardiovascular assessment",
                  "Cath lab workflow, vascular access, and coronary angiography",
                  "Hemodynamic assessment and catheter/guidewire concepts",
                  "Percutaneous coronary intervention, balloon angioplasty, and stent selection",
                  "Lesion assessment and procedural planning",
                  "Intravascular imaging: IVUS, OCT, FFR, and coronary physiology",
                ].map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                3. Evaluate the Faculty and Mentorship
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Faculty quality can significantly influence your fellowship experience. Before enrolling, find
                out who teaches the program, their clinical qualifications, whether they have interventional
                cardiology experience, whether they are actively involved in clinical practice, and how
                frequently fellows can interact with them.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                A strong faculty team should not simply deliver lectures. They should help participants
                understand how clinical knowledge translates into patient assessment and decision making.
              </p>

              <div className="relative w-full h-56 md:h-72 rounded-xl overflow-hidden my-10">
                <Image
                  src="/courses/interventional-cardiology.jpg"
                  alt="Evaluating clinical exposure in an Interventional Cardiology Fellowship"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 700px"
                />
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                4. Understand the Clinical Exposure
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Clinical exposure is particularly important in interventional cardiology. If a program
                advertises hands-on or hospital-based training, ask exactly what this means:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "Where does clinical training take place?",
                  "Is there a hospital attachment?",
                  "How long is the clinical component?",
                  "Who supervises fellows?",
                  "Are fellows allowed to observe procedures?",
                  "What procedures can fellows participate in under supervision?",
                  "Is a clinical logbook maintained?",
                  "How is competency assessed?",
                ].map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
              <p className="text-text-secondary leading-relaxed mb-8">
                It is important to distinguish academic online learning from supervised procedural training.
                Watching lectures or recorded procedures does not establish independent procedural competence.
                Interventional procedures require appropriate specialist qualifications, supervised clinical
                experience, procedural volume, institutional credentialing, and compliance with applicable
                regulations.
              </p>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Compare Fellowship Options With Confidence
                </h3>
                <p className="text-text-secondary mb-6">
                  Explore the Fellowship in Interventional Cardiology at MedFellow Academy and review the
                  curriculum, eligibility, learning format, and clinical training options.
                </p>
                <Link href="/apply" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-center">
                  Apply Now
                </Link>
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                5. Is Online or Offline Training Better?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                There is no universal answer. The right format depends on your objectives and professional
                circumstances.
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-bold text-primary">Factor</th>
                      <th className="py-3 pr-4 font-bold text-primary">Online Fellowship</th>
                      <th className="py-3 font-bold text-primary">Offline Fellowship</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Flexibility", "High", "Usually limited"],
                      ["Working Doctors", "More convenient", "May require schedule changes"],
                      ["Recorded Learning", "Usually available", "May vary"],
                      ["Faculty Interaction", "Online", "Face-to-face"],
                      ["Clinical Exposure", "Depends on program", "Usually stronger if hospital-based"],
                      ["Travel", "Minimal", "Often required"],
                      ["Work-Life Balance", "Easier", "More demanding"],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        <td className="py-3 pr-4 font-medium">{row[0]}</td>
                        <td className="py-3 pr-4 text-text-secondary">{row[1]}</td>
                        <td className="py-3 text-text-secondary">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                If your primary objective is academic learning, an online or hybrid program may offer greater
                flexibility. If your goal specifically involves supervised procedural training, you should
                prioritize programs with appropriate hospital-based clinical exposure.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Who Can Apply? Verify Your Eligibility
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Many formal interventional cardiology fellowship programs are designed for doctors who have
                already completed specialist cardiology training. For example, some institutional programs
                specify DM or DNB Cardiology as an eligibility requirement. Depending on the program,
                applicants may need:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "A recognized medical degree",
                  "Postgraduate medical qualification",
                  "Specialist cardiology qualification",
                  "Relevant clinical experience",
                  "Current medical registration",
                  "Additional institutional requirements",
                ].map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
              <p className="text-text-secondary leading-relaxed mb-8">
                Do not assume that any doctor with an MBBS or general medical qualification can enter an
                interventional cardiology fellowship or independently perform interventional procedures.
                Eligibility for an educational fellowship is different from eligibility for independent
                procedural practice — verify requirements with the relevant medical regulator, employer,
                hospital, and credentialing authority.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                6. Don&apos;t Compare Fees Alone
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                The cheapest fellowship is not automatically the best value. When comparing fees, check what is
                included:
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Course tuition and learning resources",
                  "Live sessions and recorded lectures",
                  "Faculty interaction and assessments",
                  "Certification",
                  "Clinical attachment and hospital training, if applicable",
                  "Additional examination, travel, and accommodation expenses",
                ].map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                7. Understand What the Certificate Represents
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Ask who issues the certificate, whether it is a fellowship certificate or a university
                qualification, what the completion requirements are, and how the certificate is used
                professionally. Avoid choosing a fellowship solely because its marketing describes it as
                &quot;internationally recognized&quot; — check the actual awarding institution and understand
                how the qualification is treated by your relevant regulator or employer.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                8 &amp; 9. Case-Based Learning and Career Development Support
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Interventional cardiology requires clinical reasoning, not just memorization. Ask whether the
                program includes live case discussions, clinical scenarios, image interpretation, and
                faculty-led analysis. A fellowship should also contribute to your professional development
                beyond the final certificate — look for academic mentorship, career counselling, professional
                networking, research guidance, and CV development.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                However, be cautious about programs that promise guaranteed jobs, specialist status, or
                independent procedural privileges after completing a fellowship. Career outcomes depend on your
                qualifications, experience, licensing, procedural competency, location, and employer
                requirements.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                MedFellow Academy vs Other Fellowship Options
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-bold text-primary">Feature</th>
                      <th className="py-3 pr-4 font-bold text-primary">MedFellow Academy</th>
                      <th className="py-3 font-bold text-primary">Other Providers</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Learning Format", "Flexible medical education", "Varies"],
                      ["Structured Curriculum", "Yes", "Varies"],
                      ["Case-Based Learning", "Included", "Varies"],
                      ["Faculty Support", "Academic guidance", "Varies"],
                      ["Working Doctor Friendly", "Yes", "Depends on program"],
                      ["Digital Resources", "Available", "Varies"],
                      ["Career Guidance", "Available", "Varies"],
                      ["Clinical Components", "Based on selected program", "Varies"],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        <td className="py-3 pr-4 font-medium">{row[0]}</td>
                        <td className="py-3 pr-4 text-text-secondary">{row[1]}</td>
                        <td className="py-3 text-text-secondary">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-primary/5 p-8 rounded-xl mb-8">
                <p className="text-lg leading-relaxed text-text-secondary">
                  Choosing the right fellowship requires more than comparing course names and fees. Look
                  closely at the curriculum, faculty, eligibility requirements, clinical exposure, learning
                  format, certification, assessments, and career support — and select a program that aligns
                  with your qualifications and long-term professional goals.
                </p>
              </div>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Choose Your Interventional Cardiology Fellowship With Confidence
                </h3>
                <p className="text-text-secondary mb-6">
                  For doctors seeking flexible academic learning, a structured fellowship can provide an
                  effective way to expand their knowledge while continuing professional responsibilities.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/courses/fellowship-in-interventional-cardiology" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-center">
                    View Fellowship Details
                  </Link>
                  <Link href="/best-fellowship-course-in-interventional-cardiology" className="inline-block px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all text-center">
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
            <TopicClusterLinks title="Interventional Cardiology Resources" links={CLUSTER_LINKS} />
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
              <Link href="/best-fellowship-course-in-interventional-cardiology" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">
                  Fellowship Guide
                </span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Best Fellowship Course in Interventional Cardiology
                </h3>
                <p className="text-sm text-text-secondary">Understand fellowship pathways, eligibility, curriculum, and career opportunities...</p>
              </Link>

              <Link href="/blog/questions-to-ask-before-joining-interventional-cardiology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">
                  Checklist
                </span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Questions to Ask Before Joining an Interventional Cardiology Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Get a practical checklist before enrolling...</p>
              </Link>

              <Link href="/blog/online-vs-offline-interventional-cardiology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">
                  Learning Formats
                </span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Online vs Offline Interventional Cardiology Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Compare learning formats for working doctors...</p>
              </Link>

              <Link href="/blog/skills-you-learn-interventional-cardiology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">
                  Clinical Skills
                </span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Skills You Learn During an Interventional Cardiology Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Explore key clinical and interventional learning areas...</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

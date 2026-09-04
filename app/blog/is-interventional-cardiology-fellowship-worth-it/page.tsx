import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import TopicClusterLinks from "@/components/TopicClusterLinks";
import Link from "next/link";
import Image from "next/image";

const CLUSTER_LINKS = [
  { label: "Best Fellowship Course in Interventional Cardiology (Guide)", href: "/courses/best-fellowship-course-in-interventional-cardiology", type: "guide" as const },
  { label: "How to Choose an Interventional Cardiology Fellowship", href: "/blog/how-to-choose-interventional-cardiology-fellowship", type: "blog" as const },
  { label: "Questions to Ask Before Joining an Interventional Cardiology Fellowship", href: "/blog/questions-to-ask-before-joining-interventional-cardiology-fellowship", type: "blog" as const },
  { label: "Online vs Offline Interventional Cardiology Fellowship", href: "/blog/online-vs-offline-interventional-cardiology-fellowship", type: "blog" as const },
  { label: "Is an Interventional Cardiology Fellowship Worth It?", href: "/blog/is-interventional-cardiology-fellowship-worth-it", type: "blog" as const },
  { label: "Skills You Learn During an Interventional Cardiology Fellowship", href: "/blog/skills-you-learn-interventional-cardiology-fellowship", type: "blog" as const },
];

export const metadata: Metadata = {
  title: "Is an Interventional Cardiology Fellowship Worth It? | MedFellow Academy",
  description:
    "Is an Interventional Cardiology Fellowship worth it? Explore benefits, skills, career opportunities, clinical exposure, costs, eligibility, and who should pursue it.",
  keywords:
    "is an interventional cardiology fellowship worth it, interventional cardiology fellowship, fellowship in interventional cardiology, interventional cardiology fellowship course, interventional cardiology career opportunities",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/is-interventional-cardiology-fellowship-worth-it/" },
  openGraph: {
    title: "Is an Interventional Cardiology Fellowship Worth It?",
    description:
      "Explore benefits, skills, career opportunities, clinical exposure, costs, eligibility, and who should pursue an Interventional Cardiology Fellowship.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/is-interventional-cardiology-fellowship-worth-it/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Is an Interventional Cardiology Fellowship Worth It?",
    description: "Benefits, career scope, clinical value, costs, and limitations — an evidence-aware look.",
  },
};

const FAQS = [
  {
    q: "Is an Interventional Cardiology Fellowship worth doing after cardiology training?",
    a: "It can be worthwhile for appropriately qualified cardiologists who want structured advanced learning in coronary intervention, cath lab practice, imaging, physiology, and contemporary cardiovascular care.",
  },
  {
    q: "Is an online Interventional Cardiology Fellowship worth it?",
    a: "It can be valuable for academic learning and professional development, particularly for working doctors. However, online education should not be considered a substitute for supervised procedural training.",
  },
  {
    q: "Does an Interventional Cardiology Fellowship guarantee a job?",
    a: "No. Career outcomes depend on qualifications, experience, clinical competency, licensing, institutional requirements, location, and the availability of suitable positions.",
  },
  {
    q: "Can a fellowship make me an independent interventional cardiologist?",
    a: "Not automatically. Independent procedural practice requires appropriate specialist qualifications, supervised procedural experience, competency assessment, institutional credentialing, and compliance with applicable regulations.",
  },
  {
    q: "What skills are gained during an Interventional Cardiology Fellowship?",
    a: "Depending on the program, doctors may develop knowledge in coronary anatomy, angiography, hemodynamics, PCI principles, intravascular imaging, coronary physiology, patient selection, procedural planning, and complication management.",
  },
  {
    q: "How long does an Interventional Cardiology Fellowship take?",
    a: "Duration varies significantly between programs. Some institutional fellowships are one year, while other formal advanced training pathways may be longer. Compare the actual curriculum and clinical requirements rather than duration alone.",
  },
  {
    q: "Is a fellowship better than a short-term cardiology course?",
    a: "If you want structured and broader advanced learning, a fellowship may offer greater depth. A short course can be appropriate when you need focused knowledge in a specific area.",
  },
  {
    q: "What should I check before paying the fellowship fee?",
    a: "Verify eligibility, curriculum, faculty, clinical exposure, supervision, assessment, certification, total cost, schedule, and career support.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Is an Interventional Cardiology Fellowship Worth It?",
  description:
    "A look at the benefits, skills, career opportunities, clinical exposure, costs, eligibility, and limitations of an Interventional Cardiology Fellowship.",
  image: "https://www.medfellowacademy.com/courses/interventional-cardiology.jpg",
  datePublished: "2026-08-15",
  dateModified: "2026-08-15",
  author: { "@type": "Organization", name: "MedFellow Academy" },
  publisher: {
    "@type": "Organization",
    name: "MedFellow Academy",
    logo: { "@type": "ImageObject", url: "https://www.medfellowacademy.com/logo.png" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.medfellowacademy.com/blog/is-interventional-cardiology-fellowship-worth-it/",
  },
};

const MAY_BENEFIT = [
  "Strengthen your understanding of coronary intervention",
  "Learn modern PCI concepts",
  "Improve your interpretation of coronary angiography",
  "Understand cath lab workflow",
  "Explore intravascular imaging",
  "Learn coronary physiology",
  "Develop clinical decision-making skills",
  "Understand complex cardiovascular cases",
  "Continue structured professional education",
  "Prepare for future cardiovascular career opportunities",
];

const NOT_FOR_YOU = [
  "A quick certificate without meaningful learning",
  "Guaranteed employment",
  "Automatic specialist recognition",
  "Independent procedural privileges",
  "A substitute for required specialist training",
  "A replacement for supervised hands-on procedural experience",
];

const SKILLS_CLINICAL = [
  "Cardiovascular risk assessment", "Patient selection", "Clinical history and examination",
  "Diagnostic investigations", "Treatment planning", "Risk-benefit assessment", "Post-procedure care",
];

const SKILLS_INTERVENTIONAL = [
  "Coronary anatomy", "Coronary angiography", "Cardiac catheterization", "Hemodynamics", "PCI principles",
  "Balloon angioplasty", "Stent selection concepts", "IVUS", "OCT", "FFR", "Coronary physiology",
  "Procedural planning", "Complication recognition",
];

const CAREER_AREAS = [
  { title: "Hospital-Based Cardiology Practice", text: "Roles in hospitals and cardiovascular centres where interventional cardiology services are provided, subject to qualifications and institutional privileges." },
  { title: "Cath Lab and Cardiovascular Services", text: "Doctors with appropriate specialist training and credentialing may develop careers involving cath lab services and catheter-based cardiovascular care." },
  { title: "Academic Medicine", text: "Support for medical education, clinical teaching, case presentations, research, and academic conferences." },
  { title: "Cardiovascular Specialty Centres", text: "Opportunities for appropriately qualified cardiologists working in advanced cardiovascular care." },
  { title: "Research and Continuing Education", text: "Strengthen understanding of contemporary interventional cardiology literature, technologies, and treatment approaches." },
];

const FELLOWSHIP_VS_COURSE = [
  { feature: "Duration", fellowship: "Usually longer", course: "Usually shorter" },
  { feature: "Curriculum", fellowship: "More structured", course: "Usually focused" },
  { feature: "Case Discussions", fellowship: "More comprehensive", course: "Varies" },
  { feature: "Faculty Interaction", fellowship: "Structured", course: "Varies" },
  { feature: "Assessments", fellowship: "Usually included", course: "May be limited" },
  { feature: "Professional Development", fellowship: "Broader", course: "Topic-specific" },
  { feature: "Clinical Exposure", fellowship: "Depends on program", course: "Often limited" },
  { feature: "Learning Depth", fellowship: "Higher", course: "More focused" },
];

const DECISION_ROWS = [
  { factor: "Eligibility", evaluate: "Does your qualification match?" },
  { factor: "Curriculum", evaluate: "Is it comprehensive?" },
  { factor: "Faculty", evaluate: "Are specialists involved?" },
  { factor: "Clinical Training", evaluate: "Is it clearly defined?" },
  { factor: "Case Discussions", evaluate: "Are real cases included?" },
  { factor: "Learning Format", evaluate: "Does it fit your schedule?" },
  { factor: "Assessment", evaluate: "Is learning evaluated?" },
  { factor: "Certification", evaluate: "Who awards it?" },
  { factor: "Cost", evaluate: "Is the total fee transparent?" },
  { factor: "Career Support", evaluate: "Is genuine guidance available?" },
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
              <span>Is an Interventional Cardiology Fellowship Worth It?</span>
            </div>

            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">
                Career Planning
              </span>
              <span className="text-sm text-text-secondary">⏱️ 9 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Is an Interventional Cardiology Fellowship Worth It?
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
                src="/courses/interventional-cardiology.jpg"
                alt="Is an Interventional Cardiology Fellowship Worth It?"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                For doctors interested in advanced cardiovascular care, an Interventional Cardiology Fellowship
                Course can be an important step in building specialized knowledge and developing a deeper
                understanding of catheter-based cardiovascular treatment. But is it actually worth the time and
                investment? The answer depends on your current qualifications, career goals, clinical
                experience, learning requirements, and the quality of the fellowship you choose.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Who Should Consider an Interventional Cardiology Fellowship?</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                A fellowship may be worth considering if you are an appropriately qualified doctor who wants to
                develop deeper knowledge of interventional cardiovascular care. You may benefit from fellowship
                training if you want to:
              </p>
              <ul className="space-y-2 mb-6">
                {MAY_BENEFIT.map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
              <p className="text-text-secondary leading-relaxed mb-3">A fellowship may not be the right choice if you are looking for:</p>
              <ul className="space-y-2 mb-8">
                {NOT_FOR_YOU.map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-accent text-xl mt-1">✕</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">What Skills Can You Develop During the Fellowship?</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-8 not-prose">
                <div className="card p-4">
                  <h3 className="text-[0.9375rem] font-bold text-primary mb-2.5">Clinical Assessment Skills</h3>
                  <div className="space-y-1.5">
                    {SKILLS_CLINICAL.map((li) => (
                      <div key={li} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="text-secondary mt-0.5">✓</span>
                        <span>{li}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="card p-4">
                  <h3 className="text-[0.9375rem] font-bold text-primary mb-2.5">Interventional Cardiology Skills</h3>
                  <div className="space-y-1.5">
                    {SKILLS_INTERVENTIONAL.map((li) => (
                      <div key={li} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="text-secondary mt-0.5">✓</span>
                        <span>{li}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Does a Fellowship Improve Clinical Decision Making?</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Potentially, yes. A well-designed fellowship should help doctors understand how clinical
                information influences treatment decisions — which patients require intervention, what
                investigations are appropriate, how angiographic findings should be interpreted, what factors
                influence procedural planning, what the potential risks are, how complications should be
                recognized, and what follow-up is required. Clinical decision-making ability develops through a
                combination of academic knowledge, supervised clinical experience, ongoing practice, and
                professional judgment, so a fellowship should complement, rather than replace, appropriate
                specialist clinical training.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">What Are the Benefits?</h2>
              <div className="grid sm:grid-cols-3 gap-4 mb-8 not-prose">
                <div className="card p-4">
                  <h3 className="text-sm font-bold text-primary mb-2">Academic Benefits</h3>
                  <p className="text-[0.8125rem] text-text-secondary leading-relaxed">Structured advanced learning, exposure to current clinical concepts, case-based education, understanding of new technologies, and evidence-based decision making.</p>
                </div>
                <div className="card p-4">
                  <h3 className="text-sm font-bold text-primary mb-2">Professional Benefits</h3>
                  <p className="text-[0.8125rem] text-text-secondary leading-relaxed">Improved confidence, continued professional development, exposure to specialist faculty, academic networking, and a stronger professional knowledge base.</p>
                </div>
                <div className="card p-4">
                  <h3 className="text-sm font-bold text-primary mb-2">Practical Benefits</h3>
                  <p className="text-[0.8125rem] text-text-secondary leading-relaxed">For programs with appropriate hospital-based components: exposure to cath lab workflow, coronary angiography, interventional procedures, patient preparation, and multidisciplinary teams.</p>
                </div>
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Career Opportunities After the Fellowship</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Career opportunities depend on your existing qualifications, clinical experience, procedural
                competency, licensing, and local credentialing requirements.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6 not-prose">
                {CAREER_AREAS.map((c) => (
                  <div key={c.title} className="card p-4">
                    <h3 className="text-[0.9375rem] font-bold text-primary mb-1.5">{c.title}</h3>
                    <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{c.text}</p>
                  </div>
                ))}
              </div>
              <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg mb-8 not-prose">
                <p className="text-sm text-text-secondary leading-relaxed">
                  <strong>Important:</strong> Completing a fellowship does not automatically grant independent
                  procedural privileges or specialist registration. Doctors must meet the requirements of their
                  relevant medical regulator, hospital, and credentialing authority.
                </p>
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Is It Worth the Cost?</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Instead of asking whether a fellowship is cheap or expensive, ask whether the educational value
                justifies the investment. Compare curriculum depth, faculty expertise, clinical exposure,
                supervised training, learning resources, assessments, certification, faculty interaction,
                career support, duration, and total cost.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Do not forget the hidden costs. For offline programs, consider travel, accommodation, time away
                from practice, loss of professional income, and relocation expenses. For online programs,
                consider clinical exposure limitations, additional hospital attachments, examination
                requirements, and any separate practical training costs.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Fellowship vs Short-Term Cardiology Course</h2>
              <div className="overflow-x-auto rounded-lg border border-gray-200 mb-8 not-prose">
                <table className="w-full text-sm text-left">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Feature</th>
                      <th className="px-4 py-3 font-semibold">Fellowship</th>
                      <th className="px-4 py-3 font-semibold">Short-Term Course</th>
                    </tr>
                  </thead>
                  <tbody>
                    {FELLOWSHIP_VS_COURSE.map((r, i) => (
                      <tr key={r.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 font-medium text-primary border-t border-gray-100">{r.feature}</td>
                        <td className="px-4 py-3 text-text-secondary border-t border-gray-100">{r.fellowship}</td>
                        <td className="px-4 py-3 text-text-secondary border-t border-gray-100">{r.course}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Decision Checklist</h2>
              <div className="overflow-x-auto rounded-lg border border-gray-200 mb-8 not-prose">
                <table className="w-full text-sm text-left">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Factor</th>
                      <th className="px-4 py-3 font-semibold">What to Evaluate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DECISION_ROWS.map((r, i) => (
                      <tr key={r.factor} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 font-medium text-primary border-t border-gray-100">{r.factor}</td>
                        <td className="px-4 py-3 text-text-secondary border-t border-gray-100">{r.evaluate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">So, Is It Worth It?</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                For the right doctor and the right program, an Interventional Cardiology Fellowship can be a
                valuable professional development opportunity. It can help you strengthen your understanding of
                coronary intervention, advanced cardiovascular technologies, clinical decision making, and
                contemporary treatment approaches, and may support longer-term career development in hospitals,
                cardiovascular centres, academic medicine, and research. But a certificate alone does not
                replace specialist qualifications, supervised clinical experience, procedural competency,
                licensing, or institutional credentialing. The most worthwhile program provides relevant
                academic depth, qualified faculty, transparent clinical exposure, appropriate assessment,
                flexible learning, and clear certification, while matching your long-term professional goals.
              </p>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Weigh Your Options Before You Commit
                </h3>
                <p className="text-text-secondary mb-6">
                  Explore MedFellow Academy&apos;s Fellowship in Interventional Cardiology and review the
                  curriculum, eligibility, learning format, and clinical components.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/courses/fellowship-in-interventional-cardiology" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-center">
                    View Fellowship Details
                  </Link>
                  <Link href="/courses/best-fellowship-course-in-interventional-cardiology" className="inline-block px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all text-center">
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
            <TopicClusterLinks title="Interventional Cardiology Resources" links={CLUSTER_LINKS} />
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
              <Link href="/courses/best-fellowship-course-in-interventional-cardiology" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">Fellowship Guide</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Best Fellowship Course in Interventional Cardiology
                </h3>
                <p className="text-sm text-text-secondary">A complete guide to curriculum, eligibility, skills, learning options, and career pathways...</p>
              </Link>
              <Link href="/blog/how-to-choose-interventional-cardiology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  How to Choose an Interventional Cardiology Fellowship
                </h3>
                <p className="text-sm text-text-secondary">What to evaluate before joining a program...</p>
              </Link>
              <Link href="/blog/questions-to-ask-before-joining-interventional-cardiology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Questions to Ask Before Joining an Interventional Cardiology Fellowship
                </h3>
                <p className="text-sm text-text-secondary">The essential questions to ask before enrolling...</p>
              </Link>
              <Link href="/blog/skills-you-learn-interventional-cardiology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Clinical Skills</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Skills You Learn During an Interventional Cardiology Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Explore the clinical and academic skills developed during training...</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

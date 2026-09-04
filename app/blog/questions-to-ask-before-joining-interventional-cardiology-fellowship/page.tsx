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
  title: "Questions to Ask Before Joining an Interventional Cardiology Fellowship | MedFellow Academy",
  description:
    "Planning an Interventional Cardiology Fellowship? Learn the key questions to ask about eligibility, curriculum, clinical exposure, faculty, fees, certification, and careers.",
  keywords:
    "questions to ask before joining an interventional cardiology fellowship, interventional cardiology fellowship, fellowship in interventional cardiology, interventional cardiology fellowship course, best interventional cardiology fellowship",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-interventional-cardiology-fellowship/" },
  openGraph: {
    title: "Questions to Ask Before Joining an Interventional Cardiology Fellowship",
    description:
      "The key questions to ask about eligibility, curriculum, clinical exposure, faculty, fees, certification, and careers before enrolling.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-interventional-cardiology-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Questions to Ask Before Joining an Interventional Cardiology Fellowship",
    description: "A pre-enrollment checklist covering eligibility, curriculum, clinical training, certification, fees, and career support.",
  },
};

const FAQS = [
  {
    q: "What is the most important question to ask before joining an Interventional Cardiology Fellowship?",
    a: "Ask what the fellowship actually includes in terms of curriculum, clinical exposure, supervision, assessment, and certification. These factors give you a clearer picture of the program than its title alone.",
  },
  {
    q: "Is clinical exposure necessary for an Interventional Cardiology Fellowship?",
    a: "Clinical exposure is especially important when the program claims to provide procedural training. Ask whether the exposure is observational or supervised hands-on training and how competency is evaluated.",
  },
  {
    q: "Can I pursue an Interventional Cardiology Fellowship while working?",
    a: "Some online and hybrid programs are designed to accommodate working doctors. Check the live-session schedule, weekly workload, attendance requirements, and clinical rotation requirements before enrolling.",
  },
  {
    q: "Does an online fellowship provide PCI training?",
    a: "Online education can teach PCI principles, procedural concepts, anatomy, imaging, and clinical decision making. It cannot replace supervised clinical experience required for procedural competency.",
  },
  {
    q: "What qualifications are generally required for an Interventional Cardiology Fellowship?",
    a: "Requirements vary by provider. Many formal programs are intended for doctors who have already completed specialist cardiology training, such as DM or DNB Cardiology. Always check the specific program's eligibility criteria.",
  },
  {
    q: "What should an Interventional Cardiology Fellowship curriculum include?",
    a: "Important areas include coronary anatomy, angiography, hemodynamics, PCI principles, intravascular imaging, coronary physiology, patient selection, complication management, and post-procedure care.",
  },
  {
    q: "How can I verify whether a fellowship certificate is credible?",
    a: "Check the exact awarding institution, qualification title, assessment requirements, and whether clinical training is separately documented. If you need the qualification for employment or licensing, confirm acceptance directly with the relevant authority.",
  },
  {
    q: "Is a more expensive Interventional Cardiology Fellowship necessarily better?",
    a: "No. Compare curriculum quality, faculty, clinical exposure, supervision, assessments, learning resources, certification, and total costs instead of relying on price alone.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Questions to Ask Before Joining an Interventional Cardiology Fellowship",
  description:
    "The key questions to ask about eligibility, curriculum, clinical exposure, faculty, fees, certification, and careers before enrolling in an Interventional Cardiology Fellowship.",
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
    "@id": "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-interventional-cardiology-fellowship/",
  },
};

const QUALIFICATION_QUESTIONS = [
  "What medical qualifications are required?",
  "Is MD/DNB Cardiology required?",
  "Is DM Cardiology required?",
  "Is prior cardiology experience necessary?",
  "Is medical registration required?",
  "Are there additional institutional requirements?",
  "Does the program accept international applicants?",
];

const CURRICULUM_TOPICS = [
  "Coronary anatomy", "Coronary artery disease", "Acute coronary syndromes", "Coronary angiography",
  "Cardiac catheterization", "Hemodynamics", "PCI principles", "Balloon angioplasty", "Stent concepts",
  "Intravascular imaging", "IVUS and OCT", "Coronary physiology", "FFR", "Patient selection",
  "Complication management", "Post-procedure care",
];

const CLINICAL_QUESTIONS = [
  "Is there a hospital attachment?",
  "Where does clinical training take place?",
  "How long is the clinical component?",
  "Is the training supervised?",
  "Can fellows observe procedures?",
  "Can fellows participate in procedures under supervision?",
  "Is there a cath lab rotation?",
  "Is a procedure log maintained?",
  "How is clinical competency assessed?",
];

const FORMAT_ROWS = [
  { factor: "Flexibility", online: "High", offline: "Lower", hybrid: "High" },
  { factor: "Working Doctors", online: "Suitable", offline: "More difficult", hybrid: "Suitable" },
  { factor: "Faculty Interaction", online: "Virtual", offline: "Face-to-face", hybrid: "Both" },
  { factor: "Clinical Exposure", online: "Limited unless separately provided", offline: "Usually stronger", hybrid: "Depends on program" },
  { factor: "Travel", online: "Minimal", offline: "Higher", hybrid: "Moderate" },
  { factor: "Recorded Content", online: "Often available", offline: "Varies", hybrid: "Often available" },
];

const ASSESSMENT_ITEMS = [
  "Online assessments", "Case presentations", "Clinical assignments", "Written examinations",
  "Practical assessments", "Attendance requirements", "Case documentation", "Final evaluation",
];

const FEE_ITEMS = [
  "Tuition", "Faculty sessions", "Learning resources", "Recorded lectures", "Assessments",
  "Examination fees", "Certificate", "Hospital attachment", "Clinical training", "Study materials",
  "Additional workshops",
];

const CAREER_ITEMS = [
  "Career counselling", "Academic mentorship", "Research guidance", "CV support",
  "Professional networking", "Alumni interaction", "Job opportunity information", "Continuing education resources",
];

const CHECKLIST = [
  { q: "Am I eligible?", why: "Confirms you meet entry requirements" },
  { q: "Who teaches the course?", why: "Helps assess faculty quality" },
  { q: "What is covered?", why: "Confirms curriculum depth" },
  { q: "Is there clinical training?", why: "Clarifies practical exposure" },
  { q: "Is it supervised?", why: "Important for procedural learning" },
  { q: "How long is the program?", why: "Helps plan your schedule" },
  { q: "What is the weekly workload?", why: "Ensures it fits your practice" },
  { q: "Who awards the certificate?", why: "Clarifies the qualification" },
  { q: "What does the fee include?", why: "Avoids unexpected costs" },
  { q: "How is learning assessed?", why: "Shows academic structure" },
  { q: "Is career support provided?", why: "Helps with professional development" },
  { q: "What does the fellowship not qualify me to do?", why: "Prevents unrealistic expectations" },
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
              <span>Questions to Ask Before Joining an Interventional Cardiology Fellowship</span>
            </div>

            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">
                Fellowship Guides
              </span>
              <span className="text-sm text-text-secondary">⏱️ 10 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Questions to Ask Before Joining an Interventional Cardiology Fellowship
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
                alt="Questions to Ask Before Joining an Interventional Cardiology Fellowship"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Choosing an Interventional Cardiology Fellowship is a significant professional decision.
                Interventional cardiology combines advanced cardiovascular knowledge with technically demanding
                procedures, so the quality and structure of your training matter. Two fellowships can have
                similar names but offer very different curricula, faculty interaction, clinical exposure,
                assessments, and learning experiences. Asking the right questions helps you understand exactly
                what you are signing up for.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">1. Am I Eligible for the Fellowship?</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Eligibility should be your first question. Interventional cardiology is an advanced area of
                cardiovascular medicine, and many formal programs expect applicants to have already completed
                specialist cardiology training. Ask about qualification requirements:
              </p>
              <ul className="space-y-2 mb-6">
                {QUALIFICATION_QUESTIONS.map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
              <p className="text-text-secondary leading-relaxed mb-8">
                Do not assume that completing an educational fellowship automatically gives you eligibility for
                independent interventional practice. Specialist registration and procedural privileges are
                governed separately by applicable regulators and institutions.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">2. What Does the Curriculum Cover?</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                A strong curriculum should go beyond basic cardiology concepts and address the knowledge areas
                relevant to interventional cardiovascular practice. Ask whether the fellowship covers:
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-6 not-prose">
                {CURRICULUM_TOPICS.map((li) => (
                  <div key={li} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary">
                    <span className="text-secondary mt-0.5">✓</span>
                    <span>{li}</span>
                  </div>
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                A comprehensive curriculum should help you understand not just what an intervention involves,
                but also why and when particular approaches are considered.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">3. Who Are the Faculty Members?</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Faculty expertise can have a major impact on the educational value of a fellowship. Before
                enrolling, ask who the faculty members are, what their qualifications are, whether they have
                specialist interventional cardiology experience, whether they are actively involved in clinical
                practice, how often fellows can interact with them, whether one-to-one academic guidance is
                available, and whether case discussions are conducted by experienced specialists. A good
                faculty team should help you connect theoretical concepts with real clinical decision making.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">4. Does the Fellowship Include Clinical Exposure?</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                This is one of the most important questions for an interventional cardiology fellowship. If the
                program advertises clinical exposure, ask exactly what that means:
              </p>
              <ul className="space-y-2 mb-6">
                {CLINICAL_QUESTIONS.map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
              <p className="text-text-secondary leading-relaxed mb-8">
                A program should clearly explain the difference between observational exposure, academic case
                discussions, supervised clinical participation, and independent procedural practice. Online
                lectures and recorded procedures can support academic learning, but they cannot substitute for
                appropriate supervised procedural experience.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">5. Is the Fellowship Online, Offline, or Hybrid?</h2>
              <div className="overflow-x-auto rounded-lg border border-gray-200 mb-6 not-prose">
                <table className="w-full text-sm text-left">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Factor</th>
                      <th className="px-4 py-3 font-semibold">Online</th>
                      <th className="px-4 py-3 font-semibold">Offline</th>
                      <th className="px-4 py-3 font-semibold">Hybrid</th>
                    </tr>
                  </thead>
                  <tbody>
                    {FORMAT_ROWS.map((r, i) => (
                      <tr key={r.factor} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 font-medium text-primary border-t border-gray-100">{r.factor}</td>
                        <td className="px-4 py-3 text-text-secondary border-t border-gray-100">{r.online}</td>
                        <td className="px-4 py-3 text-text-secondary border-t border-gray-100">{r.offline}</td>
                        <td className="px-4 py-3 text-text-secondary border-t border-gray-100">{r.hybrid}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                If you are already practicing, an online or hybrid format may be more convenient. If your
                primary objective is procedural development, carefully evaluate the clinical component rather
                than choosing a format based only on convenience.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">6. How Much Time Will I Need Each Week?</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                A fellowship should fit realistically into your professional schedule. Ask how many hours of
                study are expected weekly, how often live classes are held, whether sessions are recorded,
                whether assignments are required, whether examinations are scheduled, whether clinical
                rotations are compulsory, and whether attendance is mandatory. This is particularly important
                for doctors who are continuing their clinical practice while studying.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">7. How Will My Learning Be Assessed?</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                A credible fellowship should have clearly defined completion requirements. Ask whether the
                program includes:
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 not-prose">
                {ASSESSMENT_ITEMS.map((li) => (
                  <div key={li} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary">
                    <span className="text-secondary mt-0.5">✓</span>
                    <span>{li}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">8. Who Awards the Fellowship Certificate?</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Do not choose a program based only on phrases such as &quot;international certification&quot; or
                &quot;globally recognized.&quot; Instead, ask who issues the certificate, the exact name of the
                qualification, whether it is an academic fellowship certificate, the completion requirements,
                whether assessment is required, whether clinical training is documented separately, and how
                the qualification is treated by your employer or regulator. A fellowship certificate should not
                be presented as automatically equivalent to specialist registration or procedural credentialing.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">9. What Is Included in the Fellowship Fee?</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                The advertised fee does not always tell you the full cost of a program. Ask whether your fee
                includes:
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-4 not-prose">
                {FEE_ITEMS.map((li) => (
                  <div key={li} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary">
                    <span className="text-secondary mt-0.5">✓</span>
                    <span>{li}</span>
                  </div>
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                Also ask about EMI options, refund policies, deferral policies, additional charges, and travel
                and accommodation costs for clinical training. Comparing the total cost of the learning
                experience is more useful than comparing the headline course fee.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">10. What Career Support Is Available?</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                A fellowship should ideally support your professional development beyond academic coursework.
                Ask whether the provider offers:
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-4 not-prose">
                {CAREER_ITEMS.map((li) => (
                  <div key={li} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary">
                    <span className="text-secondary mt-0.5">✓</span>
                    <span>{li}</span>
                  </div>
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                Be cautious about guaranteed placement or guaranteed procedural privileges. Career outcomes
                depend on qualifications, experience, licensing, institutional requirements, and the healthcare
                system in which you practice.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">11. Will the Fellowship Make Me an Independent Interventional Cardiologist?</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                A fellowship certificate does not automatically grant independent procedural privileges.
                Interventional cardiology procedures require appropriate specialist qualifications, supervised
                clinical experience, procedural competency, hospital credentialing, and compliance with
                applicable regulations. Ask the provider to clearly explain what competencies the fellowship
                teaches, what clinical exposure is provided, whether procedures are supervised, what the
                certificate represents, and what the fellowship does not qualify you to do.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">12. Does the Fellowship Include Case-Based Learning?</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Case-based learning is particularly valuable in a complex specialty like interventional
                cardiology. Ask whether the program discusses cases involving acute coronary syndromes, stable
                coronary disease, complex coronary anatomy, high-risk patients, procedural complications,
                imaging interpretation, treatment selection, and post-procedure management.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">13. What Learning Resources Will I Receive?</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Good digital resources can make a major difference when studying alongside clinical work. Ask
                whether the program provides recorded lectures, presentation materials, case libraries, reading
                resources, clinical guidelines, assessment materials, discussion forums, digital learning
                platforms, and access to previous sessions — and how long you will have access to these
                resources.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">14. Is the Fellowship Right for My Long-Term Goals?</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                The program may be appropriate if your goal is to expand interventional cardiology knowledge,
                understand contemporary cardiovascular interventions, improve clinical decision making,
                strengthen cath lab knowledge, stay updated with new technologies, and develop professionally
                within cardiovascular medicine. If your specific goal is independent procedural practice, make
                sure you understand the additional clinical, regulatory, and credentialing pathway required in
                your location.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Questions to Ask Before You Pay the Fee</h2>
              <div className="overflow-x-auto rounded-lg border border-gray-200 mb-8 not-prose">
                <table className="w-full text-sm text-left">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Question</th>
                      <th className="px-4 py-3 font-semibold">Why It Matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CHECKLIST.map((r, i) => (
                      <tr key={r.q} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 font-medium text-primary border-t border-gray-100">{r.q}</td>
                        <td className="px-4 py-3 text-text-secondary border-t border-gray-100">{r.why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Get Clear Answers Before You Enrol
                </h3>
                <p className="text-text-secondary mb-6">
                  Explore MedFellow Academy&apos;s Fellowship in Interventional Cardiology and review the
                  curriculum, eligibility, learning format, and admission details before applying.
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
                <p className="text-sm text-text-secondary">Compare curriculum, faculty, clinical exposure, and fees before enrolling...</p>
              </Link>
              <Link href="/blog/online-vs-offline-interventional-cardiology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Online vs Offline Interventional Cardiology Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Compare learning formats, flexibility, and clinical exposure for working doctors...</p>
              </Link>
              <Link href="/blog/skills-you-learn-interventional-cardiology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Clinical Skills</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Skills You Learn During an Interventional Cardiology Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Explore the clinical, interventional, and professional skills developed in training...</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

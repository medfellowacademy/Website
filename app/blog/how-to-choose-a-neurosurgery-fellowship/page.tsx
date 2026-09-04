import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import TopicClusterLinks from "@/components/TopicClusterLinks";
import Link from "next/link";
import Image from "next/image";

const CLUSTER_LINKS = [
  { label: "Best Fellowship Course in Neurosurgery (Guide)", href: "/courses/best-fellowship-course-in-neurosurgery", type: "guide" as const },
  { label: "How to Choose a Neurosurgery Fellowship", href: "/blog/how-to-choose-a-neurosurgery-fellowship", type: "blog" as const },
  { label: "Online vs Offline Neurosurgery Fellowship", href: "/blog/online-vs-offline-neurosurgery-fellowship", type: "blog" as const },
  { label: "Career Opportunities After a Neurosurgery Fellowship", href: "/blog/career-opportunities-after-a-neurosurgery-fellowship", type: "blog" as const },
  { label: "Skills You Learn During a Neurosurgery Fellowship", href: "/blog/skills-you-learn-during-a-neurosurgery-fellowship", type: "blog" as const },
  { label: "Neurosurgery Fellowship Curriculum: What Will You Learn?", href: "/blog/neurosurgery-fellowship-curriculum", type: "blog" as const },
];

export const metadata: Metadata = {
  title: "How to Choose a Neurosurgery Fellowship: Complete Guide | MedFellow Academy",
  description:
    "Learn how to choose a neurosurgery fellowship by comparing curriculum, faculty, clinical exposure, fees, certification, learning format and career relevance.",
  keywords:
    "how to choose a neurosurgery fellowship, neurosurgery fellowship, best neurosurgery fellowship, neurosurgery fellowship course, fellowship in neurosurgery",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/how-to-choose-a-neurosurgery-fellowship/" },
  openGraph: {
    title: "How to Choose a Neurosurgery Fellowship",
    description:
      "Compare curriculum, faculty, clinical exposure, fees, certification, learning format and career relevance before choosing a neurosurgery fellowship.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/how-to-choose-a-neurosurgery-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Choose a Neurosurgery Fellowship",
    description: "A practical guide covering curriculum, faculty, clinical exposure, certification, fees, and career fit — plus whether it is worth it.",
  },
};

const FAQS = [
  {
    q: "What should I look for when choosing a neurosurgery fellowship?",
    a: "Focus on curriculum, faculty expertise, clinical exposure, practical training, assessment, certification, duration, fees, learning format, and relevance to your intended career pathway.",
  },
  {
    q: "Is an online neurosurgery fellowship a good option?",
    a: "It can be useful for structured academic learning and flexibility, particularly for working doctors. However, if you need supervised surgical or procedural training, verify whether the program actually provides that exposure.",
  },
  {
    q: "How do I know if a neurosurgery fellowship provides hands-on training?",
    a: "Ask where the training takes place, which procedures are included, whether fellows observe or assist, who provides supervision, and how much practical training is scheduled.",
  },
  {
    q: "Is a neurosurgery fellowship worth doing after residency?",
    a: "It can be valuable when you want focused subspecialty knowledge or additional structured training. The value depends on the fellowship's curriculum, clinical exposure, faculty, recognition, and relevance to your career goals.",
  },
  {
    q: "What questions should I ask a neurosurgery fellowship provider?",
    a: "Ask about curriculum, faculty, clinical exposure, practical training, certification, assessment, fees, duration, weekly workload, recognition, and whether the program is compatible with your current clinical responsibilities.",
  },
  {
    q: "How important is clinical exposure in a neurosurgery fellowship?",
    a: "It depends on your learning objective. If you want procedural or surgical experience, clinical exposure is particularly important. If your goal is primarily academic knowledge, a structured theoretical program may be sufficient.",
  },
  {
    q: "Should I choose a general neurosurgery fellowship or a subspecialty fellowship?",
    a: "Choose based on your career direction. If you already know your area of interest, a focused fellowship may provide deeper learning. If you are still exploring options, broader training may be more appropriate.",
  },
  {
    q: "Does a neurosurgery fellowship guarantee a job?",
    a: "No. A fellowship should not be treated as a guarantee of employment. Career outcomes depend on your qualifications, experience, local regulations, employer requirements, and the specific fellowship.",
  },
  {
    q: "Does a neurosurgery fellowship certificate provide specialist recognition?",
    a: "Not automatically. Recognition depends on the relevant medical regulator, licensing authority, employer, and the specific credential.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Choose a Neurosurgery Fellowship",
  description:
    "Learn how to choose a neurosurgery fellowship by comparing curriculum, faculty, clinical exposure, fees, certification, learning format and career relevance.",
  image: "https://www.medfellowacademy.com/courses/neurosurgery.jpg",
  datePublished: "2026-08-24",
  dateModified: "2026-08-24",
  author: { "@type": "Organization", name: "MedFellow Academy" },
  publisher: {
    "@type": "Organization",
    name: "MedFellow Academy",
    logo: { "@type": "ImageObject", url: "https://www.medfellowacademy.com/logo.png" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.medfellowacademy.com/blog/how-to-choose-a-neurosurgery-fellowship/",
  },
};

const GOAL_QUESTIONS = [
  "Do I want broader neurosurgical knowledge?",
  "Do I want to focus on a particular subspecialty?",
  "Am I looking for academic learning or clinical exposure?",
  "Do I need hands-on training?",
  "Do I want to continue working while studying?",
  "Am I interested in research or teaching?",
  "Do I need a flexible learning schedule?",
];

const SUBSPECIALTIES = [
  "Spine surgery", "Neurotrauma", "Cerebrovascular neurosurgery", "Skull base surgery",
  "Neuro-oncology", "Pediatric neurosurgery", "Functional neurosurgery", "Neurocritical care",
];

const CURRICULUM_TOPICS = [
  "Advanced neuroanatomy", "Neuroimaging", "Neurotrauma", "Spine disorders", "Cerebrovascular conditions",
  "Brain and spinal tumors", "Skull base pathology", "Pediatric neurosurgery", "Perioperative management",
  "Postoperative care", "Complication management", "Evidence-based neurosurgery", "Research methodology",
];

const CLINICAL_QUESTIONS = [
  "Where does clinical training take place?",
  "What types of cases are available?",
  "How frequently are cases discussed?",
  "Are procedures observed?",
  "Can fellows assist under supervision?",
  "Is simulation available?",
  "Who supervises practical training?",
  "Is clinical attendance mandatory?",
  "Is the clinical component documented?",
  "How much time is dedicated to practical learning?",
];

const FORMAT_ROWS = [
  { factor: "Flexibility", online: "High", offline: "Lower", hybrid: "Moderate to high" },
  { factor: "Location requirement", online: "Low", offline: "Usually high", hybrid: "Moderate" },
  { factor: "Classroom learning", online: "Virtual", offline: "In person", hybrid: "Both" },
  { factor: "Clinical exposure", online: "Limited unless separately arranged", offline: "Usually higher", hybrid: "Depends on program" },
  { factor: "Working alongside course", online: "Easier", offline: "May be difficult", hybrid: "Often possible" },
  { factor: "Practical training", online: "Program-dependent", offline: "Usually stronger", hybrid: "Program-dependent" },
];

const FEE_ROWS = [
  { factor: "Tuition", check: "Total advertised fee" },
  { factor: "Additional charges", check: "Exams, certification, registration" },
  { factor: "Clinical training", check: "Included or additional" },
  { factor: "Learning resources", check: "Included or paid separately" },
  { factor: "Duration", check: "Total training period" },
  { factor: "Faculty access", check: "Frequency and format" },
  { factor: "Assessment", check: "Exams, assignments or case assessments" },
  { factor: "Flexibility", check: "Suitable for working doctors?" },
  { factor: "Clinical exposure", check: "Type and duration" },
  { factor: "Career relevance", check: "Alignment with your goals" },
];

const RED_FLAGS = [
  "Makes guaranteed employment claims",
  "Promises automatic specialist recognition",
  "Does not clearly explain eligibility",
  "Provides little information about faculty",
  "Uses vague claims about clinical exposure",
  "Does not explain the assessment process",
  "Hides additional fees",
  "Cannot clearly explain what the certificate represents",
  "Uses “hands-on training” without explaining what it involves",
];

const CHECKLIST = [
  "Does the curriculum match my career goals?",
  "Is the faculty appropriately qualified?",
  "Is the learning format suitable for me?",
  "Is clinical exposure clearly defined?",
  "Do I understand what “hands-on training” means?",
  "Are assessments clearly explained?",
  "Is the certification transparent?",
  "Have I checked recognition requirements?",
  "Do I understand the total cost?",
  "Can I manage the time commitment?",
  "Does the fellowship add meaningful value to my existing training?",
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
              <span>How to Choose a Neurosurgery Fellowship</span>
            </div>

            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">
                Fellowship Guides
              </span>
              <span className="text-sm text-text-secondary">⏱️ 10 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              How to Choose a Neurosurgery Fellowship
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
                src="/courses/neurosurgery.jpg"
                alt="How to Choose a Neurosurgery Fellowship"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Choosing a neurosurgery fellowship is an important career decision, especially for doctors who
                want to develop advanced knowledge in a specific area of neurosurgery. The right program is not
                necessarily the one with the longest curriculum or the highest fee — you need to look at the
                training structure, faculty, clinical exposure, curriculum, learning format, assessment,
                certification, and relevance to your career goals.
              </p>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-8">
                <p className="text-lg font-semibold text-primary mb-3">Key Takeaways</p>
                <ul className="space-y-2 text-text-secondary">
                  <li>✓ Start with your career goal and preferred subspecialty</li>
                  <li>✓ Look beyond the module list — check case discussions and supervised exposure</li>
                  <li>✓ Clarify exactly what &quot;hands-on training&quot; means before enrolling</li>
                  <li>✓ Verify certification, recognition, and total cost independently</li>
                </ul>
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Start With Your Neurosurgery Career Goal</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Before comparing fellowship providers, decide what you want to gain from the program. Ask
                yourself:
              </p>
              <ul className="space-y-2 mb-6">
                {GOAL_QUESTIONS.map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
              <p className="text-text-secondary leading-relaxed mb-4">
                Neurosurgery includes several areas of focused practice. If you already have a specific
                interest, prioritize programs with meaningful curriculum depth in that area:
              </p>
              <div className="flex flex-wrap gap-2 mb-8 not-prose">
                {SUBSPECIALTIES.map((li) => (
                  <span key={li} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-[0.8125rem] font-medium">{li}</span>
                ))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Evaluate the Fellowship Curriculum</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                A strong curriculum should have clearly defined learning objectives rather than simply listing
                a large number of topics. Depending on the program, relevant subjects may include:
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
                Two programs may cover the same subjects but provide very different learning experiences. Check
                whether the program includes case discussions, clinical scenarios, imaging interpretation,
                faculty interaction, assessments, research activities, practical demonstrations, surgical
                observation, and supervised clinical exposure — particularly important when comparing online
                and hospital-based fellowships.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Assess Clinical and Practical Exposure</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                For many doctors, clinical exposure is one of the most important factors. Ask exactly what the
                provider means by clinical training or hands-on experience:
              </p>
              <ul className="space-y-2 mb-8">
                {CLINICAL_QUESTIONS.map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
              <p className="text-text-secondary leading-relaxed mb-8">
                A program that primarily provides academic education should not be assumed to offer the same
                procedural exposure as a hospital-based fellowship.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Review the Faculty and Mentorship</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Review the faculty&apos;s qualifications, neurosurgical experience, subspecialty expertise,
                academic background, research involvement, and teaching experience — and determine how much
                interaction you will actually have with them. A list of well-known faculty members is less
                meaningful if learners have little opportunity to interact with them. Ask whether the program
                provides live teaching, case discussions, question-and-answer sessions, academic mentoring,
                feedback, and research guidance.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Compare Online, Offline and Hybrid Fellowships</h2>
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
                Online learning may suit doctors who are already practising, cannot relocate, or need flexible
                schedules. An offline fellowship may be more appropriate when your priority is hospital-based
                clinical exposure, direct faculty supervision, surgical observation, and face-to-face case
                discussions. Choose the format based on what you need to learn, not simply what is most
                convenient.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Is a Neurosurgery Fellowship Worth It?</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                A fellowship may be valuable if you want to develop focused neurosurgical knowledge, learn
                about a specific subspecialty, strengthen clinical decision-making, expand academic knowledge,
                develop research skills, gain structured exposure to complex cases, or continue professional
                development while working.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                It may not be the right option if the curriculum does not match your goals, clinical exposure
                is unclear, faculty information is limited, certification details are vague, the program makes
                unrealistic career promises, the schedule is incompatible with your work, or you are primarily
                looking for independent surgical competency but the course is largely theoretical. The key
                question is: does this specific fellowship provide the training and exposure I need for my
                intended career path?
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Compare Fellowship Fees and Overall Value</h2>
              <div className="overflow-x-auto rounded-lg border border-gray-200 mb-8 not-prose">
                <table className="w-full text-sm text-left">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Factor</th>
                      <th className="px-4 py-3 font-semibold">What to Check</th>
                    </tr>
                  </thead>
                  <tbody>
                    {FEE_ROWS.map((r, i) => (
                      <tr key={r.factor} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 font-medium text-primary border-t border-gray-100">{r.factor}</td>
                        <td className="px-4 py-3 text-text-secondary border-t border-gray-100">{r.check}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Check Certification, Recognition &amp; Assessment</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Before enrolling, determine who awards the certificate, the exact name of the qualification,
                whether the institution is authorized to issue it, whether there is external accreditation,
                whether it is recognized by a relevant professional body, and whether it contributes to
                licensing or credentialing in your target country. A structured fellowship should also explain
                how learning is assessed — module assessments, written examinations, case discussions,
                assignments, clinical assessments, case presentations, research projects, and final
                assessments — and what you are expected to know or demonstrate by the end.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Red Flags to Watch Before Enrolling</h2>
              <p className="text-text-secondary leading-relaxed mb-4">Be cautious when a fellowship provider:</p>
              <ul className="space-y-2 mb-8">
                {RED_FLAGS.map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-accent text-xl mt-1">✕</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Final Checklist Before Choosing</h2>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 not-prose">
                {CHECKLIST.map((li) => (
                  <div key={li} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary">
                    <span className="text-secondary mt-0.5">✓</span>
                    <span>{li}</span>
                  </div>
                ))}
              </div>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Compare Neurosurgery Fellowships
                </h3>
                <p className="text-text-secondary mb-6">
                  Explore MedFellow Academy&apos;s Fellowship Course in Neurosurgery and review the program
                  details, curriculum, eligibility, and learning format before applying.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/courses/fellowship-in-neurosurgery" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-center">
                    View Fellowship Details
                  </Link>
                  <Link href="/courses/best-fellowship-course-in-neurosurgery" className="inline-block px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all text-center">
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
            <TopicClusterLinks title="Neurosurgery Resources" links={CLUSTER_LINKS} />
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
              <Link href="/courses/best-fellowship-course-in-neurosurgery" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">Fellowship Guide</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Best Fellowship Course in Neurosurgery
                </h3>
                <p className="text-sm text-text-secondary">A complete guide to curriculum, clinical exposure, skills, eligibility, learning formats, and career scope...</p>
              </Link>
              <Link href="/blog/online-vs-offline-neurosurgery-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Online vs Offline Neurosurgery Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Compare flexibility, clinical exposure, practical learning, and overall training formats...</p>
              </Link>
              <Link href="/blog/skills-you-learn-during-a-neurosurgery-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Clinical Skills</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Skills You Learn During a Neurosurgery Fellowship
                </h3>
                <p className="text-sm text-text-secondary">The clinical, analytical, academic, and professional skills developed during training...</p>
              </Link>
              <Link href="/blog/neurosurgery-fellowship-curriculum" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Clinical Skills</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Neurosurgery Fellowship Curriculum: What Will You Learn?
                </h3>
                <p className="text-sm text-text-secondary">The major subjects and learning areas covered in fellowship training...</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

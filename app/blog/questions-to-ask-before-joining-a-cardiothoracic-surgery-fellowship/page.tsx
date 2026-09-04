import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import TopicClusterLinks from "@/components/TopicClusterLinks";
import Link from "next/link";
import Image from "next/image";

const CLUSTER_LINKS = [
  { label: "Best Fellowship Course in Cardiothoracic Surgery (Guide)", href: "/courses/best-fellowship-course-in-cardiothoracic-surgery", type: "guide" as const },
  { label: "How to Choose a Cardiothoracic Surgery Fellowship", href: "/blog/how-to-choose-a-cardiothoracic-surgery-fellowship", type: "blog" as const },
  { label: "Questions to Ask Before Joining a Cardiothoracic Surgery Fellowship", href: "/blog/questions-to-ask-before-joining-a-cardiothoracic-surgery-fellowship", type: "blog" as const },
  { label: "Online vs Offline Cardiothoracic Surgery Fellowship", href: "/blog/online-vs-offline-cardiothoracic-surgery-fellowship", type: "blog" as const },
  { label: "Is a Cardiothoracic Surgery Fellowship Worth It?", href: "/blog/is-a-cardiothoracic-surgery-fellowship-worth-it", type: "blog" as const },
  { label: "Career Opportunities After a Cardiothoracic Surgery Fellowship", href: "/blog/career-opportunities-after-a-cardiothoracic-surgery-fellowship", type: "blog" as const },
  { label: "Skills You Learn During a Cardiothoracic Surgery Fellowship", href: "/blog/skills-you-learn-during-a-cardiothoracic-surgery-fellowship", type: "blog" as const },
];

export const metadata: Metadata = {
  title: "Questions to Ask Before Joining a Cardiothoracic Surgery Fellowship | MedFellow Academy",
  description:
    "Know the key questions to ask before joining a cardiothoracic surgery fellowship, from eligibility and curriculum to clinical exposure, fees and certification.",
  keywords:
    "questions to ask before cardiothoracic surgery fellowship, cardiothoracic surgery fellowship, fellowship in cardiothoracic surgery, cardiothoracic surgery fellowship course, best cardiothoracic surgery fellowship",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-a-cardiothoracic-surgery-fellowship/" },
  openGraph: {
    title: "Questions to Ask Before Joining a Cardiothoracic Surgery Fellowship",
    description:
      "The key questions to ask about eligibility, curriculum, faculty, clinical exposure, assessments, certification, fees, and career relevance.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-a-cardiothoracic-surgery-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Questions to Ask Before Joining a Cardiothoracic Surgery Fellowship",
    description: "A practical checklist before selecting a cardiothoracic surgery fellowship course.",
  },
};

const FAQS = [
  {
    q: "What should I ask before joining a cardiothoracic surgery fellowship course?",
    a: "Ask about eligibility, curriculum, faculty, clinical exposure, practical training, course format, assessments, certification, total fees, schedule, and how the fellowship fits your career goals.",
  },
  {
    q: "What is the most important question to ask a cardiothoracic fellowship course provider?",
    a: "Ask exactly what you will learn and what practical or clinical exposure is included. These two answers help you understand the actual value of the program.",
  },
  {
    q: "How can I verify whether a cardiothoracic fellowship is suitable for me?",
    a: "Review the eligibility requirements, complete syllabus, faculty profiles, delivery format, clinical components, assessments, certificate details, and career relevance against your current qualifications and goals.",
  },
  {
    q: "What should I ask about hands-on training?",
    a: "Ask whether training is observational, simulation-based, supervised, or hands-on, how many training days are included, who supervises the activities, and what procedures or activities fellows are allowed to perform.",
  },
  {
    q: "What should I ask about the fellowship certificate?",
    a: "Ask who issues it, the exact name of the credential, whether assessment is required, what the certificate represents, and whether it has any relevance to your intended regulatory or professional pathway.",
  },
  {
    q: "Does a cardiothoracic fellowship certificate qualify me as a specialist?",
    a: "Not automatically. A fellowship certificate is not necessarily equivalent to a recognized specialist or superspecialist qualification. Recognition depends on the applicable medical regulator, educational pathway, employer, and jurisdiction.",
  },
  {
    q: "What should I ask about the total fellowship fees?",
    a: "Ask for a complete fee breakdown, including tuition, registration, assessment, certification, clinical placement, travel, accommodation, and any other mandatory charges.",
  },
  {
    q: "How do I know whether online cardiothoracic training is enough for my goals?",
    a: "Determine whether your goal is primarily academic learning or practical clinical training. Online learning can support theoretical and case-based education, while supervised clinical and procedural learning requires appropriate in-person environments.",
  },
  {
    q: "Can working doctors join a cardiothoracic surgery fellowship?",
    a: "Some programs are designed around working professionals. Ask about weekly study hours, live sessions, attendance requirements, clinical dates, assignments, and examinations before enrolling.",
  },
  {
    q: "What are the biggest red flags when choosing a cardiothoracic fellowship?",
    a: "Vague curriculum, unclear clinical exposure, guaranteed career outcomes, unclear certification, hidden fees, and lack of meaningful assessment are important warning signs.",
  },
  {
    q: "Is a longer cardiothoracic fellowship automatically better?",
    a: "No. Duration should be considered alongside curriculum depth, faculty quality, clinical exposure, learning outcomes, assessment, and your own professional objective.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Questions to Ask Before Joining a Cardiothoracic Surgery Fellowship",
  description:
    "The key questions doctors should ask about eligibility, curriculum, faculty, clinical exposure, assessments, certification, fees, and career relevance.",
  image: "https://www.medfellowacademy.com/courses/cardiothoracic.jpg",
  datePublished: "2026-09-03",
  dateModified: "2026-09-03",
  author: { "@type": "Organization", name: "MedFellow Academy" },
  publisher: {
    "@type": "Organization",
    name: "MedFellow Academy",
    logo: { "@type": "ImageObject", url: "https://www.medfellowacademy.com/logo.png" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-a-cardiothoracic-surgery-fellowship/",
  },
};

const ELIGIBILITY_QUESTIONS = [
  "MBBS or equivalent", "Postgraduate medical qualification", "Surgical qualification",
  "Cardiology or related specialty background", "Professional registration", "Previous clinical experience",
];

const CARDIAC_TOPICS = [
  "Cardiovascular anatomy", "Cardiovascular physiology", "Coronary artery disease", "CABG principles",
  "Valvular heart disease", "Aortic disease", "Congenital heart disease", "Cardiopulmonary bypass",
  "ECMO", "Mechanical circulatory support",
];

const THORACIC_TOPICS = [
  "Lung disease", "Pleural conditions", "Mediastinal pathology", "Airway disorders",
  "Chest wall conditions", "Thoracic oncology", "Thoracic imaging",
];

const CLINICAL_QUESTIONS = [
  "Where does the clinical training take place?",
  "How long is the placement?",
  "Who supervises the learner?",
  "Is attendance mandatory?",
  "What activities are permitted?",
  "Will I perform procedures, observe procedures, or only study the theory?",
];

const ASSESSMENT_ITEMS = [
  "Research projects", "Literature reviews", "Clinical audits", "Presentations", "Academic papers", "Case reports",
];

const FEE_ITEMS = [
  "Registration fees", "Examination fees", "Certification charges", "Clinical placement costs",
  "Learning materials", "Travel", "Accommodation", "Administrative fees",
];

const PROVIDER_CHECKLIST = [
  { q: "Who can apply?", verify: "Exact academic and professional eligibility" },
  { q: "What is taught?", verify: "Complete curriculum and learning outcomes" },
  { q: "Who teaches?", verify: "Faculty qualifications and experience" },
  { q: "What is the format?", verify: "Online, offline or hybrid" },
  { q: "Is clinical exposure included?", verify: "Exact activities and duration" },
  { q: "Is training hands-on?", verify: "Type and level of supervision" },
  { q: "How are fellows assessed?", verify: "Exams, cases, assignments or projects" },
  { q: "What certificate is issued?", verify: "Issuer and credential type" },
  { q: "What is the full fee?", verify: "Tuition plus additional expenses" },
  { q: "Is the schedule flexible?", verify: "Weekly commitment and attendance" },
  { q: "Is there academic support?", verify: "Faculty interaction and mentoring" },
  { q: "Does it fit my career goal?", verify: "Relevance to your planned pathway" },
];

const RED_FLAGS = [
  { title: "Vague Curriculum", text: "If the provider cannot provide a clear syllabus, you may not have enough information to evaluate the program." },
  { title: "Unclear Clinical Training", text: "Claims such as “hands-on experience” or “clinical exposure” should always be clarified." },
  { title: "Guaranteed Career Outcomes", text: "Be cautious about claims promising guaranteed jobs, promotions, specialist recognition, or specific clinical privileges." },
  { title: "Unclear Certification", text: "You should know exactly who issues the certificate and what it represents before paying." },
  { title: "Hidden Costs", text: "Ask for the complete fee structure and any additional mandatory expenses." },
  { title: "No Clear Assessment", text: "A fellowship that offers no meaningful evaluation may provide a different academic experience from a structured assessed program." },
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
              <span>Questions to Ask Before Joining a Cardiothoracic Surgery Fellowship</span>
            </div>

            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">
                Fellowship Guides
              </span>
              <span className="text-sm text-text-secondary">⏱️ 11 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Questions to Ask Before Joining a Cardiothoracic Surgery Fellowship
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
                src="/courses/cardiothoracic.jpg"
                alt="Questions to Ask Before Joining a Cardiothoracic Surgery Fellowship"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Choosing a Cardiothoracic Surgery Fellowship is an important professional decision. A course may
                look attractive online, but the real value depends on what you will learn, who will teach you,
                how you will be trained, and what the fellowship actually represents. This is particularly
                important in surgical specialties, where academic knowledge and supervised procedural competency
                are not the same thing. Use this guide as a practical checklist before you pay your fees.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">What Do I Want From This Fellowship?</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Before asking the provider anything, decide what you expect to gain. You may want advanced
                structured knowledge in areas such as coronary disease, valve disorders, aortic pathology,
                thoracic surgery, cardiopulmonary bypass, critical care, imaging, and newer surgical
                approaches — in which case focus heavily on the curriculum and faculty. You may be more
                interested in hospital exposure, case discussions, operating-room observation, simulation, or
                supervised practical learning — in which case ask exactly what the program offers rather than
                relying on terms such as &quot;clinical training.&quot; Or a fellowship may form part of a
                larger professional development plan — understand how it fits alongside your existing
                qualifications and whether you may need a separate recognized specialist or superspecialty
                pathway for your long-term goal.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">What Are the Eligibility Requirements?</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Do not assume that every Cardiothoracic Surgery Fellowship Course has the same admission
                criteria. Ask whether the fellowship requires:
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-6 not-prose">
                {ELIGIBILITY_QUESTIONS.map((li) => (
                  <div key={li} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary">
                    <span className="text-secondary mt-0.5">✓</span>
                    <span>{li}</span>
                  </div>
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                Also ask whether prior surgical experience is mandatory or simply preferred, whether
                international doctors are eligible (registration, documentation, local eligibility,
                country-specific requirements), and whether there is an entrance examination or interview.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">What Exactly Will I Learn?</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Never enroll based solely on the name. Ask for the complete curriculum. A broad fellowship may
                include cardiac surgery topics:
              </p>
              <div className="flex flex-wrap gap-2 mb-4 not-prose">
                {CARDIAC_TOPICS.map((li) => (
                  <span key={li} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-[0.8125rem] font-medium">{li}</span>
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-4">And thoracic surgery topics:</p>
              <div className="flex flex-wrap gap-2 mb-4 not-prose">
                {THORACIC_TOPICS.map((li) => (
                  <span key={li} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-[0.8125rem] font-medium">{li}</span>
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                Ask whether the curriculum covers critical care (ventilation, hemodynamic management,
                arrhythmias, bleeding, infection, renal complications) and modern techniques (minimally
                invasive surgery, robotic approaches, VATS, advanced imaging, ECMO, hybrid procedures,
                technology-assisted surgical planning).
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Who Are the Faculty Members?</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Ask for information about faculty medical qualifications, specialty training, clinical
                experience, academic experience, areas of expertise, and teaching background. Ask whether
                faculty are currently active in cardiothoracic practice, and whether the program includes live
                sessions, case discussions, Q&amp;A sessions, mentorship, project guidance, and individual
                feedback. A course with strong faculty but minimal learner interaction may provide a very
                different experience from one with regular academic engagement.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">What Clinical and Practical Training Is Included?</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                For a surgical fellowship, this may be the most important question. Ask the provider to define
                what &quot;clinical exposure&quot; actually means — case-based learning, hospital visits,
                operating-room observation, simulation, skills-lab sessions, clinical mentoring, or supervised
                practical training. These are different types of learning and should not be treated as
                interchangeable. If hospital-based learning is promised, ask:
              </p>
              <ul className="space-y-2 mb-8">
                {CLINICAL_QUESTIONS.map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg mb-8 not-prose">
                <p className="text-sm text-text-secondary leading-relaxed">
                  <strong>Does practical exposure guarantee competency?</strong> No. Exposure is not the same
                  as independent procedural competency. Competency depends on appropriate training,
                  supervision, case experience, assessment, and institutional requirements.
                </p>
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Is the Course Online, Offline or Hybrid?</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Ask whether online learning includes live lectures, recorded sessions, case discussions,
                faculty interaction, assessments, assignments, and research guidance. Find out whether in-person
                components involve hospital visits, clinical observation, simulation, skills training,
                face-to-face case discussions, and supervised practical learning. Ask about the weekly
                commitment, mandatory attendance, live-session schedule, and any fixed clinical dates — and
                whether the program is genuinely suitable for working doctors. A flexible program can be
                useful, but flexibility should not come at the expense of the learning outcomes you need.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">How Will My Learning Be Assessed?</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                A serious fellowship should explain how your learning will be evaluated — written, online, oral,
                practical, or case-based examinations; assignments; and case presentations that test clinical
                reasoning rather than simple recall. Ask whether the program includes:
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 not-prose">
                {ASSESSMENT_ITEMS.map((li) => (
                  <div key={li} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary">
                    <span className="text-secondary mt-0.5">✓</span>
                    <span>{li}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">What Does the Fellowship Certificate Mean?</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Ask for the exact name of the certificate issuer, and whether the certificate represents
                completion of a professional development program, academic fellowship training, clinical
                fellowship training, or another educational credential. Do not assume that a fellowship
                certificate is equivalent to a formally recognized specialist or superspecialist qualification.
                If you want to use it for licensing or specialist registration, ask the relevant regulatory
                authority rather than relying on the provider&apos;s marketing material — professional
                registration, specialist recognition, hospital privileges, and independent practice are
                governed by the applicable jurisdiction.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">What Is the Total Fellowship Fee?</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Tuition is only one part of the financial decision. Ask about additional charges:
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 not-prose">
                {FEE_ITEMS.map((li) => (
                  <div key={li} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary">
                    <span className="text-secondary mt-0.5">✓</span>
                    <span>{li}</span>
                  </div>
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                Review the refund, cancellation, deferral, and withdrawal policies before making payment, and
                ask whether installment plans are available. Compare the total cost against faculty access,
                curriculum depth, clinical exposure, learning resources, assessments, academic support, and
                duration. A cheaper fellowship is not necessarily better value.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Fellowship Provider Checklist</h2>
              <div className="overflow-x-auto rounded-lg border border-gray-200 mb-8 not-prose">
                <table className="w-full text-sm text-left">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Question</th>
                      <th className="px-4 py-3 font-semibold">What You Should Verify</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PROVIDER_CHECKLIST.map((r, i) => (
                      <tr key={r.q} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 font-medium text-primary border-t border-gray-100">{r.q}</td>
                        <td className="px-4 py-3 text-text-secondary border-t border-gray-100">{r.verify}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Red Flags to Watch Before Joining</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-8 not-prose">
                {RED_FLAGS.map((r) => (
                  <div key={r.title} className="card p-4">
                    <h3 className="text-[0.9375rem] font-bold text-primary mb-1.5">{r.title}</h3>
                    <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{r.text}</p>
                  </div>
                ))}
              </div>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Ask the Right Questions First
                </h3>
                <p className="text-text-secondary mb-6">
                  Explore the MedFellow Academy Fellowship in Cardiothoracic Surgery and review the curriculum,
                  eligibility, learning structure, and available training components.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/courses/fellowship-in-cardiothoracic-surgery" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-center">
                    View Fellowship Details
                  </Link>
                  <Link href="/courses/best-fellowship-course-in-cardiothoracic-surgery" className="inline-block px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all text-center">
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
            <TopicClusterLinks title="Cardiothoracic Surgery Resources" links={CLUSTER_LINKS} />
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
              <Link href="/courses/best-fellowship-course-in-cardiothoracic-surgery" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">Fellowship Guide</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Best Fellowship Course in Cardiothoracic Surgery
                </h3>
                <p className="text-sm text-text-secondary">A complete guide to curriculum, clinical exposure, skills, eligibility, formats, and career scope...</p>
              </Link>
              <Link href="/blog/how-to-choose-a-cardiothoracic-surgery-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  How to Choose a Cardiothoracic Surgery Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Compare curriculum, faculty, clinical exposure, fees, and learning formats...</p>
              </Link>
              <Link href="/blog/online-vs-offline-cardiothoracic-surgery-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Online vs Offline Cardiothoracic Surgery Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Compare flexibility, academic learning, clinical exposure, and practical training...</p>
              </Link>
              <Link href="/blog/is-a-cardiothoracic-surgery-fellowship-worth-it" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Career Planning</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Is a Cardiothoracic Surgery Fellowship Worth It?
                </h3>
                <p className="text-sm text-text-secondary">Understand the potential benefits, limitations, and career considerations...</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

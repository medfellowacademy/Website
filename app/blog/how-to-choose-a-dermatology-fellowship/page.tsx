import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import TopicClusterLinks from "@/components/TopicClusterLinks";
import Link from "next/link";
import Image from "next/image";

const CLUSTER_LINKS = [
  { label: "Best Fellowship Course in Dermatology (Guide)", href: "/courses/best-fellowship-course-in-dermatology", type: "guide" as const },
  { label: "How to Choose a Dermatology Fellowship", href: "/blog/how-to-choose-a-dermatology-fellowship", type: "blog" as const },
  { label: "Questions to Ask Before Joining a Dermatology Fellowship", href: "/blog/questions-to-ask-before-joining-a-dermatology-fellowship", type: "blog" as const },
  { label: "Online vs Offline Dermatology Fellowship", href: "/blog/online-vs-offline-dermatology-fellowship", type: "blog" as const },
  { label: "Skills You Learn During a Dermatology Fellowship", href: "/blog/skills-you-learn-during-a-dermatology-fellowship", type: "blog" as const },
  { label: "Is a Dermatology Fellowship Worth It?", href: "/blog/is-a-dermatology-fellowship-worth-it", type: "blog" as const },
];

export const metadata: Metadata = {
  title: "How to Choose a Dermatology Fellowship Course | MedFellow Academy",
  description:
    "Learn how to choose the best dermatology fellowship course based on curriculum, clinical exposure, faculty, learning format, fees, certification and career goals.",
  keywords:
    "how to choose a dermatology fellowship, best dermatology fellowship, dermatology fellowship course, dermatology training, fellowship in dermatology",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/how-to-choose-a-dermatology-fellowship/" },
  openGraph: {
    title: "How to Choose a Dermatology Fellowship Course",
    description:
      "Compare curriculum, clinical exposure, faculty, learning format, fees, certification and career goals before enrolling.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/how-to-choose-a-dermatology-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Choose a Dermatology Fellowship Course",
    description: "A step-by-step guide to comparing dermatology fellowship programs before enrollment.",
  },
};

const FAQS = [
  {
    q: "What should I look for when choosing a dermatology fellowship course?",
    a: "Look at the curriculum, faculty, clinical exposure, practical training, learning format, assessment, certification, fees, and how well the fellowship fits your career objective.",
  },
  {
    q: "Is the curriculum more important than the course duration?",
    a: "Duration alone does not determine quality. A longer course is not automatically better. Evaluate curriculum depth, learning outcomes, clinical exposure, faculty, and assessment alongside duration.",
  },
  {
    q: "Should I choose an online dermatology fellowship or one with clinical training?",
    a: "It depends on your goal. Online learning can be useful for flexibility and academic study, while a clinical component may be more appropriate if you specifically want in-person exposure.",
  },
  {
    q: "What does clinical exposure mean in a dermatology fellowship?",
    a: "It can mean different things, including case discussions, observation, hospital attachment, demonstrations, simulation, supervised clinical learning, or hands-on training. Always ask the provider to define it.",
  },
  {
    q: "How do I know if a dermatology fellowship offers genuine hands-on training?",
    a: "Ask which procedures are included, how many training days are provided, who supervises them, what learners are permitted to do, and how practical competency is assessed.",
  },
  {
    q: "Should a dermatology fellowship include cosmetic dermatology?",
    a: "Not necessarily. It depends on your goal. If you are interested in aesthetic practice, verify that cosmetic dermatology is explicitly covered and understand how deeply it is taught.",
  },
  {
    q: "How much does a dermatology fellowship cost?",
    a: "Fees vary by provider and training format. MedFellow's current Dermatology page lists ₹1,40,000 for the fully online option and ₹1,75,000 for the online plus clinical month option. Confirm current fees before enrolling.",
  },
  {
    q: "Does a dermatology fellowship certificate make me a dermatologist?",
    a: "Not automatically. A fellowship certificate is different from a formal specialist qualification and does not by itself establish specialist registration or independent practice rights.",
  },
  {
    q: "Is an MBBS degree enough for a dermatology fellowship?",
    a: "Eligibility varies by provider. MedFellow's current Dermatology course lists MBBS as the eligibility requirement, while some advanced institutional fellowships require completion of prior dermatology specialty training. Always check the specific program.",
  },
  {
    q: "What are the biggest red flags when choosing a dermatology fellowship?",
    a: "Vague curriculum, unclear practical training, guaranteed career promises, unclear certification, hidden fees, and no meaningful assessment are important warning signs.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Choose a Dermatology Fellowship Course",
  description:
    "Learn how to choose the best dermatology fellowship course based on curriculum, clinical exposure, faculty, learning format, fees, certification and career goals.",
  image: "https://www.medfellowacademy.com/courses/dermatology.jpg",
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
    "@id": "https://www.medfellowacademy.com/blog/how-to-choose-a-dermatology-fellowship/",
  },
};

const CLINICAL_FOUNDATION = [
  "Dermatological anatomy", "Skin examination", "Lesion morphology", "History-taking", "Differential diagnosis",
  "Common inflammatory disorders", "Infectious skin diseases", "Pigmentary disorders", "Hair and nail disorders",
  "Special populations",
];

const AESTHETIC_TOPICS = [
  "Cosmetic dermatology", "Laser therapy", "Chemical peels", "Skin rejuvenation", "Scar management",
  "Skin surgery", "Energy-based devices", "Other aesthetic procedures",
];

const EXPOSURE_TYPES = [
  { title: "Observation", text: "Watching dermatology consultations or procedures and learning how they are performed — valuable, but observational learning." },
  { title: "Case-Based Learning", text: "Working through patient cases, discussing diagnoses, comparing treatment options, and reviewing outcomes — this develops clinical reasoning." },
  { title: "Simulation", text: "Demonstrations or simulation-based learning to introduce procedural concepts." },
  { title: "Supervised Practical Training", text: "Participating in procedures under appropriate supervision and within the permitted scope of the training environment — different from observation." },
  { title: "Hands-On", text: "Do not assume this means independent procedural practice. Ask exactly which procedures are included, how many training days, who supervises, what fellows are permitted to perform, and whether competency is formally assessed." },
];

const FACULTY_CHECKS = [
  "Medical qualifications", "Dermatology training", "Clinical experience", "Procedural expertise",
  "Academic experience", "Teaching background",
];

const TEN_QUESTIONS = [
  "Who is eligible for this fellowship?",
  "Can I see the complete curriculum and learning outcomes?",
  "Who teaches the program, and what is their relevant experience?",
  "How much clinical exposure is included? (Ask for specifics.)",
  "Is practical training hands-on or observational?",
  "How is my learning assessed?",
  "What does the certificate represent, and who issues it?",
  "What is the total cost, including all mandatory and additional expenses?",
  "Can I complete the course while working?",
  "Does this fellowship fit my career plan?",
];

const CHECKLIST = [
  "I have reviewed the complete syllabus.",
  "I know who teaches the program and what their experience is.",
  "I understand exactly what clinical exposure means.",
  "I know whether the training is observational, simulated, supervised, or hands-on.",
  "The online, offline, or hybrid format fits my schedule.",
  "I meet the stated academic and professional requirements.",
  "I understand how my learning will be evaluated.",
  "I know who issues the certificate and what it represents.",
  "I know the complete cost, including any additional expenses.",
  "I understand how the fellowship fits into my professional plans.",
];

const RED_FLAGS = [
  { title: "A Very Broad Course With No Detail", text: "If a course claims to teach everything but gives no meaningful syllabus, investigate further." },
  { title: "Unclear Practical Training", text: "“Hands-on exposure” should always be explained in detail." },
  { title: "Guaranteed Career Claims", text: "Be cautious about guaranteed jobs, promotions, specialist recognition, or guaranteed income." },
  { title: "Unclear Certificate Details", text: "You should know exactly who issues the credential and what it represents." },
  { title: "No Assessment", text: "A program with little or no meaningful assessment may provide a very different learning experience from a structured fellowship." },
  { title: "Pressure to Enroll Quickly", text: "A good educational decision should give you enough time to review the curriculum, fees, eligibility, and terms." },
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
              <span>How to Choose a Dermatology Fellowship</span>
            </div>

            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">
                Fellowship Guides
              </span>
              <span className="text-sm text-text-secondary">⏱️ 12 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              How to Choose a Dermatology Fellowship Course
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
                src="/courses/dermatology.jpg"
                alt="How to Choose a Dermatology Fellowship Course"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Two courses can have almost the same name and still offer very different learning experiences.
                One may focus mainly on online theory. Another may include case discussions and clinical
                observation. A third may be heavily focused on procedures or aesthetic dermatology. Choosing
                the right fellowship is not simply about the number of modules or the lowest fee — you need to
                understand what you will learn, how you will learn it, who will teach you, what clinical
                exposure is included, how you will be assessed, and what the certificate actually represents.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">What Do You Want From Dermatology Training?</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Before comparing providers, start with your own objective. If you want <strong>stronger
                clinical knowledge</strong>, look for a curriculum with strong foundations in clinical
                dermatology, diagnosis, disease management, and patient evaluation. If you are interested in
                <strong> cosmetic dermatology</strong>, check whether aesthetic dermatology, cosmetic
                procedures, and laser therapy are actually part of the curriculum. If you want <strong>
                procedural exposure</strong>, ask whether the program offers theoretical learning,
                demonstrations, observation, simulation, supervised clinical exposure, or hands-on training —
                these are very different learning experiences. If you are <strong>studying while working</strong>,
                a flexible online or hybrid format may be more practical. And if you are <strong>planning
                further training</strong>, make sure you understand how the fellowship fits into that pathway,
                since a fellowship certificate should not automatically be assumed to replace a formally
                recognized postgraduate or specialist qualification.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">How to Evaluate a Dermatology Fellowship Curriculum</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Start by asking for the complete syllabus and learning outcomes. A well-rounded course should
                cover core clinical concepts before moving into advanced or aesthetic areas:
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-6 not-prose">
                {CLINICAL_FOUNDATION.map((li) => (
                  <div key={li} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary">
                    <span className="text-secondary mt-0.5">✓</span>
                    <span>{li}</span>
                  </div>
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-4">
                Check whether the course introduces relevant diagnostic methods and clinical reasoning —
                dermoscopy, skin investigations, biopsy-related concepts, and interpretation of relevant
                findings. If skin lesions and tumors are important to you, check whether the curriculum covers
                suspicious lesions, skin cancers, and principles of evaluation. Depending on your objectives,
                you may also want exposure to:
              </p>
              <div className="flex flex-wrap gap-2 mb-4 not-prose">
                {AESTHETIC_TOPICS.map((li) => (
                  <span key={li} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-[0.8125rem] font-medium">{li}</span>
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                Do not stop at the list of topics — ask how deeply each topic is taught, and look for
                evidence-based teaching, updated clinical concepts, newer technologies, and current treatment
                approaches.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Who Is Teaching the Fellowship?</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                A curriculum is only as useful as the way it is taught. Review the faculty&apos;s:
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-6 not-prose">
                {FACULTY_CHECKS.map((li) => (
                  <div key={li} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary">
                    <span className="text-secondary mt-0.5">✓</span>
                    <span>{li}</span>
                  </div>
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                Do not choose a course based only on the number of faculty members — look at whether the
                faculty&apos;s expertise matches what you want to learn, and find out whether you can interact
                with instructors through live sessions, case discussions, Q&amp;A sessions, mentorship, project
                guidance, and feedback. A recorded course and an interactive fellowship can feel completely
                different from a learner&apos;s perspective.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">What Clinical Exposure Will You Actually Get?</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                The phrase &quot;clinical exposure&quot; can mean different things:
              </p>
              <div className="space-y-4 mb-8 not-prose">
                {EXPOSURE_TYPES.map((r) => (
                  <div key={r.title} className="card p-4">
                    <h3 className="text-[0.9375rem] font-bold text-primary mb-1.5">{r.title}</h3>
                    <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{r.text}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Online, Offline or Hybrid: Which Is Better?</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                There is no universally best format. Choose <strong>online</strong> when flexibility is your top
                priority (it supports lectures, recorded sessions, case discussions, assignments, academic
                learning, assessments, and literature review). Choose <strong>offline</strong> when intensive
                face-to-face clinical exposure is your main objective (face-to-face teaching, clinical
                observation, hospital exposure, procedure demonstrations, simulation, direct faculty
                interaction). Choose <strong>hybrid</strong> when you want academic flexibility plus an
                in-person clinical component — MedFellow currently lists both a fully online pathway and an 11
                online + 1 clinical month option with hospital attachment. The important thing is to match the
                format to the learning outcome.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Check Eligibility, Certification &amp; Fees</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Verify eligibility before spending time comparing courses — some providers require prior
                postgraduate dermatology training, while others accept doctors with a broader medical
                qualification (MedFellow&apos;s current course page lists MBBS). Ask whether previous dermatology
                experience is mandatory, preferred, or not required, and whether professional registration is
                needed for any clinical training. Understand what the certificate represents: ask for the exact
                name of the issuing organization, whether it documents completion of an educational or
                professional-development fellowship, and separately check the rules that apply to your intended
                professional use. When comparing fees, ask what you are receiving for the fee — curriculum
                depth, faculty access, clinical exposure — and check additional costs (registration, exams,
                certification, clinical attachment, learning resources, travel, accommodation) plus the refund
                policy. MedFellow&apos;s current page lists &#8377;1,40,000 (fully online) and &#8377;1,75,000
                (11 online + 1 clinical month), with EMI options; fees can change, so confirm current pricing
                directly before enrollment.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">10 Questions to Ask Before Joining</h2>
              <ul className="space-y-2 mb-8">
                {TEN_QUESTIONS.map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Red Flags Before You Enroll</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-8 not-prose">
                {RED_FLAGS.map((r) => (
                  <div key={r.title} className="card p-4">
                    <h3 className="text-[0.9375rem] font-bold text-primary mb-1.5">{r.title}</h3>
                    <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{r.text}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Final Checklist Before You Enroll</h2>
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
                  Compare Your Options
                </h3>
                <p className="text-text-secondary mb-6">
                  Review the MedFellow Academy Dermatology Fellowship and compare the available training
                  pathways — curriculum, eligibility, learning format, fees, and clinical training options —
                  before making your decision.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/courses/fellowship-in-dermatology" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-center">
                    View Fellowship Details
                  </Link>
                  <Link href="/courses/best-fellowship-course-in-dermatology" className="inline-block px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all text-center">
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
            <TopicClusterLinks title="Dermatology Resources" links={CLUSTER_LINKS} />
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
              <Link href="/courses/best-fellowship-course-in-dermatology" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">Fellowship Guide</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Best Fellowship Course in Dermatology
                </h3>
                <p className="text-sm text-text-secondary">A complete guide to curriculum, clinical exposure, learning format, fees, and career goals...</p>
              </Link>
              <Link href="/blog/questions-to-ask-before-joining-a-dermatology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Questions to Ask Before Joining a Dermatology Fellowship
                </h3>
                <p className="text-sm text-text-secondary">A checklist to evaluate curriculum, clinical training, certification, fees, and learning format...</p>
              </Link>
              <Link href="/blog/online-vs-offline-dermatology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Online vs Offline Dermatology Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Compare online, offline, and hybrid dermatology fellowship formats...</p>
              </Link>
              <Link href="/blog/is-a-dermatology-fellowship-worth-it" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Career Planning</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Is a Dermatology Fellowship Worth It?
                </h3>
                <p className="text-sm text-text-secondary">Understand the potential benefits, limitations, career value, and factors to consider...</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

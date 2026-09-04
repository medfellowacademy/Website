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
  title: "Questions to Ask Before Joining a Dermatology Fellowship | MedFellow Academy",
  description:
    "Know what to ask before joining a dermatology fellowship course, from eligibility and curriculum to clinical exposure, procedures, fees and certification.",
  keywords:
    "questions to ask before dermatology fellowship, dermatology fellowship requirements, dermatology course questions, dermatology fellowship eligibility, dermatology training",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-a-dermatology-fellowship/" },
  openGraph: {
    title: "Questions to Ask Before Joining a Dermatology Fellowship",
    description:
      "The questions that reveal what a dermatology fellowship really offers — curriculum, eligibility, faculty, clinical exposure, assessment, certification, and fees.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-a-dermatology-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Questions to Ask Before Joining a Dermatology Fellowship",
    description: "A practical checklist to evaluate curriculum, clinical training, certification, fees, and learning format.",
  },
};

const FAQS = [
  {
    q: "What should I ask before joining a dermatology fellowship course?",
    a: "Ask about eligibility, curriculum, faculty, clinical exposure, hands-on training, learning format, assessment, certification, fees, refund policies, and how the course fits your professional goals.",
  },
  {
    q: "What is the most important question to ask a dermatology fellowship provider?",
    a: "Ask exactly what the fellowship includes in terms of curriculum and clinical exposure. These two areas reveal much more about the actual learning experience than the course title.",
  },
  {
    q: "How do I know whether a dermatology fellowship has good clinical exposure?",
    a: "Ask the provider to define clinical exposure in specific terms. Find out whether it means observation, demonstrations, simulation, hospital attachment, supervised procedures, or another form of training.",
  },
  {
    q: "Should I ask whether the fellowship includes hands-on dermatology procedures?",
    a: "Yes. You should ask exactly which procedures are included, whether they are observed or performed, what level of supervision is provided, and how practical competency is assessed.",
  },
  {
    q: "What questions should I ask about cosmetic dermatology training?",
    a: "Ask which cosmetic procedures are covered, whether laser therapy is included, whether training is theoretical or practical, who teaches the procedures, and whether supervised clinical exposure is provided.",
  },
  {
    q: "What should I ask about the dermatology fellowship curriculum?",
    a: "Request the full module-wise syllabus and check whether it covers clinical dermatology, inflammatory and infectious disorders, dermato-oncology, special populations, aesthetic dermatology, procedures, and relevant diagnostic approaches.",
  },
  {
    q: "What should I ask about the fellowship certificate?",
    a: "Ask who issues the certificate, the exact credential name, whether completion requires assessments, and what the credential is intended to represent.",
  },
  {
    q: "Is a dermatology fellowship the same as an MD in Dermatology?",
    a: "No. A fellowship and a recognized postgraduate specialty qualification are different credentials with potentially different professional and regulatory implications.",
  },
  {
    q: "Does a dermatology fellowship automatically qualify me to practise as a dermatologist?",
    a: "Not automatically. Your scope of practice depends on your underlying qualification, registration, applicable regulations, employer requirements, and other professional conditions.",
  },
  {
    q: "What hidden costs should I ask about?",
    a: "Ask about registration, examinations, certification, clinical placement, travel, accommodation, learning materials, and any other mandatory charges.",
  },
  {
    q: "Is a longer dermatology fellowship always better?",
    a: "No. Duration should be considered together with curriculum depth, faculty quality, clinical exposure, assessment, and your professional objective.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Questions to Ask Before Joining a Dermatology Fellowship",
  description:
    "The questions that reveal what a dermatology fellowship really offers — curriculum, eligibility, faculty, clinical exposure, assessment, certification, and fees.",
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
    "@id": "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-a-dermatology-fellowship/",
  },
};

const CLINICAL_CONDITIONS = [
  "Acne and rosacea", "Eczema and dermatitis", "Psoriasis", "Fungal infections",
  "Bacterial and viral skin conditions", "Pigmentary disorders", "Hair and nail disorders",
  "Autoimmune and inflammatory skin disease",
];

const ELIGIBILITY_QUESTIONS = [
  "Is MBBS sufficient?",
  "Is a postgraduate qualification required?",
  "Is dermatology experience preferred?",
  "Are doctors from other specialties eligible?",
  "Is professional registration required?",
  "Is there an entrance test or interview?",
];

const CURRICULUM_QUESTIONS = [
  "Does it cover clinical dermatology (common and complex skin conditions, diagnosis, treatment principles, follow-up)?",
  "Does it include dermato-oncology (suspicious lesions, skin tumors, skin cancers, assessment, referral)?",
  "Does it cover infectious dermatology (fungal, bacterial, viral, parasitic, tropical)?",
  "Does it include inflammatory disorders (psoriasis, eczema, dermatitis, urticaria, autoimmune skin disease)?",
  "Does it cover hair and nail disorders?",
  "Is aesthetic dermatology included (cosmetic assessment, skin rejuvenation, lasers, procedural dermatology)?",
  "Are special populations discussed (children, older adults, pregnant patients)?",
];

const EXPOSURE_TYPES = [
  { title: "Clinical Observation", text: "Watching consultations or procedures." },
  { title: "Demonstration", text: "Faculty or clinicians demonstrating an examination or procedure." },
  { title: "Simulation", text: "Practicing in a controlled educational environment." },
  { title: "Supervised Practical Training", text: "Performing permitted activities under appropriate supervision." },
];

const HOSPITAL_QUESTIONS = [
  "Which hospital or clinical centre?",
  "How long is the attachment?",
  "Is it mandatory?",
  "What activities are included?",
  "Who provides supervision?",
  "Are there additional costs?",
];

const SCHEDULE_QUESTIONS = [
  "How many hours per week?",
  "Are classes live?",
  "Are recordings available?",
  "Which sessions are mandatory?",
  "Are clinical dates fixed?",
  "Can I take leave or defer a session?",
];

const FIFTEEN_QUESTIONS = [
  "Am I eligible with my current qualification?",
  "Is prior dermatology experience required?",
  "Do I need professional registration?",
  "Can you share the complete module-wise syllabus?",
  "Does the course include clinical dermatology and procedures?",
  "Does it cover cosmetic dermatology and laser-related topics?",
  "What exactly does clinical exposure include?",
  "Is it observation, simulation, supervised training, or hands-on practice?",
  "Which hospital or clinical centre provides the exposure?",
  "Who are the faculty members?",
  "How much interaction do learners have with faculty?",
  "How will I be assessed during the course?",
  "What is the complete fee, including additional charges?",
  "Who issues the fellowship certificate and what does it represent?",
  "What are the refund, cancellation, and deferral policies?",
];

const RED_FLAGS = [
  { title: "Vague Course Content", text: "If there is no detailed curriculum, it is difficult to judge the educational value." },
  { title: "Unclear Practical Training", text: "“Hands-on experience” without details should lead to more questions." },
  { title: "Guaranteed Career Claims", text: "Be cautious about guarantees involving jobs, promotions, specialist status, or licensing." },
  { title: "Unclear Certification", text: "You should never have to guess who issues your qualification." },
  { title: "Hidden Fees", text: "Ask for the complete financial commitment before enrolling." },
  { title: "No Clear Assessment", text: "A program with no clear method of assessing learning may provide a very different academic experience." },
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
              <span>Questions to Ask Before Joining a Dermatology Fellowship</span>
            </div>

            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">
                Fellowship Guides
              </span>
              <span className="text-sm text-text-secondary">⏱️ 11 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Questions to Ask Before Joining a Dermatology Fellowship
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
                alt="Questions to Ask Before Joining a Dermatology Fellowship"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Before you pay the fee, there is one question that matters more than the course brochure: what
                exactly am I getting from this fellowship? Two programs can have almost identical names but
                offer very different learning experiences. Before joining a Dermatology Fellowship, understand
                the curriculum, eligibility, faculty, teaching method, clinical exposure, procedural learning,
                assessment, certification, schedule, total cost, and how the program fits your career plans.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">What Do I Actually Want to Learn?</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                A doctor looking to improve diagnosis has different needs from someone interested in cosmetic
                dermatology, procedures, or further specialty training. If you want <strong>clinical
                dermatology knowledge</strong>, look closely at coverage of:
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-6 not-prose">
                {CLINICAL_CONDITIONS.map((li) => (
                  <div key={li} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary">
                    <span className="text-secondary mt-0.5">✓</span>
                    <span>{li}</span>
                  </div>
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                If you are interested in <strong>aesthetic dermatology</strong>, check whether cosmetic
                dermatology, skin rejuvenation, aesthetic procedures, and lasers are actually in the syllabus
                and whether they are taught academically, demonstrated, observed, or performed under
                supervision. If you need <strong>practical exposure</strong>, don&apos;t settle for the phrase
                &quot;hands-on training&quot; — ask what you will actually do. And knowing whether this is part
                of a <strong>larger career plan</strong> makes it easier to decide whether a particular course
                is worth your time and money.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Am I Eligible for the Dermatology Fellowship?</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                It is surprisingly easy to research a course only to discover you do not meet its admission
                requirements. Ask the provider:
              </p>
              <ul className="space-y-2 mb-6">
                {ELIGIBILITY_QUESTIONS.map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
              <p className="text-text-secondary leading-relaxed mb-8">
                Ask whether clinical experience is mandatory, preferred, or not required. If you practise
                outside your country of qualification, also ask about registration requirements, documentation,
                country-specific eligibility, employer requirements, and clinical training permissions.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">What Does the Curriculum Really Cover?</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                A course called a &quot;Dermatology Fellowship&quot; should not be evaluated by its title alone.
                Ask for the complete module-wise curriculum, and check:
              </p>
              <ul className="space-y-2 mb-8">
                {CURRICULUM_QUESTIONS.map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Who Are the Faculty and Mentors?</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Review the faculty&apos;s medical qualifications, specialty training, clinical experience,
                academic background, and areas of expertise — and check whether their specialties match your
                goals (a doctor interested in procedural dermatology may benefit from faculty with relevant
                procedural or aesthetic experience). Ask whether you will have access to live teaching
                sessions, case discussions, Q&amp;A sessions, academic mentoring, project guidance, and
                feedback. A flexible course with no meaningful academic interaction may offer a very different
                learning experience.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">What Clinical Exposure Will I Actually Get?</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                A course may advertise &quot;clinical exposure,&quot; but ask the provider to distinguish
                between:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6 not-prose">
                {EXPOSURE_TYPES.map((r) => (
                  <div key={r.title} className="card p-4">
                    <h3 className="text-[0.9375rem] font-bold text-primary mb-1.5">{r.title}</h3>
                    <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{r.text}</p>
                  </div>
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-4">If hospital attachment is included, ask:</p>
              <ul className="space-y-2 mb-6">
                {HOSPITAL_QUESTIONS.map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg mb-8 not-prose">
                <p className="text-sm text-text-secondary leading-relaxed">
                  <strong>Does clinical exposure mean I become independently competent?</strong> No. Exposure,
                  supervised education, and independent procedural competency are different stages of
                  professional development. A fellowship certificate should not automatically be interpreted as
                  evidence of independent competency to perform dermatological procedures.
                </p>
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Is Online, Offline or Hybrid Better?</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Online learning can be useful for doctors who want flexibility while continuing clinical work —
                theory, case discussions, lectures, assessments, academic projects, and literature review.
                In-person learning may be more useful when your main goal is clinical observation,
                demonstrations, simulation, practical exposure, or face-to-face mentoring. Hybrid learning
                combines online academic education with selected in-person clinical components. Ask about the
                schedule:
              </p>
              <ul className="space-y-2 mb-8">
                {SCHEDULE_QUESTIONS.map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">How Will I Be Assessed, and What Does the Certificate Represent?</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Ask whether assessments are online, written, oral, case-based, or practical; whether case
                discussions and assignments or projects are part of the program; and how completion is
                determined (minimum sessions, assignments, examinations, project, clinical requirements). For
                the certificate, ask for the exact legal or institutional name of the issuer, what the
                credential is called (fellowship certificate, certificate of completion, academic credential,
                clinical training certificate), whether it is a formal specialist qualification (it is usually
                not equivalent to an MD, recognized postgraduate specialty qualification, or specialist
                registration), and whether it can be used for licensing or registration — check that with the
                relevant regulator in the country where you intend to practise.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">What Will the Fellowship Really Cost Me?</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                The advertised tuition fee may not be the final amount. Ask about application fees,
                registration, examinations, certification, clinical placement, learning resources, travel, and
                accommodation. Ask what changes between different course options (online-only vs a clinical
                component). If installments are available, ask how many, whether interest is charged, whether
                there are processing fees, and what happens if you miss an installment. And understand the
                rules around cancellation, deferral, withdrawal, course transfer, and refunds before making
                payment.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Will This Fellowship Actually Help My Career?</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                A fellowship should have a purpose beyond adding another certificate to your CV. Look at whether
                the curriculum addresses the kinds of patients and conditions you want to manage; if cosmetic
                dermatology is your target, confirm the course actually covers relevant aesthetic and
                procedural topics; and remember that training should be used within the scope permitted by your
                qualifications, registration, employer, and local regulations. A fellowship may complement
                professional development, but it should not be assumed to replace formal specialty or
                superspecialty training requirements.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">The 15 Questions You Should Ask</h2>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 not-prose">
                {FIFTEEN_QUESTIONS.map((li) => (
                  <div key={li} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary">
                    <span className="text-secondary mt-0.5">✓</span>
                    <span>{li}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">What Should Make You Think Twice?</h2>
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
                  Know What You Are Joining
                </h3>
                <p className="text-text-secondary mb-6">
                  Before enrolling, review the MedFellow Academy course structure, eligibility, training
                  format, and available clinical pathway.
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
              <Link href="/blog/how-to-choose-a-dermatology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  How to Choose a Dermatology Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Compare eligibility, curriculum, faculty, practical exposure, fees, and career relevance...</p>
              </Link>
              <Link href="/blog/online-vs-offline-dermatology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Online vs Offline Dermatology Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Compare online, offline, and hybrid dermatology fellowship formats...</p>
              </Link>
              <Link href="/blog/skills-you-learn-during-a-dermatology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Clinical Skills</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Skills You Learn During a Dermatology Fellowship
                </h3>
                <p className="text-sm text-text-secondary">The clinical, diagnostic, procedural, and patient-care skills developed through training...</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

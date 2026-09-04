import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import TopicClusterLinks from "@/components/TopicClusterLinks";
import Link from "next/link";
import Image from "next/image";

const CLUSTER_LINKS = [
  { label: "Best Fellowship Course in Reproductive Medicine (Guide)", href: "/courses/best-fellowship-course-in-reproductive-medicine", type: "guide" as const },
  { label: "How to Choose a Reproductive Medicine Fellowship", href: "/blog/how-to-choose-reproductive-medicine-fellowship", type: "blog" as const },
  { label: "Questions to Ask Before Joining a Reproductive Medicine Fellowship", href: "/blog/questions-to-ask-before-joining-reproductive-medicine-fellowship", type: "blog" as const },
  { label: "Online vs Offline Reproductive Medicine Fellowship", href: "/blog/online-vs-offline-reproductive-medicine-fellowship", type: "blog" as const },
  { label: "Career Opportunities After a Reproductive Medicine Fellowship", href: "/blog/career-opportunities-after-reproductive-medicine-fellowship", type: "blog" as const },
  { label: "Reproductive Medicine Fellowship Curriculum: What Will You Learn?", href: "/blog/reproductive-medicine-fellowship-curriculum", type: "blog" as const },
];

export const metadata: Metadata = {
  title: "Questions to Ask Before Joining a Reproductive Medicine Fellowship | MedFellow Academy",
  description:
    "Explore key questions to ask before joining a reproductive medicine fellowship, including the course, clinical exposure, faculty, fees, certification, and career support.",
  keywords:
    "questions to ask before joining a reproductive medicine fellowship, reproductive medicine fellowship, reproductive medicine fellowship course, fellowship in reproductive medicine, best reproductive medicine fellowship",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-reproductive-medicine-fellowship/" },
  openGraph: {
    title: "Questions to Ask Before Joining a Reproductive Medicine Fellowship",
    description:
      "The key questions to ask about curriculum, clinical exposure, faculty, fees, certification, and career support before enrolling.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-reproductive-medicine-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Questions to Ask Before Joining a Reproductive Medicine Fellowship",
    description: "A pre-enrollment checklist covering curriculum, clinical exposure, faculty, certification, fees, and careers.",
  },
};

const FAQS = [
  {
    q: "What is the most important question to ask before joining a reproductive medicine fellowship?",
    a: "Ask exactly how much clinical and practical exposure the fellowship provides. Find out whether you will observe, assist, or perform procedures under supervision, and where the training takes place.",
  },
  {
    q: "How do I know if a reproductive medicine fellowship is genuinely hands-on?",
    a: "Ask the provider to specify the procedures included, expected case exposure, training location, supervision, and your level of participation. \"Hands-on\" should be explained in practical terms.",
  },
  {
    q: "Should I ask about IVF and embryology before joining?",
    a: "Yes. IVF and embryology are important components of modern reproductive medicine. Ask what is covered, how deeply it is taught, and whether the training is theoretical, observational, or practical.",
  },
  {
    q: "What should I ask about the fellowship faculty?",
    a: "Ask who the faculty are, their reproductive medicine experience, how often they teach, whether you can interact with them directly, and whether individual mentorship is provided.",
  },
  {
    q: "Is an online reproductive medicine fellowship enough?",
    a: "An online format can work well for structured academic learning, particularly for working doctors. However, online education should not automatically be considered equivalent to hands-on clinical training. Ask whether practical or clinical exposure is included separately.",
  },
  {
    q: "What should I ask about the fellowship certificate?",
    a: "Ask who awards it, the exact credential you receive, the completion requirements, and whether it serves your intended professional purpose. If you need regulatory recognition or licensing, verify the relevant regulator's requirements independently.",
  },
  {
    q: "What should I ask about the total fellowship fee?",
    a: "Ask for the complete cost, including tuition, registration, examinations, clinical training, certification, hospital attachment, travel, accommodation, and any other mandatory charges.",
  },
  {
    q: "Should I speak to previous fellows before enrolling?",
    a: "Yes. Previous fellows can provide useful insight into the actual curriculum, faculty interaction, clinical exposure, workload, practical training, and overall learning experience.",
  },
  {
    q: "Should a reproductive medicine fellowship include fertility preservation?",
    a: "It is a valuable area to ask about, particularly if you want broader exposure to modern fertility care. Ask whether oocyte, sperm, and embryo cryopreservation and their clinical indications are included.",
  },
  {
    q: "How can I compare two reproductive medicine fellowships?",
    a: "Compare both programs across curriculum, clinical exposure, practical training, faculty, mentorship, IVF and embryology, learning format, assessments, certification, fees, research, and career support. Compare what each program actually provides rather than relying on course titles.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Questions to Ask Before Joining a Reproductive Medicine Fellowship",
  description:
    "The key questions doctors should ask about curriculum, clinical exposure, faculty, fees, certification, and career support before joining a reproductive medicine fellowship.",
  image: "https://www.medfellowacademy.com/courses/reproductive-medicine.jpg",
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
    "@id": "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-reproductive-medicine-fellowship/",
  },
};

const CURRICULUM_TOPICS = [
  "Infertility evaluation and management", "Female and male infertility", "Reproductive endocrinology",
  "Ovulation induction", "IUI", "IVF and ICSI principles", "Embryology fundamentals",
  "Fertility preservation", "Reproductive ultrasound", "Reproductive genetics", "Recurrent pregnancy loss",
  "Endometriosis and fertility", "Ovarian reserve assessment", "Patient counseling",
  "Ethics and evidence-based practice",
];

const CLINICAL_QUESTIONS = [
  "Patient consultations", "Infertility case discussions", "Fertility investigations", "Ultrasound exposure",
  "IUI-related learning", "IVF treatment planning", "ART workflow exposure", "Embryology laboratory exposure",
  "Fertility preservation cases", "Supervised clinical training",
];

const CASE_VOLUME_QUESTIONS = [
  "How many fertility cases do fellows typically see?",
  "How frequently are case discussions conducted?",
  "Will I see both male and female infertility?",
  "Will I be exposed to different ART treatment pathways?",
  "Are complicated cases discussed?",
];

const IVF_QUESTIONS = [
  "IVF", "ICSI", "IUI", "Ovulation induction", "Embryo transfer", "Cryopreservation",
  "Treatment planning", "ART complications",
];

const FEE_ITEMS = [
  "Course access", "Live classes", "Recorded lectures", "Study material", "Assessments",
  "Clinical training", "Examination fees", "Certification", "Hospital attachment", "Administrative charges",
];

const FINAL_CHECKLIST = [
  "What exactly will I learn?",
  "Is the curriculum clinically relevant?",
  "How much clinical exposure is included?",
  "What does “hands-on” training actually mean?",
  "How many cases can fellows expect to encounter?",
  "Who are the faculty members?",
  "Is individual mentorship provided?",
  "Is the program online, offline, or hybrid?",
  "Can I continue working while studying?",
  "What are the eligibility requirements?",
  "Is there an entrance exam or interview?",
  "Who awards the fellowship certificate?",
  "What does the certificate represent?",
  "How are fellows assessed?",
  "Is IVF and embryology included?",
  "Is fertility preservation covered?",
  "Are research opportunities available?",
  "What is the complete cost?",
  "Are there additional charges?",
  "Is career support available?",
  "Can I speak to previous fellows?",
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
              <span>Questions to Ask Before Joining a Reproductive Medicine Fellowship</span>
            </div>

            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">
                Fellowship Guides
              </span>
              <span className="text-sm text-text-secondary">⏱️ 11 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Questions to Ask Before Joining a Reproductive Medicine Fellowship
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
                src="/courses/reproductive-medicine.jpg"
                alt="Questions to Ask Before Joining a Reproductive Medicine Fellowship"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Choosing a reproductive medicine fellowship is a major professional decision. Two programs may
                both be called a reproductive medicine fellowship course, yet differ significantly in curriculum
                depth, faculty access, clinical exposure, practical training, assessment, certification, and
                flexibility. Before paying your fees or accepting an offer, ask the right questions.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">What Will I Actually Learn?</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Ask for the complete curriculum rather than relying on a short course description. A
                comprehensive reproductive medicine fellowship may cover:
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
                Ask whether these subjects are taught in depth or simply introduced as individual topics, and
                what you should be able to understand or perform by the end of the fellowship. Also ask about
                the weekly time commitment — live class hours, recorded learning, case discussions,
                assignments, clinical training, examinations, and attendance requirements.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Ask About Clinical Exposure</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                A program may advertise practical learning, but you need to understand exactly what that means.
                Ask whether the fellowship provides:
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-6 not-prose">
                {CLINICAL_QUESTIONS.map((li) => (
                  <div key={li} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary">
                    <span className="text-secondary mt-0.5">✓</span>
                    <span>{li}</span>
                  </div>
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-4">
                Ask specifically: &quot;Which procedures will I personally get to observe, assist with, or
                perform under supervision?&quot; Do not accept vague statements such as &quot;extensive
                hands-on exposure&quot; without asking for details. Also ask about case volume:
              </p>
              <ul className="space-y-2 mb-8">
                {CASE_VOLUME_QUESTIONS.map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Understand Faculty and Mentorship</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Do not just ask whether the program has &quot;expert faculty.&quot; Ask who they are, what they
                practise, and how often fellows interact with them. Review their medical qualifications,
                reproductive medicine experience, fertility practice, academic experience, research background,
                and current clinical roles. Ask whether you will have opportunities for one-to-one mentoring,
                case discussions, clinical feedback, academic guidance, career discussions, and doubt-clearing
                sessions — and who you can contact if you have a clinical or academic question.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Ask About Online, Offline, or Hybrid Learning</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Ask exactly how the program is delivered. An online program may provide flexibility for
                academic learning; an offline program may provide greater access to an institutional clinical
                environment; a hybrid model combines online academic sessions with clinical or practical
                components. If you are a practising doctor, ask whether classes are held on weekends, whether
                sessions are recorded, whether missed sessions can be accessed later, how flexible the schedule
                is, whether clinical rotations are fixed or flexible, and whether attendance is mandatory for
                every session. Online academic learning and hands-on clinical training are not the same thing —
                ask whether clinical exposure is included separately and where it takes place.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Check Eligibility and Admission Requirements</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Do not wait until the final stage of admission to discover that you do not meet the eligibility
                criteria. Ask about MBBS or equivalent qualification, MD/MS/DNB or equivalent postgraduate
                qualification, Obstetrics and Gynecology specialization, medical registration, clinical
                experience, and any additional institutional requirements. Ask whether there is an entrance
                examination or interview, and — if you are practising outside India — whether your medical
                qualification and registration are accepted and whether the certificate can be used for the
                professional purpose you have in mind.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Understand the Certification</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Ask for the exact name of the awarding organization or institution, and whether the certificate
                represents a fellowship certificate, a postgraduate academic qualification, a continuing
                professional education credential, a hospital-based training certificate, or another form of
                professional certification — these are not necessarily interchangeable. Instead of asking only
                &quot;Is it internationally recognized?&quot;, ask: &quot;For which professional, academic,
                employment, or credentialing purposes can I use this certificate?&quot;
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Ask About Assessment, IVF Training &amp; Research</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                A good fellowship should not rely entirely on attendance. Ask whether the program includes
                module assessments, case-based questions, clinical assignments, case presentations, practical
                assessments, final examinations, and faculty feedback — and what happens if you fail an
                assessment. Ask whether the curriculum covers the clinical principles behind:
              </p>
              <div className="flex flex-wrap gap-2 mb-4 not-prose">
                {IVF_QUESTIONS.map((li) => (
                  <span key={li} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-[0.8125rem] font-medium">{li}</span>
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                Ask how much embryology is covered and whether fellows receive exposure to an IVF laboratory
                environment, whether fertility preservation is included, and whether fellows can participate in
                research — research methodology, journal clubs, literature reviews, case reports, clinical
                research, audit projects, conference presentations, and publication support.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Ask About Fees and Hidden Costs</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Do not compare programs using tuition fees alone. Ask whether the fee covers:
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
                Also ask about registration fees, examination fees, clinical rotation charges, certificate
                charges, travel expenses, accommodation, and equipment or workshop fees.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Understand Career Support &amp; Speak to Previous Fellows</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Ask whether the program provides job listings, resume support, interview preparation, employer
                connections, career counselling, and hospital referrals — and whether placement is guaranteed
                or simply supported. Ask where previous fellows have progressed after completing the program.
                One of the most useful steps is speaking with current or previous fellows about whether the
                curriculum was clinically useful, whether the advertised clinical exposure was actually
                provided, how accessible the faculty were, whether the workload was manageable, whether there
                were unexpected costs, and whether they would choose the same fellowship again.
              </p>

              <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg mb-8 not-prose">
                <p className="text-sm text-text-secondary leading-relaxed">
                  <strong>Watch for red flags:</strong> vague clinical training claims, unclear certification,
                  no transparent curriculum, and pressure to pay before you receive answers to important
                  questions about eligibility, curriculum, clinical exposure, fees, or certification.
                </p>
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Final Question Checklist</h2>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 not-prose">
                {FINAL_CHECKLIST.map((li) => (
                  <div key={li} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary">
                    <span className="text-secondary mt-0.5">✓</span>
                    <span>{li}</span>
                  </div>
                ))}
              </div>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Get Clear Answers Before You Enrol
                </h3>
                <p className="text-text-secondary mb-6">
                  Explore MedFellow Academy&apos;s Fellowship in Reproductive Medicine and review the program
                  structure, curriculum, learning format, and admission details.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/courses/fellowship-in-reproductive-medicine" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-center">
                    View Fellowship Details
                  </Link>
                  <Link href="/courses/best-fellowship-course-in-reproductive-medicine" className="inline-block px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all text-center">
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
            <TopicClusterLinks title="Reproductive Medicine Resources" links={CLUSTER_LINKS} />
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
              <Link href="/courses/best-fellowship-course-in-reproductive-medicine" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">Fellowship Guide</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Best Fellowship Course in Reproductive Medicine
                </h3>
                <p className="text-sm text-text-secondary">A complete guide to curriculum, eligibility, skills, learning options, and career pathways...</p>
              </Link>
              <Link href="/blog/how-to-choose-reproductive-medicine-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  How to Choose a Reproductive Medicine Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Compare curriculum, faculty, clinical exposure, and fees before enrolling...</p>
              </Link>
              <Link href="/blog/online-vs-offline-reproductive-medicine-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Online vs Offline Reproductive Medicine Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Compare learning flexibility, clinical exposure, practical training, and cost...</p>
              </Link>
              <Link href="/blog/career-opportunities-after-reproductive-medicine-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Career Planning</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Career Opportunities After a Reproductive Medicine Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Career pathways across fertility clinics, IVF centres, hospitals, research, and academia...</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

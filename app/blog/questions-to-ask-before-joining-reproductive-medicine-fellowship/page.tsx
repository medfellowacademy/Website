import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import TopicClusterLinks from "@/components/TopicClusterLinks";
import Link from "next/link";
import Image from "next/image";

const CLUSTER_LINKS = [
  { label: "Best Fellowship Course in Reproductive Medicine (Guide)", href: "/best-fellowship-course-in-reproductive-medicine", type: "guide" as const },
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
  keywords: "questions to ask before joining a reproductive medicine fellowship, reproductive medicine fellowship, reproductive medicine fellowship course, fellowship in reproductive medicine, best reproductive medicine fellowship",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-reproductive-medicine-fellowship/" },
  openGraph: {
    title: "Questions to Ask Before Joining a Reproductive Medicine Fellowship",
    description:
      "Explore key questions to ask before joining a reproductive medicine fellowship, including the course, clinical exposure, faculty, fees, certification, and career support.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-reproductive-medicine-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/courses/reproductive-medicine.jpg", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Questions to Ask Before Joining a Reproductive Medicine Fellowship",
    description: "Essential questions to ask about curriculum, clinical exposure, faculty, fees, and certification.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Questions to Ask Before Joining a Reproductive Medicine Fellowship",
  description:
    "Explore key questions to ask before joining a reproductive medicine fellowship, including the course, clinical exposure, faculty, fees, certification, and career support.",
  image: "https://www.medfellowacademy.com/courses/reproductive-medicine.jpg",
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
    "@id": "https://www.medfellowacademy.com/blog/questions-to-ask-before-joining-reproductive-medicine-fellowship/",
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
              <span className="text-sm text-text-secondary">⏱️ 9 min read</span>
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
                Choosing a reproductive medicine fellowship is a major professional decision. The right
                program can help you build advanced knowledge in infertility, assisted reproductive
                technology, reproductive endocrinology, fertility preservation, and fertility-focused clinical
                practice.
              </p>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-8">
                <p className="text-lg font-semibold text-primary mb-3">Key Takeaways</p>
                <ul className="space-y-2 text-text-secondary">
                  <li>✓ Two programs with the same title can differ significantly in what they actually deliver</li>
                  <li>✓ Ask specifically whether you will observe, assist, or perform procedures</li>
                  <li>✓ Clarify certification, assessment, and total fees before you pay</li>
                  <li>✓ Speak to previous fellows for an honest view of the program</li>
                </ul>
              </div>

              <p className="text-text-secondary leading-relaxed mb-8">
                But comparing fellowships based only on course name, duration, or fees can be misleading. Two
                programs may both be called a reproductive medicine fellowship course, yet differ
                significantly in curriculum depth, faculty access, clinical exposure, practical training,
                assessment, certification, and flexibility. Before paying your fees or accepting an offer,
                ask the right questions.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Start With the Right Questions
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                The first step is to understand exactly what the fellowship offers. Do not hesitate to ask
                detailed questions during your counselling call or admission process.
              </p>
              <p className="text-text-secondary leading-relaxed mb-2">
                <strong>What will I actually learn?</strong> Ask for the complete curriculum rather than
                relying on a short course description — including infertility evaluation, reproductive
                endocrinology, ovulation induction, IUI, IVF and ICSI principles, embryology fundamentals,
                fertility preservation, reproductive ultrasound, reproductive genetics, and patient
                counseling. Ask whether these subjects are taught in depth or simply introduced as individual
                topics.
              </p>
              <p className="text-text-secondary leading-relaxed mb-2">
                <strong>Are the learning outcomes clearly defined?</strong> A structured program should
                explain what you should be able to understand or perform by the end of the fellowship rather
                than simply listing modules.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                <strong>How much time will I need each week?</strong> This is particularly important if you
                are already practising. Ask about live class hours, recorded learning, case discussions,
                assignments, clinical training, examinations, and attendance requirements.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Ask About Clinical Exposure
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Clinical exposure is one of the most important areas to investigate before joining a
                reproductive medicine fellowship. A program may advertise practical learning, but you need to
                understand exactly what that means.
              </p>
              <p className="text-text-secondary leading-relaxed mb-2">
                <strong>How much clinical exposure is included?</strong> Ask whether the fellowship provides
                patient consultations, infertility case discussions, fertility investigations, ultrasound
                exposure, IUI-related learning, IVF treatment planning, ART workflow exposure, embryology
                laboratory exposure, and supervised clinical training.
              </p>
              <p className="text-text-secondary leading-relaxed mb-2">
                <strong>Will I observe, assist, or perform procedures?</strong> This is a critical question.
                There is a significant difference between watching a procedure, assisting a specialist,
                performing a procedure under supervision, and performing it independently. Do not accept vague
                statements such as &ldquo;extensive hands-on exposure&rdquo; without asking for details.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                <strong>What is the case volume?</strong> Ask how many fertility cases fellows typically see,
                how frequently case discussions are conducted, and whether you will be exposed to both male
                and female infertility and different ART treatment pathways. Case variety can be just as
                important as case volume.
              </p>

              <div className="relative w-full h-56 md:h-72 rounded-xl overflow-hidden my-10">
                <Image
                  src="/courses/reproductive-medicine.jpg"
                  alt="Evaluating faculty and clinical exposure before joining a reproductive medicine fellowship"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 700px"
                />
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Understand Faculty and Mentorship
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                The quality of faculty interaction can significantly influence your learning experience. Do
                not just ask whether the program has &ldquo;expert faculty.&rdquo; Ask who they are, what they
                practise, their reproductive medicine experience, research background, and current clinical
                roles. Ask whether you will get direct faculty mentorship — one-to-one mentoring, case
                discussions, clinical feedback, academic guidance, and doubt-clearing sessions — and how
                fellows are supported through faculty mentors, academic coordinators, or discussion groups.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Ask About Online, Offline, or Hybrid Learning
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Ask exactly how the program is delivered — do not judge the format by the label alone. If you
                are a practising doctor, ask whether classes are held on weekends, whether sessions are
                recorded, how flexible the schedule is, and whether attendance is mandatory for every session.
                Ask a separate question about whether online learning includes practical training: online
                academic learning and hands-on clinical training are not the same thing, so ask whether
                clinical exposure is included separately and where it takes place.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Check Eligibility, Certification, and Assessment
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Do not wait until the final stage of admission to discover that you do not meet the
                eligibility criteria. Ask about MBBS or postgraduate qualification requirements, Obstetrics
                and Gynecology specialization, medical registration, clinical experience, and whether there is
                an entrance examination or interview. If you are practising outside India, ask whether your
                medical qualification and registration are accepted.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                Ask for the exact name of the awarding organization, and whether the certificate represents a
                fellowship certificate, a postgraduate academic qualification, a continuing professional
                education credential, or another form of certification. If your goal is licensing or
                regulatory recognition in a specific country, verify requirements with the relevant medical
                regulator.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Ask whether the program includes module assessments, case-based questions, clinical
                assignments, case presentations, practical assessments, and final examinations — and what
                happens if you fail an assessment, including reassessment opportunities and minimum passing
                criteria.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Examine the IVF, Embryology, and Research Training
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Ask whether the curriculum covers the clinical principles behind IVF, ICSI, IUI, ovulation
                induction, embryo transfer, cryopreservation, and ART complications, and how much embryology
                is covered and whether fellows receive exposure to an IVF laboratory environment. Ask whether
                fertility preservation — oocyte, sperm, and embryo cryopreservation and their clinical
                indications — is included. If academic development matters to you, also ask whether fellows
                can participate in research methodology, journal clubs, literature reviews, case reports, or
                audit projects, and whether a research project is required.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Ask About Fees, Career Support, and Previous Fellows
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Do not compare programs using tuition fees alone. Ask whether the fee covers course access,
                live classes, recorded lectures, study material, assessments, clinical training, examination
                fees, certification, and hospital attachment — and ask about additional charges such as
                registration, clinical rotation, or equipment fees.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                Ask whether the program provides job listings, resume support, interview preparation, employer
                connections, or career counselling, and whether placement is guaranteed or simply supported.
                Ask where previous fellows have progressed after completing the program.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                One of the most useful steps before joining a fellowship is speaking with current or previous
                fellows. Ask them whether the curriculum was clinically useful, whether the advertised
                clinical exposure was actually provided, how accessible the faculty were, and whether they
                would choose the same fellowship again.
              </p>

              <div className="bg-primary/5 p-8 rounded-xl mb-8">
                <p className="text-lg leading-relaxed text-text-secondary">
                  The best reproductive medicine fellowship is not necessarily the one with the most
                  impressive marketing or the lowest fee. It is the program that clearly matches your
                  professional goals and gives you a realistic understanding of what you will learn and how
                  you will learn it. Ask specific questions and demand specific answers.
                </p>
              </div>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Ready to Get Your Questions Answered?
                </h3>
                <p className="text-text-secondary mb-6">
                  Explore the Fellowship in Reproductive Medicine at MedFellow Academy and review the
                  curriculum, clinical exposure, faculty, and admission details.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/courses/fellowship-in-reproductive-medicine" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-center">
                    View Fellowship Details
                  </Link>
                  <Link href="/best-fellowship-course-in-reproductive-medicine" className="inline-block px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all text-center">
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
            <TopicClusterLinks title="Reproductive Medicine Fellowship Resources" links={CLUSTER_LINKS} />
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
              <Link href="/best-fellowship-course-in-reproductive-medicine" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">Fellowship Guide</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Best Fellowship Course in Reproductive Medicine
                </h3>
                <p className="text-sm text-text-secondary">Compare fellowship options and choose the right program...</p>
              </Link>
              <Link href="/blog/how-to-choose-reproductive-medicine-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  How to Choose a Reproductive Medicine Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Learn how to compare fellowship programs with confidence...</p>
              </Link>
              <Link href="/blog/online-vs-offline-reproductive-medicine-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Online vs Offline Reproductive Medicine Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Compare learning formats for busy healthcare professionals...</p>
              </Link>
              <Link href="/blog/career-opportunities-after-reproductive-medicine-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Career Planning</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Career Opportunities After a Reproductive Medicine Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Discover career pathways after completing fellowship training...</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

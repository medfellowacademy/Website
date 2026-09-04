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
  title: "How to Choose a Reproductive Medicine Fellowship: Best Guide | MedFellow Academy",
  description:
    "Learn how to choose a reproductive medicine fellowship, compare the best reproductive medicine fellowship options, explore course details, and understand fellowship training.",
  keywords:
    "how to choose a reproductive medicine fellowship, reproductive medicine fellowship, best reproductive medicine fellowship, reproductive medicine fellowship course, fellowship in reproductive medicine",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/how-to-choose-reproductive-medicine-fellowship/" },
  openGraph: {
    title: "How to Choose a Reproductive Medicine Fellowship",
    description:
      "Compare curriculum, clinical exposure, faculty, practical training, learning format, eligibility, certification, and fees before choosing a fellowship.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/how-to-choose-reproductive-medicine-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Choose a Reproductive Medicine Fellowship",
    description: "A practical guide to comparing curriculum, faculty, clinical exposure, and career relevance.",
  },
};

const FAQS = [
  {
    q: "How do I choose the best reproductive medicine fellowship?",
    a: "Compare the curriculum, clinical exposure, faculty expertise, practical training, learning format, eligibility, assessment, certification, duration, and fees. Most importantly, check whether the program matches your career goals.",
  },
  {
    q: "What should a reproductive medicine fellowship curriculum include?",
    a: "A comprehensive curriculum may include infertility evaluation, reproductive endocrinology, ART, IVF, IUI, ICSI, embryology basics, fertility preservation, reproductive ultrasound, reproductive genetics, patient counseling, ethics, and clinical case management.",
  },
  {
    q: "Is clinical exposure important in a reproductive medicine fellowship?",
    a: "Yes. Reproductive medicine is highly clinical, so exposure to real cases, case discussions, procedures, fertility investigations, ART workflows, and supervised practical learning can add significant value.",
  },
  {
    q: "Is an online reproductive medicine fellowship enough for clinical training?",
    a: "It depends on the program. Online learning can be effective for structured academic education, but it should not automatically be considered equivalent to hands-on clinical training. Check exactly what practical and clinical components are included.",
  },
  {
    q: "Should I choose an online or offline reproductive medicine fellowship?",
    a: "Choose based on your career requirements. Offline programs may provide greater on-site clinical exposure, while online programs can offer flexibility for working doctors. Hybrid programs may combine academic flexibility with practical exposure.",
  },
  {
    q: "What questions should I ask before joining a reproductive medicine fellowship?",
    a: "Ask about curriculum, case volume, clinical exposure, faculty interaction, practical procedures, eligibility, assessment, certification, duration, learning hours, fees, and opportunities to interact with previous fellows.",
  },
  {
    q: "Does a reproductive medicine fellowship need to include embryology?",
    a: "Embryology is an important part of ART, so understanding its clinical relevance can be valuable for doctors pursuing reproductive medicine. The depth of embryology training should match the fellowship's stated objectives.",
  },
  {
    q: "Does a longer reproductive medicine fellowship mean better training?",
    a: "Not necessarily. Duration should be evaluated alongside curriculum depth, clinical exposure, faculty interaction, practical training, assessment, and learning outcomes.",
  },
  {
    q: "What should I check about a fellowship certificate?",
    a: "Check who awards it, the exact credential provided, completion requirements, assessment process, and whether it meets your intended professional or academic purpose. Do not assume that a fellowship certificate automatically provides regulatory recognition or specialist registration.",
  },
  {
    q: "How can I know whether a fellowship offers genuine hands-on training?",
    a: "Ask for specific details about the procedures, number or range of cases, training location, supervision, simulation, and whether fellows observe, assist, or independently perform procedures.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Choose a Reproductive Medicine Fellowship",
  description:
    "Learn how to choose a reproductive medicine fellowship by comparing curriculum, clinical exposure, faculty, practical training, learning format, eligibility, certification, and fees.",
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
    "@id": "https://www.medfellowacademy.com/blog/how-to-choose-reproductive-medicine-fellowship/",
  },
};

const GOALS = [
  "Develop expertise in infertility evaluation and management",
  "Learn the principles of assisted reproductive technology",
  "Build knowledge in reproductive endocrinology",
  "Understand IVF, IUI, ICSI, and related fertility treatments",
  "Develop skills in fertility preservation",
  "Expand your existing obstetrics and gynecology practice",
  "Work in fertility clinics or IVF centers",
  "Strengthen your academic or research profile",
  "Develop a focused career in reproductive medicine",
];

const CURRICULUM = [
  { title: "Infertility Evaluation and Management", text: "Male and female infertility, reproductive history, fertility investigations, ovulatory disorders, diminished ovarian reserve, endometriosis, and recurrent pregnancy loss." },
  { title: "Assisted Reproductive Technology", text: "Principles and clinical workflow of ART — ovulation induction, IUI, IVF, ICSI, embryo transfer, cryopreservation, and treatment planning." },
  { title: "Reproductive Endocrinology", text: "Hormonal regulation, ovarian function, endocrine disorders affecting fertility, and interpretation of relevant investigations." },
  { title: "Embryology and IVF Laboratory Basics", text: "Fertilization, embryo development, embryo assessment, cryopreservation, and how the IVF laboratory interacts with patient management." },
  { title: "Fertility Preservation", text: "Oocyte, sperm, and embryo cryopreservation concepts and the clinical indications for fertility preservation, including medical and social considerations." },
  { title: "Reproductive Ultrasound", text: "Ultrasound-based fertility assessment for doctors who intend to develop fertility-focused clinical skills." },
  { title: "Ethics and Patient Counseling", text: "Patient counseling, informed decision-making, ethical considerations, documentation, and communication." },
];

const CLINICAL_QUESTIONS = [
  "Which procedures are included?",
  "Who supervises the training?",
  "How many cases can fellows expect to observe or participate in?",
  "Is simulation available?",
  "Is clinical exposure mandatory?",
  "Where does the practical training take place?",
];

const ELIGIBILITY_CHECKS = [
  "Required medical qualification",
  "Postgraduate qualification requirements",
  "Obstetrics and Gynecology specialization requirements",
  "Medical registration requirements",
  "Clinical experience requirements",
  "Entrance examination requirements, if applicable",
  "Interview requirements",
  "Any institution-specific conditions",
];

const CHECKLIST = [
  "Does the curriculum match my career goals?",
  "Does the program cover infertility and ART comprehensively?",
  "Is the clinical exposure clearly defined?",
  "Are the faculty experienced in reproductive medicine?",
  "Can I interact with faculty and mentors?",
  "Is the learning format suitable for my schedule?",
  "Do I meet the eligibility requirements?",
  "Is the certification clearly explained?",
  "Are assessments structured?",
  "Does the program include relevant practical learning?",
  "Is embryology included at an appropriate level?",
  "Are ethics and patient counseling covered?",
  "Is research methodology included if I need it?",
  "Is the total cost transparent?",
  "Have I reviewed feedback from previous fellows?",
];

const RED_FLAGS = [
  "Makes broad career promises without explaining the training",
  "Does not clearly publish its curriculum",
  "Is vague about faculty qualifications",
  "Uses “hands-on” claims without explaining the practical component",
  "Does not clearly state eligibility requirements",
  "Provides unclear certification details",
  "Has no defined assessment system",
  "Does not explain the total cost",
  "Cannot explain where clinical exposure takes place",
  "Avoids questions about previous trainee experiences",
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
              <span>How to Choose a Reproductive Medicine Fellowship</span>
            </div>

            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">
                Fellowship Guides
              </span>
              <span className="text-sm text-text-secondary">⏱️ 11 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              How to Choose a Reproductive Medicine Fellowship
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
                alt="How to Choose a Reproductive Medicine Fellowship"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Choosing a reproductive medicine fellowship is an important career decision for doctors who
                want to develop advanced expertise in infertility, assisted reproductive technology,
                reproductive endocrinology, fertility preservation, and related areas of reproductive
                healthcare. The best fellowship is not necessarily the one with the longest duration or the
                highest fee — the right choice depends on curriculum quality, clinical exposure, faculty
                expertise, practical training, learning format, eligibility, assessment, certification, and how
                well the program fits your career goals.
              </p>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-8">
                <p className="text-lg font-semibold text-primary mb-3">Key Takeaways</p>
                <ul className="space-y-2 text-text-secondary">
                  <li>✓ Start with your career goals, then match the program to them</li>
                  <li>✓ Review the full curriculum — not the course title</li>
                  <li>✓ Ask exactly what &quot;clinical exposure&quot; and &quot;hands-on&quot; mean in practice</li>
                  <li>✓ Verify eligibility, certification, and total cost before you pay</li>
                </ul>
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Start With Your Career Goals</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Before comparing fellowship programs, first decide what you want to achieve from the training.
                A fellowship may be suitable if you want to:
              </p>
              <ul className="space-y-2 mb-8">
                {GOALS.map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
              <p className="text-text-secondary leading-relaxed mb-8">
                Your career objective should guide the rest of your decision. A doctor looking for advanced
                clinical exposure may need a different fellowship from a working doctor primarily seeking
                structured academic training.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Evaluate the Fellowship Curriculum</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                The curriculum is one of the strongest indicators of quality. Do not select a program based
                only on its title — review the modules, learning outcomes, clinical components, and assessment
                structure. A well-designed curriculum should provide relevant coverage of:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8 not-prose">
                {CURRICULUM.map((m) => (
                  <div key={m.title} className="card p-4">
                    <h3 className="text-[0.9375rem] font-bold text-primary mb-1.5">{m.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{m.text}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Prioritize Clinical Exposure</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                One of the most important questions to ask is: how much real clinical exposure does the
                fellowship provide? Look for opportunities to learn about infertility consultations, fertility
                investigations, ovulation induction, IUI workflows, IVF treatment planning, ultrasound-based
                assessment, oocyte retrieval principles, embryo transfer, fertility preservation, ART-related
                complications, patient counseling, and case-based decision-making.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                Do not assume that the phrase &quot;practical training&quot; automatically means independent
                procedural experience. Ask:
              </p>
              <ul className="space-y-2 mb-8">
                {CLINICAL_QUESTIONS.map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Compare Faculty and Mentorship</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Review the qualifications, clinical experience, academic background, research involvement, and
                specialization of the faculty members — and more importantly, find out how much access fellows
                receive to faculty. Strong mentorship helps you discuss complex fertility cases, understand
                treatment options, improve clinical reasoning, learn from real-world experience, receive
                feedback, and build professional relationships. A fellowship should provide opportunities for
                meaningful interaction rather than relying entirely on prerecorded or self-directed learning.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Choose the Right Learning Format</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Reproductive medicine fellowships may be offered in offline, online, or hybrid formats. An
                offline program can provide access to an institutional clinical environment, faculty, patients,
                procedures, and on-site facilities. An online program can offer greater flexibility for working
                doctors and structured academic learning without relocation — but check whether practical and
                clinical exposure is included separately. A hybrid fellowship combines online academic learning
                with practical or clinical components and can provide a useful balance for working doctors.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Verify Eligibility Before Applying</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Eligibility requirements can differ significantly between programs. Before applying, check:
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-6 not-prose">
                {ELIGIBILITY_CHECKS.map((li) => (
                  <div key={li} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary">
                    <span className="text-secondary mt-0.5">✓</span>
                    <span>{li}</span>
                  </div>
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                Some formal postgraduate fellowship pathways in India have specific eligibility and admission
                requirements. Always verify the current eligibility requirements directly with the institution
                before applying.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Check Recognition and Certification</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Do not evaluate a fellowship only by the word &quot;certificate.&quot; Find out who awards the
                certificate, the exact qualification or credential, whether there is a formal assessment,
                whether the program is affiliated with an academic institution, and whether the qualification
                is relevant to your intended career pathway. A fellowship certificate should never automatically
                be assumed to provide specialist registration or a license to practice in a particular
                jurisdiction.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Review the Assessment System, Duration &amp; Costs</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                A strong fellowship should have clearly defined learning outcomes and a method of evaluating
                whether those outcomes have been achieved — module assessments, case-based discussions, clinical
                assignments, case presentations, written examinations, practical assessments, and faculty
                feedback. Compare fellowship duration against curriculum depth, number of clinical cases,
                practical exposure, faculty interaction, assessment requirements, weekly study commitment, and
                research opportunities rather than assuming a longer fellowship is automatically better.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Consider tuition fees along with travel, accommodation, clinical attachment costs, study
                materials, examination fees, and other administrative charges. A transparent fee structure
                makes it easier to compare programs fairly.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Fellowship Selection Checklist</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Before enrolling, make sure you can answer &quot;yes&quot; to most of these questions:
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 not-prose">
                {CHECKLIST.map((li) => (
                  <div key={li} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary">
                    <span className="text-secondary mt-0.5">✓</span>
                    <span>{li}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Red Flags to Watch For</h2>
              <p className="text-text-secondary leading-relaxed mb-4">Be cautious if a program:</p>
              <ul className="space-y-2 mb-8">
                {RED_FLAGS.map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-accent text-xl mt-1">✕</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Compare Reproductive Medicine Fellowships
                </h3>
                <p className="text-text-secondary mb-6">
                  Explore MedFellow Academy&apos;s Fellowship in Reproductive Medicine and review the
                  curriculum, eligibility, duration, learning format, and admission details before applying.
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
              <Link href="/blog/questions-to-ask-before-joining-reproductive-medicine-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Questions to Ask Before Joining a Reproductive Medicine Fellowship
                </h3>
                <p className="text-sm text-text-secondary">A practical checklist to evaluate any fellowship provider before you enrol...</p>
              </Link>
              <Link href="/blog/online-vs-offline-reproductive-medicine-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Online vs Offline Reproductive Medicine Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Compare learning flexibility, clinical exposure, practical training, and cost...</p>
              </Link>
              <Link href="/blog/reproductive-medicine-fellowship-curriculum" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Clinical Skills</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Reproductive Medicine Fellowship Curriculum: What Will You Learn?
                </h3>
                <p className="text-sm text-text-secondary">The major subjects and clinical skills covered in fellowship training...</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

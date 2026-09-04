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
  title: "Reproductive Medicine Fellowship Curriculum: What You Learn | MedFellow Academy",
  description:
    "Explore the reproductive medicine fellowship curriculum, including infertility, IVF, ICSI, embryology, fertility preservation, ultrasound, genetics and clinical skills.",
  keywords:
    "reproductive medicine fellowship curriculum, reproductive medicine fellowship, reproductive medicine fellowship course, fellowship in reproductive medicine, skills you learn during a reproductive medicine fellowship",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/reproductive-medicine-fellowship-curriculum/" },
  openGraph: {
    title: "Reproductive Medicine Fellowship Curriculum: What Will You Learn?",
    description:
      "The major subjects covered in reproductive medicine fellowship training and the clinical skills to look for when comparing programs.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/reproductive-medicine-fellowship-curriculum/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reproductive Medicine Fellowship Curriculum: What Will You Learn?",
    description: "From reproductive physiology to ART, embryology, fertility preservation, genetics, and evidence-based practice.",
  },
};

const FAQS = [
  {
    q: "What is included in a reproductive medicine fellowship curriculum?",
    a: "A comprehensive curriculum may include infertility evaluation, reproductive endocrinology, male and female infertility, ovulation induction, IUI, IVF, ICSI, embryology, fertility preservation, reproductive ultrasound, genetics, recurrent pregnancy loss, endometriosis, counseling, ART complications, and research methodology.",
  },
  {
    q: "Does a reproductive medicine fellowship teach IVF?",
    a: "Many reproductive medicine fellowships cover the clinical principles of IVF, including patient selection, ovarian stimulation, monitoring, oocyte retrieval, fertilization, embryo development, transfer, cryopreservation, and treatment planning. The depth of training varies by program.",
  },
  {
    q: "Is embryology part of reproductive medicine fellowship training?",
    a: "Embryology is commonly relevant to reproductive medicine because fertility specialists work closely with IVF laboratories. Programs may cover fertilization, embryo development, embryo assessment, cryopreservation, and laboratory processes at different levels of depth.",
  },
  {
    q: "Will I learn IUI and ovulation induction during the fellowship?",
    a: "Many programs include ovulation induction and IUI as part of ART and infertility management training. Ask whether these topics are taught theoretically or include supervised clinical exposure.",
  },
  {
    q: "Does the curriculum include fertility preservation?",
    a: "Fertility preservation may include oocyte, sperm, and embryo cryopreservation, along with patient selection, indications, counseling, and treatment planning.",
  },
  {
    q: "Is reproductive ultrasound included in a fellowship curriculum?",
    a: "It can be. Common topics include follicular monitoring, antral follicle count, ovarian assessment, and endometrial evaluation. If you need hands-on ultrasound training, verify whether supervised scanning is included.",
  },
  {
    q: "Will a reproductive medicine fellowship teach male infertility?",
    a: "A comprehensive program should address both male and female infertility. Male infertility topics may include semen analysis, hormonal evaluation, sperm disorders, genetic considerations, and fertility preservation.",
  },
  {
    q: "Does the curriculum cover reproductive genetics?",
    a: "Many advanced programs introduce reproductive genetics, including genetic causes of infertility, recurrent pregnancy loss, genetic counseling principles, and preimplantation genetic testing concepts.",
  },
  {
    q: "Does every reproductive medicine fellowship provide hands-on training?",
    a: "No. The amount and type of practical exposure varies. Before enrolling, ask specifically about procedures, case volume, supervision, training location, and whether fellows observe, assist, or perform procedures.",
  },
  {
    q: "How do I compare two reproductive medicine fellowship curricula?",
    a: "Compare the depth of infertility training, ART, IVF, embryology, ultrasound, fertility preservation, genetics, clinical exposure, faculty, assessment, research, and practical training. A longer subject list does not necessarily mean better training.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Reproductive Medicine Fellowship Curriculum: What Will You Learn?",
  description:
    "The major subjects commonly covered in reproductive medicine fellowship training and the clinical skills to look for when comparing programs.",
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
    "@id": "https://www.medfellowacademy.com/blog/reproductive-medicine-fellowship-curriculum/",
  },
};

const CURRICULUM_OVERVIEW = [
  "Reproductive physiology", "Infertility evaluation", "Female infertility", "Male infertility",
  "Reproductive endocrinology", "Ovulation disorders", "Ovarian reserve assessment", "Reproductive ultrasound",
  "Ovulation induction", "Intrauterine insemination", "IVF and ICSI", "Embryology", "Fertility preservation",
  "Reproductive genetics", "Recurrent pregnancy loss", "Endometriosis and fertility", "Fertility counseling",
  "ART complications", "Ethics and evidence-based medicine", "Research methodology",
];

const MODULES = [
  { title: "Foundations of Reproductive Medicine", text: "Female and male reproductive anatomy, gametogenesis, follicular development, ovulation, menstrual cycle physiology, spermatogenesis, fertilization, implantation, hormonal regulation, and reproductive aging." },
  { title: "Infertility Evaluation", text: "Infertility history, female and male fertility assessment, ovulatory evaluation, ovarian reserve, tubal and uterine factors, semen analysis, endocrine investigations, imaging, and genetic evaluation when indicated." },
  { title: "Female & Male Infertility", text: "Ovulatory disorders, diminished ovarian reserve, endometriosis, tubal factors, uterine abnormalities, PCOS, recurrent pregnancy loss, unexplained infertility — plus semen analysis, oligospermia, azoospermia, hormonal evaluation, varicocele, genetic factors, and sperm retrieval concepts." },
  { title: "Reproductive Endocrinology", text: "Hypothalamic-pituitary-ovarian axis, gonadotropins, estrogen and progesterone, prolactin and thyroid disorders, hyperandrogenism, ovulatory dysfunction, premature ovarian insufficiency, PCOS, luteal function, and hormonal evaluation." },
  { title: "Ovulation Induction & IUI", text: "Patient selection, treatment indications, ovulation monitoring, follicular tracking, medication principles, trigger timing, cycle monitoring, multiple pregnancy risk, ovarian hyperstimulation considerations, sperm preparation, and timing of insemination." },
  { title: "IVF, ICSI and ART", text: "Controlled ovarian stimulation, follicular monitoring, trigger protocols, oocyte retrieval, sperm preparation, fertilization, embryo culture, embryo transfer, cryopreservation, frozen embryo transfer, ART complications, and treatment outcome assessment." },
  { title: "Embryology & IVF Laboratory Basics", text: "Oocyte biology, sperm preparation, fertilization, embryo development, embryo grading, embryo culture, cryopreservation, thawing principles, embryo transfer considerations, and laboratory quality control." },
  { title: "Fertility Preservation", text: "Oocyte, sperm, and embryo cryopreservation; fertility preservation before medical treatment; age-related fertility preservation; counseling and patient selection; and preservation planning." },
  { title: "Reproductive Ultrasound", text: "Antral follicle count, ovarian morphology, follicular monitoring, endometrial assessment, uterine evaluation, identification of common pelvic abnormalities, and monitoring before fertility procedures." },
  { title: "Reproductive Genetics", text: "Genetic causes of infertility, chromosomal abnormalities, recurrent pregnancy loss, genetic counseling principles, preimplantation genetic testing concepts, testing indications, and family history assessment." },
  { title: "Recurrent Pregnancy Loss & Endometriosis", text: "Systematic evaluation of maternal, uterine, endocrine, genetic, and immunological factors; evidence-based management; and how endometriosis influences fertility decisions and IVF considerations." },
  { title: "Counseling, Ethics & ART Complications", text: "Informed consent, shared decision-making, success-rate and risk communication, donor conception considerations, confidentiality, ovarian hyperstimulation syndrome, multiple pregnancy, procedure-related complications, and recurrent treatment failure." },
];

const SKILLS_ASSESSMENT = [
  "Take a structured infertility history",
  "Identify relevant fertility risk factors",
  "Interpret fertility investigations",
  "Assess ovarian reserve",
  "Evaluate male and female infertility factors",
  "Recognize when additional investigations are required",
];

const SKILLS_DECISION = [
  "Identify potential causes of infertility",
  "Interpret clinical findings",
  "Discuss treatment options",
  "Select appropriate treatment pathways",
  "Assess treatment response",
  "Recognize when referral or advanced intervention is required",
];

const DELIVERY = [
  { format: "Online Learning", text: "Live lectures, recorded sessions, digital study material, virtual case discussions, online assessments, and faculty interaction." },
  { format: "Offline Learning", text: "Classroom teaching, hospital-based learning, clinical case discussions, procedure observation, practical sessions, and direct faculty mentoring." },
  { format: "Hybrid Learning", text: "Online academic learning combined with offline clinical or practical exposure — a balance of flexibility and applied learning when the clinical component is clearly defined." },
];

const EVALUATE_QUESTIONS = [
  "How many hours are dedicated to each major topic?",
  "Are there clinical case discussions?",
  "How much practical exposure is included?",
  "Is ultrasound training included?",
  "Is IVF laboratory exposure available?",
  "Are faculty members experienced fertility specialists?",
  "Are assessments conducted throughout the program?",
  "Is research included?",
  "Are recorded sessions available?",
  "Can working doctors complete the program alongside clinical practice?",
];

const QUALITY_ROWS = [
  { area: "Infertility", look: "Comprehensive male and female evaluation" },
  { area: "Reproductive endocrinology", look: "Hormonal and ovulatory disorders" },
  { area: "ART", look: "IVF, ICSI, IUI and treatment planning" },
  { area: "Embryology", look: "Fertilization, embryo development and cryopreservation" },
  { area: "Ultrasound", look: "Follicular and reproductive assessment" },
  { area: "Fertility preservation", look: "Oocyte, sperm and embryo preservation" },
  { area: "Genetics", look: "Genetic evaluation and counseling principles" },
  { area: "Recurrent loss", look: "Structured evidence-based evaluation" },
  { area: "Endometriosis", look: "Fertility-focused management" },
  { area: "Counseling", look: "Patient communication and informed consent" },
  { area: "Complications", look: "Recognition and management principles" },
  { area: "Research", look: "Evidence-based practice and research methodology" },
  { area: "Assessment", look: "Structured evaluation of learning" },
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
              <span>Reproductive Medicine Fellowship Curriculum</span>
            </div>

            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">
                Clinical Skills
              </span>
              <span className="text-sm text-text-secondary">⏱️ 12 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Reproductive Medicine Fellowship Curriculum: What Will You Learn?
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
                alt="Reproductive Medicine Fellowship Curriculum: What Will You Learn?"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                A reproductive medicine fellowship curriculum is designed to help doctors build advanced
                knowledge in infertility evaluation, reproductive endocrinology, assisted reproductive
                technology, fertility preservation, embryology, reproductive ultrasound, and evidence-based
                fertility care. Fellowship curricula vary considerably between institutions, so it is important
                to understand what you will actually learn, how the curriculum is delivered, and how the
                knowledge can support your professional goals.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Understand the Reproductive Medicine Curriculum</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                A comprehensive curriculum should progress from the fundamentals of human reproduction to
                advanced infertility management and assisted reproductive technology. Depending on the
                institution, the curriculum may include:
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 not-prose">
                {CURRICULUM_OVERVIEW.map((li) => (
                  <div key={li} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary">
                    <span className="text-secondary mt-0.5">✓</span>
                    <span>{li}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Curriculum Modules in Detail</h2>
              <div className="space-y-4 mb-8 not-prose">
                {MODULES.map((m, i) => (
                  <div key={m.title} className="card p-5">
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#15401E] text-white text-[0.8125rem] font-bold flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="text-[1rem] font-bold text-primary mb-1">{m.title}</h3>
                        <p className="text-sm text-text-secondary leading-relaxed">{m.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Skills You Learn During the Fellowship</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Depending on the program&apos;s structure and clinical exposure, skills may include:
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-6 not-prose">
                <div className="card p-5">
                  <h3 className="text-[0.9375rem] font-bold text-primary mb-3">Fertility Assessment Skills</h3>
                  <div className="space-y-1.5">
                    {SKILLS_ASSESSMENT.map((li) => (
                      <div key={li} className="flex items-start gap-2 text-[0.8125rem] text-text-secondary">
                        <span className="text-secondary mt-0.5">✓</span>
                        <span>{li}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="card p-5">
                  <h3 className="text-[0.9375rem] font-bold text-primary mb-3">Clinical Decision-Making Skills</h3>
                  <div className="space-y-1.5">
                    {SKILLS_DECISION.map((li) => (
                      <div key={li} className="flex items-start gap-2 text-[0.8125rem] text-text-secondary">
                        <span className="text-secondary mt-0.5">✓</span>
                        <span>{li}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                Training may also build ART knowledge and treatment planning (ovulation induction, IUI, IVF,
                ICSI, embryo transfer, cryopreservation, ART protocols, treatment monitoring) and patient
                counseling skills around treatment expectations, success rates, risks, fertility preservation,
                ART options, emotional considerations, and shared decision-making. The exact procedures and
                level of independent clinical responsibility depend on the fellowship and applicable
                professional regulations.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Evidence-Based Practice &amp; Research</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Modern fertility practice changes rapidly, so a good fellowship should teach doctors how to
                evaluate current evidence rather than rely only on traditional protocols — evidence-based
                medicine, clinical guidelines, research interpretation, journal appraisal, treatment outcome
                analysis, and emerging reproductive technologies. Some fellowships also include research
                methodology, biostatistics, literature reviews, journal clubs, clinical research, case reports,
                research projects, scientific presentations, and publication principles.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">How Is the Curriculum Usually Delivered?</h2>
              <div className="grid sm:grid-cols-3 gap-4 mb-8 not-prose">
                {DELIVERY.map((d) => (
                  <div key={d.format} className="card p-4">
                    <h3 className="text-[0.9375rem] font-bold text-primary mb-1.5">{d.format}</h3>
                    <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{d.text}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">How to Evaluate a Fellowship Curriculum</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Not every curriculum with a long list of subjects provides comprehensive training. Before
                joining, ask:
              </p>
              <ul className="space-y-2 mb-8">
                {EVALUATE_QUESTIONS.map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">What Should a Good Fellowship Curriculum Include?</h2>
              <div className="overflow-x-auto rounded-lg border border-gray-200 mb-8 not-prose">
                <table className="w-full text-sm text-left">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Curriculum Area</th>
                      <th className="px-4 py-3 font-semibold">What to Look For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {QUALITY_ROWS.map((r, i) => (
                      <tr key={r.area} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 font-medium text-primary border-t border-gray-100">{r.area}</td>
                        <td className="px-4 py-3 text-text-secondary border-t border-gray-100">{r.look}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Who Can Benefit From This Training?</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Depending on the program&apos;s eligibility criteria, reproductive medicine fellowship training
                may be suitable for obstetricians and gynecologists, doctors with postgraduate training in
                Obstetrics and Gynecology, doctors working in fertility clinics, gynecologists planning to
                expand into fertility care, doctors interested in reproductive endocrinology, and physicians
                seeking advanced ART knowledge. Always check the specific eligibility requirements of the
                fellowship you are considering.
              </p>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Build Your Reproductive Medicine Expertise
                </h3>
                <p className="text-text-secondary mb-6">
                  Review the MedFellow Academy Fellowship in Reproductive Medicine curriculum and discover how
                  the program can fit your professional learning goals.
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
                <p className="text-sm text-text-secondary">The key factors to evaluate when choosing a program...</p>
              </Link>
              <Link href="/blog/questions-to-ask-before-joining-reproductive-medicine-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Questions to Ask Before Joining a Reproductive Medicine Fellowship
                </h3>
                <p className="text-sm text-text-secondary">The essential questions to ask before enrolling...</p>
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

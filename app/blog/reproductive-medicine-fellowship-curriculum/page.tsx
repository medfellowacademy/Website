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
  title: "Reproductive Medicine Fellowship Curriculum: What You Learn | MedFellow Academy",
  description:
    "Explore the reproductive medicine fellowship curriculum, including infertility, IVF, ICSI, embryology, fertility preservation, ultrasound, genetics and clinical skills.",
  keywords: "reproductive medicine fellowship curriculum, reproductive medicine fellowship, reproductive medicine fellowship course, fellowship in reproductive medicine, skills you learn during a reproductive medicine fellowship",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/reproductive-medicine-fellowship-curriculum/" },
  openGraph: {
    title: "Reproductive Medicine Fellowship Curriculum: What Will You Learn?",
    description:
      "Explore the reproductive medicine fellowship curriculum, including infertility, IVF, ICSI, embryology, fertility preservation, ultrasound, genetics and clinical skills.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/reproductive-medicine-fellowship-curriculum/",
    images: [{ url: "https://www.medfellowacademy.com/courses/reproductive-medicine.jpg", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reproductive Medicine Fellowship Curriculum: What Will You Learn?",
    description: "Infertility, IVF, ICSI, embryology, fertility preservation, ultrasound, and genetics.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Reproductive Medicine Fellowship Curriculum: What Will You Learn?",
  description:
    "Explore the reproductive medicine fellowship curriculum, including infertility, IVF, ICSI, embryology, fertility preservation, ultrasound, genetics and clinical skills.",
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
    "@id": "https://www.medfellowacademy.com/blog/reproductive-medicine-fellowship-curriculum/",
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
    q: "Is reproductive ultrasound included in a fellowship curriculum?",
    a: "It can be. Common topics include follicular monitoring, antral follicle count, ovarian assessment, and endometrial evaluation. If you need hands-on ultrasound training, verify whether supervised scanning is included.",
  },
  {
    q: "Will a reproductive medicine fellowship teach male infertility?",
    a: "A comprehensive program should address both male and female infertility. Male infertility topics may include semen analysis, hormonal evaluation, sperm disorders, genetic considerations, and fertility preservation.",
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

const CORE_MODULES = [
  "Reproductive physiology and gametogenesis",
  "Female and male infertility evaluation",
  "Reproductive endocrinology",
  "Ovarian reserve assessment",
  "Reproductive ultrasound",
  "Ovulation induction and IUI",
  "IVF and ICSI",
  "Embryology and IVF laboratory basics",
  "Fertility preservation",
  "Reproductive genetics",
  "Recurrent pregnancy loss",
  "Endometriosis and fertility",
  "Fertility counseling and ethics",
  "ART complications",
  "Research methodology",
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
              <span>Reproductive Medicine Fellowship Curriculum: What Will You Learn?</span>
            </div>

            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">
                Fellowship Guides
              </span>
              <span className="text-sm text-text-secondary">⏱️ 10 min read</span>
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
                alt="Reproductive Medicine Fellowship Curriculum - What Will You Learn"
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
                fertility care.
              </p>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-8">
                <p className="text-lg font-semibold text-primary mb-3">Key Takeaways</p>
                <ul className="space-y-2 text-text-secondary">
                  <li>✓ Curricula vary widely — some are purely academic, others include clinical exposure</li>
                  <li>✓ A strong program covers both female and male infertility, not just one side</li>
                  <li>✓ Embryology and IVF laboratory basics are core to understanding the ART workflow</li>
                  <li>✓ Verify whether ultrasound and procedural training are supervised and hands-on</li>
                </ul>
              </div>

              <p className="text-text-secondary leading-relaxed mb-8">
                However, fellowship curricula can vary considerably between institutions. Some programs focus
                primarily on academic learning, while others combine structured teaching with clinical
                exposure, case discussions, procedural observation, or practical training. Before choosing a
                reproductive medicine fellowship course, it is important to understand what you will actually
                learn, how the curriculum is delivered, and how the knowledge can support your professional
                goals.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Understand the Reproductive Medicine Curriculum
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                A comprehensive reproductive medicine curriculum should progress from the fundamentals of
                human reproduction to advanced infertility management and assisted reproductive technology.
                The depth of each topic depends on the fellowship provider, so doctors should review the
                detailed curriculum before enrolling.
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8">
                {CORE_MODULES.map((m) => (
                  <div key={m} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="text-secondary mt-0.5">✓</span>
                    <span>{m}</span>
                  </div>
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                The curriculum generally begins with the biological and physiological foundations needed to
                understand fertility — female and male reproductive anatomy, gametogenesis, follicular
                development, ovulation, menstrual cycle physiology, fertilization, implantation, and hormonal
                regulation. These fundamentals help doctors understand the clinical reasoning behind fertility
                assessment and treatment.
              </p>

              <div className="relative w-full h-56 md:h-72 rounded-xl overflow-hidden my-10">
                <Image
                  src="/courses/reproductive-medicine.jpg"
                  alt="Reviewing the reproductive medicine fellowship curriculum modules"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 700px"
                />
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Learn Female and Male Infertility
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                A strong fellowship should address both female and male factors rather than focusing
                exclusively on female infertility. Female infertility topics may include ovulatory disorders,
                diminished ovarian reserve, endometriosis, tubal factors, uterine abnormalities, age-related
                fertility decline, PCOS, recurrent pregnancy loss, and unexplained infertility. Male
                infertility topics may include semen analysis, oligospermia, azoospermia, sperm motility and
                morphology, hormonal evaluation, varicocele-related infertility, and sperm retrieval concepts.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Doctors should learn how to combine history, examination, investigations, and imaging to
                develop an appropriate fertility management plan — understanding male factors is essential
                because infertility can involve male, female, combined, or unexplained causes.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Study Reproductive Endocrinology
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Reproductive endocrinology connects hormonal function with fertility and reproductive
                outcomes. A fellowship curriculum may cover the hypothalamic-pituitary-ovarian axis,
                gonadotropins, estrogen and progesterone, prolactin and thyroid disorders, hyperandrogenism,
                ovulatory dysfunction, premature ovarian insufficiency, and PCOS. Doctors should learn how
                endocrine abnormalities can affect ovulation, implantation, menstrual function, and fertility
                treatment outcomes.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Master Ovulation Induction, IUI, IVF and ICSI
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Ovulation induction and intrauterine insemination training may include patient selection,
                treatment indications, follicular tracking, trigger timing, cycle monitoring, and
                ovarian hyperstimulation considerations. A comprehensive curriculum should also cover the
                clinical principles behind IVF and ICSI, controlled ovarian stimulation, follicular
                monitoring, trigger protocols, oocyte retrieval, sperm preparation, fertilization, embryo
                culture, embryo transfer, cryopreservation, and ART complications.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Doctors should understand the complete patient journey from initial assessment through
                treatment planning, stimulation, monitoring, oocyte retrieval, fertilization, embryo
                development, transfer, and follow-up, as well as the factors that determine whether treatment
                should involve expectant management, ovulation induction, IUI, IVF, or ICSI.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Explore Embryology and the IVF Laboratory
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Reproductive medicine specialists work closely with embryologists, making a basic
                understanding of embryology highly relevant. Curriculum topics may include oocyte biology,
                sperm preparation, fertilization, embryo development, embryo grading concepts, embryo culture,
                cryopreservation, thawing principles, and laboratory quality control. Depending on the
                program, this may be taught through lectures, laboratory observation, case discussions, or
                practical exposure.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Learn Fertility Preservation and Reproductive Ultrasound
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Fertility preservation has become an increasingly important part of reproductive medicine. A
                fellowship may cover oocyte, sperm, and embryo cryopreservation, fertility preservation before
                medical treatment, age-related fertility preservation, and counseling and patient selection.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Ultrasound plays an important role in fertility assessment and treatment monitoring —
                curriculum topics may include antral follicle count, ovarian morphology, follicular
                monitoring, endometrial assessment, and identification of common pelvic abnormalities. If
                hands-on ultrasound training is important to you, confirm whether the fellowship includes
                supervised scanning rather than only theoretical teaching.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Understand Genetics, Recurrent Loss, and Endometriosis
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Genetic considerations can be relevant at multiple stages of reproductive medicine, including
                genetic causes of infertility, chromosomal abnormalities, recurrent pregnancy loss, genetic
                counseling principles, and preimplantation genetic testing concepts. Recurrent pregnancy loss
                requires a structured clinical approach covering maternal, uterine, endocrine, and genetic
                factors, while endometriosis training may cover clinical assessment, imaging, ovarian reserve
                considerations, and IVF-related treatment planning. The emphasis should be on systematic
                evaluation and evidence-based decision-making rather than unnecessary testing or treatment.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Skills You Learn During a Reproductive Medicine Fellowship
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                A good fellowship should help doctors develop more than theoretical knowledge. Depending on
                the program&apos;s structure and clinical exposure, skills may include:
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Taking a structured infertility history and identifying relevant risk factors",
                  "Interpreting fertility investigations and assessing ovarian reserve",
                  "Discussing treatment options and selecting appropriate treatment pathways",
                  "Understanding ovulation induction, IUI, IVF, ICSI, and ART protocols",
                  "Counseling patients on treatment expectations, risks, and fertility preservation",
                  "Recognizing when referral or advanced intervention is required",
                ].map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
              <p className="text-text-secondary leading-relaxed mb-8">
                The exact procedures and level of independent clinical responsibility depend on the fellowship
                and applicable professional regulations.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                How Is the Curriculum Usually Delivered?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                The same curriculum can be delivered through different formats. Online learning may include
                live lectures, recorded sessions, digital study material, and virtual case discussions.
                Offline learning may include classroom teaching, hospital-based learning, clinical case
                discussions, and procedure observation. A hybrid format may combine online academic learning
                with offline clinical or practical exposure — for working doctors, this can provide a balance
                between flexibility and applied learning, provided the clinical component is clearly defined.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                How to Evaluate a Fellowship Curriculum
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Not every curriculum with a long list of subjects provides comprehensive training. Before
                joining, ask:
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "How many hours are dedicated to each major topic?",
                  "Are there clinical case discussions?",
                  "How much practical exposure is included?",
                  "Is ultrasound training included?",
                  "Is IVF laboratory exposure available?",
                  "Are faculty members experienced fertility specialists?",
                  "Are assessments conducted throughout the program?",
                  "Can working doctors complete the program alongside clinical practice?",
                ].map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-primary/5 p-8 rounded-xl mb-8">
                <p className="text-lg leading-relaxed text-text-secondary">
                  A reproductive medicine fellowship curriculum should do more than introduce doctors to IVF
                  and infertility terminology. The strongest programs provide a structured understanding of
                  the complete fertility care pathway — from infertility evaluation and reproductive
                  endocrinology to ART, embryology, fertility preservation, ultrasound, genetics, counseling,
                  and evidence-based treatment planning.
                </p>
              </div>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Ready to Review the Full Curriculum?
                </h3>
                <p className="text-text-secondary mb-6">
                  Explore the Fellowship in Reproductive Medicine at MedFellow Academy and see how the program
                  fits your professional learning goals.
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
              <Link href="/courses/fellowship-in-reproductive-medicine" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">Course</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Fellowship in Reproductive Medicine
                </h3>
                <p className="text-sm text-text-secondary">Explore the complete curriculum, fees, and admission process...</p>
              </Link>
              <Link href="/best-fellowship-course-in-reproductive-medicine" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guide</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Best Fellowship Course in Reproductive Medicine
                </h3>
                <p className="text-sm text-text-secondary">Compare features and choose the right fellowship...</p>
              </Link>
              <Link href="/blog/how-to-choose-reproductive-medicine-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  How to Choose a Reproductive Medicine Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Learn how to compare fellowship programs with confidence...</p>
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

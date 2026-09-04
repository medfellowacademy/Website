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
  title: "Career Opportunities After a Cardiothoracic Surgery Fellowship | MedFellow Academy",
  description:
    "Explore career opportunities after a cardiothoracic surgery fellowship, including subspecialty practice, hospitals, academics, research, teaching and further training.",
  keywords:
    "cardiothoracic surgery fellowship career opportunities, career after cardiothoracic fellowship, cardiothoracic surgeon career, fellowship in cardiothoracic surgery jobs, careers after cardiothoracic fellowship",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/career-opportunities-after-a-cardiothoracic-surgery-fellowship/" },
  openGraph: {
    title: "Career Opportunities After a Cardiothoracic Surgery Fellowship",
    description:
      "Potential professional pathways across hospital-based teams, academic medicine, research, teaching, and further advanced training.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/career-opportunities-after-a-cardiothoracic-surgery-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Opportunities After a Cardiothoracic Surgery Fellowship",
    description: "Realistic career pathways after cardiothoracic surgery fellowship training.",
  },
};

const FAQS = [
  {
    q: "What can I do after a cardiothoracic surgery fellowship?",
    a: "Depending on your existing qualifications and registration, you may pursue opportunities in hospital-based teams, academic medicine, teaching, research, clinical audits, further specialty training, or focused areas of cardiothoracic practice.",
  },
  {
    q: "Does a cardiothoracic fellowship guarantee a job?",
    a: "No. Employment depends on your qualifications, experience, registration, employer requirements, location, and available positions. A fellowship can support professional development but cannot guarantee employment.",
  },
  {
    q: "Can I become a cardiothoracic surgeon after completing a fellowship?",
    a: "Not necessarily. Becoming an independently practicing cardiothoracic surgeon generally requires the formal specialist training, qualification, registration, and credentialing required in the relevant jurisdiction.",
  },
  {
    q: "Which career path is best after a cardiothoracic fellowship?",
    a: "There is no single best pathway. It depends on whether your goal is clinical practice, academic medicine, research, teaching, advanced surgery, or a focused subspecialty.",
  },
  {
    q: "Can a cardiothoracic fellowship help me get hospital experience?",
    a: "It may, depending on the program. You should verify whether the course includes hospital exposure, observation, simulation, supervised practical learning, or another clinical component.",
  },
  {
    q: "What specialties can I focus on after cardiothoracic fellowship training?",
    a: "Possible focus areas include coronary surgery, valve surgery, aortic surgery, thoracic surgery, minimally invasive surgery, congenital cardiac surgery, transplantation, mechanical circulatory support, and cardiothoracic critical care.",
  },
  {
    q: "Can I pursue another fellowship after cardiothoracic surgery training?",
    a: "Yes, doctors with the required background may pursue focused advanced fellowships. Entry requirements vary by provider and often depend on prior formal training and operative experience.",
  },
  {
    q: "Is research a good career option after a cardiothoracic fellowship?",
    a: "Yes. Cardiothoracic research can include surgical outcomes, perioperative care, new technologies, thoracic oncology, minimally invasive techniques, clinical audits, and case reports.",
  },
  {
    q: "Can fellowship training help with an academic career?",
    a: "It can contribute to your academic profile through specialty knowledge, teaching, case presentations, research, conferences, and professional networking.",
  },
  {
    q: "Can a fellowship help me work internationally?",
    a: "It may contribute to professional development, but international practice generally requires separate verification of qualifications, registration, licensing, and employer requirements in the destination country.",
  },
  {
    q: "What matters more after fellowship, experience or another certificate?",
    a: "Both can have value, but neither should be pursued automatically. Your next step should be based on the requirements of your intended role and the specific skills or qualifications you still need.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Career Opportunities After a Cardiothoracic Surgery Fellowship",
  description:
    "Realistic career pathways after cardiothoracic surgery fellowship training and how doctors can make the most of their additional education.",
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
    "@id": "https://www.medfellowacademy.com/blog/career-opportunities-after-a-cardiothoracic-surgery-fellowship/",
  },
};

const FOCUS_AREAS = [
  "Coronary surgery", "Valve surgery", "Aortic surgery", "Thoracic surgery", "Minimally invasive surgery",
  "Congenital cardiac surgery", "Cardiothoracic critical care", "Transplantation", "Mechanical circulatory support",
  "Advanced imaging",
];

const CAREER_SETTINGS = [
  { title: "Hospital-Based Cardiothoracic Practice", text: "Opportunities within hospitals that provide cardiac and thoracic surgical services — cardiac hospitals, multispecialty hospitals, teaching hospitals, academic medical centres, and specialty cardiovascular institutes. Appointment to a specific clinical role depends on your full qualification profile and the hospital's credentialing requirements." },
  { title: "Cardiac Surgery Services", text: "Focused expertise in coronary artery bypass surgery, valve surgery, aortic procedures, cardiac critical care, and mechanical circulatory support. The ability to independently perform these procedures depends on recognized surgical training, supervised operative experience, competency assessment, and institutional authorization." },
  { title: "Thoracic Surgery Services", text: "Developing expertise in lung disease, pleural conditions, mediastinal disorders, chest wall disease, thoracic oncology, and minimally invasive thoracic surgery, depending on your formal qualifications and training pathway." },
  { title: "Cardiothoracic Critical Care", text: "Building knowledge in hemodynamic monitoring, mechanical ventilation, arrhythmia management, bleeding and coagulation, renal complications, infection, low cardiac output, and ECMO." },
  { title: "Multidisciplinary Cardiovascular Care", text: "Supporting more effective communication and clinical decision-making across surgeons, cardiologists, anesthesiologists, intensivists, radiologists, nurses, and rehabilitation specialists." },
];

const RESEARCH_AREAS = [
  "Surgical outcomes", "Patient safety", "Perioperative care", "Cardiovascular disease",
  "Thoracic oncology", "Minimally invasive techniques", "Postoperative complications",
];

const FURTHER_TRAINING = [
  "Minimally invasive surgery", "Thoracic oncology", "Aortic surgery", "Congenital heart surgery",
  "Heart transplantation", "Mechanical circulatory support", "TAVI", "Advanced postoperative care",
];

const ROADMAP_ROWS = [
  { stage: "During fellowship", focus: "Build knowledge", work: "Curriculum, cases, assessments" },
  { stage: "Immediately after", focus: "Apply learning", work: "Relevant clinical or academic work" },
  { stage: "Next 1 to 2 years", focus: "Build experience", work: "Specialty exposure, research, teaching" },
  { stage: "Mid-term", focus: "Specialize", work: "Focused training or advanced fellowship" },
  { stage: "Long-term", focus: "Career growth", work: "Leadership, research, teaching, specialist practice" },
];

const BUILD_STEPS = [
  { title: "Define Your Target Role", text: "Decide whether your priority is hospital practice, surgical team participation, academic medicine, clinical research, teaching, advanced specialty training, or international exposure." },
  { title: "Identify Your Qualification Gap", text: "Compare your current qualifications with the requirements of your desired role. Ask what you already have, what your target role requires, and what additional training you need." },
  { title: "Build Relevant Experience", text: "Clinical experience should complement formal education. Look for opportunities that strengthen the areas you want to pursue while remaining within your professional scope." },
  { title: "Document Your Achievements", text: "Maintain an updated professional portfolio: qualifications, training certificates, clinical experience, research, publications, presentations, conferences, memberships, and relevant competencies." },
  { title: "Keep Learning", text: "Ongoing education is particularly important in minimally invasive techniques, advanced imaging, transcatheter therapies, ECMO, mechanical circulatory support, and perioperative care." },
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
              <span>Career Opportunities After a Cardiothoracic Surgery Fellowship</span>
            </div>

            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">
                Career Planning
              </span>
              <span className="text-sm text-text-secondary">⏱️ 11 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Career Opportunities After a Cardiothoracic Surgery Fellowship
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
                alt="Career Opportunities After a Cardiothoracic Surgery Fellowship"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Completing a Cardiothoracic Surgery Fellowship Course can be an important step in a doctor&apos;s
                professional development. But completing the course is not the end of the journey. The real
                question is what you can do with the knowledge, clinical exposure, academic experience, and
                professional connections you gain during training. Career opportunities vary significantly
                depending on your existing medical qualification, previous surgical experience, the type of
                fellowship completed, clinical exposure, country of practice, employer requirements, and
                professional registration.
              </p>

              <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-6 rounded-r-lg mb-8 not-prose">
                <p className="text-[0.9375rem] text-text-secondary leading-relaxed">
                  A fellowship certificate does not automatically make a doctor an independently practicing
                  cardiothoracic surgeon. Professional recognition, licensing, hospital privileges, and
                  independent procedural practice depend on the applicable regulatory and institutional
                  requirements.
                </p>
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">What Can You Do After Cardiothoracic Training?</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                A fellowship can broaden your understanding of cardiac and thoracic conditions and strengthen
                your ability to participate in specialty-focused clinical, academic, or research environments.
                For doctors already working in a relevant surgical environment, additional education can deepen
                knowledge in cardiovascular anatomy, cardiac disease, thoracic disorders, surgical
                decision-making, perioperative management, critical care, cardiothoracic imaging, and
                postoperative complications. Further professional development can also focus on areas such as:
              </p>
              <div className="flex flex-wrap gap-2 mb-8 not-prose">
                {FOCUS_AREAS.map((li) => (
                  <span key={li} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-[0.8125rem] font-medium">{li}</span>
                ))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Career Opportunities After a Cardiothoracic Fellowship</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-8 not-prose">
                {CAREER_SETTINGS.map((c) => (
                  <div key={c.title} className="card p-4">
                    <h3 className="text-[0.9375rem] font-bold text-primary mb-1.5">{c.title}</h3>
                    <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{c.text}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Academic, Teaching &amp; Research Opportunities</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                A career in cardiothoracic surgery does not have to focus entirely on clinical practice. Doctors
                who enjoy teaching can use fellowship training to strengthen their academic profile through
                undergraduate teaching, postgraduate tutorials, case discussions, surgical conferences, clinical
                presentations, and journal clubs. Cardiothoracic surgery is particularly suited to case-based
                education involving surgical indications, diagnostic interpretation, operative planning,
                perioperative risk, and postoperative complications. Research can become an important part of
                your career, including studies in:
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 not-prose">
                {RESEARCH_AREAS.map((li) => (
                  <div key={li} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary">
                    <span className="text-secondary mt-0.5">✓</span>
                    <span>{li}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Can a Fellowship Lead to Further Training?</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                For many doctors, a fellowship is not the final qualification — it may be part of a broader
                professional development pathway. Doctors who already have formal cardiothoracic training may
                pursue focused advanced fellowships in areas such as:
              </p>
              <div className="flex flex-wrap gap-2 mb-4 not-prose">
                {FURTHER_TRAINING.map((li) => (
                  <span key={li} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-[0.8125rem] font-medium">{li}</span>
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                Doctors who want to become independently practicing cardiothoracic surgeons may need to complete
                the formal training pathway recognized in their country. A private or academic fellowship should
                not be presented as a substitute for that pathway unless the relevant authority explicitly
                recognizes it as such. Experienced surgeons may also seek international educational
                opportunities — some international programs specifically require prior formal cardiothoracic or
                thoracic training and documented operative experience.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Skills That Can Improve Career Growth</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                The professional value of a fellowship is not limited to the certificate. The knowledge and
                skills developed during training — clinical assessment, diagnostic interpretation, surgical
                decision-making, perioperative management, critical care, communication within multidisciplinary
                teams, and evidence-based practice — can contribute to your broader professional profile.
                Professional relationships also matter: engage with cardiothoracic surgeons, cardiologists,
                intensivists, anesthesiologists, and radiologists; join professional societies for conferences,
                educational programs, networking, research opportunities, and access to journals; and find
                mentors who can help you evaluate further training options and make informed career decisions.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">How to Build a Career After Fellowship</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-8 not-prose">
                {BUILD_STEPS.map((s) => (
                  <div key={s.title} className="card p-4">
                    <h3 className="text-[0.9375rem] font-bold text-primary mb-1.5">{s.title}</h3>
                    <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{s.text}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Career Roadmap After Fellowship</h2>
              <div className="overflow-x-auto rounded-lg border border-gray-200 mb-8 not-prose">
                <table className="w-full text-sm text-left">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Stage</th>
                      <th className="px-4 py-3 font-semibold">Career Focus</th>
                      <th className="px-4 py-3 font-semibold">What to Work On</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ROADMAP_ROWS.map((r, i) => (
                      <tr key={r.stage} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 font-medium text-primary border-t border-gray-100">{r.stage}</td>
                        <td className="px-4 py-3 text-text-secondary border-t border-gray-100">{r.focus}</td>
                        <td className="px-4 py-3 text-text-secondary border-t border-gray-100">{r.work}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                The exact timeline will vary according to your existing qualification, experience, country, and
                career objective. The best approach is to work backwards from your desired career: identify the
                role you want, understand its formal requirements, assess the skills you already have, and then
                use fellowship education to address relevant knowledge or experience gaps.
              </p>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Explore Your Next Training Step
                </h3>
                <p className="text-text-secondary mb-6">
                  Explore the MedFellow Academy Fellowship in Cardiothoracic Surgery and see how structured
                  specialty education can support your professional development.
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
              <Link href="/blog/is-a-cardiothoracic-surgery-fellowship-worth-it" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Career Planning</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Is a Cardiothoracic Surgery Fellowship Worth It?
                </h3>
                <p className="text-sm text-text-secondary">Understand the potential benefits, limitations, and career considerations...</p>
              </Link>
              <Link href="/blog/skills-you-learn-during-a-cardiothoracic-surgery-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Clinical Skills</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Skills You Learn During a Cardiothoracic Surgery Fellowship
                </h3>
                <p className="text-sm text-text-secondary">The clinical, diagnostic, perioperative, and academic skills covered by fellowship training...</p>
              </Link>
              <Link href="/blog/how-to-choose-a-cardiothoracic-surgery-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  How to Choose a Cardiothoracic Surgery Fellowship
                </h3>
                <p className="text-sm text-text-secondary">A practical guide to comparing cardiothoracic fellowship programs before enrollment...</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

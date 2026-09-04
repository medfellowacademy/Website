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
  title: "Skills You Learn During a Cardiothoracic Surgery Fellowship | MedFellow Academy",
  description:
    "Discover the key skills developed during a cardiothoracic surgery fellowship, from clinical assessment and surgical planning to critical care and case-based learning.",
  keywords:
    "skills in cardiothoracic surgery fellowship, cardiothoracic surgery fellowship skills, cardiothoracic surgical training, cardiothoracic fellowship curriculum, fellowship in cardiothoracic surgery",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/skills-you-learn-during-a-cardiothoracic-surgery-fellowship/" },
  openGraph: {
    title: "Skills You Learn During a Cardiothoracic Surgery Fellowship",
    description:
      "From clinical assessment and diagnostic interpretation to surgical planning, perioperative and critical care, research, and case-based learning.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/skills-you-learn-during-a-cardiothoracic-surgery-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skills You Learn During a Cardiothoracic Surgery Fellowship",
    description: "The clinical, diagnostic, perioperative, and academic skills covered by fellowship training.",
  },
};

const FAQS = [
  {
    q: "What skills do you learn in a cardiothoracic surgery fellowship?",
    a: "Depending on the program, doctors may develop skills in clinical assessment, diagnostic interpretation, surgical planning, perioperative management, critical care, case-based reasoning, multidisciplinary communication, research, and evidence-based practice.",
  },
  {
    q: "Does a cardiothoracic fellowship teach surgical procedures?",
    a: "A fellowship may teach the principles and techniques of procedures and may include observation or supervised practical exposure depending on the program. The exact level of procedural training should be confirmed with the provider.",
  },
  {
    q: "Will I get hands-on surgical experience during a cardiothoracic fellowship?",
    a: "This varies by program. Ask specifically whether practical exposure means observation, simulation, supervised procedures, or another form of clinical training.",
  },
  {
    q: "Is watching cardiothoracic surgery considered practical training?",
    a: "Observation is a form of clinical learning, but it is different from supervised hands-on procedural training and independent surgical competency.",
  },
  {
    q: "What diagnostic skills are important in cardiothoracic surgery?",
    a: "Relevant skills can include understanding ECG, echocardiography, angiography, cardiac CT or MRI, chest imaging, and the clinical significance of diagnostic findings.",
  },
  {
    q: "Does a cardiothoracic fellowship teach critical care?",
    a: "Many comprehensive programs include cardiothoracic critical care, including hemodynamic monitoring, ventilation, arrhythmia management, postoperative complications, and escalation of care.",
  },
  {
    q: "Can a cardiothoracic fellowship improve clinical decision-making?",
    a: "Yes. Structured curriculum and case-based learning can help doctors develop more systematic approaches to diagnosis, risk assessment, treatment planning, and postoperative management.",
  },
  {
    q: "What research skills can I develop during the fellowship?",
    a: "Depending on the course, you may develop skills in literature review, evidence appraisal, clinical audits, research methodology, case reports, presentations, and academic projects.",
  },
  {
    q: "What is the difference between fellowship training and surgical competency?",
    a: "Fellowship training can provide knowledge, exposure, and supervised learning. Independent surgical competency requires appropriate formal training, supervised experience, assessment, demonstrated performance, institutional credentialing, and applicable regulatory authorization.",
  },
  {
    q: "Is an online cardiothoracic fellowship enough to develop surgical skills?",
    a: "Online learning can be useful for academic knowledge, case-based education, and diagnostic reasoning. It cannot independently replicate the supervised procedural experience required for hands-on surgical competency.",
  },
  {
    q: "Which skills should I prioritize when choosing a cardiothoracic fellowship?",
    a: "Prioritize the skills most relevant to your career goal. Clinical assessment, diagnostics, and perioperative knowledge may be priorities for clinical development, while surgical exposure and supervised practical learning are particularly important for doctors seeking procedural training.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Skills You Learn During a Cardiothoracic Surgery Fellowship",
  description:
    "The clinical, diagnostic, surgical, perioperative, critical-care, academic, and communication skills doctors develop during a cardiothoracic surgery fellowship.",
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
    "@id": "https://www.medfellowacademy.com/blog/skills-you-learn-during-a-cardiothoracic-surgery-fellowship/",
  },
};

const SKILL_AREAS = [
  { n: 1, title: "Clinical Assessment and Decision-Making", text: "A structured approach to evaluating patients with coronary artery disease, valvular heart disease, heart failure, aortic disorders, congenital cardiac conditions, and arrhythmias, plus thoracic conditions involving the lungs, pleura, mediastinum, airways, chest wall, and thoracic malignancies. The goal is to understand how symptoms, examination, investigations, comorbidities, and clinical risk influence treatment decisions — and to recognize high-risk situations requiring urgent escalation." },
  { n: 2, title: "Cardiothoracic Diagnostic Skills", text: "Interpretation and clinical application of ECG, echocardiography, coronary angiography, cardiac CT, cardiac MRI, and hemodynamic data, plus chest X-ray, CT chest, thoracic MRI, and PET imaging. A valuable skill is learning not to interpret imaging in isolation — connecting imaging with symptoms, physical findings, laboratory data, disease severity, and treatment options, and supporting preoperative evaluation." },
  { n: 3, title: "Surgical Planning and Procedural Knowledge", text: "How clinical findings, disease severity, symptoms, anatomy, patient risk, and alternatives influence decisions about surgery — coronary surgery principles (CABG, graft concepts, operative planning), valve surgery (pathology, indications, repair and replacement concepts), aortic surgery (aneurysms, dissection, root disorders, surveillance), thoracic procedures, and minimally invasive techniques including VATS and robotic approaches." },
  { n: 4, title: "Perioperative and Critical Care Skills", text: "Preoperative optimization (cardiovascular and respiratory risk assessment, nutritional status, comorbidities, medication management), postoperative monitoring (hemodynamic monitoring, fluid management, ventilation, drain management, arrhythmia monitoring, pain management, infection surveillance), and recognition of complications such as bleeding, arrhythmias, low cardiac output, respiratory and renal complications, infection, and thromboembolic events." },
  { n: 5, title: "Cardiopulmonary Bypass and Advanced Support", text: "Basic CPB principles, cardiopulmonary physiology, myocardial protection, perfusion-related considerations, and common complications; the fundamentals of ECMO (indications, types, physiology, monitoring, complications); and an introduction to ventricular assist devices and mechanical circulatory support." },
  { n: 6, title: "Multidisciplinary Communication Skills", text: "Presenting patient information in a structured way, communicating clinical findings, treatment options, surgical plans, anticipated risks, and postoperative considerations; participating in multidisciplinary decision-making; and supporting clearer discussions with patients and families about procedures, expected recovery, risks, and follow-up." },
  { n: 7, title: "Research and Evidence-Based Skills", text: "Searching medical literature; critically evaluating research (study design, patient populations, outcomes, statistical findings, limitations, clinical relevance); developing research questions from clinical practice; conducting clinical audits; and presenting academic work through case presentations, journal clubs, research presentations, case reports, and academic projects." },
  { n: 8, title: "Case-Based Learning Skills", text: "Analyzing complex cases with multiple diagnoses or competing treatment considerations, prioritizing clinical problems, comparing surgical and nonsurgical options based on patient-specific factors, learning from complications (why they occur, how they are identified, management principles), and applying knowledge to different patients where the same disease may require different strategies depending on age, comorbidities, anatomy, and risk." },
  { n: 9, title: "Professional and Leadership Skills", text: "Clinical communication, time and priority management, teamwork, ethical decision-making (informed consent, risk communication, patient autonomy, appropriate treatment selection), and the habit of lifelong learning as cardiothoracic surgery continues to evolve." },
];

const REASONING_CHAIN = "Patient presentation → Differential diagnosis → Investigation → Risk assessment → Treatment planning → Postoperative considerations";

const PRIORITY_ROWS = [
  { goal: "For Clinical Practice", priority: "Clinical assessment, diagnostics, decision-making, perioperative management, and multidisciplinary communication" },
  { goal: "For Surgical Development", priority: "Surgical principles, operative planning, anatomy, procedural knowledge, critical care, and supervised practical exposure" },
  { goal: "For Academic Growth", priority: "Research methodology, evidence appraisal, presentations, literature review, and clinical audits" },
  { goal: "For Career Advancement", priority: "A balanced program combining specialty knowledge, academic development, professional communication, and relevant clinical exposure" },
];

const VERIFY_SKILLS = [
  "Check the learning outcomes — the competencies or knowledge areas you are expected to develop.",
  "Ask about teaching methods — lectures, case discussions, simulations, presentations, clinical observation, supervised practical sessions, assignments, assessments.",
  "Check practical exposure — ask exactly what clinical or practical experience is included (observation, simulation, case discussion, supervised training).",
  "Ask how skills are assessed — examinations, practical evaluations, case presentations, assignments, projects.",
  "Compare faculty interaction — regular interaction with experienced faculty improves learning, particularly for difficult clinical cases.",
];

const COMPETENCY_FACTORS = [
  "Formal training", "Supervised experience", "Case volume", "Assessment",
  "Demonstrated performance", "Institutional credentialing", "Applicable regulatory requirements",
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
              <span>Skills You Learn During a Cardiothoracic Surgery Fellowship</span>
            </div>

            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">
                Clinical Skills
              </span>
              <span className="text-sm text-text-secondary">⏱️ 12 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Skills You Learn During a Cardiothoracic Surgery Fellowship
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
                alt="Skills You Learn During a Cardiothoracic Surgery Fellowship"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                A Cardiothoracic Surgery Fellowship can help doctors develop deeper knowledge and practical
                understanding across cardiac and thoracic conditions, diagnostics, surgical planning,
                perioperative care, critical care, and modern treatment approaches. A strong fellowship should
                go beyond lectures and introduce doctors to structured clinical reasoning, case-based
                decision-making, diagnostic interpretation, surgical principles, postoperative management,
                multidisciplinary communication, and evidence-based practice. It is also important to
                understand that learning about a procedure is different from being independently competent to
                perform it.
              </p>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-8">
                <p className="text-lg font-semibold text-primary mb-2">Structured Clinical Reasoning</p>
                <p className="text-text-secondary text-[0.95rem]">{REASONING_CHAIN}</p>
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">9 Skill Areas Developed in Fellowship Training</h2>
              <div className="space-y-4 mb-8 not-prose">
                {SKILL_AREAS.map((s) => (
                  <div key={s.n} className="card p-5">
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#15401E] text-white text-[0.8125rem] font-bold flex items-center justify-center shrink-0">
                        {s.n}
                      </span>
                      <div>
                        <h3 className="text-[1rem] font-bold text-primary mb-1">{s.title}</h3>
                        <p className="text-sm text-text-secondary leading-relaxed">{s.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Which Skills Matter Most for Working Doctors?</h2>
              <div className="overflow-x-auto rounded-lg border border-gray-200 mb-8 not-prose">
                <table className="w-full text-sm text-left">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-3 font-semibold">If Your Goal Is…</th>
                      <th className="px-4 py-3 font-semibold">Prioritize</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PRIORITY_ROWS.map((r, i) => (
                      <tr key={r.goal} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 font-medium text-primary border-t border-gray-100">{r.goal}</td>
                        <td className="px-4 py-3 text-text-secondary border-t border-gray-100">{r.priority}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">How to Make Sure a Fellowship Builds Real Skills</h2>
              <ul className="space-y-2 mb-8">
                {VERIFY_SKILLS.map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Fellowship Skills vs Independent Surgical Competency</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Understanding the steps of a surgical procedure does not automatically mean a doctor is
                competent to perform it independently. Watching a procedure can be educational, but it is
                different from participating under appropriate supervision. Independent procedural competency
                generally depends on:
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-6 not-prose">
                {COMPETENCY_FACTORS.map((li) => (
                  <div key={li} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary">
                    <span className="text-secondary mt-0.5">✓</span>
                    <span>{li}</span>
                  </div>
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                Doctors should always apply fellowship learning within the scope permitted by their underlying
                qualifications, registration, institutional privileges, and local regulations. Academic
                learning, clinical exposure, supervised procedural training, and independent surgical
                competency are different stages of professional development.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">What Can These Skills Add to Your Career?</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                The skills developed through a Cardiothoracic Surgery Fellowship Course may support stronger
                clinical knowledge, better case discussion, improved diagnostic reasoning, a better
                perioperative understanding, academic development (research, presentations, literature review,
                evidence-based practice), and preparation for further training — provided you understand that
                formal specialist or superspecialty requirements are separate.
              </p>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Develop Advanced Cardiothoracic Skills
                </h3>
                <p className="text-text-secondary mb-6">
                  Explore the MedFellow Academy Fellowship in Cardiothoracic Surgery and review the curriculum,
                  training format, eligibility, and course structure.
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
              <Link href="/blog/career-opportunities-after-a-cardiothoracic-surgery-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Career Planning</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Career Opportunities After a Cardiothoracic Surgery Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Explore potential professional pathways after advanced cardiothoracic training...</p>
              </Link>
              <Link href="/blog/how-to-choose-a-cardiothoracic-surgery-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  How to Choose a Cardiothoracic Surgery Fellowship
                </h3>
                <p className="text-sm text-text-secondary">A practical guide to comparing cardiothoracic fellowship programs before enrollment...</p>
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

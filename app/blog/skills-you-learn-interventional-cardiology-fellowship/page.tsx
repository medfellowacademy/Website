import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import TopicClusterLinks from "@/components/TopicClusterLinks";
import Link from "next/link";
import Image from "next/image";

const CLUSTER_LINKS = [
  { label: "Best Fellowship Course in Interventional Cardiology (Guide)", href: "/courses/best-fellowship-course-in-interventional-cardiology", type: "guide" as const },
  { label: "How to Choose an Interventional Cardiology Fellowship", href: "/blog/how-to-choose-interventional-cardiology-fellowship", type: "blog" as const },
  { label: "Questions to Ask Before Joining an Interventional Cardiology Fellowship", href: "/blog/questions-to-ask-before-joining-interventional-cardiology-fellowship", type: "blog" as const },
  { label: "Online vs Offline Interventional Cardiology Fellowship", href: "/blog/online-vs-offline-interventional-cardiology-fellowship", type: "blog" as const },
  { label: "Is an Interventional Cardiology Fellowship Worth It?", href: "/blog/is-interventional-cardiology-fellowship-worth-it", type: "blog" as const },
  { label: "Skills You Learn During an Interventional Cardiology Fellowship", href: "/blog/skills-you-learn-interventional-cardiology-fellowship", type: "blog" as const },
];

export const metadata: Metadata = {
  title: "Skills You Learn During an Interventional Cardiology Fellowship | MedFellow Academy",
  description:
    "Explore the key skills doctors learn during an Interventional Cardiology Fellowship, from coronary angiography and PCI principles to imaging, patient assessment, and case management.",
  keywords:
    "skills you learn during an interventional cardiology fellowship, interventional cardiology fellowship, interventional cardiology training, fellowship in interventional cardiology, interventional cardiology fellowship course",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/skills-you-learn-interventional-cardiology-fellowship/" },
  openGraph: {
    title: "Skills You Learn During an Interventional Cardiology Fellowship",
    description:
      "From coronary angiography and PCI principles to imaging, physiology, complication management, patient assessment, and case-based reasoning.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/skills-you-learn-interventional-cardiology-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skills You Learn During an Interventional Cardiology Fellowship",
    description: "A tour of the clinical, interventional, and professional skills developed in fellowship training.",
  },
};

const FAQS = [
  {
    q: "What are the most important skills learned during an Interventional Cardiology Fellowship?",
    a: "Key areas may include patient assessment, coronary anatomy, angiography, cardiac catheterization, PCI principles, intravascular imaging, coronary physiology, complication management, case-based decision making, and post-procedure care.",
  },
  {
    q: "Does an Interventional Cardiology Fellowship teach PCI?",
    a: "Many programs teach the principles of PCI, including patient selection, coronary anatomy, devices, procedural planning, and complication management. Hands-on PCI competency requires appropriate supervised clinical training.",
  },
  {
    q: "Can I learn interventional cardiology skills through an online fellowship?",
    a: "Online education can help develop academic knowledge, image interpretation, clinical reasoning, and understanding of interventional procedures. It cannot independently provide hands-on procedural competency.",
  },
  {
    q: "Is cath lab training included in every Interventional Cardiology Fellowship?",
    a: "No. Clinical exposure varies between programs. Always ask whether a cath lab component is included, where it takes place, how long it lasts, and whether fellows receive supervised procedural exposure.",
  },
  {
    q: "Will I learn IVUS and OCT during the fellowship?",
    a: "A comprehensive interventional cardiology curriculum may introduce intravascular ultrasound and optical coherence tomography, including their clinical applications and interpretation. Check the specific curriculum before enrolling.",
  },
  {
    q: "What coronary physiology skills are covered?",
    a: "Depending on the program, training may cover concepts such as fractional flow reserve, pressure measurements, hemodynamics, and interpretation of physiological data.",
  },
  {
    q: "Does the fellowship teach management of PCI complications?",
    a: "Complication recognition and management are important components of interventional cardiology education. Topics may include coronary dissection, perforation, no-reflow, bleeding, vascular complications, arrhythmias, and hemodynamic instability.",
  },
  {
    q: "Can these skills help me become an independent interventional cardiologist?",
    a: "A fellowship alone does not automatically establish independent procedural competency. Appropriate specialist qualifications, supervised procedural experience, competency assessment, credentialing, and applicable regulatory requirements must also be satisfied.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Skills You Learn During an Interventional Cardiology Fellowship",
  description:
    "The key clinical, interventional, and professional skills doctors develop during an Interventional Cardiology Fellowship.",
  image: "https://www.medfellowacademy.com/courses/interventional-cardiology.jpg",
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
    "@id": "https://www.medfellowacademy.com/blog/skills-you-learn-interventional-cardiology-fellowship/",
  },
};

const SKILL_AREAS = [
  { n: 1, title: "Patient Assessment and Clinical Decision Making", text: "Assessing medical history, cardiovascular risk factors, symptoms, ECG and echocardiography findings, laboratory investigations, coronary imaging, previous interventions, comorbidities, and procedural risks — and determining which patient may benefit and how risks should be managed." },
  { n: 2, title: "Coronary Anatomy and Angiographic Interpretation", text: "Coronary artery anatomy, branches, dominance, lesion location and severity, vessel characteristics, bifurcation anatomy, calcified lesions, chronic total occlusions, and interpretation of stenosis, morphology, vessel diameter, lesion length, and thrombus." },
  { n: 3, title: "Cardiac Catheterization and Cath Lab Workflow", text: "Cath lab workflow, patient preparation, sterile techniques, catheter selection, vascular access, contrast use, hemodynamic monitoring, radiation safety, equipment handling, documentation, and post-procedure monitoring." },
  { n: 4, title: "Percutaneous Coronary Intervention Principles", text: "Balloon angioplasty, coronary stenting, guidewires, balloons, stents, guide catheters, lesion preparation, device selection, procedural planning, and post-PCI assessment — with an emphasis on why techniques are chosen, not just the steps." },
  { n: 5, title: "Intravascular Imaging Skills", text: "Intravascular ultrasound and optical coherence tomography for lesion assessment, stent expansion and apposition, plaque characteristics, vessel sizing, and post-PCI assessment — and when their use adds clinical information." },
  { n: 6, title: "Coronary Physiology and Hemodynamics", text: "Fractional flow reserve, coronary physiology, pressure measurements, hemodynamic assessment, and integrating anatomical and functional information when a narrowing may not be functionally significant." },
  { n: 7, title: "Complication Recognition and Management", text: "Recognition and management principles for coronary perforation, dissection, no-reflow, thrombotic complications, bleeding, vascular complications, contrast-related problems, hemodynamic instability, arrhythmias, and acute ischemic complications." },
  { n: 8, title: "Acute Coronary Syndrome Management", text: "STEMI, NSTEMI, unstable angina, acute myocardial infarction, risk assessment, emergency angiography, revascularization principles, antithrombotic therapy, and post-intervention care." },
  { n: 9, title: "Complex Coronary Intervention", text: "Bifurcation lesions, calcified lesions, long lesions, chronic total occlusions, left main disease, multivessel disease, complex PCI planning, lesion preparation, and advanced imaging — with structured pre-procedure assessment." },
  { n: 10, title: "Radiation and Contrast Safety", text: "Radiation exposure and protection, contrast administration and associated risks, patient monitoring, equipment safety, and procedural documentation." },
  { n: 11, title: "Cath Lab Communication and Team Skills", text: "Working with interventional cardiologists, nurses, cath lab technicians, anesthesiology, radiology, and emergency teams — clinical communication, team coordination, procedural briefing, and risk communication under pressure." },
  { n: 12, title: "Evidence-Based Interventional Cardiology", text: "Reading clinical studies, understanding guidelines, reviewing clinical trials, comparing treatment strategies, evaluating new technologies, and applying evidence to clinical scenarios." },
  { n: 13, title: "Case-Based Clinical Reasoning", text: "Working through stable coronary disease, acute coronary syndromes, complex anatomy, high-risk patients, complicated PCI, imaging findings, and physiological assessment to build reasoning rather than memorization." },
  { n: 14, title: "Patient Counselling and Communication", text: "Explaining diagnosis, treatment options, benefits and risks, procedural expectations, possible complications, alternative approaches, and post-procedure care clearly to patients and families." },
  { n: 15, title: "Post-Procedure Patient Management", text: "Monitoring, access-site assessment, medication management, recognition of complications, discharge planning, follow-up, secondary prevention, and lifestyle modification." },
];

const GLANCE_ROWS = [
  { area: "Patient Assessment", learn: "Risk evaluation and treatment planning" },
  { area: "Coronary Anatomy", learn: "Vessel and lesion assessment" },
  { area: "Angiography", learn: "Interpretation of coronary images" },
  { area: "Cath Lab", learn: "Workflow and procedural principles" },
  { area: "PCI", learn: "Angioplasty and stent concepts" },
  { area: "Imaging", learn: "IVUS and OCT principles" },
  { area: "Physiology", learn: "FFR and hemodynamic assessment" },
  { area: "Complex PCI", learn: "Advanced lesion planning" },
  { area: "Complications", learn: "Recognition and management principles" },
  { area: "ACS", learn: "Emergency cardiovascular intervention concepts" },
  { area: "Safety", learn: "Radiation and contrast safety" },
  { area: "Communication", learn: "Patient and multidisciplinary communication" },
  { area: "Evidence-Based Practice", learn: "Guidelines and clinical research" },
  { area: "Case-Based Learning", learn: "Clinical reasoning and decision making" },
];

const ACADEMIC_VS_HANDSON = [
  { academic: "Understand PCI principles", hands: "Perform procedures under supervision" },
  { academic: "Study coronary anatomy", hands: "Work with actual patients" },
  { academic: "Interpret angiographic cases", hands: "Perform catheter-based procedures" },
  { academic: "Learn IVUS/OCT concepts", hands: "Use imaging equipment under supervision" },
  { academic: "Study complications", hands: "Manage complications in clinical settings" },
  { academic: "Understand cath lab workflow", hands: "Participate in cath lab activities" },
  { academic: "Learn procedural planning", hands: "Develop practical procedural skills" },
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
              <span>Skills You Learn During an Interventional Cardiology Fellowship</span>
            </div>

            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">
                Clinical Skills
              </span>
              <span className="text-sm text-text-secondary">⏱️ 11 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Skills You Learn During an Interventional Cardiology Fellowship
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
                src="/courses/interventional-cardiology.jpg"
                alt="Skills You Learn During an Interventional Cardiology Fellowship"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Interventional cardiology is a highly specialized area of cardiovascular medicine that combines
                clinical decision making with advanced catheter-based procedures. Doctors pursuing an
                Interventional Cardiology Fellowship need a structured understanding of patient selection,
                coronary anatomy, imaging, hemodynamics, procedural planning, complications, and post-procedure
                care. Academic learning strengthens knowledge and clinical reasoning, while hands-on procedural
                competency requires appropriate supervised clinical experience.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">15 Core Skill Areas</h2>
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

              <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg mb-8 not-prose">
                <p className="text-sm text-text-secondary leading-relaxed">
                  <strong>Important:</strong> Learning PCI concepts through academic education does not
                  independently establish procedural competency. Hands-on PCI training requires appropriate
                  supervised clinical experience.
                </p>
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Interventional Cardiology Skills at a Glance</h2>
              <div className="overflow-x-auto rounded-lg border border-gray-200 mb-8 not-prose">
                <table className="w-full text-sm text-left">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Skill Area</th>
                      <th className="px-4 py-3 font-semibold">What You Learn</th>
                    </tr>
                  </thead>
                  <tbody>
                    {GLANCE_ROWS.map((r, i) => (
                      <tr key={r.area} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 font-medium text-primary border-t border-gray-100">{r.area}</td>
                        <td className="px-4 py-3 text-text-secondary border-t border-gray-100">{r.learn}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">How Does Fellowship Training Build These Skills?</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                A structured Interventional Cardiology Fellowship may combine several learning methods:
                academic learning through lectures, reading materials, and structured modules; case
                discussions that apply theoretical concepts to realistic situations; faculty guidance that
                explains complex concepts and provides feedback; supervised hospital-based clinical exposure
                where included; and assessments such as assignments, examinations, presentations, and
                case-based evaluations to track learning progress.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Academic Skills vs Hands-On Procedural Skills</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                It is important to distinguish between learning about a procedure and becoming competent to
                perform it.
              </p>
              <div className="overflow-x-auto rounded-lg border border-gray-200 mb-6 not-prose">
                <table className="w-full text-sm text-left">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Academic Learning</th>
                      <th className="px-4 py-3 font-semibold">Hands-On Clinical Training</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ACADEMIC_VS_HANDSON.map((r, i) => (
                      <tr key={r.academic} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 font-medium text-primary border-t border-gray-100">{r.academic}</td>
                        <td className="px-4 py-3 text-text-secondary border-t border-gray-100">{r.hands}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                An online or academic fellowship can provide valuable knowledge, but procedural competency
                requires appropriate supervised clinical experience.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">How Can These Skills Support Your Career?</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                The skills developed through fellowship education can support professional growth in
                hospital-based cardiology, cath lab services for doctors with the required specialist
                qualifications and procedural credentials, academic medicine, and cardiovascular specialty
                centres. A fellowship should be viewed as part of a broader professional pathway rather than a
                standalone guarantee of employment or procedural privileges.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Who Can Apply?</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Advanced interventional cardiology training is generally intended for doctors who already have
                appropriate cardiology training, and established frameworks position interventional cardiology
                as advanced training following foundational cardiovascular disease training. Before applying,
                check your medical qualification, cardiology specialization, clinical experience, medical
                registration, fellowship-specific eligibility, and clinical training requirements — and verify
                current criteria directly with the provider.
              </p>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Build Your Interventional Cardiology Knowledge
                </h3>
                <p className="text-text-secondary mb-6">
                  Explore MedFellow Academy&apos;s Fellowship in Interventional Cardiology and review the
                  curriculum, eligibility, learning format, and clinical training options.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/courses/fellowship-in-interventional-cardiology" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-center">
                    View Fellowship Details
                  </Link>
                  <Link href="/courses/best-fellowship-course-in-interventional-cardiology" className="inline-block px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all text-center">
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
            <TopicClusterLinks title="Interventional Cardiology Resources" links={CLUSTER_LINKS} />
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
              <Link href="/courses/best-fellowship-course-in-interventional-cardiology" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">Fellowship Guide</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Best Fellowship Course in Interventional Cardiology
                </h3>
                <p className="text-sm text-text-secondary">A complete guide to curriculum, eligibility, skills, learning options, and career pathways...</p>
              </Link>
              <Link href="/blog/is-interventional-cardiology-fellowship-worth-it" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Career Planning</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Is an Interventional Cardiology Fellowship Worth It?
                </h3>
                <p className="text-sm text-text-secondary">Benefits, career opportunities, costs, and potential limitations...</p>
              </Link>
              <Link href="/blog/how-to-choose-interventional-cardiology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  How to Choose an Interventional Cardiology Fellowship
                </h3>
                <p className="text-sm text-text-secondary">The key factors to evaluate when choosing a program...</p>
              </Link>
              <Link href="/blog/online-vs-offline-interventional-cardiology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Online vs Offline Interventional Cardiology Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Compare flexibility, clinical exposure, cost, and learning formats...</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

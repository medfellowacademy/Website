import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import TopicClusterLinks from "@/components/TopicClusterLinks";
import Link from "next/link";
import Image from "next/image";

const CLUSTER_LINKS = [
  { label: "Best Fellowship Course in Interventional Cardiology (Guide)", href: "/best-fellowship-course-in-interventional-cardiology", type: "guide" as const },
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
    "Skills You Learn During an Interventional Cardiology Fellowship, Interventional Cardiology Fellowship, Interventional Cardiology Training, Fellowship in Interventional Cardiology, Interventional Cardiology Fellowship Course",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/skills-you-learn-interventional-cardiology-fellowship/" },
  openGraph: {
    title: "Skills You Learn During an Interventional Cardiology Fellowship",
    description:
      "Explore the key skills doctors learn during an Interventional Cardiology Fellowship, from coronary angiography and PCI principles to imaging, patient assessment, and case management.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/skills-you-learn-interventional-cardiology-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/courses/interventional-cardiology.jpg", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skills You Learn During an Interventional Cardiology Fellowship",
    description: "From coronary angiography and PCI principles to imaging, patient assessment, and case management.",
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
    q: "Does the fellowship teach management of PCI complications?",
    a: "Complication recognition and management are important components of interventional cardiology education. Topics may include coronary dissection, perforation, no-reflow, bleeding, vascular complications, arrhythmias, and hemodynamic instability.",
  },
  {
    q: "Can these skills help me become an independent interventional cardiologist?",
    a: "A fellowship alone does not automatically establish independent procedural competency. Appropriate specialist qualifications, supervised procedural experience, competency assessment, credentialing, and applicable regulatory requirements must also be satisfied.",
  },
  {
    q: "Is an Interventional Cardiology Fellowship useful for working doctors?",
    a: "It can be, particularly when the program offers flexible academic learning that can be completed alongside clinical practice. However, doctors seeking procedural skills should carefully evaluate the clinical component.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Skills You Learn During an Interventional Cardiology Fellowship",
  description:
    "Explore the key skills doctors learn during an Interventional Cardiology Fellowship, from coronary angiography and PCI principles to imaging, patient assessment, and case management.",
  image: "https://www.medfellowacademy.com/courses/interventional-cardiology.jpg",
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
    "@id": "https://www.medfellowacademy.com/blog/skills-you-learn-interventional-cardiology-fellowship/",
  },
};

const SKILLS_TABLE = [
  ["Patient Assessment", "Risk evaluation and treatment planning"],
  ["Coronary Anatomy", "Vessel and lesion assessment"],
  ["Angiography", "Interpretation of coronary images"],
  ["Cath Lab", "Workflow and procedural principles"],
  ["PCI", "Angioplasty and stent concepts"],
  ["Imaging", "IVUS and OCT principles"],
  ["Physiology", "FFR and hemodynamic assessment"],
  ["Complex PCI", "Advanced lesion planning"],
  ["Complications", "Recognition and management principles"],
  ["ACS", "Emergency cardiovascular intervention concepts"],
  ["Safety", "Radiation and contrast safety"],
  ["Communication", "Patient and multidisciplinary communication"],
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
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-text-secondary mb-6">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-primary">Blog</Link>
              <span>/</span>
              <span>Skills You Learn During an Interventional Cardiology Fellowship</span>
            </div>

            {/* Category & Reading Time */}
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">
                Clinical Skills
              </span>
              <span className="text-sm text-text-secondary">⏱️ 12 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Skills You Learn During an Interventional Cardiology Fellowship
            </h1>

            {/* Author */}
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

            {/* Hero Image */}
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

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Interventional cardiology is a highly specialized area of cardiovascular medicine that combines
                clinical decision making with advanced catheter-based procedures. Doctors pursuing an
                Interventional Cardiology Fellowship need more than theoretical knowledge — they need a
                structured understanding of patient selection, coronary anatomy, imaging, hemodynamics,
                procedural planning, complications, and post-procedure care.
              </p>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-8">
                <p className="text-lg font-semibold text-primary mb-3">Key Takeaways</p>
                <ul className="space-y-2 text-text-secondary">
                  <li>✓ Skills span clinical assessment, coronary anatomy, cath lab workflow, and PCI principles</li>
                  <li>✓ Advanced imaging (IVUS, OCT) and physiology (FFR) are increasingly core to training</li>
                  <li>✓ Complication recognition and ACS management are essential safety skills</li>
                  <li>✓ Academic learning and hands-on procedural training are complementary, not interchangeable</li>
                </ul>
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                1. Patient Assessment and Clinical Decision Making
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Before any intervention, doctors need to understand the patient&apos;s clinical condition and
                determine whether an invasive approach is appropriate. During fellowship training, you may
                strengthen your ability to assess:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "Medical history and cardiovascular risk factors",
                  "Symptoms and clinical presentation",
                  "ECG and echocardiography findings",
                  "Laboratory investigations and coronary imaging",
                  "Previous interventions and comorbidities",
                  "Procedural risks",
                ].map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
              <p className="text-text-secondary leading-relaxed mb-8">
                Interventional cardiology is not simply about performing a procedure. It is about determining
                which patient may benefit, which approach is appropriate, and how risks should be managed.
                Case-based learning can help doctors understand how clinical information influences treatment
                planning.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                2. Coronary Anatomy and Angiographic Interpretation
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                A strong understanding of coronary anatomy is fundamental to interventional cardiology.
                Fellowship learning may cover coronary artery anatomy, branches, dominance, lesion location and
                severity, bifurcation anatomy, calcified lesions, and chronic total occlusions. Doctors also
                learn how to interpret coronary angiographic images and relate anatomical findings to clinical
                presentation — evaluating stenosis, lesion morphology, vessel diameter, calcification, thrombus,
                and distal vessel anatomy.
              </p>

              <div className="relative w-full h-56 md:h-72 rounded-xl overflow-hidden my-10">
                <Image
                  src="/courses/interventional-cardiology.jpg"
                  alt="Cath lab workflow and PCI training during an Interventional Cardiology Fellowship"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 700px"
                />
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                3 &amp; 4. Cath Lab Workflow and PCI Principles
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Understanding the cath lab environment is an important part of interventional cardiology
                education. Depending on the program and clinical component, fellows may learn about cath lab
                workflow, patient preparation, sterile techniques, catheter selection, vascular access
                principles, contrast use, hemodynamic monitoring, and radiation safety.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                PCI is one of the central areas of interventional cardiology. A fellowship may introduce doctors
                to the principles behind balloon angioplasty, coronary stenting, guidewires, lesion preparation,
                device selection, procedural planning, and post-PCI assessment.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Important: Learning PCI concepts through academic education does not independently establish
                procedural competency. Hands-on PCI training requires appropriate supervised clinical
                experience.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                5 &amp; 6. Intravascular Imaging and Coronary Physiology
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Modern interventional cardiology increasingly uses intravascular imaging — intravascular
                ultrasound (IVUS) and optical coherence tomography (OCT) — to provide information that
                angiography alone may not fully reveal, including lesion assessment, stent expansion and
                apposition, plaque characteristics, and vessel sizing.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Another important skill area is understanding whether a coronary lesion is functionally
                significant. Fellowship education may cover fractional flow reserve (FFR), coronary physiology,
                pressure measurements, and interpretation of physiological data. A coronary narrowing may
                appear significant on angiography but may not always have the same functional significance —
                understanding physiological assessment helps doctors integrate anatomical and functional
                information when considering treatment.
              </p>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Review the Full Curriculum
                </h3>
                <p className="text-text-secondary mb-6">
                  Explore the Fellowship in Interventional Cardiology and review the curriculum, eligibility,
                  learning format, and clinical training options.
                </p>
                <Link href="/apply" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-center">
                  Apply Now
                </Link>
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                7 &amp; 8. Complication Recognition and Acute Coronary Syndrome Management
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Interventional procedures involve potential complications, making complication recognition an
                essential part of training. Fellows may study the recognition and management principles
                associated with coronary perforation, dissection, no-reflow, thrombotic complications, bleeding,
                vascular complications, contrast-related problems, and arrhythmias.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Interventional cardiology also has an important role in the management of acute coronary
                syndromes — STEMI, NSTEMI, unstable angina, and acute myocardial infarction. Doctors learn to
                understand the urgency of different clinical presentations and how interventional strategies
                fit within broader patient management.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                9, 10 &amp; 11. Complex Intervention, Safety, and Team Communication
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Advanced fellowship education may introduce complex coronary intervention concepts —
                bifurcation lesions, calcified lesions, chronic total occlusions, left main disease, and
                multivessel disease — along with structured procedural planning that weighs anatomy, lesion
                complexity, patient risk, and potential complications.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Patient and staff safety is another important part of training, covering radiation exposure and
                protection, contrast administration, and procedural documentation. Interventional cardiology is
                also highly team-based — doctors work with interventional cardiologists, nurses, cath lab
                technicians, anesthesiology teams, and radiology professionals, making clinical communication
                and procedural briefing important fellowship skills.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                12, 13, 14 &amp; 15. Evidence, Case Reasoning, Communication, and Post-Procedure Care
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                A good fellowship should help doctors understand how clinical evidence informs treatment —
                reading clinical studies, understanding guidelines, and applying evidence to clinical scenarios.
                Case-based learning connects academic concepts with real-world clinical decision making across
                stable coronary disease, acute coronary syndromes, complex anatomy, and procedural
                complications.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                Interventional cardiologists also need to explain complex procedures clearly to patients and
                families — discussing diagnosis, treatment options, benefits and risks, and post-procedure care.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Interventional cardiology does not end when the procedure is completed. Doctors also need to
                understand post-procedure management, including monitoring, access-site assessment, medication
                management, discharge planning, follow-up, and secondary prevention.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Interventional Cardiology Skills at a Glance
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-bold text-primary">Skill Area</th>
                      <th className="py-3 font-bold text-primary">What You Learn</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SKILLS_TABLE.map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        <td className="py-3 pr-4 font-medium">{row[0]}</td>
                        <td className="py-3 text-text-secondary">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Academic Skills vs Hands-On Procedural Skills
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                It is important to distinguish between learning about a procedure and becoming competent to
                perform it.
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-bold text-primary">Academic Learning</th>
                      <th className="py-3 font-bold text-primary">Hands-On Clinical Training</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Understand PCI principles", "Perform procedures under supervision"],
                      ["Study coronary anatomy", "Work with actual patients"],
                      ["Interpret angiographic cases", "Perform catheter-based procedures"],
                      ["Learn IVUS/OCT concepts", "Use imaging equipment under supervision"],
                      ["Study complications", "Manage complications in clinical settings"],
                      ["Understand cath lab workflow", "Participate in cath lab activities"],
                      ["Learn procedural planning", "Develop practical procedural skills"],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-text-secondary">{row[0]}</td>
                        <td className="py-3 text-text-secondary">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-primary/5 p-8 rounded-xl mb-8">
                <p className="text-lg leading-relaxed text-text-secondary">
                  An online or academic fellowship can provide valuable knowledge, but procedural competency
                  requires appropriate supervised clinical experience. This distinction is especially important
                  for doctors evaluating an interventional cardiology program.
                </p>
              </div>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Build Your Interventional Cardiology Knowledge
                </h3>
                <p className="text-text-secondary mb-6">
                  Look for a fellowship with structured learning, experienced faculty, relevant case
                  discussions, appropriate clinical exposure, transparent assessments, and clear certification.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/courses/fellowship-in-interventional-cardiology" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-center">
                    View Fellowship Details
                  </Link>
                  <Link href="/best-fellowship-course-in-interventional-cardiology" className="inline-block px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all text-center">
                    Read the Full Guide
                  </Link>
                </div>
              </div>
            </div>

            {/* Author Bio */}
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

      {/* Related Resources */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-primary mb-6">Related Resources</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/best-fellowship-course-in-interventional-cardiology" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">
                  Fellowship Guide
                </span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Best Fellowship Course in Interventional Cardiology
                </h3>
                <p className="text-sm text-text-secondary">Learn how to compare fellowship programs before enrolling...</p>
              </Link>

              <Link href="/blog/how-to-choose-interventional-cardiology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">
                  Fellowship Guides
                </span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  How to Choose an Interventional Cardiology Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Understand the key factors to evaluate when choosing a program...</p>
              </Link>

              <Link href="/blog/online-vs-offline-interventional-cardiology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">
                  Learning Formats
                </span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Online vs Offline Interventional Cardiology Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Compare flexibility, clinical exposure, cost, and learning formats...</p>
              </Link>

              <Link href="/blog/is-interventional-cardiology-fellowship-worth-it" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">
                  Career Planning
                </span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Is an Interventional Cardiology Fellowship Worth It?
                </h3>
                <p className="text-sm text-text-secondary">Explore benefits, career opportunities, costs, and potential limitations...</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

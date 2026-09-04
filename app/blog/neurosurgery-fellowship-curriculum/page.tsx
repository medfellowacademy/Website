import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import TopicClusterLinks from "@/components/TopicClusterLinks";
import Link from "next/link";
import Image from "next/image";

const CLUSTER_LINKS = [
  { label: "Best Fellowship Course in Neurosurgery (Guide)", href: "/courses/best-fellowship-course-in-neurosurgery", type: "guide" as const },
  { label: "How to Choose a Neurosurgery Fellowship", href: "/blog/how-to-choose-a-neurosurgery-fellowship", type: "blog" as const },
  { label: "Online vs Offline Neurosurgery Fellowship", href: "/blog/online-vs-offline-neurosurgery-fellowship", type: "blog" as const },
  { label: "Career Opportunities After a Neurosurgery Fellowship", href: "/blog/career-opportunities-after-a-neurosurgery-fellowship", type: "blog" as const },
  { label: "Skills You Learn During a Neurosurgery Fellowship", href: "/blog/skills-you-learn-during-a-neurosurgery-fellowship", type: "blog" as const },
  { label: "Neurosurgery Fellowship Curriculum: What Will You Learn?", href: "/blog/neurosurgery-fellowship-curriculum", type: "blog" as const },
];

export const metadata: Metadata = {
  title: "Neurosurgery Fellowship Curriculum: What Will You Learn? | MedFellow Academy",
  description:
    "Explore the neurosurgery fellowship curriculum, including neuroimaging, neurotrauma, spine, neuro-oncology, surgical planning, research and case-based learning.",
  keywords:
    "neurosurgery fellowship curriculum, neurosurgery fellowship curriculum what will you learn, neurosurgery fellowship course, fellowship in neurosurgery, neurosurgery fellowship training",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/neurosurgery-fellowship-curriculum/" },
  openGraph: {
    title: "Neurosurgery Fellowship Curriculum: What Will You Learn?",
    description:
      "The major subjects and learning areas covered in neurosurgery fellowship training, and how to evaluate a curriculum.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/neurosurgery-fellowship-curriculum/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neurosurgery Fellowship Curriculum: What Will You Learn?",
    description: "From applied neuroanatomy and neuroimaging to neurotrauma, spine, cerebrovascular, neuro-oncology, and research.",
  },
};

const FAQS = [
  {
    q: "What is included in a neurosurgery fellowship curriculum?",
    a: "A curriculum may include neuroanatomy, neuroimaging, neurotrauma, spine surgery, cerebrovascular conditions, neuro-oncology, skull base surgery, pediatric neurosurgery, perioperative care, research and case-based learning.",
  },
  {
    q: "Does every neurosurgery fellowship have the same curriculum?",
    a: "No. Curriculum varies by institution, fellowship focus, faculty expertise, duration, clinical exposure and practical training.",
  },
  {
    q: "Does a neurosurgery fellowship include hands-on surgical training?",
    a: "Not necessarily. Some fellowships include supervised clinical or practical components, while others focus primarily on academic learning. The practical component should be verified directly with the provider.",
  },
  {
    q: "What imaging skills are taught in a neurosurgery fellowship?",
    a: "Depending on the program, fellows may learn to interpret CT, MRI, angiography and other neuroimaging studies and connect imaging findings with clinical decision-making.",
  },
  {
    q: "Does the curriculum include spine surgery?",
    a: "Many neurosurgery curricula include spine-related topics, but the depth varies. A spine-focused fellowship generally provides more detailed training in spinal disorders and management principles.",
  },
  {
    q: "Is neurotrauma included in the neurosurgery fellowship curriculum?",
    a: "Neurotrauma is commonly relevant to neurosurgical training and may include traumatic brain injury, intracranial hemorrhage, spinal trauma, emergency assessment and perioperative management.",
  },
  {
    q: "Does a neurosurgery fellowship curriculum include research?",
    a: "Some programs include research methodology, literature review, clinical studies, case reports or academic projects. Confirm the specific research component before enrolling.",
  },
  {
    q: "Can an online neurosurgery fellowship cover the complete curriculum?",
    a: "An online program can cover a substantial academic curriculum through lectures, case discussions, imaging-based learning and assessments. However, physical clinical and procedural components may require offline exposure.",
  },
  {
    q: "How long does it take to complete a neurosurgery fellowship?",
    a: "Duration varies by provider and fellowship type. Check the specific program for its duration, weekly workload, attendance requirements and completion criteria.",
  },
  {
    q: "How do I know if a neurosurgery fellowship curriculum is good?",
    a: "Look for clearly defined learning objectives, relevant modules, qualified faculty, case-based learning, appropriate assessment, transparent clinical exposure and a curriculum aligned with your career goals.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Neurosurgery Fellowship Curriculum: What Will You Learn?",
  description:
    "The major subjects and learning areas covered in neurosurgery fellowship training, and how to evaluate a curriculum.",
  image: "https://www.medfellowacademy.com/courses/neurosurgery.jpg",
  datePublished: "2026-08-26",
  dateModified: "2026-08-26",
  author: { "@type": "Organization", name: "MedFellow Academy" },
  publisher: {
    "@type": "Organization",
    name: "MedFellow Academy",
    logo: { "@type": "ImageObject", url: "https://www.medfellowacademy.com/logo.png" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.medfellowacademy.com/blog/neurosurgery-fellowship-curriculum/",
  },
};

const GLANCE_ROWS = [
  { area: "Neuroanatomy", learn: "Applied anatomy relevant to neurosurgical practice" },
  { area: "Neuroimaging", learn: "CT, MRI, angiography and imaging-based case interpretation" },
  { area: "Neurotrauma", learn: "Assessment and management principles for traumatic neurological injuries" },
  { area: "Spine", learn: "Degenerative, traumatic and complex spinal conditions" },
  { area: "Cerebrovascular", learn: "Aneurysms, vascular malformations and intracranial hemorrhage" },
  { area: "Neuro-oncology", learn: "Brain and spinal tumors and multidisciplinary management" },
  { area: "Skull Base", learn: "Complex anatomy, pathology and surgical approach principles" },
  { area: "Pediatric Neurosurgery", learn: "Common pediatric neurological and neurosurgical conditions" },
  { area: "Perioperative Care", learn: "Preoperative assessment, postoperative care and complications" },
  { area: "Research", learn: "Literature review, research methodology and scientific communication" },
  { area: "Case-Based Learning", learn: "Applying knowledge to real-world clinical scenarios" },
];

const MODULES = [
  { title: "Applied Neuroanatomy and Neurosurgical Foundations", text: "Brain anatomy, cranial nerves, ventricular system, cerebral blood supply, spinal cord anatomy, skull base anatomy, surgical corridors, and functional neuroanatomy — and how anatomy influences diagnosis, imaging interpretation, surgical approaches, risk assessment, complication prevention, and treatment planning." },
  { title: "Neuroimaging and Diagnostic Evaluation", text: "CT brain, MRI brain, MRI spine, CT and MR angiography, cerebral angiography, diffusion imaging, and perfusion imaging — with imaging-based case discussions connecting symptoms, examination, imaging, diagnosis, and treatment plan." },
  { title: "Neurotrauma and Emergency Neurosurgery", text: "Traumatic brain injury, intracranial hemorrhage, skull fractures, spinal trauma, neurological assessment, emergency imaging, surgical indications, neurocritical care principles, postoperative monitoring, and complication recognition." },
  { title: "Spine Surgery and Spinal Disorders", text: "Disc disease, spinal stenosis, myelopathy, radiculopathy, spinal trauma, spinal tumors, spinal deformity, preoperative assessment, surgical planning principles, and postoperative care — correlating symptoms, examination, CT and MRI findings, diagnosis, and treatment options." },
  { title: "Cerebrovascular Neurosurgery", text: "Intracranial aneurysms, arteriovenous malformations, intracranial hemorrhage, cerebral vascular disorders, vascular imaging, treatment planning, perioperative management, and multidisciplinary care." },
  { title: "Neuro-Oncology and Brain Tumors", text: "Brain and spinal tumors, tumor imaging, preoperative assessment, surgical planning, tumor classification concepts, postoperative management, multidisciplinary treatment, and patient counseling — with collaboration across neuro-oncology, radiation oncology, neuroradiology, and neuropathology." },
  { title: "Skull Base and Complex Cranial Surgery", text: "Skull base anatomy, cranial nerve relationships, complex intracranial lesions, surgical corridors, imaging assessment, surgical approach principles, complication prevention, and postoperative care." },
  { title: "Pediatric Neurosurgery", text: "Congenital neurological conditions, hydrocephalus, pediatric brain tumors, craniosynostosis, spinal dysraphism, pediatric trauma, pediatric neuroimaging, and perioperative care — with attention to age-specific anatomy, physiology, communication, and postoperative management." },
  { title: "Functional Neurosurgery", text: "Movement disorders, epilepsy surgery, functional brain mapping, patient selection, stereotactic principles, neuromodulation, treatment planning, and postoperative assessment — depth depends on the fellowship's specialty focus." },
  { title: "Perioperative and Postoperative Management", text: "Preoperative evaluation, patient optimization, risk assessment, neurological monitoring, postoperative assessment, ICU care principles, complication recognition, infection prevention, rehabilitation, and follow-up planning." },
  { title: "Surgical Planning and Technical Principles", text: "Patient selection, surgical indications, preoperative imaging, anatomical considerations, surgical approaches, risk assessment, intraoperative planning, and postoperative management. Hands-on training depends on the program — do not assume a curriculum with surgical topics means you will perform those procedures." },
  { title: "Case-Based Learning, Evidence & Research", text: "Case discussions following history, examination, imaging, diagnosis, differential diagnosis, treatment options, and outcome; evidence-based decision-making, clinical guidelines, literature review, and critical appraisal; plus research methodology, clinical audits, case reports, scientific writing, and conference presentations." },
];

const DELIVERY_ROWS = [
  { component: "Lectures", online: "✓", offline: "✓" },
  { component: "Digital resources", online: "✓", offline: "✓" },
  { component: "Case discussions", online: "✓", offline: "✓" },
  { component: "Imaging-based learning", online: "✓", offline: "✓" },
  { component: "Faculty interaction", online: "Virtual", offline: "Face-to-face" },
  { component: "Hospital exposure", online: "Program-dependent", offline: "Usually greater" },
  { component: "Surgical observation", online: "Program-dependent", offline: "More likely" },
  { component: "Hands-on training", online: "Limited or program-dependent", offline: "More suitable when structured" },
  { component: "Research", online: "✓", offline: "✓" },
  { component: "Flexibility", online: "Usually higher", offline: "Usually lower" },
];

const EVALUATE_POINTS = [
  { title: "Curriculum Depth", text: "Does the program explain each topic in sufficient detail?" },
  { title: "Clinical Relevance", text: "Are concepts connected to real clinical cases and decision-making?" },
  { title: "Faculty Expertise", text: "Are the instructors experienced in the areas they teach?" },
  { title: "Practical Exposure", text: "Is clinical or procedural training clearly defined?" },
  { title: "Assessment", text: "Is there a structured way to evaluate your learning?" },
  { title: "Career Relevance", text: "Does the curriculum support the professional direction you want to pursue?" },
];

const BEFORE_ENROL = [
  "What are the complete modules?",
  "How many hours are dedicated to each topic?",
  "Is the curriculum general or subspecialty-focused?",
  "Are case-based discussions included?",
  "Is neuroimaging interpretation covered?",
  "Is practical training included?",
  "Where does clinical exposure take place?",
  "Who supervises practical sessions?",
  "Are research opportunities available?",
  "How is learning assessed?",
  "What are the completion requirements?",
  "What exactly does the fellowship certificate represent?",
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
              <span>Neurosurgery Fellowship Curriculum</span>
            </div>

            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">
                Clinical Skills
              </span>
              <span className="text-sm text-text-secondary">⏱️ 12 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Neurosurgery Fellowship Curriculum: What Will You Learn?
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
                src="/courses/neurosurgery.jpg"
                alt="Neurosurgery Fellowship Curriculum: What Will You Learn?"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                A neurosurgery fellowship curriculum is designed to provide focused advanced learning beyond
                core neurosurgical training. The exact curriculum varies by fellowship type, institution,
                faculty expertise, clinical exposure, and practical training offered. The best way to evaluate
                a fellowship is not simply by counting the number of modules — look at what you will learn, how
                you will learn it, how your knowledge will be assessed, and whether the clinical or practical
                component matches your career goals.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Curriculum at a Glance</h2>
              <div className="overflow-x-auto rounded-lg border border-gray-200 mb-8 not-prose">
                <table className="w-full text-sm text-left">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Curriculum Area</th>
                      <th className="px-4 py-3 font-semibold">What You May Learn</th>
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

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Online vs Offline Curriculum Delivery</h2>
              <div className="overflow-x-auto rounded-lg border border-gray-200 mb-6 not-prose">
                <table className="w-full text-sm text-left">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Curriculum Component</th>
                      <th className="px-4 py-3 font-semibold">Online</th>
                      <th className="px-4 py-3 font-semibold">Offline</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DELIVERY_ROWS.map((r, i) => (
                      <tr key={r.component} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 font-medium text-primary border-t border-gray-100">{r.component}</td>
                        <td className="px-4 py-3 text-text-secondary border-t border-gray-100">{r.online}</td>
                        <td className="px-4 py-3 text-text-secondary border-t border-gray-100">{r.offline}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                For doctors who need flexibility, online learning can provide structured academic education. For
                doctors seeking direct clinical or procedural exposure, an appropriate offline or hybrid
                program may be more suitable.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">How Is the Curriculum Assessed?</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                A structured fellowship should explain how learners are assessed. Potential assessment methods
                include module assessments, written examinations, case discussions, assignments, case
                presentations, research projects, clinical assessments, and final examinations. Before joining,
                ask what you need to complete to receive the fellowship certificate.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">How to Evaluate a Curriculum</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Do not choose a fellowship simply because it has a long list of subjects. Evaluate:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8 not-prose">
                {EVALUATE_POINTS.map((p) => (
                  <div key={p.title} className="card p-4">
                    <h3 className="text-[0.9375rem] font-bold text-primary mb-1.5">{p.title}</h3>
                    <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{p.text}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">What You Should Know Before Enrolling</h2>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 not-prose">
                {BEFORE_ENROL.map((li) => (
                  <div key={li} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary">
                    <span className="text-secondary mt-0.5">✓</span>
                    <span>{li}</span>
                  </div>
                ))}
              </div>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Choose a Curriculum That Fits You
                </h3>
                <p className="text-text-secondary mb-6">
                  The right curriculum is the one that matches your existing training, subspecialty interests,
                  career goals, and desired level of clinical exposure. Explore MedFellow Academy&apos;s
                  Fellowship Course in Neurosurgery.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/courses/fellowship-in-neurosurgery" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-center">
                    View Fellowship Details
                  </Link>
                  <Link href="/courses/best-fellowship-course-in-neurosurgery" className="inline-block px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all text-center">
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
            <TopicClusterLinks title="Neurosurgery Resources" links={CLUSTER_LINKS} />
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
              <Link href="/courses/best-fellowship-course-in-neurosurgery" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">Fellowship Guide</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Best Fellowship Course in Neurosurgery
                </h3>
                <p className="text-sm text-text-secondary">A complete guide to curriculum, clinical exposure, skills, eligibility, learning formats, and career scope...</p>
              </Link>
              <Link href="/blog/skills-you-learn-during-a-neurosurgery-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Clinical Skills</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Skills You Learn During a Neurosurgery Fellowship
                </h3>
                <p className="text-sm text-text-secondary">The clinical, analytical, academic, and professional skills developed during training...</p>
              </Link>
              <Link href="/blog/how-to-choose-a-neurosurgery-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  How to Choose a Neurosurgery Fellowship
                </h3>
                <p className="text-sm text-text-secondary">How to evaluate curriculum, faculty, clinical exposure, and career relevance...</p>
              </Link>
              <Link href="/blog/online-vs-offline-neurosurgery-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Online vs Offline Neurosurgery Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Compare flexibility, clinical exposure, practical learning, and overall training formats...</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import TopicClusterLinks from "@/components/TopicClusterLinks";
import Link from "next/link";
import Image from "next/image";

const CLUSTER_LINKS = [
  { label: "Best Fellowship Course in Dermatology (Guide)", href: "/courses/best-fellowship-course-in-dermatology", type: "guide" as const },
  { label: "How to Choose a Dermatology Fellowship", href: "/blog/how-to-choose-a-dermatology-fellowship", type: "blog" as const },
  { label: "Questions to Ask Before Joining a Dermatology Fellowship", href: "/blog/questions-to-ask-before-joining-a-dermatology-fellowship", type: "blog" as const },
  { label: "Online vs Offline Dermatology Fellowship", href: "/blog/online-vs-offline-dermatology-fellowship", type: "blog" as const },
  { label: "Skills You Learn During a Dermatology Fellowship", href: "/blog/skills-you-learn-during-a-dermatology-fellowship", type: "blog" as const },
  { label: "Is a Dermatology Fellowship Worth It?", href: "/blog/is-a-dermatology-fellowship-worth-it", type: "blog" as const },
];

export const metadata: Metadata = {
  title: "Skills You Learn During a Dermatology Fellowship | MedFellow",
  description:
    "Explore the key skills doctors develop during a dermatology fellowship, from skin examination and dermoscopy to diagnosis, lasers, aesthetics and patient management.",
  keywords:
    "dermatology fellowship skills, skills in dermatology fellowship, dermatology training skills, dermatology clinical skills, dermatology fellowship course",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/blog/skills-you-learn-during-a-dermatology-fellowship/" },
  openGraph: {
    title: "Skills You Learn During a Dermatology Fellowship",
    description:
      "From skin examination and dermoscopy to diagnosis, inflammatory and infectious dermatology, lasers, aesthetics, and patient management.",
    type: "article",
    url: "https://www.medfellowacademy.com/blog/skills-you-learn-during-a-dermatology-fellowship/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skills You Learn During a Dermatology Fellowship",
    description: "The clinical, diagnostic, procedural, and patient-care skills developed through dermatology fellowship training.",
  },
};

const FAQS = [
  {
    q: "What skills do you learn during a dermatology fellowship?",
    a: "Doctors may develop skills in skin examination, lesion recognition, clinical diagnosis, differential diagnosis, dermoscopy, inflammatory and infectious dermatology, hair and nail disorders, aesthetic dermatology, laser therapy, procedures, patient counseling, and clinical decision-making.",
  },
  {
    q: "Does a dermatology fellowship teach practical procedures?",
    a: "This depends on the program. Some fellowships include clinical observation, demonstrations, simulation, or supervised practical training. Always confirm exactly what practical exposure is included.",
  },
  {
    q: "Is dermoscopy taught in a dermatology fellowship?",
    a: "Dermoscopy can be included in a comprehensive dermatology curriculum, particularly as part of lesion assessment and diagnostic learning. Check the individual fellowship syllabus to confirm the depth of coverage.",
  },
  {
    q: "Will I learn how to diagnose skin diseases?",
    a: "Yes, diagnostic reasoning is typically an important component of dermatology fellowship education. Training may cover lesion morphology, distribution, history-taking, differential diagnosis, investigations, and treatment planning.",
  },
  {
    q: "Does dermatology fellowship training include infectious skin diseases?",
    a: "A comprehensive program may cover fungal, bacterial, viral, parasitic, and tropical dermatological infections, along with approaches to diagnosis and management.",
  },
  {
    q: "Can I learn aesthetic dermatology during a fellowship?",
    a: "Some fellowship programs include cosmetic and aesthetic dermatology. Topics may include cosmetic assessment, pigmentation, acne scars, skin rejuvenation, procedures, and treatment planning.",
  },
  {
    q: "Does a dermatology fellowship teach laser treatments?",
    a: "Some programs include laser therapy as part of aesthetic or procedural dermatology education. Check whether the course offers theoretical education, demonstrations, clinical observation, or supervised hands-on training.",
  },
  {
    q: "Is an online dermatology fellowship enough to develop practical skills?",
    a: "Online learning can be effective for academic knowledge, case discussions, diagnostic reasoning, and theory. Practical and procedural competency requires appropriate supervised clinical exposure.",
  },
  {
    q: "Does completing a dermatology fellowship make me a dermatologist?",
    a: "Not automatically. A fellowship certificate is different from a formally recognized specialist qualification. Specialist registration and professional scope depend on the applicable educational and regulatory framework.",
  },
  {
    q: "How should I evaluate the skills taught by a dermatology fellowship?",
    a: "Look at the detailed curriculum, teaching methods, clinical exposure, practical components, faculty expertise, assessments, and supervision. Ask how the skills are actually taught and evaluated rather than simply counting the topics listed.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Skills You Learn During a Dermatology Fellowship",
  description:
    "The clinical, diagnostic, procedural, and patient-care skills doctors develop during a dermatology fellowship.",
  image: "https://www.medfellowacademy.com/courses/dermatology.jpg",
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
    "@id": "https://www.medfellowacademy.com/blog/skills-you-learn-during-a-dermatology-fellowship/",
  },
};

const SKILL_AREAS = [
  { n: 1, title: "Skin Examination Skills", text: "Recognizing primary and secondary lesions (macules, papules, plaques, nodules, vesicles, pustules, wheals, ulcers, crusts, scales), assessing distribution and pattern (localized or generalized, symmetrical or asymmetrical, flexural or extensor, photo-distributed, dermatomal), and examining skin, hair, nails, and mucosal surfaces together." },
  { n: 2, title: "Clinical Diagnosis and Differential Diagnosis", text: "Moving from what you see to why it is happening — comparing history, morphology, distribution, associated symptoms, differential diagnosis, investigation, and treatment. Connecting skin findings with systemic disease, recognizing red flags, and developing a repeatable way of thinking through an unfamiliar presentation." },
  { n: 3, title: "Dermoscopy and Diagnostic Skills", text: "Understanding basic dermoscopic principles and patterns, evaluating pigmented and suspicious lesions, improving diagnostic confidence alongside history and examination, and knowing when clinical examination and dermoscopy are sufficient versus when additional investigation or referral is appropriate. It should not replace clinical judgment or histopathology when indicated." },
  { n: 4, title: "Inflammatory and Autoimmune Dermatology Skills", text: "Recognizing atopic and contact dermatitis, psoriasis, urticaria, lichen planus, seborrheic dermatitis, and other inflammatory dermatoses; understanding disease patterns (itching, scaling, erythema, recurrent flares); considering trigger factors (medications, occupation, cosmetics, allergens); and understanding long-term management, follow-up, and adherence." },
  { n: 5, title: "Infectious and Tropical Dermatology Skills", text: "Recognizing common fungal, bacterial, viral, and parasitic infections and tropical dermatoses; differentiating infection from inflammation; understanding appropriate investigations (microscopy, cultures); and improving treatment planning based on likely organism, severity, patient factors, and previous treatment." },
  { n: 6, title: "Hair and Nail Disorder Skills", text: "Evaluating hair loss (pattern hair loss, alopecia areata, telogen effluvium, scarring alopecia, hair shaft disorders), performing a structured scalp examination, recognizing nail changes associated with fungal infections, psoriasis, trauma, and systemic disorders, and building a structured work-up." },
  { n: 7, title: "Aesthetic and Cosmetic Dermatology Skills", text: "Assessing common cosmetic concerns (acne scars, pigmentation, uneven skin tone, fine lines, photoaging, texture, unwanted hair), matching treatment to patient concern and skin characteristics, managing patient expectations, and understanding combination approaches." },
  { n: 8, title: "Laser and Procedural Dermatology Skills", text: "Understanding laser principles (wavelength, target tissue, energy delivery, pulse duration, parameters, skin response), common applications (pigmentation, vascular lesions, acne scars, hair reduction, rejuvenation), patient selection factors, and safety and complications. Practical laser competency requires appropriate supervised clinical training rather than theoretical study alone." },
  { n: 9, title: "Patient Management Skills", text: "Taking a focused dermatology history (onset, duration, progression, symptoms, previous treatments, medications, allergies, family history, occupational exposure, lifestyle), explaining the diagnosis clearly, setting realistic expectations for chronic conditions and aesthetic treatments, and planning follow-up." },
  { n: 10, title: "Clinical Decision-Making Skills", text: "Prioritizing the most important problem, balancing benefit and risk (diagnosis, severity, age, comorbidities, pregnancy, medications, patient preferences, expected benefit, adverse effects), knowing when to refer (biopsy, specialist referral, multidisciplinary evaluation, urgent treatment, systemic investigation), and using evidence to support decisions." },
  { n: 11, title: "Case-Based Reasoning Skills", text: "Connecting theory with practice, comparing similar conditions, learning from diagnostic errors and treatment complications, and developing confidence with unfamiliar cases through a repeatable approach when the diagnosis is not immediately obvious." },
  { n: 12, title: "Academic and Professional Skills", text: "Literature review, structured case presentation, clear clinical documentation, patient education (treatment plans, skin-care routines, medication use, prevention, follow-up), and the habit of lifelong learning in a rapidly evolving field." },
];

const SKILLS_CHECKLIST = [
  { area: "Skin examination", look: "Lesion morphology and systematic examination" },
  { area: "Clinical diagnosis", look: "Differential diagnosis and clinical reasoning" },
  { area: "Dermoscopy", look: "Dermoscopic patterns and lesion assessment" },
  { area: "Inflammatory dermatology", look: "Eczema, psoriasis, dermatitis and related disorders" },
  { area: "Infectious dermatology", look: "Fungal, bacterial, viral and tropical conditions" },
  { area: "Hair disorders", look: "Hair loss and scalp assessment" },
  { area: "Nail disorders", look: "Nail examination and common disorders" },
  { area: "Aesthetic dermatology", look: "Cosmetic assessment and treatment principles" },
  { area: "Laser therapy", look: "Laser principles, indications and safety" },
  { area: "Skin procedures", look: "Procedural principles and appropriate exposure" },
  { area: "Patient management", look: "Counseling, follow-up and treatment planning" },
  { area: "Critical thinking", look: "Red flags, referrals and complex cases" },
  { area: "Research", look: "Literature review and evidence-based practice" },
];

const COMPETENCY_STAGES = [
  { title: "Learning a Procedure", text: "Studying the indications, contraindications, equipment, technique, and complications." },
  { title: "Observing a Procedure", text: "Valuable clinical context, but not equal to independent procedural competency." },
  { title: "Performing Under Supervision", text: "Requires appropriate supervision, patient selection, clinical environment, and assessment." },
  { title: "Practising Independently", text: "Depends on formal qualifications, demonstrated competence, professional registration, institutional credentialing, scope of practice, and applicable regulations." },
];

const CAREER_AREAS = [
  "Dermatology-focused clinical practice", "Cosmetic dermatology", "Procedural dermatology",
  "Hair and scalp clinics", "Skin and laser centres", "Hospitals and multispecialty clinics",
  "Academic and teaching roles", "Further specialty training",
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
              <span>Skills You Learn During a Dermatology Fellowship</span>
            </div>

            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">
                Clinical Skills
              </span>
              <span className="text-sm text-text-secondary">⏱️ 13 min read</span>
              <span className="text-sm text-text-secondary">📅 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Skills You Learn During a Dermatology Fellowship
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
                src="/courses/dermatology.jpg"
                alt="Skills You Learn During a Dermatology Fellowship"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                What looks like a simple skin rash can sometimes represent infection, inflammation, allergy, an
                autoimmune condition, or even an underlying systemic disease. Good dermatology is not simply
                about recognizing a few common skin conditions — it requires a structured approach to skin
                examination, lesion recognition, differential diagnosis, investigation, treatment planning,
                procedures, and patient communication. A well-designed fellowship can help doctors develop
                these skills through structured learning, clinical cases, demonstrations, assessments, and,
                where included, clinical exposure.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">12 Skill Areas Developed in Fellowship Training</h2>
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

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Skills Checklist Before Choosing a Fellowship</h2>
              <div className="overflow-x-auto rounded-lg border border-gray-200 mb-8 not-prose">
                <table className="w-full text-sm text-left">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Skill Area</th>
                      <th className="px-4 py-3 font-semibold">What to Look For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SKILLS_CHECKLIST.map((r, i) => (
                      <tr key={r.area} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 font-medium text-primary border-t border-gray-100">{r.area}</td>
                        <td className="px-4 py-3 text-text-secondary border-t border-gray-100">{r.look}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                The most important question is not simply &quot;How many topics are included?&quot; Ask: &quot;How
                are these skills taught, practiced, and assessed?&quot;
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Fellowship Learning vs Clinical Competency</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-8 not-prose">
                {COMPETENCY_STAGES.map((r) => (
                  <div key={r.title} className="card p-4">
                    <h3 className="text-[0.9375rem] font-bold text-primary mb-1.5">{r.title}</h3>
                    <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{r.text}</p>
                  </div>
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                A fellowship should be evaluated based on what it genuinely provides rather than assuming that
                completion automatically establishes independent procedural competency.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Which Dermatology Skills Should You Prioritize?</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                The most useful skills depend on what you want to do after training. <strong>For general
                clinical dermatology:</strong> examination, diagnosis, differential diagnosis, inflammatory
                disorders, infectious diseases, and patient management. <strong>For aesthetic
                dermatology:</strong> cosmetic assessment, patient selection, treatment planning, lasers,
                procedures, complication awareness, and expectation management. <strong>For hair and nail
                practice:</strong> scalp examination, hair-loss patterns, nail disorders, investigations, and
                treatment planning. <strong>For academic growth:</strong> research methodology, evidence
                appraisal, case presentation, literature review, and teaching skills. <strong>For working
                doctors:</strong> a flexible learning model matters, but it should still provide clear learning
                outcomes and an appropriate practical pathway for the skills being taught.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Career Opportunities After a Dermatology Fellowship</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Completing a Fellowship in Dermatology can support professional development in several areas,
                depending on your existing medical qualification, experience, scope of practice, employer, and
                applicable regulations:
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-6 not-prose">
                {CAREER_AREAS.map((li) => (
                  <div key={li} className="flex items-start gap-2 text-[0.9375rem] text-text-secondary">
                    <span className="text-secondary mt-0.5">✓</span>
                    <span>{li}</span>
                  </div>
                ))}
              </div>
              <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg mb-8 not-prose">
                <p className="text-sm text-text-secondary leading-relaxed">
                  A fellowship certificate is different from a formal specialist qualification. Completing a
                  fellowship does not automatically confer specialist registration, independent procedural
                  privileges, or specialist status. Hands-on procedural practice should be obtained through
                  appropriate supervised clinical training.
                </p>
              </div>

              <div className="bg-linear-to-br from-accent/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Build Skills That Improve Diagnosis
                </h3>
                <p className="text-text-secondary mb-6">
                  Explore the MedFellow Academy Fellowship in Dermatology and review the curriculum, training
                  format, eligibility, and course structure. Ask how each skill is actually taught and assessed.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/courses/fellowship-in-dermatology" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-center">
                    View Fellowship Details
                  </Link>
                  <Link href="/courses/best-fellowship-course-in-dermatology" className="inline-block px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all text-center">
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
            <TopicClusterLinks title="Dermatology Resources" links={CLUSTER_LINKS} />
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
              <Link href="/courses/best-fellowship-course-in-dermatology" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">Fellowship Guide</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Best Fellowship Course in Dermatology
                </h3>
                <p className="text-sm text-text-secondary">A complete guide to curriculum, clinical exposure, learning format, fees, and career goals...</p>
              </Link>
              <Link href="/blog/is-a-dermatology-fellowship-worth-it" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Career Planning</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Is a Dermatology Fellowship Worth It?
                </h3>
                <p className="text-sm text-text-secondary">Understand the potential benefits, limitations, career value, and factors to consider...</p>
              </Link>
              <Link href="/blog/how-to-choose-a-dermatology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  How to Choose a Dermatology Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Compare eligibility, curriculum, faculty, practical exposure, fees, and career relevance...</p>
              </Link>
              <Link href="/blog/online-vs-offline-dermatology-fellowship" className="card p-6 hover:shadow-lg transition-all group">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Fellowship Guides</span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors">
                  Online vs Offline Dermatology Fellowship
                </h3>
                <p className="text-sm text-text-secondary">Compare online, offline, and hybrid dermatology fellowship formats...</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

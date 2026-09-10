import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import TopicClusterLinks from "@/components/TopicClusterLinks";
import {
  GraduationCap,
  Award,
  ListChecks,
  Clock,
  ClipboardList,
  ShieldCheck,
  Users,
  Link2,
  Briefcase,
  Target,
  Quote,
  HelpCircle,
} from "lucide-react";

const CLUSTER_LINKS = [
  { label: "Best Fellowship Course in Urology (Guide)", href: "/best-fellowship-course-in-urology", type: "guide" as const },
  { label: "How to Choose a Urology Fellowship", href: "/blog/how-to-choose-a-urology-fellowship", type: "blog" as const },
  { label: "Questions to Ask Before Joining a Urology Fellowship", href: "/blog/questions-to-ask-before-joining-a-urology-fellowship", type: "blog" as const },
  { label: "Online vs Offline Urology Fellowship", href: "/blog/online-vs-offline-urology-fellowship", type: "blog" as const },
  { label: "Career Opportunities After a Urology Fellowship", href: "/blog/career-opportunities-after-a-urology-fellowship", type: "blog" as const },
  { label: "Who Can Apply for a Urology Fellowship? Eligibility Guide", href: "/blog/who-can-apply-for-a-urology-fellowship-eligibility-guide", type: "blog" as const },
  { label: "Skills You Will Learn During a Urology Fellowship", href: "/blog/skills-you-will-learn-during-a-urology-fellowship", type: "blog" as const },
];

function SectionHeading({ icon: Icon, children }: { icon: React.ComponentType<{ className?: string }>; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mt-2 mb-4">
      <span className="w-9 h-9 rounded-full bg-[#e8f2ea] text-[#15401E] flex items-center justify-center shrink-0">
        <Icon className="w-[18px] h-[18px]" />
      </span>
      <h2 className="text-2xl md:text-3xl font-bold text-[#111827]">{children}</h2>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Best Fellowship Course in Urology | MedFellow Academy",
  description:
    "Compare the best fellowship course in urology — endourology, uro-oncology, reconstructive urology, andrology and more, with flexible online learning for practising surgeons.",
  keywords:
    "fellowship in urology, best fellowship course in urology, urology fellowship, urology fellowship course, online urology fellowship",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/best-fellowship-course-in-urology" },
  openGraph: {
    title: "Best Fellowship Course in Urology",
    description:
      "A structured urology fellowship covering endourology, uro-oncology, reconstructive urology, andrology, female and pediatric urology, with flexible learning for working doctors.",
    type: "article",
    url: "https://www.medfellowacademy.com/best-fellowship-course-in-urology",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Academy Fellowship in Urology" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Fellowship Course in Urology",
    description: "A complete guide for surgeons seeking structured, flexible advanced training across modern urology.",
  },
};

const STATS = [
  { icon: "🎓", value: "46+", label: "Medical Fellowship Programs" },
  { icon: "👨‍⚕️", value: "3,500+", label: "Doctors Trained" },
  { icon: "🏥", value: "Advanced", label: "Structured Curriculum" },
  { icon: "⭐", value: "4.8/5", label: "Doctor Satisfaction Rating" },
];

const BENEFITS = [
  "Develop advanced knowledge in modern urology",
  "Strengthen clinical decision making",
  "Understand minimally invasive surgical concepts",
  "Improve patient assessment and management",
  "Learn current evidence-based treatment approaches",
  "Enhance multidisciplinary collaboration",
  "Stay updated with evolving technologies",
  "Support long-term professional growth",
];

const MODULES = [
  { title: "Foundations of Clinical Urology", text: "Urological anatomy and physiology, patient evaluation, diagnostic investigations, and clinical examination — the basis for safe management of common and complex disorders." },
  { title: "Endourology and Stone Management", text: "Evaluation and management of urinary stone disease, including principles of ureteroscopy, percutaneous nephrolithotomy, laser lithotripsy, patient selection, and postoperative care." },
  { title: "Uro-Oncology", text: "Cancers of the kidney, bladder, prostate, and testes — staging systems, multidisciplinary treatment planning, and evolving concepts in surgical and medical management." },
  { title: "Reconstructive Urology", text: "Principles of urethral reconstruction, urinary diversion, trauma management, and reconstructive procedures that help restore urinary function and quality of life." },
  { title: "Andrology and Male Infertility", text: "Male reproductive health, erectile dysfunction, infertility evaluation, hormonal disorders, and evidence-based treatment approaches common in urological practice." },
  { title: "Female Urology and Pelvic Floor Disorders", text: "Urinary incontinence, pelvic floor dysfunction, recurrent urinary tract infections, voiding disorders, and patient-centred management strategies." },
  { title: "Pediatric Urology", text: "Congenital anomalies, vesicoureteral reflux, undescended testes, hydronephrosis, and common pediatric urological conditions through structured learning." },
  { title: "Emerging Technologies in Urology", text: "Robotic surgery, laparoscopic techniques, laser applications, digital imaging, and the growing role of artificial intelligence in urological practice." },
  { title: "Case-Based Clinical Discussions", text: "Faculty-led analysis of investigations, differential diagnoses, and management options — applying current guidelines to real clinical scenarios." },
];

const PROGRAM_HIGHLIGHTS = [
  "Flexible online learning", "Weekend academic sessions", "Recorded lectures for revision",
  "Structured module-based curriculum", "Faculty mentorship", "Interactive clinical discussions",
  "Evidence-based learning", "Continuous academic support",
];

const SKILLS = [
  "Clinical evaluation of urological disorders", "Diagnostic interpretation", "Evidence-based treatment planning",
  "Stone disease management concepts", "Urological emergency assessment", "Patient counselling",
  "Clinical documentation", "Multidisciplinary collaboration", "Surgical decision making",
  "Long-term patient follow-up", "Professional communication", "Ethical clinical practice",
];

const ELIGIBLE = [
  "MS General Surgery graduates", "DNB General Surgery graduates", "Practising general surgeons",
  "Consultants interested in urology", "Doctors preparing for super-specialty careers",
  "Surgeons seeking structured fellowship education",
];

const WHY_MEDFELLOW = [
  "Flexible online learning designed for working professionals",
  "Structured curriculum covering core and advanced urology topics",
  "Experienced faculty from reputed institutions",
  "Clinical case discussions that improve decision making",
  "Evidence-based academic content",
  "Recorded sessions for anytime learning",
  "Career-focused fellowship programs",
  "Hybrid learning options for selected programs",
];

const CAREER_ROLES = [
  "Urology Consultant", "Endourology Specialist", "Uro-Oncology Team Member", "Reconstructive Urology Practice",
  "Academic Faculty / Medical College Educator", "Clinical Research Associate", "Multispecialty Hospital Consultant",
  "Specialty Urology Centre", "Private Surgical Practice",
];

const CASE_STUDIES = [
  {
    title: "Case Study 1: Building Confidence in Endourology",
    text: "A practising general surgeon wanted to strengthen his understanding of modern stone disease management before expanding his surgical practice. Structured academic exposure to endourology, current treatment guidelines, and case discussions on minimally invasive procedures helped him improve patient counselling and collaborate more effectively with specialist urology teams. Illustrative example, not a verified individual outcome.",
  },
  {
    title: "Case Study 2: Advancing Towards a Specialised Career",
    text: "A surgeon with several years of general surgery experience wanted a stronger focus on urology. The fellowship deepened her understanding of uro-oncology, reconstructive urology, and evidence-based patient management, building confidence while preparing for future opportunities in specialty hospitals. Illustrative example, not a verified individual outcome.",
  },
];

const COMPARISON_ROWS = [
  { feature: "Learning format", medfellow: "Flexible online with optional clinical training", other: "Mostly classroom or fixed schedules" },
  { feature: "Curriculum", medfellow: "Structured and comprehensive", other: "Often limited or topic-specific" },
  { feature: "Faculty support", medfellow: "Continuous mentorship", other: "Limited to classroom sessions" },
  { feature: "Case-based learning", medfellow: "Regular clinical case discussions", other: "Varies by provider" },
  { feature: "Flexibility", medfellow: "Designed for working doctors", other: "May require time away from practice" },
  { feature: "Learning resources", medfellow: "Recorded lectures and study materials", other: "Limited learning resources" },
  { feature: "Career support", medfellow: "Academic guidance and career assistance", other: "Often limited" },
];

const RELATED_LINKS = [
  { name: "Fellowship Course in Urology", desc: "Explore eligibility, curriculum, fees, and career opportunities.", href: "/courses/fellowship-in-urology" },
  { name: "How to Choose a Urology Fellowship", desc: "The key factors to compare before enrolling in a fellowship.", href: "/blog/how-to-choose-a-urology-fellowship" },
  { name: "Questions to Ask Before Joining a Urology Fellowship", desc: "The important questions every doctor should ask before applying.", href: "/blog/questions-to-ask-before-joining-a-urology-fellowship" },
  { name: "Online vs Offline Urology Fellowship", desc: "Compare learning formats to find the option that fits your schedule.", href: "/blog/online-vs-offline-urology-fellowship" },
  { name: "Career Opportunities After a Urology Fellowship", desc: "Specialist career pathways after completing fellowship training.", href: "/blog/career-opportunities-after-a-urology-fellowship" },
  { name: "Who Can Apply for a Urology Fellowship?", desc: "An eligibility guide covering qualifications and background.", href: "/blog/who-can-apply-for-a-urology-fellowship-eligibility-guide" },
  { name: "Skills You Will Learn During a Urology Fellowship", desc: "The clinical, diagnostic, and decision-making skills developed in training.", href: "/blog/skills-you-will-learn-during-a-urology-fellowship" },
];

const FAQS = [
  { q: "Is a Fellowship in Urology worth pursuing?", a: "A fellowship helps doctors stay updated with modern clinical practices, strengthens evidence-based decision making, and supports long-term professional development in urology. Its value depends on how well the curriculum and format match your goals." },
  { q: "Can I study while working full time?", a: "Yes. Many fellowship programs are designed with flexible online learning, recorded lectures, and weekend sessions, allowing doctors to continue their clinical responsibilities while studying." },
  { q: "What topics are usually covered in a urology fellowship?", a: "Most structured fellowships include endourology, uro-oncology, reconstructive urology, andrology and male infertility, female urology, pediatric urology, emerging technologies, and case-based clinical discussions." },
  { q: "Will I learn about minimally invasive urology?", a: "Modern fellowship programs introduce concepts related to minimally invasive procedures, laser technologies, and current treatment approaches. Independent procedural competency still requires appropriate supervised clinical training." },
  { q: "How do I choose the best urology fellowship?", a: "Look for a structured curriculum, experienced faculty, flexible learning options, regular clinical case discussions, academic support, clear certification, and a strong reputation for medical education." },
  { q: "Is an online urology fellowship effective?", a: "A well-designed online fellowship can deliver high-quality academic learning through recorded lectures, live sessions, faculty interaction, and case-based discussions. Practical skills need supervised clinical exposure." },
  { q: "Does the fellowship improve career opportunities?", a: "A fellowship demonstrates commitment to continuous learning and can strengthen your profile for roles in hospitals, specialty centres, academics, and clinical research — within your qualification and regulatory scope." },
  { q: "Does the fellowship include case-based learning?", a: "Yes. Case discussions are an important part of most fellowship programs, helping participants apply theoretical knowledge to real clinical scenarios." },
  { q: "Who is eligible for a urology fellowship?", a: "The brief lists MS or DNB General Surgery graduates, practising general surgeons, and consultants interested in urology. Always confirm the current eligibility criteria with the fellowship provider before applying." },
  { q: "Is a fellowship the same as a formal super-specialty qualification?", a: "No. A fellowship certificate is an educational credential and is different from a recognised postgraduate or super-specialty qualification. Specialist registration and scope of practice are governed separately." },
];

export default function UrologyGuidePage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="border-b border-[#E5E7EB] py-10 md:py-14">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-text-secondary mb-6">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/courses" className="hover:text-primary">Courses</Link>
            <span>/</span>
            <span>Best Fellowship Course in Urology</span>
          </div>

          <span className="section-label">Advance Your Urology Career</span>
          <h1 className="section-title mt-2 mb-4 !text-3xl md:!text-4xl">
            Best Fellowship Course in Urology
          </h1>

          <p className="text-[1rem] text-text-secondary leading-relaxed mb-4">
            Urology has become one of the most technology-driven surgical specialties. From endourology and laser
            procedures to robotic surgery and uro-oncology, modern urologists are expected to combine strong
            clinical judgment with advanced procedural knowledge. As the burden of kidney stones, prostate
            disorders, urinary tract disease, male infertility, and urological cancers keeps rising, surgeons with
            updated training are increasingly sought after across hospitals and specialty centres.
          </p>
          <p className="text-[1rem] text-text-secondary leading-relaxed mb-8">
            Choosing the best fellowship course in urology is about far more than a strong course title. A
            structured fellowship provides academic learning, expert mentorship, case-based discussions, and
            exposure to evidence-based clinical approaches — an opportunity to keep learning without interrupting
            your medical career.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/apply" className="inline-flex items-center justify-center px-6 py-3 bg-[#15401E] text-white rounded-md font-semibold text-[0.9375rem] hover:bg-[#0f2e15] transition-colors">
              Apply Now
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-white border border-[#D1D5DB] text-[#15401E] rounded-md font-semibold text-[0.9375rem] hover:border-[#15401E] transition-colors">
              Schedule Consultation
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10">
            {STATS.map((s) => (
              <div key={s.label} className="card p-4 text-center">
                <div className="text-xl mb-1">{s.icon}</div>
                <div className="text-lg font-bold text-[#15401E]">{s.value}</div>
                <div className="text-[0.75rem] text-text-secondary leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container-custom max-w-6xl py-4">
      <div className="grid lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2">

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Growing Demand for Urologists</span>
          <SectionHeading icon={Award}>Why Pursue a Fellowship in Urology?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Urology is expanding rapidly because of rising cases of kidney stone disease, prostate enlargement,
            urinary tract disorders, male infertility, and urological cancers. At the same time, advances in
            minimally invasive surgery, laser technology, and robotic-assisted procedures have changed how
            patients are diagnosed and treated. Keeping pace requires continuous learning beyond postgraduate
            education, and a fellowship offers a structured pathway to modern diagnostic techniques, treatment
            protocols, and evidence-based practice under experienced faculty.
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {BENEFITS.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Comprehensive Clinical Learning</span>
          <SectionHeading icon={ListChecks}>What You Will Learn During the Fellowship</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-6">
            A well-designed fellowship balances theory with practical clinical understanding. Rather than focusing
            on a single topic, the curriculum introduces the breadth of modern urology through structured modules
            and real-world case discussions.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {MODULES.map((m) => (
              <div key={m.title} className="card p-4">
                <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-1.5">{m.title}</h3>
                <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
          <Link href="/blog/skills-you-will-learn-during-a-urology-fellowship" className="inline-block mt-5 text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            Read more: Skills You Will Learn During a Urology Fellowship →
          </Link>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Flexible Learning for Doctors</span>
          <SectionHeading icon={Clock}>Continue Learning While You Continue Practising</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Demanding clinical schedules stop many doctors from pursuing higher education. A flexible fellowship
            removes that barrier: online learning, recorded lectures, and scheduled academic sessions make it
            possible to balance work, family, and continuing education, and to apply new concepts directly in
            practice.
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-4">
            {PROGRAM_HIGHLIGHTS.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg">
            <p className="text-[0.875rem] text-[#374151] leading-relaxed">
              <strong>Ask what &quot;hands-on&quot; means.</strong> Clarify whether practical exposure includes
              observation, demonstration, simulation, or supervised procedures. Exposure and independent
              procedural competency are not the same.
            </p>
          </div>
          <Link href="/blog/online-vs-offline-urology-fellowship" className="inline-block mt-4 text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            Compare in detail: Online vs Offline Urology Fellowship →
          </Link>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Build Practical Expertise</span>
          <SectionHeading icon={Target}>Skills You Can Develop During the Fellowship</SectionHeading>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {SKILLS.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Find the Right Eligibility</span>
          <SectionHeading icon={Users}>Who Can Apply for a Fellowship in Urology?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            The Fellowship in Urology is designed for doctors who want to strengthen their clinical knowledge and
            stay current with advances in modern urological practice. Typical eligibility from the course brief
            includes:
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-4">
            {ELIGIBLE.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg">
            <p className="text-[0.875rem] text-[#374151] leading-relaxed">
              Always review the eligibility criteria specified by the fellowship provider before applying. A
              fellowship certificate is an educational credential; specialist registration, licensing, and
              procedural privileges are governed separately by the applicable authorities.
            </p>
          </div>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Choose the Right Academy</span>
          <SectionHeading icon={GraduationCap}>Why Choose MedFellow Academy for Your Urology Fellowship?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            A high-quality fellowship should provide structured academic learning, experienced faculty, flexible
            study options, and opportunities to apply evidence-based concepts in practice. MedFellow Academy
            builds every fellowship around the needs of busy healthcare professionals.
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {WHY_MEDFELLOW.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Expand Your Career Options</span>
          <SectionHeading icon={Briefcase}>Career Opportunities After a Fellowship in Urology</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Demand for trained urology professionals continues to grow as healthcare systems invest in advanced
            surgical services and specialised urological care. Completing a fellowship can strengthen your
            professional profile and support roles such as:
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-4">
            {CAREER_ROLES.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg">
            <p className="text-[0.875rem] text-[#374151] leading-relaxed">
              Career outcomes depend on your existing qualification, experience, employer, and the regulations
              that apply where you practise. A fellowship is an addition to professional education, not an
              automatic replacement for a recognised super-specialty qualification.
            </p>
          </div>
          <Link href="/blog/career-opportunities-after-a-urology-fellowship" className="inline-block mt-4 text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            Read more: Career Opportunities After a Urology Fellowship →
          </Link>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Learn From Realistic Goals</span>
          <SectionHeading icon={Quote}>Illustrative Case Studies</SectionHeading>
          <div className="grid md:grid-cols-2 gap-4">
            {CASE_STUDIES.map((c) => (
              <div key={c.title} className="card p-5">
                <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-2">{c.title}</h3>
                <p className="text-[0.8125rem] text-[#374151] leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Compare Before You Decide</span>
          <SectionHeading icon={ShieldCheck}>MedFellow Academy vs Other Fellowship Providers</SectionHeading>
          <div className="overflow-x-auto rounded-lg border border-[#E5E7EB] mb-4">
            <table className="w-full text-[0.875rem] text-left">
              <thead className="bg-[#15401E] text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Factor</th>
                  <th className="px-4 py-3 font-semibold">MedFellow Academy</th>
                  <th className="px-4 py-3 font-semibold">Other Fellowship Providers</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((r, i) => (
                  <tr key={r.feature} className={i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"}>
                    <td className="px-4 py-3 font-medium text-[#111827] border-t border-[#F3F4F6]">{r.feature}</td>
                    <td className="px-4 py-3 text-[#374151] border-t border-[#F3F4F6]">{r.medfellow}</td>
                    <td className="px-4 py-3 text-[#374151] border-t border-[#F3F4F6]">{r.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[0.875rem] text-text-secondary leading-relaxed">
            The better choice depends on your goal — a hospital-based fellowship may offer more direct clinical
            immersion, while an online or hybrid fellowship offers greater flexibility for a working surgeon.
          </p>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Choose With Confidence</span>
          <SectionHeading icon={HelpCircle}>Is a Urology Fellowship Worth It?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            A urology fellowship can be worthwhile when it fills a genuine knowledge or professional-development
            gap — for surgeons who want structured urology education, broader clinical knowledge, exposure to
            endourology and uro-oncology, case-based learning, or a flexible route to keep learning while
            working. Value depends on what you expect: check that the curriculum matches your goals, that the
            format is practical for your schedule, that any clinical component is clearly defined, and that you
            understand what the certificate represents.
          </p>
          <Link href="/blog/how-to-choose-a-urology-fellowship" className="inline-block text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            Read next: How to Choose a Urology Fellowship →
          </Link>
        </section>

        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Explore Your Fellowship Options</span>
          <SectionHeading icon={ClipboardList}>Take the Next Step Towards Advanced Urology Training</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            Explore the MedFellow Academy Fellowship in Urology to review the curriculum, eligibility, learning
            format, fees, and any clinical training options — then choose the learning pathway that fits your
            professional schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/apply" className="inline-flex items-center justify-center px-6 py-3 bg-[#15401E] text-white rounded-md font-semibold text-[0.9375rem] hover:bg-[#0f2e15] transition-colors">
              Apply Now
            </Link>
            <Link href="/courses/fellowship-in-urology" className="inline-flex items-center justify-center px-6 py-3 bg-white border border-[#D1D5DB] text-[#15401E] rounded-md font-semibold text-[0.9375rem] hover:border-[#15401E] transition-colors">
              Explore the Fellowship Course
            </Link>
          </div>
        </section>

        <section className="py-8">
          <span className="section-label">Continue Your Urology Research</span>
          <SectionHeading icon={Link2}>Explore the Urology Cluster</SectionHeading>
          <div className="grid sm:grid-cols-2 gap-3">
            {RELATED_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="card p-4 hover:shadow-md transition-all group">
                <span className="text-[0.875rem] font-semibold text-[#111827] group-hover:text-[#15401E] block mb-1">{l.name}</span>
                <span className="text-[0.8125rem] text-text-secondary">{l.desc}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <div className="lg:col-span-1">
        <TopicClusterLinks title="Urology Resources" links={CLUSTER_LINKS} />
      </div>
      </div>
      </div>

      <FAQ faqs={FAQS} />

      <Footer />
    </div>
  );
}

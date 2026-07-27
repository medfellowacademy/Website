import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import TopicClusterLinks from "@/components/TopicClusterLinks";
import {
  BookOpen,
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
  ClipboardCheck,
  Quote,
  Star,
} from "lucide-react";

const CLUSTER_LINKS = [
  { label: "Best Fellowship Course in High-Risk Pregnancy (Guide)", href: "/courses/best-fellowship-course-in-high-risk-pregnancy", type: "guide" as const },
  { label: "How to Choose a High-Risk Pregnancy Fellowship", href: "/blog/how-to-choose-a-high-risk-pregnancy-fellowship", type: "blog" as const },
  { label: "Online vs Offline High-Risk Pregnancy Fellowship", href: "/blog/online-vs-offline-high-risk-pregnancy-fellowship", type: "blog" as const },
  { label: "Is a High-Risk Pregnancy Fellowship Worth It?", href: "/blog/is-high-risk-pregnancy-fellowship-worth-it", type: "blog" as const },
  { label: "High-Risk Pregnancy Fellowship After MD OBG", href: "/blog/high-risk-pregnancy-fellowship-after-md-obg", type: "blog" as const },
  { label: "Questions to Ask Before Joining a Medical Fellowship", href: "/blog/questions-to-ask-before-joining-a-medical-fellowship", type: "blog" as const },
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
  title: "Best Fellowship Course in High-Risk Pregnancy | MedFellow Academy",
  description:
    "Explore the Best Fellowship Course in High-Risk Pregnancy with detailed information on curriculum, eligibility, career opportunities, clinical training, flexible online learning, and admission for practicing Obstetricians and Gynecologists.",
  keywords:
    "best fellowship course in high-risk pregnancy, best maternal fetal medicine fellowship, high-risk obstetrics fellowship, fetal medicine fellowship course, fellowship in high-risk pregnancy, high-risk pregnancy fellowship, high-risk pregnancy course, maternal medicine fellowship",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/courses/best-fellowship-course-in-high-risk-pregnancy/" },
  openGraph: {
    title: "Best Fellowship Course in High-Risk Pregnancy",
    description:
      "Explore the Best Fellowship Course in High-Risk Pregnancy with detailed information on curriculum, eligibility, career opportunities, and clinical training.",
    type: "article",
    url: "https://www.medfellowacademy.com/courses/best-fellowship-course-in-high-risk-pregnancy/",
    images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Fellowship in High-Risk Pregnancy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Fellowship Course in High-Risk Pregnancy",
    description: "A complete guide for Obstetricians and Gynecologists seeking advanced training in maternal medicine.",
  },
};

const RISK_FACTORS = [
  { group: "Maternal Factors", items: ["Chronic hypertension", "Pre-existing diabetes", "Cardiac disease", "Autoimmune disorders", "Renal disease", "Thyroid disorders"] },
  { group: "Pregnancy-Related Factors", items: ["Gestational hypertension", "Gestational diabetes", "Placenta previa", "Multiple pregnancy", "Pre-eclampsia", "Preterm labour", "Antepartum haemorrhage"] },
  { group: "Fetal Factors", items: ["Fetal growth restriction", "Congenital anomalies", "Abnormal fetal Doppler findings", "Oligohydramnios or polyhydramnios", "Suspected fetal compromise"] },
];

const WHY_TRAIN = [
  "Maternal medical disorders during pregnancy",
  "Evidence-based management protocols",
  "Pregnancy risk assessment",
  "Advanced fetal surveillance",
  "Clinical decision-making in complex scenarios",
  "Multidisciplinary obstetric care",
  "Patient counselling and shared decision-making",
  "Maternal safety and quality improvement",
];

const CHALLENGE_ROWS = [
  { challenge: "Managing pregnancies complicated by chronic medical conditions", helps: "Strengthens evidence-based management strategies and clinical decision-making" },
  { challenge: "Interpreting evolving clinical guidelines", helps: "Supports the application of current recommendations in day-to-day practice" },
  { challenge: "Coordinating multidisciplinary care", helps: "Improves communication and collaborative management across specialties" },
  { challenge: "Counselling patients with complex pregnancies", helps: "Enhances risk communication and shared decision-making skills" },
  { challenge: "Keeping pace with advances in maternal healthcare", helps: "Provides structured learning focused on contemporary obstetric practice" },
];

const CURRICULUM_MODULES = [
  { title: "Maternal Risk Assessment", text: "Helps identify women requiring additional monitoring from early pregnancy." },
  { title: "Hypertensive Disorders", text: "Supports evidence-based management of gestational hypertension, pre-eclampsia, and eclampsia." },
  { title: "Diabetes in Pregnancy", text: "Improves understanding of glycaemic control and maternal-fetal surveillance." },
  { title: "Maternal Medical Disorders", text: "Enables management of pregnancies complicated by cardiac, renal, endocrine, neurological, and autoimmune diseases." },
  { title: "Fetal Surveillance", text: "Develops competency in interpreting fetal wellbeing and monitoring pregnancy progression." },
  { title: "Obstetric Emergencies", text: "Strengthens preparedness for life-threatening maternal complications." },
  { title: "Labour & Delivery Planning", text: "Supports individualized delivery decisions based on maternal and fetal status." },
  { title: "Postpartum Care", text: "Addresses maternal recovery and prevention of future pregnancy complications." },
];

const CORE_AREAS = [
  {
    title: "Maternal Medical Disorders",
    text: "Covers hypertension, diabetes mellitus, thyroid disorders, cardiac disease, renal disorders, autoimmune diseases, hematological conditions, respiratory disorders, and infectious diseases in pregnancy — with a focus on risk stratification, medication considerations, and multidisciplinary referral pathways.",
  },
  {
    title: "Hypertensive Disorders of Pregnancy",
    text: "Explains the spectrum from gestational hypertension to severe pre-eclampsia and eclampsia, emphasizing early diagnosis, maternal stabilization, fetal surveillance, and timing of delivery.",
  },
  {
    title: "Diabetes in Pregnancy",
    text: "Covers pre-existing and gestational diabetes — screening protocols, antenatal monitoring, glycaemic targets, fetal surveillance, labour planning, and postpartum follow-up.",
  },
  {
    title: "Fetal Surveillance",
    text: "Fetal movement assessment, cardiotocography (CTG), biophysical profile, Doppler velocimetry, ultrasound-based growth monitoring, and amniotic fluid assessment.",
  },
];

const COMPETENCIES = [
  { title: "Maternal Risk Assessment", text: "Early identification of women requiring specialized care" },
  { title: "Clinical Decision-Making", text: "Structured management of complex pregnancies" },
  { title: "Fetal Surveillance", text: "Monitoring fetal wellbeing in high-risk pregnancies" },
  { title: "Guideline Interpretation", text: "Applying evidence-based recommendations appropriately" },
  { title: "Patient Counselling", text: "Supporting informed, shared decision-making" },
  { title: "Multidisciplinary Collaboration", text: "Coordinating care with other specialties" },
  { title: "Obstetric Emergency Preparedness", text: "Responding effectively to critical clinical situations" },
  { title: "Professional Communication", text: "Improving documentation and referral quality" },
];

const CAREER_PATHWAYS = [
  { title: "High-Risk Pregnancy Consultant", text: "Comprehensive management of complicated pregnancies", where: "Multi-specialty Hospitals" },
  { title: "Consultant Obstetrician & Gynecologist", text: "Advanced antenatal and intrapartum care", where: "Hospitals & Private Practice" },
  { title: "Maternal Medicine Specialist", text: "Managing medical disorders during pregnancy", where: "Tertiary Care Centres" },
  { title: "High-Risk Antenatal Clinic Specialist", text: "Pregnancy surveillance and counselling", where: "Women's Hospitals" },
  { title: "Clinical Educator", text: "Teaching postgraduate doctors", where: "Medical Colleges" },
  { title: "Academic Faculty", text: "Curriculum development and research", where: "Universities" },
];

const ADMISSION_STEPS = [
  "Submit an Enquiry — share your interest through the online enquiry form",
  "Academic Counselling — discuss your educational goals with the admissions team",
  "Eligibility Review — submit your academic qualifications and professional details",
  "Admission Guidance — receive detailed information on curriculum and learning model",
  "Complete Registration — finish admission formalities and confirm participation",
  "Begin Learning — get access to the fellowship platform and faculty-led sessions",
];

const WHY_MEDFELLOW = [
  "Evidence-based curriculum aligned with contemporary obstetric practice",
  "Faculty with extensive academic and clinical experience",
  "Flexible learning model suitable for practicing doctors",
  "Case-based discussions reflecting real clinical scenarios",
  "Continuous academic mentorship",
  "Focus on practical clinical reasoning rather than rote learning",
  "Structured learning pathway supporting long-term professional development",
];

const RIGHT_FOR_YOU = [
  "Frequently manage women with medical disorders during pregnancy",
  "Want to improve confidence in handling complicated pregnancies",
  "Are interested in maternal medicine and evidence-based obstetrics",
  "Wish to strengthen multidisciplinary clinical decision-making",
  "Plan to expand your role in high-risk antenatal care",
  "Value structured academic learning while continuing clinical practice",
];

const TESTIMONIALS = [
  { quote: "The fellowship helped me approach complicated pregnancies more systematically. The case discussions and faculty guidance improved my confidence while managing patients with multiple obstetric and medical risk factors.", author: "Dr. Meenakshi Rao", role: "Consultant Obstetrician & Gynecologist" },
  { quote: "The flexibility of the program allowed me to continue my hospital practice without compromising my education. Every module was clinically relevant and immediately applicable to my daily practice.", author: "Dr. Karthik Srinivas", role: "Senior Obstetric Consultant" },
  { quote: "What I appreciated most was the emphasis on evidence-based management rather than memorizing protocols. The fellowship encouraged critical thinking and improved my clinical decision-making.", author: "Dr. Nisha Verma", role: "Consultant in Women's Healthcare" },
];

const RELATED_FELLOWSHIPS = [
  { name: "Fellowship in Fetal Medicine", slug: "fellowship-in-fetal-medicine" },
  { name: "Fellowship in Gynecology & Obstetrics", slug: "fellowship-in-gynecology-obstetrics" },
  { name: "Fellowship in Reproductive Medicine", slug: "fellowship-in-reproductive-medicine" },
];

const FAQS = [
  {
    q: "Is High-Risk Pregnancy the same as Maternal Medicine?",
    a: "Not exactly. High-Risk Pregnancy is a broader area of obstetric practice that involves managing pregnancies complicated by maternal medical disorders, obstetric conditions, fetal concerns, or a combination of these factors. Maternal Medicine is an important component of High-Risk Pregnancy but focuses specifically on medical disorders affecting pregnancy.",
  },
  {
    q: "How does a Fellowship in High-Risk Pregnancy differ from a Fellowship in Fetal Medicine?",
    a: "A Fellowship in High-Risk Pregnancy primarily focuses on maternal health, pregnancy complications, obstetric emergencies, and multidisciplinary pregnancy management. A Fellowship in Fetal Medicine places greater emphasis on fetal imaging, prenatal diagnosis, fetal anomalies, and advanced fetal assessment. Although the two disciplines overlap, each has a distinct clinical focus.",
  },
  {
    q: "Will this fellowship help me manage complicated pregnancies more confidently?",
    a: "Yes. The fellowship is designed to strengthen clinical reasoning, evidence-based management, maternal risk assessment, and multidisciplinary decision-making, enabling doctors to approach complicated pregnancies in a more structured and confident manner.",
  },
  {
    q: "Can this fellowship support doctors working in smaller hospitals or private practice?",
    a: "Absolutely. High-risk pregnancies are encountered across a variety of healthcare settings, not only tertiary referral centres. The fellowship helps doctors develop practical approaches that can be applied in private practice, community hospitals, multispecialty hospitals, and referral centres while recognising when multidisciplinary referral is appropriate.",
  },
  {
    q: "Why is evidence-based practice emphasized throughout the fellowship?",
    a: "Clinical guidelines and recommendations in obstetrics continue to evolve as new research becomes available. Evidence-based practice helps doctors make informed clinical decisions, reduce unnecessary variation in care, and provide management strategies that align with current standards and best practices.",
  },
  {
    q: "What should I consider before choosing a High-Risk Pregnancy Fellowship?",
    a: "Doctors should evaluate the curriculum, faculty expertise, flexibility for working professionals, case-based learning opportunities, mentorship, institutional credibility, and the relevance of the fellowship to their long-term professional goals. Choosing a structured program that integrates theory with practical clinical discussions often provides greater long-term value.",
  },
];

export default function HighRiskPregnancyGuidePage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Breadcrumb + Hero */}
      <section className="border-b border-[#E5E7EB] py-10 md:py-14">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-text-secondary mb-6">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <span>Best Fellowship Course in High-Risk Pregnancy</span>
          </div>

          <span className="section-label">A Complete Guide for Obstetricians and Gynecologists</span>
          <h1 className="section-title mt-2 mb-4 !text-3xl md:!text-4xl">
            Best Fellowship Course in High-Risk Pregnancy
          </h1>

          <p className="text-[1rem] text-text-secondary leading-relaxed mb-4">
            Pregnancy is a dynamic physiological process, but not every pregnancy follows a predictable
            course. A significant proportion of expectant mothers require specialized monitoring and medical
            intervention due to pre-existing health conditions, pregnancy-related complications, fetal
            concerns, or obstetric emergencies. Managing these pregnancies demands more than routine
            obstetric knowledge — it requires advanced clinical judgment, evidence-based decision-making, and
            coordinated multidisciplinary care.
          </p>
          <p className="text-[1rem] text-text-secondary leading-relaxed mb-4">
            For doctors looking to strengthen their expertise, a best fellowship course in High-Risk
            Pregnancy offers a structured pathway to deepen their understanding of maternal medicine,
            pregnancy complications, fetal surveillance, obstetric emergencies, and modern clinical protocols.
          </p>
          <p className="text-[1rem] text-text-secondary leading-relaxed mb-8">
            Whether you are an early-career Obstetrician, a practicing consultant, or a doctor seeking
            advanced subspecialty education, this guide explains everything you need to know about pursuing
            a Fellowship in High-Risk Pregnancy — including curriculum, learning outcomes, eligibility, career
            pathways, and how specialized training can contribute to long-term professional growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#15401E] text-white rounded-md font-semibold text-[0.9375rem] hover:bg-[#0f2e15] transition-colors"
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white border border-[#D1D5DB] text-[#15401E] rounded-md font-semibold text-[0.9375rem] hover:border-[#15401E] transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      <div className="container-custom max-w-6xl py-4">
      <div className="grid lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2">

        {/* Why High-Risk Pregnancy Care Matters */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">The Changing Landscape of Obstetric Care</span>
          <SectionHeading icon={Award}>Why High-Risk Pregnancy Care Matters More Than Ever</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            Women are increasingly entering pregnancy with chronic medical conditions, delaying childbirth,
            or conceiving through assisted reproductive technologies. At the same time, improvements in
            prenatal screening have enabled earlier identification of pregnancy-related complications that
            require specialized management.
          </p>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            A pregnancy may become high-risk due to a single condition or a combination of maternal,
            obstetric, and fetal factors:
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {RISK_FACTORS.map((group) => (
              <div key={group.group} className="card p-4">
                <p className="text-[0.8125rem] font-bold text-[#15401E] mb-2.5">{group.group}</p>
                <div className="space-y-1.5">
                  {group.items.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-[0.8125rem] text-[#374151]">
                      <span className="text-[#15401E] mt-0.5">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What Is a High-Risk Pregnancy */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Understanding the Specialty</span>
          <SectionHeading icon={BookOpen}>What Is a High-Risk Pregnancy?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-4">
            High-Risk Pregnancy refers to any pregnancy in which the health of the mother, the fetus, or both
            is at an increased risk of complications before, during, or after childbirth. These pregnancies
            require enhanced monitoring, specialized investigations, and evidence-based management to reduce
            the likelihood of adverse maternal and neonatal outcomes.
          </p>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed">
            Unlike routine antenatal care, management often involves collaboration between Obstetricians,
            Maternal Medicine Specialists, Fetal Medicine Specialists, Neonatologists, Anaesthesiologists,
            Endocrinologists, Cardiologists, and other specialists depending on the clinical scenario.
          </p>
        </section>

        {/* Why Pursue Advanced Training */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Building on Postgraduate Education</span>
          <SectionHeading icon={GraduationCap}>Why Should Doctors Pursue Advanced Training in High-Risk Pregnancy?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            While postgraduate education provides a strong foundation in obstetrics and gynecology, fellowship
            training offers an opportunity to explore advanced concepts in greater depth. A Fellowship in
            High-Risk Pregnancy enables doctors to strengthen their understanding of:
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
            {WHY_TRAIN.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <ComparisonTable
            columns={["Clinical Challenge", "How Advanced Fellowship Training Helps"]}
            rows={CHALLENGE_ROWS.map((r) => ({ a: r.challenge, b: r.helps }))}
          />
        </section>

        {/* Curriculum */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">A Structured Curriculum That Mirrors Modern Practice</span>
          <SectionHeading icon={ListChecks}>What Does a Fellowship in High-Risk Pregnancy Actually Teach?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-6">
            High-risk pregnancy management requires doctors to integrate knowledge from obstetrics, maternal
            medicine, fetal assessment, endocrinology, cardiology, critical care, and neonatology. Below is an
            example of how a structured curriculum may be organized.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {CURRICULUM_MODULES.map((m) => (
              <div key={m.title} className="card p-4">
                <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-1.5">{m.title}</h3>
                <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
          <Link href="/courses/fellowship-in-high-risk-pregnancy" className="inline-block mt-5 text-[0.875rem] font-semibold text-[#15401E] hover:underline">
            View the Complete Fellowship Curriculum →
          </Link>
        </section>

        {/* Core Learning Areas */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Core Learning Areas</span>
          <SectionHeading icon={ClipboardList}>Core Learning Areas of a High-Risk Pregnancy Fellowship</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            While the exact curriculum varies between institutions, a high-quality fellowship should provide
            balanced exposure across maternal medicine, pregnancy complications, and fetal monitoring.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {CORE_AREAS.map((item) => (
              <div key={item.title} className="card p-4">
                <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-1.5">{item.title}</h3>
                <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Competencies */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Key Competencies Developed</span>
          <SectionHeading icon={Target}>Key Competencies Developed Throughout the Fellowship</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            By the end of structured fellowship training, participants should be able to strengthen
            competencies in the following areas:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {COMPETENCIES.map((c) => (
              <div key={c.title} className="card p-4">
                <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-1.5">{c.title}</h3>
                <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Flexible Learning */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Learning Without Putting Your Practice on Hold</span>
          <div className="flex items-center gap-3 mt-2 mb-1">
            <span className="w-9 h-9 rounded-full bg-[#e8f2ea] text-[#15401E] flex items-center justify-center shrink-0">
              <Clock className="w-[18px] h-[18px]" />
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#111827]">Designed for Busy Obstetricians and Gynecologists</h2>
          </div>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mt-4 mb-4">
            One of the biggest challenges faced by practicing Obstetricians and Gynecologists is balancing
            continuous professional education with demanding clinical responsibilities. A well-designed
            Fellowship in High-Risk Pregnancy should integrate seamlessly into professional schedules through
            a flexible learning model — combining live academic sessions, recorded lectures, case-based
            discussions, self-paced modules, and faculty mentorship.
          </p>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed">
            This approach transforms learning from a one-time academic activity into a continuous
            professional development journey, allowing doctors to immediately apply newly acquired knowledge
            in day-to-day clinical practice.
          </p>
        </section>

        {/* Is This Right for You */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Is This Fellowship the Right Choice for You?</span>
          <SectionHeading icon={Users}>Who Should Consider This Fellowship?</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            Choosing a fellowship should never be based solely on the course title. This fellowship may be
            particularly valuable if you:
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {RIGHT_FOR_YOU.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[0.875rem] text-[#374151]">
                <span className="text-[#15401E] mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Career Pathways */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Where Can This Fellowship Take Your Career?</span>
          <SectionHeading icon={Briefcase}>Career Pathways After the Fellowship</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            This fellowship strengthens competencies applicable across hospitals, academic institutions,
            specialty clinics, and healthcare organizations focused on maternal and neonatal care.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {CAREER_PATHWAYS.map((c) => (
              <div key={c.title} className="card p-4">
                <h3 className="text-[0.9375rem] font-bold text-[#111827] mb-1">{c.title}</h3>
                <p className="text-[0.8125rem] text-text-secondary leading-relaxed mb-1.5">{c.text}</p>
                <p className="text-[0.75rem] text-[#15401E] font-semibold">{c.where}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Fellowships */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Integrated Specialty Learning Pathways</span>
          <SectionHeading icon={Link2}>Explore Related Fellowship Programs</SectionHeading>
          <div className="grid sm:grid-cols-3 gap-3">
            {RELATED_FELLOWSHIPS.map((f) => (
              <Link
                key={f.slug}
                href={`/courses/${f.slug}`}
                className="card p-4 hover:shadow-md transition-all group"
              >
                <span className="text-[0.875rem] font-semibold text-[#111827] group-hover:text-[#15401E]">{f.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Admission Process */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Your Fellowship Journey</span>
          <SectionHeading icon={ClipboardCheck}>Admission Process</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            MedFellow Academy follows a guided admission process to ensure every applicant understands the
            curriculum, eligibility requirements, learning methodology, and academic expectations before
            beginning the program.
          </p>
          <div className="space-y-3 mb-6">
            {ADMISSION_STEPS.map((step, i) => (
              <div key={step} className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-[#15401E] text-white text-[0.8125rem] font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <span className="text-[0.9375rem] text-[#374151]">{step}</span>
              </div>
            ))}
          </div>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#15401E] text-white rounded-md font-semibold text-[0.9375rem] hover:bg-[#0f2e15] transition-colors"
          >
            Apply Now
          </Link>
        </section>

        {/* Why MedFellow */}
        <section className="py-8 border-b border-[#F3F4F6]">
          <span className="section-label">Learning That Supports Professional Growth</span>
          <SectionHeading icon={ShieldCheck}>Why Doctors Trust MedFellow Academy</SectionHeading>
          <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
            Doctors choose structured fellowship education not only because of the curriculum but also
            because of the learning environment.
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

        {/* Testimonials */}
        <section className="py-8">
          <span className="section-label">Voices from Our Learners</span>
          <SectionHeading icon={Quote}>What Our Fellows Say</SectionHeading>
          <div className="grid md:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t) => (
              <div key={t.author} className="card p-5">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-[0.8125rem] text-[#374151] leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-[0.8125rem] font-bold text-[#111827]">{t.author}</p>
                <p className="text-[0.75rem] text-text-secondary">{t.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="lg:col-span-1">
        <TopicClusterLinks title="High-Risk Pregnancy Resources" links={CLUSTER_LINKS} />
      </div>
      </div>
      </div>

      <FAQ faqs={FAQS} />

      <Footer />
    </div>
  );
}

function ComparisonTable({
  columns,
  rows,
}: {
  columns: [string, string];
  rows: { a: string; b: string }[];
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-[#E5E7EB] mb-2">
      <table className="w-full text-[0.875rem] text-left">
        <thead className="bg-[#15401E] text-white">
          <tr>
            <th className="px-4 py-3 font-semibold">{columns[0]}</th>
            <th className="px-4 py-3 font-semibold">{columns[1]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.a} className={i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"}>
              <td className="px-4 py-3 font-medium text-[#111827] border-t border-[#F3F4F6]">{r.a}</td>
              <td className="px-4 py-3 text-[#374151] border-t border-[#F3F4F6]">{r.b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

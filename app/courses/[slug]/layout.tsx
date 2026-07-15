import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

const slugMeta: Record<string, { title: string; description: string; keywords: string }> = {
  "fellowship-in-2d-echocardiography": {
    title: "Fellowship Course in 2D Echocardiography - MedFellow Academy",
    description: "Online Fellowship in 2D Echocardiography course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "2d echocardiography fellowship, cardiac imaging, echo fellowship, cardiac ultrasound training",
  },
  "fellowship-in-anesthesia": {
    title: "Fellowship Course in Anesthesia - MedFellow Academy",
    description: "Online Fellowship in Anesthesia course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "anesthesia fellowship, anesthesiology training, regional anesthesia, online fellowship",
  },
  "fellowship-in-arthroscopy": {
    title: "Fellowship Course in Arthroscopy - MedFellow Academy",
    description: "Online Fellowship in Arthroscopy course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "arthroscopy fellowship, joint surgery training, orthopedic fellowship, knee arthroscopy",
  },
  "fellowship-in-arthroscopy-and-arthroplasty": {
    title: "Fellowship Course in Arthroscopy & Arthroplasty - MedFellow Academy",
    description: "Online Fellowship in Arthroscopy & Arthroplasty course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "arthroscopy arthroplasty fellowship, joint replacement fellowship, orthopedic fellowship",
  },
  "fellowship-in-cardiothoracic-surgery": {
    title: "Fellowship Course in Cardiothoracic Surgery - MedFellow Academy",
    description: "Online Fellowship in Cardiothoracic Surgery course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "cardiothoracic surgery fellowship, cardiac surgery training, thoracic surgery, heart surgery fellowship",
  },
  "fellowship-in-clinical-cardiology": {
    title: "Fellowship Course in Clinical Cardiology - MedFellow Academy",
    description: "Online Fellowship in Clinical Cardiology course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "clinical cardiology fellowship, cardiology training, heart disease management, ECG fellowship",
  },
  "fellowship-in-clinical-hematology": {
    title: "Fellowship Course in Clinical Hematology - MedFellow Academy",
    description: "Online Fellowship in Clinical Hematology course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "clinical hematology fellowship, blood disorders, hematology training, leukemia lymphoma",
  },
  "fellowship-in-clinical-neurology": {
    title: "Fellowship Course in Clinical Neurology - MedFellow Academy",
    description: "Online Fellowship in Clinical Neurology course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "clinical neurology fellowship, neurology training, stroke management, epilepsy, neurological disorders",
  },
  "fellowship-in-cosmetic-aesthetic-medicine": {
    title: "Fellowship Course in Cosmetic & Aesthetic Medicine - MedFellow Academy",
    description: "Online Fellowship in Cosmetic & Aesthetic Medicine course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "cosmetic medicine fellowship, aesthetic medicine training, botox filler fellowship, aesthetic doctor",
  },
  "fellowship-in-cosmetic-gynecology": {
    title: "Fellowship Course in Cosmetic Gynecology - MedFellow Academy",
    description: "Online Fellowship in Cosmetic Gynecology course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "cosmetic gynecology fellowship, aesthetic gynecology, vaginal rejuvenation training",
  },
  "fellowship-in-critical-care-medicine": {
    title: "Fellowship Course in Critical Care Medicine - MedFellow Academy",
    description: "Online Fellowship in Critical Care Medicine course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "critical care medicine fellowship, ICU training, intensive care fellowship, ventilator management, sepsis",
  },
  "fellowship-in-dermatology": {
    title: "Fellowship Course in Dermatology - MedFellow Academy",
    description: "Online Fellowship in Dermatology course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "dermatology fellowship, skin disease training, cosmetic dermatology, dermatology online",
  },
  "fellowship-in-diabetes-mellitus": {
    title: "Fellowship Course in Diabetes Mellitus - MedFellow Academy",
    description: "Online Fellowship in Diabetes Mellitus course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "diabetes mellitus fellowship, diabetes management, diabetology training, diabetes fellowship online",
  },
  "fellowship-in-emergency-medicine": {
    title: "Fellowship Course in Emergency Medicine - MedFellow Academy",
    description: "Online Fellowship in Emergency Medicine course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "emergency medicine fellowship, emergency care training, EM fellowship, trauma management",
  },
  "fellowship-in-endocrinology": {
    title: "Fellowship Course in Endocrinology - MedFellow Academy",
    description: "Online Fellowship in Endocrinology course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "endocrinology fellowship, diabetes hormonal disorders, thyroid fellowship, endocrine training",
  },
  "fellowship-in-family-medicine": {
    title: "Fellowship Course in Family Medicine - MedFellow Academy",
    description: "Online Fellowship in Family Medicine course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "family medicine fellowship, primary care fellowship, GP training, family doctor fellowship",
  },
  "fellowship-in-fetal-medicine": {
    title: "Fellowship Course in Fetal Medicine - MedFellow Academy",
    description: "Online Fellowship in Fetal Medicine course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "fetal medicine fellowship, maternal fetal medicine, prenatal diagnosis, MFM fellowship",
  },
  "fellowship-in-gastroenterology": {
    title: "Fellowship Course in Gastroenterology - MedFellow Academy",
    description: "Online Fellowship in Gastroenterology course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "gastroenterology fellowship, GI fellowship, liver disease training, endoscopy, hepatology",
  },
  "fellowship-in-general-surgery-1-year": {
    title: "Fellowship Course in General Surgery (1 Year) - MedFellow Academy",
    description: "Online Fellowship in General Surgery (1 Year) course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "general surgery fellowship, 1 year surgery fellowship, surgical training, laparoscopy fellowship",
  },
  "fellowship-in-gynecology-obstetrics": {
    title: "Fellowship Course in Gynecology & Obstetrics - MedFellow Academy",
    description: "Online Fellowship in Gynecology & Obstetrics course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "gynecology obstetrics fellowship, OB-GYN fellowship, obstetrics training, gynecology training",
  },
  "fellowship-in-head-neck-oncology": {
    title: "Fellowship Course in Head & Neck Oncology - MedFellow Academy",
    description: "Online Fellowship in Head & Neck Oncology course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "head neck oncology fellowship, ENT cancer training, head neck cancer, surgical oncology",
  },
  "fellowship-in-high-risk-pregnancy": {
    title: "Fellowship Course in High-Risk Pregnancy - MedFellow Academy",
    description: "Online Fellowship in High-Risk Pregnancy course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "high risk pregnancy fellowship, maternal medicine, preeclampsia training, complicated pregnancy",
  },
  "fellowship-in-internal-medicine": {
    title: "Fellowship Course in Internal Medicine - MedFellow Academy",
    description: "Online Fellowship in Internal Medicine course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "internal medicine fellowship, general medicine training, medicine fellowship, internist training",
  },
  "fellowship-in-interventional-cardiology": {
    title: "Fellowship Course in Interventional Cardiology - MedFellow Academy",
    description: "Online Fellowship in Interventional Cardiology course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "interventional cardiology fellowship, cath lab training, PCI fellowship, angiography training",
  },
  "fellowship-in-interventional-radiology": {
    title: "Fellowship Course in Interventional Radiology - MedFellow Academy",
    description: "Online Fellowship in Interventional Radiology course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "interventional radiology fellowship, IR fellowship, vascular interventions, radiology training",
  },
  "fellowship-in-laparoscopy-hysteroscopy": {
    title: "Fellowship Course in Laparoscopy & Hysteroscopy - MedFellow Academy",
    description: "Online Fellowship in Laparoscopy & Hysteroscopy course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "laparoscopy hysteroscopy fellowship, minimally invasive gynecology, laparoscopic surgery training",
  },
  "fellowship-in-maxillofacial-oral-surgery": {
    title: "Fellowship Course in Maxillofacial & Oral Surgery - MedFellow Academy",
    description: "Online Fellowship in Maxillofacial & Oral Surgery course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "maxillofacial oral surgery fellowship, OMFS training, jaw surgery fellowship, oral surgery",
  },
  "fellowship-in-medical-oncology": {
    title: "Fellowship Course in Medical Oncology - MedFellow Academy",
    description: "Online Fellowship in Medical Oncology course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "medical oncology fellowship, cancer treatment training, chemotherapy, oncology fellowship online",
  },
  "fellowship-in-minimal-access-robotic-surgery": {
    title: "Fellowship Course in Minimal Access & Robotic Surgery - MedFellow Academy",
    description: "Online Fellowship in Minimal Access & Robotic Surgery course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "minimal access surgery fellowship, robotic surgery training, laparoscopic fellowship, MIS fellowship",
  },
  "fellowship-in-neonatology": {
    title: "Fellowship Course in Neonatology - MedFellow Academy",
    description: "Online Fellowship in Neonatology course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "neonatology fellowship, NICU training, newborn care, neonatal fellowship, neonatal resuscitation",
  },
  "fellowship-in-nephrology": {
    title: "Fellowship Course in Nephrology - MedFellow Academy",
    description: "Online Fellowship in Nephrology course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "nephrology fellowship, kidney disease training, dialysis fellowship, CKD management",
  },
  "fellowship-in-neurosurgery": {
    title: "Fellowship Course in Neurosurgery - MedFellow Academy",
    description: "Online Fellowship in Neurosurgery course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "neurosurgery fellowship, brain surgery training, spine surgery fellowship, neurosurgical training",
  },
  "fellowship-in-oral-implantology-laser-dentistry": {
    title: "Fellowship Course in Oral Implantology & Laser Dentistry - MedFellow Academy",
    description: "Online Fellowship in Oral Implantology & Laser Dentistry course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "oral implantology fellowship, laser dentistry training, dental implant fellowship, implantology",
  },
  "fellowship-in-orthopedics": {
    title: "Fellowship Course in Orthopedics - MedFellow Academy",
    description: "Online Fellowship in Orthopedics course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "orthopedics fellowship, bone joint surgery, orthopedic training, fracture management",
  },
  "fellowship-in-pain-management": {
    title: "Fellowship Course in Pain Management - MedFellow Academy",
    description: "Online Fellowship in Pain Management course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "pain management fellowship, chronic pain training, interventional pain, pain medicine fellowship",
  },
  "fellowship-in-pediatric-echocardiography": {
    title: "Fellowship Course in Pediatric Echocardiography - MedFellow Academy",
    description: "Online Fellowship in Pediatric Echocardiography course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "pediatric echocardiography fellowship, congenital heart disease, pediatric cardiac imaging",
  },
  "fellowship-in-pediatric-endocrinology": {
    title: "Fellowship Course in Pediatric Endocrinology - MedFellow Academy",
    description: "Online Fellowship in Pediatric Endocrinology course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "pediatric endocrinology fellowship, child diabetes, growth disorders, pediatric hormones",
  },
  "fellowship-in-pediatric-neurology": {
    title: "Fellowship Course in Pediatric Neurology - MedFellow Academy",
    description: "Online Fellowship in Pediatric Neurology course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "pediatric neurology fellowship, child epilepsy, cerebral palsy, pediatric neurological disorders",
  },
  "fellowship-in-pediatric-orthopedics": {
    title: "Fellowship Course in Pediatric Orthopedics - MedFellow Academy",
    description: "Online Fellowship in Pediatric Orthopedics course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "pediatric orthopedics fellowship, congenital orthopedic disorders, pediatric trauma, deformity correction",
  },
  "fellowship-in-pediatrics": {
    title: "Fellowship Course in Pediatrics - MedFellow Academy",
    description: "Online Fellowship in Pediatrics course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "pediatrics fellowship, child healthcare training, pediatric fellowship, pediatric medicine online",
  },
  "fellowship-in-psychiatric-medicine": {
    title: "Fellowship Course in Psychiatric Medicine - MedFellow Academy",
    description: "Online Fellowship in Psychiatric Medicine course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "psychiatric medicine fellowship, mental health training, psychiatry fellowship, psychopharmacology",
  },
  "fellowship-in-radiology": {
    title: "Fellowship Course in Radiology - MedFellow Academy",
    description: "Online Fellowship in Radiology course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "radiology fellowship, diagnostic imaging training, CT MRI fellowship, radiology online",
  },
  "fellowship-in-reproductive-medicine": {
    title: "Fellowship Course in Reproductive Medicine - MedFellow Academy",
    description: "Online Fellowship in Reproductive Medicine course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "reproductive medicine fellowship, IVF fellowship, fertility training, ART protocols, infertility",
  },
  "fellowship-in-respiratory-medicine": {
    title: "Fellowship Course in Respiratory Medicine - MedFellow Academy",
    description: "Online Fellowship in Respiratory Medicine course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "respiratory medicine fellowship, pulmonology training, COPD asthma fellowship, lung disease",
  },
  "fellowship-in-rheumatology": {
    title: "Fellowship Course in Rheumatology - MedFellow Academy",
    description: "Online Fellowship in Rheumatology course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "rheumatology fellowship, autoimmune disease training, arthritis fellowship, lupus rheumatology",
  },
  "fellowship-in-spine-surgery": {
    title: "Fellowship Course in Spine Surgery - MedFellow Academy",
    description: "Online Fellowship in Spine Surgery course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "spine surgery fellowship, spinal surgery training, discectomy fellowship, spinal fusion",
  },
  "fellowship-in-trichology": {
    title: "Fellowship Course in Trichology - MedFellow Academy",
    description: "Online Fellowship in Trichology course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "trichology fellowship, hair loss training, alopecia treatment, hair restoration, scalp disorders",
  },
  "fellowship-in-urology": {
    title: "Fellowship Course in Urology - MedFellow Academy",
    description: "Online Fellowship in Urology course by MedFellow. Enhance your surgical skills with flexible, expert-led online training.",
    keywords: "urology fellowship, urological surgery training, kidney stone fellowship, BPH prostate",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const meta = slugMeta[slug] || {
    title: `${slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} | MedFellow`,
    description: `Join MedFellow's online fellowship program and advance your medical career with structured training and expert mentorship.`,
    keywords: `${slug.replace(/-/g, " ")}, fellowship, online medical training, MedFellow`,
  };

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    robots: { index: true, follow: true },
    alternates: { canonical: `https://www.medfellowacademy.com/courses/${slug}` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      url: `https://www.medfellowacademy.com/courses/${slug}`,
      images: [{ url: "https://www.medfellowacademy.com/og-image.png", width: 1200, height: 630, alt: "MedFellow Fellowship" }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

export default function CourseSlugLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

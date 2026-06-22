import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

const slugMeta: Record<string, { title: string; description: string; keywords: string }> = {
  "fellowship-in-2d-echocardiography": {
    title: "Fellowship in 2D Echocardiography | Cardiac Imaging | MedFellow",
    description: "Master 2D echo interpretation and cardiac imaging. Online fellowship with hands-on case reviews, expert mentorship, and structured cardiac ultrasound training. Enroll now.",
    keywords: "2d echocardiography fellowship, cardiac imaging, echo fellowship, cardiac ultrasound training",
  },
  "fellowship-in-anesthesia": {
    title: "Fellowship in Anesthesia | Advanced Anesthesiology Training | MedFellow",
    description: "Advance your anesthesia skills with MedFellow's structured online fellowship. Covers regional, obstetric, and critical care anesthesia. Apply for the next intake.",
    keywords: "anesthesia fellowship, anesthesiology training, regional anesthesia, online fellowship",
  },
  "fellowship-in-arthroscopy": {
    title: "Fellowship in Arthroscopy | Joint Surgery Training | MedFellow",
    description: "Gain expertise in arthroscopic techniques for knee, shoulder, and hip. Structured online fellowship with expert surgical mentorship. Enroll now.",
    keywords: "arthroscopy fellowship, joint surgery training, orthopedic fellowship, knee arthroscopy",
  },
  "fellowship-in-arthroscopy-and-arthroplasty": {
    title: "Fellowship in Arthroscopy & Arthroplasty | Joint Replacement | MedFellow",
    description: "Master arthroscopy and joint replacement surgery. Comprehensive online fellowship for orthopedic doctors with expert mentors and clinical exposure. Apply today.",
    keywords: "arthroscopy arthroplasty fellowship, joint replacement fellowship, orthopedic fellowship",
  },
  "fellowship-in-cardiothoracic-surgery": {
    title: "Fellowship in Cardiothoracic Surgery | Cardiac Surgery Training | MedFellow",
    description: "Specialize in heart and chest surgery with MedFellow's cardiothoracic fellowship. Structured curriculum, expert mentors, and real case discussions. Enroll now.",
    keywords: "cardiothoracic surgery fellowship, cardiac surgery training, thoracic surgery, heart surgery fellowship",
  },
  "fellowship-in-clinical-cardiology": {
    title: "Fellowship in Clinical Cardiology | Heart Disease Management | MedFellow",
    description: "Build expertise in clinical cardiology — ECG, echo, heart failure, arrhythmia, and more. Online fellowship with leading cardiologists. Apply for 2026 intake.",
    keywords: "clinical cardiology fellowship, cardiology training, heart disease management, ECG fellowship",
  },
  "fellowship-in-clinical-hematology": {
    title: "Fellowship in Clinical Hematology | Blood Disorders Training | MedFellow",
    description: "Specialize in hematology — anemia, lymphoma, leukemia, coagulation disorders. Online fellowship with structured case-based learning. Enroll today.",
    keywords: "clinical hematology fellowship, blood disorders, hematology training, leukemia lymphoma",
  },
  "fellowship-in-clinical-neurology": {
    title: "Fellowship in Clinical Neurology | Neurological Disorders | MedFellow",
    description: "Master clinical neurology — stroke, epilepsy, Parkinson's, and dementia management. Structured online fellowship with expert neurologists. Apply now.",
    keywords: "clinical neurology fellowship, neurology training, stroke management, epilepsy, neurological disorders",
  },
  "fellowship-in-cosmetic-aesthetic-medicine": {
    title: "Fellowship in Cosmetic & Aesthetic Medicine | MedFellow",
    description: "Learn Botox, fillers, laser treatments, and advanced aesthetic procedures. Online fellowship for doctors entering the fast-growing cosmetic medicine field. Enroll now.",
    keywords: "cosmetic medicine fellowship, aesthetic medicine training, botox filler fellowship, aesthetic doctor",
  },
  "fellowship-in-cosmetic-gynecology": {
    title: "Fellowship in Cosmetic Gynecology | Aesthetic Gynecology Training | MedFellow",
    description: "Specialize in cosmetic gynecology procedures including vaginal rejuvenation, laser therapy, and aesthetic pelvic floor treatments. Enroll with MedFellow today.",
    keywords: "cosmetic gynecology fellowship, aesthetic gynecology, vaginal rejuvenation training",
  },
  "fellowship-in-critical-care-medicine": {
    title: "Fellowship in Critical Care Medicine | ICU Training | MedFellow",
    description: "Develop ICU expertise — ventilator management, sepsis, organ failure, and advanced critical care protocols. Online fellowship with real case mentorship. Apply now.",
    keywords: "critical care medicine fellowship, ICU training, intensive care fellowship, ventilator management, sepsis",
  },
  "fellowship-in-dermatology": {
    title: "Fellowship in Dermatology | Skin Disease & Cosmetic Dermatology | MedFellow",
    description: "Master skin disorders, cosmetic dermatology, and laser treatments. Online fellowship for doctors with expert dermatologist mentorship. Apply for 2026 intake.",
    keywords: "dermatology fellowship, skin disease training, cosmetic dermatology, dermatology online",
  },
  "fellowship-in-diabetes-mellitus": {
    title: "Fellowship in Diabetes Mellitus | Diabetes Management Training | MedFellow",
    description: "Specialize in type 1, type 2, and gestational diabetes management. Structured online fellowship with clinical protocols and expert mentorship. Enroll today.",
    keywords: "diabetes mellitus fellowship, diabetes management, diabetology training, diabetes fellowship online",
  },
  "fellowship-in-emergency-medicine": {
    title: "Fellowship in Emergency Medicine | Emergency Care Training | MedFellow",
    description: "Build emergency medicine expertise — trauma, toxicology, resuscitation, and critical decisions. Online fellowship for EM doctors. Apply for the next intake.",
    keywords: "emergency medicine fellowship, emergency care training, EM fellowship, trauma management",
  },
  "fellowship-in-endocrinology": {
    title: "Fellowship in Endocrinology | Diabetes & Hormonal Disorders | MedFellow",
    description: "Master endocrine disorders — diabetes, thyroid, adrenal, pituitary conditions. Structured online fellowship with expert endocrinologists. Enroll now.",
    keywords: "endocrinology fellowship, diabetes hormonal disorders, thyroid fellowship, endocrine training",
  },
  "fellowship-in-family-medicine": {
    title: "Fellowship in Family Medicine | Primary Care Training | MedFellow",
    description: "Advance your family medicine skills across chronic disease, preventive care, and patient management. Online fellowship for GPs. Apply for 2026 intake.",
    keywords: "family medicine fellowship, primary care fellowship, GP training, family doctor fellowship",
  },
  "fellowship-in-fetal-medicine": {
    title: "Fellowship in Fetal Medicine | Maternal-Fetal Medicine Training | MedFellow",
    description: "Specialize in fetal diagnosis, high-risk pregnancy, and prenatal interventions. Online fellowship in maternal-fetal medicine with expert mentors. Enroll now.",
    keywords: "fetal medicine fellowship, maternal fetal medicine, prenatal diagnosis, MFM fellowship",
  },
  "fellowship-in-gastroenterology": {
    title: "Fellowship in Gastroenterology | GI & Liver Disease Training | MedFellow",
    description: "Master GI diseases, liver disorders, and endoscopy basics. Online fellowship for doctors with structured hepatology and gastroenterology curriculum. Apply now.",
    keywords: "gastroenterology fellowship, GI fellowship, liver disease training, endoscopy, hepatology",
  },
  "fellowship-in-general-surgery-1-year": {
    title: "Fellowship in General Surgery (1 Year) | Surgical Training | MedFellow",
    description: "Comprehensive 1-year general surgery fellowship covering laparoscopy, hernias, GI surgery, and trauma. Expert surgical mentorship online. Apply today.",
    keywords: "general surgery fellowship, 1 year surgery fellowship, surgical training, laparoscopy fellowship",
  },
  "fellowship-in-gynecology-obstetrics": {
    title: "Fellowship in Gynecology & Obstetrics | OB-GYN Training | MedFellow",
    description: "Advance OB-GYN skills — high-risk pregnancy, gynecologic surgery, and obstetric emergencies. Online fellowship with structured curriculum. Enroll now.",
    keywords: "gynecology obstetrics fellowship, OB-GYN fellowship, obstetrics training, gynecology training",
  },
  "fellowship-in-head-neck-oncology": {
    title: "Fellowship in Head & Neck Oncology | ENT Cancer Training | MedFellow",
    description: "Specialize in head and neck cancer diagnosis and management. Structured online fellowship with oncology experts. Apply for the 2026 intake.",
    keywords: "head neck oncology fellowship, ENT cancer training, head neck cancer, surgical oncology",
  },
  "fellowship-in-high-risk-pregnancy": {
    title: "Fellowship in High-Risk Pregnancy | Maternal Medicine Training | MedFellow",
    description: "Master high-risk obstetrics — preeclampsia, preterm labor, GDM, and complicated pregnancies. Online fellowship with expert obstetricians. Enroll now.",
    keywords: "high risk pregnancy fellowship, maternal medicine, preeclampsia training, complicated pregnancy",
  },
  "fellowship-in-internal-medicine": {
    title: "Fellowship in Internal Medicine | General Medicine Training | MedFellow",
    description: "Build expertise across internal medicine — cardiology, nephrology, GI, respiratory, and endocrinology. Structured online fellowship. Apply for 2026.",
    keywords: "internal medicine fellowship, general medicine training, medicine fellowship, internist training",
  },
  "fellowship-in-interventional-cardiology": {
    title: "Fellowship in Interventional Cardiology | Cath Lab Training | MedFellow",
    description: "Specialize in PCI, angiography, and cath lab procedures. Online fellowship in interventional cardiology with expert mentorship. Apply now.",
    keywords: "interventional cardiology fellowship, cath lab training, PCI fellowship, angiography training",
  },
  "fellowship-in-interventional-radiology": {
    title: "Fellowship in Interventional Radiology | IR Procedures Training | MedFellow",
    description: "Master IR procedures — embolization, drainage, vascular access, and image-guided interventions. Structured online fellowship. Enroll today.",
    keywords: "interventional radiology fellowship, IR fellowship, vascular interventions, radiology training",
  },
  "fellowship-in-laparoscopy-hysteroscopy": {
    title: "Fellowship in Laparoscopy & Hysteroscopy | Minimally Invasive GYN | MedFellow",
    description: "Advance minimally invasive gynecologic surgery skills. Online fellowship in laparoscopy and hysteroscopy with expert surgical mentorship. Apply now.",
    keywords: "laparoscopy hysteroscopy fellowship, minimally invasive gynecology, laparoscopic surgery training",
  },
  "fellowship-in-maxillofacial-oral-surgery": {
    title: "Fellowship in Maxillofacial & Oral Surgery | OMFS Training | MedFellow",
    description: "Specialize in oral and maxillofacial surgery — trauma, orthognathic surgery, and jaw reconstruction. Online fellowship with expert mentors. Enroll now.",
    keywords: "maxillofacial oral surgery fellowship, OMFS training, jaw surgery fellowship, oral surgery",
  },
  "fellowship-in-medical-oncology": {
    title: "Fellowship in Medical Oncology | Cancer Treatment Training | MedFellow",
    description: "Master chemotherapy protocols, targeted therapy, and cancer management. Online medical oncology fellowship with expert oncologists. Apply for 2026.",
    keywords: "medical oncology fellowship, cancer treatment training, chemotherapy, oncology fellowship online",
  },
  "fellowship-in-minimal-access-robotic-surgery": {
    title: "Fellowship in Minimal Access & Robotic Surgery | MedFellow",
    description: "Train in laparoscopic and robotic-assisted surgery techniques. Online fellowship with structured curriculum and expert surgical mentorship. Enroll now.",
    keywords: "minimal access surgery fellowship, robotic surgery training, laparoscopic fellowship, MIS fellowship",
  },
  "fellowship-in-neonatology": {
    title: "Fellowship in Neonatology | NICU & Newborn Care Training | MedFellow",
    description: "Develop NICU expertise — neonatal resuscitation, prematurity, and newborn critical care. Online fellowship with expert neonatologists. Apply today.",
    keywords: "neonatology fellowship, NICU training, newborn care, neonatal fellowship, neonatal resuscitation",
  },
  "fellowship-in-nephrology": {
    title: "Fellowship in Nephrology | Kidney Disease & Dialysis Training | MedFellow",
    description: "Specialize in CKD, dialysis, glomerulonephritis, and kidney transplant care. Online nephrology fellowship with structured protocols. Enroll now.",
    keywords: "nephrology fellowship, kidney disease training, dialysis fellowship, CKD management",
  },
  "fellowship-in-neurosurgery": {
    title: "Fellowship in Neurosurgery | Brain & Spine Surgery Training | MedFellow",
    description: "Advance neurosurgical knowledge — brain tumor, spine surgery, trauma, and vascular neurosurgery. Online fellowship with expert mentors. Apply now.",
    keywords: "neurosurgery fellowship, brain surgery training, spine surgery fellowship, neurosurgical training",
  },
  "fellowship-in-oral-implantology-laser-dentistry": {
    title: "Fellowship in Oral Implantology & Laser Dentistry | MedFellow",
    description: "Master dental implants and laser dentistry procedures. Online fellowship for dentists seeking advanced implantology and laser therapy skills. Enroll today.",
    keywords: "oral implantology fellowship, laser dentistry training, dental implant fellowship, implantology",
  },
  "fellowship-in-orthopedics": {
    title: "Fellowship in Orthopedics | Bone & Joint Surgery Training | MedFellow",
    description: "Build expertise in orthopedic surgery — fractures, joint replacement, sports injuries, and spine. Online fellowship with expert orthopedic surgeons. Apply now.",
    keywords: "orthopedics fellowship, bone joint surgery, orthopedic training, fracture management",
  },
  "fellowship-in-pain-management": {
    title: "Fellowship in Pain Management | Chronic Pain Treatment Training | MedFellow",
    description: "Specialize in chronic pain assessment and interventional pain procedures. Online fellowship with structured case-based learning and expert mentors. Enroll now.",
    keywords: "pain management fellowship, chronic pain training, interventional pain, pain medicine fellowship",
  },
  "fellowship-in-pediatric-echocardiography": {
    title: "Fellowship in Pediatric Echocardiography | Pediatric Cardiac Imaging | MedFellow",
    description: "Master pediatric echo — congenital heart disease, fetal echo, and neonatal cardiac imaging. Online fellowship for pediatric cardiologists. Apply now.",
    keywords: "pediatric echocardiography fellowship, congenital heart disease, pediatric cardiac imaging",
  },
  "fellowship-in-pediatric-endocrinology": {
    title: "Fellowship in Pediatric Endocrinology | Child Hormone Disorders | MedFellow",
    description: "Specialize in pediatric diabetes, growth disorders, and hormonal conditions in children. Online fellowship with expert pediatric endocrinologists. Enroll now.",
    keywords: "pediatric endocrinology fellowship, child diabetes, growth disorders, pediatric hormones",
  },
  "fellowship-in-pediatric-neurology": {
    title: "Fellowship in Pediatric Neurology | Child Neurological Disorders | MedFellow",
    description: "Master epilepsy, cerebral palsy, developmental delay, and neurological conditions in children. Online fellowship with expert pediatric neurologists. Apply now.",
    keywords: "pediatric neurology fellowship, child epilepsy, cerebral palsy, pediatric neurological disorders",
  },
  "fellowship-in-pediatrics": {
    title: "Fellowship in Pediatrics | Child Healthcare Training | MedFellow",
    description: "Advance your pediatrics expertise across neonatal care, developmental pediatrics, and childhood diseases. Online fellowship with expert mentors. Enroll now.",
    keywords: "pediatrics fellowship, child healthcare training, pediatric fellowship, pediatric medicine online",
  },
  "fellowship-in-psychiatric-medicine": {
    title: "Fellowship in Psychiatric Medicine | Mental Health Training | MedFellow",
    description: "Specialize in psychiatry — depression, anxiety, schizophrenia, psychopharmacology, and therapy approaches. Online fellowship with expert psychiatrists. Apply now.",
    keywords: "psychiatric medicine fellowship, mental health training, psychiatry fellowship, psychopharmacology",
  },
  "fellowship-in-radiology": {
    title: "Fellowship in Radiology | Diagnostic Imaging Training | MedFellow",
    description: "Build expertise in diagnostic radiology — X-ray, CT, MRI, and ultrasound interpretation. Online fellowship with structured case-based curriculum. Enroll now.",
    keywords: "radiology fellowship, diagnostic imaging training, CT MRI fellowship, radiology online",
  },
  "fellowship-in-reproductive-medicine": {
    title: "Fellowship in Reproductive Medicine | IVF & Fertility Training | MedFellow",
    description: "Specialize in IVF, infertility workup, ART protocols, and fertility care. Online fellowship in reproductive medicine with expert mentorship. Apply today.",
    keywords: "reproductive medicine fellowship, IVF fellowship, fertility training, ART protocols, infertility",
  },
  "fellowship-in-respiratory-medicine": {
    title: "Fellowship in Respiratory Medicine | Pulmonology Training | MedFellow",
    description: "Master respiratory diseases — COPD, asthma, pulmonary fibrosis, sleep apnea, and critical care. Online fellowship with expert pulmonologists. Enroll now.",
    keywords: "respiratory medicine fellowship, pulmonology training, COPD asthma fellowship, lung disease",
  },
  "fellowship-in-rheumatology": {
    title: "Fellowship in Rheumatology | Autoimmune & Joint Disease | MedFellow",
    description: "Specialize in rheumatoid arthritis, lupus, gout, and autoimmune diseases. Online rheumatology fellowship with structured clinical training. Apply now.",
    keywords: "rheumatology fellowship, autoimmune disease training, arthritis fellowship, lupus rheumatology",
  },
  "fellowship-in-spine-surgery": {
    title: "Fellowship in Spine Surgery | Spinal Disorders Training | MedFellow",
    description: "Advance spine surgery skills — discectomy, spinal fusion, deformity correction, and minimally invasive spine procedures. Online fellowship. Enroll now.",
    keywords: "spine surgery fellowship, spinal surgery training, discectomy fellowship, spinal fusion",
  },
  "fellowship-in-trichology": {
    title: "Fellowship in Trichology | Hair & Scalp Disorders Training | MedFellow",
    description: "Specialize in hair loss, alopecia, scalp disorders, and hair restoration techniques. Online trichology fellowship with expert dermatologists. Apply now.",
    keywords: "trichology fellowship, hair loss training, alopecia treatment, hair restoration, scalp disorders",
  },
  "fellowship-in-urology": {
    title: "Fellowship in Urology | Urological Surgery & Disease Training | MedFellow",
    description: "Master urological conditions — kidney stones, BPH, bladder disorders, prostate, and endourology. Online fellowship with expert urologists. Enroll today.",
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

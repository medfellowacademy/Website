import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

// Program data
const programsData: { [key: string]: any } = {
  "fellowship-in-emergency-medicine": {
    name: "Fellowship in Emergency Medicine",
    icon: "🚑",
    duration: "12 Months",
    eligibility: "MBBS",
    description: "Advanced training in emergency care, trauma management, and critical decision-making.",
    overview: "This fellowship provides comprehensive training in emergency medicine covering trauma care, medical emergencies, toxicology, and emergency procedures. Fellows work in high-volume emergency departments gaining hands-on experience in acute care.",
    highlights: ["ICU Rotations", "Trauma Management", "Toxicology", "Emergency Procedures"],
    onlinePrice: 150000,
    month11_1: 170000,
    month10_2: 220000,
    month9_3: 250000,
    month6_6: 350000,
    month12Offline: 440000,
    curriculum: [
      { module: "Medical Emergencies", duration: "3 Months", topics: ["Cardiac Emergencies", "Respiratory Emergencies", "Neurological Emergencies"] },
      { module: "Trauma Care", duration: "3 Months", topics: ["Polytrauma", "Head Injury", "ATLS Protocols"] },
      { module: "Emergency Procedures", duration: "2 Months", topics: ["Airway Management", "Central Lines", "Emergency Ultrasound"] },
      { module: "Critical Care", duration: "3 Months", topics: ["Ventilator Management", "Shock Management", "ICU Procedures"] },
      { module: "Special Topics", duration: "1 Month", topics: ["Toxicology", "Disaster Medicine", "Pediatric Emergencies"] }
    ],
    careerOpportunities: [
      "Emergency Medicine Consultant",
      "Trauma Specialist",
      "Critical Care Physician",
      "Emergency Department Director",
      "Pre-hospital Care Specialist"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-diabetes-mellitus": {
    name: "Fellowship in Diabetes Mellitus",
    icon: "🩺",
    duration: "12 Months",
    eligibility: "MD Medicine/DNB",
    description: "Focused training in diabetes care, insulin management, and metabolic disorders.",
    overview: "This fellowship offers specialized training in comprehensive diabetes management including insulin therapy, complications management, and patient education. Fellows gain expertise in managing complex diabetic patients.",
    highlights: ["Insulin Therapy", "Metabolic Disorders", "Diabetic Complications", "Patient Education"],
    onlinePrice: 150000,
    month11_1: 170000,
    month10_2: 240000,
    month9_3: 280000,
    month6_6: 450000,
    month12Offline: 570000,
    curriculum: [
      { module: "Diabetes Fundamentals", duration: "2 Months", topics: ["Type 1 & Type 2 DM", "Gestational Diabetes", "MODY"] },
      { module: "Insulin Therapy", duration: "3 Months", topics: ["Insulin Regimens", "Pump Therapy", "CGM Technology"] },
      { module: "Complications", duration: "3 Months", topics: ["Neuropathy", "Nephropathy", "Retinopathy", "Foot Care"] },
      { module: "Metabolic Disorders", duration: "2 Months", topics: ["Metabolic Syndrome", "Dyslipidemia", "Obesity"] },
      { module: "Patient Management", duration: "2 Months", topics: ["Lifestyle Modification", "Dietary Planning", "Exercise Programs"] }
    ],
    careerOpportunities: [
      "Consultant Diabetologist",
      "Diabetes Clinic Director",
      "Metabolic Disease Specialist",
      "Academic Endocrinologist",
      "Diabetes Research Coordinator"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-gynecology-obstetrics": {
    name: "Fellowship in Gynecology & Obstetrics",
    icon: "🤰",
    duration: "12 Months",
    eligibility: "MS/MD Obs & Gyn",
    description: "Advanced training in high-risk obstetrics and gynecological procedures.",
    overview: "This fellowship provides specialized training in high-risk pregnancy management, advanced laparoscopic gynecology, and fetal medicine.",
    highlights: ["High-Risk Pregnancy", "Laparoscopic Surgery", "Fetal Medicine", "Gynec Oncology"],
    onlinePrice: 145000,
    month11_1: 190000,
    month10_2: 230000,
    month9_3: 280000,
    month6_6: 390000,
    month12Offline: 520000,
    curriculum: [
      { module: "High-Risk Obstetrics", duration: "4 Months", topics: ["Preeclampsia", "GDM", "Multiple Pregnancy", "Preterm Labor"] },
      { module: "Fetal Medicine", duration: "2 Months", topics: ["Anomaly Scan", "Fetal Echo", "Fetal Therapy"] },
      { module: "Gynecologic Surgery", duration: "3 Months", topics: ["Laparoscopy", "Hysteroscopy", "Vaginal Surgery"] },
      { module: "Reproductive Endocrinology", duration: "2 Months", topics: ["PCOS", "Infertility", "Menstrual Disorders"] },
      { module: "Gynec Oncology", duration: "1 Month", topics: ["Cervical Cancer", "Ovarian Cancer", "Screening"] }
    ],
    careerOpportunities: [
      "Consultant Obstetrician",
      "High-Risk Pregnancy Specialist",
      "Laparoscopic Surgeon",
      "Fetal Medicine Specialist",
      "Academic OB/GYN"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-pediatrics": {
    name: "Fellowship in Pediatrics",
    icon: "👶",
    duration: "12 Months",
    eligibility: "MD Pediatrics/DNB",
    description: "Comprehensive training in pediatric care and child health management.",
    overview: "This fellowship offers advanced training in pediatric subspecialties including neonatology, pediatric emergency care, and developmental pediatrics.",
    highlights: ["Neonatal Care", "Pediatric Emergencies", "Child Development", "Immunization"],
    onlinePrice: 150000,
    month11_1: 180000,
    month10_2: 240000,
    month9_3: 280000,
    month6_6: 470000,
    month12Offline: 580000,
    curriculum: [
      { module: "Neonatal Care", duration: "3 Months", topics: ["Newborn Resuscitation", "NICU Management", "Neonatal Infections"] },
      { module: "Pediatric Emergencies", duration: "3 Months", topics: ["PALS", "Pediatric Trauma", "Acute Illnesses"] },
      { module: "Growth & Development", duration: "2 Months", topics: ["Developmental Milestones", "Nutrition", "Growth Disorders"] },
      { module: "Common Pediatric Conditions", duration: "3 Months", topics: ["Respiratory", "GI Disorders", "Infectious Diseases"] },
      { module: "Subspecialty Exposure", duration: "1 Month", topics: ["Cardiology", "Neurology", "Immunology"] }
    ],
    careerOpportunities: [
      "Consultant Pediatrician",
      "Neonatologist",
      "Pediatric Emergency Specialist",
      "Child Development Expert",
      "Academic Pediatrician"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-dermatology": {
    name: "Fellowship in Dermatology",
    icon: "✨",
    duration: "12 Months",
    eligibility: "MBBS",
    description: "Advanced training in dermatological procedures and cosmetic dermatology.",
    overview: "This fellowship provides comprehensive training in medical and cosmetic dermatology, dermatosurgery, and aesthetic procedures.",
    highlights: ["Cosmetic Procedures", "Laser Therapy", "Skin Surgery", "Aesthetic Dermatology"],
    onlinePrice: 160000,
    month11_1: 185000,
    month10_2: 230000,
    month9_3: 250000,
    month6_6: 390000,
    month12Offline: 520000,
    curriculum: [
      { module: "Medical Dermatology", duration: "3 Months", topics: ["Eczema", "Psoriasis", "Acne", "Infections"] },
      { module: "Dermatosurgery", duration: "2 Months", topics: ["Skin Biopsy", "Excisions", "Cryotherapy"] },
      { module: "Cosmetic Dermatology", duration: "3 Months", topics: ["Botox", "Fillers", "Chemical Peels", "PRP"] },
      { module: "Laser & Devices", duration: "3 Months", topics: ["Laser Hair Removal", "Skin Resurfacing", "Pigmentation"] },
      { module: "Hair & Nails", duration: "1 Month", topics: ["Hair Loss", "Hair Transplant", "Nail Disorders"] }
    ],
    careerOpportunities: [
      "Consultant Dermatologist",
      "Cosmetic Dermatology Specialist",
      "Dermatosurgeon",
      "Aesthetic Clinic Owner",
      "Academic Dermatologist"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-internal-medicine": {
    name: "Fellowship in Internal Medicine",
    icon: "⚕️",
    duration: "12 Months",
    eligibility: "MBBS",
    description: "Comprehensive training in adult medicine and clinical decision-making.",
    overview: "This fellowship offers broad-based training in internal medicine covering all major medical subspecialties with emphasis on clinical reasoning and patient management.",
    highlights: ["Critical Care", "Clinical Diagnosis", "Patient Management", "Medical Procedures"],
    onlinePrice: 175000,
    month11_1: 185000,
    month10_2: 220000,
    month9_3: 240000,
    month6_6: 350000,
    month12Offline: 450000,
    curriculum: [
      { module: "General Medicine", duration: "3 Months", topics: ["Fever Workup", "Common Medical Conditions", "Hospital Medicine"] },
      { module: "Cardiopulmonary", duration: "2 Months", topics: ["Heart Failure", "IHD", "Respiratory Diseases"] },
      { module: "Gastroenterology & Hepatology", duration: "2 Months", topics: ["Liver Diseases", "GI Bleeding", "IBD"] },
      { module: "Nephrology & Electrolytes", duration: "2 Months", topics: ["AKI", "CKD", "Electrolyte Disorders"] },
      { module: "Infectious Diseases", duration: "2 Months", topics: ["Sepsis", "Tropical Diseases", "Antimicrobials"] },
      { module: "Procedures & ICU", duration: "1 Month", topics: ["Central Lines", "Lumbar Puncture", "ICU Care"] }
    ],
    careerOpportunities: [
      "Consultant Physician",
      "Hospitalist",
      "General Medicine Specialist",
      "Academic Internist",
      "Medical Director"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-clinical-cardiology": {
    name: "Fellowship in Clinical Cardiology",
    icon: "❤️",
    duration: "12 Months",
    eligibility: "MBBS/MD General Medicine",
    description: "Specialized training in cardiovascular disease management and diagnostics.",
    overview: "This fellowship provides comprehensive training in non-invasive cardiology including echocardiography, stress testing, and management of cardiovascular diseases.",
    highlights: ["ECG Interpretation", "Echo Cardiography", "Cardiac Emergencies", "Heart Failure Management"],
    onlinePrice: 160000,
    month11_1: 190000,
    month10_2: 240000,
    month9_3: 280000,
    month6_6: 480000,
    month12Offline: 650000,
    curriculum: [
      { module: "Clinical Cardiology", duration: "3 Months", topics: ["IHD", "Heart Failure", "Valvular Heart Disease"] },
      { module: "Echocardiography", duration: "3 Months", topics: ["Transthoracic Echo", "Doppler", "Stress Echo"] },
      { module: "ECG & Arrhythmias", duration: "2 Months", topics: ["ECG Interpretation", "Arrhythmia Management", "Holter Monitoring"] },
      { module: "Cardiac Emergencies", duration: "2 Months", topics: ["ACS Management", "Cardiac Arrest", "Acute HF"] },
      { module: "Preventive Cardiology", duration: "2 Months", topics: ["Risk Assessment", "Lipid Management", "Lifestyle Modification"] }
    ],
    careerOpportunities: [
      "Consultant Cardiologist",
      "Echocardiography Specialist",
      "Heart Failure Specialist",
      "Preventive Cardiologist",
      "Academic Cardiologist"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-critical-care-medicine": {
    name: "Fellowship in Critical Care Medicine",
    icon: "🏥",
    duration: "12 Months",
    eligibility: "MD/DNB Medicine/Anesthesia",
    description: "Comprehensive training in managing critically ill patients in ICU settings.",
    overview: "This fellowship offers intensive training in adult critical care including mechanical ventilation, hemodynamic monitoring, critical care procedures, and management of multi-organ failure.",
    highlights: ["Ventilator Management", "Hemodynamics", "Point-of-Care Ultrasound", "ICU Procedures"],
    onlinePrice: 150000,
    month11_1: 180000,
    month10_2: 230000,
    month9_3: 270000,
    month6_6: 450000,
    month12Offline: 590000,
    curriculum: [
      { module: "Mechanical Ventilation", duration: "3 Months", topics: ["Invasive Ventilation", "NIV", "ARDS Management"] },
      { module: "Hemodynamic Monitoring", duration: "2 Months", topics: ["Shock Management", "Vasopressors", "Fluid Management"] },
      { module: "Critical Care Procedures", duration: "2 Months", topics: ["Central Lines", "Arterial Lines", "Tracheostomy"] },
      { module: "Organ Support", duration: "3 Months", topics: ["Renal Replacement", "Sepsis Management", "Liver Failure"] },
      { module: "Advanced Topics", duration: "2 Months", topics: ["POCUS", "Neurocritical Care", "Ethics"] }
    ],
    careerOpportunities: [
      "Intensivist",
      "Critical Care Consultant",
      "ICU Director",
      "Academic Critical Care Physician",
      "Multidisciplinary ICU Specialist"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-family-medicine": {
    name: "Fellowship in Family Medicine",
    icon: "👨‍👩‍👧‍👦",
    duration: "12 Months",
    eligibility: "MBBS",
    description: "Comprehensive training in primary care and family health management.",
    overview: "This fellowship provides broad training in family medicine covering all age groups and common medical conditions with emphasis on preventive care and community health.",
    highlights: ["Primary Care", "Preventive Medicine", "Community Health", "Chronic Disease Management"],
    onlinePrice: 150000,
    month11_1: 170000,
    month10_2: 220000,
    month9_3: 250000,
    month6_6: 330000,
    month12Offline: 440000,
    curriculum: [
      { module: "Primary Care", duration: "3 Months", topics: ["Common Illnesses", "Minor Procedures", "Patient Counseling"] },
      { module: "Chronic Diseases", duration: "3 Months", topics: ["Diabetes", "Hypertension", "COPD", "Thyroid"] },
      { module: "Women & Child Health", duration: "2 Months", topics: ["ANC Care", "Pediatric Care", "Immunization"] },
      { module: "Geriatrics", duration: "2 Months", topics: ["Elderly Care", "Polypharmacy", "Palliative Care"] },
      { module: "Community Medicine", duration: "2 Months", topics: ["Preventive Care", "Health Education", "Screening Programs"] }
    ],
    careerOpportunities: [
      "Family Physician",
      "Primary Care Consultant",
      "Community Health Specialist",
      "Wellness Clinic Director",
      "Rural Health Practitioner"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-endocrinology": {
    name: "Fellowship in Endocrinology",
    icon: "⚕️",
    duration: "12 Months",
    eligibility: "MD Medicine/DNB",
    description: "Comprehensive training in hormone disorders and endocrine system management.",
    overview: "This fellowship offers specialized training in all aspects of endocrinology including thyroid disorders, pituitary diseases, adrenal disorders, and bone metabolism.",
    highlights: ["Thyroid Disorders", "Pituitary Disorders", "Bone Health", "Reproductive Endocrinology"],
    onlinePrice: 180000,
    month11_1: 210000,
    month10_2: 240000,
    month9_3: 280000,
    month6_6: 490000,
    month12Offline: 650000,
    curriculum: [
      { module: "Thyroid Disorders", duration: "3 Months", topics: ["Hypothyroidism", "Hyperthyroidism", "Thyroid Nodules", "Thyroid Cancer"] },
      { module: "Diabetes & Metabolism", duration: "3 Months", topics: ["Diabetes Management", "Metabolic Syndrome", "Obesity"] },
      { module: "Pituitary & Adrenal", duration: "2 Months", topics: ["Pituitary Tumors", "Cushings", "Addisons", "Acromegaly"] },
      { module: "Bone Metabolism", duration: "2 Months", topics: ["Osteoporosis", "Vitamin D", "Parathyroid Disorders"] },
      { module: "Reproductive Endocrinology", duration: "2 Months", topics: ["PCOS", "Hypogonadism", "Infertility"] }
    ],
    careerOpportunities: [
      "Consultant Endocrinologist",
      "Thyroid Specialist",
      "Diabetes & Endocrinology Expert",
      "Academic Endocrinologist",
      "Bone Health Specialist"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-orthopedics": {
    name: "Fellowship in Orthopedics",
    icon: "🦴",
    duration: "12 Months",
    eligibility: "MS/MD/DNB Orthopedics",
    description: "Comprehensive training in orthopedic surgery and trauma management.",
    overview: "This fellowship provides advanced training in orthopedic surgery including trauma, sports medicine, and joint reconstruction.",
    highlights: ["Trauma Surgery", "Sports Medicine", "Fracture Management", "Joint Surgery"],
    onlinePrice: 160000,
    month11_1: 180000,
    month10_2: 240000,
    month9_3: 270000,
    month6_6: 430000,
    month12Offline: 560000,
    curriculum: [
      { module: "Trauma & Fractures", duration: "4 Months", topics: ["Polytrauma", "Complex Fractures", "Pelvic Trauma"] },
      { module: "Sports Medicine", duration: "2 Months", topics: ["ACL Injuries", "Meniscal Tears", "Athletic Injuries"] },
      { module: "Joint Surgery", duration: "3 Months", topics: ["Hip Surgery", "Knee Surgery", "Shoulder Surgery"] },
      { module: "Spine", duration: "2 Months", topics: ["Spinal Trauma", "Disc Surgery", "Deformity"] },
      { module: "Pediatric Orthopedics", duration: "1 Month", topics: ["Congenital Disorders", "Growth Plate Injuries"] }
    ],
    careerOpportunities: [
      "Consultant Orthopedic Surgeon",
      "Trauma Surgeon",
      "Sports Medicine Specialist",
      "Joint Replacement Surgeon",
      "Academic Orthopedic Surgeon"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-nephrology": {
    name: "Fellowship in Nephrology",
    icon: "🫘",
    duration: "12 Months",
    eligibility: "MD/DNB General Medicine",
    description: "Specialized training in kidney diseases and dialysis management.",
    overview: "This fellowship provides comprehensive training in nephrology including acute and chronic kidney disease, dialysis, and kidney transplant medicine.",
    highlights: ["Dialysis", "Kidney Disorders", "Transplant Medicine", "Renal Procedures"],
    onlinePrice: 180000,
    month11_1: 195000,
    month10_2: 250000,
    month9_3: 290000,
    month6_6: 490000,
    month12Offline: 690000,
    curriculum: [
      { module: "Acute Kidney Injury", duration: "2 Months", topics: ["AKI Management", "Critical Care Nephrology", "CRRT"] },
      { module: "Chronic Kidney Disease", duration: "3 Months", topics: ["CKD Staging", "Complications", "Conservative Management"] },
      { module: "Dialysis", duration: "3 Months", topics: ["Hemodialysis", "Peritoneal Dialysis", "Vascular Access"] },
      { module: "Glomerular Diseases", duration: "2 Months", topics: ["Nephrotic Syndrome", "Glomerulonephritis", "Kidney Biopsy"] },
      { module: "Transplant Nephrology", duration: "2 Months", topics: ["Pre-transplant Workup", "Immunosuppression", "Post-transplant Care"] }
    ],
    careerOpportunities: [
      "Consultant Nephrologist",
      "Dialysis Specialist",
      "Transplant Nephrologist",
      "Academic Nephrologist",
      "Interventional Nephrologist"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-gastroenterology": {
    name: "Fellowship in Gastroenterology",
    icon: "🔬",
    duration: "12 Months",
    eligibility: "MD/DNB General Medicine",
    description: "Comprehensive training in diagnostic and therapeutic gastroenterology procedures.",
    overview: "This fellowship offers in-depth training in diagnostic and therapeutic endoscopy, hepatology, and inflammatory bowel disease management.",
    highlights: ["Endoscopy", "Colonoscopy", "ERCP", "Hepatology"],
    onlinePrice: 180000,
    month11_1: 195000,
    month10_2: 240000,
    month9_3: 280000,
    month6_6: 490000,
    month12Offline: 680000,
    curriculum: [
      { module: "Upper GI Endoscopy", duration: "2 Months", topics: ["Diagnostic EGD", "Variceal Ligation", "Polypectomy"] },
      { module: "Lower GI Endoscopy", duration: "2 Months", topics: ["Colonoscopy", "Polyp Removal", "IBD Management"] },
      { module: "Advanced Procedures", duration: "4 Months", topics: ["ERCP", "Endoscopic Ultrasound", "Therapeutic Endoscopy"] },
      { module: "Hepatology", duration: "3 Months", topics: ["Liver Disease Management", "Hepatitis Care", "Cirrhosis"] },
      { module: "Clinical Research", duration: "1 Month", topics: ["GI Research", "Case Studies", "Publications"] }
    ],
    careerOpportunities: [
      "Consultant Gastroenterologist",
      "Interventional Endoscopist",
      "Hepatologist",
      "Academic Faculty",
      "Specialist in Super-specialty Hospitals"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-reproductive-medicine": {
    name: "Fellowship in Reproductive Medicine",
    icon: "👶",
    duration: "12 Months",
    eligibility: "MD/MS/DNB/DGO",
    description: "Specialized training in infertility management and assisted reproductive techniques.",
    overview: "This fellowship provides comprehensive training in reproductive endocrinology, IVF procedures, and male factor infertility management.",
    highlights: ["IVF", "ICSI", "Fertility Preservation", "Reproductive Surgery"],
    onlinePrice: 160000,
    month11_1: 210000,
    month10_2: 250000,
    month9_3: 290000,
    month6_6: 490000,
    month12Offline: 690000,
    curriculum: [
      { module: "Reproductive Endocrinology", duration: "2 Months", topics: ["Ovulation Disorders", "PCOS", "Hormonal Assessment"] },
      { module: "IVF & ART", duration: "4 Months", topics: ["Ovarian Stimulation", "Egg Retrieval", "Embryo Transfer"] },
      { module: "Male Infertility", duration: "2 Months", topics: ["Semen Analysis", "TESA/PESA", "Sperm Processing"] },
      { module: "Reproductive Surgery", duration: "2 Months", topics: ["Hysteroscopy", "Laparoscopy for Infertility", "Myomectomy"] },
      { module: "Advanced Techniques", duration: "2 Months", topics: ["Embryo Biopsy", "PGD/PGS", "Fertility Preservation"] }
    ],
    careerOpportunities: [
      "Reproductive Medicine Specialist",
      "IVF Consultant",
      "Fertility Clinic Director",
      "Academic Reproductive Endocrinologist",
      "ART Laboratory Director"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-neonatology": {
    name: "Fellowship in Neonatology",
    icon: "👶",
    duration: "12 Months",
    eligibility: "MD/DNB Pediatrics",
    description: "Advanced training in newborn critical care and neonatal intensive care.",
    overview: "This fellowship provides specialized training in neonatal intensive care, newborn resuscitation, and management of premature and critically ill newborns.",
    highlights: ["NICU Management", "Neonatal Resuscitation", "Premature Care", "Neonatal Ventilation"],
    onlinePrice: 190000,
    month11_1: 210000,
    month10_2: 245000,
    month9_3: 285000,
    month6_6: 490000,
    month12Offline: 650000,
    curriculum: [
      { module: "Neonatal Resuscitation", duration: "1 Month", topics: ["NRP", "Delivery Room Management", "Advanced Resuscitation"] },
      { module: "Premature Care", duration: "3 Months", topics: ["RDS", "BPD", "Feeding Problems", "Retinopathy"] },
      { module: "Neonatal Ventilation", duration: "3 Months", topics: ["Conventional Ventilation", "HFOV", "NIV"] },
      { module: "Neonatal Infections", duration: "2 Months", topics: ["Sepsis", "Meningitis", "Congenital Infections"] },
      { module: "Special Care", duration: "3 Months", topics: ["HIE", "Surgical Neonate", "Congenital Anomalies"] }
    ],
    careerOpportunities: [
      "Consultant Neonatologist",
      "NICU Director",
      "Newborn Care Specialist",
      "Academic Neonatologist",
      "Perinatal Medicine Expert"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-interventional-cardiology": {
    name: "Fellowship in Interventional Cardiology",
    icon: "❤️",
    duration: "24 Months",
    eligibility: "DM/DNB Cardiology",
    description: "Specialized training in coronary interventions and structural heart procedures.",
    overview: "This advanced fellowship provides comprehensive training in percutaneous coronary interventions, structural heart disease interventions, and complex cardiac catheterization procedures.",
    highlights: ["Angioplasty", "Device Implantation", "Structural Interventions", "Complex PCI"],
    onlinePrice: 220000,
    month11_1: 260000,
    month10_2: 290000,
    month9_3: 330000,
    month6_6: 500000,
    month12Offline: 700000,
    curriculum: [
      { module: "Diagnostic Catheterization", duration: "3 Months", topics: ["Coronary Angiography", "Hemodynamics", "Intravascular Imaging"] },
      { module: "Percutaneous Coronary Intervention", duration: "9 Months", topics: ["Simple PCI", "Complex PCI", "CTO", "Bifurcation"] },
      { module: "Structural Heart Disease", duration: "6 Months", topics: ["TAVR", "MitraClip", "ASD/VSD Closure", "LAA Closure"] },
      { module: "Peripheral Interventions", duration: "3 Months", topics: ["Peripheral Angioplasty", "Renal Artery", "Carotid Stenting"] },
      { module: "Advanced Techniques", duration: "3 Months", topics: ["Rotablation", "IVL", "Complex Cases", "Research"] }
    ],
    careerOpportunities: [
      "Interventional Cardiologist",
      "Structural Heart Specialist",
      "Complex PCI Expert",
      "Cath Lab Director",
      "Academic Interventional Cardiologist"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-arthroscopy-and-arthroplasty": {
    name: "Fellowship in Arthroscopy and Arthroplasty",
    icon: "🦴",
    duration: "12 Months",
    eligibility: "MS/MD/DNB Ortho",
    description: "Advanced training in arthroscopic procedures and joint replacement surgery.",
    overview: "This comprehensive fellowship focuses on advanced arthroscopic techniques and arthroplasty procedures with extensive hands-on training in high-volume centers.",
    highlights: ["Knee Arthroscopy", "Hip Replacement", "Shoulder Surgery", "Sports Medicine"],
    onlinePrice: 180000,
    month11_1: 210000,
    month10_2: 240000,
    month9_3: 280000,
    month6_6: 490000,
    month12Offline: 610000,
    curriculum: [
      { module: "Basic Arthroscopic Techniques", duration: "2 Months", topics: ["Diagnostic Arthroscopy", "Knee Arthroscopy", "Shoulder Arthroscopy"] },
      { module: "Advanced Arthroscopy", duration: "3 Months", topics: ["ACL Reconstruction", "Meniscal Repair", "Rotator Cuff"] },
      { module: "Joint Replacement", duration: "4 Months", topics: ["Total Knee Replacement", "Total Hip Replacement", "Revision Arthroplasty"] },
      { module: "Sports Medicine", duration: "2 Months", topics: ["Athletic Injuries", "Cartilage Procedures", "Return to Sport"] },
      { module: "Research", duration: "1 Month", topics: ["Research Methodology", "Paper Writing", "Presentations"] }
    ],
    careerOpportunities: [
      "Arthroscopy Specialist",
      "Joint Replacement Surgeon",
      "Sports Medicine Consultant",
      "Academic Orthopedic Surgeon",
      "Tertiary Care Orthopedist"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-cardiology": {
    name: "Fellowship in Cardiology",
    icon: "❤️",
    duration: "12 Months",
    eligibility: "MD Medicine/DNB",
    description: "Advanced training in cardiovascular disease management and cardiac diagnostics.",
    overview: "This fellowship provides comprehensive training in clinical cardiology, non-invasive cardiology procedures, and cardiovascular disease management.",
    highlights: ["ECG Interpretation", "Echocardiography", "Cardiac Care", "Preventive Cardiology"],
    onlinePrice: 160000,
    month11_1: 190000,
    month10_2: 240000,
    month9_3: 280000,
    month6_6: 480000,
    month12Offline: 650000,
    curriculum: [
      { module: "Clinical Cardiology", duration: "3 Months", topics: ["IHD", "Heart Failure", "Valvular Heart Disease", "Arrhythmias"] },
      { module: "Echocardiography", duration: "3 Months", topics: ["Transthoracic Echo", "Doppler Studies", "Stress Echo"] },
      { module: "ECG & Holter", duration: "2 Months", topics: ["ECG Interpretation", "Arrhythmia Recognition", "Holter Analysis"] },
      { module: "Cardiac Emergencies", duration: "2 Months", topics: ["ACS Management", "Acute Heart Failure", "Cardiac Arrest"] },
      { module: "Preventive Cardiology", duration: "2 Months", topics: ["Risk Assessment", "Lipid Management", "Lifestyle Modification"] }
    ],
    careerOpportunities: [
      "Consultant Cardiologist",
      "Echocardiography Specialist",
      "Cardiac Intensive Care Specialist",
      "Preventive Cardiology Expert",
      "Academic Cardiologist"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-anesthesia": {
    name: "Fellowship in Anesthesia",
    icon: "💉",
    duration: "12 Months",
    eligibility: "MD/DNB Anesthesia",
    description: "Advanced training in anesthesia techniques, pain management, and critical care.",
    overview: "This fellowship offers specialized training in regional anesthesia, cardiac anesthesia, neuro-anesthesia, and pain management procedures.",
    highlights: ["Regional Anesthesia", "Cardiac Anesthesia", "Pain Management", "Critical Care"],
    onlinePrice: 170000,
    month11_1: 210000,
    month10_2: 240000,
    month9_3: 280000,
    month6_6: 490000,
    month12Offline: 680000,
    curriculum: [
      { module: "Regional Anesthesia", duration: "3 Months", topics: ["Peripheral Nerve Blocks", "Spinal/Epidural", "Ultrasound-Guided Blocks"] },
      { module: "Cardiac Anesthesia", duration: "2 Months", topics: ["Cardiac Surgery", "TEE", "Hemodynamic Management"] },
      { module: "Neuro-Anesthesia", duration: "2 Months", topics: ["Brain Surgery", "Spine Surgery", "ICP Management"] },
      { module: "Critical Care", duration: "3 Months", topics: ["ICU Management", "Ventilation", "Hemodynamics"] },
      { module: "Pain Management", duration: "2 Months", topics: ["Acute Pain", "Chronic Pain", "Interventional Procedures"] }
    ],
    careerOpportunities: [
      "Consultant Anesthesiologist",
      "Cardiac Anesthesia Specialist",
      "Pain Management Expert",
      "Critical Care Anesthesiologist",
      "Academic Anesthesiologist"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-respiratory-medicine": {
    name: "Fellowship in Respiratory Medicine",
    icon: "🫁",
    duration: "12 Months",
    eligibility: "MD Medicine/DNB",
    description: "Specialized training in pulmonary diseases and respiratory critical care.",
    overview: "This fellowship provides comprehensive training in bronchoscopy, sleep medicine, interventional pulmonology, and management of chronic respiratory diseases.",
    highlights: ["Bronchoscopy", "Sleep Medicine", "Pulmonary Rehabilitation", "Critical Care"],
    onlinePrice: 160000,
    month11_1: 185000,
    month10_2: 240000,
    month9_3: 280000,
    month6_6: 480000,
    month12Offline: 640000,
    curriculum: [
      { module: "Respiratory Diagnostics", duration: "2 Months", topics: ["PFT", "ABG", "Chest Imaging"] },
      { module: "Bronchoscopy", duration: "3 Months", topics: ["Diagnostic Bronchoscopy", "EBUS", "Interventional Procedures"] },
      { module: "Chronic Lung Diseases", duration: "3 Months", topics: ["COPD", "Asthma", "ILD", "Bronchiectasis"] },
      { module: "Respiratory ICU", duration: "2 Months", topics: ["Mechanical Ventilation", "ARDS", "NIV"] },
      { module: "Sleep & TB Medicine", duration: "2 Months", topics: ["Sleep Apnea", "Polysomnography", "TB Management"] }
    ],
    careerOpportunities: [
      "Consultant Pulmonologist",
      "Bronchoscopy Specialist",
      "Sleep Medicine Expert",
      "Respiratory Intensivist",
      "Academic Pulmonologist"
    ],
    applicationDeadline: "Rolling Admissions"
  }
};

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = programsData[slug];

  if (!program) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container-custom py-20 text-center">
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">Program Not Found</h1>
          <p className="text-lg text-text-secondary mb-8">The program you're looking for doesn't exist.</p>
          <Link href="/programs" className="btn-primary px-8 py-3">
            View All Programs
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary to-primary-dark text-white py-10 md:py-16">
        <div className="container-custom">
          <Link href="/programs" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-5 md:mb-6 transition-colors text-sm md:text-base">
            ← Back to All Programs
          </Link>
          <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
            <div className="w-14 h-14 md:w-20 md:h-20 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center text-3xl md:text-4xl shrink-0">
              {program.icon}
            </div>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold mb-3 md:mb-4">{program.name}</h1>
              <div className="flex flex-wrap gap-2 md:gap-4 mb-3 md:mb-4">
                <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur rounded-full font-semibold text-sm md:text-base">
                  ⏱️ {program.duration}
                </span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur rounded-full font-semibold text-sm md:text-base">
                  📋 {program.eligibility}
                </span>
                {program.onlinePrice && (
                  <span className="px-3 py-1.5 md:px-4 md:py-2 bg-accent/90 backdrop-blur rounded-full font-semibold text-sm md:text-base">
                    💰 From ₹{(program.onlinePrice / 100000).toFixed(2)}L
                  </span>
                )}
              </div>
              <p className="text-base md:text-xl opacity-90">{program.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Apply Banner */}
      <div className="bg-accent text-white py-4">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🎓</span>
            <span className="font-semibold">Application Deadline: {program.applicationDeadline}</span>
          </div>
          <Link href="/apply" className="px-6 py-2 bg-white text-accent rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Apply Now
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-6 md:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8 md:space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-xl md:text-3xl font-heading font-bold text-primary mb-4 md:mb-6">Program Overview</h2>
                <p className="text-base md:text-lg text-text-secondary leading-relaxed">{program.overview}</p>
              </div>

              {/* Key Highlights */}
              <div>
                <h2 className="text-xl md:text-3xl font-heading font-bold text-primary mb-4 md:mb-6">Key Highlights</h2>
                <div className="grid grid-cols-2 gap-3">
                  {program.highlights.map((highlight: string, index: number) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-background rounded-lg border border-gray-100">
                      <div className="w-7 h-7 shrink-0 bg-linear-to-br from-secondary to-primary rounded-md flex items-center justify-center text-white text-sm font-bold">
                        ✓
                      </div>
                      <span className="font-semibold text-primary text-sm md:text-base leading-tight">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curriculum */}
              <div>
                <h2 className="text-xl md:text-3xl font-heading font-bold text-primary mb-4 md:mb-6">Month-by-Month Curriculum</h2>
                <div className="space-y-4">
                  {program.curriculum.map((module: any, index: number) => (
                    <div key={index} className="card p-4 md:p-6 hover:shadow-lg transition-shadow">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                        <h3 className="text-base md:text-xl font-heading font-bold text-primary">
                          Module {index + 1}: {module.module}
                        </h3>
                        <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs md:text-sm font-semibold self-start">
                          {module.duration}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {module.topics.map((topic: string, idx: number) => (
                          <span key={idx} className="px-3 py-1 bg-primary/5 text-primary rounded-full text-sm border border-primary/10">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <a href="/downloads/sample-timetable.pdf" download className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all">
                    <span>📥</span>
                    Download Sample Timetable
                  </a>
                </div>
              </div>

              {/* Fee Breakdown */}
              {program.feeBreakdown && (
                <div>
                  <h2 className="text-xl md:text-3xl font-heading font-bold text-primary mb-4 md:mb-6">Complete Fee Breakdown</h2>
                  <div className="card p-5 md:p-8">
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                        <span className="text-sm md:text-lg text-text-secondary">Tuition Fee</span>
                        <span className="text-base md:text-xl font-bold text-primary">{program.feeBreakdown.tuition}</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                        <span className="text-sm md:text-lg text-text-secondary">Learning Materials &amp; Books</span>
                        <span className="text-base md:text-xl font-bold text-primary">{program.feeBreakdown.materials}</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                        <span className="text-sm md:text-lg text-text-secondary">Examination Fees</span>
                        <span className="text-base md:text-xl font-bold text-primary">{program.feeBreakdown.examFees}</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                        <span className="text-sm md:text-lg text-text-secondary">Registration &amp; Admin</span>
                        <span className="text-base md:text-xl font-bold text-primary">{program.feeBreakdown.registration}</span>
                      </div>
                      <div className="flex justify-between items-center pt-3">
                        <span className="text-lg md:text-2xl font-heading font-bold text-primary">Total Program Fee</span>
                        <span className="text-xl md:text-3xl font-bold text-accent">{program.fees}</span>
                      </div>
                    </div>
                    <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-4">
                      <h4 className="font-bold text-primary mb-2">💳 Flexible Payment Options</h4>
                      <ul className="space-y-2 text-sm text-text-secondary">
                        <li className="flex items-center gap-2">
                          <span className="text-secondary">✓</span>
                          <span>Interest-free EMI for 6-12 months</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-secondary">✓</span>
                          <span>Bank loan partnerships (80% financing)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-secondary">✓</span>
                          <span>Early bird discount: 10% off (if paid 2 months before)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-secondary">✓</span>
                          <span>Full refund within 30 days if not satisfied</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Hospital Rotations */}
              {program.hospitalRotations && (
                <div>
                  <h2 className="text-xl md:text-3xl font-heading font-bold text-primary mb-4 md:mb-6">Hospital Rotation Schedule</h2>
                  <p className="text-text-secondary mb-6">
                    Our fellows train at India's premier hospitals, gaining real-world experience across multiple specialties and patient populations.
                  </p>
                  <div className="space-y-4">
                    {program.hospitalRotations.map((rotation: any, index: number) => (
                      <div key={index} className="card p-4 md:p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-start gap-3 md:gap-4">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-linear-to-br from-secondary to-primary rounded-lg flex items-center justify-center text-white font-bold text-base md:text-xl shrink-0">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="text-xl font-heading font-bold text-primary">{rotation.hospital}</h3>
                              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                                {rotation.duration}
                              </span>
                            </div>
                            <p className="text-text-secondary">
                              <span className="font-semibold text-primary">Focus Area:</span> {rotation.focus}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Examination Pattern */}
              {program.examPattern && (
                <div>
                  <h2 className="text-xl md:text-3xl font-heading font-bold text-primary mb-4 md:mb-6">Examination &amp; Assessment</h2>
                  <div className="card p-5 md:p-8">
                    <h3 className="text-lg md:text-xl font-heading font-bold text-primary mb-4">Evaluation Breakdown</h3>
                    <div className="grid grid-cols-3 gap-3 md:gap-6 mb-6">
                      <div className="text-center p-3 md:p-4 bg-background rounded-lg">
                        <div className="text-2xl md:text-4xl font-bold text-secondary mb-1 md:mb-2">{program.examPattern.theory}</div>
                        <div className="text-xs md:text-sm text-text-secondary">Theory</div>
                      </div>
                      <div className="text-center p-3 md:p-4 bg-background rounded-lg">
                        <div className="text-2xl md:text-4xl font-bold text-accent mb-1 md:mb-2">{program.examPattern.practical}</div>
                        <div className="text-xs md:text-sm text-text-secondary">Practical</div>
                      </div>
                      <div className="text-center p-3 md:p-4 bg-background rounded-lg">
                        <div className="text-2xl md:text-4xl font-bold text-primary mb-1 md:mb-2">{program.examPattern.viva}</div>
                        <div className="text-xs md:text-sm text-text-secondary">Viva Voce</div>
                      </div>
                    </div>
                    <div className="bg-primary/5 border border-primary/10 rounded-lg p-4">
                      <p className="text-text-secondary">{program.examPattern.details}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Hands-on Training */}
              {program.procedureCount && (
                <div>
                  <h2 className="text-xl md:text-3xl font-heading font-bold text-primary mb-4 md:mb-6">Guaranteed Hands-On Experience</h2>
                  <div className="card p-5 md:p-8 bg-linear-to-br from-accent/5 to-secondary/5">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="text-3xl md:text-5xl">🔧</div>
                      <div>
                        <h3 className="text-lg md:text-2xl font-heading font-bold text-primary mb-2 md:mb-3">
                          Minimum Procedure Requirements
                        </h3>
                        <p className="text-lg text-text-primary font-semibold mb-2">{program.procedureCount}</p>
                        <p className="text-text-secondary">
                          Every fellow is guaranteed to perform this minimum number of procedures under expert supervision. 
                          This ensures you graduate with real-world competency, not just theoretical knowledge.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Faculty Ratio */}
              {program.facultyRatio && (
                <div>
                  <h2 className="text-xl md:text-3xl font-heading font-bold text-primary mb-4 md:mb-6">Personalized Mentorship</h2>
                  <div className="card p-5 md:p-8">
                    <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-6">
                      <div className="text-4xl md:text-6xl">👥</div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-accent mb-1 md:mb-2">{program.facultyRatio}</h3>
                        <p className="text-base md:text-xl text-text-secondary">Faculty-to-Student Ratio</p>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-start gap-2">
                        <span className="text-secondary text-xl">✓</span>
                        <span className="text-text-secondary">Individual attention and personalized guidance</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-secondary text-xl">✓</span>
                        <span className="text-text-secondary">Direct access to senior consultants</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-secondary text-xl">✓</span>
                        <span className="text-text-secondary">Dedicated mentor for career counseling</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-secondary text-xl">✓</span>
                        <span className="text-text-secondary">24/7 faculty support for clinical queries</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Career Opportunities */}
              <div>
                <h2 className="text-xl md:text-3xl font-heading font-bold text-primary mb-4 md:mb-6">Career Opportunities</h2>
                <div className="card p-5 md:p-8">
                  <ul className="space-y-4">
                    {program.careerOpportunities.map((opportunity: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-linear-to-br from-accent to-secondary rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-text-secondary">{opportunity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Apply Card */}
              <div className="card p-5 md:p-6 lg:sticky lg:top-6">
                <div className="mb-4 bg-accent/10 border border-accent/30 rounded-lg p-3 text-center">
                  <p className="text-xs text-primary font-semibold mb-1">Next Batch Starts</p>
                  <p className="text-lg font-bold text-accent">March 2026</p>
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Program Details</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-text-secondary">
                    <span className="text-secondary">📅</span>
                    <div>
                      <p className="text-xs text-text-tertiary">Duration</p>
                      <p className="font-semibold text-primary">{program.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-text-secondary">
                    <span className="text-secondary mt-1">💰</span>
                    <div className="flex-1">
                      <p className="text-xs text-text-tertiary mb-2">Program Fee</p>
                      {program.onlinePrice && (
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between items-center py-1 border-b border-gray-100">
                            <span className="text-text-secondary">Fully Online</span>
                            <span className="font-semibold text-primary">₹{program.onlinePrice.toLocaleString('en-IN')}</span>
                          </div>
                          <div className="flex justify-between items-center py-1">
                            <span className="text-text-secondary">11+1 Month</span>
                            <span className="font-semibold text-primary">₹{program.month11_1.toLocaleString('en-IN')}</span>
                          </div>
                        </div>
                      )}
                      <p className="text-xs text-accent mt-2">EMI options available</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-text-secondary">
                    <span className="text-secondary">📋</span>
                    <div>
                      <p className="text-xs text-text-tertiary">Eligibility</p>
                      <p className="font-semibold text-primary">{program.eligibility}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-text-secondary">
                    <span className="text-secondary">⏰</span>
                    <div>
                      <p className="text-xs text-text-tertiary">Application Deadline</p>
                      <p className="font-semibold text-primary">Apr 30, 2026</p>
                    </div>
                  </div>
                </div>
                <Link href="/apply" className="btn-primary w-full text-center py-4 text-lg">
                  Apply Now
                </Link>
                <Link href="/contact" className="block w-full text-center px-6 py-3 mt-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-all">
                  Schedule Consultation
                </Link>
              </div>

              {/* Why Choose This Program */}
              <div className="bg-linear-to-br from-background to-white rounded-xl p-6 border border-gray-100">
                <h3 className="text-xl font-heading font-bold text-primary mb-4">Why Choose This Program?</h3>
                <ul className="space-y-3 text-sm text-text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Expert faculty from premier institutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Hands-on training at top hospitals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Internationally recognized certification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Structured curriculum with research</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Career support & placement assistance</span>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="bg-primary text-white rounded-xl p-6">
                <h3 className="text-xl font-heading font-bold mb-4">Need More Information?</h3>
                <p className="text-sm opacity-90 mb-4">Contact our admissions team for detailed program information</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span>📧</span>
                    <span>info@medfellow.in</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📞</span>
                    <span>+91 99850 44993</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(programsData).map((slug) => ({
    slug: slug,
  }));
}

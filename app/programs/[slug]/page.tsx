import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

// Program data
const programsData: { [key: string]: any } = {
  "fellowship-in-arthroscopy-and-arthroplasty": {
    name: "Fellowship in Arthroscopy and Arthroplasty",
    icon: "🦴",
    duration: "12 Months",
    eligibility: "MS Orthopedics/DNB",
    description: "Advanced training in arthroscopic procedures and joint replacement surgery with hands-on experience in state-of-the-art facilities.",
    overview: "This comprehensive fellowship program focuses on advanced arthroscopic techniques and arthroplasty procedures. Fellows will gain extensive experience in minimally invasive joint surgery, joint replacement procedures, and sports medicine. The program combines didactic learning with intensive hands-on training in high-volume centers.",
    highlights: ["Knee Arthroscopy", "Hip Replacement", "Shoulder Surgery", "Sports Injuries"],
    curriculum: [
      { module: "Basic Arthroscopic Techniques", duration: "2 Months", topics: ["Diagnostic Arthroscopy", "Knee Arthroscopy Basics", "Shoulder Arthroscopy"] },
      { module: "Advanced Arthroscopy", duration: "3 Months", topics: ["ACL Reconstruction", "Meniscal Repair", "Rotator Cuff Repair"] },
      { module: "Joint Replacement", duration: "4 Months", topics: ["Total Knee Replacement", "Total Hip Replacement", "Revision Arthroplasty"] },
      { module: "Sports Medicine", duration: "2 Months", topics: ["Athletic Injuries", "Cartilage Procedures", "Return to Sport Protocols"] },
      { module: "Research & Publications", duration: "1 Month", topics: ["Research Methodology", "Paper Writing", "Case Presentations"] }
    ],
    careerOpportunities: [
      "Consultant Orthopedic Surgeon specializing in Arthroscopy",
      "Sports Medicine Specialist",
      "Joint Replacement Surgeon",
      "Academic positions in Medical Colleges",
      "Private Practice with specialized skills"
    ],
    fees: "₹8,50,000",
    feeBreakdown: {
      tuition: "₹6,50,000",
      materials: "₹1,00,000",
      examFees: "₹50,000",
      registration: "₹50,000"
    },
    hospitalRotations: [
      { hospital: "Apollo Hospitals Delhi", duration: "3 months", focus: "Arthroscopy & Sports Medicine" },
      { hospital: "Fortis Memorial Gurgaon", duration: "4 months", focus: "Joint Replacement Surgery" },
      { hospital: "Max Super Specialty", duration: "3 months", focus: "Advanced Procedures" },
      { hospital: "Medanta Gurugram", duration: "2 months", focus: "Complex Cases & Research" }
    ],
    examPattern: {
      theory: "40%",
      practical: "40%",
      viva: "20%",
      details: "Written exam (100 MCQs), Practical assessment (10 procedures), Viva voce with senior faculty"
    },
    procedureCount: "Minimum 150 arthroscopic procedures, 80 joint replacements",
    facultyRatio: "1:3 (One faculty for every 3 fellows)",
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-gastroenterology": {
    name: "Fellowship in Gastroenterology",
    icon: "🔬",
    duration: "12 Months",
    eligibility: "MD Medicine/DNB",
    description: "Comprehensive training in diagnostic and therapeutic gastroenterology procedures.",
    overview: "This fellowship offers in-depth training in both diagnostic and therapeutic endoscopy, hepatology, and inflammatory bowel disease management. Fellows receive extensive exposure to advanced endoscopic techniques including ERCP, EUS, and therapeutic colonoscopy procedures.",
    highlights: ["Endoscopy", "Colonoscopy", "ERCP", "Hepatology"],
    curriculum: [
      { module: "Upper GI Endoscopy", duration: "2 Months", topics: ["Diagnostic Esophagogastroduodenoscopy", "Variceal Band Ligation", "Polypectomy"] },
      { module: "Lower GI Endoscopy", duration: "2 Months", topics: ["Colonoscopy", "Polyp Removal", "IBD Management"] },
      { module: "Advanced Procedures", duration: "4 Months", topics: ["ERCP", "Endoscopic Ultrasound", "Therapeutic Endoscopy"] },
      { module: "Hepatology", duration: "3 Months", topics: ["Liver Disease Management", "Hepatitis Care", "Cirrhosis Management"] },
      { module: "Clinical Research", duration: "1 Month", topics: ["GI Research", "Case Studies", "Publications"] }
    ],
    careerOpportunities: [
      "Consultant Gastroenterologist",
      "Interventional Endoscopist",
      "Hepatologist",
      "Academic Faculty in Medical Institutions",
      "Specialist in Super-specialty Hospitals"
    ],
    fees: "₹9,00,000",
    feeBreakdown: {
      tuition: "₹7,00,000",
      materials: "₹1,00,000",
      examFees: "₹50,000",
      registration: "₹50,000"
    },
    hospitalRotations: [
      { hospital: "AIIMS Delhi", duration: "3 months", focus: "Advanced Endoscopy & ERCP" },
      { hospital: "Apollo Hospitals", duration: "3 months", focus: "Therapeutic Endoscopy" },
      { hospital: "Fortis Escorts", duration: "3 months", focus: "Hepatology & Liver Clinic" },
      { hospital: "Max Super Specialty", duration: "3 months", focus: "IBD & Complex GI Cases" }
    ],
    examPattern: {
      theory: "40%",
      practical: "40%",
      viva: "20%",
      details: "Written examination (100 MCQs), Practical demonstration (15 procedures), Viva with case discussions"
    },
    procedureCount: "Minimum 200 endoscopies, 150 colonoscopies, 30 ERCP procedures",
    facultyRatio: "1:4 (One faculty for every 4 fellows)",
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-reproductive-medicine": {
    name: "Fellowship in Reproductive Medicine",
    icon: "👶",
    duration: "12 Months",
    eligibility: "MD/MS Obs & Gyn",
    description: "Specialized training in infertility management and assisted reproductive techniques.",
    overview: "This comprehensive program covers all aspects of reproductive medicine including infertility diagnosis, ovulation induction, IUI, IVF, ICSI, and fertility preservation. Fellows gain hands-on experience in state-of-the-art IVF laboratories and fertility clinics.",
    highlights: ["IVF", "ICSI", "Fertility Preservation", "Embryology"],
    curriculum: [
      { module: "Infertility Evaluation", duration: "2 Months", topics: ["Male Factor", "Female Factor", "Advanced Diagnostics"] },
      { module: "ART Procedures", duration: "4 Months", topics: ["IUI", "IVF", "ICSI", "Embryo Transfer"] },
      { module: "Laboratory Techniques", duration: "3 Months", topics: ["Embryology", "Cryopreservation", "Andrology Lab"] },
      { module: "Advanced ART", duration: "2 Months", topics: ["PGT", "Egg Donation", "Surrogacy"] },
      { module: "Research", duration: "1 Month", topics: ["Clinical Trials", "Success Rate Analysis", "Publications"] }
    ],
    careerOpportunities: [
      "Fertility Specialist",
      "IVF Consultant",
      "Reproductive Endocrinologist",
      "IVF Lab Director",
      "Private Fertility Clinic Owner"
    ],
    fees: "₹10,00,000",
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-pain-management": {
    name: "Fellowship in Pain Management",
    icon: "💊",
    duration: "12 Months",
    eligibility: "MD/DNB Anesthesia",
    description: "Expert training in interventional pain management and chronic pain treatment.",
    overview: "This fellowship provides comprehensive training in interventional pain management techniques, chronic pain assessment, and multimodal pain therapy. Fellows learn advanced procedures under fluoroscopic and ultrasound guidance.",
    highlights: ["Nerve Blocks", "Spinal Interventions", "Chronic Pain", "Interventional Procedures"],
    curriculum: [
      { module: "Pain Assessment", duration: "1 Month", topics: ["Pain Evaluation", "Diagnostic Tests", "Patient Selection"] },
      { module: "Peripheral Nerve Blocks", duration: "3 Months", topics: ["Upper Limb Blocks", "Lower Limb Blocks", "Truncal Blocks"] },
      { module: "Spinal Interventions", duration: "4 Months", topics: ["Epidural Injections", "Facet Blocks", "Radiofrequency Ablation"] },
      { module: "Advanced Procedures", duration: "3 Months", topics: ["Spinal Cord Stimulation", "Intrathecal Pumps", "Sympathetic Blocks"] },
      { module: "Pain Pharmacology", duration: "1 Month", topics: ["Opioid Management", "Adjuvant Medications", "Multimodal Analgesia"] }
    ],
    careerOpportunities: [
      "Pain Medicine Specialist",
      "Interventional Pain Physician",
      "Chronic Pain Consultant",
      "Pain Clinic Director",
      "Academic Pain Specialist"
    ],
    fees: "₹8,00,000",
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-diabetology": {
    name: "Fellowship in Diabetology",
    icon: "🩺",
    duration: "12 Months",
    eligibility: "MD Medicine/DNB",
    description: "Focused training in diabetes care, insulin management, and metabolic disorders.",
    overview: "This fellowship offers specialized training in comprehensive diabetes management including insulin therapy, management of diabetic complications, and lifestyle interventions. The program emphasizes evidence-based diabetes care and patient education.",
    highlights: ["Insulin Therapy", "Metabolic Disorders", "Diabetic Complications", "Patient Education"],
    curriculum: [
      { module: "Diabetes Fundamentals", duration: "2 Months", topics: ["Type 1 & Type 2 Diabetes", "Gestational Diabetes", "MODY"] },
      { module: "Insulin Management", duration: "3 Months", topics: ["Insulin Regimens", "Pump Therapy", "CGM Systems"] },
      { module: "Complications Management", duration: "3 Months", topics: ["Neuropathy", "Retinopathy", "Nephropathy", "Foot Care"] },
      { module: "Advanced Diabetes Care", duration: "3 Months", topics: ["New Medications", "Bariatric Surgery", "Technology in Diabetes"] },
      { module: "Research & Education", duration: "1 Month", topics: ["Clinical Trials", "Patient Education Programs", "Publications"] }
    ],
    careerOpportunities: [
      "Consultant Diabetologist",
      "Diabetes Educator",
      "Endocrinologist with Diabetes focus",
      "Diabetes Clinic Director",
      "Corporate Wellness Consultant"
    ],
    fees: "₹7,00,000",
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-endocrinology": {
    name: "Fellowship in Endocrinology",
    icon: "⚕️",
    duration: "12 Months",
    eligibility: "MD Medicine/DNB",
    description: "Comprehensive training in hormone disorders and endocrine system management.",
    overview: "This fellowship provides extensive training in the diagnosis and management of endocrine disorders including thyroid diseases, pituitary disorders, adrenal diseases, and metabolic bone disorders. Fellows gain experience in hormone testing and endocrine emergencies.",
    highlights: ["Thyroid Disorders", "Pituitary Disorders", "Bone Health", "Hormone Testing"],
    curriculum: [
      { module: "Thyroid Disorders", duration: "3 Months", topics: ["Hypothyroidism", "Hyperthyroidism", "Thyroid Nodules", "Thyroid Cancer"] },
      { module: "Pituitary & Adrenal", duration: "3 Months", topics: ["Pituitary Tumors", "Cushing's Syndrome", "Addison's Disease"] },
      { module: "Bone & Calcium", duration: "2 Months", topics: ["Osteoporosis", "Parathyroid Disorders", "Vitamin D Deficiency"] },
      { module: "Reproductive Endocrinology", duration: "2 Months", topics: ["PCOS", "Hypogonadism", "Puberty Disorders"] },
      { module: "Advanced Topics", duration: "2 Months", topics: ["Neuroendocrine Tumors", "MEN Syndromes", "Research Methods"] }
    ],
    careerOpportunities: [
      "Consultant Endocrinologist",
      "Thyroid Specialist",
      "Bone Health Specialist",
      "Academic Endocrinologist",
      "Super-specialty Hospital Consultant"
    ],
    fees: "₹7,50,000",
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-rheumatology": {
    name: "Fellowship in Rheumatology",
    icon: "🦾",
    duration: "12 Months",
    eligibility: "MD Medicine/DNB",
    description: "Advanced training in autoimmune diseases and musculoskeletal disorders.",
    overview: "This program offers comprehensive training in rheumatologic diseases including arthritis, connective tissue disorders, and vasculitis. Fellows learn diagnostic techniques including musculoskeletal ultrasound and joint aspirations, as well as biologic therapy management.",
    highlights: ["Arthritis Management", "Autoimmune Diseases", "Biologics", "MSK Ultrasound"],
    curriculum: [
      { module: "Inflammatory Arthritis", duration: "3 Months", topics: ["Rheumatoid Arthritis", "Psoriatic Arthritis", "Ankylosing Spondylitis"] },
      { module: "Connective Tissue Diseases", duration: "3 Months", topics: ["SLE", "Scleroderma", "Myositis", "Sjögren's Syndrome"] },
      { module: "Procedural Skills", duration: "2 Months", topics: ["Joint Aspiration", "Injection Therapy", "MSK Ultrasound"] },
      { module: "Biologic Therapy", duration: "2 Months", topics: ["TNF Inhibitors", "B-cell Therapy", "JAK Inhibitors"] },
      { module: "Advanced Topics", duration: "2 Months", topics: ["Vasculitis", "Crystal Arthropathy", "Research"] }
    ],
    careerOpportunities: [
      "Consultant Rheumatologist",
      "Arthritis Specialist",
      "Biologic Therapy Expert",
      "Academic Rheumatologist",
      "Clinical Trial Investigator"
    ],
    fees: "₹7,50,000",
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-neurology": {
    name: "Fellowship in Neurology",
    icon: "🧠",
    duration: "12 Months",
    eligibility: "MD Medicine/DNB",
    description: "Specialized training in neurological disorders and neurocritical care.",
    overview: "This fellowship provides in-depth training in stroke management, epilepsy, movement disorders, and neurodegenerative diseases. Fellows gain experience in neurophysiology, neuroimaging interpretation, and acute neurology care.",
    highlights: ["Stroke Management", "Epilepsy", "Neurodegenerative Disorders", "Neurophysiology"],
    curriculum: [
      { module: "Stroke & Cerebrovascular", duration: "3 Months", topics: ["Acute Stroke", "Thrombolysis", "Secondary Prevention"] },
      { module: "Epilepsy", duration: "2 Months", topics: ["Seizure Disorders", "AED Management", "Video EEG"] },
      { module: "Movement Disorders", duration: "2 Months", topics: ["Parkinson's Disease", "Essential Tremor", "Dystonia"] },
      { module: "Neurodegenerative Diseases", duration: "2 Months", topics: ["Dementia", "ALS", "Multiple Sclerosis"] },
      { module: "Neurophysiology", duration: "3 Months", topics: ["EMG/NCV", "EEG", "Evoked Potentials"] }
    ],
    careerOpportunities: [
      "Consultant Neurologist",
      "Stroke Specialist",
      "Epileptologist",
      "Movement Disorder Specialist",
      "Academic Neurologist"
    ],
    fees: "₹8,50,000",
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-radiology": {
    name: "Fellowship in Radiology",
    icon: "📡",
    duration: "12 Months",
    eligibility: "MD Radio-Diagnosis",
    description: "Advanced imaging techniques and interventional radiology procedures.",
    overview: "This fellowship offers advanced training in cross-sectional imaging, interventional radiology, and subspecialty radiology. Fellows gain expertise in CT, MRI interpretation, and image-guided interventions.",
    highlights: ["CT/MRI", "Interventional Radiology", "Cross-sectional Imaging", "Image-guided Procedures"],
    curriculum: [
      { module: "Advanced CT", duration: "2 Months", topics: ["Cardiac CT", "CT Angiography", "Advanced Post-processing"] },
      { module: "Advanced MRI", duration: "3 Months", topics: ["Neuro MRI", "Cardiac MRI", "Body MRI"] },
      { module: "Interventional Radiology", duration: "4 Months", topics: ["Vascular Interventions", "Non-vascular Interventions", "Biopsies"] },
      { module: "Subspecialty Imaging", duration: "2 Months", topics: ["Onco-imaging", "Emergency Radiology", "Pediatric Imaging"] },
      { module: "Research & AI", duration: "1 Month", topics: ["Research Methodology", "AI in Radiology", "Publications"] }
    ],
    careerOpportunities: [
      "Consultant Radiologist",
      "Interventional Radiologist",
      "Subspecialty Radiologist",
      "Teleradiology Specialist",
      "Academic Radiologist"
    ],
    fees: "₹9,00,000",
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-ultrasonography": {
    name: "Fellowship in Ultrasonography",
    icon: "📊",
    duration: "6 Months",
    eligibility: "MBBS/MD",
    description: "Focused training in diagnostic ultrasound and point-of-care sonography.",
    overview: "This intensive 6-month fellowship provides hands-on training in all aspects of diagnostic ultrasound including abdominal, obstetric, gynecological, and vascular ultrasound. Fellows perform hundreds of supervised scans.",
    highlights: ["Abdominal USG", "Obstetric USG", "Vascular Doppler", "MSK Ultrasound"],
    curriculum: [
      { module: "Basic Ultrasound Physics", duration: "2 Weeks", topics: ["Physics Principles", "Machine Optimization", "Artifacts"] },
      { module: "Abdominal USG", duration: "2 Months", topics: ["Liver", "Kidneys", "Pelvis", "Emergency USG"] },
      { module: "Obstetric & Gynec USG", duration: "2 Months", topics: ["First Trimester", "Anomaly Scan", "Fetal Echo", "Gynec USG"] },
      { module: "Vascular Doppler", duration: "1.5 Months", topics: ["Carotid Doppler", "DVT Studies", "Renal Artery Doppler"] },
      { module: "Specialized USG", duration: "0.5 Month", topics: ["MSK USG", "Small Parts", "POCUS"] }
    ],
    careerOpportunities: [
      "Ultrasonography Specialist",
      "Diagnostic Center Consultant",
      "OB/GYN Sonologist",
      "Point-of-Care Ultrasound Expert",
      "Private Scanning Center Owner"
    ],
    fees: "₹4,00,000",
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-interventional-cardiology": {
    name: "Fellowship in Interventional Cardiology",
    icon: "❤️",
    duration: "24 Months",
    eligibility: "DM/DNB Cardiology",
    description: "Specialized training in coronary interventions and structural heart procedures.",
    overview: "This comprehensive 2-year fellowship provides intensive training in all aspects of interventional cardiology including coronary angiography, angioplasty, structural heart interventions, and peripheral vascular interventions. Fellows perform procedures under expert supervision.",
    highlights: ["Angioplasty", "Device Implantation", "Structural Interventions", "Complex PCI"],
    curriculum: [
      { module: "Coronary Angiography", duration: "3 Months", topics: ["Diagnostic Cath", "Angiographic Views", "Coronary Anatomy"] },
      { module: "Coronary Interventions", duration: "8 Months", topics: ["PCI", "Complex Lesions", "CTO", "Bifurcation"] },
      { module: "Structural Heart", duration: "6 Months", topics: ["TAVI", "MitraClip", "ASD/PFO Closure", "LAA Closure"] },
      { module: "Peripheral Interventions", duration: "3 Months", topics: ["Peripheral Angioplasty", "Renal Artery Stenting", "Carotid Stenting"] },
      { module: "Advanced Skills", duration: "4 Months", topics: ["Intravascular Imaging", "FFR/iFR", "Complications Management"] }
    ],
    careerOpportunities: [
      "Consultant Interventional Cardiologist",
      "Structural Heart Specialist",
      "Cath Lab Director",
      "Academic Interventional Cardiologist",
      "Tertiary Care Hospital Consultant"
    ],
    fees: "₹15,00,000",
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-orthopedics": {
    name: "Fellowship in Orthopedics",
    icon: "🦴",
    duration: "12 Months",
    eligibility: "MS Orthopedics/DNB",
    description: "Comprehensive training in orthopedic surgery and trauma management.",
    overview: "This fellowship offers broad-based training in orthopedic surgery including trauma, arthroplasty, arthroscopy, and spine surgery. Fellows gain extensive surgical experience across all subspecialties of orthopedics.",
    highlights: ["Trauma Surgery", "Sports Medicine", "Fracture Management", "Arthroplasty"],
    curriculum: [
      { module: "Trauma & Fractures", duration: "4 Months", topics: ["Polytrauma", "Pelvic Fractures", "Complex Fractures"] },
      { module: "Arthroplasty", duration: "3 Months", topics: ["Total Knee", "Total Hip", "Revision Surgery"] },
      { module: "Arthroscopy", duration: "2 Months", topics: ["Knee Arthroscopy", "Shoulder Arthroscopy", "ACL Reconstruction"] },
      { module: "Spine & Sports", duration: "2 Months", topics: ["Spinal Trauma", "Sports Injuries", "Pediatric Orthopedics"] },
      { module: "Research", duration: "1 Month", topics: ["Research Projects", "Case Studies", "Publications"] }
    ],
    careerOpportunities: [
      "Consultant Orthopedic Surgeon",
      "Trauma Surgeon",
      "Joint Replacement Surgeon",
      "Sports Medicine Specialist",
      "Academic Orthopedic Surgeon"
    ],
    fees: "₹8,50,000",
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-gynecology-obstetrics": {
    name: "Fellowship in Gynecology & Obstetrics",
    icon: "🤰",
    duration: "12 Months",
    eligibility: "MS/MD Obs & Gyn",
    description: "Advanced training in high-risk obstetrics and gynecological procedures.",
    overview: "This fellowship provides specialized training in high-risk pregnancy management, advanced laparoscopic surgery, urogynaecology, and gynecologic oncology. Fellows gain expertise in managing complex obstetric and gynecologic cases.",
    highlights: ["High-Risk Pregnancy", "Laparoscopic Surgery", "Fetal Medicine", "Gynec Oncology"],
    curriculum: [
      { module: "High-Risk Obstetrics", duration: "4 Months", topics: ["Preeclampsia", "GDM", "Multiple Pregnancy", "Preterm Labor"] },
      { module: "Fetal Medicine", duration: "2 Months", topics: ["Fetal Anomaly Scanning", "Invasive Procedures", "Twin Management"] },
      { module: "Advanced Laparoscopy", duration: "3 Months", topics: ["Laparoscopic Hysterectomy", "Myomectomy", "Endometriosis Surgery"] },
      { module: "Gynec Oncology", duration: "2 Months", topics: ["Cervical Cancer", "Ovarian Cancer", "Staging Procedures"] },
      { module: "Urogynaecology", duration: "1 Month", topics: ["Prolapse Surgery", "Incontinence", "Pelvic Floor Disorders"] }
    ],
    careerOpportunities: [
      "Consultant Obstetrician & Gynecologist",
      "Fetal Medicine Specialist",
      "Laparoscopic Surgeon",
      "High-Risk Pregnancy Specialist",
      "Academic OB/GYN"
    ],
    fees: "₹8,00,000",
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-general-surgery": {
    name: "Fellowship in General Surgery",
    icon: "🏥",
    duration: "12 Months",
    eligibility: "MS General Surgery",
    description: "Expert training in advanced general surgical techniques and procedures.",
    overview: "This fellowship offers advanced training in laparoscopic surgery, GI surgery, breast surgery, and emergency surgery. Fellows perform a wide variety of surgical procedures under supervision and develop expertise in minimally invasive techniques.",
    highlights: ["Laparoscopy", "GI Surgery", "Emergency Surgery", "Breast Surgery"],
    curriculum: [
      { module: "Advanced Laparoscopy", duration: "4 Months", topics: ["Laparoscopic Cholecystectomy", "Appendectomy", "Hernia Repair", "Bariatric Surgery"] },
      { module: "GI Surgery", duration: "3 Months", topics: ["Colorectal Surgery", "Esophageal Surgery", "Pancreatic Surgery"] },
      { module: "Emergency Surgery", duration: "2 Months", topics: ["Acute Abdomen", "Trauma Surgery", "Emergency Laparotomy"] },
      { module: "Breast & Endocrine", duration: "2 Months", topics: ["Breast Cancer Surgery", "Thyroid Surgery", "Parathyroid Surgery"] },
      { module: "Research", duration: "1 Month", topics: ["Surgical Research", "Audit", "Publications"] }
    ],
    careerOpportunities: [
      "Consultant General Surgeon",
      "Laparoscopic Surgeon",
      "GI Surgeon",
      "Trauma Surgeon",
      "Academic Surgeon"
    ],
    fees: "₹7,50,000",
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-spine-surgery": {
    name: "Fellowship in Spine Surgery",
    icon: "🦴",
    duration: "12 Months",
    eligibility: "MS Orthopedics/Neurosurgery",
    description: "Specialized training in spinal disorders and minimally invasive spine surgery.",
    overview: "This fellowship provides comprehensive training in spine surgery including degenerative spine disorders, spinal trauma, deformity correction, and minimally invasive spine surgery. Fellows learn both open and minimally invasive techniques.",
    highlights: ["Spinal Decompression", "Spinal Fusion", "Minimally Invasive", "Spinal Deformity"],
    curriculum: [
      { module: "Degenerative Spine", duration: "4 Months", topics: ["Disc Surgery", "Spinal Stenosis", "Spondylolisthesis"] },
      { module: "Spinal Trauma", duration: "2 Months", topics: ["Vertebral Fractures", "Spinal Cord Injury", "Stabilization"] },
      { module: "Minimally Invasive", duration: "3 Months", topics: ["Endoscopic Spine Surgery", "MIS Fusion", "Percutaneous Techniques"] },
      { module: "Deformity & Complex", duration: "2 Months", topics: ["Scoliosis", "Kyphosis", "Revision Surgery"] },
      { module: "Research", duration: "1 Month", topics: ["Clinical Research", "Outcomes Study", "Publications"] }
    ],
    careerOpportunities: [
      "Consultant Spine Surgeon",
      "Minimally Invasive Spine Specialist",
      "Spinal Deformity Surgeon",
      "Academic Spine Surgeon",
      "Tertiary Care Spine Specialist"
    ],
    fees: "₹9,00,000",
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-emergency-medicine": {
    name: "Fellowship in Emergency Medicine",
    icon: "🚑",
    duration: "12 Months",
    eligibility: "MBBS with 2+ years",
    description: "Advanced training in emergency care, trauma management, and critical decision-making.",
    overview: "This fellowship provides comprehensive training in emergency medicine covering trauma care, medical emergencies, toxicology, and emergency procedures. Fellows work in high-volume emergency departments gaining hands-on experience in acute care.",
    highlights: ["ICU Rotations", "Trauma Management", "Toxicology", "Emergency Procedures"],
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
    fees: "₹7,00,000",
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-critical-care-medicine": {
    name: "Fellowship in Critical Care Medicine",
    icon: "🏥",
    duration: "12 Months",
    eligibility: "MD/DNB Medicine/Anesthesia",
    description: "Comprehensive training in managing critically ill patients in ICU settings.",
    overview: "This fellowship offers intensive training in adult critical care including mechanical ventilation, hemodynamic monitoring, critical care procedures, and management of multi-organ failure. Fellows manage patients in medical, surgical, and cardiac ICUs.",
    highlights: ["Ventilator Management", "Hemodynamics", "Point-of-Care Ultrasound", "ICU Procedures"],
    curriculum: [
      { module: "Mechanical Ventilation", duration: "3 Months", topics: ["Invasive Ventilation", "NIV", "ARDS Management", "Weaning"] },
      { module: "Hemodynamic Monitoring", duration: "2 Months", topics: ["Shock Management", "Vasopressors", "Fluid Management"] },
      { module: "Critical Care Procedures", duration: "2 Months", topics: ["Central Lines", "Arterial Lines", "Tracheostomy", "Dialysis"] },
      { module: "Organ Support", duration: "3 Months", topics: ["Renal Replacement", "ECMO", "Liver Failure", "Sepsis"] },
      { module: "Advanced Topics", duration: "2 Months", topics: ["POCUS", "Neurocritical Care", "Nutrition", "Ethics"] }
    ],
    careerOpportunities: [
      "Intensivist",
      "Critical Care Consultant",
      "ICU Director",
      "Academic Critical Care Physician",
      "Multidisciplinary ICU Specialist"
    ],
    fees: "₹8,50,000",
    feeBreakdown: {
      tuition: "₹6,50,000",
      materials: "₹1,00,000",
      examFees: "₹50,000",
      registration: "₹50,000"
    },
    hospitalRotations: [
      { hospital: "AIIMS Delhi", duration: "4 months", focus: "Medical ICU & Ventilator Management" },
      { hospital: "Medanta Gurugram", duration: "3 months", focus: "Surgical ICU & Trauma" },
      { hospital: "Fortis Escorts", duration: "3 months", focus: "Cardiac ICU & ECMO" },
      { hospital: "Apollo Hospitals", duration: "2 months", focus: "Neurocritical Care" }
    ],
    examPattern: {
      theory: "35%",
      practical: "45%",
      viva: "20%",
      details: "Written MCQs + Case scenarios, Practical skills (10 critical procedures), Viva with ICU case presentations"
    },
    procedureCount: "Minimum 100 central line insertions, 50 arterial lines, 200+ ventilator managements",
    facultyRatio: "1:3 (One faculty for every 3 fellows)",
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
      <section className="bg-linear-to-br from-primary to-primary-dark text-white py-16">
        <div className="container-custom">
          <Link href="/programs" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            ← Back to All Programs
          </Link>
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center text-4xl">
              {program.icon}
            </div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">{program.name}</h1>
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="px-4 py-2 bg-white/20 backdrop-blur rounded-full font-semibold">
                  ⏱️ {program.duration}
                </span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur rounded-full font-semibold">
                  📋 {program.eligibility}
                </span>
                <span className="px-4 py-2 bg-accent/90 backdrop-blur rounded-full font-semibold">
                  💰 {program.fees}
                </span>
              </div>
              <p className="text-xl opacity-90">{program.description}</p>
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
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-6">Program Overview</h2>
                <p className="text-lg text-text-secondary leading-relaxed">{program.overview}</p>
              </div>

              {/* Key Highlights */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-6">Key Highlights</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {program.highlights.map((highlight: string, index: number) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg border border-gray-100">
                      <div className="w-10 h-10 bg-linear-to-br from-secondary to-primary rounded-lg flex items-center justify-center text-white font-bold">
                        ✓
                      </div>
                      <span className="font-semibold text-primary">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curriculum */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-6">Month-by-Month Curriculum</h2>
                <div className="space-y-4">
                  {program.curriculum.map((module: any, index: number) => (
                    <div key={index} className="card p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-heading font-bold text-primary">
                          Module {index + 1}: {module.module}
                        </h3>
                        <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-semibold">
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
                  <h2 className="text-3xl font-heading font-bold text-primary mb-6">Complete Fee Breakdown</h2>
                  <div className="card p-8">
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                        <span className="text-lg text-text-secondary">Tuition Fee</span>
                        <span className="text-xl font-bold text-primary">{program.feeBreakdown.tuition}</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                        <span className="text-lg text-text-secondary">Learning Materials & Books</span>
                        <span className="text-xl font-bold text-primary">{program.feeBreakdown.materials}</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                        <span className="text-lg text-text-secondary">Examination Fees</span>
                        <span className="text-xl font-bold text-primary">{program.feeBreakdown.examFees}</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                        <span className="text-lg text-text-secondary">Registration & Admin</span>
                        <span className="text-xl font-bold text-primary">{program.feeBreakdown.registration}</span>
                      </div>
                      <div className="flex justify-between items-center pt-3">
                        <span className="text-2xl font-heading font-bold text-primary">Total Program Fee</span>
                        <span className="text-3xl font-bold text-accent">{program.fees}</span>
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
                  <h2 className="text-3xl font-heading font-bold text-primary mb-6">Hospital Rotation Schedule</h2>
                  <p className="text-text-secondary mb-6">
                    Our fellows train at India's premier hospitals, gaining real-world experience across multiple specialties and patient populations.
                  </p>
                  <div className="space-y-4">
                    {program.hospitalRotations.map((rotation: any, index: number) => (
                      <div key={index} className="card p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-linear-to-br from-secondary to-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
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
                  <h2 className="text-3xl font-heading font-bold text-primary mb-6">Examination & Assessment</h2>
                  <div className="card p-8">
                    <h3 className="text-xl font-heading font-bold text-primary mb-4">Evaluation Breakdown</h3>
                    <div className="grid sm:grid-cols-3 gap-6 mb-6">
                      <div className="text-center p-4 bg-background rounded-lg">
                        <div className="text-4xl font-bold text-secondary mb-2">{program.examPattern.theory}</div>
                        <div className="text-sm text-text-secondary">Theory</div>
                      </div>
                      <div className="text-center p-4 bg-background rounded-lg">
                        <div className="text-4xl font-bold text-accent mb-2">{program.examPattern.practical}</div>
                        <div className="text-sm text-text-secondary">Practical</div>
                      </div>
                      <div className="text-center p-4 bg-background rounded-lg">
                        <div className="text-4xl font-bold text-primary mb-2">{program.examPattern.viva}</div>
                        <div className="text-sm text-text-secondary">Viva Voce</div>
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
                  <h2 className="text-3xl font-heading font-bold text-primary mb-6">Guaranteed Hands-On Experience</h2>
                  <div className="card p-8 bg-linear-to-br from-accent/5 to-secondary/5">
                    <div className="flex items-start gap-4">
                      <div className="text-5xl">🔧</div>
                      <div>
                        <h3 className="text-2xl font-heading font-bold text-primary mb-3">
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
                  <h2 className="text-3xl font-heading font-bold text-primary mb-6">Personalized Mentorship</h2>
                  <div className="card p-8">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="text-6xl">👥</div>
                      <div>
                        <h3 className="text-3xl font-bold text-accent mb-2">{program.facultyRatio}</h3>
                        <p className="text-xl text-text-secondary">Faculty-to-Student Ratio</p>
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
                <h2 className="text-3xl font-heading font-bold text-primary mb-6">Career Opportunities</h2>
                <div className="card p-8">
                  <ul className="space-y-4">
                    {program.careerOpportunities.map((opportunity: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-linear-to-br from-accent to-secondary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
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
              <div className="card p-6 sticky top-6">
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
                  <div className="flex items-center gap-3 text-text-secondary">
                    <span className="text-secondary">💰</span>
                    <div>
                      <p className="text-xs text-text-tertiary">Program Fee</p>
                      <p className="font-semibold text-primary">{program.fees}</p>
                      <p className="text-xs text-accent">EMI options available</p>
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
                      <p className="font-semibold text-primary">Feb 28, 2026</p>
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
                    <span>admissions@medfellowacademy.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📞</span>
                    <span>+91 98765 43210</span>
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

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import CurriculumAccordion from "@/components/CurriculumAccordion";
import { getProgramBySlug, getCurriculumModules } from "@/lib/cms";
import { getProgramImage } from "@/lib/course-images";

export const dynamic = 'force-dynamic';

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
    onlinePrice: 160000,
    month11_1: 180000,
    month10_2: 253000,
    month9_3: 287500,
    month6_6: 402500,
    month12Offline: 506000,
    curriculum: [
      { module: "Introduction and Overview", topics: ["Organisation of the Emergency Medicine Department", "Organisation of Emergency Medical Services", "Disaster Management", "Legal Aspects of Emergency Medicine"] },
      { module: "Airway Management", topics: ["Introduction", "Airway Management", "Assisted Ventilation", "Pulse Oximetry", "Ventilator Basics", "Nastro Gastric Tube"] },
      { module: "Trauma", topics: ["Trauma", "Emergency Department Imaging", "Neurology in Trauma"] },
      { module: "Orthopedic Emergencies", topics: ["Orthopedic Emergencies", "Types of Orthopaedic Emergencies", "Basic Management of Orthopaedic Emergencies", "Fractures", "Hand and Wrist Injuries", "Forearm, Elbow, Upper Arm and Shoulder Injuries", "Pelvis, Hip and Femur Injuries", "Lower Leg and Ankle Injuries", "Complications of Orthopaedic Injuries"] },
      { module: "Wounds and Analgesia", topics: ["Wound Assessment and Management", "Local and Regional Anaesthesia", "Chronic Pain Management"] },
      { module: "Cardiac and Respiratory Emergencies", topics: ["Cardiac Emergencies", "Respiratory Emergencies", "Cardiogenic Shock", "Segment Elevation Myocardial Infarction", "Myocardial Infarction", "Asthma", "Deep Vein Thrombosis"] },
      { module: "Endocrine and Neurologic Emergencies", topics: ["Endocrine Emergencies", "Neurology", "Psychiatric", "Shock"] },
      { module: "Renal, Gastric, and Hepatic Emergencies", topics: ["Renal Emergencies", "Gastrointestinal and Hepatobiliary Emergencies", "Liver Cirrhosis"] },
      { module: "Surgical and Transfusion Emergencies", topics: ["Surgical Emergencies", "Urogenital Emergencies", "Transfusion Emergencies", "Blood Transfusion"] },
      { module: "Obstetric, Gynecologic, and Pediatric Emergencies", topics: ["Obstetric and Gynecologic Emergencies", "Paediatric Emergencies", "Female Reproductive Tract", "Endometriosis", "IUCD", "PCOD", "Preeclampsia"] },
      { module: "Ear and Eye Emergencies", topics: ["Otolaryngeal Emergencies", "Ophthalmic Emergencies"] },
      { module: "Toxicology", topics: ["Approach to the Poisoned Patient", "Antidotes Commonly Used in Overdose", "Treatment of Hypotension Associated With Drug Poisoning", "Carbon Monoxide Poisoning", "Illicit Drugs and Controlled Substances of Abuse", "Alcohol Withdrawal", "Digitalis Toxicity", "Calcium Channel Blocker Toxicity", "Acetaminophen Hepatotoxicity", "Salicylate Overdose", "Tricyclic Antidepressant Overdose", "Monoamino Oxidase Inhibitor Overdose", "Arsenic Poisoning", "Cyanide Poisoning", "Iron Poisoning", "Lithium Carbonate Overdose", "Serum Osmolality", "Ethanol Poisoning", "Ethylene Glycol Poisoning", "Organophosphate and Organocarbamate Poisoning - Management"] },
      { module: "Environmental Emergencies", topics: ["Environmental Emergencies", "Burns", "Dive Emergencies", "Emergency Department - Anaphylaxis", "Emergency Department - Bites and Stings"] }
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
    onlinePrice: 160000,
    month11_1: 170000,
    month10_2: 276000,
    month9_3: 322000,
    month6_6: 517500,
    month12Offline: 655500,
    curriculum: [
      {
        module: "Certificate in Diabetes Mellitus",
        topics: [],
        submodules: [
          { module: "Introduction to Diabetes Mellitus", topics: ["Classification of Diabetes", "Epidemiology", "References"] },
          { module: "Various Hormones Involved in Diabetes Mellitus", topics: ["Pancreas Anatomy", "Structure of Insulin", "Biosynthesis and Secretion of Insulin", "Actions of Insulin", "Glucagon Structure, Biosynthesis, and Actions", "Incretins", "References"] },
          { module: "Types of Diabetes | Case Study", topics: ["Pathophysiology of Type 1 Diabetes", "Pathophysiology of Type 2 Diabetes", "Latent Autoimmune Diabetes in Adults", "References"] },
          { module: "Diagnosis and Screening of Diabetes", topics: ["Clinical Presentation", "Screening of Diabetes", "Diagnosis of Diabetes", "References"] },
          { module: "Diabetes Management | Case Study", topics: ["Aims of Diabetes Care", "Diabetes Self-management Education", "Role of Physical Activity in Diabetes Management", "ADA Guidelines on Nutrition", "Case Study: Medical Nutrition Therapy in Chronic Pancreatitis", "Case Study: Starting Therapy in Newly Diagnosed Type 2 Diabetes Mellitus", "References"] },
          { module: "Pharmacotherapy for Diabetes Mellitus", topics: ["Sulfonylureas", "Meglitinides", "Biguanides", "Thiazolidinediones", "Alpha-Glucosidase Inhibitors", "Dipeptidyl Peptidase-4 Inhibitors", "SGLT-2 Inhibitors", "Bile Acid Sequestrants", "D2-Dopamine Agonist", "GLP-1 Receptor Agonist", "Amylin Analogue", "Pharmacology of Insulin", "An Overview of Pharmacotherapy", "References", "Case Studies"] }
        ]
      },
      {
        module: "Advanced Certificate in Diabetes Mellitus",
        topics: [],
        submodules: [
          { module: "Pathophysiology of Diabetes Mellitus", topics: ["Risk Factors of Type 1 Diabetes Mellitus", "Risk Factors of Type 2 Diabetes Mellitus", "Pathology of Pancreas", "Immunology of Diabetes Mellitus", "Genetics of Diabetes"] },
          { module: "Metabolic Abnormalities in Diabetes Mellitus", topics: ["Carbohydrate Metabolism in Diabetes Mellitus", "Lipid Metabolism in Diabetes Mellitus", "Protein Metabolism in Diabetes Mellitus", "Lipid Metabolism"] },
          { module: "Diagnosis and Screening of Diabetes Mellitus", topics: ["Diagnosis of Diabetes: Clinical Monitoring", "Diagnosis of Diabetes: SMBG", "Prevention or Delay of Diabetes", "Prevention or Delay of Type 2 Diabetes: Lifestyle Modification", "Prevention or Delay of Type 2 Diabetes: Nutrition, Physical Activity, and Pharmacological"] },
          { module: "Management of Diabetes Mellitus | Case Study", topics: ["Islet Transplantation", "Diabetes Management in Hospitalised Patients - Part 1 and 2", "Overview and Efficacy of OHA", "Overview of Insulin Agents", "Pharmacological Approach to Glycemic Treatments", "Case Study: T1DM With Suboptimal Control", "Case Study: Acute Viral Hepatitis", "Case Study: Poorly Controlled T2DM With OHA Failure", "Case Study: Secondary Diabetes Mellitus With Benign Biliary Stricture, Secondary to Chronic Pancreatitis"] },
          { module: "Recent Advances in Diabetes Mellitus | Case Study", topics: ["Monitoring Blood Glucose - New Technologies - Part 1 and 2", "Novel Methods of Insulin Administration - Part 1 and 2", "Insulin Pumps", "Case Study: Switching from Premix to Basal-bolus Insulin"] }
        ]
      },
      {
        module: "Fellowship in Diabetes Mellitus",
        topics: [],
        submodules: [
          { module: "Epidemiology and Metabolic Complications", topics: ["Epidemiology of Complications of Diabetes Mellitus", "Epidemiology of Complications of Diabetes Mellitus According to 2023"] },
          { module: "Acute Complications | Case Study", topics: ["Hypoglycemia", "Diabetic Ketoacidosis", "Hyperosmolar Hyperglycemic State", "Case Study: Managing Diabetic Ketoacidosis With Type 1 Diabetes", "Case Study: Long-standing Insulinoma"] },
          { module: "Microvascular Complications | Case Study", topics: ["Pathogenesis of Microvascular Complications", "Diabetic Retinopathy", "Diabetic Nephropathy", "Diabetic Neuropathy", "Case Study: Diabetic Retinopathy"] },
          { module: "Macrovascular Complications | Case Study", topics: ["Pathogenesis of Macrovascular Complications", "Dyslipidemia in Diabetes Mellitus", "Ischemic Heart Disease in Diabetes Mellitus", "Cerebrovascular Disease in Diabetes Mellitus", "Peripheral Vascular Disease in Diabetes Mellitus", "Case Study: Diabetes With Cardiomegaly", "Case Study: COVID-19 Pneumonia, HTN, and T2DM"] },
          { module: "Other Complications of Diabetes Mellitus | Case Study", topics: ["Diabetic Foot", "Sexual Dysfunction in Diabetes Mellitus", "Gastrointestinal Manifestations in Diabetes Mellitus", "Dermatological Conditions in Diabetes Mellitus", "Bone and Rheumatic Disorders in Diabetes Mellitus", "Periodontal Disease in Diabetes Mellitus", "Case Study: Type 2 Diabetes Mellitus With Grade-1 Fatty Liver"] },
          { module: "Diabetes in Special Population | Case Study", topics: ["Types of Diabetes in Childhood and Adolescence", "Management of Diabetes in Childhood and Adolescence", "Lifestyle Management and Diabetes Self-management, Education, and Support", "Management of Psycho-social Stress and Other Complications of Diabetes in Childhood and Adolescence", "Comprehensive Geriatric Assessment and Geriatric Syndromes", "Diabetes in Pregnancy", "Diabetes in Elderly", "Pharmacotherapy", "Case Study: Gestational Diabetes"] }
        ]
      }
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
    month10_2: 264500,
    month9_3: 322000,
    month6_6: 448500,
    month12Offline: 598000,
    curriculum: [
      {
        module: "Certificate Course in Gynecology and Obstetrics",
        topics: [],
        submodules: [
          { module: "Introduction", topics: ["Welcome to Fellowship in Gynecology and Obstetrics", "Key Features of This Course", "How Will This Course Add Value to Your Medical Healthcare Career?", "What are the Career Growth Options?", "5 Reasons Why You Should Enroll into This Course?"] },
          { module: "Basic Sciences", topics: ["External Genitalia and Internal Genitalia", "Anatomy of Female External Genitalia", "Anatomy of Female Internal Genitalia", "Urinary Tract Structures and Pelvic Anatomy", "Developmental Abnormalities of the Female Reproductive Organs", "Blood Vessels, Lymphatic Drainage, and Innervation of Pelvic Organs"] },
          { module: "Reproductive Endocrinology", topics: ["Physiology of Female Reproductive System", "The Posterior Pituitary Pathway", "Physiology of Puberty", "Neurosecretory Peptides", "Menstrual Cycle", "Development of Genital Organs and Gonads"] },
          { module: "Basics and Practical Guide for Obstetrics", topics: ["Diagnosis of Pregnancy", "Diagnostic Ultrasound in the First Trimester of Pregnancy", "Nutrition in Pregnancy", "Teratology and Drugs in Pregnancy", "Exercise and Physical Activity During Pregnancy", "Hyperemesis in Pregnancy", "Development and Physiology of Placental Membranes", "Anatomic Aspects of Fetal Development", "Prenatal Development: Growth, Differentiation, and Their Disturbances", "Preconceptional and Prenatal Care", "Pregnancy Complications and Their Management (Trimester Wise)", "Case Study: Anemia in Pregnancy"] }
        ]
      },
      {
        module: "Advanced Certificate Course in Gynecology and Obstetrics",
        topics: [],
        submodules: [
          { module: "An Overview of Basic Gynecology | Case Study", topics: ["An Overview on Benign Gynecology", "General Examination and History Taking in Gynecology", "Abnormal Uterine Bleeding", "Pelvic Infection", "Lesions Associated With Vulva and Vagina", "Sexual Dysfunction", "Case Study: Abnormal Uterine Bleeding", "Case Study: Uterine Prolapse (Vaginal Hysterectomy)", "Pelvic Organs Prolapse"] },
          { module: "Imaging in Gynecology", topics: ["Assessment of the Adnexal Mass", "Breast Cancer", "Diagnosis and Management of Benign Breast Disease", "Benign Breast Disease: Diagnosis and its Management", "Cytopathology: Useful Techniques in the Field of Gynecology", "Colposcopy", "Diseases of the Cervix", "Electrosurgery", "Magnetic Resonance Imaging (MRI)"] },
          { module: "Benign Neoplasms", topics: ["Benign Tumors of the Vulva", "Tumors of Vagina", "Operative Techniques of the Vulva", "Leiomyomas of the Uterus", "Tumors Associated With Ovary and Fallopian Tube"] },
          { module: "Reproductive Endocrinology | Case Study", topics: ["Steroid Hormones", "Androgen Metabolism", "Estrogen Kinetics for Clinicians", "Steroid Hormone Receptors", "Cell Membrane Receptors", "Fetal Growth Problems", "Pregnancy Endocrinology", "Prostaglandins", "Fertility and Infertility", "Infertility", "Recurrent Pregnancy Loss", "Case Study: Gestational Diabetes Mellitus"] },
          { module: "Reconstructive Pelvic Surgery", topics: ["Reconstructive Pelvic Surgery"] },
          { module: "Importance of Lasers in the Field of Gynecology", topics: ["Lasers in Gynecology"] },
          { module: "Practical Guide for Obstetrics (Labor) | Case Study", topics: ["Basics of Labour", "Induction of Labour", "Forceps Delivery and Vacuum Extraction", "Abnormal Labour", "Umbilical Cord Prolapse and Other Cord Emergencies", "Shoulder Dystocia", "Multiple Gestation", "Episiotomy and Perineal Tears", "Case Study: Preterm Labour With Episiotomy", "Case Study: Normal Vaginal Delivery With Episiotomy"] }
        ]
      },
      {
        module: "Fellowship in Gynecology and Obstetrics",
        topics: [],
        submodules: [
          { module: "Introduction", topics: ["Introduction to Gynecology and Obstetrics"] },
          { module: "Fetal and Maternal Health | Case Study", topics: ["Care for High-risk Mother", "High-risk Care for Pregnant Women", "Hypertension in Pregnancy", "Respiratory Physiology of Pregnancy", "Adolescence and Puberty", "Diabetes Mellitus and Pregnancy", "Anemia in Pregnancy", "Thromboembolic Diseases", "Cardiovascular Diseases in Pregnancy", "Nervous Disorders in Pregnant Women", "Autoimmune Diseases in Pregnancy", "Endocrine Diseases vs Pregnancy", "Liver Diseases in Pregnancy", "Recurrent Urinary Infections in Pregnant Women", "Gastrointestinal Disorders in Pregnancy", "Fetal Circulation", "Placental Physiology", "Pharmacology in Obstetrics and Newborns", "Birth Sequelae", "Oral Health and Pregnancy", "Association of Renal Diseases and Pregnancy", "Case Study: Acute Fatty Liver Disease of Pregnancy"] },
          { module: "Gynecologic Infections", topics: ["Infections in Maternal Fetal Medicine", "Common Infections in Maternal Fetal Health", "Intra-Amniotic Infections", "Antepartum Infections", "Postpartum Infections", "Bacterial Infections in Pregnancy", "Gonorrhea in Pregnancy", "Syphilis in Pregnancy", "Hepatitis in Pregnancy", "Cytomegalovirus in Pregnancy", "COVID-19 vs Pregnancy", "Infections Associated With Herpes, Varicella, and Rubella in Pregnant Women", "HIV and Pregnancy", "Immunization in Pregnancy", "Toxic Shock Syndrome", "Acute Pelvic Inflammatory Disease", "Chronic Pelvic Inflammatory Disease", "Tuberculosis of the Female Genital Tract", "Diagnosis and Management of Postoperative Infection"] },
          { module: "Gynecologic Oncology", topics: ["Cervical Cancer", "Endometrial Cancer", "Uterine Sarcoma", "Ovarian Tumor", "Other Malignancies", "General Considerations and Precautionary Measures"] },
          { module: "Gynecological Procedures | Case Study", topics: ["Hysteroscopy", "Laparoscopy (Hysterectomy, Myomectomy, and Cystectomy)", "Case Study: Per Vaginal Bleeding (Hysteroscopic D and C)", "Case Study: Post-menopausal Bleeding for Hysteroscopy"] },
          { module: "Special Topics in Gynecology | Case Study", topics: ["Premenstrual Syndrome", "Contraception", "Amenorrhea", "Dysmenorrhea", "Pediatric Gynecology", "Endometriosis", "Ectopic Pregnancy", "PCOS", "Abortion", "Fertility Regulation", "Menopause", "Case Study: Incomplete Abortion"] },
          { module: "Obstetrics | Case Study", topics: ["Episiotomy", "Cesarean Birth", "Case Study: Fetal Distress With Umbilical Cord Strangulation", "Cesarean Hysterectomy", "Vaginal Birth After Cesarean", "Vaginal Delivery", "Case Study: Polyhydramnios With Hypothyroidism"] },
          { module: "Importance of Genetics in the Field of Gynecology", topics: ["Principles of Human Genetics", "Sexual Differentiation", "Genetical Disorders", "Reproductive Technology", "Preimplantation Genetics"] },
          { module: "Psychosomatic Disorders | Case Study", topics: ["Sterilization", "Behavioral Disorders", "Vaginismus", "Dyspareunia", "Case Study: Sterilization", "Importance of Counseling"] },
          { module: "Final Assessment", topics: [] }
        ]
      }
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
  "fellowship-in-cosmetic-gynecology": {
    name: "Fellowship in Cosmetic Gynecology",
    icon: "👩‍⚕️",
    duration: "12 Months",
    eligibility: "MBBS / MS / MD / DNB / Obstetrics & Gynecology qualification",
    description: "Comprehensive fellowship in cosmetic gynecology integrating aesthetic, functional, and sexual wellness care.",
    overview: "This curriculum-focused fellowship in Cosmetic Gynecology builds competency across patient evaluation, non-surgical energy-based procedures, surgical cosmetic gynecology, urogynecologic functional corrections, perioperative care, complication prevention, and practice development. The program emphasizes evidence-based decision-making, ethical consent, hands-on clinical exposure, and medico-legal safety.",
    highlights: ["Aesthetic and functional cosmetic gynecology training", "Laser, RF, PRP, injectables, and device-based procedures", "Surgical cosmetic gynecology and urogynecology integration", "Hands-on case exposure with practice setup and business modules"],
    onlinePrice: 160000,
    month11_1: 195000,
    curriculum: [
      {
        module: "Module 1: Fundamentals of Cosmetic Gynecology",
        topics: [
          "Introduction to cosmetic gynecology",
          "Scope and evolution of aesthetic gynecology",
          "Indications: functional vs aesthetic procedures",
          "Ethical considerations and consent",
          "Patient expectations and satisfaction metrics"
        ]
      },
      {
        module: "Module 2: Anatomy and Physiology",
        topics: [
          "Detailed vulvo-vaginal anatomy",
          "Pelvic floor anatomy and biomechanics",
          "Sexual response cycle and physiology",
          "Aging, hormonal changes and postpartum effects"
        ]
      },
      {
        module: "Module 3: Patient Evaluation and Counseling",
        topics: [
          "Patient selection criteria",
          "Clinical assessment (aesthetic and functional)",
          "Sexual health evaluation",
          "Counseling techniques for sensitive concerns",
          "Documentation and medico-legal aspects"
        ]
      },
      {
        module: "Module 4: Non-Surgical Cosmetic Procedures",
        topics: [
          "Laser vaginal rejuvenation (CO2, Er:YAG)",
          "Radiofrequency (RF) vaginal tightening",
          "PRP (O-shot / regenerative therapy)",
          "Injectable treatments: fillers (labia majora augmentation)",
          "Injectable treatments: Botox (vaginismus, pelvic floor relaxation)",
          "Chemical treatments for pigmentation and rejuvenation",
          "Energy-based devices overview"
        ]
      },
      {
        module: "Module 5: Surgical Cosmetic Gynecology",
        topics: [
          "Labiaplasty (minora and majora techniques)",
          "Vaginoplasty (vaginal tightening surgery)",
          "Hymenoplasty",
          "Clitoral hood reduction",
          "Perineoplasty",
          "Fat grafting to vulva"
        ]
      },
      {
        module: "Module 6: Urogynecology and Functional Corrections",
        topics: [
          "Stress urinary incontinence management",
          "Vaginal prolapse correction",
          "Pelvic floor repair techniques",
          "Postpartum reconstruction"
        ]
      },
      {
        module: "Module 7: Sexual Medicine Integration",
        topics: [
          "Female sexual dysfunction",
          "Orgasmic disorders",
          "Impact of procedures on sexual function",
          "Counseling for sexual wellness"
        ]
      },
      {
        module: "Module 8: Devices and Technology",
        topics: [
          "Laser platforms",
          "Radiofrequency devices",
          "Safety protocols and settings",
          "Device selection and clinical indications"
        ]
      },
      {
        module: "Module 9: Perioperative Care",
        topics: [
          "Pre-procedure planning",
          "Sterility and OT protocols",
          "Post-procedure care and recovery",
          "Pain management",
          "Follow-up protocols"
        ]
      },
      {
        module: "Module 10: Complications and Risk Management",
        topics: [
          "Surgical complications",
          "Laser-related adverse effects",
          "Infection, scarring, dissatisfaction",
          "Revision procedures"
        ]
      },
      {
        module: "Module 11: Clinical Training and Hands-on",
        topics: [
          "Live case demonstrations",
          "Assisted procedures",
          "Independent case exposure (depending on setup)",
          "Case discussions and audits"
        ]
      },
      {
        module: "Module 12: Practice Setup and Aesthetic Business",
        topics: [
          "Clinic setup for cosmetic gynecology",
          "Branding and patient acquisition",
          "Pricing models",
          "Legal compliance in aesthetic practice"
        ]
      }
    ],
    careerOpportunities: [
      "Cosmetic Gynecology Specialist",
      "Aesthetic and Functional Women's Health Consultant",
      "Urogynecology and Pelvic Wellness Practitioner",
      "Laser and Energy-based Gynecology Procedure Expert",
      "Women's Aesthetic Clinic Founder"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-laparoscopy-hysteroscopy": {
    name: "Fellowship in Laparoscopy & Hysteroscopy",
    icon: "🧬",
    duration: "12 Months",
    eligibility: "MS/MD/DNB Obstetrics & Gynecology",
    description: "One-year blended fellowship focused on diagnostic and operative gynecological endoscopy.",
    overview: "This 12-month blended fellowship (online learning + skill lab + hospital-based training) provides structured progression in gynecological endoscopy. The curriculum covers fundamentals, diagnostic workflows, basic and advanced operative laparoscopy and hysteroscopy, complication management, ethics, and endoscopy practice setup.",
    highlights: ["Blended learning with skill lab and hospital exposure", "Diagnostic and operative gynecological endoscopy", "Stepwise laparoscopy and hysteroscopy training", "Complication management and ethical practice"],
    onlinePrice: 180000,
    month11_1: 210000,
    curriculum: [
      {
        module: "Module 1: Fundamentals of Endoscopic Surgery (Month 1-2)",
        topics: [],
        submodules: [
          {
            module: "1.1 Basics of Laparoscopy",
            topics: ["History and evolution", "Principles of minimal access surgery", "Advantages vs open surgery", "Ergonomics and surgeon posture"]
          },
          {
            module: "1.2 Equipment and Instrumentation",
            topics: ["Laparoscopic tower components", "Camera, light source, insufflator", "Trocars, Veress needle, optical ports", "Energy sources (Monopolar, Bipolar, Harmonic)"]
          },
          {
            module: "1.3 Hysteroscopy Basics",
            topics: ["Types: Diagnostic and Operative", "Hysteroscopes and sheaths", "Distension media (CO2, Normal saline, Glycine)"]
          },
          {
            module: "1.4 OT Setup and Patient Safety",
            topics: ["Patient positioning", "Port placement principles", "Sterilization protocols", "Prevention of complications"]
          }
        ]
      },
      {
        module: "Module 2: Diagnostic Procedures (Month 3-4)",
        topics: [],
        submodules: [
          {
            module: "2.1 Diagnostic Laparoscopy",
            topics: ["Indications: Infertility, chronic pelvic pain", "Evaluation of uterus, tubes, ovaries", "Chromopertubation"]
          },
          {
            module: "2.2 Diagnostic Hysteroscopy",
            topics: ["Indications: AUB, infertility, RPL", "Endometrial assessment", "Uterine cavity abnormalities"]
          },
          {
            module: "2.3 Imaging Correlation",
            topics: ["USG, SIS, HSG correlation", "Case-based discussions"]
          }
        ]
      },
      {
        module: "Module 3: Basic Operative Skills (Month 5-6)",
        topics: [],
        submodules: [
          {
            module: "3.1 Laparoscopic Skills",
            topics: ["Camera navigation", "Hand-eye coordination", "Suturing and knotting techniques", "Tissue handling"]
          },
          {
            module: "3.2 Basic Laparoscopic Procedures",
            topics: ["Ovarian cystectomy", "Tubal ligation", "Adhesiolysis", "Ectopic pregnancy management"]
          },
          {
            module: "3.3 Basic Hysteroscopic Procedures",
            topics: ["Polypectomy", "Endometrial biopsy", "IUCD removal", "Septal resection (basic)"]
          }
        ]
      },
      {
        module: "Module 4: Advanced Laparoscopic Surgery (Month 7-9)",
        topics: [],
        submodules: [
          {
            module: "4.1 Advanced Procedures",
            topics: ["Laparoscopic myomectomy", "Laparoscopic hysterectomy (TLH, LAVH)", "Endometriosis surgery", "Pelvic floor repair"]
          },
          {
            module: "4.2 Urogynecological Procedures",
            topics: ["Sling procedures", "Vault prolapse management"]
          },
          {
            module: "4.3 Energy Devices and Advanced Techniques",
            topics: ["Advanced vessel sealing", "Hemostasis techniques"]
          }
        ]
      },
      {
        module: "Module 5: Advanced Hysteroscopy (Month 10-11)",
        topics: [],
        submodules: [
          {
            module: "5.1 Operative Hysteroscopy",
            topics: ["Myomectomy (submucous fibroids)", "Septum resection", "Adhesiolysis (Asherman's syndrome)", "Endometrial ablation"]
          },
          {
            module: "5.2 Complication Management",
            topics: ["Fluid overload", "Uterine perforation", "Bleeding management"]
          }
        ]
      },
      {
        module: "Module 6: Complications, Ethics and Practice Setup (Month 12)",
        topics: [],
        submodules: [
          {
            module: "6.1 Complication Management",
            topics: ["Entry-related injuries", "Bowel, bladder, vascular injuries", "Conversion to open surgery"]
          },
          {
            module: "6.2 Clinical Decision Making",
            topics: ["Case selection", "Consent and counseling", "Risk stratification"]
          },
          {
            module: "6.3 Legal and Ethical Aspects",
            topics: ["Documentation", "Medico-legal issues", "Patient safety standards"]
          },
          {
            module: "6.4 Setting up Endoscopy Practice",
            topics: ["OT setup planning", "Equipment procurement", "Costing and ROI"]
          }
        ]
      }
    ],
    careerOpportunities: [
      "Gynecological Endoscopy Specialist",
      "Laparoscopic Gynecology Consultant",
      "Operative Hysteroscopy Specialist",
      "Minimal Access Gynecologic Surgeon",
      "Endoscopy Practice Lead"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-high-risk-pregnancy": {
    name: "Fellowship in High-Risk Pregnancy",
    icon: "🤰",
    duration: "12 Months",
    eligibility: "MS/MD/DNB Obstetrics & Gynecology",
    description: "One-year structured fellowship in high-risk obstetrics with maternal-fetal and critical care focus.",
    overview: "This 12-month fellowship provides advanced, phase-wise training in high-risk pregnancy care, spanning preconception risk assessment, maternal medicine, fetal medicine, obstetric emergencies, critical care, and labour-delivery planning. The curriculum is designed for clinicians managing complex pregnancies and multidisciplinary maternal-fetal pathways.",
    highlights: ["Foundations of high-risk obstetrics", "Maternal medicine and ICU protocols", "Prenatal diagnosis and fetal surveillance", "Labour, delivery, and postpartum-neonatal integration"],
    onlinePrice: 180000,
    month11_1: 210000,
    curriculum: [
      {
        module: "Phase 1: Foundations (Month 1-3)",
        topics: [],
        submodules: [
          {
            module: "Module 1: Basics of High-Risk Pregnancy",
            topics: [
              "Definition, classification, and risk stratification",
              "Epidemiology and burden of high-risk pregnancies",
              "Preconception counseling and risk assessment",
              "Antenatal care protocols (routine vs high-risk)"
            ]
          },
          {
            module: "Module 2: Maternal Physiology and Adaptations",
            topics: ["Physiological changes in pregnancy", "Placental physiology", "Maternal-fetal circulation", "Pharmacology in pregnancy"]
          }
        ]
      },
      {
        module: "Phase 2: Maternal Medicine (Month 4-6)",
        topics: [],
        submodules: [
          {
            module: "Module 3: Hypertensive Disorders in Pregnancy",
            topics: [
              "Gestational hypertension, preeclampsia, eclampsia",
              "HELLP syndrome",
              "Management protocols and ICU care",
              "Doppler studies and fetal surveillance"
            ]
          },
          {
            module: "Module 4: Diabetes in Pregnancy",
            topics: ["GDM and pregestational diabetes", "Screening and diagnosis", "Insulin therapy and glycemic control", "Fetal implications and delivery planning"]
          },
          {
            module: "Module 5: Medical Disorders in Pregnancy",
            topics: [
              "Cardiac diseases",
              "Renal disorders",
              "Thyroid and endocrine disorders",
              "Autoimmune diseases (SLE, APS)",
              "Hematological disorders (anemia, thrombophilia)"
            ]
          }
        ]
      },
      {
        module: "Phase 3: Fetal Medicine (Month 7-9)",
        topics: [],
        submodules: [
          {
            module: "Module 6: Prenatal Diagnosis and Screening",
            topics: ["First trimester screening (NT scan, dual markers)", "Second trimester anomaly scan", "Genetic screening and counseling", "Amniocentesis and CVS"]
          },
          {
            module: "Module 7: Fetal Growth and Wellbeing",
            topics: ["IUGR and fetal growth restriction", "Doppler velocimetry", "Biophysical profile", "Fetal monitoring (CTG, NST)"]
          },
          {
            module: "Module 8: Fetal Complications",
            topics: ["Congenital anomalies", "Multiple pregnancy complications (TTTS)", "Rh isoimmunization", "Infections in pregnancy (TORCH)"]
          }
        ]
      },
      {
        module: "Phase 4: Obstetric Complications and Critical Care (Month 10-11)",
        topics: [],
        submodules: [
          {
            module: "Module 9: Preterm Labour and Obstetric Emergencies",
            topics: [
              "Preterm labour and PPROM",
              "Antepartum hemorrhage (placenta previa, abruption)",
              "Postpartum hemorrhage (PPH)",
              "Sepsis in pregnancy"
            ]
          },
          {
            module: "Module 10: Critical Care in Obstetrics",
            topics: ["Obstetric ICU/HDU management", "Shock management", "Ventilator support basics", "Massive transfusion protocols"]
          }
        ]
      },
      {
        module: "Phase 5: Labour and Delivery Management (Month 12)",
        topics: [],
        submodules: [
          {
            module: "Module 11: High-Risk Labour Management",
            topics: ["Induction of labour in high-risk cases", "Operative vaginal delivery", "Cesarean section in complicated cases", "VBAC in high-risk scenarios"]
          },
          {
            module: "Module 12: Postpartum and Neonatal Care",
            topics: ["Postpartum complications", "Neonatal resuscitation (NRP basics)", "NICU coordination", "Breastfeeding in high-risk cases"]
          }
        ]
      }
    ],
    careerOpportunities: [
      "High-Risk Pregnancy Specialist",
      "Maternal-Fetal Medicine Consultant",
      "Obstetric Critical Care Practitioner",
      "Fetal Surveillance and Diagnostics Specialist",
      "Academic Obstetrics Faculty"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-fetal-medicine": {
    name: "Fellowship in Fetal Medicine",
    icon: "🧫",
    duration: "12 Months",
    eligibility: "MS/MD/DNB Obstetrics & Gynecology",
    description: "Advanced fellowship in fetal diagnosis, imaging, genetics, and intrauterine care pathways.",
    overview: "Fellowship in Fetal Medicine is a 12-month advanced training program focused on fetal imaging, prenatal diagnosis, growth surveillance, genetics, invasive procedures, complex fetal pathology, and fetal therapy exposure. The curriculum is designed to build independent fetal medicine specialists with strong technical and counseling competence.",
    highlights: ["Comprehensive fetal imaging pathway", "Prenatal genetics and invasive diagnostics", "Advanced fetal surveillance and complex case review", "Fetal intervention exposure with ethics and counseling"],
    onlinePrice: 160000,
    month11_1: 210000,
    curriculum: [
      {
        module: "Phase 1: Foundations (Month 1-3)",
        topics: [],
        submodules: [
          {
            module: "Module 1: Basics of Fetal Medicine",
            topics: ["Scope of fetal medicine and perinatology", "Embryology and fetal development", "Placental physiology", "Maternal-fetal interface"]
          },
          {
            module: "Module 2: Ultrasound Physics and Basics",
            topics: ["Ultrasound principles", "Machine settings and optimization", "Safety (ALARA principle)", "Standard planes and measurements"]
          }
        ]
      },
      {
        module: "Phase 2: Fetal Imaging and Diagnosis (Month 4-6)",
        topics: [],
        submodules: [
          {
            module: "Module 3: First Trimester Screening",
            topics: ["NT scan", "Nasal bone, ductus venosus", "Combined screening (dual markers)", "Early anomaly scan"]
          },
          {
            module: "Module 4: Second Trimester Anomaly Scan",
            topics: ["Systematic fetal evaluation: CNS, cardiac, GI, renal, skeletal", "Soft markers for aneuploidy", "Placental and cord abnormalities"]
          },
          {
            module: "Module 5: Fetal Echocardiography",
            topics: ["Basic cardiac anatomy", "4-chamber view, outflow tracts", "Common congenital heart diseases"]
          }
        ]
      },
      {
        module: "Phase 3: Fetal Growth and Surveillance (Month 7-8)",
        topics: [],
        submodules: [
          {
            module: "Module 6: Fetal Growth Assessment",
            topics: ["IUGR / FGR classification", "Growth charts", "Amniotic fluid assessment"]
          },
          {
            module: "Module 7: Doppler Studies",
            topics: ["Umbilical artery", "MCA Doppler", "Ductus venosus", "Uterine artery"]
          }
        ]
      },
      {
        module: "Phase 4: Genetics and Invasive Procedures (Month 9-10)",
        topics: [],
        submodules: [
          {
            module: "Module 8: Prenatal Genetics",
            topics: ["Aneuploidy screening", "NIPT", "Genetic syndromes", "Counseling strategies"]
          },
          {
            module: "Module 9: Invasive Procedures",
            topics: ["Amniocentesis", "Chorionic villus sampling (CVS)", "Cordocentesis (theoretical + assisted)"]
          }
        ]
      },
      {
        module: "Phase 5: Fetal Pathology and Complex Cases (Month 11)",
        topics: [],
        submodules: [
          {
            module: "Module 10: Fetal Anomalies",
            topics: ["CNS anomalies", "Cardiac defects", "Skeletal dysplasia", "Syndromic conditions"]
          },
          {
            module: "Module 11: Multiple Pregnancy",
            topics: ["Twin complications: TTTS", "TAPS", "Selective IUGR"]
          }
        ]
      },
      {
        module: "Phase 6: Fetal Therapy and Advanced Care (Month 12)",
        topics: [],
        submodules: [
          {
            module: "Module 12: Fetal Interventions",
            topics: ["Intrauterine transfusion (observational)", "Laser therapy for TTTS", "Fetal shunts", "Fetoscopy (exposure)"]
          },
          {
            module: "Module 13: Counseling and Ethics",
            topics: ["Breaking bad news", "Termination decisions", "Ethical dilemmas in fetal anomalies"]
          }
        ]
      }
    ],
    careerOpportunities: [
      "Fetal Medicine Specialist",
      "Prenatal Diagnostics Consultant",
      "Fetal Imaging and Genetics Specialist",
      "Maternal-Fetal Unit Consultant",
      "Academic Fetal Medicine Faculty"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-maxillofacial-oral-surgery": {
    name: "Fellowship in Maxillofacial and Oral Surgery",
    icon: "🦷",
    duration: "12 Months",
    eligibility: "BDS / MDS / MBBS / MS / DNB",
    description: "Advanced competency-based training in diagnosis, surgical management, and rehabilitation of oral and maxillofacial conditions.",
    overview: "The Fellowship in Maxillofacial and Oral Surgery is an advanced 1-year program designed for dental and medical professionals seeking expertise in oral and maxillofacial surgery. The curriculum integrates surgical foundations, trauma care, orthognathic planning, implantology, TMJ management, oral oncology, reconstructive techniques, and practice-oriented professional development.",
    highlights: ["Comprehensive maxillofacial surgical training", "Trauma, orthognathic, and reconstructive focus", "Implantology, TMJ, and oral oncology pathways", "Advanced technology integration and practice management"],
    onlinePrice: 200000,
    month11_1: 230000,
    curriculum: [
      {
        module: "Module 1: Basic Sciences and Surgical Foundations",
        topics: [
          "Applied head and neck anatomy",
          "Surgical physiology and wound healing",
          "Principles of asepsis and sterilization",
          "Surgical instrumentation and operating room protocols",
          "Basics of anesthesia in maxillofacial surgery"
        ]
      },
      {
        module: "Module 2: Dentoalveolar Surgery",
        topics: [
          "Surgical tooth extraction (impacted teeth, third molars)",
          "Management of odontogenic infections",
          "Pre-prosthetic surgery",
          "Alveoloplasty and ridge preservation",
          "Complications and their management"
        ]
      },
      {
        module: "Module 3: Maxillofacial Trauma",
        topics: [
          "Assessment of facial injuries (ATLS principles)",
          "Mandibular fractures management",
          "Midface fractures (Le Fort fractures)",
          "Zygomatic complex and orbital fractures",
          "Principles of fixation (plates, screws, wiring)",
          "Emergency airway management"
        ]
      },
      {
        module: "Module 4: Orthognathic Surgery",
        topics: [
          "Growth and development of jaws",
          "Diagnosis and treatment planning",
          "Cephalometric analysis",
          "Maxillary and mandibular osteotomies",
          "Surgical simulation and virtual planning",
          "Postoperative orthodontic coordination"
        ]
      },
      {
        module: "Module 5: Oral Implantology and Bone Grafting",
        topics: [
          "Principles of osseointegration",
          "Implant planning and placement",
          "Sinus lift procedures",
          "Ridge augmentation techniques",
          "Guided implant surgery",
          "Management of peri-implant complications"
        ]
      },
      {
        module: "Module 6: Temporomandibular Joint (TMJ) Disorders",
        topics: [
          "TMJ anatomy and biomechanics",
          "Internal derangement and dysfunction",
          "Non-surgical management",
          "Arthrocentesis and arthroscopy",
          "Open joint surgeries"
        ]
      },
      {
        module: "Module 7: Oral Oncology and Pathology",
        topics: [
          "Oral premalignant lesions",
          "Oral cancer diagnosis and staging",
          "Biopsy techniques",
          "Surgical oncology principles",
          "Neck dissection basics",
          "Reconstruction after tumor resection"
        ]
      },
      {
        module: "Module 8: Reconstructive and Aesthetic Maxillofacial Surgery",
        topics: [
          "Soft tissue reconstruction",
          "Local and regional flaps",
          "Microvascular reconstruction (overview)",
          "Scar revision and facial aesthetics",
          "Craniofacial deformities"
        ]
      },
      {
        module: "Module 9: Pediatric Maxillofacial Surgery",
        topics: [
          "Congenital anomalies (cleft lip and palate basics)",
          "Pediatric trauma",
          "Growth-related surgical considerations",
          "Behavioral and sedation protocols"
        ]
      },
      {
        module: "Module 10: Anesthesia, Pain Management and Critical Care",
        topics: [
          "Local anesthesia techniques",
          "Conscious sedation",
          "General anesthesia basics",
          "Postoperative pain control",
          "Management of medical emergencies"
        ]
      },
      {
        module: "Module 11: Advanced Technologies in Maxillofacial Surgery",
        topics: [
          "3D imaging (CBCT) and planning",
          "CAD/CAM applications",
          "Navigation surgery",
          "Laser applications in oral surgery",
          "Minimally invasive techniques"
        ]
      },
      {
        module: "Module 12: Research, Ethics and Practice Management",
        topics: [
          "Evidence-based surgical practice",
          "Clinical audit and documentation",
          "Research methodology and publications",
          "Medical ethics and medico-legal aspects",
          "Practice setup and patient communication"
        ]
      }
    ],
    careerOpportunities: [
      "Oral and Maxillofacial Surgeon",
      "Trauma and Reconstructive Maxillofacial Specialist",
      "Implantology and Dentoalveolar Surgery Consultant",
      "Oral Oncology and TMJ Specialist",
      "Academic and Hospital-based Maxillofacial Faculty"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-oral-implantology-laser-dentistry": {
    name: "Fellowship in Oral Implantology and Laser Dentistry",
    icon: "🦷",
    duration: "12 Months",
    eligibility: "BDS / MDS / Equivalent dental qualification",
    description: "Comprehensive fellowship in implant dentistry and laser-assisted minimally invasive dental care.",
    overview: "The Fellowship in Oral Implantology and Laser Dentistry is a clinically driven 1-year program designed to build advanced expertise in implant planning, surgical placement, prosthetic rehabilitation, and laser applications in dentistry. The curriculum combines theory, simulation, and hands-on clinical exposure with modern digital workflows.",
    highlights: ["Implant planning, placement, and restoration", "Laser physics and clinical laser applications", "CBCT-guided digital decision making", "Esthetic and functional rehabilitation"],
    curriculum: [
      {
        module: "Module 1: Basic Sciences and Implant Foundations",
        topics: ["Applied oral anatomy and bone biology", "Osseointegration principles", "Healing and tissue response", "Sterilization and infection control", "Case selection and patient evaluation"]
      },
      {
        module: "Module 2: Implant Diagnosis and Treatment Planning",
        topics: ["Clinical and radiographic assessment", "CBCT interpretation and bone mapping", "Risk assessment and case selection", "Digital implant planning", "Surgical guides and workflow"]
      },
      {
        module: "Module 3: Implant Surgery - Basic to Advanced",
        topics: [
          "Surgical armamentarium and setup",
          "Incision, flap design, and suturing",
          "Implant placement protocols",
          "Immediate vs delayed implants",
          "Flapless and guided implant surgery",
          "Management of intraoperative complications"
        ]
      },
      {
        module: "Module 4: Prosthetic Phase in Implantology",
        topics: ["Impression techniques", "Abutments and prosthetic components", "Single tooth, bridge, and full-arch restorations", "Occlusion in implant dentistry", "All-on-4 / full mouth rehabilitation concepts"]
      },
      {
        module: "Module 5: Bone Grafting and Advanced Implant Procedures",
        topics: ["Ridge preservation and augmentation", "Sinus lift techniques (open and closed)", "Bone graft materials and membranes", "Soft tissue grafting", "Management of deficient ridges"]
      },
      {
        module: "Module 6: Laser Dentistry - Fundamentals",
        topics: [
          "Laser physics and tissue interaction",
          "Types of dental lasers (Diode, Nd:YAG, Er:YAG, CO2)",
          "Laser safety protocols",
          "Indications and contraindications",
          "Laser dentistry for precision, healing, and patient comfort"
        ]
      },
      {
        module: "Module 7: Laser Applications in Clinical Dentistry",
        topics: [
          "Soft tissue procedures (gingivectomy, frenectomy)",
          "Periodontal therapy and pocket decontamination",
          "Laser-assisted implantology",
          "Treatment of peri-implantitis",
          "Endodontic and restorative applications",
          "Photobiomodulation and pain management"
        ]
      },
      {
        module: "Module 8: Peri-Implant Diseases and Complications",
        topics: ["Diagnosis of peri-implant mucositis and peri-implantitis", "Laser-assisted management", "Implant failure analysis", "Revision implant strategies", "Maintenance protocols"]
      },
      {
        module: "Module 9: Aesthetic and Minimally Invasive Dentistry",
        topics: ["Smile design basics", "Soft tissue contouring with lasers", "Immediate loading protocols", "Pink and white esthetics", "Patient-centered treatment planning"]
      },
      {
        module: "Module 10: Digital and Advanced Technologies",
        topics: ["CAD/CAM in implant dentistry", "Guided implant surgery", "Digital impressions", "3D printing applications", "Navigation-assisted implantology"]
      },
      {
        module: "Module 11: Clinical Training and Hands-On",
        topics: [
          "Implant placement on models and simulation",
          "Hands-on training on advanced surgical techniques",
          "Live patient exposure (observership/assistance)",
          "Laser device handling and clinical application",
          "Case discussions and treatment planning"
        ]
      },
      {
        module: "Module 12: Practice Management, Ethics and Research",
        topics: [
          "Setting up implant practice",
          "Equipment selection (implants and lasers)",
          "Patient communication and case acceptance",
          "Medical ethics and legal considerations",
          "Research methodology and documentation"
        ]
      }
    ],
    onlinePrice: 160000,
    month11_1: 185000,
    careerOpportunities: [
      "Implant Dentistry Specialist",
      "Laser Dentistry Consultant",
      "Aesthetic and Rehabilitation-focused Implantologist",
      "Digital and Guided Surgery Dental Practitioner",
      "Academic and Clinical Implantology Trainer"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-urology": {
    name: "Fellowship in Urology",
    icon: "🧪",
    duration: "12 Months",
    eligibility: "MBBS / MS / DNB / Equivalent medical qualification",
    description: "Master advanced urological care with clinical precision and surgical expertise through a comprehensive practice-oriented fellowship.",
    overview: "The Fellowship in Urology is a comprehensive, practice-oriented program designed to equip medical professionals with advanced knowledge and clinical skills in the diagnosis, management, and surgical treatment of urological disorders. Urology focuses on diseases of the urinary tract in both males and females, along with the male reproductive system, covering conditions ranging from infections and stone disease to complex malignancies and reconstructive procedures. This fellowship integrates evidence-based learning, modern diagnostics, and minimally invasive surgical techniques, enabling participants to confidently manage both routine and complex urological cases in clinical and hospital settings.",
    highlights: ["Comprehensive coverage of medical and surgical urology", "Training in minimally invasive, endoscopic, and laparoscopic techniques", "Exposure to uro-oncology and reconstructive urology", "Focus on clinical decision-making and patient-centered care", "Case-based discussions and real-world clinical scenarios", "Emphasis on modern technologies and evolving practices"],
    onlinePrice: 170000,
    month11_1: 190000,
    learningOutcomes: [
      "Develop a strong understanding of urogenital anatomy, physiology, and pathology",
      "Diagnose and manage common urological conditions such as UTI, BPH, and urolithiasis",
      "Evaluate and treat urological emergencies and acute conditions",
      "Manage uro-oncology cases, including prostate, bladder, and kidney cancers",
      "Perform and assist in endoscopic and minimally invasive procedures",
      "Interpret diagnostic tools such as ultrasound, CT, urodynamics, and endoscopy",
      "Handle male infertility and sexual dysfunction (andrology) cases",
      "Understand principles of reconstructive and pediatric urology"
    ],
    curriculum: [
      {
        module: "Module 1: Basic Sciences in Urology",
        topics: ["Anatomy of urinary tract and male reproductive system", "Renal physiology and pathophysiology", "Urological microbiology and infections"]
      },
      {
        module: "Module 2: Clinical Urology",
        topics: [
          "Approach to urological symptoms (LUTS, hematuria, retention)",
          "Urinary tract infections and prostatitis",
          "Benign Prostatic Hyperplasia (BPH)",
          "Urolithiasis (kidney, ureteric, bladder stones)"
        ]
      },
      {
        module: "Module 3: Diagnostic Urology",
        topics: ["Imaging: Ultrasound, CT, MRI in urology", "Urodynamic studies", "Endoscopic evaluation (cystoscopy, ureteroscopy)", "Laboratory investigations"]
      },
      {
        module: "Module 4: Endourology and Minimally Invasive Techniques",
        topics: ["Principles of endourology", "TURP, URS, PCNL basics", "Laser applications in urology", "Laparoscopic urology - fundamentals"]
      },
      {
        module: "Module 5: Uro-Oncology",
        topics: ["Prostate cancer", "Bladder cancer", "Renal tumors", "Testicular and penile cancers", "Principles of chemotherapy, radiotherapy and surgical management"]
      },
      {
        module: "Module 6: Reconstructive and Pediatric Urology",
        topics: ["Urethral strictures and urethroplasty", "Hypospadias and congenital anomalies", "Vesicoureteral reflux", "Bladder reconstruction techniques"]
      },
      {
        module: "Module 7: Andrology and Male Infertility",
        topics: ["Erectile dysfunction", "Male infertility evaluation and management", "Varicocele and hormonal disorders", "Assisted reproductive techniques overview"]
      },
      {
        module: "Module 8: Female and Neuro-Urology",
        topics: ["Urinary incontinence", "Pelvic floor disorders", "Neurogenic bladder", "Urogynecology basics"]
      },
      {
        module: "Module 9: Urological Emergencies",
        topics: ["Acute urinary retention", "Testicular torsion", "Urological trauma", "Obstructive uropathy and sepsis"]
      },
      {
        module: "Module 10: Research and Clinical Practice",
        topics: ["Evidence-based urology", "Clinical case discussions", "Research methodology and publication basics", "Medico-legal aspects and ethics"]
      }
    ],
    careerOpportunities: [
      "Consultant Urologist",
      "Endourology and Minimally Invasive Urology Specialist",
      "Uro-Oncology and Reconstructive Urology Practitioner",
      "Andrology and Male Infertility Specialist",
      "Academic Urology Faculty"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-psychiatric-medicine": {
    name: "Fellowship in Psychiatric Medicine",
    icon: "🧠",
    duration: "12 Months",
    eligibility: "MBBS / MD / DNB / Equivalent medical qualification",
    description: "Advanced clinical training in mental health and behavioral sciences with evidence-based, empathetic psychiatric care.",
    overview: "The Fellowship in Psychiatric Medicine is a comprehensive, clinically oriented one-year program designed to build advanced competencies in assessment, diagnosis, management, and holistic care of psychiatric disorders. The course integrates neurobiological understanding with psychosocial and therapeutic approaches, preparing clinicians for outpatient, inpatient, and emergency psychiatric settings.",
    highlights: ["Blended, structured 1-year fellowship", "Case-based real-world psychiatric training", "Emergency psychiatry and crisis intervention exposure", "Strong focus on communication, empathy, ethics, and medico-legal practice"],
    onlinePrice: 150000,
    month11_1: 170000,
    curriculum: [
      {
        module: "Module 1: Foundations of Psychiatry",
        topics: ["History and evolution of psychiatry", "Classification systems (DSM / ICD)", "Psychiatric interviewing techniques", "Mental Status Examination (MSE)"]
      },
      {
        module: "Module 2: Neurobiology and Psychopathology",
        topics: ["Functional neuroanatomy and neurochemistry", "Neuroendocrinology in psychiatry", "Genetic and environmental influences", "Psychopathological models"]
      },
      {
        module: "Module 3: Common Psychiatric Disorders",
        topics: ["Depression and mood disorders", "Anxiety disorders and OCD", "Bipolar affective disorder", "Schizophrenia and psychotic disorders"]
      },
      {
        module: "Module 4: Specialized Psychiatric Conditions",
        topics: ["Child and adolescent psychiatry", "Geriatric psychiatry", "Substance use and de-addiction psychiatry", "Eating and personality disorders"]
      },
      {
        module: "Module 5: Psychopharmacology",
        topics: ["Antidepressants, antipsychotics, mood stabilizers", "Anxiolytics and sedatives", "Drug interactions and side-effect management", "Long-term treatment planning"]
      },
      {
        module: "Module 6: Psychotherapy and Counseling",
        topics: ["Basics of psychotherapy (CBT, supportive therapy)", "Counseling techniques", "Patient-doctor communication", "Behavioral therapies"]
      },
      {
        module: "Module 7: Emergency and Liaison Psychiatry",
        topics: ["Suicide risk assessment and management", "Acute agitation and violence", "Delirium and organic psychiatric disorders", "Psychiatry in medical/surgical patients"]
      },
      {
        module: "Module 8: Community and Preventive Psychiatry",
        topics: ["Mental health programs and policies", "Rehabilitation and social psychiatry", "Public mental health awareness", "Cultural psychiatry"]
      },
      {
        module: "Module 9: Forensic and Legal Psychiatry",
        topics: ["Mental Health Act and patient rights", "Capacity and consent", "Criminal responsibility", "Documentation and medico-legal cases"]
      },
      {
        module: "Module 10: Clinical Training and Case Discussions",
        topics: ["Case-based learning", "OPD/IPD exposure (if applicable)", "Case presentations and viva", "Logbook and competency assessment"]
      }
    ],
    careerOpportunities: [
      "Consultant Psychiatric Practitioner",
      "Mental Health and Behavioral Medicine Specialist",
      "Emergency Psychiatry and Crisis Care Clinician",
      "Community and Preventive Mental Health Expert",
      "Academic Psychiatry Faculty"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-neurosurgery": {
    name: "Fellowship in Neurosurgery",
    icon: "🧠",
    duration: "12 Months",
    eligibility: "MBBS / MS / MCh / DNB / Equivalent medical qualification",
    description: "Advanced hybrid training in neurosurgical care with case-based learning, skill development, and OT exposure.",
    overview: "The Fellowship in Neurosurgery is a one-year hybrid program designed to build advanced clinical and procedural competence in neurosurgical practice. The curriculum integrates applied neuroscience, emergency neurosurgery, neuro-oncology, neurovascular and spine care, critical care, and evolving minimally invasive technologies through structured case-based and skill-based training.",
    highlights: ["Hybrid learning with hospital-based exposure", "Neurotrauma and emergency neurosurgical protocols", "Neuro-oncology, neurovascular, and spine modules", "Critical care, advanced techniques, and research orientation"],
    onlinePrice: 220000,
    month11_1: 250000,
    curriculum: [
      {
        module: "Module 1: Foundations of Neurosurgery",
        topics: [
          "Neuroanatomy (brain, spine, cranial nerves - applied)",
          "Neurophysiology and ICP dynamics",
          "Neuroimaging (CT, MRI, DSA basics)",
          "Neurological examination (GCS, focal deficits)",
          "Basics of neurosurgical instruments and OT setup"
        ]
      },
      {
        module: "Module 2: Neurotrauma and Emergency Neurosurgery",
        topics: [
          "Head injury protocols (ATLS + neurosurgical approach)",
          "Traumatic Brain Injury (TBI) management",
          "Raised ICP and monitoring techniques",
          "Spinal trauma and stabilization",
          "Emergency procedures: burr hole, ICP monitoring, external ventricular drain (EVD)"
        ]
      },
      {
        module: "Module 3: Neuro-Oncology and Skull Base Surgery",
        topics: [
          "Brain tumors (glioma, meningioma, pituitary)",
          "Spinal tumors",
          "Principles of tumor resection",
          "Basics of skull base surgery",
          "Adjuvant therapies (RT, chemo overview)",
          "Skills: craniotomy planning (case-based), tumor localization using imaging"
        ]
      },
      {
        module: "Module 4: CSF Disorders and Pediatric Neurosurgery",
        topics: [
          "Hydrocephalus (adult and pediatric)",
          "Shunt surgeries (VP shunt principles)",
          "Congenital anomalies (spina bifida, Chiari malformation)",
          "Pediatric neurotrauma",
          "CNS infections",
          "Skills: CSF tap basics, shunt troubleshooting"
        ]
      },
      {
        module: "Module 5: Neurovascular Neurosurgery",
        topics: [
          "Stroke (ischemic and hemorrhagic)",
          "Aneurysm and AVM",
          "Subarachnoid hemorrhage",
          "Endovascular vs open surgery principles",
          "Skills: stroke assessment (NIHSS), surgical decision-making (clipping vs coiling overview)"
        ]
      },
      {
        module: "Module 6: Spine Surgery and Disorders",
        topics: [
          "Degenerative spine disease",
          "Disc prolapse (lumbar/cervical)",
          "Spinal instability and fixation",
          "Spinal infections and tumors",
          "Skills: spine examination; basics of laminectomy, discectomy, instrumentation principles"
        ]
      },
      {
        module: "Module 7: Neurosurgical Critical Care and Complications",
        topics: [
          "Post-op ICU management",
          "Seizures and epilepsy",
          "Electrolyte imbalance (SIADH, DI)",
          "CNS infections",
          "Complication management",
          "Skills: ventilator basics, ICU monitoring, emergency response protocols"
        ]
      },
      {
        module: "Module 8: Minimally Invasive and Advanced Neurosurgery",
        topics: [
          "Endoscopic neurosurgery",
          "Functional neurosurgery (DBS basics)",
          "Navigation systems",
          "Robotic neurosurgery (intro)",
          "Evidence-based neurosurgery",
          "Clinical audit",
          "Research methodology",
          "Case presentations and journal clubs"
        ]
      }
    ],
    careerOpportunities: [
      "Neurosurgery Fellow",
      "Neurotrauma and Emergency Neurosurgery Specialist",
      "Spine and Neurovascular Surgery-focused Practitioner",
      "Neurosurgical Critical Care Clinician",
      "Academic Neurosciences and Surgery Faculty"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-clinical-neurology": {
    name: "Fellowship in Clinical Neurology",
    icon: "🧠",
    duration: "12 Months",
    eligibility: "MBBS / MD / DNB / Equivalent medical qualification",
    description: "Hybrid one-year program in clinical neurology with case-based learning, OPD exposure, and diagnostic skill development.",
    overview: "The Fellowship in Clinical Neurology is a 12-month hybrid program designed to strengthen clinical reasoning and diagnostic competency in neurology. It integrates structured case-based teaching, OPD-focused exposure, emergency neurology, neurodiagnostics, and supervised clinical postings to prepare participants for real-world neurological practice.",
    highlights: ["Localization-based neurological assessment", "Acute neurology and emergency protocols", "Stroke, epilepsy, neuroinflammatory, and neurodegenerative pathways", "Hands-on logbook-driven clinical training"],
    onlinePrice: 170000,
    month11_1: 190000,
    curriculum: [
      {
        module: "Module 1: Foundations of Clinical Neurology",
        topics: [
          "Applied neuroanatomy (localization-based)",
          "Neurological examination (motor, sensory, cranial nerves)",
          "Approach to weakness, headache, seizures, and altered sensorium",
          "Basics of neuropharmacology",
          "Skills: neurological examination OSCE, lesion localization"
        ]
      },
      {
        module: "Module 2: Acute Neurology and Emergencies",
        topics: [
          "Acute headache and red flags",
          "CNS infections (meningitis, encephalitis)",
          "Acute paralysis",
          "Delirium and encephalopathy",
          "Neurological emergencies in ICU",
          "Skills: emergency neurological assessment, GCS scoring, initial stabilization protocols"
        ]
      },
      {
        module: "Module 3: Epilepsy and Seizure Disorders",
        topics: [
          "Classification of seizures",
          "Epilepsy syndromes",
          "Status epilepticus management",
          "Epilepsy mimics (syncope, PNES)",
          "Skills: EEG basics interpretation, AED selection and titration"
        ]
      },
      {
        module: "Module 4: Stroke and Neurovascular Disorders",
        topics: [
          "Stroke classification (ischemic vs hemorrhagic)",
          "TIA recognition",
          "Acute stroke protocols",
          "Secondary prevention",
          "Stroke rehabilitation",
          "Skills: NIHSS scoring, CT brain interpretation, thrombolysis decision-making (observational level)"
        ]
      },
      {
        module: "Module 5: Neuroinflammatory and Demyelinating Disorders",
        topics: [
          "Multiple sclerosis",
          "NMOSD and related disorders",
          "Autoimmune encephalitis",
          "CNS vasculitis",
          "Skills: MRI interpretation basics, CSF analysis understanding"
        ]
      },
      {
        module: "Module 6: Peripheral Neurology and Neuromuscular Disorders",
        topics: [
          "GBS and CIDP",
          "Neuropathies (diabetic, toxic)",
          "Myopathies",
          "Neuromuscular junction disorders (MG)",
          "Skills: nerve conduction study basics, clinical differentiation (UMN vs LMN)"
        ]
      },
      {
        module: "Module 7: Neurodegenerative Disorders",
        topics: [
          "Parkinson's disease",
          "Dementia (Alzheimer's, vascular)",
          "Movement disorders",
          "Motor neuron disease",
          "Skills: cognitive assessment (MMSE, MoCA), movement disorder evaluation"
        ]
      },
      {
        module: "Module 8: Headache, Pain and Functional Disorders",
        topics: ["Migraine and tension headache", "Trigeminal neuralgia", "Chronic pain syndromes", "Functional neurological disorders"]
      },
      {
        module: "Module 9: Neurodiagnostics and Imaging",
        topics: ["CT scan interpretation", "MRI basics", "EEG fundamentals", "EMG/NCS overview", "Lumbar puncture indications"]
      },
      {
        module: "Module 10: Clinical Posting / Hands-on Training",
        topics: [
          "Neurology OPD exposure",
          "Case presentations",
          "ICU rounds (observational)",
          "Stroke unit exposure",
          "Logbook: minimum 50-100 cases with mandatory stroke, epilepsy, and neuropathy cases"
        ]
      }
    ],
    careerOpportunities: [
      "Clinical Neurology Fellow",
      "Neurology OPD and Diagnostic-focused Practitioner",
      "Stroke and Epilepsy Care Clinician",
      "Emergency Neurology and Critical Neurology Support Specialist",
      "Academic Neurology and Neuroeducation Faculty"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-pediatric-neurology": {
    name: "Fellowship in Pediatric Neurology",
    icon: "🧠",
    duration: "12 Months",
    eligibility: "MD Pediatrics / DNB Pediatrics / MD Medicine / DNB / Equivalent medical qualification",
    description: "Comprehensive fellowship in pediatric neurological disorders with strong emphasis on diagnosis, neurodiagnostics, and long-term management.",
    overview: "The Fellowship in Pediatric Neurology is a clinically focused one-year program designed for pediatricians, neurologists, and practicing clinicians. It delivers structured training in pediatric neurological assessment, seizure care, neurodevelopmental and neuromuscular disorders, neurovascular and metabolic conditions, and diagnostic interpretation through case-based mentorship and multidisciplinary exposure.",
    highlights: ["Comprehensive pediatric neurology disorder coverage", "Case-based learning with expert mentorship", "Neurodiagnostic training (EEG, imaging, electrophysiology)", "Multidisciplinary real-world pediatric neurological care"],
    onlinePrice: 180000,
    month11_1: 210000,
    curriculum: [
      {
        module: "Module 1: Foundations of Pediatric Neurology",
        topics: ["Pediatric neuroanatomy and neurophysiology", "Neurological examination in children", "Developmental milestones and assessment"]
      },
      {
        module: "Module 2: Epilepsy and Seizure Disorders",
        topics: ["Classification and pathophysiology of seizures", "Pediatric epilepsy syndromes", "EEG interpretation and management protocols"]
      },
      {
        module: "Module 3: Neurodevelopmental Disorders",
        topics: ["Autism spectrum disorders (ASD)", "ADHD and learning disabilities", "Cerebral palsy and developmental delay"]
      },
      {
        module: "Module 4: Neuromuscular Disorders",
        topics: ["Muscular dystrophies", "Peripheral neuropathies", "Neuromuscular junction disorders"]
      },
      {
        module: "Module 5: Pediatric Neurocritical and Vascular Disorders",
        topics: ["Pediatric stroke", "CNS infections and inflammatory disorders", "Neuro-emergencies and critical care basics"]
      },
      {
        module: "Module 6: Neurogenetics and Metabolic Disorders",
        topics: ["Genetic syndromes affecting the nervous system", "Inborn errors of metabolism", "Diagnostic approaches and counselling"]
      },
      {
        module: "Module 7: Neurodiagnostics and Imaging",
        topics: ["EEG, EMG, and nerve conduction studies", "CT, MRI, and advanced neuroimaging", "Clinical correlation and interpretation"]
      },
      {
        module: "Module 8: Clinical Training and Case Discussions",
        topics: ["Real-world case-based learning", "Clinical rotations / observational training", "Patient management and follow-up strategies"]
      }
    ],
    careerOpportunities: [
      "Pediatric Neurology Fellow",
      "Pediatric Epilepsy and Neurodevelopment Specialist",
      "Child Neurodiagnostics-focused Clinician",
      "Multidisciplinary Pediatric Neurocare Consultant",
      "Academic Pediatric Neurology Faculty"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-cardiothoracic-surgery": {
    name: "Fellowship in Cardiothoracic Surgery",
    icon: "❤️",
    duration: "12 Months",
    eligibility: "MS / MCh / DNB / Equivalent surgical qualification",
    description: "Advanced, clinically driven fellowship focused on surgical management of complex cardiac and thoracic conditions.",
    overview: "The Fellowship in Cardiothoracic Surgery is a structured high-intensity program offering focused training in cardiac and thoracic surgical practice. It integrates operative exposure, perioperative critical care, minimally invasive approaches, and multidisciplinary collaboration to prepare participants for advanced tertiary-care and super-speciality surgical roles.",
    highlights: ["One-year blended fellowship (theory + clinical exposure)", "Hands-on operative and OT-based training", "Perioperative critical care and decision-making focus", "Exposure to minimally invasive, robotic, and hybrid procedures"],
    onlinePrice: 200000,
    month11_1: 240000,
    curriculum: [
      {
        module: "Module 1: Foundations of Cardiothoracic Surgery (Weeks 1-4)",
        topics: [
          "Applied anatomy and physiology: heart, lungs, mediastinum",
          "Coronary circulation and cardiac conduction system",
          "Pulmonary physiology and ventilation-perfusion dynamics",
          "Pathophysiology: CAD, valvular disease, congenital heart disease (basics), thoracic tumors and pleural disease",
          "Diagnostics and imaging: ECG, 2D Echo, TEE basics, CT chest/angiography, catheterization interpretation",
          "Preoperative evaluation: risk stratification (EuroSCORE, STS), fitness assessment, surgical planning"
        ]
      },
      {
        module: "Module 2: Principles of Cardiothoracic Surgery (Weeks 5-8)",
        topics: [
          "Cardiothoracic instruments, sutures, sternotomy and thoracotomy approaches",
          "OR protocols and ergonomics",
          "Cardiopulmonary bypass (CPB): machine components and cannulation techniques",
          "Myocardial protection (cardioplegia)",
          "Vascular suturing, hemostasis, tissue handling, anastomosis principles",
          "Infection control, SSI prevention, and anticoagulation management"
        ]
      },
      {
        module: "Module 3: Adult Cardiac Surgery (Weeks 9-20)",
        topics: [
          "CABG: on-pump and off-pump techniques",
          "Conduits: LIMA, RIMA, SVG harvesting",
          "Management of CABG complications",
          "Mitral, aortic, and tricuspid valve procedures",
          "Aortic aneurysm/dissection and root/arch surgery basics",
          "Advanced procedures: redo surgeries, beating heart surgery, hybrid approaches"
        ]
      },
      {
        module: "Module 4: Thoracic Surgery (Weeks 21-32)",
        topics: [
          "Lung surgery: lobectomy, pneumonectomy, segmentectomy",
          "Lung cancer staging and management",
          "Pleural and mediastinal disease management, thymectomy",
          "Minimally invasive thoracic surgery: VATS and thoracoscopy",
          "Basics of robotic thoracic surgery",
          "Trauma and emergency thoracic surgery including emergency thoracotomy and airway injuries"
        ]
      },
      {
        module: "Module 5: Congenital Cardiac Surgery (Weeks 33-38)",
        topics: [
          "Congenital heart disease basics: ASD, VSD, PDA, TOF overview",
          "Cyanotic vs acyanotic defects",
          "ASD/VSD closure and PDA ligation",
          "Basics of pediatric cardiac bypass",
          "Pediatric ICU care and neonatal cardiac physiology",
          "Postoperative pediatric complications"
        ]
      },
      {
        module: "Module 6: Cardiothoracic Critical Care (Weeks 39-44)",
        topics: [
          "ICU hemodynamic monitoring",
          "Ventilator management and inotropic support",
          "Postoperative bleeding, tamponade, and arrhythmia management",
          "Infection and sepsis control",
          "Advanced support systems: ECMO basics, IABP, temporary pacing"
        ]
      },
      {
        module: "Module 7: Minimally Invasive and Robotic Surgery (Weeks 45-48)",
        topics: [
          "Minimally invasive cardiac surgery (MICS)",
          "Small incision CABG and minimally invasive valve surgery",
          "Robotic console basics and patient selection",
          "Robotic-assisted procedures",
          "Hybrid procedures: cath lab + surgical integration",
          "TAVI/TAVR overview and endovascular approaches"
        ]
      },
      {
        module: "Module 8: Research, Ethics and Professional Development (Weeks 49-52)",
        topics: [
          "Research methodology, study design, and biostatistics",
          "Clinical audit and case report writing",
          "Surgical consent and medico-legal issues",
          "Ethical dilemmas in high-risk surgery",
          "Communication skills, breaking bad news, OT leadership, and multidisciplinary coordination"
        ]
      }
    ],
    careerOpportunities: [
      "Cardiothoracic Surgery Fellow",
      "Adult Cardiac and Thoracic Surgery Specialist",
      "Cardiothoracic Critical Care and Perioperative Specialist",
      "Minimally Invasive and Hybrid Cardiac Procedure Practitioner",
      "Academic Cardiothoracic Surgery Faculty"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-medical-oncology": {
    name: "Fellowship in Medical Oncology",
    icon: "🎗️",
    duration: "12 Months",
    eligibility: "MBBS with MD/DNB in General Medicine or equivalent",
    description: "Advanced clinically intensive fellowship in diagnosis, staging, and systemic management of cancer.",
    overview: "The Fellowship in Medical Oncology is an advanced program that builds deep expertise in contemporary oncology practice across solid tumors and hematological malignancies. It integrates chemotherapy, immunotherapy, targeted therapy, and precision medicine with multidisciplinary decision-making, supportive care, and evidence-based treatment planning for high-quality, patient-centered cancer care.",
    highlights: ["Comprehensive systemic therapy training (chemo, immunotherapy, targeted)", "Precision oncology and individualized treatment planning", "Multidisciplinary tumor board exposure", "Oncologic emergencies, supportive care, and palliative integration"],
    onlinePrice: 180000,
    month11_1: 200000,
    curriculum: [
      {
        module: "Module 1: Fundamentals of Oncology",
        topics: ["Cancer biology and tumorigenesis", "Molecular oncology and genetics", "Principles of cancer staging and grading", "Diagnostic modalities in oncology"]
      },
      {
        module: "Module 2: Systemic Cancer Therapies",
        topics: ["Chemotherapy: principles, protocols, and toxicities", "Immunotherapy and checkpoint inhibitors", "Targeted therapy and precision medicine", "Hormonal therapy in oncology"]
      },
      {
        module: "Module 3: Organ-Specific Oncology",
        topics: ["Breast cancer", "Lung cancer", "Gastrointestinal malignancies", "Genitourinary cancers", "Gynecologic cancers", "Hematological malignancies"]
      },
      {
        module: "Module 4: Oncologic Emergencies and Supportive Care",
        topics: ["Tumor lysis syndrome", "Febrile neutropenia", "Spinal cord compression", "Pain management and palliative oncology"]
      },
      {
        module: "Module 5: Multidisciplinary Oncology Care",
        topics: ["Tumor board discussions", "Integration with surgical and radiation oncology", "Patient-centered decision-making"]
      },
      {
        module: "Module 6: Research and Evidence-Based Oncology",
        topics: ["Clinical trials and research methodology", "Interpretation of oncology literature", "Guidelines-based practice (NCCN, ASCO frameworks)"]
      },
      {
        module: "Clinical Training Components",
        topics: [
          "Case-based discussions and real-world clinical scenarios",
          "Exposure to chemotherapy protocols and treatment planning",
          "Participation in multidisciplinary tumor boards",
          "Management of inpatient and outpatient oncology cases"
        ]
      }
    ],
    careerOpportunities: [
      "Medical Oncology Fellow",
      "Systemic Cancer Therapy Specialist",
      "Hospital-based Oncology and Tumor Board Consultant",
      "Precision Oncology-focused Clinician",
      "Academic Medical Oncology Faculty"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-clinical-hematology": {
    name: "Fellowship in Clinical Haematology",
    icon: "🩸",
    duration: "12 Months",
    eligibility: "MBBS with MD/DNB in General Medicine or equivalent",
    description: "Comprehensive clinical fellowship covering benign and malignant hematological disorders, diagnostics, and modern therapeutics.",
    overview: "The Fellowship in Clinical Haematology is an advanced program designed to build expertise in diagnostic hematology, hemato-oncology, coagulation disorders, transfusion medicine, and transplantation principles. The training emphasizes evidence-based clinical decision making, laboratory integration, multidisciplinary care, and research-oriented practice.",
    highlights: ["Comprehensive benign and malignant hematology training", "Structured focus on diagnostics and laboratory interpretation", "Bone marrow procedures and transplant principles", "Modern therapies including targeted and immunotherapy with research exposure"],
    onlinePrice: 170000,
    month11_1: 200000,
    curriculum: [
      {
        module: "Module 1: Foundations of Haematology",
        topics: ["Hematopoiesis and stem cell biology", "Structure and function of blood components", "Bone marrow microenvironment", "Basics of haematological investigations", "Approach to abnormal CBC"]
      },
      {
        module: "Module 2: Laboratory Haematology and Diagnostics",
        topics: [
          "Complete blood count (CBC) interpretation",
          "Peripheral smear examination",
          "Bone marrow aspiration and biopsy: indications and technique",
          "Flow cytometry and immunophenotyping",
          "Cytogenetics and molecular diagnostics (PCR, FISH)",
          "Coagulation profile interpretation"
        ]
      },
      {
        module: "Module 3: Red Cell Disorders",
        topics: [
          "Iron deficiency anaemia and anaemia of chronic disease",
          "Megaloblastic anemia (vitamin B12, folate deficiency)",
          "Hemolytic anaemias (autoimmune, hereditary)",
          "Hemoglobinopathies (thalassemia, sickle cell disease)",
          "Aplastic anaemia and bone marrow failure syndromes"
        ]
      },
      {
        module: "Module 4: White Cell Disorders (Benign and Malignant)",
        topics: ["Leukocytosis and leukopenia", "Acute leukemias (AML, ALL)", "Chronic leukemias (CML, CLL)", "Myelodysplastic syndromes (MDS)", "Myeloproliferative neoplasms (MPN)"]
      },
      {
        module: "Module 5: Lymphoid Malignancies",
        topics: ["Hodgkin lymphoma", "Non-Hodgkin lymphoma (classification and staging)", "Plasma cell disorders (multiple myeloma, MGUS)", "Waldenstrom macroglobulinemia", "Principles of staging systems and prognostic scoring"]
      },
      {
        module: "Module 6: Platelet and Coagulation Disorders",
        topics: [
          "Thrombocytopenia (ITP, TTP, HUS)",
          "Platelet function disorders",
          "Coagulation cascade and disorders",
          "Hemophilia and inherited bleeding disorders",
          "Disseminated intravascular coagulation (DIC)",
          "Thrombophilia and hypercoagulable states"
        ]
      },
      {
        module: "Module 7: Transfusion Medicine",
        topics: ["Blood grouping and cross-matching", "Blood components and indications", "Massive transfusion protocols", "Transfusion reactions and management", "Patient blood management strategies"]
      },
      {
        module: "Module 8: Hemato-Oncology Therapeutics",
        topics: ["Principles of chemotherapy", "Targeted therapy (TKIs, monoclonal antibodies)", "Immunotherapy and CAR-T basics", "Supportive care in hematologic malignancies", "Infection prevention in immunocompromised patients"]
      },
      {
        module: "Module 9: Hematological Emergencies",
        topics: ["Tumor lysis syndrome", "Febrile neutropenia", "Hyperleukocytosis", "Acute bleeding disorders", "DIC and thrombotic emergencies"]
      },
      {
        module: "Module 10: Bone Marrow and Stem Cell Transplantation",
        topics: ["Indications for HSCT", "Types (autologous vs allogeneic)", "Pre-transplant evaluation", "Conditioning regimens", "Graft-versus-host disease (GVHD)", "Post-transplant complications and follow-up"]
      },
      {
        module: "Module 11: Pediatric Hematology (Overview)",
        topics: ["Pediatric anemias", "Childhood leukemias", "Congenital bleeding disorders", "Hematological disorders in neonates"]
      },
      {
        module: "Module 12: Clinical Hematology Practice and Multidisciplinary Care",
        topics: ["Case-based discussions", "Tumor board participation", "Clinical decision-making frameworks", "Integration with oncology, pathology, and critical care", "Ethical and palliative care considerations"]
      },
      {
        module: "Module 13: Research and Evidence-Based Hematology",
        topics: ["Basics of clinical research methodology", "Interpretation of clinical trials", "Guidelines (WHO, NCCN, ESMO overview)", "Audit and publication basics"]
      }
    ],
    careerOpportunities: [
      "Clinical Haematology Fellow",
      "Hemato-Oncology and Transfusion Specialist",
      "Bone Marrow and Stem Cell Program Associate",
      "Laboratory-integrated Clinical Hematologist",
      "Academic Hematology Faculty"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-head-neck-oncology": {
    name: "Fellowship in Head & Neck Oncology",
    icon: "🎗️",
    duration: "12 Months",
    eligibility: "MS / DNB / MD / Equivalent relevant qualification",
    description: "Comprehensive clinically driven program in diagnosis, staging, and multidisciplinary management of head and neck cancers.",
    overview: "The Fellowship in Head & Neck Oncology is an advanced clinical program focused on oncologic surgery, reconstruction, and integrated cancer care across oral cavity, pharyngeal, laryngeal, thyroid, salivary, and skull base malignancies. The fellowship combines hands-on case exposure, tumor board participation, and protocol-based decision making to deliver high-quality, patient-centric oncologic outcomes.",
    highlights: ["Advanced head and neck oncologic surgery training", "Multidisciplinary exposure across surgery, radiation, and medical oncology", "Hands-on case-based learning with clinical decision frameworks", "Functional rehabilitation and survivorship-focused care"],
    onlinePrice: 180000,
    month11_1: 210000,
    curriculum: [
      {
        module: "Module 1: Fundamentals of Head & Neck Oncology",
        topics: ["Epidemiology and risk factors (tobacco, alcohol, HPV)", "Anatomy of head and neck region (surgical relevance)", "Tumor biology and carcinogenesis", "Principles of oncology and TNM staging"]
      },
      {
        module: "Module 2: Diagnostic Evaluation and Staging",
        topics: ["Clinical examination of head and neck cancers", "Imaging modalities (CT, MRI, PET-CT)", "Endoscopy and biopsy techniques", "Histopathology and molecular diagnostics", "Staging and prognostic assessment"]
      },
      {
        module: "Module 3: Site-Specific Head & Neck Cancers",
        topics: ["Oral cavity cancers (buccal mucosa, tongue)", "Oropharyngeal and nasopharyngeal cancers", "Laryngeal and hypopharyngeal malignancies", "Thyroid and parathyroid cancers", "Salivary gland tumors", "Sinonasal and skull base tumors"]
      },
      {
        module: "Module 4: Surgical Oncology in Head & Neck",
        topics: ["Principles of oncologic surgery", "Neck dissection techniques (radical, modified, selective)", "Tumor resection strategies", "Minimally invasive and robotic approaches", "Airway management and tracheostomy"]
      },
      {
        module: "Module 5: Reconstruction and Rehabilitation",
        topics: ["Basics of reconstructive surgery", "Local, regional, and free flap reconstruction", "Microvascular techniques (introductory exposure)", "Speech and swallowing rehabilitation", "Cosmetic and functional outcomes"]
      },
      {
        module: "Module 6: Radiation Oncology in Head & Neck",
        topics: ["Principles of radiotherapy (IMRT, IGRT)", "Indications and treatment planning", "Organ preservation protocols", "Radiation toxicities and management"]
      },
      {
        module: "Module 7: Systemic Therapy in Head & Neck Cancer",
        topics: ["Chemotherapy protocols", "Targeted therapy and immunotherapy", "Neoadjuvant, adjuvant, and palliative treatment", "Management of treatment-related toxicities"]
      },
      {
        module: "Module 8: Multidisciplinary Cancer Care",
        topics: ["Tumor board discussions and decision-making", "Integration of surgery, radiation, and systemic therapy", "Personalized treatment planning", "Evidence-based guidelines and protocols"]
      },
      {
        module: "Module 9: Postoperative Care and Complication Management",
        topics: ["ICU care and postoperative monitoring", "Management of surgical complications", "Nutritional support and enteral feeding", "Wound care and infection control"]
      },
      {
        module: "Module 10: Palliative Care and Survivorship",
        topics: ["Pain management in cancer patients", "End-of-life care principles", "Psychosocial support", "Survivorship programs and long-term follow-up"]
      },
      {
        module: "Module 11: Research and Evidence-Based Practice",
        topics: ["Basics of clinical research and study design", "Interpretation of oncology literature", "Clinical audits and case presentations", "Publication and academic writing"]
      },
      {
        module: "Module 12: Communication and Ethics in Oncology",
        topics: ["Breaking bad news (SPIKES protocol)", "Informed consent in oncology surgery", "Ethical dilemmas in cancer care", "Doctor-patient communication skills"]
      }
    ],
    careerOpportunities: [
      "Head & Neck Oncology Fellow",
      "Oncologic Head and Neck Surgery Specialist",
      "Reconstruction and Functional Rehabilitation-focused Onco-surgeon",
      "Multidisciplinary Tumor Board Oncology Consultant",
      "Academic Head & Neck Oncology Faculty"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-trichology": {
    name: "Fellowship in Trichology",
    icon: "💇",
    duration: "12 Months",
    eligibility: "MBBS / MD / DNB / Equivalent medical qualification",
    description: "Advanced clinically oriented fellowship in hair and scalp disorders integrating medical, aesthetic, and restoration approaches.",
    overview: "The Fellowship in Trichology is a comprehensive program focused on diagnosis, management, and treatment of hair and scalp disorders. It combines trichological science, clinical dermatology, procedural interventions, and hair restoration techniques to build holistic, evidence-based practice capability.",
    highlights: ["Integrated medical and procedural trichology training", "Hands-on exposure to PRP, microneedling, and hair restoration", "Diagnostic proficiency with trichoscopy and lab correlation", "Practice setup and real-world case management orientation"],
    onlinePrice: 170000,
    month11_1: 190000,
    curriculum: [
      {
        module: "Module 1: Basic Sciences of Hair and Scalp",
        topics: [
          "Anatomy of skin and scalp (epidermis, dermis, appendages)",
          "Hair follicle structure and biology",
          "Hair growth cycle (anagen, catagen, telogen)",
          "Hair types, patterns, and ethnic variations",
          "Physiology of hair growth and aging",
          "Role of hormones and genetics in hair health"
        ]
      },
      {
        module: "Module 2: Clinical Trichology and Diagnostics",
        topics: [
          "Clinical approach to hair and scalp examination",
          "Diagnostic tools: trichoscopy, dermoscopy",
          "Hair pull test, wash test, biopsy indications",
          "Laboratory investigations in hair disorders",
          "Classification of alopecia",
          "Differential diagnosis of hair loss disorders"
        ]
      },
      {
        module: "Module 3: Disorders of Hair and Scalp",
        topics: [
          "Androgenetic alopecia (male and female pattern)",
          "Alopecia areata and autoimmune hair loss",
          "Telogen effluvium and anagen effluvium",
          "Cicatricial alopecia (scarring types)",
          "Hair shaft disorders (trichorrhexis nodosa, monilethrix)",
          "Scalp conditions: seborrheic dermatitis, psoriasis, tinea capitis, folliculitis"
        ]
      },
      {
        module: "Module 4: Medical Management in Trichology",
        topics: [
          "Pharmacological treatments: minoxidil, finasteride, dutasteride",
          "Corticosteroids and immunotherapy",
          "Nutritional deficiencies and supplementation",
          "Hormonal therapy in hair loss",
          "Evidence-based treatment protocols",
          "Personalized treatment planning"
        ]
      },
      {
        module: "Module 5: Procedural Trichology (Non-Surgical)",
        topics: [
          "Platelet-rich plasma (PRP) therapy",
          "Microneedling for hair regrowth",
          "Low-level laser therapy (LLLT)",
          "Mesotherapy for hair restoration",
          "Scalp rejuvenation techniques",
          "Indications, contraindications, and complications"
        ]
      },
      {
        module: "Module 6: Surgical Hair Restoration",
        topics: [
          "Principles of hair transplantation",
          "Follicular unit extraction (FUE)",
          "Follicular unit transplantation (FUT)",
          "Patient selection and planning",
          "Graft harvesting and implantation techniques",
          "Post-operative care and complication management"
        ]
      },
      {
        module: "Module 7: Hair Cosmetology and Aesthetic Integration",
        topics: [
          "Hair care practices and product science",
          "Chemical treatments (coloring, straightening, perming)",
          "Cosmetic camouflage techniques",
          "Integration with aesthetic dermatology",
          "Role of lasers and advanced devices"
        ]
      },
      {
        module: "Module 8: Nutrition, Lifestyle and Preventive Trichology",
        topics: [
          "Role of diet in hair health",
          "Micronutrients (iron, zinc, biotin, vitamin D)",
          "Lifestyle factors: stress, sleep, environmental exposure",
          "Preventive strategies for hair loss",
          "Holistic hair care protocols"
        ]
      },
      {
        module: "Module 9: Psychological Aspects and Patient Counseling",
        topics: [
          "Psychosocial impact of hair loss",
          "Counseling techniques and patient communication",
          "Managing expectations in aesthetic outcomes",
          "Compliance and long-term follow-up strategies"
        ]
      },
      {
        module: "Module 10: Clinical Practice and Business Setup",
        topics: [
          "Setting up a trichology clinic",
          "Equipment and infrastructure requirements",
          "Legal, ethical, and regulatory considerations",
          "Documentation and consent protocols",
          "Branding, patient acquisition, and practice growth"
        ]
      },
      {
        module: "Module 11: Case-Based Learning and Clinical Exposure",
        topics: [
          "Real-world case discussions",
          "Treatment planning workshops",
          "Complication management scenarios",
          "Evidence-based clinical decision making"
        ]
      },
      {
        module: "Module 12: Research and Emerging Advances",
        topics: [
          "Recent advances in hair biology",
          "Stem cell therapy and regenerative medicine",
          "Advances in hair transplantation",
          "Clinical research methodology in trichology"
        ]
      }
    ],
    careerOpportunities: [
      "Clinical Trichology Specialist",
      "Hair Restoration and Procedural Trichology Practitioner",
      "Aesthetic Hair and Scalp Clinic Consultant",
      "Dermato-trichology Integrated Care Specialist",
      "Academic and Research-oriented Trichology Faculty"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-radiology": {
    name: "Fellowship in Radiology",
    icon: "🩻",
    duration: "12 Months",
    eligibility: "MBBS / MD / DNB / Equivalent medical qualification",
    description: "Comprehensive clinically driven fellowship in diagnostic imaging and image-guided interventions.",
    overview: "The Fellowship in Radiology is designed to build practical expertise in diagnostic imaging, emergency radiology, and image-guided interventions. The curriculum integrates physics, modality-based interpretation, procedural principles, and multidisciplinary clinical correlation to prepare participants for real-world radiology practice in hospitals and diagnostic centers.",
    highlights: ["Comprehensive modality-based imaging training", "Emergency and trauma radiology focus", "Image-guided intervention fundamentals", "Structured reporting and clinicoradiological integration"],
    onlinePrice: 170000,
    month11_1: 190000,
    curriculum: [
      {
        module: "Module 1: Fundamentals of Radiology and Imaging Physics",
        topics: ["Principles of medical imaging", "Basics of X-ray generation and radiation physics", "Image acquisition, processing, and quality optimization", "Contrast agents: types, indications, and safety", "Radiological anatomy: systemic approach"]
      },
      {
        module: "Module 2: X-ray and Basic Radiography",
        topics: ["Chest X-ray interpretation (systematic approach)", "Skeletal imaging: fractures, tumors, degenerative diseases", "Abdominal X-ray and acute abdomen", "Pediatric radiography basics", "Common pitfalls and reporting formats"]
      },
      {
        module: "Module 3: Ultrasonography and Doppler Imaging",
        topics: ["Principles of ultrasound physics", "Abdominal and pelvic ultrasound", "Obstetric and gynecological imaging", "Doppler studies: vascular assessment", "Point-of-care ultrasound (POCUS)", "Guided procedures (FNAC, fluid aspiration)"]
      },
      {
        module: "Module 4: Computed Tomography (CT Imaging)",
        topics: ["CT physics and protocols", "Contrast-enhanced CT interpretation", "Neuro CT: stroke, trauma, hemorrhage", "Thoracic CT: infections, malignancy, ILD", "Abdominal CT: hepatobiliary, pancreatic, GI pathology", "CT in emergency settings"]
      },
      {
        module: "Module 5: Magnetic Resonance Imaging (MRI)",
        topics: ["MRI physics and sequences", "Brain and spine MRI", "Musculoskeletal MRI", "Abdominal and pelvic MRI", "Functional imaging basics", "MRI safety and contraindications"]
      },
      {
        module: "Module 6: Subspecialty Radiology",
        topics: ["Neuroradiology: stroke, tumors, neurodegeneration", "Musculoskeletal radiology: trauma, arthritis, sports injuries", "Thoracic radiology: lung infections, malignancy", "Abdominal radiology: liver, pancreas, GI tract", "Breast imaging and mammography", "Pediatric radiology"]
      },
      {
        module: "Module 7: Emergency and Trauma Radiology",
        topics: ["Imaging in polytrauma", "FAST and trauma protocols", "Acute stroke imaging", "Emergency CT and X-ray interpretation", "Critical care radiology"]
      },
      {
        module: "Module 8: Interventional Radiology (Basics)",
        topics: ["Principles of image-guided interventions", "Biopsies and drainage procedures", "Angiography basics", "Embolization concepts", "Vascular access and catheter-based techniques", "Sterility, complications, and patient safety"]
      },
      {
        module: "Module 9: Radiation Safety and Legal Aspects",
        topics: ["Radiation protection principles (ALARA)", "Dose optimization strategies", "Regulatory guidelines and compliance", "Consent and medico-legal documentation", "Ethics in radiology practice"]
      },
      {
        module: "Module 10: Reporting, Communication and Clinical Integration",
        topics: ["Structured reporting systems", "Case-based radiology discussions", "Clinicoradiological correlation", "Multidisciplinary team (MDT) approach", "Communication with clinicians and patients"]
      },
      {
        module: "Module 11: Research and Academic Radiology",
        topics: ["Basics of radiology research methodology", "Evidence-based imaging", "Case presentations and journal reviews", "Emerging technologies (AI in radiology)"]
      }
    ],
    careerOpportunities: [
      "Clinical Radiology Fellow",
      "Diagnostic Imaging Specialist",
      "Emergency and Trauma Radiology Practitioner",
      "Image-guided Procedure-focused Radiologist",
      "Academic and Research-oriented Radiology Faculty"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-interventional-radiology": {
    name: "Fellowship in Interventional Radiology",
    icon: "🩻",
    duration: "12 Months",
    eligibility: "MBBS / MD / DNB / Equivalent medical qualification",
    description: "Advanced clinically oriented fellowship in image-guided minimally invasive diagnostic and therapeutic procedures.",
    overview: "The Fellowship in Interventional Radiology is an advanced, clinically oriented program designed to train doctors in image-guided minimally invasive diagnostic and therapeutic procedures. The program integrates vascular, non-vascular, and oncologic interventions using modalities such as fluoroscopy, CT, MRI, and ultrasound. With a strong emphasis on hands-on procedural training, clinical decision-making, and multidisciplinary care, this fellowship prepares participants to deliver safe, effective, and evidence-based interventional treatments across a wide spectrum of diseases.",
    highlights: ["Comprehensive vascular, non-vascular, and oncologic interventions", "Hands-on procedural training with multimodality imaging guidance", "Strong focus on clinical decision-making and complication management", "Multidisciplinary evidence-based interventional care"],
    onlinePrice: 195000,
    month11_1: 230000,
    curriculum: [
      {
        module: "Module 1: Fundamentals of Interventional Radiology",
        topics: ["Evolution and scope of interventional radiology", "Principles of minimally invasive image-guided procedures", "Radiation physics and radiation safety", "Sterile techniques and procedural protocols", "Patient selection, consent, and peri-procedural care"]
      },
      {
        module: "Module 2: Imaging Techniques in Interventions",
        topics: ["Fluoroscopy and Digital Subtraction Angiography (DSA)", "CT-guided and MRI-guided interventions", "Ultrasound-guided procedures", "Contrast media: types, indications, and complications", "Image interpretation for procedural planning"]
      },
      {
        module: "Module 3: Vascular Interventions",
        topics: ["Diagnostic angiography techniques", "Peripheral arterial disease interventions (angioplasty, stenting)", "Venous interventions (DVT management, IVC filters)", "Thrombolysis and thrombectomy procedures", "Endovascular management of aneurysms"]
      },
      {
        module: "Module 4: Non-Vascular Interventions",
        topics: ["Image-guided biopsies (liver, lung, lymph node, renal)", "Drainage procedures (abscess, pleural, biliary, urinary)", "Percutaneous nephrostomy and gastrostomy", "Central venous access and port placements", "Pain management interventions"]
      },
      {
        module: "Module 5: Interventional Oncology",
        topics: ["Tumor ablation techniques (Radiofrequency, Microwave, Cryoablation)", "Transarterial chemoembolization (TACE)", "Radioembolization (TARE)", "Image-guided tumor biopsies and targeted therapies", "Palliative interventional procedures"]
      },
      {
        module: "Module 6: Hepatobiliary & Gastrointestinal Interventions",
        topics: ["Percutaneous transhepatic biliary drainage (PTBD)", "Biliary stenting and interventions", "Portal hypertension management (TIPS procedure)", "Gastrointestinal bleeding embolization", "Interventions in liver cirrhosis and transplant patients"]
      },
      {
        module: "Module 7: Neuro & Peripheral Interventions",
        topics: ["Stroke interventions (mechanical thrombectomy)", "Carotid artery stenting", "Management of vascular malformations", "Spine interventions (vertebroplasty, kyphoplasty)", "Peripheral nerve and pain procedures"]
      },
      {
        module: "Module 8: Venous & Lymphatic Interventions",
        topics: ["Varicose vein treatments (laser, RFA)", "Venous insufficiency management", "Lymphatic interventions and leak management", "Dialysis access interventions"]
      },
      {
        module: "Module 9: Emergency & Trauma Interventions",
        topics: ["Role of IR in trauma care", "Emergency embolization for hemorrhage control", "Acute vascular occlusion management", "ICU-based interventional procedures"]
      },
      {
        module: "Module 10: Interventional Radiology in Multidisciplinary Care",
        topics: ["Collaboration with oncology, surgery, and critical care teams", "Case-based discussions and tumor boards", "Pre- and post-procedural clinical management", "Evidence-based decision making"]
      },
      {
        module: "Module 11: Research, Audit & Academic Development",
        topics: ["Clinical research methodology", "Audit and quality improvement in IR", "Case presentations and publications", "Advances and innovations in interventional radiology"]
      },
      {
        module: "Module 12: Hands-on Training & Clinical Exposure",
        topics: ["Simulation-based procedural training", "Live case demonstrations", "Supervised catheter-based interventions", "Rotations in IR suites, ICU, and OPD settings", "Complication management and troubleshooting"]
      }
    ],
    careerOpportunities: [
      "Interventional Radiology Fellow",
      "Endovascular and Image-guided Procedure Specialist",
      "Interventional Oncology and Organ-specific Intervention Consultant",
      "Emergency and Trauma Intervention Specialist",
      "Academic and Research-focused Interventional Radiology Faculty"
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
      {
        module: "Certificate in Pediatrics",
        topics: [],
        submodules: [
          { module: "Introduction to Pediatrics", topics: ["Overview of Pediatrics", "Global Child Health and Safety in Healthcare", "Ethics in Pediatric Care", "Strategies for Health Behavior Change", "Positive Parenting and Support"] },
          { module: "Growth & Development", topics: ["Growth & Development in the Newborn", "Growth & Development in Infant", "Growth and Development in Second Year", "Growth and Development in Third Year", "Growth & Development in School Age Child (4-12 years)", "Growth & Development in Adolescence (13-18 years)"] },
          { module: "Nutritional Requirements", topics: ["Breast Feeding", "Infant and Young Child Feeding", "Normal Nutritional Requirements", "Nutrition in Very Low Birth Weight Newborn/Preterm Infant", "Malnutrition", "Vitamin Deficiency Disorders", "Micronutrient (Trace Elements) Deficiency", "Eating Disorders in the Adolescents", "Obesity"] },
          { module: "Immunization", topics: ["Rationale of Immunization & Immunization Practices", "Recommended Immunization Schedule & Adverse Events Following Immunization", "Vaccines Recommended in Special Situations"] },
          { module: "Clinical Assessment", topics: ["General Approach to Sick Child", "History & Physical Examination of Children & Adolescents", "Assessment of Fetal Growth and Development", "Assessment of Growth in Post Natal Life", "Developmental and Behavioral Surveillance and Screening", "Developmental Delay and Failure to Thrive"] },
          { module: "Investigations in Pediatrics", topics: ["Laboratory Testing in Pediatrics", "Imaging"] },
          { module: "Approach to Sick Child", topics: ["Approach to Fever", "Approach to Allergies", "Trauma in Children", "Bleeding Child", "Approach to Shock", "Approach to Syncope/Collapse", "Approach to a Child With Poisoning", "Fluid & Electrolyte Abnormalities", "Lines, Tubes, and Drains"] },
          { module: "Introduction to Neonatology", topics: ["Transition to Birth", "Physical Examination of Neonate & Care of the New Born (Low Risk)", "Neurological Examination", "Investigation of Term & Preterm", "Neonatal Intensive Care Unit", "Neonatal Pharmacology", "Care of the Preterm Infant", "Care of the High Risk Newborn"] },
          { module: "Neonatology Quintessentials", topics: ["Introduction to Pathology of Neonate", "Neonatal Seizures", "Birth Trauma / Injuries", "Neonatal Sepsis", "Neonatal Asphyxia", "Neonatal Jaundice"] }
        ]
      },
      {
        module: "Advanced Certificate in Pediatrics",
        topics: [],
        submodules: [
          { module: "Gastroenterology", topics: ["Diagnostic Approach to Gastrointestinal Conditions", "Common GI Complaints", "Gastrointestinal Problems of the Newborn", "GERD, Gastritis and Peptic Ulcer Disease and Gastroenteritis", "Inflammatory Bowel Disease - Crohn's Disease, Ulcerative Colitis", "Hepatobiliary Diseases", "Acute, Chronic, and Hereditary Pancreatitis", "Appendicitis", "Pyloric Stenosis and Bowel Obstruction", "Celiac Disease", "Polyps and Other Tumors of the Gastrointestinal Tract", "Food Allergy", "Gastrointestinal Foreign Bodies"] },
          { module: "Pulmonology", topics: ["Approach to Respiratory System", "Bronchial Diseases", "Lung Disease", "Pleural Diseases", "Respiratory Disorders", "Asthma & Status Asthmaticus", "Foreign Body Aspiration", "Ventilatory Support in Children"] },
          { module: "Introduction to Infectious Diseases in Pediatrics", topics: ["Approach to Infection", "Immunologic Responses to Infection", "Nosocomial/Healthcare-associated Infections", "Infections of the Immunocompromised Host", "Determinants of Anti-infective Drug Action and Efficacy in Pediatrics", "Antimicrobial Prophylaxis", "Infectious Diseases of Neonates"] },
          { module: "Pediatric Bacterial Infections", topics: ["Diseases Caused by Gram-positive and Gram-negative Cocci", "Diseases Caused by Gram-positive and Gram-negative Bacilli", "Other Gram-negative Bacterial Diseases", "Treponemal Diseases", "Anaerobic Bacteria", "Antibacterial Therapeutic Agents for Children"] },
          { module: "Pediatric Viral Infection", topics: ["DNA Viruses", "RNA Viruses", "Retroviral Infection in Neonates and Children", "Influenza and SARS-CoV-2 Infection"] },
          { module: "Fungal Infections in Children", topics: ["Fungal Infections in Children", "Antifungal Agents"] },
          { module: "Parasitic Diseases", topics: ["Malaria", "Helminths (Worms)", "Common Gastrointestinal Parasites (Entamoeba coli, Cryptosporidiosis, and Giardia intestinalis)"] },
          { module: "Neurology", topics: ["Approach to Neurological Symptoms", "Neuropathies", "Bell Palsy", "Guillain-Barré Syndrome"] },
          { module: "Cardiology", topics: ["Introduction to Cardiovascular System", "Approach to a Child With Cardiac Complaints", "Investigative Tools", "Hypertension", "Primary Myocardial Disease", "Cardiac Arrhythmias", "Congestive Heart Failure", "Cardiovascular Infections", "Congenital Heart Defects", "Valvular Heart Disease", "Pharmacologic Therapy"] },
          { module: "Hematology", topics: ["Blood Disorders in Neonates and Children", "Reference Intervals in Neonatal Hematology", "Anemia", "Hemopoietic Stem Cell Transplantation"] },
          { module: "Immunology", topics: ["Immunology in Neonates and Children", "Immunodeficiency", "Allergic Disorders", "Immunotherapy"] },
          { module: "Oncology (Palliative and End-of-life Care)", topics: ["Pediatric Oncology", "Supportive, Palliative, and End-of-life Care"] },
          { module: "Nephrology", topics: ["Approach to Suspected Renal Disease", "Acute Kidney Injury", "Glomerular and Tubular Diseases", "Genitourinary Disorders", "Chronic Renal Failure", "Care in Renal Replacement Therapies"] },
          { module: "Dermatology", topics: ["Dermatologic Evaluation and Skin Care", "Common Dermatological Conditions", "Uncommon Conditions"] },
          { module: "Case-based Collaborative Learning", topics: ["Long-standing Icterus"] }
        ]
      },
      {
        module: "Fellowship in Pediatrics",
        topics: [],
        submodules: [
          { module: "Rheumatology", topics: ["Approaches for Investigating Pediatric Rheumatic Disease", "Pediatric Rheumatic Diseases"] },
          { module: "Neuromuscular Disorders", topics: ["Developmental Disorders of the Muscle", "Muscular Dystrophies", "Metabolic Myopathies and Channelopathies", "Disorders of Neuromuscular Transmission and of Motor Neurons"] },
          { module: "Orthopedics", topics: ["Orthopedic Approaches", "Disorders of the Neck & Spine", "Congenital Anomalies of Limbs & Hip", "Common Orthopedic Disorders", "Orthopedic Injuries & Pediatric Sports Medicine"] },
          { module: "Endocrinology", topics: ["Approaches for Investigating Pediatric Endocrinological Disorders", "Endocrine Disorders in Neonates", "Endocrine Disorders", "Diabetes"] },
          { module: "Ophthalmology", topics: ["Ophthalmology - Ocular Examination and Vision Screening", "Ocular Trauma", "Eye Disorders"] },
          { module: "ENT/Otolaryngology", topics: ["Evaluation in Pediatric Otolaryngology", "Disorder of Head and Neck", "Disorders of Ear and Related Structures", "Disorder of Nose and Paranasal Sinuses", "Disorder of Throat", "Disorder of Mouth, Pharynx, and Esophagus", "Pediatric Obstructive Sleep Apnea / Sleep-Disordered Breathing"] },
          { module: "Surgery", topics: ["Perioperative Care in Neonatal Surgery"] },
          { module: "Dental", topics: ["Dental Issues in Children"] },
          { module: "Psychiatric & Psychology", topics: ["Psychosocial Assessment and Interviewing", "Deficit/Hyperactivity Disorder", "Autism Spectrum Disorders"] },
          { module: "Procedures in Pediatrics", topics: ["Resuscitation", "Pediatric Gastrointestinal Procedures", "Pediatric Pulmonary Procedures", "Pediatric Neurological Procedures", "Pediatric Cardiovascular Procedures", "Pediatric Procedures (Oncology)", "Genitourinary Procedures", "Pediatric Dermatology Procedures", "Pediatric Ophthalmologic Procedures", "Dental Procedures in Pediatrics"] }
        ]
      }
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
    eligibility: "MBBS / MD / DNB / Equivalent Medical Qualification",
    description: "Advanced training in clinical dermatology covering medical, procedural, and aesthetic practice.",
    overview: "Fellowship in Clinical Dermatology is a 100% flexible online/blended programme designed for busy practitioners (10–12 hrs/week). It follows a case-based clinical training approach covering medical and basic procedural dermatology, aligned with international curriculum frameworks.",
    highlights: ["100% Flexible Learning (Online / Blended)", "Case-Based Clinical Training", "Medical + Procedural Dermatology", "Dermoscopy Basics", "Infectious & Tropical Dermatology", "Aesthetic Dermatology Basics"],
    onlinePrice: 160000,
    month11_1: 185000,
    month10_2: 230000,
    month9_3: 250000,
    month6_6: 390000,
    month12Offline: 520000,
    curriculum: [
      { module: "Module 1: Foundations of Clinical Dermatology", topics: ["Skin Anatomy and Physiology", "Dermatological Terminology", "Diagnostic Approach to Skin Diseases", "Pharmacology & Therapeutics in Dermatology", "Drug Reactions and Dermatological Emergencies", "Teledermatology and MDT Approach"] },
      { module: "Module 2: Skin Lesions & Dermato-Oncology", topics: ["Approach to Lumps and Bumps", "Benign vs Malignant Lesions", "Melanoma and Pigmented Lesions", "Non-Melanoma Skin Cancers", "Basics of Dermoscopy", "Cryotherapy and Minor Procedures"] },
      { module: "Module 3: Regional Dermatology", topics: ["Facial Dermatoses", "Scalp and Hair Disorders", "Nail Disorders", "Flexural and Genital Dermatoses", "Palmoplantar Conditions"] },
      { module: "Module 4: Inflammatory Skin Disorders", topics: ["Atopic Dermatitis and Eczema", "Contact Dermatitis", "Psoriasis and Papulosquamous Disorders", "Urticaria and Hypersensitivity Reactions", "Bullous Disorders"] },
      { module: "Module 5: Infectious & Tropical Dermatology", topics: ["Bacterial, Viral, and Fungal Infections", "Parasitic Infestations", "Cellulitis and Ulcers", "Dermatological Manifestations of Systemic Infections", "Photodermatoses"] },
      { module: "Module 6: Dermatology in Special Populations & Aesthetic Basics", topics: ["Pediatric Dermatology", "Adolescent Dermatology (Acne, Hormonal Skin Issues)", "Geriatric Dermatology", "Pigmented Skin Considerations", "Basics of Aesthetic Dermatology (Anti-Ageing, Skin Care)"] }
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
  "fellowship-in-cosmetic-aesthetic-medicine": {
    name: "Fellowship in Cosmetic and Aesthetic Medicine",
    icon: "💆",
    duration: "12 Months",
    eligibility: "MBBS",
    description: "Comprehensive training in cosmetic medicine, aesthetic procedures, and evidence-based practice.",
    overview: "This fellowship provides specialized training in cosmetic and aesthetic medicine, covering facial anatomy, skin science, advanced aesthetic treatments, and professional ethics. Fellows gain expertise in evidence-based cosmetic practice and clinical decision-making.",
    highlights: ["Facial Anatomy & Ageing", "Skin Science & Treatments", "Injectable Procedures", "Laser & IPL", "Clinical Ethics", "Evidence-Based Practice"],
    onlinePrice: 150000,
    month11_1: 180000,
    month10_2: 230000,
    month9_3: 270000,
    month6_6: 390000,
    month12Offline: 520000,
    curriculum: [
      {
        module: "Module 1 – Anatomy, Physiology and Professional Issues",
        topics: [],
        submodules: [
          { module: "Module Aim", topics: ["Sciences underpinning cosmetic medicine", "Professional and ethical issues in practice", "Recognising and addressing conflict areas", "Applicable to Diploma and MSc levels"] },
          { module: "Anatomy of the Face", topics: ["Skin", "Muscles", "Fat Pads", "Blood Vessels", "Nerves", "Bones"] },
          { module: "Physiology & Age-Related Changes", topics: ["Physiology of facial structures", "Age-related changes of facial structures", "Functional changes of anatomical structures with ageing", "Relationship between anatomy and facial ageing (Diploma MSc)"] }
        ]
      },
      {
        module: "Module 2 – Cosmetic Medicine / Skin Science & Treatments",
        topics: [],
        submodules: [
          { module: "Skin Anatomy & Physiology", topics: ["Epidermis and dermis layers", "Functions of skin elements"] },
          { module: "Ageing & Environmental Damage", topics: ["UV exposure and sun damage", "Pigmentation", "Fitzpatrick skin types", "Anti-ageing strategies"] },
          { module: "Treatment Modalities", topics: ["Chemical peels", "Laser & IPL treatments", "Ablative procedures", "Non-ablative procedures", "Skin repair", "Emerging treatments"] }
        ]
      },
      {
        module: "Module 3 – Clinical Cosmetic Practice / Procedures",
        topics: [],
        submodules: [
          { module: "Patient Assessment & Procedure Selection", topics: ["Selection of appropriate cosmetic procedures", "Evidence-based treatment planning", "Patient assessment", "Patient safety"] },
          { module: "Risk Management & Outcomes", topics: ["Risk management in aesthetic procedures", "Evaluation of outcomes", "Complications management"] }
        ]
      },
      {
        module: "Module 4 – Advanced Aesthetic Treatments",
        topics: [],
        submodules: [
          { module: "Advanced Facial Aesthetics", topics: ["Advanced facial aesthetics", "Injectable treatments – fillers (theoretical)", "Botulinum toxin (theoretical)", "Combination therapies"] },
          { module: "Device-Based & Customised Treatments", topics: ["Laser & IPL advanced use", "Device-based treatments", "Patient-specific customisation"] }
        ]
      },
      {
        module: "Module 5 – Professional Practice & Ethics",
        topics: [],
        submodules: [
          { module: "Ethical & Legal Considerations", topics: ["Ethical considerations in cosmetic medicine", "Legal responsibilities of practitioners", "Patient consent and communication"] },
          { module: "Governance & Accountability", topics: ["Professional accountability", "Regulatory environment in aesthetic medicine", "Clinical governance"] }
        ]
      },
      {
        module: "Module 6 – Evidence-Based Practice & Clinical Decision Making",
        topics: [],
        submodules: [
          { module: "Evidence-Based Practice", topics: ["Critical appraisal of literature", "Evidence-based cosmetic practice", "Evaluating clinical research"] },
          { module: "Clinical Decision Making & CPD", topics: ["Clinical decision-making frameworks", "Outcome evaluation and audit", "Continuous professional development"] }
        ]
      }
    ],
    careerOpportunities: [
      "Consultant Aesthetic Medicine Specialist",
      "Cosmetic Medicine Practitioner",
      "Aesthetic Clinic Director",
      "Injectable Treatment Specialist",
      "Aesthetic Dermatology Consultant"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-internal-medicine": {
    name: "Fellowship in Internal Medicine",
    icon: "⚕️",
    duration: "12 Months",
    eligibility: "MBBS",
    description: "Clinically intensive training in comprehensive adult patient care, clinical reasoning, and evidence-based practice.",
    overview: "The Fellowship in Internal Medicine by MedFellow is a clinically intensive program designed to build expertise in comprehensive adult patient care. It emphasizes system-based learning, clinical reasoning, evidence-based practice, and real-world case management across outpatient, inpatient, and critical care settings.",
    highlights: ["System-Based Learning", "Clinical Reasoning", "Case Management", "Critical Care Exposure", "Evidence-Based Practice", "Applied Skills"],
    onlinePrice: 175000,
    month11_1: 185000,
    month10_2: 220000,
    month9_3: 240000,
    month6_6: 350000,
    month12Offline: 450000,
    curriculum: [
      {
        module: "Phase 1: Foundations of Internal Medicine",
        topics: [],
        submodules: [
          {
            module: "Clinical Foundations",
            topics: [
              "Clinical Methodology and Diagnostic Reasoning",
              "History Taking and Systematic Examination",
              "Evidence-Based Medicine (EBM) and Clinical Guidelines",
              "Ethics, Communication and Documentation"
            ]
          },
          {
            module: "Approach to Common Clinical Presentations",
            topics: ["Fever", "Anemia", "Dyspnea", "Chest Pain", "Edema", "Altered Sensorium"]
          }
        ]
      },
      {
        module: "Phase 2: Core Internal Medicine Systems",
        topics: [],
        submodules: [
          {
            module: "Cardiology",
            topics: [
              "Hypertension and Cardiovascular Risk Assessment",
              "Ischemic Heart Disease (Stable Angina, ACS)",
              "Heart Failure (Acute and Chronic)",
              "Cardiac Arrhythmias",
              "Valvular Heart Disease",
              "ECG Interpretation (Core Skill)"
            ]
          },
          {
            module: "Pulmonology",
            topics: [
              "COPD and Bronchial Asthma",
              "Pneumonia and Tuberculosis",
              "Interstitial Lung Disease (ILD)",
              "Pulmonary Embolism",
              "Respiratory Failure and Oxygen Therapy"
            ]
          },
          {
            module: "Gastroenterology and Hepatology",
            topics: [
              "GERD and Peptic Ulcer Disease",
              "Acute and Chronic Liver Disease",
              "Cirrhosis and Portal Hypertension",
              "GI Bleeding (Upper and Lower)",
              "Pancreatitis",
              "Approach to Jaundice"
            ]
          },
          {
            module: "Endocrinology",
            topics: [
              "Diabetes Mellitus (Comprehensive Management)",
              "Diabetic Emergencies (DKA, HHS)",
              "Thyroid Disorders",
              "Adrenal Disorders",
              "Pituitary Disorders",
              "Metabolic Syndrome and Obesity"
            ]
          },
          {
            module: "Nephrology",
            topics: [
              "Acute Kidney Injury (AKI)",
              "Chronic Kidney Disease (CKD)",
              "Electrolyte Disorders",
              "Acid-Base Disorders (Advanced Interpretation)",
              "Glomerular Diseases",
              "Dialysis: Indications and Principles"
            ]
          },
          {
            module: "Neurology",
            topics: [
              "Stroke and Neurovascular Emergencies",
              "Epilepsy and Seizure Disorders",
              "Headache and Migraine",
              "Neurodegenerative Disorders",
              "Peripheral Neuropathies",
              "Neuromuscular Disorders"
            ]
          },
          {
            module: "Infectious Diseases",
            topics: [
              "Approach to Fever and Sepsis",
              "Bacterial, Viral, Fungal, and Parasitic Infections",
              "HIV and Opportunistic Infections",
              "Tropical Diseases (Malaria, Dengue, Leptospirosis)",
              "Emerging Infections (COVID-19, Influenza)",
              "Antimicrobial Stewardship"
            ]
          }
        ]
      },
      {
        module: "Phase 3: Cross-Disciplinary Internal Medicine",
        topics: [],
        submodules: [
          {
            module: "Critical Care Medicine",
            topics: [
              "ICU Monitoring and Clinical Assessment",
              "Shock (All Types) - Diagnosis and Management",
              "Sepsis and Septic Shock Protocols",
              "Mechanical Ventilation Basics",
              "Organ Support and Failure Management"
            ]
          },
          {
            module: "Emergency Medicine",
            topics: [
              "Initial Stabilization and Triage",
              "ACLS and BLS Protocols",
              "Acute Poisoning and Overdose",
              "Anaphylaxis and Acute Emergencies"
            ]
          },
          {
            module: "Hematology",
            topics: [
              "Anaemia: Classification and Management",
              "Coagulation Disorders",
              "Thrombosis (DVT, PE)",
              "Haematological Malignancies (Overview)"
            ]
          },
          {
            module: "Oncology",
            topics: [
              "Approach to Cancer Patients",
              "Common Solid Tumours",
              "Chemotherapy and Targeted Therapy Basics",
              "Oncological Emergencies",
              "Palliative Oncology"
            ]
          },
          {
            module: "Geriatric Medicine",
            topics: [
              "Frailty and Functional Decline",
              "Polypharmacy",
              "Cognitive Disorders (Dementia, Delirium)",
              "Falls and Mobility Issues"
            ]
          },
          {
            module: "Psychiatry in Clinical Practice",
            topics: ["Depression and Anxiety Disorders", "Substance Abuse", "Sleep Disorders", "Psychosomatic Disorders"]
          },
          {
            module: "Palliative Care",
            topics: ["Pain Management (WHO Ladder)", "End-of-Life Care", "Symptom Control in Chronic Illness"]
          }
        ]
      },
      {
        module: "Phase 4: Applied Clinical Skills",
        topics: [],
        submodules: [
          {
            module: "Clinical Skills Framework",
            topics: [
              "ECG Interpretation (Hands-on Framework)",
              "ABG Analysis (Stepwise Clinical Approach)",
              "Chest X-ray Interpretation",
              "Basics of CT/MRI Interpretation",
              "Fluid Therapy and IV Drug Management",
              "Insulin Therapy and Glycemic Control",
              "Antibiotic Selection in Clinical Practice"
            ]
          }
        ]
      },
      {
        module: "Phase 5: Procedures (Theoretical + Demonstration-Based)",
        topics: [],
        submodules: [
          {
            module: "Procedural Training",
            topics: [
              "Central Venous Access (Principles)",
              "Lumbar Puncture (Indications and Technique)",
              "Pleural Tap and Ascitic Tap",
              "Basic Airway Management",
              "Oxygen Delivery Systems",
              "Introduction to Point-of-Care Ultrasound (POCUS)"
            ]
          }
        ]
      },
      {
        module: "Phase 6: Integrated Case-Based Learning",
        topics: [],
        submodules: [
          {
            module: "Case-Based Internal Medicine",
            topics: [
              "Cardiovascular Emergencies (ACS, HF)",
              "Respiratory Failure and ARDS",
              "Sepsis and Multi-Organ Dysfunction",
              "Diabetic Emergencies (DKA, HHS)",
              "Electrolyte Crisis (Hyperkalemia, Hyponatremia)",
              "GI Bleeding and Liver Failure",
              "Stroke and Neurological Emergencies"
            ]
          }
        ]
      },
      {
        module: "Phase 7: Research, Audit and Professional Development",
        topics: [],
        submodules: [
          {
            module: "Academic and Professional Growth",
            topics: [
              "Basics of Clinical Research",
              "Journal Reading and Critical Appraisal",
              "Clinical Audit and Case Presentation",
              "Medico-Legal Aspects in Practice",
              "Practice Management for Physicians"
            ]
          }
        ]
      }
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
    description: "Comprehensive training in cardiovascular disease diagnosis, management, emergencies, and modern cardiology advances.",
    overview: "The Fellowship in Clinical Cardiology is a structured, clinically focused program that builds strong foundations in cardiovascular biology, bedside cardiology, diagnostics, pharmacology, rhythm disorders, heart failure, special populations, resuscitation, and emerging technologies in contemporary cardiac care.",
    highlights: ["ECG and Echo Mastery", "Rhythm and Conduction Disorders", "Heart Failure and Emergencies", "Resuscitation Protocols", "Special Population Cardiology", "AI and Wearable Cardiology"],
    onlinePrice: 160000,
    month11_1: 190000,
    month10_2: 240000,
    month9_3: 280000,
    month6_6: 480000,
    month12Offline: 650000,
    curriculum: [
      {
        module: "Section 1: Foundations of Clinical Cardiology",
        topics: [],
        submodules: [
          {
            module: "Introduction",
            topics: ["Fellowship in Clinical Cardiology"]
          },
          {
            module: "Basic Biology of CVS",
            topics: [
              "Embryology of the Heart",
              "Anatomy of the Heart",
              "Physiology of the Heart",
              "Blood Vessels of Heart and Circulation",
              "Expert Talk: Tachyarrhythmias",
              "Expert Talk: Bradyarrhythmias"
            ]
          },
          {
            module: "History and Physical Examination of CVS",
            topics: [
              "Physical Examination in CVS",
              "Cardiac Symptoms and Physical Signs",
              "Case Study: Unstable Angina",
              "Approach to Presenting Complaints",
              "Case Study: Coronary Artery Disease",
              "Examination Techniques"
            ]
          },
          {
            module: "Diagnostic Tests in Cardiology",
            topics: [
              "Chest X-ray and Fluoroscopy",
              "Imaging Techniques Used in Cardiology",
              "Diagnostic Tests in Cardiology",
              "Serum Analysis: Biomarkers",
              "The Electrocardiogram",
              "Echocardiography",
              "Transesophageal Echocardiography",
              "Nuclear Perfusion Scan",
              "Myocardial Biopsy"
            ]
          },
          {
            module: "Pharmacology",
            topics: [
              "Antiarrhythmic Agents",
              "Beta Blockers",
              "Calcium Channel Blockers",
              "Potassium Channel Openers",
              "Nitrates",
              "Ivabradine, Ranzaline",
              "Drugs Targeting the Angiotensin Axis",
              "Diuretics (Aldosterone Antagonists)",
              "Anticoagulants",
              "Antiplatelet Agents",
              "Statins: Lipid-lowering Agents",
              "Cardiac Surgical Physiology"
            ]
          }
        ]
      },
      {
        module: "Section 2: Advanced and Applied Clinical Cardiology",
        topics: [],
        submodules: [
          {
            module: "Introduction and Lesson Plan",
            topics: ["From Course Director", "From Course Faculty", "Lesson Plan"]
          },
          {
            module: "Diseases of Heart Wall",
            topics: [
              "Pericardial Disease",
              "Pericardial Syndromes",
              "Myocarditis",
              "Cardiomyopathy",
              "Cardiac Amyloidosis, Fabry's Disease",
              "Infective Endocarditis",
              "Expert Talk: Infective Endocarditis",
              "Case Study: Hypertrophic Cardiomyopathy"
            ]
          },
          {
            module: "Rhythm and Conduction Disorders",
            topics: [
              "Tachycardia",
              "Bradycardia",
              "Sudden Cardiac Death",
              "Other Arrhythmia Disorders",
              "Cardiac Arrest (Shockable and Non-shockable Rhythms)",
              "Expert Talk: Tachyarrhythmias",
              "Expert Talk: Bradyarrhythmia"
            ]
          },
          {
            module: "Heart Failure",
            topics: [
              "Causes and Precipitants",
              "Forms, Signs, and Symptoms",
              "Expert Talk: Approach to Acute Heart Failure",
              "Investigations, Prevention, and Management",
              "Expert Talk: Specific Management of Acute Heart Failure",
              "Case Study: Decompensated CHF",
              "Cardiac Surgery"
            ]
          },
          {
            module: "Cardiac Trauma and Related Disorders",
            topics: ["Cardiac Trauma", "Heart and Systemic Diseases", "Tumor of CVS"]
          },
          {
            module: "Heart Disease in Special Populations",
            topics: [
              "Heart Disease in the Nongravid Woman",
              "Heart Disease in Pregnancy",
              "Heart Disease in Athletes (Athlete's Heart)",
              "Heart Disease in Children",
              "Heart Disease in the Elderly (Aging and Diseases of the Heart)",
              "HIV Infection and Heart Disease",
              "COVID-19 in Cardiology"
            ]
          },
          {
            module: "Resuscitation and Surgical Cardiology",
            topics: ["Adult Advanced Life Support", "Adult Basic Life Support", "Expert Talk: Adult Basic Life Support", "Perioperative Medical Management"]
          },
          {
            module: "Advances in Cardiology",
            topics: [
              "Expert Talk: AI in Cardiology",
              "Artificial Intelligence in Cardiology",
              "Wearable Devices for Ambulatory Cardiac Monitoring",
              "Holographic Procedural Navigation in the Cath Lab",
              "Virtual Image-based FFR Technologies",
              "Stem Cell Regenerative Biology"
            ]
          }
        ]
      }
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
    description: "Comprehensive critical care training covering ICU resuscitation, organ support, emergencies, procedures, and advanced case-based practice.",
    overview: "The Fellowship in Critical Care Medicine is an intensive, multi-level program designed to build expertise in ICU-based diagnosis, monitoring, resuscitation, and multidisciplinary management of critically ill patients through structured modules, procedure training, and real-world case learning.",
    highlights: ["Resuscitation and ACLS/BLS", "ICU Monitoring and Organ Support", "Critical Care Procedures", "System-wise ICU Management", "Poisoning and Emergency Care", "Ethics and End-of-life Care"],
    onlinePrice: 150000,
    month11_1: 180000,
    month10_2: 230000,
    month9_3: 270000,
    month6_6: 450000,
    month12Offline: 590000,
    curriculum: [
      {
        module: "Certificate in Critical Care Medicine",
        topics: [],
        submodules: [
          {
            module: "Introduction to Critical Care Medicine",
            topics: ["Introduction", "History of Critical Care", "ICU Admission, Discharge, and Outcome", "Patient Evaluation and ICU Rounds"]
          },
          {
            module: "Resuscitation and Initial Management",
            topics: [
              "Basic Life Support",
              "Cardiac Arrest",
              "Chain of Survival and Adult BLS",
              "Pediatric BLS",
              "AED Device",
              "Relieving Choking",
              "ECG Rhythm Recognition for ACLS",
              "Drugs Used in ACLS",
              "The Systematic Approach",
              "Respiratory Arrest",
              "Videos: Airway Adjuncts",
              "Acute Coronary Syndrome",
              "Acute Stroke",
              "Bradycardia",
              "Tachycardia",
              "Cardioversion",
              "Immediate Post Cardiac Arrest Care",
              "Cardiac Arrest"
            ]
          },
          {
            module: "Shock Management",
            topics: ["Hypovolemic Shock", "Septic Shock", "Cardiogenic Shock", "Anaphylactic Shock"]
          },
          {
            module: "Acid-Base Abnormalities | Case Study",
            topics: [
              "Regulation of Acid-Base Balance",
              "Metabolic Acidosis",
              "Metabolic Alkalosis",
              "Respiratory Acidosis",
              "Respiratory Alkalosis",
              "Case Study: Diabetic Ketoacidosis With T1DM"
            ]
          },
          {
            module: "Electrolyte Abnormalities",
            topics: [
              "Electrolyte Disorders",
              "Hyponatremia",
              "Hypernatremia",
              "Hypokalemia",
              "Hyperkalemia",
              "Hypocalcemia",
              "Hypercalcemia",
              "Hypomagnesemia",
              "Hypermagnesemia",
              "Hypophosphatemia",
              "Hyperphosphatemia"
            ]
          },
          {
            module: "Blood and Blood Products",
            topics: ["Blood and Blood Components", "Transfusion Reactions"]
          },
          {
            module: "Nutritional Assessment and Support | Case Study",
            topics: [
              "Nutrition in ICU Patients",
              "Types of Nutritional Support in Critically Ill Patients",
              "Case Study: Irritable Bowl Syndrome",
              "Case Study: Poorly Controlled T2DM With Oral Hypoglycaemic Agents Failure"
            ]
          },
          {
            module: "Investigations and Monitoring in the ICU",
            topics: [
              "Introduction to Physiology of the Respiratory System",
              "Capnography",
              "Blood Gas Analysis",
              "Principles of Gas Exchange",
              "Assessment of Gas Exchange",
              "Respiratory Imaging",
              "Blood Pressure Monitoring",
              "Electrocardiographic Monitoring",
              "Echocardiography in the ICU",
              "Central Venous Pressure Monitoring in ICU",
              "Monitoring Oxygen Saturation",
              "Pulmonary Artery Catheterization",
              "Cardiac Output Assessment in ICU Patients",
              "Tissue Perfusion Monitoring in ICU Patients",
              "Lactate Monitoring in ICU Patients",
              "Pulse Contour Analysis",
              "Cardiovascular Imaging in ICU",
              "Intracranial Pressure Monitoring in the ICU",
              "Electroencephalogram Monitoring in the Critically Ill",
              "Imaging the Central Nervous System in the Critically Ill Patients"
            ]
          },
          {
            module: "ICU Drugs",
            topics: ["Commonly Used ICU Drugs"]
          },
          {
            module: "Case-based Collaborative Learning",
            topics: ["ACU_CRI_Unconsciousness"]
          }
        ]
      },
      {
        module: "Advanced Certificate in Critical Care Medicine",
        topics: [],
        submodules: [
          {
            module: "Cardiovascular | Case Study",
            topics: [
              "Basic Principles of ECG",
              "Ischemic Heart Disease",
              "Tachyarrhythmias",
              "Bradyarrhythmias",
              "Wolff-Parkinson-White Syndrome",
              "Bundle Branch Blocks and Fascicular Blocks",
              "Inherited Cardiac Arrhythmias",
              "Artificial Cardiac Pacemakers",
              "Diseases of the Pericardium and Myocardium",
              "Drugs and Electrolyte Abnormalities",
              "IV Cannula Insertion",
              "IV Cannula Removal",
              "Central Line Insertion",
              "Central Line Removal",
              "Arterial Catheterization",
              "Pulmonary Artery Catheterization",
              "Cardioversion",
              "Defibrillation",
              "Arterial Puncture for Blood Gas Analysis",
              "Transthoracic ECHO",
              "Case Study: Severe Amlodipine Toxicity",
              "Case Study: Anterior Wall Myocardial Infraction"
            ]
          },
          {
            module: "Respiratory System",
            topics: [
              "Oxygen Administration",
              "Monitoring Oxygen Saturation",
              "Endotracheal Intubation",
              "Endotracheal Suction",
              "Laryngoscopy",
              "Bronchoscopy",
              "Thoracentesis",
              "Chest Tube Insertion and Care",
              "Mechanical Ventilation",
              "Ventilators",
              "Chest Tube Removal"
            ]
          },
          {
            module: "Central Nervous System",
            topics: [
              "Lumbar Puncture",
              "Epidural Catheter Removal",
              "Nasogastric Tube Insertion",
              "Abdominal Paracentesis",
              "Sengstaken Tube Placement"
            ]
          },
          {
            module: "Gastrointestinal Tract | Case Study",
            topics: ["Gastrointestinal Endoscopy", "Case Study: Biliary Atresia", "Endoscopy With Feeding Tube Insertion"]
          },
          {
            module: "Genitourinary",
            topics: [
              "Female Bladder Catheter - Insertion",
              "Female Bladder Catheter - Removal",
              "Male Bladder Catheter - Insertion",
              "Male Bladder Catheter - Removal",
              "Percutaneous Suprapubic Cystostomy"
            ]
          },
          {
            module: "Anesthesia | Case Study",
            topics: [
              "Management of Pain in Critically Ill Patients",
              "Anesthesia for Bedside ICU Procedures",
              "Case Study: Malignant Hyperthermia"
            ]
          }
        ]
      },
      {
        module: "Fellowship in Critical Care Medicine",
        topics: [],
        submodules: [
          {
            module: "Introduction",
            topics: ["Course Introduction", "Key Features", "Career Growth", "Why You Should Enroll?"]
          },
          {
            module: "Cardiovascular Problems | Case Study",
            topics: [
              "Hypotension and Heart Failure",
              "Pericardial Diseases",
              "Diseases of Aorta",
              "Cardiac Pacemakers",
              "Approach to Valvular Heart Defects",
              "Aortic Stenosis",
              "Aortic Regurgitation",
              "Pulmonary Regurgitation",
              "Mitral Valve Stenosis",
              "Pulmonary Stenosis",
              "Tricuspid Regurgitation",
              "Tricuspid Valve Stenosis",
              "Hypertensive Crisis",
              "Ischemic Heart Disease",
              "Stable Ischemic Heart Disease",
              "Acute Coronary Syndromes - STEMI",
              "Arrhythmia",
              "Bradyarrhythmia",
              "Case Study: Abdominal Aortic Aneurysm"
            ]
          },
          {
            module: "Pulmonary Problems | Case Study",
            topics: [
              "Management of Asthma",
              "Chronic Obstructive Lung Disease (COPD)",
              "Respiratory Failure",
              "Pneumonia",
              "Aspiration",
              "Acute Inhalational Injury",
              "Venous Thromboembolism (VTE)",
              "Deep Neck Infections",
              "Pulmonary Hypertension",
              "Gas Embolism",
              "Pleural Diseases",
              "Case Study: ARDS in COVID-19",
              "Case Study: COVID-19 Pneumonia, HTN, and T2DM"
            ]
          },
          {
            module: "Gastrointestinal Diseases | Case Study",
            topics: [
              "Gastrointestinal Bleeding",
              "Acute and Chronic Pancreatitis",
              "Diarrhea With Severe Dehydration",
              "Liver Failure",
              "Gastrointestinal Motility in the Critically Ill Patients",
              "Case Study: Biliary Atresia",
              "Case Study: Carcinoma of Stomach",
              "Case Study: Acute Viral Hepatitis"
            ]
          },
          {
            module: "Endocrine Diseases",
            topics: [
              "Hypoglycemia in Diabetes",
              "Diabetic Ketoacidosis",
              "Hyperosmolar Hyperglycemic State",
              "Management of Hyperglycemia",
              "Hyperthyroidism and Myxedema Coma"
            ]
          },
          {
            module: "Renal Problems | Case Study",
            topics: ["Chronic Renal Failure", "Renal Replacement Therapy", "Acute Kidney Injury", "Case Study: Hepatorenal Syndrome"]
          },
          {
            module: "Neurological Problems | Case Study",
            topics: [
              "Metabolic Encephalopathy",
              "Cerebrovascular Disease",
              "Mental Status Dysfunction",
              "Subarachnoid Hemorrhage",
              "Status Epilepticus",
              "Evaluating a Patient With Altered Consciousness in ICU",
              "Case Study: West Syndrome",
              "Case Study: Absence Seizure in Children"
            ]
          },
          {
            module: "Infectious Diseases",
            topics: [
              "Approach to Fever in the ICU Patients",
              "Infection-associated With Vascular Catheters",
              "Infective Endocarditis and Infections of Intracardiac Prosthetic Devices",
              "Urinary Tract Infections",
              "Life-threatening Community Acquired Infections - SARS-CoV-2",
              "Life-threatening Community-acquired Infections - TB",
              "Life-threatening Community-acquired Infections - Pneumonia",
              "Life-threatening Community-acquired Infections - Malaria",
              "Life-Threatening Community-Acquired Infections - Dengue",
              "Central Nervous System Infections"
            ]
          },
          {
            module: "Gynecology | Case Study",
            topics: [
              "Cardiovascular Diseases and Pregnancy",
              "Premature Rupture of Membranes (PROM)",
              "Anemia in Pregnancy",
              "Respiratory Failure During Pregnancy and Peripartum Period",
              "Fluid and Electrolyte Management",
              "Coagulation Abnormalities in Perioperative and Obstetric Patients",
              "Case Study: Acute Peripartum Severe Necrotizing Pancreatitis"
            ]
          },
          {
            module: "Hematological and Oncological Conditions",
            topics: ["Prothrombic Disorders in ICU", "Oncologic Emergencies", "Anemia", "Hemostatic Disorders"]
          },
          {
            module: "Overdose and Poisoning Cases",
            topics: [
              "Evaluation and Stabilization",
              "Nursing and Psychiatric Care",
              "Antidote Administration",
              "Antidote Therapy - Antidotes",
              "Elimination",
              "Decontamination",
              "Hydrocarbons",
              "Corrosive (Caustic) Poisons",
              "Chemical Poisons",
              "Asphyxiant Poisons",
              "Antihypertensives",
              "Organic Poisons"
            ]
          },
          {
            module: "Physical Disorders",
            topics: [
              "Introduction to Physical Disorders",
              "Spinal Cord Injuries",
              "Cerebral Palsy",
              "Multiple Sclerosis",
              "Epilepsy",
              "Cystic Fibrosis",
              "Pain Disorders",
              "Hypochondriac Disorder",
              "Body Dysmorphic Disorder",
              "Occupational Disorders",
              "High-altitude Syndrome",
              "Drowning",
              "Heat Stroke",
              "Frost Bite",
              "Lightning",
              "Radiation Injuries",
              "Bioterrorism",
              "Air Pollution"
            ]
          },
          {
            module: "Nutrition and Nutritional Failure",
            topics: [
              "Nutritional Physiology in Critical Illness",
              "Nutritional Supplementation in Critically Ill Patients",
              "Malnutrition in Critically Ill Patients",
              "Clinical Nutrition Methods and Dietetics",
              "Medical Nutrition Therapy"
            ]
          },
          {
            module: "Ethics and End-of-life Care | Case Study",
            topics: [
              "Medical Ethics in ICU",
              "End-of-life Care",
              "Case Study: COVID-19 in Newborn",
              "Case Study: Cytokine Storm in Preterm Newborn"
            ]
          },
          {
            module: "Case Studies",
            topics: [
              "Case Study: Diabetic Ketoacidosis",
              "Case Study: Acute Respiratory Distress Syndrome (ARDS)",
              "Case Study: Pericardial Tamponade",
              "Case Study: Pulmonary Embolism",
              "Case Study: Septic Shock",
              "Case Study: Dealing with Unknowns - COVID-19"
            ]
          }
        ]
      }
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
      {
        module: "MODULE-1 : BASIC PRINCIPLES OF FAMILY MEDICINE",
        topics: [
          "Principles of Family Medicine",
          "Communication in Family Medicine",
          "Importance of Counseling",
          "Medical Documentation",
          "Referrals in Family Medicine",
          "Practising Family Medicine",
          "Determinants of Health"
        ]
      },
      {
        module: "MODULE-2 : CLINICAL PRACTICE IN FAMILY MEDICINE",
        topics: [
          "Medicine and Renal Headache",
          "Cluster Headache",
          "Epilepsy",
          "Dyspnea",
          "Angina Pectoris",
          "Stroke",
          "Hypertension",
          "Urinary Tract Infection",
          "Acute Kidney Injury / Acute Renal Failure (ARF)",
          "Chronic Kidney Disease",
          "Mental Health",
          "Sleep Disorder",
          "Mental Health Disorder",
          "Substance Abuse"
        ]
      },
      {
        module: "MODULE-3 : ADVANCES IN FAMILY MEDICINE",
        topics: [
          "Women's Health",
          "Antenatal Care",
          "Contraception",
          "Intracranial Care",
          "Menstrual Irregularities",
          "Postnatal Care",
          "Vaginal Health",
          "Male Infertility",
          "Female Infertility"
        ]
      },
      {
        module: "MODULE-4 : SKIN, VENERAL AND SURGERY",
        topics: ["Skin", "Venereal Diseases", "Surgery"]
      },
      {
        module: "MODULE-5 : PROCEDURAL SKILLS IN FAMILY MEDICINE",
        topics: [
          "Endotracheal Intubation",
          "Intravenous Access",
          "How to Give Local Anaesthesia",
          "Cardio-pulmonary Resuscitation (CPR)",
          "Blood Pressure",
          "Transcutaneous Monitoring of Oxygen Saturation",
          "Peak Expiratory Flow",
          "Measuring Capillary Blood Glucose",
          "Taking an ECG",
          "12 Lead ECG",
          "Basic Respiratory Function Tests",
          "Urine Multi-dipstick",
          "Swabs",
          "Pregnancy Test",
          "Administering Oxygen",
          "Airway Management",
          "Ventilation",
          "Defibrillation",
          "Use of Infusion Device",
          "Catheterisation",
          "Inhaled Medication",
          "Skin Suturing",
          "Application of a Sling",
          "Safe Disposal of Clinical Waste, Needles and Other Sharps",
          "Ophthalmoscopy",
          "Otorhinolaryngoscopy"
        ]
      }
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
  "fellowship-in-rheumatology": {
    name: "Fellowship in Rheumatology",
    icon: "🩺",
    duration: "12 Months",
    eligibility: "MBBS / MD / DNB / Equivalent medical qualification",
    description: "One-year fellowship in rheumatic diseases with strong emphasis on clinical exposure, immunology, and musculoskeletal medicine.",
    overview: "This 12-month Fellowship in Rheumatology is designed to train physicians in the diagnosis, management, and procedural skills required for rheumatic diseases. The program is structured in three phases: Foundations (Months 1-3), Core Clinical Rheumatology (Months 4-9), and Advanced Skills plus Research (Months 10-12). It combines outpatient-focused rheumatology exposure, immunology, musculoskeletal medicine, procedural training, and evidence-based academic development.",
    highlights: ["Structured 1-year fellowship", "Strong clinical and outpatient exposure", "Immunology and musculoskeletal medicine", "Procedural rheumatology skills", "Research and professional development"],
    onlinePrice: 180000,
    month11_1: 200000,
    curriculum: [
      {
        module: "Module 1: Basics of Rheumatology and Immunology",
        topics: [
          "Introduction to Rheumatology",
          "Immune system overview",
          "Autoimmunity and inflammation pathways",
          "Cytokines, autoantibodies, HLA associations",
          "Genetics in rheumatic diseases"
        ]
      },
      {
        module: "Module 2: Musculoskeletal Medicine",
        topics: [
          "Functional anatomy of joints",
          "Clinical examination of joints",
          "Gait analysis",
          "Approach to joint pain (acute vs chronic)",
          "Synovial fluid analysis"
        ]
      },
      {
        module: "Module 3: Diagnostic Techniques",
        topics: [
          "RF, Anti-CCP, ANA, ENA panel",
          "Complement levels",
          "X-ray, MRI, CT",
          "Musculoskeletal ultrasound basics",
          "Interpretation of diagnostic results"
        ]
      },
      {
        module: "Module 4: Pharmacology in Rheumatology",
        topics: [
          "NSAIDs and corticosteroids",
          "Conventional DMARDs (Methotrexate, Sulfasalazine)",
          "Biologics (TNF inhibitors, IL-6 inhibitors)",
          "Targeted synthetic DMARDs (JAK inhibitors)",
          "Drug monitoring and adverse effects"
        ]
      },
      {
        module: "Module 5: Inflammatory Arthritides",
        topics: [
          "Rheumatoid Arthritis (RA)",
          "Ankylosing spondylitis",
          "Psoriatic arthritis",
          "Reactive arthritis",
          "Juvenile idiopathic arthritis (overview)"
        ]
      },
      {
        module: "Module 6: Connective Tissue Disorders",
        topics: [
          "Systemic Lupus Erythematosus (SLE)",
          "Systemic sclerosis",
          "Sjogren's syndrome",
          "Polymyositis and Dermatomyositis",
          "Mixed connective tissue disease"
        ]
      },
      {
        module: "Module 7: Vasculitis Syndromes",
        topics: [
          "Small vessel vasculitis (ANCA-associated)",
          "Medium vessel (Polyarteritis nodosa)",
          "Large vessel (GCA, Takayasu)",
          "Diagnostic criteria and management"
        ]
      },
      {
        module: "Module 8: Degenerative and Metabolic Disorders",
        topics: [
          "Osteoarthritis",
          "Osteoporosis and metabolic bone disease",
          "Gout",
          "Pseudogout"
        ]
      },
      {
        module: "Module 9: Non-inflammatory Disorders",
        topics: [
          "Fibromyalgia",
          "Chronic pain syndromes",
          "Soft tissue rheumatism"
        ]
      },
      {
        module: "Module 10: Systemic Manifestations",
        topics: [
          "Rheumatologic lung disease (ILD)",
          "Renal involvement (Lupus nephritis)",
          "Cardiac manifestations",
          "Neurological involvement"
        ]
      },
      {
        module: "Module 11: Pediatric and Special Rheumatology",
        topics: [
          "Pediatric rheumatology basics",
          "Pregnancy and rheumatic diseases",
          "Geriatric rheumatology"
        ]
      },
      {
        module: "Module 12: Procedural Skills",
        topics: [
          "Arthrocentesis",
          "Intra-articular injections",
          "Tendon sheath injections",
          "Ultrasound-guided procedures"
        ]
      },
      {
        module: "Module 13: Clinical Rotations (Core Component)",
        topics: [
          "Outpatient rheumatology clinics (primary exposure)",
          "Inpatient consultation services",
          "Lupus clinic",
          "Arthritis clinic",
          "Osteoporosis clinic"
        ]
      },
      {
        module: "Module 14: Research and Academics",
        topics: [
          "Basics of clinical research",
          "Evidence-based medicine",
          "Journal club participation",
          "Case presentation and publication",
          "Audit / Quality improvement"
        ]
      },
      {
        module: "Module 15: Teaching and Professional Development",
        topics: [
          "Communication skills",
          "Ethics in rheumatology",
          "Multidisciplinary care approach",
          "Teaching juniors / presentations"
        ]
      }
    ],
    careerOpportunities: [
      "Consultant Rheumatologist",
      "Autoimmune Disease Specialist",
      "Musculoskeletal Medicine Specialist",
      "Academic Rheumatology Faculty",
      "Outpatient Continuity Care Specialist"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-pain-management": {
    name: "Fellowship in Pain Management",
    icon: "💉",
    duration: "12 Months",
    eligibility: "MBBS / MD / DNB / Equivalent medical qualification",
    description: "One-year fellowship in pain medicine focused on diagnosis, multidisciplinary management, and interventional pain procedures.",
    overview: "This 12-month Fellowship in Pain Management is designed to build expertise in acute, chronic, cancer, neuropathic, and palliative pain care. The curriculum spans foundations of pain medicine, acute and chronic pain management, interventional procedures, rehabilitation, special pain conditions, and research, with emphasis on evidence-based practice and clinic setup.",
    highlights: ["Foundations of pain medicine", "Acute and chronic pain management", "Interventional pain procedures", "Multidisciplinary rehabilitation", "Palliative and end-of-life care"],
    onlinePrice: 150000,
    month11_1: 170000,
    curriculum: [
      {
        module: "Module 1: Foundations of Pain Medicine (Month 1-2)",
        topics: [],
        submodules: [
          {
            module: "1.1 Basics of Pain",
            topics: [
              "Definition and classification (acute, chronic, cancer, neuropathic)",
              "Pain pathways and neurophysiology",
              "Peripheral and central sensitisation",
              "Biopsychosocial model of pain"
            ]
          },
          {
            module: "1.2 Pain Assessment",
            topics: [
              "Pain scales (VAS, NRS, McGill)",
              "Functional assessment tools",
              "Psychological assessment",
              "Red flags in pain"
            ]
          },
          {
            module: "1.3 Pharmacology of Pain",
            topics: [
              "NSAIDs, opioids, and adjuvants",
              "Antidepressants and anticonvulsants",
              "Muscle relaxants",
              "WHO analgesic ladder"
            ]
          }
        ]
      },
      {
        module: "Module 2: Acute Pain Management (Month 3)",
        topics: [
          "Postoperative pain management",
          "Trauma-related pain",
          "Multimodal analgesia",
          "PCA (Patient Controlled Analgesia)",
          "Epidural and regional analgesia basics"
        ]
      },
      {
        module: "Module 3: Chronic Pain Management (Month 4-5)",
        topics: [],
        submodules: [
          {
            module: "3.1 Musculoskeletal Pain",
            topics: ["Low back pain, cervical pain", "Myofascial pain syndrome", "Osteoarthritis and inflammatory pain"]
          },
          {
            module: "3.2 Neuropathic Pain",
            topics: ["Diabetic neuropathy", "Post-herpetic neuralgia", "Radiculopathy"]
          },
          {
            module: "3.3 Cancer Pain",
            topics: ["WHO ladder application", "Breakthrough pain", "Palliative care integration"]
          }
        ]
      },
      {
        module: "Module 4: Interventional Pain Procedures (Month 6-8)",
        topics: [],
        submodules: [
          {
            module: "4.1 Basics of Interventions",
            topics: ["Indications and contraindications", "Sterile techniques", "Imaging guidance (Fluoroscopy, Ultrasound)"]
          },
          {
            module: "4.2 Spine Interventions",
            topics: ["Epidural steroid injections", "Facet joint injections", "Medial branch blocks", "Radiofrequency ablation"]
          },
          {
            module: "4.3 Peripheral Nerve Blocks",
            topics: ["Trigger point injections", "Peripheral nerve blocks", "Sympathetic blocks"]
          },
          {
            module: "4.4 Advanced Procedures",
            topics: ["Intrathecal drug delivery systems", "Spinal cord stimulation (overview)"]
          }
        ]
      },
      {
        module: "Module 5: Multidisciplinary Pain Management (Month 9)",
        topics: [
          "Physiotherapy and rehabilitation",
          "Cognitive Behavioural Therapy (CBT)",
          "Lifestyle modification",
          "Ergonomics",
          "Integrative medicine (yoga, acupuncture overview)"
        ]
      },
      {
        module: "Module 6: Special Pain Conditions (Month 10)",
        topics: [
          "Headache and migraine management",
          "Fibromyalgia",
          "Complex Regional Pain Syndrome (CRPS)",
          "Pelvic pain",
          "Geriatric pain"
        ]
      },
      {
        module: "Module 7: Palliative and End-of-Life Care (Month 11)",
        topics: [
          "Principles of palliative care",
          "Opioid titration",
          "Ethical and legal issues",
          "Communication skills with patients/families"
        ]
      },
      {
        module: "Module 8: Research, Ethics and Practice Setup (Month 12)",
        topics: [
          "Basics of clinical research in pain medicine",
          "Evidence-based practice",
          "Pain clinic setup",
          "Documentation and medico-legal aspects",
          "NABH guidelines for pain clinics"
        ]
      }
    ],
    careerOpportunities: [
      "Pain Medicine Specialist",
      "Interventional Pain Consultant",
      "Palliative Care Pain Specialist",
      "Pain Clinic Director",
      "Academic Pain Medicine Faculty"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-endocrinology": {
    name: "Fellowship in Endocrinology",
    icon: "⚕️",
    duration: "12 Months",
    eligibility: "MD Medicine/DNB",
    description: "Advanced training in endocrine physiology, complex hormonal disorders, and evidence-based endocrine disease management.",
    overview: "The Fellowship in Endocrinology is a clinically focused program that develops expertise in hypothalamic-pituitary, thyroid, adrenal, calcium-bone, reproductive, and endocrine oncology disorders with integrated diagnostic and multidisciplinary management approaches.",
    highlights: ["Pituitary and Thyroid Mastery", "Adrenal and Bone-Endocrine Disorders", "Reproductive Endocrinology", "Endocrine Oncology", "Advanced Diagnostics", "Medical and Surgical Management"],
    onlinePrice: 180000,
    month11_1: 210000,
    month10_2: 240000,
    month9_3: 280000,
    month6_6: 490000,
    month12Offline: 650000,
    curriculum: [
      {
        module: "Module 1 - Disorders of the Hypothalamus and Pituitary",
        topics: [],
        submodules: [
          {
            module: "Aim",
            topics: ["Analyse and evaluate complex physiological principles of hypothalamic-pituitary axes and related disorders"]
          },
          {
            module: "Core Physiology and Signalling",
            topics: [
              "Physiology of hypothalamic-anterior pituitary-end organ axes",
              "Posterior pituitary function",
              "Intracrine, paracrine, and endocrine mechanisms",
              "Second messenger pathways"
            ]
          },
          {
            module: "Clinical Conditions and Management",
            topics: [
              "Non-functional pituitary tumours: diagnosis, management, surveillance",
              "Acromegaly",
              "Cushing's disease",
              "Prolactinomas",
              "TSHomas",
              "Hypopituitarism",
              "Congenital hypopituitarism and genetic disorders",
              "Medical and surgical management approaches"
            ]
          }
        ]
      },
      {
        module: "Module 2 - Disorders of the Thyroid",
        topics: [],
        submodules: [
          {
            module: "Aim",
            topics: ["Develop an advanced understanding of thyroid physiology and clinical management"]
          },
          {
            module: "Thyroid Physiology and Diagnostics",
            topics: [
              "Thyroid physiology and hormone function",
              "Thyroid function test interpretation",
              "Sick euthyroidism",
              "Thyroiditis"
            ]
          },
          {
            module: "Disorders and Treatment",
            topics: [
              "Hypothyroidism",
              "Hyperthyroidism",
              "Hormone replacement",
              "Thionamides",
              "Radioiodine",
              "Surgery"
            ]
          },
          {
            module: "Thyroid Nodules",
            topics: ["Assessment", "Fine needle aspiration", "Cytological classification"]
          }
        ]
      },
      {
        module: "Module 3 - Disorders of the Adrenals",
        topics: [],
        submodules: [
          {
            module: "Aim",
            topics: ["Analyse adrenal physiology and endocrine disorders affecting adrenal glands"]
          },
          {
            module: "Adrenal Physiology",
            topics: ["Adrenal anatomy and physiology", "Steroid biosynthesis", "HPA axis regulation"]
          },
          {
            module: "Clinical Disorders",
            topics: [
              "Primary adrenal insufficiency (Addison's disease)",
              "Secondary adrenal insufficiency",
              "Adrenal crisis",
              "Cushing's syndrome",
              "Primary hyperaldosteronism",
              "Pheochromocytoma",
              "Adrenal incidentalomas",
              "Congenital adrenal hyperplasia"
            ]
          },
          {
            module: "Diagnostics and Treatment",
            topics: ["Biochemical testing", "Imaging", "Genetic analysis", "Pharmacological treatment", "Surgical treatment", "Lifestyle approaches"]
          }
        ]
      },
      {
        module: "Module 4 - Disorders of Parathyroids, Calcium and Bone",
        topics: [],
        submodules: [
          {
            module: "Aim",
            topics: ["Evaluate calcium metabolism and parathyroid-related disorders"]
          },
          {
            module: "Calcium and Parathyroid Disorders",
            topics: [
              "Hypercalcaemia and hypocalcaemia",
              "Investigation and management protocols",
              "Familial hypocalciuric hypercalcaemia",
              "Acute severe hypercalcaemia",
              "Primary hyperparathyroidism",
              "Secondary hyperparathyroidism",
              "Tertiary hyperparathyroidism",
              "Vitamin D deficiency and renal failure context"
            ]
          },
          {
            module: "Bone Health and Treatment",
            topics: [
              "DEXA scan interpretation",
              "Osteoporosis management",
              "Bisphosphonates",
              "SERMs",
              "Strontium ranelate",
              "Vitamin D / calcium",
              "Calcitonin"
            ]
          }
        ]
      },
      {
        module: "Module 5 - Reproductive Endocrinology",
        topics: [],
        submodules: [
          {
            module: "Aim",
            topics: ["Evaluate and manage endocrine disorders affecting the reproductive systems"]
          },
          {
            module: "Core Reproductive Endocrinology",
            topics: [
              "Gonadal physiology",
              "Sex hormones and profiles",
              "Turner syndrome",
              "Klinefelter syndrome",
              "Kallmann syndrome",
              "PCOS management",
              "Infertility investigations"
            ]
          },
          {
            module: "Female and Male Disorders",
            topics: [
              "Premature ovarian failure",
              "Menopause",
              "Hormone replacement therapy",
              "Hypogonadism",
              "Testosterone therapy",
              "Erectile dysfunction management"
            ]
          }
        ]
      },
      {
        module: "Module 6 - Endocrine-Related Cancer",
        topics: [],
        submodules: [
          {
            module: "Aim",
            topics: ["Analyse diagnosis and management of endocrine-related cancers"]
          },
          {
            module: "Thyroid and Adrenal Cancers",
            topics: [
              "Follicular thyroid cancer",
              "Medullary thyroid cancer",
              "Anaplastic thyroid cancer",
              "Radioiodine therapy",
              "Long-term hormone replacement",
              "Adrenal cancers: diagnosis and management",
              "Chemotherapy principles"
            ]
          },
          {
            module: "Neuroendocrine Tumours and Syndromes",
            topics: [
              "Neuroendocrine tumour classification",
              "Chromogranin assays",
              "Somatostatin scintigraphy",
              "Somatostatin analogues",
              "PRRT",
              "Carcinoid syndrome",
              "MEN syndromes",
              "Multidisciplinary management"
            ]
          }
        ]
      }
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
  "fellowship-in-spine-surgery": {
    name: "Fellowship in Spine Surgery",
    icon: "🦴",
    duration: "12 Months",
    eligibility: "MS/MD/DNB Orthopaedics / Neurosurgery / Equivalent medical qualification",
    description: "One-year modular fellowship in spine surgery with training in degenerative disorders, trauma, deformity, infection, and minimally invasive techniques.",
    overview: "This 12-month Fellowship in Spine Surgery follows a quarter-wise modular progression combining didactic learning, clinical exposure, surgical training, case discussions, and research. The curriculum covers spine fundamentals, degenerative disorders, trauma, infections and tumours, pediatric and deformity surgery, minimally invasive techniques, instrumentation, navigation, rehabilitation, and interventional pain management.",
    highlights: ["Quarter-wise modular training", "Degenerative and trauma spine", "Infection, tumour, and deformity management", "MISS, navigation, and robotics", "Research and dissertation"],
    onlinePrice: 215000,
    month11_1: 240000,
    curriculum: [
      {
        module: "Module 1: Basic Sciences and Spine Fundamentals (Month 1-2)",
        topics: [],
        submodules: [
          {
            module: "1.1 Applied Anatomy",
            topics: [
              "Vertebral column anatomy (cervical, thoracic, lumbar, sacral)",
              "Spinal cord, nerve roots, dermatomes",
              "Ligaments, discs, facet joints",
              "Vascular anatomy of the spine"
            ]
          },
          {
            module: "1.2 Biomechanics",
            topics: ["Spinal stability concepts", "Load transmission", "Motion segments", "Degenerative cascade"]
          },
          {
            module: "1.3 Clinical Evaluation",
            topics: [
              "History taking in spine disorders",
              "Neurological examination",
              "Red flag signs",
              "Functional scoring systems (ODI, VAS)"
            ]
          },
          {
            module: "1.4 Imaging",
            topics: ["X-ray interpretation", "MRI spine basics", "CT scan utility", "Dynamic imaging"]
          }
        ]
      },
      {
        module: "Module 2: Degenerative Spine Disorders (Month 3-4)",
        topics: [],
        submodules: [
          {
            module: "2.1 Lumbar Spine",
            topics: ["Lumbar disc herniation", "Lumbar canal stenosis", "Spondylolisthesis"]
          },
          {
            module: "2.2 Cervical Spine",
            topics: ["Cervical radiculopathy", "Cervical myelopathy", "Disc prolapse"]
          },
          {
            module: "2.3 Thoracic Spine Disorders",
            topics: []
          },
          {
            module: "2.4 Management",
            topics: ["Conservative management protocols", "Indications for surgery", "Preoperative planning"]
          }
        ]
      },
      {
        module: "Module 3: Spine Trauma (Month 5-6)",
        topics: [],
        submodules: [
          {
            module: "3.1 Classification Systems",
            topics: ["AO Spine classification", "Denis 3-column theory"]
          },
          {
            module: "3.2 Cervical Spine Trauma",
            topics: ["C1-C2 injuries", "Subaxial injuries"]
          },
          {
            module: "3.3 Thoracolumbar Trauma",
            topics: ["Burst fractures", "Chance fractures"]
          },
          {
            module: "3.4 Emergency Management",
            topics: ["ATLS principles", "Immobilization techniques"]
          },
          {
            module: "3.5 Surgical Indications",
            topics: ["Decompression", "Stabilization"]
          }
        ]
      },
      {
        module: "Module 4: Spinal Infections and Tumours (Month 7-8)",
        topics: [],
        submodules: [
          {
            module: "4.1 Infections",
            topics: ["Spinal tuberculosis (Pott's spine)", "Pyogenic infections", "Discitis"]
          },
          {
            module: "4.2 Tumors",
            topics: ["Primary tumors", "Metastatic spine disease"]
          },
          {
            module: "4.3 Management",
            topics: ["Medical vs surgical management", "Biopsy techniques"]
          }
        ]
      },
      {
        module: "Module 5: Deformity and Pediatric Spine (Month 9-10)",
        topics: [],
        submodules: [
          {
            module: "5.1 Spinal Deformities",
            topics: ["Scoliosis", "Kyphosis", "Scheuermann's disease"]
          },
          {
            module: "5.2 Pediatric Spine Disorders",
            topics: ["Congenital anomalies", "Neuromuscular scoliosis"]
          },
          {
            module: "5.3 Principles of Correction",
            topics: ["Bracing", "Surgical correction techniques"]
          }
        ]
      },
      {
        module: "Module 6: Advanced and Minimally Invasive Spine Surgery (Month 11)",
        topics: [],
        submodules: [
          {
            module: "6.1 Minimally Invasive Spine Surgery (MISS)",
            topics: ["Tubular discectomy", "Endoscopic spine surgery", "Percutaneous fixation"]
          },
          {
            module: "6.2 Instrumentation",
            topics: ["Pedicle screw systems", "Rods, cages, implants"]
          },
          {
            module: "6.3 Navigation and Robotics",
            topics: ["Image-guided surgery", "Basics of robotic spine surgery"]
          }
        ]
      },
      {
        module: "Module 7: Pain Management and Rehabilitation (Integrated + Month 12)",
        topics: [],
        submodules: [
          {
            module: "7.1 Interventional Pain Procedures",
            topics: ["Epidural steroid injections", "Facet joint injections", "Nerve root blocks"]
          },
          {
            module: "7.2 Rehabilitation",
            topics: ["Physiotherapy protocols", "Post-op rehab", "Ergonomics"]
          }
        ]
      }
    ],
    careerOpportunities: [
      "Spine Surgery Fellow",
      "Consultant Spine Surgeon",
      "Degenerative and Trauma Spine Specialist",
      "MISS and Navigation-focused Spine Surgeon",
      "Academic Spine Surgery Faculty"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-general-surgery-1-year": {
    name: "Fellowship in General Surgery (1 Year)",
    icon: "🩺",
    duration: "12 Months",
    eligibility: "MS/DNB General Surgery / Equivalent medical qualification",
    description: "Comprehensive training in core general surgery integrating theory, clinical exposure, and hands-on operative skills.",
    overview: "This fellowship is designed to provide comprehensive training in core general surgery, combining theoretical knowledge, clinical exposure, and hands-on surgical skills. The program emphasises perioperative care, operative techniques, and independent surgical decision-making. Program structure: Duration 12 months, Mode Hybrid (Online + Clinical Training), Clinical Posting 1-3 months (modular), and Assessment through module-wise evaluation with final assessment.",
    highlights: ["Hybrid model with modular clinical posting", "Broad-based general surgery curriculum", "Perioperative care and emergency decision-making", "Hands-on core procedure training"],
    onlinePrice: 200000,
    month11_1: 230000,
    curriculum: [
      {
        module: "Module 1: Principles of Surgery",
        topics: ["Surgical history taking and clinical examination", "Surgical anatomy (applied)", "Asepsis, sterilization and OT protocols", "Wound healing and wound care", "Fluid, electrolyte and acid-base balance", "Preoperative evaluation and risk assessment"]
      },
      {
        module: "Module 2: Surgical Infections and Antibiotic Policy",
        topics: ["Types of surgical infections", "Sepsis and septic shock management", "Antibiotic stewardship", "Necrotizing infections", "Hospital-acquired infections"]
      },
      {
        module: "Module 3: Trauma and Emergency Surgery",
        topics: ["ATLS protocol (primary and secondary survey)", "Polytrauma management", "Hemorrhagic shock", "Abdominal trauma (blunt and penetrating)", "Head injury basics for surgeons", "Emergency procedures (chest tube, FAST, etc.)"]
      },
      {
        module: "Module 4: Gastrointestinal Surgery",
        topics: ["Esophageal disorders (GERD, carcinoma)", "Gastric diseases (ulcer, malignancy)", "Small bowel pathology", "Colorectal diseases (IBD, carcinoma, hemorrhoids)", "Appendicitis and appendectomy", "Intestinal obstruction"]
      },
      {
        module: "Module 5: Hepatobiliary and Pancreatic Surgery",
        topics: ["Liver abscess and tumors", "Gallbladder diseases (cholelithiasis, cholecystitis)", "ERCP basics (observational)", "Pancreatitis and pancreatic tumors", "Jaundice evaluation"]
      },
      {
        module: "Module 6: Breast Surgery",
        topics: ["Benign breast diseases", "Breast carcinoma (screening, staging, management)", "FNAC and biopsy techniques", "Mastectomy vs BCS principles"]
      },
      {
        module: "Module 7: Thyroid and Endocrine Surgery",
        topics: ["Thyroid nodules and goiter", "Thyroid malignancies", "Hyperthyroidism surgical aspects", "Parathyroid and adrenal basics"]
      },
      {
        module: "Module 8: Urology for General Surgeons",
        topics: ["Urolithiasis", "Prostate enlargement", "Urinary retention", "Basic urological procedures (catheterization, suprapubic cystostomy)"]
      },
      {
        module: "Module 9: Vascular Surgery Basics",
        topics: ["Peripheral arterial disease", "Varicose veins", "Deep vein thrombosis", "Limb ischemia and amputation principles"]
      },
      {
        module: "Module 10: Minimal Access Surgery (Laparoscopy)",
        topics: ["Principles of laparoscopy", "Instrumentation and ergonomics", "Pneumoperitoneum", "Laparoscopic appendectomy", "Laparoscopic cholecystectomy", "Complications and management"]
      },
      {
        module: "Module 11: Hernia Surgery",
        topics: ["Inguinal hernia (open and lap)", "Femoral and umbilical hernia", "Incisional hernia", "Mesh repair techniques"]
      },
      {
        module: "Module 12: Anorectal Surgery",
        topics: ["Hemorrhoids", "Fissure and fistula", "Perianal abscess", "Surgical techniques (open vs stapled)"]
      },
      {
        module: "Module 13: Critical Care in Surgery",
        topics: ["ICU basics", "Ventilator management (introductory)", "Nutritional support", "Postoperative complications", "Pain management"]
      },
      {
        module: "Module 14: Surgical Oncology Basics",
        topics: ["Principles of oncology", "Tumor staging (TNM)", "Biopsy techniques", "Multidisciplinary approach"]
      },
      {
        module: "Module 15: Skills and Procedures Training",
        topics: ["Suturing techniques", "Incision and drainage", "Appendectomy", "Hernia repair", "Cholecystectomy (assist)", "Central line insertion", "Foley catheterization", "Chest tube insertion"]
      }
    ],
    careerOpportunities: [
      "General Surgery Fellowship-trained Consultant",
      "Emergency and Trauma Surgery Practitioner",
      "GI and Hepatobiliary-focused General Surgeon",
      "Minimal Access Surgery-oriented Surgeon",
      "Academic and Clinical Skills Trainer in Surgery"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-minimal-access-robotic-surgery": {
    name: "Fellowship in Minimal Access & Robotic Surgery",
    icon: "🤖",
    duration: "12 Months",
    eligibility: "MS/DNB General Surgery",
    description: "One-year fellowship in minimal access and robotic surgery with modular skill progression and surgical exposure.",
    overview: "Fellowship in Minimal Access & Robotic Surgery (FMARS) is a 12-month modular program for surgeons seeking structured progression from laparoscopy fundamentals to robotic surgery workflows, advanced laparoscopic procedures, perioperative care, and practice integration. The curriculum combines didactic learning, clinical exposure, surgical training, case discussions, and research-oriented development.",
    highlights: ["High-impact phase-wise curriculum", "Simulation and robotic console training", "Basic to advanced laparoscopic surgery", "Robotic transition and advanced procedures", "ERAS and practice setup"],
    onlinePrice: 200000,
    month11_1: 230000,
    curriculum: [
      {
        module: "Phase 1: Foundations of Minimal Access & Robotic Surgery (Month 1-2)",
        topics: [],
        submodules: [
          {
            module: "Core Concepts",
            topics: [
              "Principles of laparoscopy and robotic surgery",
              "Indications, contraindications, and patient selection",
              "Open vs Laparoscopic vs Robotic comparison"
            ]
          },
          {
            module: "Instrumentation",
            topics: [
              "Laparoscopic tower and instruments",
              "Energy devices (monopolar, bipolar, ultrasonic)",
              "Robotic system components (console, patient cart, arms)"
            ]
          },
          {
            module: "OT Setup and Ergonomics",
            topics: [
              "Port placement strategies",
              "Docking principles (robotic)",
              "Team dynamics and safety protocols"
            ]
          },
          {
            module: "Pneumoperitoneum",
            topics: ["Techniques and complications"]
          }
        ]
      },
      {
        module: "Phase 2: Simulation & Core Skill Development (Month 3-4)",
        topics: [],
        submodules: [
          {
            module: "Laparoscopic Skills (Dry Lab)",
            topics: ["Camera navigation", "Hand-eye coordination", "Peg transfer, pattern cutting"]
          },
          {
            module: "Advanced Skills",
            topics: ["Intracorporeal suturing", "Knotting techniques", "Clip application"]
          },
          {
            module: "Robotic Simulator Training",
            topics: ["Console familiarization", "Clutching, camera control", "Wristed instrument movements"]
          },
          {
            module: "Skill Benchmarks",
            topics: ["Time-motion efficiency", "Error reduction metrics"]
          }
        ]
      },
      {
        module: "Phase 3: Basic Laparoscopic Surgery (Month 5-6)",
        topics: [],
        submodules: [
          {
            module: "Core Procedures (Hands-on Priority)",
            topics: ["Laparoscopic cholecystectomy", "Laparoscopic appendectomy", "Diagnostic laparoscopy"]
          },
          {
            module: "Key Concepts",
            topics: ["Critical view of safety", "Safe dissection techniques", "Complication avoidance"]
          }
        ]
      },
      {
        module: "Phase 4: Advanced Laparoscopic Surgery (Month 7-8)",
        topics: [],
        submodules: [
          {
            module: "GI Surgery",
            topics: ["Fundoplication", "Heller's myotomy", "Laparoscopic colectomy"]
          },
          {
            module: "Hernia Surgery",
            topics: ["TAPP and TEP repair", "Ventral hernia (IPOM)"]
          },
          {
            module: "Bariatric Exposure",
            topics: ["Sleeve gastrectomy (assist/observe)"]
          }
        ]
      },
      {
        module: "Phase 5: Robotic Surgery Transition (Month 9-10)",
        topics: [],
        submodules: [
          {
            module: "Bedside Assistant Role",
            topics: ["Port placement", "Docking and troubleshooting", "Instrument exchange"]
          },
          {
            module: "Initial Console Training",
            topics: ["Basic procedural steps", "Camera and arm control"]
          },
          {
            module: "Core Robotic Procedures",
            topics: ["Robotic cholecystectomy", "Robotic hernia repair"]
          }
        ]
      },
      {
        module: "Phase 6: Advanced Robotic Surgery (Month 11)",
        topics: [],
        submodules: [
          {
            module: "Advanced Procedures",
            topics: ["Robotic colectomy", "Robotic fundoplication"]
          },
          {
            module: "Advanced Skills",
            topics: ["Intracorporeal suturing", "Anastomosis techniques"]
          },
          {
            module: "Complication Management",
            topics: ["Bleeding control", "Conversion strategies"]
          }
        ]
      },
      {
        module: "Phase 7: Perioperative Care, ERAS & Practice Integration (Month 12)",
        topics: [],
        submodules: [
          {
            module: "ERAS Protocols",
            topics: ["Fast-track recovery pathways"]
          },
          {
            module: "Clinical Decision-Making",
            topics: ["Case selection (Lap vs Robotic)", "Cost-effectiveness"]
          },
          {
            module: "Practice Setup",
            topics: ["Building MAS practice", "Setting up robotic program (insight module)"]
          }
        ]
      }
    ],
    careerOpportunities: [
      "Minimal Access Surgeon",
      "Robotic Surgery Fellow",
      "Advanced GI and Hernia Surgery Specialist",
      "Laparoscopic Surgery Consultant",
      "Academic MAS Trainer"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-orthopedics": {
    name: "Fellowship in Orthopaedics",
    icon: "🦴",
    duration: "12 Months",
    eligibility: "MS/MD/DNB Orthopaedics",
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
      {
        module: "MODULE 1: GENERAL ORTHOPAEDICS",
        topics: [],
        submodules: [
          {
            module: "Congenital Disorders",
            topics: [
              "Congenital Talipes Equinovarus (CTEV)",
              "Developmental Dysplasia of Hip (DDH)",
              "Congenital limb deficiencies",
              "Congenital spinal deformities"
            ]
          },
          {
            module: "Developmental Disorders",
            topics: [
              "Slipped Capital Femoral Epiphysis (SCFE)",
              "Legg-Calve-Perthes disease",
              "Angular deformities in children"
            ]
          },
          {
            module: "Metabolic Disorders",
            topics: ["Osteoporosis", "Osteomalacia", "Paget's disease", "Rickets"]
          },
          {
            module: "Osteomyelitis",
            topics: ["Acute osteomyelitis", "Chronic osteomyelitis", "Brodie's abscess", "Sequestrum & involucrum formation"]
          },
          {
            module: "Skeletal Tuberculosis",
            topics: [
              "Spine TB (Pott's spine)",
              "Hip and knee TB",
              "Cold abscess formation",
              "Anti-tubercular therapy principles"
            ]
          },
          {
            module: "Disorders of Joints (Arthritis)",
            topics: ["Osteoarthritis", "Septic arthritis", "Post-traumatic arthritis"]
          },
          {
            module: "Rheumatic Diseases",
            topics: ["Rheumatoid arthritis", "Ankylosing spondylitis", "Psoriatic arthritis"]
          },
          {
            module: "Neuromuscular Disorders",
            topics: ["Cerebral palsy", "Muscular dystrophy", "Peripheral nerve injuries"]
          },
          {
            module: "Bone Neoplasias",
            topics: [
              "Benign tumours (osteochondroma, GCT)",
              "Malignant tumours (osteosarcoma, Ewing's sarcoma)",
              "Principles of biopsy"
            ]
          }
        ]
      },
      {
        module: "MODULE 2: ORTHOPAEDIC TRAUMA",
        topics: [],
        submodules: [
          {
            module: "Classification of Fractures",
            topics: ["AO classification", "Gustilo-Anderson classification", "Salter-Harris classification"]
          },
          {
            module: "Fractures with Eponyms",
            topics: ["Colles fracture", "Smith fracture", "Monteggia fracture", "Galeazzi fracture"]
          },
          {
            module: "Pathological Fractures",
            topics: ["Metastatic fractures", "Myeloma-related fractures", "Osteoporotic fractures"]
          },
          {
            module: "Injuries to Joints",
            topics: ["Shoulder dislocation", "Hip dislocation", "Knee dislocation"]
          },
          {
            module: "Injuries to Ligaments",
            topics: ["ACL, PCL injuries", "MCL, LCL injuries", "Ankle ligament injuries"]
          }
        ]
      },
      {
        module: "MODULE 3: ORTHOPAEDIC DISORDERS",
        topics: [],
        submodules: [
          {
            module: "Approach to Orthopaedic Disorders",
            topics: ["History taking", "Clinical examination", "Radiological interpretation", "Differential diagnosis formulation"]
          },
          {
            module: "Deformities and Their Management",
            topics: ["Varus and valgus deformities", "Limb length discrepancies", "Contractures"]
          },
          {
            module: "Treatment Principles",
            topics: ["Conservative management", "Traction principles", "Casting techniques", "Orthotic support"]
          },
          {
            module: "Regional Conditions - Upper Limb",
            topics: ["Frozen shoulder", "Tennis elbow", "Carpal tunnel syndrome"]
          },
          {
            module: "Regional Conditions - Spine",
            topics: ["Prolapsed intervertebral disc", "Lumbar spondylosis", "Cervical radiculopathy"]
          },
          {
            module: "Regional Conditions - Lower Limb",
            topics: ["Plantar fasciitis", "Hallux valgus", "Meniscal injuries"]
          },
          {
            module: "Disorders of the Hand",
            topics: ["Trigger finger", "Dupuytren's contracture", "Tendon injuries"]
          }
        ]
      },
      {
        module: "MODULE 4: SURGICAL TECHNIQUES",
        topics: [],
        submodules: [
          {
            module: "Humerus Surgeries",
            topics: ["ORIF humerus fractures", "Intramedullary nailing"]
          },
          {
            module: "Forearm Surgeries",
            topics: ["Plating of radius & ulna", "DRUJ stabilization"]
          },
          {
            module: "Hip Surgeries",
            topics: ["DHS fixation", "Hemiarthroplasty basics"]
          },
          {
            module: "Femur Surgeries",
            topics: ["Interlocking nailing", "Distal femur plating"]
          },
          {
            module: "Patella Surgeries",
            topics: ["Tension band wiring"]
          },
          {
            module: "Tibia Surgeries",
            topics: ["Intramedullary tibia nailing", "Proximal tibial plating"]
          },
          {
            module: "Turco's One-Stage Posteromedial Release for CTEV",
            topics: ["Indications", "Surgical steps", "Postoperative protocol"]
          },
          {
            module: "Spine Surgeries",
            topics: ["Laminectomy", "Discectomy basics"]
          },
          {
            module: "Finger & Toe Surgeries",
            topics: ["Percutaneous K-wire fixation", "Nail bed repair"]
          },
          {
            module: "External Fixation",
            topics: ["Indications", "Ilizarov basics", "Damage control orthopaedics"]
          }
        ]
      }
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
    onlinePrice: 160000,
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
    description: "Comprehensive fellowship covering clinical gastroenterology, hepatology, advanced endoscopy, and surgical GI foundations.",
    overview: "The Fellowship in Gastroenterology is a clinically intensive program that develops expertise in GI diagnostics, hepatology, inflammatory and functional bowel disorders, GI oncology, advanced endoscopic interventions, pancreaticobiliary care, and academic research with integrated exposure to surgical gastroenterology.",
    highlights: ["Diagnostic and Therapeutic Endoscopy", "Hepatology and Transplant Care", "IBD and Functional GI Disorders", "GI Oncology and Bleeding", "Advanced Endoscopic Procedures", "Surgical Gastroenterology Basics"],
    onlinePrice: 180000,
    month11_1: 195000,
    month10_2: 240000,
    month9_3: 280000,
    month6_6: 490000,
    month12Offline: 680000,
    curriculum: [
      {
        module: "Module 1: Gastroenterology",
        topics: [
          "History-taking and physical examination in gastroenterology",
          "Endoscopic procedures (esophagogastroduodenoscopy, colonoscopy, flexible sigmoidoscopy)",
          "Endoscopic retrograde cholangiopancreatography (ERCP)",
          "Endoscopic ultrasound (EUS)",
          "Capsule endoscopy"
        ]
      },
      {
        module: "Module 2: Hepatology",
        topics: [
          "Liver anatomy and physiology",
          "Hepatitis (viral and non-viral)",
          "Cirrhosis and complications",
          "Liver transplantation",
          "Liver biopsy interpretation"
        ]
      },
      {
        module: "Module 3: Inflammatory Bowel Disease (IBD)",
        topics: ["Crohn's disease", "Ulcerative colitis", "Indeterminate colitis", "Medical and surgical management"]
      },
      {
        module: "Module 4: Functional Gastrointestinal Disorders",
        topics: ["Irritable bowel syndrome (IBS)", "Functional dyspepsia", "Gastrointestinal motility disorders"]
      },
      {
        module: "Module 5: Gastrointestinal Oncology, Bleeding, Nutrition and Motility",
        topics: [
          "Colorectal cancer",
          "Esophageal cancer",
          "Gastric cancer",
          "Pancreatic cancer",
          "Upper and lower GI bleeding",
          "Endoscopic hemostasis techniques",
          "Evaluation and management of anemia",
          "Nutritional assessment",
          "Enteral and parenteral nutrition",
          "Malabsorption syndromes",
          "Achalasia",
          "Gastroparesis",
          "Small intestinal dysmotility"
        ]
      },
      {
        module: "Module 6: Advanced Endoscopic Procedures",
        topics: [
          "Endoscopic mucosal resection (EMR)",
          "Endoscopic submucosal dissection (ESD)",
          "Stenting procedures"
        ]
      },
      {
        module: "Module 7: Pancreaticobiliary Disorders and Academic Development",
        topics: [
          "Pancreatitis",
          "Pancreatic cysts",
          "Biliary stones and strictures",
          "Research and academic development"
        ]
      },
      {
        module: "Module 8: Research Methodology and Quality",
        topics: [
          "Data interpretation",
          "Journal club participation",
          "Continuous quality improvement",
          "Patient safety initiatives",
          "Risk management"
        ]
      },
      {
        module: "Module 9: Surgical Gastroenterology",
        topics: [
          "Introduction to infections and antibiotics in GI surgery",
          "Overview of common infections in gastrointestinal surgery",
          "Principles of antibiotic use in surgical practice",
          "Prophylactic antibiotic strategies"
        ]
      },
      {
        module: "Module 10: Basics of Esophagus, Pancreas, Liver, Spleen and Colon",
        topics: [
          "Anatomy and physiology of the esophagus",
          "Benign and malignant esophageal diseases",
          "Surgical techniques for esophageal resection",
          "Complications and their management",
          "Anatomy and function of the pancreas",
          "Surgical management of pancreatic tumors",
          "Islet and pancreas transplantation",
          "Complications of pancreatic surgery",
          "Hepatic anatomy and physiology",
          "Indications and techniques for liver resection",
          "Liver transplantation procedures",
          "Management of liver tumors",
          "Surgical considerations for splenic disorders",
          "Splenectomy techniques and indications",
          "Preservation of splenic function",
          "Colorectal anatomy and physiology",
          "Surgical management of colorectal cancer",
          "Inflammatory bowel disease and surgical options",
          "Complications and postoperative care"
        ]
      },
      {
        module: "Module 11: Video-based Surgical Learning",
        topics: [
          "Videos: Minimal Invasive Esophagectomy",
          "Videos: Procedures for Esophageal Replacement",
          "Videos: Carcinoma of the Stomach",
          "Videos: Visceral Artery Aneurysms",
          "Videos: Gastrointestinal Tumors",
          "Videos: Islet and Pancreas Transplantation",
          "Videos: Choledochal Cyst",
          "Videos: Liver Transplantation",
          "Case discussions and surgical decision-making",
          "Video demonstrations and case studies"
        ]
      }
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
      {
        module: "Module 1: The Reproductive System, Fertility and Pregnancy",
        topics: [],
        submodules: [
          {
            module: "Module Content",
            topics: [
              "Female reproductive physiology",
              "Male reproductive physiology",
              "Fertilisation and early embryogenesis",
              "Embryogenesis, including AI evaluation of embryo quality",
              "Placental function",
              "Pregnancy"
            ]
          }
        ]
      },
      {
        module: "Module 2: Sexual Function",
        topics: [],
        submodules: [
          {
            module: "Module Content",
            topics: [
              "The psychology of sex, attraction and orgasm",
              "Female psychosexual dysfunction",
              "Erectile dysfunction and premature ejaculation",
              "Hypoactive sexual disorder",
              "Psychosexual counselling",
              "Medical management of sexual disorders"
            ]
          }
        ]
      },
      {
        module: "Module 3: Male Subfertility and Infertility",
        topics: [],
        submodules: [
          {
            module: "Module Content",
            topics: [
              "Interpretation of semen analysis, including new applications of AI",
              "Pathophysiology of semen generation",
              "Primary hypogonadism",
              "Secondary hypogonadism",
              "Medical management of male infertility 1",
              "Medical management of male infertility 2"
            ]
          }
        ]
      },
      {
        module: "Module 4: Female Subfertility and Infertility",
        topics: [],
        submodules: [
          {
            module: "Module Content",
            topics: [
              "Menstrual abnormalities",
              "Primary and Secondary Ovarian Failure",
              "Polycystic ovarian syndrome",
              "Structural abnormalities leading to female subfertility",
              "Medical management of female subfertility 1",
              "Medical management of female subfertility 2"
            ]
          }
        ]
      },
      {
        module: "Module 5: Initial Management of an Infertile Couple",
        topics: [],
        submodules: [
          {
            module: "Module Content",
            topics: [
              "Defining infertility",
              "Counselling of the infertile couple and communication skills",
              "Referral to fertility services",
              "Recurrent miscarriages 1",
              "Recurrent miscarriages 2",
              "Genetics and genetic counselling"
            ]
          }
        ]
      },
      {
        module: "Module 6: Assisted Reproduction Techniques and Ethics",
        topics: [],
        submodules: [
          {
            module: "Module Content",
            topics: [
              "Understanding IUI, IVF and ICSI, including basic embryological procedures",
              "Selection of patients for assisted conception and treatment pathways depending on the underlying physiological or anatomical disorder",
              "Understanding the complications of assisted reproduction treatments, including potential genetic abnormalities in resultant offspring",
              "Indication and appropriate use of donor eggs and sperm, in addition to the use of a surrogate",
              "Expected treatment success rates by age and aetiology of subfertility, and how this relates to expectations",
              "Ethical and legal considerations surrounding assisted reproduction selection, treatment, and subsequent childbirth"
            ]
          }
        ]
      }
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
    description: "Advanced fellowship focused on neonatal critical care, NICU emergency management, and evidence-based neonatal practice.",
    overview: "The Fellowship in Neonatology is a clinically intensive program designed to build advanced proficiency in neonatal critical care, life-saving interventions, and independent NICU management. It emphasizes multidisciplinary, protocol-driven, and evidence-based practice with strong hands-on exposure to real-world neonatal emergencies.",
    highlights: ["NICU-focused Practical Training", "Case-based and Protocol-driven Learning", "Real-world Neonatal Emergency Exposure", "Hands-on Clinical Skills and Procedures", "Guideline-aligned Neonatal Care", "Career Readiness for NICU and Hospital Settings"],
    programObjectives: [
      "Develop proficiency in advanced neonatal critical care",
      "Build competency in life-saving interventions and resuscitation",
      "Strengthen clinical decision-making in high-risk neonatal scenarios",
      "Enable independent management of NICU cases and emergencies",
      "Train for multidisciplinary and evidence-based neonatal practice"
    ],
    onlinePrice: 160000,
    month11_1: 195000,
    month10_2: 245000,
    month9_3: 285000,
    month6_6: 490000,
    month12Offline: 650000,
    curriculum: [
      {
        module: "Module 1: Foundations of Neonatology",
        topics: [
          "Fetal development and transition to extrauterine life",
          "Neonatal physiology and adaptation",
          "Routine newborn care and assessment"
        ]
      },
      {
        module: "Module 2: Neonatal Resuscitation & Emergency Care",
        topics: [
          "Neonatal Resuscitation Program (NRP) protocols",
          "Apgar scoring and initial stabilization",
          "Airway management and emergency interventions"
        ]
      },
      {
        module: "Module 3: Neonatal Intensive Care (NICU Management)",
        topics: [
          "NICU setup, monitoring, and infection control",
          "Ventilation strategies: CPAP, mechanical ventilation",
          "Hemodynamic monitoring and shock management"
        ]
      },
      {
        module: "Module 4: Common Neonatal Disorders",
        topics: [
          "Respiratory distress syndromes",
          "Neonatal jaundice and metabolic disorders",
          "Sepsis, meningitis, and infections"
        ]
      },
      {
        module: "Module 5: Neonatal Nutrition & Development",
        topics: [
          "Breastfeeding and lactation management",
          "Parenteral and enteral nutrition",
          "Growth monitoring and neurodevelopmental care"
        ]
      },
      {
        module: "Module 6: Congenital & High-Risk Neonates",
        topics: [
          "Congenital anomalies and genetic disorders",
          "Preterm and low birth weight care",
          "Multidisciplinary neonatal management"
        ]
      },
      {
        module: "Module 7: Procedures & Clinical Skills",
        topics: [
          "Neonatal intubation and ventilation setup",
          "Umbilical line insertion",
          "Arterial sampling and IV access",
          "NICU procedural protocols"
        ]
      },
      {
        module: "Module 8: Follow-up & Long-term Care",
        topics: [
          "Developmental follow-up clinics",
          "Screening (ROP, hearing, metabolic disorders)",
          "Parental counselling and neonatal outcomes"
        ]
      }
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
      {
        module: "Module 1: Basics and Cath Lab Foundation (Month 1-2)",
        topics: [
          "Coronary anatomy and physiology",
          "Atherosclerosis and CAD basics",
          "Cath lab setup and instruments",
          "Radiation safety",
          "Sterilization and protocols"
        ]
      },
      {
        module: "Module 2: Pharmacology and Patient Preparation (Month 2-3)",
        topics: [
          "Antiplatelets and anticoagulants",
          "Contrast agents and precautions",
          "Patient selection and risk assessment",
          "Pre-procedure evaluation and consent"
        ]
      },
      {
        module: "Module 3: Diagnostic Procedures (Month 3-4)",
        topics: [
          "Coronary angiography basics",
          "Vascular access (radial and femoral)",
          "Catheters and guidewires",
          "Reading angiograms"
        ]
      },
      {
        module: "Module 4: Introduction to PCI (Month 4-5)",
        topics: [
          "Basics of angioplasty",
          "Balloon angioplasty techniques",
          "Stents (BMS vs DES)",
          "Step-by-step PCI procedure"
        ]
      },
      {
        module: "Module 5: Core PCI Skills (Month 5-6)",
        topics: [
          "Lesion assessment",
          "Device selection",
          "Simple PCI cases",
          "Post-stenting evaluation"
        ]
      },
      {
        module: "Module 6: Emergency Interventions (Month 6-7)",
        topics: [
          "STEMI management",
          "Primary PCI workflow",
          "Acute coronary syndromes",
          "Cath lab emergency handling"
        ]
      },
      {
        module: "Module 7: Imaging and Functional Assessment (Month 7-8)",
        topics: [
          "IVUS basics",
          "FFR / iFR",
          "Interpretation of imaging",
          "Decision-making support"
        ]
      },
      {
        module: "Module 8: Complications Management (Month 8-9)",
        topics: [
          "Dissection and perforation",
          "No-reflow phenomenon",
          "Bleeding complications",
          "Cardiogenic shock basics"
        ]
      },
      {
        module: "Module 9: Advanced PCI (Exposure Level) (Month 9-10)",
        topics: [
          "Bifurcation lesions",
          "Calcified lesions",
          "CTO (overview)",
          "Rotablation basics"
        ]
      },
      {
        module: "Module 10: Peripheral Interventions (Month 10-11)",
        topics: [
          "Peripheral angioplasty basics",
          "Carotid and renal artery interventions",
          "Vascular access challenges"
        ]
      },
      {
        module: "Module 11: Post-Procedure Care (Month 11)",
        topics: [
          "ICU monitoring",
          "Complication follow-up",
          "Medications post-PCI",
          "Discharge protocols"
        ]
      },
      {
        module: "Module 12: Case-Based Learning and Research (Month 12)",
        topics: [
          "Case discussions",
          "Journal review",
          "Clinical decision-making",
          "Basics of research and documentation"
        ]
      }
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
    name: "Fellowship in Arthroscopy & Arthroplasty",
    icon: "🦴",
    duration: "12 Months",
    eligibility: "MS/MD/DNB Ortho",
    description: "One-year structured fellowship in arthroscopy, sports medicine, and arthroplasty with phased progression and outcomes-focused training.",
    overview: "Program Structure (12 Months): Phase 1 (Months 1-5): Arthroscopy and Sports Medicine. Phase 2 (Months 6-10): Arthroplasty (Joint Replacement). Phase 3 (Months 11-12): Integrated Practice, Revision, and Research.",
    highlights: ["Comprehensive arthroscopy foundation with safety and technique focus", "Knee, shoulder, hip, ankle, and upper limb arthroscopy exposure", "Core and advanced arthroplasty concepts across knee, hip, and shoulder", "Complication management, rehabilitation outcomes, and research integration"],
    onlinePrice: 180000,
    month11_1: 210000,
    month10_2: 240000,
    month9_3: 280000,
    month6_6: 490000,
    month12Offline: 610000,
    curriculum: [
      {
        module: "Module 1: Foundations of Arthroscopy",
        topics: [
          "Principles and evolution",
          "Instrumentation and optics (0 degree, 30 degree, 70 degree)",
          "Fluid management",
          "Portal placement and triangulation",
          "Patient positioning",
          "OR setup, ergonomics and sterilization",
          "Neurovascular safety",
          "Complication prevention"
        ]
      },
      {
        module: "Module 2: Knee Arthroscopy",
        topics: [
          "Diagnostic arthroscopy: standard portals, systematic evaluation, normal vs pathological anatomy",
          "Meniscal injuries: tear classification and vascular zones",
          "Repair vs meniscectomy",
          "Techniques: all-inside, inside-out, outside-in",
          "Root tears and ramp lesions",
          "Ligament reconstruction: ACL biomechanics and reconstruction",
          "Graft selection",
          "Tunnel positioning",
          "Single vs double bundle",
          "Revision ACL",
          "PCL reconstruction concepts",
          "Multiligament injuries",
          "Cartilage lesions: ICRS grading, microfracture, OATS",
          "Biologics (conceptual)"
        ]
      },
      {
        module: "Module 3: Shoulder Arthroscopy",
        topics: [
          "Diagnostic arthroscopy",
          "Rotator cuff repair",
          "Bankart repair and instability",
          "SLAP lesions",
          "Hill-Sachs lesion",
          "Subacromial decompression",
          "Frozen shoulder release"
        ]
      },
      {
        module: "Module 4: Hip, Ankle and Upper Limb Arthroscopy",
        topics: [
          "Hip: FAI and labral repair",
          "Portal placement and traction",
          "Ankle: impingement",
          "Osteochondral lesions",
          "Elbow and wrist (overview)",
          "Loose bodies",
          "TFCC injuries",
          "Ganglion excision"
        ]
      },
      {
        module: "Module 5: Sports Medicine Principles",
        topics: [
          "Injury mechanisms",
          "Athlete evaluation",
          "Imaging (MRI/USG basics)",
          "Rehabilitation protocols",
          "Return-to-play guidelines",
          "Biologics (PRP - evidence-based)",
          "Injury prevention"
        ]
      },
      {
        module: "Module 6: Principles of Arthroplasty",
        topics: [
          "Indications and contraindications",
          "Preoperative planning and templating",
          "Implant biomechanics",
          "Cemented vs uncemented",
          "ERAS protocols"
        ]
      },
      {
        module: "Module 7: Total Knee Arthroplasty (TKA)",
        topics: [
          "Alignment (Mechanical vs Kinematic)",
          "Surgical approaches",
          "Gap balancing",
          "Ligament balancing",
          "Implant selection",
          "Advanced: Robotic TKA",
          "Navigation systems",
          "PSI (Patient-specific instrumentation)"
        ]
      },
      {
        module: "Module 8: Total Hip Arthroplasty (THA)",
        topics: [
          "Surgical approaches",
          "Femoral and acetabular preparation",
          "Bearing surfaces",
          "Dual mobility",
          "Dysplastic hips",
          "Advanced: Revision THA",
          "Periprosthetic fractures",
          "Complex reconstructions"
        ]
      },
      {
        module: "Module 9: Shoulder Arthroplasty",
        topics: [
          "Anatomical vs reverse replacement",
          "Cuff arthropathy",
          "Implant positioning"
        ]
      },
      {
        module: "Module 10: Complications and Revision Surgery",
        topics: [
          "Arthroscopy complications: infection, arthrofibrosis, graft failure",
          "Arthroplasty complications: PJI, aseptic loosening, instability, periprosthetic fractures",
          "Revision strategies and algorithms"
        ]
      },
      {
        module: "Module 11: Rehabilitation and Outcomes",
        topics: [
          "Post-op rehab protocols (ACL, TKA, THA)",
          "Return-to-function vs return-to-sport",
          "PROMs: IKDC, Lysholm, Oxford Knee Score, Harris Hip Score"
        ]
      },
      {
        module: "Module 12: Research and Clinical Practice",
        topics: [
          "Literature reading",
          "Case documentation",
          "Clinical audits",
          "Registry data interpretation",
          "Medico-legal documentation"
        ]
      }
    ],
    careerOpportunities: [
      "Arthroscopy and Sports Medicine Specialist",
      "Joint Replacement and Arthroplasty Consultant",
      "Revision Arthroplasty-focused Orthopedic Surgeon",
      "Academic Orthopedic and Sports Surgery Faculty"
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
  },
  "fellowship-in-2d-echocardiography": {
    name: "Fellowship in 2D Echocardiography",
    icon: "🫀",
    duration: "12 Months",
    eligibility: "MBBS / MD / DNB / Equivalent medical qualification",
    description: "Comprehensive fellowship in 2D echocardiography focused on practical imaging and cardiac diagnosis.",
    overview: "The Fellowship in 2D Echocardiography is a clinically oriented program designed to build strong competency in echocardiographic imaging, interpretation, and simulation-based application. The curriculum integrates foundational principles, diagnostic workflows, and hands-on simulation modules for accurate evaluation of cardiac structure and function.",
    highlights: ["2D and M-Mode Echocardiography", "Doppler and Transesophageal Echocardiography", "Systematic Echo Windows", "Cardiac Function and Valvular Assessment", "Simulation-based Training"],
    onlinePrice: 185000,
    month11_1: 220000,
    month10_2: 240000,
    month9_3: 280000,
    month6_6: 480000,
    month12Offline: 650000,
    curriculum: [
      {
        module: "Introduction",
        topics: [
          "Expert Talks: Echocardiography",
          "Introduction to Echocardiography",
          "Cardiac Anatomy Related to Echocardiography",
          "Ultrasound Physics and Principles",
          "Doppler Echocardiography",
          "Normal Values and Measurements",
          "Transesophageal Echocardiography",
          "Newer Echocardiography Techniques",
          "Stress Echocardiography",
          "2D and M-Mode Echocardiography",
          "Systematic Approach to Echocardiography and Standard Echo Windows"
        ]
      },
      {
        module: "Diagnosis",
        topics: [
          "Assessment of Cardiac Functions",
          "Coronary Artery Disease",
          "Cardiomyopathies",
          "Valvular Diseases",
          "Congenital Heart Disease",
          "Infective Endocarditis",
          "Pericardial Diseases",
          "Miscellaneous Cardiac Conditions"
        ]
      },
      {
        module: "Simulations",
        topics: [
          "Basic Ultrasound Scan Techniques",
          "Cardiovascular Pathology",
          "Ultrasound Physics - Part 1",
          "Ultrasound Physics - Part 2",
          "Basic Echocardiography Techniques",
          "Basic Echocardiography Views",
          "Electrocardiogram (ECG) - 12 Lead",
          "Embryology and Congenital Disorders",
          "Assessment of Endocarditis and Pericarditis",
          "Transesophageal and Stress Echocardiography",
          "Echocardiography Assessment of Valvular Disease",
          "Assessment of Cardiac Wall Motion and Diastolic Function"
        ]
      }
    ],
    careerOpportunities: [
      "Echocardiography Specialist",
      "Cardiac Imaging Consultant",
      "Non-invasive Cardiology Associate",
      "Hospital Echo Lab Specialist",
      "Academic Cardiac Ultrasound Trainer"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-arthroscopy": {
    name: "Fellowship in Arthroscopy",
    icon: "🦴",
    duration: "12 Months",
    eligibility: "MS/MD/DNB Ortho / Equivalent medical qualification",
    description: "Advanced one-year fellowship in diagnostic and therapeutic arthroscopy with sports medicine integration and hands-on skill development.",
    overview: "The Fellowship in Arthroscopy is a comprehensive 12-month program focused on arthroscopic principles, knee and shoulder arthroscopy, hip and ankle arthroscopy, advanced sports medicine concepts, complications, and evidence-based clinical practice. The curriculum emphasizes safe surgical technique, structured clinical decision-making, and mandatory practical exposure through supervised cases, cadaveric skills, and OSATS-based assessment.",
    highlights: ["Foundations of arthroscopy and surgical safety", "Comprehensive knee, shoulder, hip, ankle, elbow, and wrist arthroscopy coverage", "Advanced sports medicine and revision-focused training", "Mandatory surgical exposure, logbook, viva, and OSATS evaluation"],
    onlinePrice: 180000,
    month11_1: 210000,
    curriculum: [
      {
        module: "Module 1: Foundations of Arthroscopy",
        topics: [],
        submodules: [
          {
            module: "1.1 Principles of Arthroscopy",
            topics: [
              "History and evolution of arthroscopy",
              "Arthroscopic equipment and instrumentation",
              "Fluid management systems",
              "Optics (0 degree, 30 degree, 70 degree scopes)",
              "Arthroscopic portals and triangulation",
              "Patient positioning principles"
            ]
          },
          {
            module: "1.2 Surgical Environment and Safety",
            topics: [
              "OR setup and ergonomics",
              "Sterilization protocols",
              "Compartment syndrome prevention",
              "Neurovascular safety zones",
              "Complication prevention strategies"
            ]
          }
        ]
      },
      {
        module: "Module 2: Arthroscopic Knee Surgery",
        topics: [],
        submodules: [
          {
            module: "2.1 Diagnostic Knee Arthroscopy",
            topics: [
              "Standard portals",
              "Systematic knee evaluation",
              "Identification of normal vs pathological anatomy"
            ]
          },
          {
            module: "2.2 Meniscal Pathology",
            topics: [
              "Meniscal tear classification",
              "Repair vs meniscectomy decision-making",
              "All-inside, inside-out, outside-in repair techniques",
              "Root tears and ramp lesions"
            ]
          },
          {
            module: "2.3 ACL Reconstruction",
            topics: [
              "Biomechanics of ACL",
              "Graft choices (BTB, hamstring, quadriceps tendon)",
              "Tunnel positioning principles",
              "Single-bundle vs double-bundle",
              "Femoral fixation techniques",
              "Revision ACL principles"
            ]
          },
          {
            module: "2.4 PCL Reconstruction",
            topics: [
              "Indications",
              "Transtibial vs tibial inlay techniques",
              "Complication management"
            ]
          },
          {
            module: "2.5 Cartilage and Chondral Lesions",
            topics: [
              "ICRS grading",
              "Microfracture technique",
              "Osteochondral autograft transfer (OATS)",
              "Autologous chondrocyte implantation (conceptual)"
            ]
          },
          {
            module: "2.6 Multiligament Knee Injuries",
            topics: [
              "Evaluation protocol",
              "Staged vs single-stage reconstruction"
            ]
          }
        ]
      },
      {
        module: "Module 3: Shoulder Arthroscopy",
        topics: [],
        submodules: [
          {
            module: "3.1 Diagnostic Shoulder Arthroscopy",
            topics: [
              "Glenohumeral joint anatomy",
              "Subacromial space evaluation"
            ]
          },
          {
            module: "3.2 Rotator Cuff Repair",
            topics: [
              "Tear classification",
              "Single-row vs double-row repair",
              "Suture anchor techniques",
              "Massive cuff tear management"
            ]
          },
          {
            module: "3.3 Shoulder Instability",
            topics: [
              "Bankart lesion repair",
              "SLAP repair",
              "Hill-Sachs lesion management",
              "Latarjet (conceptual understanding)"
            ]
          },
          {
            module: "3.4 Subacromial Impingement",
            topics: [
              "Bursectomy",
              "Acromioplasty principles"
            ]
          },
          {
            module: "3.5 Frozen Shoulder (Arthroscopic Release)",
            topics: [
              "Capsular release technique"
            ]
          }
        ]
      },
      {
        module: "Module 4: Hip Arthroscopy",
        topics: [
          "Indications and patient selection",
          "Femoroacetabular Impingement (FAI)",
          "Labral repair vs debridement",
          "Portal placement and traction principles",
          "Complications and nerve injury prevention"
        ]
      },
      {
        module: "Module 5: Ankle Arthroscopy",
        topics: [
          "Anterior ankle impingement",
          "Osteochondral defects of talus",
          "Synovectomy",
          "Portal placement safety"
        ]
      },
      {
        module: "Module 6: Elbow and Wrist Arthroscopy (Overview Module)",
        topics: [
          "Elbow loose body removal",
          "Synovectomy",
          "Wrist TFCC injuries",
          "Arthroscopic ganglion excision"
        ]
      },
      {
        module: "Module 7: Advanced Sports Medicine Concepts",
        topics: [
          "Return-to-play protocols",
          "Rehabilitation science",
          "Biologics (PRP, stem cells - evidence-based discussion)",
          "Injury prevention strategies",
          "Performance optimization"
        ]
      },
      {
        module: "Module 8: Complications and Revision Arthroscopy",
        topics: [
          "Infection",
          "Arthrofibrosis",
          "Graft failure",
          "Tunnel malposition",
          "Hardware failure",
          "Management algorithms"
        ]
      },
      {
        module: "Module 9: Research and Evidence-Based Arthroscopy",
        topics: [
          "Reading arthroscopy literature",
          "Outcome scoring systems (IKDC, Lysholm, ASES, Constant score)",
          "Clinical audit methodology",
          "Case documentation standards"
        ]
      },
      {
        module: "Practical Training Component (Mandatory)",
        topics: [],
        submodules: [
          {
            module: "Surgical Exposure Requirements",
            topics: [
              "Minimum 50 diagnostic knee arthroscopies",
              "30 ACL reconstructions (assisted)",
              "15 meniscus repairs",
              "20 rotator cuff repairs (assisted)",
              "10 shoulder instability repairs"
            ]
          },
          {
            module: "Cadaveric Lab Training",
            topics: [
              "Portal placement practice",
              "Tunnel drilling accuracy",
              "Anchor placement"
            ]
          },
          {
            module: "Case Logbook and Assessment",
            topics: [
              "Case documentation",
              "Viva voce",
              "OSATS-based evaluation",
              "Final surgical skill assessment"
            ]
          }
        ]
      }
    ],
    careerOpportunities: [
      "Arthroscopy Specialist",
      "Sports Injury and Arthroscopic Surgery Consultant",
      "Knee and Shoulder Reconstruction-focused Orthopedic Surgeon",
      "Arthroscopy Skills Trainer and Academic Faculty",
      "Minimally Invasive Orthopedic Procedure Practitioner"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-pediatric-echocardiography": {
    name: "Fellowship in Pediatric Echocardiography",
    icon: "🫀",
    duration: "12 Months",
    eligibility: "MBBS / MD / DNB / Equivalent medical qualification",
    description: "Comprehensive fellowship focused on pediatric cardiac ultrasound for neonates, infants, and children.",
    overview: "The Fellowship in Pediatric Echocardiography is a comprehensive, clinically oriented program designed to develop expertise in cardiac ultrasound for neonates, infants, and children. The program focuses on accurate diagnosis and functional assessment of congenital and acquired heart diseases using advanced echocardiographic modalities. This fellowship integrates core principles, advanced imaging techniques, and real-world clinical application, enabling practitioners to confidently perform and interpret pediatric echocardiograms across diverse clinical scenarios. By the end of the program, participants are trained to perform and interpret TTE and TEE, evaluate fetal echocardiography, assess pediatric hemodynamics with Doppler, diagnose congenital and acquired pediatric heart disease, and apply advanced imaging including 3D echocardiography.",
    highlights: ["Structured 12-month blended fellowship", "Clinical interpretation and decision-making", "TTE, TEE, fetal echo and Doppler imaging", "Case-based congenital heart disease focus", "Aligned with real-world pediatric cardiology practice"],
    learningOutcomes: [
      "Perform and interpret Transthoracic Echocardiography (TTE) in pediatric patients",
      "Conduct Transesophageal Echocardiography (TEE) in complex congenital conditions",
      "Evaluate fetal echocardiography for early detection of cardiac anomalies",
      "Analyse cardiac anatomy, physiology, and hemodynamics using Doppler techniques",
      "Diagnose congenital heart diseases including septal defects, valvular abnormalities, and complex congenital malformations",
      "Assess pediatric cardiomyopathies and inflammatory cardiac conditions",
      "Utilise advanced modalities, including 3D echocardiography, for precise imaging"
    ],
    onlinePrice: 185000,
    month11_1: 210000,
    month10_2: 250000,
    month9_3: 290000,
    month6_6: 490000,
    month12Offline: 680000,
    curriculum: [
      { module: "Module 1: Fundamentals of Pediatric Echocardiography", duration: "1.5 Months", topics: ["Ultrasound physics and instrumentation", "Pediatric cardiac anatomy & physiology", "Standard imaging views and protocols"] },
      { module: "Module 2: Core Echocardiographic Techniques", duration: "1.5 Months", topics: ["Transthoracic Echocardiography (TTE)", "M-mode, 2D imaging, and Doppler principles", "Hemodynamic assessment"] },
      { module: "Module 3: Congenital Heart Disease", duration: "2 Months", topics: ["Acyanotic and cyanotic heart diseases", "Segmental approach to diagnosis", "Pre- and post-surgical evaluation"] },
      { module: "Module 4: Advanced Echocardiography", duration: "2 Months", topics: ["Transesophageal Echocardiography (TEE)", "3D echocardiography", "Strain imaging and advanced Doppler"] },
      { module: "Module 5: Fetal Echocardiography", duration: "2 Months", topics: ["Fetal cardiac anatomy and screening protocols", "Early detection of congenital anomalies", "Integration with obstetric care"] },
      { module: "Module 6: Acquired Heart Diseases in Children", duration: "1.5 Months", topics: ["Cardiomyopathies", "Pericardial diseases", "Infective and inflammatory conditions"] },
      { module: "Module 7: Clinical Integration & Case-Based Learning", duration: "1.5 Months", topics: ["Real-life case discussions", "Reporting and documentation", "Clinical decision-making and multidisciplinary coordination"] }
    ],
    careerOpportunities: [
      "Pediatric Echocardiography Specialist",
      "Congenital Heart Disease Consultant",
      "Pediatric Cardiac Imaging Expert",
      "Fetal Echocardiography Specialist",
      "Academic Pediatric Cardiologist"
    ],
    applicationDeadline: "Rolling Admissions"
  },
  "fellowship-in-pediatric-endocrinology": {
    name: "Fellowship in Pediatric Endocrinology",
    icon: "💉",
    duration: "12 Months",
    eligibility: "MBBS / MD / DNB / MS or equivalent qualification",
    description: "Comprehensive 12-month advanced training in hormonal and metabolic disorders in children.",
    overview: "The Fellowship in Pediatric Endocrinology is a comprehensive 12-month advanced training program designed for clinicians seeking specialisation in hormonal and metabolic disorders in children. This program provides in-depth clinical expertise in diagnosing and managing endocrine conditions, including growth disorders, pediatric diabetes, thyroid dysfunction, pubertal abnormalities, and metabolic bone diseases. It integrates evidence-based learning with case-oriented clinical exposure to develop proficiency in managing both common and complex pediatric endocrine conditions. With a strong emphasis on clinical decision-making, long-term patient management, and emerging treatment protocols, this fellowship prepares practitioners to deliver specialised, high-quality care in pediatric endocrinology. Paediatricians and clinicians with an interest in subspecialty practice are preferred.",
    highlights: ["Structured 1-year comprehensive fellowship", "Clinical application with case-based decision-making", "Aligned with global endocrine care standards", "Management of chronic, lifestyle, and genetic endocrine conditions", "Designed for subspecialty pediatric practice"],
    onlinePrice: 160000,
    month11_1: 185000,
    month10_2: 245000,
    month9_3: 285000,
    month6_6: 490000,
    month12Offline: 650000,
    curriculum: [
      { module: "Fundamentals of Pediatric Endocrinology", duration: "1 Month", topics: ["Endocrine physiology and hormonal regulation in children", "Growth and development: normal vs pathological patterns", "Pediatric endocrine evaluation and diagnostic approach"] },
      { module: "Growth & Development Disorders", duration: "1.5 Months", topics: ["Short stature and growth hormone deficiency", "Constitutional growth delay", "Turner syndrome and genetic growth disorders"] },
      { module: "Pediatric Diabetes & Metabolic Disorders", duration: "1.5 Months", topics: ["Type 1 and Type 2 diabetes in children", "Insulin therapy, CGM, and glucose monitoring", "Diabetic emergencies (DKA, hypoglycemia)"] },
      { module: "Thyroid Disorders in Children", duration: "1 Month", topics: ["Congenital hypothyroidism and screening", "Autoimmune thyroid disease", "Thyroid nodules and pediatric thyroid cancers"] },
      { module: "Adrenal & Pituitary Disorders", duration: "1.5 Months", topics: ["Congenital adrenal hyperplasia", "Adrenal insufficiency and Cushing's syndrome", "Pituitary dysfunction and hormone deficiencies"] },
      { module: "Pubertal & Reproductive Endocrinology", duration: "1 Month", topics: ["Precocious puberty and delayed puberty", "Disorders of sexual development (DSD)", "PCOS in adolescents"] },
      { module: "Bone & Mineral Metabolism", duration: "1 Month", topics: ["Rickets and calcium-phosphorus metabolism", "Vitamin D deficiency and osteoporosis", "Genetic bone disorders"] },
      { module: "Pediatric Obesity & Lifestyle Disorders", duration: "1 Month", topics: ["Pathophysiology of obesity", "Metabolic syndrome in children", "Nutritional and behavioural management strategies"] },
      { module: "Clinical Case Discussions & Practical Training", duration: "1.5 Months", topics: ["Case-based learning and treatment planning", "Interpretation of endocrine investigations", "Long-term follow-up strategies"] },
      { module: "Research & Evidence-Based Practice", duration: "1 Month", topics: ["Basics of clinical research in endocrinology", "Guidelines and protocol-based management", "Critical appraisal of literature"] }
    ],
    careerOpportunities: [
      "Pediatric Endocrinology Consultant",
      "Growth & Diabetes Specialist",
      "Pediatric Metabolic Disease Expert",
      "Adolescent Endocrinology Specialist",
      "Academic Pediatric Endocrinologist"
    ],
    applicationDeadline: "Rolling Admissions"
  }
};

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // ── Try CMS first, fall back to static data ──────────────────────────────
  let program: any = programsData[slug] ?? null;
  try {
    const cmsProgram = await getProgramBySlug(slug);
    if (cmsProgram) {
      // Fetch curriculum modules from CMS if available
      let cmsCurriculum: any[] = [];
      try {
        const modules = await getCurriculumModules(cmsProgram.id);
        if (modules && modules.length > 0) {
          cmsCurriculum = modules.map((m) => ({ module: m.title, topics: m.topics }));
        }
      } catch {}

      // Merge: CMS data wins over static, keep static curriculum if CMS has none
      program = {
        ...(program ?? {}),
        name: cmsProgram.name,
        icon: cmsProgram.icon,
        duration: cmsProgram.duration,
        eligibility: cmsProgram.eligibility,
        description: cmsProgram.description,
        overview: cmsProgram.overview || program?.overview || '',
        highlights: cmsProgram.highlights?.length ? cmsProgram.highlights : (program?.highlights ?? []),
        careerOpportunities: cmsProgram.career_opportunities?.length ? cmsProgram.career_opportunities : (program?.careerOpportunities ?? []),
        onlinePrice: cmsProgram.online_price ?? program?.onlinePrice,
        month11_1: cmsProgram.month_11_1 ?? program?.month11_1,
        month10_2: cmsProgram.month_10_2 ?? program?.month10_2,
        month9_3: cmsProgram.month_9_3 ?? program?.month9_3,
        month6_6: cmsProgram.month_6_6 ?? program?.month6_6,
        month12Offline: cmsProgram.month_12_offline ?? program?.month12Offline,
        applicationDeadline: cmsProgram.application_deadline || program?.applicationDeadline || 'Rolling Admissions',
        curriculum: cmsCurriculum.length > 0 ? cmsCurriculum : (program?.curriculum ?? []),
      };
    }
  } catch {
    // DB unavailable — use static data as-is
  }

  if (!program) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container-custom py-20 text-center">
          <div className="text-6xl mb-6">🔍</div>
          <h1 className="text-3xl font-bold text-[#15401E] mb-4">Program Not Found</h1>
          <p className="text-gray-500 mb-8">The program you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/programs" className="inline-flex items-center gap-2 px-6 py-3 bg-[#15401E] text-white font-semibold rounded-xl hover:bg-[#0f2e15] transition-all">
            ← View All Programs
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const programBgImage = getProgramImage(slug);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* ── Hero Banner ── */}
      <section className="relative text-white overflow-hidden" style={{ minHeight: '220px' }}>
        {/* Background image with dark overlay */}
        <div className="absolute inset-0">
          <img
            src={programBgImage}
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#15401E]/85 via-[#15401E]/70 to-[#15401E]/40" />
        </div>

        {/* Content — centered */}
        <div className="relative z-10 container-custom py-8 md:py-10 flex flex-col items-center text-center">

          {/* Breadcrumb */}
          <Link href="/programs"
            className="self-start inline-flex items-center gap-1.5 text-white/50 hover:text-white mb-6 text-xs transition-colors">
            ← All Programs
          </Link>

          {/* Category label */}
          <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Fellowship Program</p>

          {/* Course name — center */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4 max-w-3xl" style={{ color: '#FF6B00' }}>
            {program.name}
          </h1>

          {/* Short description */}
          <p className="text-white/65 text-sm md:text-base max-w-2xl leading-relaxed mb-6">
            {program.description}
          </p>

          {/* Meta chips — centered */}
          <div className="flex flex-wrap justify-center gap-2">
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 border border-white/15 rounded-full text-xs font-medium text-white/80">
              ⏱ {program.duration}
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 border border-white/15 rounded-full text-xs font-medium text-white/80">
              🎓 {program.eligibility}
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-xs font-medium text-emerald-300">
              ✓ Rolling Admissions
            </span>
            {program.onlinePrice && (
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-400/15 border border-amber-400/30 rounded-full text-xs font-semibold text-amber-300">
                From ₹{program.onlinePrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* ── Section Tabs (non-sticky, like Medvarsity) ── */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container-custom overflow-x-auto scrollbar-hide">
          <nav className="flex justify-center gap-0 min-w-max mx-auto">
            {[
              { label: 'Overview', anchor: '#overview' },
              { label: 'Curriculum', anchor: '#curriculum' },
              { label: 'Career Outcomes', anchor: '#career' },
              { label: 'Fees & Admission', anchor: '#fees' },
              { label: 'How to Apply', anchor: '#how-to-apply' },
              { label: 'FAQs', anchor: '#faqs' },
            ].map((tab, i) => (
              <a key={i} href={tab.anchor}
                className="px-5 py-3.5 text-sm font-semibold text-gray-500 hover:text-[#15401E] border-b-2 border-transparent hover:border-[#15401E] transition-all whitespace-nowrap">
                {tab.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* ── Main content ── */}
      <section className="py-8 md:py-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[230px_1fr_300px] gap-6 items-start">

            {/* ── LEFT SIDEBAR ── */}
            <aside className="hidden lg:block space-y-4 sticky top-[76px] self-start max-h-[calc(100vh-84px)] overflow-y-auto scrollbar-hide">

              {/* Quick info card */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-gray-100">
                  <span className="text-2xl">{program.icon}</span>
                  <div>
                    <div className="text-xs font-bold text-[#15401E] leading-tight line-clamp-2">{program.name}</div>
                    <div className="text-xs text-gray-400 mt-0.5">Fellowship Program</div>
                  </div>
                </div>
                <div className="space-y-2.5 text-xs">
                  {[
                    { icon: '⏱', label: 'Duration', value: program.duration },
                    { icon: '🎓', label: 'Eligibility', value: program.eligibility },
                    { icon: '🏥', label: 'Mode', value: 'Online + Clinical' },
                    { icon: '🏆', label: 'Certificate', value: 'Fellowship Cert.' },
                  ].map((r, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span>{r.icon}</span>
                      <div className="flex-1 min-w-0">
                        <span className="text-gray-400">{r.label}: </span>
                        <span className="font-semibold text-[#15401E]">{r.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sections nav */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Jump to Section</p>
                <nav className="space-y-1">
                  {[
                    { label: 'Overview', anchor: '#overview', icon: '📖' },
                    { label: 'Curriculum', anchor: '#curriculum', icon: '📋' },
                    { label: 'Career Outcomes', anchor: '#career', icon: '💼' },
                    { label: 'Fees & Admission', anchor: '#fees', icon: '💰' },
                    { label: 'How to Apply', anchor: '#how-to-apply', icon: '📝' },
                    { label: 'FAQs', anchor: '#faqs', icon: '❓' },
                  ].map((s, i) => (
                    <a key={i} href={s.anchor}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-gray-600 hover:bg-[#f0f9f1] hover:text-[#15401E] transition-colors">
                      <span>{s.icon}</span>
                      {s.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Specialties */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Specialties</p>
                <div className="space-y-1">
                  {[
                    { label: 'Emergency Medicine', slug: 'fellowship-in-emergency-medicine', icon: '🚑' },
                    { label: 'Critical Care', slug: 'fellowship-in-critical-care-medicine', icon: '🏥' },
                    { label: 'Cardiology', slug: 'fellowship-in-interventional-cardiology', icon: '🫀' },
                    { label: 'Diabetes', slug: 'fellowship-in-diabetes-mellitus', icon: '🩺' },
                    { label: 'Gynecology', slug: 'fellowship-in-gynecology-obstetrics', icon: '🤰' },
                    { label: 'Orthopedics', slug: 'fellowship-in-orthopedics', icon: '🦴' },
                    { label: 'Neurosurgery', slug: 'fellowship-in-neurosurgery', icon: '🧠' },
                    { label: 'Urology', slug: 'fellowship-in-urology', icon: '🔬' },
                  ].map((sp, i) => (
                    <Link key={i} href={`/programs/${sp.slug}`}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${slug === sp.slug ? 'bg-[#15401E] text-white' : 'text-gray-600 hover:bg-[#f0f9f1] hover:text-[#15401E]'}`}>
                      <span>{sp.icon}</span>
                      {sp.label}
                    </Link>
                  ))}
                  <Link href="/programs"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-[#15401E] hover:bg-[#f0f9f1] transition-colors mt-1 border border-[#15401E]/20">
                    View All Programs →
                  </Link>
                </div>
              </div>
            </aside>

            {/* ── CENTER MAIN CONTENT ── */}
            <div className="space-y-6">

              {/* Overview */}
              <div id="overview" className="scroll-mt-6 py-6 md:py-8 border-b border-[#F3F4F6]">
                <h2 className="text-xl md:text-2xl font-bold text-[#15401E] mb-4">About This Program</h2>
                <div className="section-prose">
                  <p className="leading-relaxed text-sm md:text-base">{program.overview}</p>
                </div>

                {/* What you'll learn */}
                <div className="mt-6">
                  <h3 className="text-base font-bold text-[#15401E] mb-3">What You&apos;ll Gain</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {program.highlights.map((h: string, i: number) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-[#e8f2ea]/60 rounded-xl border border-[#C6DFC9]/50">
                        <div className="w-5 h-5 bg-[#15401E] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-[#15401E] leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>


              {/* Hospital Rotations */}
              {program.hospitalRotations && (
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                  <h2 className="text-xl md:text-2xl font-bold text-[#15401E] mb-2">Hospital Rotation Schedule</h2>
                  <p className="text-gray-400 text-sm mb-5">
                    Real-world clinical exposure across India&apos;s premier institutions
                  </p>
                  <div className="space-y-3">
                    {program.hospitalRotations.map((r: any, i: number) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-[#15401E]/20 hover:bg-[#f0f9f1]/30 transition-all"
                      >
                        <div className="w-9 h-9 bg-[#15401E] rounded-lg flex items-center justify-center text-white text-sm font-bold shrink-0">
                          {i + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-[#15401E] text-sm">{r.hospital}</div>
                          <div className="text-xs text-gray-400 truncate">{r.focus}</div>
                        </div>
                        <span className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-100 px-3 py-1 rounded-full shrink-0">
                          {r.duration}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Curriculum */}
              <div id="curriculum" className="scroll-mt-6 py-6 md:py-8 border-b border-[#F3F4F6]">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl md:text-2xl font-bold text-[#15401E]">Course Curriculum</h2>
                  <span className="text-xs font-semibold text-[#15401E] bg-[#e8f2ea] px-3 py-1 rounded-full border border-[#C6DFC9]">
                    {program.curriculum.length} Modules
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-6">{program.duration} program · Hybrid delivery</p>
                <CurriculumAccordion curriculum={program.curriculum} />
              </div>

              {/* Exam Pattern */}
              {program.examPattern && (
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                  <h2 className="text-xl md:text-2xl font-bold text-[#15401E] mb-6">Examination & Assessment</h2>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[
                      { label: 'Theory', value: program.examPattern.theory, color: 'bg-[#e8f2ea] text-blue-800' },
                      { label: 'Practical', value: program.examPattern.practical, color: 'bg-amber-50 text-amber-800' },
                      { label: 'Viva Voce', value: program.examPattern.viva, color: 'bg-emerald-50 text-emerald-800' },
                    ].map((e, i) => (
                      <div key={i} className={`text-center p-4 rounded-xl ${e.color}`}>
                        <div className="text-2xl md:text-3xl font-extrabold mb-1">{e.value}</div>
                        <div className="text-xs font-medium opacity-70">{e.label}</div>
                      </div>
                    ))}
                  </div>
                  {program.examPattern.details && (
                    <p className="text-sm text-gray-500 bg-gray-50 rounded-xl p-4 leading-relaxed">
                      {program.examPattern.details}
                    </p>
                  )}
                </div>
              )}

              {/* Procedure Count */}
              {program.procedureCount && (
                <div className="bg-[#15401E] rounded-2xl p-6 md:p-8 text-white">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl shrink-0">🔬</div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Guaranteed Hands-On Experience</h3>
                      <div className="text-2xl font-extrabold text-amber-300 mb-2">{program.procedureCount}</div>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Every fellow performs this minimum number of supervised procedures — ensuring real-world competency, not just theoretical knowledge.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Career Outcomes */}
              <div id="career" className="scroll-mt-6 py-6 md:py-8 border-b border-[#F3F4F6]">
                <h2 className="text-xl md:text-2xl font-bold text-[#15401E] mb-2">Career Opportunities</h2>
                <p className="text-gray-400 text-sm mb-5">Roles our fellows pursue after completing this program</p>
                <ol className="grid sm:grid-cols-2 gap-x-6">
                  {program.careerOpportunities.map((opp: string, i: number) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 py-3 border-b border-[#F3F4F6] last:border-0"
                    >
                      <span className="w-6 h-6 bg-[#e8f2ea] rounded-full flex items-center justify-center text-[#15401E] text-xs font-bold shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-sm text-gray-700">{opp}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Fees Section */}
              <div id="fees" className="scroll-mt-6 py-6 md:py-8 border-b border-[#F3F4F6]">
                <h2 className="text-xl md:text-2xl font-bold text-[#15401E] mb-2">Fees & Admission</h2>
                <p className="text-gray-400 text-sm mb-6">
                  Choose the training mode that fits your schedule
                </p>

                <div className="space-y-3 mb-6">
                  {program.onlinePrice && (
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                      <div>
                        <div className="font-semibold text-gray-800 text-sm">Fully Online</div>
                        <div className="text-xs text-gray-400">12 months · all live sessions recorded</div>
                      </div>
                      <div className="text-lg font-bold text-[#15401E]">
                        ₹{program.onlinePrice.toLocaleString('en-IN')}
                      </div>
                    </div>
                  )}
                  {program.month11_1 && (
                    <div className="flex justify-between items-center p-4 bg-[#e8f2ea] rounded-xl border border-[#C6DFC9] relative">
                      <span className="absolute -top-2.5 left-4 text-xs font-bold bg-[#15401E] text-white px-2.5 py-0.5 rounded-full">
                        Most Popular
                      </span>
                      <div>
                        <div className="font-semibold text-[#15401E] text-sm">11 Online + 1 Clinical Month</div>
                        <div className="text-xs text-gray-400">Online learning + hospital attachment</div>
                      </div>
                      <div className="text-lg font-bold text-[#15401E]">
                        ₹{program.month11_1.toLocaleString('en-IN')}
                      </div>
                    </div>
                  )}
                </div>

                {/* EMI banner */}
                <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-100 rounded-xl p-4 mb-5">
                  <span className="text-2xl">💳</span>
                  <div>
                    <div className="font-semibold text-emerald-800 text-sm">Easy EMI Options Available</div>
                    <div className="text-xs text-emerald-600">0% interest for 6–12 months · Bank loan partnerships</div>
                  </div>
                </div>

                <Link
                  href="/apply"
                  className="block w-full text-center py-4 bg-[#15401E] hover:bg-[#0f2e15] text-white font-bold rounded-xl transition-all text-base"
                >
                  Apply Now →
                </Link>
              </div>

              {/* How to Apply */}
              <div id="how-to-apply" className="py-6 md:py-8 border-b border-[#F3F4F6]">
                <h2 className="text-xl md:text-2xl font-bold text-[#15401E] mb-6">How to Apply</h2>
                <div className="space-y-0">
                  {[
                    { step: '01', title: 'Submit Application', desc: 'Fill out the online application form with your basic details and medical degree information.' },
                    { step: '02', title: 'Eligibility Review', desc: 'Our admissions team reviews your qualifications and contacts you within 48 hours.' },
                    { step: '03', title: 'Counselling Call', desc: 'Speak with a program advisor to choose the right training mode and fee plan.' },
                    { step: '04', title: 'Enroll & Begin', desc: 'Complete payment, receive your login credentials, and start your fellowship journey.' },
                  ].map((item, i, arr) => (
                    <div key={i} className="flex gap-4 relative">
                      <div className="flex flex-col items-center">
                        <div className="w-9 h-9 bg-[#15401E] rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
                          {item.step}
                        </div>
                        {i < arr.length - 1 && <div className="w-0.5 flex-1 bg-gray-200 my-1" />}
                      </div>
                      <div className={`pb-6 ${i === arr.length - 1 ? '' : ''}`}>
                        <div className="font-bold text-[#15401E] text-sm mb-1">{item.title}</div>
                        <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/apply"
                  className="block w-full text-center py-3.5 bg-[#15401E] hover:bg-[#0f2e15] text-white font-bold rounded-xl transition-all mt-2"
                >
                  Start Your Application →
                </Link>
              </div>

              {/* FAQ */}
              <div id="faqs" className="scroll-mt-6 py-6 md:py-8">
                <h2 className="text-xl md:text-2xl font-bold text-[#15401E] mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {[
                    {
                      q: 'Can I study while working full-time?',
                      a: 'Yes — the online modules are self-paced with recorded sessions. Live classes are held on weekends so you can continue working without interruption.',
                    },
                    {
                      q: 'Is the certificate recognised internationally?',
                      a: 'Our fellowship certificates are issued by partner hospitals and accredited institutions, accepted across India, the Gulf, and other regions.',
                    },
                    {
                      q: 'What happens if I need to pause the program?',
                      a: 'We offer a pause facility for up to 3 months. Your access to recorded content remains active during the pause.',
                    },
                    {
                      q: 'Are EMI options available?',
                      a: 'Yes, we offer 0% interest EMI for up to 12 months through our banking partners. You can also opt for bank education loans covering up to 80% of the fee.',
                    },
                    {
                      q: 'Do I get placement assistance?',
                      a: 'All fellows get access to our placement cell, which includes job postings, resume workshops, and referrals to partner hospitals.',
                    },
                  ].map((item, i) => (
                    <details key={i} className="group border border-gray-100 rounded-xl overflow-hidden">
                      <summary className="flex items-center justify-between p-4 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                        <span className="font-semibold text-[#15401E] text-sm pr-4">{item.q}</span>
                        <span className="text-[#15401E] shrink-0 text-lg group-open:rotate-45 transition-transform">+</span>
                      </summary>
                      <div className="px-4 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
                        {item.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>

            </div>

            {/* ── Sidebar ── */}
            <div className="space-y-5 sticky top-[76px] self-start max-h-[calc(100vh-84px)] overflow-y-auto scrollbar-hide">

              {/* Enrollment card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="text-center pb-5 mb-5 border-b border-gray-100">
                  {program.onlinePrice && (
                    <>
                      <div className="text-3xl font-extrabold text-[#15401E]">
                        ₹{program.onlinePrice.toLocaleString('en-IN')}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Starting price · fully online</div>
                    </>
                  )}
                </div>

                <div className="space-y-4 mb-5 text-sm">
                  {[
                    { icon: '📅', label: 'Duration', value: program.duration },
                    { icon: '🎓', label: 'Eligibility', value: program.eligibility },
                    { icon: '🏆', label: 'Certificate', value: 'Fellowship Certificate' },
                    { icon: '🗓️', label: 'Admission', value: program.applicationDeadline, green: true },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-base w-5 text-center">{row.icon}</span>
                      <div className="flex-1">
                        <div className="text-gray-400 text-xs">{row.label}</div>
                        <div className={`font-semibold text-xs leading-tight ${row.green ? 'text-emerald-600' : 'text-[#15401E]'}`}>
                          {row.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/apply"
                  className="block w-full text-center py-3.5 bg-[#15401E] hover:bg-[#0f2e15] text-white font-bold rounded-xl transition-all mb-3"
                >
                  Apply Now
                </Link>
                <Link
                  href="/contact"
                  className="block w-full text-center py-3 border-2 border-[#15401E] text-[#15401E] hover:bg-[#15401E] hover:text-white font-semibold rounded-xl transition-all"
                >
                  Schedule Consultation
                </Link>

                {program.onlinePrice && (
                  <p className="text-center text-xs text-gray-400 mt-3">
                    💳 EMI from ₹{Math.round(program.onlinePrice / 12).toLocaleString('en-IN')}/month
                  </p>
                )}
              </div>

              {/* Why choose */}
              <div className="bg-white rounded-lg p-5 border border-[#E5E7EB]" style={{ borderLeft: '4px solid #15401E' }}>
                <h3 className="font-bold text-sm text-[#15401E] mb-4 uppercase tracking-wide">Why Choose This Program?</h3>
                <ul className="space-y-3">
                  {[
                    'Expert faculty from premier institutions',
                    'Hands-on hospital training',
                    'Internationally recognised certification',
                    'Structured, evidence-based curriculum',
                    'Career support & placement guidance',
                    '24/7 learning platform access',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-[#15401E] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <h3 className="font-bold text-[#15401E] text-sm mb-3 uppercase tracking-wide">Resources</h3>
                <div className="space-y-2">
                  {[
                    { icon: '📄', label: 'View Sample Certificate', href: '/contact' },
                    { icon: '📥', label: 'Download Brochure', href: '/contact' },
                    { icon: '📋', label: 'Curriculum PDF', href: '/contact' },
                  ].map((r, i) => (
                    <Link key={i} href={r.href}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#f0f9f1] transition-colors group">
                      <span className="w-8 h-8 bg-[#e8f2ea] group-hover:bg-white rounded-lg flex items-center justify-center text-base shrink-0">{r.icon}</span>
                      <span className="text-sm text-[#15401E] font-medium">{r.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <h3 className="font-bold text-[#15401E] text-sm mb-1 uppercase tracking-wide">Have Questions?</h3>
                <p className="text-xs text-gray-400 mb-3">Our admissions team is here to help</p>
                <div className="space-y-2.5">
                  <a href="mailto:info@medfellow.in"
                    className="flex items-center gap-3 text-sm text-[#15401E] hover:underline">
                    <span className="w-8 h-8 bg-[#e8f2ea] rounded-lg flex items-center justify-center text-base shrink-0">📧</span>
                    info@medfellow.in
                  </a>
                  <a href="tel:+919985044993"
                    className="flex items-center gap-3 text-sm text-[#15401E] hover:underline">
                    <span className="w-8 h-8 bg-[#e8f2ea] rounded-lg flex items-center justify-center text-base shrink-0">📞</span>
                    +91 99850 44993
                  </a>
                </div>
              </div>

              {/* Recommended Courses */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <h3 className="font-bold text-[#15401E] text-sm mb-4 uppercase tracking-wide">Recommended Courses</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Fellowship in Emergency Medicine', slug: 'fellowship-in-emergency-medicine', icon: '🚑', duration: '12 Months', price: 160000 },
                    { name: 'Fellowship in Critical Care Medicine', slug: 'fellowship-in-critical-care-medicine', icon: '🏥', duration: '12 Months', price: 155000 },
                    { name: 'Fellowship in Interventional Cardiology', slug: 'fellowship-in-interventional-cardiology', icon: '🫀', duration: '12 Months', price: 180000 },
                    { name: 'Fellowship in Diabetes Mellitus', slug: 'fellowship-in-diabetes-mellitus', icon: '🩺', duration: '12 Months', price: 150000 },
                    { name: 'Fellowship in Gynecology & Obstetrics', slug: 'fellowship-in-gynecology-obstetrics', icon: '🤰', duration: '12 Months', price: 145000 },
                  ].filter(r => r.slug !== slug).slice(0, 4).map((rec, i) => (
                    <Link key={i} href={`/programs/${rec.slug}`}
                      className="flex items-start gap-3 p-3 rounded-xl border border-gray-100 hover:border-[#15401E]/20 hover:bg-[#f0f9f1]/30 transition-all group">
                      <div className="w-10 h-10 rounded-xl bg-[#15401E] flex items-center justify-center text-lg shrink-0">
                        {rec.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-[#15401E] leading-tight line-clamp-2 group-hover:underline">{rec.name}</p>
                        <div className="flex items-center justify-between mt-1.5">
                          <span className="text-xs text-gray-400">{rec.duration}</span>
                          <span className="text-xs font-bold text-[#15401E]">₹{(rec.price / 1000).toFixed(0)}K</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link href="/programs"
                  className="flex items-center justify-center gap-1.5 w-full mt-4 py-2.5 rounded-xl text-xs font-semibold text-[#15401E] border border-[#15401E]/20 hover:bg-[#15401E] hover:text-white transition-all">
                  View All Programs →
                </Link>
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
  // Include all static slugs; CMS-only programs are handled at runtime via force-dynamic
  return Object.keys(programsData).map((slug) => ({ slug }));
}

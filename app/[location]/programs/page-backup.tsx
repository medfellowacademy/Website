"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from 'next/image';
import { useMemo, useState, use } from "react";
import { Search, X, Clock, Stethoscope, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

const VALID_LOCATIONS = ["dubai", "uae", "saudi-arabia"];

const LOCATION_META = {
  "dubai": {
    title: "Fellowship Programs in Dubai",
    description: "Advanced medical fellowship programs available in Dubai, UAE. Join world-class training in Dubai's premier hospitals.",
    heroText: "Advance Your Career in Dubai"
  },
  "uae": {
    title: "Fellowship Programs in UAE",
    description: "Comprehensive medical fellowship programs across the United Arab Emirates. Excellence in medical education throughout UAE.",
    heroText: "Advance Your Career in UAE"
  },
  "saudi-arabia": {
    title: "Fellowship Programs in Saudi Arabia",
    description: "Specialized medical fellowship programs in Saudi Arabia. Join cutting-edge medical training in the Kingdom.",
    heroText: "Advance Your Career in Saudi Arabia"
  }
};

export default function LocationProgramsPage({ params }: { params: Promise<{ location: string }> }) {
  const { location } = use(params);
  const locationLower = location.toLowerCase();
  
  // Validate location
  if (!VALID_LOCATIONS.includes(locationLower)) {
    notFound();
  }

  const locationMeta = LOCATION_META[locationLower as keyof typeof LOCATION_META];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const COURSES_PER_PAGE = 9;

  const allPrograms = [
    {
      name: "Fellowship in Emergency Medicine",
      slug: "fellowship-in-emergency-medicine",
      category: "Critical Care & Emergency",
      icon: "🚑",
      duration: "12 Months",
      eligibility: "MBBS",
      description: "Advanced training in emergency care and trauma management",
      highlights: ["ICU Rotations", "Trauma Management", "Toxicology"],
      image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&q=80",
      onlinePrice: 150000,
      month11_1: 170000,
      month10_2: 220000,
      month9_3: 250000,
      month6_6: 350000,
      month12Offline: 440000
    },
    {
      name: "Fellowship in Diabetes Mellitus",
      slug: "fellowship-in-diabetes-mellitus",
      category: "Medical Specialties",
      icon: "🩺",
      duration: "12 Months",
      eligibility: "MD Medicine/DNB",
      description: "Focused training in diabetes care and metabolic disorders",
      highlights: ["Insulin Therapy", "Metabolic Disorders", "Diabetic Complications"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      onlinePrice: 150000,
      month11_1: 170000,
      month10_2: 240000,
      month9_3: 280000,
      month6_6: 450000,
      month12Offline: 570000
    },
    {
      name: "Fellowship in Gynecology & Obstetrics",
      slug: "fellowship-in-gynecology-obstetrics",
      category: "Surgical Specialties",
      icon: "🤰",
      duration: "12 Months",
      eligibility: "MS/MD Obs & Gyn",
      description: "Advanced training in high-risk obstetrics and gynecology",
      highlights: ["High-Risk Pregnancy", "Laparoscopic Surgery", "Fetal Medicine"],
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80",
      onlinePrice: 145000,
      month11_1: 190000,
      month10_2: 230000,
      month9_3: 280000,
      month6_6: 390000,
      month12Offline: 520000
    },
    {
      name: "Fellowship in High-Risk Pregnancy",
      slug: "fellowship-in-high-risk-pregnancy",
      category: "Surgical Specialties",
      icon: "🤰",
      duration: "12 Months",
      eligibility: "MS/MD/DNB Obstetrics & Gynecology",
      description: "One-year structured fellowship in maternal medicine, fetal medicine, and obstetric critical care",
      highlights: ["Maternal Medicine", "Fetal Medicine", "Obstetric Emergencies", "High-Risk Labour Management"],
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80",
      onlinePrice: 180000,
      month11_1: 210000
    },
    {
      name: "Fellowship in Fetal Medicine",
      slug: "fellowship-in-fetal-medicine",
      category: "Surgical Specialties",
      icon: "🧫",
      duration: "12 Months",
      eligibility: "MS/MD/DNB Obstetrics & Gynecology",
      description: "Advanced training in fetal diagnosis, imaging, genetics, and intrauterine interventions",
      highlights: ["Fetal Imaging and Diagnosis", "Prenatal Genetics", "Doppler and Surveillance", "Fetal Therapy and Ethics"],
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80",
      onlinePrice: 160000,
      month11_1: 210000
    },
    {
      name: "Fellowship in Cosmetic Gynecology",
      slug: "fellowship-in-cosmetic-gynecology",
      category: "Reproductive Medicine",
      icon: "👩‍⚕️",
      duration: "12 Months",
      eligibility: "MBBS / MS / MD / DNB / Obstetrics & Gynecology qualification",
      description: "Comprehensive fellowship in cosmetic gynecology covering non-surgical and surgical aesthetic procedures with functional and sexual wellness integration",
      highlights: ["Laser, RF, PRP and injectable techniques", "Labiaplasty, vaginoplasty and perineal reconstruction", "Urogynecology and sexual medicine integration", "Practice setup, legal compliance and aesthetic business"],
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80",
      onlinePrice: 160000,
      month11_1: 195000
    },
    {
      name: "Fellowship in Maxillofacial and Oral Surgery",
      slug: "fellowship-in-maxillofacial-oral-surgery",
      category: "Surgical Specialties",
      icon: "🦷",
      duration: "12 Months",
      eligibility: "BDS / MDS / MBBS / MS / DNB",
      description: "Advanced competency-based training in diagnosis, surgery, and rehabilitation of oral and maxillofacial conditions",
      highlights: ["Maxillofacial Trauma Surgery", "Orthognathic and Reconstructive Surgery", "Implantology and Bone Grafting", "Oral Oncology and TMJ Care"],
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
      onlinePrice: 200000,
      month11_1: 230000
    },
    {
      name: "Fellowship in Oral Implantology and Laser Dentistry",
      slug: "fellowship-in-oral-implantology-laser-dentistry",
      category: "Surgical Specialties",
      icon: "🦷",
      duration: "12 Months",
      eligibility: "BDS / MDS / Equivalent dental qualification",
      description: "Clinically driven one-year fellowship in implant dentistry and laser-assisted procedures",
      highlights: ["Implant Planning and Prosthetic Rehabilitation", "Laser-assisted Soft and Hard Tissue Procedures", "Digital Planning with CBCT and CAD/CAM", "Peri-implant Disease Management"],
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80"
    },
    {
      name: "Fellowship in Urology",
      slug: "fellowship-in-urology",
      category: "Surgical Specialties",
      icon: "🧪",
      duration: "12 Months",
      eligibility: "MBBS / MS / DNB / Equivalent medical qualification",
      description: "Master advanced urological care with clinical precision and surgical expertise through a comprehensive practice-oriented fellowship",
      highlights: ["Comprehensive Medical and Surgical Urology", "Endoscopic, Minimally Invasive, and Laparoscopic Training", "Uro-Oncology and Reconstructive Urology Exposure", "Case-based Clinical Decision-Making"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      onlinePrice: 170000,
      month11_1: 190000
    },
    {
      name: "Fellowship in Psychiatric Medicine",
      slug: "fellowship-in-psychiatric-medicine",
      category: "Medical Specialties",
      icon: "🧠",
      duration: "12 Months",
      eligibility: "MBBS / MD / DNB / Equivalent medical qualification",
      description: "Advanced clinical training in mental health and behavioral sciences with patient-centered psychiatric care",
      highlights: ["Case-based Psychiatric Training", "Emergency and Liaison Psychiatry", "Psychopharmacology and Counseling Skills", "Ethical and Medico-legal Practice"],
      image: "https://images.unsplash.com/photo-1579165466949-3180a3d056d1?w=800&q=80",
      onlinePrice: 150000,
      month11_1: 170000
    },
    {
      name: "Fellowship in Neurosurgery",
      slug: "fellowship-in-neurosurgery",
      category: "Surgical Specialties",
      icon: "🧠",
      duration: "12 Months",
      eligibility: "MBBS / MS / MCh / DNB / Equivalent medical qualification",
      description: "Hybrid one-year fellowship in neurosurgical foundations, emergencies, neurovascular care, spine, and advanced techniques",
      highlights: ["Case-based and skill-based neurosurgical training", "Neurotrauma and emergency procedures", "Neuro-oncology, vascular and spine exposure", "Critical care and advanced neurosurgical concepts"],
      image: "https://images.unsplash.com/photo-1559757175-7f6d7b3b3c35?w=800&q=80"
    },
    {
      name: "Fellowship in Clinical Neurology",
      slug: "fellowship-in-clinical-neurology",
      category: "Medical Specialties",
      icon: "🧠",
      duration: "12 Months",
      eligibility: "MBBS / MD / DNB / Equivalent medical qualification",
      description: "Hybrid one-year fellowship focused on case-based clinical neurology, OPD exposure, and diagnostic skill development",
      highlights: ["Acute Neurology and Emergency Assessment", "Stroke, Epilepsy, and Neurodegeneration", "Neurodiagnostics and Imaging Skills", "Structured Clinical Posting and Logbook"],
      image: "https://images.unsplash.com/photo-1579165466949-3180a3d056d1?w=800&q=80"
    },
    {
      name: "Fellowship in Pediatric Neurology",
      slug: "fellowship-in-pediatric-neurology",
      category: "Medical Specialties",
      icon: "🧠",
      duration: "12 Months",
      eligibility: "MD Pediatrics / DNB Pediatrics / MD Medicine / DNB / Equivalent medical qualification",
      description: "Comprehensive one-year fellowship focused on pediatric neurological disorders, diagnostics, and multidisciplinary care",
      highlights: ["Pediatric Epilepsy and Seizure Management", "Neurodevelopmental and Neuromuscular Care", "Neurodiagnostics and Imaging Interpretation", "Case-based Clinical Mentorship"],
      image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=800&q=80",
      onlinePrice: 180000,
      month11_1: 210000
    },
    {
      name: "Fellowship in Cardiothoracic Surgery",
      slug: "fellowship-in-cardiothoracic-surgery",
      category: "Surgical Specialties",
      icon: "❤️",
      duration: "12 Months",
      eligibility: "MS / MCh / DNB / Equivalent surgical qualification",
      description: "Advanced clinically driven fellowship in surgical management of complex cardiac and thoracic conditions",
      highlights: ["High-intensity operative exposure", "Perioperative critical care integration", "Minimally invasive and robotic orientation", "Multidisciplinary tertiary-care decision making"],
      image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=800&q=80"
    },
    {
      name: "Fellowship in Medical Oncology",
      slug: "fellowship-in-medical-oncology",
      category: "Medical Specialties",
      icon: "🎗️",
      duration: "12 Months",
      eligibility: "MBBS with MD/DNB in General Medicine or equivalent",
      description: "Advanced clinical fellowship in systemic cancer management, precision oncology, and multidisciplinary care",
      highlights: ["Systemic Cancer Therapy Training", "Precision and Personalized Oncology", "Tumor Board and Multidisciplinary Exposure", "Oncologic Emergency and Supportive Care"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      onlinePrice: 180000,
      month11_1: 200000
    },
    {
      name: "Fellowship in Clinical Haematology",
      slug: "fellowship-in-clinical-hematology",
      category: "Medical Specialties",
      icon: "🩸",
      duration: "12 Months",
      eligibility: "MBBS with MD/DNB in General Medicine or equivalent",
      description: "Advanced fellowship in benign and malignant blood disorders with strong diagnostic and hemato-oncology training",
      highlights: ["Hematology Diagnostics and Lab Interpretation", "Bone Marrow and Transplantation Principles", "Targeted, Immunotherapy, and Supportive Hemato-Oncology", "Case-based Learning and Research Orientation"],
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&q=80"
    },
    {
      name: "Fellowship in Head & Neck Oncology",
      slug: "fellowship-in-head-neck-oncology",
      category: "Medical Specialties",
      icon: "🎗️",
      duration: "12 Months",
      eligibility: "MS / DNB / MD / Equivalent relevant qualification",
      description: "Comprehensive clinically driven fellowship in diagnosis, staging, surgery, and multidisciplinary care of head and neck cancers",
      highlights: ["Head and Neck Oncologic Surgery and Reconstruction", "Multidisciplinary Tumor Board Exposure", "Functional Preservation and Rehabilitation", "Evidence-based Patient-centric Oncology Care"],
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80",
      onlinePrice: 180000,
      month11_1: 210000
    },
    {
      name: "Fellowship in Trichology",
      slug: "fellowship-in-trichology",
      category: "Medical Specialties",
      icon: "💇",
      duration: "12 Months",
      eligibility: "MBBS / MD / DNB / Equivalent medical qualification",
      description: "Advanced clinical training in diagnosis and management of hair and scalp disorders with medical and procedural trichology",
      highlights: ["Comprehensive Hair and Scalp Disorder Care", "Procedural and Surgical Hair Restoration", "Diagnostic Trichoscopy and Lab Integration", "Clinic Setup and Practice Growth"],
      image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80",
      onlinePrice: 170000,
      month11_1: 190000
    },
    {
      name: "Fellowship in Radiology",
      slug: "fellowship-in-radiology",
      category: "Medical Specialties",
      icon: "🩻",
      duration: "12 Months",
      eligibility: "MBBS / MD / DNB / Equivalent medical qualification",
      description: "Comprehensive clinically driven fellowship in diagnostic imaging and image-guided interventions",
      highlights: ["Cross-sectional and Emergency Imaging", "Image-guided Procedural Basics", "Structured Reporting and Clinical Integration", "Radiation Safety and Evidence-based Practice"],
      image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=800&q=80",
      onlinePrice: 170000,
      month11_1: 190000
    },
    {
      name: "Fellowship in Interventional Radiology",
      slug: "fellowship-in-interventional-radiology",
      category: "Medical Specialties",
      icon: "🩻",
      duration: "12 Months",
      eligibility: "MBBS / MD / DNB / Equivalent medical qualification",
      description: "Advanced clinically oriented fellowship in image-guided minimally invasive diagnostic and therapeutic procedures",
      highlights: ["Hands-on Image-guided Procedural Training", "Vascular, Non-vascular, and Oncologic Interventions", "Multimodality Guidance: Fluoroscopy, CT, MRI, Ultrasound", "Multidisciplinary and Evidence-based Clinical Integration"],
      image: "https://images.unsplash.com/photo-1576671495195-0a68af0c8d52?w=800&q=80"
    },
    {
      name: "Fellowship in Pediatrics",
      slug: "fellowship-in-pediatrics",
      category: "Medical Specialties",
      icon: "👶",
      duration: "12 Months",
      eligibility: "MD Pediatrics/DNB",
      description: "Comprehensive training in pediatric care and child health management",
      highlights: ["Neonatal Care", "Pediatric Emergencies", "Child Development"],
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
      onlinePrice: 150000,
      month11_1: 180000,
      month10_2: 240000,
      month9_3: 280000,
      month6_6: 470000,
      month12Offline: 580000
    },
    {
      name: "Fellowship in Dermatology",
      slug: "fellowship-in-dermatology",
      category: "Medical Specialties",
      icon: "✨",
      duration: "12 Months",
      eligibility: "MBBS",
      description: "Advanced training in dermatological procedures and cosmetic dermatology",
      highlights: ["Cosmetic Procedures", "Laser Therapy", "Skin Surgery"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      onlinePrice: 160000,
      month11_1: 185000,
      month10_2: 230000,
      month9_3: 250000,
      month6_6: 390000,
      month12Offline: 520000
    },
    {
      name: "Fellowship in Cosmetic and Aesthetic Medicine",
      slug: "fellowship-in-cosmetic-aesthetic-medicine",
      category: "Medical Specialties",
      icon: "💆",
      duration: "12 Months",
      eligibility: "MBBS",
      description: "Comprehensive training in cosmetic medicine, aesthetic procedures, and evidence-based practice",
      highlights: ["Facial Aesthetics", "Injectable Treatments", "Laser & IPL", "Clinical Ethics"],
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
      onlinePrice: 150000,
      month11_1: 180000,
      month10_2: 230000,
      month9_3: 270000,
      month6_6: 390000,
      month12Offline: 520000
    },
    {
      name: "Fellowship in Internal Medicine",
      slug: "fellowship-in-internal-medicine",
      category: "Medical Specialties",
      icon: "⚕️",
      duration: "12 Months",
      eligibility: "MBBS",
      description: "Comprehensive training in adult medicine and clinical decision-making",
      highlights: ["Critical Care", "Clinical Diagnosis", "Patient Management"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
      onlinePrice: 175000,
      month11_1: 185000,
      month10_2: 220000,
      month9_3: 240000,
      month6_6: 350000,
      month12Offline: 450000
    },
    {
      name: "Fellowship in Clinical Cardiology",
      slug: "fellowship-in-clinical-cardiology",
      category: "Medical Specialties",
      icon: "❤️",
      duration: "12 Months",
      eligibility: "MBBS/MD General Medicine",
      description: "Specialized training in cardiovascular disease management and diagnostics",
      highlights: ["ECG Interpretation", "Echo Cardiography", "Cardiac Emergencies"],
      image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=800&q=80",
      onlinePrice: 160000,
      month11_1: 190000,
      month10_2: 240000,
      month9_3: 280000,
      month6_6: 480000,
      month12Offline: 650000
    },
    {
      name: "Fellowship in Critical Care Medicine",
      slug: "fellowship-in-critical-care-medicine",
      category: "Critical Care & Emergency",
      icon: "🏥",
      duration: "12 Months",
      eligibility: "MD/DNB Medicine/Anesthesia",
      description: "Comprehensive training in managing critically ill patients",
      highlights: ["Ventilator Management", "Hemodynamics", "Point-of-Care Ultrasound"],
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
      onlinePrice: 150000,
      month11_1: 180000,
      month10_2: 230000,
      month9_3: 270000,
      month6_6: 450000,
      month12Offline: 590000
    },
    {
      name: "Fellowship in Family Medicine",
      slug: "fellowship-in-family-medicine",
      category: "Medical Specialties",
      icon: "👨‍👩‍👧‍👦",
      duration: "12 Months",
      eligibility: "MBBS",
      description: "Comprehensive training in primary care and family health management",
      highlights: ["Primary Care", "Preventive Medicine", "Community Health"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      onlinePrice: 150000,
      month11_1: 170000,
      month10_2: 220000,
      month9_3: 250000,
      month6_6: 330000,
      month12Offline: 440000
    },
    {
      name: "Fellowship in Rheumatology",
      slug: "fellowship-in-rheumatology",
      category: "Medical Specialties",
      icon: "🩺",
      duration: "12 Months",
      eligibility: "MBBS / MD / DNB / Equivalent medical qualification",
      description: "One-year clinically focused training in rheumatic diseases, immunology, musculoskeletal medicine, and procedural rheumatology",
      highlights: ["Clinical Rheumatology", "Immunology and Autoimmunity", "Musculoskeletal Medicine", "Procedural Skills"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      onlinePrice: 180000,
      month11_1: 200000
    },
    {
      name: "Fellowship in Pain Management",
      slug: "fellowship-in-pain-management",
      category: "Medical Specialties",
      icon: "💉",
      duration: "12 Months",
      eligibility: "MBBS / MD / DNB / Equivalent medical qualification",
      description: "One-year fellowship in pain medicine focused on clinical management, interventional skills, and multidisciplinary care",
      highlights: ["Pain Medicine Foundations", "Interventional Procedures", "Multidisciplinary Care", "Palliative Pain"],
      image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80",
      onlinePrice: 150000,
      month11_1: 170000
    },
    {
      name: "Fellowship in Endocrinology",
      slug: "fellowship-in-endocrinology",
      category: "Medical Specialties",
      icon: "⚕️",
      duration: "12 Months",
      eligibility: "MD Medicine/DNB",
      description: "Comprehensive training in hormone disorders and endocrine management",
      highlights: ["Thyroid Disorders", "Pituitary Disorders", "Bone Health"],
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80",
      onlinePrice: 180000,
      month11_1: 210000,
      month10_2: 240000,
      month9_3: 280000,
      month6_6: 490000,
      month12Offline: 650000
    },
    {
      name: "Fellowship in Orthopaedics",
      slug: "fellowship-in-orthopedics",
      category: "Surgical Specialties",
      icon: "🦴",
      duration: "12 Months",
      eligibility: "MS/MD/DNB Orthopaedics",
      description: "Comprehensive training in orthopedic surgery and trauma",
      highlights: ["Trauma Surgery", "Sports Medicine", "Fracture Management"],
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80",
      onlinePrice: 160000,
      month11_1: 180000,
      month10_2: 240000,
      month9_3: 270000,
      month6_6: 430000,
      month12Offline: 560000
    },
    {
      name: "Fellowship in Spine Surgery",
      slug: "fellowship-in-spine-surgery",
      category: "Surgical Specialties",
      icon: "🦴",
      duration: "12 Months",
      eligibility: "MS/MD/DNB Orthopaedics / Neurosurgery / Equivalent medical qualification",
      description: "One-year modular fellowship in spine surgery covering degenerative disease, trauma, deformity, infection, and minimally invasive techniques",
      highlights: ["Degenerative Spine Disorders", "Spine Trauma", "Deformity and Pediatric Spine", "MISS and Navigation"],
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80"
    },
    {
      name: "Fellowship in General Surgery (1 Year)",
      slug: "fellowship-in-general-surgery-1-year",
      category: "Surgical Specialties",
      icon: "🩺",
      duration: "12 Months",
      eligibility: "MS/DNB General Surgery / Equivalent medical qualification",
      description: "Comprehensive one-year fellowship in core general surgery with perioperative care, operative techniques, and independent surgical decision-making",
      highlights: ["Core General Surgery Foundations", "Trauma, Emergency, and Critical Care Exposure", "Minimal Access and Hernia Surgery Training", "Structured Skills and Procedure-based Learning"],
      image: "https://images.unsplash.com/photo-1516549655669-df76ab6eced4?w=800&q=80",
      onlinePrice: 200000,
      month11_1: 230000
    },
    {
      name: "Fellowship in Minimal Access & Robotic Surgery",
      slug: "fellowship-in-minimal-access-robotic-surgery",
      category: "Surgical Specialties",
      icon: "🤖",
      duration: "12 Months",
      eligibility: "MS/DNB General Surgery",
      description: "One-year fellowship in laparoscopic and robotic surgery with simulation, core procedures, and practice integration",
      highlights: ["Laparoscopy and Robotics Foundations", "Simulation and Core Skills", "Advanced GI and Hernia Surgery", "ERAS and Practice Integration"],
      image: "https://images.unsplash.com/photo-1516549655669-df76ab6eced4?w=800&q=80",
      onlinePrice: 200000,
      month11_1: 230000
    },
    {
      name: "Fellowship in Laparoscopy & Hysteroscopy",
      slug: "fellowship-in-laparoscopy-hysteroscopy",
      category: "Surgical Specialties",
      icon: "🧬",
      duration: "12 Months",
      eligibility: "MS/MD/DNB Obstetrics & Gynecology",
      description: "One-year blended fellowship in diagnostic and operative gynecological endoscopy",
      highlights: ["Diagnostic and Operative Endoscopy", "Advanced Laparoscopic Surgery", "Advanced Hysteroscopy", "Ethics and Practice Setup"],
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80",
      onlinePrice: 180000,
      month11_1: 210000
    },
    {
      name: "Fellowship in Nephrology",
      slug: "fellowship-in-nephrology",
      category: "Medical Specialties",
      icon: "🫘",
      duration: "12 Months",
      eligibility: "MD/DNB General Medicine",
      description: "Specialized training in kidney diseases and dialysis management",
      highlights: ["Dialysis", "Kidney Disorders", "Transplant Medicine"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
      onlinePrice: 180000,
      month11_1: 195000,
      month10_2: 250000,
      month9_3: 290000,
      month6_6: 490000,
      month12Offline: 690000
    },
    {
      name: "Fellowship in Gastroenterology",
      slug: "fellowship-in-gastroenterology",
      category: "Medical Specialties",
      icon: "🔬",
      duration: "12 Months",
      eligibility: "MD/DNB General Medicine",
      description: "Comprehensive training in diagnostic and therapeutic gastroenterology",
      highlights: ["Endoscopy", "Colonoscopy", "ERCP"],
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80",
      onlinePrice: 180000,
      month11_1: 195000,
      month10_2: 240000,
      month9_3: 280000,
      month6_6: 490000,
      month12Offline: 680000
    },
    {
      name: "Fellowship in Reproductive Medicine",
      slug: "fellowship-in-reproductive-medicine",
      category: "Reproductive Medicine",
      icon: "👶",
      duration: "12 Months",
      eligibility: "MD/MS/DNB/DGO",
      description: "Specialized training in infertility and assisted reproductive techniques",
      highlights: ["IVF", "ICSI", "Fertility Preservation"],
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80",
      onlinePrice: 160000,
      month11_1: 210000,
      month10_2: 250000,
      month9_3: 290000,
      month6_6: 490000,
      month12Offline: 690000
    },
    {
      name: "Fellowship in Neonatology",
      slug: "fellowship-in-neonatology",
      category: "Medical Specialties",
      icon: "👶",
      duration: "12 Months",
      eligibility: "MD/DNB Pediatrics",
      description: "Advanced fellowship in neonatal critical care, NICU emergency management, and evidence-based newborn practice",
      highlights: ["NICU-focused Practical Training", "Case-based and Protocol-driven Learning", "Real-world Neonatal Emergency Exposure", "Hands-on Clinical Skills"],
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
      onlinePrice: 190000,
      month11_1: 210000,
      month10_2: 245000,
      month9_3: 285000,
      month6_6: 490000,
      month12Offline: 650000
    },
    {
      name: "Fellowship in Pediatric Echocardiography",
      slug: "fellowship-in-pediatric-echocardiography",
      category: "Interventional & Diagnostic",
      icon: "🫀",
      duration: "12 Months",
      eligibility: "MBBS / MD / DNB / Equivalent medical qualification",
      description: "Comprehensive clinically oriented fellowship in pediatric cardiac ultrasound for neonates, infants, and children",
      highlights: ["Structured 12-month blended fellowship", "TTE, TEE, fetal echo and Doppler exposure", "Case-based congenital heart disease learning", "Clinical interpretation and decision-making focus"],
      image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=800&q=80",
      onlinePrice: 190000,
      month11_1: 210000,
      month10_2: 250000,
      month9_3: 290000,
      month6_6: 490000,
      month12Offline: 680000
    },
    {
      name: "Fellowship in 2D Echocardiography",
      slug: "fellowship-in-2d-echocardiography",
      category: "Interventional & Diagnostic",
      icon: "🫀",
      duration: "12 Months",
      eligibility: "MBBS / MD / DNB",
      description: "Structured training in 2D echocardiography, Doppler studies, simulation, and cardiac diagnosis",
      highlights: ["2D and M-Mode Echo", "Doppler and TEE", "Case-based Diagnosis"],
      image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=800&q=80",
      onlinePrice: 160000,
      month11_1: 190000,
      month10_2: 240000,
      month9_3: 280000,
      month6_6: 480000,
      month12Offline: 650000
    },
    {
      name: "Fellowship in Pediatric Endocrinology",
      slug: "fellowship-in-pediatric-endocrinology",
      category: "Medical Specialties",
      icon: "💉",
      duration: "12 Months",
      eligibility: "MBBS / MD / DNB / MS",
      description: "Comprehensive training in hormonal and metabolic disorders in children with clinical focus",
      highlights: ["Growth & Diabetes Management", "Thyroid & Adrenal Disorders", "Pubertal Abnormalities"],
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
      onlinePrice: 190000,
      month11_1: 210000,
      month10_2: 245000,
      month9_3: 285000,
      month6_6: 490000,
      month12Offline: 650000
    },
    {
      name: "Fellowship in Interventional Cardiology",
      slug: "fellowship-in-interventional-cardiology",
      category: "Interventional & Diagnostic",
      icon: "❤️",
      duration: "24 Months",
      eligibility: "DM/DNB Cardiology",
      description: "Specialized training in coronary and structural heart interventions",
      highlights: ["Angioplasty", "Device Implantation", "Structural Interventions"],
      image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=800&q=80",
      onlinePrice: 220000,
      month11_1: 260000,
      month10_2: 290000,
      month9_3: 330000,
      month6_6: 500000,
      month12Offline: 700000
    },
    {
      name: "Fellowship in Cardiology",
      slug: "fellowship-in-cardiology",
      category: "Medical Specialties",
      icon: "❤️",
      duration: "12 Months",
      eligibility: "MD Medicine/DNB",
      description: "Advanced training in cardiovascular disease management and cardiac diagnostics",
      highlights: ["ECG Interpretation", "Echocardiography", "Cardiac Care"],
      image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=800&q=80",
      onlinePrice: 160000,
      month11_1: 190000,
      month10_2: 240000,
      month9_3: 280000,
      month6_6: 480000,
      month12Offline: 650000
    },
    {
      name: "Fellowship in Arthroscopy",
      slug: "fellowship-in-arthroscopy",
      category: "Surgical Specialties",
      icon: "🦴",
      duration: "12 Months",
      eligibility: "MS/MD/DNB Ortho / Equivalent medical qualification",
      description: "Advanced one-year fellowship in diagnostic and therapeutic arthroscopy with sports medicine integration and hands-on skill development",
      highlights: ["Knee and Shoulder Arthroscopy Mastery", "Hip, Ankle, Elbow and Wrist Arthroscopy Exposure", "Complications and Revision Arthroscopy", "Mandatory Surgical Logbook and OSATS Assessment"],
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80",
      onlinePrice: 180000,
      month11_1: 210000
    },
    {
      name: "Fellowship in Arthroscopy & Arthroplasty",
      slug: "fellowship-in-arthroscopy-and-arthroplasty",
      category: "Surgical Specialties",
      icon: "🦴",
      duration: "12 Months",
      eligibility: "MS/MD/DNB Ortho",
      description: "One-year structured fellowship in arthroscopy, sports medicine, and arthroplasty with integrated practice, revision, and research",
      highlights: ["Arthroscopy and Sports Medicine (Months 1-5)", "Arthroplasty and Joint Replacement (Months 6-10)", "Integrated Practice, Revision, and Research (Months 11-12)"],
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80",
      onlinePrice: 180000,
      month11_1: 210000,
      month10_2: 240000,
      month9_3: 280000,
      month6_6: 490000,
      month12Offline: 610000
    }
  ];

  const filteredPrograms = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return allPrograms.filter((program) => {
      const categoryMatch = selectedCategory === "All" || program.category === selectedCategory;
      const searchMatch =
        !q ||
        program.name.toLowerCase().includes(q) ||
        program.category.toLowerCase().includes(q) ||
        program.description.toLowerCase().includes(q);

      return categoryMatch && searchMatch;
    });
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredPrograms.length / COURSES_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (safeCurrentPage - 1) * COURSES_PER_PAGE;
  const visiblePrograms = filteredPrograms.slice(startIndex, startIndex + COURSES_PER_PAGE);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setCurrentPage(1);
  };

  const categories = [
    { name: "All" },
    { name: "Critical Care & Emergency" },
    { name: "Medical Specialties" },
    { name: "Surgical Specialties" },
    { name: "Interventional & Diagnostic" },
    { name: "Reproductive Medicine" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary to-primary-dark text-white py-12 md:py-20">
        <div className="container-custom text-center">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur rounded-full mb-4">
            <span className="font-semibold">{allPrograms.length} Specialized Programs in {locationLower === "saudi-arabia" ? "Saudi Arabia" : locationLower.toUpperCase()}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4 md:mb-6">{locationMeta.heroText}</h1>
          <p className="text-base md:text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            {locationMeta.description}
          </p>
        </div>
      </section>

      {/* Filter by Category */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-screen-2xl">
          {/* Category tab pills */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((category) => {
              const count = category.name === "All" ? allPrograms.length : allPrograms.filter(p => p.category === category.name).length;
              const isActive = selectedCategory === category.name;
              return (
                <button
                  key={category.name}
                  type="button"
                  onClick={() => handleCategoryClick(category.name)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                    isActive
                      ? "bg-[#2B6CB0] text-white border-[#2B6CB0] shadow-md shadow-blue-500/20"
                      : "bg-white text-gray-700 border-gray-200 hover:border-[#2B6CB0] hover:text-[#2B6CB0]"
                  }`}
                >
                  {category.name}
                  <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* All Programs Grid */}
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-5 md:mb-8">All Fellowship Programs</h2>

            <div className="mb-6 md:mb-8 rounded-2xl border border-primary/10 bg-linear-to-br from-white to-primary/5 p-4 md:p-6 shadow-xs">
              <label htmlFor="program-search" className="block text-sm font-semibold text-primary mb-2">
                Search Programs
              </label>

              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                <input
                  id="program-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  placeholder="Search by course name, specialty, or keyword…"
                  className="w-full rounded-xl border border-gray-200 bg-white pl-11 pr-24 py-3 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-[#2B6CB0]/40 focus:border-[#2B6CB0] transition-all"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => handleSearchChange("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
                {selectedCategory !== "All" && (
                  <>
                    <span className="text-text-secondary">Active specialty:</span>
                    <span className="px-2.5 py-1 rounded-full bg-secondary/10 text-secondary font-semibold border border-secondary/20">
                      {selectedCategory}
                    </span>
                    <button type="button" onClick={() => handleCategoryClick("All")} className="text-primary underline">
                      Reset specialty
                    </button>
                  </>
                )}
              </div>

              <p className="mt-3 text-sm text-text-secondary">
                Showing {filteredPrograms.length === 0 ? 0 : startIndex + 1} to {Math.min(startIndex + COURSES_PER_PAGE, filteredPrograms.length)} of {filteredPrograms.length} programs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visiblePrograms.map((program, index) => (
                <Link 
                  key={index} 
                  href={`/${locationLower}/programs/${program.slug}`}
                  className="card overflow-hidden hover:shadow-2xl hover:border-secondary transition-all group cursor-pointer transform hover:-translate-y-1 flex flex-col"
                >
                  {/* Program Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent" />
                    {/* Icon Badge */}
                    <div className="absolute bottom-4 left-4 w-14 h-14 bg-white/95 rounded-xl flex items-center justify-center text-3xl shadow-lg">
                      {program.icon}
                    </div>
                    <span className="absolute top-4 right-4 px-3 py-1 bg-secondary text-white rounded-full text-xs font-bold shadow-lg">
                      {program.category}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col grow">
                    {/* Program Name */}
                    <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                      {program.name}
                    </h3>

                    {/* Duration & Eligibility */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary/5 text-primary rounded-full text-sm font-medium flex items-center gap-1">
                        <span>⏱️</span> {program.duration}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-text-secondary rounded-full text-sm flex items-center gap-1">
                        <span>📋</span> {program.eligibility}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary mb-4 leading-relaxed line-clamp-2">
                      {program.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6 grow">
                      <div className="flex flex-wrap gap-2">
                        {program.highlights.slice(0, 3).map((highlight, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-accent/10 text-accent rounded border border-accent/20">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                      <span className="text-[#2B6CB0] font-semibold text-sm group-hover:underline">
                        View Full Details
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#2B6CB0] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredPrograms.length === 0 && (
              <div className="mt-6 rounded-xl border border-dashed border-gray-300 bg-white p-6 text-center text-text-secondary">
                No programs found for "{searchQuery}".
              </div>
            )}

            {filteredPrograms.length > 0 && totalPages > 1 && (
              <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                <button
                  onClick={() => goToPage(Math.max(1, safeCurrentPage - 1))}
                  disabled={safeCurrentPage === 1}
                  className="px-3 py-2 rounded-lg border border-gray-300 bg-white text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold border ${
                      page === safeCurrentPage
                        ? "bg-primary text-white border-primary"
                        : "bg-white text-primary border-gray-300"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => goToPage(Math.min(totalPages, safeCurrentPage + 1))}
                  disabled={safeCurrentPage === totalPages}
                  className="px-3 py-2 rounded-lg border border-gray-300 bg-white text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="mt-10 md:mt-16 text-center bg-linear-to-br from-primary to-primary-dark rounded-2xl p-6 md:p-12 text-white">
            <div className="max-w-3xl mx-auto">
              <div className="text-4xl md:text-5xl mb-4 md:mb-6">🎓</div>
              <h3 className="text-xl md:text-3xl font-heading font-bold mb-3 md:mb-4">Ready to Start Your Fellowship Journey?</h3>
              <p className="text-sm md:text-lg mb-6 md:mb-8 opacity-90 leading-relaxed">
                Join hundreds of doctors who have advanced their careers through our world-class fellowship programs. Apply now or schedule a consultation with our admissions team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/apply" className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-accent hover:text-white transition-all text-lg">
                  Apply Now
                </Link>
                <Link href="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-all text-lg">
                  Schedule Consultation
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

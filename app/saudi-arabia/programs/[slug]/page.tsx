"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { use, useState } from "react";
import { ArrowRight, Check, Clock, Award, Star, Sparkles, Users, MapPin, BookOpen, Target } from "lucide-react";
import { motion } from "framer-motion";

interface ProgramPageProps {
  params:
    | {
        slug: string;
      }
    | Promise<{
    slug: string;
      }>;
}

interface CurriculumBlock {
  month: string;
  title: string;
  modules: string[];
}

interface CareerOutcome {
  role: string;
  description: string;
}

interface PricingTier {
  price: string;
  sar: string;
  format: string;
}

interface Pricing {
  onlineFormat: PricingTier;
  hybridFormat: PricingTier;
}

interface ApplicationStep {
  step: number;
  title: string;
  description: string;
}

interface ProgramFaq {
  question: string;
  answer: string;
}

interface ProgramTestimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

interface SaudiProgram {
  title: string;
  name: string;
  icon: string;
  duration: string;
  eligibility: string;
  description: string;
  overview: string;
  demandTag: string;
  demandHeading: string;
  compareHeading: string;
  finalCtaHeading: string;
  secondWeekPlan: string;
  compareRows: [string, string, string][];
  compareTakeaway: string;
  highlights: string[];
  whySaudi: {
    demand: string;
    credentialing: string;
    opportunities: string[];
  };
  curricula: CurriculumBlock[];
  careerOutcomes: CareerOutcome[];
  pricing: Pricing;
  applicationProcess: ApplicationStep[];
  faqs: ProgramFaq[];
  testimonials: ProgramTestimonial[];
}

// Saudi Arabia-specific fellowship data
const saudiProgramsData: Record<string, SaudiProgram> = {
  "fellowship-in-pediatrics": {
    title: "Fellowship in Pediatrics for Doctors in Saudi Arabia",
    name: "Pediatrics Fellowship",
    icon: "🧒",
    duration: "12 Months",
    eligibility: "MD/DNB Pediatrics preferred; MBBS with pediatric experience",
    description: "Build advanced clinical expertise in pediatric care, strengthen your pathway toward consultant-level roles in Saudi Arabia's expanding child healthcare system.",
    overview: "A 12-month structured online Pediatrics fellowship designed for doctors in Saudi Arabia to enhance expertise in neonatal care, pediatric emergencies, and child development while continuing clinical practice. Aligned with SCFHS specialist pathway requirements.",
    demandTag: "RISING PEDIATRIC CARE DEMAND IN SAUDI ARABIA",
    demandHeading: "Why Pediatrics Fellowship is High Demand in Saudi Arabia",
    compareHeading: "MedFellow vs Other Pediatrics Fellowships",
    finalCtaHeading: "Ready to Advance Your Pediatrics Career in Saudi Arabia?",
    secondWeekPlan: "First pediatrics module session",
    compareRows: [
      ["Program Format", "Fully Online + Optional Hybrid", "Mostly Offline/Hybrid"],
      ["Flexibility", "Designed for working doctors", "Often requires time off"],
      ["Curriculum", "Case-based clinical training", "Theory-heavy"],
      ["Clinical Relevance", "Saudi-focused cases", "General/global"],
      ["Duration", "12 months", "1-3 years"],
      ["SCFHS CV Value", "Strong", "Varies"],
      ["Hands-on Exposure", "Optional rotation", "Often mandatory"],
      ["Time Commitment", "8-12 hrs/week", "High/full-time"],
      ["Fees Transparency", "Clear with EMI", "Not always transparent"],
      ["Cost Efficiency", "Affordable", "Higher cost"]
    ],
    compareTakeaway: "Key takeaway: MedFellow is ideal for Saudi doctors who want flexible pediatric specialization without career interruption.",
    highlights: [
      "Monthly module-based learning",
      "Live pediatric case discussions",
      "Recorded sessions for flexibility",
      "Evidence-based treatment protocols",
      "Structured assessments",
      "SCFHS-aligned curriculum"
    ],
    whySaudi: {
      demand: "Saudi Arabia is rapidly expanding its maternal and neonatal care infrastructure, increasing demand for trained pediatricians and neonatologists across the healthcare system.",
      credentialing: "SCFHS requires strong specialty credentials for consultant positions. A structured pediatrics fellowship adds documented specialty training, improving your specialist profile evaluation.",
      opportunities: [
        "MOH (Ministry of Health) hospitals",
        "Private pediatric clinics and hospitals",
        "Specialized pediatric centers",
        "Government medical institutions"
      ]
    },
    curricula: [
      {
        month: "Months 1-3",
        title: "Pediatric Care Foundations",
        modules: [
          "Neonatal care and newborn assessment",
          "Pediatric emergencies and acute care",
          "Child development and growth monitoring",
          "Common childhood infections and management",
          "SCFHS-aligned pediatric standards"
        ]
      },
      {
        month: "Months 4-6",
        title: "Core Clinical Pediatrics",
        modules: [
          "Chronic disease management in children",
          "Nutritional disorders and feeding issues",
          "Immunization and preventive care",
          "Case-based pediatric problem solving",
          "Saudi healthcare system integration"
        ]
      },
      {
        month: "Months 7-9",
        title: "Advanced Pediatric Case Management",
        modules: [
          "Complex pediatric scenarios",
          "Pediatric emergency protocols",
          "Interdisciplinary pediatric care",
          "Evidence-based clinical updates",
          "SCFHS-compliant protocols"
        ]
      },
      {
        month: "Months 10-12",
        title: "Consultant Pathway Readiness",
        modules: [
          "Specialist pediatric positioning",
          "Research methodology in pediatrics",
          "SCFHS specialist certification preparation",
          "Capstone assessment and certification",
          "Career progression strategies"
        ]
      }
    ],
    careerOutcomes: [
      {
        role: "Consultant Pediatrician",
        description: "Move into consultant-track pediatrics roles in MOH and private hospitals"
      },
      {
        role: "Child Specialty Clinics",
        description: "Lead specialized pediatric clinics and child health centers"
      },
      {
        role: "Pediatric Care Leadership",
        description: "Take advanced pediatric and child care responsibilities"
      },
      {
        role: "Private Practice Expansion",
        description: "Expand private practice scope with structured pediatric specialization"
      }
    ],
    pricing: {
      onlineFormat: {
        price: "₹1,50,000 - ₹1,90,000",
        sar: "~SAR 6,750 onwards",
        format: "12 months fully online"
      },
      hybridFormat: {
        price: "₹1,80,000 - ₹2,10,000",
        sar: "~SAR 8,050 - 9,400",
        format: "11 months online + 1 month clinical rotation"
      }
    },
    applicationProcess: [
      {
        step: 1,
        title: "Submit Online Application",
        description: "Fill application with MBBS and MD/DNB certificates"
      },
      {
        step: 2,
        title: "Admission Consultation",
        description: "Schedule a 20-minute consultation with an admissions advisor"
      },
      {
        step: 3,
        title: "Document Submission",
        description: "Upload required documents including qualification and practice credentials"
      },
      {
        step: 4,
        title: "Admission Decision",
        description: "Decision within 72 hours of complete document submission"
      },
      {
        step: 5,
        title: "Enrollment & Onboarding",
        description: "Confirm seat, receive welcome pack, and start date"
      }
    ],
    faqs: [
      {
        question: "Is a Pediatrics fellowship required to become a consultant in Saudi Arabia?",
        answer: "A fellowship is not officially required by SCFHS, but hospitals increasingly prefer candidates with additional specialty credentials. A fellowship strengthens your specialist categorisation and improves chances for consultant-level roles."
      },
      {
        question: "Is an online Pediatrics fellowship valid for Saudi Arabia?",
        answer: "Yes, online fellowships are accepted as supplementary training credentials. They strengthen your profile during SCFHS evaluation and private hospital applications."
      },
      {
        question: "Can I do a Pediatrics fellowship while working in Saudi Arabia?",
        answer: "Yes, the program is designed for working doctors. Continue clinical practice while spending 8-12 hours per week on coursework."
      },
      {
        question: "Which format is better: online or hybrid?",
        answer: "Online is ideal for flexibility. Hybrid is better for hands-on NICU exposure. For most practicing pediatricians, online is sufficient."
      },
      {
        question: "Will a Pediatrics fellowship increase my salary in Saudi Arabia?",
        answer: "Not directly, but it improves eligibility for higher-paying consultant roles and private hospital positions."
      },
      {
        question: "What is the duration of the fellowship?",
        answer: "12 months of structured learning, with optional 1-month clinical rotation in the hybrid format."
      },
      {
        question: "What are high-demand areas in pediatrics in Saudi Arabia?",
        answer: "Neonatology, pediatric emergencies, child development, and infectious diseases are highly in demand."
      },
      {
        question: "Is it worth after MD Pediatrics?",
        answer: "Yes, it helps you stand out in job applications and strengthens your pathway for specialist positions."
      },
      {
        question: "Do I need to travel?",
        answer: "No travel for online format. Hybrid includes optional travel for clinical rotation."
      },
      {
        question: "Who is eligible?",
        answer: "MD/DNB Pediatrics doctors preferred, and MBBS doctors with pediatric experience can also apply."
      },
      {
        question: "How does it help with SCFHS classification?",
        answer: "It adds documented specialty training, improving your overall profile during SCFHS specialist evaluation."
      },
      {
        question: "What are the fees?",
        answer: "Online: INR 1,50,000-1,90,000. Hybrid: INR 1,80,000-2,10,000. EMI options available."
      }
    ],
    testimonials: [
      {
        quote: "The Pediatrics fellowship helped me transition to a consultant role at a major Saudi hospital. The structured curriculum was exactly what I needed.",
        author: "Dr Arjun Menon",
        role: "Consultant Pediatrician, Riyadh",
        rating: 5
      },
      {
        quote: "The program was highly relevant to my Saudi practice. SCFHS recognized the certification immediately.",
        author: "Dr Shalini Rao",
        role: "Pediatrician, Jeddah",
        rating: 5
      }
    ]
  },
  "fellowship-in-endocrinology": {
    title: "Fellowship in Endocrinology for Doctors in Saudi Arabia",
    name: "Endocrinology Fellowship",
    icon: "🧬",
    duration: "12 Months",
    eligibility: "MD Medicine / DNB Medicine / MBBS with relevant experience",
    description: "Build advanced expertise in diabetes, hormonal disorders, and metabolic care while strengthening your pathway toward consultant-level roles in Saudi Arabia.",
    overview: "A 12-month structured online Endocrinology fellowship designed for doctors in Saudi Arabia to upgrade clinical skills in diabetes management, thyroid disorders, and endocrine conditions without interrupting practice. Aligned with SCFHS requirements.",
    demandTag: "RISING DIABETES & ENDOCRINE DISORDERS IN SAUDI ARABIA",
    demandHeading: "Why Endocrinology Fellowship is High Demand in Saudi Arabia",
    compareHeading: "MedFellow vs Other Endocrinology Fellowships",
    finalCtaHeading: "Ready to Advance Your Endocrinology Career in Saudi Arabia?",
    secondWeekPlan: "First endocrinology module session",
    compareRows: [
      ["Program Format", "Fully Online + Optional Hybrid", "Mostly Offline/Hybrid"],
      ["Flexibility", "Designed for working doctors", "Often requires time off"],
      ["Curriculum", "Case-based clinical training", "Theory-heavy"],
      ["Clinical Relevance", "Saudi-focused cases", "General/global"],
      ["Duration", "12 months", "1-3 years"],
      ["SCFHS CV Value", "Strong", "Varies"],
      ["Hands-on Exposure", "Optional rotation", "Often mandatory"],
      ["Time Commitment", "8-12 hrs/week", "High/full-time"],
      ["Fees Transparency", "Clear with EMI", "Not always transparent"],
      ["Cost Efficiency", "Affordable", "Higher cost"]
    ],
    compareTakeaway: "Key takeaway: MedFellow is ideal for Saudi doctors wanting flexible specialization without career interruption.",
    highlights: [
      "Monthly module-based learning",
      "Live endocrinology case discussions",
      "Recorded sessions for flexibility",
      "Evidence-based protocols",
      "Structured assessments",
      "SCFHS-aligned curriculum"
    ],
    whySaudi: {
      demand: "Saudi Arabia has one of the world's highest diabetes prevalence rates, making endocrinology a critical specialty across healthcare systems.",
      credentialing: "SCFHS increasingly requires specialty credentials for consultant progression. A structured endocrinology fellowship strengthens your specialist profile.",
      opportunities: [
        "MOH (Ministry of Health) hospitals",
        "Diabetes and metabolic centers",
        "Private specialty clinics",
        "Government medical institutions"
      ]
    },
    curricula: [
      {
        month: "Months 1-3",
        title: "Endocrinology Foundations",
        modules: [
          "Endocrine system fundamentals",
          "Type 1 and Type 2 diabetes management",
          "Thyroid disorders",
          "Hormonal imbalance",
          "SCFHS-aligned clinical frameworks"
        ]
      },
      {
        month: "Months 4-6",
        title: "Core Clinical Endocrinology",
        modules: [
          "Obesity and metabolic syndrome",
          "Adrenal and pituitary disorders",
          "Insulin therapy and advanced care",
          "Case-based endocrine management",
          "Saudi healthcare system integration"
        ]
      },
      {
        month: "Months 7-9",
        title: "Advanced Endocrinology Case Management",
        modules: [
          "Complex diabetes and multi-morbidity",
          "Thyroid and reproductive endocrinology",
          "Metabolic clinic workflows",
          "Protocol optimization",
          "SCFHS-compliant practices"
        ]
      },
      {
        month: "Months 10-12",
        title: "Consultant Pathway Readiness",
        modules: [
          "Specialist-level case reviews",
          "Research methodology",
          "SCFHS specialist positioning",
          "Capstone assessment",
          "Career progression strategies"
        ]
      }
    ],
    careerOutcomes: [
      {
        role: "Consultant Endocrinologist",
        description: "Move into consultant-track roles in MOH and private hospitals"
      },
      {
        role: "Diabetes Specialist Clinics",
        description: "Lead diabetes-focused specialist clinics"
      },
      {
        role: "Metabolic Disease Management",
        description: "Take advanced endocrine care responsibilities"
      },
      {
        role: "Private Practice Expansion",
        description: "Expand practice scope with structured specialization"
      }
    ],
    pricing: {
      onlineFormat: {
        price: "₹1,50,000 - ₹1,90,000",
        sar: "~SAR 6,750 onwards",
        format: "12 months fully online"
      },
      hybridFormat: {
        price: "₹1,80,000 - ₹2,10,000",
        sar: "~SAR 8,050 - 9,400",
        format: "11 months online + 1 month clinical rotation"
      }
    },
    applicationProcess: [
      {
        step: 1,
        title: "Submit Online Application",
        description: "Fill application with MBBS and MD/DNB certificates"
      },
      {
        step: 2,
        title: "Admission Consultation",
        description: "Schedule consultation with admissions advisor"
      },
      {
        step: 3,
        title: "Document Submission",
        description: "Upload required documents"
      },
      {
        step: 4,
        title: "Admission Decision",
        description: "Decision within 72 hours"
      },
      {
        step: 5,
        title: "Enrollment & Onboarding",
        description: "Confirm seat and receive welcome pack"
      }
    ],
    faqs: [
      {
        question: "Is an Endocrinology fellowship required in Saudi Arabia?",
        answer: "Not mandatory for SCFHS, but strongly preferred for consultant roles due to high diabetes prevalence."
      },
      {
        question: "Is an online fellowship valid?",
        answer: "Yes, accepted as supplementary credential strengthening SCFHS specialist profile."
      },
      {
        question: "Can I do this while working?",
        answer: "Yes, designed for working doctors with 8-12 hours weekly commitment."
      },
      {
        question: "Which format is better?",
        answer: "Online for flexibility, hybrid for hands-on exposure. Online usually sufficient."
      },
      {
        question: "Will it increase salary?",
        answer: "Not directly, but improves eligibility for higher-paying specialist roles."
      },
      {
        question: "What is the duration?",
        answer: "12 months with optional 1-month clinical rotation."
      },
      {
        question: "What are high-demand areas?",
        answer: "Diabetes care, obesity management, thyroid disorders are highly in demand."
      },
      {
        question: "Is it worth after MD Medicine?",
        answer: "Yes, helps you stand out and progress to consultant level."
      },
      {
        question: "Do I need to travel?",
        answer: "No for online format, optional for hybrid."
      },
      {
        question: "Who is eligible?",
        answer: "MD/DNB Medicine doctors preferred, MBBS with experience can apply."
      },
      {
        question: "How does it help SCFHS?",
        answer: "Adds documented specialty training to your evaluation profile."
      },
      {
        question: "What are the fees?",
        answer: "Online: INR 1.5L-1.9L. Hybrid: INR 1.8L-2.1L. EMI available."
      }
    ],
    testimonials: [
      {
        quote: "The endocrinology fellowship transformed my career in Saudi Arabia. SCFHS recognized it immediately.",
        author: "Dr Ramesh Kumar",
        role: "Consultant Endocrinologist, Riyadh",
        rating: 5
      },
      {
        quote: "My diabetes clinic expanded significantly after completing the fellowship certification.",
        author: "Dr Fatima Al-Dosari",
        role: "Endocrinologist, Jeddah",
        rating: 5
      }
    ]
  },
  "fellowship-in-nephrology": {
    title: "Fellowship in Nephrology for Doctors in Saudi Arabia",
    name: "Nephrology Fellowship",
    icon: "🩺",
    duration: "12 Months",
    eligibility: "MD Medicine / DNB Medicine / MBBS with renal care experience",
    description: "Build advanced expertise in kidney diseases, dialysis management, and renal care while strengthening your pathway toward consultant-level roles in Saudi Arabia.",
    overview: "A 12-month structured online Nephrology fellowship designed for doctors in Saudi Arabia to upgrade skills in CKD management, dialysis protocols, and renal emergencies without interrupting practice. SCFHS-aligned.",
    demandTag: "RISING KIDNEY DISEASE BURDEN IN SAUDI ARABIA",
    demandHeading: "Why Nephrology Fellowship is High Demand in Saudi Arabia",
    compareHeading: "MedFellow vs Other Nephrology Fellowships",
    finalCtaHeading: "Ready to Advance Your Nephrology Career in Saudi Arabia?",
    secondWeekPlan: "First nephrology module session",
    compareRows: [
      ["Program Format", "Fully Online + Optional Hybrid", "Mostly Offline/Hybrid"],
      ["Flexibility", "Designed for working doctors", "Often requires time off"],
      ["Curriculum", "Case-based clinical training", "Theory-heavy"],
      ["Clinical Relevance", "Saudi-focused cases", "General/global"],
      ["Duration", "12 months", "1-3 years"],
      ["SCFHS CV Value", "Strong", "Varies"],
      ["Hands-on Exposure", "Optional rotation", "Often mandatory"],
      ["Time Commitment", "8-12 hrs/week", "High/full-time"],
      ["Fees Transparency", "Clear with EMI", "Not always transparent"],
      ["Cost Efficiency", "Affordable", "Higher cost"]
    ],
    compareTakeaway: "Key takeaway: MedFellow is ideal for Saudi doctors wanting flexible nephrology specialization.",
    highlights: [
      "Monthly module-based learning",
      "Live nephrology case discussions",
      "Recorded sessions for flexibility",
      "Evidence-based renal protocols",
      "Structured assessments",
      "SCFHS-aligned curriculum"
    ],
    whySaudi: {
      demand: "Saudi Arabia has elevated CKD prevalence linked to diabetes and hypertension, making nephrology a critical specialty.",
      credentialing: "SCFHS increasingly requires specialty credentials for consultant nephrology roles.",
      opportunities: [
        "MOH (Ministry of Health) hospitals",
        "Dialysis and renal care centers",
        "Private specialty clinics",
        "Government institutions"
      ]
    },
    curricula: [
      {
        month: "Months 1-3",
        title: "Renal Medicine Foundations",
        modules: [
          "CKD staging and progression",
          "Acute kidney injury diagnostics",
          "Electrolyte disorders",
          "Hypertension and renal risk",
          "SCFHS-aligned frameworks"
        ]
      },
      {
        month: "Months 4-6",
        title: "Dialysis and Protocol-Based Care",
        modules: [
          "Hemodialysis workflow",
          "Peritoneal dialysis protocols",
          "Access complications",
          "Dialysis unit safety",
          "Saudi healthcare integration"
        ]
      },
      {
        month: "Months 7-9",
        title: "Advanced Renal Case Management",
        modules: [
          "Complex CKD with comorbidities",
          "Renal emergencies",
          "Interdisciplinary coordination",
          "Evidence-based updates",
          "SCFHS-compliant practices"
        ]
      },
      {
        month: "Months 10-12",
        title: "Consultant Pathway Readiness",
        modules: [
          "Specialist nephrology positioning",
          "Dialysis leadership",
          "SCFHS specialist preparation",
          "Capstone assessment",
          "Career progression"
        ]
      }
    ],
    careerOutcomes: [
      {
        role: "Consultant Nephrologist",
        description: "Transition to consultant-track nephrology roles"
      },
      {
        role: "Dialysis Center Leadership",
        description: "Lead dialysis workflows and quality outcomes"
      },
      {
        role: "Renal Care Specialization",
        description: "Take advanced CKD management responsibilities"
      },
      {
        role: "Private Practice Expansion",
        description: "Expand practice with structured specialization"
      }
    ],
    pricing: {
      onlineFormat: {
        price: "₹1,50,000 - ₹1,90,000",
        sar: "~SAR 6,750 onwards",
        format: "12 months fully online"
      },
      hybridFormat: {
        price: "₹1,80,000 - ₹2,10,000",
        sar: "~SAR 8,050 - 9,400",
        format: "11 months online + 1 month clinical rotation"
      }
    },
    applicationProcess: [
      {
        step: 1,
        title: "Submit Online Application",
        description: "Fill application with credentials"
      },
      {
        step: 2,
        title: "Admission Consultation",
        description: "Schedule consultation call"
      },
      {
        step: 3,
        title: "Document Submission",
        description: "Upload required documents"
      },
      {
        step: 4,
        title: "Admission Decision",
        description: "Decision within 72 hours"
      },
      {
        step: 5,
        title: "Enrollment & Onboarding",
        description: "Confirm seat and receive welcome pack"
      }
    ],
    faqs: [
      {
        question: "Is a Nephrology fellowship required in Saudi Arabia?",
        answer: "Not mandatory but improves chances for nephrology and consultant roles."
      },
      {
        question: "Is an online fellowship valid?",
        answer: "Yes, accepted as supplementary credential for SCFHS evaluation."
      },
      {
        question: "Can I do this while working?",
        answer: "Yes, designed for working doctors with 8-12 hours weekly."
      },
      {
        question: "Which format is better?",
        answer: "Online for flexibility, hybrid for dialysis hands-on exposure."
      },
      {
        question: "Will it help me get a nephrology role?",
        answer: "Yes, strengthens profile for renal care and specialist positions."
      },
      {
        question: "What is the duration?",
        answer: "12 months with optional 1-month clinical rotation."
      },
      {
        question: "What are high-demand areas?",
        answer: "CKD management, dialysis care, and hypertension-related kidney disease."
      },
      {
        question: "Is it worth after MD Medicine?",
        answer: "Yes, helps you specialize and stand out in competitive market."
      },
      {
        question: "Do I need to travel?",
        answer: "No for online, optional for hybrid."
      },
      {
        question: "Who is eligible?",
        answer: "MD/DNB Medicine doctors preferred, MBBS with renal experience can apply."
      },
      {
        question: "How does it help SCFHS?",
        answer: "Adds documented specialty training to evaluation profile."
      },
      {
        question: "What are the fees?",
        answer: "Online: INR 1.5L-1.9L. Hybrid: INR 1.8L-2.1L. EMI available."
      }
    ],
    testimonials: [
      {
        quote: "The nephrology fellowship strengthened my profile significantly for SCFHS consultant classification.",
        author: "Dr Ahmed Hassan",
        role: "Consultant Nephrologist, Riyadh",
        rating: 5
      },
      {
        quote: "My dialysis center expanded services after the fellowship certification.",
        author: "Dr Noor Al-Subaie",
        role: "Nephrologist, Dammam",
        rating: 5
      }
    ]
  },
  "fellowship-in-gastroenterology": {
    title: "Fellowship in Gastroenterology for Doctors in Saudi Arabia",
    name: "Gastroenterology Fellowship",
    icon: "🧪",
    duration: "12 Months",
    eligibility: "MD Medicine / DNB / MBBS with gastroenterology experience",
    description: "Learn modern approaches to digestive disorders with flexible, case-based clinical training aligned to Saudi Arabia's healthcare needs.",
    overview: "A 12-month structured online Gastroenterology fellowship designed for doctors in Saudi Arabia to gain GI, hepatology, and endoscopy expertise without interrupting practice. SCFHS-aligned.",
    demandTag: "GROWING ENDOSCOPY & GI CARE DEMAND IN SAUDI ARABIA",
    demandHeading: "Why Gastroenterology Fellowship is High Demand in Saudi Arabia",
    compareHeading: "MedFellow vs Other Gastroenterology Fellowships",
    finalCtaHeading: "Ready to Advance Your Gastroenterology Career in Saudi Arabia?",
    secondWeekPlan: "First gastroenterology module session",
    compareRows: [
      ["Program Format", "Fully Online + Optional Hybrid", "Mostly Offline/Hybrid"],
      ["Flexibility", "Designed for working doctors", "Often requires time off"],
      ["Curriculum", "Case-based clinical training", "Theory-heavy"],
      ["Clinical Relevance", "Saudi-focused cases", "General/global"],
      ["Duration", "12 months", "1-3 years"],
      ["SCFHS CV Value", "Strong", "Varies"],
      ["Hands-on Exposure", "Optional rotation", "Often mandatory"],
      ["Time Commitment", "8-12 hrs/week", "High/full-time"],
      ["Fees Transparency", "Clear with EMI", "Not always transparent"],
      ["Cost Efficiency", "Affordable", "Higher cost"]
    ],
    compareTakeaway: "Key takeaway: MedFellow is ideal for Saudi doctors wanting flexible GI specialization.",
    highlights: [
      "Monthly module-based learning",
      "Live GI case discussions",
      "Recorded sessions for flexibility",
      "Evidence-based protocols",
      "Structured assessments",
      "Endoscopy basics included"
    ],
    whySaudi: {
      demand: "Growing endoscopy and hepatology demand in Saudi Arabia's tertiary care hospitals.",
      credentialing: "SCFHS increasingly requires specialty credentials for gastroenterology consultant roles.",
      opportunities: [
        "MOH (Ministry of Health) hospitals",
        "Gastroenterology specialty centers",
        "Private specialty clinics",
        "Endoscopy units"
      ]
    },
    curricula: [
      {
        month: "Months 1-3",
        title: "GI Foundations",
        modules: [
          "Diagnostic approach to GI conditions",
          "Common GI complaints",
          "GI problems of the newborn",
          "GERD and peptic ulcer disease",
          "Gastroenteritis management"
        ]
      },
      {
        month: "Months 4-6",
        title: "Core GI Care",
        modules: [
          "Inflammatory bowel disease",
          "Hepatobiliary diseases",
          "Pancreatitis",
          "Appendicitis and bowel obstruction",
          "Celiac disease and food allergy"
        ]
      },
      {
        month: "Months 7-9",
        title: "Advanced GI Case Management",
        modules: [
          "Complex GI scenarios",
          "Endoscopy basics",
          "GI emergency management",
          "Interdisciplinary coordination",
          "Evidence-based updates"
        ]
      },
      {
        month: "Months 10-12",
        title: "Consultant Pathway Readiness",
        modules: [
          "Specialist GI positioning",
          "Endoscopy leadership",
          "SCFHS specialist preparation",
          "Capstone assessment",
          "Career progression"
        ]
      }
    ],
    careerOutcomes: [
      {
        role: "Consultant Gastroenterologist",
        description: "Transition to consultant-track roles"
      },
      {
        role: "Endoscopy Unit Leadership",
        description: "Lead GI endoscopy centers"
      },
      {
        role: "GI Specialization",
        description: "Take advanced GI care responsibilities"
      },
      {
        role: "Private Practice Expansion",
        description: "Expand practice with structured specialization"
      }
    ],
    pricing: {
      onlineFormat: {
        price: "₹1,50,000 - ₹1,90,000",
        sar: "~SAR 6,750 onwards",
        format: "12 months fully online"
      },
      hybridFormat: {
        price: "₹1,80,000 - ₹2,10,000",
        sar: "~SAR 8,050 - 9,400",
        format: "11 months online + 1 month clinical rotation"
      }
    },
    applicationProcess: [
      {
        step: 1,
        title: "Submit Online Application",
        description: "Fill application with credentials"
      },
      {
        step: 2,
        title: "Admission Consultation",
        description: "Schedule consultation call"
      },
      {
        step: 3,
        title: "Document Submission",
        description: "Upload required documents"
      },
      {
        step: 4,
        title: "Admission Decision",
        description: "Decision within 72 hours"
      },
      {
        step: 5,
        title: "Enrollment & Onboarding",
        description: "Confirm seat and receive welcome pack"
      }
    ],
    faqs: [
      {
        question: "Is a Gastroenterology fellowship required in Saudi Arabia?",
        answer: "Not mandatory but improves chances for GI specialist roles."
      },
      {
        question: "Is an online fellowship valid?",
        answer: "Yes, accepted as supplementary credential for SCFHS evaluation."
      },
      {
        question: "Can I do this while working?",
        answer: "Yes, designed for working doctors with 8-12 hours weekly."
      },
      {
        question: "Which format is better?",
        answer: "Online for flexibility, hybrid for endoscopy hands-on exposure."
      },
      {
        question: "Will it help me with GI roles?",
        answer: "Yes, strengthens profile for gastroenterology specialist positions."
      },
      {
        question: "What is the duration?",
        answer: "12 months with optional 1-month clinical rotation."
      },
      {
        question: "What are high-demand areas?",
        answer: "Endoscopy, hepatology, and GI emergency management."
      },
      {
        question: "Is it worth after MD Medicine?",
        answer: "Yes, helps you specialize in high-demand GI field."
      },
      {
        question: "Do I need to travel?",
        answer: "No for online, optional for hybrid."
      },
      {
        question: "Who is eligible?",
        answer: "MD/DNB doctors preferred, MBBS with GI experience can apply."
      },
      {
        question: "How does it help SCFHS?",
        answer: "Adds documented specialty training to evaluation profile."
      },
      {
        question: "What are the fees?",
        answer: "Online: INR 1.5L-1.9L. Hybrid: INR 1.8L-2.1L. EMI available."
      }
    ],
    testimonials: [
      {
        quote: "The gastroenterology fellowship opened doors to endoscopy leadership roles in Riyadh.",
        author: "Dr Khalid Al-Rashid",
        role: "Gastroenterologist, Riyadh",
        rating: 5
      },
      {
        quote: "My private GI clinic expanded significantly after the fellowship.",
        author: "Dr Hana Al-Ghamdi",
        role: "Gastroenterologist, Jeddah",
        rating: 5
      }
    ]
  },
  "fellowship-in-reproductive-medicine": {
    title: "Fellowship in Reproductive Medicine for Doctors in Saudi Arabia",
    name: "Reproductive Medicine Fellowship",
    icon: "🧬",
    duration: "12 Months",
    eligibility: "MD/DNB Obstetrics & Gynecology preferred, MD Medicine with experience",
    description: "Build expertise in IVF and fertility care with training designed for Saudi Arabia's growing reproductive health sector.",
    overview: "A 12-month structured online Reproductive Medicine fellowship designed for doctors in Saudi Arabia to develop skills in fertility, IVF basics, and reproductive health treatments. SCFHS-aligned.",
    demandTag: "EXPANDING FERTILITY CARE SECTOR IN SAUDI ARABIA",
    demandHeading: "Why Reproductive Medicine Fellowship is High Demand in Saudi Arabia",
    compareHeading: "MedFellow vs Other Reproductive Medicine Fellowships",
    finalCtaHeading: "Ready to Advance Your Reproductive Medicine Career in Saudi Arabia?",
    secondWeekPlan: "First reproductive medicine module session",
    compareRows: [
      ["Program Format", "Fully Online + Optional Hybrid", "Mostly Offline/Hybrid"],
      ["Flexibility", "Designed for working doctors", "Often requires time off"],
      ["Curriculum", "Case-based clinical training", "Theory-heavy"],
      ["Clinical Relevance", "Saudi-focused cases", "General/global"],
      ["Duration", "12 months", "1-3 years"],
      ["SCFHS CV Value", "Strong", "Varies"],
      ["Hands-on Exposure", "Optional rotation", "Often mandatory"],
      ["Time Commitment", "8-12 hrs/week", "High/full-time"],
      ["Fees Transparency", "Clear with EMI", "Not always transparent"],
      ["Cost Efficiency", "Affordable", "Higher cost"]
    ],
    compareTakeaway: "Key takeaway: MedFellow is ideal for Saudi doctors wanting flexible fertility specialization.",
    highlights: [
      "Monthly module-based learning",
      "Live fertility case discussions",
      "Recorded sessions for flexibility",
      "IVF basics and protocols",
      "Structured assessments",
      "Saudi-focused curriculum"
    ],
    whySaudi: {
      demand: "Saudi Arabia's fertility care sector is rapidly expanding with growing demand for trained reproductive medicine specialists.",
      credentialing: "SCFHS requires specialty credentials for consultant reproductive medicine roles.",
      opportunities: [
        "MOH (Ministry of Health) fertility centers",
        "Private IVF and fertility clinics",
        "Specialty reproductive health centers",
        "Hospital fertility units"
      ]
    },
    curricula: [
      {
        month: "Months 1-3",
        title: "Reproductive Medicine Foundations",
        modules: [
          "Infertility assessment",
          "Ovulation and menstrual cycle",
          "Male factor infertility",
          "Female factor infertility",
          "IVF basics and protocols"
        ]
      },
      {
        month: "Months 4-6",
        title: "Core Fertility Care",
        modules: [
          "Assisted reproductive techniques",
          "Embryo transfer procedures",
          "Ovarian stimulation protocols",
          "ART success optimization",
          "Patient counseling and support"
        ]
      },
      {
        month: "Months 7-9",
        title: "Advanced Reproductive Cases",
        modules: [
          "Complex infertility scenarios",
          "Recurrent implantation failure",
          "Endometriosis management",
          "PCOS and reproductive health",
          "Evidence-based updates"
        ]
      },
      {
        month: "Months 10-12",
        title: "Consultant Pathway Readiness",
        modules: [
          "Specialist fertility positioning",
          "IVF clinic leadership",
          "SCFHS specialist preparation",
          "Capstone assessment",
          "Career progression"
        ]
      }
    ],
    careerOutcomes: [
      {
        role: "Consultant Reproductive Specialist",
        description: "Transition to consultant-track roles"
      },
      {
        role: "IVF Clinic Leadership",
        description: "Lead fertility and IVF centers"
      },
      {
        role: "Fertility Care Specialization",
        description: "Take advanced reproductive health responsibilities"
      },
      {
        role: "Private Practice Expansion",
        description: "Expand practice with structured specialization"
      }
    ],
    pricing: {
      onlineFormat: {
        price: "₹1,50,000 - ₹1,90,000",
        sar: "~SAR 6,750 onwards",
        format: "12 months fully online"
      },
      hybridFormat: {
        price: "₹1,80,000 - ₹2,10,000",
        sar: "~SAR 8,050 - 9,400",
        format: "11 months online + 1 month clinical rotation"
      }
    },
    applicationProcess: [
      {
        step: 1,
        title: "Submit Online Application",
        description: "Fill application with credentials"
      },
      {
        step: 2,
        title: "Admission Consultation",
        description: "Schedule consultation call"
      },
      {
        step: 3,
        title: "Document Submission",
        description: "Upload required documents"
      },
      {
        step: 4,
        title: "Admission Decision",
        description: "Decision within 72 hours"
      },
      {
        step: 5,
        title: "Enrollment & Onboarding",
        description: "Confirm seat and receive welcome pack"
      }
    ],
    faqs: [
      {
        question: "Is a Reproductive Medicine fellowship required in Saudi Arabia?",
        answer: "Not mandatory but strongly recommended for fertility care roles."
      },
      {
        question: "Is an online fellowship valid?",
        answer: "Yes, accepted as supplementary credential for SCFHS evaluation."
      },
      {
        question: "Can I do this while working?",
        answer: "Yes, designed for working doctors with 8-12 hours weekly."
      },
      {
        question: "Which format is better?",
        answer: "Online for flexibility, hybrid for hands-on lab training."
      },
      {
        question: "Will it help me with fertility roles?",
        answer: "Yes, strengthens profile for IVF and fertility specialist positions."
      },
      {
        question: "What is the duration?",
        answer: "12 months with optional 1-month clinical rotation."
      },
      {
        question: "What are high-demand areas?",
        answer: "IVF, ART, and infertility management are highly in demand."
      },
      {
        question: "Is it worth after MD Obstetrics?",
        answer: "Yes, helps you specialize in fertility care."
      },
      {
        question: "Do I need to travel?",
        answer: "No for online, optional for hybrid."
      },
      {
        question: "Who is eligible?",
        answer: "MD/DNB OBG preferred, MD Medicine with experience can apply."
      },
      {
        question: "How does it help SCFHS?",
        answer: "Adds documented specialty training to evaluation profile."
      },
      {
        question: "What are the fees?",
        answer: "Online: INR 1.5L-1.9L. Hybrid: INR 1.8L-2.1L. EMI available."
      }
    ],
    testimonials: [
      {
        quote: "The reproductive medicine fellowship helped me establish a successful IVF practice in Riyadh.",
        author: "Dr Zainab Al-Otaibi",
        role: "Reproductive Specialist, Riyadh",
        rating: 5
      },
      {
        quote: "The IVF curriculum was comprehensive and directly applicable to my clinic.",
        author: "Dr Samira Khan",
        role: "Fertility Specialist, Jeddah",
        rating: 5
      }
    ]
  },
  "fellowship-in-neonatology": {
    title: "Fellowship in Neonatology for Doctors in Saudi Arabia",
    name: "Neonatology Fellowship",
    icon: "👶",
    duration: "12 Months",
    eligibility: "MD/DNB Pediatrics preferred; MBBS with neonatal experience",
    description: "Develop NICU and newborn care skills with structured training designed for Saudi Arabia's expanding maternal and child healthcare system.",
    overview: "A 12-month structured online Neonatology fellowship designed for doctors in Saudi Arabia to upgrade clinical skills in neonatal intensive care and newborn management. SCFHS-aligned.",
    demandTag: "NICU EXPANSION ACROSS SAUDI ARABIA",
    demandHeading: "Why Neonatology Fellowship is High Demand in Saudi Arabia",
    compareHeading: "MedFellow vs Other Neonatology Fellowships",
    finalCtaHeading: "Ready to Advance Your Neonatology Career in Saudi Arabia?",
    secondWeekPlan: "First neonatology module session",
    compareRows: [
      ["Program Format", "Fully Online + Hybrid", "Mostly Offline"],
      ["Flexibility", "No career break", "Requires time off"],
      ["Curriculum", "Case-based", "Theory-heavy"],
      ["Clinical Relevance", "Saudi-focused", "Generic"],
      ["Duration", "12 months", "1-3 years"],
      ["SCFHS CV Value", "Strong", "Varies"],
      ["Hands-on", "Optional", "Mandatory"],
      ["Time", "8-12 hrs/week", "High/full-time"],
      ["Fees", "Transparent + EMI", "Not always clear"]
    ],
    compareTakeaway: "Key Takeaway: Best for Saudi doctors needing flexible NICU specialization.",
    highlights: [
      "Monthly module-based learning",
      "Live neonatal case discussions",
      "Recorded sessions for flexibility",
      "Evidence-based NICU protocols",
      "Structured assessments",
      "SCFHS-aligned curriculum"
    ],
    whySaudi: {
      demand: "Saudi Arabia is rapidly expanding maternal and neonatal care infrastructure, increasing demand for trained neonatologists.",
      credentialing: "SCFHS requires strong subspecialty credentials for neonatal consultant roles.",
      opportunities: [
        "MOH (Ministry of Health) hospitals",
        "NICU units in private hospitals",
        "Maternity and pediatric centers",
        "Government medical institutions"
      ]
    },
    curricula: [
      {
        month: "Months 1-3",
        title: "Neonatal Care Foundations",
        modules: [
          "Neonatal resuscitation and emergencies",
          "NICU management fundamentals",
          "Preterm and low birth weight care",
          "Neonatal infections and sepsis",
          "Newborn assessment"
        ]
      },
      {
        month: "Months 4-6",
        title: "Critical Care and Stabilization",
        modules: [
          "Ventilation and critical care basics",
          "High-risk newborn care",
          "NICU protocol implementation",
          "Case-based neonatal discussions",
          "Saudi healthcare integration"
        ]
      },
      {
        month: "Months 7-9",
        title: "Advanced Neonatal Case Management",
        modules: [
          "Complex NICU scenarios",
          "Interdisciplinary neonatal workflow",
          "Clinical documentation and quality",
          "Protocol-led emergency management",
          "Evidence-based updates"
        ]
      },
      {
        month: "Months 10-12",
        title: "Consultant Pathway Readiness",
        modules: [
          "Specialist neonatal positioning",
          "Evidence-based newborn care",
          "SCFHS specialist preparation",
          "Capstone assessment",
          "Career progression"
        ]
      }
    ],
    careerOutcomes: [
      {
        role: "Consultant Neonatologist",
        description: "Transition to consultant-track NICU roles"
      },
      {
        role: "NICU Leadership",
        description: "Lead NICU units and neonatal care centers"
      },
      {
        role: "Neonatal Care Specialization",
        description: "Take advanced neonatal responsibilities"
      },
      {
        role: "Private Practice Expansion",
        description: "Expand practice with structured specialization"
      }
    ],
    pricing: {
      onlineFormat: {
        price: "₹1,50,000 - ₹1,90,000",
        sar: "~SAR 6,750 onwards",
        format: "12 months fully online"
      },
      hybridFormat: {
        price: "₹1,80,000 - ₹2,10,000",
        sar: "~SAR 8,050 - 9,400",
        format: "11 months online + 1 month clinical rotation"
      }
    },
    applicationProcess: [
      {
        step: 1,
        title: "Submit Online Application",
        description: "Fill application with credentials"
      },
      {
        step: 2,
        title: "Admission Consultation",
        description: "Schedule consultation call"
      },
      {
        step: 3,
        title: "Document Submission",
        description: "Upload required documents"
      },
      {
        step: 4,
        title: "Admission Decision",
        description: "Decision within 72 hours"
      },
      {
        step: 5,
        title: "Enrollment & Onboarding",
        description: "Confirm seat and receive welcome pack"
      }
    ],
    faqs: [
      {
        question: "Is a Neonatology fellowship required in Saudi Arabia?",
        answer: "Not mandatory but improves chances for NICU consultant roles."
      },
      {
        question: "Is an online fellowship valid?",
        answer: "Yes, accepted as supplementary credential for SCFHS evaluation."
      },
      {
        question: "Can I do this while working?",
        answer: "Yes, designed for working doctors with 8-12 hours weekly."
      },
      {
        question: "Which format is better?",
        answer: "Online for flexibility, hybrid for NICU hands-on exposure."
      },
      {
        question: "Will it help me get a neonatology role?",
        answer: "Yes, strengthens profile for NICU and neonatal specialist positions."
      },
      {
        question: "What is the duration?",
        answer: "12 months with optional 1-month clinical rotation."
      },
      {
        question: "What are high-demand areas?",
        answer: "NICU care, neonatal emergencies, and preterm infant management."
      },
      {
        question: "Is it worth after MD Pediatrics?",
        answer: "Yes, helps you specialize in high-demand neonatology field."
      },
      {
        question: "Do I need to travel?",
        answer: "No for online, optional for hybrid."
      },
      {
        question: "Who is eligible?",
        answer: "MD/DNB Pediatrics preferred, MBBS with neonatal experience can apply."
      },
      {
        question: "How does it help SCFHS?",
        answer: "Adds documented specialty training to evaluation profile."
      },
      {
        question: "What are the fees?",
        answer: "Online: INR 1.5L-1.9L. Hybrid: INR 1.8L-2.1L. EMI available."
      }
    ],
    testimonials: [
      {
        quote: "The neonatology fellowship positioned me for consultant roles in major NICU units.",
        author: "Dr Layla Al-Mansouri",
        role: "Consultant Neonatologist, Riyadh",
        rating: 5
      },
      {
        quote: "The NICU training was comprehensive and directly applicable to my practice.",
        author: "Dr Aisha Al-Rashid",
        role: "Neonatologist, Jeddah",
        rating: 5
      }
    ]
  },
  "fellowship-in-arthroscopy-and-arthroplasty": {
    title: "Fellowship in Arthroscopy & Arthroplasty for Doctors in Saudi Arabia",
    name: "Arthroscopy & Arthroplasty Fellowship",
    icon: "🦴",
    duration: "12 Months",
    eligibility: "MS/DNB Orthopedics preferred; relevant surgical experience",
    description: "Advance joint surgery and sports injury skills with practical orthopedic training designed for Saudi Arabia's growing sports medicine and orthopedic sector.",
    overview: "A 12-month structured online Arthroscopy & Arthroplasty fellowship designed for doctors in Saudi Arabia to upgrade orthopedic skills in joint replacement, arthroscopic procedures, and sports injury management. SCFHS-aligned.",
    demandTag: "GROWING ORTHOPEDIC & SPORTS MEDICINE DEMAND",
    demandHeading: "Why Arthroscopy & Arthroplasty Fellowship is High Demand in Saudi Arabia",
    compareHeading: "MedFellow vs Other Arthroscopy Fellowships",
    finalCtaHeading: "Ready to Advance Your Orthopedic Career in Saudi Arabia?",
    secondWeekPlan: "First arthroscopy module session",
    compareRows: [
      ["Program Format", "Fully Online + Optional Hybrid", "Mostly Offline/Hybrid"],
      ["Flexibility", "Designed for working doctors", "Often requires time off"],
      ["Curriculum", "Case-based clinical training", "Theory-heavy"],
      ["Clinical Relevance", "Saudi-focused cases", "General/global"],
      ["Duration", "12 months", "1-3 years"],
      ["SCFHS CV Value", "Strong", "Varies"],
      ["Hands-on Exposure", "Optional rotation", "Often mandatory"],
      ["Time Commitment", "8-12 hrs/week", "High/full-time"],
      ["Fees Transparency", "Clear with EMI", "Not always transparent"],
      ["Cost Efficiency", "Affordable", "Higher cost"]
    ],
    compareTakeaway: "Key takeaway: MedFellow is ideal for Saudi orthopedic doctors wanting specialization.",
    highlights: [
      "Monthly module-based learning",
      "Live arthroscopy case discussions",
      "Recorded sessions for flexibility",
      "Evidence-based orthopedic protocols",
      "Structured assessments",
      "SCFHS-aligned curriculum"
    ],
    whySaudi: {
      demand: "Saudi Arabia's sports medicine and orthopedic sector is rapidly growing with increasing demand for arthroscopy and joint replacement specialists.",
      credentialing: "SCFHS requires strong orthopedic credentials for consultant joint surgery roles.",
      opportunities: [
        "MOH (Ministry of Health) orthopedic departments",
        "Private orthopedic specialty centers",
        "Sports medicine clinics",
        "Joint replacement centers"
      ]
    },
    curricula: [
      {
        month: "Months 1-3",
        title: "Orthopedic Surgery Foundations",
        modules: [
          "Arthroscopy basics and principles",
          "Joint anatomy and physiology",
          "Diagnostic arthroscopy",
          "Shoulder and knee injuries",
          "Sports injury management"
        ]
      },
      {
        month: "Months 4-6",
        title: "Core Arthroscopy & Joint Care",
        modules: [
          "Arthroscopic repair techniques",
          "Joint replacement principles",
          "Arthroplasty protocols",
          "Prosthetic selection and placement",
          "Post-operative management"
        ]
      },
      {
        month: "Months 7-9",
        title: "Advanced Joint Surgery Cases",
        modules: [
          "Complex joint scenarios",
          "Revision surgeries",
          "Complications management",
          "Sports injury specialization",
          "Evidence-based techniques"
        ]
      },
      {
        month: "Months 10-12",
        title: "Consultant Pathway Readiness",
        modules: [
          "Specialist orthopedic positioning",
          "Joint surgery leadership",
          "SCFHS specialist preparation",
          "Capstone assessment",
          "Career progression"
        ]
      }
    ],
    careerOutcomes: [
      {
        role: "Consultant Orthopedic Surgeon",
        description: "Transition to consultant-track joint surgery roles"
      },
      {
        role: "Joint Surgery Leadership",
        description: "Lead orthopedic and arthroscopy units"
      },
      {
        role: "Sports Medicine Specialization",
        description: "Take advanced sports injury responsibilities"
      },
      {
        role: "Private Practice Expansion",
        description: "Expand practice with specialized joint surgery"
      }
    ],
    pricing: {
      onlineFormat: {
        price: "₹1,50,000 - ₹1,90,000",
        sar: "~SAR 6,750 onwards",
        format: "12 months fully online"
      },
      hybridFormat: {
        price: "₹1,80,000 - ₹2,10,000",
        sar: "~SAR 8,050 - 9,400",
        format: "11 months online + 1 month clinical rotation"
      }
    },
    applicationProcess: [
      {
        step: 1,
        title: "Submit Online Application",
        description: "Fill application with credentials"
      },
      {
        step: 2,
        title: "Admission Consultation",
        description: "Schedule consultation call"
      },
      {
        step: 3,
        title: "Document Submission",
        description: "Upload required documents"
      },
      {
        step: 4,
        title: "Admission Decision",
        description: "Decision within 72 hours"
      },
      {
        step: 5,
        title: "Enrollment & Onboarding",
        description: "Confirm seat and receive welcome pack"
      }
    ],
    faqs: [
      {
        question: "Is an Arthroscopy fellowship required in Saudi Arabia?",
        answer: "Not mandatory but significantly improves orthopedic specialist roles."
      },
      {
        question: "Is an online orthopedic fellowship valid?",
        answer: "Yes, accepted as supplementary credential for SCFHS evaluation."
      },
      {
        question: "Can I do this while working?",
        answer: "Yes, designed for working doctors with 8-12 hours weekly."
      },
      {
        question: "Which format is better?",
        answer: "Online for flexibility, hybrid for surgical hands-on exposure."
      },
      {
        question: "Will this increase my salary?",
        answer: "Not directly, but improves eligibility for higher-paying roles."
      },
      {
        question: "What is the duration?",
        answer: "12 months with optional 1-month clinical rotation."
      },
      {
        question: "What are high-demand areas?",
        answer: "Arthroscopy, sports injuries, and joint replacement procedures."
      },
      {
        question: "Is it worth after MS Orthopedics?",
        answer: "Yes, helps you specialize and stand out in competitive market."
      },
      {
        question: "Do I need to travel?",
        answer: "No for online, optional for hybrid."
      },
      {
        question: "Who is eligible?",
        answer: "MS/DNB Orthopedics preferred, relevant surgical experience beneficial."
      },
      {
        question: "How does it help SCFHS?",
        answer: "Adds documented orthopedic training to evaluation profile."
      },
      {
        question: "What are the fees?",
        answer: "Online: INR 1.5L-1.9L. Hybrid: INR 1.8L-2.1L. EMI available."
      }
    ],
    testimonials: [
      {
        quote: "The arthroscopy fellowship helped me establish leadership in joint surgery at a major Riyadh hospital.",
        author: "Dr Hassan Al-Qahtani",
        role: "Consultant Orthopedic Surgeon, Riyadh",
        rating: 5
      },
      {
        quote: "My sports medicine practice expanded significantly after the fellowship.",
        author: "Dr Fatima Al-Johani",
        role: "Sports Medicine Specialist, Jeddah",
        rating: 5
      }
    ]
  }
};

export default function SaudiProgramDetail(props: ProgramPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const params = "then" in props.params ? use(props.params) : props.params;
  const program = saudiProgramsData[params.slug];

  if (!program) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Program not found</h1>
            <Link href="/saudi-arabia/programs" className="text-blue-600 hover:underline">
              Back to Saudi Arabia Programs
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1B4F72 0%, #2E86C1 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full" style={{ background: '#D6EAF8' }}></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full" style={{ background: '#AED6F1' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 lg:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)' }}
            >
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#52BE80' }}></div>
              <span className="text-sm font-medium text-white">APRIL 2026 INTAKE · SAUDI ARABIA PRIORITY LANE</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 sm:mb-6 leading-tight px-2"
            >
              {(() => {
                const title = program.title;
                const parts = title.split(/(Pediatrics|Endocrinology|Nephrology|Gastroenterology|Reproductive Medicine|Neonatology|Arthroscopy|Saudi Arabia)/);
                return parts.map((part, index) => {
                  if (part === "Pediatrics" || part === "Endocrinology" || part === "Nephrology" || part === "Gastroenterology" || part === "Reproductive Medicine" || part === "Neonatology" || part === "Arthroscopy") {
                    return <span key={index} style={{ color: '#4ade80' }}>{part}</span>;
                  } else if (part === "Saudi Arabia") {
                    return <span key={index} style={{ color: '#60a5fa' }}>{part}</span>;
                  }
                  return <span key={index} style={{ color: 'white' }}>{part}</span>;
                });
              })()}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed px-2"
            >
              {program.overview}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-4"
            >
              <Link href="/apply" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white rounded-lg font-medium hover:opacity-90 transition-all shadow-lg text-lg" style={{ color: '#1B4F72' }}>
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white transition-all text-lg hover:text-[#1B4F72]">
                Schedule Consultation
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/90 px-4"
            >
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" style={{ color: '#52BE80' }} />
                <span>12 Months Online</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" style={{ color: '#52BE80' }} />
                <span>SCFHS-Aligned</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" style={{ color: '#52BE80' }} />
                <span>No Travel Required</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 sm:py-10 md:py-12" style={{ background: '#EAF2FB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-semibold mb-1" style={{ color: '#1B4F72' }}>46+</div>
              <div className="text-xs md:text-sm" style={{ color: '#5D6D7E' }}>Specialty Fellowships</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-semibold mb-1" style={{ color: '#1B4F72' }}>4,200+</div>
              <div className="text-xs md:text-sm" style={{ color: '#5D6D7E' }}>Doctors Trained Globally</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-semibold mb-1" style={{ color: '#1B4F72' }}>22+</div>
              <div className="text-xs md:text-sm" style={{ color: '#5D6D7E' }}>Countries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-semibold mb-1" style={{ color: '#1B4F72' }}>4.8/5</div>
              <div className="text-xs md:text-sm" style={{ color: '#5D6D7E' }}>Rated by Doctors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Specialty Demand in Saudi Arabia */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: '#D6EAF8', color: '#2E86C1' }}>
                <MapPin className="w-4 h-4" />
                {program.demandTag}
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#1B4F72' }}>
                {program.demandHeading}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-8 rounded-2xl" style={{ border: '1px solid #BFC9CA' }}>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: '#1B4F72' }}>Market Growth</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#5D6D7E' }}>
                  {program.whySaudi.demand}
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl" style={{ border: '1px solid #BFC9CA' }}>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: '#1B4F72' }}>Credentialing Advantage</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#5D6D7E' }}>
                  {program.whySaudi.credentialing}
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl" style={{ border: '1px solid #BFC9CA' }}>
              <h3 className="text-xl font-semibold mb-6" style={{ color: '#1B4F72' }}>Career Opportunities in Saudi Arabia</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {program.whySaudi.opportunities.map((opportunity, index) => (
                  <div key={index} className="flex gap-3">
                    <Check className="w-5 h-5 shrink-0" style={{ color: '#52BE80' }} />
                    <span className="text-sm" style={{ color: '#5D6D7E' }}>{opportunity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: '#D6EAF8', color: '#2E86C1' }}>
              <Sparkles className="w-4 h-4" />
              PROGRAM HIGHLIGHTS
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: '#1B4F72' }}>
              What You Will Gain
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {program.highlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-xl p-5" style={{ border: '1px solid #D5DBDB' }}>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#2E86C1' }} />
                  <p className="text-sm leading-relaxed" style={{ color: '#5D6D7E' }}>{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: '#D6EAF8', color: '#2E86C1' }}>
              <BookOpen className="w-4 h-4" />
              12-MONTH CURRICULUM ROADMAP
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: '#1B4F72' }}>
              Structured Learning by Phases
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {program.curricula.map((block, index) => (
              <div key={index} className="bg-white rounded-2xl p-6" style={{ border: '1px solid #D5DBDB' }}>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4" style={{ color: '#2E86C1' }} />
                  <span className="text-sm font-medium" style={{ color: '#2E86C1' }}>{block.month}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#1B4F72' }}>{block.title}</h3>
                <div className="space-y-3">
                  {block.modules.map((module, moduleIndex) => (
                    <div key={moduleIndex} className="flex gap-3">
                      <Check className="w-4 h-4 shrink-0 mt-1" style={{ color: '#52BE80' }} />
                      <p className="text-sm" style={{ color: '#5D6D7E' }}>{module}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-16" style={{ background: '#EAF2FB' }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: 'white', color: '#2E86C1' }}>
              <Target className="w-4 h-4" />
              CAREER OUTCOMES
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: '#1B4F72' }}>
              Where This Fellowship Can Take You
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {program.careerOutcomes.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6" style={{ border: '1px solid #D5DBDB' }}>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#1B4F72' }}>{item.role}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#5D6D7E' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: '#1B4F72' }}>
              Program Fees and Learning Format
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="rounded-2xl p-8 bg-white" style={{ border: '1px solid #D5DBDB' }}>
              <h3 className="text-2xl font-semibold mb-2" style={{ color: '#1B4F72' }}>Online Format</h3>
              <p className="text-sm mb-4" style={{ color: '#5D6D7E' }}>{program.pricing.onlineFormat.format}</p>
              <p className="text-3xl font-semibold mb-2" style={{ color: '#1B4F72' }}>{program.pricing.onlineFormat.price}</p>
              <p className="text-sm" style={{ color: '#2E86C1' }}>{program.pricing.onlineFormat.sar}</p>
            </div>
            <div className="rounded-2xl p-8 text-white" style={{ background: 'linear-gradient(135deg, #1B4F72 0%, #2E86C1 100%)' }}>
              <h3 className="text-2xl font-semibold mb-2">Hybrid Format</h3>
              <p className="text-sm mb-4 text-white/80">{program.pricing.hybridFormat.format}</p>
              <p className="text-3xl font-semibold mb-2">{program.pricing.hybridFormat.price}</p>
              <p className="text-sm text-white/90">{program.pricing.hybridFormat.sar}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: '#1B4F72' }}>
              Application Process
            </h2>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {program.applicationProcess.map((step) => (
              <div key={step.step} className="bg-white rounded-xl p-5" style={{ border: '1px solid #D5DBDB' }}>
                <div className="w-8 h-8 rounded-full mb-3 flex items-center justify-center text-sm font-semibold text-white" style={{ background: '#2E86C1' }}>
                  {step.step}
                </div>
                <h3 className="font-semibold mb-2 text-sm" style={{ color: '#1B4F72' }}>{step.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#5D6D7E' }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: '#1B4F72' }}>
              {program.compareHeading}
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl" style={{ border: '1px solid #D5DBDB' }}>
            <table className="w-full bg-white">
              <thead style={{ background: '#EAF2FB' }}>
                <tr>
                  <th className="p-4 text-left text-sm font-semibold" style={{ color: '#1B4F72' }}>Criteria</th>
                  <th className="p-4 text-left text-sm font-semibold" style={{ color: '#1B4F72' }}>MedFellow</th>
                  <th className="p-4 text-left text-sm font-semibold" style={{ color: '#1B4F72' }}>Typical Alternatives</th>
                </tr>
              </thead>
              <tbody>
                {program.compareRows.map((row, index) => (
                  <tr key={index} style={{ borderTop: '1px solid #ECF0F1' }}>
                    <td className="p-4 text-sm font-medium" style={{ color: '#1B4F72' }}>{row[0]}</td>
                    <td className="p-4 text-sm" style={{ color: '#2E86C1' }}>{row[1]}</td>
                    <td className="p-4 text-sm" style={{ color: '#5D6D7E' }}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-4 text-center" style={{ color: '#5D6D7E' }}>{program.compareTakeaway}</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ background: '#EAF2FB' }}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: 'white', color: '#2E86C1' }}>
              <Users className="w-4 h-4" />
              DOCTOR SUCCESS STORIES
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: '#1B4F72' }}>
              What Doctors Say
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {program.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8" style={{ border: '1px solid #D5DBDB' }}>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <Star key={starIndex} className="w-4 h-4 fill-current" style={{ color: '#F5B041' }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#5D6D7E' }}>
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold" style={{ color: '#1B4F72' }}>{testimonial.author}</p>
                  <p className="text-sm" style={{ color: '#5D6D7E' }}>{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center" style={{ color: '#1B4F72' }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {program.faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium pr-8" style={{ color: '#1B4F72' }}>{faq.question}</span>
                  <ArrowRight
                    className={`w-5 h-5 shrink-0 transition-transform ${openFaq === index ? 'rotate-90' : ''}`}
                    style={{ color: '#2E86C1' }}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-sm leading-relaxed" style={{ color: '#5D6D7E' }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-8">
          <div className="p-12 rounded-3xl text-center text-white" style={{ background: 'linear-gradient(135deg, #1B4F72 0%, #2E86C1 100%)' }}>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              {program.finalCtaHeading}
            </h2>
            <p className="text-lg mb-8">
              Join 4,200+ doctors who have upgraded their careers with MedFellow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply" className="px-8 py-3 bg-white text-[#1B4F72] rounded-lg font-medium hover:opacity-90 transition-all inline-flex items-center justify-center gap-2">
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white transition-all hover:text-[#1B4F72] inline-flex items-center justify-center gap-2">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

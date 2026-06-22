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
  aed: string;
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

interface DubaiProgram {
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
  whyDubai: {
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

// Dubai-specific fellowship data
const dubaiProgramsData: Record<string, DubaiProgram> = {
  "fellowship-in-endocrinology": {
    title: "Fellowship in Endocrinology for Doctors in Dubai",
    name: "Endocrinology Fellowship",
    icon: "🧬",
    duration: "12 Months",
    eligibility: "MD Medicine / DNB Medicine / MBBS with relevant experience",
    description: "Build advanced expertise in diabetes, hormonal disorders, and metabolic care while strengthening your pathway toward consultant-level roles in Dubai.",
    overview: "A 12-month structured online Endocrinology fellowship designed for doctors in Dubai to upgrade clinical skills in diabetes management, thyroid disorders, and endocrine conditions without interrupting practice.",
    demandTag: "RISING DIABETES & HORMONAL DISORDERS IN DUBAI",
    demandHeading: "Why Endocrinology Fellowship is High Demand in Dubai",
    compareHeading: "MedFellow vs Other Endocrinology Fellowships",
    finalCtaHeading: "Ready to Advance Your Endocrinology Career in Dubai?",
    secondWeekPlan: "First endocrinology module session",
    compareRows: [
      ["Program Format", "Fully Online + Optional Hybrid", "Mostly Offline/Hybrid"],
      ["Flexibility", "Designed for working doctors", "Often requires time off"],
      ["Curriculum", "Case-based clinical training", "Theory-heavy"],
      ["Clinical Relevance", "Dubai-focused cases", "General/global"],
      ["Duration", "12 months", "1-3 years"],
      ["DHA CV Value", "Strong", "Varies"],
      ["Hands-on Exposure", "Optional rotation", "Often mandatory"],
      ["Time Commitment", "8-12 hrs/week", "High/full-time"],
      ["Fees Transparency", "Clear with EMI", "Not always transparent"],
      ["Cost Efficiency", "Affordable", "Higher cost"]
    ],
    compareTakeaway: "Key takeaway: MedFellow is ideal for Dubai doctors who want flexible specialization without career interruption.",
    highlights: [
      "Monthly module-based learning",
      "Live endocrinology case discussions",
      "Recorded sessions for flexibility",
      "Evidence-based treatment protocols",
      "Structured assessments"
    ],
    whyDubai: {
      demand: "Dubai has one of the highest diabetes prevalence rates globally, making endocrinology a critical specialty across healthcare systems.",
      credentialing: "With DHA's evolving licensing framework, doctors face increasing pressure to demonstrate structured specialty training for consultant endocrinology progression.",
      opportunities: [
        "DHA-regulated hospitals",
        "Multispecialty private clinics",
        "Diabetes and metabolic care centers",
        "Dubai Healthcare City facilities"
      ]
    },
    curricula: [
      {
        month: "Months 1-3",
        title: "Endocrinology Foundations",
        modules: [
          "Endocrine system fundamentals and diagnostics",
          "Type 1 and Type 2 diabetes management",
          "Thyroid disorders and hormonal imbalance",
          "Clinical decision frameworks in endocrine care"
        ]
      },
      {
        month: "Months 4-6",
        title: "Core Clinical Endocrinology",
        modules: [
          "Obesity and metabolic syndrome",
          "Adrenal and pituitary disorders",
          "Insulin therapy and advanced care protocols",
          "Case-based endocrine emergency management"
        ]
      },
      {
        month: "Months 7-9",
        title: "Advanced Case Management",
        modules: [
          "Complex diabetes and multi-morbidity care",
          "Thyroid and reproductive endocrinology",
          "Metabolic clinic workflows",
          "Evidence-based protocol optimization"
        ]
      },
      {
        month: "Months 10-12",
        title: "Consultant Pathway Readiness",
        modules: [
          "Specialist-level endocrine case reviews",
          "Research methodology in endocrinology",
          "DHA-aligned practice standards",
          "Capstone assessment and consultant positioning"
        ]
      }
    ],
    careerOutcomes: [
      {
        role: "Consultant Endocrinologist",
        description: "Move into consultant-track endocrinology roles in DHA-regulated hospitals"
      },
      {
        role: "Diabetes Specialist Clinics",
        description: "Lead diabetes-focused specialist clinics and chronic care units"
      },
      {
        role: "Metabolic Disease Management Centers",
        description: "Take advanced endocrine and metabolic care responsibilities"
      },
      {
        role: "Private Practice Expansion",
        description: "Expand private practice scope with structured endocrine specialization"
      }
    ],
    pricing: {
      onlineFormat: {
        price: "₹1,50,000 - ₹1,90,000",
        aed: "~AED 6,600 onwards",
        sar: "~SAR 6,750 onwards",
        format: "12 months fully online"
      },
      hybridFormat: {
        price: "₹1,80,000 - ₹2,10,000",
        aed: "~AED 7,900 - 9,200",
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
        question: "Is an Endocrinology fellowship required in Dubai?",
        answer: "No, it is not mandatory for DHA licensing, but it gives you a strong advantage for specialist and consultant-level roles."
      },
      {
        question: "Is an online fellowship valid?",
        answer: "Yes, it is accepted as a supplementary credential that strengthens your DHA application and clinical profile."
      },
      {
        question: "Can I do it while working?",
        answer: "Yes, the program is designed for working doctors and typically requires 8-12 hours per week."
      },
      {
        question: "Which format is better?",
        answer: "Online is ideal for flexibility, while hybrid is better if you want optional hands-on clinical exposure."
      },
      {
        question: "Will it increase salary?",
        answer: "Not directly, but it improves eligibility for higher roles, which can lead to better compensation."
      },
      {
        question: "What is the duration?",
        answer: "The fellowship runs for 12 months, with an optional 1-month clinical rotation in the hybrid pathway."
      },
      {
        question: "What are high-demand areas in endocrinology?",
        answer: "Diabetes care, obesity management, thyroid disorders, and endocrine-metabolic conditions are highly in demand in Dubai."
      },
      {
        question: "Is it worth after MD Medicine?",
        answer: "Yes, it helps you stand out and strengthens your pathway for specialist endocrinology opportunities in Dubai."
      },
      {
        question: "Do I need to travel?",
        answer: "No travel is needed for the online program; hybrid includes optional travel for the clinical rotation."
      },
      {
        question: "Who is eligible?",
        answer: "MD/DNB Medicine doctors are preferred, and MBBS doctors with relevant experience in diabetes and chronic care may also apply."
      },
      {
        question: "How does it help DHA classification?",
        answer: "It adds structured specialty training and continuous professional development, improving your overall DHA specialist evaluation profile."
      },
      {
        question: "What are the fees?",
        answer: "Fees range from INR 1.5L to 2.1L based on online or hybrid format, with EMI options available."
      }
    ],
    testimonials: [
      {
        quote: "The endocrinology fellowship helped me manage diabetic patients more effectively in my Dubai clinic.",
        author: "General Physician",
        role: "Dubai",
        rating: 5
      },
      {
        quote: "The structured training improved my DHA specialist profile significantly.",
        author: "Internal Medicine Specialist",
        role: "Dubai",
        rating: 5
      }
    ]
  },
  "fellowship-in-nephrology": {
    title: "Fellowship in Nephrology for Doctors in Dubai",
    name: "Nephrology Fellowship",
    icon: "🩺",
    duration: "12 Months",
    eligibility: "MD Medicine / DNB Medicine / MBBS with renal care experience",
    description: "Build advanced expertise in kidney diseases, dialysis management, and renal care while strengthening your pathway toward consultant-level roles in Dubai.",
    overview: "A 12-month structured online Nephrology fellowship designed for doctors in Dubai to upgrade skills in CKD management, dialysis protocols, and renal emergencies without interrupting practice.",
    demandTag: "RISING KIDNEY DISEASE BURDEN IN DUBAI",
    demandHeading: "Why Nephrology Fellowship is High Demand in Dubai",
    compareHeading: "MedFellow vs Other Nephrology Fellowships",
    finalCtaHeading: "Ready to Advance Your Nephrology Career in Dubai?",
    secondWeekPlan: "First nephrology module session",
    compareRows: [
      ["Program Format", "Fully Online + Optional Hybrid", "Mostly Offline/Hybrid"],
      ["Flexibility", "Designed for working doctors", "Often requires time off"],
      ["Curriculum", "Case-based clinical training", "Theory-heavy"],
      ["Clinical Relevance", "Dubai-focused cases", "General/global"],
      ["Duration", "12 months", "1-3 years"],
      ["DHA CV Value", "Strong", "Varies"],
      ["Hands-on Exposure", "Optional rotation", "Often mandatory"],
      ["Time Commitment", "8-12 hrs/week", "High/full-time"],
      ["Fees Transparency", "Clear with EMI", "Not always transparent"],
      ["Cost Efficiency", "Affordable", "Higher cost"]
    ],
    compareTakeaway: "Key takeaway: MedFellow is ideal for doctors who want specialization without leaving their Dubai practice.",
    highlights: [
      "Monthly module-based learning",
      "Live nephrology case discussions",
      "Recorded sessions for flexibility",
      "Evidence-based renal protocols",
      "Structured assessments"
    ],
    whyDubai: {
      demand: "Dubai is seeing a steady rise in chronic kidney disease, largely linked to diabetes and hypertension.",
      credentialing: "DHA's evolving specialist framework requires stronger proof of subspecialty training, and MBBS + MD alone may not be enough for consultant nephrology progression.",
      opportunities: [
        "DHA-regulated hospitals",
        "Dialysis and renal care centers",
        "Multispecialty private clinics",
        "Tertiary care hospitals"
      ]
    },
    curricula: [
      {
        month: "Months 1-3",
        title: "Renal Medicine Foundations",
        modules: [
          "CKD staging and progression frameworks",
          "Acute kidney injury (AKI) diagnostics",
          "Electrolyte disorders and correction protocols",
          "Hypertension and renal risk profiling"
        ]
      },
      {
        month: "Months 4-6",
        title: "Dialysis and Protocol-Based Care",
        modules: [
          "Hemodialysis workflow and quality metrics",
          "Peritoneal dialysis protocols",
          "Access complications and troubleshooting",
          "Dialysis unit safety and infection control"
        ]
      },
      {
        month: "Months 7-9",
        title: "Advanced Renal Case Management",
        modules: [
          "Complex CKD with diabetes and hypertension",
          "Renal emergencies in critical care",
          "Interdisciplinary nephrology coordination",
          "Evidence-based updates in renal medicine"
        ]
      },
      {
        month: "Months 10-12",
        title: "Consultant Pathway Readiness",
        modules: [
          "Specialist nephrology case reviews",
          "Dialysis leadership and unit governance",
          "DHA-aligned specialist positioning",
          "Capstone assessment and profile strengthening"
        ]
      }
    ],
    careerOutcomes: [
      {
        role: "Consultant Nephrologist Roles",
        description: "Transition into consultant-track nephrology roles in Dubai hospitals"
      },
      {
        role: "Dialysis Center Leadership",
        description: "Lead dialysis workflows, protocols, and quality outcomes"
      },
      {
        role: "Renal Care Specialization",
        description: "Take advanced responsibilities in CKD and renal disease management"
      },
      {
        role: "Private Practice Expansion",
        description: "Expand practice scope with structured nephrology specialization"
      }
    ],
    pricing: {
      onlineFormat: {
        price: "₹1,50,000 - ₹1,90,000",
        aed: "~AED 6,600 onwards",
        sar: "~SAR 6,750 onwards",
        format: "12 months fully online"
      },
      hybridFormat: {
        price: "₹1,80,000 - ₹2,10,000",
        aed: "~AED 7,900 - 9,200",
        sar: "~SAR 8,050 - 9,400",
        format: "11 months online + 1 month clinical rotation"
      }
    },
    applicationProcess: [
      {
        step: 1,
        title: "Submit Online Application",
        description: "Submit your online application with qualification details"
      },
      {
        step: 2,
        title: "Schedule Consultation",
        description: "Book a consultation call with an admissions advisor"
      },
      {
        step: 3,
        title: "Upload Documents",
        description: "Upload required documents and supporting credentials"
      },
      {
        step: 4,
        title: "Receive Decision",
        description: "Get your admission decision within 72 hours"
      },
      {
        step: 5,
        title: "Confirm Enrolment",
        description: "Confirm your enrolment and receive onboarding details"
      }
    ],
    faqs: [
      {
        question: "Is a Nephrology fellowship required in Dubai?",
        answer: "No, it's not mandatory for DHA licensing, but it improves your chances for nephrology and consultant-level roles."
      },
      {
        question: "Is an online Nephrology fellowship valid in Dubai?",
        answer: "Yes, it is accepted as a supplementary credential and strengthens your DHA specialist application."
      },
      {
        question: "Can I do this fellowship while working in Dubai?",
        answer: "Yes, the program is designed for working doctors and typically requires 8-12 hours per week."
      },
      {
        question: "Which format is better: online or hybrid?",
        answer: "Online is best for flexibility, while hybrid is recommended for hands-on dialysis and clinical exposure."
      },
      {
        question: "Will this fellowship help me get a nephrology role?",
        answer: "Yes, it strengthens your profile for renal care, dialysis units, and specialist positions in hospitals."
      },
      {
        question: "What is the duration of the fellowship?",
        answer: "The program runs for 12 months, with an optional 1-month clinical rotation in the hybrid format."
      },
      {
        question: "What are the high-demand areas in nephrology in Dubai?",
        answer: "CKD management, dialysis care, and hypertension-related kidney diseases are highly in demand."
      },
      {
        question: "Is this fellowship worth it after MD Medicine?",
        answer: "Yes, it helps you specialize in renal care and stand out in Dubai's competitive job market."
      },
      {
        question: "Do I need to travel for this fellowship?",
        answer: "No travel is required for the online format; travel is optional only for the hybrid pathway."
      },
      {
        question: "Who is eligible for this program?",
        answer: "MD/DNB Medicine doctors are preferred, and MBBS doctors with renal care experience can also apply."
      },
      {
        question: "How does this help with DHA classification?",
        answer: "It adds structured nephrology training, improving your overall profile during DHA evaluation."
      },
      {
        question: "What are the fees for the Nephrology fellowship?",
        answer: "Fees range from INR 1.5L to 2.1L depending on format, with EMI options available."
      }
    ],
    testimonials: [
      {
        quote: "The nephrology fellowship improved my dialysis management skills significantly.",
        author: "General Physician",
        role: "Dubai",
        rating: 5
      },
      {
        quote: "It strengthened my profile for renal specialist roles in Dubai hospitals.",
        author: "Internal Medicine Doctor",
        role: "Dubai",
        rating: 5
      }
    ]
  },
  "fellowship-in-gastroenterology": {
    title: "Fellowship in Gastroenterology for Doctors in Dubai",
    name: "Gastroenterology Fellowship",
    icon: "🍽",
    duration: "12 Months",
    eligibility: "MD Medicine / DNB Medicine / MBBS with GI experience",
    description: "Build advanced expertise in digestive diseases, liver disorders, and endoscopy fundamentals while strengthening your pathway toward consultant-level roles in Dubai.",
    overview: "A 12-month structured online Gastroenterology fellowship designed for doctors in Dubai to upgrade skills in GI disorders, hepatology, and clinical management without interrupting practice.",
    demandTag: "RISING DIGESTIVE HEALTH DEMAND IN DUBAI",
    demandHeading: "Why Gastroenterology Fellowship is High Demand in Dubai",
    compareHeading: "MedFellow vs Other Gastroenterology Fellowships",
    finalCtaHeading: "Ready to Advance Your Gastroenterology Career in Dubai?",
    secondWeekPlan: "First GI session",
    compareRows: [
      ["Program Format", "Fully Online + Hybrid", "Mostly Offline"],
      ["Flexibility", "No career break", "Requires time off"],
      ["Curriculum", "Case-based", "Theory-heavy"],
      ["Clinical Relevance", "Dubai-focused", "Generic"],
      ["Duration", "12 months", "1-3 years"],
      ["DHA CV Value", "Strong", "Varies"],
      ["Hands-on", "Optional", "Often mandatory"],
      ["Time", "8-12 hrs/week", "High/full-time"],
      ["Fees", "Transparent + EMI", "Not always clear"]
    ],
    compareTakeaway: "Key Takeaway: Best for working doctors in Dubai needing flexibility + specialization.",
    highlights: [
      "Monthly module-based curriculum",
      "Live GI case discussions",
      "Recorded lectures for flexibility",
      "Evidence-based treatment protocols",
      "Structured assessments"
    ],
    whyDubai: {
      demand: "Digestive disorders are rapidly increasing in Dubai due to lifestyle changes, diet patterns, and rising metabolic diseases.",
      credentialing: "With DHA's evolving licensing standards, doctors must show structured subspecialty training and GI-specific clinical depth for specialist progression.",
      opportunities: [
        "DHA-regulated hospitals",
        "Gastroenterology and endoscopy centers",
        "Multispecialty private clinics",
        "Tertiary care hospitals"
      ]
    },
    curricula: [
      {
        month: "Months 1-3",
        title: "GI Foundations",
        modules: [
          "Gastrointestinal disorders (GERD, IBS, IBD)",
          "Liver diseases and hepatology fundamentals",
          "Pancreatic and biliary disorders",
          "Evidence-based diagnostic pathways"
        ]
      },
      {
        month: "Months 4-6",
        title: "Clinical Gastroenterology Practice",
        modules: [
          "GI emergencies and bleeding management",
          "Advanced hepatology case discussions",
          "Endoscopy fundamentals",
          "Integrated digestive care protocols"
        ]
      },
      {
        month: "Months 7-9",
        title: "Advanced GI Case Management",
        modules: [
          "Complex GI and liver case reviews",
          "Multidisciplinary GI care coordination",
          "Protocol-led treatment planning",
          "Dubai clinical scenario simulation"
        ]
      },
      {
        month: "Months 10-12",
        title: "Consultant Pathway Readiness",
        modules: [
          "Specialist gastroenterology positioning",
          "Clinical documentation and quality outcomes",
          "DHA-focused credential enhancement",
          "Capstone assessment and progression roadmap"
        ]
      }
    ],
    careerOutcomes: [
      {
        role: "Consultant Gastroenterologist Roles",
        description: "Transition into consultant-track gastroenterology opportunities"
      },
      {
        role: "GI and Liver Clinics",
        description: "Strengthen specialist positioning in digestive and hepatology care"
      },
      {
        role: "Endoscopy-Focused Practice",
        description: "Build pathway readiness for endoscopy-centered clinical roles"
      },
      {
        role: "Private Practice Expansion",
        description: "Expand private care services with structured GI specialization"
      }
    ],
    pricing: {
      onlineFormat: {
        price: "₹1,50,000 - ₹1,90,000",
        aed: "~AED 6,600 onwards",
        sar: "~SAR 6,750 onwards",
        format: "12 months fully online"
      },
      hybridFormat: {
        price: "₹1,80,000 - ₹2,10,000",
        aed: "~AED 7,900 - 9,200",
        sar: "~SAR 8,050 - 9,400",
        format: "11 months online + 1 month clinical rotation"
      }
    },
    applicationProcess: [
      {
        step: 1,
        title: "Submit Online Application",
        description: "Submit online application"
      },
      {
        step: 2,
        title: "Schedule Consultation",
        description: "Schedule consultation"
      },
      {
        step: 3,
        title: "Upload Documents",
        description: "Upload documents"
      },
      {
        step: 4,
        title: "Get Decision",
        description: "Get decision within 72 hours"
      },
      {
        step: 5,
        title: "Confirm Enrolment",
        description: "Confirm enrolment"
      }
    ],
    faqs: [
      {
        question: "Is a Gastroenterology fellowship required in Dubai?",
        answer: "No, it's not mandatory for DHA licensing, but it significantly improves your chances for specialist and consultant roles."
      },
      {
        question: "Is an online Gastroenterology fellowship valid in Dubai?",
        answer: "Yes, it is accepted as a supplementary credential and strengthens your DHA specialist application profile."
      },
      {
        question: "Can I do this fellowship while working in Dubai?",
        answer: "Yes, the program is designed for working doctors and requires only 8-12 hours per week."
      },
      {
        question: "Which format is better: online or hybrid?",
        answer: "Online is ideal for flexibility, while hybrid is recommended for endoscopy exposure and hands-on learning."
      },
      {
        question: "Will this fellowship increase my salary?",
        answer: "Not directly, but it improves eligibility for higher roles, which can lead to better pay."
      },
      {
        question: "What is the duration of the fellowship?",
        answer: "The program runs for 12 months, with an optional 1-month clinical rotation."
      },
      {
        question: "What are high-demand areas in gastroenterology in Dubai?",
        answer: "Liver diseases, endoscopy, IBS, and GI emergencies are in high demand across Dubai hospitals."
      },
      {
        question: "Is this fellowship worth it after MD Medicine?",
        answer: "Yes, it helps you specialize in GI care and stand out in Dubai's competitive job market."
      },
      {
        question: "Do I need to travel for this fellowship?",
        answer: "No travel is required for the online format; the hybrid option includes optional travel."
      },
      {
        question: "Who is eligible for this program?",
        answer: "MD/DNB Medicine doctors are preferred, but MBBS doctors with GI experience can also apply."
      },
      {
        question: "How does this help with DHA classification?",
        answer: "It adds structured gastroenterology training, strengthening your overall DHA evaluation profile."
      },
      {
        question: "What are the fees for the Gastroenterology fellowship?",
        answer: "Fees range from INR 1.5L to 2.1L depending on the format, with EMI options available."
      }
    ],
    testimonials: [
      {
        quote: "The fellowship improved my approach to managing GI disorders in my clinic.",
        author: "General Physician",
        role: "Dubai",
        rating: 5
      },
      {
        quote: "It strengthened my profile for gastro roles in private hospitals.",
        author: "Internal Medicine Specialist",
        role: "Dubai",
        rating: 5
      }
    ]
  },
  "fellowship-in-reproductive-medicine": {
    title: "Fellowship in Reproductive Medicine for Doctors in Dubai",
    name: "Reproductive Medicine Fellowship",
    icon: "🧪",
    duration: "12 Months",
    eligibility: "MD/DNB Obstetrics & Gynecology / MBBS with fertility experience",
    description: "Build advanced expertise in fertility care, IVF fundamentals, and reproductive health while strengthening your pathway toward consultant-level roles in Dubai's rapidly expanding fertility sector.",
    overview: "A 12-month structured online Reproductive Medicine fellowship designed for doctors in Dubai to upgrade skills in infertility management, IVF basics, and hormonal treatment protocols without interrupting practice.",
    demandTag: "RISING FERTILITY CARE DEMAND IN DUBAI",
    demandHeading: "Why Reproductive Medicine Fellowship is High Demand in Dubai",
    compareHeading: "MedFellow vs Other Reproductive Medicine Fellowships",
    finalCtaHeading: "Ready to Advance Your IVF Career in Dubai?",
    secondWeekPlan: "First fertility session",
    compareRows: [
      ["Program Format", "Fully Online + Hybrid", "Mostly Offline"],
      ["Flexibility", "No career break", "Requires relocation"],
      ["Curriculum", "Case-based IVF training", "Theory-heavy"],
      ["Clinical Relevance", "Dubai-focused", "Generic/global"],
      ["Duration", "12 months", "1-2 years"],
      ["DHA CV Value", "Strong", "Varies"],
      ["Hands-on", "Optional", "Often mandatory"],
      ["Time", "8-12 hrs/week", "High/full-time"],
      ["Fees", "Transparent + EMI", "Not always clear"]
    ],
    compareTakeaway: "Key Takeaway: Best suited for Dubai doctors who want IVF specialization without pausing their practice.",
    highlights: [
      "Monthly module-based curriculum",
      "Live fertility case discussions",
      "Recorded sessions for flexibility",
      "Evidence-based treatment protocols",
      "Structured assessments"
    ],
    whyDubai: {
      demand: "Dubai is a leading hub for medical tourism, with fertility and IVF services seeing rapid growth across private healthcare providers.",
      credentialing: "With DHA's evolving specialist criteria, doctors must demonstrate structured subspecialty training in fertility care for IVF specialist and consultant pathways.",
      opportunities: [
        "IVF and fertility clinics",
        "DHA-regulated hospitals",
        "Women's health centers",
        "Multispecialty private hospitals"
      ]
    },
    curricula: [
      {
        month: "Months 1-3",
        title: "Fertility Medicine Foundations",
        modules: [
          "Infertility evaluation and management",
          "Reproductive endocrinology principles",
          "Ovulation induction and hormonal therapy",
          "Male infertility basics"
        ]
      },
      {
        month: "Months 4-6",
        title: "IVF Fundamentals and ART",
        modules: [
          "IVF fundamentals and ART techniques",
          "Cycle planning and protocol selection",
          "Patient counseling and ethical pathways",
          "Case-based fertility discussions"
        ]
      },
      {
        month: "Months 7-9",
        title: "Advanced Fertility Case Management",
        modules: [
          "Complex infertility case reviews",
          "Hormonal protocol optimization",
          "Women's health and reproductive planning",
          "Clinic workflow and outcomes tracking"
        ]
      },
      {
        month: "Months 10-12",
        title: "Consultant Pathway Readiness",
        modules: [
          "Specialist fertility positioning",
          "Evidence-based reproductive care",
          "DHA-focused credential strengthening",
          "Capstone assessment and progression roadmap"
        ]
      }
    ],
    careerOutcomes: [
      {
        role: "IVF Specialist Roles",
        description: "Transition into IVF-focused specialist roles across Dubai"
      },
      {
        role: "Fertility Clinic Practice",
        description: "Build expertise for reproductive medicine and fertility clinics"
      },
      {
        role: "Women's Health Centers",
        description: "Expand advanced reproductive-care responsibilities"
      },
      {
        role: "Private IVF Practice Expansion",
        description: "Grow private practice scope with structured IVF specialization"
      }
    ],
    pricing: {
      onlineFormat: {
        price: "₹1,50,000 - ₹1,90,000",
        aed: "~AED 6,600 onwards",
        sar: "~SAR 6,750 onwards",
        format: "12 months fully online"
      },
      hybridFormat: {
        price: "₹1,80,000 - ₹2,10,000",
        aed: "~AED 7,900 - 9,200",
        sar: "~SAR 8,050 - 9,400",
        format: "11 months online + 1 month clinical rotation"
      }
    },
    applicationProcess: [
      {
        step: 1,
        title: "Submit Online Application",
        description: "Submit online application"
      },
      {
        step: 2,
        title: "Schedule Consultation",
        description: "Schedule consultation"
      },
      {
        step: 3,
        title: "Upload Documents",
        description: "Upload documents"
      },
      {
        step: 4,
        title: "Get Decision",
        description: "Get decision within 72 hours"
      },
      {
        step: 5,
        title: "Confirm Enrolment",
        description: "Confirm enrolment"
      }
    ],
    faqs: [
      {
        question: "Is a Reproductive Medicine fellowship required in Dubai?",
        answer: "No, but it significantly improves your chances for IVF specialist and consultant roles."
      },
      {
        question: "Is an online IVF fellowship valid in Dubai?",
        answer: "Yes, it is accepted as a supplementary credential for DHA evaluation."
      },
      {
        question: "Can I do this while working in Dubai?",
        answer: "Yes, it requires only 8-12 hours per week alongside your clinical practice."
      },
      {
        question: "Which format is better: online or hybrid?",
        answer: "Online offers flexibility; hybrid is better for hands-on IVF exposure."
      },
      {
        question: "Will it increase my salary?",
        answer: "Not directly, but it helps you move into higher-paying IVF roles."
      },
      {
        question: "What is the duration of the fellowship?",
        answer: "12 months, with an optional 1-month clinical rotation."
      },
      {
        question: "What are high-demand areas in fertility care?",
        answer: "IVF, infertility management, and reproductive endocrinology are in high demand."
      },
      {
        question: "Is it worth after MD OBG?",
        answer: "Yes, it helps you specialize in IVF and stand out in Dubai's fertility sector."
      },
      {
        question: "Do I need to travel?",
        answer: "No for online; travel is optional for hybrid training."
      },
      {
        question: "Who is eligible?",
        answer: "OBG specialists preferred; MBBS with fertility experience can apply."
      },
      {
        question: "How does it help DHA classification?",
        answer: "It adds structured fertility training to your profile."
      },
      {
        question: "What are the fees?",
        answer: "INR 1.5L - 2.1L depending on format, with EMI options available."
      }
    ],
    testimonials: [
      {
        quote: "The fellowship helped me transition into fertility practice in Dubai.",
        author: "Gynecologist",
        role: "Dubai",
        rating: 5
      },
      {
        quote: "It improved my confidence in managing infertility and IVF basics.",
        author: "Women's Health Doctor",
        role: "Dubai",
        rating: 5
      }
    ]
  },
  "fellowship-in-neonatology": {
    title: "Fellowship in Neonatology for Doctors in Dubai",
    name: "Neonatology Fellowship",
    icon: "👶",
    duration: "12 Months",
    eligibility: "MD/DNB Pediatrics preferred; MBBS with neonatal experience",
    description: "Build advanced expertise in newborn care, NICU management, and neonatal emergencies while strengthening your pathway toward consultant-level roles in Dubai's expanding maternal and child healthcare system.",
    overview: "A 12-month structured online Neonatology fellowship designed for doctors in Dubai to upgrade clinical skills in neonatal intensive care and newborn management without interrupting practice.",
    demandTag: "RISING DEMAND IN ORTHOPEDICS",
    demandHeading: "Why Neonatology Fellowship is High Demand in Dubai",
    compareHeading: "MedFellow vs Other Neonatology Fellowships",
    finalCtaHeading: "Ready to Advance Your Neonatology Career in Dubai?",
    secondWeekPlan: "First neonatal session",
    compareRows: [
      ["Program Format", "Fully Online + Hybrid", "Mostly Offline"],
      ["Flexibility", "No career break", "Requires time off"],
      ["Curriculum", "Case-based", "Theory-heavy"],
      ["Clinical Relevance", "Dubai-focused", "Generic"],
      ["Duration", "12 months", "1-3 years"],
      ["DHA CV Value", "Strong", "Varies"],
      ["Hands-on", "Optional", "Mandatory"],
      ["Time", "8-12 hrs/week", "High/full-time"],
      ["Fees", "Transparent + EMI", "Not always clear"]
    ],
    compareTakeaway: "Key Takeaway: Best for Dubai doctors needing flexible NICU specialization without career interruption.",
    highlights: [
      "Monthly module-based learning",
      "Live neonatal case discussions",
      "Recorded sessions for flexibility",
      "Evidence-based NICU protocols",
      "Structured assessments"
    ],
    whyDubai: {
      demand: "Dubai is rapidly expanding its maternal and neonatal care infrastructure, increasing demand for trained neonatologists.",
      credentialing: "DHA's evolving framework requires stronger subspecialty credentials for neonatal roles, and MBBS + MD Pediatrics alone may not be enough for advanced NICU pathways.",
      opportunities: [
        "DHA-regulated hospitals",
        "NICU units in private hospitals",
        "Maternity and pediatric specialty centers",
        "Dubai Healthcare City facilities"
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
          "Neonatal infections and sepsis"
        ]
      },
      {
        month: "Months 4-6",
        title: "Critical Care and Stabilization",
        modules: [
          "Ventilation and critical care basics",
          "High-risk newborn case pathways",
          "NICU protocol implementation",
          "Case-based neonatal discussions"
        ]
      },
      {
        month: "Months 7-9",
        title: "Advanced Neonatal Case Management",
        modules: [
          "Complex NICU scenario handling",
          "Interdisciplinary neonatal workflow",
          "Clinical documentation and quality outcomes",
          "Protocol-led emergency management"
        ]
      },
      {
        month: "Months 10-12",
        title: "Consultant Pathway Readiness",
        modules: [
          "Specialist neonatal positioning",
          "Evidence-based newborn care updates",
          "DHA-focused profile strengthening",
          "Capstone assessment and progression roadmap"
        ]
      }
    ],
    careerOutcomes: [
      {
        role: "Consultant Neonatologist Roles",
        description: "Transition into consultant-track neonatal care opportunities"
      },
      {
        role: "NICU Specialist Positions",
        description: "Advance into specialist NICU and intensive newborn care roles"
      },
      {
        role: "High-Risk Newborn Care Units",
        description: "Strengthen profile for high-risk and critical neonatal settings"
      },
      {
        role: "Pediatric Practice Expansion",
        description: "Expand pediatric scope with advanced neonatal specialization"
      }
    ],
    pricing: {
      onlineFormat: {
        price: "₹1,50,000 - ₹1,90,000",
        aed: "~AED 6,600 onwards",
        sar: "~SAR 6,750 onwards",
        format: "12 months fully online"
      },
      hybridFormat: {
        price: "₹1,80,000 - ₹2,10,000",
        aed: "~AED 7,900 - 9,200",
        sar: "~SAR 8,050 - 9,400",
        format: "11 months online + 1 month clinical rotation"
      }
    },
    applicationProcess: [
      {
        step: 1,
        title: "Submit Online Application",
        description: "Submit online application"
      },
      {
        step: 2,
        title: "Schedule Consultation",
        description: "Schedule consultation"
      },
      {
        step: 3,
        title: "Upload Documents",
        description: "Upload documents"
      },
      {
        step: 4,
        title: "Get Decision",
        description: "Get decision within 72 hours"
      },
      {
        step: 5,
        title: "Confirm Enrolment",
        description: "Confirm enrolment"
      }
    ],
    faqs: [
      {
        question: "Is a Neonatology fellowship required in Dubai?",
        answer: "No, but it significantly improves eligibility for NICU and consultant-level roles."
      },
      {
        question: "Is an online Neonatology fellowship valid?",
        answer: "Yes, it is accepted as a supplementary credential for DHA evaluation."
      },
      {
        question: "Can I do this while working in Dubai?",
        answer: "Yes, it requires only 8-12 hours per week alongside your clinical practice."
      },
      {
        question: "Which format is better: online or hybrid?",
        answer: "Online suits flexibility; hybrid is better for NICU hands-on exposure."
      },
      {
        question: "Will this help me get a NICU role?",
        answer: "Yes, it strengthens your profile for neonatal and critical care positions."
      },
      {
        question: "What is the duration of the fellowship?",
        answer: "12 months, with an optional 1-month clinical rotation."
      },
      {
        question: "What are high-demand areas in neonatology?",
        answer: "NICU care, preterm management, and neonatal emergencies are highly in demand."
      },
      {
        question: "Is it worth after MD Pediatrics?",
        answer: "Yes, it helps you specialize and stand out in Dubai's competitive market."
      },
      {
        question: "Do I need to travel?",
        answer: "No for online; hybrid includes optional travel for clinical exposure."
      },
      {
        question: "Who is eligible?",
        answer: "MD/DNB Pediatrics preferred; MBBS with neonatal experience can apply."
      },
      {
        question: "How does it help DHA classification?",
        answer: "It adds structured neonatal training, improving your specialist profile."
      },
      {
        question: "What are the fees?",
        answer: "INR 1.5L - 2.1L depending on format, with EMI options available."
      }
    ],
    testimonials: [
      {
        quote: "The fellowship improved my confidence in NICU case handling.",
        author: "Pediatric Doctor",
        role: "Dubai",
        rating: 5
      },
      {
        quote: "It strengthened my profile for neonatal specialist roles.",
        author: "Pediatrician",
        role: "Dubai",
        rating: 5
      }
    ]
  },
  "fellowship-in-arthroscopy-and-arthroplasty": {
    title: "Fellowship in Arthroscopy & Arthroplasty for Doctors in Dubai",
    name: "Arthroscopy & Arthroplasty Fellowship",
    icon: "🦴",
    duration: "12 Months",
    eligibility: "MS/DNB Orthopedics preferred; relevant surgical experience beneficial",
    description: "Build advanced expertise in joint surgeries, sports injury management, and arthroscopy techniques while strengthening your pathway toward consultant-level orthopedic roles in Dubai's growing healthcare ecosystem.",
    overview: "A 12-month structured online Arthroscopy & Arthroplasty fellowship designed for doctors in Dubai to upgrade surgical knowledge in joint care and orthopedic procedures without interrupting practice.",
    demandTag: "RISING ORTHOPEDIC SURGERY DEMAND IN DUBAI",
    demandHeading: "Why Arthroscopy & Arthroplasty Fellowship is High Demand in Dubai",
    compareHeading: "MedFellow vs Other Arthroscopy Fellowships",
    finalCtaHeading: "Ready to Advance Your Orthopedic Career in Dubai?",
    secondWeekPlan: "First orthopedic session",
    compareRows: [
      ["Program Format", "Fully Online + Hybrid", "Mostly Offline"],
      ["Flexibility", "No career break", "Requires relocation"],
      ["Curriculum", "Case-based", "Theory-heavy"],
      ["Clinical Relevance", "Dubai-focused", "Generic"],
      ["Duration", "12 months", "1-3 years"],
      ["DHA CV Value", "Strong", "Varies"],
      ["Hands-on", "Optional", "Mandatory"],
      ["Time", "8-12 hrs/week", "High/full-time"],
      ["Fees", "Transparent + EMI", "Not always clear"]
    ],
    compareTakeaway: "Key Takeaway: Ideal for Dubai doctors who want orthopedic specialization without pausing practice.",
    highlights: [
      "Monthly module-based learning",
      "Live orthopedic case discussions",
      "Recorded surgical lectures",
      "Evidence-based treatment protocols",
      "Structured assessments"
    ],
    whyDubai: {
      demand: "Dubai is witnessing rapid growth in sports medicine, orthopedic care, and joint replacement procedures.",
      credentialing: "DHA's evolving framework requires stronger subspecialty credentials in orthopedic procedures, and MS Orthopedics alone may not be enough for advanced consultant pathways.",
      opportunities: [
        "DHA-regulated hospitals",
        "Orthopedic specialty centers",
        "Sports medicine clinics",
        "Private surgical hospitals"
      ]
    },
    curricula: [
      {
        month: "Months 1-3",
        title: "Orthopedic Foundations",
        modules: [
          "Arthroscopy fundamentals (knee, shoulder)",
          "Sports injury management",
          "Ligament reconstruction concepts",
          "Post-operative rehabilitation protocols"
        ]
      },
      {
        month: "Months 4-6",
        title: "Arthroscopy and Arthroplasty Core Skills",
        modules: [
          "Joint replacement basics (arthroplasty)",
          "Procedure planning and patient selection",
          "Intraoperative workflow principles",
          "Case-based orthopedic discussions"
        ]
      },
      {
        month: "Months 7-9",
        title: "Advanced Orthopedic Case Management",
        modules: [
          "Complex sports injury pathways",
          "Arthroscopy-based decision frameworks",
          "Post-surgical outcomes optimization",
          "Multidisciplinary orthopedic coordination"
        ]
      },
      {
        month: "Months 10-12",
        title: "Consultant Pathway Readiness",
        modules: [
          "Specialist orthopedic positioning",
          "Procedure-based profile strengthening",
          "DHA-focused career alignment",
          "Capstone assessment and progression roadmap"
        ]
      }
    ],
    careerOutcomes: [
      {
        role: "Consultant Orthopedic Surgeon Roles",
        description: "Progress toward consultant-track orthopedic roles in Dubai"
      },
      {
        role: "Sports Injury and Arthroscopy Practice",
        description: "Build specialization in sports injuries and minimally invasive joint procedures"
      },
      {
        role: "Joint Replacement Specialization",
        description: "Strengthen pathway for arthroplasty-centered surgical opportunities"
      },
      {
        role: "Private Orthopedic Clinic Expansion",
        description: "Expand private orthopedic scope with structured subspecialty training"
      }
    ],
    pricing: {
      onlineFormat: {
        price: "₹1,50,000 - ₹1,90,000",
        aed: "~AED 6,600 onwards",
        sar: "~SAR 6,750 onwards",
        format: "12 months fully online"
      },
      hybridFormat: {
        price: "₹1,80,000 - ₹2,10,000",
        aed: "~AED 7,900 - 9,200",
        sar: "~SAR 8,050 - 9,400",
        format: "11 months online + 1 month clinical rotation"
      }
    },
    applicationProcess: [
      {
        step: 1,
        title: "Submit Online Application",
        description: "Submit online application"
      },
      {
        step: 2,
        title: "Schedule Consultation",
        description: "Schedule consultation"
      },
      {
        step: 3,
        title: "Upload Documents",
        description: "Upload documents"
      },
      {
        step: 4,
        title: "Get Decision",
        description: "Get decision within 72 hours"
      },
      {
        step: 5,
        title: "Confirm Enrolment",
        description: "Confirm enrolment"
      }
    ],
    faqs: [
      {
        question: "Is an Arthroscopy fellowship required in Dubai?",
        answer: "No, but it significantly improves eligibility for orthopedic specialist and consultant roles."
      },
      {
        question: "Is an online orthopedic fellowship valid?",
        answer: "Yes, it is accepted as a supplementary credential for DHA evaluation."
      },
      {
        question: "Can I do this while working in Dubai?",
        answer: "Yes, it requires only 8-12 hours per week alongside your clinical practice."
      },
      {
        question: "Which format is better: online or hybrid?",
        answer: "Online offers flexibility; hybrid is better for surgical exposure and hands-on training."
      },
      {
        question: "Will this fellowship increase my salary?",
        answer: "Not directly, but it improves eligibility for higher-paying orthopedic roles."
      },
      {
        question: "What is the duration of the fellowship?",
        answer: "12 months, with an optional 1-month clinical rotation."
      },
      {
        question: "What are high-demand areas in orthopedics in Dubai?",
        answer: "Arthroscopy, sports injuries, and joint replacement procedures are highly in demand."
      },
      {
        question: "Is it worth after MS Orthopedics?",
        answer: "Yes, it helps you specialize further and stand out in Dubai's competitive market."
      },
      {
        question: "Do I need to travel?",
        answer: "No for online; hybrid includes optional travel for hands-on training."
      },
      {
        question: "Who is eligible?",
        answer: "MS/DNB Orthopedics preferred; relevant surgical experience is beneficial."
      },
      {
        question: "How does it help DHA classification?",
        answer: "It adds structured orthopedic training, strengthening your specialist profile."
      },
      {
        question: "What are the fees?",
        answer: "INR 1.5L - 2.1L depending on format, with EMI options available."
      }
    ],
    testimonials: [
      {
        quote: "The fellowship improved my confidence in handling sports injuries.",
        author: "Orthopedic Doctor",
        role: "Dubai",
        rating: 5
      },
      {
        quote: "It strengthened my profile for arthroscopy-based roles in hospitals.",
        author: "Orthopedic Surgeon",
        role: "Dubai",
        rating: 5
      }
    ]
  },
  "fellowship-in-pediatrics": {
    title: "Fellowship in Pediatrics for Doctors in Dubai",
    name: "Pediatrics Fellowship",
    icon: "🧒",
    duration: "12 Months",
    eligibility: "MD/DNB Pediatrics preferred; MBBS with pediatric experience",
    description: "Build advanced clinical expertise in pediatric care, strengthen your pathway toward consultant-level roles in Dubai's expanding child healthcare system.",
    overview: "A 12-month structured online Pediatrics fellowship designed for doctors in Dubai to enhance expertise in neonatal care, pediatric emergencies, and child development while continuing clinical practice.",
    demandTag: "RISING PEDIATRIC CARE DEMAND IN DUBAI",
    demandHeading: "Why Pediatrics Fellowship is High Demand in Dubai",
    compareHeading: "MedFellow vs Other Pediatrics Fellowships",
    finalCtaHeading: "Ready to Advance Your Pediatrics Career in Dubai?",
    secondWeekPlan: "First pediatrics module session",
    compareRows: [
      ["Program Format", "Fully Online + Optional Hybrid", "Mostly Offline/Hybrid"],
      ["Flexibility", "Designed for working doctors", "Often requires time off"],
      ["Curriculum", "Case-based clinical training", "Theory-heavy"],
      ["Clinical Relevance", "Dubai-focused cases", "General/global"],
      ["Duration", "12 months", "1-3 years"],
      ["DHA CV Value", "Strong", "Varies"],
      ["Hands-on Exposure", "Optional rotation", "Often mandatory"],
      ["Time Commitment", "8-12 hrs/week", "High/full-time"],
      ["Fees Transparency", "Clear with EMI", "Not always transparent"],
      ["Cost Efficiency", "Affordable", "Higher cost"]
    ],
    compareTakeaway: "Key takeaway: MedFellow is ideal for Dubai doctors who want flexible pediatric specialization without career interruption.",
    highlights: [
      "Monthly module-based learning",
      "Live pediatric case discussions",
      "Recorded sessions for flexibility",
      "Evidence-based treatment protocols",
      "Structured assessments"
    ],
    whyDubai: {
      demand: "Dubai's healthcare sector is expanding rapidly, driven by medical tourism and strong investment in maternal and child healthcare infrastructure.",
      credentialing: "With DHA's evolving licensing framework, doctors face increasing pressure to demonstrate structured specialty training for consultant pediatrics progression.",
      opportunities: [
        "DHA-regulated hospitals",
        "Private pediatric clinics",
        "Dubai Healthcare City and multispecialty centers",
        "Child development and wellness centers"
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
          "Common childhood infections and management"
        ]
      },
      {
        month: "Months 4-6",
        title: "Core Clinical Pediatrics",
        modules: [
          "Chronic disease management in children",
          "Nutritional disorders and feeding issues",
          "Immunization and preventive care",
          "Case-based pediatric problem solving"
        ]
      },
      {
        month: "Months 7-9",
        title: "Advanced Pediatric Case Management",
        modules: [
          "Complex pediatric scenarios",
          "Pediatric emergency protocols",
          "Interdisciplinary pediatric care",
          "Evidence-based clinical updates"
        ]
      },
      {
        month: "Months 10-12",
        title: "Consultant Pathway Readiness",
        modules: [
          "Specialist pediatric positioning",
          "Research methodology in pediatrics",
          "DHA-aligned practice standards",
          "Capstone assessment and certification"
        ]
      }
    ],
    careerOutcomes: [
      {
        role: "Consultant Pediatrician",
        description: "Move into consultant-track pediatrics roles in DHA-regulated hospitals"
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
        aed: "~AED 6,600 onwards",
        sar: "~SAR 6,750 onwards",
        format: "12 months fully online"
      },
      hybridFormat: {
        price: "₹1,80,000 - ₹2,10,000",
        aed: "~AED 7,900 - 9,200",
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
        question: "Is a Pediatrics fellowship required in Dubai?",
        answer: "No, it is not mandatory for DHA licensing, but it gives you a strong advantage for specialist and consultant-level pediatric roles."
      },
      {
        question: "Is an online fellowship valid?",
        answer: "Yes, it is accepted as a supplementary credential that strengthens your DHA application and clinical profile."
      },
      {
        question: "Can I do it while working?",
        answer: "Yes, the program is designed for working doctors and typically requires 8-12 hours per week."
      },
      {
        question: "Which format is better?",
        answer: "Online is ideal for flexibility, while hybrid is better if you want optional hands-on clinical exposure."
      },
      {
        question: "Will it increase salary?",
        answer: "Not directly, but it improves eligibility for higher pediatric roles, which can lead to better compensation."
      },
      {
        question: "What is the duration?",
        answer: "The fellowship runs for 12 months, with an optional 1-month clinical rotation in the hybrid pathway."
      },
      {
        question: "What are high-demand areas in pediatrics?",
        answer: "Neonatal care, child emergencies, chronic disease management, and developmental pediatrics are highly in demand in Dubai."
      },
      {
        question: "Is it worth after MD Pediatrics?",
        answer: "Yes, it helps you stand out and strengthens your pathway for specialist pediatrics opportunities in Dubai."
      },
      {
        question: "Do I need to travel?",
        answer: "No travel is needed for the online program; hybrid includes optional travel for the clinical rotation."
      },
      {
        question: "Who is eligible?",
        answer: "MD/DNB Pediatrics doctors are preferred, and MBBS doctors with relevant pediatric experience may also apply."
      },
      {
        question: "How does it help DHA classification?",
        answer: "It adds structured specialty training and continuous professional development, improving your overall DHA pediatric specialist evaluation profile."
      },
      {
        question: "What are the fees?",
        answer: "Fees range from INR 1.5L to 2.1L based on online or hybrid format, with EMI options available."
      }
    ],
    testimonials: [
      {
        quote: "The Pediatrics fellowship helped me transition to a consultant role at a major Dubai hospital.",
        author: "Pediatrician",
        role: "Dubai",
        rating: 5
      },
      {
        quote: "The curriculum was highly relevant to my Dubai practice and improved my child care expertise significantly.",
        author: "General Physician",
        role: "Dubai",
        rating: 5
      }
    ]
  }
};

export default function DubaiProgramDetail(props: ProgramPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const params = "then" in props.params ? use(props.params) : props.params;
  const program = dubaiProgramsData[params.slug];

  if (!program) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Program not found</h1>
            <Link href="/dubai/programs" className="text-blue-600 hover:underline">
              Back to Dubai Programs
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
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #15401E 0%, #15401E 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full" style={{ background: '#e8f2ea' }}></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full" style={{ background: '#C8E6D0' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 py-16 sm:py-20 md:py-24 lg:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)' }}
            >
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#52BE80' }}></div>
              <span className="text-sm font-medium text-white">APRIL 2026 INTAKE · DUBAI PRIORITY LANE</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 sm:mb-6 leading-tight px-2"
            >
              {(() => {
                const title = program.title;
                const parts = title.split(/(Pediatrics|Endocrinology|Nephrology|Gastroenterology|Reproductive Medicine|Neonatology|Arthroscopy|Dubai)/);
                return parts.map((part, index) => {
                  if (part === "Pediatrics" || part === "Endocrinology" || part === "Nephrology" || part === "Gastroenterology" || part === "Reproductive Medicine" || part === "Neonatology" || part === "Arthroscopy") {
                    return <span key={index} style={{ color: '#4ade80' }}>{part}</span>;
                  } else if (part === "Dubai") {
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
              <Link href="/apply" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white rounded-lg font-medium hover:opacity-90 transition-all shadow-lg text-lg" style={{ color: '#15401E' }}>
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white transition-all text-lg hover:text-[#15401E]">
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
                <span>DHA-Aligned</span>
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
      <section className="py-8 sm:py-10 md:py-12" style={{ background: '#e8f2ea' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-semibold mb-1" style={{ color: '#15401E' }}>52+</div>
              <div className="text-xs md:text-sm" style={{ color: '#6B7280' }}>Specialty Fellowships</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-semibold mb-1" style={{ color: '#15401E' }}>4,200+</div>
              <div className="text-xs md:text-sm" style={{ color: '#6B7280' }}>Doctors Trained Globally</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-semibold mb-1" style={{ color: '#15401E' }}>22+</div>
              <div className="text-xs md:text-sm" style={{ color: '#6B7280' }}>Countries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-semibold mb-1" style={{ color: '#15401E' }}>4.8/5</div>
              <div className="text-xs md:text-sm" style={{ color: '#6B7280' }}>Rated by Doctors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Specialty Demand in Dubai */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: '#e8f2ea', color: '#15401E' }}>
                <MapPin className="w-4 h-4" />
                {program.demandTag}
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#15401E' }}>
                {program.demandHeading.includes(" for ") ? program.demandHeading : `${program.demandHeading}`}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-8 rounded-2xl" style={{ border: '1px solid #E5E7EB' }}>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: '#15401E' }}>Market Growth</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                  {program.whyDubai.demand}
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl" style={{ border: '1px solid #E5E7EB' }}>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: '#15401E' }}>Credentialing Advantage</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                  {program.whyDubai.credentialing}
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl" style={{ border: '1px solid #E5E7EB' }}>
              <h3 className="text-xl font-semibold mb-6" style={{ color: '#15401E' }}>Career Opportunities in Dubai</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {program.whyDubai.opportunities.map((opportunity, index) => (
                  <div key={index} className="flex gap-3">
                    <Check className="w-5 h-5 shrink-0" style={{ color: '#52BE80' }} />
                    <p className="text-sm" style={{ color: '#6B7280' }}>{opportunity}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20" style={{ background: '#F2F3F4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: '#e8f2ea', color: '#15401E' }}>
                <BookOpen className="w-4 h-4" />
                CURRICULUM
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#15401E' }}>
                12-Month Curriculum<br/>Overview
              </h2>
            </div>

            <div className="space-y-6">
              {program.curricula.map((curriculum, index) => (
                <div key={index} className="bg-white p-6 md:p-8 rounded-xl" style={{ border: '1px solid #E5E7EB' }}>
                  <div className="flex gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold" style={{ background: '#15401E' }}>
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: '#15401E' }}>{curriculum.month}</p>
                      <h3 className="text-lg font-semibold" style={{ color: '#15401E' }}>{curriculum.title}</h3>
                    </div>
                  </div>
                  <ul className="ml-16 space-y-2">
                    {curriculum.modules.map((module, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span style={{ color: '#52BE80' }}>•</span>
                        <span className="text-sm" style={{ color: '#6B7280' }}>{module}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: '#e8f2ea', color: '#15401E' }}>
                <Target className="w-4 h-4" />
                CAREER PATHS
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#15401E' }}>
                Where Graduates Work<br/>in Dubai
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {program.careerOutcomes.map((outcome, index) => (
                <div key={index} className="bg-white p-6 rounded-xl" style={{ border: '1px solid #E5E7EB' }}>
                  <h3 className="font-semibold mb-2" style={{ color: '#15401E' }}>{outcome.role}</h3>
                  <p className="text-sm" style={{ color: '#6B7280' }}>{outcome.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20" style={{ background: '#e8f2ea' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: '#e8f2ea', color: '#15401E' }}>
                <Award className="w-4 h-4" />
                INVESTMENT
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#15401E' }}>
                Transparent Pricing
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-8 rounded-2xl" style={{ border: '2px solid #15401E' }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#15401E' }}>Fully Online Format</h3>
                <div className="mb-4 pb-4 border-b" style={{ borderColor: '#E5E7EB' }}>
                  <p className="text-sm mb-1" style={{ color: '#6B7280' }}>INR</p>
                  <p className="text-2xl font-bold" style={{ color: '#15401E' }}>{program.pricing.onlineFormat.price}</p>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs" style={{ color: '#6B7280' }}>AED</p>
                    <p className="font-semibold" style={{ color: '#15401E' }}>{program.pricing.onlineFormat.aed}</p>
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: '#6B7280' }}>SAR</p>
                    <p className="font-semibold" style={{ color: '#15401E' }}>{program.pricing.onlineFormat.sar}</p>
                  </div>
                  <p className="text-xs pt-2" style={{ color: '#6B7280' }}>{program.pricing.onlineFormat.format}</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl" style={{ border: '2px solid #C8E6D0' }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#15401E' }}>Hybrid Format</h3>
                <div className="mb-4 pb-4 border-b" style={{ borderColor: '#E5E7EB' }}>
                  <p className="text-sm mb-1" style={{ color: '#6B7280' }}>INR</p>
                  <p className="text-2xl font-bold" style={{ color: '#15401E' }}>{program.pricing.hybridFormat.price}</p>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs" style={{ color: '#6B7280' }}>AED</p>
                    <p className="font-semibold" style={{ color: '#15401E' }}>{program.pricing.hybridFormat.aed}</p>
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: '#6B7280' }}>SAR</p>
                    <p className="font-semibold" style={{ color: '#15401E' }}>{program.pricing.hybridFormat.sar}</p>
                  </div>
                  <p className="text-xs pt-2" style={{ color: '#6B7280' }}>{program.pricing.hybridFormat.format}</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl text-center" style={{ border: '1px solid #E5E7EB' }}>
              <p className="text-sm mb-1" style={{ color: '#6B7280' }}>EMI options available on all programs</p>
              <p className="text-xs" style={{ color: '#6B7280' }}>Exchange rates as of April 2026. Contact admissions for current rates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: '#e8f2ea', color: '#15401E' }}>
                <Check className="w-4 h-4" />
                HOW TO APPLY
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#15401E' }}>
                5-Step Application<br/>Process
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: '#6B7280' }}>
                From enquiry to admission decision in under 7 days
              </p>
            </div>

            <div className="space-y-6">
              {program.applicationProcess.map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl text-white font-bold" style={{ background: '#15401E' }}>
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-semibold" style={{ color: '#15401E' }}>{item.title}</h3>
                    <p className="text-sm mt-1" style={{ color: '#6B7280' }}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-white" style={{ background: '#15401E' }}>
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="https://wa.me/919985044993" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium" style={{ border: '2px solid #15401E', color: '#15401E', background: '#fff' }}>
                Chat on WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* First 30 Days */}
      <section className="py-20" style={{ background: '#F2F3F4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: '#e8f2ea', color: '#15401E' }}>
                <Clock className="w-4 h-4" />
                WHAT HAPPENS AFTER YOU JOIN
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#15401E' }}>
                First 30 Days After Enrolment
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { week: "Week 1", detail: "Platform onboarding and faculty introduction" },
                { week: "Week 2", detail: program.secondWeekPlan },
                { week: "Week 3", detail: "Case-based assignment" },
                { week: "Week 4", detail: "Faculty feedback and next module planning" }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl" style={{ border: '1px solid #E5E7EB' }}>
                  <p className="text-sm font-semibold mb-2" style={{ color: '#15401E' }}>{item.week}</p>
                  <p className="text-sm" style={{ color: '#6B7280' }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compare Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: '#e8f2ea', color: '#15401E' }}>
                <Award className="w-4 h-4" />
                COMPARE BEFORE YOU CHOOSE
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#15401E' }}>
                {program.compareHeading}
              </h2>
            </div>

            <div className="bg-white rounded-xl overflow-hidden" style={{ border: '1px solid #E5E7EB' }}>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr style={{ background: '#e8f2ea', borderBottom: '1px solid #E5E7EB' }}>
                      <th className="px-4 py-3 text-left text-sm" style={{ color: '#15401E' }}>Feature</th>
                      <th className="px-4 py-3 text-left text-sm" style={{ color: '#15401E' }}>MedFellow Academy</th>
                      <th className="px-4 py-3 text-left text-sm" style={{ color: '#15401E' }}>Other Fellowships</th>
                    </tr>
                  </thead>
                  <tbody>
                    {program.compareRows.map((row, idx) => (
                      <tr key={idx} style={{ borderBottom: idx === program.compareRows.length - 1 ? 'none' : '1px solid #E5E7EB' }}>
                        <td className="px-4 py-3 text-sm" style={{ color: '#15401E' }}>{row[0]}</td>
                        <td className="px-4 py-3 text-sm" style={{ color: '#6B7280' }}>{row[1]}</td>
                        <td className="px-4 py-3 text-sm" style={{ color: '#6B7280' }}>{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-sm mt-4" style={{ color: '#6B7280' }}>{program.compareTakeaway}</p>
          </div>
        </div>
      </section>

      {/* Explore Programs */}
      <section className="py-20" style={{ background: '#e8f2ea' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold mb-3" style={{ color: '#15401E' }}>
                Explore Fellowship Programs for Dubai Doctors
              </h2>
              <p className="text-sm" style={{ color: '#6B7280' }}>
                Discover 40+ online fellowships designed for Dubai doctors to build specialization and advance careers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(
                params.slug === "fellowship-in-reproductive-medicine"
                  ? [
                      ["Pediatrics Fellowship for Dubai Doctors Program", "/programs/fellowship-in-pediatrics"],
                      ["Endocrinology Fellowship for Dubai Doctors Course", "/programs/fellowship-in-endocrinology"],
                      ["Nephrology Fellowship for Dubai Doctors Program", "/programs/fellowship-in-nephrology"],
                      ["Gastroenterology Fellowship for Dubai Doctors Program", "/programs/fellowship-in-gastroenterology"],
                      ["Neonatology Fellowship for Dubai Doctors Program", "/programs/fellowship-in-neonatology"],
                      ["Arthroscopy Fellowship for Dubai Orthopedic Doctors", "/programs/fellowship-in-arthroscopy-and-arthroplasty"]
                    ]
                  : params.slug === "fellowship-in-neonatology"
                  ? [
                      ["Pediatrics Fellowship for Dubai Doctors", "/programs/fellowship-in-pediatrics"],
                      ["Endocrinology Fellowship for Dubai Doctors", "/programs/fellowship-in-endocrinology"],
                      ["Nephrology Fellowship for Dubai Doctors", "/programs/fellowship-in-nephrology"],
                      ["Gastroenterology Fellowship for Dubai Doctors", "/programs/fellowship-in-gastroenterology"],
                      ["Reproductive Medicine Fellowship Dubai Doctors", "/programs/fellowship-in-reproductive-medicine"],
                      ["Arthroscopy Fellowship for Dubai Orthopedic Doctors", "/programs/fellowship-in-arthroscopy-and-arthroplasty"]
                    ]
                  : params.slug === "fellowship-in-arthroscopy-and-arthroplasty"
                  ? [
                      ["Pediatrics Fellowship for Dubai Doctors", "/programs/fellowship-in-pediatrics"],
                      ["Endocrinology Fellowship for Dubai Doctors", "/programs/fellowship-in-endocrinology"],
                      ["Nephrology Fellowship for Dubai Doctors", "/programs/fellowship-in-nephrology"],
                      ["Gastroenterology Fellowship for Dubai Doctors", "/programs/fellowship-in-gastroenterology"],
                      ["Reproductive Medicine Fellowship Dubai Doctors", "/programs/fellowship-in-reproductive-medicine"],
                      ["Arthroscopy Fellowship for Dubai Orthopedic Doctors", "/programs/fellowship-in-arthroscopy-and-arthroplasty"]
                    ]
                  : [
                      ["Pediatrics Fellowship for Dubai Doctors", "/programs/fellowship-in-pediatrics"],
                      ["Gastroenterology Fellowship for Dubai Doctors", "/programs/fellowship-in-gastroenterology"],
                      ["Nephrology Fellowship for Dubai Doctors", "/programs/fellowship-in-nephrology"],
                      ["Reproductive Medicine Fellowship for Dubai Doctors", "/programs/fellowship-in-reproductive-medicine"],
                      ["Arthroscopy Fellowship for Dubai Orthopedic Doctors", "/programs/fellowship-in-arthroscopy-and-arthroplasty"],
                      ["Neonatology Fellowship for Dubai Doctors", "/programs/fellowship-in-neonatology"]
                    ]
              ).map((card, idx) => (
                <Link key={idx} href={card[1]} className="bg-white p-5 rounded-xl hover:shadow-md transition-all" style={{ border: '1px solid #E5E7EB' }}>
                  <p className="text-sm font-medium" style={{ color: '#15401E' }}>{card[0]}</p>
                  <p className="text-xs mt-2" style={{ color: '#15401E' }}>Read More</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ background: '#F2F3F4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: '#e8f2ea', color: '#15401E' }}>
                <Star className="w-4 h-4" />
                DOCTOR STORIES
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#15401E' }}>
                What Dubai Doctors Say
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {program.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl" style={{ border: '1px solid #E5E7EB' }}>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#F39C12' }} />
                    ))}
                  </div>
                  <p className="text-sm mb-6 leading-relaxed italic" style={{ color: '#6B7280' }}>
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-medium" style={{ color: '#15401E' }}>{testimonial.author}</div>
                    <div className="text-xs" style={{ color: '#6B7280' }}>{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20" style={{ background: '#e8f2ea' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ background: '#e8f2ea', color: '#15401E' }}>
              <Users className="w-4 h-4" />
              FREQUENTLY ASKED
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: '#15401E' }}>
              Common Questions
            </h2>
          </div>

          <div className="space-y-4">
            {program.faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden" style={{ border: '1px solid #E5E7EB' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium pr-8" style={{ color: '#15401E' }}>{faq.question}</span>
                  <ArrowRight
                    className={`w-5 h-5 shrink-0 transition-transform ${openFaq === index ? 'rotate-90' : ''}`}
                    style={{ color: '#15401E' }}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="p-12 rounded-3xl text-center text-white" style={{ background: 'linear-gradient(135deg, #15401E 0%, #15401E 100%)' }}>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              {program.finalCtaHeading}
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Apply now and get your admission decision within 72 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white rounded-lg font-medium hover:opacity-90 transition-all shadow-lg text-lg" style={{ color: '#15401E' }}>
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white transition-all text-lg hover:text-[#15401E]">
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

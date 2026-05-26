import type { MetadataRoute } from "next";

const SITE_URL = "https://www.medfellowacademy.com";

const staticRoutes = [
  "",
  "/about",
  "/contact",
  "/programs",
  "/apply",
  "/blog",
  "/blog/fellowship-vs-pg-diploma",
  "/comparison",
  "/faculty",
  "/fellowship-matcher",
  "/financial-aid",
  "/free-guide",
  "/learning-model",
  "/mentorship",
  "/privacy-policy",
  "/research",
  "/resources",
  "/terms-and-conditions",
  "/virtual-tours",
] as const;

const programSlugs = [
  "fellowship-in-2d-echocardiography",
  "fellowship-in-anesthesia",
  "fellowship-in-arthroscopy",
  "fellowship-in-arthroscopy-and-arthroplasty",
  "fellowship-in-cardiology",
  "fellowship-in-cardiothoracic-surgery",
  "fellowship-in-clinical-cardiology",
  "fellowship-in-clinical-hematology",
  "fellowship-in-clinical-neurology",
  "fellowship-in-cosmetic-aesthetic-medicine",
  "fellowship-in-cosmetic-gynecology",
  "fellowship-in-critical-care-medicine",
  "fellowship-in-dermatology",
  "fellowship-in-diabetes-mellitus",
  "fellowship-in-emergency-medicine",
  "fellowship-in-endocrinology",
  "fellowship-in-family-medicine",
  "fellowship-in-fetal-medicine",
  "fellowship-in-gastroenterology",
  "fellowship-in-general-surgery-1-year",
  "fellowship-in-gynecology-obstetrics",
  "fellowship-in-head-neck-oncology",
  "fellowship-in-high-risk-pregnancy",
  "fellowship-in-internal-medicine",
  "fellowship-in-interventional-cardiology",
  "fellowship-in-interventional-radiology",
  "fellowship-in-laparoscopy-hysteroscopy",
  "fellowship-in-maxillofacial-oral-surgery",
  "fellowship-in-medical-oncology",
  "fellowship-in-minimal-access-robotic-surgery",
  "fellowship-in-neonatology",
  "fellowship-in-nephrology",
  "fellowship-in-neurosurgery",
  "fellowship-in-oral-implantology-laser-dentistry",
  "fellowship-in-orthopedics",
  "fellowship-in-pain-management",
  "fellowship-in-pediatric-echocardiography",
  "fellowship-in-pediatric-endocrinology",
  "fellowship-in-pediatric-neurology",
  "fellowship-in-pediatrics",
  "fellowship-in-psychiatric-medicine",
  "fellowship-in-radiology",
  "fellowship-in-reproductive-medicine",
  "fellowship-in-respiratory-medicine",
  "fellowship-in-rheumatology",
  "fellowship-in-spine-surgery",
  "fellowship-in-trichology",
  "fellowship-in-urology",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const urls = [
    ...staticRoutes.map((route) => `${SITE_URL}${route}`),
    ...programSlugs.map((slug) => `${SITE_URL}/programs/${slug}`),
  ];

  return [...new Set(urls)].map((url) => ({
    url,
    lastModified: now,
  }));
}
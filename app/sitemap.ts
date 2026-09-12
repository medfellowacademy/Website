import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/cms";

const SITE_URL = "https://www.medfellowacademy.com";

const staticRoutes = [
  "",
  "/about",
  "/contact",
  "/courses",
  "/faq",
  "/apply",
  "/verify",
  "/blog",
  "/blog/cosmetic-gynecology-procedures-every-gynecologist-should-learn",
  "/blog/career-scope-after-fellowship-in-cosmetic-gynecology",
  "/best-fellowship-course-cosmetic-gynecology-guide",
  "/blog/arthroscopy-vs-arthroplasty-fellowship",
  "/blog/career-scope-after-fellowship-in-arthroscopy-and-arthroplasty",
  "/blog/arthroplasty-fellowship-eligibility-syllabus-duration-admission",
  "/arthroscopy-and-arthroplasty-fellowship-guide",
  "/blog/how-to-choose-the-fellowship-course-in-fetal-medicine",
  "/blog/fetal-medicine-fellowship-curriculum-and-clinical-training",
  "/blog/career-opportunities-after-fellowship-in-fetal-medicine",
  "/blog/fetal-medicine-vs-maternal-fetal-medicine-differences",
  "/courses/best-fellowship-course-in-fetal-medicine",
  "/blog/how-to-choose-a-high-risk-pregnancy-fellowship",
  "/blog/questions-to-ask-before-joining-a-medical-fellowship",
  "/blog/online-vs-offline-high-risk-pregnancy-fellowship",
  "/blog/is-high-risk-pregnancy-fellowship-worth-it",
  "/blog/high-risk-pregnancy-fellowship-after-md-obg",
  "/courses/best-fellowship-course-in-high-risk-pregnancy",
  "/courses/best-fellowship-course-in-interventional-cardiology",
  "/blog/how-to-choose-interventional-cardiology-fellowship",
  "/blog/questions-to-ask-before-joining-interventional-cardiology-fellowship",
  "/blog/online-vs-offline-interventional-cardiology-fellowship",
  "/blog/is-interventional-cardiology-fellowship-worth-it",
  "/blog/skills-you-learn-interventional-cardiology-fellowship",
  "/courses/best-fellowship-course-in-reproductive-medicine",
  "/blog/how-to-choose-reproductive-medicine-fellowship",
  "/blog/questions-to-ask-before-joining-reproductive-medicine-fellowship",
  "/blog/online-vs-offline-reproductive-medicine-fellowship",
  "/blog/career-opportunities-after-reproductive-medicine-fellowship",
  "/blog/reproductive-medicine-fellowship-curriculum",
  "/courses/best-fellowship-course-in-neurosurgery",
  "/blog/how-to-choose-a-neurosurgery-fellowship",
  "/blog/online-vs-offline-neurosurgery-fellowship",
  "/blog/career-opportunities-after-a-neurosurgery-fellowship",
  "/blog/skills-you-learn-during-a-neurosurgery-fellowship",
  "/blog/neurosurgery-fellowship-curriculum",
  "/courses/best-fellowship-course-in-cardiothoracic-surgery",
  "/blog/how-to-choose-a-cardiothoracic-surgery-fellowship",
  "/blog/questions-to-ask-before-joining-a-cardiothoracic-surgery-fellowship",
  "/blog/online-vs-offline-cardiothoracic-surgery-fellowship",
  "/blog/is-a-cardiothoracic-surgery-fellowship-worth-it",
  "/blog/career-opportunities-after-a-cardiothoracic-surgery-fellowship",
  "/blog/skills-you-learn-during-a-cardiothoracic-surgery-fellowship",
  "/courses/best-fellowship-course-in-dermatology",
  "/blog/how-to-choose-a-dermatology-fellowship",
  "/blog/questions-to-ask-before-joining-a-dermatology-fellowship",
  "/blog/online-vs-offline-dermatology-fellowship",
  "/blog/skills-you-learn-during-a-dermatology-fellowship",
  "/blog/is-a-dermatology-fellowship-worth-it",
  "/best-fellowship-course-in-urology",
  "/blog/how-to-choose-a-urology-fellowship",
  "/blog/questions-to-ask-before-joining-a-urology-fellowship",
  "/blog/online-vs-offline-urology-fellowship",
  "/blog/career-opportunities-after-a-urology-fellowship",
  "/blog/who-can-apply-for-a-urology-fellowship-eligibility-guide",
  "/blog/skills-you-will-learn-during-a-urology-fellowship",
  "/best-fellowship-course-in-oral-implantology-laser-dentistry",
  "/blog/how-to-choose-an-oral-implantology-laser-dentistry-fellowship",
  "/blog/questions-to-ask-before-joining-an-oral-implantology-laser-dentistry-fellowship",
  "/blog/online-vs-offline-oral-implantology-laser-dentistry-fellowship",
  "/blog/is-an-oral-implantology-laser-dentistry-fellowship-worth-it",
  "/blog/career-opportunities-after-an-oral-implantology-laser-dentistry-fellowship",
  "/courses/best-fellowship-course-in-maxillofacial-oral-surgery",
  "/blog/how-to-choose-a-maxillofacial-oral-surgery-fellowship-course",
  "/blog/questions-to-ask-before-joining-a-maxillofacial-oral-surgery-fellowship",
  "/blog/online-vs-offline-maxillofacial-oral-surgery-fellowship-course",
  "/blog/is-maxillofacial-oral-surgery-fellowship-worth-it",
  "/blog/maxillofacial-oral-surgery-fellowship-after-md-obg",
  "/courses/best-fellowship-course-in-head-neck-oncology",
  "/blog/how-to-choose-a-head-neck-oncology-fellowship",
  "/blog/questions-to-ask-before-joining-a-head-neck-oncology-fellowship",
  "/blog/online-vs-offline-head-neck-oncology-fellowship",
  "/blog/skills-you-learn-during-a-head-neck-oncology-fellowship",
  "/blog/career-opportunities-after-a-head-neck-oncology-fellowship",
  "/courses/best-fellowship-course-in-spine-surgery",
  "/blog/how-to-choose-a-spine-surgery-fellowship",
  "/blog/questions-to-ask-before-joining-a-spine-surgery-fellowship",
  "/blog/online-vs-offline-spine-surgery-fellowship",
  "/blog/is-a-spine-surgery-fellowship-worth-it",
  "/blog/skills-you-learn-during-a-spine-surgery-fellowship",
  "/courses/best-fellowship-course-in-general-surgery",
  "/blog/how-to-choose-a-general-surgery-fellowship",
  "/blog/questions-to-ask-before-joining-a-general-surgery-fellowship",
  "/blog/online-vs-offline-general-surgery-fellowship",
  "/blog/is-a-general-surgery-fellowship-worth-it",
  "/blog/skills-you-learn-during-a-general-surgery-fellowship",
  "/comparison",
  "/faculty",
  "/fellowship-matcher",
  "/financial-aid",
  "/learning-model",
  "/mentorship",
  "/privacy-policy",
  "/research",
  "/resources",
  "/terms-and-conditions",
  "/virtual-tours",
] as const;

const countryProgramSlugs = [
  "fellowship-in-pediatrics",
  "fellowship-in-endocrinology",
  "fellowship-in-nephrology",
  "fellowship-in-gastroenterology",
  "fellowship-in-reproductive-medicine",
  "fellowship-in-neonatology",
  "fellowship-in-arthroscopy-and-arthroplasty",
] as const;

const programSlugs = [
  "fellowship-in-2d-echocardiography",
  "fellowship-in-anesthesia",
  "fellowship-in-arthroscopy",
  "fellowship-in-arthroscopy-and-arthroplasty",
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
  "fellowship-in-pediatric-orthopedics",
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

// Last time the static/program pages (not CMS-driven) had a content push.
// Bump this when a batch of static pages is meaningfully edited — do NOT
// replace it with `new Date()` computed per-request, or every static URL
// falsely reports "modified today" on every crawl, which wastes the one
// freshness signal lastModified gives search engines.
const STATIC_LAST_MODIFIED = new Date("2026-09-11");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const cmsBlogPosts = await getBlogPosts(true).catch(() => []);

  const staticUrls = [
    ...staticRoutes.map((route) => `${SITE_URL}${route}`),
    ...programSlugs.map((slug) => `${SITE_URL}/courses/${slug}`),
    `${SITE_URL}/dubai/programs`,
    ...countryProgramSlugs.map((slug) => `${SITE_URL}/dubai/programs/${slug}`),
    `${SITE_URL}/saudi-arabia/programs`,
    ...countryProgramSlugs.map((slug) => `${SITE_URL}/saudi-arabia/programs/${slug}`),
  ];

  const staticEntries = [...new Set(staticUrls)].map((url) => ({
    url,
    lastModified: STATIC_LAST_MODIFIED,
  }));

  // CMS blog posts carry their own real update time, so each one reports its
  // actual freshness instead of a blanket "now".
  const cmsSlugsSeen = new Set<string>();
  const cmsEntries = cmsBlogPosts
    .filter((post) => {
      if (cmsSlugsSeen.has(post.slug)) return false;
      cmsSlugsSeen.add(post.slug);
      return true;
    })
    .map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.updated_at || post.published_at || post.created_at),
    }));

  return [...staticEntries, ...cmsEntries];
}
/**
 * Maps program slugs to their local image paths in /public/courses/
 * Falls back to a default image if the slug isn't found.
 */
export const PROGRAM_IMAGES: Record<string, string> = {
  // ── Core Medical Specialties ──────────────────────────────────────────────
  'fellowship-in-emergency-medicine':                  '/courses/emergency-medicine.jpg',
  'fellowship-in-diabetes-mellitus':                   '/courses/diabetes.jpg',
  'fellowship-in-internal-medicine':                   '/courses/internal-medicine.jpg',
  'fellowship-in-family-medicine':                     '/courses/family-medicine.jpg',
  'fellowship-in-critical-care-medicine':              '/courses/critical-care.jpg',
  'fellowship-in-endocrinology':                       '/courses/endocrinology.jpg',
  'fellowship-in-nephrology':                          '/courses/nephrology.jpg',
  'fellowship-in-gastroenterology':                    '/courses/gastroenterology.jpg',
  'fellowship-in-rheumatology':                        '/courses/rheumatology.jpg',
  'fellowship-in-pain-management':                     '/courses/pain-management.jpg',
  'fellowship-in-psychiatric-medicine':                '/courses/psychiatry.jpg',
  'fellowship-in-psychiatry':                          '/courses/psychiatry.jpg',
  'fellowship-in-trichology':                          '/courses/trichology.jpg',
  'fellowship-in-dermatology':                         '/courses/dermatology.jpg',
  'fellowship-in-cosmetic-aesthetic-medicine':         '/courses/cosmetic-aesthetic.jpg',
  'fellowship-in-cosmetic-and-aesthetic-medicine':     '/courses/cosmetic-aesthetic.jpg',
  'fellowship-in-pediatrics':                          '/courses/pediatrics.jpg',
  'fellowship-in-neonatology':                         '/courses/neonatology.jpg',
  'fellowship-in-reproductive-medicine':               '/courses/reproductive-medicine.jpg',

  // ── Cardiology ───────────────────────────────────────────────────────────
  'fellowship-in-clinical-cardiology':                 '/courses/cardiology.jpg',
  'fellowship-in-interventional-cardiology':           '/courses/interventional-cardiology.jpg',
  'fellowship-in-2d-echocardiography':                 '/courses/2d-echo.jpg',
  'fellowship-in-2d-echo':                             '/courses/2d-echo.jpg',
  'fellowship-in-pediatric-echocardiography':          '/courses/pediatric-echo.jpg',
  'fellowship-in-pediatric-cardiology':                '/courses/pediatric-echo.jpg',
  'fellowship-in-cardiothoracic-surgery':              '/courses/cardiothoracic.jpg',

  // ── Gynecology & Obstetrics ───────────────────────────────────────────────
  'fellowship-in-gynecology-obstetrics':               '/courses/gynecology-obstetrics.jpg',
  'fellowship-in-gynecology-and-obstetrics':           '/courses/gynecology-obstetrics.jpg',
  'fellowship-in-high-risk-pregnancy':                 '/courses/high-risk-pregnancy.jpg',
  'fellowship-in-fetal-medicine':                      '/courses/Fellowship in Fetal Medicine.jpeg',
  'fellowship-in-cosmetic-gynecology':                 '/courses/cosmetic-gynecology.jpg',
  'fellowship-in-laparoscopy-hysteroscopy':            '/courses/laparoscopy-hysteroscopy.jpg',
  'fellowship-in-laparoscopy-and-hysteroscopy':        '/courses/laparoscopy-hysteroscopy.jpg',

  // ── Neurology & Neurosurgery ──────────────────────────────────────────────
  'fellowship-in-neurosurgery':                        '/courses/neurosurgery.jpg',
  'fellowship-in-clinical-neurology':                  '/courses/neurology.jpg',
  'fellowship-in-neurology':                           '/courses/neurology.jpg',
  'fellowship-in-pediatric-neurology':                 '/courses/pediatric-neurology.png',

  // ── Oncology & Haematology ────────────────────────────────────────────────
  'fellowship-in-medical-oncology':                    '/courses/oncology.jpg',
  'fellowship-in-oncology':                            '/courses/oncology.jpg',
  'fellowship-in-clinical-hematology':                 '/courses/hematology.jpg',
  'fellowship-in-hematology':                          '/courses/hematology.jpg',
  'fellowship-in-head-neck-oncology':                  '/courses/head-neck-oncology.jpg',
  'fellowship-in-head-and-neck-oncology':              '/courses/head-neck-oncology.jpg',

  // ── Radiology ────────────────────────────────────────────────────────────
  'fellowship-in-radiology':                           '/courses/radiology.jpg',
  'fellowship-in-interventional-radiology':            '/courses/interventional-radiology.jpg',

  // ── Surgery ──────────────────────────────────────────────────────────────
  'fellowship-in-urology':                             '/courses/urology.jpg',
  'fellowship-in-spine-surgery':                       '/courses/spine-surgery.jpg',
  'fellowship-in-general-surgery-1-year':              '/courses/general-surgery.jpg',
  'fellowship-in-general-surgery':                     '/courses/general-surgery.jpg',
  'fellowship-in-minimal-access-robotic-surgery':      '/courses/minimal-access-robotic-surgery.jpg',
  'fellowship-in-minimal-access-and-robotic-surgery':  '/courses/minimal-access-robotic-surgery.jpg',
  'fellowship-in-maxillofacial-oral-surgery':          '/courses/maxillofacial.jpg',
  'fellowship-in-maxillofacial-surgery':               '/courses/maxillofacial.jpg',
  'fellowship-in-oral-implantology-laser-dentistry':   '/courses/oral-implantology.jpg',
  'fellowship-in-oral-implantology':                   '/courses/oral-implantology.jpg',
  'fellowship-in-orthopedics':                         '/courses/orthopedics.jpg',
  'fellowship-in-arthroscopy':                         '/courses/arthroscopy.jpg',
  'fellowship-in-arthroscopy-sports-medicine':         '/courses/arthroscopy.jpg',
  'fellowship-in-arthroscopy-and-sports-medicine':     '/courses/arthroscopy.jpg',
  'fellowship-in-arthroscopy-and-arthroplasty':        '/courses/arthroscopy-arthroplasty.jpg',
  'fellowship-in-arthroscopy-arthroplasty':            '/courses/arthroscopy-arthroplasty.jpg',

  // ── Paediatrics ──────────────────────────────────────────────────────────
  'fellowship-in-pediatric-endocrinology':             '/courses/pediatric-endocrine.jpg',
};

export const DEFAULT_PROGRAM_IMAGE = '/courses/internal-medicine.jpg';

/**
 * Returns the image path for a program slug.
 * Falls back to DEFAULT_PROGRAM_IMAGE if not found.
 */
export function getProgramImage(slug: string): string {
  return PROGRAM_IMAGES[slug] ?? DEFAULT_PROGRAM_IMAGE;
}

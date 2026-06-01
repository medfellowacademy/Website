-- ============================================================
-- MedFellow Academy CMS - Full Migration + Seed
-- Run this in your Supabase SQL Editor
-- ============================================================

-- 1. CMS Programs
CREATE TABLE IF NOT EXISTS cms_programs (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  icon text DEFAULT '🏥',
  duration text DEFAULT '12 Months',
  eligibility text DEFAULT '',
  description text DEFAULT '',
  overview text DEFAULT '',
  highlights jsonb DEFAULT '[]',
  online_price integer,
  month_11_1 integer,
  month_10_2 integer,
  month_9_3 integer,
  month_6_6 integer,
  month_12_offline integer,
  career_opportunities jsonb DEFAULT '[]',
  application_deadline text DEFAULT 'Rolling Admissions',
  is_published boolean DEFAULT true,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 2. Curriculum Modules
CREATE TABLE IF NOT EXISTS cms_curriculum_modules (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  program_id uuid REFERENCES cms_programs(id) ON DELETE CASCADE,
  title text NOT NULL,
  topics jsonb DEFAULT '[]',
  sort_order integer DEFAULT 0
);

-- 3. Faculty
CREATE TABLE IF NOT EXISTS cms_faculty (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  title text DEFAULT '',
  credentials text DEFAULT '',
  experience text DEFAULT '',
  specialty text DEFAULT '',
  bio text DEFAULT '',
  quote text DEFAULT '',
  specialties jsonb DEFAULT '[]',
  student_rating numeric(3,1) DEFAULT 4.8,
  fellows_trained text DEFAULT '',
  highlights jsonb DEFAULT '[]',
  photo_url text DEFAULT '',
  accent_color text DEFAULT '#1B4F72',
  accent_light text DEFAULT '#D6EAF8',
  is_published boolean DEFAULT true,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 4. Testimonials
CREATE TABLE IF NOT EXISTS cms_testimonials (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  author_name text NOT NULL,
  author_title text DEFAULT '',
  author_photo text DEFAULT '',
  content text NOT NULL,
  rating integer DEFAULT 5,
  program_name text DEFAULT '',
  is_published boolean DEFAULT true,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- 5. Site Settings
CREATE TABLE IF NOT EXISTS cms_site_settings (
  key text PRIMARY KEY,
  value jsonb,
  label text DEFAULT '',
  description text DEFAULT '',
  category text DEFAULT 'general',
  updated_at timestamptz DEFAULT now()
);

-- 6. FAQs
CREATE TABLE IF NOT EXISTS cms_faqs (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  question text NOT NULL,
  answer text NOT NULL,
  category text DEFAULT 'general',
  sort_order integer DEFAULT 0,
  is_published boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- 7. Pages
CREATE TABLE IF NOT EXISTS cms_pages (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  content jsonb DEFAULT '{}',
  meta_title text DEFAULT '',
  meta_description text DEFAULT '',
  is_published boolean DEFAULT true,
  updated_at timestamptz DEFAULT now()
);

-- ============================================================
-- SEED: Site Settings
-- ============================================================
INSERT INTO cms_site_settings (key, value, label, description, category) VALUES
('site_name', '"MedFellow Academy"', 'Site Name', 'Name shown in header', 'general'),
('site_tagline', '"India''s Premier Fellowship Training Platform"', 'Tagline', 'Subtitle in hero', 'general'),
('contact_email', '"info@medfellow.in"', 'Contact Email', 'Email on contact page', 'general'),
('contact_phone', '"+91 99850 44993"', 'Contact Phone', 'Phone on contact page', 'general'),
('contact_whatsapp', '"+91 99850 44993"', 'WhatsApp', 'WhatsApp number', 'general'),
('hero_heading', '"Train Under India''s Top Specialists"', 'Hero Heading', 'Main hero title', 'hero'),
('hero_subheading', '"Fellowship programs designed for practicing doctors who want to specialise without leaving their jobs."', 'Hero Subheading', 'Hero subtitle', 'hero'),
('announcement_text', '"June 2026 batch applications now open — only 14 seats remaining"', 'Announcement Text', 'Top bar text', 'hero'),
('announcement_cta', '"Apply now"', 'Announcement CTA', 'Top bar button', 'hero'),
('stats_programs', '"60+"', 'Programs Count', 'Stats bar', 'stats'),
('stats_doctors', '"500+"', 'Doctors Trained', 'Stats bar', 'stats'),
('stats_hospitals', '"20+"', 'Hospital Partners', 'Stats bar', 'stats'),
('stats_rating', '"4.9/5"', 'Rating', 'Stats bar', 'stats'),
('footer_about', '"MedFellow Academy is India''s leading fellowship training platform, connecting practicing doctors with world-class specialist mentors."', 'Footer About', 'Footer description', 'general'),
('social_instagram', '"https://instagram.com/medfellow"', 'Instagram URL', '', 'social'),
('social_linkedin', '"https://linkedin.com/company/medfellow"', 'LinkedIn URL', '', 'social'),
('social_youtube', '"https://youtube.com/@medfellow"', 'YouTube URL', '', 'social'),
('meta_title', '"MedFellow Academy | Medical Fellowship Programs in India"', 'Meta Title', 'Default SEO title', 'seo'),
('meta_description', '"India''s premier medical fellowship programs. Learn from top specialists and advance your medical career."', 'Meta Description', 'Default SEO description', 'seo')
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value, label = EXCLUDED.label, description = EXCLUDED.description, category = EXCLUDED.category;

-- ============================================================
-- SEED: Faculty
-- ============================================================
INSERT INTO cms_faculty (name, title, credentials, experience, specialty, bio, quote, specialties, student_rating, fellows_trained, highlights, photo_url, accent_color, accent_light, is_published, sort_order)
VALUES
('Dr. Rajesh Kumar','Director, Emergency Medicine','MD, FCCM, FCEM','25+ Years','Emergency Medicine',
 'Pioneer in emergency care education, training the next generation of specialists across India''s top institutions.',
 'Every patient teaches us something new. That''s what I share with my fellows.',
 '["Emergency Care","Critical Care","Trauma"]'::jsonb,4.9,'500+',
 '["National Teaching Award 2023","100+ Publications","TEDx Speaker"]'::jsonb,
 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80','#1B4F72','#D6EAF8',true,1),

('Dr. Priya Sharma','Head, Critical Care Division','MD, DNB, EDIC','18+ Years','Critical Care',
 'Advancing critical care through evidence-based practice and compassionate teaching at premier ICUs.',
 'In ICU, we don''t just save lives — we teach doctors to think under pressure.',
 '["ICU Management","Mechanical Ventilation","Sepsis"]'::jsonb,4.8,'350+',
 '["Best Mentor Award","75+ Publications","International Faculty"]'::jsonb,
 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80','#0F766E','#CCFBF1',true,2),

('Dr. Arun Mehta','Senior Consultant, Interventional Cardiology','DM Cardiology, FSCAI','22+ Years','Cardiology',
 'Combining technical excellence with a deep commitment to hands-on training for cardiology fellows.',
 'I believe in learning by doing. My fellows perform procedures from day one — under guidance.',
 '["Angioplasty","Structural Heart","Complex Interventions"]'::jsonb,4.9,'280+',
 '["5000+ Procedures","SCAI Faculty","Excellence Award"]'::jsonb,
 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80','#1E40AF','#DBEAFE',true,3),

('Dr. Sunita Rao','Professor, Pediatric Intensive Care','MD Pediatrics, MRCPCH','20+ Years','Pediatrics',
 'Specializing in pediatric care with a focus on empathetic teaching and clinical excellence.',
 'Children aren''t small adults. I teach my fellows to see the world through a child''s eyes.',
 '["Pediatric ICU","Neonatology","Emergency"]'::jsonb,5.0,'400+',
 '["Educator of the Year","60+ Publications","Child Health Advocate"]'::jsonb,
 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80','#BE185D','#FCE7F3',true,4)
ON CONFLICT DO NOTHING;

-- ============================================================
-- SEED: All 46 Programs
-- ============================================================
INSERT INTO cms_programs (slug,name,icon,duration,eligibility,description,overview,highlights,online_price,month_11_1,month_10_2,month_9_3,month_6_6,month_12_offline,career_opportunities,application_deadline,is_published,sort_order) VALUES
('fellowship-in-emergency-medicine','Fellowship in Emergency Medicine','🚑','12 Months','MBBS','Advanced training in emergency care, trauma management, and critical decision-making.','This fellowship provides comprehensive training in emergency medicine covering trauma care, medical emergencies, toxicology, and emergency procedures.','["ICU Rotations","Trauma Management","Toxicology","Emergency Procedures"]'::jsonb,160000,180000,253000,287500,402500,506000,'["Emergency Medicine Consultant","Trauma Specialist","Critical Care Physician","Emergency Department Director"]'::jsonb,'Rolling Admissions',true,1),
('fellowship-in-diabetes-mellitus','Fellowship in Diabetes Mellitus','🩺','12 Months','MD Medicine/DNB','Focused training in diabetes care, insulin management, and metabolic disorders.','Specialized training in comprehensive diabetes management including insulin therapy, complications management, and patient education.','["Insulin Therapy","Metabolic Disorders","Diabetic Complications","Patient Education"]'::jsonb,150000,170000,276000,322000,517500,655500,'["Consultant Diabetologist","Diabetes Clinic Director","Metabolic Disease Specialist"]'::jsonb,'Rolling Admissions',true,2),
('fellowship-in-gynecology-obstetrics','Fellowship in Gynecology & Obstetrics','🤰','12 Months','MS/MD Obs & Gyn','Advanced training in high-risk obstetrics and gynecological procedures.','Specialized training in high-risk pregnancy management, advanced laparoscopic gynecology, and fetal medicine.','["High-Risk Pregnancy","Laparoscopic Surgery","Fetal Medicine","Gynec Oncology"]'::jsonb,145000,190000,264500,322000,448500,598000,'["Consultant Obstetrician","High-Risk Pregnancy Specialist","Laparoscopic Surgeon"]'::jsonb,'Rolling Admissions',true,3),
('fellowship-in-high-risk-pregnancy','Fellowship in High-Risk Pregnancy','🤰','12 Months','MS/MD/DNB Obstetrics & Gynecology','One-year structured fellowship in maternal medicine, fetal medicine, and obstetric critical care','Comprehensive fellowship in high-risk pregnancy management, maternal medicine, fetal surveillance, and obstetric critical care.','["Maternal Medicine","Fetal Medicine","Obstetric Emergencies","High-Risk Labour Management"]'::jsonb,207000,241500,NULL,NULL,NULL,NULL,'["High-Risk Pregnancy Consultant","Maternal-Fetal Medicine Specialist"]'::jsonb,'Rolling Admissions',true,4),
('fellowship-in-fetal-medicine','Fellowship in Fetal Medicine','🧫','12 Months','MS/MD/DNB Obstetrics & Gynecology','Advanced training in fetal diagnosis, imaging, genetics, and intrauterine interventions','Specialized training in fetal ultrasound, prenatal diagnosis, genetic counseling, and Doppler surveillance.','["Fetal Imaging and Diagnosis","Prenatal Genetics","Doppler and Surveillance","Fetal Therapy and Ethics"]'::jsonb,184000,241500,NULL,NULL,NULL,NULL,'["Fetal Medicine Specialist","Perinatologist","Prenatal Genetic Counselor"]'::jsonb,'Rolling Admissions',true,5),
('fellowship-in-cosmetic-gynecology','Fellowship in Cosmetic Gynecology','👩‍⚕️','12 Months','MBBS / MS / MD / DNB / Obstetrics & Gynecology qualification','Comprehensive fellowship in cosmetic gynecology integrating aesthetic, functional, and sexual wellness care.','Curriculum-focused fellowship building competency across non-surgical energy-based procedures, surgical cosmetic gynecology, and urogynecologic corrections.','["Aesthetic and functional cosmetic gynecology training","Laser, RF, PRP, injectables","Surgical cosmetic gynecology","Practice setup and business modules"]'::jsonb,160000,195000,NULL,NULL,NULL,NULL,'["Cosmetic Gynecologist","Women Wellness Specialist"]'::jsonb,'Rolling Admissions',true,6),
('fellowship-in-maxillofacial-oral-surgery','Fellowship in Maxillofacial and Oral Surgery','🦷','12 Months','BDS / MDS / MBBS / MS / DNB','Advanced competency-based training in oral and maxillofacial surgery.','Comprehensive training in maxillofacial trauma, orthognathic surgery, implantology, oral oncology, and TMJ disorders.','["Maxillofacial Trauma Surgery","Orthognathic and Reconstructive Surgery","Implantology and Bone Grafting","Oral Oncology and TMJ Care"]'::jsonb,230000,264500,NULL,NULL,NULL,NULL,'["Maxillofacial Surgeon","Oral Oncologist","Craniofacial Surgeon"]'::jsonb,'Rolling Admissions',true,7),
('fellowship-in-oral-implantology-laser-dentistry','Fellowship in Oral Implantology and Laser Dentistry','🦷','12 Months','BDS / MDS / Equivalent dental qualification','Clinically driven one-year fellowship in implant dentistry and laser-assisted procedures','Advanced training in implant planning, prosthetic rehabilitation, laser-assisted procedures, and digital workflow.','["Implant Planning and Prosthetic Rehabilitation","Laser-assisted Soft and Hard Tissue Procedures","Digital Planning with CBCT and CAD/CAM","Peri-implant Disease Management"]'::jsonb,NULL,NULL,NULL,NULL,NULL,NULL,'["Implantologist","Laser Dentistry Specialist","Prosthodontist"]'::jsonb,'Rolling Admissions',true,8),
('fellowship-in-urology','Fellowship in Urology','🧪','12 Months','MBBS / MS / DNB / Equivalent medical qualification','Master advanced urological care with clinical precision and surgical expertise.','Comprehensive training in medical and surgical urology, endoscopy, minimally invasive techniques, and uro-oncology.','["Comprehensive Medical and Surgical Urology","Endoscopic and Minimally Invasive Training","Uro-Oncology Exposure","Case-based Clinical Decision-Making"]'::jsonb,195500,218500,NULL,NULL,NULL,NULL,'["Urologist","Uro-Oncologist","Reconstructive Urologist"]'::jsonb,'Rolling Admissions',true,9),
('fellowship-in-psychiatric-medicine','Fellowship in Psychiatric Medicine','🧠','12 Months','MBBS / MD / DNB / Equivalent medical qualification','Advanced clinical training in mental health and behavioral sciences.','Training in psychiatric assessment, emergency psychiatry, psychopharmacology, counseling skills, and ethical practice.','["Case-based Psychiatric Training","Emergency and Liaison Psychiatry","Psychopharmacology and Counseling Skills","Ethical and Medico-legal Practice"]'::jsonb,172500,195500,NULL,NULL,NULL,NULL,'["Consultant Psychiatrist","Liaison Psychiatrist","Addiction Medicine Specialist"]'::jsonb,'Rolling Admissions',true,10),
('fellowship-in-neurosurgery','Fellowship in Neurosurgery','🧠','12 Months','MBBS / MS / MCh / DNB / Equivalent medical qualification','Hybrid one-year fellowship in neurosurgical foundations, emergencies, and advanced techniques','Skill-based and case-based neurosurgical training covering neurotrauma, neuro-oncology, vascular and spine surgery.','["Case-based neurosurgical training","Neurotrauma and emergency procedures","Neuro-oncology, vascular and spine exposure","Critical care concepts"]'::jsonb,195500,224750,NULL,NULL,NULL,NULL,'["Neurosurgeon","Spine Surgeon","Neuro-Oncology Surgeon"]'::jsonb,'Rolling Admissions',true,11),
('fellowship-in-clinical-neurology','Fellowship in Clinical Neurology','🧠','12 Months','MBBS / MD / DNB / Equivalent medical qualification','Hybrid one-year fellowship focused on case-based clinical neurology and diagnostic skill development','Training in acute neurology, stroke management, epilepsy, neurodegeneration, and neurodiagnostics.','["Acute Neurology and Emergency Assessment","Stroke, Epilepsy, and Neurodegeneration","Neurodiagnostics and Imaging Skills","Structured Clinical Posting"]'::jsonb,195500,224750,NULL,NULL,NULL,NULL,'["Neurologist","Stroke Specialist","Epileptologist"]'::jsonb,'Rolling Admissions',true,12),
('fellowship-in-pediatric-neurology','Fellowship in Pediatric Neurology','🧠','12 Months','MD Pediatrics / DNB Pediatrics / MD Medicine / DNB','Comprehensive one-year fellowship focused on pediatric neurological disorders.','Training in pediatric epilepsy, neurodevelopmental disorders, neuromuscular conditions, and clinical mentorship.','["Pediatric Epilepsy and Seizure Management","Neurodevelopmental and Neuromuscular Care","Neurodiagnostics and Imaging Interpretation","Case-based Clinical Mentorship"]'::jsonb,207000,241500,NULL,NULL,NULL,NULL,'["Pediatric Neurologist","Child Neurology Specialist"]'::jsonb,'Rolling Admissions',true,13),
('fellowship-in-cardiothoracic-surgery','Fellowship in Cardiothoracic Surgery','❤️','12 Months','MS / MCh / DNB / Equivalent surgical qualification','Advanced fellowship in surgical management of complex cardiac and thoracic conditions','High-intensity operative exposure in cardiac and thoracic surgery with perioperative critical care integration.','["High-intensity operative exposure","Perioperative critical care integration","Minimally invasive and robotic orientation","Multidisciplinary decision making"]'::jsonb,230000,264500,NULL,NULL,NULL,NULL,'["Cardiothoracic Surgeon","Cardiac Surgery Specialist","Thoracic Surgeon"]'::jsonb,'Rolling Admissions',true,14),
('fellowship-in-medical-oncology','Fellowship in Medical Oncology','🎗️','12 Months','MBBS with MD/DNB in General Medicine or equivalent','Advanced clinical fellowship in systemic cancer management and precision oncology.','Training in systemic cancer therapy, precision oncology, tumor board participation, and oncologic emergencies.','["Systemic Cancer Therapy Training","Precision and Personalized Oncology","Tumor Board and Multidisciplinary Exposure","Oncologic Emergency and Supportive Care"]'::jsonb,207000,230000,NULL,NULL,NULL,NULL,'["Medical Oncologist","Clinical Oncologist","Hemato-Oncologist"]'::jsonb,'Rolling Admissions',true,15),
('fellowship-in-clinical-hematology','Fellowship in Clinical Haematology','🩸','12 Months','MBBS with MD/DNB in General Medicine or equivalent','Advanced fellowship in benign and malignant blood disorders.','Training in hematology diagnostics, bone marrow procedures, transplantation principles, and hemato-oncology.','["Hematology Diagnostics and Lab Interpretation","Bone Marrow and Transplantation Principles","Immunotherapy and Supportive Hemato-Oncology","Case-based Learning and Research"]'::jsonb,207000,241500,NULL,NULL,NULL,NULL,'["Hematologist","Hemato-Oncologist","Bone Marrow Transplant Specialist"]'::jsonb,'Rolling Admissions',true,16),
('fellowship-in-head-neck-oncology','Fellowship in Head & Neck Oncology','🎗️','12 Months','MS / DNB / MD / Equivalent relevant qualification','Comprehensive fellowship in head and neck oncology surgery and multidisciplinary care.','Training in head and neck oncologic surgery, reconstruction, functional preservation, and tumor board.','["Head and Neck Oncologic Surgery","Multidisciplinary Tumor Board Exposure","Functional Preservation and Rehabilitation","Evidence-based Oncology Care"]'::jsonb,207000,241500,NULL,NULL,NULL,NULL,'["Head & Neck Oncologic Surgeon","Otolaryngologist-Oncologist","Skull Base Surgeon"]'::jsonb,'Rolling Admissions',true,17),
('fellowship-in-trichology','Fellowship in Trichology','💇','12 Months','MBBS / MD / DNB / Equivalent medical qualification','Advanced clinical training in hair and scalp disorders.','Training in hair and scalp disorders, procedural trichology, surgical hair restoration, trichoscopy, and clinic setup.','["Hair and Scalp Disorder Care","Procedural and Surgical Hair Restoration","Diagnostic Trichoscopy","Clinic Setup and Practice Growth"]'::jsonb,195500,218500,NULL,NULL,NULL,NULL,'["Trichologist","Hair Restoration Surgeon","Dermatologist-Trichologist"]'::jsonb,'Rolling Admissions',true,18),
('fellowship-in-radiology','Fellowship in Radiology','🩻','12 Months','MBBS / MD / DNB / Equivalent medical qualification','Comprehensive fellowship in diagnostic imaging and image-guided interventions.','Training in cross-sectional imaging, emergency radiology, image-guided procedures, and structured reporting.','["Cross-sectional and Emergency Imaging","Image-guided Procedural Basics","Structured Reporting","Radiation Safety"]'::jsonb,195500,218500,NULL,NULL,NULL,NULL,'["Radiologist","Interventional Radiologist","Neuroradiologist"]'::jsonb,'Rolling Admissions',true,19),
('fellowship-in-interventional-radiology','Fellowship in Interventional Radiology','🩻','12 Months','MBBS / MD / DNB / Equivalent medical qualification','Advanced fellowship in image-guided minimally invasive procedures.','Training in vascular, non-vascular, and oncologic interventions using multimodality imaging guidance.','["Image-guided Procedural Training","Vascular and Non-vascular Interventions","Multimodality Guidance","Evidence-based Clinical Integration"]'::jsonb,NULL,NULL,NULL,NULL,NULL,NULL,'["Interventional Radiologist","Vascular Interventionist"]'::jsonb,'Rolling Admissions',true,20),
('fellowship-in-pediatrics','Fellowship in Pediatrics','👶','12 Months','MD Pediatrics/DNB','Comprehensive training in pediatric care and child health management.','Advanced training in comprehensive pediatric care including neonatal management, pediatric emergencies, and child development.','["Neonatal Care","Pediatric Emergencies","Child Development"]'::jsonb,172500,207000,276000,322000,540500,667000,'["Pediatric Consultant","Neonatologist","Pediatric Emergency Physician"]'::jsonb,'Rolling Admissions',true,21),
('fellowship-in-dermatology','Fellowship in Dermatology','✨','12 Months','MBBS','Advanced training in dermatological procedures and cosmetic dermatology.','Training in skin diseases, cosmetic dermatology, laser therapy, and dermatological surgery.','["Cosmetic Procedures","Laser Therapy","Skin Surgery"]'::jsonb,184000,212750,264500,287500,448500,598000,'["Dermatologist","Cosmetic Dermatologist","Dermatological Surgeon"]'::jsonb,'Rolling Admissions',true,22),
('fellowship-in-cosmetic-aesthetic-medicine','Fellowship in Cosmetic and Aesthetic Medicine','💆','12 Months','MBBS','Comprehensive training in cosmetic medicine and aesthetic procedures.','Training in facial aesthetics, injectable treatments, laser & IPL, and clinical ethics for aesthetic medicine.','["Facial Aesthetics","Injectable Treatments","Laser & IPL","Clinical Ethics"]'::jsonb,172500,207000,264500,310500,448500,598000,'["Aesthetic Medicine Physician","Cosmetic Doctor","Anti-Aging Specialist"]'::jsonb,'Rolling Admissions',true,23),
('fellowship-in-internal-medicine','Fellowship in Internal Medicine','⚕️','12 Months','MBBS','Comprehensive training in adult medicine and clinical decision-making.','Advanced training in internal medicine covering critical care, clinical diagnosis, and comprehensive patient management.','["Critical Care","Clinical Diagnosis","Patient Management"]'::jsonb,201250,212750,253000,276000,402500,517500,'["Internist","Hospitalist","General Medicine Consultant"]'::jsonb,'Rolling Admissions',true,24),
('fellowship-in-clinical-cardiology','Fellowship in Clinical Cardiology','❤️','12 Months','MBBS/MD General Medicine','Specialized training in cardiovascular disease management and diagnostics.','Training in ECG interpretation, echocardiography, cardiac emergencies, and cardiovascular disease management.','["ECG Interpretation","Echo Cardiography","Cardiac Emergencies"]'::jsonb,184000,218500,276000,322000,552000,747500,'["Cardiologist","Clinical Cardiologist","Cardiac Care Specialist"]'::jsonb,'Rolling Admissions',true,25),
('fellowship-in-critical-care-medicine','Fellowship in Critical Care Medicine','🏥','12 Months','MD/DNB Medicine/Anesthesia','Comprehensive training in managing critically ill patients.','Training in ventilator management, hemodynamics, point-of-care ultrasound, and ICU patient management.','["Ventilator Management","Hemodynamics","Point-of-Care Ultrasound"]'::jsonb,172500,207000,264500,310500,517500,678500,'["Critical Care Specialist","Intensivist","ICU Consultant"]'::jsonb,'Rolling Admissions',true,26),
('fellowship-in-family-medicine','Fellowship in Family Medicine','👨‍👩‍👧‍👦','12 Months','MBBS','Comprehensive training in primary care and family health management.','Training in primary care, preventive medicine, community health, and family medicine practice.','["Primary Care","Preventive Medicine","Community Health"]'::jsonb,172500,195500,253000,287500,379500,506000,'["Family Physician","Primary Care Doctor","Community Health Physician"]'::jsonb,'Rolling Admissions',true,27),
('fellowship-in-rheumatology','Fellowship in Rheumatology','🩺','12 Months','MBBS / MD / DNB / Equivalent medical qualification','One-year clinically focused training in rheumatic diseases and immunology.','Training in clinical rheumatology, autoimmunity, musculoskeletal medicine, and procedural skills.','["Clinical Rheumatology","Immunology and Autoimmunity","Musculoskeletal Medicine","Procedural Skills"]'::jsonb,207000,230000,NULL,NULL,NULL,NULL,'["Rheumatologist","Autoimmune Disease Specialist","Musculoskeletal Medicine Physician"]'::jsonb,'Rolling Admissions',true,28),
('fellowship-in-pain-management','Fellowship in Pain Management','💉','12 Months','MBBS / MD / DNB / Equivalent medical qualification','One-year fellowship in pain medicine and interventional skills.','Training in pain medicine foundations, interventional procedures, multidisciplinary care, and palliative pain management.','["Pain Medicine Foundations","Interventional Procedures","Multidisciplinary Care","Palliative Pain"]'::jsonb,172500,195500,NULL,NULL,NULL,NULL,'["Pain Management Specialist","Interventional Pain Physician","Palliative Care Specialist"]'::jsonb,'Rolling Admissions',true,29),
('fellowship-in-endocrinology','Fellowship in Endocrinology','⚕️','12 Months','MD Medicine/DNB','Comprehensive training in hormone disorders and endocrine management.','Training in thyroid, pituitary, adrenal, and metabolic disorders, bone health and endocrine emergencies.','["Thyroid Disorders","Pituitary Disorders","Bone Health"]'::jsonb,207000,241500,276000,322000,563500,747500,'["Endocrinologist","Metabolic Specialist","Thyroid Specialist"]'::jsonb,'Rolling Admissions',true,30),
('fellowship-in-orthopedics','Fellowship in Orthopaedics','🦴','12 Months','MS/MD/DNB Orthopaedics','Comprehensive training in orthopedic surgery and trauma.','Training in orthopedic surgery, trauma surgery, sports medicine, and fracture management.','["Trauma Surgery","Sports Medicine","Fracture Management"]'::jsonb,184000,207000,276000,310500,494500,644000,'["Orthopedic Surgeon","Trauma Surgeon","Sports Medicine Physician"]'::jsonb,'Rolling Admissions',true,31),
('fellowship-in-spine-surgery','Fellowship in Spine Surgery','🦴','12 Months','MS/MD/DNB Orthopaedics / Neurosurgery','One-year modular fellowship in spine surgery.','Training in degenerative spine disease, spine trauma, deformity correction, and minimally invasive spine surgery.','["Degenerative Spine Disorders","Spine Trauma","Deformity and Pediatric Spine","MISS and Navigation"]'::jsonb,207000,241500,NULL,NULL,NULL,NULL,'["Spine Surgeon","Minimally Invasive Spine Specialist"]'::jsonb,'Rolling Admissions',true,32),
('fellowship-in-general-surgery-1-year','Fellowship in General Surgery (1 Year)','🩺','12 Months','MS/DNB General Surgery / Equivalent medical qualification','Comprehensive one-year fellowship in core general surgery.','Training in core general surgery, trauma, emergency surgery, minimal access surgery, and hernia surgery.','["Core General Surgery Foundations","Trauma and Emergency Care Exposure","Minimal Access and Hernia Surgery","Skills and Procedure-based Learning"]'::jsonb,230000,264500,NULL,NULL,NULL,NULL,'["General Surgeon","Laparoscopic Surgeon","Trauma Surgeon"]'::jsonb,'Rolling Admissions',true,33),
('fellowship-in-minimal-access-robotic-surgery','Fellowship in Minimal Access & Robotic Surgery','🤖','12 Months','MS/DNB General Surgery','One-year fellowship in laparoscopic and robotic surgery.','Training in laparoscopy, robotics, simulation, advanced GI surgery, hernia surgery, and ERAS protocols.','["Laparoscopy and Robotics Foundations","Simulation and Core Skills","Advanced GI and Hernia Surgery","ERAS and Practice Integration"]'::jsonb,230000,264500,NULL,NULL,NULL,NULL,'["Laparoscopic Surgeon","Robotic Surgeon","Minimally Invasive Surgery Specialist"]'::jsonb,'Rolling Admissions',true,34),
('fellowship-in-laparoscopy-hysteroscopy','Fellowship in Laparoscopy & Hysteroscopy','🧬','12 Months','MS/MD/DNB Obstetrics & Gynecology','One-year blended fellowship in diagnostic and operative gynecological endoscopy','Training in diagnostic and operative endoscopy, advanced laparoscopic surgery, hysteroscopy, and practice setup.','["Diagnostic and Operative Endoscopy","Advanced Laparoscopic Surgery","Advanced Hysteroscopy","Ethics and Practice Setup"]'::jsonb,207000,241500,NULL,NULL,NULL,NULL,'["Gynecologic Endoscopist","Laparoscopic Gynecologist"]'::jsonb,'Rolling Admissions',true,35),
('fellowship-in-nephrology','Fellowship in Nephrology','🫘','12 Months','MD/DNB General Medicine','Specialized training in kidney diseases and dialysis management.','Training in nephrology, dialysis management, kidney disorders, and transplant medicine.','["Dialysis","Kidney Disorders","Transplant Medicine"]'::jsonb,207000,224250,287500,333500,563500,793500,'["Nephrologist","Dialysis Specialist","Renal Transplant Physician"]'::jsonb,'Rolling Admissions',true,36),
('fellowship-in-gastroenterology','Fellowship in Gastroenterology','🔬','12 Months','MD/DNB General Medicine','Comprehensive training in diagnostic and therapeutic gastroenterology.','Training in endoscopy, colonoscopy, ERCP, and comprehensive gastroenterology and hepatology.','["Endoscopy","Colonoscopy","ERCP"]'::jsonb,207000,224250,276000,322000,563500,782000,'["Gastroenterologist","Hepatologist","Advanced Endoscopist"]'::jsonb,'Rolling Admissions',true,37),
('fellowship-in-reproductive-medicine','Fellowship in Reproductive Medicine','👶','12 Months','MD/MS/DNB/DGO','Specialized training in infertility and assisted reproductive techniques.','Training in IVF, ICSI, fertility preservation, reproductive endocrinology, and ART procedures.','["IVF","ICSI","Fertility Preservation"]'::jsonb,184000,241500,287500,333500,563500,793500,'["Reproductive Medicine Specialist","Fertility Specialist","IVF Clinician"]'::jsonb,'Rolling Admissions',true,38),
('fellowship-in-neonatology','Fellowship in Neonatology','👶','12 Months','MD/DNB Pediatrics','Advanced fellowship in neonatal critical care and NICU emergency management.','NICU-focused training with case-based and protocol-driven learning, real-world neonatal emergency exposure.','["NICU-focused Practical Training","Case-based Protocol-driven Learning","Neonatal Emergency Exposure","Hands-on Clinical Skills"]'::jsonb,218500,241500,281750,327750,563500,747500,'["Neonatologist","NICU Specialist","Perinatal Medicine Specialist"]'::jsonb,'Rolling Admissions',true,39),
('fellowship-in-pediatric-echocardiography','Fellowship in Pediatric Echocardiography','🫀','12 Months','MBBS / MD / DNB / Equivalent medical qualification','Fellowship in pediatric cardiac ultrasound for neonates, infants, and children.','Structured 12-month fellowship in TTE, TEE, fetal echo, Doppler, and congenital heart disease interpretation.','["Structured blended fellowship","TTE, TEE, fetal echo and Doppler","Congenital heart disease learning","Clinical interpretation and decision-making"]'::jsonb,218500,241500,287500,333500,563500,782000,'["Pediatric Echocardiographer","Pediatric Cardiologist"]'::jsonb,'Rolling Admissions',true,40),
('fellowship-in-2d-echocardiography','Fellowship in 2D Echocardiography','🫀','12 Months','MBBS / MD / DNB','Structured training in 2D echocardiography, Doppler studies, and cardiac diagnosis.','Training in 2D and M-mode echo, Doppler studies, TEE, simulation, and case-based cardiac diagnosis.','["2D and M-Mode Echo","Doppler and TEE","Case-based Diagnosis"]'::jsonb,184000,218500,276000,322000,552000,747500,'["Echocardiographer","Cardiologist","Cardiac Imaging Specialist"]'::jsonb,'Rolling Admissions',true,41),
('fellowship-in-pediatric-endocrinology','Fellowship in Pediatric Endocrinology','💉','12 Months','MBBS / MD / DNB / MS','Comprehensive training in hormonal and metabolic disorders in children.','Training in pediatric diabetes, growth disorders, thyroid and adrenal disorders, and pubertal abnormalities.','["Growth & Diabetes Management","Thyroid & Adrenal Disorders","Pubertal Abnormalities"]'::jsonb,218500,241500,281750,327750,563500,747500,'["Pediatric Endocrinologist","Pediatric Diabetologist"]'::jsonb,'Rolling Admissions',true,42),
('fellowship-in-interventional-cardiology','Fellowship in Interventional Cardiology','❤️','24 Months','DM/DNB Cardiology','Specialized training in coronary and structural heart interventions.','Advanced training in coronary angioplasty, structural heart disease interventions, device implantation, and cardiac catheterization.','["Angioplasty","Device Implantation","Structural Interventions"]'::jsonb,253000,299000,333500,379500,575000,805000,'["Interventional Cardiologist","Structural Heart Disease Specialist"]'::jsonb,'Rolling Admissions',true,43),
('fellowship-in-cardiology','Fellowship in Cardiology','❤️','12 Months','MD Medicine/DNB','Advanced training in cardiovascular disease management and cardiac diagnostics.','Training in ECG interpretation, echocardiography, cardiac care, and cardiovascular disease management.','["ECG Interpretation","Echocardiography","Cardiac Care"]'::jsonb,184000,218500,276000,322000,552000,747500,'["Cardiologist","Clinical Cardiologist","Cardiac Care Consultant"]'::jsonb,'Rolling Admissions',true,44),
('fellowship-in-arthroscopy','Fellowship in Arthroscopy','🦴','12 Months','MS/MD/DNB Ortho / Equivalent medical qualification','Advanced one-year fellowship in diagnostic and therapeutic arthroscopy.','Training in knee and shoulder arthroscopy, hip and ankle arthroscopy, complications management, and sports medicine.','["Knee and Shoulder Arthroscopy","Hip, Ankle, Elbow and Wrist Arthroscopy","Complications and Revision Arthroscopy","Surgical Logbook and OSATS Assessment"]'::jsonb,207000,241500,NULL,NULL,NULL,NULL,'["Arthroscopic Surgeon","Sports Medicine Surgeon"]'::jsonb,'Rolling Admissions',true,45),
('fellowship-in-arthroscopy-and-arthroplasty','Fellowship in Arthroscopy & Arthroplasty','🦴','12 Months','MS/MD/DNB Ortho','One-year structured fellowship in arthroscopy, sports medicine, and arthroplasty.','Training in arthroscopy, sports medicine, arthroplasty, joint replacement, and revision surgery.','["Arthroscopy and Sports Medicine","Arthroplasty and Joint Replacement","Integrated Practice and Revision","Research Integration"]'::jsonb,207000,241500,276000,322000,563500,701500,'["Joint Replacement Surgeon","Arthroscopic Surgeon","Sports Medicine Specialist"]'::jsonb,'Rolling Admissions',true,46)
ON CONFLICT (slug) DO NOTHING;

-- ─── Seed: FAQs ──────────────────────────────────────────────────────────────
INSERT INTO cms_faqs (question, answer, sort_order, is_published) VALUES
('Who is eligible to apply for a MedFellow fellowship?',
 'Most programs are open to MBBS graduates and above. Super-specialty programs require a relevant postgraduate qualification (MD/MS/DNB). Specific eligibility criteria are listed on each program page.',
 1, true),
('How long do the fellowship programs run?',
 'All fellowship programs are 12 months in duration. They are structured in flexible formats — fully online, hybrid (online + periodic hospital rotations), and full offline (onsite hospital training).',
 2, true),
('Are these programs recognised internationally?',
 'Yes. Upon completion, you receive an internationally accredited fellowship certificate. Our programs are designed in alignment with global clinical standards and are recognised by partner hospitals and academic institutions.',
 3, true),
('Can I continue my practice while enrolled?',
 'Absolutely — most fellows enroll while actively practicing. Our online modules are asynchronous and self-paced, with scheduled live sessions on weekends. Hospital rotations are planned in advance.',
 4, true),
('How much do fellows typically earn after completing a fellowship?',
 'Our alumni report an average income increase of 156% within 18 months of completing the fellowship. Emergency Medicine fellows typically move from Rs 60,000-80,000/month as general practitioners to Rs 2.5-4 lakhs/month as specialist consultants. Salary outcomes vary by specialty, city, and experience level.',
 5, true),
('What if I need to pause or take a break from the program?',
 'We understand that practicing doctors face unpredictable schedules. Fellows may apply for a pause of up to 3 months per year without losing progress. Clinical rotation schedules are pre-planned, so pauses are factored into your timeline. Contact our academic office at least 2 weeks in advance to arrange a pause.',
 6, true),
('What is the fee structure and are there EMI options?',
 'Fees vary by program and training format. Online programs start from Rs 1.5 lakhs. We offer easy EMI options through our financial partners. Contact our admissions team for a detailed fee breakdown.',
 7, true),
('How does the hospital-based training work?',
 'We have partnerships with premier hospitals including AIIMS, Apollo, Fortis, and Max Healthcare. Fellows attend supervised clinical rotations in OTs, ICUs, and specialty departments with senior faculty mentors.',
 8, true),
('Is there career placement support after completion?',
 'Yes. We provide dedicated placement assistance including resume building, interview preparation, and introductions to our hospital and corporate partners. Our alumni network spans 500+ specialists.',
 9, true),
('How do I apply and how long does the process take?',
 'Click Apply Now, fill in your details, select your program, and submit your documents. The application takes under 10 minutes. Our academic committee reviews applications and responds within 3-5 working days.',
 10, true)
ON CONFLICT DO NOTHING;

-- ─── Seed: Testimonials ───────────────────────────────────────────────────────
INSERT INTO cms_testimonials (author_name, author_title, content, rating, program_name, is_published, sort_order) VALUES
('Dr. Amit Patel', 'Emergency Medicine Fellow, Apollo Hospitals, Ahmedabad',
 'I went from earning Rs 80,000/month to Rs 3.2 lakhs/month as an ER specialist in just 14 months. The fellowship completely transformed my career.',
 5, 'Fellowship in Emergency Medicine', true, 1),
('Dr. Sneha Verma', 'Critical Care Fellow, Max Healthcare, Delhi',
 'Before the fellowship, I was stuck in a career plateau. Now I am a sought-after ICU consultant with multiple hospital partnerships.',
 5, 'Fellowship in Critical Care Medicine', true, 2),
('Dr. Rajan Nair', 'Gastroenterology Fellow, Fortis Hospital, Bangalore',
 'The hands-on training was exceptional. Within 6 months of completing the fellowship I had two hospital offers and a 2.4x salary increase.',
 5, 'Fellowship in Gastroenterology', true, 3),
('Dr. Pooja Reddy', 'Reproductive Medicine Fellow, CARE Fertility, Hyderabad',
 'The curriculum is practical and immediately applicable. I feel far more confident in my specialty and have set up my own IVF practice.',
 5, 'Fellowship in Reproductive Medicine', true, 4),
('Dr. Suresh Menon', 'Diabetology Fellow, KIMS Hospital, Kerala',
 'I handled more cases in 12 months than in years of regular practice. Highly recommended for any doctor serious about specialising.',
 5, 'Fellowship in Diabetes Mellitus', true, 5),
('Dr. Kavita Singh', 'Pain Management Fellow, Medanta Hospital, Gurugram',
 'The support from mentors even after completing the fellowship has been invaluable in setting up my own pain management clinic.',
 5, 'Pain Management', true, 6)
ON CONFLICT DO NOTHING;

-- Done!
SELECT 'CMS setup complete!' as status,
  (SELECT COUNT(*) FROM cms_programs) as programs,
  (SELECT COUNT(*) FROM cms_faculty) as faculty,
  (SELECT COUNT(*) FROM cms_site_settings) as settings,
  (SELECT COUNT(*) FROM cms_faqs) as faqs,
  (SELECT COUNT(*) FROM cms_testimonials) as testimonials;

// Shared by the online Apply form and the printable / downloadable form,
// so both always show the same programs, terms and declarations.

export const PROGRAMS = [
  // Critical Care & Emergency
  { value: 'emergency-medicine', label: 'Fellowship in Emergency Medicine' },
  { value: 'critical-care', label: 'Fellowship in Critical Care' },
  { value: 'internal-medicine', label: 'Fellowship in Internal Medicine' },
  { value: 'family-medicine', label: 'Fellowship in Family Medicine' },
  { value: 'Infectious Disease', label: 'Fellowship in Infectious Disease' },
  { value: ' Palliative Medicine & Supportive Care', label: 'Fellowship Palliative Medicine & Supportive Care' },
  // Cardiology
  { value: 'clinical-cardiology', label: 'Fellowship in Clinical Cardiology' },
  { value: 'echocardiography', label: 'Fellowship in Echocardiography' },
  { value: 'interventional-cardiology', label: 'Fellowship in Interventional Cardiology' },
  { value: 'pediatric-cardiology', label: 'Fellowship in Pediatric Cardiology' },
  { value: 'cardiothoracic-vascular-surgery', label: 'Fellowship in Cardiothoracic and Vascular Surgery' },
   { value: 'Cardiac Imaging', label: 'Fellowship in Cardiac Imaging' },
  // Obstetrics & Gynecology
  { value: 'obstetrics-gynecology', label: 'Fellowship in Obstetrics & Gynecology' },
  { value: 'high-risk-pregnancy', label: 'Fellowship in High Risk Pregnancy' },
  { value: 'fetal-medicine', label: 'Fellowship in Fetal Medicine' },
  { value: 'fetal-echocardiography', label: 'Fellowship in Fetal Echocardiography' },
  { value: 'laparoscopy-hysteroscopy', label: 'Fellowship in Laparoscopy & Hysteroscopy' },
  { value: 'cosmetic-gynecology', label: 'Fellowship in Cosmetic Gynecology' },
  { value: 'gyne-oncology', label: 'Fellowship in Gynaecological Oncology' },
  // Reproductive Medicine & IVF
  { value: 'reproductive-medicine', label: 'Fellowship in Reproductive Medicine' },
  { value: 'embryology', label: 'Fellowship in Embryology' },
  // Diabetes & Endocrinology
  { value: 'diabetology', label: 'Fellowship in Diabetology (Diabetes Mellitus)' },
  { value: 'endocrinology', label: 'Fellowship in Endocrinology' },
  { value: 'paediatric-endocrinology', label: 'Fellowship in Paediatric Endocrinology' },
  // Gastroenterology
  { value: 'gastroenterology', label: 'Fellowship in Gastroenterology' },
  { value: 'gi-endoscopy', label: 'Fellowship in GI Endoscopy' },
  // Dermatology & Aesthetics
  { value: 'dermatology', label: 'Fellowship in Dermatology' },
  { value: 'trichology', label: 'Fellowship in Trichology' },
  { value: 'cosmetology-aesthetic-medicine', label: 'Fellowship in Cosmetology & Aesthetic Medicine' },
  // Surgery
  { value: 'general-surgery', label: 'Fellowship in General Surgery' },
  { value: 'minimal-access-surgery', label: 'Fellowship in Minimal Access Surgery' },
   { value: 'Minimal Invasive-surgery', label: 'Fellowship in Minimal Invasive Surgery' },
  { value: 'arthroscopy-arthroplasty', label: 'Fellowship in Arthroscopy & Arthroplasty' },
  { value: 'orthopedics', label: 'Fellowship in Orthopedics' },
  { value: 'spinal-cord-surgery', label: 'Fellowship in Spinal Cord Surgery' },
  { value: 'spine-medicine', label: 'Fellowship in Spine Medicine' },
  { value: 'neuro-surgery', label: 'Fellowship in Neurosurgery' },
  { value: 'plastic-surgery', label: 'Fellowship in Plastic Surgery' },
  { value: 'microsurgery', label: 'Fellowship in Microsurgery' },
  { value: 'vascular-surgery', label: 'Fellowship in Vascular Surgery' },
  { value: 'paediatric-surgery', label: 'Fellowship in Paediatric Surgery' },
  { value: 'orthognathic-surgery-maxillofacial-trauma', label: 'Fellowship in Orthognathic Surgery & Maxillofacial Trauma' },
  { value: 'orthodontics', label: 'Fellowship in Orthodontics' },
  // Oncology
  { value: 'surgical-oncology', label: 'Fellowship in Surgical Oncology' },
  { value: 'medical-oncology', label: 'Fellowship in Medical Oncology' },
  { value: 'head-neck-oncology', label: 'Fellowship in Head and Neck Oncology' },
  { value: 'endocrine-breast-onco-surgery', label: 'Fellowship in Endocrine and Breast Onco Surgery' },
  { value: 'oral-oncology', label: 'Fellowship in Oral Oncology' },
  // Paediatrics
  { value: 'pediatrics', label: 'Fellowship in Pediatrics' },
  { value: 'neonatology', label: 'Fellowship in Neonatology' },
  { value: 'pediatric-neurology', label: 'Fellowship in Pediatric Neurology' },
  { value: 'paediatric-echocardiography', label: 'Fellowship in Paediatric Echocardiography' },
  { value: 'pediatric-orthopedics', label: 'Fellowship in Pediatric Orthopedics' },
  { value: 'pediatrics Emergency', label: 'Fellowship in Pediatrics Emergency' },
  { value: 'pediatrics', label: 'Fellowship in Pediatrics Critical Care Medicine' },
  // Neurology
  { value: 'neurology', label: 'Fellowship in Neurology' },
  // Radiology & Imaging
  { value: 'radiology', label: 'Fellowship in Radiology' },
  { value: 'neuroradiology', label: 'Fellowship in Neuroradiology' },
  { value: 'interventional-radiology', label: 'Fellowship in Interventional Radiology' },
  { value: 'interventional-neuro-radiology', label: 'Fellowship in Interventional Neuroradiology' },
  { value: 'musculoskeletal-ultrasound', label: 'Fellowship in Musculoskeletal Ultrasound' },
  { value: 'vascular-ultrasound', label: 'Fellowship in Vascular Ultrasound' },
  { value: 'Breast Imaging', label: 'Fellowship in Breast Imaging' },
  { value: 'usg', label: 'Fellowship in USG' },
  // Pain & Anaesthesia
  { value: 'pain-management', label: 'Fellowship in Pain Management' },
  { value: 'interventional-pain-management', label: 'Fellowship in Interventional Pain Management & Regional Anaesthesiology' },
  { value: 'anesthesiology', label: 'Fellowship in Anesthesiology' },
  // Nephrology & Urology
  { value: 'nephrology', label: 'Fellowship in Nephrology' },
  { value: 'urology', label: 'Fellowship in Urology' },
  { value: 'endourology', label: 'Fellowship in Endourology' },
   { value: 'Urogynecology', label: 'Fellowship in Urogynecology' },
  // Other Specialties
  { value: 'pulmonary-medicine', label: 'Fellowship in Pulmonary Medicine' },
  { value: 'rheumatology', label: 'Fellowship in Rheumatology' },
   { value: 'Advanced Certificate in Rheumatology', label: 'Advanced Certificate in Rheumatology' },
  { value: 'psychiatry', label: 'Fellowship in Psychiatry' },
  { value: 'ophthalmology', label: 'Fellowship in Ophthalmology' },
  { value: 'oral-implantology-laser-dentistry', label: 'Fellowship in Oral Implantology and Laser Dentistry' },
  { value: 'maxillofacial-surgery', label: 'Fellowship in Maxillofacial Surgery' },
  { value: 'epidemiology', label: 'Fellowship in Epidemiology' },
  { value: 'sexology', label: 'Fellowship in Sexology' },
  { value: 'otorhinolaryngology-ent', label: 'Fellowship in Otorhinolaryngology (ENT)' },
  { value: 'clinical-nutrition', label: 'Fellowship in Clinical Nutrition' },
  { value: 'Bariatric Endoscopy', label: 'Fellowship in Bariatric Endoscopy' },
  { value: 'Hospital Management', label: 'Fellowship in Hospital Management' },
];

export const PRACTICE_TYPES = [
  { value: 'gp', label: 'General Practitioner' },
  { value: 'consultant', label: 'Consultant' },
  { value: 'surgeon', label: 'Surgeon' },
  { value: 'hospital_employed', label: 'Hospital-employed' },
  { value: 'clinic_owner', label: 'Clinic Owner' },
];

export const STEPS = [
  { id: 1, title: 'Personal Details', desc: 'Your basic information' },
  { id: 2, title: 'Professional Details', desc: 'Qualifications & practice' },
  { id: 3, title: 'Course Selection', desc: 'Program & preferences' },
  { id: 4, title: 'Documents & Declaration', desc: 'Upload & confirm' },
];

export const DECLARATIONS = [
  'I confirm that I am a qualified medical professional with a valid registration to practice.',
  'I declare that all information provided by me is true and accurate to the best of my knowledge.',
  'I understand that submission of false information may lead to cancellation of my application without refund.',
  'I agree to comply with all academic requirements, assessments, and program guidelines of MedFellow Academy.',
  'I understand that this fellowship is an educational program and does not grant a new medical license or specialist recognition under statutory bodies.',
  'I agree to maintain professional ethics during training, especially during hospital-based practical sessions.',
];

export const TERMS_SECTIONS = [
  {
    title: 'A. Eligibility',
    items: [
      'Applicant must hold a valid MBBS degree (for speciality programs).',
      'Super-speciality programs require a relevant postgraduate qualification or equivalent experience.',
      'MedFellow reserves the right to accept/reject applications.',
    ],
  },
  {
    title: 'B. Certification Clause',
    items: [
      'Fellowship certification is awarded upon: completion of academic modules, attendance compliance, and assessment clearance.',
    ],
  },
  {
    title: 'C. Training Clause',
    items: [
      'Hands-on training is subject to hospital availability, case load, and specialty-specific conditions.',
      'MedFellow acts as a facilitator between the doctor and the hospital.',
    ],
  },
  {
    title: 'D. Payment & Refund Policy',
    items: [
      'Within 7 days of enrollment - Partial refund applicable.',
      'After course access is granted - No refund.',
      'GST and transaction charges are non-refundable.',
    ],
  },
  {
    title: 'E. Usage & Conduct',
    items: [
      'Candidate must not misuse certification or claim a specialist title unlawfully.',
      'Must follow ethical medical practice norms at all times.',
    ],
  },
  {
    title: 'F. Data Privacy',
    items: [
      'Applicant data will be stored securely and used for academic and communication purposes only.',
      'MedFellow may use anonymised data for analytics and send course-related communication.',
    ],
  },
];

export const DOC_SLOTS = [
  { key: 'degree',       label: 'MBBS / PG Degree Certificate',     accept: '.pdf,.jpg,.jpeg,.png', hint: 'PDF or Image' },
  { key: 'registration', label: 'Medical Registration Certificate',  accept: '.pdf,.jpg,.jpeg,.png', hint: 'PDF or Image' },
  { key: 'govtId',       label: 'Govt ID Proof (Aadhar / Passport)', accept: '.pdf,.jpg,.jpeg,.png', hint: 'PDF or Image' },
  { key: 'cv',           label: 'CV / Resume',                       accept: '.pdf,.doc,.docx',      hint: 'PDF or Word' },
  { key: 'photo',        label: 'Recent Photograph',                 accept: '.jpg,.jpeg,.png',      hint: 'JPG or PNG' },
];

export const MODES = [
  { value: 'online_handson', label: 'Online + Hands-on Training', desc: 'In-depth clinical exposure with practical sessions' },
  { value: 'online_only', label: 'Online Only', desc: 'Flexible digital learning from anywhere' },
  { value: 'offline_only', label: 'Offline Only', desc: 'In-depth clinical exposure with practical sessions' },
];

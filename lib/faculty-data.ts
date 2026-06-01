export interface FacultyMember {
  name: string;
  title: string;
  credentials: string;
  experience: string;
  specialty: string;
  bio: string;
  quote: string;
  specialties: string[];
  studentRating: number;
  fellowsTrained: string;
  highlights: string[];
  photo: string;
  accentColor: string;
  accentLight: string;
}

export const FACULTY_DATA: FacultyMember[] = [
  {
    name: 'Dr. Kiran Vadapalli',
    title: 'Faculty – Critical Care Medicine',
    credentials: 'DM Critical Care Medicine',
    experience: '10+ Years in Critical Care Medicine',
    specialty: 'Critical Care',
    bio: 'Specialist in critical care with extensive ICU experience, training fellows in ventilator management and hemodynamic monitoring.',
    quote: 'Mastering critical care means mastering every second.',
    specialties: ['ICU Management', 'Ventilator Care', 'Hemodynamics'],
    studentRating: 4.9,
    fellowsTrained: '100+',
    highlights: ['DM Critical Care Medicine', 'ICU Specialist'],
    photo: '/faculty/dr-kiran-vadapalli.jpg',
    accentColor: '#15401E',
    accentLight: '#e8f2ea',
  },
  {
    name: 'Dr. Supriya Kumari',
    title: 'Consultant – IVF & Infertility',
    credentials: 'MBBS, MD (OBG), DNB (OBG), DM Reproductive Medicine',
    experience: 'DM Reproductive Medicine from AIIMS New Delhi',
    specialty: 'Reproductive Medicine',
    bio: 'DM in Reproductive Medicine from AIIMS New Delhi. Expert in IVF, ICSI, and advanced infertility treatments guiding fellows through hands-on ART procedures.',
    quote: 'Every IVF cycle is a story of hope and science.',
    specialties: ['IVF & ICSI', 'Infertility', 'Fetal Medicine'],
    studentRating: 4.9,
    fellowsTrained: '80+',
    highlights: ['DM from AIIMS New Delhi', 'ART Specialist'],
    photo: '/faculty/dr-supriya-kumari.jpg',
    accentColor: '#BE185D',
    accentLight: '#FCE7F3',
  },
  {
    name: 'Dr. MD Munner Ahmed',
    title: 'Faculty – Internal Medicine',
    credentials: 'MBBS, MD Internal Medicine',
    experience: 'Specialist in Internal Medicine & Emergency Medicine',
    specialty: 'Internal Medicine',
    bio: 'Experienced internist with expertise spanning family medicine and emergency care, bringing real-world clinical insight to fellowship training.',
    quote: 'Internal medicine is the foundation of all clinical practice.',
    specialties: ['Internal Medicine', 'Emergency Medicine', 'Family Medicine'],
    studentRating: 4.8,
    fellowsTrained: '120+',
    highlights: ['MD Internal Medicine', 'Emergency Specialist'],
    photo: '/faculty/dr-md-munner-ahmed.jpg',
    accentColor: '#1E40AF',
    accentLight: '#DBEAFE',
  },
  {
    name: 'Dr. Mounika Murari',
    title: 'Faculty – Oral & Maxillofacial Surgery',
    credentials: 'BDS, MDS (Oral & Maxillofacial Surgery)',
    experience: 'Specialist in Oral & Maxillofacial Surgery',
    specialty: 'Oral Surgery',
    bio: 'Specialist in oral and maxillofacial surgery with expertise in facial trauma, orthognathic surgery and oral oncology, guiding fellows through advanced surgical techniques.',
    quote: 'Precision in surgery begins with thorough understanding of anatomy.',
    specialties: ['Oral Surgery', 'Facial Trauma', 'Dental Surgery'],
    studentRating: 4.9,
    fellowsTrained: '50+',
    highlights: ['MDS Oral & Maxillofacial Surgery', 'Surgical Specialist'],
    photo: '/faculty/dr-mounika-murari.jpg',
    accentColor: '#0F766E',
    accentLight: '#CCFBF1',
  },
];

export function toFacultySlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\./g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function cmsToFacultyMember(f: any): FacultyMember {
  return {
    name:          f.name ?? '',
    title:         f.title ?? '',
    credentials:   f.credentials ?? '',
    experience:    f.experience ?? '',
    specialty:     f.specialty ?? '',
    bio:           f.bio ?? '',
    quote:         f.quote ?? '',
    specialties:   f.specialties ?? [],
    studentRating: f.student_rating ?? 4.8,
    fellowsTrained: f.fellows_trained ?? '',
    highlights:    f.highlights ?? [],
    photo:         f.photo_url ?? '',
    accentColor:   f.accent_color ?? '#15401E',
    accentLight:   f.accent_light ?? '#e8f2ea',
  };
}

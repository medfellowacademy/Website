import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getFaculty } from "@/lib/cms";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Our Faculty | Expert Medical Educators at MedFellow Academy",
  description: "Meet MedFellow Academy's distinguished faculty — senior specialists and academic leaders with 15–25+ years of clinical experience across cardiology, critical care, surgery, and more.",
  openGraph: {
    title: "Faculty at MedFellow Academy",
    description: "Senior specialists and academic leaders guiding the next generation of medical fellows.",
    url: "https://medfellowacademy.com/faculty",
  },
};

const STATIC_FACULTY = [
  { name: "Dr. Kiran Vadapalli", title: "Faculty – Critical Care Medicine", credentials: "DM Critical Care Medicine", institution: "Super Speciality Hospital", experience: "10+ years in Critical Care Medicine", specialization: "Fellowship in Critical Care Medicine", initials: "KV", photo: "/faculty/dr-kiran-vadapalli.jpg" },
  { name: "Dr. Supriya Kumari", title: "Consultant – IVF & Infertility", credentials: "MBBS, MD (OBG), DNB (OBG), MNAMS, MRCOG (1), DM Reproductive Medicine (AIIMS, New Delhi)", institution: "Super Speciality Hospital", experience: "DM Reproductive Medicine from AIIMS New Delhi", specialization: "Gynecology and Obstetrics, Reproductive Medicine, Fetal Medicine", initials: "SK", photo: "/faculty/dr-supriya-kumari.jpg" },
  { name: "Dr. MD Munner Ahmed", title: "Faculty – Internal Medicine", credentials: "MBBS, MD Internal Medicine", institution: "Super Speciality Hospital", experience: "Specialist in Internal Medicine & Emergency Medicine", specialization: "Family Medicine, Emergency Medicine, Internal Medicine", initials: "MA", photo: "/faculty/dr-md-munner-ahmed.jpg" },
  { name: "Dr. Mounika Murari", title: "Faculty – Oral & Maxillofacial Surgery", credentials: "BDS, MDS (Oral & Maxillofacial Surgery)", institution: "Super Speciality Hospital", experience: "Specialist in Oral & Maxillofacial Surgery", specialization: "Oral & Maxillofacial Surgery, Dental Surgery, Facial Trauma", initials: "MM", photo: "/faculty/dr-mounika-murari.jpg" },
];

interface FacultyDisplayItem {
  name: string;
  title: string;
  credentials: string;
  institution: string;
  experience: string;
  specialization: string;
  initials: string;
  photo: string;
}

export default async function FacultyPage() {
  let faculty: FacultyDisplayItem[] = STATIC_FACULTY;

  try {
    const cmsData = await getFaculty();
    if (cmsData && cmsData.length > 0) {
      const published = cmsData.filter(f => f.is_published);
      if (published.length > 0) {
        faculty = published.map(f => ({
          name: f.name,
          title: f.title,
          credentials: f.credentials,
          institution: f.specialty,          // specialty used as institution label
          experience: f.experience,
          specialization: f.specialties?.join(', ') || f.specialty,
          initials: f.name.split(' ').filter(Boolean).map((w: string) => w[0]).slice(0, 2).join('').toUpperCase(),
          photo: f.photo_url || '',
        }));
      }
    }
  } catch {
    // DB unavailable — use static fallback
  }

  const AVATAR_GRADIENT_CLASSES = [
    'from-[#15401E] to-[#15401E]',
    'from-[#0F766E] to-[#14B8A6]',
    'from-[#1E40AF] to-[#3B82F6]',
    'from-[#BE185D] to-[#F472B6]',
    'from-[#7C3AED] to-[#A78BFA]',
    'from-[#B45309] to-[#F59E0B]',
    'from-[#047857] to-[#34D399]',
    'from-[#9D174D] to-[#F9A8D4]',
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Page header */}
      <section className="border-b border-[#E5E7EB] py-10 md:py-14">
        <div className="container-custom">
          <span className="section-label">{faculty.length} Faculty Members</span>
          <h1 className="section-title mt-2 mb-3">Our Faculty</h1>
          <p className="section-subtitle">
            Learn from distinguished clinicians and academic leaders who are experts in their fields.
          </p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {faculty.map((member, index) => (
              <div key={index} className="card p-6 hover:shadow-xl transition-all group">
                <div className="flex flex-col items-center text-center mb-4">
                  {member.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mb-4 group-hover:scale-110 transition-transform"
                    />
                  ) : (
                    <div
                      className={`w-24 h-24 bg-gradient-to-br ${AVATAR_GRADIENT_CLASSES[index % AVATAR_GRADIENT_CLASSES.length]} rounded-full flex items-center justify-center text-white text-2xl font-heading mb-4 group-hover:scale-110 transition-transform`}
                    >
                      {member.initials}
                    </div>
                  )}

                  <h3 className="text-xl font-heading font-bold text-primary mb-1">{member.name}</h3>
                  <p className="text-secondary font-semibold mb-2">{member.title}</p>
                  <p className="text-sm text-text-secondary mb-1">{member.credentials}</p>
                  <p className="text-sm text-text-tertiary">{member.institution}</p>
                </div>

                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <div>
                    <span className="block text-xs font-semibold text-accent mb-1">Experience</span>
                    <span className="text-sm text-text-secondary">{member.experience}</span>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-accent mb-1">Specialization</span>
                    <span className="text-sm text-text-secondary">{member.specialization}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-background rounded-2xl p-8 sm:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-4">Join Our Expert Faculty Team</h3>
            <p className="text-base sm:text-lg text-text-secondary mb-6 max-w-2xl mx-auto">
              We&apos;re always looking for passionate educators and experienced clinicians to join our team
            </p>
            <a href="mailto:info@medfellow.in" className="btn-primary px-8 py-3">
              Apply to Teach
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

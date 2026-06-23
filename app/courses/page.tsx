import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPrograms } from "@/lib/cms";
import ProgramsClient, { ProgramCard } from "./ProgramsClient";

export const dynamic = 'force-dynamic';

// Static fallback data (used if DB is empty)
const STATIC_PROGRAMS: ProgramCard[] = [
  { name: "Fellowship in Emergency Medicine", slug: "fellowship-in-emergency-medicine", icon: "🚑", duration: "12 Months", eligibility: "MBBS", description: "Advanced training in emergency care and trauma management", highlights: ["ICU Rotations", "Trauma Management", "Toxicology"] },
  { name: "Fellowship in Diabetes Mellitus", slug: "fellowship-in-diabetes-mellitus", icon: "🩺", duration: "12 Months", eligibility: "MD Medicine/DNB", description: "Focused training in diabetes care and metabolic disorders", highlights: ["Insulin Therapy", "Metabolic Disorders", "Diabetic Complications"] },
  { name: "Fellowship in Gynecology & Obstetrics", slug: "fellowship-in-gynecology-obstetrics", icon: "🤰", duration: "12 Months", eligibility: "MS/MD Obs & Gyn", description: "Advanced training in high-risk obstetrics and gynecology", highlights: ["High-Risk Pregnancy", "Laparoscopic Surgery", "Fetal Medicine"] },
  { name: "Fellowship in Pediatrics", slug: "fellowship-in-pediatrics", icon: "👶", duration: "12 Months", eligibility: "MD Pediatrics/DNB", description: "Comprehensive training in pediatric care and child health management", highlights: ["Neonatal Care", "Pediatric Emergencies", "Child Development"] },
  { name: "Fellowship in Dermatology", slug: "fellowship-in-dermatology", icon: "✨", duration: "12 Months", eligibility: "MBBS", description: "Advanced training in dermatological procedures and cosmetic dermatology", highlights: ["Cosmetic Procedures", "Laser Therapy", "Skin Surgery"] },
  { name: "Fellowship in Critical Care Medicine", slug: "fellowship-in-critical-care-medicine", icon: "🏥", duration: "12 Months", eligibility: "MD/DNB Medicine/Anesthesia", description: "Comprehensive training in managing critically ill patients", highlights: ["Ventilator Management", "Hemodynamics", "Point-of-Care Ultrasound"] },
  { name: "Fellowship in Internal Medicine", slug: "fellowship-in-internal-medicine", icon: "⚕️", duration: "12 Months", eligibility: "MBBS", description: "Comprehensive training in adult medicine and clinical decision-making", highlights: ["Critical Care", "Clinical Diagnosis", "Patient Management"] },
  { name: "Fellowship in Endocrinology", slug: "fellowship-in-endocrinology", icon: "⚕️", duration: "12 Months", eligibility: "MD Medicine/DNB", description: "Comprehensive training in hormone disorders", highlights: ["Thyroid Disorders", "Pituitary Disorders", "Bone Health"] },
];

export default async function ProgramsPage() {
  let programs: ProgramCard[] = STATIC_PROGRAMS;

  try {
    const cmsPrograms = await getPrograms();
    if (cmsPrograms && cmsPrograms.length > 0) {
      programs = cmsPrograms
        .filter((p) => p.is_published && p.slug !== 'fellowship-in-cardiology')
        .map((p) => ({
          name: p.name,
          slug: p.slug,
          icon: p.icon,
          duration: p.duration,
          eligibility: p.eligibility,
          description: p.description,
          highlights: p.highlights ?? [],
          onlinePrice: p.online_price,
        }));
    }
  } catch {
    // DB unavailable — use static fallback silently
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Page header */}
      <section className="border-b border-[#E5E7EB] py-10 md:py-14">
        <div className="container-custom">
          <span className="section-label">{programs.length} Programs</span>
          <h1 className="section-title mt-2 mb-3">Fellowship Programs</h1>
          <p className="section-subtitle">
            Specialized fellowship programs across multiple medical disciplines — click any program to view curriculum and apply.
          </p>
        </div>
      </section>

      {/* Programs list (client interactive) */}
      <section className="section-padding bg-white">
        <ProgramsClient programs={programs} />
      </section>

      <Footer />
    </div>
  );
}

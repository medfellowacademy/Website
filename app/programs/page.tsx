import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from 'next/image';

export default function ProgramsPage() {
  const allPrograms = [
    {
      name: "Fellowship in Arthroscopy and Arthroplasty",
      slug: "fellowship-in-arthroscopy-and-arthroplasty",
      category: "Surgical Specialties",
      icon: "🦴",
      duration: "12 Months",
      eligibility: "MS Orthopedics/DNB",
      description: "Advanced training in arthroscopic procedures and joint replacement surgery",
      highlights: ["Knee Arthroscopy", "Hip Replacement", "Shoulder Surgery"],
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80"
    },
    {
      name: "Fellowship in Gastroenterology",
      slug: "fellowship-in-gastroenterology",
      category: "Medical Specialties",
      icon: "🔬",
      duration: "12 Months",
      eligibility: "MD Medicine/DNB",
      description: "Comprehensive training in diagnostic and therapeutic gastroenterology",
      highlights: ["Endoscopy", "Colonoscopy", "ERCP"],
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80"
    },
    {
      name: "Fellowship in Reproductive Medicine",
      slug: "fellowship-in-reproductive-medicine",
      category: "Reproductive Medicine",
      icon: "👶",
      duration: "12 Months",
      eligibility: "MD/MS Obs & Gyn",
      description: "Specialized training in infertility and assisted reproductive techniques",
      highlights: ["IVF", "ICSI", "Fertility Preservation"],
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80"
    },
    {
      name: "Fellowship in Pain Management",
      slug: "fellowship-in-pain-management",
      category: "Critical Care & Emergency",
      icon: "💊",
      duration: "12 Months",
      eligibility: "MD/DNB Anesthesia",
      description: "Expert training in interventional pain management",
      highlights: ["Nerve Blocks", "Spinal Interventions", "Chronic Pain"],
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80"
    },
    {
      name: "Fellowship in Diabetology",
      slug: "fellowship-in-diabetology",
      category: "Medical Specialties",
      icon: "🩺",
      duration: "12 Months",
      eligibility: "MD Medicine/DNB",
      description: "Focused training in diabetes care and metabolic disorders",
      highlights: ["Insulin Therapy", "Metabolic Disorders", "Diabetic Complications"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
    },
    {
      name: "Fellowship in Endocrinology",
      slug: "fellowship-in-endocrinology",
      category: "Medical Specialties",
      icon: "⚕️",
      duration: "12 Months",
      eligibility: "MD Medicine/DNB",
      description: "Comprehensive training in hormone disorders and endocrine management",
      highlights: ["Thyroid Disorders", "Pituitary Disorders", "Bone Health"],
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80"
    },
    {
      name: "Fellowship in Rheumatology",
      slug: "fellowship-in-rheumatology",
      category: "Medical Specialties",
      icon: "🦾",
      duration: "12 Months",
      eligibility: "MD Medicine/DNB",
      description: "Advanced training in autoimmune and musculoskeletal disorders",
      highlights: ["Arthritis Management", "Autoimmune Diseases", "Biologics"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
    },
    {
      name: "Fellowship in Neurology",
      slug: "fellowship-in-neurology",
      category: "Medical Specialties",
      icon: "🧠",
      duration: "12 Months",
      eligibility: "MD Medicine/DNB",
      description: "Specialized training in neurological disorders",
      highlights: ["Stroke Management", "Epilepsy", "Neurodegenerative Disorders"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80"
    },
    {
      name: "Fellowship in Radiology",
      slug: "fellowship-in-radiology",
      category: "Interventional & Diagnostic",
      icon: "📡",
      duration: "12 Months",
      eligibility: "MD Radio-Diagnosis",
      description: "Advanced imaging techniques and interventional procedures",
      highlights: ["CT/MRI", "Interventional Radiology", "Cross-sectional Imaging"],
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80"
    },
    {
      name: "Fellowship in Ultrasonography",
      slug: "fellowship-in-ultrasonography",
      category: "Interventional & Diagnostic",
      icon: "📊",
      duration: "6 Months",
      eligibility: "MBBS/MD",
      description: "Focused training in diagnostic ultrasound",
      highlights: ["Abdominal USG", "Obstetric USG", "Vascular Doppler"],
      image: "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=800&q=80"
    },
    {
      name: "Fellowship in Interventional Cardiology",
      slug: "fellowship-in-interventional-cardiology",
      category: "Interventional & Diagnostic",
      icon: "❤️",
      duration: "24 Months",
      eligibility: "DM/DNB Cardiology",
      description: "Specialized training in coronary and structural heart interventions",
      highlights: ["Angioplasty", "Device Implantation", "Structural Interventions"],
      image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=800&q=80"
    },
    {
      name: "Fellowship in Orthopedics",
      slug: "fellowship-in-orthopedics",
      category: "Surgical Specialties",
      icon: "🦴",
      duration: "12 Months",
      eligibility: "MS Orthopedics/DNB",
      description: "Comprehensive training in orthopedic surgery and trauma",
      highlights: ["Trauma Surgery", "Sports Medicine", "Fracture Management"],
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80"
    },
    {
      name: "Fellowship in Gynecology & Obstetrics",
      slug: "fellowship-in-gynecology-obstetrics",
      category: "Surgical Specialties",
      icon: "🤰",
      duration: "12 Months",
      eligibility: "MS/MD Obs & Gyn",
      description: "Advanced training in high-risk obstetrics and gynecology",
      highlights: ["High-Risk Pregnancy", "Laparoscopic Surgery", "Fetal Medicine"],
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80"
    },
    {
      name: "Fellowship in General Surgery",
      slug: "fellowship-in-general-surgery",
      category: "Surgical Specialties",
      icon: "🏥",
      duration: "12 Months",
      eligibility: "MS General Surgery",
      description: "Expert training in advanced general surgical techniques",
      highlights: ["Laparoscopy", "GI Surgery", "Emergency Surgery"],
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80"
    },
    {
      name: "Fellowship in Spine Surgery",
      slug: "fellowship-in-spine-surgery",
      category: "Surgical Specialties",
      icon: "🦴",
      duration: "12 Months",
      eligibility: "MS Orthopedics/Neurosurgery",
      description: "Specialized training in spinal disorders and minimally invasive spine surgery",
      highlights: ["Spinal Decompression", "Spinal Fusion", "Minimally Invasive"],
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
    },
    {
      name: "Fellowship in Emergency Medicine",
      slug: "fellowship-in-emergency-medicine",
      category: "Critical Care & Emergency",
      icon: "🚑",
      duration: "12 Months",
      eligibility: "MBBS with 2+ years",
      description: "Advanced training in emergency care and trauma management",
      highlights: ["ICU Rotations", "Trauma Management", "Toxicology"],
      image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&q=80"
    },
    {
      name: "Fellowship in Critical Care Medicine",
      slug: "fellowship-in-critical-care-medicine",
      category: "Critical Care & Emergency",
      icon: "🏥",
      duration: "12 Months",
      eligibility: "MD/DNB Medicine/Anesthesia",
      description: "Comprehensive training in managing critically ill patients",
      highlights: ["Ventilator Management", "Hemodynamics", "Point-of-Care Ultrasound"],
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80"
    }
  ];

  const categories = [
    { name: "Surgical Specialties", icon: "🏥", color: "from-blue-500 to-blue-600" },
    { name: "Medical Specialties", icon: "⚕️", color: "from-green-500 to-green-600" },
    { name: "Interventional & Diagnostic", icon: "🔬", color: "from-purple-500 to-purple-600" },
    { name: "Critical Care & Emergency", icon: "🚑", color: "from-red-500 to-red-600" },
    { name: "Reproductive Medicine", icon: "👶", color: "from-pink-500 to-pink-600" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary to-primary-dark text-white py-20">
        <div className="container-custom text-center">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur rounded-full mb-4">
            <span className="font-semibold">17 Specialized Programs</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Fellowship Programs</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            Explore our comprehensive range of specialized fellowship programs across multiple medical disciplines. Click any program to view detailed curriculum and apply.
          </p>
        </div>
      </section>

      {/* Filter by Category */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Browse by Specialty</h2>
            <p className="text-lg text-text-secondary">Select a category to filter programs or scroll to view all</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all cursor-pointer group border-2 border-transparent hover:border-secondary">
                <div className={`w-16 h-16 mx-auto mb-4 bg-linear-to-br ${category.color} rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <h3 className="font-heading font-bold text-primary group-hover:text-secondary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-text-secondary mt-2">
                  {allPrograms.filter(p => p.category === category.name).length} Programs
                </p>
              </div>
            ))}
          </div>

          {/* All Programs Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-8">All Fellowship Programs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allPrograms.map((program, index) => (
                <Link 
                  key={index} 
                  href={`/programs/${program.slug}`}
                  className="card overflow-hidden hover:shadow-2xl hover:border-secondary transition-all group cursor-pointer transform hover:-translate-y-1 flex flex-col"
                >
                  {/* Program Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                    {/* Icon Badge */}
                    <div className="absolute bottom-4 left-4 w-14 h-14 bg-white/95 rounded-xl flex items-center justify-center text-3xl shadow-lg">
                      {program.icon}
                    </div>
                    <span className="absolute top-4 right-4 px-3 py-1 bg-secondary text-white rounded-full text-xs font-bold shadow-lg">
                      {program.category}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    {/* Program Name */}
                    <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                      {program.name}
                    </h3>

                    {/* Duration & Eligibility */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary/5 text-primary rounded-full text-sm font-medium flex items-center gap-1">
                        <span>⏱️</span> {program.duration}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-text-secondary rounded-full text-sm flex items-center gap-1">
                        <span>📋</span> {program.eligibility}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary mb-4 leading-relaxed line-clamp-2">
                      {program.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6 grow">
                      <div className="flex flex-wrap gap-2">
                        {program.highlights.slice(0, 3).map((highlight, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-accent/10 text-accent rounded border border-accent/20">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                      <span className="text-secondary font-semibold text-sm group-hover:underline">
                        View Full Details
                      </span>
                      <span className="text-secondary text-xl group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-linear-to-br from-primary to-primary-dark rounded-2xl p-12 text-white">
            <div className="max-w-3xl mx-auto">
              <div className="text-5xl mb-6">🎓</div>
              <h3 className="text-3xl font-heading font-bold mb-4">Ready to Start Your Fellowship Journey?</h3>
              <p className="text-lg mb-8 opacity-90 leading-relaxed">
                Join hundreds of doctors who have advanced their careers through our world-class fellowship programs. Apply now or schedule a consultation with our admissions team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/apply" className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-accent hover:text-white transition-all text-lg">
                  Apply Now
                </Link>
                <Link href="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-all text-lg">
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

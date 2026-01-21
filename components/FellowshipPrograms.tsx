import Link from 'next/link';
import Image from 'next/image';

export default function FellowshipPrograms() {
  const programs = [
    {
      name: "Fellowship in Arthroscopy and Arthroplasty",
      duration: "12 Months",
      eligibility: "MS Orthopedics/DNB",
      description: "Advanced training in arthroscopic procedures and joint replacement surgery.",
      highlights: ["Knee Arthroscopy", "Hip Replacement", "Shoulder Surgery"],
      icon: "🦴",
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80"
    },
    {
      name: "Fellowship in Gastroenterology",
      duration: "12 Months",
      eligibility: "MD Medicine/DNB",
      description: "Comprehensive training in diagnostic and therapeutic gastroenterology procedures.",
      highlights: ["Endoscopy", "Colonoscopy", "ERCP"],
      icon: "🔬",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80"
    },
    {
      name: "Fellowship in Reproductive Medicine",
      duration: "12 Months",
      eligibility: "MD/MS Obs & Gyn",
      description: "Specialized training in infertility management and assisted reproductive techniques.",
      highlights: ["IVF", "ICSI", "Fertility Preservation"],
      icon: "👶",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80"
    },
    {
      name: "Fellowship in Pain Management",
      duration: "12 Months",
      eligibility: "MD/DNB Anesthesia",
      description: "Expert training in interventional pain management and chronic pain treatment.",
      highlights: ["Nerve Blocks", "Spinal Interventions", "Chronic Pain"],
      icon: "💊",
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80"
    },
    {
      name: "Fellowship in Diabetology",
      duration: "12 Months",
      eligibility: "MD Medicine/DNB",
      description: "Focused training in diabetes care, insulin management, and metabolic disorders.",
      highlights: ["Insulin Therapy", "Metabolic Disorders", "Diabetic Complications"],
      icon: "🩺",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
    },
    {
      name: "Fellowship in Endocrinology",
      duration: "12 Months",
      eligibility: "MD Medicine/DNB",
      description: "Comprehensive training in hormone disorders and endocrine system management.",
      highlights: ["Thyroid Disorders", "Pituitary Disorders", "Bone Health"],
      icon: "⚕️",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80"
    },
    {
      name: "Fellowship in Rheumatology",
      duration: "12 Months",
      eligibility: "MD Medicine/DNB",
      description: "Advanced training in autoimmune diseases and musculoskeletal disorders.",
      highlights: ["Arthritis Management", "Autoimmune Diseases", "Biologics"],
      icon: "🦾",
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80"
    },
    {
      name: "Fellowship in Neurology",
      duration: "12 Months",
      eligibility: "MD Medicine/DNB",
      description: "Specialized training in neurological disorders and neurocritical care.",
      highlights: ["Stroke Management", "Epilepsy", "Neurodegenerative Disorders"],
      icon: "🧠",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80"
    },
    {
      name: "Fellowship in Radiology",
      duration: "12 Months",
      eligibility: "MD Radio-Diagnosis",
      description: "Advanced imaging techniques and interventional radiology procedures.",
      highlights: ["CT/MRI", "Interventional Radiology", "Cross-sectional Imaging"],
      icon: "📡",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80"
    },
    {
      name: "Fellowship in Ultrasonography",
      duration: "6 Months",
      eligibility: "MBBS/MD",
      description: "Focused training in diagnostic ultrasound and point-of-care sonography.",
      highlights: ["Abdominal USG", "Obstetric USG", "Vascular Doppler"],
      icon: "📊",
      image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=800&q=80"
    },
    {
      name: "Fellowship in Interventional Cardiology",
      duration: "24 Months",
      eligibility: "DM/DNB Cardiology",
      description: "Specialized training in coronary interventions and structural heart procedures.",
      highlights: ["Angioplasty", "Device Implantation", "Structural Interventions"],
      icon: "❤️",
      image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=800&q=80"
    },
    {
      name: "Fellowship in Orthopedics",
      duration: "12 Months",
      eligibility: "MS Orthopedics/DNB",
      description: "Comprehensive training in orthopedic surgery and trauma management.",
      highlights: ["Trauma Surgery", "Sports Medicine", "Fracture Management"],
      icon: "🦴",
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80"
    },
    {
      name: "Fellowship in Gynecology & Obstetrics",
      duration: "12 Months",
      eligibility: "MS/MD Obs & Gyn",
      description: "Advanced training in high-risk obstetrics and gynecological procedures.",
      highlights: ["High-Risk Pregnancy", "Laparoscopic Surgery", "Fetal Medicine"],
      icon: "🤰",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80"
    },
    {
      name: "Fellowship in General Surgery",
      duration: "12 Months",
      eligibility: "MS General Surgery",
      description: "Expert training in advanced general surgical techniques and procedures.",
      highlights: ["Laparoscopy", "GI Surgery", "Emergency Surgery"],
      icon: "🏥",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80"
    },
    {
      name: "Fellowship in Spine Surgery",
      duration: "12 Months",
      eligibility: "MS Orthopedics/Neurosurgery",
      description: "Specialized training in spinal disorders and minimally invasive spine surgery.",
      highlights: ["Spinal Decompression", "Spinal Fusion", "Minimally Invasive"],
      icon: "🦴",
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80"
    },
    {
      name: "Fellowship in Emergency Medicine",
      duration: "12 Months",
      eligibility: "MBBS with 2+ years",
      description: "Advanced training in emergency care, trauma management, and critical decision-making.",
      highlights: ["ICU Rotations", "Trauma Management", "Toxicology"],
      icon: "🚑",
      image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&q=80"
    },
    {
      name: "Fellowship in Critical Care Medicine",
      duration: "12 Months",
      eligibility: "MD/DNB Medicine/Anesthesia",
      description: "Comprehensive training in managing critically ill patients in ICU settings.",
      highlights: ["Ventilator Management", "Hemodynamics", "Point-of-Care Ultrasound"],
      icon: "🏥",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80"
    }
  ];

  // Show only featured programs on homepage (first 6)
  const featuredPrograms = programs.slice(0, 6);

  return (
    <section id="programs" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-secondary">FEATURED PROGRAMS</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            Popular Fellowship Programs
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Explore our most sought-after specializations with proven career outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredPrograms.map((program, index) => (
            <div key={index} className="card overflow-hidden hover:border-secondary hover:shadow-xl group">
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
              </div>

              <div className="p-6 lg:p-8">
                {/* Program Name */}
                <h3 className="text-xl font-heading font-semibold text-primary mb-3 group-hover:text-secondary transition-colors">
                  {program.name}
                </h3>

                {/* Duration & Eligibility */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                    ⏱️ {program.duration}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-text-secondary rounded-full text-sm">
                    {program.eligibility}
                  </span>
                </div>

                {/* Description */}
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {program.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-primary mb-2">Key Focus Areas:</p>
                  <div className="flex flex-wrap gap-2">
                    {program.highlights.map((highlight, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-primary/5 text-primary rounded border border-primary/10">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link href={`/programs/${program.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="block w-full text-center px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-all duration-200">
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link href="/programs" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-accent transition-all text-lg shadow-lg hover:shadow-xl">
            View All 17 Programs
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <p className="text-sm text-text-secondary mt-3">
            Including Critical Care, Emergency Medicine, Spine Surgery & more
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 lg:p-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl text-white shadow-2xl">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-4">Can't find what you're looking for?</h3>
            <p className="text-lg mb-6 opacity-90">We offer customized fellowship programs tailored to your specialization needs</p>
            <Link href="/contact" className="inline-block px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-accent hover:text-white transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

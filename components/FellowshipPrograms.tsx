import Link from 'next/link';

export default function FellowshipPrograms() {
  const programs = [
    {
      name: "Fellowship in Arthroscopy and Arthroplasty",
      duration: "12 Months",
      eligibility: "MS Orthopedics/DNB",
      description: "Advanced training in arthroscopic procedures and joint replacement surgery.",
      highlights: ["Knee Arthroscopy", "Hip Replacement", "Shoulder Surgery"],
      icon: "🦴"
    },
    {
      name: "Fellowship in Gastroenterology",
      duration: "12 Months",
      eligibility: "MD Medicine/DNB",
      description: "Comprehensive training in diagnostic and therapeutic gastroenterology procedures.",
      highlights: ["Endoscopy", "Colonoscopy", "ERCP"],
      icon: "🔬"
    },
    {
      name: "Fellowship in Reproductive Medicine",
      duration: "12 Months",
      eligibility: "MD/MS Obs & Gyn",
      description: "Specialized training in infertility management and assisted reproductive techniques.",
      highlights: ["IVF", "ICSI", "Fertility Preservation"],
      icon: "👶"
    },
    {
      name: "Fellowship in Pain Management",
      duration: "12 Months",
      eligibility: "MD/DNB Anesthesia",
      description: "Expert training in interventional pain management and chronic pain treatment.",
      highlights: ["Nerve Blocks", "Spinal Interventions", "Chronic Pain"],
      icon: "💊"
    },
    {
      name: "Fellowship in Diabetology",
      duration: "12 Months",
      eligibility: "MD Medicine/DNB",
      description: "Focused training in diabetes care, insulin management, and metabolic disorders.",
      highlights: ["Insulin Therapy", "Metabolic Disorders", "Diabetic Complications"],
      icon: "🩺"
    },
    {
      name: "Fellowship in Endocrinology",
      duration: "12 Months",
      eligibility: "MD Medicine/DNB",
      description: "Comprehensive training in hormone disorders and endocrine system management.",
      highlights: ["Thyroid Disorders", "Pituitary Disorders", "Bone Health"],
      icon: "⚕️"
    },
    {
      name: "Fellowship in Rheumatology",
      duration: "12 Months",
      eligibility: "MD Medicine/DNB",
      description: "Advanced training in autoimmune diseases and musculoskeletal disorders.",
      highlights: ["Arthritis Management", "Autoimmune Diseases", "Biologics"],
      icon: "🦾"
    },
    {
      name: "Fellowship in Neurology",
      duration: "12 Months",
      eligibility: "MD Medicine/DNB",
      description: "Specialized training in neurological disorders and neurocritical care.",
      highlights: ["Stroke Management", "Epilepsy", "Neurodegenerative Disorders"],
      icon: "🧠"
    },
    {
      name: "Fellowship in Radiology",
      duration: "12 Months",
      eligibility: "MD Radio-Diagnosis",
      description: "Advanced imaging techniques and interventional radiology procedures.",
      highlights: ["CT/MRI", "Interventional Radiology", "Cross-sectional Imaging"],
      icon: "📡"
    },
    {
      name: "Fellowship in Ultrasonography",
      duration: "6 Months",
      eligibility: "MBBS/MD",
      description: "Focused training in diagnostic ultrasound and point-of-care sonography.",
      highlights: ["Abdominal USG", "Obstetric USG", "Vascular Doppler"],
      icon: "📊"
    },
    {
      name: "Fellowship in Interventional Cardiology",
      duration: "24 Months",
      eligibility: "DM/DNB Cardiology",
      description: "Specialized training in coronary interventions and structural heart procedures.",
      highlights: ["Angioplasty", "Device Implantation", "Structural Interventions"],
      icon: "❤️"
    },
    {
      name: "Fellowship in Orthopedics",
      duration: "12 Months",
      eligibility: "MS Orthopedics/DNB",
      description: "Comprehensive training in orthopedic surgery and trauma management.",
      highlights: ["Trauma Surgery", "Sports Medicine", "Fracture Management"],
      icon: "🦴"
    },
    {
      name: "Fellowship in Gynecology & Obstetrics",
      duration: "12 Months",
      eligibility: "MS/MD Obs & Gyn",
      description: "Advanced training in high-risk obstetrics and gynecological procedures.",
      highlights: ["High-Risk Pregnancy", "Laparoscopic Surgery", "Fetal Medicine"],
      icon: "🤰"
    },
    {
      name: "Fellowship in General Surgery",
      duration: "12 Months",
      eligibility: "MS General Surgery",
      description: "Expert training in advanced general surgical techniques and procedures.",
      highlights: ["Laparoscopy", "GI Surgery", "Emergency Surgery"],
      icon: "🏥"
    },
    {
      name: "Fellowship in Spine Surgery",
      duration: "12 Months",
      eligibility: "MS Orthopedics/Neurosurgery",
      description: "Specialized training in spinal disorders and minimally invasive spine surgery.",
      highlights: ["Spinal Decompression", "Spinal Fusion", "Minimally Invasive"],
      icon: "🦴"
    },
    {
      name: "Fellowship in Emergency Medicine",
      duration: "12 Months",
      eligibility: "MBBS with 2+ years",
      description: "Advanced training in emergency care, trauma management, and critical decision-making.",
      highlights: ["ICU Rotations", "Trauma Management", "Toxicology"],
      icon: "🚑"
    },
    {
      name: "Fellowship in Critical Care Medicine",
      duration: "12 Months",
      eligibility: "MD/DNB Medicine/Anesthesia",
      description: "Comprehensive training in managing critically ill patients in ICU settings.",
      highlights: ["Ventilator Management", "Hemodynamics", "Point-of-Care Ultrasound"],
      icon: "🏥"
    }
  ];

  return (
    <section id="programs" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-secondary">17 SPECIALIZATIONS</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            Fellowship Programs
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Choose from our comprehensive range of specialized fellowship programs designed for medical excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <div key={index} className="card p-6 lg:p-8 hover:border-secondary hover:shadow-xl group">
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                {program.icon}
              </div>

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
          ))}
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

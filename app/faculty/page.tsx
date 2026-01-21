import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FacultyPage() {
  const faculty = [
    {
      name: "Dr. Rajesh Kumar",
      title: "Director, Emergency Medicine",
      credentials: "MD, FCCM, FCEM",
      institution: "Apollo Hospitals",
      experience: "20+ years in Emergency & Critical Care",
      specialization: "Trauma & Emergency Management",
      image: "RK"
    },
    {
      name: "Dr. Priya Sharma",
      title: "Head, Critical Care Division",
      credentials: "MD, DNB, EDIC",
      institution: "AIIMS, New Delhi",
      experience: "15+ years in ICU Medicine",
      specialization: "Critical Care & Pulmonology",
      image: "PS"
    },
    {
      name: "Dr. Arun Mehta",
      title: "Senior Consultant, Interventional Cardiology",
      credentials: "DM Cardiology, FSCAI",
      institution: "Fortis Heart Institute",
      experience: "18+ years in Cardiac Interventions",
      specialization: "Complex Coronary Interventions",
      image: "AM"
    },
    {
      name: "Dr. Sunita Rao",
      title: "Professor, Pediatric Intensive Care",
      credentials: "MD Pediatrics, MRCPCH",
      institution: "St. John's Medical College",
      experience: "12+ years in Pediatric Critical Care",
      specialization: "Neonatal & Pediatric ICU",
      image: "SR"
    },
    {
      name: "Dr. Vikram Singh",
      title: "Chief, Orthopedic Surgery",
      credentials: "MS Orthopedics, FRCS",
      institution: "Manipal Hospitals",
      experience: "16+ years in Joint Replacement",
      specialization: "Arthroplasty & Sports Medicine",
      image: "VS"
    },
    {
      name: "Dr. Kavita Desai",
      title: "Head, Reproductive Medicine",
      credentials: "MD, DNB, FRM",
      institution: "Max Healthcare",
      experience: "14+ years in Fertility Medicine",
      specialization: "IVF & Reproductive Endocrinology",
      image: "KD"
    },
    {
      name: "Dr. Sameer Patel",
      title: "Director, Gastroenterology",
      credentials: "MD, DM Gastro",
      institution: "Kokilaben Hospital",
      experience: "17+ years in GI Medicine",
      specialization: "Therapeutic Endoscopy",
      image: "SP"
    },
    {
      name: "Dr. Neha Gupta",
      title: "Senior Consultant, Radiology",
      credentials: "MD Radio-Diagnosis, FRCR",
      institution: "Medanta",
      experience: "11+ years in Diagnostic Imaging",
      specialization: "Interventional Radiology",
      image: "NG"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-heading font-bold mb-6">Our Faculty</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Learn from distinguished clinicians and academic leaders who are experts in their fields
          </p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((member, index) => (
              <div key={index} className="card p-6 hover:shadow-xl transition-all group">
                <div className="flex flex-col items-center text-center mb-4">
                  {/* Avatar */}
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl font-heading mb-4 group-hover:scale-110 transition-transform">
                    {member.image}
                  </div>
                  
                  {/* Name & Title */}
                  <h3 className="text-xl font-heading font-bold text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-secondary font-semibold mb-2">
                    {member.title}
                  </p>
                  <p className="text-sm text-text-secondary mb-1">
                    {member.credentials}
                  </p>
                  <p className="text-sm text-text-tertiary">
                    {member.institution}
                  </p>
                </div>

                {/* Details */}
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
          <div className="mt-16 bg-background rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-heading font-bold text-primary mb-4">Join Our Expert Faculty Team</h3>
            <p className="text-lg text-text-secondary mb-6 max-w-2xl mx-auto">
              We're always looking for passionate educators and experienced clinicians to join our team
            </p>
            <a href="mailto:careers@medfellowacademy.com" className="btn-primary px-8 py-3">
              Apply to Teach
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

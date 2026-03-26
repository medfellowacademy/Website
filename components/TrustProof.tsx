import Link from "next/link";

export default function TrustProof() {
  const certifications = [
    { name: "Medical Council of India Recognition", file: "mci-certificate.pdf", icon: "📜" },
    { name: "National Board Accreditation", file: "nb-accreditation.pdf", icon: "🎓" },
    { name: "ISO 9001:2015 Certification", file: "iso-certificate.pdf", icon: "✓" },
    { name: "International Accreditation", file: "intl-accreditation.pdf", icon: "🌍" }
  ];

  const alumniPlacements = [
    {
      name: "Dr. Rajiv Kumar",
      program: "Fellowship in Cardiology",
      placement: "Senior Consultant, Apollo Hospitals",
      salary: "₹45 LPA",
      year: "2024"
    },
    {
      name: "Dr. Priya Sharma",
      program: "Fellowship in Critical Care",
      placement: "ICU Head, Fortis Memorial",
      salary: "₹38 LPA",
      year: "2024"
    },
    {
      name: "Dr. Arun Mehta",
      program: "Fellowship in Gastroenterology",
      placement: "Consultant, Max Super Specialty",
      salary: "₹42 LPA",
      year: "2025"
    },
    {
      name: "Dr. Kavita Singh",
      program: "Fellowship in Reproductive Medicine",
      placement: "IVF Specialist, Cloudnine",
      salary: "₹50 LPA",
      year: "2025"
    }
  ];

  return (
    <section className="section-padding bg-linear-to-br from-background to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">
            Our Fellows&apos; Success Stories
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Our fellows secure top positions across the country&apos;s best healthcare organizations.
          </p>
        </div>

        {/* Recent Alumni Placements */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-heading font-bold text-primary">
              Recent Alumni Placements
            </h3>
            <Link href="/alumni" className="text-secondary hover:text-primary font-semibold text-sm">
              View All Success Stories →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {alumniPlacements.map((alumni, index) => (
              <div key={index} className="card p-6 hover:shadow-xl transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full shrink-0 ring-4 ring-secondary/20 bg-linear-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
                    {alumni.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-heading font-bold text-primary text-lg mb-1">
                      {alumni.name}
                    </h4>
                    <p className="text-sm text-secondary mb-2">{alumni.program}</p>
                    <div className="space-y-1 text-sm text-text-secondary">
                      <p className="flex items-center gap-2">
                        <span className="text-accent">📍</span>
                        {alumni.placement}
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="text-accent">💰</span>
                        <span className="font-bold text-primary">{alumni.salary}</span>
                        <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded">Batch {alumni.year}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Recognition */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100">
          <h3 className="text-2xl font-heading font-bold text-primary mb-6 text-center">
            Accreditations & Government Recognition
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-3">{cert.icon}</div>
                <h4 className="font-semibold text-primary text-sm mb-3">{cert.name}</h4>
                <a 
                  href={`/certificates/${cert.file}`}
                  className="text-xs text-secondary hover:text-primary font-medium inline-flex items-center gap-1 group-hover:underline"
                  download
                >
                  <span>📥</span>
                  Download Certificate
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Live Stats */}
        <div className="mt-12 bg-linear-to-br from-primary to-primary-dark text-white rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-90">Placement Rate</div>
              <div className="text-xs opacity-75 mt-1">Within 6 months</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">156%</div>
              <div className="text-sm opacity-90">Avg Salary Increase</div>
              <div className="text-xs opacity-75 mt-1">Post-fellowship</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">₹42L</div>
              <div className="text-sm opacity-90">Average CTC</div>
              <div className="text-xs opacity-75 mt-1">Alumni 2024-25</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Fellows Placed</div>
              <div className="text-xs opacity-75 mt-1">Since 2015</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

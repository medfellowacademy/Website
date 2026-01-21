import Link from "next/link";
import Image from 'next/image';

export default function TrustProof() {
  const hospitalPartners = [
    { name: "AIIMS Delhi", logo: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80", verified: true },
    { name: "Apollo Hospitals", logo: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&q=80", verified: true },
    { name: "Fortis Healthcare", logo: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=400&q=80", verified: true },
    { name: "Max Healthcare", logo: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&q=80", verified: true },
    { name: "Manipal Hospitals", logo: "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?w=400&q=80", verified: true },
    { name: "Medanta", logo: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=400&q=80", verified: true },
    { name: "Narayana Health", logo: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80", verified: true },
    { name: "Cloudnine Hospitals", logo: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&q=80", verified: true }
  ];

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
      year: "2024",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80"
    },
    {
      name: "Dr. Priya Sharma",
      program: "Fellowship in Critical Care",
      placement: "ICU Head, Fortis Memorial",
      salary: "₹38 LPA",
      year: "2024",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80"
    },
    {
      name: "Dr. Arun Mehta",
      program: "Fellowship in Gastroenterology",
      placement: "Consultant, Max Super Specialty",
      salary: "₹42 LPA",
      year: "2025",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80"
    },
    {
      name: "Dr. Kavita Singh",
      program: "Fellowship in Reproductive Medicine",
      placement: "IVF Specialist, Cloudnine",
      salary: "₹50 LPA",
      year: "2025",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80"
    }
  ];

  return (
    <section className="section-padding bg-linear-to-br from-background to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">
            Trusted by India's Leading Healthcare Institutions
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Our fellows train at premier hospitals and secure top positions across the country's best healthcare organizations.
          </p>
        </div>

        {/* Hospital Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-bold text-primary mb-6 text-center">
            Official Training Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {hospitalPartners.map((hospital, index) => (
              <div key={index} className="card overflow-hidden hover:shadow-lg transition-all group">
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={hospital.logo}
                    alt={hospital.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-primary text-sm mb-2">{hospital.name}</h4>
                  {hospital.verified && (
                    <div className="flex items-center justify-center gap-1 text-xs text-secondary">
                      <span>✓</span>
                      <span>Verified Partner</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
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
                  <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-secondary/20">
                    <Image
                      src={alumni.image}
                      alt={alumni.name}
                      fill
                      className="object-cover"
                    />
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

import Image from 'next/image';

export default function TrainingFacilities() {
  const facilities = [
    {
      icon: "🏥",
      title: "Clinical Practice in Leading Hospitals",
      description: "We provide clinical practice opportunities in hospitals like AIIMS, Apollo, Fortis, and Max Healthcare across India.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
      subtext: "Hands-on exposure in operation theaters, ICUs, and specialty departments"
    },
    {
      icon: "🔬",
      title: "State-of-the-Art Labs",
      description: "Access to advanced simulation labs, catheterization labs, and diagnostic facilities with latest equipment.",
      image: "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=800&q=80",
      subtext: "Hands-on practice with real-world scenarios"
    },
    {
      icon: "📚",
      title: "Learning Resources",
      description: "Comprehensive digital library, case studies, surgical videos, and international journal access.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
      subtext: "24/7 online learning platform"
    },
    {
      icon: "👥",
      title: "Expert Mentorship",
      description: "Direct guidance from 50+ faculty members with average 15+ years of clinical excellence.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      subtext: "Small batch sizes for personalized attention"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">
            World-Class Training Infrastructure
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Experience hands-on learning in India's most advanced medical facilities with cutting-edge technology and expert supervision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {facilities.map((facility, index) => (
            <div key={index} className="card overflow-hidden hover:shadow-xl transition-all group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-5xl mb-4">{facility.icon}</div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  {facility.title}
                </h3>
                <p className="text-text-secondary mb-3">
                  {facility.description}
                </p>
                <p className="text-sm text-secondary font-medium">
                  {facility.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

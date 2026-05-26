import Link from "next/link";

export default function TrustProof() {
  const alumniPlacements = [
    {
      name: "Dr. Rajiv Kumar",
      program: "Fellowship in Cardiology",
      placement: "Senior Consultant, Apollo Hospitals",
    },
    {
      name: "Dr. Priya Sharma",
      program: "Fellowship in Critical Care",
      placement: "ICU Head, Fortis Memorial",
    },
    {
      name: "Dr. Arun Mehta",
      program: "Fellowship in Gastroenterology",
      placement: "Consultant, Max Super Specialty",
    },
    {
      name: "Dr. Kavita Singh",
      program: "Fellowship in Reproductive Medicine",
      placement: "IVF Specialist, Cloudnine",
    }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-medium mb-2" style={{ color: '#1B4F72' }}>
            Alumni Success Stories
          </h2>
          <p className="text-xs" style={{ color: '#5D6D7E' }}>
            Our fellows secure top positions across leading healthcare organizations
          </p>
        </div>

        {/* Placements Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {alumniPlacements.map((alumni, i) => (
            <div key={i} className="bg-white rounded-lg p-5" style={{ border: '0.5px solid #BFC9CA' }}>
              <div className="text-xs font-medium mb-1" style={{ color: '#1B4F72' }}>
                {alumni.name}
              </div>
              <div className="text-xs mb-1" style={{ color: '#2E86C1' }}>
                {alumni.program}
              </div>
              <div className="text-xs" style={{ color: '#5D6D7E' }}>
                {alumni.placement}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

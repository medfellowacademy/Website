import Link from "next/link";

export default function TrustProof() {
  const alumniPlacements = [
    {
      name: "Dr. Rajiv Kumar",
      program: "Fellowship in Cardiology",
      placement: "Senior Consultant, Super Speciality Hospital",
    },
    {
      name: "Dr. Priya Sharma",
      program: "Fellowship in Critical Care",
      placement: "ICU Head, Super Speciality Hospital",
    },
    {
      name: "Dr. Arun Mehta",
      program: "Fellowship in Gastroenterology",
      placement: "Consultant, Super Speciality Hospital Super Specialty",
    },
    {
      name: "Dr. Kavita Singh",
      program: "Fellowship in Reproductive Medicine",
      placement: "IVF Specialist, Super Speciality Hospital",
    }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-medium mb-2" style={{ color: '#15401E' }}>
            Alumni Success Stories
          </h2>
          <p className="text-xs" style={{ color: '#6B7280' }}>
            Our fellows secure top positions across leading healthcare organizations
          </p>
        </div>

        {/* Placements Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {alumniPlacements.map((alumni, i) => (
            <div key={i} className="bg-white rounded-lg p-5" style={{ border: '0.5px solid #E5E7EB' }}>
              <div className="text-xs font-medium mb-1" style={{ color: '#15401E' }}>
                {alumni.name}
              </div>
              <div className="text-xs mb-1" style={{ color: '#15401E' }}>
                {alumni.program}
              </div>
              <div className="text-xs" style={{ color: '#6B7280' }}>
                {alumni.placement}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

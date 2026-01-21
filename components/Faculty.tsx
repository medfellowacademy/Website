export default function Faculty() {
  const faculty = [
    {
      name: "Dr. Rajesh Kumar",
      title: "Director, Emergency Medicine",
      credentials: "MD, FCCM, FCEM",
      institution: "Apollo Hospitals"
    },
    {
      name: "Dr. Priya Sharma",
      title: "Head, Critical Care Division",
      credentials: "MD, DNB, EDIC",
      institution: "AIIMS, New Delhi"
    },
    {
      name: "Dr. Arun Mehta",
      title: "Senior Consultant, Interventional Cardiology",
      credentials: "DM Cardiology, FSCAI",
      institution: "Fortis Heart Institute"
    },
    {
      name: "Dr. Sunita Rao",
      title: "Professor, Pediatric Intensive Care",
      credentials: "MD Pediatrics, MRCPCH",
      institution: "St. John's Medical College"
    }
  ];

  return (
    <section id="faculty" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">
            Faculty & Mentors
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Learn from distinguished clinicians and academic leaders
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {faculty.map((member, index) => (
            <div key={index} className="card p-6">
              <h3 className="text-xl font-heading font-bold text-primary mb-2">
                {member.name}
              </h3>
              <p className="text-secondary font-medium mb-2">
                {member.title}
              </p>
              <p className="text-sm text-text-secondary">
                {member.credentials} • {member.institution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

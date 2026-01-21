import Image from 'next/image';

export default function Faculty() {
  const faculty = [
    {
      name: "Dr. Rajesh Kumar",
      title: "Director, Emergency Medicine",
      credentials: "MD, FCCM, FCEM",
      institution: "Apollo Hospitals",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80"
    },
    {
      name: "Dr. Priya Sharma",
      title: "Head, Critical Care Division",
      credentials: "MD, DNB, EDIC",
      institution: "AIIMS, New Delhi",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80"
    },
    {
      name: "Dr. Arun Mehta",
      title: "Senior Consultant, Interventional Cardiology",
      credentials: "DM Cardiology, FSCAI",
      institution: "Fortis Heart Institute",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80"
    },
    {
      name: "Dr. Sunita Rao",
      title: "Professor, Pediatric Intensive Care",
      credentials: "MD Pediatrics, MRCPCH",
      institution: "St. John's Medical College",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80"
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
            <div key={index} className="card p-6 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-primary/10">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function WhyMedFellow() {
  const benefits = [
    {
      icon: "🎓",
      title: "Expert Faculty",
      description: "Learn from renowned specialists with decades of clinical and teaching experience."
    },
    {
      icon: "🏥",
      title: "Hands-on Training",
      description: "Gain practical experience through clinical rotations at premier healthcare institutions."
    },
    {
      icon: "📜",
      title: "Accredited Certification",
      description: "Receive globally recognized certifications that enhance your professional credentials."
    }
  ];

  return (
    <section id="why-us" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">
            Why Choose Med Fellow Academy?
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            We combine academic excellence with practical skills training to prepare you for real-world medical practice.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="card p-8 text-center">
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                {benefit.title}
              </h3>
              <p className="text-text-secondary">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

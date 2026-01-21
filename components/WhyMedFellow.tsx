export default function WhyMedFellow() {
  const benefits = [
    {
      icon: "💰",
      title: "3X Your Income Potential",
      description: "Fellows report earning 2.5-4X more within 18 months of completion. Position yourself as a premium specialist commanding top consultation fees."
    },
    {
      icon: "⚡",
      title: "Fast-Track Career Acceleration",
      description: "Skip 5-7 years of traditional career progression. Become a recognized expert in high-demand specialties in just 12-24 months."
    },
    {
      icon: "🎯",
      title: "Market Positioning Power",
      description: "Stand out in a crowded medical marketplace. Attract premium patients, hospital partnerships, and corporate opportunities unavailable to generalists."
    }
  ];

  return (
    <section id="why-us" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">
            What Makes This Different From Traditional Training?
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            This isn't just education—it's a career transformation system designed to multiply your earning potential and professional status.
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

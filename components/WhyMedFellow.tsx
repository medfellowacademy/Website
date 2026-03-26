'use client';
import { DollarSign, Zap, Target, TrendingUp, Users, Award } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function WhyMedFellow() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const benefits = [
    {
      Icon: DollarSign,
      title: "3X Your Income Potential",
      description: "Fellows report earning 2.5-4X more within 18 months of completion. Position yourself as a premium specialist commanding top consultation fees.",
      color: "text-green-500"
    },
    {
      Icon: Zap,
      title: "Fast-Track Career Acceleration",
      description: "Skip 5-7 years of traditional career progression. Become a recognized expert in high-demand specialties in just 12-24 months.",
      color: "text-yellow-500"
    },
    {
      Icon: Target,
      title: "Market Positioning Power",
      description: "Stand out in a crowded medical marketplace. Attract premium patients, hospital partnerships, and corporate opportunities unavailable to generalists.",
      color: "text-blue-500"
    }
  ];

  const stats = [
    { Icon: TrendingUp, value: "156%", label: "Avg Income Increase", color: "from-green-500 to-emerald-600" },
    { Icon: Users, value: "500+", label: "Careers Transformed", color: "from-blue-500 to-cyan-600" },
    { Icon: Award, value: "98%", label: "Placement Success", color: "from-purple-500 to-pink-600" }
  ];

  return (
    <section id="why-us" className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16" ref={ref}>
          <div className="inline-flex items-center gap-2 px-5 py-2 glass-card rounded-full mb-6">
            <Award className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-primary">THE MED FELLOW ADVANTAGE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-primary mb-6">
            What Makes This Different From <br className="hidden md:block"/>
            <span className="gradient-text">Traditional Training?</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto">
            This isn't just education—it's a career transformation system designed to multiply your earning potential and professional status.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`card p-8 hover-lift ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-linear-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <benefit.Icon className={`w-8 h-8 ${benefit.color}`} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                {benefit.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

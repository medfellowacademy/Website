import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function LearningModel() {
  const hybridFeatures = [
    {
      icon: "💻",
      title: "Online Theory Modules",
      description: "Access 100+ hours of pre-recorded lectures, interactive quizzes, and study materials anytime, anywhere",
      details: ["HD video lectures", "Downloadable PDFs", "Self-assessment tests", "Mobile-friendly platform"]
    },
    {
      icon: "🏥",
      title: "In-Person Clinical Rotations",
      description: "12 months of hands-on training at premier hospitals with expert supervision",
      details: ["Real patient cases", "Live procedure observations", "Direct faculty mentorship", "Skill assessments"]
    },
    {
      icon: "⏱️",
      title: "Flexible Scheduling",
      description: "Choose between full-time immersive or weekend fellowship tracks based on your practice commitments",
      details: ["Full-time: Mon-Fri", "Weekend: Sat-Sun", "Hybrid options available", "No career disruption"]
    },
    {
      icon: "👥",
      title: "Cohort-Based Learning",
      description: "Join a community of fellow doctors, collaborate on cases, and build lasting professional networks",
      details: ["Peer learning groups", "Case discussions", "Study groups", "Alumni network access"]
    }
  ];

  const learningTracks = [
    {
      name: "Full-Time Immersive Track",
      duration: "12 Months",
      schedule: "Monday - Friday, 9 AM - 5 PM",
      bestFor: "Doctors ready for full commitment",
      intensity: "High",
      features: [
        "5 days/week clinical training",
        "Evening online modules (2-3 hours)",
        "Weekend case study workshops",
        "Fast-track completion in 12 months",
        "Maximum hands-on exposure"
      ],
      popular: true
    },
    {
      name: "Weekend Fellowship Track",
      duration: "18 Months",
      schedule: "Saturdays & Sundays, 9 AM - 6 PM",
      bestFor: "Practicing doctors with weekday commitments",
      intensity: "Moderate",
      features: [
        "Weekend hospital rotations",
        "Self-paced online theory (weekdays)",
        "No practice disruption",
        "Extended timeline for comfort",
        "Same certification value"
      ],
      popular: false
    },
    {
      name: "Hybrid Flexible Track",
      duration: "15 Months",
      schedule: "2 Weekdays + 1 Weekend",
      bestFor: "Doctors seeking balanced approach",
      intensity: "Balanced",
      features: [
        "Flexible day selection",
        "Mix of online + clinical",
        "Customize your schedule",
        "Part-time practice possible",
        "Personalized timeline"
      ],
      popular: false
    }
  ];

  const onlinePlatform = [
    { feature: "Live Virtual Classes", description: "Real-time sessions with faculty Q&A" },
    { feature: "Recorded Lectures Library", description: "250+ hours of content, lifetime access" },
    { feature: "Interactive Case Studies", description: "Solve real clinical scenarios online" },
    { feature: "Digital Skill Labs", description: "3D anatomy, procedural simulations" },
    { feature: "Mobile App Access", description: "Learn on-the-go with iOS/Android apps" },
    { feature: "Progress Tracking Dashboard", description: "Monitor your learning journey" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="bg-linear-to-br from-primary to-primary-dark text-white py-16">
        <div className="container-custom">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur rounded-full mb-4">
            <span className="text-sm font-semibold">🎓 REVOLUTIONARY LEARNING</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Hybrid Learning Model</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Best of both worlds: Online flexibility meets hands-on clinical mastery. Learn at your pace, practice with experts.
          </p>
        </div>
      </section>

      {/* Hybrid Features */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-primary mb-12 text-center">
            How Our Hybrid Model Works
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {hybridFeatures.map((feature, index) => (
              <div key={index} className="card p-8 hover:shadow-xl transition-shadow">
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-lg text-text-secondary mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-text-secondary">
                      <span className="text-secondary">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Tracks */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-primary mb-3 text-center">
            Choose Your Learning Track
          </h2>
          <p className="text-lg text-text-secondary mb-12 text-center max-w-3xl mx-auto">
            Select the pace and schedule that fits your lifestyle. All tracks lead to the same internationally recognized certification.
          </p>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {learningTracks.map((track, index) => (
              <div key={index} className={`card p-6 hover:shadow-xl transition-shadow relative ${track.popular ? 'ring-2 ring-accent' : ''}`}>
                {track.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-accent text-white rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-heading font-bold text-primary mb-3 mt-2">
                  {track.name}
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                    <span className="text-sm text-text-secondary">Duration</span>
                    <span className="font-semibold text-primary">{track.duration}</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                    <span className="text-sm text-text-secondary">Schedule</span>
                    <span className="font-semibold text-primary text-sm text-right">{track.schedule}</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                    <span className="text-sm text-text-secondary">Intensity</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      track.intensity === 'High' ? 'bg-red-100 text-red-700' :
                      track.intensity === 'Moderate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {track.intensity}
                    </span>
                  </div>
                </div>
                <div className="bg-background rounded-lg p-4 mb-6">
                  <p className="text-sm font-semibold text-primary mb-1">Best For:</p>
                  <p className="text-sm text-text-secondary">{track.bestFor}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {track.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="text-secondary mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/apply"
                  className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all ${
                    track.popular 
                      ? 'bg-accent text-white hover:bg-accent/90' 
                      : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  Choose This Track
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Platform Features */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-primary mb-3 text-center">
            Advanced Online Learning Platform
          </h2>
          <p className="text-lg text-text-secondary mb-12 text-center max-w-3xl mx-auto">
            State-of-the-art technology to enhance your learning experience
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {onlinePlatform.map((item, index) => (
              <div key={index} className="card p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-heading font-bold text-primary mb-2">{item.feature}</h4>
                <p className="text-sm text-text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Schedule */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">
            Sample Weekly Schedule (Full-Time Track)
          </h2>
          
          <div className="card p-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="grid grid-cols-7 gap-2 text-center font-bold text-primary text-sm mb-4">
                <div>Monday</div>
                <div>Tuesday</div>
                <div>Wednesday</div>
                <div>Thursday</div>
                <div>Friday</div>
                <div>Saturday</div>
                <div>Sunday</div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-secondary/10 p-4 rounded-lg">
                  <div className="font-semibold text-primary mb-2">9 AM - 1 PM</div>
                  <p className="text-sm text-text-secondary">Clinical Rotations at Partner Hospitals</p>
                </div>
                <div className="bg-accent/10 p-4 rounded-lg">
                  <div className="font-semibold text-primary mb-2">2 PM - 5 PM</div>
                  <p className="text-sm text-text-secondary">Skills Lab, Case Discussions, Procedures</p>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <div className="font-semibold text-primary mb-2">7 PM - 9 PM</div>
                  <p className="text-sm text-text-secondary">Online Theory Modules (Self-paced)</p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <div className="font-semibold text-primary mb-2">Weekends</div>
                  <p className="text-sm text-text-secondary">Grand Rounds, Research Work, Case Study Workshops (Optional)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="bg-linear-to-br from-primary to-primary-dark text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Start Your Flexible Fellowship Journey?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Choose the learning track that fits your life. Same world-class training, your timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply" className="px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all text-lg">
                Apply Now
              </Link>
              <Link href="/fellowship-matcher" className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-all text-lg">
                Find Your Perfect Track
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ResearchIntegration() {
  const researchOpportunities = [
    {
      icon: "📝",
      title: "Case Report Publications",
      description: "Document unique clinical cases and publish in indexed journals",
      support: ["Journal selection guidance", "Manuscript editing", "Submission assistance", "Peer review support"]
    },
    {
      icon: "🔬",
      title: "Original Research Projects",
      description: "Conduct clinical studies under faculty supervision",
      support: ["Research design help", "Ethics committee approval", "Data analysis support", "Statistical guidance"]
    },
    {
      icon: "🎤",
      title: "Conference Presentations",
      description: "Present your work at national and international conferences",
      support: ["Abstract writing", "Presentation skills training", "Travel grants", "Networking opportunities"]
    },
    {
      icon: "📊",
      title: "Systematic Reviews & Meta-Analysis",
      description: "Contribute to evidence-based medicine literature",
      support: ["Protocol development", "Literature search training", "Data extraction tools", "Publication support"]
    }
  ];

  const researchWorkshops = [
    {
      title: "Research Methodology Fundamentals",
      duration: "16 hours",
      topics: ["Study design", "Hypothesis formulation", "Sample size calculation", "Ethics in research"]
    },
    {
      title: "Biostatistics for Clinicians",
      duration: "12 hours",
      topics: ["Descriptive statistics", "Hypothesis testing", "Regression analysis", "SPSS/R basics"]
    },
    {
      title: "Scientific Writing Masterclass",
      duration: "8 hours",
      topics: ["Structure of papers", "Writing techniques", "Citation management", "Avoiding plagiarism"]
    },
    {
      title: "Literature Review & Meta-Analysis",
      duration: "10 hours",
      topics: ["Search strategies", "Critical appraisal", "Data extraction", "Forest plots"]
    }
  ];

  const publications = [
    {
      title: "Outcomes of ERCP in Post-Surgical Anatomy",
      authors: "Fellow: Dr. Amit K. et al.",
      journal: "Indian Journal of Gastroenterology",
      year: "2025",
      impact: "IF: 2.8"
    },
    {
      title: "ECMO in COVID-19 ARDS: Single Center Experience",
      authors: "Fellow: Dr. Priya S. et al.",
      journal: "Critical Care Medicine",
      year: "2024",
      impact: "IF: 8.9"
    },
    {
      title: "Joint Preservation in Young Athletes",
      authors: "Fellow: Dr. Rajiv M. et al.",
      journal: "Journal of Orthopaedic Surgery",
      year: "2025",
      impact: "IF: 1.9"
    },
    {
      title: "IVF Success in PCOS: Protocol Optimization",
      authors: "Fellow: Dr. Sneha G. et al.",
      journal: "Fertility and Sterility",
      year: "2024",
      impact: "IF: 6.6"
    }
  ];

  const conferencesSupported = [
    { name: "ISGCON", type: "National", specialty: "Gastroenterology", frequency: "Annual" },
    { name: "ISCCM Conference", type: "National", specialty: "Critical Care", frequency: "Annual" },
    { name: "IOACON", type: "National", specialty: "Orthopedics", frequency: "Annual" },
    { name: "ISAR Congress", type: "National", specialty: "Reproductive Medicine", frequency: "Annual" },
    { name: "World Congress on Pain", type: "International", specialty: "Pain Management", frequency: "Biennial" },
    { name: "ESGE Days", type: "International", specialty: "Gastroenterology", frequency: "Annual" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="bg-linear-to-br from-primary to-primary-dark text-white py-16">
        <div className="container-custom">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur rounded-full mb-4">
            <span className="text-sm font-semibold">🔬 RESEARCH EXCELLENCE</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Research Integration</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Don&apos;t just practice medicine—advance it. Publish research, present at conferences, and build your academic profile during your fellowship.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-text-secondary">Publications by Fellows</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl font-bold text-secondary mb-2">85%</div>
              <div className="text-sm text-text-secondary">Fellows Published</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">200+</div>
              <div className="text-sm text-text-secondary">Conference Presentations</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">12+</div>
              <div className="text-sm text-text-secondary">Partner Journals</div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Opportunities */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-primary mb-12 text-center">
            Research Opportunities for Fellows
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {researchOpportunities.map((opportunity, index) => (
              <div key={index} className="card p-8 hover:shadow-xl transition-shadow">
                <div className="text-6xl mb-4">{opportunity.icon}</div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                  {opportunity.title}
                </h3>
                <p className="text-lg text-text-secondary mb-4">{opportunity.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-primary">We Provide:</p>
                  {opportunity.support.map((item, idx) => (
                    <p key={idx} className="text-sm text-text-secondary flex items-center gap-2">
                      <span className="text-secondary">✓</span>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Workshops */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-primary mb-3 text-center">
            Mandatory Research Training Workshops
          </h2>
          <p className="text-lg text-text-secondary mb-12 text-center max-w-3xl mx-auto">
            Every fellow completes these workshops to build research competency
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {researchWorkshops.map((workshop, index) => (
              <div key={index} className="card p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-heading font-bold text-primary flex-1">
                    {workshop.title}
                  </h3>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-bold whitespace-nowrap ml-3">
                    {workshop.duration}
                  </span>
                </div>
                <div className="space-y-2">
                  {workshop.topics.map((topic, idx) => (
                    <p key={idx} className="text-sm text-text-secondary flex items-center gap-2">
                      <span className="text-secondary">•</span>
                      {topic}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-primary mb-3 text-center">
            Recent Publications by Our Fellows
          </h2>
          <p className="text-lg text-text-secondary mb-12 text-center max-w-3xl mx-auto">
            Real work by current and recent fellows in peer-reviewed journals
          </p>
          
          <div className="space-y-4 max-w-4xl mx-auto">
            {publications.map((pub, index) => (
              <div key={index} className="card p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-primary mb-2 text-lg">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-text-secondary mb-1">{pub.authors}</p>
                    <p className="text-sm text-secondary font-semibold">
                      {pub.journal} • {pub.year}
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-bold">
                      {pub.impact}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conference Support */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-primary mb-3 text-center">
            Conference Presentation Support
          </h2>
          <p className="text-lg text-text-secondary mb-8 text-center max-w-3xl mx-auto">
            We sponsor and support fellows presenting at major conferences
          </p>

          <div className="card p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-3">✈️</div>
                <h3 className="font-heading font-bold text-primary mb-2">Travel Grants</h3>
                <p className="text-sm text-text-secondary">
                  Up to ₹50,000 for national conferences, ₹1,50,000 for international
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-3">🎤</div>
                <h3 className="font-heading font-bold text-primary mb-2">Presentation Training</h3>
                <p className="text-sm text-text-secondary">
                  Mock presentations, slide design, public speaking coaching
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-3">🤝</div>
                <h3 className="font-heading font-bold text-primary mb-2">Networking Support</h3>
                <p className="text-sm text-text-secondary">
                  Faculty introductions, meetup coordination, job connections
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-heading font-bold text-primary mb-6 text-center">
            Conferences We Support
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {conferencesSupported.map((conference, index) => (
              <div key={index} className="card p-4">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-primary">{conference.name}</h4>
                  <span className={`px-2 py-1 rounded text-xs font-bold ${
                    conference.type === 'International' 
                      ? 'bg-accent/10 text-accent' 
                      : 'bg-secondary/10 text-secondary'
                  }`}>
                    {conference.type}
                  </span>
                </div>
                <p className="text-xs text-text-secondary mb-1">{conference.specialty}</p>
                <p className="text-xs text-text-secondary">{conference.frequency}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">
            Your Research Journey Timeline
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0">
                  M1-3
                </div>
                <div className="card p-6 flex-1">
                  <h3 className="font-heading font-bold text-primary mb-2">Research Training</h3>
                  <p className="text-text-secondary">Complete methodology workshops, identify research topics, form hypothesis</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0">
                  M4-6
                </div>
                <div className="card p-6 flex-1">
                  <h3 className="font-heading font-bold text-primary mb-2">Data Collection</h3>
                  <p className="text-text-secondary">Ethics approval, patient recruitment, data gathering from clinical work</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0">
                  M7-9
                </div>
                <div className="card p-6 flex-1">
                  <h3 className="font-heading font-bold text-primary mb-2">Analysis & Writing</h3>
                  <p className="text-text-secondary">Statistical analysis, manuscript preparation, journal submission</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0">
                  M10-12
                </div>
                <div className="card p-6 flex-1">
                  <h3 className="font-heading font-bold text-primary mb-2">Publication & Presentation</h3>
                  <p className="text-text-secondary">Peer review responses, conference presentations, final publication</p>
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
              Build Your Academic Profile While Training
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Graduate with not just a fellowship certificate, but published papers and conference presentations on your CV
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply" className="px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all text-lg">
                Apply for Fellowship
              </Link>
              <Link href="/resources" className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-all text-lg">
                View Research Library
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

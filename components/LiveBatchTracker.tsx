export default function LiveBatchTracker() {
  const currentBatches = [
    {
      program: "Fellowship in Gastroenterology",
      batch: "Jan 2026",
      progress: 15,
      students: 12,
      phase: "Module 1: Upper GI Endoscopy"
    },
    {
      program: "Fellowship in Critical Care",
      batch: "Jan 2026",
      progress: 15,
      students: 15,
      phase: "Module 1: Ventilator Management"
    },
    {
      program: "Fellowship in Arthroscopy",
      batch: "Oct 2025",
      progress: 65,
      students: 10,
      phase: "Module 3: Joint Replacement"
    },
    {
      program: "Fellowship in Pain Management",
      batch: "Oct 2025",
      progress: 70,
      students: 8,
      phase: "Module 4: Advanced Procedures"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full mb-4 text-sm font-semibold">
            🔴 LIVE • Currently Training
          </div>
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">
            Active Batch Progress
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Real-time updates from our ongoing fellowship programs. Join the next batch starting March 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {currentBatches.map((batch, index) => (
            <div key={index} className="card p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-heading font-bold text-primary mb-1">
                    {batch.program}
                  </h3>
                  <p className="text-sm text-secondary">Batch: {batch.batch}</p>
                </div>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-bold">
                  {batch.students} Fellows
                </span>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-text-secondary">Current Phase:</span>
                  <span className="font-semibold text-primary">{batch.progress}% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-linear-to-r from-secondary to-accent h-2 rounded-full transition-all"
                    style={{ width: `${batch.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <p className="text-sm text-text-secondary">
                📚 {batch.phase}
              </p>
            </div>
          ))}
        </div>

        {/* Next Batch CTA */}
        <div className="text-center bg-white rounded-2xl p-8 border border-gray-100">
          <h3 className="text-2xl font-heading font-bold text-primary mb-4">
            Join Our Next Batch Starting March 2026
          </h3>
          <p className="text-text-secondary mb-6">
            Limited seats available. Applications close on Feb 28, 2026.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/apply" className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-accent transition-all">
              Apply Now
            </a>
            <a href="/contact" className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all">
              Attend Info Session
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

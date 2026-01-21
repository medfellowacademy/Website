import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function LiveDashboard() {
  const currentFellows = [
    { id: "F2026-001", program: "Gastroenterology", batch: "Jan 2026", progress: 15, procedures: 12, currentPhase: "Upper GI Endoscopy" },
    { id: "F2026-002", program: "Critical Care", batch: "Jan 2026", progress: 18, procedures: 24, currentPhase: "Ventilator Management" },
    { id: "F2026-003", program: "Arthroscopy", batch: "Oct 2025", progress: 65, procedures: 98, currentPhase: "Joint Replacement" },
    { id: "F2025-089", program: "Pain Management", batch: "Oct 2025", progress: 70, procedures: 142, currentPhase: "Advanced Procedures" },
    { id: "F2025-067", program: "Reproductive Medicine", batch: "Jul 2025", progress: 85, procedures: 187, currentPhase: "Advanced ART" }
  ];

  const recentProcedures = [
    { fellow: "F2026-003", procedure: "Total Knee Replacement", date: "2 hours ago", supervisor: "Dr. Rajesh Kumar" },
    { fellow: "F2026-002", procedure: "Central Line Insertion", date: "4 hours ago", supervisor: "Dr. Priya Shah" },
    { fellow: "F2025-089", procedure: "Epidural Injection", date: "6 hours ago", supervisor: "Dr. Anil Mehta" },
    { fellow: "F2026-001", procedure: "Diagnostic Endoscopy", date: "8 hours ago", supervisor: "Dr. Sneha Gupta" }
  ];

  const grandRounds = [
    { topic: "Advanced ERCP Techniques", speaker: "Dr. Ramesh Patel", date: "Today, 2:00 PM", location: "Virtual Hall A" },
    { topic: "Managing Difficult Airways", speaker: "Dr. Kavita Singh", date: "Tomorrow, 10:00 AM", location: "Apollo ICU Conference Room" },
    { topic: "Joint Preservation in Young Athletes", speaker: "Dr. Suresh Kumar", date: "Jan 23, 3:00 PM", location: "Fortis Lecture Hall" },
    { topic: "IVF Success Rate Optimization", speaker: "Dr. Anjali Sharma", date: "Jan 24, 11:00 AM", location: "Virtual Hall B" }
  ];

  const caseDiscussions = [
    { title: "Complex ERCP in Post-surgical Anatomy", author: "Fellow ID: F2026-001", replies: 12, lastActive: "1 hour ago", category: "Gastroenterology" },
    { title: "ARDS Management in COVID Patient", author: "Fellow ID: F2026-002", replies: 8, lastActive: "3 hours ago", category: "Critical Care" },
    { title: "Revision Arthroplasty Challenge", author: "Fellow ID: F2026-003", replies: 15, lastActive: "5 hours ago", category: "Orthopedics" },
    { title: "Poor Responder IVF Protocol", author: "Fellow ID: F2025-067", replies: 6, lastActive: "1 day ago", category: "Reproductive Medicine" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="bg-linear-to-br from-primary to-primary-dark text-white py-16">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur rounded-full mb-4">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold">LIVE UPDATES</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Fellowship Live Dashboard</h1>
              <p className="text-xl opacity-90">Real-time training progress from our active fellows across India</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Stats Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="card p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">42</div>
              <div className="text-sm text-text-secondary">Active Fellows</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl font-bold text-secondary mb-2">1,247</div>
              <div className="text-sm text-text-secondary">Procedures This Month</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">87</div>
              <div className="text-sm text-text-secondary">Active Discussions</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">15</div>
              <div className="text-sm text-text-secondary">Partner Hospitals</div>
            </div>
          </div>

          {/* Current Fellows Progress */}
          <div className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">Current Fellows Progress</h2>
            <div className="space-y-4">
              {currentFellows.map((fellow, index) => (
                <div key={index} className="card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-heading font-bold text-primary text-lg">{fellow.program}</h3>
                      <p className="text-sm text-text-secondary">Fellow ID: {fellow.id} • Batch: {fellow.batch}</p>
                    </div>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-bold">
                      {fellow.procedures} Procedures
                    </span>
                  </div>
                  <div className="mb-3">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-text-secondary">Current Phase: {fellow.currentPhase}</span>
                      <span className="font-semibold text-primary">{fellow.progress}% Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-linear-to-r from-secondary to-accent h-2 rounded-full transition-all"
                        style={{ width: `${fellow.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Recent Procedures Log */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">Recent Procedures (Live)</h2>
              <div className="space-y-4">
                {recentProcedures.map((log, index) => (
                  <div key={index} className="card p-5 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-linear-to-br from-secondary to-accent rounded-lg flex items-center justify-center text-white font-bold">
                        ✓
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary mb-1">{log.procedure}</h4>
                        <p className="text-sm text-text-secondary mb-1">
                          Fellow: {log.fellow} • Supervised by: {log.supervisor}
                        </p>
                        <p className="text-xs text-accent font-semibold">{log.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Grand Rounds Calendar */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">Weekly Grand Rounds</h2>
              <div className="space-y-4">
                {grandRounds.map((round, index) => (
                  <div key={index} className="card p-5 hover:shadow-lg transition-shadow">
                    <h4 className="font-semibold text-primary mb-2">{round.topic}</h4>
                    <div className="space-y-1 text-sm text-text-secondary">
                      <p className="flex items-center gap-2">
                        <span>👨‍⚕️</span>
                        {round.speaker}
                      </p>
                      <p className="flex items-center gap-2">
                        <span>📅</span>
                        {round.date}
                      </p>
                      <p className="flex items-center gap-2">
                        <span>📍</span>
                        {round.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Case Discussions Forum */}
          <div className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-heading font-bold text-primary">Active Case Discussions</h2>
              <Link href="/forum" className="text-secondary hover:text-primary font-semibold">
                View All Discussions →
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {caseDiscussions.map((discussion, index) => (
                <div key={index} className="card p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-heading font-bold text-primary">{discussion.title}</h4>
                    <span className="px-2 py-1 bg-secondary/10 text-secondary rounded text-xs font-semibold whitespace-nowrap">
                      {discussion.category}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary mb-3">Posted by: {discussion.author}</p>
                  <div className="flex items-center gap-4 text-sm text-text-secondary">
                    <span className="flex items-center gap-1">
                      <span>💬</span>
                      {discussion.replies} replies
                    </span>
                    <span className="flex items-center gap-1">
                      <span>🕐</span>
                      {discussion.lastActive}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-linear-to-br from-primary to-primary-dark text-white rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-heading font-bold mb-4">Join Our Next Batch</h3>
            <p className="text-lg opacity-90 mb-6">
              Be part of this vibrant learning community. Applications open for March 2026 batch.
            </p>
            <Link href="/apply" className="inline-block px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all text-lg">
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ResourceLibrary() {
  const caseStudies = [
    { title: "Complex ERCP in Post-Whipple Anatomy", category: "Gastroenterology", downloads: 1247, level: "Advanced" },
    { title: "ARDS Management Protocol 2025", category: "Critical Care", downloads: 2134, level: "Intermediate" },
    { title: "Revision TKR: A Systematic Approach", category: "Orthopedics", downloads: 892, level: "Advanced" },
    { title: "Poor Responder IVF Protocols", category: "Reproductive Medicine", downloads: 1567, level: "Advanced" },
    { title: "Emergency Airway Management", category: "Emergency Medicine", downloads: 3421, level: "Beginner" },
    { title: "Pain Management in Cancer Patients", category: "Pain Management", downloads: 1098, level: "Intermediate" }
  ];

  const procedureVideos = {
    free: [
      { title: "Upper GI Endoscopy Basics", duration: "15:30", views: "45K", level: "Beginner" },
      { title: "Central Line Insertion Technique", duration: "12:45", views: "38K", level: "Beginner" },
      { title: "Knee Arthroscopy Introduction", duration: "18:20", views: "29K", level: "Beginner" },
      { title: "Basic Ultrasound Techniques", duration: "22:15", views: "52K", level: "Beginner" }
    ],
    premium: [
      { title: "Advanced ERCP Procedures", duration: "45:30", fellows: "124", level: "Advanced" },
      { title: "ECMO Management Masterclass", duration: "38:45", fellows: "89", level: "Advanced" },
      { title: "Complex Joint Replacement", duration: "52:20", fellows: "67", level: "Advanced" },
      { title: "Advanced IVF Laboratory Techniques", duration: "41:15", fellows: "103", level: "Advanced" }
    ]
  };

  const journalClub = [
    { title: "NEJM: Novel Anticoagulation in ICU", date: "Jan 15, 2026", presenter: "Dr. Ramesh Kumar", attendees: 45 },
    { title: "Lancet: Endoscopic Submucosal Dissection", date: "Jan 8, 2026", presenter: "Dr. Priya Shah", attendees: 38 },
    { title: "JAMA: Enhanced Recovery After Surgery", date: "Dec 28, 2025", presenter: "Dr. Anil Mehta", attendees: 52 },
    { title: "BMJ: AI in Radiology Diagnostics", date: "Dec 20, 2025", presenter: "Dr. Sneha Gupta", attendees: 41 }
  ];

  const cmesCourses = [
    { title: "Advanced Cardiac Life Support (ACLS)", credits: 10, duration: "16 hours", price: "Free for Fellows" },
    { title: "Infection Control in ICU", credits: 5, duration: "8 hours", price: "Free for Fellows" },
    { title: "Medical Ethics & Patient Safety", credits: 8, duration: "12 hours", price: "Free for Fellows" },
    { title: "Evidence-Based Medicine Workshop", credits: 6, duration: "10 hours", price: "Free for Fellows" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="bg-linear-to-br from-primary to-primary-dark text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Resource Library</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Access our comprehensive collection of case studies, procedure videos, journal archives, and CME courses
          </p>
        </div>
      </section>

      {/* Free Case Studies */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-2">Free Case Studies Library</h2>
              <p className="text-lg text-text-secondary">
                Real-world cases from our fellowship programs - available to everyone
              </p>
            </div>
            <div className="px-4 py-2 bg-accent/10 text-accent rounded-full font-semibold">
              🔓 Free Access
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div key={index} className="card p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-semibold">
                    {study.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    study.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                    study.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {study.level}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-primary mb-3 text-lg">{study.title}</h3>
                <div className="flex items-center gap-2 text-sm text-text-secondary mb-4">
                  <span>📥</span>
                  <span>{study.downloads.toLocaleString()} downloads</span>
                </div>
                <button className="w-full px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-accent transition-all">
                  Download PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Procedure Videos */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8">Procedure Video Library</h2>
          
          {/* Free Videos */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-2xl font-heading font-bold text-primary">Basic Procedures</h3>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                🔓 Free
              </span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {procedureVideos.free.map((video, index) => (
                <div key={index} className="card overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="aspect-video bg-linear-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative group">
                    <div className="text-5xl">🎬</div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <span className="text-2xl">▶️</span>
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-white text-xs">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-primary mb-2 text-sm">{video.title}</h4>
                    <div className="flex items-center gap-3 text-xs text-text-secondary">
                      <span>👁️ {video.views}</span>
                      <span className={`px-2 py-0.5 rounded text-xs font-semibold ${
                        video.level === 'Beginner' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {video.level}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Videos */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-2xl font-heading font-bold text-primary">Advanced Procedures</h3>
              <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold">
                🔒 For Enrolled Fellows
              </span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {procedureVideos.premium.map((video, index) => (
                <div key={index} className="card overflow-hidden hover:shadow-xl transition-shadow relative">
                  <div className="aspect-video bg-linear-to-br from-accent/10 to-secondary/10 flex items-center justify-center relative group">
                    <div className="text-5xl opacity-30">🎬</div>
                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">🔒</div>
                        <p className="text-white text-sm font-semibold">Enroll to Access</p>
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-white text-xs">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-primary mb-2 text-sm">{video.title}</h4>
                    <div className="flex items-center gap-3 text-xs text-text-secondary">
                      <span>👥 {video.fellows} fellows</span>
                      <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs font-semibold">
                        {video.level}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journal Club Archives */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-primary mb-3">Journal Club Archives</h2>
          <p className="text-lg text-text-secondary mb-8">
            Stay updated with latest research and evidence-based medicine discussions
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {journalClub.map((session, index) => (
              <div key={index} className="card p-6 hover:shadow-xl transition-shadow">
                <h3 className="font-heading font-bold text-primary mb-2 text-lg">{session.title}</h3>
                <div className="space-y-2 mb-4 text-sm text-text-secondary">
                  <p className="flex items-center gap-2">
                    <span>📅</span>
                    {session.date}
                  </p>
                  <p className="flex items-center gap-2">
                    <span>👨‍⚕️</span>
                    Presenter: {session.presenter}
                  </p>
                  <p className="flex items-center gap-2">
                    <span>👥</span>
                    {session.attendees} attendees
                  </p>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-accent transition-all">
                    Watch Recording
                  </button>
                  <button className="flex-1 px-4 py-2 border-2 border-primary text-primary rounded-lg text-sm font-semibold hover:bg-primary hover:text-white transition-all">
                    Download Slides
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CME Courses */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-primary mb-3">CME Credit Courses</h2>
          <p className="text-lg text-text-secondary mb-8">
            Earn Continuing Medical Education credits while building essential skills
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {cmesCourses.map((course, index) => (
              <div key={index} className="card p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-heading font-bold text-primary text-lg flex-1">{course.title}</h3>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-bold whitespace-nowrap ml-3">
                    {course.credits} CME
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-background p-3 rounded-lg">
                    <div className="text-xs text-text-secondary mb-1">Duration</div>
                    <div className="font-semibold text-primary">{course.duration}</div>
                  </div>
                  <div className="bg-background p-3 rounded-lg">
                    <div className="text-xs text-text-secondary mb-1">Price</div>
                    <div className="font-semibold text-secondary">{course.price}</div>
                  </div>
                </div>
                <button className="w-full px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-accent transition-all">
                  Enroll in Course
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="bg-linear-to-br from-primary to-primary-dark text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Get Full Access to Premium Resources
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Enroll in a fellowship program to unlock advanced procedure videos, exclusive case studies, and premium CME courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/programs" className="px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all text-lg">
                Browse Programs
              </a>
              <a href="/apply" className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-all text-lg">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from 'next/image';

export default function VirtualTours() {
  const hospitalTours = [
    {
      name: "AIIMS Delhi",
      facilities: ["Advanced ICU", "Cardiac Cath Lab", "Endoscopy Suite", "Research Lab"],
      tourUrl: "#aiims-tour",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80"
    },
    {
      name: "Apollo Hospitals",
      facilities: ["Robotic Surgery OT", "IVF Laboratory", "Critical Care Units", "Emergency Department"],
      tourUrl: "#apollo-tour",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80"
    },
    {
      name: "Fortis Memorial",
      facilities: ["Joint Replacement OT", "Pain Management Clinic", "Radiology Suite", "Training Center"],
      tourUrl: "#fortis-tour",
      image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&q=80"
    },
    {
      name: "Medanta Gurugram",
      facilities: ["Heart & Lung Institute", "Neurosciences Center", "Transplant ICU", "Skills Lab"],
      tourUrl: "#medanta-tour",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80"
    }
  ];

  const facultyVideos = [
    { name: "Dr. Ramesh Kumar", specialty: "Gastroenterology", experience: "25+ years", hospital: "AIIMS Delhi", videoUrl: "#video-ramesh" },
    { name: "Dr. Priya Shah", specialty: "Critical Care", experience: "18+ years", hospital: "Apollo Hospitals", videoUrl: "#video-priya" },
    { name: "Dr. Anil Mehta", specialty: "Orthopedics", experience: "22+ years", hospital: "Fortis Memorial", videoUrl: "#video-anil" },
    { name: "Dr. Sneha Gupta", specialty: "Reproductive Medicine", experience: "15+ years", hospital: "Cloudnine", videoUrl: "#video-sneha" }
  ];

  const dayInLifeVideos = [
    { title: "A Day in Gastroenterology Fellowship", duration: "12:45", views: "8.2K", thumbnail: "🎬" },
    { title: "24 Hours in Critical Care ICU", duration: "15:30", views: "12.5K", thumbnail: "🎬" },
    { title: "Joint Replacement Surgery Training", duration: "18:20", views: "6.8K", thumbnail: "🎬" },
    { title: "IVF Lab: Behind the Scenes", duration: "10:15", views: "9.3K", thumbnail: "🎬" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="bg-linear-to-br from-primary to-primary-dark text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Virtual Hospital Tours</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Explore our world-class training facilities from anywhere. See exactly where you&apos;ll train before you apply.
          </p>
        </div>
      </section>

      {/* 360° Virtual Tours */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-primary mb-3">360° Facility Tours</h2>
          <p className="text-lg text-text-secondary mb-8">
            Take an immersive tour of operation theaters, ICUs, and labs where you&apos;ll be training
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {hospitalTours.map((hospital, index) => (
              <div key={index} className="card overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video relative group cursor-pointer overflow-hidden">
                  <Image
                    src={hospital.image}
                    alt={hospital.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-4xl">🔄</span>
                      </div>
                      <p className="text-white font-semibold">Start 360° Tour</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-primary mb-3">{hospital.name}</h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-text-secondary font-semibold">Explore:</p>
                    {hospital.facilities.map((facility, idx) => (
                      <p key={idx} className="text-sm text-text-secondary flex items-center gap-2">
                        <span className="text-secondary">✓</span>
                        {facility}
                      </p>
                    ))}
                  </div>
                  <button className="w-full px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-accent transition-all">
                    Launch Virtual Tour
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Faculty */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-primary mb-3">Meet Your Faculty</h2>
          <p className="text-lg text-text-secondary mb-8">
            Get to know the experts who will mentor you throughout your fellowship
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facultyVideos.map((faculty, index) => (
              <div key={index} className="card overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-linear-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative group cursor-pointer">
                  <div className="text-6xl">👨‍⚕️</div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <span className="text-2xl">▶️</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-bold text-primary mb-1">{faculty.name}</h3>
                  <p className="text-sm text-secondary mb-1">{faculty.specialty}</p>
                  <p className="text-xs text-text-secondary mb-2">{faculty.experience} • {faculty.hospital}</p>
                  <button className="w-full px-4 py-2 border-2 border-primary text-primary rounded-lg text-sm font-semibold hover:bg-primary hover:text-white transition-all">
                    Watch Introduction
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day in the Life */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-primary mb-3">Day in the Life Series</h2>
          <p className="text-lg text-text-secondary mb-8">
            See what a typical day looks like for our fellows in different specialties
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {dayInLifeVideos.map((video, index) => (
              <div key={index} className="card overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                <div className="aspect-video bg-linear-to-br from-accent/10 to-secondary/10 flex items-center justify-center relative group">
                  <div className="text-8xl opacity-30">{video.thumbnail}</div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <span className="text-3xl">▶️</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 px-2 py-1 rounded text-white text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">{video.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-text-secondary">
                    <span className="flex items-center gap-1">
                      <span>👁️</span>
                      {video.views} views
                    </span>
                    <span className="flex items-center gap-1">
                      <span>⏱️</span>
                      {video.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-linear-to-br from-primary to-primary-dark text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Experience It in Person?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Schedule a campus visit and see our training facilities firsthand. Meet faculty, current fellows, and explore the hospitals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all text-lg">
                Schedule Campus Visit
              </a>
              <a href="/apply" className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-all text-lg">
                Apply for Fellowship
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

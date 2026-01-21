"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MentorshipMarketplace() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");

  const mentors = [
    {
      name: "Dr. Ramesh Kumar",
      specialty: "Gastroenterology",
      experience: "25+ years",
      hospital: "AIIMS Delhi",
      achievements: "500+ ERCP procedures, Published 40+ papers",
      availability: "2 slots available",
      rating: 4.9,
      sessions: 127,
      image: "👨‍⚕️"
    },
    {
      name: "Dr. Priya Shah",
      specialty: "Critical Care",
      experience: "18+ years",
      hospital: "Apollo Hospitals",
      achievements: "ICU Director, ECMO Expert",
      availability: "1 slot available",
      rating: 5.0,
      sessions: 89,
      image: "👩‍⚕️"
    },
    {
      name: "Dr. Anil Mehta",
      specialty: "Orthopedics",
      experience: "22+ years",
      hospital: "Fortis Memorial",
      achievements: "3000+ joint replacements",
      availability: "3 slots available",
      rating: 4.8,
      sessions: 156,
      image: "👨‍⚕️"
    },
    {
      name: "Dr. Sneha Gupta",
      specialty: "Reproductive Medicine",
      experience: "15+ years",
      hospital: "Cloudnine",
      achievements: "IVF success rate >55%",
      availability: "2 slots available",
      rating: 4.9,
      sessions: 103,
      image: "👩‍⚕️"
    },
    {
      name: "Dr. Suresh Kumar",
      specialty: "Pain Management",
      experience: "20+ years",
      hospital: "Max Super Specialty",
      achievements: "Advanced interventional procedures",
      availability: "Full",
      rating: 4.7,
      sessions: 142,
      image: "👨‍⚕️"
    },
    {
      name: "Dr. Kavita Singh",
      specialty: "Neurology",
      experience: "17+ years",
      hospital: "Medanta Gurugram",
      achievements: "Stroke specialist, 200+ publications",
      availability: "1 slot available",
      rating: 5.0,
      sessions: 98,
      image: "👩‍⚕️"
    }
  ];

  const mentorshipBenefits = [
    {
      icon: "🎯",
      title: "1-on-1 Personalized Guidance",
      description: "Get individual attention tailored to your specific career goals and learning needs"
    },
    {
      icon: "💼",
      title: "Career Pathway Planning",
      description: "Strategic advice on specialization, practice setup, and income optimization"
    },
    {
      icon: "📚",
      title: "Case-Based Learning",
      description: "Review your cases with experts, learn decision-making strategies"
    },
    {
      icon: "🌐",
      title: "Network Building",
      description: "Get introduced to key professionals in your field, job opportunities"
    },
    {
      icon: "📝",
      title: "Research Mentorship",
      description: "Guidance on publications, conference presentations, academic advancement"
    },
    {
      icon: "🎓",
      title: "Skill Development",
      description: "Master specific procedures under expert supervision and feedback"
    }
  ];

  const alumniMentors = [
    { name: "Dr. Amit Patel", batch: "2022", specialty: "Emergency Medicine", mentees: 12 },
    { name: "Dr. Rajiv Kumar", batch: "2021", specialty: "Gastroenterology", mentees: 15 },
    { name: "Dr. Neha Sharma", batch: "2023", specialty: "Critical Care", mentees: 8 },
    { name: "Dr. Vikas Gupta", batch: "2020", specialty: "Orthopedics", mentees: 18 }
  ];

  const specialties = ["All", "Gastroenterology", "Critical Care", "Orthopedics", "Reproductive Medicine", "Pain Management", "Neurology"];

  const filteredMentors = selectedSpecialty === "All" 
    ? mentors 
    : mentors.filter(m => m.specialty === selectedSpecialty);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="bg-linear-to-br from-primary to-primary-dark text-white py-16">
        <div className="container-custom">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur rounded-full mb-4">
            <span className="text-sm font-semibold">🤝 EXCLUSIVE MENTORSHIP</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Mentorship Marketplace</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Connect with India&apos;s top specialists. Get personalized guidance from experts who&apos;ve been where you want to go.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="card p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-text-secondary">Expert Mentors</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl font-bold text-secondary mb-2">1,200+</div>
              <div className="text-sm text-text-secondary">Mentorship Sessions</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">4.9/5</div>
              <div className="text-sm text-text-secondary">Average Rating</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-text-secondary">Fellows Matched</div>
            </div>
          </div>

          {/* Mentorship Benefits */}
          <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">
            What You Get with Mentorship
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {mentorshipBenefits.map((benefit, index) => (
              <div key={index} className="card p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="font-heading font-bold text-primary mb-2">{benefit.title}</h3>
                <p className="text-sm text-text-secondary">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find Your Mentor */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-primary mb-3 text-center">
            Find Your Perfect Mentor
          </h2>
          <p className="text-lg text-text-secondary mb-8 text-center max-w-3xl mx-auto">
            Browse our curated network of senior specialists. All fellows get 6 free 1-on-1 mentorship sessions.
          </p>

          {/* Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {specialties.map((specialty) => (
              <button
                key={specialty}
                onClick={() => setSelectedSpecialty(specialty)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedSpecialty === specialty
                    ? 'bg-primary text-white'
                    : 'bg-white border-2 border-gray-200 text-text-secondary hover:border-primary'
                }`}
              >
                {specialty}
              </button>
            ))}
          </div>

          {/* Mentor Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMentors.map((mentor, index) => (
              <div key={index} className="card p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-6xl">{mentor.image}</div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-primary text-lg mb-1">
                      {mentor.name}
                    </h3>
                    <p className="text-sm text-secondary font-semibold mb-1">{mentor.specialty}</p>
                    <p className="text-xs text-text-secondary">{mentor.experience} • {mentor.hospital}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-text-secondary">
                    <span className="font-semibold text-primary">Achievements:</span> {mentor.achievements}
                  </p>
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">⭐</span>
                    <span className="font-bold text-primary">{mentor.rating}</span>
                  </div>
                  <div className="text-text-secondary">
                    {mentor.sessions} sessions
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                  <span className="text-sm text-text-secondary">Availability</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    mentor.availability === 'Full' 
                      ? 'bg-red-100 text-red-700' 
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {mentor.availability}
                  </span>
                </div>

                <button 
                  disabled={mentor.availability === 'Full'}
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition-all ${
                    mentor.availability === 'Full'
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : 'bg-primary text-white hover:bg-accent'
                  }`}
                >
                  {mentor.availability === 'Full' ? 'Currently Full' : 'Request Mentorship'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Mentor Network */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-primary mb-3 text-center">
            Alumni Mentor Network
          </h2>
          <p className="text-lg text-text-secondary mb-8 text-center max-w-3xl mx-auto">
            Connect with recent graduates who successfully navigated the fellowship and are now thriving in their careers
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {alumniMentors.map((alumni, index) => (
              <div key={index} className="card p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-3">🎓</div>
                <h3 className="font-heading font-bold text-primary mb-1">{alumni.name}</h3>
                <p className="text-sm text-secondary mb-1">{alumni.specialty}</p>
                <p className="text-xs text-text-secondary mb-3">Batch {alumni.batch}</p>
                <div className="text-sm text-text-secondary">
                  Mentoring <span className="font-bold text-accent">{alumni.mentees}</span> fellows
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-text-secondary mb-4">
              Want to give back? Become an alumni mentor after completing your fellowship
            </p>
            <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all">
              Join as Alumni Mentor
            </button>
          </div>
        </div>
      </section>

      {/* Career Counseling */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="card p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                  Career Counseling Included
                </h2>
                <p className="text-lg text-text-secondary mb-6">
                  Every fellow gets 4 dedicated career counseling sessions to plan their post-fellowship journey
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary text-xl">✓</span>
                    <span className="text-text-secondary">Job placement assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary text-xl">✓</span>
                    <span className="text-text-secondary">Practice setup guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary text-xl">✓</span>
                    <span className="text-text-secondary">Salary negotiation strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary text-xl">✓</span>
                    <span className="text-text-secondary">Long-term career roadmap</span>
                  </li>
                </ul>
              </div>
              <div className="bg-linear-to-br from-accent/10 to-secondary/10 rounded-xl p-8">
                <h3 className="text-xl font-heading font-bold text-primary mb-4">Counseling Timeline</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">1</div>
                    <div>
                      <div className="font-semibold text-primary">Month 1</div>
                      <div className="text-sm text-text-secondary">Goal setting & career mapping</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">2</div>
                    <div>
                      <div className="font-semibold text-primary">Month 6</div>
                      <div className="text-sm text-text-secondary">Mid-program review & adjustments</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">3</div>
                    <div>
                      <div className="font-semibold text-primary">Month 10</div>
                      <div className="text-sm text-text-secondary">Job search preparation</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">4</div>
                    <div>
                      <div className="font-semibold text-primary">Month 12</div>
                      <div className="text-sm text-text-secondary">Final placement & future planning</div>
                    </div>
                  </div>
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
              Get Matched with Your Ideal Mentor
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join our fellowship and get access to India&apos;s top medical specialists as your personal mentors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/apply" className="px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all text-lg">
                Apply for Fellowship
              </a>
              <a href="/contact" className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-all text-lg">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

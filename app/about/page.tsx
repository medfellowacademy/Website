import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About MedFellow Academy | Our Mission, Vision & Story",
  description: "Learn about MedFellow Academy — India's premier medical fellowship institution. Discover our mission to bridge education and clinical practice, our expert team, and our commitment to advancing doctors' careers.",
  openGraph: {
    title: "About MedFellow Academy",
    description: "India's premier medical fellowship institution bridging education and clinical practice.",
    url: "https://medfellowacademy.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Page header */}
      <section className="border-b border-[#E5E7EB] py-10 md:py-14">
        <div className="container-custom">
          <span className="section-label">About Us</span>
          <h1 className="section-title mt-2 mb-3">About MedFellow Academy</h1>
          <p className="section-subtitle">
            Advancing the future of medical fellowship education in India and beyond.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-5 mb-12">
            <div className="card p-6">
              <div className="w-10 h-10 bg-[#e8f2ea] rounded-md flex items-center justify-center text-xl mb-4">🎯</div>
              <h2 className="text-[1.0625rem] font-semibold text-[#15401E] mb-2">Our Mission</h2>
              <p className="text-[0.9rem] text-[#374151] leading-relaxed">
                To provide world-class fellowship training that combines academic excellence with hands-on clinical experience,
                empowering doctors to achieve their highest potential and deliver exceptional patient care.
              </p>
            </div>
            <div className="card p-6">
              <div className="w-10 h-10 bg-[#e8f2ea] rounded-md flex items-center justify-center text-xl mb-4">👁️</div>
              <h2 className="text-[1.0625rem] font-semibold text-[#15401E] mb-2">Our Vision</h2>
              <p className="text-[0.9rem] text-[#374151] leading-relaxed">
                To be the premier destination for medical fellowship programs in India, recognized globally for excellence in
                medical education, innovation in training methodologies, and commitment to advancing healthcare.
              </p>
            </div>
          </div>

          {/* Our Story */}
          <div className="mb-12 border-t border-[#E5E7EB] pt-10">
            <h2 className="section-title mb-6">Our Story</h2>
            <div className="max-w-3xl space-y-4 text-[0.9rem] text-[#374151] leading-relaxed">
              <p>
                MedFellow Academy was founded with a clear vision to bridge the gap between medical education and real-world
                clinical practice. The academy was started by a team of professionals who bring over 10 years of experience
                in the healthcare and medical education industry.
              </p>
              <p>
                Recognizing the need for practical, skill-based training, we focus on delivering specialized fellowship
                programs that go beyond traditional learning. Our approach emphasizes real-time exposure, industry relevance,
                and hands-on training to help doctors build confidence in their practice.
              </p>
              <p>
                As a growing institution, MedFellow Academy is committed to creating meaningful learning opportunities and
                supporting medical professionals in advancing their careers with the right knowledge and skills.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="border-t border-[#E5E7EB] pt-10">
            <h2 className="section-title mb-8">Why Choose MedFellow Academy</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: '🎓', title: 'Expert Faculty', desc: 'Learn from renowned specialists and academic leaders' },
                { icon: '🏥', title: 'Clinical Excellence', desc: 'Hands-on training at premier healthcare institutions' },
                { icon: '📜', title: 'Global Recognition', desc: 'Internationally accredited certifications' },
                { icon: '💼', title: 'Career Growth', desc: '98% placement rate with career advancement support' },
              ].map((item, i) => (
                <div key={i} className="card p-5 text-center">
                  <div className="w-10 h-10 bg-[#e8f2ea] rounded-md flex items-center justify-center text-xl mx-auto mb-3">{item.icon}</div>
                  <h3 className="text-[0.875rem] font-semibold text-[#111827] mb-1.5">{item.title}</h3>
                  <p className="text-[0.8125rem] text-[#6B7280] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#15401E]">
        <div className="container-custom text-center">
          <h2 className="text-[1.5rem] md:text-[1.875rem] font-bold text-white mb-3">Join Our Community of Excellence</h2>
          <p className="text-[0.9375rem] text-white/70 mb-6 max-w-xl mx-auto">
            Take the next step in your medical career with MedFellow Academy.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#15401E] rounded-md font-semibold text-[0.875rem] hover:bg-[#f0f9f1] transition-colors"
          >
            Apply for Fellowship
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

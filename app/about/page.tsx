import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-heading font-bold mb-6">About Med Fellow Academy</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Leading the way in medical fellowship education since 2015
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="card p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white text-2xl mb-6">
                🎯
              </div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                To provide world-class fellowship training that combines academic excellence with hands-on clinical experience, 
                empowering doctors to achieve their highest potential and deliver exceptional patient care.
              </p>
            </div>
            <div className="card p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center text-white text-2xl mb-6">
                👁️
              </div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">Our Vision</h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                To be the premier destination for medical fellowship programs in India, recognized globally for excellence in 
                medical education, innovation in training methodologies, and commitment to advancing healthcare.
              </p>
            </div>
          </div>

          {/* Our Story */}
          <div className="mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary mb-6 text-center">Our Story</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                Founded in 2015, Med Fellow Academy was born from a vision to bridge the gap between medical education and clinical 
                practice. Our founders, a group of distinguished medical educators and practicing clinicians, recognized the need for 
                specialized fellowship programs that go beyond traditional training.
              </p>
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                Over the past decade, we've grown from offering 3 fellowship programs to 17 comprehensive specializations, training 
                more than 500 doctors from across India and neighboring countries. Our programs combine rigorous academic curricula 
                with extensive hands-on training at over 50 partner hospitals.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                Today, Med Fellow Academy stands as a testament to excellence in medical education, with our fellows achieving 
                remarkable success in their careers and making significant contributions to healthcare.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-background rounded-2xl p-12">
            <h2 className="text-4xl font-heading font-bold text-primary mb-12 text-center">Why Choose Med Fellow Academy</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white text-2xl">
                  🎓
                </div>
                <h3 className="font-heading font-bold text-primary mb-2">Expert Faculty</h3>
                <p className="text-text-secondary">Learn from renowned specialists and academic leaders</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center text-white text-2xl">
                  🏥
                </div>
                <h3 className="font-heading font-bold text-primary mb-2">Clinical Excellence</h3>
                <p className="text-text-secondary">Hands-on training at premier healthcare institutions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center text-white text-2xl">
                  📜
                </div>
                <h3 className="font-heading font-bold text-primary mb-2">Global Recognition</h3>
                <p className="text-text-secondary">Internationally accredited certifications</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white text-2xl">
                  💼
                </div>
                <h3 className="font-heading font-bold text-primary mb-2">Career Growth</h3>
                <p className="text-text-secondary">98% placement rate with career advancement support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">Join Our Community of Excellence</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Take the next step in your medical career with Med Fellow Academy
          </p>
          <Link href="/apply" className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg hover:bg-accent hover:text-white transition-all shadow-lg">
            Apply for Fellowship
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

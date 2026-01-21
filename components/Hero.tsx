export default function Hero() {
  return (
    <section className="bg-primary text-white">
      <div className="container-custom py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
            Advanced Fellowship Programs for Practicing Doctors
          </h1>
          
          <p className="text-xl mb-10 leading-relaxed opacity-90">
            Join India's premier fellowship academy offering specialized training programs across 17+ medical specialties.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#programs" className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-accent hover:text-white transition-all text-lg">
              Explore Programs
            </a>
            <a href="/apply" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-all text-lg">
              Apply Now
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">17+</div>
              <div className="text-sm opacity-80">Fellowship Programs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-80">Expert Faculty</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-80">Fellows Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-sm opacity-80">Partner Hospitals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-primary text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&q=80"
          alt="Medical professionals in modern hospital"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>
      
      <div className="container-custom py-24 lg:py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <span className="animate-pulse text-accent">●</span>
            <span className="text-sm font-semibold">500+ Doctors Already Transformed</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-8 leading-tight">
            Break Through Your Career Ceiling & Multiply Your Medical Income
          </h1>
          
          <p className="text-xl lg:text-2xl mb-12 leading-relaxed opacity-95 max-w-4xl mx-auto">
            Transform from a general practitioner to a sought-after specialist in 12-24 months. Increase earnings by an average of <span className="text-accent font-bold">156%</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <a href="/programs" className="px-10 py-5 bg-white text-primary rounded-xl font-bold hover:bg-accent hover:text-white transition-all text-lg shadow-2xl">
              Explore Fellowship Programs →
            </a>
            <a href="/apply" className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-primary transition-all text-lg">
              Get Free Career Assessment
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-5xl font-bold mb-2 text-accent">156%</div>
              <div className="text-sm font-medium">Average Income Increase</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-5xl font-bold mb-2 text-accent">12-24</div>
              <div className="text-sm font-medium">Months to Transform</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-5xl font-bold mb-2 text-accent">500+</div>
              <div className="text-sm font-medium">Careers Transformed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-5xl font-bold mb-2 text-accent">17</div>
              <div className="text-sm font-medium">High-Demand Specialties</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

export default function LeadMagnetBanner() {
  return (
    <section className="section-padding bg-linear-to-br from-accent to-accent-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur rounded-full mb-4">
            <span className="text-sm font-semibold text-white">🎁 FREE DOWNLOAD</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Not Sure Which Fellowship to Choose?
          </h2>
          
          <p className="text-xl text-white/90 mb-8">
            Download our free 45-page guide with salary comparisons, ROI calculators, and a complete decision framework for all specialties.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-3xl mb-2">📊</div>
              <div className="font-semibold text-white">Salary Data</div>
              <div className="text-sm text-white/80">All specialties compared</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-3xl mb-2">💰</div>
              <div className="font-semibold text-white">ROI Calculator</div>
              <div className="text-sm text-white/80">Investment vs returns</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-3xl mb-2">✓</div>
              <div className="font-semibold text-white">Quality Checklist</div>
              <div className="text-sm text-white/80">Evaluate any program</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/free-guide" 
              className="px-8 py-4 bg-white text-accent rounded-lg font-bold hover:bg-gray-100 transition-all text-lg shadow-xl inline-flex items-center gap-2"
            >
              📥 Download Free Guide Now
            </Link>
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <span>✓ No credit card required</span>
              <span>•</span>
              <span>✓ Instant download</span>
            </div>
          </div>

          <p className="text-sm text-white/75 mt-6">
            Join 5,000+ doctors who&apos;ve downloaded this guide
          </p>
        </div>
      </div>
    </section>
  );
}

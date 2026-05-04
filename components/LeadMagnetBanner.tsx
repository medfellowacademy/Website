import Link from "next/link";

export default function LeadMagnetBanner() {
  return (
    <section className="py-10" style={{ background: '#1B4F72' }}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span 
            className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
            style={{ background: 'rgba(255,255,255,0.1)', color: '#FFFFFF' }}
          >
            FREE DOWNLOAD
          </span>
          
          <h2 className="text-xl font-medium text-white mb-3">
            Not Sure Which Fellowship to Choose?
          </h2>
          
          <p className="text-xs text-white opacity-90 mb-5">
            Download our free guide with salary comparisons, ROI calculators, and a complete decision framework.
          </p>

          <Link
            href="/free-guide"
            className="inline-flex items-center justify-center px-5 py-2 rounded-md text-xs font-medium transition-opacity hover:opacity-90"
            style={{ background: '#FFFFFF', color: '#1B4F72' }}
          >
            Download Free Guide
          </Link>
        </div>
      </div>
    </section>
  );
}

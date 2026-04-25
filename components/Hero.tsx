'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-white min-h-[80vh] flex items-center">
      <div className="container-custom py-24 text-center">
        {/* Badge */}
        <span className="inline-block px-4 py-1.5 bg-blue-50 text-[#2B6CB0] text-xs font-semibold tracking-widest rounded-full border border-blue-100 mb-8">
          INTERNATIONALLY ACCREDITED PROGRAMS
        </span>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Transform Your <span className="text-[#2B6CB0]">Medical</span>{' '}
          <span className="text-[#5FB563]">Career</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed">
          Globally recognized fellowship programs that set you apart and advance your practice.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/programs"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#2B6CB0] text-white text-base font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Explore Programs
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-gray-200 text-gray-700 text-base font-semibold rounded-lg hover:border-[#2B6CB0] hover:text-[#2B6CB0] transition-colors"
          >
            About MedFellow
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

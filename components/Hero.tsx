'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[75vh] sm:min-h-[80vh] md:min-h-[85vh]" style={{ background: '#EAF2FB' }}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-16 sm:pt-20 pb-16 sm:pb-20 md:pb-24">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-wider" style={{ background: '#D6EAF8', color: '#2E86C1' }}>
            EXPERT-LED FELLOWSHIP PROGRAMS
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div>
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4 sm:mb-6"
              style={{ color: '#1B4F72', lineHeight: 1.2 }}
            >
              Transform Your Medical Career
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base mb-6 sm:mb-8"
              style={{ color: '#5D6D7E', lineHeight: 1.7, maxWidth: '520px' }}
            >
              Internationally accredited fellowship programs combining academic excellence, 
              hands-on hospital training, and specialist certification designed for practicing doctors.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 text-white text-xs sm:text-sm font-medium rounded-lg transition-opacity hover:opacity-90 shadow-lg"
                style={{ background: '#1B4F72' }}
              >
                Explore Programs
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 bg-white text-xs sm:text-sm font-medium rounded-lg transition-opacity hover:opacity-90 shadow-md"
                style={{ border: '1px solid #1B4F72', color: '#1B4F72' }}
              >
                Apply Now
              </Link>
            </motion.div>

            {/* Trust Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {[
                '7-day refund guarantee',
                'Expert faculty',
                'Verified certificate'
              ].map((text, i) => (
                <span
                  key={i}
                  className="px-4 py-2 text-sm font-medium rounded-full"
                  style={{ background: '#D6EAF8', color: '#2E86C1' }}
                >
                  {text}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative h-full"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full min-h-[500px]">
              <Image
                src="/herosection.png"
                alt="Medical Fellowship Programs"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Stats Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-11/12 grid grid-cols-4 gap-3"
            >
              {[
                { value: '60+', label: 'Programs' },
                { value: '500+', label: 'Doctors' },
                { value: '20+', label: 'Hospitals' },
                { value: '4.9/5', label: 'Rating' },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-lg p-4 text-center shadow-xl" style={{ border: '0.5px solid #BFC9CA' }}>
                  <div className="text-xl font-medium mb-1" style={{ color: '#1B4F72' }}>
                    {stat.value}
                  </div>
                  <div className="text-xs" style={{ color: '#5D6D7E' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

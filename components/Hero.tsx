'use client';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import MagneticButton from './effects/MagneticButton';
import { useParallax } from '@/hooks/useParallax';

export default function Hero() {
  const [contentRef, contentY] = useParallax({ speed: 0.3 });
  const [bgRef, bgY] = useParallax({ speed: 0.5, direction: 'down' });
  
  return (
    <section className="relative bg-linear-to-br from-primary via-primary-dark to-primary text-white overflow-hidden min-h-[85vh] flex items-center">
      {/* Parallax Background Layer */}
      <motion.div 
        ref={bgRef}
        style={{ y: bgY }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&q=80"
          alt="Medical professionals in modern hospital"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-br from-primary/90 via-primary-dark/85 to-primary/90"></div>
      </motion.div>
      
      {/* Enhanced Animated Blobs with 3D effects */}
      <div className="absolute inset-0 z-2">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>
      
      <motion.div 
        ref={contentRef}
        style={{ y: contentY }}
        className="container-custom py-16 lg:py-24 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-8 leading-tight"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Advance Your Medical Career with
              <motion.span 
                className="block mt-2 bg-linear-to-r from-accent via-yellow-300 to-accent bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: '200% auto' }}
              >
                Fellowship Training
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl lg:text-2xl mb-8 leading-relaxed opacity-95 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Specialized fellowship programs designed for practicing doctors. Build expertise, gain hands-on clinical training, and grow your medical practice.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <MagneticButton className="inline-block" strength={0.4}>
                <a 
                  href="/programs" 
                  className="group px-10 py-5 bg-accent text-white rounded-xl font-bold hover:bg-accent/90 transition-all text-lg shadow-2xl hover:shadow-accent/50 flex items-center justify-center gap-2 w-full"
                >
                  Explore Fellowship Programs
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </MagneticButton>
            </motion.div>
          </div>


        </div>
      </motion.div>
    </section>
  );
}

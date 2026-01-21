'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { TrendingUp, Award, Users, Target, ArrowRight, Play } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Card3D from './3d/Card3D';
import MagneticButton from './effects/MagneticButton';
import { useParallax } from '@/hooks/useParallax';

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero() {
  const [contentRef, contentY] = useParallax({ speed: 0.3 });
  const [bgRef, bgY] = useParallax({ speed: 0.5, direction: 'down' });
  
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-dark to-primary text-white overflow-hidden min-h-screen flex items-center">
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
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary-dark/85 to-primary/90"></div>
      </motion.div>
      
      {/* Enhanced Animated Blobs with 3D effects */}
      <div className="absolute inset-0 z-[2]">
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
        className="container-custom py-20 lg:py-32 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          {/* Trust Badge with 3D effects */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-5 py-3 glass-card rounded-full"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,168,150,0.3)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
              <Users className="w-4 h-4" />
              <span className="text-sm font-semibold">500+ Doctors Successfully Trained</span>
            </motion.div>
            <motion.div 
              className="inline-flex items-center gap-2 px-5 py-3 glass-card rounded-full"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(244,162,97,0.3)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Award className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold">MCI Recognized Programs</span>
            </motion.div>
          </motion.div>
          
          <div className="text-center mb-12">
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-8 leading-tight"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Break Through Your Career Ceiling & 
              <motion.span 
                className="block mt-2 bg-gradient-to-r from-accent via-yellow-300 to-accent bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: '200% auto' }}
              >
                Multiply Your Medical Income
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl lg:text-2xl mb-8 leading-relaxed opacity-95 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform from a general practitioner to a sought-after specialist in 12-24 months. 
              Our fellows increase earnings by an average of <span className="text-accent font-bold text-3xl">156%</span>.
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
              <MagneticButton className="inline-block" strength={0.3}>
                <a 
                  href="/apply" 
                  className="group px-10 py-5 bg-white/10 backdrop-blur border-2 border-white/30 text-white rounded-xl font-bold hover:bg-white hover:text-primary transition-all text-lg flex items-center justify-center gap-2 w-full"
                >
                  <Play className="w-5 h-5" />
                  Watch Success Stories
                </a>
              </MagneticButton>
            </motion.div>
          </div>

          {/* 3D Animated Stats with Card3D */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
            <Card3D 
              className="w-full h-full"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              scale={1.08}
            >
              <motion.div 
                className="glass-card rounded-2xl p-6 text-center group h-full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ boxShadow: "0 20px 60px rgba(244,162,97,0.4)" }}
              >
                <TrendingUp className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform animate-float-3d" />
                <div className="text-5xl font-bold mb-2 text-accent">
                  <AnimatedCounter end={156} suffix="%" />
                </div>
                <div className="text-sm font-medium opacity-90">Average Income Increase</div>
              </motion.div>
            </Card3D>
            
            <Card3D 
              className="w-full h-full"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              scale={1.08}
            >
              <motion.div 
                className="glass-card rounded-2xl p-6 text-center group h-full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                whileHover={{ boxShadow: "0 20px 60px rgba(244,162,97,0.4)" }}
              >
                <Target className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform animate-float-3d" style={{ animationDelay: '0.5s' }} />
                <div className="text-5xl font-bold mb-2 text-accent">
                  <AnimatedCounter end={24} />
                </div>
                <div className="text-sm font-medium opacity-90">Months to Transform</div>
              </motion.div>
            </Card3D>
            
            <Card3D 
              className="w-full h-full"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              scale={1.08}
            >
              <motion.div 
                className="glass-card rounded-2xl p-6 text-center group h-full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                whileHover={{ boxShadow: "0 20px 60px rgba(244,162,97,0.4)" }}
              >
                <Users className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform animate-float-3d" style={{ animationDelay: '1s' }} />
                <div className="text-5xl font-bold mb-2 text-accent">
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <div className="text-sm font-medium opacity-90">Careers Transformed</div>
              </motion.div>
            </Card3D>
            
            <Card3D 
              className="w-full h-full"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              scale={1.08}
            >
              <motion.div 
                className="glass-card rounded-2xl p-6 text-center group h-full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                whileHover={{ boxShadow: "0 20px 60px rgba(244,162,97,0.4)" }}
              >
                <Award className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform animate-float-3d" style={{ animationDelay: '1.5s' }} />
                <div className="text-5xl font-bold mb-2 text-accent">
                  <AnimatedCounter end={17} />
                </div>
                <div className="text-sm font-medium opacity-90">High-Demand Specialties</div>
              </motion.div>
            </Card3D>
          </div>

          {/* Trust Logos with subtle animations */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <p className="text-sm opacity-75 mb-4 font-medium">TRUSTED BY LEADING MEDICAL INSTITUTIONS</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {['AIIMS', 'Apollo Hospitals', 'Fortis Healthcare', 'Max Healthcare', 'Medanta'].map((name, index) => (
                <motion.div 
                  key={name}
                  className="px-6 py-3 bg-white/10 rounded-lg backdrop-blur text-xs font-semibold"
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    y: -5
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  {name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

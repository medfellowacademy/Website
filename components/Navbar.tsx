'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

import MagneticButton from './effects/MagneticButton';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Subtle Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-primary z-9999 origin-left"
        style={{ scaleX }}
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.nav 
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-200' : 'bg-white/60 backdrop-blur-md border-b border-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
      <div className="container-custom">
        <div className="flex justify-between items-center h-20 sm:h-24 md:h-28 lg:h-32">
          {/* Logo with animation */}
          <Link href="/" className="flex items-center group relative z-10">
            <motion.div 
              className="relative w-44 h-14 sm:w-52 sm:h-16 md:w-60 md:h-18 lg:w-64 lg:h-20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ 
                duration: 0.3, 
                ease: "easeInOut",
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            >
              <Image
                src="/logo.png"
                alt="Med Fellow Academy Logo"
                fill
                className="object-contain object-left"
                sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 240px"
                priority
                style={{ 
                  mixBlendMode: 'multiply',
                  filter: 'contrast(1.1) brightness(1.05)'
                }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation with Magnetic Effects */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About Us' },
              { href: '/programs?mode=online', label: 'Our Programs' },
              { href: '/contact', label: 'Contact' }
            ].map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                className="relative group py-2"
              >
                <motion.span
                  className="text-gray-700 group-hover:text-primary transition-colors duration-300 font-medium text-sm xl:text-base"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {item.label}
                </motion.span>
                <motion.div
                  className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-linear-to-r from-primary via-secondary to-accent rounded-full"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileHover={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </Link>
            ))}
          </div>

          {/* CTA Button with Magnetic Effect */}
          <div className="hidden lg:flex items-center gap-4">
            <MagneticButton strength={0.3}>
              <Link href="/apply">
                <motion.div
                  className="px-6 py-2.5 xl:px-7 xl:py-3 bg-[#2B6CB0] text-white rounded-xl font-semibold text-sm xl:text-base shadow-lg shadow-blue-500/25"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 15px 40px rgba(43,108,176,0.4)",
                    backgroundColor: "#236094"
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400,
                    damping: 25
                  }}
                >
                  Apply Now
                </motion.div>
              </Link>
            </MagneticButton>
          </div>

          {/* Mobile Menu Button with animation */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-xl hover:bg-primary/5 active:bg-primary/10 transition-colors relative z-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <motion.svg 
              className="w-6 h-6 text-primary" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={isOpen ? "open" : "closed"}
            >
              {isOpen ? (
                <motion.path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2.5} 
                  d="M6 18L18 6M6 6l12 12"
                  initial={{ pathLength: 0, rotate: -90 }}
                  animate={{ pathLength: 1, rotate: 0 }}
                  exit={{ pathLength: 0, rotate: 90 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              ) : (
                <motion.path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2.5} 
                  d="M4 6h16M4 12h16M4 18h16"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  exit={{ pathLength: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              )}
            </motion.svg>
          </motion.button>
        </div>



        {/* Enhanced Mobile Menu with AnimatePresence */}
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div 
              className="lg:hidden py-6 border-t border-gray-200 bg-linear-to-b from-white to-gray-50/50"
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ 
                duration: 0.4,
                ease: "easeInOut",
                opacity: { duration: 0.3 }
              }}
            >
              <div className="flex flex-col space-y-1 px-2">
                {[
                  { href: '/', label: 'Home', icon: '🏠' },
                  { href: '/about', label: 'About Us', icon: 'ℹ️' },
                  { href: '/programs?mode=online', label: 'Our Programs', icon: '📚' },
                  { href: '/contact', label: 'Contact', icon: '📞' },
                ].map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -30, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -20, scale: 0.95 }}
                    transition={{ 
                      delay: index * 0.05,
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                  >
                    <Link 
                      href={item.href} 
                      className="flex items-center gap-3 px-4 py-3.5 text-gray-700 hover:text-primary hover:bg-primary/5 active:bg-primary/10 rounded-xl transition-all duration-200 font-medium group"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
                      <span>{item.label}</span>
                      <motion.span 
                        className="ml-auto text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={{ x: -5 }}
                        whileHover={{ x: 0 }}
                      >
                        →
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="pt-4"
                >
                  <Link 
                    href="/apply" 
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#2B6CB0] text-white rounded-xl font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 active:scale-98 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Apply Now
                    <span className="text-lg">✨</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
    </>
  );
}

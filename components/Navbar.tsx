'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
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

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent z-[9999] origin-left"
        style={{ scaleX }}
      />
      
      <motion.nav 
        className={`bg-surface/95 border-b border-gray-100 sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${
          scrolled ? 'shadow-lg' : 'shadow-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo with animation */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div 
              className="w-12 h-12 relative"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <Image
                src="/logo.png"
                alt="Med Fellow Academy Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
            <div>
              <h1 className="text-xl font-heading font-bold text-primary group-hover:text-secondary transition-colors">
                Med Fellow Academy
              </h1>
              <p className="text-xs text-text-secondary">Excellence in Medical Education</p>
            </div>
          </Link>

          {/* Desktop Navigation with Magnetic Effects */}
          <div className="hidden lg:flex items-center space-x-6">
            {['Home', 'Programs', 'Resources', 'Blog', 'Compare', 'Contact'].map((item) => (
              <Link 
                key={item} 
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="relative group"
              >
                <motion.span
                  className="text-text-secondary group-hover:text-primary transition-colors duration-200 font-medium"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.span>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
            
            {/* Enhanced Features Mega Menu */}
            <div className="group relative">
              <motion.button 
                className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium flex items-center gap-1"
                whileHover={{ y: -2 }}
              >
                Features
                <motion.div
                  animate={{ rotate: 0 }}
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </motion.button>
              
              <motion.div 
                className="absolute left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden"
                initial={{ y: 10 }}
                whileHover={{ y: 0 }}
              >
                <div className="p-2">
                  {[
                    { href: '/learning-model', icon: '🎓', label: 'Hybrid Learning', desc: 'Online + Offline training' },
                    { href: '/mentorship', icon: '🤝', label: 'Mentorship', desc: '1-on-1 expert guidance' },
                    { href: '/research', icon: '🔬', label: 'Research Integration', desc: 'Publish your work' },
                    { href: '/dashboard', icon: '📊', label: 'Live Dashboard', desc: 'Track your progress' },
                    { href: '/virtual-tours', icon: '🏥', label: 'Virtual Tours', desc: 'Explore facilities' }
                  ].map((feature, index) => (
                    <Link 
                      key={feature.href} 
                      href={feature.href}
                      className="group/item"
                    >
                      <motion.div
                        className="px-4 py-3 text-text-secondary hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 hover:text-primary transition-all rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-2xl">{feature.icon}</span>
                          <div>
                            <div className="font-semibold text-sm">{feature.label}</div>
                            <div className="text-xs text-text-tertiary group-hover/item:text-text-secondary transition-colors">
                              {feature.desc}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* CTA Button with Magnetic Effect */}
          <div className="hidden lg:flex items-center gap-4">
            <MagneticButton strength={0.3}>
              <Link href="/apply">
                <motion.div
                  className="px-6 py-2.5 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg font-medium"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(0,102,204,0.3)",
                    backgroundImage: "linear-gradient(to right, oklch(0.62 0.11 196), oklch(0.76 0.12 70))"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Apply Now
                </motion.div>
              </Link>
            </MagneticButton>
          </div>

          {/* Mobile Menu Button with animation */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            whileTap={{ scale: 0.9 }}
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
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.3 }}
                />
              ) : (
                <motion.path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.svg>
          </motion.button>
        </div>

        {/* Enhanced Mobile Menu with AnimatePresence */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="lg:hidden py-4 border-t border-gray-100"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-4">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/programs', label: 'Programs' },
                  { href: '/learning-model', label: '🎓 Hybrid Learning' },
                  { href: '/mentorship', label: '🤝 Mentorship' },
                  { href: '/research', label: '🔬 Research Integration' },
                  { href: '/resources', label: '📚 Resources' },
                  { href: '/blog', label: '📰 Blog' },
                  { href: '/comparison', label: '⚖️ Compare' },
                  { href: '/dashboard', label: '📊 Live Dashboard' },
                  { href: '/virtual-tours', label: '🏥 Virtual Tours' },
                  { href: '/fellowship-matcher', label: '🎯 Fellowship Matcher' },
                  { href: '/financial-aid', label: '💰 Financial Aid' },
                  { href: '/contact', label: 'Contact' }
                ].map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link 
                      href={item.href} 
                      className="text-text-secondary hover:text-primary transition-colors font-medium block"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link 
                    href="/apply" 
                    className="btn-primary text-center block" 
                    onClick={() => setIsOpen(false)}
                  >
                    Apply Now
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

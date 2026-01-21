'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-surface/95 border-b border-gray-100 sticky top-0 z-50 backdrop-blur-md shadow-sm">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 relative">
              <Image
                src="/logo.png"
                alt="Med Fellow Academy Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h1 className="text-xl font-heading font-bold text-primary">
                Med Fellow Academy
              </h1>
              <p className="text-xs text-text-secondary">Excellence in Medical Education</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium">
              Home
            </Link>
            <Link href="/programs" className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium">
              Programs
            </Link>
            
            {/* Features Dropdown */}
            <div className="group relative">
              <button className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium flex items-center gap-1">
                Features
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/learning-model" className="block px-4 py-3 text-text-secondary hover:bg-primary/5 hover:text-primary transition-colors">
                  🎓 Hybrid Learning
                </Link>
                <Link href="/mentorship" className="block px-4 py-3 text-text-secondary hover:bg-primary/5 hover:text-primary transition-colors">
                  🤝 Mentorship
                </Link>
                <Link href="/research" className="block px-4 py-3 text-text-secondary hover:bg-primary/5 hover:text-primary transition-colors">
                  🔬 Research Integration
                </Link>
                <Link href="/dashboard" className="block px-4 py-3 text-text-secondary hover:bg-primary/5 hover:text-primary transition-colors">
                  📊 Live Dashboard
                </Link>
                <Link href="/virtual-tours" className="block px-4 py-3 text-text-secondary hover:bg-primary/5 hover:text-primary transition-colors">
                  🏥 Virtual Tours
                </Link>
              </div>
            </div>

            <Link href="/resources" className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium">
              Resources
            </Link>
            <Link href="/blog" className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium">
              Blog
            </Link>
            <Link href="/comparison" className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium">
              Compare
            </Link>
            <Link href="/contact" className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/apply" className="px-6 py-2.5 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-text-secondary hover:text-primary transition-colors font-medium" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link href="/programs" className="text-text-secondary hover:text-primary transition-colors font-medium" onClick={() => setIsOpen(false)}>
                Programs
              </Link>
              <Link href="/learning-model" className="text-text-secondary hover:text-primary transition-colors font-medium" onClick={() => setIsOpen(false)}>
                🎓 Hybrid Learning
              </Link>
              <Link href="/mentorship" className="text-text-secondary hover:text-primary transition-colors font-medium" onClick={() => setIsOpen(false)}>
                🤝 Mentorship
              </Link>
              <Link href="/research" className="text-text-secondary hover:text-primary transition-colors font-medium" onClick={() => setIsOpen(false)}>
                🔬 Research Integration
              </Link>
              <Link href="/resources" className="text-text-secondary hover:text-primary transition-colors font-medium" onClick={() => setIsOpen(false)}>
                📚 Resources
              </Link>
              <Link href="/blog" className="text-text-secondary hover:text-primary transition-colors font-medium" onClick={() => setIsOpen(false)}>
                📰 Blog
              </Link>
              <Link href="/comparison" className="text-text-secondary hover:text-primary transition-colors font-medium" onClick={() => setIsOpen(false)}>
                ⚖️ Compare
              </Link>
              <Link href="/dashboard" className="text-text-secondary hover:text-primary transition-colors font-medium" onClick={() => setIsOpen(false)}>
                📊 Live Dashboard
              </Link>
              <Link href="/virtual-tours" className="text-text-secondary hover:text-primary transition-colors font-medium" onClick={() => setIsOpen(false)}>
                🏥 Virtual Tours
              </Link>
              <Link href="/fellowship-matcher" className="text-text-secondary hover:text-primary transition-colors font-medium" onClick={() => setIsOpen(false)}>
                🎯 Fellowship Matcher
              </Link>
              <Link href="/financial-aid" className="text-text-secondary hover:text-primary transition-colors font-medium" onClick={() => setIsOpen(false)}>
                💰 Financial Aid
              </Link>
              <Link href="/contact" className="text-text-secondary hover:text-primary transition-colors font-medium" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
              <Link href="/apply" className="btn-primary text-center" onClick={() => setIsOpen(false)}>
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

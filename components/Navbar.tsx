'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-surface/95 border-b border-gray-100 sticky top-0 z-50 backdrop-blur-md shadow-sm">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:shadow-lg transition-all">
              MF
            </div>
            <div>
              <h1 className="text-xl font-heading font-bold text-primary">
                Med Fellow Academy
              </h1>
              <p className="text-xs text-text-secondary">Excellence in Medical Education</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium">
              Home
            </Link>
            <Link href="/programs" className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium">
              Programs
            </Link>
            <Link href="/about" className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium">
              About Us
            </Link>
            <Link href="/faculty" className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium">
              Faculty
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
              <Link href="/about" className="text-text-secondary hover:text-primary transition-colors font-medium" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
              <Link href="/faculty" className="text-text-secondary hover:text-primary transition-colors font-medium" onClick={() => setIsOpen(false)}>
                Faculty
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

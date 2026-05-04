'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav 
      className="sticky top-0 z-50 bg-white" 
      style={{ borderBottom: '0.5px solid #BFC9CA', height: '70px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="MedFellow Academy"
            width={280}
            height={70}
            className="h-12 sm:h-14 md:h-16 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs transition-colors hover:opacity-80 font-normal"
              style={{ color: '#5D6D7E' }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/apply"
          className="hidden lg:inline-flex items-center justify-center px-4 py-2 rounded-md text-xs font-medium transition-opacity hover:opacity-90"
          style={{ background: '#1B4F72', color: '#FFFFFF' }}
        >
          Enroll Now
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2"
          style={{ color: '#1B4F72' }}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white" style={{ borderBottom: '0.5px solid #BFC9CA' }}>
          <div className="px-4 sm:px-6 md:px-8 py-4 space-y-3">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-xs font-normal transition-colors"
                style={{ color: '#5D6D7E' }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/apply"
              className="block w-full text-center px-4 py-2 rounded-md text-xs font-medium mt-4"
              style={{ background: '#1B4F72', color: '#FFFFFF' }}
              onClick={() => setIsOpen(false)}
            >
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/contact', label: 'Contact' },
];

const COUNTRY_OPTIONS = [
  { href: '/saudi-arabia/programs', label: 'Saudi Arabia', flag: '🇸🇦' },
  { href: '/dubai/programs', label: 'Dubai', flag: '🇦🇪' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);
  const [mobileCountryOpen, setMobileCountryOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCountryOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

          {/* Country Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setCountryOpen((v) => !v)}
              className="flex items-center gap-1 text-xs font-normal transition-colors hover:opacity-80"
              style={{ color: '#5D6D7E' }}
            >
              Country
              <ChevronDown
                className="w-3 h-3 transition-transform"
                style={{ transform: countryOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            </button>

            {countryOpen && (
              <div
                className="absolute top-full right-0 mt-2 w-44 bg-white rounded-lg shadow-lg py-1 z-50"
                style={{ border: '0.5px solid #BFC9CA' }}
              >
                {COUNTRY_OPTIONS.map((opt) => (
                  <Link
                    key={opt.href}
                    href={opt.href}
                    onClick={() => setCountryOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-xs hover:bg-gray-50 transition-colors"
                    style={{ color: '#5D6D7E' }}
                  >
                    <span>{opt.flag}</span>
                    {opt.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
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

            {/* Mobile Country Toggle */}
            <div>
              <button
                onClick={() => setMobileCountryOpen((v) => !v)}
                className="flex items-center gap-1 text-xs font-normal w-full"
                style={{ color: '#5D6D7E' }}
              >
                Country
                <ChevronDown
                  className="w-3 h-3 transition-transform"
                  style={{ transform: mobileCountryOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </button>
              {mobileCountryOpen && (
                <div className="mt-2 ml-3 space-y-2">
                  {COUNTRY_OPTIONS.map((opt) => (
                    <Link
                      key={opt.href}
                      href={opt.href}
                      className="flex items-center gap-2 text-xs font-normal transition-colors"
                      style={{ color: '#5D6D7E' }}
                      onClick={() => { setIsOpen(false); setMobileCountryOpen(false); }}
                    >
                      <span>{opt.flag}</span>
                      {opt.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

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

'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { analytics } from '@/lib/analytics';

const COUNTRIES = [
  { label: 'UAE – Dubai', flag: '🇦🇪', href: '/dubai/programs' },
  { label: 'Saudi Arabia', flag: '🇸🇦', href: '/saudi-arabia/programs' },
];

const NAV_LINKS = [
  { href: '/',        label: 'Home' },
  { href: '/about',   label: 'About' },
  { href: '/programs',label: 'Programs' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [enrollText, setEnrollText] = useState('Apply for June 2026 Batch');
  const [enrollTextDesktop, setEnrollTextDesktop] = useState('Enroll now');
  const [countryOpen, setCountryOpen] = useState(false);
  const [mobileCountryOpen, setMobileCountryOpen] = useState(false);
  const countryRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (countryRef.current && !countryRef.current.contains(e.target as Node)) {
        setCountryOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    fetch('/api/settings')
      .then(r => r.json())
      .then((data: Record<string, string>) => {
        if (data.apply_batch_text) setEnrollText(data.apply_batch_text + ' Batch');
        if (data.navbar_enroll_text) setEnrollTextDesktop(data.navbar_enroll_text);
      })
      .catch(() => {});
  }, []);

  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <nav
      className="sticky top-0 z-50 bg-white"
      style={{
        borderBottom: '1px solid #E5E7EB',
        height: '60px',
        boxShadow: scrolled ? '0 1px 8px rgba(0,0,0,0.06)' : 'none',
        transition: 'box-shadow 0.2s ease',
      }}
    >
      <div className="container-custom h-full flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/logo.png"
            alt="MedFellow Academy"
            width={220}
            height={56}
            className="h-8 sm:h-9 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-3 py-1.5 rounded-md text-[0.875rem] font-medium transition-colors hover:bg-[#F9FAFB]"
              style={{ color: isActive(item.href) ? '#15401E' : '#374151' }}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[#15401E]" />
              )}
            </Link>
          ))}

          {/* Country dropdown */}
          <div className="relative" ref={countryRef}>
            <button
              onClick={() => setCountryOpen(!countryOpen)}
              className="flex items-center gap-1 px-3 py-1.5 rounded-md text-[0.875rem] font-medium text-[#374151] hover:bg-[#F9FAFB] transition-colors"
            >
              🌍 Country
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${countryOpen ? 'rotate-180' : ''}`} />
            </button>
            {countryOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg border border-[#E5E7EB] shadow-lg py-1 z-50">
                {COUNTRIES.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    onClick={() => setCountryOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-[0.875rem] text-[#374151] hover:bg-[#F9FAFB] hover:text-[#15401E] transition-colors"
                  >
                    <span className="text-base">{c.flag}</span>
                    {c.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Desktop right actions */}
        <div className="hidden lg:flex items-center gap-2">
          <Link
            href="/apply"
            className="px-4 py-2 text-[0.875rem] font-medium text-[#374151] hover:text-[#111827] transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/apply"
            className="inline-flex items-center px-4 py-2 text-[0.875rem] font-semibold text-white bg-[#15401E] rounded-md hover:bg-[#0f2e15] transition-colors"
            onClick={() => analytics.applyClick('navbar_enroll_now')}
          >
            {enrollTextDesktop}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-md text-[#374151] hover:bg-[#F9FAFB] transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-[#E5E7EB]">
          <div className="container-custom py-3 space-y-0.5">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center px-3 py-2.5 rounded-md text-[0.9375rem] font-medium transition-colors"
                style={{ color: isActive(item.href) ? '#15401E' : '#374151', background: isActive(item.href) ? '#F7FAF8' : 'transparent' }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
              {/* Mobile country section */}
            <div>
              <button
                onClick={() => setMobileCountryOpen(!mobileCountryOpen)}
                className="flex items-center justify-between w-full px-3 py-2.5 rounded-md text-[0.9375rem] font-medium text-[#374151]"
              >
                <span>🌍 Country</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileCountryOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileCountryOpen && (
                <div className="ml-3 mt-0.5 space-y-0.5">
                  {COUNTRIES.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      onClick={() => { setIsOpen(false); setMobileCountryOpen(false); }}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-md text-[0.9rem] text-[#374151] hover:bg-[#F7FAF8] hover:text-[#15401E] transition-colors"
                    >
                      <span>{c.flag}</span>
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

          <div className="pt-3 flex flex-col gap-2">
              <Link
                href="/apply"
                className="flex items-center justify-center py-3 rounded-md text-[0.9375rem] font-semibold text-white bg-[#15401E]"
                onClick={() => { analytics.applyClick('navbar_mobile_enroll_now'); setIsOpen(false); }}
              >
                {enrollText}
              </Link>
              <Link
                href="/programs"
                className="flex items-center justify-center py-2.5 rounded-md text-[0.9375rem] font-medium border border-[#E5E7EB] text-[#374151]"
                onClick={() => setIsOpen(false)}
              >
                Browse Programs
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

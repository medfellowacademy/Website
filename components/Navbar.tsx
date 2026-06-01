'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { analytics } from '@/lib/analytics';

const NAV_LINKS = [
  { href: '/',        label: 'Home' },
  { href: '/about',   label: 'About' },
  { href: '/programs',label: 'Programs' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
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
          <Link
            href="/free-guide"
            className="px-3 py-1.5 rounded-md text-[0.875rem] font-medium text-[#15401E] hover:bg-[#e8f2ea] transition-colors"
            onClick={() => analytics.guideDownload('navbar_link')}
          >
            Free Guide
          </Link>
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
            Enroll now
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
            <Link
              href="/free-guide"
              className="flex items-center px-3 py-2.5 rounded-md text-[0.9375rem] font-medium text-[#15401E]"
              onClick={() => setIsOpen(false)}
            >
              Free Guide
            </Link>
            <div className="pt-3 flex flex-col gap-2">
              <Link
                href="/apply"
                className="flex items-center justify-center py-3 rounded-md text-[0.9375rem] font-semibold text-white bg-[#15401E]"
                onClick={() => { analytics.applyClick('navbar_mobile_enroll_now'); setIsOpen(false); }}
              >
                Apply for June 2026 Batch
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

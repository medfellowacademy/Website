'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight } from 'lucide-react';

export default function StickyApplyCTA() {
  const [visible, setVisible]     = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50"
      style={{
        background: '#FFFFFF',
        borderTop: '1px solid #E5E7EB',
        boxShadow: '0 -4px 16px rgba(0,0,0,0.08)',
      }}
    >
      <div className="container-custom flex items-center justify-between gap-3 py-3">
        {/* Left: text */}
        <div className="min-w-0">
          <p className="text-[0.9375rem] font-semibold text-[#111827] leading-tight truncate">
            June 2026 Batch — Only 14 seats remaining
          </p>
          <p className="text-[0.8125rem] text-[#6B7280] hidden sm:block">Secure your seat before applications close.</p>
        </div>

        {/* Right: CTA */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link
            href="/apply"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-[0.875rem] font-semibold text-white bg-[#15401E] hover:bg-[#0f2e15] transition-colors"
          >
            Apply now <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <button
            onClick={() => { setDismissed(true); setVisible(false); }}
            className="p-2 min-w-[36px] min-h-[36px] flex items-center justify-center rounded-md text-[#9CA3AF] hover:text-[#374151] hover:bg-[#F3F4F6] transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

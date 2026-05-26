'use client';
import { useState } from 'react';
import Link from 'next/link';
import { X, ArrowRight } from 'lucide-react';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative text-white text-xs py-2 px-4" style={{ background: '#1B4F72' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-1 justify-center">
          <span className="hidden sm:inline">🎓</span>
          <span>June 2026 batch applications now open</span>
          <Link 
            href="/apply" 
            className="inline-flex items-center gap-1 text-xs font-medium hover:opacity-80 transition-opacity"
            style={{ color: '#AED6F1' }}
          >
            Apply now
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="p-1 hover:opacity-80 transition-opacity"
          aria-label="Close announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StickyApplyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [dismissed]);

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <div
            className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3 sm:py-3.5"
            style={{
              background: 'linear-gradient(90deg, #0f2744 0%, #1a3a5c 50%, #0f2744 100%)',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 -8px 32px rgba(0,0,0,0.35)',
            }}
          >
            {/* Left: text */}
            <div className="flex items-center gap-2.5 min-w-0">
              <span
                className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: 'rgba(251,191,36,0.15)', border: '1px solid rgba(251,191,36,0.3)' }}
              >
                <Zap className="w-4 h-4" style={{ color: '#fcd34d' }} />
              </span>
              <div className="min-w-0">
                <p className="text-white font-semibold text-xs sm:text-sm leading-tight truncate">
                  Apply for June 2026 Batch
                </p>
                <p className="text-xs leading-tight hidden sm:block" style={{ color: 'rgba(253,211,77,0.85)' }}>
                  Only 14 seats remaining — secure yours today
                </p>
              </div>
            </div>

            {/* Right: CTA + dismiss */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <Link
                href="/apply"
                className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200"
                style={{
                  backgroundColor: '#213F5F',
                  color: 'white',
                  boxShadow: '0 4px 12px rgba(43,108,176,0.5)',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#3a7dc4')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#213F5F')}
              >
                Apply Now
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => { setDismissed(true); setVisible(false); }}
                className="flex-shrink-0 p-1.5 rounded-lg transition-colors"
                style={{ color: 'rgba(255,255,255,0.5)' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                aria-label="Dismiss"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

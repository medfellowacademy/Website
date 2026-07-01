'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight } from 'lucide-react';
import { analytics } from '@/lib/analytics';

const DEFAULT_MESSAGES = [
  { text: 'July 2026 batch applications now open — only 14 seats remaining', label: 'july_2026_batch' },
  { text: 'New: Fellowship in Neonatology — Dubai & Saudi Arabia now available', label: 'new_neonatology' },
  { text: '4× salary uplift reported by Emergency Medicine fellows in 2025', label: 'salary_uplift' },
];

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [msgIndex, setMsgIndex]   = useState(0);
  const [messages, setMessages]   = useState(DEFAULT_MESSAGES);

  useEffect(() => {
    fetch('/api/settings')
      .then(r => r.json())
      .then((data: Record<string, string>) => {
        if (data.announcement_text?.trim()) {
          const parts = data.announcement_text.split('|').map((t: string) => t.trim()).filter(Boolean);
          if (parts.length > 0) setMessages(parts.map((text: string, i: number) => ({ text, label: `cms_msg_${i}` })));
        }
      })
      .catch(() => {});

    const dismissed = sessionStorage.getItem('announcement_dismissed');
    if (!dismissed) setIsVisible(true);

    const interval = setInterval(() => {
      setMsgIndex(prev => (prev + 1) % messages.length);
    }, 5000);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isVisible) return null;
  const msg = messages[msgIndex] ?? messages[0];

  return (
    <div
      className="relative overflow-hidden text-white"
      style={{ background: '#15401E', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="announcement-shimmer" aria-hidden="true" />
      <div className="container-custom flex items-center justify-between gap-4 py-2 relative z-10">
        <div className="flex items-center gap-2 flex-1 justify-center announcement-fade min-w-0">
          <span className="text-[0.8125rem] truncate" style={{ color: 'rgba(255,255,255,0.85)' }}>
            {msg.text}
          </span>
          <Link
            href="/apply"
            className="inline-flex items-center gap-1 text-[0.8125rem] font-semibold hover:opacity-80 transition-opacity flex-shrink-0"
            style={{ color: '#86EFAC' }}
            onClick={() => analytics.announcementClick(msg.label)}
          >
            Apply now <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <button
          onClick={() => {
            analytics.announcementDismiss();
            sessionStorage.setItem('announcement_dismissed', '1');
            setIsVisible(false);
          }}
          className="p-1 hover:opacity-70 transition-opacity flex-shrink-0"
          aria-label="Close"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

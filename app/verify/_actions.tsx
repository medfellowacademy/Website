'use client';

import { useState } from 'react';
import { Printer, Link2, Check } from 'lucide-react';

export function CredentialActions({ shareUrl }: { shareUrl: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(shareUrl);
    } catch {
      // Fallback for older browsers / permissions denied
      const el = document.createElement('textarea');
      el.value = shareUrl;
      document.body.appendChild(el);
      el.select();
      try { document.execCommand('copy'); } catch { /* ignore */ }
      el.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="no-print flex flex-wrap gap-2.5">
      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#D1D5DB] text-[0.8125rem] font-semibold text-[#15401E] hover:border-[#15401E] transition-colors"
      >
        <Printer className="w-4 h-4" /> Print / Save as PDF
      </button>
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#D1D5DB] text-[0.8125rem] font-semibold text-[#15401E] hover:border-[#15401E] transition-colors"
      >
        {copied ? <Check className="w-4 h-4 text-[#2da84e]" /> : <Link2 className="w-4 h-4" />}
        {copied ? 'Link copied' : 'Copy verification link'}
      </button>
    </div>
  );
}

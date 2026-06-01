'use client';
import { useState } from 'react';
import { Download, CheckCircle2, ArrowRight } from 'lucide-react';
import { analytics } from '@/lib/analytics';

const FEATURES = [
  'Salary comparison across 12 specialties',
  'ROI calculator — online vs. hybrid vs. offline',
  'Fellowship selection decision framework',
  'Sample weekly schedule for working doctors',
];

export default function LeadMagnetBanner() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    analytics.guideDownload('lead_magnet_banner');
    await new Promise(r => setTimeout(r, 600));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section className="section-padding bg-[#15401E]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-center">

          {/* Left */}
          <div>
            <span
              className="inline-block text-[0.6875rem] font-semibold uppercase tracking-wider px-2.5 py-1 rounded mb-4"
              style={{ background: 'rgba(255,255,255,0.10)', color: 'rgba(255,255,255,0.70)' }}
            >
              Free Download
            </span>
            <h2 className="text-[clamp(1.375rem,3vw,1.875rem)] font-bold text-white mb-2 leading-tight tracking-tight">
              Not sure which fellowship to choose?
            </h2>
            <p className="text-[0.9375rem] mb-6" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Download our free guide with everything you need to make the right career decision.
            </p>
            <ul className="space-y-2">
              {FEATURES.map((f, i) => (
                <li key={i} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: 'rgba(255,255,255,0.55)' }} />
                  <span className="text-[0.875rem]" style={{ color: 'rgba(255,255,255,0.80)' }}>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <div
            className="rounded-lg p-6"
            style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
          >
            {submitted ? (
              <div className="text-center py-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: 'rgba(255,255,255,0.10)' }}>
                  <Download className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-[1.0625rem] font-semibold text-white mb-1">Check your inbox!</h3>
                <p className="text-[0.875rem]" style={{ color: 'rgba(255,255,255,0.65)' }}>Your free guide is on its way to {email}.</p>
              </div>
            ) : (
              <>
                <h3 className="text-[1.0625rem] font-semibold text-white mb-1">Get the free fellowship guide</h3>
                <p className="text-[0.8125rem] mb-4" style={{ color: 'rgba(255,255,255,0.60)' }}>Enter your email and we'll send it instantly.</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-md text-[0.875rem] outline-none"
                    style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)', color: '#FFFFFF' }}
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-[0.875rem] font-semibold transition-opacity hover:opacity-90 disabled:opacity-60"
                    style={{ background: '#FFFFFF', color: '#15401E' }}
                  >
                    {loading ? 'Sending…' : <><Download className="w-4 h-4" /> Download free guide</>}
                  </button>
                </form>
                <p className="text-[0.75rem] text-center mt-3" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  No spam, ever. Instant download.
                </p>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

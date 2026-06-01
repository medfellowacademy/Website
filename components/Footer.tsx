'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Send, MessageCircle } from 'lucide-react';
import { analytics } from '@/lib/analytics';

interface FooterSettings {
  contact_email: string;
  contact_phone: string;
  contact_whatsapp: string;
  contact_address: string;
  social_facebook: string;
  social_linkedin: string;
  social_instagram: string;
}

const DEFAULTS: FooterSettings = {
  contact_email:     'info@medfellow.in',
  contact_phone:     '+91 4045 674378',
  contact_whatsapp:  '919985044993',
  contact_address:   'Mahavir House, Basheer Bagh, Hyderabad 500029',
  social_facebook:   'https://www.facebook.com/people/MedFellow-Academy/61576370840302/',
  social_linkedin:   'https://www.linkedin.com/in/medfellow-academy-4628823b8/',
  social_instagram:  'https://www.instagram.com/medfellow_academy/',
};


export default function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail]               = useState('');
  const [newsletterDone, setNewsletterDone] = useState(false);
  const [settings, setSettings]         = useState<FooterSettings>(DEFAULTS);

  useEffect(() => {
    fetch('/api/settings')
      .then(r => r.json())
      .then((data: Record<string, string>) => {
        setSettings({
          contact_email:    data.contact_email    || DEFAULTS.contact_email,
          contact_phone:    data.contact_phone    || DEFAULTS.contact_phone,
          contact_whatsapp: (data.contact_whatsapp || DEFAULTS.contact_whatsapp).replace(/\D/g, ''),
          contact_address:  data.contact_address  || DEFAULTS.contact_address,
          social_facebook:  data.social_facebook  || DEFAULTS.social_facebook,
          social_linkedin:  data.social_linkedin  || DEFAULTS.social_linkedin,
          social_instagram: data.social_instagram || DEFAULTS.social_instagram,
        });
      })
      .catch(() => {});
  }, []);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    analytics.guideDownload('footer_newsletter');
    setNewsletterDone(true);
  };

  return (
    <footer style={{ background: '#15401E', borderTop: '3px solid #0f2e15' }}>


      {/* Main footer */}
      <div className="container-custom py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">

          {/* Brand col */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-3">
              <span className="text-[1.0625rem] font-bold text-white">MedFellow</span>
              <span className="ml-1 text-[1.0625rem] font-medium" style={{ color: '#86EFAC' }}>Academy</span>
            </Link>
            <p className="text-[0.8125rem] mb-5 leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '260px' }}>
              Empowering doctors with advanced fellowship programs for clinical excellence and career growth.
            </p>

            {/* Social icons */}
            <div className="flex gap-2 mb-5">
              {[
                { href: settings.social_facebook,  icon: <FaFacebookF className="w-3 h-3" />,   label: 'Facebook' },
                { href: settings.social_linkedin,   icon: <FaLinkedinIn className="w-3 h-3" />,  label: 'LinkedIn' },
                { href: settings.social_instagram,  icon: <FaInstagram className="w-3 h-3" />,   label: 'Instagram' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-7 h-7 rounded-md flex items-center justify-center hover:opacity-80 transition-opacity"
                  style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.80)' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <p className="text-[0.75rem] font-semibold mb-2" style={{ color: 'rgba(255,255,255,0.55)' }}>Career insights in your inbox</p>
            {newsletterDone ? (
              <p className="text-[0.8125rem]" style={{ color: '#86EFAC' }}>Subscribed ✓</p>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 min-w-0 px-3 py-2 rounded-md text-[0.8125rem] outline-none"
                  style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)', color: '#FFFFFF' }}
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="px-2.5 py-2 rounded-md hover:opacity-80 transition-opacity"
                  style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.80)' }}
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[0.75rem] font-semibold uppercase tracking-wider mb-3" style={{ color: 'rgba(255,255,255,0.40)' }}>Quick links</h4>
            <ul className="space-y-2">
              {[
                { href: '/',            label: 'Home' },
                { href: '/about',       label: 'About Us' },
                { href: '/programs',    label: 'Programs' },
                { href: '/free-guide',  label: 'Free Guide' },
                { href: '/contact',     label: 'Contact' },
              ].map((l, i) => (
                <li key={i}>
                  <Link href={l.href} className="text-[0.8125rem] hover:opacity-100 transition-opacity" style={{ color: 'rgba(255,255,255,0.60)' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[0.75rem] font-semibold uppercase tracking-wider mb-3" style={{ color: 'rgba(255,255,255,0.40)' }}>Legal</h4>
            <ul className="space-y-2">
              {[
                { href: '/privacy-policy',       label: 'Privacy Policy' },
                { href: '/terms-and-conditions', label: 'Terms & Conditions' },
              ].map((l, i) => (
                <li key={i}>
                  <Link href={l.href} className="text-[0.8125rem] hover:opacity-100 transition-opacity" style={{ color: 'rgba(255,255,255,0.60)' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[0.75rem] font-semibold uppercase tracking-wider mb-3" style={{ color: 'rgba(255,255,255,0.40)' }}>Contact</h4>
            <ul className="space-y-2 text-[0.8125rem]">
              <li>
                <a
                  href={`https://wa.me/${settings.contact_whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:opacity-100 transition-opacity font-medium"
                  style={{ color: '#86EFAC' }}
                  onClick={() => analytics.whatsappOpen('footer')}
                >
                  <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                </a>
              </li>
              <li>
                <a href={`tel:${settings.contact_phone.replace(/\s/g, '')}`} className="hover:opacity-100 transition-opacity" style={{ color: 'rgba(255,255,255,0.60)' }}>
                  {settings.contact_phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${settings.contact_email}`} className="hover:opacity-100 transition-opacity" style={{ color: 'rgba(255,255,255,0.60)' }}>
                  {settings.contact_email}
                </a>
              </li>
              <li className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.40)', maxWidth: '160px' }}>
                {settings.contact_address}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-2" style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
          <p className="text-[0.75rem]" style={{ color: 'rgba(255,255,255,0.40)' }}>© {year} MedFellow Academy. All rights reserved.</p>
          <p className="text-[0.75rem]" style={{ color: 'rgba(255,255,255,0.25)' }}>Designed for India&apos;s specialist doctors</p>
        </div>
      </div>
    </footer>
  );
}

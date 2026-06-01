import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import EnquiryModal from '@/components/EnquiryModal';
import ScrollProgress from '@/components/effects/ScrollProgress';
import AnnouncementBar from '@/components/AnnouncementBar';
import AnalyticsProvider from '@/components/effects/AnalyticsProvider';
import ThemeProvider from '@/components/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Med Fellow Academy - Advanced Fellowship Programs for Practicing Doctors',
  description: 'Premium medical fellowship programs with academic credibility, hospital exposure, and internationally recognized certification.',
  keywords: 'medical fellowship, fellowship programs, doctor fellowship, advanced medical training, postgraduate medical education',
  authors: [{ name: 'Med Fellow Academy' }],
  creator: 'Med Fellow Academy',
  publisher: 'Med Fellow Academy',
  metadataBase: new URL('https://www.medfellowacademy.com'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.medfellowacademy.com',
    title: 'Med Fellow Academy - Advanced Fellowship Programs for Practicing Doctors',
    description: 'Premium medical fellowship programs with academic credibility, hospital exposure, and internationally recognized certification.',
    siteName: 'Med Fellow Academy',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Med Fellow Academy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Med Fellow Academy - Advanced Fellowship Programs for Practicing Doctors',
    description: 'Premium medical fellowship programs with academic credibility, hospital exposure, and internationally recognized certification.',
    images: ['/logo.png'],
  },
  verification: { google: 'VMwO22oDHhOk_ZM826hn0tYULxDgng1775FUlw-sWDI' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.variable + ' ' + poppins.variable + ' antialiased'} style={{ background: '#FFFFFF', color: '#111827' }}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-ED7203NW6B" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ED7203NW6B', { send_page_view: true, cookie_flags: 'SameSite=None;Secure' });
        `}</Script>
        {/* Inline script: apply saved theme before first paint to avoid flash */}
        <Script id="theme-init" strategy="beforeInteractive">{`
          try {
            var t = localStorage.getItem('mfa-theme');
            if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark');
            }
          } catch(e) {}
        `}</Script>
        <ThemeProvider>
          <AnalyticsProvider />
          <AnnouncementBar />
          <ScrollProgress />
          {children}
          <WhatsAppWidget />
          <EnquiryModal />
        </ThemeProvider>
      </body>
    </html>
  );
}

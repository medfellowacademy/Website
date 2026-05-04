import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ScrollProgress from "@/components/effects/ScrollProgress";
import AnnouncementBar from "@/components/AnnouncementBar";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-poppins',
});

const playfair = Playfair_Display({ 
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: "Med Fellow Academy - Advanced Fellowship Programs for Practicing Doctors",
  description: "Premium medical fellowship programs with academic credibility, hospital exposure, and internationally recognized certification.",
  keywords: "medical fellowship, fellowship programs, doctor fellowship, advanced medical training, postgraduate medical education",
  authors: [{ name: "Med Fellow Academy" }],
  creator: "Med Fellow Academy",
  publisher: "Med Fellow Academy",
  metadataBase: new URL('https://www.medfellowacademy.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.medfellowacademy.com',
    title: 'Med Fellow Academy - Advanced Fellowship Programs for Practicing Doctors',
    description: 'Premium medical fellowship programs with academic credibility, hospital exposure, and internationally recognized certification.',
    siteName: 'Med Fellow Academy',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Med Fellow Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Med Fellow Academy - Advanced Fellowship Programs for Practicing Doctors',
    description: 'Premium medical fellowship programs with academic credibility, hospital exposure, and internationally recognized certification.',
    images: ['/logo.png'],
  },
  icons: {
    icon: [
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/logo.png',
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/logo.png',
      },
    ],
  },
  verification: {
    google: "VMwO22oDHhOk_ZM826hn0tYULxDgng1775FUlw-sWDI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} ${playfair.variable} font-sans antialiased bg-background text-text-primary`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ED7203NW6B"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ED7203NW6B');
          `}
        </Script>
        <AnnouncementBar />
        <ScrollProgress />
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}

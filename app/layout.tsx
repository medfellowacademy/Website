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
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
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

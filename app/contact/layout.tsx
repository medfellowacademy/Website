import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | MedFellow Academy Admissions",
  description: "Have questions about our fellowship programs? Contact MedFellow Academy's admissions team. We typically respond within 24 hours.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.medfellowacademy.com/contact',
  },
  openGraph: {
    title: "Contact MedFellow Academy",
    description: "Reach our admissions team with questions about fellowship programs, eligibility, fees, or training formats.",
    url: "https://medfellowacademy.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

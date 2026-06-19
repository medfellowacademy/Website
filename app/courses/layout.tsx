import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fellowship Programs | 60+ Medical Specialties | MedFellow Academy",
  description: "Browse 60+ internationally accredited fellowship programs across cardiology, critical care, obstetrics, oncology, surgery, and more. Online, hybrid, and hospital-based training options available.",
  openGraph: {
    title: "Fellowship Programs at MedFellow Academy",
    description: "60+ internationally accredited fellowship programs for practicing doctors across all major medical specialties.",
    url: "https://medfellowacademy.com/courses",
  },
};

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply Now | MedFellow Academy Fellowship Application",
  description: "Apply for a MedFellow Academy fellowship program. Takes under 10 minutes. Applications reviewed within 3–5 working days. 60+ specialties available.",
  openGraph: {
    title: "Apply for a Fellowship | MedFellow Academy",
    description: "Start your medical fellowship application. 60+ specialties, flexible formats, internationally accredited certification.",
    url: "https://medfellowacademy.com/apply",
  },
};

export default function ApplyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

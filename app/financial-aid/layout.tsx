import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Aid & EMI Options | MedFellow Academy",
  description: "Explore flexible financial aid, scholarships, and EMI options for MedFellow Academy fellowship programs. We believe cost should never stop a deserving doctor.",
  openGraph: {
    title: "Financial Aid at MedFellow Academy",
    description: "Flexible EMI, scholarships, and financial assistance for medical fellowship programs.",
    url: "https://medfellowacademy.com/financial-aid",
  },
};

export default function FinancialAidLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

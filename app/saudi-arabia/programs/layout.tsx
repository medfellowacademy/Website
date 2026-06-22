import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.medfellowacademy.com/saudi-arabia/programs" },
};

export default function SaudiProgramsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

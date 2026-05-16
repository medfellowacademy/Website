import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.medfellowacademy.com/dubai/programs",
  },
};

export default function DubaiProgramsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

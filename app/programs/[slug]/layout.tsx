import type { Metadata } from "next";

interface ProgramLayoutProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProgramLayoutProps): Promise<Metadata> {
  const { slug } = await params;

  return {
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://www.medfellowacademy.com/programs/${slug}`,
    },
  };
}

export default function ProgramSlugLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

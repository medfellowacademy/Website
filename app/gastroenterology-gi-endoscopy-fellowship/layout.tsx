import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fellowship in Gastroenterology & GI Endoscopy | MedFellow Academy',
  description:
    'Advance your expertise in Gastroenterology and GI Endoscopy with specialized fellowship programs from MedFellow Academy. Enquire for curriculum, eligibility and admission details.',
  alternates: { canonical: 'https://www.medfellowacademy.com/gastroenterology-gi-endoscopy-fellowship' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

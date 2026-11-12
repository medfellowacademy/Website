import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Application Form (Print / PDF) | MedFellow Academy',
  description: 'Download or print the MedFellow Academy fellowship application form to fill in by hand.',
  alternates: { canonical: 'https://www.medfellowacademy.com/apply/form' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

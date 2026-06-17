'use client';

const DEFAULT_ITEMS = [
  'ACTD Accredited — Recognised in 40+ countries',
  '4.9 / 5 from 340 verified reviews',
  'Dr. Sneha Verma — 3.2× salary uplift after fellowship',
  'Yashoda Hospital — Certified Training Partner',
  'Internationally accredited certificates',
  'Dr. Rajan Nair — 2 hospital offers in 6 months',
  'Kamineni Hospital — Certified Training Partner',
  '98% placement success rate',
  'Continental Hospital — Expert Faculty',
  'Flexible — learn while you practice',
  'Dr. Kavita Singh — own clinic in 14 months',
];

export default function SocialProofTicker({ items }: { items?: string[] }) {
  const display = (items && items.length > 0) ? items : DEFAULT_ITEMS;
  const DOUBLED = [...display, ...display];

  return (
    <div
      className="relative overflow-hidden"
      style={{ background: '#15401E', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div
        className="absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, #15401E, transparent)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(270deg, #15401E, transparent)' }}
      />

      <div className="flex items-center marquee-track whitespace-nowrap py-2.5">
        {DOUBLED.map((text, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 px-5 text-[0.8125rem] font-medium flex-shrink-0"
            style={{ color: 'rgba(255,255,255,0.80)' }}
          >
            {text}
            <span style={{ color: 'rgba(255,255,255,0.20)' }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

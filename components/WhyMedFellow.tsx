'use client';

const STATS = [
  { value: '156%',  label: 'Average income increase', sub: 'Reported within 18 months' },
  { value: '500+',  label: 'Doctors trained',          sub: 'Across 12 specialties' },
  { value: '98%',   label: 'Placement success',        sub: 'Within 6 months of completion' },
  { value: '60+',   label: 'Fellowship programs',      sub: 'Online, hybrid and offline' },
  { value: '20+',   label: 'Hospital partners',        sub: 'super speciality hospitals' },
  { value: '4.9',   label: 'Average rating',           sub: 'From 340 verified reviews' },
];

const WHY_POINTS = [
  {
    title: 'No career break needed',
    desc: 'All programs are structured around working doctors — asynchronous modules with live weekend sessions.',
  },
  {
    title: 'Hands-on hospital rotations',
    desc: 'Supervised clinical training at 20+ premier hospitals including Super Speciality Hospital, Super Speciality Hospital and Super Speciality Hospital.',
  },
  {
    title: 'Internationally accredited',
    desc: 'ACTD-accredited certificates recognised globally and by leading hospital recruitment boards.',
  },
  {
    title: 'Dedicated faculty mentors',
    desc: 'Every fellow is paired with a senior specialist for 1:1 guidance throughout the program.',
  },
];

export default function WhyMedFellow() {
  return (
    <section className="section-padding bg-white border-b border-[#E5E7EB]">
      <div className="container-custom">

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">

          {/* Left: why points */}
          <div>
            <span className="section-label">Why MedFellow</span>
            <h2 className="section-title mt-1 mb-2">Built for practicing doctors</h2>
            <p className="section-subtitle mb-8">
              India&apos;s only fellowship platform that lets you specialise while continuing to work — with real hospital training and internationally accredited outcomes.
            </p>

            <div className="grid sm:grid-cols-2 gap-px bg-[#E5E7EB] border border-[#E5E7EB] rounded-lg overflow-hidden">
              {WHY_POINTS.map((pt, i) => (
                <div key={i} className="bg-white p-5 hover:bg-[#FAFAFA] transition-colors">
                  <h3 className="text-[0.9375rem] font-semibold text-[#111827] mb-1">{pt.title}</h3>
                  <p className="text-[0.8125rem] text-[#6B7280] leading-relaxed">{pt.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: stats */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-[#FAFAFA] border border-[#E5E7EB] rounded-lg overflow-hidden divide-y divide-[#E5E7EB]">
              <div className="px-5 py-3 bg-white">
                <p className="text-[0.75rem] font-semibold uppercase tracking-wider text-[#9CA3AF]">By the numbers</p>
              </div>
              {STATS.map((s, i) => (
                <div key={i} className="flex items-center justify-between px-5 py-3.5 bg-white hover:bg-[#FAFAFA] transition-colors">
                  <div>
                    <p className="text-[0.875rem] font-medium text-[#374151]">{s.label}</p>
                    <p className="text-[0.75rem] text-[#9CA3AF]">{s.sub}</p>
                  </div>
                  <span className="text-[1.25rem] font-bold text-[#15401E] tabular-nums">{s.value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

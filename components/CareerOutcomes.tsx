'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Users, Award, Clock, ArrowRight, CheckCircle } from 'lucide-react';

/* ── Animated counter ─────────────────────────────── */
function Counter({
  to, suffix = '', prefix = '', duration = 2000
}: { to: number; suffix?: string; prefix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * to));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to, duration]);

  return <span ref={ref}>{prefix}{val}{suffix}</span>;
}

/* ── Data ─────────────────────────────────────────── */
const OUTCOMES = [
  {
    icon: TrendingUp,
    value: 156, suffix: '%',
    label: 'Average Income Increase',
    sub: 'Within 18 months post-completion',
    color: '#34d399',
    bg: 'rgba(52,211,153,0.12)',
    border: 'rgba(52,211,153,0.25)',
  },
  {
    icon: Users,
    value: 500, suffix: '+',
    label: 'Careers Transformed',
    sub: 'Across 60+ medical specialties',
    color: '#60a5fa',
    bg: 'rgba(96,165,250,0.12)',
    border: 'rgba(96,165,250,0.25)',
  },
  {
    icon: Award,
    value: 98, suffix: '%',
    label: 'Placement Success',
    sub: 'Hospital or premium practice role',
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.12)',
    border: 'rgba(167,139,250,0.25)',
  },
  {
    icon: Clock,
    value: 12, suffix: ' mo',
    label: 'Avg. Program Duration',
    sub: 'Flexible online + offline blend',
    color: '#fcd34d',
    bg: 'rgba(252,211,77,0.12)',
    border: 'rgba(252,211,77,0.25)',
  },
];

const TRANSFORMATIONS = [
  {
    specialty: 'Interventional Cardiology',
    before: '₹75K/mo',
    after: '₹3.5L/mo',
    city: 'Hyderabad',
    growth: '+367%',
  },
  {
    specialty: 'Aesthetic & Cosmetic Medicine',
    before: '₹60K/mo',
    after: '₹2.8L/mo',
    city: 'Bangalore',
    growth: '+367%',
  },
  {
    specialty: 'Critical Care Medicine',
    before: '₹90K/mo',
    after: '₹3.2L/mo',
    city: 'Delhi',
    growth: '+256%',
  },
];

const HIGHLIGHTS = [
  'Continue practicing while you train',
  'International certification included',
  'Tier-1 hospital rotations',
  'Dedicated placement team',
  'Senior specialist mentors',
  'Alumni network of 500+ doctors',
];

/* ── Component ────────────────────────────────────── */
export default function CareerOutcomes() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section
      className="relative overflow-hidden section-padding"
      ref={ref}
      style={{ backgroundColor: '#0a1f38' }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.03,
          backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1.5px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      />
      {/* Glow orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: '#2B6CB0', opacity: 0.08 }} />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: '#0d9488', opacity: 0.07 }} />

      <div className="container-custom relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest rounded-full mb-5"
            style={{
              backgroundColor: 'rgba(96,165,250,0.12)',
              border: '1px solid rgba(96,165,250,0.28)',
              color: '#93c5fd',
            }}
          >
            REAL CAREER OUTCOMES
          </span>
          <h2
            className="font-extrabold text-white mb-4"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            }}
          >
            What Happens After{' '}
            <span style={{ color: '#34d399' }}>You Complete</span> Your Fellowship
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(191,219,254,0.65)' }}>
            Real numbers from our alumni — not projections, not estimates.
          </p>
        </motion.div>

        {/* Stat counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {OUTCOMES.map((o, i) => {
            const Icon = o.icon;
            return (
              <motion.div
                key={i}
                className="rounded-2xl p-5 sm:p-6 text-center"
                style={{
                  backgroundColor: o.bg,
                  border: `1px solid ${o.border}`,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: o.bg, border: `1px solid ${o.border}` }}
                >
                  <Icon className="w-5 h-5" style={{ color: o.color }} />
                </div>
                <div
                  className="font-extrabold mb-1 tabular-nums"
                  style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: o.color }}
                >
                  <Counter to={o.value} suffix={o.suffix} duration={1800} />
                </div>
                <div className="font-semibold text-white text-sm mb-1">{o.label}</div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.40)' }}>{o.sub}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Before / After income cards */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3
            className="text-center font-bold text-white mb-8"
            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}
          >
            Income Transformation Stories
          </h3>
          <div className="grid sm:grid-cols-3 gap-5">
            {TRANSFORMATIONS.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 sm:p-6"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.09)',
                }}
              >
                <div className="text-xs font-semibold mb-3 tracking-wide" style={{ color: '#93c5fd' }}>
                  {t.specialty}
                </div>
                <div className="flex items-end gap-3 mb-4">
                  <div>
                    <p className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.40)' }}>Before</p>
                    <p className="font-bold text-lg" style={{ color: '#f87171' }}>{t.before}</p>
                  </div>
                  <div className="text-2xl pb-1" style={{ color: 'rgba(255,255,255,0.25)' }}>→</div>
                  <div>
                    <p className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.40)' }}>After</p>
                    <p className="font-extrabold text-xl" style={{ color: '#34d399' }}>{t.after}</p>
                  </div>
                  <div
                    className="ml-auto text-xs font-bold px-2 py-1 rounded-full"
                    style={{ backgroundColor: 'rgba(52,211,153,0.15)', color: '#34d399' }}
                  >
                    {t.growth}
                  </div>
                </div>
                <div className="w-full h-1.5 rounded-full mb-2" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
                  <div
                    className="h-full rounded-full"
                    style={{ width: '75%', backgroundColor: '#34d399' }}
                  />
                </div>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>📍 {t.city}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Highlights grid + CTA */}
        <motion.div
          className="grid lg:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          {/* Highlight list */}
          <div>
            <h3
              className="font-bold text-white mb-6"
              style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)' }}
            >
              Everything Included in Every Program
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {HIGHLIGHTS.map((h, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#34d399' }} />
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA card */}
          <div
            className="rounded-2xl p-8 text-center"
            style={{
              backgroundColor: 'rgba(43,108,176,0.15)',
              border: '1px solid rgba(43,108,176,0.35)',
            }}
          >
            <div className="text-4xl font-extrabold text-white mb-2">Ready?</div>
            <p className="mb-6 text-sm" style={{ color: 'rgba(191,219,254,0.70)' }}>
              Join 500+ doctors who have already transformed their careers with MedFellow Academy.
            </p>
            <a
              href="/apply"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-200"
              style={{
                backgroundColor: '#2B6CB0',
                boxShadow: '0 8px 24px rgba(43,108,176,0.45)',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#3a7dc4')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#2B6CB0')}
            >
              Start Your Transformation
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="mt-4 text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Free counselling session · No commitment required
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

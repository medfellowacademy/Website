'use client';
import { Award, Users, TrendingUp, Clock } from 'lucide-react';

const STATS = [
  { icon: TrendingUp, value: '156%', label: 'Average Income Increase' },
  { icon: Users, value: '500+', label: 'Careers Transformed' },
  { icon: Award, value: '98%', label: 'Placement Success' },
  { icon: Clock, value: '12mo', label: 'Program Duration' },
];

export default function WhyMedFellow() {
  return (
    <section className="py-10" style={{ background: '#F2F3F4' }}>
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-medium mb-2" style={{ color: '#1B4F72' }}>
            Why MedFellow Academy?
          </h2>
          <p className="text-xs" style={{ color: '#5D6D7E' }}>
            Trusted by practicing doctors nationwide for career advancement
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="bg-white rounded-lg p-4 text-center" style={{ border: '0.5px solid #BFC9CA' }}>
                <Icon className="w-5 h-5 mx-auto mb-2" style={{ color: '#2E86C1' }} />
                <div className="text-xl font-medium mb-1" style={{ color: '#1B4F72' }}>
                  {stat.value}
                </div>
                <div className="text-xs" style={{ color: '#5D6D7E' }}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
            From Traditional Training?
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            This isn&apos;t just education — it&apos;s a career transformation system designed to multiply your earning potential and professional status.
          </p>
        </motion.div>

        {/* ── Animated Stats Row ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {STATS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={i}
                className="relative overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg p-6 text-center group transition-shadow"
                initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Gradient top bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${s.color} rounded-t-2xl`} />
                <div className={`w-12 h-12 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white shadow-md`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-1 tabular-nums">
                  <Counter to={s.value} suffix={s.suffix} duration={1800} />
                </div>
                <div className="text-sm font-semibold text-gray-700 mb-1">{s.label}</div>
                <div className="text-xs text-gray-400">{s.sub}</div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Benefit Cards ── */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {BENEFITS.map((b, i) => {
            const Icon = b.Icon;
            return (
              <motion.div key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md p-7 group transition-all hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              >
                <div className={`w-14 h-14 ${b.color} rounded-2xl flex items-center justify-center mb-5`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* ── Comparison Table ── */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3 className="text-center text-xl sm:text-2xl font-bold text-gray-900 mb-8">
            Traditional Path vs{' '}
            <span className="text-[#213F5F]">MedFellow Academy</span>
          </h3>

          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            {/* Table header */}
            <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
              <div className="px-5 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wide">Criteria</div>
              <div className="px-5 py-4 text-center text-xs font-semibold text-gray-400 uppercase tracking-wide border-l border-gray-200">Traditional Path</div>
              <div className="px-5 py-4 text-center text-xs font-bold text-[#213F5F] uppercase tracking-wide border-l border-slate-200 bg-slate-50">MedFellow</div>
            </div>

            {COMPARISON.map((row, i) => (
              <div key={i}
                className={`grid grid-cols-3 border-b border-gray-100 last:border-b-0 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
              >
                <div className="px-5 py-4 text-sm font-medium text-gray-700">{row.feature}</div>
                <div className="px-5 py-4 flex items-center justify-center gap-2 border-l border-gray-200">
                  <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span className="text-sm text-gray-500 text-center">{row.traditional}</span>
                </div>
                <div className="px-5 py-4 flex items-center justify-center gap-2 border-l border-slate-100 bg-slate-50/40">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-800 text-center">{row.medfellow}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-10">
            <a href="/apply"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#213F5F] text-white font-semibold rounded-xl hover:bg-[#1a314a] shadow-lg shadow-[#213F5F]/30 transition-all duration-300 text-sm sm:text-base">
              Start Your Transformation Today
              <TrendingUp className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

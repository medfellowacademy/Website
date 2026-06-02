import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Award, Globe, CheckCircle2 } from "lucide-react";

const TRUST_POINTS = [
  { icon: Globe,        title: "40+ countries",       desc: "Certificates accepted globally" },
  { icon: ShieldCheck,  title: "Quality assured",     desc: "Rigorous curriculum by ACTD" },
  { icon: Award,        title: "Career validated",    desc: "Recognised by top hospitals" },
  { icon: CheckCircle2, title: "Annually audited",    desc: "Highest international standards" },
];

export default function AccreditationSection() {
  return (
    <section className="section-padding bg-[#15401E]">
      <div className="container-custom">

        <div className="grid lg:grid-cols-[1fr_360px] gap-8 lg:gap-16 items-center">

          {/* Right: ACTD badge — shown first on mobile, last on desktop */}
          <div className="flex flex-col items-center gap-3 order-first lg:order-last">
            <div
              className="w-40 h-40 sm:w-52 sm:h-52 rounded-xl flex flex-col items-center justify-center relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #FFF8E1 0%, #FEF3C7 100%)', border: '2px solid rgba(240,192,64,0.50)' }}
            >
              <Image
                src="/accreditations/ACTD.png"
                alt="ACTD Accreditation"
                fill
                className="object-contain p-4 relative z-10"
                sizes="(max-width: 640px) 160px, (max-width: 1024px) 208px, 208px"
              />
              {/* fallback */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-0">
                <span className="text-5xl">🦅</span>
                <span className="font-black text-xl tracking-widest mt-1" style={{ color: '#B8860B' }}>ACTD</span>
              </div>
            </div>
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-md text-[0.8125rem] font-semibold"
              style={{ background: 'rgba(240,192,64,0.15)', border: '1px solid rgba(240,192,64,0.30)', color: '#F0C040' }}
            >
              <ShieldCheck className="w-4 h-4" /> Officially Accredited
            </div>
            <p className="text-[0.75rem] text-center w-full max-w-xs" style={{ color: 'rgba(255,255,255,0.50)' }}>
              American Council of Training and Development — recognised in 40+ countries
            </p>
          </div>

          {/* Left: content */}
          <div className="order-last lg:order-first">
            <span
              className="inline-block text-[0.6875rem] font-semibold uppercase tracking-wider px-2.5 py-1 rounded mb-4"
              style={{ background: 'rgba(245,213,80,0.15)', color: '#F0C040', border: '1px solid rgba(240,192,64,0.25)' }}
            >
              International Accreditation
            </span>
            <h2 className="text-[clamp(1.375rem,3vw,1.875rem)] font-bold mb-2 leading-tight tracking-tight">
              <span style={{ color: '#FFFFFF' }}>Globally accredited by{' '}</span>
              <span style={{ color: '#FF6B00' }}>ACTD</span>
            </h2>
            <p className="text-[0.9375rem] mb-6" style={{ color: 'rgba(255,255,255,0.72)' }}>
              MedFellow Academy programs are internationally accredited by the American Council of Training and Development — your gateway to a globally recognised fellowship certificate.
            </p>

            {/* Trust grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {TRUST_POINTS.map((pt, i) => {
                const Icon = pt.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3.5 rounded-lg"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <div className="w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(240,192,64,0.12)' }}>
                      <Icon className="w-4 h-4" style={{ color: '#F0C040' }} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[0.8125rem] font-semibold text-white">{pt.title}</p>
                      <p className="text-[0.75rem]" style={{ color: 'rgba(255,255,255,0.55)' }}>{pt.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6">
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-[0.875rem] font-semibold transition-opacity hover:opacity-90"
                style={{ background: '#F0C040', color: '#1A1400' }}
              >
                <Award className="w-4 h-4" />
                Enroll &amp; get accredited
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

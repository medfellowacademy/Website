import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, ChevronDown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getCustomPage, type CmsPageSection } from '@/lib/cms';

export const dynamic = 'force-dynamic';

const BG_MAP: Record<string, string> = {
  gray:  '#F9FAFB',
  green: '#e8f2ea',
  dark:  '#15401E',
  '':    '#FFFFFF',
};
const TEXT_MAP: Record<string, string> = {
  dark: '#FFFFFF',
};

function SectionRenderer({ section }: { section: CmsPageSection & { bg?: string } }) {
  const bg = BG_MAP[section.bg ?? ''] ?? '#FFFFFF';
  const textOnDark = section.bg === 'dark';
  const headingColor = textOnDark ? '#FFFFFF' : '#15401E';
  const bodyColor   = textOnDark ? 'rgba(255,255,255,0.8)' : '#6B7280';

  return (
    <section className="py-14" style={{ background: bg }}>
      <div className="max-w-4xl mx-auto px-5">
        {section.heading && (
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: headingColor }}>{section.heading}</h2>
        )}

        {section.type === 'text' && section.body && (
          <p className="text-base leading-relaxed text-center max-w-2xl mx-auto" style={{ color: bodyColor }}>{section.body}</p>
        )}

        {section.type === 'features' && (section.items ?? []).length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(section.items ?? []).map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                {item.icon && <div className="text-3xl mb-3">{item.icon}</div>}
                {item.title && <h3 className="font-semibold mb-1" style={{ color: '#15401E' }}>{item.title}</h3>}
                {item.desc  && <p className="text-sm text-gray-500">{item.desc}</p>}
              </div>
            ))}
          </div>
        )}

        {section.type === 'stats' && (section.items ?? []).length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {(section.items ?? []).map((item, i) => (
              <div key={i}>
                <div className="text-3xl font-bold mb-1" style={{ color: headingColor }}>{item.value}</div>
                <div className="text-sm" style={{ color: bodyColor }}>{item.label}</div>
              </div>
            ))}
          </div>
        )}

        {section.type === 'cta' && (
          <div className="text-center rounded-2xl p-10" style={{ background: '#15401E' }}>
            {section.heading && <h2 className="text-2xl font-bold text-white mb-3">{section.heading}</h2>}
            {section.body    && <p className="text-white/80 mb-6">{section.body}</p>}
            {section.cta_text && (
              <Link href={section.cta_url ?? '/apply'} className="inline-flex items-center gap-2 px-8 py-3 bg-white rounded-lg font-semibold hover:opacity-90 transition-all" style={{ color: '#15401E' }}>
                {section.cta_text} <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        )}

        {section.type === 'testimonials' && (section.items ?? []).length > 0 && (
          <div className="grid md:grid-cols-3 gap-6">
            {(section.items ?? []).map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex gap-0.5 mb-3">
                  {[1,2,3,4,5].map(j => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                {item.quote  && <p className="text-sm text-gray-600 italic mb-4">"{item.quote}"</p>}
                {item.author && <p className="text-sm font-semibold" style={{ color: '#15401E' }}>{item.author}</p>}
                {item.role   && <p className="text-xs text-gray-500">{item.role}</p>}
              </div>
            ))}
          </div>
        )}

        {section.type === 'faq' && (section.items ?? []).length > 0 && (
          <div className="space-y-3">
            {(section.items ?? []).map((item, i) => (
              <details key={i} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-gray-50 font-medium list-none" style={{ color: '#15401E' }}>
                  {item.question}
                  <ChevronDown className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default async function CustomPageRenderer({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await getCustomPage(slug);
  if (!page) notFound();

  const headingLines = (page.hero_heading ?? '').split('\n');

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      {(page.hero_heading || page.hero_subheading) && (
        <section className="relative overflow-hidden py-20 md:py-28 text-center" style={{ background: page.hero_bg_color || '#15401E' }}>
          <div className="max-w-3xl mx-auto px-5 relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              {headingLines.map((line, i) => <span key={i}>{line}{i < headingLines.length - 1 && <br />}</span>)}
            </h1>
            {page.hero_subheading && (
              <p className="text-white/85 text-lg mb-8">{page.hero_subheading}</p>
            )}
            {page.hero_cta_text && (
              <Link href={page.hero_cta_url ?? '/apply'} className="inline-flex items-center gap-2 px-8 py-4 bg-white rounded-lg font-semibold text-lg hover:opacity-90 transition-all shadow-lg" style={{ color: page.hero_bg_color || '#15401E' }}>
                {page.hero_cta_text} <ArrowRight className="w-5 h-5" />
              </Link>
            )}
          </div>
        </section>
      )}

      {/* Sections */}
      {(page.sections ?? []).map((section, i) => (
        <SectionRenderer key={i} section={section as any} />
      ))}

      <Footer />
    </div>
  );
}

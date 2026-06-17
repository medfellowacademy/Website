'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Save, Plus, Trash2, ArrowLeft, ExternalLink } from 'lucide-react';

interface SpecialtyItem {
  number: string; icon: string; name: string; slug: string; description: string; demandDriver: string;
}
interface TestimonialItem { quote: string; author: string; role: string; rating: number; }
interface FaqItem { question: string; answer: string; }
interface WhyPoint { icon: string; title: string; desc: string; }
interface StatItem { value: string; label: string; }

export interface CountryFormData {
  slug: string;
  country_name: string;
  is_published: boolean;
  hero_badge: string;
  hero_heading: string;
  hero_subheading: string;
  hero_checks: string[];
  stats: StatItem[];
  why_heading: string;
  why_points: WhyPoint[];
  featured_specialties: SpecialtyItem[];
  testimonials: TestimonialItem[];
  faqs: FaqItem[];
  meta_title: string;
  meta_description: string;
}

const BLANK: CountryFormData = {
  slug: '', country_name: '', is_published: true,
  hero_badge: '', hero_heading: '', hero_subheading: '',
  hero_checks: ['', '', ''],
  stats: [
    { value: '46+', label: 'Specialty Fellowships' },
    { value: '4,200+', label: 'Doctors Trained Globally' },
    { value: '22+', label: 'Countries' },
    { value: '4.8/5', label: 'Rated by Doctors' },
  ],
  why_heading: '', why_points: [{ icon: '', title: '', desc: '' }],
  featured_specialties: [{ number: '01', icon: '', name: '', slug: '', description: '', demandDriver: '' }],
  testimonials: [{ quote: '', author: '', role: '', rating: 5 }],
  faqs: [{ question: '', answer: '' }],
  meta_title: '', meta_description: '',
};

const inputCls = 'w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#15401E]/20 focus:border-[#15401E] bg-white transition-all';
const labelCls = 'block text-sm font-semibold text-gray-700 mb-1';
const sectionCls = 'bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className={sectionCls}>
      <h2 className="text-base font-bold text-gray-800 pb-3 border-b border-gray-100">{title}</h2>
      {children}
    </div>
  );
}

export default function CountryForm({
  initial,
  pageId,
  isNew,
}: {
  initial?: Partial<CountryFormData>;
  pageId?: string;
  isNew: boolean;
}) {
  const router = useRouter();
  const [form, setForm] = useState<CountryFormData>({ ...BLANK, ...initial });
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState('');

  function showToast(msg: string) { setToast(msg); setTimeout(() => setToast(''), 3500); }
  function set(key: keyof CountryFormData, val: any) { setForm(f => ({ ...f, [key]: val })); }

  // ── array helpers ──
  function setCheck(i: number, v: string) {
    const a = [...form.hero_checks]; a[i] = v; set('hero_checks', a);
  }
  function addCheck() { set('hero_checks', [...form.hero_checks, '']); }
  function removeCheck(i: number) { set('hero_checks', form.hero_checks.filter((_, j) => j !== i)); }

  function setStat(i: number, k: keyof StatItem, v: string) {
    const a = [...form.stats]; a[i] = { ...a[i], [k]: v }; set('stats', a);
  }
  function addStat() { set('stats', [...form.stats, { value: '', label: '' }]); }
  function removeStat(i: number) { set('stats', form.stats.filter((_, j) => j !== i)); }

  function setWhy(i: number, k: keyof WhyPoint, v: string) {
    const a = [...form.why_points]; a[i] = { ...a[i], [k]: v }; set('why_points', a);
  }
  function addWhy() { set('why_points', [...form.why_points, { icon: '', title: '', desc: '' }]); }
  function removeWhy(i: number) { set('why_points', form.why_points.filter((_, j) => j !== i)); }

  function setSpec(i: number, k: keyof SpecialtyItem, v: string) {
    const a = [...form.featured_specialties]; a[i] = { ...a[i], [k]: v }; set('featured_specialties', a);
  }
  function addSpec() { set('featured_specialties', [...form.featured_specialties, { number: String(form.featured_specialties.length + 1).padStart(2, '0'), icon: '', name: '', slug: '', description: '', demandDriver: '' }]); }
  function removeSpec(i: number) { set('featured_specialties', form.featured_specialties.filter((_, j) => j !== i)); }

  function setTestimonial(i: number, k: keyof TestimonialItem, v: string | number) {
    const a = [...form.testimonials]; a[i] = { ...a[i], [k]: v }; set('testimonials', a);
  }
  function addTestimonial() { set('testimonials', [...form.testimonials, { quote: '', author: '', role: '', rating: 5 }]); }
  function removeTestimonial(i: number) { set('testimonials', form.testimonials.filter((_, j) => j !== i)); }

  function setFaq(i: number, k: keyof FaqItem, v: string) {
    const a = [...form.faqs]; a[i] = { ...a[i], [k]: v }; set('faqs', a);
  }
  function addFaq() { set('faqs', [...form.faqs, { question: '', answer: '' }]); }
  function removeFaq(i: number) { set('faqs', form.faqs.filter((_, j) => j !== i)); }

  async function handleSave() {
    if (!form.slug || !form.country_name) { showToast('Slug and Country Name are required'); return; }
    setSaving(true);
    try {
      const url = isNew ? '/api/admin/countries' : `/api/admin/countries/${pageId}`;
      const method = isNew ? 'POST' : 'PUT';
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) { const j = await res.json(); throw new Error(j.error ?? 'Save failed'); }
      showToast('Saved!');
      if (isNew) {
        const j = await res.json();
        router.push(`/admin/countries/${j.data.id}`);
      }
    } catch (e: any) {
      showToast(e.message ?? 'Save failed');
    }
    setSaving(false);
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {toast && (
        <div className={`fixed top-4 right-4 z-50 px-4 py-3 rounded-xl shadow-xl text-sm font-medium text-white ${toast.includes('fail') || toast.includes('required') ? 'bg-red-600' : 'bg-emerald-600'}`}>
          {toast}
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => router.push('/admin/countries')} className="p-2 hover:bg-gray-100 rounded-xl transition-all">
            <ArrowLeft className="w-4 h-4 text-gray-500" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{isNew ? 'New Country Page' : `Edit: ${form.country_name}`}</h1>
            <p className="text-gray-400 text-sm mt-0.5">
              Public URL: <a href={`/${form.slug}/programs`} target="_blank" rel="noopener noreferrer" className="text-[#15401E] hover:underline inline-flex items-center gap-1">/{form.slug}/programs <ExternalLink className="w-3 h-3" /></a>
            </p>
          </div>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#15401E] hover:bg-[#0f2e15] text-white rounded-xl text-sm font-semibold disabled:opacity-60 transition-all"
        >
          <Save className="w-4 h-4" />
          {saving ? 'Saving…' : 'Save Page'}
        </button>
      </div>

      {/* Basic Info */}
      <Section title="🌍 Basic Info">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Country Name *</label>
            <input value={form.country_name} onChange={e => set('country_name', e.target.value)} placeholder="Dubai" className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>URL Slug * <span className="text-gray-400 font-normal">(no spaces)</span></label>
            <input value={form.slug} onChange={e => set('slug', e.target.value.toLowerCase().replace(/\s+/g, '-'))} placeholder="dubai" className={inputCls} />
            <p className="text-xs text-gray-400 mt-1">Page will be at: /{form.slug || 'slug'}/programs</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" id="published" checked={form.is_published} onChange={e => set('is_published', e.target.checked)} className="w-4 h-4 accent-[#15401E]" />
          <label htmlFor="published" className="text-sm font-medium text-gray-700">Published (visible to public)</label>
        </div>
        <div>
          <label className={labelCls}>Meta Title</label>
          <input value={form.meta_title} onChange={e => set('meta_title', e.target.value)} placeholder="Fellowship Programs for Doctors in Dubai | MedFellow Academy" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Meta Description</label>
          <textarea value={form.meta_description} onChange={e => set('meta_description', e.target.value)} rows={2} className={inputCls + ' resize-y'} placeholder="Google search description…" />
        </div>
      </Section>

      {/* Hero */}
      <Section title="🦸 Hero Section">
        <div>
          <label className={labelCls}>Badge Text <span className="text-gray-400 font-normal">(small pill above heading)</span></label>
          <input value={form.hero_badge} onChange={e => set('hero_badge', e.target.value)} placeholder="APRIL 2026 INTAKE · DUBAI PRIORITY LANE" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Main Heading <span className="text-gray-400 font-normal">(use \n for line break)</span></label>
          <textarea value={form.hero_heading} onChange={e => set('hero_heading', e.target.value)} rows={2} className={inputCls + ' resize-y'} placeholder="Fellowship Programs for\nDoctors in Dubai" />
        </div>
        <div>
          <label className={labelCls}>Subheading</label>
          <textarea value={form.hero_subheading} onChange={e => set('hero_subheading', e.target.value)} rows={2} className={inputCls + ' resize-y'} placeholder="46 fellowships built for working doctors..." />
        </div>
        <div>
          <label className={labelCls}>Trust Checkmarks <span className="text-gray-400 font-normal">(shown below buttons)</span></label>
          <div className="space-y-2">
            {form.hero_checks.map((c, i) => (
              <div key={i} className="flex gap-2">
                <input value={c} onChange={e => setCheck(i, e.target.value)} placeholder={`Checkmark ${i + 1}`} className={inputCls} />
                <button onClick={() => removeCheck(i)} className="p-2 text-red-400 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4" /></button>
              </div>
            ))}
            <button onClick={addCheck} className="flex items-center gap-1.5 text-sm text-[#15401E] hover:underline"><Plus className="w-3.5 h-3.5" /> Add checkmark</button>
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section title="📊 Stats Bar">
        <div className="space-y-2">
          {form.stats.map((s, i) => (
            <div key={i} className="flex gap-2 items-start">
              <input value={s.value} onChange={e => setStat(i, 'value', e.target.value)} placeholder="46+" className={inputCls + ' w-28 shrink-0'} />
              <input value={s.label} onChange={e => setStat(i, 'label', e.target.value)} placeholder="Specialty Fellowships" className={inputCls} />
              <button onClick={() => removeStat(i)} className="p-2 text-red-400 hover:bg-red-50 rounded-lg mt-0.5"><Trash2 className="w-4 h-4" /></button>
            </div>
          ))}
          <button onClick={addStat} className="flex items-center gap-1.5 text-sm text-[#15401E] hover:underline"><Plus className="w-3.5 h-3.5" /> Add stat</button>
        </div>
      </Section>

      {/* Why Section */}
      <Section title="✅ Why Section">
        <div>
          <label className={labelCls}>Section Heading</label>
          <input value={form.why_heading} onChange={e => set('why_heading', e.target.value)} placeholder="Why Indian Doctors in Dubai Need a Specialist Fellowship" className={inputCls} />
        </div>
        <div className="space-y-4">
          <label className={labelCls}>Why Points</label>
          {form.why_points.map((p, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-4 space-y-2">
              <div className="flex gap-2">
                <input value={p.icon} onChange={e => setWhy(i, 'icon', e.target.value)} placeholder="📋" className={inputCls + ' w-16 text-center'} />
                <input value={p.title} onChange={e => setWhy(i, 'title', e.target.value)} placeholder="Title" className={inputCls} />
                <button onClick={() => removeWhy(i)} className="p-2 text-red-400 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4" /></button>
              </div>
              <textarea value={p.desc} onChange={e => setWhy(i, 'desc', e.target.value)} placeholder="Description…" rows={2} className={inputCls + ' resize-y'} />
            </div>
          ))}
          <button onClick={addWhy} className="flex items-center gap-1.5 text-sm text-[#15401E] hover:underline"><Plus className="w-3.5 h-3.5" /> Add why point</button>
        </div>
      </Section>

      {/* Featured Specialties */}
      <Section title="🏥 Featured Specialties">
        <p className="text-xs text-gray-400">These 6 specialty cards appear on the country page. The slug must match a program slug (e.g. fellowship-in-endocrinology).</p>
        <div className="space-y-4">
          {form.featured_specialties.map((s, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-4 space-y-2">
              <div className="flex gap-2">
                <input value={s.number} onChange={e => setSpec(i, 'number', e.target.value)} placeholder="01" className={inputCls + ' w-16 text-center'} />
                <input value={s.icon} onChange={e => setSpec(i, 'icon', e.target.value)} placeholder="👶" className={inputCls + ' w-16 text-center'} />
                <input value={s.name} onChange={e => setSpec(i, 'name', e.target.value)} placeholder="Pediatrics Fellowship" className={inputCls} />
                <button onClick={() => removeSpec(i)} className="p-2 text-red-400 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4" /></button>
              </div>
              <input value={s.slug} onChange={e => setSpec(i, 'slug', e.target.value)} placeholder="fellowship-in-pediatrics" className={inputCls} />
              <input value={s.description} onChange={e => setSpec(i, 'description', e.target.value)} placeholder="Short description…" className={inputCls} />
              <input value={s.demandDriver} onChange={e => setSpec(i, 'demandDriver', e.target.value)} placeholder="Demand driver (why this specialty is in demand)" className={inputCls} />
            </div>
          ))}
          <button onClick={addSpec} className="flex items-center gap-1.5 text-sm text-[#15401E] hover:underline"><Plus className="w-3.5 h-3.5" /> Add specialty</button>
        </div>
      </Section>

      {/* Testimonials */}
      <Section title="💬 Testimonials">
        <div className="space-y-4">
          {form.testimonials.map((t, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-gray-500">Testimonial {i + 1}</span>
                <button onClick={() => removeTestimonial(i)} className="p-1.5 text-red-400 hover:bg-red-50 rounded-lg"><Trash2 className="w-3.5 h-3.5" /></button>
              </div>
              <textarea value={t.quote} onChange={e => setTestimonial(i, 'quote', e.target.value)} placeholder="Quote text…" rows={2} className={inputCls + ' resize-y'} />
              <div className="grid grid-cols-2 gap-2">
                <input value={t.author} onChange={e => setTestimonial(i, 'author', e.target.value)} placeholder="Dr Arjun Menon" className={inputCls} />
                <input value={t.role} onChange={e => setTestimonial(i, 'role', e.target.value)} placeholder="Consultant · Dubai Healthcare City" className={inputCls} />
              </div>
            </div>
          ))}
          <button onClick={addTestimonial} className="flex items-center gap-1.5 text-sm text-[#15401E] hover:underline"><Plus className="w-3.5 h-3.5" /> Add testimonial</button>
        </div>
      </Section>

      {/* FAQs */}
      <Section title="❓ FAQs">
        <div className="space-y-4">
          {form.faqs.map((f, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-4 space-y-2">
              <div className="flex gap-2">
                <input value={f.question} onChange={e => setFaq(i, 'question', e.target.value)} placeholder="Question?" className={inputCls} />
                <button onClick={() => removeFaq(i)} className="p-2 text-red-400 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4" /></button>
              </div>
              <textarea value={f.answer} onChange={e => setFaq(i, 'answer', e.target.value)} placeholder="Answer…" rows={3} className={inputCls + ' resize-y'} />
            </div>
          ))}
          <button onClick={addFaq} className="flex items-center gap-1.5 text-sm text-[#15401E] hover:underline"><Plus className="w-3.5 h-3.5" /> Add FAQ</button>
        </div>
      </Section>

      {/* Bottom save */}
      <div className="flex justify-end pb-8">
        <button onClick={handleSave} disabled={saving} className="flex items-center gap-2 px-6 py-3 bg-[#15401E] hover:bg-[#0f2e15] text-white rounded-xl font-semibold disabled:opacity-60 transition-all">
          <Save className="w-4 h-4" />
          {saving ? 'Saving…' : 'Save Page'}
        </button>
      </div>
    </div>
  );
}

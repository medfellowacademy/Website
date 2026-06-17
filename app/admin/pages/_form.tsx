'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Save, Plus, Trash2, ArrowLeft, GripVertical, ExternalLink } from 'lucide-react';

type SectionType = 'text' | 'features' | 'stats' | 'cta' | 'testimonials' | 'faq';

interface Section {
  id: string;
  type: SectionType;
  heading?: string;
  body?: string;
  bg?: string;
  items?: Record<string, string>[];
  cta_text?: string;
  cta_url?: string;
}

export interface PageFormData {
  slug: string;
  title: string;
  is_published: boolean;
  hero_heading: string;
  hero_subheading: string;
  hero_cta_text: string;
  hero_cta_url: string;
  hero_bg_color: string;
  sections: Section[];
  meta_title: string;
  meta_description: string;
}

const BLANK: PageFormData = {
  slug: '', title: '', is_published: true,
  hero_heading: '', hero_subheading: '',
  hero_cta_text: 'Apply Now', hero_cta_url: '/apply',
  hero_bg_color: '#15401E',
  sections: [],
  meta_title: '', meta_description: '',
};

const SECTION_LABELS: Record<SectionType, string> = {
  text: '📝 Text Block',
  features: '✅ Features List',
  stats: '📊 Stats Grid',
  cta: '🚀 CTA Banner',
  testimonials: '💬 Testimonials',
  faq: '❓ FAQ Accordion',
};

const inputCls = 'w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#15401E]/20 focus:border-[#15401E] bg-white transition-all';
const labelCls = 'block text-sm font-semibold text-gray-700 mb-1';
const sectionCls = 'bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4';

function uid() { return Math.random().toString(36).slice(2); }

function defaultSection(type: SectionType): Section {
  const base: Section = { id: uid(), type, heading: '', bg: '' };
  if (type === 'text')         return { ...base, body: '' };
  if (type === 'features')     return { ...base, items: [{ icon: '✅', title: '', desc: '' }] };
  if (type === 'stats')        return { ...base, items: [{ value: '', label: '' }] };
  if (type === 'cta')          return { ...base, body: '', cta_text: 'Apply Now', cta_url: '/apply' };
  if (type === 'testimonials') return { ...base, items: [{ quote: '', author: '', role: '' }] };
  if (type === 'faq')          return { ...base, items: [{ question: '', answer: '' }] };
  return base;
}

function SectionEditor({ section, onChange, onDelete }: {
  section: Section;
  onChange: (s: Section) => void;
  onDelete: () => void;
}) {
  function set(k: keyof Section, v: any) { onChange({ ...section, [k]: v }); }

  function setItem(i: number, k: string, v: string) {
    const items = [...(section.items ?? [])];
    items[i] = { ...items[i], [k]: v };
    set('items', items);
  }
  function addItem(template: Record<string, string>) { set('items', [...(section.items ?? []), template]); }
  function removeItem(i: number) { set('items', (section.items ?? []).filter((_, j) => j !== i)); }

  return (
    <div className="bg-gray-50 rounded-2xl p-5 space-y-3 border border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GripVertical className="w-4 h-4 text-gray-300" />
          <span className="text-sm font-bold text-gray-700">{SECTION_LABELS[section.type]}</span>
        </div>
        <button onClick={onDelete} className="p-1.5 text-red-400 hover:bg-red-50 rounded-lg transition-all">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      {/* Common heading */}
      {section.type !== 'cta' && (
        <div>
          <label className={labelCls}>Section Heading</label>
          <input value={section.heading ?? ''} onChange={e => set('heading', e.target.value)} placeholder="Section heading…" className={inputCls} />
        </div>
      )}

      {/* Background color */}
      <div className="flex items-center gap-3">
        <label className="text-sm font-semibold text-gray-700 shrink-0">Background</label>
        <select value={section.bg ?? ''} onChange={e => set('bg', e.target.value)} className={inputCls + ' w-48'}>
          <option value="">White (default)</option>
          <option value="gray">Light Gray</option>
          <option value="green">Light Green</option>
          <option value="dark">Dark Green</option>
        </select>
      </div>

      {/* Type-specific fields */}
      {section.type === 'text' && (
        <div>
          <label className={labelCls}>Body Text</label>
          <textarea value={section.body ?? ''} onChange={e => set('body', e.target.value)} rows={4} className={inputCls + ' resize-y'} placeholder="Paragraph text…" />
        </div>
      )}

      {section.type === 'features' && (
        <div className="space-y-2">
          <label className={labelCls}>Feature Items</label>
          {(section.items ?? []).map((item, i) => (
            <div key={i} className="flex gap-2">
              <input value={item.icon ?? ''} onChange={e => setItem(i, 'icon', e.target.value)} placeholder="✅" className={inputCls + ' w-14 text-center'} />
              <input value={item.title ?? ''} onChange={e => setItem(i, 'title', e.target.value)} placeholder="Feature title" className={inputCls} />
              <input value={item.desc ?? ''} onChange={e => setItem(i, 'desc', e.target.value)} placeholder="Short description" className={inputCls} />
              <button onClick={() => removeItem(i)} className="p-2 text-red-400 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4" /></button>
            </div>
          ))}
          <button onClick={() => addItem({ icon: '✅', title: '', desc: '' })} className="flex items-center gap-1.5 text-sm text-[#15401E] hover:underline"><Plus className="w-3.5 h-3.5" /> Add feature</button>
        </div>
      )}

      {section.type === 'stats' && (
        <div className="space-y-2">
          <label className={labelCls}>Stats</label>
          {(section.items ?? []).map((item, i) => (
            <div key={i} className="flex gap-2">
              <input value={item.value ?? ''} onChange={e => setItem(i, 'value', e.target.value)} placeholder="98%" className={inputCls + ' w-28'} />
              <input value={item.label ?? ''} onChange={e => setItem(i, 'label', e.target.value)} placeholder="Placement Rate" className={inputCls} />
              <button onClick={() => removeItem(i)} className="p-2 text-red-400 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4" /></button>
            </div>
          ))}
          <button onClick={() => addItem({ value: '', label: '' })} className="flex items-center gap-1.5 text-sm text-[#15401E] hover:underline"><Plus className="w-3.5 h-3.5" /> Add stat</button>
        </div>
      )}

      {section.type === 'cta' && (
        <div className="space-y-3">
          <div>
            <label className={labelCls}>Heading</label>
            <input value={section.heading ?? ''} onChange={e => set('heading', e.target.value)} placeholder="Ready to Start?" className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Subheading / Body</label>
            <textarea value={section.body ?? ''} onChange={e => set('body', e.target.value)} rows={2} className={inputCls + ' resize-y'} placeholder="Supporting text…" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Button Text</label>
              <input value={section.cta_text ?? ''} onChange={e => set('cta_text', e.target.value)} placeholder="Apply Now" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Button URL</label>
              <input value={section.cta_url ?? ''} onChange={e => set('cta_url', e.target.value)} placeholder="/apply" className={inputCls} />
            </div>
          </div>
        </div>
      )}

      {section.type === 'testimonials' && (
        <div className="space-y-3">
          <label className={labelCls}>Testimonials</label>
          {(section.items ?? []).map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-3 space-y-2 border border-gray-200">
              <div className="flex justify-between">
                <span className="text-xs text-gray-400">Testimonial {i + 1}</span>
                <button onClick={() => removeItem(i)} className="p-1 text-red-400 hover:bg-red-50 rounded"><Trash2 className="w-3.5 h-3.5" /></button>
              </div>
              <textarea value={item.quote ?? ''} onChange={e => setItem(i, 'quote', e.target.value)} placeholder="Quote…" rows={2} className={inputCls + ' resize-y'} />
              <div className="grid grid-cols-2 gap-2">
                <input value={item.author ?? ''} onChange={e => setItem(i, 'author', e.target.value)} placeholder="Dr Name" className={inputCls} />
                <input value={item.role ?? ''} onChange={e => setItem(i, 'role', e.target.value)} placeholder="Specialist · City" className={inputCls} />
              </div>
            </div>
          ))}
          <button onClick={() => addItem({ quote: '', author: '', role: '' })} className="flex items-center gap-1.5 text-sm text-[#15401E] hover:underline"><Plus className="w-3.5 h-3.5" /> Add testimonial</button>
        </div>
      )}

      {section.type === 'faq' && (
        <div className="space-y-3">
          <label className={labelCls}>FAQ Items</label>
          {(section.items ?? []).map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-3 space-y-2 border border-gray-200">
              <div className="flex gap-2">
                <input value={item.question ?? ''} onChange={e => setItem(i, 'question', e.target.value)} placeholder="Question?" className={inputCls} />
                <button onClick={() => removeItem(i)} className="p-2 text-red-400 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4" /></button>
              </div>
              <textarea value={item.answer ?? ''} onChange={e => setItem(i, 'answer', e.target.value)} placeholder="Answer…" rows={2} className={inputCls + ' resize-y'} />
            </div>
          ))}
          <button onClick={() => addItem({ question: '', answer: '' })} className="flex items-center gap-1.5 text-sm text-[#15401E] hover:underline"><Plus className="w-3.5 h-3.5" /> Add FAQ</button>
        </div>
      )}
    </div>
  );
}

export default function PageForm({ initial, pageId, isNew }: { initial?: Partial<PageFormData>; pageId?: string; isNew: boolean }) {
  const router = useRouter();
  const [form, setForm] = useState<PageFormData>({ ...BLANK, ...initial, sections: (initial?.sections ?? []).map(s => ({ ...s, id: s.id ?? uid() })) });
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState('');

  function showToast(msg: string) { setToast(msg); setTimeout(() => setToast(''), 3500); }
  function set(k: keyof PageFormData, v: any) { setForm(f => ({ ...f, [k]: v })); }

  function updateSection(id: string, updated: Section) {
    setForm(f => ({ ...f, sections: f.sections.map(s => s.id === id ? updated : s) }));
  }
  function deleteSection(id: string) {
    setForm(f => ({ ...f, sections: f.sections.filter(s => s.id !== id) }));
  }
  function addSection(type: SectionType) {
    setForm(f => ({ ...f, sections: [...f.sections, defaultSection(type)] }));
  }

  async function handleSave() {
    if (!form.slug || !form.title) { showToast('Title and slug are required'); return; }
    setSaving(true);
    try {
      const url = isNew ? '/api/admin/custom-pages' : `/api/admin/custom-pages/${pageId}`;
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
        router.push(`/admin/pages/${j.data.id}`);
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
          <button onClick={() => router.push('/admin/pages')} className="p-2 hover:bg-gray-100 rounded-xl transition-all">
            <ArrowLeft className="w-4 h-4 text-gray-500" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{isNew ? 'New Landing Page' : `Edit: ${form.title}`}</h1>
            <p className="text-gray-400 text-sm mt-0.5">
              Public URL: <a href={`/p/${form.slug}`} target="_blank" rel="noopener noreferrer" className="text-[#15401E] hover:underline inline-flex items-center gap-1">/p/{form.slug || 'slug'} <ExternalLink className="w-3 h-3" /></a>
            </p>
          </div>
        </div>
        <button onClick={handleSave} disabled={saving} className="flex items-center gap-2 px-5 py-2.5 bg-[#15401E] hover:bg-[#0f2e15] text-white rounded-xl text-sm font-semibold disabled:opacity-60 transition-all">
          <Save className="w-4 h-4" />
          {saving ? 'Saving…' : 'Save Page'}
        </button>
      </div>

      {/* Basic Info */}
      <div className={sectionCls}>
        <h2 className="text-base font-bold text-gray-800 pb-3 border-b border-gray-100">📄 Page Info</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Page Title *</label>
            <input value={form.title} onChange={e => set('title', e.target.value)} placeholder="Fellowship Guide for Oman Doctors" className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>URL Slug * <span className="text-gray-400 font-normal">(no spaces)</span></label>
            <input value={form.slug} onChange={e => set('slug', e.target.value.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''))} placeholder="oman-fellowship-guide" className={inputCls} />
            <p className="text-xs text-gray-400 mt-1">Page URL: /p/{form.slug || 'slug'}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" id="pub" checked={form.is_published} onChange={e => set('is_published', e.target.checked)} className="w-4 h-4 accent-[#15401E]" />
          <label htmlFor="pub" className="text-sm font-medium text-gray-700">Published (visible to public)</label>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Meta Title</label>
            <input value={form.meta_title} onChange={e => set('meta_title', e.target.value)} placeholder="Page title for Google…" className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Meta Description</label>
            <input value={form.meta_description} onChange={e => set('meta_description', e.target.value)} placeholder="Short description for Google…" className={inputCls} />
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className={sectionCls}>
        <h2 className="text-base font-bold text-gray-800 pb-3 border-b border-gray-100">🦸 Hero Section</h2>
        <div>
          <label className={labelCls}>Main Heading</label>
          <textarea value={form.hero_heading} onChange={e => set('hero_heading', e.target.value)} rows={2} className={inputCls + ' resize-y'} placeholder="Fellowship Programs for\nDoctors in Oman" />
        </div>
        <div>
          <label className={labelCls}>Subheading</label>
          <textarea value={form.hero_subheading} onChange={e => set('hero_subheading', e.target.value)} rows={2} className={inputCls + ' resize-y'} placeholder="46 fellowships for working doctors…" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>CTA Button Text</label>
            <input value={form.hero_cta_text} onChange={e => set('hero_cta_text', e.target.value)} placeholder="Apply Now" className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>CTA Button URL</label>
            <input value={form.hero_cta_url} onChange={e => set('hero_cta_url', e.target.value)} placeholder="/apply" className={inputCls} />
          </div>
        </div>
        <div>
          <label className={labelCls}>Hero Background Color</label>
          <div className="flex items-center gap-3">
            <input type="color" value={form.hero_bg_color} onChange={e => set('hero_bg_color', e.target.value)} className="w-10 h-10 rounded cursor-pointer border border-gray-200" />
            <input value={form.hero_bg_color} onChange={e => set('hero_bg_color', e.target.value)} placeholder="#15401E" className={inputCls + ' w-36'} />
            <div className="flex gap-2">
              {['#15401E', '#1E3A5F', '#7B1D1D', '#1D4E6B', '#3D1A6B'].map(c => (
                <button key={c} onClick={() => set('hero_bg_color', c)} className="w-7 h-7 rounded-lg border-2 border-white shadow" style={{ background: c }} title={c} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-gray-800">📦 Content Sections</h2>
          <span className="text-xs text-gray-400">{form.sections.length} section{form.sections.length !== 1 ? 's' : ''}</span>
        </div>

        {form.sections.length === 0 && (
          <div className="text-center py-8 text-gray-400 bg-white rounded-2xl border-2 border-dashed border-gray-200">
            No sections yet. Add one below.
          </div>
        )}

        {form.sections.map(section => (
          <SectionEditor
            key={section.id}
            section={section}
            onChange={updated => updateSection(section.id, updated)}
            onDelete={() => deleteSection(section.id)}
          />
        ))}

        {/* Add Section Buttons */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <p className="text-sm font-semibold text-gray-700 mb-3">Add Section</p>
          <div className="flex flex-wrap gap-2">
            {(Object.entries(SECTION_LABELS) as [SectionType, string][]).map(([type, label]) => (
              <button
                key={type}
                onClick={() => addSection(type)}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-xl border border-gray-200 hover:border-[#15401E] hover:text-[#15401E] hover:bg-[#f7faf8] transition-all"
              >
                <Plus className="w-3.5 h-3.5" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

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

'use client';
import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { marked } from 'marked';
import { Save, Plus, Trash2, ArrowLeft, ExternalLink, Eye, Code2 } from 'lucide-react';

export interface BlogFaqRow {
  question: string;
  answer: string;
}

export interface BlogFormData {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  cover_image: string;
  read_time: string;
  content_markdown: string;
  faqs: BlogFaqRow[];
  meta_title: string;
  meta_description: string;
  is_published: boolean;
}

const BLANK: BlogFormData = {
  slug: '', title: '', excerpt: '', category: 'Fellowship Guides',
  cover_image: '', read_time: '', content_markdown: '', faqs: [],
  meta_title: '', meta_description: '', is_published: false,
};

const CATEGORIES = ['Fellowship Guides', 'Career Planning', 'Clinical Skills', 'Custom…'];

const inputCls = 'w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#15401E]/20 focus:border-[#15401E] bg-white transition-all';
const labelCls = 'block text-sm font-semibold text-gray-700 mb-1';
const sectionCls = 'bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4';

function slugify(s: string) {
  return s.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
}

function estimateReadTime(markdown: string) {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export default function BlogForm({ initial, postId, isNew }: { initial?: Partial<BlogFormData>; postId?: string; isNew: boolean }) {
  const router = useRouter();
  const [form, setForm] = useState<BlogFormData>({ ...BLANK, ...initial, faqs: initial?.faqs ?? [] });
  const [customCategory, setCustomCategory] = useState(!CATEGORIES.includes(form.category) && form.category !== 'Custom…');
  const [slugTouched, setSlugTouched] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState('');
  const [tab, setTab] = useState<'write' | 'preview'>('write');

  function showToast(msg: string) { setToast(msg); setTimeout(() => setToast(''), 3500); }
  function set<K extends keyof BlogFormData>(k: K, v: BlogFormData[K]) { setForm(f => ({ ...f, [k]: v })); }

  function onTitleChange(v: string) {
    set('title', v);
    if (!slugTouched) set('slug', slugify(v));
  }

  function setFaq(i: number, k: keyof BlogFaqRow, v: string) {
    const faqs = [...form.faqs];
    faqs[i] = { ...faqs[i], [k]: v };
    set('faqs', faqs);
  }
  function addFaq() { set('faqs', [...form.faqs, { question: '', answer: '' }]); }
  function removeFaq(i: number) { set('faqs', form.faqs.filter((_, j) => j !== i)); }

  const previewHtml = useMemo(() => {
    try { return marked.parse(form.content_markdown || '') as string; } catch { return ''; }
  }, [form.content_markdown]);

  async function handleSave() {
    if (!form.title || !form.slug) { showToast('Title and slug are required'); return; }
    setSaving(true);
    try {
      const payload = { ...form, read_time: form.read_time || estimateReadTime(form.content_markdown) };
      const url = isNew ? '/api/admin/blog-posts' : `/api/admin/blog-posts/${postId}`;
      const method = isNew ? 'POST' : 'PUT';
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) { const j = await res.json(); throw new Error(j.error ?? 'Save failed'); }
      const j = await res.json();
      showToast('Saved!');
      if (isNew) router.push(`/admin/blog/${j.data.id}`);
      else set('read_time', payload.read_time);
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
          <button onClick={() => router.push('/admin/blog')} className="p-2 hover:bg-gray-100 rounded-xl transition-all">
            <ArrowLeft className="w-4 h-4 text-gray-500" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{isNew ? 'New Blog Post' : `Edit: ${form.title}`}</h1>
            <p className="text-gray-400 text-sm mt-0.5">
              Public URL: <a href={`/blog/${form.slug}`} target="_blank" rel="noopener noreferrer" className="text-[#15401E] hover:underline inline-flex items-center gap-1">/blog/{form.slug || 'slug'} <ExternalLink className="w-3 h-3" /></a>
            </p>
          </div>
        </div>
        <button onClick={handleSave} disabled={saving} className="flex items-center gap-2 px-5 py-2.5 bg-[#15401E] hover:bg-[#0f2e15] text-white rounded-xl text-sm font-semibold disabled:opacity-60 transition-all">
          <Save className="w-4 h-4" />
          {saving ? 'Saving…' : 'Save Post'}
        </button>
      </div>

      {/* Basic Info */}
      <div className={sectionCls}>
        <h2 className="text-base font-bold text-gray-800 pb-3 border-b border-gray-100">📝 Post Info</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Title *</label>
            <input value={form.title} onChange={e => onTitleChange(e.target.value)} placeholder="How to Choose a Fellowship" className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>URL Slug * <span className="text-gray-400 font-normal">(no spaces)</span></label>
            <input
              value={form.slug}
              onChange={e => { setSlugTouched(true); set('slug', slugify(e.target.value)); }}
              placeholder="how-to-choose-a-fellowship"
              className={inputCls}
            />
            <p className="text-xs text-gray-400 mt-1">Post URL: /blog/{form.slug || 'slug'}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Category</label>
            {customCategory ? (
              <input value={form.category} onChange={e => set('category', e.target.value)} placeholder="Category name" className={inputCls} />
            ) : (
              <select
                value={form.category}
                onChange={e => {
                  if (e.target.value === 'Custom…') { setCustomCategory(true); set('category', ''); }
                  else set('category', e.target.value);
                }}
                className={inputCls}
              >
                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            )}
          </div>
          <div>
            <label className={labelCls}>Read Time <span className="text-gray-400 font-normal">(auto-estimated if left blank)</span></label>
            <input value={form.read_time} onChange={e => set('read_time', e.target.value)} placeholder={estimateReadTime(form.content_markdown)} className={inputCls} />
          </div>
        </div>

        <div>
          <label className={labelCls}>Cover Image <span className="text-gray-400 font-normal">(path or URL)</span></label>
          <input value={form.cover_image} onChange={e => set('cover_image', e.target.value)} placeholder="/courses/dermatology.jpg" className={inputCls} />
          {form.cover_image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={form.cover_image} alt="Cover preview" className="mt-2 h-28 rounded-lg object-cover border border-gray-200" onError={e => (e.currentTarget.style.display = 'none')} />
          )}
        </div>

        <div>
          <label className={labelCls}>Excerpt <span className="text-gray-400 font-normal">(shown on the /blog index card)</span></label>
          <textarea value={form.excerpt} onChange={e => set('excerpt', e.target.value)} rows={2} className={inputCls + ' resize-y'} placeholder="A short one-sentence summary…" />
        </div>

        <div className="flex items-center gap-3">
          <input type="checkbox" id="pub" checked={form.is_published} onChange={e => set('is_published', e.target.checked)} className="w-4 h-4 accent-[#15401E]" />
          <label htmlFor="pub" className="text-sm font-medium text-gray-700">Published (visible to public)</label>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Meta Title <span className="text-gray-400 font-normal">(falls back to Title)</span></label>
            <input value={form.meta_title} onChange={e => set('meta_title', e.target.value)} placeholder={form.title} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Meta Description <span className="text-gray-400 font-normal">(falls back to Excerpt)</span></label>
            <input value={form.meta_description} onChange={e => set('meta_description', e.target.value)} placeholder={form.excerpt} className={inputCls} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={sectionCls}>
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <h2 className="text-base font-bold text-gray-800">📄 Content (Markdown)</h2>
          <div className="flex rounded-lg border border-gray-200 overflow-hidden">
            <button onClick={() => setTab('write')} className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold transition-all ${tab === 'write' ? 'bg-[#15401E] text-white' : 'text-gray-500 hover:bg-gray-50'}`}>
              <Code2 className="w-3.5 h-3.5" /> Write
            </button>
            <button onClick={() => setTab('preview')} className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold transition-all ${tab === 'preview' ? 'bg-[#15401E] text-white' : 'text-gray-500 hover:bg-gray-50'}`}>
              <Eye className="w-3.5 h-3.5" /> Preview
            </button>
          </div>
        </div>

        {tab === 'write' ? (
          <textarea
            value={form.content_markdown}
            onChange={e => set('content_markdown', e.target.value)}
            rows={20}
            className={inputCls + ' resize-y font-mono text-[13px] leading-relaxed'}
            placeholder={'## Section heading\n\nWrite your post here using Markdown — headings, **bold**, lists, [links](/apply), and tables all work.'}
          />
        ) : (
          <div className="border border-gray-200 rounded-xl p-5 bg-gray-50 min-h-[300px]">
            {form.content_markdown ? (
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: previewHtml }} />
            ) : (
              <p className="text-gray-400 text-sm">Nothing to preview yet — write some content first.</p>
            )}
          </div>
        )}
      </div>

      {/* FAQs */}
      <div className={sectionCls}>
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <h2 className="text-base font-bold text-gray-800">❓ FAQs</h2>
          <span className="text-xs text-gray-400">{form.faqs.length} question{form.faqs.length !== 1 ? 's' : ''}</span>
        </div>
        {form.faqs.length === 0 && (
          <div className="text-center py-6 text-gray-400 text-sm">No FAQs yet. Add one below (optional).</div>
        )}
        <div className="space-y-3">
          {form.faqs.map((faq, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-3 space-y-2 border border-gray-200">
              <div className="flex gap-2">
                <input value={faq.question} onChange={e => setFaq(i, 'question', e.target.value)} placeholder="Question?" className={inputCls} />
                <button onClick={() => removeFaq(i)} className="p-2 text-red-400 hover:bg-red-50 rounded-lg shrink-0"><Trash2 className="w-4 h-4" /></button>
              </div>
              <textarea value={faq.answer} onChange={e => setFaq(i, 'answer', e.target.value)} placeholder="Answer…" rows={2} className={inputCls + ' resize-y'} />
            </div>
          ))}
        </div>
        <button onClick={addFaq} className="flex items-center gap-1.5 text-sm text-[#15401E] hover:underline">
          <Plus className="w-3.5 h-3.5" /> Add FAQ
        </button>
      </div>

      {/* Bottom save */}
      <div className="flex justify-end pb-8">
        <button onClick={handleSave} disabled={saving} className="flex items-center gap-2 px-6 py-3 bg-[#15401E] hover:bg-[#0f2e15] text-white rounded-xl font-semibold disabled:opacity-60 transition-all">
          <Save className="w-4 h-4" />
          {saving ? 'Saving…' : 'Save Post'}
        </button>
      </div>
    </div>
  );
}

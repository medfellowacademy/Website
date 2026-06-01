'use client';
import { useEffect, useState } from 'react';
import { PlusCircle, Edit2, Trash2, Star, X, Save } from 'lucide-react';
import { type CmsTestimonial } from '@/lib/cms';

const BLANK: Partial<CmsTestimonial> = {
  author_name: '',
  author_title: '',
  author_photo: '',
  content: '',
  rating: 5,
  program_name: '',
  is_published: true,
};

export default function TestimonialsPage() {
  const [items, setItems] = useState<CmsTestimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState('');
  const [modal, setModal] = useState<Partial<CmsTestimonial> | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  async function load() {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/testimonials');
      const json = await res.json();
      if (json.data) setItems(json.data);
    } catch {}
    setLoading(false);
  }
  useEffect(() => { load(); }, []);

  function showToast(msg: string) { setToast(msg); setTimeout(() => setToast(''), 3000); }

  async function handleDelete(id: string, name: string) {
    if (!confirm(`Delete testimonial from "${name}"?`)) return;
    try {
      const res = await fetch(`/api/admin/testimonials/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error();
      setItems((p) => p.filter((x) => x.id !== id));
      showToast('Testimonial deleted');
    } catch { showToast('Delete failed'); }
  }

  async function handleSave() {
    if (!modal) return;
    setSaving(true);
    setError('');
    try {
      if (modal.id) {
        const res = await fetch(`/api/admin/testimonials/${modal.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(modal),
        });
        const json = await res.json();
        if (!res.ok) throw new Error(json.error ?? 'Update failed');
        const updated = json.data ?? { ...modal, id: modal.id } as CmsTestimonial;
        setItems((p) => p.map((x) => x.id === modal.id ? updated : x));
        showToast('Testimonial updated!');
      } else {
        const res = await fetch('/api/admin/testimonials', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(modal),
        });
        const json = await res.json();
        if (!res.ok) throw new Error(json.error ?? 'Create failed');
        if (!json.data) throw new Error('Testimonial was not saved. Check Supabase service role key.');
        setItems((p) => [json.data, ...p]);
        showToast('Testimonial added!');
      }
      setModal(null);
    } catch (err: any) {
      setError(err?.message ?? 'Save failed');
    } finally {
      setSaving(false);
    }
  }

  const inputCls = 'w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#15401E]/20 focus:border-[#15401E] bg-white transition-all';
  const labelCls = 'block text-sm font-semibold text-gray-700 mb-1.5';

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {toast && <div className="fixed top-4 right-4 z-50 bg-gray-900 text-white px-4 py-3 rounded-xl shadow-xl text-sm font-medium">{toast}</div>}

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Testimonials</h1>
          <p className="text-gray-400 text-sm mt-0.5">{items.length} testimonials</p>
        </div>
        <button
          onClick={() => { setModal({ ...BLANK }); setError(''); }}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#15401E] hover:bg-[#0f2e15] text-white rounded-xl text-sm font-semibold transition-all"
        >
          <PlusCircle className="w-4 h-4" /> Add Testimonial
        </button>
      </div>

      {/* List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-gray-400">Loading…</div>
        ) : items.length === 0 ? (
          <div className="p-12 text-center">
            <div className="text-4xl mb-3">💬</div>
            <div className="text-gray-500 font-semibold mb-2">No testimonials yet</div>
            <button onClick={() => setModal({ ...BLANK })} className="text-[#15401E] font-semibold text-sm hover:underline">+ Add Testimonial</button>
          </div>
        ) : (
          <div className="divide-y divide-gray-50">
            {items.map((t) => (
              <div key={t.id} className="flex items-start gap-4 px-5 py-4 hover:bg-gray-50 transition-colors">
                {/* Avatar */}
                <div className="w-11 h-11 rounded-full bg-[#15401E] flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.author_name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-semibold text-gray-800 text-sm">{t.author_name}</span>
                    <span className="text-xs text-gray-400">·</span>
                    <span className="text-xs text-gray-400">{t.program_name}</span>
                    <span className="flex items-center gap-0.5 text-amber-400 text-xs ml-auto">
                      {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 mb-1">{t.author_title}</div>
                  <p className="text-sm text-gray-600 line-clamp-2">{t.content}</p>
                </div>

                {/* Status */}
                <span className={`shrink-0 text-xs font-semibold px-2 py-1 rounded-full ${t.is_published ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-500'}`}>
                  {t.is_published ? 'Live' : 'Draft'}
                </span>

                {/* Actions */}
                <div className="flex items-center gap-1 shrink-0">
                  <button onClick={() => { setModal({ ...t }); setError(''); }} className="p-1.5 text-gray-400 hover:text-[#15401E] hover:bg-gray-100 rounded-lg transition-all">
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                  <button onClick={() => handleDelete(t.id, t.author_name)} className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <h2 className="text-base font-bold text-gray-900">{modal.id ? 'Edit Testimonial' : 'Add Testimonial'}</h2>
              <button onClick={() => setModal(null)} className="p-1.5 hover:bg-gray-100 rounded-lg transition-all">
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>

            <div className="p-5 space-y-4">
              {error && <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-3 text-sm">{error}</div>}

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelCls}>Full Name *</label>
                  <input value={modal.author_name ?? ''} onChange={(e) => setModal({ ...modal, author_name: e.target.value })} className={inputCls} placeholder="Dr. Amit Sharma" />
                </div>
                <div>
                  <label className={labelCls}>Title / Role</label>
                  <input value={modal.author_title ?? ''} onChange={(e) => setModal({ ...modal, author_title: e.target.value })} className={inputCls} placeholder="Emergency Physician" />
                </div>
              </div>

              <div>
                <label className={labelCls}>Program Name</label>
                <input value={modal.program_name ?? ''} onChange={(e) => setModal({ ...modal, program_name: e.target.value })} className={inputCls} placeholder="Fellowship in Emergency Medicine" />
              </div>

              <div>
                <label className={labelCls}>Photo URL</label>
                <input value={modal.author_photo ?? ''} onChange={(e) => setModal({ ...modal, author_photo: e.target.value })} className={inputCls} placeholder="https://..." />
              </div>

              <div>
                <label className={labelCls}>Testimonial Content *</label>
                <textarea value={modal.content ?? ''} onChange={(e) => setModal({ ...modal, content: e.target.value })} rows={4} className={inputCls} placeholder="What the student said about the program..." />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelCls}>Rating (1-5)</label>
                  <select value={modal.rating ?? 5} onChange={(e) => setModal({ ...modal, rating: parseInt(e.target.value) })} className={inputCls}>
                    {[5, 4, 3, 2, 1].map((n) => <option key={n} value={n}>{n} Stars</option>)}
                  </select>
                </div>
                <div className="flex items-end pb-0.5">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setModal({ ...modal, is_published: !modal.is_published })}
                      className={`relative w-11 h-6 rounded-full transition-all ${modal.is_published ? 'bg-emerald-500' : 'bg-gray-300'}`}
                    >
                      <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${modal.is_published ? 'translate-x-5' : 'translate-x-0'}`} />
                    </button>
                    <span className="text-sm font-medium text-gray-700">{modal.is_published ? 'Published' : 'Draft'}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2 p-5 border-t border-gray-100">
              <button onClick={() => setModal(null)} className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700 font-medium">Cancel</button>
              <button onClick={handleSave} disabled={saving} className="flex items-center gap-2 px-5 py-2 bg-[#15401E] hover:bg-[#0f2e15] text-white rounded-xl text-sm font-semibold disabled:opacity-60 transition-all">
                <Save className="w-3.5 h-3.5" />
                {saving ? 'Saving…' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

'use client';
import { useEffect, useState } from 'react';
import { PlusCircle, Edit2, Trash2, Eye, EyeOff, X, Save, ChevronDown, ChevronUp } from 'lucide-react';
import { getFaqs, createFaq, updateFaq, deleteFaq, CmsFaq } from '@/lib/cms';

const BLANK: Partial<CmsFaq> = {
  question: '',
  answer: '',
  category: 'General',
  is_published: true,
  sort_order: 0,
};

export default function FaqsPage() {
  const [items, setItems] = useState<CmsFaq[]>([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState('');
  const [modal, setModal] = useState<Partial<CmsFaq> | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [expanded, setExpanded] = useState<string | null>(null);

  async function load() {
    setLoading(true);
    try { setItems(await getFaqs()); } catch {}
    setLoading(false);
  }
  useEffect(() => { load(); }, []);

  function showToast(msg: string) { setToast(msg); setTimeout(() => setToast(''), 3000); }

  async function handleDelete(id: string, q: string) {
    if (!confirm(`Delete this FAQ?\n"${q}"`)) return;
    try {
      await deleteFaq(id);
      setItems((p) => p.filter((x) => x.id !== id));
      showToast('FAQ deleted');
    } catch { showToast('Delete failed'); }
  }

  async function handleToggle(item: CmsFaq) {
    try {
      const updated = await updateFaq(item.id, { is_published: !item.is_published });
      setItems((p) => p.map((x) => x.id === item.id ? updated : x));
      showToast(updated.is_published ? 'FAQ published' : 'FAQ set to draft');
    } catch { showToast('Update failed'); }
  }

  async function handleSave() {
    if (!modal) return;
    if (!modal.question?.trim() || !modal.answer?.trim()) {
      setError('Question and answer are required.');
      return;
    }
    setSaving(true);
    setError('');
    try {
      if (modal.id) {
        const updated = await updateFaq(modal.id, modal);
        setItems((p) => p.map((x) => x.id === modal.id ? updated : x));
        showToast('FAQ updated!');
      } else {
        const created = await createFaq(modal);
        setItems((p) => [...p, created]);
        showToast('FAQ added!');
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

  const categories = Array.from(new Set(items.map((i) => i.category).filter(Boolean)));

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {toast && (
        <div className="fixed top-4 right-4 z-50 bg-gray-900 text-white px-4 py-3 rounded-xl shadow-xl text-sm font-medium">
          {toast}
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">FAQs</h1>
          <p className="text-gray-400 text-sm mt-0.5">{items.length} questions</p>
        </div>
        <button
          onClick={() => { setModal({ ...BLANK }); setError(''); }}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#15401E] hover:bg-[#0f2e15] text-white rounded-xl text-sm font-semibold transition-all"
        >
          <PlusCircle className="w-4 h-4" /> Add FAQ
        </button>
      </div>

      {/* List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-gray-400">Loading FAQs…</div>
        ) : items.length === 0 ? (
          <div className="p-12 text-center">
            <div className="text-4xl mb-3">❓</div>
            <div className="text-gray-500 font-semibold mb-2">No FAQs yet</div>
            <button onClick={() => { setModal({ ...BLANK }); setError(''); }} className="text-[#15401E] font-semibold text-sm hover:underline">
              + Add First FAQ
            </button>
          </div>
        ) : (
          <div className="divide-y divide-gray-50">
            {items.map((item) => (
              <div key={item.id} className="hover:bg-gray-50/50 transition-colors">
                <div className="flex items-start gap-3 px-5 py-4">
                  {/* Expand toggle */}
                  <button
                    onClick={() => setExpanded(expanded === item.id ? null : item.id)}
                    className="mt-0.5 text-gray-400 hover:text-gray-600 transition-colors shrink-0"
                  >
                    {expanded === item.id
                      ? <ChevronUp className="w-4 h-4" />
                      : <ChevronDown className="w-4 h-4" />}
                  </button>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-2">
                      <p className="text-sm font-semibold text-gray-800 flex-1">{item.question}</p>
                      {item.category && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#e8f2ea] text-[#15401E] shrink-0">
                          {item.category}
                        </span>
                      )}
                    </div>
                    {expanded === item.id && (
                      <p className="text-sm text-gray-500 mt-2 leading-relaxed">{item.answer}</p>
                    )}
                  </div>

                  {/* Status toggle */}
                  <button
                    onClick={() => handleToggle(item)}
                    className={`shrink-0 flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full transition-all ${
                      item.is_published
                        ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                        : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                    }`}
                  >
                    {item.is_published ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                    {item.is_published ? 'Live' : 'Draft'}
                  </button>

                  {/* Actions */}
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={() => { setModal({ ...item }); setError(''); }}
                      className="p-1.5 text-gray-400 hover:text-[#15401E] hover:bg-gray-100 rounded-lg transition-all"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id, item.question)}
                      className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
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
              <h2 className="text-base font-bold text-gray-900">{modal.id ? 'Edit FAQ' : 'Add FAQ'}</h2>
              <button onClick={() => setModal(null)} className="p-1.5 hover:bg-gray-100 rounded-lg transition-all">
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>

            <div className="p-5 space-y-4">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-3 text-sm">{error}</div>
              )}

              <div>
                <label className={labelCls}>Question *</label>
                <input
                  value={modal.question ?? ''}
                  onChange={(e) => setModal({ ...modal, question: e.target.value })}
                  className={inputCls}
                  placeholder="What is the duration of the fellowship?"
                />
              </div>

              <div>
                <label className={labelCls}>Answer *</label>
                <textarea
                  value={modal.answer ?? ''}
                  onChange={(e) => setModal({ ...modal, answer: e.target.value })}
                  rows={5}
                  className={inputCls}
                  placeholder="The fellowship is 12 months long and can be completed online or in a hybrid format..."
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelCls}>Category</label>
                  <input
                    value={modal.category ?? ''}
                    onChange={(e) => setModal({ ...modal, category: e.target.value })}
                    className={inputCls}
                    placeholder="General, Fees, Eligibility..."
                    list="faq-categories"
                  />
                  <datalist id="faq-categories">
                    <option value="General" />
                    <option value="Eligibility" />
                    <option value="Fees" />
                    <option value="Curriculum" />
                    <option value="Certificate" />
                    <option value="Career" />
                    {categories.map((c) => <option key={c} value={c} />)}
                  </datalist>
                </div>
                <div>
                  <label className={labelCls}>Sort Order</label>
                  <input
                    type="number"
                    value={modal.sort_order ?? 0}
                    onChange={(e) => setModal({ ...modal, sort_order: parseInt(e.target.value) || 0 })}
                    className={inputCls}
                    min={0}
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setModal({ ...modal, is_published: !modal.is_published })}
                  className={`relative w-11 h-6 rounded-full transition-all ${modal.is_published ? 'bg-emerald-500' : 'bg-gray-300'}`}
                >
                  <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${modal.is_published ? 'translate-x-5' : 'translate-x-0'}`} />
                </button>
                <span className="text-sm font-medium text-gray-700">
                  {modal.is_published ? 'Published (visible on website)' : 'Draft (hidden)'}
                </span>
              </div>
            </div>

            <div className="flex justify-end gap-2 p-5 border-t border-gray-100">
              <button onClick={() => setModal(null)} className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700 font-medium">
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className="flex items-center gap-2 px-5 py-2 bg-[#15401E] hover:bg-[#0f2e15] text-white rounded-xl text-sm font-semibold disabled:opacity-60 transition-all"
              >
                <Save className="w-3.5 h-3.5" />
                {saving ? 'Saving…' : 'Save FAQ'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PlusCircle, Trash2, GripVertical, Save, ArrowLeft } from 'lucide-react';
import { type CmsProgram } from '@/lib/cms';

interface Module { title: string; topics: string }

interface Props {
  program?: CmsProgram;
  modules?: { title: string; topics: string[] }[];
}

export default function ProgramForm({ program, modules: initialModules = [] }: Props) {
  const router = useRouter();
  const isEdit = !!program;
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState('');
  const [error, setError] = useState('');

  // Basic fields
  const [name, setName] = useState(program?.name ?? '');
  const [slug, setSlug] = useState(program?.slug ?? '');
  const [icon, setIcon] = useState(program?.icon ?? '🏥');
  const [duration, setDuration] = useState(program?.duration ?? '12 Months');
  const [eligibility, setEligibility] = useState(program?.eligibility ?? '');
  const [description, setDescription] = useState(program?.description ?? '');
  const [overview, setOverview] = useState(program?.overview ?? '');
  const [isPublished, setIsPublished] = useState(program?.is_published ?? true);

  // Pricing
  const [onlinePrice, setOnlinePrice] = useState(program?.online_price?.toString() ?? '');
  const [month11_1, setMonth11_1] = useState(program?.month_11_1?.toString() ?? '');
  const [month10_2, setMonth10_2] = useState(program?.month_10_2?.toString() ?? '');
  const [month9_3, setMonth9_3] = useState(program?.month_9_3?.toString() ?? '');
  const [month6_6, setMonth6_6] = useState(program?.month_6_6?.toString() ?? '');
  const [month12Offline, setMonth12Offline] = useState(program?.month_12_offline?.toString() ?? '');

  // Arrays
  const [highlights, setHighlights] = useState<string[]>(program?.highlights ?? ['']);
  const [careers, setCareers] = useState<string[]>(program?.career_opportunities ?? ['']);

  // Curriculum modules
  const [modules, setModules] = useState<Module[]>(
    initialModules.length > 0
      ? initialModules.map((m) => ({ title: m.title, topics: m.topics.join('\n') }))
      : [{ title: '', topics: '' }]
  );

  function autoSlug(val: string) {
    return val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }

  function handleNameChange(val: string) {
    setName(val);
    if (!isEdit) setSlug(autoSlug(val));
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      const payload = {
        name, slug, icon, duration, eligibility, description, overview,
        is_published: isPublished,
        online_price: onlinePrice ? parseInt(onlinePrice) : null,
        month_11_1: month11_1 ? parseInt(month11_1) : null,
        month_10_2: month10_2 ? parseInt(month10_2) : null,
        month_9_3: month9_3 ? parseInt(month9_3) : null,
        month_6_6: month6_6 ? parseInt(month6_6) : null,
        month_12_offline: month12Offline ? parseInt(month12Offline) : null,
        highlights: highlights.filter(Boolean),
        career_opportunities: careers.filter(Boolean),
      };

      // Use server API routes (avoids anon-key RLS issues)
      let savedId: string;
      if (isEdit) {
        const res = await fetch(`/api/admin/programs/${program.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        const json = await res.json();
        if (!res.ok) throw new Error(json.error ?? 'Save failed');
        savedId = json.data.id;
      } else {
        const res = await fetch('/api/admin/programs', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        const json = await res.json();
        if (!res.ok) throw new Error(json.error ?? 'Create failed');
        savedId = json.data.id;
      }

      // Save curriculum modules
      const mods = modules.filter((m) => m.title.trim()).map((m) => ({
        title: m.title,
        topics: m.topics.split('\n').map((t: string) => t.trim()).filter(Boolean),
      }));
      const modRes = await fetch(`/api/admin/programs/${savedId}/modules`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ modules: mods }),
      });
      if (!modRes.ok) {
        const modJson = await modRes.json();
        throw new Error(modJson.error ?? 'Module save failed');
      }

      setToast(isEdit ? 'Program saved!' : 'Program created!');
      setTimeout(() => {
        router.push('/admin/programs');
        router.refresh();
      }, 800);
    } catch (err: any) {
      setError(err?.message ?? 'Save failed. Please try again.');
    } finally {
      setSaving(false);
    }
  }

  const inputCls = 'w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#15401E]/20 focus:border-[#15401E] bg-white transition-all';
  const labelCls = 'block text-sm font-semibold text-gray-700 mb-1.5';

  return (
    <form onSubmit={handleSave} className="max-w-4xl mx-auto space-y-8">
      {toast && (
        <div className="fixed top-4 right-4 z-50 bg-emerald-600 text-white px-4 py-3 rounded-xl shadow-xl text-sm font-medium">
          ✓ {toast}
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button type="button" onClick={() => router.back()} className="p-2 hover:bg-gray-100 rounded-lg transition-all">
            <ArrowLeft className="w-4 h-4 text-gray-500" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{isEdit ? 'Edit Program' : 'New Program'}</h1>
            <p className="text-gray-400 text-sm">{isEdit ? program.name : 'Create a new fellowship program'}</p>
          </div>
        </div>
        <button
          type="submit"
          disabled={saving}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#15401E] hover:bg-[#0f2e15] text-white rounded-xl text-sm font-semibold disabled:opacity-60 transition-all"
        >
          <Save className="w-4 h-4" />
          {saving ? 'Saving…' : 'Save Program'}
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-sm">{error}</div>
      )}

      {/* Basic Info */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
        <h2 className="text-base font-bold text-gray-800 pb-3 border-b border-gray-100">Basic Information</h2>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Program Name *</label>
            <input value={name} onChange={(e) => handleNameChange(e.target.value)} required className={inputCls} placeholder="Fellowship in Emergency Medicine" />
          </div>
          <div>
            <label className={labelCls}>URL Slug *</label>
            <input value={slug} onChange={(e) => setSlug(e.target.value)} required className={inputCls} placeholder="fellowship-in-emergency-medicine" />
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <label className={labelCls}>Icon (Emoji)</label>
            <input value={icon} onChange={(e) => setIcon(e.target.value)} className={inputCls} placeholder="🏥" maxLength={4} />
          </div>
          <div>
            <label className={labelCls}>Duration</label>
            <input value={duration} onChange={(e) => setDuration(e.target.value)} className={inputCls} placeholder="12 Months" />
          </div>
          <div>
            <label className={labelCls}>Eligibility</label>
            <input value={eligibility} onChange={(e) => setEligibility(e.target.value)} className={inputCls} placeholder="MBBS / MD" />
          </div>
        </div>

        <div>
          <label className={labelCls}>Short Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={2} className={inputCls} placeholder="One-line program description shown in cards and hero" />
        </div>
        <div>
          <label className={labelCls}>Full Overview</label>
          <textarea value={overview} onChange={(e) => setOverview(e.target.value)} rows={5} className={inputCls} placeholder="Detailed program overview paragraph shown on program page..." />
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => setIsPublished((v) => !v)}
            className={`relative w-11 h-6 rounded-full transition-all ${isPublished ? 'bg-emerald-500' : 'bg-gray-300'}`}
          >
            <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${isPublished ? 'translate-x-5' : 'translate-x-0'}`} />
          </button>
          <span className="text-sm font-medium text-gray-700">{isPublished ? 'Published (live on website)' : 'Draft (hidden from website)'}</span>
        </div>
      </div>

      {/* Pricing */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
        <h2 className="text-base font-bold text-gray-800 pb-3 border-b border-gray-100">Pricing (₹ INR)</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { label: 'Fully Online', val: onlinePrice, set: setOnlinePrice },
            { label: '11 Online + 1 Clinical', val: month11_1, set: setMonth11_1 },
            { label: '10 Online + 2 Clinical', val: month10_2, set: setMonth10_2 },
            { label: '9 Online + 3 Clinical', val: month9_3, set: setMonth9_3 },
            { label: '6 Online + 6 Clinical', val: month6_6, set: setMonth6_6 },
            { label: '12 Months Full Clinical', val: month12Offline, set: setMonth12Offline },
          ].map(({ label, val, set }) => (
            <div key={label}>
              <label className={labelCls}>{label}</label>
              <input type="number" value={val} onChange={(e) => set(e.target.value)} className={inputCls} placeholder="e.g. 160000" min={0} />
            </div>
          ))}
        </div>
      </div>

      {/* Highlights */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <h2 className="text-base font-bold text-gray-800">Key Highlights</h2>
          <button type="button" onClick={() => setHighlights([...highlights, ''])} className="flex items-center gap-1 text-xs text-[#15401E] font-semibold hover:underline">
            <PlusCircle className="w-3.5 h-3.5" /> Add
          </button>
        </div>
        <div className="space-y-2">
          {highlights.map((h, i) => (
            <div key={i} className="flex items-center gap-2">
              <input
                value={h}
                onChange={(e) => { const a = [...highlights]; a[i] = e.target.value; setHighlights(a); }}
                className={inputCls}
                placeholder={`Highlight ${i + 1}`}
              />
              <button type="button" onClick={() => setHighlights(highlights.filter((_, idx) => idx !== i))} className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Career Opportunities */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <h2 className="text-base font-bold text-gray-800">Career Opportunities</h2>
          <button type="button" onClick={() => setCareers([...careers, ''])} className="flex items-center gap-1 text-xs text-[#15401E] font-semibold hover:underline">
            <PlusCircle className="w-3.5 h-3.5" /> Add
          </button>
        </div>
        <div className="space-y-2">
          {careers.map((c, i) => (
            <div key={i} className="flex items-center gap-2">
              <input
                value={c}
                onChange={(e) => { const a = [...careers]; a[i] = e.target.value; setCareers(a); }}
                className={inputCls}
                placeholder={`Career opportunity ${i + 1}`}
              />
              <button type="button" onClick={() => setCareers(careers.filter((_, idx) => idx !== i))} className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Curriculum Modules */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <div>
            <h2 className="text-base font-bold text-gray-800">Curriculum Modules</h2>
            <p className="text-xs text-gray-400 mt-0.5">Each module has a title and topics (one per line)</p>
          </div>
          <button type="button" onClick={() => setModules([...modules, { title: '', topics: '' }])} className="flex items-center gap-1 text-xs text-[#15401E] font-semibold hover:underline">
            <PlusCircle className="w-3.5 h-3.5" /> Add Module
          </button>
        </div>
        <div className="space-y-4">
          {modules.map((m, i) => (
            <div key={i} className="border border-gray-100 rounded-xl p-4 bg-gray-50/50">
              <div className="flex items-center gap-2 mb-3">
                <GripVertical className="w-4 h-4 text-gray-300 shrink-0" />
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Module {i + 1}</span>
                <div className="flex-1" />
                <button type="button" onClick={() => setModules(modules.filter((_, idx) => idx !== i))} className="p-1 text-gray-400 hover:text-red-500 transition-colors">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <input
                value={m.title}
                onChange={(e) => { const a = [...modules]; a[i] = { ...a[i], title: e.target.value }; setModules(a); }}
                className={`${inputCls} mb-2`}
                placeholder="Module title (e.g. Introduction to Airway Management)"
              />
              <textarea
                value={m.topics}
                onChange={(e) => { const a = [...modules]; a[i] = { ...a[i], topics: e.target.value }; setModules(a); }}
                rows={4}
                className={inputCls}
                placeholder="Topics — one per line:&#10;Topic 1&#10;Topic 2&#10;Topic 3"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Save button */}
      <div className="flex justify-end pb-8">
        <button type="submit" disabled={saving} className="flex items-center gap-2 px-6 py-3 bg-[#15401E] hover:bg-[#0f2e15] text-white rounded-xl font-semibold disabled:opacity-60 transition-all">
          <Save className="w-4 h-4" />
          {saving ? 'Saving…' : (isEdit ? 'Save Changes' : 'Create Program')}
        </button>
      </div>
    </form>
  );
}

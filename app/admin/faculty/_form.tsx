'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PlusCircle, Trash2, Save, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { createFaculty, updateFaculty, CmsFaculty } from '@/lib/cms';

export default function FacultyForm({ faculty }: { faculty?: CmsFaculty }) {
  const router = useRouter();
  const isEdit = !!faculty;
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState('');
  const [error, setError] = useState('');

  const [name, setName] = useState(faculty?.name ?? '');
  const [title, setTitle] = useState(faculty?.title ?? '');
  const [credentials, setCredentials] = useState(faculty?.credentials ?? '');
  const [experience, setExperience] = useState(faculty?.experience ?? '');
  const [specialty, setSpecialty] = useState(faculty?.specialty ?? '');
  const [bio, setBio] = useState(faculty?.bio ?? '');
  const [quote, setQuote] = useState(faculty?.quote ?? '');
  const [photoUrl, setPhotoUrl] = useState(faculty?.photo_url ?? '');
  const [studentRating, setStudentRating] = useState(faculty?.student_rating?.toString() ?? '4.8');
  const [fellowsTrained, setFellowsTrained] = useState(faculty?.fellows_trained ?? '');
  const [accentColor, setAccentColor] = useState(faculty?.accent_color ?? '#15401E');
  const [accentLight, setAccentLight] = useState(faculty?.accent_light ?? '#e8f2ea');
  const [isPublished, setIsPublished] = useState(faculty?.is_published ?? true);
  const [specialties, setSpecialties] = useState<string[]>(faculty?.specialties ?? ['']);
  const [highlights, setHighlights] = useState<string[]>(faculty?.highlights ?? ['']);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      const payload = {
        name, title, credentials, experience, specialty, bio, quote,
        photo_url: photoUrl, student_rating: parseFloat(studentRating),
        fellows_trained: fellowsTrained, accent_color: accentColor,
        accent_light: accentLight, is_published: isPublished,
        specialties: specialties.filter(Boolean),
        highlights: highlights.filter(Boolean),
      };
      isEdit ? await updateFaculty(faculty.id, payload) : await createFaculty(payload);
      setToast(isEdit ? 'Faculty updated!' : 'Faculty created!');
      setTimeout(() => { router.push('/admin/faculty'); router.refresh(); }, 800);
    } catch (err: any) {
      setError(err?.message ?? 'Save failed');
    } finally {
      setSaving(false);
    }
  }

  const inputCls = 'w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#213F5F]/20 focus:border-[#213F5F] bg-white transition-all';
  const labelCls = 'block text-sm font-semibold text-gray-700 mb-1.5';

  return (
    <form onSubmit={handleSave} className="max-w-3xl mx-auto space-y-8">
      {toast && <div className="fixed top-4 right-4 z-50 bg-emerald-600 text-white px-4 py-3 rounded-xl shadow-xl text-sm font-medium">✓ {toast}</div>}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button type="button" onClick={() => router.back()} className="p-2 hover:bg-gray-100 rounded-lg transition-all">
            <ArrowLeft className="w-4 h-4 text-gray-500" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">{isEdit ? 'Edit Faculty' : 'Add Faculty Member'}</h1>
        </div>
        <button type="submit" disabled={saving} className="flex items-center gap-2 px-5 py-2.5 bg-[#213F5F] hover:bg-[#1a3250] text-white rounded-xl text-sm font-semibold disabled:opacity-60 transition-all">
          <Save className="w-4 h-4" />
          {saving ? 'Saving…' : 'Save'}
        </button>
      </div>

      {error && <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-sm">{error}</div>}

      {/* Photo */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
        <h2 className="text-base font-bold text-gray-800 pb-3 border-b border-gray-100">Photo</h2>
        <div className="flex items-start gap-4">
          <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 shrink-0">
            {photoUrl ? (
              <Image src={photoUrl} alt="Preview" width={80} height={80} className="w-full h-full object-cover" onError={() => {}} />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-300 text-2xl">👤</div>
            )}
          </div>
          <div className="flex-1">
            <label className={labelCls}>Photo URL</label>
            <input value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} className={inputCls} placeholder="https://images.unsplash.com/..." />
            <p className="text-xs text-gray-400 mt-1">Paste any image URL. Unsplash photos work great.</p>
          </div>
        </div>
      </div>

      {/* Basic Info */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
        <h2 className="text-base font-bold text-gray-800 pb-3 border-b border-gray-100">Basic Information</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div><label className={labelCls}>Full Name *</label><input value={name} onChange={(e) => setName(e.target.value)} required className={inputCls} placeholder="Dr. Rajesh Kumar" /></div>
          <div><label className={labelCls}>Specialty *</label><input value={specialty} onChange={(e) => setSpecialty(e.target.value)} required className={inputCls} placeholder="Emergency Medicine" /></div>
          <div><label className={labelCls}>Title / Position</label><input value={title} onChange={(e) => setTitle(e.target.value)} className={inputCls} placeholder="Director, Emergency Medicine" /></div>
          <div><label className={labelCls}>Credentials</label><input value={credentials} onChange={(e) => setCredentials(e.target.value)} className={inputCls} placeholder="MD, FCCM, FCEM" /></div>
          <div><label className={labelCls}>Experience</label><input value={experience} onChange={(e) => setExperience(e.target.value)} className={inputCls} placeholder="25+ Years" /></div>
          <div><label className={labelCls}>Fellows Trained</label><input value={fellowsTrained} onChange={(e) => setFellowsTrained(e.target.value)} className={inputCls} placeholder="500+" /></div>
        </div>
        <div><label className={labelCls}>Bio</label><textarea value={bio} onChange={(e) => setBio(e.target.value)} rows={3} className={inputCls} /></div>
        <div><label className={labelCls}>Quote</label><textarea value={quote} onChange={(e) => setQuote(e.target.value)} rows={2} className={inputCls} placeholder="An inspiring quote from this doctor..." /></div>
      </div>

      {/* Display */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
        <h2 className="text-base font-bold text-gray-800 pb-3 border-b border-gray-100">Display & Style</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div><label className={labelCls}>Student Rating</label><input type="number" step="0.1" min="1" max="5" value={studentRating} onChange={(e) => setStudentRating(e.target.value)} className={inputCls} /></div>
          <div>
            <label className={labelCls}>Accent Color</label>
            <div className="flex gap-2 items-center">
              <input type="color" value={accentColor} onChange={(e) => setAccentColor(e.target.value)} className="w-10 h-10 rounded-lg border border-gray-200 cursor-pointer" />
              <input value={accentColor} onChange={(e) => setAccentColor(e.target.value)} className={`${inputCls} flex-1`} />
            </div>
          </div>
          <div>
            <label className={labelCls}>Light Background</label>
            <div className="flex gap-2 items-center">
              <input type="color" value={accentLight} onChange={(e) => setAccentLight(e.target.value)} className="w-10 h-10 rounded-lg border border-gray-200 cursor-pointer" />
              <input value={accentLight} onChange={(e) => setAccentLight(e.target.value)} className={`${inputCls} flex-1`} />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 pt-1">
          <button type="button" onClick={() => setIsPublished((v) => !v)} className={`relative w-11 h-6 rounded-full transition-all ${isPublished ? 'bg-emerald-500' : 'bg-gray-300'}`}>
            <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${isPublished ? 'translate-x-5' : 'translate-x-0'}`} />
          </button>
          <span className="text-sm font-medium text-gray-700">{isPublished ? 'Published' : 'Draft'}</span>
        </div>
      </div>

      {/* Specialties */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-3">
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <h2 className="text-base font-bold text-gray-800">Specialties / Sub-topics</h2>
          <button type="button" onClick={() => setSpecialties([...specialties, ''])} className="flex items-center gap-1 text-xs text-[#213F5F] font-semibold hover:underline"><PlusCircle className="w-3.5 h-3.5" /> Add</button>
        </div>
        {specialties.map((s, i) => (
          <div key={i} className="flex gap-2">
            <input value={s} onChange={(e) => { const a=[...specialties];a[i]=e.target.value;setSpecialties(a); }} className={inputCls} placeholder={`Specialty ${i+1}`} />
            <button type="button" onClick={() => setSpecialties(specialties.filter((_,idx)=>idx!==i))} className="p-2 text-gray-400 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
          </div>
        ))}
      </div>

      {/* Highlights */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-3">
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <h2 className="text-base font-bold text-gray-800">Achievements / Highlights</h2>
          <button type="button" onClick={() => setHighlights([...highlights, ''])} className="flex items-center gap-1 text-xs text-[#213F5F] font-semibold hover:underline"><PlusCircle className="w-3.5 h-3.5" /> Add</button>
        </div>
        {highlights.map((h, i) => (
          <div key={i} className="flex gap-2">
            <input value={h} onChange={(e) => { const a=[...highlights];a[i]=e.target.value;setHighlights(a); }} className={inputCls} placeholder={`Award or achievement ${i+1}`} />
            <button type="button" onClick={() => setHighlights(highlights.filter((_,idx)=>idx!==i))} className="p-2 text-gray-400 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
          </div>
        ))}
      </div>

      <div className="flex justify-end pb-8">
        <button type="submit" disabled={saving} className="flex items-center gap-2 px-6 py-3 bg-[#213F5F] hover:bg-[#1a3250] text-white rounded-xl font-semibold disabled:opacity-60 transition-all">
          <Save className="w-4 h-4" />{saving ? 'Saving…' : (isEdit ? 'Save Changes' : 'Add Faculty')}
        </button>
      </div>
    </form>
  );
}

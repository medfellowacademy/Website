'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PlusCircle, Edit2, Trash2, Eye, EyeOff } from 'lucide-react';
import { type CmsFaculty } from '@/lib/cms';

export default function FacultyPage() {
  const [faculty, setFaculty] = useState<CmsFaculty[]>([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState('');

  async function load() {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/faculty');
      const json = await res.json();
      if (json.data) setFaculty(json.data);
    } catch {}
    setLoading(false);
  }
  useEffect(() => { load(); }, []);

  function showToast(msg: string) { setToast(msg); setTimeout(() => setToast(''), 3000); }

  async function handleDelete(id: string, name: string) {
    if (!confirm(`Delete "${name}"?`)) return;
    try {
      const res = await fetch(`/api/admin/faculty/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error();
      setFaculty((f) => f.filter((x) => x.id !== id));
      showToast('Faculty member deleted');
    } catch { showToast('Delete failed'); }
  }

  async function handleToggle(f: CmsFaculty) {
    try {
      const res = await fetch(`/api/admin/faculty/${f.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ is_published: !f.is_published }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error);
      setFaculty((prev) => prev.map((x) => x.id === f.id ? json.data : x));
      showToast(json.data.is_published ? 'Published' : 'Set to draft');
    } catch { showToast('Update failed'); }
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {toast && <div className="fixed top-4 right-4 z-50 bg-gray-900 text-white px-4 py-3 rounded-xl shadow-xl text-sm font-medium">{toast}</div>}

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Faculty</h1>
          <p className="text-gray-400 text-sm mt-0.5">{faculty.length} faculty members</p>
        </div>
        <Link href="/admin/faculty/new" className="flex items-center gap-2 px-4 py-2.5 bg-[#15401E] hover:bg-[#0f2e15] text-white rounded-xl text-sm font-semibold transition-all">
          <PlusCircle className="w-4 h-4" /> Add Faculty
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-gray-400">Loading…</div>
        ) : faculty.length === 0 ? (
          <div className="p-12 text-center">
            <div className="text-4xl mb-3">👩‍⚕️</div>
            <div className="text-gray-500 font-semibold mb-2">No faculty members yet</div>
            <Link href="/admin/faculty/new" className="text-[#15401E] font-semibold text-sm hover:underline">+ Add Faculty Member</Link>
          </div>
        ) : (
          <div className="divide-y divide-gray-50">
            {faculty.map((f) => (
              <div key={f.id} className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors">
                {/* Photo */}
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                  {f.photo_url ? (
                    <Image src={f.photo_url} alt={f.name} width={48} height={48} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white text-sm font-bold" style={{ background: f.accent_color }}>
                      {f.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-800">{f.name}</div>
                  <div className="text-sm text-gray-400 truncate">{f.title} · {f.specialty}</div>
                </div>

                <div className="hidden md:block text-sm text-gray-400 shrink-0">{f.credentials}</div>
                <div className="hidden lg:block text-sm text-gray-400 shrink-0">⭐ {f.student_rating}</div>

                <button
                  onClick={() => handleToggle(f)}
                  className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full transition-all shrink-0 ${
                    f.is_published ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {f.is_published ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                  {f.is_published ? 'Live' : 'Draft'}
                </button>

                <div className="flex items-center gap-1 shrink-0">
                  <Link href={`/admin/faculty/${f.id}`} className="p-1.5 text-gray-400 hover:text-[#15401E] hover:bg-gray-100 rounded-lg transition-all">
                    <Edit2 className="w-3.5 h-3.5" />
                  </Link>
                  <button onClick={() => handleDelete(f.id, f.name)} className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { PlusCircle, Edit2, Trash2, Eye, EyeOff, Search, ExternalLink } from 'lucide-react';
import { getPrograms, deleteProgram, toggleProgramPublish, CmsProgram } from '@/lib/cms';

export default function ProgramsPage() {
  const [programs, setPrograms] = useState<CmsProgram[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [toast, setToast] = useState('');

  async function load() {
    setLoading(true);
    try { setPrograms(await getPrograms()); } catch {}
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  }

  async function handleDelete(id: string, name: string) {
    if (!confirm(`Delete "${name}"? This cannot be undone.`)) return;
    try {
      await deleteProgram(id);
      setPrograms((p) => p.filter((x) => x.id !== id));
      showToast('Program deleted');
    } catch { showToast('Delete failed'); }
  }

  async function handleToggle(p: CmsProgram) {
    try {
      const updated = await toggleProgramPublish(p.id, p.is_published);
      setPrograms((prev) => prev.map((x) => x.id === p.id ? updated : x));
      showToast(updated.is_published ? 'Program published' : 'Program set to draft');
    } catch { showToast('Update failed'); }
  }

  const filtered = programs.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.slug.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {toast && (
        <div className="fixed top-4 right-4 z-50 bg-gray-900 text-white px-4 py-3 rounded-xl shadow-xl text-sm font-medium">
          {toast}
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Programs</h1>
          <p className="text-gray-400 text-sm mt-0.5">{programs.length} total programs</p>
        </div>
        <Link
          href="/admin/programs/new"
          className="flex items-center gap-2 px-4 py-2.5 bg-[#15401E] hover:bg-[#0f2e15] text-white rounded-xl text-sm font-semibold transition-all"
        >
          <PlusCircle className="w-4 h-4" />
          Add Program
        </Link>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search programs…"
          className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#15401E]/20 focus:border-[#15401E] bg-white"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-gray-400">Loading programs…</div>
        ) : filtered.length === 0 ? (
          <div className="p-12 text-center">
            <div className="text-4xl mb-3">📋</div>
            <div className="text-gray-500 font-semibold mb-1">No programs found</div>
            <p className="text-gray-400 text-sm mb-4">
              {search ? 'Try a different search term' : 'Create your first fellowship program'}
            </p>
            {!search && (
              <Link href="/admin/programs/new" className="text-[#15401E] font-semibold text-sm hover:underline">
                + Add New Program
              </Link>
            )}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-5 py-3 font-semibold text-gray-500 text-xs uppercase tracking-wide">Program</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-500 text-xs uppercase tracking-wide hidden md:table-cell">Duration</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-500 text-xs uppercase tracking-wide hidden lg:table-cell">Price</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-500 text-xs uppercase tracking-wide">Status</th>
                  <th className="text-right px-5 py-3 font-semibold text-gray-500 text-xs uppercase tracking-wide">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map((p) => (
                  <tr key={p.id} className="hover:bg-gray-50/60 transition-colors">
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{p.icon}</span>
                        <div>
                          <div className="font-semibold text-gray-800">{p.name}</div>
                          <div className="text-xs text-gray-400">{p.slug}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 text-gray-500 hidden md:table-cell">{p.duration}</td>
                    <td className="px-4 py-3.5 text-gray-500 hidden lg:table-cell">
                      {p.online_price ? `₹${p.online_price.toLocaleString('en-IN')}` : '—'}
                    </td>
                    <td className="px-4 py-3.5">
                      <button
                        onClick={() => handleToggle(p)}
                        className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full transition-all ${
                          p.is_published
                            ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                            : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                        }`}
                      >
                        {p.is_published ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                        {p.is_published ? 'Live' : 'Draft'}
                      </button>
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center justify-end gap-2">
                        <a
                          href={`/programs/${p.slug}`}
                          target="_blank"
                          title="Preview"
                          className="p-1.5 text-gray-400 hover:text-[#15401E] hover:bg-gray-100 rounded-lg transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        <Link
                          href={`/admin/programs/${p.id}`}
                          className="p-1.5 text-gray-400 hover:text-[#15401E] hover:bg-gray-100 rounded-lg transition-all"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </Link>
                        <button
                          onClick={() => handleDelete(p.id, p.name)}
                          className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

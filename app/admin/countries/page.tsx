'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Plus, Globe, Edit, Trash2, Eye, EyeOff, ExternalLink } from 'lucide-react';

interface CountryPage {
  id: string;
  slug: string;
  country_name: string;
  is_published: boolean;
  meta_title: string;
  sort_order: number;
  updated_at: string;
}

export default function CountriesAdminPage() {
  const [pages, setPages] = useState<CountryPage[]>([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState('');

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  }

  async function load() {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/countries');
      const json = await res.json();
      setPages(json.data ?? []);
    } catch {
      showToast('Failed to load country pages');
    }
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function togglePublish(page: CountryPage) {
    try {
      await fetch(`/api/admin/countries/${page.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ is_published: !page.is_published }),
      });
      showToast(page.is_published ? 'Page unpublished' : 'Page published');
      load();
    } catch {
      showToast('Update failed');
    }
  }

  async function handleDelete(page: CountryPage) {
    if (!confirm(`Delete "${page.country_name}" page? This cannot be undone.`)) return;
    try {
      await fetch(`/api/admin/countries/${page.id}`, { method: 'DELETE' });
      showToast('Page deleted');
      load();
    } catch {
      showToast('Delete failed');
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {toast && (
        <div className={`fixed top-4 right-4 z-50 px-4 py-3 rounded-xl shadow-xl text-sm font-medium text-white ${toast.includes('fail') || toast.includes('Delete') ? 'bg-red-600' : 'bg-emerald-600'}`}>
          {toast}
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Country Landing Pages</h1>
          <p className="text-gray-400 text-sm mt-0.5">Manage country-specific landing pages (Dubai, Saudi Arabia, Kuwait, etc.)</p>
        </div>
        <Link
          href="/admin/countries/new"
          className="flex items-center gap-2 px-4 py-2.5 bg-[#15401E] text-white rounded-xl text-sm font-semibold hover:bg-[#0f2e15] transition-all"
        >
          <Plus className="w-4 h-4" />
          New Country Page
        </Link>
      </div>

      {/* Info box */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
        <strong>How it works:</strong> Each country page lives at <code className="bg-blue-100 px-1 rounded">/{'{slug}'}/programs</code> — e.g. <code className="bg-blue-100 px-1 rounded">/dubai/programs</code>, <code className="bg-blue-100 px-1 rounded">/kuwait/programs</code>. Add any new country below and it instantly gets its own URL.
      </div>

      {/* List */}
      {loading ? (
        <div className="text-center py-12 text-gray-400">Loading…</div>
      ) : pages.length === 0 ? (
        <div className="text-center py-12 text-gray-400 bg-white rounded-2xl border border-gray-100">
          No country pages yet. Create one to get started.
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="border-b border-gray-100 bg-gray-50">
              <tr>
                <th className="text-left px-5 py-3 font-semibold text-gray-600">Country</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-600">URL</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-600">Status</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-600">Updated</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {pages.map((page) => (
                <tr key={page.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3.5 font-medium text-gray-900 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-gray-400 shrink-0" />
                    {page.country_name}
                  </td>
                  <td className="px-5 py-3.5">
                    <a
                      href={`/${page.slug}/programs`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#15401E] hover:underline flex items-center gap-1"
                    >
                      /{page.slug}/programs
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${page.is_published ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-500'}`}>
                      {page.is_published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-gray-400">
                    {page.updated_at ? new Date(page.updated_at).toLocaleDateString() : '—'}
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-1 justify-end">
                      <button
                        onClick={() => togglePublish(page)}
                        title={page.is_published ? 'Unpublish' : 'Publish'}
                        className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all"
                      >
                        {page.is_published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                      <Link
                        href={`/admin/countries/${page.id}`}
                        className="p-1.5 rounded-lg text-gray-400 hover:text-[#15401E] hover:bg-gray-100 transition-all"
                      >
                        <Edit className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => handleDelete(page)}
                        className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-all"
                      >
                        <Trash2 className="w-4 h-4" />
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
  );
}

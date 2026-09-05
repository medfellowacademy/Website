'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Plus, Newspaper, Edit, Trash2, Eye, EyeOff, ExternalLink } from 'lucide-react';

interface BlogPostRow {
  id: string;
  slug: string;
  title: string;
  category: string;
  is_published: boolean;
  updated_at: string;
}

export default function BlogAdminPage() {
  const [posts, setPosts] = useState<BlogPostRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState('');

  function showToast(msg: string) { setToast(msg); setTimeout(() => setToast(''), 3000); }

  async function load() {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/blog-posts');
      const json = await res.json();
      setPosts(json.data ?? []);
    } catch { showToast('Failed to load posts'); }
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function togglePublish(post: BlogPostRow) {
    try {
      await fetch(`/api/admin/blog-posts/${post.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ is_published: !post.is_published }),
      });
      showToast(post.is_published ? 'Post unpublished' : 'Post published');
      load();
    } catch { showToast('Update failed'); }
  }

  async function handleDelete(post: BlogPostRow) {
    if (!confirm(`Delete "${post.title}"? This cannot be undone.`)) return;
    try {
      await fetch(`/api/admin/blog-posts/${post.id}`, { method: 'DELETE' });
      showToast('Post deleted');
      load();
    } catch { showToast('Delete failed'); }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {toast && (
        <div className={`fixed top-4 right-4 z-50 px-4 py-3 rounded-xl shadow-xl text-sm font-medium text-white ${toast.includes('fail') ? 'bg-red-600' : 'bg-emerald-600'}`}>
          {toast}
        </div>
      )}

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Blog Posts</h1>
          <p className="text-gray-400 text-sm mt-0.5">Write and publish blog posts without a code deploy</p>
        </div>
        <Link
          href="/admin/blog/new"
          className="flex items-center gap-2 px-4 py-2.5 bg-[#15401E] text-white rounded-xl text-sm font-semibold hover:bg-[#0f2e15] transition-all"
        >
          <Plus className="w-4 h-4" />
          New Post
        </Link>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
        <strong>How it works:</strong> Each post lives at <code className="bg-blue-100 px-1 rounded">/blog/{'{slug}'}</code> and appears on the <code className="bg-blue-100 px-1 rounded">/blog</code> index once published. Write the body in Markdown — headings, lists, links, and tables all work.
      </div>

      {loading ? (
        <div className="text-center py-12 text-gray-400">Loading…</div>
      ) : posts.length === 0 ? (
        <div className="text-center py-16 text-gray-400 bg-white rounded-2xl border border-gray-100">
          <Newspaper className="w-10 h-10 mx-auto mb-3 opacity-30" />
          <p className="font-medium">No blog posts yet</p>
          <p className="text-sm mt-1">Write your first post to get started.</p>
          <Link href="/admin/blog/new" className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-[#15401E] text-white rounded-xl text-sm font-semibold hover:bg-[#0f2e15] transition-all">
            <Plus className="w-4 h-4" /> Create First Post
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="border-b border-gray-100 bg-gray-50">
              <tr>
                <th className="text-left px-5 py-3 font-semibold text-gray-600">Title</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-600">URL</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-600">Category</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-600">Status</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-600">Updated</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3.5 font-medium text-gray-900 flex items-center gap-2">
                    <Newspaper className="w-4 h-4 text-gray-400 shrink-0" />
                    {post.title}
                  </td>
                  <td className="px-5 py-3.5">
                    <a href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer" className="text-[#15401E] hover:underline flex items-center gap-1">
                      /blog/{post.slug} <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                  <td className="px-5 py-3.5 text-gray-500">{post.category}</td>
                  <td className="px-5 py-3.5">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${post.is_published ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-500'}`}>
                      {post.is_published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-gray-400">
                    {new Date(post.updated_at).toLocaleDateString()}
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-1 justify-end">
                      <button onClick={() => togglePublish(post)} title={post.is_published ? 'Unpublish' : 'Publish'} className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all">
                        {post.is_published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                      <Link href={`/admin/blog/${post.id}`} className="p-1.5 rounded-lg text-gray-400 hover:text-[#15401E] hover:bg-gray-100 transition-all">
                        <Edit className="w-4 h-4" />
                      </Link>
                      <button onClick={() => handleDelete(post)} className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-all">
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

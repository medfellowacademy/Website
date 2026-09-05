'use client';
import { useEffect, useState, use } from 'react';
import BlogForm, { type BlogFormData } from '../_form';

export default function EditBlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [data, setData] = useState<BlogFormData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/admin/blog-posts/${id}`)
      .then(r => r.json())
      .then(j => { setData(j.data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="p-12 text-center text-gray-400">Loading…</div>;
  if (!data)   return <div className="p-12 text-center text-red-400">Post not found.</div>;

  return <BlogForm initial={data} postId={id} isNew={false} />;
}

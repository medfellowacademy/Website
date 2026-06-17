'use client';
import { useEffect, useState, use } from 'react';
import PageForm, { type PageFormData } from '../_form';

export default function EditCustomPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [data, setData] = useState<PageFormData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/admin/custom-pages/${id}`)
      .then(r => r.json())
      .then(j => { setData(j.data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="p-12 text-center text-gray-400">Loading…</div>;
  if (!data)   return <div className="p-12 text-center text-red-400">Page not found.</div>;

  return <PageForm initial={data} pageId={id} isNew={false} />;
}

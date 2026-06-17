'use client';
import { useEffect, useState, use } from 'react';
import CountryForm, { type CountryFormData } from '../_form';

export default function EditCountryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [data, setData] = useState<CountryFormData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/admin/countries/${id}`)
      .then(r => r.json())
      .then(j => { setData(j.data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="p-12 text-center text-gray-400">Loading…</div>;
  if (!data)   return <div className="p-12 text-center text-red-400">Country page not found.</div>;

  return <CountryForm initial={data} pageId={id} isNew={false} />;
}

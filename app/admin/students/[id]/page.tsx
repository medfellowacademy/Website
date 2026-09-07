'use client';
import { useEffect, useState, use } from 'react';
import StudentForm, { type StudentFormData } from '../_form';

export default function EditStudentRecord({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [data, setData] = useState<StudentFormData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/admin/students/${id}`)
      .then(r => r.json())
      .then(j => { setData(j.data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="p-12 text-center text-gray-400">Loading…</div>;
  if (!data)   return <div className="p-12 text-center text-red-400">Record not found.</div>;

  return <StudentForm initial={data} recordId={id} isNew={false} />;
}

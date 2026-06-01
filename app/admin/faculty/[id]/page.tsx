import { getFacultyMember } from '@/lib/cms';
import FacultyForm from '../_form';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function EditFacultyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const faculty = await getFacultyMember(id);
    return <FacultyForm faculty={faculty} />;
  } catch {
    notFound();
  }
}

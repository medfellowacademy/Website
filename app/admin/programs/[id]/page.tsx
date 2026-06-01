import { getProgram, getCurriculumModules } from '@/lib/cms';
import ProgramForm from '../_form';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function EditProgramPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const [program, modules] = await Promise.all([
      getProgram(id),
      getCurriculumModules(id),
    ]);
    return <ProgramForm program={program} modules={modules} />;
  } catch {
    notFound();
  }
}

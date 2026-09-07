import { NextResponse } from 'next/server';
import { getStudents, createStudent } from '@/lib/cms';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const data = await getStudents();
    return NextResponse.json({ data });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const student = await createStudent(body);
    return NextResponse.json({ data: student });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

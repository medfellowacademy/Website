import { NextResponse } from 'next/server';
import { getBlogPosts, createBlogPost } from '@/lib/cms';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const data = await getBlogPosts(false);
    return NextResponse.json({ data });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const post = await createBlogPost(body);
    return NextResponse.json({ data: post });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

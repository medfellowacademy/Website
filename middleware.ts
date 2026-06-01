import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const PUBLIC_PATHS = ['/admin/login', '/api/cms/login'];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Only guard /admin routes
  if (!pathname.startsWith('/admin')) return NextResponse.next();

  // Allow login page and login API
  if (PUBLIC_PATHS.some((p) => pathname.startsWith(p))) return NextResponse.next();

  const token = req.cookies.get('cms_token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }

  try {
    const secret = new TextEncoder().encode(process.env.CMS_JWT_SECRET ?? 'fallback-secret');
    await jwtVerify(token, secret);
    return NextResponse.next();
  } catch {
    const response = NextResponse.redirect(new URL('/admin/login', req.url));
    response.cookies.delete('cms_token');
    return response;
  }
}

export const config = {
  matcher: ['/admin/:path*'],
};

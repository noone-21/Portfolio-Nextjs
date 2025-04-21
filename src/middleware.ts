import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Add cache control headers for static assets
  if (request.nextUrl.pathname.match(/\.(jpg|jpeg|gif|png|svg|ico|css|js)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }

  // Add cache control headers for API responses
  if (request.nextUrl.pathname.startsWith('/api/')) {
    // Don't cache POST requests
    if (request.method === 'POST') {
      response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate');
    } else {
      // Cache GET requests for 5 minutes
      response.headers.set('Cache-Control', 'public, max-age=300, stale-while-revalidate=60');
    }
  }

  // Add security headers
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
}; 
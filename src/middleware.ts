import { NextRequest, NextResponse } from 'next/server';
import {
  getGoogleSiteVerificationCode,
  getGoogleVerificationHtmlBody,
} from '@/lib/google-search-console';
import { securityHeaders, checkRateLimit, rateLimitConfig } from '@/lib/security';

function googleSearchConsoleHtmlVerification(request: NextRequest): NextResponse | null {
  const match = request.nextUrl.pathname.match(/^\/google([a-zA-Z0-9_-]+)\.html$/);
  if (!match) return null;

  const verificationCode = getGoogleSiteVerificationCode();
  if (!verificationCode || match[1] !== verificationCode) {
    return new NextResponse('Not Found', { status: 404 });
  }

  return new NextResponse(getGoogleVerificationHtmlBody(verificationCode), {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}

export function middleware(request: NextRequest) {
  const gscResponse = googleSearchConsoleHtmlVerification(request);
  if (gscResponse) return gscResponse;

  const response = NextResponse.next();
  
  // Add security headers
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });
  
  // Rate limiting for API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
    
    // Apply different rate limits based on endpoint
    let config = rateLimitConfig.contactForm; // default
    
    if (request.nextUrl.pathname.includes('/search')) {
      config = rateLimitConfig.search;
    } else if (request.nextUrl.pathname.includes('/home-value')) {
      config = rateLimitConfig.homeValue;
    }
    
    if (!checkRateLimit(ip, config)) {
      return new NextResponse(
        JSON.stringify({ 
          error: 'Rate limit exceeded. Please try again later.',
          code: 'RATE_LIMIT_EXCEEDED'
        }),
        { 
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': '60'
          }
        }
      );
    }
  }
  
  // Add HSTS header for HTTPS
  if (request.nextUrl.protocol === 'https:') {
    response.headers.set(
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains; preload'
    );
  }
  
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
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
};
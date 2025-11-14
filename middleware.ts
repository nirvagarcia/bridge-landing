import { NextRequest, NextResponse } from 'next/server';
import { APP_CONFIG } from './utils/constants';

export function middleware(request: NextRequest) {
  // Skip middleware for static files, API routes, and Next.js internals
  const pathname = request.nextUrl.pathname;
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_vercel') ||
    pathname.includes('.') ||
    pathname.startsWith('/favicon')
  ) {
    return NextResponse.next();
  }

  // Get current locale from cookie or detect from Accept-Language header
  const cookieLocale = request.cookies.get('lang')?.value;
  let locale = cookieLocale;

  if (!locale) {
    // Detect locale from Accept-Language header
    const acceptLanguage = request.headers.get('Accept-Language');
    if (acceptLanguage) {
      // Parse Accept-Language header to find best match
      const languages = acceptLanguage
        .split(',')
        .map(lang => lang.split(';')[0].trim().toLowerCase());

      // Find first supported language
      locale = languages.find(
        lang =>
          APP_CONFIG.languages.includes(lang as any) ||
          APP_CONFIG.languages.includes(lang.split('-')[0] as any)
      );

      // If no match found, use default
      if (!locale) {
        locale = APP_CONFIG.defaultLanguage;
      } else if (!APP_CONFIG.languages.includes(locale as any)) {
        // Handle language variants (e.g., en-US -> en)
        locale = locale.split('-')[0];
        if (!APP_CONFIG.languages.includes(locale as any)) {
          locale = APP_CONFIG.defaultLanguage;
        }
      }
    } else {
      locale = APP_CONFIG.defaultLanguage;
    }
  }

  // Ensure locale is valid
  if (!APP_CONFIG.languages.includes(locale as any)) {
    locale = APP_CONFIG.defaultLanguage;
  }

  // Create response
  const response = NextResponse.next();

  // Set locale cookie if it doesn't exist or is different
  if (cookieLocale !== locale) {
    response.cookies.set('lang', locale, {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 365, // 1 year
    });
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)', '/'],
};

import createMiddleware from 'next-intl/middleware';
import { APP_CONFIG } from './utils/constants';

export default createMiddleware({
  locales: APP_CONFIG.languages,
  defaultLocale: APP_CONFIG.defaultLanguage,
  localePrefix: 'always'
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
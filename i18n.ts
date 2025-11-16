import { getRequestConfig } from 'next-intl/server';
import { routing } from './i18n.routing';
import { cookies } from 'next/headers';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale) {
    const cookieStore = await cookies();
    const localeCookie = cookieStore.get('NEXT_LOCALE');
    locale = localeCookie?.value || routing.defaultLocale;
  }

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./shared/lang/${locale}.json`)).default,
  };
});

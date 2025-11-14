import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';
import { APP_CONFIG } from './utils/constants';

export default getRequestConfig(async () => {
  // Get locale from cookie
  const cookieStore = await cookies();
  let locale = cookieStore.get('lang')?.value || APP_CONFIG.defaultLanguage;

  // Ensure locale is valid
  if (!APP_CONFIG.languages.includes(locale as any)) {
    locale = APP_CONFIG.defaultLanguage;
  }

  try {
    return {
      locale,
      messages: (await import(`./shared/lang/${locale}.json`)).default,
    };
  } catch (error) {
    // Fallback to default locale if translation file is not found
    return {
      locale: APP_CONFIG.defaultLanguage,
      messages: (
        await import(`./shared/lang/${APP_CONFIG.defaultLanguage}.json`)
      ).default,
    };
  }
});

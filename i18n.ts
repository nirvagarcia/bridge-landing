import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { APP_CONFIG } from './utils/constants';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!APP_CONFIG.languages.includes(locale as any)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`./shared/lang/${locale}.json`)).default,
  };
});

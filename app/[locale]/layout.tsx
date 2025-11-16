import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { generateMetadata as generateSEOMetadata } from '../../utils/seo.config';
import { ClientThemeProvider } from '../../shared/components/ClientThemeProvider';
import { routing } from '../../i18n.routing';

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const validLocale = routing.locales.includes(locale as any)
    ? locale
    : routing.defaultLocale;

  return generateSEOMetadata(validLocale);
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <ClientThemeProvider>{children}</ClientThemeProvider>
    </NextIntlClientProvider>
  );
}

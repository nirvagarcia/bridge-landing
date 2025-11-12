import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { generateMetadata as generateSEOMetadata } from '../../utils/seo.config';
import { ClientThemeProvider } from '../../shared/components/ClientThemeProvider';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generateSEOMetadata(locale);
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0B7285" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ClientThemeProvider>{children}</ClientThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

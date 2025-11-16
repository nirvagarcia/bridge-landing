import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { generateMetadata as generateSEOMetadata } from '../utils/seo.config';
import { ClientThemeProvider } from '../shared/components/ClientThemeProvider';
import { APP_CONFIG } from '../utils/constants';
import { Viewport } from 'next';

export const dynamic = 'force-static';

export async function generateMetadata() {
  const locale = APP_CONFIG.defaultLanguage;
  return generateSEOMetadata(locale);
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B7285',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = APP_CONFIG.defaultLanguage;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ClientThemeProvider>{children}</ClientThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

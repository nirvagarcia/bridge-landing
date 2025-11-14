import { Metadata } from 'next';
import { APP_CONFIG } from './constants';

export const seoConfig = {
  title: 'Bridge | Traduce LSP en tiempo real',
  description:
    'Bridge es una app de inteligencia artificial que traduce Lengua de Señas Peruana (LSP) a texto y voz en tiempo real. Inclusión e innovación desde Lima, Perú.',
  keywords:
    'Bridge app, lenguaje de señas peruano, LSP, inclusión, IA, accesibilidad, traducción en tiempo real, inteligencia artificial, Perú, Lima, Nirvana García, Michelle Moreno',
  openGraph: {
    title: 'Bridge | Traduce LSP en tiempo real',
    description:
      'Aplicación peruana que traduce LSP a texto y voz mediante IA.',
    url: 'https://bridge.dev',
    images: ['/og-image.jpg'],
    type: 'website',
    locale: 'es_ES',
    siteName: 'Bridge App',
  },
  canonical: 'https://bridge.dev',
  locale: 'es_ES',
  twitter: {
    card: 'summary_large_image',
    title: 'Bridge | Traduce LSP en tiempo real',
    description:
      'Aplicación peruana que traduce LSP a texto y voz mediante IA.',
    images: ['/og-image.jpg'],
    creator: '@bridge_app',
  },
};

export const generateMetadata = (
  locale: string,
  title?: string,
  description?: string,
  pathname?: string
): Metadata => {
  const isSpanish = locale === 'es';
  const baseUrl = APP_CONFIG.url;
  const url = pathname ? `${baseUrl}${pathname}` : baseUrl;

  const localizedTitle =
    title ||
    (isSpanish ? seoConfig.title : 'Bridge | Translate PSL in real-time');
  const localizedDescription =
    description ||
    (isSpanish
      ? seoConfig.description
      : 'Bridge is an AI-powered app that translates Peruvian Sign Language (PSL) to text and voice in real-time. Inclusion and innovation from Lima, Peru.');

  return {
    metadataBase: new URL(baseUrl),
    title: localizedTitle,
    description: localizedDescription,
    keywords: seoConfig.keywords,
    robots: 'index, follow',
    manifest: '/manifest.json',
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
        { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
    openGraph: {
      ...seoConfig.openGraph,
      title: localizedTitle,
      description: localizedDescription,
      url,
      locale: isSpanish ? 'es_ES' : 'en_US',
    },
    twitter: {
      ...seoConfig.twitter,
      title: localizedTitle,
      description: localizedDescription,
    },
    alternates: {
      canonical: url,
      languages: {
        es: `${baseUrl}/es`,
        en: `${baseUrl}/en`,
      },
    },
  };
};

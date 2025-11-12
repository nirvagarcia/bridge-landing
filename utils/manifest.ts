import { APP_CONFIG } from './constants';

export const manifest = {
  name: APP_CONFIG.name,
  short_name: APP_CONFIG.name,
  description: APP_CONFIG.description,
  start_url: '/',
  display: 'standalone',
  background_color: '#FAFAFA',
  theme_color: '#0B7285',
  icons: [
    {
      src: '/favicon-16x16.png',
      sizes: '16x16',
      type: 'image/png',
    },
    {
      src: '/favicon-32x32.png',
      sizes: '32x32',
      type: 'image/png',
    },
    {
      src: '/apple-touch-icon.png',
      sizes: '180x180',
      type: 'image/png',
    },
    {
      src: '/android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: '/android-chrome-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
  categories: ['productivity', 'accessibility', 'education'],
  lang: 'es-PE',
};
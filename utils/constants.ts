export const APP_CONFIG = {
  name: 'Bridge',
  tagline: 'Traduce LSP en tiempo real',
  description:
    'Bridge es una app de inteligencia artificial que traduce Lengua de Señas Peruana (LSP) a texto y voz en tiempo real. Inclusión e innovación desde Lima, Perú.',
  url: 'https://bridge.dev',
  email: 'hello@bridge.dev',
  social: {
    github: 'https://github.com/Bridge-LSP',
    linkedin:
      'https://www.linkedin.com/company/upc-facultad-de-ingenier%C3%ADa/',
    instagram: 'https://www.instagram.com/upcedu/',
  },
  creators: [
    {
      name: 'Nirvana García',
      role: 'Founder & Developer',
      linkedin: 'https://linkedin.com/in/nirvagarcia',
      github: 'https://github.com/nirvagarcia',
    },
    {
      name: 'Michelle Moreno',
      role: 'Co-Founder & UX Designer',
      linkedin: 'https://www.linkedin.com/in/michelle-moreno-best-1ba33b297/',
    },
  ],
  location: 'Lima, Peru',
  version: '1.0.0',
  languages: ['es', 'en'] as const,
  defaultLanguage: 'es' as const,
};

export type Language = (typeof APP_CONFIG.languages)[number];

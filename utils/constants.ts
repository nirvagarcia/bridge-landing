export const APP_CONFIG = {
  name: 'Bridge',
  tagline: 'Traduce LSP en tiempo real',
  description:
    'Bridge es una app de inteligencia artificial que traduce Lengua de Señas Peruana (LSP) a texto y voz en tiempo real. Inclusión e innovación desde Lima, Perú.',
  url: 'https://bridge.dev',
  email: 'hello@bridge.dev',
  social: {
    github: 'https://github.com/nirvagarcia/bridge',
    instagram: 'https://instagram.com/bridge.app',
    linkedin: 'https://linkedin.com/company/bridge-app',
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

export const SECTIONS = {
  HERO: 'hero',
  ABOUT: 'about',
  IMPACT: 'impact',
  HOW_IT_WORKS: 'how-it-works',
  TEAM: 'team',
  VISION: 'vision',
  DOWNLOAD: 'download',
  CONTACT: 'contact',
} as const;

export const BREAKPOINTS = {
  mobile: 360,
  tablet: 768,
  desktop: 1440,
} as const;

export type Language = (typeof APP_CONFIG.languages)[number];
export type Section = (typeof SECTIONS)[keyof typeof SECTIONS];

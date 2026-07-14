/**
 * Datos corporativos de MAI Softwares.
 * Regla (spec §19): no publicar campos legales vacíos ni inventar datos.
 * Los campos vacíos son PENDIENTES y no deben renderizarse en la web.
 */
export const company = {
  name: 'MAI Softwares',
  shortName: 'MAI',

  tagline: {
    es: 'Convertimos ideas digitales en productos que se pueden ver, usar y recordar.',
    en: 'We turn digital ideas into products you can see, use and remember.',
  },
  description: {
    es: 'Diseñamos y desarrollamos videojuegos, herramientas SaaS y experiencias web.',
    en: 'We design and build video games, SaaS tools and web experiences.',
  },

  contact: {
    email: '', // PENDIENTE
    phone: '', // Opcional
  },

  social: {
    linkedin: '', // PENDIENTE
    github: 'https://github.com/MAI-Software',
    x: '', // PENDIENTE
    instagram: '', // PENDIENTE
    youtube: '', // PENDIENTE
  },

  legal: {
    legalName: '', // PENDIENTE de constitución
    taxId: '', // PENDIENTE de constitución
    address: '', // PENDIENTE de constitución
    status: 'pending',
  },
} as const;

export type Locale = 'es' | 'en';

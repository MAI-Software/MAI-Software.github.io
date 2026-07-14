import type { Locale } from './company';

export interface NavItem {
  label: Record<Locale, string>;
  href: Record<Locale, string>;
}

export const mainNav: NavItem[] = [
  {
    label: { es: 'Proyectos', en: 'Projects' },
    href: { es: '/proyectos', en: '/en/projects' },
  },
  {
    label: { es: 'Videojuegos', en: 'Games' },
    href: { es: '/videojuegos', en: '/en/games' },
  },
  {
    label: { es: 'SaaS', en: 'SaaS' },
    href: { es: '/saas', en: '/en/saas' },
  },
  {
    label: { es: 'Webs', en: 'Webs' },
    href: { es: '/webs', en: '/en/webs' },
  },
  {
    label: { es: 'Estudio', en: 'Studio' },
    href: { es: '/estudio', en: '/en/studio' },
  },
  {
    label: { es: 'Contacto', en: 'Contact' },
    href: { es: '/contacto', en: '/en/contact' },
  },
];

export const footerNav: NavItem[] = [
  ...mainNav,
  {
    label: { es: 'Legal', en: 'Legal' },
    href: { es: '/legal', en: '/en/legal' },
  },
  {
    label: { es: 'Privacidad', en: 'Privacy' },
    href: { es: '/privacidad', en: '/en/privacy' },
  },
];

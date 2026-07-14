import type { Locale } from '../data/company';

/**
 * Cadenas de interfaz. Todo texto variable vive aquí, no en componentes.
 */
export const ui = {
  es: {
    'skip.content': 'Saltar al contenido',
    'nav.menu': 'Menú',
    'nav.close': 'Cerrar menú',
    'nav.home': 'Inicio',
    'lang.switch': 'English version',
    'lang.label': 'EN',

    'hero.eyebrow': 'VIDEOJUEGOS · SAAS · EXPERIENCIAS WEB',
    'hero.title':
      'Convertimos ideas digitales en productos que se pueden ver, usar y recordar.',
    'hero.text':
      'Diseñamos y desarrollamos videojuegos, herramientas SaaS y experiencias web con una visión común: crear productos claros, sólidos y preparados para crecer.',
    'cta.explore': 'Explorar proyectos',
    'cta.talk': 'Hablemos de tu proyecto',
    'cta.contact': 'Hablemos',
    'cta.viewProject': 'Ver proyecto',
    'cta.openDemo': 'Abrir demo',

    'categories.title': 'Tres disciplinas. Una misma forma de construir.',
    'featured.label': 'Proyecto destacado',
    'feed.title': 'Últimos proyectos',
    'feed.all': 'Ver todos los proyectos',

    'process.title': 'Forma de trabajar',
    'process.1.title': 'Idea',
    'process.1.text':
      'Definimos el problema, la oportunidad y el resultado que debe conseguir el producto.',
    'process.2.title': 'Diseño y desarrollo',
    'process.2.text':
      'Construimos una experiencia clara, funcional y visualmente sólida.',
    'process.3.title': 'Lanzamiento e iteración',
    'process.3.text':
      'Publicamos, medimos y mejoramos con una base preparada para evolucionar.',

    'studio.title': 'Construimos producto, no solo pantallas.',
    'studio.text':
      'MAI Softwares combina desarrollo, diseño y pensamiento de producto para convertir ideas en experiencias digitales reales.',
    'studio.link': 'Conocer el estudio',

    'final.title': 'Tu próximo producto puede empezar con una conversación.',

    'projects.title': 'Todos los proyectos',
    'projects.intro':
      'Archivo de todo lo que construimos: videojuegos, herramientas SaaS y experiencias web.',
    'projects.filter.all': 'Todos',
    'projects.empty': 'Todavía no hay proyectos en esta categoría.',
    'projects.back': 'Volver a proyectos',
    'projects.year': 'Año',
    'projects.status': 'Estado',
    'projects.tech': 'Tecnologías',
    'projects.services': 'Servicios',
    'projects.category': 'Categoría',
    'projects.prev': 'Proyecto anterior',
    'projects.next': 'Proyecto siguiente',
    'projects.example': 'Proyecto de ejemplo',

    'studio.page.title': 'Estudio',
    'studio.page.intro':
      'MAI Softwares es un estudio de producto digital que trabaja entre software, diseño y experiencias interactivas.',
    'studio.principles.title': 'Principios',
    'studio.principle.1': 'Claridad antes que ruido.',
    'studio.principle.2': 'Producto antes que decoración.',
    'studio.principle.3': 'Tecnología al servicio de una idea.',
    'studio.principle.4': 'Velocidad sin sacrificar criterio.',
    'studio.principle.5': 'Sistemas preparados para crecer.',
    'studio.areas.title': 'Áreas',
    'studio.tech.title': 'Tecnología',
    'studio.tech.text':
      'Trabajamos con tecnologías web modernas orientadas a rendimiento: TypeScript, Astro y herramientas ligeras según cada proyecto.',

    'contact.title': 'Cuéntanos qué quieres construir.',
    'contact.text':
      'Una idea, un producto que necesita mejorar o una oportunidad que todavía no tiene forma. Empecemos por entenderla.',
    'contact.email.pending':
      'Email de contacto en preparación. Mientras tanto, puedes encontrarnos en GitHub.',

    'legal.title': 'Aviso legal',
    'legal.pending':
      'MAI Softwares se encuentra en fase de constitución. Los datos societarios se publicarán en esta página cuando el proceso esté completado.',
    'privacy.title': 'Privacidad',
    'privacy.text':
      'Esta web es un sitio estático: no utiliza cookies, no incluye herramientas de analítica y no recoge datos personales de sus visitantes.',

    'notfound.title': 'Página no encontrada',
    'notfound.text': 'La página que buscas no existe o ha cambiado de dirección.',
    'notfound.back': 'Volver al inicio',

    'footer.rights': 'Todos los derechos reservados.',
  },
  en: {
    'skip.content': 'Skip to content',
    'nav.menu': 'Menu',
    'nav.close': 'Close menu',
    'nav.home': 'Home',
    'lang.switch': 'Versión en español',
    'lang.label': 'ES',

    'hero.eyebrow': 'GAMES · SAAS · WEB EXPERIENCES',
    'hero.title':
      'We turn digital ideas into products you can see, use and remember.',
    'hero.text':
      'We design and build video games, SaaS tools and web experiences with one shared vision: creating clear, solid products that are ready to grow.',
    'cta.explore': 'Explore projects',
    'cta.talk': "Let's talk about your project",
    'cta.contact': "Let's talk",
    'cta.viewProject': 'View project',
    'cta.openDemo': 'Open demo',

    'categories.title': 'Three disciplines. One way of building.',
    'featured.label': 'Featured project',
    'feed.title': 'Latest projects',
    'feed.all': 'View all projects',

    'process.title': 'How we work',
    'process.1.title': 'Idea',
    'process.1.text':
      'We define the problem, the opportunity and the outcome the product must achieve.',
    'process.2.title': 'Design & development',
    'process.2.text':
      'We build a clear, functional and visually solid experience.',
    'process.3.title': 'Launch & iteration',
    'process.3.text':
      'We ship, measure and improve on a foundation built to evolve.',

    'studio.title': 'We build product, not just screens.',
    'studio.text':
      'MAI Softwares combines development, design and product thinking to turn ideas into real digital experiences.',
    'studio.link': 'About the studio',

    'final.title': 'Your next product can start with a conversation.',

    'projects.title': 'All projects',
    'projects.intro':
      'An archive of everything we build: video games, SaaS tools and web experiences.',
    'projects.filter.all': 'All',
    'projects.empty': 'No projects in this category yet.',
    'projects.back': 'Back to projects',
    'projects.year': 'Year',
    'projects.status': 'Status',
    'projects.tech': 'Technologies',
    'projects.services': 'Services',
    'projects.category': 'Category',
    'projects.prev': 'Previous project',
    'projects.next': 'Next project',
    'projects.example': 'Example project',

    'studio.page.title': 'Studio',
    'studio.page.intro':
      'MAI Softwares is a digital product studio working across software, design and interactive experiences.',
    'studio.principles.title': 'Principles',
    'studio.principle.1': 'Clarity over noise.',
    'studio.principle.2': 'Product over decoration.',
    'studio.principle.3': 'Technology in service of an idea.',
    'studio.principle.4': 'Speed without sacrificing judgement.',
    'studio.principle.5': 'Systems built to grow.',
    'studio.areas.title': 'Areas',
    'studio.tech.title': 'Technology',
    'studio.tech.text':
      'We work with modern, performance-oriented web technologies: TypeScript, Astro and lightweight tools chosen per project.',

    'contact.title': 'Tell us what you want to build.',
    'contact.text':
      "An idea, a product that needs improving, or an opportunity that doesn't have a shape yet. Let's start by understanding it.",
    'contact.email.pending':
      'Contact email coming soon. In the meantime, you can find us on GitHub.',

    'legal.title': 'Legal notice',
    'legal.pending':
      'MAI Softwares is currently being incorporated. Company details will be published on this page once the process is complete.',
    'privacy.title': 'Privacy',
    'privacy.text':
      'This is a static website: it uses no cookies, includes no analytics tools and collects no personal data from visitors.',

    'notfound.title': 'Page not found',
    'notfound.text': "The page you're looking for doesn't exist or has moved.",
    'notfound.back': 'Back to home',

    'footer.rights': 'All rights reserved.',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UIKey = keyof (typeof ui)['es'];

import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../data/company';
import type { CategoryId } from '../data/categories';

export type Project = CollectionEntry<'projects'>;

/** Proyectos publicados de un idioma, más recientes primero. */
export async function getProjects(
  locale: Locale,
  category?: CategoryId,
): Promise<Project[]> {
  const all = await getCollection(
    'projects',
    (entry) =>
      entry.id.startsWith(`${locale}/`) &&
      entry.data.published &&
      (category ? entry.data.category === category : true),
  );
  return all.sort((a, b) => b.data.year - a.data.year);
}

/** Proyecto destacado de portada (primero con featured: true). */
export async function getFeaturedProject(locale: Locale): Promise<Project | null> {
  const projects = await getProjects(locale);
  return projects.find((p) => p.data.featured) ?? projects[0] ?? null;
}

/** Anterior/siguiente dentro del archivo del idioma. */
export async function getProjectNeighbors(
  locale: Locale,
  slug: string,
): Promise<{ prev: Project | null; next: Project | null }> {
  const projects = await getProjects(locale);
  const index = projects.findIndex((p) => p.data.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: projects[index - 1] ?? null,
    next: projects[index + 1] ?? null,
  };
}

// src/lib/projects.ts
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

const reader = createReader(process.cwd(), keystaticConfig);

export async function getProjects(locale: string) {
  // Выбираем коллекцию Keystatic в зависимости от локали
  const collection = locale === 'en' ? reader.collections.projects_en : reader.collections.projects_ru;
  const projects = await collection.all();
  
  return projects.map(({ slug, entry }) => {
    const originalSections = (entry.sections || []).map((sec: any) => ({
      type: sec.discriminant,
      content: sec.value,
    }));

    return {
      id: entry.id ?? 1,
      slug: entry.slug || slug,
      title: entry.title,
      category: entry.category || [],
      badge: entry.badge || undefined,
      duration: entry.duration,
      image: entry.image,
      link: entry.link || undefined,
      sections: originalSections,
    };
  }).sort((a, b) => b.id - a.id);
}

export async function getProjectBySlug(slug: string, locale: string) {
  // Выбираем коллекцию Keystatic в зависимости от локали
  const collection = locale === 'en' ? reader.collections.projects_en : reader.collections.projects_ru;
  const entry = await collection.read(slug);
  if (!entry) return null;

  const originalSections = (entry.sections || []).map((sec: any) => ({
    type: sec.discriminant,
    content: sec.value,
  }));

  return {
    id: entry.id ?? 1,
    slug: entry.slug || slug,
    title: entry.title,
    category: entry.category || [],
    badge: entry.badge || undefined,
    duration: entry.duration,
    image: entry.image,
    link: entry.link || undefined,
    sections: originalSections,
  };
}
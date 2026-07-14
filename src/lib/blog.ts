// src/lib/blog.ts
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

const reader = createReader(process.cwd(), keystaticConfig);

export async function getBlogPosts(locale: string) {
  const collection = locale === 'en' ? reader.collections.blog_en : reader.collections.blog_ru;
  const posts = await collection.all();
  
  return posts.map(({ slug, entry }) => {
    const originalSections = (entry.sections || []).map((sec: any) => ({
      type: sec.discriminant,
      content: sec.value,
    }));

    return {
      id: entry.id ?? 1,
      slug: entry.slug || slug,
      title: entry.title,
      category: entry.category ? [...entry.category] : [],
      badge: entry.badge || undefined,
      duration: entry.duration,
      image: entry.image,
      link: entry.link || '#',
      sections: originalSections,
    };
  }).sort((a, b) => b.id - a.id);
}

export async function getBlogPostBySlug(slug: string, locale: string) {
  const collection = locale === 'en' ? reader.collections.blog_en : reader.collections.blog_ru;
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
    category: entry.category ? [...entry.category] : [],
    badge: entry.badge || undefined,
    duration: entry.duration,
    image: entry.image,
    link: entry.link || '#',
    sections: originalSections,
  };
}
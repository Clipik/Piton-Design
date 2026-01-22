import { MetadataRoute } from 'next'
import { getProjects } from '@/data/projects'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gopiton.com'
  const locales = ['ru', 'en'] // Твои языки

  // Создаем пустой массив для ссылок
  const sitemapEntries: MetadataRoute.Sitemap = []

  // Пробегаемся по каждому языку
  for (const locale of locales) {
    
    // 1. Статические страницы (Главная, Проекты, и т.д.)
    sitemapEntries.push(
      {
        url: `${baseUrl}/${locale}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
      {
        url: `${baseUrl}/${locale}/projects`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      }
      // Сюда добавь privacy, terms если есть
    )

    // 2. Динамические проекты из твоего файла
    // Твоя функция getProjects синхронная, так что await не нужен
    const projects = getProjects(locale)

    for (const project of projects) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/projects/${project.slug}`,
        // Если хочешь дату из проекта, придется парсить строку, но можно забить и ставить текущую
        lastModified: new Date(), 
        changeFrequency: 'monthly',
        priority: 0.8,
      })
    }
  }

  return sitemapEntries
}
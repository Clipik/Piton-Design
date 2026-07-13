// scripts/migrate.ts
import fs from 'fs';
import path from 'path';
import { projectsRu, projectsEn, Project, ProjectSection } from '../src/data/projects'; 
import { postsRu, postsEn, BlogPost } from '../src/data/blog'; 

// Функция для миграции проектов
function migrateProjects(projects: Project[], lang: 'ru' | 'en') {
  const outputDir = path.join(process.cwd(), `src/content/projects/${lang}`);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  projects.forEach((project: Project) => {
    const filePath = path.join(outputDir, `${project.slug}.json`);
    
    const formattedSections = project.sections.map((sec: ProjectSection) => {
      const val = { ...sec.content };
      return {
        discriminant: sec.type,
        value: val,
      };
    });

    const formattedProject = {
      title: project.title,
      slug: project.slug,
      id: project.id,
      category: project.category,
      badge: project.badge || '',
      duration: project.duration,
      image: project.image,
      link: project.link || '',
      sections: formattedSections,
    };

    fs.writeFileSync(filePath, JSON.stringify(formattedProject, null, 2), 'utf-8');
    console.log(`[RU/EN] [PROJECTS] Проект "${project.slug}" мигрирован.`);
  });
}

// Функция для миграции постов блога
function migrateBlog(posts: BlogPost[], lang: 'ru' | 'en') {
  const outputDir = path.join(process.cwd(), `src/content/blog/${lang}`);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  posts.forEach((post: BlogPost) => {
    const filePath = path.join(outputDir, `${post.slug}.json`);
    
    // Секции блога типизированы как any[], поэтому указываем (sec: any)
    const formattedSections = post.sections.map((sec: any) => {
      const val = { ...sec.content };
      return {
        discriminant: sec.type,
        value: val,
      };
    });

    const formattedPost = {
      title: post.title,
      slug: post.slug,
      id: post.id,
      category: post.category,
      badge: post.badge || '',
      duration: post.duration,
      image: post.image,
      link: post.link || '',
      sections: formattedSections,
    };

    fs.writeFileSync(filePath, JSON.stringify(formattedPost, null, 2), 'utf-8');
    console.log(`[RU/EN] [BLOG] Пост "${post.slug}" мигрирован.`);
  });
}

// Запускаем полную миграцию
migrateProjects(projectsRu, 'ru');
migrateProjects(projectsEn, 'en');
migrateBlog(postsRu, 'ru');
migrateBlog(postsEn, 'en');
"use client";
import { useState } from "react";
import { Project } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import CtaButton from "./CtaButton"; // Убедись, что файл лежит рядом в папке components

interface ProjectGridProps {
  locale: string;
  projects: Project[];
}

export default function ProjectGrid({ locale, projects }: ProjectGridProps) {
  
  // 1. ОПРЕДЕЛЯЕМ КАТЕГОРИИ В ЗАВИСИМОСТИ ОТ ЯЗЫКА
  // Важно: Эти слова должны ТОЧНО совпадать с тем, что написано в data/projects.ts
  const categoriesList = locale === 'ru' 
    ? ["Все", "Сайт", "Приложение", "Питч-дек"]
    : ["All", "Website", "App", "Pitch Deck"];

  const [activeCategory, setActiveCategory] = useState(categoriesList[0]); // "Все" или "All"

  // 2. ФИЛЬТРАЦИЯ
  const filteredProjects = activeCategory === categoriesList[0]
    ? projects
    : projects.filter((p) => p.category.includes(activeCategory));

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-2">
      
      {/* ФИЛЬТРЫ */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-16 mb-16">
        {categoriesList.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-[1rem] md:text-[1rem] font-['Golos_Text'] font-regular transition-all duration-300 cursor-pointer relative py-2 ${
              activeCategory === cat 
                ? "text-[#FF0033] font-medium" 
                : "text-[#222222] hover:text-[#FF0033]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ГРИД ПРОЕКТОВ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filteredProjects.map((project: Project) => (
          <Link
            // ВОТ ТВОЙ ПУТЬ. ОН БЫЛ ПРАВИЛЬНЫМ, Я ПРОСТО УБРАЛ ЛИШНИЕ СКОБКИ
            href={`/${locale}/projects/${project.slug}`}
            key={project.id}
            className="group relative flex flex-col rounded-[1rem] overflow-hidden bg-[#F8F9FB] transition-all duration-500 hover:shadow-2xl hover:shadow-[#222222]/10 cursor-pointer"
          >
            {/* ВЕРХНЯЯ ЧАСТЬ: Изображение */}
            <div className="relative aspect-[16/11] w-full overflow-hidden bg-white">
              
              <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-10">
                {project.category.map((cat) => (
                  <div 
                    key={cat} 
                    className="bg-white px-4 py-1.5 rounded-full shadow-2xl flex items-center justify-center"
                    style={{ borderRadius: '2450px' }}
                  >
                    <span className="text-[0.85rem] font-regular text-[#222222] font-['Golos_Text'] tracking-[0.01em]">
                      {cat}
                    </span>
                  </div>
                ))}
              </div>

              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* НИЖНЯЯ ЧАСТЬ */}
            <div className="p-4 sm:p-6 flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <h3 className="text-[1rem] sm:text-[1.25rem] font-['Golos_Text'] font-medium leading-tight text-[#222222]">
                  {project.title}
                </h3>
                <span className="text-[1rem] font-normal text-[#888888] font-['Golos_Text']">
                  {project.duration}
                </span>
              </div>

              {/* Стрелка */}
              <div className="w-14 h-14 bg-[#FF0033] rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:rotate-44">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* FOOTER BUTTON */}
      <CtaButton 
        locale={locale} 
        // Если ты обновил CtaButton.tsx как я говорил в прошлом ответе, 
        // то w-full здесь сработает корректно и растянет кнопку.
        className="w-full h-[64px] mt-6 text-[1.25rem] px-4"
      />
    </div>
  );
}
"use client";
import { useState } from "react";
import { Project } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import CtaButton from "./CtaButton";

interface ProjectGridProps {
  locale: string;
  projects: Project[];
}

export default function ProjectGrid({ locale, projects }: ProjectGridProps) {
  
  // 1. ОПРЕДЕЛЯЕМ КАТЕГОРИИ В ЗАВИСИМОСТИ ОТ ЯЗЫКА
  const categoriesList = locale === 'ru' 
    ? ["Все", "Сайт", "Приложение", "Питч-дек"]
    : ["All", "Website", "App", "Pitch Deck"];

  const [activeCategory, setActiveCategory] = useState(categoriesList[0]); // "Все" или "All"

  const [activeBadge, setActiveBadge] = useState<number | null>(null);

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
                {'badge' in project && project.badge && (
                  <div 
                    className="relative"
                    onClick={(e) => {
                      e.preventDefault(); // чтобы не открывал страницу проекта
                      setActiveBadge(activeBadge === project.id ? null : project.id);
                    }}
                  >
                    <div 
                      className="w-8 h-8 shadow-2xl cursor-pointer"
                      dangerouslySetInnerHTML={{ __html: project.badge }} 
                    />
                    {/* Тултип — на десктопе по hover, на мобилке по клику */}
                    <div className={`absolute right-0 top-full mt-2 z-50 max-w-[200px] whitespace-normal md:whitespace-nowrap md:max-w-none bg-[#222222] text-white text-[0.75rem] font-['Golos_Text'] px-3 py-1.5 rounded-lg transition-all duration-200 pointer-events-none
                      ${activeBadge === project.id ? 'opacity-100 visible' : 'opacity-0 invisible'}
                      group-hover/badge:opacity-100 group-hover/badge:visible`}
                    >
                      {locale === 'ru' ? '🏆 1 место в федеральном дизайн-соревновании' : '🏆 1st place in a national design competition'}
                      <div className="absolute bottom-full right-3 border-4 border-transparent border-b-[#222222]" />
                    </div>
                  </div>
                )}
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
        className="w-full h-[64px] mt-6 text-[1.25rem] px-4"
      />
    </div>
  );
}
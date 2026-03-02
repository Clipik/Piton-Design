// src/app/[locale]/projects/[slug]/page.tsx

import { getProjectBySlug, getProjects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar"; 
import CtaButton from "@/components/CtaButton"; 
import BadgeWithTooltip from "@/components/BadgeWithTooltip";

// Типизация параметров (Next.js 15 требует Promise)
type Props = {
  params: Promise<{ 
    slug: string;
    locale: string;
  }>;
};

// Генерируем статику
export async function generateStaticParams() {
  const locales = ['ru', 'en'];
  
  const paths = locales.flatMap((locale) => {
    const projects = getProjects(locale);
    return projects.map((project) => ({
      locale,
      slug: project.slug,
    }));
  });

  return paths;
}

// Утилита для висячих предлогов
const fixOrphans = (text: string) => {
  if (!text) return text;
  return text.replace(/(\s|^)([а-яА-ЯёЁa-zA-Z]{1,3})\s/g, '$1$2\u00A0');
};

// --- САМА СТРАНИЦА ---
export default async function ProjectPage({ params }: Props) {
  const { slug, locale } = await params;
  const project = getProjectBySlug(slug, locale);

  if (!project) {
    notFound();
  }

  const ui = {
    back: locale === 'ru' ? 'Все проекты' : 'All Projects',
    metrics: locale === 'ru' ? 'Показатели' : 'Metrics',
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar locale={locale} />
      
      <main className="w-full max-w-[1200px] mx-auto px-4 py-12 md:py-16">
        
        {/* Кнопка НАЗАД: Обертка w-full, чтобы кнопка была слева */}
        <div className="w-full flex justify-start mt-14 mb-6">
          <Link 
            href={`/${locale}/#portfolio`} 
            className="inline-flex items-center text-[#666666] hover:text-[#FF0033] transition-colors font-['Golos_Text'] font-medium"
          >
            <span className="mr-2">&lt;</span> {ui.back}
          </Link>
        </div>

        {/* ГЛАВНЫЙ КОНТЕЙНЕР: items-center центрирует блоки (текст), но w-full на детях растягивает их */}
        <div className="flex flex-col gap-16 w-full items-center">
            {/* Рендерим секции */}
            {project.sections.map((section, index) => {
              switch (section.type) {
                case "hero":
                  return (
                    <div key={index} className="flex flex-col items-start gap-8 w-full">
                      <div className="flex flex-col gap-6 w-full">
                        <h1 className="text-[2rem] md:text-[3rem] font-['Unbounded'] font-semibold text-[#222222] leading-[1.1]">
                          {fixOrphans(section.content.title)}
                        </h1>
                        <div className="flex flex-wrap gap-2 w-full">
                          {section.content.tags.map((tag: any, i: number) => (
                            <div key={i} className="bg-[#F7F7FA] px-4 py-2 flex items-center justify-center" style={{ borderRadius: '2450px' }}>
                              <span className="text-[0.85rem] font-regular text-[#222222] font-['Golos_Text']">{tag}</span>
                            </div>
                          ))}

                          {/* Бейдж награды */}
                          {project.badge && (
                            <BadgeWithTooltip 
                              badge={project.badge} 
                              label={locale === 'ru' ? '🏆 1 место в федеральном соревновании по дизайну' : '🏆 1st place in a national design competition'} 
                            />
                          )}

                        </div>
                      </div>
                      <div className="w-full rounded-[1rem] overflow-hidden bg-[#FFFFFF] aspect-video relative">
                         <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-contain"
                            priority
                          />
                      </div>
                    </div>
                  );

                case "image":
                  return (
                    <div key={index} className="w-full rounded-[1rem] overflow-hidden bg-[#F7F7FA]">
                      <Image
                        src={section.content.src}
                        alt={section.content.alt}
                        loading={section.content.loading || "lazy"}
                        width={1200}
                        height={800}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  );
                
                case "text":
                  return (
                    // ТЕКСТ: max-w-[900px] + mx-auto (чтобы он был по центру родителя)
                    <div key={index} className="w-full max-w-[900px] mx-auto">
                      {section.content.title && (
                        <h2 className="text-[1.5rem] md:text-[2rem] font-['Unbounded'] font-semibold text-[#222222] mb-6">
                          {fixOrphans(section.content.title)}
                        </h2>
                      )}
                      <p className="text-[1rem] md:text-[1.125rem] font-['Golos_Text'] text-[#222222] leading-relaxed opacity-90 whitespace-pre-wrap">
                        {fixOrphans(section.content.text)}
                      </p>
                    </div>
                  );

                case "stats":
                  return (
                    <div key={index} className="w-full bg-[#F7F7FA] p-6 md:p-8 rounded-[1rem]">
                      <h3 className="text-[1.25rem] font-['Unbounded'] font-semibold text-[#222222] mb-6">
                        {ui.metrics}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                        {section.content.map((stat: any, i: number) => (
                          <StatCircle key={i} {...stat} />
                        ))}
                      </div>
                    </div>
                  );
                
                case "summary":
                  return (
                    <div key={index} className="bg-[#F7F7FA] p-8 rounded-[1rem] mt-4 w-full">
                      <h2 className="text-[1.5rem] md:text-[2rem] font-['Unbounded'] font-semibold text-[#222222] mb-4">
                        {fixOrphans(section.content.title)}
                      </h2>
                      <p className="text-[1rem] font-['Golos_Text'] text-[#222222] leading-relaxed opacity-80 mb-8 max-w-[800px]">
                        {fixOrphans(section.content.text)}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                        {section.content.buttons.map((btn: any, i: number) => {
                          if (btn.primary) {
                            return (
                               <CtaButton 
                                  key={i} 
                                  locale={locale} 
                                  className="h-[56px] px-8 text-[1.25rem] w-full sm:w-auto" 
                               />
                            )
                          }
                          return (
                            <a
                              key={i}
                              href={btn.url}
                              target="_blank"
                              className="whitespace-nowrap h-[56px] px-8 rounded-full flex items-center justify-center text-[1.1rem] font-['Golos_Text'] font-regular transition-all bg-white text-[#222222] border border-[#E5E7EB] hover:border-[#FF0033] hover:text-[#FF0033] w-full sm:w-auto"
                            >
                              {btn.label}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  );

                default:
                  return null;
              }
            })}
        </div>
      </main>
    </div>
  );
}
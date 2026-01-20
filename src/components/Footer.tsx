"use client";

import React from 'react';
import Typewriter from "./Typewriter";
import CtaButton from "./CtaButton";
import Link from "next/link";

interface FooterProps {
  locale: string;
  content: {
    toTop: string;
    copy: string;
    privacy: string;
    terms: string;
  };
}

export default function Footer({ locale, content }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Фразы для печатной машинки зависят от локали
  const typewriterPhrases = locale === 'ru' 
    ? ["Сайт за 3 дня", "MVP для стартапа", "Piton Design"]
    : ["Website in 3 days", "MVP for startup", "Piton Design"];

  return (
    <footer className="w-full bg-white border-t border-[#F0F0F0] pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          {/* ЛЕВАЯ ЧАСТЬ: Логотип и Печатная машинка */}
          <div className="flex items-center gap-1 flex-shrink-0">
            <div className="relative flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46.67"
                height="46.67"
                fill="none"
                overflow="visible"
                viewBox="0 0 46.67 46.67"
                className="w-12 h-12"
              >
                <g>
                  <path d="M 0 46.67 L 0 0 L 46.67 0 L 46.67 46.67 Z" fill="transparent"></path>
                  <path
                    d="M 25.242 14.279 L 25.242 22.448 C 24.121 21.8 22.818 21.428 21.428 21.428 C 20.039 21.428 18.735 21.8 17.613 22.448 C 16.973 22.819 16.393 23.279 15.887 23.813 C 15.479 24.245 15.119 24.724 14.82 25.242 C 14.478 25.834 14.213 26.474 14.04 27.152 C 13.883 27.761 13.799 28.399 13.799 29.057 C 13.799 30.446 14.171 31.749 14.82 32.871 C 15.49 34.029 16.455 34.995 17.614 35.665 C 18.736 36.313 20.039 36.685 21.428 36.685 C 22.818 36.685 24.121 36.313 25.242 35.665 L 25.242 39.848 C 24.05 40.27 22.766 40.5 21.428 40.5 C 20.091 40.5 18.807 40.27 17.614 39.848 C 16.192 39.346 14.9 38.571 13.799 37.586 C 13.482 37.303 13.183 37.002 12.899 36.685 C 11.913 35.584 11.139 34.293 10.637 32.871 C 10.215 31.678 9.985 30.394 9.985 29.057 C 9.985 27.72 10.215 26.435 10.637 25.242 C 10.694 25.08 10.754 24.92 10.819 24.763 C 11.317 23.529 12.025 22.403 12.898 21.429 C 13.182 21.112 13.482 20.811 13.799 20.528 C 14.435 19.959 15.135 19.46 15.887 19.043 C 16.436 18.738 17.014 18.478 17.613 18.266 C 18.806 17.844 20.091 17.614 21.428 17.614 L 21.428 9.986 L 17.613 9.986 L 17.613 6.171 L 29.056 6.171 L 29.056 9.986 L 25.242 9.986 L 25.242 13.8"
                    fill="#FF0033"
                  ></path>
                  <path
                    d="M 20.388 28.083 C 20.388 26.742 21.475 25.656 22.815 25.656 C 24.155 25.656 25.242 26.742 25.242 28.083 C 25.242 29.423 24.155 30.51 22.815 30.51 C 21.475 30.51 20.388 29.423 20.388 28.083 Z"
                    fill="#FF0033"
                  ></path>
                </g>
              </svg>
            </div>
            <Typewriter
              phrases={typewriterPhrases}
              speed={100}
              deleteSpeed={50}
              pauseTime={2000}
            />
          </div>

          {/* ЦЕНТРАЛЬНАЯ ЧАСТЬ: Наверх страницы */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 bg-[#F7F7FA] hover:bg-[#F0F0F5] px-6 py-3 rounded-full transition-colors group"
          >
            <div className="w-9 h-9 border-2 border-[#FF0033] rounded-full flex items-center justify-center text-[#FF0033]">
              <svg 
                width="20" height="20" viewBox="0 0 24 24" fill="none" 
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                className="group-hover:-translate-y-1 transition-transform"
              >
                <path d="M12 19V5M5 12l7-7 7 7"/>
              </svg>
            </div>
            <span className="text-[#FF0033] font-['Golos_Text'] font-medium text-[1.1rem]">
              {content.toTop}
            </span>
          </button>

          {/* Кнопка "Обсудить" */}
          <CtaButton 
            locale={locale} 
            className="h-[56px] pl-6 pr-2 text-[1.25rem]"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#F0F0F0] gap-4">
          <p className="text-[0.8rem] font-['Golos_Text'] text-[#222222] opacity-40">
            © {currentYear} Piton Design. {content.copy}
          </p>
          <div className="flex gap-6 text-[0.8rem] font-['Golos_Text'] text-[#222222] opacity-40">
            {/* Ссылки должны включать локаль */}
            <Link 
              href={`/${locale}/privacy`} 
              className="hover:opacity-100 transition-opacity"
            >
              {content.privacy}
            </Link>
            
            <Link 
              href={`/${locale}/terms`} 
              className="hover:opacity-100 transition-opacity"
            >
              {content.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
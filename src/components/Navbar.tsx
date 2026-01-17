"use client";

import { useState, useEffect } from "react"; // ДОБАВИЛ useEffect
import Link from "next/link";
import Typewriter from "./Typewriter";
import CtaButton from "./CtaButton";

interface NavbarProps {
  locale: string;
}

export default function Navbar({ locale }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      // Если мобильное меню открыто, не трогаем навбар, пусть висит. Логично?
      if (isOpen) {
        setIsVisible(true);
        return;
      }
      
      if (window.scrollY > lastScrollY && window.scrollY > 100) { // Скроллим вниз и проскроллили больше 100px
        setIsVisible(false);
      } else { // Скроллим вверх
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);

    // А это чтобы не засрать память, когда компонент сдохнет. Учись.
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY, isOpen]); // Перезапускаем эффект, если изменился скролл или состояние меню

  return (
    // Я ИЗМЕНИЛ ЭТУ СТРОКУ. Добавил transition и динамический класс
    <nav className={`fixed top-0 w-full z-50 bg-white border-b border-[#F0F0F0] transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* ЛЕВАЯ ЧАСТЬ: Логотип и Печатная машинка */}
        <div className="flex items-center gap-1 flex-shrink-0">
          <Link href={`/${locale}`} className="relative flex-shrink-0 hover:opacity-80 transition-opacity">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46.67"
              height="46.67"
              fill="none"
              overflow="visible"
              viewBox="0 0 46.67 46.67"
              className="w-10 h-10 sm:w-12 sm:h-12"
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
          </Link>
          <div className="hidden sm:block">
            <Typewriter
                phrases={locale === 'ru' ? ["Сайт за 3 дня", "MVP для стартапа", "Piton Design"] : ["Website in 3 days", "MVP for startup", "Piton Design"]}
                speed={100}
                deleteSpeed={50}
                pauseTime={2000}
            />
          </div>
        </div>

        {/* ЦЕНТР: Десктопная навигация */}
        <div className="hidden lg:flex items-center flex-1 justify-center">
          <div className="flex gap-1">
            <Link href={`/${locale}/#portfolio`} className="px-4 py-2 text-[1rem] font-regular text-[#222222] hover:text-[#FF0033] hover:bg-[#FF0033]/5 rounded-full transition-all duration-300">
              {locale === 'ru' ? 'Портфолио' : 'Portfolio'}
            </Link>
            <Link href={`/${locale}/#services`} className="px-4 py-2 text-[1rem] font-regular text-[#222222] hover:text-[#FF0033] hover:bg-[#FF0033]/5 rounded-full transition-all duration-300">
              {locale === 'ru' ? 'Услуги и цены' : 'Services & Pricing'}
            </Link>
            <Link href={`/${locale}/#about`} className="px-4 py-2 text-[1rem] font-regular text-[#222222] hover:text-[#FF0033] hover:bg-[#FF0033]/5 rounded-full transition-all duration-300">
               {locale === 'ru' ? 'О студии' : 'About us'}
            </Link>
          </div>
        </div>

        {/* ПРАВО: Десктоп Язык + CTA, Мобильный гамбургер */}
        <div className="flex items-center gap-4 lg:gap-6 flex-shrink-0">
          
          {/* Language Switcher (Desktop) */}
          <div className="relative group hidden lg:block">
            <div className="flex items-center gap-2 px-3 py-2 cursor-pointer rounded-full transition-all duration-300">
              <div className="w-5 h-4 rounded-sm overflow-hidden flex-shrink-0 shadow-sm">
                 {locale === 'ru' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6" className="w-full h-full">
                        <path fill="#fff" d="M0 0h9v3H0z" /><path fill="#d52b1e" d="M0 3h9v3H0z" /><path fill="#0039a6" d="M0 2h9v2H0z" />
                    </svg>
                 ) : (
                    <img src="/English_language.svg" alt="EN" className="w-full h-full object-cover" />
                 )}
              </div>
              <span className="text-[1rem] font-medium text-[#222222] group-hover:text-[#FF0033] transition-colors">
                {locale.toUpperCase()}
              </span>
              <svg className="w-4 h-4 text-gray-700 group-hover:text-[#FF0033] transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="flex flex-col py-1">
                <Link href="/ru" className="flex items-center gap-3 px-4 py-3 hover:bg-[#FF0033]/5 text-[#222222] hover:text-[#FF0033] transition-colors">
                  <span className="text-[1rem] font-medium">RU</span>
                </Link>
                <Link href="/en" className="flex items-center gap-3 px-4 py-3 hover:bg-[#FF0033]/5 text-[#222222] hover:text-[#FF0033] transition-colors">
                  <span className="text-[1rem] font-medium">EN</span>
                </Link>
              </div>
            </div>
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden sm:block">
            <CtaButton 
               locale={locale} 
               className="h-[56px] pl-6 pr-2 text-[1.25rem]" 
            />
          </div>

          {/* Hamburger Button (Mobile) */}
          <button 
            className="lg:hidden p-2 text-[#222222] hover:text-[#FF0033] transition-colors focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
          
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {/* Ничего не менял, но теперь он будет выезжать из-под уехавшего хедера */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-b border-[#F0F0F0] shadow-xl flex flex-col p-6 animate-in slide-in-from-top-2 duration-200">
           {/* Mobile Navigation Links */}
           <div className="flex flex-col gap-2 mb-4">
              <Link onClick={() => setIsOpen(false)} href={`/${locale}/#portfolio`} className="px-4 py-3 text-[1.1rem] font-medium text-[#222222] hover:text-[#FF0033] transition-colors">
                {locale === 'ru' ? 'Портфолио' : 'Portfolio'}
              </Link>
              <Link onClick={() => setIsOpen(false)} href={`/${locale}/#services`} className="px-4 py-3 text-[1.1rem] font-medium text-[#222222] hover:text-[#FF0033] transition-colors">
                {locale === 'ru' ? 'Услуги и цены' : 'Services & Pricing'}
              </Link>
              <Link onClick={() => setIsOpen(false)} href={`/${locale}/#about`} className="px-4 py-3 text-[1.1rem] font-medium text-[#222222] hover:text-[#FF0033] transition-colors">
                 {locale === 'ru' ? 'О студии' : 'About us'}
              </Link>
           </div>

           {/* Mobile Language & CTA */}
           <div className="flex flex-col gap-4 border-t border-gray-100 pt-4">
             {/* Language Selection Mobile */}
             <div className="flex gap-2 justify-center">
                <Link href="/ru" className={`flex-1 py-2 text-center rounded-full border ${locale === 'ru' ? 'bg-[#FFFFFF] text-[#222222] border-[#FF0033]' : 'text-[#222222] border-gray-200'}`}>
                  RU
                </Link>
                <Link href="/en" className={`flex-1 py-2 text-center rounded-full border ${locale === 'en' ? 'bg-[#FFFFFF] text-[#222222] border-[#FF0033]' : 'text-[#222222] border-gray-200'}`}>
                  EN
                </Link>
             </div>

             {/* Mobile CTA (visible only if hidden in top bar) */}
             <div className="sm:hidden w-full">
                <CtaButton locale={locale} className="w-full justify-center h-[50px] text-[1.1rem]" />
             </div>
           </div>
        </div>
      )}
    </nav>
  );
}
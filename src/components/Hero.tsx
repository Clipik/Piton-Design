"use client";
import { useState, useEffect } from "react";
import TransparentVideo from "./TransparentVideo";
import CtaButton from "./CtaButton";

interface HeroProps {
  locale: string;
  content: {
    title: string;
    subtitle: string;
    portfolio: string;
  };
}

export default function Hero({ locale, content }: HeroProps) {
  const [mounted, setMounted] = useState(false);
  // По умолчанию грузим мобильное видео (экономим трафик)
  const [videoSrc, setVideoSrc] = useState("/videos/coinshero.webm");

  useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      // Если ширина больше 768px (стандартный брейкпоинт), считаем это монитором
      const isDesktop = window.matchMedia("(min-width: 768px)").matches;
      
      setVideoSrc(
        isDesktop 
          ? "/videos/coinsheroformonitors.webm" 
          : "/videos/coinshero.webm"
      );
    };

    // Вызываем сразу при загрузке
    handleResize();

    // Слушаем изменение размера окна (если юзер решит покрутить планшет)
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full h-[100dvh] flex flex-col items-center bg-white overflow-hidden">

      {/* СЛОЙ КОНТЕНТА */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 pt-[15dvh] md:pt-[20dvh] w-full">

        <h1 className="text-[32px] md:text-[48px] font-semibold text-[#222222] font-['Unbounded'] leading-[1.2] tracking-[-0.01em] max-w-[800px]">
          {content.title}
        </h1>

        <p className="text-[18px] md:text-[24px] text-[#222222] mt-8 font-normal font-['Unbounded'] tracking-[-0.01em]">
          {content.subtitle}
        </p>

        {/* КНОПКИ */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12 items-center justify-center pointer-events-auto w-full sm:w-auto px-4 sm:px-0 max-w-[400px] sm:max-w-none">
          
          <CtaButton 
            locale={locale} 
            className="h-[56px] pl-6 pr-2 text-[1.25rem] w-full sm:w-auto justify-center" 
          />

          <div className="relative inline-block w-full sm:w-auto">
            {mounted && (
              <style dangerouslySetInnerHTML={{ __html: `
                @keyframes flowing-glow {
                  0%, 100% {
                    box-shadow: 10px -10px 25px rgba(255, 0, 51, 0.4), -10px 10px 25px rgba(255, 50, 0, 0.3), 0px 0px 30px rgba(255, 0, 51, 0.1);
                  }
                  50% {
                    box-shadow: -10px -10px 35px rgba(255, 0, 51, 0.5), 10px 10px 35px rgba(255, 50, 0, 0.4), 0px 0px 50px rgba(255, 0, 51, 0.2);
                  }
                }
                .glow-button::after {
                  content: "";
                  position: absolute;
                  inset: 0;
                  border-radius: 100px;
                  opacity: 0;
                  transition: opacity 0.5s ease-in-out;
                  z-index: -1;
                  animation: flowing-glow 2s infinite ease-in-out;
                }
                .glow-button:hover::after {
                  opacity: 1;
                }
              `}} />
            )}
            
            <a
              href="#portfolio"
              suppressHydrationWarning={true} 
              className="glow-button relative z-10 bg-white text-[#FF0033] h-[56px] px-10 rounded-[100px] flex items-center justify-center font-['Golos_Text'] text-[18px] tracking-[0.01em] leading-none border border-transparent shadow-[0px_0.722625px_3.03502px_-1px_rgba(255,0,51,0.14),0px_2.74624px_11.5342px_-2px_rgba(255,0,51,0.13),0px_12px_50.4px_-3px_rgba(255,0,51,0.1)] w-full sm:w-auto"
            >
              {content.portfolio}
            </a>
          </div>
        </div>
      </div>

      {/* СЛОЙ ВИДЕО */}
      <div className="absolute bottom-0 left-0 w-full h-[50%] md:h-full z-10 pointer-events-none flex justify-center items-end">
        {/* Рендерим видео только после маунта, чтобы избежать конфликтов сервера и клиента */}
        {mounted && (
          <TransparentVideo
            src={videoSrc} // <-- Сюда теперь летит динамический путь
            fallbackSrc="/videos/coinshero.mov" // <-- Сафари жрет это и не давится
            brightness={140} 
            contrast={130}
            maskTop={15} 
            className="w-full h-full object-contain object-bottom mx-auto"
          />
        )}
      </div>

    </section>
  );
}
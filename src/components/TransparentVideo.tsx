"use client";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface TransparentVideoProps {
  src: string;         // Путь к .webm (Google/Android)
  fallbackSrc?: string; // Путь к .mov (Apple/Safari — потому что Apple особенные)
  poster?: string;      // Картинка, пока видео грузится
  
  /* ПОЛЗУНКИ НАСТРОЙКИ: */
  brightness?: number; // Яркость (100 = оригинал, >100 = светлее)
  contrast?: number;   // Контраст (чтобы видео не выглядело как туман в Лондоне)
  maskTop?: number;    // Процент высоты сверху, который будет плавно уходить в прозрачность
  className?: string;  // Доп. классы (размеры, позиционирование)
  loop?: boolean;      // Зациклить? (true/false)
}

export default function TransparentVideo({
  src,
  fallbackSrc,
  poster,
  brightness = 150, // Дефолт: выкручено на 150%, чтобы "сияло"
  contrast = 130,   // Дефолт: 130%, чтобы цвета не были блеклыми
  maskTop = 15,     // Дефолт: верхние 15% видео плавно растворяются
  className = "",
  loop = false,
}: TransparentVideoProps) {
  const containerRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Следим, видит ли пользователь этот блок. 
  // margin: "200px" значит, что видео начнет грузиться за 200px до появления на экране.
  const isInView = useInView(containerRef, { once: true, margin: "200px" });
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    // Автоплей сработает только когда пользователь доскроллит до видео
    if (isInView && videoRef.current && !hasPlayed) {
      videoRef.current.play().catch((err) => {
        console.warn("Браузер заблокировал автоплей. Скорее всего, ты забыл muted.", err);
      });
      setHasPlayed(true);
    }
  }, [isInView, hasPlayed]);

  /* 
     МАГИЯ МАСКИ (CSS Mask):
     Создает градиент прозрачности сверху вниз.
     - transparent 0%: в самом верху видео полностью невидимое.
     - black ${maskTop}%: к этому моменту видео становится на 100% видимым.
     Это нужно, чтобы сверху не было резкой полосы края видео.
  */
  const maskStyle = maskTop > 0 ? {
    WebkitMaskImage: `linear-gradient(to bottom, transparent 0%, black ${maskTop}%, black 100%)`,
    maskImage: `linear-gradient(to bottom, transparent 0%, black ${maskTop}%, black 100%)`,
  } : {};

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {isInView && (
        <video
          ref={videoRef}
          poster={poster}
          muted        // ОБЯЗАТЕЛЬНО. Без этого автоплей сдохнет.
          playsInline  // Чтобы на iPhone видео не открывалось во весь экран само по себе.
          loop={loop}
          /* 
             object-cover: растягивает видео, чтобы оно заполнило контейнер.
             object-top: центрирует видео по верхнему краю. 
             Если хочешь, чтобы монеты падали ровно внизу — ставь object-bottom.
          */
          className="w-full h-full object-cover object-top pointer-events-none"
          style={{
            // Фильтры применяются "на лету" видеокартой.
            filter: `brightness(${brightness}%) contrast(${contrast}%)`,
            ...maskStyle
          }}
        >
          {/* WebM — для нормальных браузеров. Маленький размер, отличная прозрачность. */}
          <source src={src} type="video/webm" />
          
          {/* QuickTime/MOV — налог на экосистему Apple. Safari понимает прозрачность только так. */}
          {fallbackSrc && <source src={fallbackSrc} type="video/quicktime" />}
        </video>
      )}
    </div>
  );
}
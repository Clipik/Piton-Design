"use client";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface TransparentVideoProps {
  src: string;         // Путь к .webm
  fallbackSrc?: string; // Путь к .mov
  poster?: string;      
  
  /* ПОЛЗУНКИ НАСТРОЙКИ: */
  brightness?: number; 
  contrast?: number;   
  maskTop?: number;    
  className?: string;  
  loop?: boolean;      
  
  // ДОБАВИЛ ЭТО ДЕРЬМО, ЧТОБЫ ТЫ МОГ ОТЛОВИТЬ КОНЕЦ ВИДЕО
  onEnded?: () => void; 
}

export default function TransparentVideo({
  src,
  fallbackSrc,
  poster,
  brightness = 150, 
  contrast = 130,   
  maskTop = 15,     
  className = "",
  loop = false,
  onEnded, // <-- Принимаем функцию
}: TransparentVideoProps) {
  const containerRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const isInView = useInView(containerRef, { once: true, margin: "200px" });
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    if (isInView && videoRef.current && !hasPlayed) {
      videoRef.current.play().catch((err) => {
        console.warn("Браузер заблокировал автоплей.", err);
      });
      setHasPlayed(true);
    }
  }, [isInView, hasPlayed]);

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
          muted        
          playsInline  
          loop={loop}
          onEnded={onEnded} 
          className="w-full h-full object-cover object-top pointer-events-none"
          style={{
            filter: `brightness(${brightness}%) contrast(${contrast}%)`,
            ...maskStyle
          }}
        >
          <source src={src} type="video/webm" />
          {fallbackSrc && <source src={fallbackSrc} type="video/quicktime" />}
        </video>
      )}
    </div>
  );
}
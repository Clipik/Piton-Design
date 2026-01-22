"use client";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface TransparentVideoProps {
  // Мы будем передавать children (теги <source>), чтобы рулить медиа-запросами из родителя
  children?: React.ReactNode; 
  src?: string;         
  fallbackSrc?: string; 
  poster?: string;      
  brightness?: number; 
  contrast?: number;   
  maskTop?: number;    
  className?: string;  
  loop?: boolean;      
  onEnded?: () => void;
  preload?: string;
  priority?: boolean; // <--- ВАЖНЫЙ ФЛАГ
}

export default function TransparentVideo({
  children,
  src,
  fallbackSrc,
  poster,
  brightness = 150, 
  contrast = 130,   
  maskTop = 15,     
  className = "",
  loop = false,
  onEnded, 
  priority = false, // По дефолту false
}: TransparentVideoProps) {
  const containerRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Если priority = true, мы считаем что оно уже "в поле зрения"
  const inViewHook = useInView(containerRef, { once: true, margin: "200px" });
  const shouldRender = priority || inViewHook;

  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    if (shouldRender && videoRef.current && !hasPlayed) {
      // Пытаемся запустить. Если priority, автоплей сработает быстрее.
      videoRef.current.play().catch((err) => {
        // Автоплей может быть блокнут, если нет muted. У тебя есть muted.
      });
      setHasPlayed(true);
    }
  }, [shouldRender, hasPlayed]);

  const maskStyle = maskTop > 0 ? {
    WebkitMaskImage: `linear-gradient(to bottom, transparent 0%, black ${maskTop}%, black 100%)`,
    maskImage: `linear-gradient(to bottom, transparent 0%, black ${maskTop}%, black 100%)`,
  } : {};

  // Фильтр выносим, чтобы не дублировать
  const filterStyle = {
    filter: `brightness(${brightness}%) contrast(${contrast}%)`,
    ...maskStyle
  };

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {shouldRender && (
        <video
          ref={videoRef}
          poster={poster}
          muted        
          playsInline
          autoPlay={priority} // Если приоритет, то сразу автоплей атрибут
          preload={priority ? "auto" : "metadata"} // Грузим сразу
          loop={loop}
          onEnded={onEnded} 
          className="w-full h-full object-cover object-top pointer-events-none"
          style={filterStyle}
        >
          {/* Если передали children (source с media), юзаем их */}
          {children}

          {/* Старая логика для совместимости, если children нет */}
          {!children && src && <source src={src} type="video/webm" />}
          {!children && fallbackSrc && <source src={fallbackSrc} type="video/quicktime" />}
        </video>
      )}
    </div>
  );
}
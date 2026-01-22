"use client";

import { useEffect, useRef } from "react";

// Настройки хвоста
const TRAIL_LENGTH = 6; // Длина червя
const LINE_WIDTH = 6; // Толщина
const SMOOTHING = 0.6; // Сглаживание движения

interface Point {
  x: number;
  y: number;
}

export const PsychedelicCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const mouseRef = useRef<Point>({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Подгоняем размер канваса под экран
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Трекаем мышь
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    // Инициализируем массив точек (чтобы не стартовал из 0,0)
    mouseRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    for (let i = 0; i < TRAIL_LENGTH; i++) {
      pointsRef.current.push({ ...mouseRef.current });
    }

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;
    let hue = 0;

    const animate = () => {
      // Психоделическая смена цвета
      hue = (hue + 2) % 360; 
      const color = `hsl(${hue}, 100%, 50%)`;

      // Добавляем новую точку (интерполяция для плавности)
      // Мы не просто телепортируем точку, а "тянем" хвост к мыши
      const target = mouseRef.current;
      const prevHead = pointsRef.current[0];
      
      const newHead = {
        x: prevHead.x + (target.x - prevHead.x) * SMOOTHING,
        y: prevHead.y + (target.y - prevHead.y) * SMOOTHING
      };

      // Сдвигаем массив: удаляем хвост, добавляем голову
      pointsRef.current.pop();
      pointsRef.current.unshift(newHead);

      // Чистим канвас
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Рисуем линию
      ctx.beginPath();
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.lineWidth = LINE_WIDTH;
      ctx.strokeStyle = color;
      
      // Эффект свечения (Shadow)
      ctx.shadowBlur = 10;
      ctx.shadowColor = color;

      // Рисуем кривую Безье через точки
      if (pointsRef.current.length > 2) {
        ctx.moveTo(pointsRef.current[0].x, pointsRef.current[0].y);
        
        for (let i = 1; i < pointsRef.current.length - 1; i++) {
          const point = pointsRef.current[i];
          const nextPoint = pointsRef.current[i + 1];

          // Средняя точка между текущей и следующей для плавного изгиба
          const xc = (point.x + nextPoint.x) / 2;
          const yc = (point.y + nextPoint.y) / 2;
          
          ctx.quadraticCurveTo(point.x, point.y, xc, yc);
        }
      }

      ctx.stroke();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      // Добавил hidden md:block.
      // hidden — скрывает везде по дефолту (мобилки).
      // md:block — показывает, начиная с medium экранов (планшеты/десктопы).
      // Если у тебя Tailwind настроен иначе, чекай свои брейкпоинты, но обычно это работает.
      className="hidden md:block pointer-events-none fixed inset-0 z-10"
      style={{ width: "100vw", height: "100vh" }}
    />
  );
};
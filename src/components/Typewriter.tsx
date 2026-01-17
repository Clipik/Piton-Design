"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  phrases: string[];    // Массив строк, которые будут чередоваться. Не забудь их передать, иначе всё сдохнет.
  speed?: number;       // Скорость печати (мс на один символ). Меньше = быстрее.
  deleteSpeed?: number; // Скорость удаления текста. Обычно ставят быстрее, чем печать.
  pauseTime?: number;   // Пауза (мс), когда фраза напечатана полностью, перед тем как начать стирать.
  className?: string;   // Стили для контейнера.
}

export default function Typewriter({
  phrases,
  speed = 100,      // Дефолт: 100мс
  deleteSpeed = 50, // Дефолт: 50мс
  pauseTime = 2000, // Дефолт: 2 секунды любуемся текстом
  className = "",
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Если ты не передал фразы, мне нечего делать. Ухожу.
    if (!phrases || phrases.length === 0) return;

    const currentPhrase = phrases[currentPhraseIndex];

    // ЛОГИКА ПЕЧАТИ
    if (!isDeleting && currentCharIndex < currentPhrase.length) {
      const timeout = setTimeout(() => {
        // Берем подстроку от 0 до текущего индекса + 1
        setDisplayedText(currentPhrase.substring(0, currentCharIndex + 1));
        setCurrentCharIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } 
    
    // ЛОГИКА ПАУЗЫ (когда фраза дописана)
    else if (!isDeleting && currentCharIndex === currentPhrase.length) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);

      return () => clearTimeout(timeout);
    } 
    
    // ЛОГИКА УДАЛЕНИЯ
    else if (isDeleting && currentCharIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentPhrase.substring(0, currentCharIndex - 1));
        setCurrentCharIndex((prev) => prev - 1);
      }, deleteSpeed);

      return () => clearTimeout(timeout);
    } 
    
    // ПЕРЕХОД К СЛЕДУЮЩЕЙ ФРАЗЕ
    else if (isDeleting && currentCharIndex === 0) {
      setIsDeleting(false);
      // Зацикливаем индекс: если дошли до конца массива, прыгаем в начало
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }
  }, [currentCharIndex, currentPhraseIndex, isDeleting, phrases, speed, deleteSpeed, pauseTime]);

  return (
    /* 
       КОНТЕЙНЕР ПЕЧАТАЛКИ:
       - w-[160px]: Твой священный лимит ширины. 
         Если текст не влезет — он перенесется и разнесет тебе всю верстку навбара. 
         Если фраза короче — справа будет пустота. Крути это число под самую длинную фразу.
       - bg-white: Фон.
    */
    <div className={`w-[160px] ${className}`}>
      <span className="font-text font-medium text-base text-[#222222]">
        {displayedText}
        {/* 
           КАРЕТКА: 
           - animate-pulse: заставляет палочку мигать.
           - Если хочешь сменить символ — меняй "|" на что угодно.
        */}
        <span className="animate-pulse">|</span>
      </span>
    </div>
  );
}
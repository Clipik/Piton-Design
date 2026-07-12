'use client';

import React from 'react';

interface ArticleButtonProps {
  label: string;
  url: string;
  primary?: boolean;
}

export default function ArticleButton({ label, url, primary = false }: ArticleButtonProps) {
  // Базовые стили, совпадающие с вашей дизайн-системой (шрифт Golos_Text, скругление)
  const baseClass = "whitespace-nowrap h-[56px] px-8 rounded-full flex items-center justify-center text-[1.1rem] font-['Golos_Text'] font-medium transition-all w-full sm:w-auto cursor-pointer active:scale-[0.98]";
  
  // Цвета кнопок
  const primaryClass = "bg-[#FF0033] text-white hover:bg-[#222222]";
  const secondaryClass = "bg-white text-[#222222] border border-[#E5E7EB] hover:border-[#FF0033] hover:text-[#FF0033]";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClass} ${primary ? primaryClass : secondaryClass}`}
    >
      {label}
    </a>
  );
}
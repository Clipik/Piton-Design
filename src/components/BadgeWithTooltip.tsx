"use client";

import { useState } from "react";

interface BadgeWithTooltipProps {
  badge: string;
  label: string;
  className?: string;
}

export default function BadgeWithTooltip({ badge, label, className = "" }: BadgeWithTooltipProps) {
  const [open, setOpen] = useState(false);

  return (
    <div 
      className={`relative group/badge ${className}`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setOpen((prev) => !prev);
      }}
    >
      <div 
        className="w-8 h-8 shadow-2xl cursor-pointer"
        dangerouslySetInnerHTML={{ __html: badge }} 
      />

      <div 
        className={`absolute right-0 top-full mt-2 z-50 max-w-[200px] whitespace-normal md:whitespace-nowrap md:max-w-none bg-[#222222] text-white text-[0.75rem] font-['Golos_Text'] px-3 py-1.5 rounded-lg transition-all duration-200 pointer-events-none
          {/* Десктоп (ховер) */}
          md:opacity-0 md:invisible md:group-hover/badge:opacity-100 md:group-hover/badge:visible
          {/* Мобильный (клик) */}
          ${open ? 'max-md:opacity-100 max-md:visible' : 'max-md:opacity-0 max-md:invisible'}`}
      >
        {label}
        <div className="absolute bottom-full right-3 border-4 border-transparent border-b-[#222222]" />
      </div>
    </div>
  );
}
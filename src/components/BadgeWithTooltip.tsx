"use client";
import { useState } from "react";

export default function BadgeWithTooltip({ badge, label }: { badge: string; label: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative group" onClick={() => setOpen(!open)}>
      <div 
        className="w-9 h-9 cursor-pointer"
        dangerouslySetInnerHTML={{ __html: badge }} 
      />
      <div className={`absolute left-0 top-full mt-2 z-50 max-w-[200px] whitespace-normal bg-[#222222] text-white text-[0.75rem] font-['Golos_Text'] px-3 py-1.5 rounded-lg transition-all duration-200 pointer-events-none
        md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible
        ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        {label}
        <div className="absolute bottom-full left-3 border-4 border-transparent border-b-[#222222]" />
      </div>
    </div>
  );
}
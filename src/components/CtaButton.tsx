'use client';

import { useState } from 'react';

interface CtaButtonProps {
  locale: string;
  className?: string;
}

export default function CtaButton({ locale, className = "" }: CtaButtonProps) {
  const [isCopied, setIsCopied] = useState(false);
  const email = "piton.invest.prod@gmail.com"; 

  const baseStyles = "cursor-pointer bg-[#FF0033] text-white rounded-[9999px] flex items-center justify-center gap-3 transition-all duration-300 group";
  const combinedClasses = `${baseStyles} ${className}`;

  // --- РУССКАЯ ВЕРСИЯ (Телеграм) ---
  if (locale === 'ru') {
    return (
      <a
        href="https://t.me/liverans"
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
      >
        <span className="font-regular font-['Golos_Text']">Обсудить</span>
        
        {/* Контейнер иконки */}
        <div className="w-8 h-8 md:w-11 md:h-11 bg-white rounded-full flex items-center justify-center text-[#FF0033] flex-shrink-0 transition-transform relative overflow-hidden z-0">
            
            {/* --- ЛИНИИ СКОРОСТИ --- */}
            {/* Добавляем класс animate-speed-streak, который сработает при ховере группы */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-300">
               {/* Линия 1 */}
               <div className="animate-speed-streak absolute w-[2px] h-[12px] bg-[#FF0033] rounded-full opacity-0"
                    style={{ top: '0%', left: '50%', animationDelay: '0s' }}> 
                    {/* Убрал transform, поменял позицию старта */}
               </div>
               
               {/* Линия 2 */}
               <div className="animate-speed-streak absolute w-[2px] h-[18px] bg-[#FF0033] rounded-full opacity-0"
                    style={{ top: '20%', right: '20%', animationDelay: '0.2s' }}>
               </div>

               {/* Линия 3 */}
               <div className="animate-speed-streak absolute w-[2px] h-[8px] bg-[#FF0033] rounded-full opacity-0"
                    style={{ top: '-10%', right: '45%', animationDelay: '0.35s' }}>
               </div>
            </div>

            {/* --- САМОЛЕТ --- */}
            {/* Добавляем класс animate-turbulence */}
            <svg viewBox="0 0 20 17" fill="currentColor" className="w-4 h-3.5 md:w-5 md:h-4.5 relative -left-[1px] z-10 animate-turbulence">
              <path d="M1.374 7.169C6.758 4.831 10.343 3.277 12.143 2.523C17.266 0.385 18.343 0.015 19.035 0C19.189 0 19.528 0.031 19.758 0.215C19.943 0.369 19.989 0.569 20.02 0.723C20.051 0.877 20.081 1.2 20.051 1.446C19.774 4.369 18.574 11.462 17.958 14.723C17.697 16.108 17.189 16.569 16.697 16.615 C 15.62 16.708 14.804 15.908 13.774 15.231 C 12.143 14.169 11.235 13.508 9.651 12.462 C 7.82 11.262 9.004 10.6 10.051 9.523 C 10.328 9.246 15.051 4.938 15.143 4.554 C 15.158 4.508 15.158 4.323 15.051 4.231 C 14.943 4.138 14.789 4.169 14.666 4.2 C 14.497 4.231 11.912 5.954 6.881 9.354 C 6.143 9.862 5.481 10.108 4.881 10.092 C 4.22 10.077 2.958 9.723 2.004 9.415 C 0.851 9.046 -0.072 8.846 0.004 8.2 C 0.051 7.862 0.512 7.523 1.374 7.169 Z" />
            </svg>
        </div>
      </a>
    );
  }

  // --- АНГЛИЙСКАЯ ВЕРСИЯ (Email) ---
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Clipboard error', err);
    }
  };

  return (
    <div className={`relative ${className.includes('w-full') ? 'w-full' : 'inline-block'}`}>
      <button 
        onClick={handleCopy}
        className={`${combinedClasses} ${isCopied ? '!bg-green-500' : ''}`}
      >
        <span className="font-regular font-['Golos_Text']">
          {isCopied ? 'Copied!' : 'Email Us'}
        </span>
        <div className="w-8 h-8 md:w-11 md:h-11 bg-white rounded-full flex items-center justify-center text-[#FF0033] flex-shrink-0 transition-transform">
            {isCopied ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5 group-hover:animate-pulse">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
            )}
        </div>
      </button>
      
      {isCopied && (
         <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-50 whitespace-nowrap bg-gray-900 text-white px-3 py-1 rounded text-sm animate-in fade-in slide-in-from-top-2">
            Email copied!
         </div>
      )}
    </div>
  );
}
"use client";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import CtaButton from "./CtaButton";

interface PricingProps {
  locale: string;
  content: {
    title: string;
    from: string; // "от " или "from "
    services: Array<{
      id: number;
      topTags: string[];
      lottieSrc: string;
      title: string;
      tags: string[];
      description: string;
      price: string;
      time: string;
    }>;
  };
}

export default function Pricing({ locale, content }: PricingProps) {
  
  // Утилита для висячих предлогов (только для RU)
  const fixOrphans = (text: string) => {
    if (!text) return text;
    if (locale !== 'ru') return text;
    return text.replace(/(\s|^)([а-яА-ЯёЁ]{1,3})\s/g, '$1$2\u00A0');
  };

  // Красивый рендер цены с серым "от"
  const renderPrice = (text: string) => {
    const trigger = content.from; // Берем "от " или "from " из словаря
    if (text.toLowerCase().startsWith(trigger.toLowerCase())) {
      return (
        <>
          <span className="text-[#666666]">{trigger}</span>
          <span>{text.substring(trigger.length)}</span>
        </>
      );
    }
    return text;
  };

  return (
    <div id="services" className="w-full max-w-[1200px] mx-auto px-4 py-2">
      
      <div className="flex justify-center mb-16">
        <h2 className="text-[2rem] md:text-[3rem] font-['Unbounded'] font-semibold text-[#222222]">
          {content.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {content.services.map((item) => (
          <div 
            key={item.id} 
            className="flex flex-col w-full max-w-auto min-h-[577px] bg-[#F7F7FA] p-6 rounded-[1rem] transition-all"
          >
            
            {/* Тэги сверху */}
            <div className="flex flex-wrap gap-2 mb-3">
              {item.topTags.map((tag) => (
                <div 
                  key={tag} 
                  className="bg-white px-4 py-1 flex items-center justify-center"
                  style={{ borderRadius: '2450px' }}
                >
                  <span className="text-[0.85rem] font-regular text-[#222222] font-['Golos_Text']">
                    {tag}
                  </span>
                </div>
              ))}
            </div>

            {/* Lottie анимация */}
            <div className="bg-white rounded-[16px] w-full aspect-[16/10] flex items-center justify-center overflow-hidden mb-6">
              <DotLottieReact 
                src={item.lottieSrc} 
                loop 
                autoplay 
                className="w-full h-full" 
              />
            </div>

            {/* Заголовок услуги */}
            <h3 className="text-[1.25rem] font-['Golos_Text'] font-medium leading-tight text-[#222222] mb-4">
              {fixOrphans(item.title)}
            </h3>

            {/* Тэги состава услуги */}
            <div className="flex flex-wrap gap-2 mb-4">
              {item.tags.map((tag) => (
                <div key={tag} className="bg-white px-3 py-1 rounded-full">
                  <span className="text-[0.85rem] font-['Golos_Text'] text-[#222222]">{tag}</span>
                </div>
              ))}
            </div>

            {/* Описание */}
            <p className="text-[0.85rem] font-['Golos_Text'] text-[#222222] leading-relaxed opacity-80 mb-6">
              {fixOrphans(item.description)}
            </p>

            <div className="mt-auto">
              {/* Цена и Срок */}
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-[1.5rem] font-['Golos_Text'] font-medium text-[#222222]">
                  {renderPrice(item.price)}
                </span>
                {item.time && (
                  <span className="text-[1.5rem] font-medium text-[#222222] font-['Golos_Text']">
                    {renderPrice(item.time)}
                  </span>
                )}
              </div>

              {/* Кнопка с правильной локалью */}
              <CtaButton 
                locale={locale} 
                className="w-full h-[56px] mt-6 text-[1.25rem] px-4"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
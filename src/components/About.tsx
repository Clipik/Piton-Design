"use client";

interface AboutProps {
  locale: string;
  content: {
    title: string;
    benefits: Array<{
      id: number;
      title: string;
      description: string;
      videoName: string;
    }>;
  };
}

export default function About({ locale, content }: AboutProps) {
  
  const fixOrphans = (text: string) => {
    if (locale !== 'ru') return text;
    return text.replace(/(\s|^)([а-яА-ЯёЁ]{1,3})\s/g, '$1$2\u00A0');
  };

  return (
    // FIX 1: Добавил overflow-hidden (или overflow-x-clip), чтобы контент секции не ломал ширину сайта
    <section id="about" className="w-full max-w-[1200px] mx-auto px-4 py-8 overflow-hidden md:overflow-visible">
      
      <div className="flex justify-center mb-16">
        <h2 className="text-[2rem] md:text-[3rem] font-['Unbounded'] font-semibold text-[#222222]">
          {content.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {content.benefits.map((item) => (
          <div 
            key={item.id} 
            className="group relative bg-[#F7F7FA] rounded-[24px] p-6 flex flex-col justify-between min-h-[280px] md:min-h-[280px] transition-all"
          >
            
            {/* 
                FIX 2: Убрал translate-x-4 на мобилках. 
                Было: -translate-y-3 translate-x-4
                Стало: -translate-y-3 translate-x-0 sm:translate-x-4
                
                Теперь машина вылезает вправо только на экранах, где есть место.
            */}
            <div className="absolute top-0 right-0 w-[60%] h-[60%] md:w-[80%] md:h-[80%] z-20 -translate-y-3 translate-x-0 sm:translate-x-4 scale-115 md:translate-x-8 md:scale-100 pointer-events-none">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={`/videos/${item.videoName}.webp`}
                className="w-full h-full object-contain object-center"
                style={{ filter: 'brightness(120%) contrast(115%)' }}
              >
                <source src={`/videos/${item.videoName}.webm`} type="video/webm" />
                <source src={`/videos/${item.videoName}.mov`} type="video/quicktime" />
              </video>
            </div>

            <div className="relative z-10 mt-auto flex flex-col gap-3 max-w-[90%] md:max-w-[80%]">
              <h3 className="text-[2rem] font-['Golos_Text'] font-semibold leading-tight text-[#222222]">
                {fixOrphans(item.title)}
              </h3>
              
              <p className="text-[0.9rem] font-['Golos_Text'] text-[#222222] leading-relaxed opacity-80">
                {fixOrphans(item.description)}
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
import React from "react";
import Navbar from "@/components/Navbar";
import { getContent } from "@/data/content"; // Проверь путь импорта

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  const content = getContent(locale).privacyPage;

  return (
    <div className="min-h-screen bg-white">
      <Navbar locale={locale} />

      <main className="w-full max-w-[1200px] mx-auto px-4 py-12 md:py-16">
        <div className="w-full max-w-[900px] mx-auto mt-14">
          <h1 className="text-[2rem] md:text-[3rem] font-['Unbounded'] font-semibold text-[#222222] leading-[1.1] mb-8">
            {content.title}
          </h1>
          
          <div className="text-[1rem] md:text-[1.125rem] font-['Golos_Text'] text-[#222222] leading-relaxed opacity-90 whitespace-pre-wrap">
            {content.text}
          </div>
        </div>
      </main>
    </div>
  );
}
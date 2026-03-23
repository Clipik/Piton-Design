"use client";
import { useRef, useState } from "react";
import Link from "next/link";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  category: string;
  image: string;
  url: string;
}

interface BlogProps {
  locale: string;
  title: string;
  posts: BlogPost[];
}

export default function Blog({ locale, title, posts }: BlogProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? 420 : -420, behavior: "smooth" });
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 py-8">
      <div className="flex justify-center mb-16">
        <h2 className="text-[2rem] md:text-[3rem] font-['Unbounded'] font-semibold text-[#222222]">
          {title}
        </h2>
      </div>

      {/* Карточки */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/${locale}/blog/${post.slug}`}
            className="flex-shrink-0 w-[80vw] md:w-[420px] rounded-[1rem] overflow-hidden bg-[#F7F7FA] snap-start group"
          >
            {/* Картинка */}
            <div className="w-full aspect-[16/10] bg-[#FFFFFF] overflow-hidden">
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
            </div>
            {/* Текст */}
            <div className="p-4 sm:p-6">
              <p className="text-[1rem] md:text-[1.25rem] font-['Golos_Text'] font-medium text-[#222222] leading-snug mb-2">
                {post.title}
              </p>
              <span className="text-[1rem] font-['Golos_Text'] text-[#888888]">
                {post.category}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Стрелки */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-200
            ${canScrollLeft ? "border-[#222222] text-[#222222] hover:bg-[#222222] hover:text-white" : "border-[#D0D0D0] text-[#D0D0D0] cursor-default"}`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-200
            ${canScrollRight ? "border-[#222222] text-[#222222] hover:bg-[#222222] hover:text-white" : "border-[#D0D0D0] text-[#D0D0D0] cursor-default"}`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      </div>
    </section>
  );
}
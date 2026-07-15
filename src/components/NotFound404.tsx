"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";

type Locale = "ru" | "en";

const dict: Record<Locale, { home: string; title: string }> = {
  ru: {
    home: "На главную",
    title: "Страница не найдена",
  },
  en: {
    home: "Back home",
    title: "Page not found",
  },
};

interface NotFound404Props {
  // Если локаль уже известна (передана из [locale]/not-found.tsx) — берём её.
  locale?: Locale;
}

export function NotFound404({ locale }: NotFound404Props) {
  const pathname = usePathname();

  const pathLocale = useMemo<Locale | null>(() => {
    const seg = pathname?.split("/")[1];
    return seg === "ru" || seg === "en" ? seg : null;
  }, [pathname]);

  const knownLocale = locale ?? pathLocale;


  const [browserLocale, setBrowserLocale] = useState<Locale | null>(null);

  useEffect(() => {
    if (knownLocale) return; // локаль и так точно известна, апгрейд не нужен
    setBrowserLocale(navigator.language.startsWith("ru") ? "ru" : "en");
  }, [knownLocale]);

  const activeLocale: Locale = knownLocale ?? browserLocale ?? "ru";

  const t = dict[activeLocale];
  const homeHref = `/${activeLocale}`;

  return (
    <div className="min-h-screen bg-white">
      <Navbar locale={activeLocale} />

      <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-5 pt-28 text-center">
        <img
          src="/404.svg"
          alt={t.title}
          width={320}
          height={260}
          className="w-[320px] max-w-[80vw] h-auto"
        />

        <Link
          href={homeHref}
          className="inline-flex items-center justify-center rounded-full bg-[#111111] text-white px-7 py-3 text-base font-medium font-['Golos_Text'] transition-opacity hover:opacity-85 active:scale-[0.98]"
        >
          {t.home}
        </Link>

        <h1
          className="font-heading font-extrabold text-[color:var(--color-primary)] leading-none"
          style={{ fontSize: "clamp(72px, 15vw, 160px)" }}
        >
          404
        </h1>

        <p className="sr-only">{t.title}</p>
      </main>
    </div>
  );
}
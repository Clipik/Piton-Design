import type { Metadata } from "next";
import { Unbounded, Golos_Text } from "next/font/google";
import "@/app/globals.css";
import { PsychedelicCursor } from "@/components/PsychedelicCursor";
import { CursorLoader } from "@/components/CursorLoader";
import Script from "next/script";

import { ViewTransition as ViewTransition } from "react";

// Это НАСТОЯЩИЙ корневой layout для всей публичной части сайта
// (группа роутов (site) — папка в скобках, на URL не влияет).
// html/body/CSS/шрифты рендерятся здесь ровно один раз, единообразно
// для ЛЮБОГО пути внутри (site) — включая not-found/fallback-кейсы.
// Именно поэтому Next.js больше не подставляет свой внутренний
// DefaultLayout и не плодит вложенные <html>.

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const golosText = Golos_Text({
  variable: "--font-golos-text",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Piton Design",
  description:
    "Дизайн студия Piton Design, создаём интерфейсы и сайты для IT-компаний и стартапов. UX/UI дизайн, веб-дизайн, дизайн мобильных приложений, дизайн дашбордов и админ-панелей.",
};

const METRIKA_ID = 106115411;

export default function SiteRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link
          rel="preload"
          as="image"
          href="/photos/coinshero-placeholder.webp"
          fetchPriority="high"
        />
      </head>
      <body className={`${unbounded.variable} ${golosText.variable} antialiased bg-white`}>
        <CursorLoader />

        <ViewTransition>{children}</ViewTransition>

        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=${METRIKA_ID}", "ym");

            ym(${METRIKA_ID}, "init", {
                defer: true,
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true,
                ecommerce:"dataLayer"
            });
          `}
        </Script>
        <noscript>
          <div>
            <img
              src={`https://mc.yandex.ru/watch/${METRIKA_ID}`}
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}
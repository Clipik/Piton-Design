import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  async headers() {
    return [
      {
        // Это паттерн для всех файлов в папке /videos, /fonts, /photos
        // Я вижу эти папки у тебя в public.
        source: '/:all*(svg|jpg|png|webp|webm|mp4|woff2?|ttf)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            // public, max-age=31536000 (1 год), immutable
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  /* config options here */
  
  // Твоя экспериментальная херня, пусть будет
  reactCompiler: true, 

  // ВАЖНО: Это заставляет Next.js выплюнуть чистый HTML/CSS/JS в папку /out
  output: "export",

  // ВАЖНО: GitHub Pages — это тупой файловый сервер. 
  // Он не умеет ресайзить картинки. Выключаем, иначе картинки сдохнут.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
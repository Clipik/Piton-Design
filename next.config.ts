import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
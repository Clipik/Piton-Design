import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true, 

  // Включаем статический экспорт только для финальной сборки
  output: isProd ? "export" : undefined,

  images: {
    unoptimized: true,
  },

  experimental: {
    viewTransition: true,
  },
};

// Свойство headers несовместимо с опцией output: "export".
// Добавляем его динамически только во время локальной разработки.
if (!isProd) {
  nextConfig.headers = async () => {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|webm|mp4|woff2?|ttf)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  };
}

export default nextConfig;
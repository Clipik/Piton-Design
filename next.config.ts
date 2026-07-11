import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  async headers() {
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
  },
  /* config options here */
  
  reactCompiler: true, 

  output: "export",

  images: {
    unoptimized: true,
  },

  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { 
        protocol: "https",
        hostname: "randomuser.me",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com", // Adicionado domínio do YouTube
      },
      {
        protocol: "https",
        hostname: "i.vimeocdn.com", // Adicionado domínio do Vimeo
      },
    ],
  },
};

export default nextConfig;

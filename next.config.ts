import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/videos/:path*",
        headers: [
          {
            key: "Content-Type",
            value: "video/webm",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

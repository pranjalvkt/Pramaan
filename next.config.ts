import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  async redirects() {
    return [
      { source: "/patron", destination: "/support", permanent: true },
      { source: "/patrons", destination: "/support", permanent: true },
    ];
  },
};
export default nextConfig;

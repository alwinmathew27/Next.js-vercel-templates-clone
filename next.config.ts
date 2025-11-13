import type { NextConfig } from "next";
/** @type {NextConfig} */
const nextConfig: NextConfig = {
  images: {
    domains: [
      'images.ctfassets.net',
      'avatars.githubusercontent.com',
      "vercel.com"
    ]
  }
};
export default nextConfig;

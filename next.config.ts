// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
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

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "huggingface.co" },
      { protocol: "https", hostname: "ollama.com" },
      { protocol: "https", hostname: "min.io" },
      { protocol: "https", hostname: "qianwen-res.oss-cn-beijing.aliyuncs.com" },
      { protocol: "https", hostname: "www.trychroma.com" },
    ],
  },
};

export default nextConfig;

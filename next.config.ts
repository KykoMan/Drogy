import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    const domain = process.env.NEXT_PUBLIC_SITE_DOMAIN || "hlasprotidrogam.vercel.app";
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: `www.${domain}`,
          },
        ],
        destination: `https://${domain}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

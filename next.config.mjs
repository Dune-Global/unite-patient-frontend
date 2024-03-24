/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["unitestoreacc.blob.core.windows.net"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/sign-in",
        permanent: false,
      },
      {
        source: "/dashboard",
        destination: "/dashboard/overview",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

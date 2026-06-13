/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost", //FIXME: CHANGE ON PROD (HARDCODED)
      },
      {
        protocol: 'https',
        hostname: 'lvivmetalwp.click', //FIXME: CHANGE ON PROD (HARDCODED)
        port: '',
        pathname: '/wp-content/**',
      },
    ],
  },
};

export default nextConfig;

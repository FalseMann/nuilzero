/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/xzrj9FfszD",
        permanent: false,
        basePath: false,
      },
      {
        source: "/github",
        destination: "https://github.com/FalseMann/nuilzero",
        permanent: false,
        basePath: false,
      },
      {
        source: "/twitch",
        destination: "https://twitch.tv/nuilzero",
        permanent: false,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;

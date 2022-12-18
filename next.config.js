/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/xzrj9FfszD",
        permanent: true,
        basePath: false,
      },
      {
        source: "/github",
        destination: "https://github.com/FalseMann/nuilzero",
        permanent: true,
        basePath: false,
      },
      {
        source: "/subscribe",
        destination: "https://twitch.tv/nuilzero/subscribe",
        permanent: true,
        basePath: false,
      },
      {
        source: "/twitch",
        destination: "https://twitch.tv/nuilzero",
        permanent: true,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;

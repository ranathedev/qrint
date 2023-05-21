/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: { unoptimized: true },
  env: {
    X_RapidAPI_Key: process.env.X_RapidAPI_Key,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

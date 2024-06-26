/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: { unoptimized: true },
  env: {
    X_RAPIDAPI_KEY: process.env.X_RAPIDAPI_KEY,
    DISCORD_WEBHOOK_URL: process.env.DISCORD_WEBHOOK_URL,
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

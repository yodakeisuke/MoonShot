/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    config.plugins.push(new webpack.IgnorePlugin(/\.stor(ies|y).[tj]sx$/));
    return config
  }
}

module.exports = nextConfig

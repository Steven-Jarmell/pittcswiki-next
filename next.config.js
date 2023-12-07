/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "md", "ts", "tsx"],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    })

    config.module.rules.push({
      test: /\.mdx$/,
      use: "raw-loader",
    })
    return config
  },
  experimental: {
    webpackBuildWorker: true,
  },
}

module.exports = nextConfig

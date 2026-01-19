const path = require("path")

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

    config.resolve.fallback = {
      fs: false,
      path: false,
    }

    // Fix for @dagrejs/dagre requiring @dagrejs/graphlib
    config.resolve.alias = {
      ...config.resolve.alias,
      "@dagrejs/graphlib": "@dagrejs/graphlib",
      "@dagrejs/dagre": path.resolve(
        __dirname,
        "node_modules/@dagrejs/dagre/dist/dagre.js"
      ),
    }

    return config
  },
  experimental: {
    // webpackBuildWorker: true,
  },
}

module.exports = nextConfig

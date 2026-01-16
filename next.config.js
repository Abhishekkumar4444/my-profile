const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["res.cloudinary.com", "media.dev.to", "media2.dev.to"],
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
  },
};

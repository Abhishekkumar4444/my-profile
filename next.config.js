const path = require("path");

module.exports = {
<<<<<<< HEAD
  images: {
    domains: ['res.cloudinary.com', 'media.dev.to'],
    unoptimized: true, // 🔥 important
  },
  output: "export",
};

=======
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
>>>>>>> 16024f59787a4ac759dadcfecbbf104d00e1d924

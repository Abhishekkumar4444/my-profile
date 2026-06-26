const repoName = "developer-portfolio";

module.exports = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'media.dev.to' }
    ],
    unoptimized: true,
  },
  output: "export",

  basePath: `/${repoName}`,
};
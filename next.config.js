const repoName = "developer-portfolio";
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'media.dev.to' }
    ],
    unoptimized: true,
  },
  output: "export",

  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
};
const repoName = "developer-portfolio";
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  images: {
    domains: ['res.cloudinary.com', 'media.dev.to'],
    unoptimized: true,
  },
  output: "export",

  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
};
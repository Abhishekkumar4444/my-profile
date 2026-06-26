// GitHub Actions sets this environment variable automatically
const isGithubActions = process.env.GITHUB_ACTIONS || false;

module.exports = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'media.dev.to' }
    ],
    unoptimized: true,
  },
  output: "export",

  // Set basePath to /my-profile ONLY for GitHub Pages, else empty for Render/Local
  basePath: isGithubActions ? "/my-profile" : "",
};
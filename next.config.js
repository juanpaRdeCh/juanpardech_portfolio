const nextConfig = {
  output: "export",  // Required for static export
  images: {
    unoptimized: true,  // Fixes issues with Next.js Image component on static hosting
  },
  basePath: '/juanpaRdeCh.github.io',  // Add this line
};

module.exports = nextConfig;

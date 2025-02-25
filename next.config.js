// const nextConfig = {
//   output: "export",  // Required for static export
//   images: {
//     unoptimized: true,  // Fixes issues with Next.js Image component on static hosting
//   },
//   basePath: '',  // Add this line
  
// };

// module.exports = nextConfig;

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",  // Required for static export
  images: {
    unoptimized: true,  // Fixes Next.js Image component for static hosting
  },
  basePath: isProd ? "/juanpardech_portfolio" : "",  // Set repository name here
  assetPrefix: isProd ? "/juanpardech_portfolio" : "",  // Fixes static file paths
};

module.exports = nextConfig;

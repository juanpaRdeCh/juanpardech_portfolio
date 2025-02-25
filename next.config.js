/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/juanpaRdeCh.github.io",  // ✅ Ensure this matches your repo name
  assetPrefix: "/juanpaRdeCh.github.io/",  // ✅ Leading slash added
};

module.exports = nextConfig;

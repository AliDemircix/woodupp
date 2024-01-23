//Local
// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
//Deployed
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

const withVideos = require('next-videos');

module.exports = withVideos();

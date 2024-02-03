/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/woodupp',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
};

const withVideos = require('next-videos');
module.exports = withVideos(nextConfig);

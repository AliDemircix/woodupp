//Local
// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
//Deployed
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', //for deployment
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

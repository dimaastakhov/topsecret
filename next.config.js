module.exports = {
  experimental: {
    optimizeFonts: true,
    optimizeImages: true,
  },
  images: {
    domains: ["localhost", process.env.NEXT_PUBLIC_API_HOST],
  },
};

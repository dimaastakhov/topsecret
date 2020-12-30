module.exports = {
  experimental: {
    optimizeFonts: true,
    optimizeImages: true,
  },
  images: {
    domains: [
      "localhost",
      "128.199.61.23",
      "topsecret.ga",
      process.env.NEXT_PUBLIC_API_HOST,
    ],
  },
};

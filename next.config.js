/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.(png|jp(e*)g|svg|gif)$/,
  //     type: "asset/resource",
  //   });
  //   return config;
  // },
};

module.exports = nextConfig;

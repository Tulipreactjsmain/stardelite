/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    INTERCOM_APP_ID: process.env.INTERCOM_APP_ID,
  },

};

module.exports = nextConfig;

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "loremflickr.com",
      "cdn.sanity.io"
    ]
  }
}

module.exports = nextConfig

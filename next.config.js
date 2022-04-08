/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // whitelisted images domains -- means trudted 
  images: {
    // no https:// just name of it //
    domains: ['placekitten.com']
  }
}

module.exports = nextConfig
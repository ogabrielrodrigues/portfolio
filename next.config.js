/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: ["github.com", "raw.githubusercontent.com"],
	},
};

module.exports = nextConfig;

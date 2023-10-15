/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:slug*',
                destination: 'https://cotuong.azurewebsites.net/api/:slug*',
            },
            {
                source: '/hubs/:slug*',
                destination: 'https://cotuong.azurewebsites.net/hubs/:slug*',
            },
        ]
    },
}

module.exports = nextConfig

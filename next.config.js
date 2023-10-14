/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:slug*',
                destination: 'https://cotuong.azurewebsites.net/api/:slug*',
            },
        ]
    },
}

module.exports = nextConfig

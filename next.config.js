/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects () {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true
            }
        ]
    },
    // output: 'export',
}

module.exports = nextConfig


module.exports = {
  eslint: { ignoreDuringBuilds: true },
  images: {
    domains: ['cdn.sittingonclouds.net']
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader'
    })

    return config
  },
  async headers () {
    return [
      {
        source: '/:all*(svg|jpg|png|webp)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate'
          }
        ]
      }
    ]
  },
  swcMinify: true
}

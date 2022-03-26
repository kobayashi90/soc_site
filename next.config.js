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
  /* async headers () {
    return [
      {
        source: '/_next/image',
        headers: [
          { key: '759154', value: '759154' }
        ]
      }
    ]
  }, */
  swcMinify: true
}

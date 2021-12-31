module.exports = {
  eslint: { ignoreDuringBuilds: true },
  images: {
    domains: ['cdn.sawako.party']
  },
  async redirects () {
    return [
      { source: '/studio/:slug', destination: 'https://www.sittingonclouds.net/studio/:slug', permanent: false }
    ]
  },

  webpack: config => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader'
    })

    return config
  }
}

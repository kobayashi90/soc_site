module.exports = {
  eslint: { ignoreDuringBuilds: true },
  domains: ['sittingonclouds.net'],
  async redirects () {
    return [
      { source: '/anim/:id', destination: 'https://www.sittingonclouds.com/anim/:id', permanent: false },
      { source: '/studio/:slug', destination: 'https://www.sittingonclouds.com/studio/:slug', permanent: false }
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

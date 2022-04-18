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
        source: '/_next/image',
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
  /* i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'de'],
    localeDetection: false
  } */
}

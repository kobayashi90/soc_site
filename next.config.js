module.exports = {
  eslint: { ignoreDuringBuilds: true },
  async redirects () {
    return [
      { source: '/platform/:slug', destination: 'https://www.sittingonclouds.net/platform/:slug', permanent: false },
      { source: '/game/:slug', destination: 'https://www.sittingonclouds.net/game/:slug', permanent: false },
      { source: '/anim/:id', destination: 'https://www.sittingonclouds.net/anim/:id', permanent: false },
      { source: '/studio/:slug', destination: 'https://www.sittingonclouds.net/studio/:slug', permanent: false }
    ]
  }
}

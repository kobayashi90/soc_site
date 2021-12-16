module.exports = {
  eslint: { ignoreDuringBuilds: true },
  async redirects () {
    return [
      { source: '/anim/:id', destination: 'https://www.sittingonclouds.net/anim/:id', permanent: false },
      { source: '/studio/:slug', destination: 'https://www.sittingonclouds.net/studio/:slug', permanent: false }
    ]
  }
}

const color = '#1c63f2'

module.exports = {
  path: '/favicons/',

  background: color,
  theme_color: color,
  appleStatusBarStyle: 'default',

  scope: '/',
  start_url: '/',

  display: 'standalone',
  orientation: 'portrait',

  logging: false,
  html: 'icons.html',
  pipeHTML: true,
  replace: true,

  icons: {
    android: {
      background: color,
      offset: 5
    },
    appleIcon: {
      background: color,
      offset: 5
    },
    appleStartup: {
      background: color,
      offset: 10
    },
    coast: false,
    favicons: {
      background: color,
      offset: 5
    },
    firefox: {
      background: color,
      offset: 10,
      overlayGlow: false
    },
    windows: {
      background: color,
      offset: 5
    },
    yandex: false
  }
}

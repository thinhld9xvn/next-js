const withPlugins = require('next-compose-plugins')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const PWAConfig = {
  pwa: {
    dest: 'public',
    //fallbacks: {
      //image: '/static/images/fallback.png',
      // document: '/other-offline',  // if you want to fallback to a custom page other than /_offline
      // font: '/static/font/fallback.woff2',
      // audio: ...,
      // video: ...,
    //},
    runtimeCaching
  },
}

module.exports = withPlugins(
  [withPWA, PWAConfig],
  { 
    reactStrictMode: true,
    generateBuildId: async () => {
      // You can, for example, get the latest git commit hash here
      return 'brity-app'
    },
    images: {
      domains: ['api.brity.vn'],
    },
    env: {
      WP_SITE_URL: process.env.WP_SITE_URL,
      WP_API_SITE_URL: process.env.WP_API_SITE_URL,
      WP_API_URL: process.env.WP_API_URL,
    },   
  }
)
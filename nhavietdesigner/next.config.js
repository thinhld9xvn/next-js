module.exports =  { 
  reactStrictMode: true,
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return 'nhavietdesign-app'
  },
  images: {
    domains: [process.env.WP_SITE_DOMAIN],
  },
  env: {
    WP_SITE_URL: process.env.WP_SITE_URL,
    WP_API_URL: process.env.WP_API_URL,
  },   
}
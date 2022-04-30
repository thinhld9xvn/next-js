module.exports =  { 
  reactStrictMode: true,
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return process.env.APP_NAME
  },
  async rewrites() {
    return [
      {
        source : `/${process.env.NEWS_PAGE_URL}`,
        destination : '/blog'
      },
      {
        source : `/${process.env.SEARCH_PAGE_URL}`,
        destination : '/search'
      },
      {
        source : `/${process.env.PRODUCTS_PAGE_URL}`,
        destination : '/products'
      },
      {
        source : `/${process.env.PROJECTS_PAGE_URL}`,
        destination : '/projects'
      },
      {
        source : `/${process.env.SERVICES_PAGE_URL}`,
        destination : '/services'
      },
      {
        source : `/${process.env.CONTACT_PAGE_URL}`,
        destination : '/contact-us'
      },
      {
        source : `/${process.env.INTRO_PAGE_URL}`,
        destination : '/about'
      },
      {
        source : `/${process.env.SERVICES_TAX_REWRITE}/:slug`,
        destination : '/dich-vu/category/:slug'
      },
      {
        source : `/${process.env.SERVICES_POST_TYPE_REWRITE}/:slug`,
        destination : '/dich-vu/single/:slug'
      },
      {
        source : `/${process.env.PRODUCTS_TAX_REWRITE}/:slug`,
        destination : '/san-pham/category/:slug'
      },
      {
        source : `/${process.env.PRODUCTS_POST_TYPE_REWRITE}/:slug`,
        destination : '/san-pham/single/:slug'
      },
      {
        source : `/${process.env.PROJECTS_TAX_REWRITE}/:slug`,
        destination : '/du-an/category/:slug'
      },
      {
        source : `/${process.env.PROJECTS_POST_TYPE_REWRITE}/:slug`,
        destination : '/du-an/single/:slug'
      },
      {
        source : `/:slug`,
        destination : '/middleware/:slug'
      },
    ]
  },      
  images: {
    domains: [process.env.WP_SITE_DOMAIN, process.env.SITE_DOMAIN],
  },
  env: {
    WP_SITE_URL: process.env.WP_SITE_URL,
    WP_API_URL: process.env.WP_API_URL,
    SITE_DOMAIN : process.env.SITE_DOMAIN,
    WPCF7_ID : process.env.WPCF7_ID,
    APP_NAME: process.env.APP_NAME,
    APP_SLUG: process.env.APP_SLUG,
    APP_LANG: process.env.APP_LANG,
    NEWS_PAGE_URL: process.env.NEWS_PAGE_URL,
    SEARCH_PAGE_URL: process.env.SEARCH_PAGE_URL,
    PRODUCTS_PAGE_URL: process.env.PRODUCTS_PAGE_URL,
    SERVICES_PAGE_URL: process.env.SERVICES_PAGE_URL,
    CONTACT_PAGE_URL: process.env.CONTACT_PAGE_URL,
    INTRO_PAGE_URL : process.env.INTRO_PAGE_URL,
    POSTS_POST_TYPE : process.env.POSTS_POST_TYPE,
    PAGE_POST_TYPE : process.env.PAGE_POST_TYPE,
    POSTS_TAX : process.env.POSTS_TAX,
    SERVICES_POST_TYPE : process.env.SERVICES_POST_TYPE,
    SERVICES_POST_TYPE_REWRITE : process.env.SERVICES_POST_TYPE_REWRITE,
    PRODUCTS_POST_TYPE : process.env.PRODUCTS_POST_TYPE,
    PRODUCTS_POST_TYPE_REWRITE : process.env.PRODUCTS_POST_TYPE_REWRITE,
    SERVICES_TAX : process.env.SERVICES_TAX,
    SERVICES_TAX_REWRITE : process.env.SERVICES_TAX_REWRITE,
    PRODUCTS_TAX : process.env.PRODUCTS_TAX,
    PRODUCTS_TAX_REWRITE : process.env.PRODUCTS_TAX_REWRITE,
    PROJECTS_POST_TYPE : process.env.PROJECTS_POST_TYPE,
    PROJECTS_POST_TYPE_REWRITE : process.env.PROJECTS_POST_TYPE_REWRITE,
    PROJECTS_TAX : process.env.PROJECTS_TAX,
    PROJECTS_TAX_REWRITE : process.env.PROJECTS_TAX_REWRITE,
    WP_RANKMATH_API_URL : process.env.WP_RANKMATH_API_URL
  },   
}
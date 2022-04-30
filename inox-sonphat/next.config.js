const { PAGES } = require("./constants/constants");
const { INTRO, PRODUCTS, BLOG, CONTACT, CHECKOUT, CARTS, SEARCH} = PAGES;
module.exports =  { 
  i18n: {
    locales: ['vi'],
    defaultLocale: 'vi',
  },
  reactStrictMode: true,
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return 'inox-sonphat-app'
  },
  async rewrites() {
    return [
      /*{
        source : `/en/${INTRO.EN.name}`,
        destination : '/about',
        locale: false,
      },*/
      {
        source : `/vi/${INTRO.VI.name}`,
        destination : '/about',
        locale: false,
      },
     /* {
        source : '/en/products/:slug',
        destination : '/products/:slug',
        locale: false,
      },*/
      {
        source : '/vi/products/:slug',
        destination : '/products/:slug',
        locale: false,
      },
      /*{
        source : '/en/products-category/:slug',
        destination : '/products/categories/:slug',
        locale: false,
      },*/
      {
        source : '/vi/products-category/:slug',
        destination : '/products/categories/:slug',
        locale: false,
      },
      /*{
        source : '/en/products-category/:slug/:slug',
        destination : '/products/categories/:slug',
        locale: false,
      },
      {
        source : '/en/products-category/:slug/:slug/:slug',
        destination : '/products/categories/:slug',
        locale: false,
      },*/
      {
        source : '/vi/products-category/:slug/:slug',
        destination : '/products/categories/:slug',
        locale: false,
      },
      {
        source : '/vi/products-category/:slug/:slug/:slug',
        destination : '/products/categories/:slug',
        locale: false,
      },
      {
        source : `/vi/${PRODUCTS.VI.name}`,
        destination : '/products',
        locale: false,
      },
      /*{
        source : `/en/${PRODUCTS.EN.name}`,
        destination : '/products',
        locale: false,
      },      
      {
        source :  `/en/${BLOG.EN.name}`,
        destination : '/blog',
        locale: false,
      },*/
      {
        source : `/vi/${BLOG.VI.name}`,
        destination : '/blog',
        locale: false,
      },
      /*{
        source : `/en/${CONTACT.EN.name}`,
        destination : '/contact',
        locale: false,
      },*/
      {
        source : `/vi/${CONTACT.VI.name}`,
        destination : '/contact',
        locale: false,
      },
      /*{
        source : `/en/${CHECKOUT.EN.name}`,
        destination : '/checkout',
        locale: false,
      },*/
      {
        source : `/vi/${CHECKOUT.VI.name}`,
        destination : '/checkout',
        locale: false,
      },
      /*{
        source : `/en/${CARTS.EN.name}`,
        destination : '/carts',
        locale: false,
      },*/
      {
        source : `/vi/${CARTS.VI.name}`,
        destination : '/carts',
        locale: false,
      },
      /*{
        source : `/en/${SEARCH.EN.name}`,
        destination : '/search',
        locale: false,
      },*/
      {
        source : `/vi/${SEARCH.VI.name}`,
        destination : '/search',
        locale: false,
      },
      /*{
        source : '/en/:slug',
        destination : '/pages/:slug',
        locale: false, //
      },*/
      {
        source : '/vi/:slug',
        destination : '/pages/:slug',
        locale: false,
      },
    ]
  },     
  images: {
    domains: [process.env.WP_SITE_DOMAIN],
  },
  env: {
    WP_SITE_URL: process.env.WP_SITE_URL,
    WP_API_URL: process.env.WP_API_URL,
    HOME_VI: process.env.HOME_VI,
    //HOME_EN: process.env.HOME_EN,
    INTRO_VI: process.env.INTRO_VI,
    //INTRO_EN: process.env.INTRO_EN,
    BLOG_VI: process.env.BLOG_VI,
    //BLOG_EN: process.env.BLOG_EN,
    CONTACT_VI: process.env.CONTACT_VI,
    //CONTACT_EN: process.env.CONTACT_EN,
    PRODUCTS_VI: process.env.PRODUCTS_VI,
    //PRODUCTS_EN: process.env.PRODUCTS_EN,
    SEARCH_VI: process.env.SEARCH_VI,
    //SEARCH_EN: process.env.SEARCH_EN,
    CARTS_VI: process.env.CARTS_VI,
   // CARTS_EN: process.env.CARTS_EN,
    CHECKOUT_VI: process.env.CHECKOUT_VI,
    //CHECKOUT_EN: process.env.CHECKOUT_EN,
    CONSUMER_KEY: process.env.CONSUMER_KEY,
    CONSUMER_SECRET: process.env.CONSUMER_SECRET,
  },   
}
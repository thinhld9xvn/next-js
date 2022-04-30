const { PAGES } = require("./constants/constants");
const { INTRO, PROJECTS, MEDIA, TUYENDUNG, BLOG, VIDEO, CONTACT, SEARCH } = PAGES;
module.exports =  { 
  i18n: {
    locales: ['vi', 'en'],
    defaultLocale: 'vi',
  },
  reactStrictMode: true,
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return 'galio-design-app'
  },
  async rewrites() {
    return [
      {
        source : `/en/${INTRO.EN.name}`,
        destination : '/gioithieu',
        locale: false,
      },
      {
        source : `/vi/${INTRO.VI.name}`,
        destination : '/gioithieu',
        locale: false,
      },
      {
        source : `/en/${PROJECTS.EN.name}`,
        destination : '/duan',
        locale: false,
      },
      {
        source : `/vi/${PROJECTS.VI.name}`,
        destination : '/duan',
        locale: false,
      },
      {
        source : '/en/projects/:slug',
        destination : '/projects/:slug',
        locale: false,
      },
      {
        source : '/vi/projects/:slug',
        destination : '/projects/:slug',
        locale: false,
      },
      {
        source : '/vi/projects-category/:slug',
        destination : '/duan-category/:slug',
        locale: false,
      },
      {
        source : '/en/projects-category/:slug',
        destination : '/duan-category/:slug',
        locale: false,
      },
      {
        source : `/en/${MEDIA.EN.name}`,
        destination : '/media',
        locale: false,
      },
      {
        source : `/vi/${MEDIA.VI.name}`,
        destination : '/media',
        locale: false,
      },
      {
        source : `/en/${BLOG.EN.name}`,
        destination : '/blog',
        locale: false,
      },
      {
        source : `/vi/${BLOG.VI.name}`,
        destination : '/blog',
        locale: false,
      },
      {
        source : '/en/:slug(.*.html)',
        destination : '/blog/:slug',
        locale: false,
      },
      {
        source : '/vi/:slug(.*.html)',
        destination : '/blog/:slug',
        locale: false,
      },
      {
        source : `/en/${VIDEO.EN.name}`,
        destination : '/video',
        locale: false,
      },
      {
        source : `/vi/${VIDEO.VI.name}`,
        destination : '/video',
        locale: false,
      },
      {
        source : `/en/${TUYENDUNG.EN.name}`,
        destination : '/tuyendung',
        locale: false,
      },
      {
        source : `/vi/${TUYENDUNG.VI.name}`,
        destination : '/tuyendung',
        locale: false,
      },
      {
        source : `/en/${CONTACT.EN.name}`,
        destination : '/lienhe',
        locale: false,
      },
      {
        source : `/vi/${CONTACT.VI.name}`,
        destination : '/lienhe',
        locale: false,
      },
      {
        source : `/en/${SEARCH.EN.name}`,
        destination : '/search',
        locale: false,
      },
      {
        source : `/vi/${SEARCH.VI.name}`,
        destination : '/search',
        locale: false,
      }
    ]
  },      
  images: {
    domains: [process.env.WP_SITE_DOMAIN],
  },
  env: {
    WP_SITE_URL: process.env.WP_SITE_URL,
    WP_API_URL: process.env.WP_API_URL,
    WP_CONTACT_FORM_VI: process.env.WP_CONTACT_FORM_VI,
    WP_CONTACT_FORM_EN: process.env.WP_CONTACT_FORM_EN,
    WP_GIFTS_FORM_VI: process.env.WP_GIFTS_FORM_VI,
    WP_GIFTS_FORM_EN: process.env.WP_GIFTS_FORM_EN,
  },   
}
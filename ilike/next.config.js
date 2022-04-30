module.exports =  { 
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:slug(e-magazine.html)',
        destination: '/emagazine'
      },
      {
        source: '/:slug(bong-da.html)',
        destination: '/bongda'
      },
      {
        source: '/:slug(lich-thi-dau.html)',
        destination: '/lichthidau'
      },
      {
        source: '/:slug(.*.html)',
        destination: '/middleware-route', // The :path parameter isn't used here so will be automatically passed in the query
      },
      /*{
        source: '/:slug(.*-nt.*[a-zA-Z0-9]{4,4}.html)',
        destination: '/category', // The :path parameter isn't used here so will be automatically passed in the query
      },
      {
        source: '/:slug(.*-kt.*[a-zA-Z0-9]{4,4}.html)',
        destination: '/tag', // The :path parameter isn't used here so will be automatically passed in the query
      },
      {
        source: '/:slug(.*-t.*[a-zA-Z0-9]{5,5}.html)',
        destination: '/post', // The :path parameter isn't used here so will be automatically passed in the query
      },   */   
      {
        source: '/sitemap.xml',
        destination: '/sitemap/sitemap', // The :path parameter isn't used here so will be automatically passed in the query
      },      
      {
        source: '/sitemap/sitemap-pages.xml',
        destination: '/sitemap/sitemap-pages', // The :path parameter isn't used here so will be automatically passed in the query
      },      
      {
        source: '/sitemap/sitemap-posts.xml',
        destination: '/sitemap/sitemap-posts', // The :path parameter isn't used here so will be automatically passed in the query
      },      
      {
        source: '/sitemap/sitemap-tags.xml',
        destination: '/sitemap/sitemap-tags', // The :path parameter isn't used here so will be automatically passed in the query
      },      
      {
        source: '/sitemap/sitemap-categories.xml',
        destination: '/sitemap/sitemap-categories', // The :path parameter isn't used here so will be automatically passed in the query
      },  
      {
        source: '/:slug(sitemap/sitemap-posts-p[0-9]+.xml)',
        destination: '/sitemap/sitemap-posts/sitemap-posts-childpage', // The :path parameter isn't used here so will be automatically passed in the query
      },          
    ]
  },
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return 'ilike-app'
  },
  images: {
    domains: [process.env.SITE_DOMAIN],
  },
  env: {
    SITE_URL: process.env.SITE_URL,
    SITE_API_URL: process.env.SITE_API_URL,
    SITE_API_V2_URL: process.env.SITE_API_V2_URL,
    SITE_LOCALHOST_URL : process.env.SITE_LOCALHOST_URL,
    SITE_BASE_URL: process.env.SITE_BASE_URL,
    FACEBOOK_ID: process.env.FACEBOOK_ID,
    FACEBOOK_SECRET: process.env.FACEBOOK_SECRET,
    GOOGLE_ID: process.env.GOOGLE_ID,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
    SECRET : process.env.SECRET    
  },   
}

const PAGE_URLS = {

    HOME : '/',
    BLOG : 'category/our-blogs',
    STORIES : 'archive/stories',
    CONTACT : 'contact-us'

};

const PAGE_WP_URLS = {
    
  HOME : {
      id : 111,
      url : 'trang-chu',
  },
  STORIES : {
    id : 117,
    url : 'stories-pt',
  }

}

const CATEGORY_PER_PAGE = 10;

const SITE_LOCALE = 'vi_VN';
const SITE_LANG = 'vi';

const WP_WEBSITE_URL = process.env.WP_SITE_URL;
const WP_API_WEBSITE_URL = process.env.WP_API_SITE_URL;
const WP_API_URL = process.env.WP_API_URL;

const MONTHS = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const NOTIFY_NEW_POST_TOKEN = 'notify_new_post_token';

module.exports.PAGE_URLS = PAGE_URLS;
module.exports.SITE_LOCALE = SITE_LOCALE;
module.exports.SITE_LANG = SITE_LANG;
module.exports.CATEGORY_PER_PAGE = CATEGORY_PER_PAGE;
module.exports.MONTHS = MONTHS;
module.exports.PAGE_WP_URLS = PAGE_WP_URLS;
module.exports.WP_API_URL = WP_API_URL;
module.exports.WP_WEBSITE_URL = WP_WEBSITE_URL;
module.exports.NOTIFY_NEW_POST_TOKEN = NOTIFY_NEW_POST_TOKEN;
module.exports.WP_API_WEBSITE_URL = WP_API_WEBSITE_URL;

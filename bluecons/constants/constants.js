const HOME_PAGE_URL = '/';
const CATEGORY_PER_PAGE = 12;
const SERVICES_PER_PAGE = 4;
const SITE_LOCALE = 'vi_VN';
const SITE_LANG = 'vi';
const WP_WEBSITE_URL = process.env.WP_SITE_URL;
const WP_API_URL = process.env.WP_API_URL;
const WP_RANKMATH_API_URL = process.env.WP_RANKMATH_API_URL;
const MONTHS = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6",
  "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
];
const WP_MENU_NAMES = {
  primary : 'PRIMARY'
}
const TOASTR_DEF_OPTIONS = {timeOut : 1000, positionClass : 'toast-top-center'};
const LOADING_SRC = 'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
const DEFAULT_LOGO_PRIMARY = '/static/images/logo-blue.png';
const DEFAULT_LOGO_WHITE = '/static/images/logo-white.png';
const NO_THUMBNAIL_IMAGE = '/static/images/no-thumbnail.jpg';
const SLUG_TYPE = {
  CATEGORY : 'category',
  PAGE : 'page',
  POST : 'post'
}
module.exports.HOME_PAGE_URL = HOME_PAGE_URL;
module.exports.CATEGORY_PER_PAGE = CATEGORY_PER_PAGE;
module.exports.SERVICES_PER_PAGE = SERVICES_PER_PAGE;
module.exports.SITE_LOCALE = SITE_LOCALE;
module.exports.SITE_LANG = SITE_LANG;
module.exports.WP_WEBSITE_URL = WP_WEBSITE_URL;
module.exports.WP_API_URL = WP_API_URL;
module.exports.NO_THUMBNAIL_IMAGE = NO_THUMBNAIL_IMAGE;
module.exports.MONTHS = MONTHS;
module.exports.WP_MENU_NAMES = WP_MENU_NAMES;
module.exports.LOADING_SRC = LOADING_SRC;
module.exports.DEFAULT_LOGO_PRIMARY = DEFAULT_LOGO_PRIMARY;
module.exports.DEFAULT_LOGO_WHITE = DEFAULT_LOGO_WHITE;
module.exports.SLUG_TYPE = SLUG_TYPE;
module.exports.WP_RANKMATH_API_URL = WP_RANKMATH_API_URL;
module.exports.TOASTR_DEF_OPTIONS = TOASTR_DEF_OPTIONS;
const HOME_PAGE_URL = '/';
const CATEGORY_PER_PAGE = 10;
const SITE_LOCALE = 'vi_VN';
const SITE_LANG = 'vi';
const WP_WEBSITE_URL = process.env.WP_SITE_URL;
const WP_API_URL = process.env.WP_API_URL;
const DEFAULT_SHOW_PRODUCTS = 12;
const SORTS = {
  default : 'default', 
  price_to_up : 'price_to_up',
  price_to_down : 'price_to_down',
  price_a_to_z : 'price_a_to_z',
  price_z_to_a : 'price_z_to_a',
}
const TOASTR_DEF_OPTIONS = {timeOut : 1000, positionClass : 'toast-top-center'}
const MONTHS = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6",
  "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
];
const PAGES = {
  HOME : {
    VI : {
      name : process.env.HOME_VI
    },
    EN : {
      name : process.env.HOME_EN
    }
  },
  INTRO : {
    VI : {
      name : process.env.INTRO_VI
    },
    EN : {
      name : process.env.INTRO_EN
    }
  },
  BLOG : {
    VI : {
      name : process.env.BLOG_VI
    },
    EN : {
      name : process.env.BLOG_EN
    }
  },
  CONTACT : {
    VI : {
      name : process.env.CONTACT_VI
    },
    EN : {
      name : process.env.CONTACT_EN
    }
  },
  PRODUCTS : {
    VI : {
      name : process.env.PRODUCTS_VI
    },
    EN : {
      name : process.env.PRODUCTS_EN
    }
  },
  SEARCH : {
    VI : {
      name : process.env.SEARCH_VI
    },
    EN : {
      name : process.env.SEARCH_EN
    }
  },
  CARTS : {
    VI : {
      name : process.env.CARTS_VI
    },
    EN : {
      name : process.env.CARTS_EN
    }
  },
  CHECKOUT : {
    VI : {
      name : process.env.CHECKOUT_VI
    },
    EN : {
      name : process.env.CHECKOUT_EN
    }
  },
}
const LANGUAGES = {
  vi : 'vi',
  en : 'en'
};
const WP_MENU_NAMES = {
  primary : 'PRIMARY',
  primary_en : 'PRIMARY___EN'
}
const WP_FOOTER_MENU_NAMES = {
  primary : 'FOOTER',
  primary_en : 'FOOTER___EN'
}
const LOADING_SRC = 'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
const CONSUMER_KEY = process.env.CONSUMER_KEY;
const CONSUMER_SECRET = process.env.CONSUMER_SECRET;
const BANNER_WIDTH = 1530;
const BANNER_HEIGHT = 270;

module.exports.HOME_PAGE_URL = HOME_PAGE_URL;
module.exports.CATEGORY_PER_PAGE = CATEGORY_PER_PAGE;
module.exports.SITE_LOCALE = SITE_LOCALE;
module.exports.SITE_LANG = SITE_LANG;
module.exports.WP_WEBSITE_URL = WP_WEBSITE_URL;
module.exports.WP_API_URL = WP_API_URL;
module.exports.DEFAULT_SHOW_PRODUCTS = DEFAULT_SHOW_PRODUCTS;
module.exports.SORTS = SORTS;
module.exports.TOASTR_DEF_OPTIONS = TOASTR_DEF_OPTIONS;
module.exports.MONTHS = MONTHS;
module.exports.PAGES = PAGES;
module.exports.LANGUAGES = LANGUAGES;
module.exports.WP_MENU_NAMES = WP_MENU_NAMES;
module.exports.WP_FOOTER_MENU_NAMES = WP_FOOTER_MENU_NAMES;
module.exports.LOADING_SRC = LOADING_SRC;
module.exports.CONSUMER_KEY = CONSUMER_KEY;
module.exports.CONSUMER_SECRET = CONSUMER_SECRET;
module.exports.BANNER_WIDTH = BANNER_WIDTH;
module.exports.BANNER_HEIGHT = BANNER_HEIGHT;

const HOME_PAGE_URL = '/';
const CATEGORY_PER_PAGE = 10;
const SITE_LOCALE = 'vi_VN';
const SITE_LANG = 'vi';
const WP_WEBSITE_URL = process.env.WP_SITE_URL;
const WP_API_URL = process.env.WP_API_URL;
const MONTHS = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6",
  "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
];
const LANGUAGES = {
  vi : 'vi',
  en : 'en'
};
const PAGE_CONTACTS = ['lien-he', 'contact-us'];
const PAGES = {
  HOME : {
    VI : {
      name : 'trang-chu'
    },
    EN : {
      name : 'home'
    }
  },
  INTRO : {
    VI : {
      name : 'gioi-thieu'
    },
    EN : {
      name : 'introduction'
    }
  },
  PROJECTS : {
    VI : {
      name : 'du-an'
    },
    EN : {
      name : 'projects'
    }
  },
  BLOG : {
    VI : {
      name : 'tin-tuc'
    },
    EN : {
      name : 'blog'
    }
  },
  MEDIA : {
    VI : {
      name : 'truyen-thong'
    },
    EN : {
      name : 'galio-media'
    }
  },
  VIDEO : {
    VI : {
      name : 'phim'
    },
    EN : {
      name : 'video'
    }
  },
  TUYENDUNG : {
    VI : {
      name : 'tuyen-dung'
    },
    EN : {
      name : 'recruitment'
    }
  },
  CONTACT : {
    VI : {
      name : 'lien-he'
    },
    EN : {
      name : 'contact-us'
    }
  },
  SEARCH : {
    VI : {
      name : 'tim-kiem'
    },
    EN : {
      name : 'search'
    }
  }
}
const WP_MENU_NAMES = {
  primary : 'PRIMARY',
  primary_en : 'PRIMARY___EN'
}
const LOADING_SRC = 'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
const CONTACT_FORMS = {
  VI : process.env.WP_CONTACT_FORM_VI,
  EN : process.env.WP_CONTACT_FORM_EN
}
const GIFTS_FORMS = {
  VI : process.env.WP_GIFTS_FORM_VI,
  EN : process.env.WP_GIFTS_FORM_EN
}
module.exports.HOME_PAGE_URL = HOME_PAGE_URL
module.exports.CATEGORY_PER_PAGE = CATEGORY_PER_PAGE
module.exports.SITE_LOCALE = SITE_LOCALE
module.exports.SITE_LANG = SITE_LANG
module.exports.PAGES = PAGES
module.exports.WP_WEBSITE_URL = WP_WEBSITE_URL
module.exports.WP_API_URL = WP_API_URL
module.exports.MONTHS = MONTHS
module.exports.LANGUAGES = LANGUAGES
module.exports.PAGE_CONTACTS = PAGE_CONTACTS
module.exports.WP_MENU_NAMES = WP_MENU_NAMES
module.exports.LOADING_SRC = LOADING_SRC
module.exports.CONTACT_FORMS = CONTACT_FORMS
module.exports.GIFTS_FORMS = GIFTS_FORMS

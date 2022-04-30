import { getCategoryLink, getCategorySlug } from "@js_dir/utils/categoriesUtils";
export const FB_ID = '869242980433062'
export const FANPAGE_URL = 'https://www.facebook.com/gco.vn'
export const CATEGORY_PER_PAGE = 10;
export const SITE_LOCALE = 'vi_VN';
export const SITE_LANG = 'vi';
export const WEBSITE_URL = process.env.SITE_URL;
export const SITE_API_URL = process.env.SITE_API_URL;
export const SITE_API_V2_URL = process.env.SITE_API_V2_URL;
export const MONTHS = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6",
  "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
];
export const NEWEST_POSTS_NUM = 8;
export const FEATURED_POSTS_NUM = 5;
export const CAT_FEATURED_POSTS_NUM = 7;
export const CATEGORY_POSTS_NUM = 9;
export const EXPLORE_POSTS_NUM = 5;
export const EMAGAZINE_POSTS_NUM = 4;
export const SICKY_POST_NUM = 14;
export const SICKY_BEAUTY_POST_NUM = 9;
export const SICKY_MOVIE_POST_NUM = 12;
export const CATPAGE_POSTS_NUM = 31;
export const DEFAULT_POSTS_NUM = 30;
export const MAX_POSTS_NUM = 100;
export const SITEMAP_DEF_NUM = 1000;
export const DEFAULT_PAGE = 1;
export const CAT_FEATURED_ID = 127;
export const CATEGORIES = {
  LIFES : {
    id : 53,
    slug : 'doi-song',
    code : 'ntjkz2'
  },
  MOVIES : {
    id : 56,
    slug : 'phim',
    code : 'ntBYJr'
  },
  SPORTS : {
    id : 76,
    slug : 'the-thao',
    code : 'ntwoa9'
  },
  SHOWBIZ : {
    id : 7,
    slug : 'showbiz',
    code : 'ntBV0w'
  },
  BEAUTY : {
    id : 6,
    slug : 'dep-az',
    code : 'ntwmnj'
  },
  ENTERTAIN : {
    id : 64,
    slug : 'giai-tri',
    code : 'nt4rKa'
  },
  TECHNOLOGY : {
    id : 92,
    slug : 'cong-nghe',
    code : 'ntjXky'
  },
  TRANSPORT : {
    id : 95,
    slug : 'xe',
    code : 'ntBVg0'
  },
  KNOWLEDGE : {
    id : 107,
    slug: 'ban-can-biet',
    code : 'ntBVgP'
  },
  TRENDS : {
    id : 5,
    slug: 'xu-huong',
    code : 'ntw214'
  },
  SCHOOL : {
    id : 48,
    slug : 'hoc-duong',
    code : 'ntjXPy'
  },
  FILMS : {
    id : 88,
    slug : 'dien-anh',
    code : 'ntjxkZ'
  },
  MUSIC : {
    id : 49,
    slug : 'nhac',
    code : 'ntw2v1'
  },
  YOUNGPLACES : {
    id : 63,
    slug : 'diem-den-tre',
    code : 'ntBbaW'
  },
  MAGAZINE : {
    id : 75
  }
}
export const cataloguesEntries = [
  {
      title : "Nhạc",
      thumbnail : "/static/images/magazine__3.jpg",
      id : CATEGORIES.MUSIC.id,
      data : []
  },
  {
      title : "Đẹp",
      thumbnail : "/static/images/discover__3.jpg",
      id : CATEGORIES.BEAUTY.id,
      data : []
  },
  {
      title : "Điểm đến trẻ",
      thumbnail : "/static/images/discover__5.jpg",
      id : CATEGORIES.YOUNGPLACES.id,
      data : []
  },
  {
      title : "Công nghệ",
      thumbnail : "/static/images/discover__1.jpg",
      id : CATEGORIES.TECHNOLOGY.id,
      data : []
  },
];
export const footerMenuEntries = [
  {
      title : "Sao",
      slug : getCategoryLink(CATEGORIES.SHOWBIZ)
  },
  {
      title : "Phim",
      slug : getCategoryLink(CATEGORIES.MOVIES)
  },
  {
      title : "Nhạc",
      slug : getCategoryLink(CATEGORIES.MUSIC)
  },
  {
      title : "Đời sống",
      slug : getCategoryLink(CATEGORIES.LIFES)
  },
  {
    title : "Đẹp",
    slug : getCategoryLink(CATEGORIES.BEAUTY)
  },
  {
    title : "Điểm đến trẻ",
    slug : getCategoryLink(CATEGORIES.YOUNGPLACES)
  },
  {
      title : "Thể thao",
      slug : getCategoryLink(CATEGORIES.SPORTS)
  },
  {
    title : "Công nghệ",
    slug : getCategoryLink(CATEGORIES.TECHNOLOGY)
  },
  {
    title : "IMagazine",
    slug : '/e-magazine.html'
  }
];
export const mobileCatMenuEntries = [
  {
    title : "Sao",
    slug : getCategoryLink(CATEGORIES.SHOWBIZ),
    icon : "/static/images/showbiz.svg"
  },
  {
    title : "Phim",
    slug : getCategoryLink(CATEGORIES.MOVIES),
    icon : "/static/images/dienanh.svg"
  },  
  {
    title : "Nhạc",
    slug : getCategoryLink(CATEGORIES.MUSIC),
    icon : "/static/images/music.svg"
  },
  {
    title : "Đời sống",
    slug : getCategoryLink(CATEGORIES.LIFES),
    icon : "/static/images/doisong.svg"
  },  
  {
    title : "Đẹp",
    slug : getCategoryLink(CATEGORIES.BEAUTY),
    icon : "/static/images/doisong.svg"
  },
  {
    title : "Điểm đến trẻ",
    slug : getCategoryLink(CATEGORIES.YOUNGPLACES),
    icon : "/static/images/diemdentre.svg"
  },
  {
    title : "Thể thao",
    slug : getCategoryLink(CATEGORIES.SPORTS),
    icon : "/static/images/soccer.svg"
  },   
  {
      title : "Công nghệ",
      slug : getCategoryLink(CATEGORIES.TECHNOLOGY),
      icon : "/static/images/congnghe.svg"
  },  
  {
    title : "iMagazine",
    slug : '/e-magazine.html',
    icon : "/static/images/imagazine.svg",
    markable : true
  }   
];
export const forYouPostLists = [
  {
    title : "Cựu tuyển thủ Mạnh Dũng: 'Đừng nghĩ đội tuyển Việt Nam đã ở đẳng cấp khác so với khu vực'",
    link : "/cuu-tuyen-thu-manh-dung-dung-nghi-doi-tuyen-viet-nam-da-o-dang-cap-khac-so-voi-khu-vuc-t6bp9L.html",
    author : "Quỳnh Mai",
    created_time: "2021-07-25T19:35:00.000Z",
    image : "https://ilikestatic.s3.ap-southeast-1.amazonaws.com/news/articles/thumb/T6OvBo63XC2o8GhPJNspXH6IAtq6tKplNaEd7jUC.jpg"
  },
  {
    title : "Trận MU vs Brighton chính thức bị hoãn vì Covid-19",
    link : "/tran-mu-vs-brighton-chinh-thuc-bi-hoan-vi-covid-19-tdY7KY.html",
    author : "Quỳnh Mai",
    created_time: "2021-07-25T19:35:00.000Z",
    image : "https://cdnmedia.thethaovanhoa.vn/Upload/mJ4IlA3Nve29hrFVp7WQ/files/2021/12/14/MU.jpg"
  },
  {
    title : "AFF Cup 2021: Áp lực và bài toán mang tên bán kết",
    link : "/aff-cup-2021-ap-luc-va-bai-toan-mang-ten-ban-ket-t7gP76.html",
    author : "Quỳnh Mai",
    created_time: "2021-07-25T19:35:00.000Z",
    image : "https://cdnmedia.thethaovanhoa.vn/Upload/B0g2ZnIe48e9au7dkcAV3w/files/00012/2/2/2/Ap%20luc%20va%20bai%20toan%20mang%20ten%20ban%20ket.jpg"
  },
  {
    title : "Gặp bão covid-19, MU chỉ còn 7 cầu thủ có thể ra sân",
    link : "/gap-bao-covid-19-mu-chi-con-7-cau-thu-co-the-ra-san-trKGVR.html",
    author : "Quỳnh Mai",
    created_time: "2021-07-25T19:35:00.000Z",
    image : "https://cdnmedia.thethaovanhoa.vn/Upload/fScqSq4LNakwf5C142iXA/files/2021/12/16-12/mu%201.jpg"
  },
]
export const DEFAULT_THUMBNAIL = '/static/images/no_thumbnail.png';
export const ERROR_THUMBNAIL = '/static/images/noimage.jpg';
export const USER_THUMBNAIL = '/static/images/icons/user.png'
export const SEND_BUTTON_THUMBNAIL = '/static/images/icons/icon__send.png'
export  const PAGES = {
  LOGIN : {
    slug : 'login',
    path : '/login'
  },
  REGISTER : {
    slug : 'register',
    path : '/register'
  },
  ACCOUNT : {
    slug : 'account',
    path : '/account'
  },
  SEARCH : {
    slug : 'search',
    path : '/search'
  }
}
export const API_NO_PARAMS = {};
export const SESSION_CACHED_TIMEOUT = 30 * 1000; // miliseconds
export const POSTS_LIST_SAVED_KEY = 'posts_list_saved_key';
export const TOASTR_DEF_OPTIONS = {timeOut : 5000, positionClass : 'toast-top-center'}
export const WARNING_TITLE = 'Cảnh báo';
export const INFO_TITLE = 'Thông báo';
export const SESSION_EXPIRES_WARNING = 'Phiên làm việc hiện tại đã hết hạn, vui lòng đăng nhập lại !!!';
export const SAVE_POST_SUCCESS_MESSAGE = 'Lưu bài viết thành công !!!';
export const UNSAVE_POST_SUCCESS_MESSAGE = 'Hủy lưu bài viết thành công !!!';
export const UNAUTH_CODE = 401;
export const SUCCESS_CODE = 200;
export const CATEGORY_LAYOUT = {
  default : 'default',
  magazine : 'e-magazine',
  beauty : 'dep-az',
  movie : 'phim'
}
export const ADS_POSITION = {
  HOME : {
    TOP : 'TOP HOMEPAGE',
    MIDDLE_1 : 'MIDLE1 HOMEPAGE',
    MIDDLE_2 : 'MIDLE 2 HOMEPAGE',
    BOTTOM : 'BOTTOM HOMEPAGE'
  },
  CATEGORY : {
    TOP : 'TOP BANNER CATEGORY',
    MIDDLE : 'MIDLE CATEGORY',
    SIDEBAR_1 : 'SITEBAR 1 CATEGORY',
    SIDEBAR_2 : 'SITEBAR 2 CATEGORY'
  },
  POST : {
    TOP : 'TOP BANNER POSTS',
    MIDDLE : 'MIDLE BANNER POSTS'
  },
}
/*export const ADS_POSITION = {
  HOME : {
    TOP : 'TOP HOMEPAGE',
    MIDDLE_1 : 'TOP HOMEPAGE',
    MIDDLE_2 : 'TOP HOMEPAGE',
    BOTTOM : 'TOP HOMEPAGE'
  },
  CATEGORY : {
    TOP : 'TOP HOMEPAGE',
    MIDDLE : 'TOP HOMEPAGE',
    SIDEBAR_1 : 'TOP HOMEPAGE',
    SIDEBAR_2 : 'TOP HOMEPAGE'
  },
  POST : {
    TOP : 'TOP HOMEPAGE',
    MIDDLE : 'TOP HOMEPAGE'
  },
}*/
export const DEFAULT_BANNER = {
  image_path : ''
}
export const BLANK_IMAGE = "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACAD";
export const DEFAULT_LOGO = '/static/images/logo-ilike.png';
export const DEFAULT_FOOT_INFO = 'Giấy phép thiết lập trang thông tin điện tử tổng hợp số 3641/GP-TTĐT do Sở Thông tin và Truyền thông TP. Hà Nội cấp ngày 18/8/2017';
export const DEFAULT_PHONE = '+84 98 098 098';
export const DEFAULT_EMAIL = 'quangcao.ilike@gmail.com';
export const DEFAULT_COPYRIGHT = 'Một sản phẩm của tập đoàn GCO';
export const DEFAULT_HOME_DESCRIPTION = 'Trang tin tức giải trí - xã hội Việt Nam - Quốc Tế. Đưa tin nhanh nhất : thời trang, video ngôi sao, phim ảnh, tình yêu, học đường, các chuyển động xã hội.';
export const DEFAULT_HOME_KEYWORDS = 'teen viet nam, giới trẻ, xu hướng, âm nhạc, xem phim, đời sống, hàng hiệu, chuyện lạ, thời trang trẻ, mới lớn, đang yêu, sành điệu, chuyện cười, khéo tay, các sao';
export const HEADING_HOMEPAGE = 'ilike.com.vn - Kênh giải trí - tin tức - sự kiện'
export const MOBILE_LOGO = '/static/images/logo-ilike.png'
export const USER_ICON = '/static/images/user-icon.svg'
export const USER_NAV_ICON = '/static/images/user-nav-icon.svg'
export const NAV_ICON = '/static/images/nav-icon.svg'
export const LOGOUT_ICON = '/static/images/logout-icon.svg'

export const ACCOUNT_TABS = {
  DASHBOARD : {
    id : 'dashboard', 
    text : 'Tổng quan',
    url : '/account'
  },
  PASSWORD : {
    id : 'password', 
    text : 'Mật khẩu',
    url : '/account/password'
  },
  POSTS_FOR_YOU : {
    id : 'posts-for-you', 
    text : 'Dành cho bạn',
    url : '/account/posts-for-you'
  },
  POSTS_FAVORITE : {
    id : 'posts-favorite', 
    text : 'Bài viết đã lưu',
    url : '/account/posts-favorite'
  },
  CATEGORY_FOLLOWED : {
    id : 'category-followed', 
    text : 'Danh mục theo dõi',
    url : '/account/category-followed'
  },
  YOUR_COMMENTS : {
    id : 'your-comments', 
    text : 'Bình luận',
    url : '/account/your-comments'
  }
}
export const ACCOUNT_DASHBOARD_FAVBOX = [
  {
    id : ACCOUNT_TABS.POSTS_FOR_YOU.id,
    title : 'Dành cho bạn',
    label : 'Những bài viết gợi cho bạn theo những danh mục mà bạn đang theo dõi.',
    button_text : 'Xem tất cả',
    url : ACCOUNT_TABS.POSTS_FOR_YOU.url
  },
  {
    id : ACCOUNT_TABS.POSTS_FAVORITE.id,
    title : 'Đã lưu',
    label : 'Gồm những bài viết bạn đã lưu trữ. Bạn có thể đọc lại một cách nhanh chóng tại đây.',
    button_text : 'Xem tất cả',
    url : ACCOUNT_TABS.POSTS_FAVORITE.url
  },
  {
    id : ACCOUNT_TABS.CATEGORY_FOLLOWED.id,
    title : 'Đang theo dõi',
    label : 'Chúng tôi sẽ gợi ý những bài viết đến bạn qua những danh mục bạn đang theo dõi.',
    button_text : 'Xem tất cả',
    url : ACCOUNT_TABS.CATEGORY_FOLLOWED.url
  },
  {
    id : ACCOUNT_TABS.YOUR_COMMENTS.id,
    title : 'Bình luận',
    label : 'Những bình luận mà bạn để lại dưới những bài viết.',
    button_text : 'Xem tất cả',
    url : ACCOUNT_TABS.YOUR_COMMENTS.url
  }
]
export const HOME_PAGE_URL = '/';
export const ACCOUNT_PAGE_URL = '/account';
export const RECENTS_SEARCH = [
  {
    id : 'phim',
    text : 'Phim',
    s : 'phim'
  },
  {
    id : 'covid',
    text : 'Covid',
    s : 'Covid'
  },
  {
    id : 'ha-noi',
    text : 'Hà Nội',
    s : 'Hà Nội'
  },
  {
    id : 'doi-tuyen-viet-nam',
    text : 'Đội tuyển Việt Nam',
    s : 'Đội tuyển Việt Nam'
  }
];

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPageStaticProps = getPageStaticProps;
exports.getBannerPage = getBannerPage;

var _constants = require("@constants/constants");

var _getDefaultPageDataApi = require("@lib/getDefaultPageDataApi");

var _getSiteOptionsApi = require("@lib/getSiteOptionsApi");

function getPageStaticProps(slug, locale) {
  var siteOptions, defPageData, title, breadcrumbs;
  return regeneratorRuntime.async(function getPageStaticProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap((0, _getSiteOptionsApi.getSiteOptions)(locale));

        case 3:
          siteOptions = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap((0, _getDefaultPageDataApi.getDefaultPageData)(slug));

        case 6:
          defPageData = _context.sent;
          title = defPageData.pages.nodes[0].title;
          breadcrumbs = {
            id: 'defaultpage',
            title: title,
            base: 'page',
            data: []
          };
          return _context.abrupt("return", {
            props: {
              pageContext: {
                siteOptions: siteOptions,
                defPageData: defPageData,
                breadcrumbs: breadcrumbs,
                type: 'page'
              }
            },
            revalidate: 10
          });

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", {
            notFound: true
          });

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
}

function getBannerPage(featuredImage, siteOptions) {
  return featuredImage ? featuredImage.node.mediaItemUrl : siteOptions.ctInfoList.default_banner; //return featuredImage ? (featuredImage.node.mediaDetails.sizes.filter(e => parseInt(e.width) === BANNER_WIDTH && parseInt(e.height) === BANNER_HEIGHT)[0]).sourceUrl : siteOptions.ctInfoList.default_banner;
}
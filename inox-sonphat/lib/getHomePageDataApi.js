import { LANGUAGES, PAGES } from '@constants/constants';
import {fetchAPI} from './api';
export async function getHomePageData(lang = LANGUAGES.vi) {
    const langCodeEnum = lang.toUpperCase();
    const homePageSlug = PAGES.HOME[langCodeEnum].name;
    return await fetchAPI(
      `query homePageData {
          slidersList: getSliderItemsList(lang: ${langCodeEnum}) {
            id
            title
            thumbnail
          }
          gioithieuSection: getGTSectionInfo(lang: ${langCodeEnum}) {
            heading
            contents
            button_text
            button_url
            background_url
          }
          productsTabLists: getProductsTabLists(lang: ${langCodeEnum}, limit: 8, tabs: 4) {
            id
            title
            data {
              id
              name
              text
              title
              url
              price {
                fixed
                format
              }
              old_price {
                fixed
                format
              }
              thumbnails {
                url
              }
              status
              locale
              brands
              colors
              sizes
              places
              polylang_post {
                id
                name
                text
                title
                url
                price {
                  fixed
                  format
                }
                old_price {
                  fixed
                  format
                }
                thumbnails {
                  url
                }
                status
                locale
                brands
                colors
                sizes
                places
              }
            }
          }
          bannerSectionOne: getBannersSectionInfo(lang: ${langCodeEnum}, pos: 0) {
            heading1
            heading2
            hotline
            hotline_url
            featured_image
            background
          }
          testimolatesSection: getTestimolatesSectionInfo(lang: ${langCodeEnum}) {
            heading
            contents
            background
            data {
              id
              thumbnail
              title
            }
          }
          articlesList: getArticlesList(lang: ${langCodeEnum}, limit: 6) {
            id
            name
            text
            title
            excerpt
            url
            thumbnail
            date_created {
              day
              month
              year
            }
          }
          bannerSectionTwo: getBannersSectionInfo(lang: ${langCodeEnum}, pos: 1) {
            heading1
            heading2
            hotline
            hotline_url
            featured_image
            background
          }
          clientsSectionInfo: getClientsSectionInfo(lang: ${langCodeEnum}) {
            id
            title
            thumbnail
          }
          seo: pages(where: {name: "${homePageSlug}"}) {
            edges {
              node {
                databaseId
                slug
                seo {
                  canonical
                  cornerstone
                  focuskw
                  fullHead
                  metaDesc
                  metaKeywords
                  metaRobotsNofollow
                  metaRobotsNoindex
                  opengraphAuthor
                  opengraphDescription
                  opengraphPublishedTime
                  opengraphPublisher
                  opengraphSiteName
                  opengraphTitle
                  opengraphType
                  opengraphUrl
                  readingTime
                  title
                  twitterDescription
                  twitterTitle
                  schema {
                    raw
                  }
                  opengraphImage {
                    mediaDetails {
                      width
                      height
                    }
                    mediaItemUrl
                  }
                  opengraphModifiedTime
                }
              }
            }
          }
        }
      `
    );
  }
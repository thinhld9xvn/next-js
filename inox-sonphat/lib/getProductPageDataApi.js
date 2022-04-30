import { LANGUAGES, PAGES } from '@constants/constants';
import {fetchAPI} from './api';
export async function getProductPageData(lang = LANGUAGES.vi) {
  const langCodeEnum = lang.toUpperCase();
  const slug = PAGES.PRODUCTS[langCodeEnum].name;
    return await fetchAPI(
      `query productPageData {
        pageData: pages(where: {name: "${slug}"}) {
            nodes {
                title
                content   
                featuredImage {
                  node {
                    mediaItemUrl
                    mediaDetails {
                      sizes {
                        sourceUrl
                        width
                        height
                      }
                    }
                  }
                }
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
        productsList: getProductsLists(lang: ${langCodeEnum}) {
          id
          name    
          text
          title
          url
          status
          thumbnails {
            url
          }
          price {
            fixed
            format
          }
          old_price {
            fixed
            format
          }
          categories {
            id
            name
            text
            thumbnail
            title
            url
          }
          locale
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
      `
    );
  }
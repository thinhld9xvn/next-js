import { LANGUAGES, PAGES } from '@constants/constants';
import {fetchAPI} from './api';
export async function getCheckoutPageData(lang = LANGUAGES.vi) {
    const url = PAGES.CHECKOUT[lang.toUpperCase()].name;
    return await fetchAPI(
      ` query checkoutPageData {
            pageData : pages(where: {name: "${url}"}) {
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
            wooBacsPayment: getWooBacsPayment {
              bank_name
              account_number
              account_name
              bic
              iban
              sort_code
            }
        }
      
      `
    );
  }
import { LANGUAGES, PAGES } from '@constants/constants';
import {fetchAPI} from './api';
export async function getContactPageData(lang = LANGUAGES.vi) {
    const url = PAGES.CONTACT[lang.toUpperCase()].name;
    return await fetchAPI(
      ` query contactPageData {
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
        }
      
      `
    );
  }
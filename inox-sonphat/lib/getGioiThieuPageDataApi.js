import { LANGUAGES, PAGES } from '@constants/constants';
import {fetchAPI} from './api';
export async function getGioiThieuPageData(lang = LANGUAGES.vi) {
    const slug = PAGES.INTRO[lang.toUpperCase()].name;
    return await fetchAPI(
      ` query gioithieuPageData {
          pages(where: {name: "${slug}"}) {
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
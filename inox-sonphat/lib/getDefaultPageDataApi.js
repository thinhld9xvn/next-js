import {fetchAPI} from './api';
export async function getDefaultPageData(slug) {
    return await fetchAPI(
      ` query defaultPageData {
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
import {fetchAPI} from './api';

export async function getAllCategories() {

  const data = await fetchAPI(
    `
    query AllCategories {
      categories {
        edges {
          node {
            databaseId
            name
            link
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

  return data?.categories;
}
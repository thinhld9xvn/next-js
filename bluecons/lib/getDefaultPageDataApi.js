import {fetchAPI} from './api';
export async function getDefaultPageData(slug) {
    return await fetchAPI(
      `query defaultPageData {
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
          }
        }
      }`
    );
  }
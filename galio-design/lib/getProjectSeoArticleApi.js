import { LANGUAGES } from '@constants/constants';
import {fetchAPI} from './api';

export async function getProjectSeoArticle(id) {

    return await fetchAPI(
      `
      query ProjectArticle {
        projects(id: "${id}", idType: DATABASE_ID) {    
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
      `
    );

  }
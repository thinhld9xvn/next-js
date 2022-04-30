import { LANGUAGES } from '@constants/constants';
import {fetchAPI} from './api';

export async function getArticle(lang = LANGUAGES.vi, slug = '') {

    const langCodeEnum = lang.toUpperCase();

    return await fetchAPI(
      `
      query getArticle {
        getArticlesList(lang: ${langCodeEnum}, slug: "${slug}", related : false) {
          id
          name
          text
          title
          excerpt
          contents
          url
          thumbnail   
          polylang_post      
          date_created {
            day
            month
            year
          }
          categories {
            id
            name
            text
            title
            url
          }
        }
        posts(where: {name: "${slug}"}) {
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
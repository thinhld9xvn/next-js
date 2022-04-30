import { LANGUAGES } from '@constants/constants';
import {fetchAPI} from './api';
export async function getSingleArticlePageData(lang = LANGUAGES.vi, slug) {
  const langCodeEnum = lang.toUpperCase();
    return await fetchAPI(
      `query singleArticlePageData {
        articleData : getArticlesList(lang: ${langCodeEnum}, slug: "${slug}") {
          id
          text
          url
          name
          excerpt
          polylang_post
          thumbnail
          title
          banner_image
          date_created {
            day
            month
            year
          }
          contents
        },
        relatedLists : getArticlesList(lang: ${langCodeEnum}, slug: "${slug}", related : true, limit : 3) {
          id
          text
          url
          name
          excerpt
          polylang_post
          thumbnail
          title
          date_created {
            day
            month
            year
          }
          contents
        }
        seo: posts(where: {name: "${slug}"}) {
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
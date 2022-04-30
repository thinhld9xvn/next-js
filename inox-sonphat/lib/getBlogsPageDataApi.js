import { LANGUAGES, PAGES } from '@constants/constants';
import {fetchAPI} from './api';
export async function getBlogsPageData(lang = LANGUAGES.vi) {
   const langCodeEnum = lang.toUpperCase();
    const url = PAGES.BLOG[langCodeEnum].name;
    return await fetchAPI(
      ` query blogsPageData {
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
            articlesList : getArticlesList(lang: ${langCodeEnum}) {
              id
              name
              text
              title
              thumbnail
              url
              excerpt
              date_created {
                day
                month
                year
              }
            }
        }
      
      `
    );
  }
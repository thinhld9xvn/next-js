import {fetchAPI} from './api';
import { LANGUAGES, PAGES } from '@constants/constants';

export async function getContactPageData(lang = LANGUAGES.vi) {

    const langCodeEnum = lang.toUpperCase();
    const contactPageSlug = PAGES.CONTACT[langCodeEnum].name;
    return await fetchAPI(
        `
        query CtInfoList {
            getFooterPageData(lang: ${langCodeEnum}) {
                heading
                contents
                button_text
                button_url
            }
            pages(where: {name: "${contactPageSlug}"}) {
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
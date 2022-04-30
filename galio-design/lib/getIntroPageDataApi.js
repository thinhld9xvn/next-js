import { LANGUAGES, PAGES } from '@constants/constants';
import {fetchAPI} from './api';

export async function getIntroPageData(lang = LANGUAGES.vi) {

    const langCodeEnum = lang.toUpperCase();
    const introPageSlug = PAGES.INTRO[langCodeEnum].name;

    return await fetchAPI(
      `
        query GioiThieuPage {
            getGioiThieuPageData(lang: ${langCodeEnum}) {
                heading
                introduction
                strength_heading
                strength_desc
                strength_lists {
                    no
                    icon
                    title
                    contents
                }
                users_list {
                    name
                    type
                    avatar
                    professor
                }
                slider {
                    thumbnail
                }
                duration_working_heading
                duration_working_desc
                price_heading
                price_contents
                price_button_url
                price_button_text
                price_thumbnail
                duration_working_lists {
                    icon
                    title
                    contents
                }
            }
            getFooterPageData(lang: ${langCodeEnum}) {
                heading
                contents
                button_text
                button_url
            }
            pages(where: {name: "${introPageSlug}"}) {
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
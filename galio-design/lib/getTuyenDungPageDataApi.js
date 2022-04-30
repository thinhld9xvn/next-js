import { LANGUAGES, PAGES } from '@constants/constants';
import {fetchAPI} from './api';

export async function getTuyenDungPageData(lang = LANGUAGES.vi) {

    const langCodeEnum = lang.toUpperCase();
    const tuyendungPageSlug = PAGES.TUYENDUNG[langCodeEnum].name;
    return await fetchAPI(
      `
        query TuyenDungPage {
            getRecruitmentMetaPage(lang: ${langCodeEnum}) {
                heading
                introduction
                button_text
                button_url
                posts {
                  id
                  title
                  contents
                  location
                  thumbnail
                }
              }
            pages(where: {name: "${tuyendungPageSlug}"}) {
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
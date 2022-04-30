import { LANGUAGES, PAGES, WP_MENU_NAMES } from '@constants/constants';
import {fetchAPI} from './api';

export async function getProjectSearchPageData(lang = LANGUAGES.vi, keyword = '') {

  const name = lang === LANGUAGES.vi ? WP_MENU_NAMES.primary : WP_MENU_NAMES.primary_en;
  const langCodeEnum = lang.toUpperCase();
  const searchPageSlug = PAGES.SEARCH[langCodeEnum].name;
    return await fetchAPI(
      `
      query ProjectSearchPage {
        getLogoSite {
          alt
            src
            url
        }
        getSocialNetWorkList {
            id
            text
            url
        }
        getCtInfoList(lang: ${langCodeEnum}) {
            description
            email
            email_recruit
            hotline
        }
        getMenuItemsList(name: ${name}) {
            id
            order
            text
            type
            url
            childrens {
                id
                order
                text
                type
                url
            }
        }
        getProjectsList(lang: ${langCodeEnum}, keyword: "${keyword}") {
            id
            title
            url
            thumbnail
            categories {
              id
              name
              text
              thumbnail
              title
              url
            }
        }
        getFooterPageData(lang: ${langCodeEnum}) {
          heading
          contents
          button_text
          button_url
        }
        pages(where: {name: "${searchPageSlug}"}) {
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
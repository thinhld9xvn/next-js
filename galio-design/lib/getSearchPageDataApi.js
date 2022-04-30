import { LANGUAGES, PAGES } from '@constants/constants';
import {fetchAPI} from './api';

export async function getSearchPageData(lang = LANGUAGES.vi) {

    const langCodeEnum = lang.toUpperCase();
    const searchPageSlug = PAGES.SEARCH[langCodeEnum].name;
    return await fetchAPI(
      `
      query searchPageData {
        getMediaList(lang: ${langCodeEnum}) {
          id
          title
          thumbnail
          categories {
            id
            text
            name
            title
            url
          }
        }
        getTaxonomiesList(lang: ${langCodeEnum}, tax: "galio-media-category") {
          id
          name
          text
          title
          url
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
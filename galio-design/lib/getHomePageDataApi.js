import { LANGUAGES, PAGES } from '@constants/constants';
import {fetchAPI} from './api';

export async function getHomePageData(lang = LANGUAGES.vi) {

    const langCodeEnum = lang.toUpperCase();
    const homePageSlug = PAGES.HOME[langCodeEnum].name;

    return await fetchAPI(
      `
      query homePageData {
        getSliderItemsList(lang: ${langCodeEnum}) {
          id
          title
          heading
          button_text
          thumbnail
          url
          video
        }
        getGTSectionInfo(lang: ${langCodeEnum}) {
          heading
          contents
          button_text
          button_url
        }
        getTaxonomiesList(lang: ${langCodeEnum}, tax: "projects-category", number: 3) {           
            title
            thumbnail
            url
            post_type
        }
        getLHTKSectionInfo(lang: ${langCodeEnum}) {
          heading
          contents
          button_text
          button_url
          background
        }
        getClientsLogoList(lang: ${langCodeEnum}) {
          id
          thumbnail
        }
        pages(where: {name: "${homePageSlug}"}) {
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
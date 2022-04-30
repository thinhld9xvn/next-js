import { LANGUAGES, PAGES } from '@constants/constants';
import {fetchAPI} from './api';

export async function getVideoPageData(lang = LANGUAGES.vi) {

    const langCodeEnum = lang.toUpperCase();
    const videoPageSlug = PAGES.VIDEO[langCodeEnum].name;

    return await fetchAPI(
      `
      query videoPageData {
        getVideoList(lang: ${langCodeEnum}) {
          id
          title
          thumbnail
          video_yt_id
          categories {
            id
            name
            text
            title
            url
            thumbnail
          }
        }
        getTaxonomiesList(lang: ${langCodeEnum}, tax: "video-category") {
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
        pages(where: {name: "${videoPageSlug}"}) {
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
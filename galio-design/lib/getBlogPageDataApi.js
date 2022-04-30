import { LANGUAGES, PAGES } from '@constants/constants';
import {fetchAPI} from './api';

export async function getBlogPageData(lang = LANGUAGES.vi) {

    const langCodeEnum = lang.toUpperCase();
    const blogPageSlug = PAGES.BLOG[langCodeEnum].name;

    return await fetchAPI(
      `
      query blogPageData {
        getArticlesList(lang: ${langCodeEnum}) {
          id
          name
          text
          title
          excerpt
          contents
          url
          thumbnail
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
        getTaxonomiesList(lang: ${langCodeEnum}, tax: "category") {
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
        pages(where: {name: "${blogPageSlug}"}) {
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
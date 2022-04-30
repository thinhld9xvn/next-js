import { LANGUAGES, PAGES } from '@constants/constants';
import {fetchAPI} from './api';

export async function getProjectPageData(lang = LANGUAGES.vi, is_pl_term = false) {

    const langCodeEnum = lang.toUpperCase();
    const projectsPageSlug = PAGES.PROJECTS[langCodeEnum].name;
    const pl_term_field = is_pl_term ? `polylang_term` : ``;
    return await fetchAPI(
      `
      query projectPageData {
        getProjectsList(lang: ${langCodeEnum}) {
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
        getTaxonomiesList(lang: ${langCodeEnum}, tax: "projects-category") {
          id
          name
          text
          title
          url
          ${pl_term_field}
        }
        getFooterPageData(lang: ${langCodeEnum}) {
          heading
          contents
          button_text
          button_url
        }
        pages(where: {name: "${projectsPageSlug}"}) {
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
import { LANGUAGES } from '@constants/constants';
import {fetchAPI} from './api';

export async function getRelatedArticles(lang = LANGUAGES.vi, slug) {

    const langCodeEnum = lang.toUpperCase();

    return await fetchAPI(
      `
      query getArticle {
        getArticlesList(lang: ${langCodeEnum}, slug: "${slug}", related: true) {
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
      }
      
      `
    );
    
  }
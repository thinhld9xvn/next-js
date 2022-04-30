import { LANGUAGES } from '@constants/constants';
import {fetchAPI} from './api';

export async function getProjectArticle(lang = LANGUAGES.vi, slug = '') {

  const langCodeEnum = lang.toUpperCase();

    return await fetchAPI(
      `
      query ProjectArticle {
        getProjectsList(lang: ${langCodeEnum}, slug: "${slug}") {
            id
            title
            url
            thumbnail
            description
            heading
            banner_description
            dentision
            location
            team
            time
            polylang_post
            galleries {
              data {
                thumbnail
                full
              }
            }
          }
      }
      `
    );

  }
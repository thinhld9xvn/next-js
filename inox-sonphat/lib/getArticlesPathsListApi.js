import { LANGUAGES } from '@constants/constants';
import {fetchAPI} from './api';
export async function getArticlesPathsList(lang = LANGUAGES.vi) {
  const langCodeEnum = lang.toUpperCase();
    return await fetchAPI(
      `
      query getArticlesPathsList {
        articlesPathList: getArticlesList(lang: ${langCodeEnum}) {
          slug
        }
      }
      `
    );
  }
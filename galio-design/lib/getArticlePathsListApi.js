import { LANGUAGES } from '@constants/constants';
import {fetchAPI} from './api';

export async function getArticlePathsList(lang = LANGUAGES.vi) {

  const langCodeEnum = lang.toUpperCase();

    return await fetchAPI(
      `
      query ArticlesList {
        getArticlesList(lang: ${langCodeEnum}) {
          url
        }
      }
      `
    );

  }
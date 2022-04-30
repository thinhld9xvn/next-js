import { LANGUAGES } from '@constants/constants';
import {fetchAPI} from './api';

export async function getProjectPathsList(lang = LANGUAGES.vi) {

  const langCodeEnum = lang.toUpperCase();

    return await fetchAPI(
      `
      query ProjectArticle {
        getProjectsList(lang: ${langCodeEnum}) {           
            url
        }
      }
      `
    );

  }
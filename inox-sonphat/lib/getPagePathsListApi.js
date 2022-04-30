import { LANGUAGES } from '@constants/constants';
import {fetchAPI} from './api';
export async function getPagePathsList(langCodeEnum = LANGUAGES.vi) {
    return await fetchAPI(
      `query getPagePathsList {
        pagesPathList: pages(where: {language: ${langCodeEnum.toUpperCase()}}) {
          nodes {
            slug
          }
        }
      }
      `
    );
  }
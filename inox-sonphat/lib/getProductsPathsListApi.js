import { LANGUAGES } from '@constants/constants';
import {fetchAPI} from './api';
export async function getProductsPathsList(lang = LANGUAGES.vi) {
  const langCodeEnum = lang.toUpperCase();
    return await fetchAPI(
      `
      query getProductsPathsList {
        productsPathList: getProductsLists(lang: ${langCodeEnum}) {
          id
          slug
        }
      }
      `
    );
  }
import { LANGUAGES } from '@constants/constants';
import {fetchAPI} from './api';
export async function getProjectCategoriesPathsList(lang = LANGUAGES.vi) {
  const langCodeEnum = lang.toUpperCase();
    return await fetchAPI(
      `
      query projectsCategoriesList {
        getTaxonomiesList(lang: ${langCodeEnum}, tax: "projects-category") {
          id
          name
          text
          title
          url
        }
      }
      `
    );
  }
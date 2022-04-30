import {fetchAPI} from './api';
import { LANGUAGES } from '@constants/constants';
export async function getCtInfo(lang = LANGUAGES.vi) {
  const data = await fetchAPI(
    `
    query CtInfoList {
      getCtInfoList(lang: '${lang}') {
        description
        email
        email_recruit
        hotline
        contact_form
        gifts_form
      }
    }
    `
  );
  return data?.getCtInfoList;
}
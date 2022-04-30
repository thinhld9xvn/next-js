import {fetchAPI} from './api';
import { LANGUAGES, WP_MENU_NAMES } from '@constants/constants';
export async function getSiteOptions(lang = LANGUAGES.vi) {
    const name = lang === LANGUAGES.vi ? WP_MENU_NAMES.primary : WP_MENU_NAMES.primary_en;
    return await fetchAPI(
      `
      query SiteOptions {
        getLogoSite {
            alt
            src
            url
        }
        getSocialNetWorkList {
            id
            text
            url
        }
        getCtInfoList(lang: ${lang.toUpperCase()}) {
            description
            email
            email_recruit
            hotline
            contact_form
            gifts_form
        }
        getMenuItemsList(name: ${name}) {
            id
            order
            text
            type
            url
            childrens {
                id
                order
                text
                type
                url
            }
        }
      }
      `
    );
  }
import {fetchAPI} from './api';
import { LANGUAGES, WP_FOOTER_MENU_NAMES, WP_MENU_NAMES } from '@constants/constants';
export async function getSiteOptions(lang = LANGUAGES.vi) {
    const langCodeEnum = lang.toUpperCase();
    const name = lang === LANGUAGES.vi ? WP_MENU_NAMES.primary : WP_MENU_NAMES.primary_en;
    const ftName = lang === LANGUAGES.vi ? WP_FOOTER_MENU_NAMES.primary : WP_FOOTER_MENU_NAMES.primary_en;
    return await fetchAPI(
      `query SiteOptions {
        siteLogo: getLogoSite {
          src
          url
          alt
        }
        menuItemsList: getMenuItemsList(name: ${name}) {
          id
          text
          type
          url
          mega
          childrens {
            id
            text
            type
            url
            border_width
            border_color
            background_color
            childrens {
              id
              order
              text
              type
              url
            }
          }
        }
        footerMenuItemsList: getMenuItemsList(name: ${ftName}) {
          id          
          text
          type
          url
          order
        }
        ctInfoList: getCtInfoList(lang: ${langCodeEnum}) {
          address
          copyright
          email
          hotline
          intro
          intro_bg
          website
          supporter
          socials {
            id
            text
            url
          }
          default_banner
        }
      }
      `
    );
  }
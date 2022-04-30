import {fetchAPI} from './api';
import { WP_MENU_NAMES } from '@constants/constants';
export async function getSiteOptions() {
    const primaryMenu = WP_MENU_NAMES.primary;
    return await fetchAPI(
      `query SiteOptions {
        siteLogo: getLogoSite {    
          url
          alt
          src {
            url
          }
        }
        menuItemsList: getMenuItemsList(name: ${primaryMenu}) {
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
            background
            mega
            childrens {
              id
              text
              url
              type
              mega
              background
            }      
          }
        }
        siteFooter: getCtInfoList {
          contact
          info
          socials
          supporter
          footer_menu    
          copyright
          default_banner
          contact_form
        }
      }
      
      `
    );
  }
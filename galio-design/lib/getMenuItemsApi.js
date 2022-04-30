import {fetchAPI} from './api';
import { WP_MENU_NAMES } from '@constants/constants';

export async function getMenuItems(name = WP_MENU_NAMES.primary) {

    const data = await fetchAPI(
      `
      query MenuItems {
        getMenuItemsList(name: '${name}') {
          id
          order
          text
          type
          url
          childrens
        }
      }
      `
    );
  
    return data?.getMenuItemsList;

  }
import {fetchAPI} from './api';
import {getObjectArrayData} from '@js_utils/arrayUtils';

export async function getMenuItems() {

    const data = await fetchAPI(
      `
      query MenuItems {
        getMenuItemsOption
      }
      `
    );
  
    return getObjectArrayData(data?.getMenuItemsOption);

  }
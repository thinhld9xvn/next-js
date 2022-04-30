import {fetchAPI} from './api';
import {convertObjectToArray} from '@js_utils/arrayUtils';
export async function getMenuItems() {
    const params = {
      variables : {
        'group' : 1
      }
    };
    const data = await fetchAPI('menu', 'GET', params);
    return convertObjectToArray(data);
  }
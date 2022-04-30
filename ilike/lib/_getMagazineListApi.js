import {fetchAPI} from './api';
import {convertObjectToArray} from '@js_utils/arrayUtils';
import { CATPAGE_POSTS_NUM, DEFAULT_PAGE } from '@constants/constants';

export async function getMagazineList(page = DEFAULT_PAGE, limit = CATPAGE_POSTS_NUM) {

    const params = {
      variables : {
        page,
        limit,
        status : 1
      }
    }

    const data = await fetchAPI('magazine', 'GET', params, null, false);

    return convertObjectToArray(data);

  }
import {fetchAPI} from './api';
import {convertObjectToArray} from '@js_utils/arrayUtils';
import { CATEGORY_POSTS_NUM } from '@constants/constants';

export async function getPostsList(dataCode = "", limit = CATEGORY_POSTS_NUM, page = 1) {

    const params = {
      variables : {
        page,
        limit,
        dataCode,
        status : 1
      }
    }

    const data = await fetchAPI('category-detail', 'GET', params);

    if ( data.posts?.data ) {

      return convertObjectToArray(data.posts.data);

    }

    return [];

  }
import {fetchAPI} from './api';
import {convertObjectToArray} from '@js_utils/arrayUtils';
import { CATPAGE_POSTS_NUM, DEFAULT_PAGE } from '@constants/constants';

export async function getCategoryApi(dataCode, page = DEFAULT_PAGE, limit = CATPAGE_POSTS_NUM) {

    const params = {
        variables : {
            page,
            limit,
            dataCode,
            status: 1
        }
    }

    const data = await fetchAPI('category-detail', 'GET', params);

    return convertObjectToArray(data);

  }
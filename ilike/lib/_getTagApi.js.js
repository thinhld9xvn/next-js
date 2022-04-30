import {fetchAPI} from './api';
import {convertObjectToArray} from '@js_utils/arrayUtils';
import { CATPAGE_POSTS_NUM, DEFAULT_PAGE } from '@constants/constants';
export async function getTagApi(dataCode, page = DEFAULT_PAGE) {
    const params = {
        variables : {
            page,
            limit : CATPAGE_POSTS_NUM,
            dataCode,
            status: 1
        }
    }
    const data = await fetchAPI('tag-detail', 'GET', params);
    return convertObjectToArray(data);
  }
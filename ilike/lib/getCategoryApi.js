import {fetchAPI} from './api';
import { CATPAGE_POSTS_NUM, DEFAULT_PAGE } from '@constants/constants';
export async function getCategoryApi(dataCode, slug, page = DEFAULT_PAGE, limit = CATPAGE_POSTS_NUM) {
    const params = {
        variables : {
            pretty : "true",
            q : `status:1 AND code:${dataCode} AND slug:${slug}`,
        }
    }
    const data = await fetchAPI('category/_search', 'GET', params, null, false, 2);
    return data.hits.hits[0]._source;
  }
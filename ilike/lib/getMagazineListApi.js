import {fetchAPI} from './api';
import { CATPAGE_POSTS_NUM, DEFAULT_PAGE } from '@constants/constants';
export async function getMagazineList(page = DEFAULT_PAGE, limit = CATPAGE_POSTS_NUM) {
    const params = {
      variables : {
        pretty : "true",
        from : (page - 1) * limit,
        size : limit,        
        sort : `created_at:desc`,
        q : "status:1"
      }
    }
    const data = await fetchAPI('emagazine/_search', 'GET', params, null, false, 2);
    return data.hits.hits;
  }
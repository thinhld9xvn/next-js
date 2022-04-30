import {fetchAPI} from './api';
import { CATEGORY_POSTS_NUM } from '@constants/constants';
export async function GetSearchPostsList(keyword = '', limit = CATEGORY_POSTS_NUM, page = 1) {
    const params = {
      variables : {
        from : (page - 1) * limit,
        size : limit,    
        _source_includes : "id,title,introtext,image,slug,code,created_time,category_obj,status,author",
        sort : `created_time:desc`,
        q : `status:1 AND title:"${keyword}" AND created_by:*`
      }
    }
    const data = await fetchAPI('articles/_search', 'GET', params, null, false, 2);
    return data.hits.hits;
  }
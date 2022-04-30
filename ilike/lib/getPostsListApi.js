import {fetchAPI} from './api';
import { CATEGORY_POSTS_NUM } from '@constants/constants';
export async function getPostsList(cid = null, 
                                      tid = null, 
                                        limit = CATEGORY_POSTS_NUM, 
                                          page = 1, 
                                            orderby = 'published_time', 
                                              order = 'desc' ) {
    const params = {
      variables : {
        pretty : "true",
        from : (page - 1) * limit,
        size : limit,    
        _source_includes : "id,title,introtext,image,slug,code,published_time,created_time,category_obj,status,author",    
        sort : `${orderby}:${order}`,
        q : "status:1 AND title:* AND created_by:*"
      }
    }
    if ( cid ) {
      params.variables.q = `status:1 AND category_obj:(${cid})`;
    }
    if ( tid ) {
      params.variables.q = `status:1 AND list_tags:(${tid})`;
    }
    const data = await fetchAPI('articles/_search', 'GET', params, null, false, 2);
    return data.hits.hits;
  }
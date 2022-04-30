import {fetchAPI} from './api';
import { SITEMAP_DEF_NUM, DEFAULT_PAGE } from '@constants/constants';
export async function getSitemapPostsList(page = DEFAULT_PAGE, limit = SITEMAP_DEF_NUM, fetchAll = false) {
  const params = {
    variables : {
      pretty : "true",
      size: limit,
      from: (page - 1) * limit,
      sort : `created_time:desc`,
      q : "status:1 AND title:* AND created_by:*"
    }
  }
  const data = await fetchAPI('articles/_search', 'GET', params, null, fetchAll, 2);
  return data.hits.hits.map(e => e._source);
}
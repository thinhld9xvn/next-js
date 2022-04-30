import {fetchAPI} from './api';
export async function getSitemapPostsListCount(fetchAll = false) {
  let params = {
    variables : {
      pretty : "true",
      q : "status:1"
    }
  }
  const data = await fetchAPI('articles/_count', 'GET', params, null, fetchAll, 2);
  return data.count;
}
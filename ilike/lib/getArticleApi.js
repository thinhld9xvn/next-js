import {fetchAPI} from './api';
export async function getArticle(slug) {
    const params = {
        variables : {
            pretty : "true",
            q : [`slug:"${slug}"`],
        }
    }
    const data = await fetchAPI('articles/_search', 'GET', params, null, false, 2);
    return data.hits.hits[0]._source;
  }
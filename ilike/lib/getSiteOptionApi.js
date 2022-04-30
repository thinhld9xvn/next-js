import {fetchAPI} from './api';
export async function getSiteOption() {
  const params = {
    variables : {
      pretty : "true",
      q : "status:1"
    }
  }
  const data = await fetchAPI('options/_search', 'GET', params, null, false, 2);
  return data.hits.hits.map(e => e._source);
}
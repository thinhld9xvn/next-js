import {fetchAPI} from './api';
export async function getMenuItems() {
    const params = {
      variables : {
        pretty : "true",
        q : "group_id:1 AND status:1",
        sort : "id:asc"
      }
    };
    const data = await fetchAPI('menus/_search', 'GET', params, null, false, 2);
    return data.hits.hits.map(e => e._source);
  }
import {fetchAPI} from './api';
export async function getCategoriesApi(variables = {}) {
  const {id, parent} = variables;
    const params = {
      variables : {
        pretty : "true" ,
        q : "status:1",
        sort : "sorder:asc"
      }
    }
    if ( id ) {
      params.variables.q = `id:${id} AND status:1`;
    }
    else if ( parent ) {
      params.variables.q = `parent_id:${parent} AND status:1`;
    }
    const data = await fetchAPI('category/_search', 'GET', params, null, false, 2);
    return data.hits.hits;
  }
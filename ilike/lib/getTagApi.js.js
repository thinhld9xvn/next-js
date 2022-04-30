import {fetchAPI} from './api';
export async function getTagApi(slug = null, id = null, code = null) {
    const params = {
        variables : {
            pretty : 'true',
            q : null
        }
    }
    let data = null;    
    if ( id ) {
        const ids = id.map(i => parseInt(i.match(/[0-9]{1,}/g)[0]));
        //params.variables.q.push(`id:${ids.join(' ')}`);        
        params.variables = {
            query : {
                terms : {
                    id : ids
                }
            },
            raw : true
        }
        data = await fetchAPI('tag/_search', 'POST', params, null, false, 2);
    }    
    else {
        params.variables.q = `slug:${slug} AND code:${code}`;
        /*if ( slug ) {
            params.variables.q.push(`slug:${slug}`);
        }
        if ( code ) {
            params.variables.q.push(`code:${code}`);        
        }*/
        data = await fetchAPI('tag/_search', 'GET', params, null, false, 2);
    }
    return data.hits.hits;
  }

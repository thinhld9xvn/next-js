import {fetchAPI} from './api';
import {convertObjectToArray} from '@js_utils/arrayUtils';

export async function getArticle(dataCode) {

    const params = {
        variables : {
            dataCode            
        }
    }

    const data = await fetchAPI('detail', 'GET', params);

    return convertObjectToArray(data);

  }
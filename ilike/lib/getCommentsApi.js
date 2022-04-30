import {fetchAPI} from './api';
import {convertObjectToArray} from '@js_utils/arrayUtils';
export async function getComments(article_id) {
    const params = {
        variables : {
            article_id,
            status: 1
        }
    }
    const data = await fetchAPI('comments', 'GET', params);
    return convertObjectToArray(data.data);
  }
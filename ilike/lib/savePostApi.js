import {fetchAPI} from './api';

export async function savePost(article_id, token = null) {

    const params = {
        variables : {
            article_id
        }
    }

    const results = await fetchAPI('save-post', 'POST', params, token, true);

    return results;

  }
import {fetchAPI} from './api';

export async function publishComment(data, token = null) {
    
    const {content, article_id, parent_id} = data;

    const params = {
        variables : {
            content,
            article_id,
            parent_id
        }
    }

    const results = await fetchAPI('post-comment', 'POST', params, token);

    return !(results.data === null);

  }
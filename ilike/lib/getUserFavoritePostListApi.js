import {fetchAPI} from './api';

export async function getUserFavoritePostList(token = null) {

    const params = {
      variables : {
        mode : 'full'
      }
    }

    return await fetchAPI('favorites', 'GET', params, token, false, false);

  }
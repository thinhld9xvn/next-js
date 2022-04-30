import {fetchAPI} from './api';

export async function getNotiNewPostToken() {

    const data = await fetchAPI(
      `
      query NotiNewPostToken {
        getNotiNewPostTokenOption
      }
      `
    );
  
    return data?.getNotiNewPostTokenOption;

  }
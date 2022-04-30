import {fetchAPI} from './api';

export async function getSocialNetwork() {

    const data = await fetchAPI(
      `
      query SocialNetwork {
        getSocialNetWorkList {
          id
          text
          url
        }
      }
      `
    );
  
    return data?.getSocialNetWorkList;
    
  }
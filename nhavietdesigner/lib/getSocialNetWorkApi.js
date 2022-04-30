import {fetchAPI} from './api';
import {getObjectArrayData} from '@js_utils/arrayUtils';

export async function getSocialNetwork() {

    const data = await fetchAPI(
      `
      query SocialNetwork {
        getSocialNetWorkOption
      }
      `
    );
  
    return getObjectArrayData(data?.getSocialNetWorkOption);
    
  }
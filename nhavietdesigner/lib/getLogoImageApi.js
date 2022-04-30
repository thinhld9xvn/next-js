import {fetchAPI} from './api';
import {getObjectArrayData} from '@js_utils/arrayUtils';

export async function getLogoImage() {

    const data = await fetchAPI(
      `
      query LogoImage {
        getLogoImageOption
      }
      `
    );
  
    return getObjectArrayData(data?.getLogoImageOption);
    
  }
import {fetchAPI} from './api';
import {getObjectArrayData} from '@js_utils/arrayUtils';

export async function getAboutUsOption() {

    const data = await fetchAPI(
      `
      query AboutUsOption {
        getGioiThieuPageOption
      }
      `
    );
  
    return getObjectArrayData(data?.getGioiThieuPageOption);
    
  }
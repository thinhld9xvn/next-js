import {fetchAPI} from './api';
import {getObjectArrayData} from '@js_utils/arrayUtils';

export async function getProjectTypeOption() {

    const data = await fetchAPI(
      `
      query ProjectTypeOption {
        getDuAnTCListsOption
      }
      `
    );
  
    return getObjectArrayData(data?.getDuAnTCListsOption);
    
  }
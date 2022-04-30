import {fetchAPI} from './api';
import {getObjectArrayData} from '@js_utils/arrayUtils';

export async function getProjectDesignOption() {

    const data = await fetchAPI(
      `
      query ProjectDesignOption {
        getDuAnTKListsOption
      }
      `
    );
  
    return getObjectArrayData(data?.getDuAnTKListsOption);
    
  }
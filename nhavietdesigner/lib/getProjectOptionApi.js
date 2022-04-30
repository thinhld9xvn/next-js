import {fetchAPI} from './api';
import {getObjectArrayData} from '@js_utils/arrayUtils';

export async function getProjectOption() {

    const data = await fetchAPI(
      `
      query DuAnPageOption {
        getDuAnPageOption
      }
      `
    );
  
    return getObjectArrayData(data?.getDuAnPageOption);
    
  }
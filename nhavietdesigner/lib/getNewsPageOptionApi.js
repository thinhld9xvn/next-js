import {fetchAPI} from './api';
import {filterObjectArrayData, getObjectArrayData} from '@js_utils/arrayUtils';

export async function getNewsPageOption() {

    const data = await fetchAPI(
      `
      query NewsPageOption {
        getNewsPageOption
      }
      `
    );

    const results = getObjectArrayData(data?.getNewsPageOption);
  
    results['options'] = filterObjectArrayData(results['options'], 'post');

    return results;
    
  }
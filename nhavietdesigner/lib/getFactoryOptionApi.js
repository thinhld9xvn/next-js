import {fetchAPI} from './api';
import {getObjectArrayData} from '@js_utils/arrayUtils';

export async function getFactoryOption() {

    const data = await fetchAPI(
      `
      query FactoryOption {
        getNhaMayPageOption
      }
      `
    );
  
    return getObjectArrayData(data?.getNhaMayPageOption);
    
  }
import {fetchAPI} from './api';
import {getObjectArrayData} from '@js_utils/arrayUtils';

export async function getShopOption() {

    const data = await fetchAPI(
      `
      query ShopOption {
        getProductsOption
      }
      `
    );
  
    return getObjectArrayData(data?.getProductsOption);
    
  }
import {fetchAPI} from './api';
import {getObjectArrayData} from '@js_utils/arrayUtils';

export async function getCtInfo() {

  const data = await fetchAPI(
    `
    query CtInfo {
      getCtInfoOption
    }
    `
  );

  return getObjectArrayData(data?.getCtInfoOption);
  
}
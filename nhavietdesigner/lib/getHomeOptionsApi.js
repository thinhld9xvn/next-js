import {fetchAPI} from './api';
import {getObjectArrayData} from '@js_utils/arrayUtils';

export async function getHomeOptions() {

  const data = await fetchAPI(
    `
    query HomeOptions {
      getHomePageOption
    }
    `
  );

  return getObjectArrayData(data?.getHomePageOption);
  
}
import {fetchAPI} from './api';
import {getObjectArrayData} from '@js_utils/arrayUtils';

export async function getClientsList() {

    const data = await fetchAPI(
      `
      query ClientsList {
        getClientsListOption
      }
      `
    );
  
    return getObjectArrayData(data?.getClientsListOption);

}
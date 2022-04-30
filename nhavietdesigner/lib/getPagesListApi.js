import {fetchAPI} from './api';
import {getObjectArrayData, filterObjectArrayData} from '@js_utils/arrayUtils';

export async function getPagesList() {

    const data = await fetchAPI(
      `
      query PagesList {
        getPagesListOption
      }
      `
    );

    return filterObjectArrayData(getObjectArrayData(data?.getPagesListOption), 'page');    

  }
import {fetchAPI} from './api';
import {getObjectArrayData, filterArrayData} from '@js_utils/arrayUtils';
import { addPathToUrl } from '@js_dir/utils/urlUtils';

export async function getPagesList() {

    const data = await fetchAPI(
      `
      query PagesList {
        getPagesListOption
      }
      `
    );

    const results = filterArrayData(getObjectArrayData(data?.getPagesListOption));

    results.map(item => {

      item.slug = item.url.split('/')[1];
      item.url = addPathToUrl(item.url, 'page');

    });
  
    return results;

  }
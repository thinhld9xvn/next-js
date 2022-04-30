import {fetchAPI} from './api';
import {getObjectArrayData} from '@js_utils/arrayUtils';
import { addPathToUrl } from '@js_dir/utils/urlUtils';

export async function getSlidersList() {

    const data = await fetchAPI(
      `
      query SlidersList {
        getSlidersListOption
      }
      `
    );

    const results = getObjectArrayData(data?.getSlidersListOption);

    results.map(item => {
      
      item.slug = item.url.split('/')[2];
      item.url = addPathToUrl(item.url, 'archive');

    });
  
    return results;

  }
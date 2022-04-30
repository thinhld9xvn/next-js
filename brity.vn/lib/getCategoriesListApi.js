import {fetchAPI} from './api';
import {getObjectArrayData, filterArrayData} from '@js_utils/arrayUtils';

export async function getCategoriesList() {

    const data = await fetchAPI(
      `
      query CategoriesList {
        getCategoriesListOption
      }
      `
    );

    const results = filterArrayData(getObjectArrayData(data?.getCategoriesListOption));

    results.map(item => {
      
      item.slug = item.url.split('/')[2];

    });
  
    return results;

  }
import {fetchAPI} from './api';
import {getObjectArrayData, filterArrayData} from '@js_utils/arrayUtils';
import { addPathToUrl } from '@js_dir/utils/urlUtils';

export async function getArticlesList() {

  const data = await fetchAPI(
    `
    query ArticlesList {
      getArticlesListOption
    }
    `
  );
    
  const results = filterArrayData(getObjectArrayData(data?.getArticlesListOption));

    results.map(item => {

      item.slug = item.url.split('/')[1];
      item.url = addPathToUrl(item.url, 'post');

    });
  
    return results;
}
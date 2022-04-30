import {fetchAPI} from './api';
import {getObjectArrayData, filterObjectArrayData} from '@js_utils/arrayUtils';

export async function getArticlesList() {

  const data = await fetchAPI(
    `
    query ArticlesList {
      getArticlesListOption
    }
    `
  );
    
  return filterObjectArrayData(getObjectArrayData(data?.getArticlesListOption), 'post');
}
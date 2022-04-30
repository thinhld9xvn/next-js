import { inCategory } from '@js_dir/utils/categoriesUtils';
import { getArticlesList } from './getArticlesListApi';

export async function getArticleRelated(data) {

  const {id, cid} = data;

  let count = 0;

  const articlesList = await getArticlesList();  
  
  return articlesList.filter((article, i) => {

    if ( count < 3 ) {

      if ( article.id !== id && inCategory(article, cid, articlesList, 'id') ) {

        count++;

        return true;

      }      

    }

  });

}
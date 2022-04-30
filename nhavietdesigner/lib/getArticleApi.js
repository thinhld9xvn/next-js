import { getArticlesList } from './getArticlesListApi';

export async function getArticle(slug) {
  
  return (await getArticlesList()).filter(article => article.slug === slug)[0];

}
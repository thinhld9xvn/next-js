import {fetchAPI} from './api';
export async function getArticlesPathsList(post_type) {
    return await fetchAPI(
      `query getArticlesPathsList {
        articlesPathList: getArticlesList(post_type: "${post_type}") {
          slug
        }
      }`
    );
  }
import {fetchAPI} from './api';
export async function getArticlesPageData(post_type, slug, s = '', related = true) {
    let q = `query getArticlesPageData {
      articlePage: getArticlesList(post_type: "${post_type}" $s $slug) {
        id
        title
        name          
        slug
        url
        excerpt
        contents
        thumbnail
        date_created {
          day
          month
          year
        }
        categories {
          id
          text
          name
          title            
          url
        }
      }
      $relatedList        
    }`;
    q = q.replace('$relatedList', related ? `
        relatedLists : getArticlesList(slug: "${slug}", related : true, limit : 3) {
          id
          text
          url
          name
          excerpt
          thumbnail
          title
          date_created {
            day
            month
            year
          }
          categories {
            id
            text
            name
            title            
            url
          }
        }` : '')
        .replace('$s', s ? `, s: "${s}"` : '')
        .replace('$slug', slug ? `, slug: "${slug}"` : '');
    return await fetchAPI(q);
  }
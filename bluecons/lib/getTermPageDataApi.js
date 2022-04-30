import {fetchAPI} from './api';
export async function getTermPageData(post_type, tax, term, get_articles = true) {
  let q = `query getTermPageData {
    termsList : getTaxonomiesList(tax: "${tax}" {$term_params}) {
        id
        name
        title
        url
        thumbnail
        description
    }
  `;
  q = q.replace('{$term_params}', term ? `, term_slug: "${term}"` : '');
  if ( get_articles ) {
      q += `articlesList : getArticlesList(post_type: "${post_type}", tax: "${tax}", term: "${term}") {
            id
            title
            url
            thumbnail
            excerpt
            date_created {
              day
              month
              year
            }
            categories {
              id
              name
              text
              url
            }
        }`;
  }
  q += `}`;
  return await fetchAPI(q);
}
import { SLUG_TYPE } from '@constants/constants';
import {fetchAPI} from '@lib/api';
import { getArticlesPageData } from '@lib/getArticlePageDataApi';
import { getDefaultPageData } from '@lib/getDefaultPageDataApi';
import { getHeadSchemaPage } from '@lib/getHeadSchemaPageApi';
import { getSiteOptions } from '@lib/getSiteOptionsApi';
import { getTermPageData } from '@lib/getTermPageDataApi';
import { getArticlePageData, getPageData } from './typewareUtils';
import { getFullPageLink } from './urlUtils';

async function isCategory(slug) {
  const {taxPath} = await fetchAPI(
    `query getTaxPathsList {
      taxPath : getTaxonomiesList(tax: "${process.env.POSTS_TAX}", term_slug: "${slug}") {
        slug
      }
    }`
  );
  return taxPath.length && taxPath[0].slug;
}

async function isPage(slug) {
  const {pagePath} = await fetchAPI(
    `query getArticlesPathsList {
      pagePath: getArticlesList(post_type: "${process.env.PAGE_POST_TYPE}", slug: "${slug}") {
        slug
      }
    }`
  );
  return pagePath.length;
}

async function isPost(slug) {
  const {postPath} = await fetchAPI(
    `query getArticlesPathsList {
      postPath: getArticlesList(post_type: "${process.env.POSTS_POST_TYPE}", slug: "${slug}") {
        slug
      }
    }`
  );
  return postPath.length;
}

async function getTypeSlug(slug) {
  if ( await isCategory(slug) ) return SLUG_TYPE.CATEGORY;
  if ( await isPage(slug) ) return SLUG_TYPE.PAGE;
  if ( await isPost(slug) ) return SLUG_TYPE.POST;
  return false;
}

export async function getMiddWareProps(slug) {
    const type = await getTypeSlug(slug);
    if ( !type ) {
      return { notFound: true };
    }
    const pageContext = {
                        siteOptions : await getSiteOptions(),
                        headSchema : await getHeadSchemaPage(getFullPageLink(slug)),
                        type
                      };
    if ( type === SLUG_TYPE.POST ) {
      const {articlePage, relatedLists} = await getArticlesPageData(process.env.POSTS_POST_TYPE, slug);
      pageContext.articlePage = {...getArticlePageData(articlePage)};
      pageContext.relatedLists = [...relatedLists];
    }
    else {
      const {pages} = await getDefaultPageData(slug);      
      if ( type === SLUG_TYPE.CATEGORY ) {
        pageContext.termPageData = await getTermPageData(process.env.POSTS_POST_TYPE, process.env.POSTS_TAX, slug);
      }
      pageContext.pageData = {...getPageData(pages), defaultPage : true};
    } 
    return {
      props: {        
        pageContext : {...pageContext}
      },
      revalidate: 10
    }
}

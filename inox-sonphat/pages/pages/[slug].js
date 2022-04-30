import React from 'preact/compat'
import { getPagePathsList } from '@lib/getPagePathsListApi';
import DefaultPageLayout from '@components/default-page-layout';
import { isArticleUrl } from '@js_dir/utils/urlUtils';
import { getPageStaticProps } from '@js_dir/utils/pagesUtils';
import { getArticleStaticProps } from '@js_dir/utils/articlesUtils';
import { getArticlesPathsList } from '@lib/getArticlesPathsListApi';
import SingleBlogLayout from '@components/single-blog-layout';
import { LANGUAGES } from '@constants/constants';
export default function PgPage({ pageContext }) { 
  const {type} = pageContext;
  return (
    <>
      {type === 'article' ? (
          <SingleBlogLayout pageContext = {pageContext} />
      ) : (
        <DefaultPageLayout pageContext = {pageContext} />
      )}
    </>
  )
}
export async function getStaticProps(context) {
    const {locale, params} = context; //
    const {slug} = params;  
    if ( isArticleUrl(slug) ) {
      return getArticleStaticProps(slug, locale);
    }
    return getPageStaticProps(slug, locale);
  }
export async function getStaticPaths() {
  const travsel = (paths, locale) => {
    return paths.map(e => {
      const {slug} = e;
      return {
        params: {
          slug
        },
        locale
      }
    })
  }
    const {pagesPathList : viPagesPathList} = await getPagePathsList(LANGUAGES.vi);
    //const {pagesPathList : enPagesPathList} = await getPagePathsList(LANGUAGES.en);
    const {articlesPathList : viArticlesPathList} = await getArticlesPathsList(LANGUAGES.vi);
    //const {articlesPathList : enArticlesPathList} = await getArticlesPathsList(LANGUAGES.en);
    const paths = travsel(viPagesPathList.nodes, LANGUAGES.vi).concat(travsel(viArticlesPathList, LANGUAGES.vi));
    return {
      paths,
      fallback: 'blocking',
    }
  }

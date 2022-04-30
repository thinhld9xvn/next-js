import AboutLayout from '@components/about-layout';
import ProductsCategoryLayout from '@components/products-category-layout';
import SingleLayout from '@components/single-layout';
import { SLUG_TYPE } from '@constants/constants';
import { getMiddWareProps } from '@js_dir/utils/middlewareProps';
import { getArticlesPathsList } from '@lib/getArticlesPathsListApi';
import { getTaxPathsList } from '@lib/getTaxPathsListApi';
import React from 'preact/compat'
export default function MiddleWareRouter({ pageContext }) {
  const {type} = pageContext;
    return (
        <>
          {type === SLUG_TYPE.CATEGORY ? (
            <ProductsCategoryLayout pageContext = {pageContext} />
          ) : null}
          {type === SLUG_TYPE.PAGE ? (
            <AboutLayout pageContext = {pageContext} />
          ) : null}
          {type === SLUG_TYPE.POST ? (
            <SingleLayout pageContext = {pageContext} />
          ) : null}
        </>
    )
}

export async function getStaticProps(context) { 
    const {params} = context;
    const {slug} = params;
    return await getMiddWareProps(slug);
}

export async function getStaticPaths() {
    const travsel = (paths) => {
      return paths.map(e => {
        return {
          params: {
            slug: e.slug
          }
        }
      })
    }
    const {getTaxonomiesList : taxPaths} = await getTaxPathsList(process.env.POSTS_TAX); // categories
    const {articlesPathList : postsPath} = await getArticlesPathsList(process.env.POSTS_POST_TYPE); // posts
    const {articlesPathList : pagesPath} = await getArticlesPathsList(process.env.PAGE_POST_TYPE); // pages
    const paths = travsel(taxPaths).concat(travsel(postsPath)).concat(travsel(pagesPath));
    return {
      paths,
      fallback: 'blocking',
    }
  }

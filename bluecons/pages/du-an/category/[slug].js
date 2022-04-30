
import { concat, getFullPageLink } from '@js_dir/utils/urlUtils';
import { getHeadSchemaPage } from '@lib/getHeadSchemaPageApi';
import { getSiteOptions } from '@lib/getSiteOptionsApi';
import { getTaxPathsList } from '@lib/getTaxPathsListApi';
import { getTermPageData } from '@lib/getTermPageDataApi';
import { getDefaultPageData } from '@lib/getDefaultPageDataApi';
import React from 'preact/compat'
import { getPageData } from '@js_dir/utils/typewareUtils';
import ProductsCategoryLayout from '@components/products-category-layout';
export default function CategorySPPage({ pageContext }) {
    return (
        <ProductsCategoryLayout pageContext = {pageContext} />
    )
}
export async function getStaticProps(context) {
    try {
      const {params} = context; 
      const {slug} = params;
      const path = concat(process.env.PROJECTS_TAX_REWRITE, slug);
      const siteOptions = await getSiteOptions();
      const headSchema = await getHeadSchemaPage(getFullPageLink(path));
      const {pages} = await getDefaultPageData(process.env.PROJECTS_PAGE_URL);
      const termPageData = await getTermPageData(process.env.PROJECTS_POST_TYPE, process.env.PROJECTS_TAX, slug);
      return {
        props: {        
          pageContext : {
            headSchema,
            siteOptions,
            pageData : getPageData(pages),
            termPageData
          }
        },
        revalidate: 10
      }
    } catch {
      return {
        props: {        
          pageContext : {
          }
        }
      }
    }
}
export async function getStaticPaths() {
    const resultsPathList = [];
    const travelsePaths = (data) => {
      data.map(e => {
        resultsPathList.push({
          params: {
            slug : e.slug
          }
        });
        if ( e.childrens ) {
          travelsePaths(e.childrens);
        }
      })
    }
    const {getTaxonomiesList : paths} = await getTaxPathsList(process.env.PROJECTS_TAX);
    travelsePaths(paths);
    return {
      paths : resultsPathList,
      fallback: 'blocking',
    }
}
  
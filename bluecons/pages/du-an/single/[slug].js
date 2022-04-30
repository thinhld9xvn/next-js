import SingleServiceLayout from '@components/single-service-layout';
import { getArticlePageData, getPageData } from '@js_dir/utils/typewareUtils';
import { concat, getFullPageLink } from '@js_dir/utils/urlUtils';
import { getArticlesPageData } from '@lib/getArticlePageDataApi';
import { getArticlesPathsList } from '@lib/getArticlesPathsListApi';
import { getDefaultPageData } from '@lib/getDefaultPageDataApi';
import { getHeadSchemaPage } from '@lib/getHeadSchemaPageApi';
import { getSiteOptions } from '@lib/getSiteOptionsApi';
import React from 'preact/compat'
export default function SingleSPPage({ pageContext }) {
    return (
        <SingleServiceLayout pageContext = {pageContext} />
    )
}
export async function getStaticProps(context) {
  try {
    const {params} = context;
    const {slug} = params;
    const path = concat(process.env.PROJECTS_POST_TYPE_REWRITE, slug);
    const siteOptions = await getSiteOptions();
    const headSchema = await getHeadSchemaPage(getFullPageLink(path));
    const {pages} = await getDefaultPageData(process.env.PROJECTS_PAGE_URL);
    const page = getPageData(pages);
    const {articlePage} = await getArticlesPageData(process.env.PROJECTS_POST_TYPE, slug);
    const data = {...getArticlePageData(articlePage), title : page.title};
    return {
        props: {
            pageContext : {
            siteOptions,
            headSchema,
            articlePage : data
            }
        },
        revalidate: 10
    }
  } catch {
    return {
      notFound: true
    }
  }
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
    const {articlesPathList} = await getArticlesPathsList(process.env.PROJECTS_POST_TYPE);
    const paths = travsel(articlesPathList);
    return {
      paths,
      fallback: 'blocking',
    }
  }

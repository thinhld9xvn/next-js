import React from 'preact/compat'
import { getHeadSchemaPage } from '@lib/getHeadSchemaPageApi'
import { getFullPageLink } from '@js_dir/utils/urlUtils';
import { getSiteOptions } from '@lib/getSiteOptionsApi';
import { getDefaultPageData } from '@lib/getDefaultPageDataApi';
import BlogLayout from '@components/blog-layout';
import { getTermPageData } from '@lib/getTermPageDataApi';
import { getPageData } from '@js_dir/utils/typewareUtils';
export default function Blog({ pageContext }) { 
  return (
      <BlogLayout pageContext = {pageContext} />
  )
}
export async function getStaticProps(context) { 
  const siteOptions = await getSiteOptions();
  const headSchema = await getHeadSchemaPage(getFullPageLink(process.env.NEWS_PAGE_URL));
  const {pages} = await getDefaultPageData(process.env.NEWS_PAGE_URL);
  const {termsList, articlesList} = await getTermPageData(process.env.POSTS_POST_TYPE, process.env.POSTS_TAX, "", true);
  return {
    props: {        
      pageContext : {
        siteOptions,
        headSchema,
        pageData : getPageData(pages),
        termsList,
        articlesList
      }
    },
    revalidate: 10
  }
}

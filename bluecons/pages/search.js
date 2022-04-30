import React from 'preact/compat'
import { getHeadSchemaPage } from '@lib/getHeadSchemaPageApi'
import { getFullPageLink } from '@js_dir/utils/urlUtils';
import SearchLayout from '@components/search-layout';
import { getArticlesPageData } from '@lib/getArticlePageDataApi';
import { getSiteOptions } from '@lib/getSiteOptionsApi';
import { getPageData } from '@js_dir/utils/typewareUtils';
import { getDefaultPageData } from '@lib/getDefaultPageDataApi';
export default function Search({ pageContext }) { 
  return (
      <SearchLayout pageContext = {pageContext} />
  )
}
export async function getServerSideProps(context) { 
  const {query} = context; 
  const keyword = query.s;
  const siteOptions = await getSiteOptions();
  const headSchema = await getHeadSchemaPage(getFullPageLink(process.env.SEARCH_PAGE_URL));
  const {pages} = await getDefaultPageData(process.env.SEARCH_PAGE_URL);
  const {articlePage} = await getArticlesPageData("any", "", keyword, false);
  return {
    props: {        
      pageContext : {
        headSchema,
        siteOptions,
        pageData : {...getPageData(pages), name : "Từ khóa tìm kiếm: '" + keyword + "'"},
        articlesList : articlePage
      }
    }
  }
}

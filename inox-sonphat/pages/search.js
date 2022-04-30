import React from 'preact/compat'
import SearchLayout from '@components/search-layout'
import { getSiteOptions } from '@lib/getSiteOptionsApi';
import { getSearchPageData } from '@lib/getSearchPageDataApi';
export default function SearchPage({ pageContext }) {
    return (
        <SearchLayout pageContext = {pageContext} />
    )
}
export async function getServerSideProps(context) { 
  const {locale, query} = context; 
  const keyword = query.s;
  const options = await getSiteOptions(locale);
  const {pageData, productsList} = await getSearchPageData(locale, keyword);
  const searchPageData = pageData.nodes[0];
  const {title} = searchPageData;
  const breadcrumbs = {
    id : 'search_page',
    base : 'search',
    title : title + ' "' + keyword + '"',
    data : []
  };
    return {
        props: {        
            pageContext : {
                siteOptions : {...options},
                searchPageData : searchPageData,
                productsList,
                breadcrumbs
            }
        }
    }
}

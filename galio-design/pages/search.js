import React from 'preact/compat'
import SearchLayout from '@components/search-layout';
import { getProjectSearchPageData } from '@lib/getProjectSearchPageDataApi';
export default function SearchPage({ pageContext }) { 
  return (
    <SearchLayout pageContext = {pageContext} />
  )
}
export async function getServerSideProps(context) {
    const {locale, query} = context;
    const keyword = query.s;
    const data = await getProjectSearchPageData(locale, keyword);
    const {getLogoSite, getSocialNetWorkList, getCtInfoList, getMenuItemsList,
           getProjectsList, getFooterPageData, pages} = data;
    const pageOptions = {getLogoSite, getSocialNetWorkList, getCtInfoList, getMenuItemsList};
    const pageData = {getProjectsList, getFooterPageData, pages};
    return {
      props: {        
        pageContext : {
          options : {...pageOptions},
          data : {...pageData}
        }
      }
    }
}

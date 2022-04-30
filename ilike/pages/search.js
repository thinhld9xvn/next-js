import React from 'preact/compat'
import SearchPage from '@searchpage/search-page'
export default function Search({ pageContext }) {
    return (
        <SearchPage pageContext = {pageContext} />
    )
}
export async function getServerSideProps(context) { 
    /*const {s} = context.query;
    const breadcrumbs = {
      id : 'search',
      title : `Tìm kiếm từ khóa: "${s}"`,
      base : 'search',
      data : []
    }*/
    return {
      props: {        
        pageContext : {
           name : "Tìm kiếm",
           //breadcrumbs
        }
      }
    }
}

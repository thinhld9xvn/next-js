import React from 'preact/compat'
import { getSiteOptions } from '@lib/getSiteOptionsApi';
import DuanLayout from '@components/duan-layout';
import { getProjectPageData } from '@lib/getProjectPageDataApi';
export default function DuAnPage({ pageContext }) { 
  return (
    <DuanLayout pageContext = {pageContext} />
  )
}
export async function getStaticProps(context) { 
  const {locale} = context;  
  const options = await getSiteOptions(locale);
  const data = await getProjectPageData(locale);
    return {
      props: {        
        pageContext : {
          options : {...options},
          data : {...data}
        }
      },
      revalidate: 10
    }
}

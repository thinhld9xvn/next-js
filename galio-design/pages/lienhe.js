import React from 'preact/compat'
import LienHeLayout from "@components/lienhe-layout"
import { getSiteOptions } from '@lib/getSiteOptionsApi';
import { getContactPageData } from '@lib/getContactPageDataApi';
export default function LienHePage({ pageContext }) { 
  return (
    <LienHeLayout pageContext = {pageContext} />
  )
}
export async function getStaticProps(context) { 
  const {locale} = context;
  const options = await getSiteOptions(locale);
  const data = await getContactPageData(locale);
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

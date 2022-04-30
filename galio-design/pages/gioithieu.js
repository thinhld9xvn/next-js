import React from 'preact/compat'
import GioiThieuLayout from "@components/gioithieu-layout"
import { getSiteOptions } from '@lib/getSiteOptionsApi';
import { getIntroPageData } from '@lib/getIntroPageDataApi';
export default function GioiThieuPage({ pageContext }) { 
  return (
    <GioiThieuLayout pageContext = {pageContext} />
  )
}
export async function getStaticProps(context) { 
  const {locale} = context;
  const options = await getSiteOptions(locale);
  const data = await getIntroPageData(locale);
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

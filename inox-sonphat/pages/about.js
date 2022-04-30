import React from 'preact/compat'
import AboutLayout from "@components/about-layout"
import { getSiteOptions } from '@lib/getSiteOptionsApi'
import { getGioiThieuPageData } from '@lib/getGioiThieuPageDataApi';
export default function GioiThieuPage({ pageContext }) { 
  return (
    <AboutLayout pageContext = {pageContext} />
  )
}
export async function getStaticProps(context) {
  const {locale} = context; 
  const siteOptions = await getSiteOptions(locale);
  const introPageData = await getGioiThieuPageData(locale);
  const title = introPageData.pages.nodes[0].title;
  const breadcrumbs = {
    id : 'intro',
    title : title,
    base : 'page',
    data : []
  }
    return {
      props: {        
        pageContext : {
          siteOptions,
          introPageData,
          breadcrumbs
        }
      },
      revalidate: 10
    }
}

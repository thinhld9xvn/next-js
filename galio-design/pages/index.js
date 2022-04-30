import React from 'preact/compat'
import HomeLayout from "@components/home-layout"
import { getSiteOptions } from '@lib/getSiteOptionsApi';
import { getHomePageData } from '@lib/getHomePageDataApi';
export default function Home({ pageContext }) { 
  return (
    <HomeLayout pageContext = {pageContext} />
  )
}
export async function getStaticProps(context) { 
  const {locale} = context;
  const options = await getSiteOptions(locale);
  const data = await getHomePageData(locale);
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

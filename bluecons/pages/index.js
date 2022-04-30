import React from 'preact/compat'
import HomeLayout from "@components/home-layout"
import { getHeadSchemaPage } from '@lib/getHeadSchemaPageApi'
import { WP_WEBSITE_URL } from '@constants/constants';
import { getSiteOptions } from '@lib/getSiteOptionsApi';
import { getHomePageData } from '@lib/getHomePageDataApi';
export default function Home({ pageContext }) { 
  return (
    <HomeLayout pageContext = {pageContext} />
  )
}
export async function getStaticProps(context) { 
    const siteOptions = await getSiteOptions();
    const headSchema = await getHeadSchemaPage(WP_WEBSITE_URL);
    const homePageData = await getHomePageData();
    return {
      props: {        
        pageContext : {
          headSchema,
          siteOptions,
          homePageData
        }
      },
      revalidate: 10
    }
}

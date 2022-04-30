import React from 'preact/compat'
import { getHeadSchemaPage } from '@lib/getHeadSchemaPageApi'
import { getFullPageLink } from '@js_dir/utils/urlUtils';
import AboutLayout from '@components/about-layout';
import { getSiteOptions } from '@lib/getSiteOptionsApi';
import { getDefaultPageData } from '@lib/getDefaultPageDataApi';
import { getPageData } from '@js_dir/utils/typewareUtils';
export default function About({ pageContext }) { 
  return (
      <AboutLayout pageContext = {pageContext} />
  )
}
export async function getStaticProps(context) { 
    const siteOptions = await getSiteOptions();
    const headSchema = await getHeadSchemaPage(getFullPageLink(process.env.INTRO_PAGE_URL));
    const {pages} = await getDefaultPageData(process.env.INTRO_PAGE_URL)
    return {
      props: {        
        pageContext : {
          siteOptions,
          headSchema,
          pageData : getPageData(pages)
        }
      },
      revalidate: 10
    }
}

import React from 'preact/compat'
import { getHeadSchemaPage } from '@lib/getHeadSchemaPageApi'
import { getFullPageLink } from '@js_dir/utils/urlUtils';
import ProductsLayout from '@components/products-layout';
import { getSiteOptions } from '@lib/getSiteOptionsApi';
import { getDefaultPageData } from '@lib/getDefaultPageDataApi';
import { getTermPageData } from '@lib/getTermPageDataApi';
import { getPageData } from '@js_dir/utils/typewareUtils';
export default function ServicesPage({ pageContext }) { 
  return (
      <ProductsLayout pageContext = {pageContext} />
  )
}
export async function getStaticProps(context) { 
    const siteOptions = await getSiteOptions();
    const headSchema = await getHeadSchemaPage(getFullPageLink(process.env.SERVICES_PAGE_URL));
    const {pages} = await getDefaultPageData(process.env.SERVICES_PAGE_URL);
    const {termsList} = await getTermPageData(null, process.env.SERVICES_TAX, null, false);
    return {
      props: {        
        pageContext : {
          siteOptions,
          headSchema,
          pageData : getPageData(pages),
          termsList
        }
      },
      revalidate: 10
    }
}

import React from 'preact/compat'
import CartsLayout from '@components/carts-layout'
import { getSiteOptions } from '@lib/getSiteOptionsApi';
import { getCartsPageData } from '@lib/getCartsPageDataApi';
export default function CartsPage({ pageContext }) {
    return (
        <CartsLayout pageContext = {pageContext} />
    )
}
export async function getStaticProps(context) { 
  const {locale} = context; 
  const siteOptions = await getSiteOptions(locale);
  const cartsPageData = await getCartsPageData(locale);  
  const cartsPage = cartsPageData.pageData.nodes[0];
  const {title} = cartsPage;
  const breadcrumbs = {
    id : 'carts',
    title, 
    base : 'page',
    data : []
  }
    return {
      props: {        
        pageContext : {
          siteOptions,
          cartsPageData : cartsPage,
          breadcrumbs
        }
      },
      revalidate: 10
    }
}

import React from 'preact/compat'
import ProductsLayout from '@components/products-layout'
import { getProductPageData } from '@lib/getProductPageDataApi';
import { getSiteOptions } from '@lib/getSiteOptionsApi';
export default function ProductsPage({ pageContext }) {
    return (
        <ProductsLayout pageContext = {pageContext} />
    )
}
export async function getStaticProps(context) { 
  const {locale} = context; 
  const options = await getSiteOptions(locale);
  const productsList = await getProductPageData(locale);
  const breadcrumbs = {
    id : 'category_product',
    base : 'category',
    data : [
      {
        id : 'products_base'
      }
    ]
  };
    return {
      props: {        
        pageContext : {
          siteOptions : {...options},
          productPageData : {...productsList},
          breadcrumbs
        }
      },
      revalidate: 10
    }
}

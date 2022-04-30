import React from 'preact/compat'
import CheckoutLayout from '@components/checkout-layout'
import { getSiteOptions } from '@lib/getSiteOptionsApi';
import { getCheckoutPageData } from '@lib/getCheckoutPageDataApi';
export default function CheckoutPage({ pageContext }) {
    return (
        <CheckoutLayout pageContext = {pageContext} />
    )
}
export async function getStaticProps(context) { 
  const {locale} = context; 
  const siteOptions = await getSiteOptions(locale);
  const {pageData, wooBacsPayment} = await getCheckoutPageData(locale); 
  const myPageData = pageData.nodes[0]; 
  const myWooBacsPayment = wooBacsPayment[0];
  const {title} = myPageData;
  const breadcrumbs = {
    id : 'checkout',
    title, 
    base : 'page',
    data : []
  }
    return {
      props: {        
        pageContext : {
          siteOptions,
          checkoutPageData : myPageData,
          wooBacsPayment : myWooBacsPayment,
          breadcrumbs
        }
      },
      revalidate: 10
    }
}

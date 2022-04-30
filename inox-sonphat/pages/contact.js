import React from 'preact/compat'
import ContactLayout from '@components/contact-layout';
import { getSiteOptions } from '@lib/getSiteOptionsApi';
import { getContactPageData } from '@lib/getContactPageDataApi';
export default function ContactPage({ pageContext }) { 
  return (
    <ContactLayout pageContext = {pageContext} />
  )
}
export async function getStaticProps(context) { 
  const {locale} = context; 
  const siteOptions = await getSiteOptions(locale);
  const contactPageData = await getContactPageData(locale);  
  const pageData = contactPageData.pageData.nodes[0];
  const {title} = pageData;
  const breadcrumbs = {
    id : 'contact',
    title, 
    base : 'page',
    data : []
  }
    return {
      props: {        
        pageContext : {
          siteOptions,
          contactPageData : pageData,
          breadcrumbs
        }
      },
      revalidate: 10
    }
}

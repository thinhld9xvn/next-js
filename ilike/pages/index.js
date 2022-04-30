import React from 'preact/compat'
import HomePage from "@components/pages/home/home-page"
import { getSiteOption } from '@lib/getSiteOptionApi';
export default function Home({ pageContext }) { 
  return (
    <HomePage pageContext = {pageContext} />
  )
}
/*export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  const siteOptions = await getSiteOption();
  const description = siteOptions.filter(e => e.option_name === 'description' || 
                                                e.option_name === 'meta_description')[0];
  return {
    props : {
      pageContext : {
        title : description.option_value,
        description: description.option_value,
        keywords : ''       
      }
    }
  }
}*/
export async function getStaticProps() {
  const siteOptions = await getSiteOption();
  const description = siteOptions.filter(e => e.option_name === 'description' || 
                                                e.option_name === 'meta_description')[0];
  return {
    props : {
      pageContext : {
        title : description ? description.option_value : '',
        description: description ? description.option_value : '',
        keywords : ''       
      }
    },
    revalidate: 10
  }
}

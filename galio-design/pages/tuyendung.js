import React from 'preact/compat'
import TuyenDungLayout from "@components/tuyendung-layout"
import { getSiteOptions } from '@lib/getSiteOptionsApi';
import { getTuyenDungPageData } from '@lib/getTuyenDungPageDataApi';

export default function TuyenDungPage({ pageContext }) { 

  return (
    <TuyenDungLayout pageContext = {pageContext} />
  )
  
}

export async function getStaticProps(context) { 

  const {locale} = context;

  const options = await getSiteOptions(locale);
  const data = await getTuyenDungPageData(locale);

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

import React from 'preact/compat'
import MediaLayout from "@components/media-layout"
import { getSiteOptions } from '@lib/getSiteOptionsApi';
import { getMediaPageData } from '@lib/getMediaPageDataApi';

export default function MediaPage({ pageContext }) { 

  return (
    <MediaLayout pageContext = {pageContext} />
  )
  
}

export async function getStaticProps(context) { 

  const {locale} = context;

  const options = await getSiteOptions(locale);
  const data = await getMediaPageData(locale);

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

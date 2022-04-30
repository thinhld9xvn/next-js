import React from 'preact/compat'
import VideoLayout from "@components/video-layout"
import { getSiteOptions } from '@lib/getSiteOptionsApi';
import { getVideoPageData } from '@lib/getVideoPageDataApi';

export default function VideoPage({ pageContext }) { 

  return (
    <VideoLayout pageContext = {pageContext} />
  )
  
}

export async function getStaticProps(context) { 

  const {locale} = context;

  const options = await getSiteOptions(locale);
  const data = await getVideoPageData(locale);

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

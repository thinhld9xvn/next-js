import React, { useEffect } from 'preact/compat'
import { getSeoExtras } from '@js_utils/getSeoExtrasUtils';
import { getAllPages } from '@lib/getAllPagesApi';
import {PAGE_WP_URLS, PAGE_URLS} from '@constants/constants';
import HomeLayout from "@components/home-layout"
import { getInitPropsJsonData } from "@js_dir/utils/data/getInitPropsJsonDataUtils";
import { setNotiTimer } from '@js_dir/utils/notificationsUtils';

export default function Home({ pageContext }) { 

  useEffect(() => {

    const tmrNoti = setInterval(setNotiTimer, 5000);

    return () => {
        clearInterval(tmrNoti);
    }

}, []);

  return (

    <HomeLayout pageContext = {pageContext} />

  )
  
}

export async function getStaticProps() { 
    
    const result = await getAllPages();
    const props = await getInitPropsJsonData();

    return {
      props: {        
        pageContext : {
          data : {            
            seo : getSeoExtras(result, {
              id : PAGE_WP_URLS.HOME.id,
              url : PAGE_WP_URLS.HOME.url,
              rewrite : PAGE_URLS.HOME
            }),
            ...props
          }          
        }
      },
      revalidate: 10
    }

}

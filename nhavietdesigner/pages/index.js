import React from 'preact/compat'
import HomeLayout from "@components/home-layout"
import { getInitPropsJsonData } from '@js_dir/utils/data/getInitPropsJsonDataUtils';
import { getHomeOptions } from '@lib/getHomeOptionsApi';
import { getPage } from '@lib/getPageApi';
import { HOME_PAGE_URL } from '@constants/constants';

export default function Home({ pageContext }) { 

  return (

    <HomeLayout pageContext = {pageContext} />

  )
  
}

export async function getStaticProps() { 

    const page = await getPage(HOME_PAGE_URL);
    const props = await getInitPropsJsonData();
    const data = await getHomeOptions();

    return {
      props: {        
        pageContext : {
          data : {            
            seo : page.extras.seo,            
            extras : {
              home : {...data},
              props: {...props}
            }
          }         
        }
      },
      revalidate: 10
    }

}

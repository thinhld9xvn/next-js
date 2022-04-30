import React, { useEffect, useState } from 'preact/compat'
import { getInitPropsJsonData } from '@js_dir/utils/data/getInitPropsJsonDataUtils';
import { getPageComponent } from '@js_dir/utils/data/getPageComponentUtils';
import { getPageExtrasData } from '@js_dir/utils/data/getPageExtrasDataUtils';
import { getPage } from '@lib/getPageApi';
import { getPagesList } from '@lib/getPagesListApi';
import Footer from '@components/footer/footer'
import SeoBasicHelmet from '@components/seo-basic-helmet';
import Header from '@components/header/header';

import { useRouter } from 'next/router';

export function PgPage({ pageContext }) {

  const router = useRouter();

  const {data} = pageContext;
  const {slug, seo, extras} = data;  
  const {options, data : pageData, props} = extras;
  const {header, ctinfo} = props;
  const {footerStyleId, enablePsScroll, defaultPage} = options;

  const {extras : pageExtras} = pageData;
  const {default_banner} = pageExtras;

  var pageOptions = {};

  if ( ! defaultPage ) { 

    pageOptions = {...options, default_banner };

  }

  else {

    pageOptions = {...pageData, default_banner};
    
  }

  const PageComponent = getPageComponent(slug);

  return (
    <>
      <div id="mainPsScrollBar" className="main-wrapper">

        <SeoBasicHelmet data = {seo} />

        <Header data = {header}/>

        <PageComponent data = {pageOptions} />

        <Footer data = {ctinfo} 
                style={`style-${footerStyleId}`} />

      </div>
    </>
  )
}

export async function getStaticProps({ params }) {

    const props = await getInitPropsJsonData();

    const page = await getPage(params.slug);
    const data = await getPageExtrasData(params.slug);
    
    const pageContext = {
      data : {
        id : page.id,
        title : page.text,
        url : page.url,
        slug : page.slug,        
        seo : page.extras.seo,        
        extras : {
          data : {...page},
          options : {...data},
          props : {...props}
        }        
      }
    };
  
    return {
      props: {
        pageContext: {...pageContext}
      },
      revalidate: 10
    }
  
  }

export async function getStaticPaths() {
    
    const pages = await getPagesList();

    return {
      paths: pages.map((page) => {
        return {
          params: {
            slug: page.slug,
          },
        }
      }),
      fallback: 'blocking',
    }

  }

export default PgPage;

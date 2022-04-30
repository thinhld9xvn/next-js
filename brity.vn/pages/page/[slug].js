import React, { useEffect } from 'preact/compat'
import Page from "@components/pages/page"
import PageContactUs from "@components/pages/page-contact-us"
import { getPage } from "@lib/getPageApi"
import { getSeoExtras } from "@js_dir/utils/getSeoExtrasUtils";
import { getInitPropsJsonData } from "@js_dir/utils/data/getInitPropsJsonDataUtils";
import { getPagesList } from "@lib/getPagesListApi";
import { getAllPages } from "@lib/getAllPagesApi";
import { PAGE_URLS } from "@constants/constants";
import { setNotiTimer } from '@js_dir/utils/notificationsUtils';

export default function PgPage(pageContext) {

  const {slug} = pageContext.data;

  useEffect(() => {

    const tmrNoti = setInterval(setNotiTimer, 5000);

    return () => {
        clearInterval(tmrNoti);
    }

  }, []);

  return (
    <>
      {
        PAGE_URLS.CONTACT === slug ? (
            <PageContactUs pageContext = {pageContext} /> 
          ) : (
            <Page pageContext = {pageContext} /> 
          )
      }
    </>
  )
}

export async function getStaticProps({ params }) {

  const props = await getInitPropsJsonData();  

  const result = await getAllPages();
  const page = await getPage(params.slug);
  const pageContext = {
    data : {
      id : page.id,
      title : page.text,
      url : page.url,
      slug : page.slug,
      extras : {...page},
      seo : getSeoExtras(result, {
                              id : page.id.substr(5),
                              url : page.old_url,
                              rewrite: page.url
                          }),
      ...props
    }
  };

  return {
    props: {
      ...pageContext
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
  
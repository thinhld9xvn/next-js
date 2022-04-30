import React, { useEffect, useState } from 'preact/compat'
import { getInitPropsJsonData } from '@js_dir/utils/data/getInitPropsJsonDataUtils';
import Footer from '@components/footer/footer'
import SeoBasicHelmet from '@components/seo-basic-helmet';
import Header from '@components/header/header';

import { useRouter } from 'next/router';

import { getArticlesList } from '@lib/getArticlesListApi';
import { getArticle } from '@lib/getArticleApi';
import SingleBlogTemplatePage from '@components/pages/single-blog-template-page';

export function ArticlePage({ pageContext }) {

  const router = useRouter();

  const footerStyleId = 3;

  const {data} = pageContext;
  const {seo, extras} = data;  
  const {data : postData, props} = extras;
  const {header, ctinfo} = props;

  return (
    <>
      <div id="mainPsScrollBar" className="main-wrapper">

        <SeoBasicHelmet data = {seo} />

        <Header data = {header}/>

        <SingleBlogTemplatePage data = {postData} />

        <Footer data = {ctinfo} 
                style={`style-${footerStyleId}`} />

      </div>
    </>
  )
}

export async function getStaticProps({ params }) {

    const props = await getInitPropsJsonData();

    const post = await getArticle(params.slug);
    
    const pageContext = {
      data : {
        id : post.id,
        title : post.text,
        url : post.url,
        slug : post.slug,        
        seo : post.extras.seo,
        extras : {
          data : {...post},
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
    
    const pages = await getArticlesList();

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

export default ArticlePage;

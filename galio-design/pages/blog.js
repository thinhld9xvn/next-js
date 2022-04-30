import React from 'preact/compat'
import BlogLayout from "@components/blog-layout"
import { getSiteOptions } from '@lib/getSiteOptionsApi';
import { getBlogPageData } from '@lib/getBlogPageDataApi';

export default function BlogPage({ pageContext }) { 

  return (
    <BlogLayout pageContext = {pageContext} />
  )
  
}

export async function getStaticProps(context) { 

  const {locale} = context;
  const options = await getSiteOptions(locale);
  const data = await getBlogPageData(locale);

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

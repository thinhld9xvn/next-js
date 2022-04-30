import React from 'preact/compat'
import BlogLayout from "@components/blog-layout"
import { getSiteOptions } from '@lib/getSiteOptionsApi';
import { getBlogsPageData } from '@lib/getBlogsPageDataApi';
export default function BlogPage({ pageContext }) { 
  return (
    <BlogLayout pageContext = {pageContext} />
  )
}
export async function getStaticProps(context) { 
  const {locale} = context; 
  const siteOptions = await getSiteOptions(locale);
  const {pageData, articlesList} = await getBlogsPageData(locale);  
  const blogsData = pageData.nodes[0];
  const {title} = blogsData;
  const breadcrumbs = {
    id : 'blogs',
    title, 
    base : 'page',
    data : []
  }
    return {
      props: {        
        pageContext : {
          siteOptions,
          blogsPageData : {
            blogsData,
            articlesList
          },
          breadcrumbs
        }
      },
      revalidate: 10
    }
}

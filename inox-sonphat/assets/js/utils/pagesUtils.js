import { BANNER_HEIGHT, BANNER_WIDTH } from "@constants/constants";
import { getDefaultPageData } from "@lib/getDefaultPageDataApi";
import { getSiteOptions } from "@lib/getSiteOptionsApi";
export async function getPageStaticProps(slug, locale) {
  try {
    const siteOptions = await getSiteOptions(locale);
    const defPageData = await getDefaultPageData(slug);
    const title = defPageData.pages.nodes[0].title;
    const breadcrumbs = {
      id : 'defaultpage',
      title : title,
      base : 'page',
      data : []
    }
    return {
      props: {        
        pageContext : {
          siteOptions,
          defPageData,
          breadcrumbs,
          type : 'page'
        }
      },
      revalidate: 10
    }
  } catch {
    return { notFound: true }; //
  }
} 
export function getBannerPage(featuredImage, siteOptions) {
  return featuredImage ? featuredImage.node.mediaItemUrl : siteOptions.ctInfoList.default_banner;
  //return featuredImage ? (featuredImage.node.mediaDetails.sizes.filter(e => parseInt(e.width) === BANNER_WIDTH && parseInt(e.height) === BANNER_HEIGHT)[0]).sourceUrl : siteOptions.ctInfoList.default_banner;
}
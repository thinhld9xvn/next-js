import { getSingleArticlePageData } from "@lib/getSingleArticlePageDataApi";
import { getSiteOptions } from "@lib/getSiteOptionsApi";
import { removeArticlePrefix } from "./urlUtils";
export async function getArticleStaticProps(slug, locale) {
  try {
    const siteOptions = await getSiteOptions(locale);
    const mySlugNotPrefix = removeArticlePrefix(slug);
      const {articleData, relatedLists, seo} = await getSingleArticlePageData(locale, mySlugNotPrefix); 
      const article  = articleData[0];
      const {id, title} = article;
      const breadcrumbs = {
        id : 'single_' + id,
        title, 
        base : 'page',
        data : []
      }
      return {
        props: {
          pageContext : {
            siteOptions,
            articleData : {...article},
            relatedLists,
            seo,
            breadcrumbs,
            type : 'article'
          }
        },
        revalidate: 10
      }
    } 
    catch {
      return { notFound: true };
    }
  }
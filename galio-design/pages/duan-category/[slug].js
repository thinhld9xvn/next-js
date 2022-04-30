import React from 'preact/compat'
import { getSiteOptions } from '@lib/getSiteOptionsApi';
import DuanLayout from '@components/duan-layout';
import { getProjectPageData } from '@lib/getProjectPageDataApi';
import { getProjectCategoriesPathsList } from '@lib/getProjectCategoriesPathsListApi';
import { LANGUAGES } from '@constants/constants';
import { getSlugByLocale } from '@js_dir/utils/urlUtils';
export default function DuAnPage({ pageContext }) { 
  return (
    <>    
      <DuanLayout pageContext = {pageContext} />
    </>
  )
}
export async function getStaticProps(context) { 
  const {locale, params} = context; 
  const options = await getSiteOptions(locale);
  const data = await getProjectPageData(locale, true);  
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
export async function getStaticPaths() {
  const {getTaxonomiesList : viPaths} = await getProjectCategoriesPathsList(LANGUAGES.vi);
  const {getTaxonomiesList : enPaths} = await getProjectCategoriesPathsList(LANGUAGES.en);
  const paths = viPaths.concat(enPaths);
  return {
    paths: paths.map((item, i) => {
      let {url} = item;             
      url = getSlugByLocale(url);  
      return {
        params: {
          slug: url
        }
      }
    }),
    fallback: 'blocking',
  }

}

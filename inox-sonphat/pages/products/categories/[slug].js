import React from 'preact/compat'
import CategoryProductsLayout from '@components/category-products-layout'
import { getTaxPathsList } from '@lib/getTaxPathsListApi';
import { LANGUAGES } from '@constants/constants';
import { getSiteOptions } from '@lib/getSiteOptionsApi';
import { getTermProductPageData } from '@lib/getTermProductPageDataApi';
export default function ProductsCategoryPage({ pageContext }) {
    return (
        <CategoryProductsLayout pageContext = {pageContext} />
    )
}
export async function getStaticProps(context) {
  const {locale, params} = context; 
  const {slug} = params;
  const options = await getSiteOptions(locale);
  const data = await getTermProductPageData(locale, slug);
  const {termsList} = data;
  const {id, title, url} = termsList[0];
  const breadcrumbs = {
    id : 'category_product',
    title : title,
    base : 'category',
    data : [
      {
        id : 'products_base',        
      },
      {
        id : 'category_' + id,
        name : title,
        url
      }
    ]
  };
  return {
    props: {        
      pageContext : {
        siteOptions : {...options},
        termProductPageData : {...data},
        breadcrumbs
      }
    },
    revalidate: 10
  }
} 
export async function getStaticPaths() {
  const travelsePaths = (data, locale) => {
    return data.map(e => {
      if ( e.childrens ) {
        return travelsePaths(e.childrens);
      }
      return {
        params: {
          slug: e.slug
        },
        locale
      }
    });
  }
  const {getTaxonomiesList : viPaths} = await getTaxPathsList(LANGUAGES.vi, 'product_cat');
  //const {getTaxonomiesList : enPaths} = await getTaxPathsList(LANGUAGES.en, 'product_cat');
  const paths = travelsePaths(viPaths, LANGUAGES.vi);
  return {
    paths,
    fallback: 'blocking',
  }
}

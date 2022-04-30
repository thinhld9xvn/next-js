import React from 'preact/compat'
import SingleProductLayout from '@components/single-product-layout';
import { getSiteOptions } from '@lib/getSiteOptionsApi';
import { getProductsPathsList } from '@lib/getProductsPathsListApi';
import { LANGUAGES } from '@constants/constants';
import { getSingleProductPageData } from '@lib/getSingleProductPageDataApi';
export default function SingleProductPage({ pageContext }) {
    return (
        <SingleProductLayout pageContext = {pageContext} />
    )
}
export async function getStaticProps(context) {
    const {locale, params} = context;
    const {slug} = params;
    const siteOptions = await getSiteOptions(locale);
    const productPageData = await getSingleProductPageData(locale, slug);
    const {productData} = productPageData;    
    const {id, title} = productData[0];
    const breadcrumbs = {
      id : 'single_product',
      base : 'category',
      data : [
        {
          id : 'products_base',        
        },
        {
          id : 'single_' + id,
          name : title
        }
      ]
    };
    return {
      props: {
        pageContext : {
          siteOptions,
          productPageData,
          breadcrumbs
        }
      },
      revalidate: 10
    }
}
export async function getStaticPaths({ locales }) {
  const travsel = (paths, locale) => {
    return paths.map(e => {
      return {
        params: {
          slug: e.slug
        },
        locale
      }
    })
  }
  const {productsPathList : viPaths} = await getProductsPathsList(LANGUAGES.vi);
  //const {productsPathList : enPaths} = await getProductsPathsList(LANGUAGES.en);
  const paths = travsel(viPaths, LANGUAGES.vi);
  return {
    paths,
    fallback: 'blocking',
  }
}
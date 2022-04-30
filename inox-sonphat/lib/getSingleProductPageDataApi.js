import { LANGUAGES } from '@constants/constants';
import {fetchAPI} from './api';
export async function getSingleProductPageData(lang = LANGUAGES.vi, slug) {
  const langCodeEnum = lang.toUpperCase();
    return await fetchAPI(
      `query singleProductPageData {
        productData: getProductsLists(lang: ${langCodeEnum}, slug: "${slug}") {
          id
          name    
          text
          title
          url
          status
          brands
          colors
          sizes
          places
          description
          short_description
          specifications
          locale
          thumbnails {
            url
          }
          galleries {
            data {
              url
            }
          }
          price {
            fixed
            format
          }
          old_price {
            fixed
            format
          }
          categories {
            id
            name
            text
            thumbnail
            title
            url
          }
          polylang_post {
            id
            name
            text
            title
            url
            price {
              fixed
              format
            }
            old_price {
              fixed
              format
            }
            thumbnails {
              url
            }
            status
            locale
            brands
            colors
            sizes
            places
          }
          banner_image
          seo {
            metaDesc
            metaKeywords
            opengraphDescription
            opengraphImage {
              mediaDetails {
                height
                width
              }
              mediaItemUrl
            }
            opengraphTitle
            opengraphType
            opengraphUrl
            title
            twitterDescription
            twitterTitle
          }
          
        }
        relatedProductsList: getProductsLists(lang: ${langCodeEnum}, slug: "${slug}", related: true) {
          id
          name    
          text
          title
          url
          status
          locale
          brands
          colors
          sizes
          places
          polylang_post {
            id
            name
            text
            title
            url
            price {
              fixed
              format
            }
            old_price {
              fixed
              format
            }
            thumbnails {
              url
            }
            status
            locale
          }
          thumbnails {
            url
          }
          price {
            fixed
            format
          }
          old_price {
            fixed
            format
          }          
        }
      }
      `
    );
  }
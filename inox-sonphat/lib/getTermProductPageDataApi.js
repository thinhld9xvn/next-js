import { LANGUAGES } from '@constants/constants';
import {fetchAPI} from './api';
export async function getTermProductPageData(lang = LANGUAGES.vi, term_slug) {
  const langCodeEnum = lang.toUpperCase();
    return await fetchAPI(
      `query termProductPageData {
        termsList: getTaxonomiesList(lang: ${langCodeEnum}, tax: "product_cat", term_slug: "${term_slug}") {          
          id
          name
          text
          url
          thumbnail
          title
          description
          polylang_term
          post_type
          seo {
            metaKeywords
            metaDesc
            opengraphTitle
            opengraphType
            opengraphUrl
            title
            twitterDescription
            twitterTitle
            opengraphDescription
            opengraphImage {
              mediaDetails {
                height
                width
              }
              mediaItemUrl
            }
          }
        }
        productsList: getProductsLists(lang: ${langCodeEnum}, term_slug: "${term_slug}") {
          id
          name    
          text
          title
          url
          status
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
          categories {
            id
            name
            text
            thumbnail
            title
            url
          }
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
        }
        
      }
      `
    );
  }
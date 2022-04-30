import {fetchAPI} from './api';
export async function getTaxPathsList(tax) {
    return await fetchAPI(
      `query getTaxPathsList {
        getTaxonomiesList(tax: "${tax}") {
          slug
        }
      }
      `
    );
  }
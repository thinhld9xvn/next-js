import {fetchAPI} from './api';
export async function getWooBacsPayment() {
    return await fetchAPI(
      `query getWooBacsPayment {
        getWooBacsPayment {
          bank_name
          account_number
          account_name
          bic
          iban
          sort_code
        }
      }
      `
    );
  }
import {fetchAPI} from './api';

export async function getLogoImage() {

    const data = await fetchAPI(
      `
      query LogoSite {
        getLogoSite {
          alt
          src
          url
        }
      }
      `
    );
  
    return data?.getLogoImageOption;
    
  }
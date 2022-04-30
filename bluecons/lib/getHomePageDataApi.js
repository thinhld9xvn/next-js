import {fetchAPI} from './api';
export async function getHomePageData() {
    return await fetchAPI(
      `query homePageData {
        SliderItemsList: getSliderItemsList {
          id
          title
          large_title
          small_title
          thumbnail
        }
        SVSectionInfo: getSVSectionInfo {
          heading
          heading_sm
          button_text
          button_url
          data {
            id
            title
            thumbnail
            url
          }
        }
        GTSectionInfo: getGTSectionInfo {
          heading
          button_text
          button_url
          contents
          background
        }
        ProductSectionInfo: getPdSectionInfo {
          heading
          button_text
          button_url
          data {
            id
            title
            url
            thumbnail
          }
        }
        KTSectionInfo: getKTSectionInfo {
          heading
          button_text
          button_url
          data {
            id
            title
            url
            thumbnail
            date_created {
              day
              month
              year
            }
            categories {
              id
              name
              text
              url
            }
          }
        }
        ClientsSectionInfo: getClientsSectionInfo {
          heading
          data {
            id
            title
            thumbnail
          }
        }
      }`
    );
  }
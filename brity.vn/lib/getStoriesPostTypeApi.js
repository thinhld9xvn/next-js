import {fetchAPI} from './api';
import {getObjectArrayData} from '@js_utils/arrayUtils';

export async function getStoriesPostType() {

    const data = await fetchAPI(
      `
      query StoriesPostType {
        getStoriesPostTypeOption
      }
      `
    );
  
    return getObjectArrayData(data?.getStoriesPostTypeOption);

  }
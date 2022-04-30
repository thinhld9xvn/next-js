import {fetchAPI} from './api';
import {filterObjectArrayData, getObjectArrayData} from '@js_utils/arrayUtils';

export async function getRecruitPageOption() {

    const data = await fetchAPI(
      `
      query RecruitPageOption {
        getRecruitPageOption
      }
      `
    );

    const results = getObjectArrayData(data?.getRecruitPageOption);
  
    results['options'] = filterObjectArrayData(results['options'], 'post');

    return results;
    
  }
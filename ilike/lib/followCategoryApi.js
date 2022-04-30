import { API_NO_PARAMS } from '@constants/constants';
import { getUserLoginToken } from '@js_dir/utils/membership';
import {fetchAPI} from './api';
export async function followCategory(id) {
    const token = getUserLoginToken();
    return await fetchAPI(`category/favorite?category_id=${id}`, 'POST', API_NO_PARAMS, token, true, 1, false);
  }
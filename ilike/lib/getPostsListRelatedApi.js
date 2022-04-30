import { API_NO_PARAMS } from '@constants/constants';
import {fetchAPI} from './api';
export async function getPostsListRelated(code) {
    return await fetchAPI(`post/${code}/relations`, 'GET', API_NO_PARAMS, null, false);
  }
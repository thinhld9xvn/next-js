import {fetchAPI} from './api';
import {convertObjectToArray} from '@js_utils/arrayUtils';
import { API_NO_PARAMS } from '@constants/constants';
export async function getSitemapTagsList(fetchAll = false) {
    const data = await fetchAPI('sitemap/tag', 'GET', API_NO_PARAMS, null, fetchAll);
    return convertObjectToArray(data);
  }
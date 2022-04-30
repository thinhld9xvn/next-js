import {fetchAPI} from './api';
import {convertObjectToArray} from '@js_utils/arrayUtils';
import { API_NO_PARAMS } from '@constants/constants';

export async function getCategoriesApi() {

    const data = await fetchAPI('categories', 'GET', API_NO_PARAMS);

    return convertObjectToArray(data);

  }
import {fetchAPI} from './api';
import {convertObjectToArray} from '@js_utils/arrayUtils';
import { API_NO_PARAMS } from '@constants/constants';

export async function getSiteOption() {

    const data = await fetchAPI('option', 'GET', API_NO_PARAMS);

    return convertObjectToArray(data);

  }
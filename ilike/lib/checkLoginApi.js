import { API_NO_PARAMS } from '@constants/constants';
import {fetchAPI} from './api';
export async function checkLogin(token = null) {
    return await fetchAPI('user-profile', 'GET', API_NO_PARAMS, token, true, false);
}
import { API_NO_PARAMS } from '@constants/constants';
import {fetchAPI} from './api';

export async function logout(token = null) {

    const data = await fetchAPI('login', 'POST', API_NO_PARAMS, token);
    return data ? true : false;

  }
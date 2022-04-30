import { saveUserLoginInfo } from '@js_dir/utils/membership';
import {fetchAPI} from './api';

export async function login(email = '', password = '') {

    const params = {
        variables : {
            email,
            password
        }
    }

    const data = await fetchAPI('login', 'POST', params);
    if ( !data ) {
        return false;
    }

    saveUserLoginInfo(data);

    return true;

  }
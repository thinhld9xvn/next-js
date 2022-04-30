import { saveUserLoginInfo } from '@js_dir/utils/membership';
import {fetchAPI} from './api';

export async function register(name = '', email = '', password = '', password_confirmation = '') {

    const params = {
        variables : {
            name,
            email,
            password,
            password_confirmation
        }
    }

    const data = await fetchAPI('register', 'POST', params);

    if ( data.user ) {

        return true;

    }

    return false;

  }
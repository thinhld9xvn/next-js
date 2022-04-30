import { PAGES } from "@constants/constants";
import { checkLogin } from "@lib/checkLoginApi";
import { logout as logoutApi } from "@lib/logoutApi";
import { is_accountpage } from "@js_utils/urlUtils"
import { signOut } from "next-auth/react"
export function saveUserLoginInfo(data) {
    localStorage.setItem('user', JSON.stringify(data));
    localStorage.setItem('userTimeSavedSession', (new Date()).getTime());
    localStorage.setItem('userTimeExpiredSession', data.expires_in * 60 * 1000);
}
export function getUserLoginInfo() { 
    const user = localStorage.getItem('user');   
    return user ? JSON.parse(user) : null;
}
export function getUserLoginToken() {
    const user = getUserLoginInfo();
    return user ? user.access_token : null;
}
export async function isUserLogin() {
    const token = getUserLoginToken();
    if (!token) return false;
    const user = await checkLogin(token);
    return user ? true : false;
}
export function logout(session, login_redirect = false) {
    if ( session ) {
        signOut({ callbackUrl: '/' });
        return;
    }
    const token = getUserLoginToken();
    if ( !token ) return false;
    const results = logoutApi(token);
    if ( results ) {
        localStorage.removeItem('user');
        if ( !login_redirect ) {
            if ( !is_accountpage() ) {
                window.location.reload();
            }
            else {
                window.location.href = '/';
            }
        }
        else {
            window.location.href = PAGES.LOGIN.path;        
        }
    }
}

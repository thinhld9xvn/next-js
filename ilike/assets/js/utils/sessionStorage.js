import { SESSION_CACHED_TIMEOUT } from "@constants/constants";
function getKeyTimeout(key) {
    return key + '__timeout';
}
export function setItemCached(key, value) {
    try {
        localStorage.setItem(key, value);
        localStorage.setItem(getKeyTimeout(key), (new Date()).getTime());
    } catch(e) {
        localStorage.clear();
        localStorage.setItem(key, value);
        localStorage.setItem(getKeyTimeout(key), (new Date()).getTime());
    } 
}
export function getItemCached(key) {
    const k = getKeyTimeout(key);    
    const sessionSavedTickValue = localStorage.getItem(k);
    if ( sessionSavedTickValue ) {
        const ticked = (new Date()).getTime() - (+sessionSavedTickValue);
        if ( ticked < SESSION_CACHED_TIMEOUT ) {
            return localStorage.getItem(key);
        }
        else {
            localStorage.removeItem(k);
            localStorage.removeItem(key);
        }
    }
    return null;
}
const { HOME_PAGE_URL, LANGUAGES, PAGES } = require("@constants/constants");
function is_homepage() {
    return typeof(window) !== 'undefined' ? window.location.pathname === '/' || 
                                            window.location.pathname === `/${LANGUAGES.vi}` || 
                                            window.location.pathname === `/${LANGUAGES.en}` : true; 
}
function is_searchpage() {
    return typeof(window) !== 'undefined' ? window.location.pathname.startsWith('/s') : true; 
}
function getParamFromURL(param_name) {
    if ( typeof(window) !== 'undefined' ) {
        const url = new URL(window.location.href);
        const value = url.searchParams.get(param_name);
        if ( value ) {
            return '/' === value.substr(value.length - 1) ? value.substr(0, value.length - 1) : 
                                                            value;
        }
    }
    return '';
}    
function filterURL(url) {
    return decodeURIComponent(url).replace(/[`~!@#$%^&*()|+\=?;:'"″,.<>\{\}\[\]]/ig, '');
}
function filterSeoUrlExtras(seo, url, rewrite) {
    let str = JSON.stringify(seo);
    str = str.replace(new RegExp(url, 'ig'), rewrite);
    return JSON.parse(str);
}
function addPathToUrl(url, piece) {
    if ( !piece ) return url;
    if ( piece.concat('/') === url.substr(1, piece.length).concat('/') ) return url;
    return `/${piece}` + url;
}
function getSlugByLocale(url) {    
    return url.split('/').pop();
}
function getSearchUrlByLocale(locale) {
    const slug = PAGES.SEARCH[locale.toUpperCase()].name;
    return `/${locale}/${slug}`;
}
function getProjectsUrlByLocale(locale) {
    const slug = PAGES.PROJECTS[locale.toUpperCase()].name;
    return `/${locale}/${slug}`;
}
function getContactUrlByLocale(locale) {
    const slug = PAGES.CONTACT[locale.toUpperCase()].name;
    return `/${locale}/${slug}`;
}
module.exports.is_homepage = is_homepage;
module.exports.is_searchpage = is_searchpage;
module.exports.getParamFromURL = getParamFromURL;
module.exports.filterURL = filterURL;
module.exports.filterSeoUrlExtras = filterSeoUrlExtras;
module.exports.addPathToUrl = addPathToUrl;
module.exports.getSlugByLocale = getSlugByLocale;
module.exports.getSearchUrlByLocale = getSearchUrlByLocale;
module.exports.getProjectsUrlByLocale = getProjectsUrlByLocale;
module.exports.getContactUrlByLocale = getContactUrlByLocale;

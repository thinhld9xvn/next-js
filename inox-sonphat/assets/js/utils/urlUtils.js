const { HOME_PAGE_URL, LANGUAGES, PAGES } = require("@constants/constants");
function is_homepage() {
    return typeof(window) !== 'undefined' ? window.location.pathname === '/' : true; 
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
function getSlug(slug) {
    if ( slug === HOME_PAGE_URL ) return slug;
    return slug.replace(/\//ig, '');
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
function getSlugPageByLocale(url) {
    const pos = url.indexOf('?s=');
    if ( pos !== -1 ) {
        url = url.substr(0, pos);
    }
    if ( url.startsWith('/' + LANGUAGES.vi) || 
        url.startsWith('/' + LANGUAGES.en) ) {
        return url.substr(4);
    }
    return url.substr(1);
}
function getClassesWrapper() {
    if ( is_homepage() ) {
        return 'index';
    } 
    return 'page';
}
function getPageUrlByLocale(name = 'home', lang = LANGUAGES.vi) {
    return `/${lang}/${PAGES[name.toUpperCase()][lang.toUpperCase()].name}`;
}
function getOptLang(lang = LANGUAGES.vi) {
    return lang === LANGUAGES.vi ? LANGUAGES.en : LANGUAGES.vi;
}
function isArticleUrl(url, prefix = '.html') {
    if (!url) return false;
    return url.indexOf(prefix) !== -1;
}
function removeArticlePrefix(url, prefix = '.html') {
    if (!url) return null;
    if (url.indexOf(prefix) === -1) return url;
    return url.substr(0, url.length - prefix.length);
}
module.exports.is_homepage = is_homepage;
module.exports.is_searchpage = is_searchpage;
module.exports.getParamFromURL = getParamFromURL;
module.exports.filterURL = filterURL;
module.exports.filterSeoUrlExtras = filterSeoUrlExtras;
module.exports.getSlug = getSlug;
module.exports.addPathToUrl = addPathToUrl;
module.exports.getSlugByLocale = getSlugByLocale;
module.exports.getClassesWrapper = getClassesWrapper;
module.exports.getPageUrlByLocale = getPageUrlByLocale;
module.exports.getOptLang = getOptLang;
module.exports.getSlugPageByLocale = getSlugPageByLocale;
module.exports.removeArticlePrefix = removeArticlePrefix;
module.exports.isArticleUrl = isArticleUrl;
const { HOME_PAGE_URL } = require("@constants/constants");

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

module.exports.is_homepage = is_homepage;
module.exports.is_searchpage = is_searchpage;
module.exports.getParamFromURL = getParamFromURL;
module.exports.filterURL = filterURL;
module.exports.filterSeoUrlExtras = filterSeoUrlExtras;
module.exports.getSlug = getSlug;
module.exports.addPathToUrl = addPathToUrl;


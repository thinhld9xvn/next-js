function is_homepage() {
    return typeof(window) !== 'undefined' ? window.location.pathname === '/' : true; 
}
function is_searchpage() {
    return typeof(window) !== 'undefined' ? window.location.pathname.startsWith('/s') : true; 
}
function is_catpage() {
    return typeof(window) !== 'undefined' ? /(.*-nt.*|e-magazine.html)/g.test(window.location.pathname) : true; 
}
function is_postpage() {
    return typeof(window) !== 'undefined' ? /(.*-t.*)/g.test(window.location.pathname) : true; 
}
function is_accountpage() {
    return typeof(window) !== 'undefined' ? /\/account/g.test(window.location.pathname) : true; 
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
    if ( slug === '/' ) return slug;
    return slug.replace(/\//ig, '');
}
function filterSeoUrlExtras(seo, url, rewrite) {
    let str = JSON.stringify(seo);
    str = str.replace(new RegExp(url, 'ig'), rewrite);
    return JSON.parse(str);
}
function removePrefixUrl(url) {
    return url.substr(0, url.length - 5);
}
function getSlugObjFromUrl(url) {
    const slug = removePrefixUrl(url);
    const pieces = slug.split('-');
    pieces.pop();
    return pieces.join('-');
}
function getCodeObjFromUrl(url) {
    const slug = removePrefixUrl(url);
    const pieces = slug.split('-');
    return pieces.pop();
}
function addPathToUrl(url, piece, removePrefix = false) {
    if ( !piece ) return url;
    if ( url.substr(0, 1) !== '/' ) url = '/' + url;
    if ( piece.concat('/') === url.substr(1, piece.length).concat('/') ) return url;
    if ( removePrefix ) {
        const myPieces = url.split('.');
        if ( myPieces.length > 1 ) {
            myPieces.pop();
            return `/${piece}` + myPieces.join('.');
        }
    }
    return `/${piece}` + url;
}
module.exports.is_homepage = is_homepage;
module.exports.is_searchpage = is_searchpage;
module.exports.is_accountpage = is_accountpage;
module.exports.getParamFromURL = getParamFromURL;
module.exports.filterURL = filterURL;
module.exports.filterSeoUrlExtras = filterSeoUrlExtras;
module.exports.getSlug = getSlug;
module.exports.addPathToUrl = addPathToUrl;
module.exports.removePrefixUrl = removePrefixUrl;
module.exports.is_catpage = is_catpage;
module.exports.is_postpage = is_postpage;
module.exports.getSlugObjFromUrl = getSlugObjFromUrl;
module.exports.getCodeObjFromUrl = getCodeObjFromUrl;
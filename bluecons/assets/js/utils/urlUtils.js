export function getFullPageLink(slug) {
    if ( !slug ) return '';
    if ( slug.substr(0, 1) === '/' ) {
        return process.env.WP_SITE_DOMAIN + slug;
    }

    return process.env.WP_SITE_DOMAIN + '/' + slug;
}
export function concat(s1, s2) {
    const x1 = s1.substr(s1.length - 1);
    const x2 = s2.substr(0, 1);
    if ( x1 === '/' && 
            x2 === '/' ) {
        return s1 + s2.substr(1);
    }
    if ( x1 === '/' ||
            x2 === '/' ) {
        return s1 + s2;
    }
    return s1 + '/' + s2;
}
export function getTagSlug(tag) {
    return tag.slug + '-' + tag.code;
}

export function getTagLink(tag) {
    const baseUrl = {
        development: process.env.SITE_LOCALHOST_URL,
        production: process.env.SITE_BASE_URL,
      }[process.env.NODE_ENV];
    
    const slug = '/' + getTagSlug(tag) + '.html';

    return (typeof(window) !== 'undefined' ? window.location.origin : baseUrl) + slug;
}
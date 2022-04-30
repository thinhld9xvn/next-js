export function getLogoSrc(data) {
    const {src} = data;
    let logo_primary_url = '', 
        logo_white_url = '';
    try {
        logo_primary_url = src[0].url;
        logo_white_url = src[1].url;
    } catch {
        logo_primary_url = DEFAULT_LOGO_PRIMARY;
        logo_primary_url = DEFAULT_LOGO_WHITE;
    }
    return {
        white : logo_white_url,
        primary : logo_primary_url
    }
}
export function isMobile() {
    return window.innerWidth < 768;
}
export function showBodyScroll() {
    document.querySelector('html').style.overflow = '';
}
export function hideBodyScroll() {
    document.querySelector('html').style.overflow = 'hidden';
}
export function toggleBodyScroll() {
    const v = document.querySelector('html').style.overflow.toLowerCase().trim();
    if ( v === 'hidden' ) {
        showBodyScroll();
    }
    else {
        hideBodyScroll();
    }
}
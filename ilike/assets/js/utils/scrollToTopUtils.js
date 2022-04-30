export function scrollToTopStickySection() {
    try {
        const elem = document.querySelector('.page-category-sticky');
        if ( elem ) {
            const offsetTop = elem.getClientRects()[0].top + window.scrollY;
            window.scroll(0, offsetTop);
        }                    
    } catch {
    }

}
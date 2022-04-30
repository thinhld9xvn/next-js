export function onClick_scrollToTop(e) {

    e.preventDefault();

    if ( typeof(window) !== 'undefined' ) {

        window.scroll(0, 0);

    }

}
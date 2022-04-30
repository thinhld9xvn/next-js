import {DEFAULT_THUMBNAIL} from '@constants/constants'
function loadImage(e) {
    const target = e.target;
    if ( target.classList.contains('loading-img') ) {
        target.classList.remove('loading-img');
    }
}
function loadImageErr(e) {
    const target = e.target;
    target.src = DEFAULT_THUMBNAIL;
    if ( target.classList.contains('loading-img') ) {
        target.classList.remove('loading-img');
    }
}
export function setupLazyLoading() {
    if (typeof(document) !== 'undefined') {
        var lazyImages = [].slice.call(document.querySelectorAll("img[data-src]"));
        if ("IntersectionObserver" in window) {
            let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        let lazyImage = entry.target;
                        if ( lazyImage.dataset.src ) {
                            lazyImage.addEventListener('load', loadImage);
                            lazyImage.addEventListener('error', loadImageErr);
                            lazyImage.src = lazyImage.dataset.src;
                            lazyImage.removeAttribute('data-src');
                        }
                        lazyImageObserver.unobserve(lazyImage);
                    }
                });
            });
            lazyImages.forEach(function(lazyImage) {
                lazyImageObserver.observe(lazyImage);
            });
        } else {
            // Possibly fall back to event handlers here
        }
    }
}
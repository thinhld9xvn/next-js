export function setupLazyLoading() {

    if (typeof(document) !== 'undefined') {

        var imgDefer = document.querySelectorAll('img[data-src]'),
            bgDefer = document.querySelectorAll('*[data-bg]');

        if ( imgDefer.length ) {

            for (let i = 0; i < imgDefer.length; i++) {
                if (imgDefer[i].getAttribute('data-src')) {
                    imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
                    imgDefer[i].removeAttribute('data-src');
                }
            }
           

        }

        if ( bgDefer.length ) {

            for (let i = 0; i < bgDefer.length; i++) {
                if (bgDefer[i].getAttribute('data-bg')) {
                    bgDefer[i].style.backgroundImage = `url("${bgDefer[i].getAttribute('data-bg')}")`;
                    bgDefer[i].removeAttribute('data-bg');
                }
            }   

        }

    }

}
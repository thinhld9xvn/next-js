export function init() {

    try {
        const scrollLines = document.querySelectorAll('*[data-animated-one]');

        document.addEventListener('scroll', function() {
            scrollLines.forEach(function(elem, i){
                const scrollTopOffset = window.scrollY,
                    windowHeightOffset = window.innerHeight,
                    elemClientRects = elem.getClientRects()[0],
                    elemTopOffset = elemClientRects.top,
                    elemHeightOffset = elem.clientHeight;

                if (scrollTopOffset + windowHeightOffset > elemTopOffset && 
                        scrollTopOffset - elemTopOffset < elemHeightOffset) {

                    if (!elem.classList.contains('scroll_animated')) {
                        elem.classList.add('scroll_animated');
                    }
                }

            });

        });

    } catch(error) {}

}
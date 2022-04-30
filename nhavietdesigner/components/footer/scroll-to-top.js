import React, {useEffect} from 'preact/compat'

import { onClick_scrollToTop } from '@js_dir/utils/scrollToTopUtils'

export default function ScrollToTop() {

    useEffect(() => {

        if ( typeof(document) !== 'undefined' ) {

            const button = document.getElementById('scrollToTop');

            document.addEventListener('scroll', function(e) {

                if ( window.scrollY > 0 ) {
                    
                    if ( ! button.classList.contains('show') ) {
                        button.classList.add('show');
                    }

                }

                else {

                    if ( button.classList.contains('show') ) {

                        button.classList.remove('show');

                    }

                }

            });

        }

    }, [])

    return (
        <a id="scrollToTop" 
            href="#"
            onClick={onClick_scrollToTop}></a>
    )
}


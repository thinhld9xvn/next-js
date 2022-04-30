import React, {useEffect, useState} from 'preact/compat'

import styles from '@css_dir/scrollToTop.module.css'

export default function ScrollToTop() {

    const [show, setShow] = useState(false);

    useEffect(() => {

        document.addEventListener('scroll', function(e) {

            if ( window.scrollY > 0 ) {                
                setShow(true);
            }

            else { 
                setShow(false);
            }

        });

        document.getElementById('scrollToTop')
                .addEventListener('click', function(e) {

            e.preventDefault();

            window.scrollTo(0, 0);

        });

    }, []);

    return (
        <a id="scrollToTop" 
           className={`${styles.scrollToTop} `.concat(show ? styles.scrollToTop__show : '')}
            href="#"></a>
    )
}


import React, {useEffect, useState} from 'preact/compat'
export default function ScrollToTop() {
    const [show, setShow] = useState(false);
    const onClick_scrollToTop = function(e) {
        e.preventDefault();
        window.scrollTo(0, 0);
    }
    const onScrollShowScrollTopButton = function(e) {
        if ( window.scrollY > 0 ) {
            setShow(true);
        }
        else {
            setShow(false);
        }
    }
    useEffect(() => {
        document.addEventListener('scroll', onScrollShowScrollTopButton);
        return () => {
            document.removeEventListener('scroll', onScrollShowScrollTopButton);
        }
    }, []);
    return (
        <i className={"fa fa-angle-double-up to-top ".concat(show ? 'show' : '')}
            onClick={onClick_scrollToTop}></i>
    )
}

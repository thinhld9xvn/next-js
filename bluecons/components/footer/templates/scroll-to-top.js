import React from 'preact/compat'

export default function ScrollToTop() {
    const handleScrollToTop = (e) => {
        e.preventDefault();
        window.scroll(0, 0);
    }
  return (
    <a id="scrollToTop" 
        href="#"
        onClick={handleScrollToTop}>
        <i className="fa fa-arrow-up"></i>
    </a>
  )
}

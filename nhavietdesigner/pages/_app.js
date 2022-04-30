import React from 'preact/compat'
import { wrapper } from "@redux/store"
import NProgress from 'nprogress'
import Router from 'next/router'

import 'public/static/fonts/themify-icons/themify-icons.css';
import 'public/static/fonts/transfonter/stylesheet.css';
import 'public/static/fonts/font-awesome/css/font-awesome.min.css';

import '@plugins_dir/animate/animate.min.css';
import '@css_dir/bootstrap.min.css';
import '@css_dir/style.css';
import '@css_dir/media.css';
import 'mmenu-js/dist/mmenu.css'

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import 'nprogress/nprogress.css'; //styles of nprogress

Router.events.on('routeChangeStart', (url) => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  
  return (
    <>
        <Component {...pageProps} />
    </>
  );
  
}

export default wrapper.withRedux(MyApp)

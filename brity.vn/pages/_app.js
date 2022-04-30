import React from 'preact/compat'
import Head from 'next/head'
import { wrapper } from "@redux/store"
import NProgress from 'nprogress'
import Router from 'next/router'
import dynamic from 'next/dynamic'

import '@icon_fonts/fontawesome-5.12.0/css/all.min.css'
import '@css_dir/vzo7avg.css'
import '@css_dir/style.css'

import 'nprogress/nprogress.css'; //styles of nprogress

const Loading = dynamic(() => import('@components/layout/loading'))
const PageOverlay = dynamic(() => import('@components/layout/page-overlay'))

Router.events.on('routeChangeStart', (url) => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  
  return (
    <>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />       
          <link rel="manifest" href="/manifest.json" />
          <link
            href="/icons/icon-16x16.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="/icons/icon-32x32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link rel="apple-touch-icon" href="/apple-icon.png"></link>
          <meta name="theme-color" content="#000" />
          
          <script async type="text/javascript" src="https://www.googletagmanager.com/gtag/js?id=G-53Y3WYEEGS" />
          <script type="text/javascript" dangerouslySetInnerHTML={{
              __html : `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
              
                  gtag('config', 'G-53Y3WYEEGS');
              `
          }} />
        </Head>
        <Loading />  
        <PageOverlay />
        <Component {...pageProps} />
    </>
  );
  
}

export default wrapper.withRedux(MyApp)

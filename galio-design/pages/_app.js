import React, {useEffect} from 'preact/compat'
import { wrapper } from "@redux/store"
import NProgress from 'nprogress'
import Router, {useRouter} from 'next/router'
import { IntlProvider } from 'react-intl';
import Preload from '@templates/preload';
import Header from '@header/header';
import Footer from '@footer/footer';

import '@css_dir/tool.css';
import '@css_dir/custom.css';
import '@css_dir/main.css';
import '@css_dir/pages/index.css';
import '@css_dir/pages/page__introduce.css';
import '@css_dir/pages/page__project.css';
import '@css_dir/pages/detai__project.css';
import '@css_dir/pages/page__media.css';
import '@css_dir/pages/page__blog.css';
import '@css_dir/pages/page__contact.css';
import '@css_dir/pages/page__video.css';
import '@css_dir/pages/page__recruit.css';
import '@css_dir/animate.css';
import 'nprogress/nprogress.css'; //styles of nprogress

Router.events.on('routeChangeStart', (url) => {
  NProgress.start();
})
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const languages = {
  vi: require('../locales/vi.json'),
  en: require('../locales/en.json')
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { locale, defaultLocale } = router;
  const messages = languages[locale];
  useEffect(() => {
    const disableMouseContextMenu = (e) => {
      e.preventDefault()
    }
    const tmr = setInterval(() => {
      const images = document.getElementsByTagName('img');
      for (let i = 0; i < images.length; i++) {
        const disabled = images[i].dataset.disableMouseContextMenu;
        if ( typeof(disabled) === 'undefined' || 
              (typeof(disabled) !== 'undefined' && !disabled ) ) {
          images[i].addEventListener('contextmenu', disableMouseContextMenu);
          images[i].dataset.disableMouseContextMenu = true;
        }
      }
    }, 500);
    return () => {
    }
  }, []);
  return (
    <>
      <IntlProvider messages={messages} 
                    locale={locale} 
                    defaultLocale={defaultLocale}>
          <div className="wrapper">
            <Preload />
            <Header />
            <Component {...pageProps} />            
          </div>
          <Footer />
      </IntlProvider>
    </>
  );
  
}

export default wrapper.withRedux(MyApp)

import React, {useEffect, useState} from 'preact/compat'
import { wrapper } from "@redux/store"
import NProgress from 'nprogress'
import Router, {useRouter} from 'next/router'
import { IntlProvider } from 'react-intl';
import Header from '@header/header';
import '@css_dir/bootstrap.min.css';
import '@css_dir/font-awesome.min.css';
import '@css_dir/animate.css';
import 'mmenu-js/dist/mmenu.css'
import '@css_dir/style.css';
import 'nprogress/nprogress.css'; //styles of nprogress
import 'toastr/build/toastr.min.css';
import { getClassesWrapper } from '@js_dir/utils/urlUtils';
import Footer from '@footer/footer';
import { connect } from 'react-redux';
import { getCartsFromStorage } from '@js_dir/utils/shoppingCartsUtils';
Router.events.on('routeChangeStart', (url) => {
  NProgress.start();
})
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
const languages = {
  vi: require('../locales/vi.json'),
  en: require('../locales/en.json')
};
function MyApp({ Component, pageProps, updateActiveLang, UpdateCartsList, updateActivePolylang }) {
  const router = useRouter();
  const [classes, setClasses] = useState('');
  const { locale, defaultLocale } = router;
  const messages = languages[locale];
  useEffect(() => {
    const myClasses = getClassesWrapper();
    if (myClasses !== classes ) {
      setClasses(myClasses);
    }
  });
  useEffect(() => {
    updateActiveLang(locale);
    UpdateCartsList([...getCartsFromStorage()]);
  }, [,router.locale,router.query.slug]);
  return (
    <>
      <IntlProvider messages={messages} 
                    locale={locale} 
                    defaultLocale={defaultLocale}>
          <div className={`wrapper ${classes}`}>
            <Header />
            <Component {...pageProps} />            
            <Footer />
          </div>
      </IntlProvider>
    </>
  );
}
function mapStateToProps(state) {   
  return { 
    cartsList: state.globalReducer.cartsList
  }
}
function mapDispatchToProps(dispatch) {
  return {
      updateActiveLang : async (v) => await dispatch({
          type : "UPDATE_ACTIVE_LANGUAGE",           
          payload : v
      }),
      updateActivePolylang : async (v) => await dispatch({
        type : "UPDATE_ACTIVE_POLYLANG_URL",           
        payload : v
    }),
      UpdateCartsList : async (v) => await dispatch({
        type : "UPDATE_CARTS_LIST",
        payload : v
    })
  }
}  
export default (wrapper.withRedux(connect(mapStateToProps, mapDispatchToProps)(MyApp)));

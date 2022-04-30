import React, {useEffect, useState} from 'preact/compat'
import { wrapper } from "@redux/store"
import NProgress from 'nprogress'
import Router, { useRouter } from 'next/router';
import Header from '@components/header/header';
import Footer from '@components/footer/footer';
import '@css_dir/fonts.css';
import '@css_dir/tool.css';
import '@css_dir/main.css';
import '@css_dir/style-mobile.css';
import '@homepage/styles/index.css';
import '@categorypage/styles/page__category.css';
import '@categorypage/styles/cmOldPost.css';
import '@categorypage/styles/page__imagazine.css';
import '@categorypage/styles/page__football.css';
import '@categorypage/styles/page__film.css';
import '@categorypage/styles/page__beautify.css';
import '@postpage/styles/cmComment.css';
import '@postpage/styles/detail__post.css';
import 'nprogress/nprogress.css'; //styles of nprogress
import 'toastr/build/toastr.min.css';
import { getUserLoginToken, isUserLogin, logout } from '@js_dir/utils/membership';
import { PAGES, SESSION_EXPIRES_WARNING } from '@constants/constants';
import LoginModal from '@templates/login-modal';
import { SessionProvider, getProviders } from "next-auth/react"
import HeaderAccountMobile from '@components/templates/mobile/header/header-account-mobile';
import RegisterModal from '@components/templates/register-modal';
import TimeAgo from 'javascript-time-ago'
import vi from 'javascript-time-ago/locale/vi'
import { isMobile } from '@js_dir/utils/deviceUtils';
TimeAgo.addDefaultLocale(vi);
Router.events.on('routeChangeStart', (url) => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
function MyApp({ Component, providers, pageProps }) {  
  const router = useRouter();
  const [isAuthPage, setAuthPage] = useState(true);
  const [isAccountPage, setAccountPage] = useState(false);
  const authSession = typeof(session) === 'undefined' ? undefined : session;
  const myPageProps = {providers, session : authSession, ...pageProps};  
  useEffect(async () => {
    const t = setInterval(async function() {
      const isLoggedIn = await isUserLogin();
      if ( !isLoggedIn ) { // chưa login => trình duyệt đang lưu token cũ => logout
        const activeToken = getUserLoginToken();
        if ( activeToken) {
          clearInterval(t);
          alert(SESSION_EXPIRES_WARNING);
          logout();
        }
      }
    }, 60 * 1000);
  }, []);
  useEffect(() => {
    const pathname = window.location.pathname,
          isAuthRoute = pathname.indexOf(PAGES.LOGIN.path) === 0 || 
                          pathname.indexOf(PAGES.REGISTER.path) === 0;
    setAuthPage(isAuthRoute);
    setAccountPage(pathname.indexOf(PAGES.ACCOUNT.path) === 0);    
  });
  useEffect(() => {
    setTimeout(() => {      
      try {
        if ( isMobile() ) {
          document.querySelector('.snap-navigation-box .form-main').scroll(0, 0);
        }      
        window.scroll(0, 0);
      } catch {}
    }, 200);
  }, [,router.query.slug]);
  return (
    <>
      <SessionProvider session={authSession}>
        {!isAuthPage && !isAccountPage ? (
          <Header />
        ) : null}
        {isAccountPage ? (
          <HeaderAccountMobile />
        ) : null}
        <Component {...myPageProps} />
        {!isAuthPage && !isAccountPage ? (
          <Footer />
        ) : null}
        <LoginModal providers = {providers} />
        <RegisterModal providers = {providers} />
      </SessionProvider>
    </>
  );
}
MyApp.getInitialProps = async (ctx) => {
  const providers = await getProviders();
  return { providers }
}
export default wrapper.withRedux(MyApp)

import React from 'preact/compat'
import { wrapper } from "@redux/store"
import NProgress from 'nprogress'
import Router, {useRouter} from 'next/router'
import '@css_dir/bootstrap.min.css'
import '@css_dir/fontawesome.css'
import '@css_dir/fonts.css'
import '@css_dir/reset.css'
import '@css_dir/style.css'
import 'nprogress/nprogress.css'; //styles of nprogress
import 'toastr/build/toastr.min.css';
import { connect } from 'react-redux';
import Header from '@components/header/header'
import Footer from '@components/footer/footer'
Router.events.on('routeChangeStart', (url) => {
  NProgress.start();
})
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <div className="wrapper">
        <Header />
        <Component {...pageProps} />    
        <Footer />
      </div>
    </>
  );
}
function mapStateToProps(state) {   
  return { 
  }
}
function mapDispatchToProps(dispatch) {
  return {
  }
}  
export default (wrapper.withRedux(connect(mapStateToProps, mapDispatchToProps)(MyApp)));

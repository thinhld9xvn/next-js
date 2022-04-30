import React, {useState, useEffect, useRef} from 'preact/compat'
import Head from 'next/head'
import PrimaryMenu from './menu/primary-menu';
import Banner from './banner/banner';
import Logo from './logo/logo';
import Search from './search/search';
import Login from './login/login';
import {connect} from 'react-redux'
import { cloneArray } from '@js_dir/utils/arrayUtils';
import StickyMenu from './menu/sticky-menu';
import { getUserFavoritePostList } from '@lib/getUserFavoritePostListApi';
import { getUserLoginInfo, getUserLoginToken, isUserLogin } from '@js_dir/utils/membership';
import HeaderPrimaryMobile from '@components/templates/mobile/header/header-primary-mobile';
import { isMobile } from '@js_dir/utils/deviceUtils';
import { useSession, signIn, signOut } from "next-auth/react"
import PdLoadingSquare from '@components/loading/pd-loading-square';
import { useRouter } from 'next/router';
import { createScriptsTag, removeOldAdsScript } from '@js_dir/utils/bannerUtils';
function Header({ ads, bannerScripts, updateShowLoginModal, updateSavedPostsList, UpdateIsLoggedIn, UpdateActiveUserInfo, UpdateActiveFullUserInfo, updateBannerScripts }) {
    const router = useRouter();
    const {data : session} = useSession();
    const [loading, setLoading] = useState(true);
    const [banner, setBanner] = useState(null);
    const [isMobileDevice, setMobileDevice] = useState(false);
    const loadingRef = useRef(true);
    useEffect(async () => {
        setLoading(true);
        UpdateIsLoggedIn(false);
        UpdateActiveUserInfo({});
        UpdateActiveFullUserInfo({});
        if ( !session ) {
            const isLoggedIn = await isUserLogin();
            if ( isLoggedIn ) {
                const {user} = getUserLoginInfo();                                
                const {name, email} = user;
                UpdateActiveUserInfo({username : name, useremail : email});
                UpdateActiveFullUserInfo({...user});
                //
                const token = getUserLoginToken();
                if ( token ) {
                    const userPostsListSaved = await getUserFavoritePostList(token);
                    updateSavedPostsList(cloneArray(userPostsListSaved));
                }
            }
            UpdateIsLoggedIn(isLoggedIn);
        }
        else {
            const user = session.user;
            const username = user.name;
            const useremail = user.email;
            UpdateActiveUserInfo({username, useremail});
            UpdateActiveFullUserInfo({});
            UpdateIsLoggedIn(true);
        }        
        loadingRef.current = false;
        setMobileDevice(isMobile());
        setLoading(false);
    }, [,session]);
    useEffect(() => {     
        setTimeout(() => { 
            try {  
                const sticky = document.getElementById('header-sticky');
                document.addEventListener('scroll', function(e) {
                    try {
                        const offsetHeight = document.getElementById('header')
                                                    .clientHeight;
                        if ( window.scrollY > offsetHeight ) {
                            if ( ! sticky.classList.contains('show') && 
                                    ! loadingRef.current ) {
                                sticky.classList.add('show');
                            }
                        }
                        else {
                            if ( sticky.classList.contains('show') ) {
                                sticky.classList.remove('show');
                            }
                        }
                    } catch {

                    }
                });
            } catch {
            }
        }, 200);
    }, []);
    useEffect(async () => {
        if ( ads ) {         
            const {banner_top} = ads;
            setBanner(banner_top);
        }
    }, [ads]);
    useEffect(() => {
        updateBannerScripts([]);
        removeOldAdsScript();
    }, [, router.query.slug]);
    useEffect(() => {
        setTimeout(() => {
            removeOldAdsScript();
            createScriptsTag(bannerScripts);
        }, 2000);
    }, [bannerScripts]);
    if ( loading ) return (
        <div>
            <div className="container">
                <PdLoadingSquare size = "small" />
            </div>
        </div>
    )
    return (
        <>
            <Head>
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-57149012-1" />
                <script dangerouslySetInnerHTML={{
                    __html : `
                        window.dataLayer = window.dataLayer || [];
                        function gtag() { dataLayer.push(arguments); }
                        gtag('js', new Date());
                        gtag('config', 'UA-176572615-1');`
                }} />
            </Head>
            {!isMobileDevice ? (
                <div className="v-desktop">
                    <header id="header">
                        <Banner data = {banner} />
                        <div className="header__main">
                            <div className="container">
                                <div className="header__group">
                                    <Logo />
                                    <Search />
                                    <Login props={{updateShowLoginModal}} />
                                </div>
                            </div>
                        </div>
                        <PrimaryMenu />
                    </header>
                    <header id="header-sticky"
                            className="header-sticky">
                        <div className="container">
                            <div className="wrapper">
                                <div className="header-logo">
                                    <Logo />
                                </div>
                                <StickyMenu />
                                <Search />
                            </div>
                        </div>
                    </header>
                </div>
            ) : (
                <div className="v-mobile">
                    <HeaderPrimaryMobile props = {{updateShowLoginModal}}/>
                </div>
            )}
        </>
    )
}
function mapStateToProps(state) {   
    return {
        ads : state.globalReducer.ads,
        isLoggedIn : state.globalReducer.isLoggedIn,
        bannerScripts: state.globalReducer.bannerScripts
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
        updateSavedPostsList : async (v) => await dispatch({
            type : "UPDATE_SAVED_POSTS_LIST",
            payload : v
        }),
        updateShowLoginModal : async (v) => await dispatch({
            type : "UPDATE_SHOW_LOGIN_MODAL",
            payload : v
        }),
        UpdateIsLoggedIn : async (v) => await dispatch({
            type : "UPDATE_IS_LOGGED_IN",
            payload : v
        }),
        UpdateActiveUserInfo : async (v) => await dispatch({
            type : "UPDATE_ACTIVE_USER_INFO",
            payload : v
        }),
        UpdateActiveFullUserInfo : async (v) => await dispatch({
            type : "UPDATE_ACTIVE_USER_FULL_INFO",
            payload : v
        }),
        updateBannerScripts : async (v) => await dispatch({
            type : "UPDATE_BANNER_SCRIPTS",
            payload : v
        }),
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Header);
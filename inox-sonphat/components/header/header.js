import React, {useEffect, useState} from 'preact/compat'
import { connect } from 'react-redux';
import NavIcon from '@templates/header/nav-icon';
import HeaderTop from '@templates/header/header-top';
import Menu from '@templates/header/menu';
import Search from '@templates/header/search';
import Logo from '@templates/header/logo';
import Lang from '@templates/header/lang';
import { useRouter } from 'next/router';
import { cloneArray, isDiff } from '@js_dir/utils/arrayUtils';
import ShoppingCarts from '@templates/header/header-top/shopping-carts';
import { injectIntl } from 'react-intl';
import Head from 'next/head'
var menuInstance = null;
function Header({siteOptions, mobileMenuHtml, updateMobileMenuHtml, intl}) {
    const {siteLogo, menuItemsList, ctInfoList} = siteOptions || {};  
    const [sticky, setSticky] = useState(false); 
    const [siteLogoData, setSiteLogoData] = useState(siteLogo);
    const [ctInfoListData, setCtInfoListData] = useState(ctInfoList);
    const [menuItemsListData, setMenuItemsListData] = useState(menuItemsList);
    const {messages} = intl;
    const router = useRouter();
    const onScrollSticky = function(e) {
        if ( window.scrollY > 0 ) {
            setSticky(true);
        }
        else {
            setSticky(false);
        }
    }
    useEffect(async () => {
        const registerMenuLinkEvent = (ev, href, link) => {
            ev.preventDefault();     
            if ( !href.startsWith('#') ) {
                router.push(href);
            }
            if ( href.startsWith('#') ) {
                router.push(link);
            }
        }
        const arrowMenuLinkeEvent = (env, href) => {
            env.preventDefault();
            event.stopPropagation();
            if ( href.startsWith('#') ) {
                const api = menuInstance.API;
                if ( href !== '#' ) {
                    api.openPanel(document.querySelector((href)));
                }
            }
        }        
        setTimeout(async () => {
            try {
                const menu = document.getElementById('menu');
                if ( menu ) {
                    if ( mobileMenuHtml === null ) {
                        setTimeout(function() {
                            updateMobileMenuHtml(menu.innerHTML);
                        }, 200);
                    }
                    else {
                        const navMobile = document.querySelector('.nav-mobile-menu');
                        await import('mmenu-js/dist/mmenu.polyfills');
                        await import('mmenu-js/dist/mmenu');
                        menu && menu.remove();
                        navMobile && navMobile.remove();
                        document.body.setAttribute('class', '');            
                        const nav = document.createElement('nav');
                        nav.setAttribute('id', 'menu');
                        nav.setAttribute('style', 'display: none');
                        nav.innerHTML = mobileMenuHtml;
                        setTimeout(function() {
                            document.querySelector('.header-menu')
                                    .appendChild(nav);
                            menuInstance = new Mmenu('#menu', {
                                extensions: ["position-right", "pagedim-black"],
                                hooks: {
                                    "openPanel:finish": ( panel ) => {
                                        const mm = document.getElementById(panel.id);
                                        if ( mm ) {
                                            const mainMenu = mm.querySelector('.mm-listview');
                                            const listMenuItems = mainMenu.querySelectorAll('li.mm-listitem');
                                            mainMenu.querySelectorAll('a')
                                                        .forEach(e => {
                                                            const href = e.getAttribute('href');
                                                            const arrow = e.querySelector('.mm-sronly');
                                                            const originMenuItemHref = e.classList.contains('mm-btn_next') ? '#' : href;
                                                            e.setAttribute('href', '#');
                                                            e.addEventListener('click', e => registerMenuLinkEvent(e, href, originMenuItemHref));
                                                            arrow && 
                                                                arrow.addEventListener('click', e => arrowMenuLinkeEvent(e, href));
                                                        });   
                                        }
                                    }
                                }
                            });
                        }, 200);
                    }
                }
            } catch {}
        }, 500);
        return () => {
            document.getElementById('mm-1')
                    .querySelectorAll('.mm-sronly')
                    .forEach(e => {
                        e.removeEventListener('click', arrowMenuLinkeEvent);
                    }); 
            document.getElementById('mm-1')
                    .querySelectorAll('a')
                    .forEach(e => {
                        e.removeEventListener('click', registerMenuLinkEvent);
                    }); 
        }
    });
    useEffect(() => {
        if ( isDiff(siteLogo, siteLogoData) ) {    
            setSiteLogoData(cloneArray(siteLogo));
        }
        if ( isDiff(ctInfoList, ctInfoListData) ) {
            setCtInfoListData(cloneArray(ctInfoList));
        }
        if ( isDiff(menuItemsList, menuItemsListData) ) {
            setMenuItemsListData(cloneArray(menuItemsList));
        }
    }, [siteOptions]);
    useEffect(() => {        
        document.addEventListener('scroll', onScrollSticky);
        return () => {
            document.removeEventListener('scroll', onScrollSticky);
        }
    }, [,router.locale,router.query.slug]);
    return (
        <>
            <Head>
                <meta name="google-site-verification" content="2iYtHQTYkrBsDNBfPbBfz7SRfYnvHZ7z2WKt4wxb1DU" />
            </Head>
            <header className={"top fixed-top ".concat(sticky ? 'fixed-scroll' : '')}>
                <div className="t-mid">
                    <div className="position-relative container">
                        <div className="d-flex align-items-center justify-content-between">  
                            {siteLogoData ? (
                                <>                             
                                    <NavIcon />                         
                                    <Logo data = {siteLogoData} />
                                    <div className="header-navigation d-flex flex-md-column flex-row">
                                        <HeaderTop data = {ctInfoListData} />
                                        <div className="d-flex align-items-center justify-content-around header-navigation-row">
                                            <Menu data = {menuItemsListData} />
                                            <Search messages = {messages}
                                                    locale = {router.locale} />
                                            {/*<Lang />*/}
                                            <ShoppingCarts />
                                        </div>
                                    </div>
                                </>
                            ) : null}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
function mapStateToProps(state) {   
    return { 
        mobileMenuHtml : state.globalReducer.mobileMenuHtml,
        siteOptions: state.globalReducer.siteOptions
    }
}
function mapDispatchToProps(dispatch) {
    return {
        updateMobileMenuHtml : async (v) => await dispatch({
            type : "UPDATE_MOBILE_MENU_HTML",           
            payload : v
        })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Header));

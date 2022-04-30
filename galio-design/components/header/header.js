import React, {useEffect, useState} from 'preact/compat'
import HeaderNavigation from './components/header-navigation';
import Logo from './components/logo';
import Sidebar from './components/sidebar';
import ToggleSidebar from './components/toggle-sidebar';
import { connect } from 'react-redux';
import { Router, useRouter } from 'next/router';
function Header({ siteOptions }) {  
    const router = useRouter();
    const [headerStickyActive, setHeaderStickyActive] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);  
    const [showSearchBars, setShowSearchBars] = useState([false, false]);  
    const [logoLeftPos, setLogoLeftPos] = useState(null);
    Router.events.on('routeChangeComplete', (url) => {
        setShowSidebar(false);
    });
    useEffect(() => {  
        const onScrollSetHeaderSTicky = () => {            
            const offsetTop = window.scrollY;
            if ( offsetTop > 0 ) {
                setHeaderStickyActive(true);
            }
            else {
                setHeaderStickyActive(false);
            }
        }   
        const resizeLogoLeftPos = () => {
            let widthMenuItems = 0;
            let widthTopMenuItems = 0;
            let marginLeftTotals = 0;
            let pos = null;
            const containerWidth = document.querySelector('.header__main').clientWidth;
            const logoWidth = document.querySelector('.logo').clientWidth;            
            document.querySelectorAll('.menu > li')
                    .forEach((item, i) => {
                const m = parseInt(getComputedStyle(item).marginLeft);
                widthMenuItems += item.clientWidth;
                if ( !pos && !isNaN(m) && m < 71 ) {
                    //console.log(item.clientWidth);
                    widthTopMenuItems += item.clientWidth;
                }
                if ( !isNaN(m) && m < 71 ) {                 
                    marginLeftTotals += m;   
                    if ( !pos ) {
                        //console.log(m);
                        widthTopMenuItems += m;
                    }                 
                }
                else {
                    pos = i;
                }
            });
            const w = containerWidth - widthMenuItems - marginLeftTotals;
            //console.log(widthTopMenuItems + (w / 2 - logoWidth / 2));
            setLogoLeftPos(widthTopMenuItems + (w / 2 - logoWidth / 2));
        }     
        document.addEventListener('scroll', onScrollSetHeaderSTicky);
        setTimeout(function() {
            resizeLogoLeftPos();
            window.addEventListener('resize', resizeLogoLeftPos);
        }, 200);
        return () => {
            document.removeEventListener('scroll', onScrollSetHeaderSTicky);
        }
    }, [, router.locale]);
    useEffect(() => {
        showSidebar ? document.body.classList.add('open__modal') :
                      document.body.classList.remove('open__modal');
        return () => {
            document.body.classList.remove('open__modal')
        }
    }, [showSidebar]);
    if ( !siteOptions ) {
        return null;
    }
    const {getLogoSite, getMenuItemsList} = siteOptions;
    return (
        <header id="header"
                className={headerStickyActive ? 'active' : ''}>
            <div className="container">
                <div className="header__main">
                    <Sidebar props={{
                        showSidebar,
                        setShowSidebar,
                        showSearchBars,
                        setShowSearchBars,
                        searchBarId : 0
                    }}
                        menuListsData = {getMenuItemsList} 
                    />                    
                    <Logo data = {getLogoSite}
                          left = {logoLeftPos} />
                    <HeaderNavigation props = {{showSearchBars, setShowSearchBars, searchBarId : 1}} />
                    <ToggleSidebar props={{
                        showSidebar,
                        setShowSidebar
                    }} />
                </div>
            </div>
        </header>
    )
}
function mapStateToProps(state) {   
    return { 
        siteOptions: state.globalReducer.siteOptions
    }
}
function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);

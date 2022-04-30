import React, {useEffect, useState, useCallback} from 'preact/compat'
import { connect } from 'react-redux'
import Logo from './templates/logo'
import {isEmptyObj} from '@js_utils/arrayUtils'
import PrimaryMenu from './templates/primary-menu'
import Search from './templates/search'
import HeaderMobile from './templates/header-mobile'
import { showBodyScroll, toggleBodyScroll } from '@js_dir/utils/domUtils'
import { useRouter } from 'next/router'
function Header({ siteOptions }) {   
    const router = useRouter(); 
    const [showSeachBar, setShowSearchBar] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const {siteLogo, menuItemsList} = siteOptions;
    const handleScrollFixedHeader = useCallback(() => {
        const header = document.querySelector('header.header');
        const btnScrollToTop = document.getElementById('scrollToTop');
        if ( window.scrollY > 0 ) {
            if ( !header.classList.contains('fixed-header') ) {
                header.classList.add('fixed-header');
            }            
            if ( !btnScrollToTop.classList.contains('active') ) {
                btnScrollToTop.classList.add('active');
            }
        }
        else {
            if ( header.classList.contains('fixed-header') ) {
                header.classList.remove('fixed-header');
            }
            if ( btnScrollToTop.classList.contains('active') ) {
                btnScrollToTop.classList.remove('active');
            }
        }
    }, []);
    const handleShowSearchBar = useCallback((e) => {
        e.preventDefault();
        setShowSearchBar(true);
    }, []);
    const handleCloseSearchBar = useCallback((e) => {
        e.preventDefault();
        setShowSearchBar(false);
    }, []);
    const handleToggleMobileMenu = useCallback((e) => {
        e.preventDefault();
        toggleBodyScroll();
        setShowMobileMenu(!showMobileMenu);
    }, [,showMobileMenu]);
    const handleMobileMenuItem = useCallback((e) => {
        try {
            const target = e.target;
            const href = target.getAttribute('href');
            if ( href === '#' ) {
                e.preventDefault();
                const i = target.nextElementSibling;
                if (i.nodeName.toLowerCase() === 'i') {
                    i.click();
                    return;
                }
            }
            showBodyScroll();            
            setShowMobileMenu(false);
        } catch {}
    }, []);
    useEffect(() => {        
        setTimeout(() => {
            document.addEventListener('scroll', handleScrollFixedHeader);
            document.querySelectorAll(".menu-item a")
                    .forEach(elem => {
                        elem.addEventListener('click', handleMobileMenuItem);
                    });
            document.querySelector('.search-form')
                    .addEventListener('submit', (e) => {
                        e.preventDefault();
                        setShowMobileMenu(false);
                        const s = document.querySelector('.search-form .s').value;
                        router.push(`/${process.env.SEARCH_PAGE_URL}/?s=` + s);
                    });                   
        }, 200);
    }, []);
    if ( isEmptyObj(siteOptions) ) return <></>
    return (
        <header className={"header ".concat(showMobileMenu ? 'fs-sticky' : '')}>
            <div className="container">
                <div className="header-inner">
                    <Logo data = {siteLogo} />
                    <div className={"menu-search ".concat(showMobileMenu ? 'active' : '')}>
                        <HeaderMobile data = {siteLogo}
                                      props = {{handleToggleMobileMenu}} />
                        <PrimaryMenu data = {menuItemsList} />  
                        <Search props = {{showSeachBar, handleShowSearchBar, handleCloseSearchBar}} />
                    </div>
                    <i className="far fa-bars icon-head-bar"
                        onClick={handleToggleMobileMenu}></i>
                </div>
            </div>
        </header>
    )
}
function mapStateToProps(state) {   
    return { 
        siteOptions : state.globalReducer.siteOptions
    }
}
function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);

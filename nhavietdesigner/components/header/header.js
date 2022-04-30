import React, {useEffect} from 'preact/compat'
import { useRouter } from 'next/router'
import HeaderPrimaryMenu from '@templates/header-primary-menu'
import Link from 'next/link'
import { connect } from 'react-redux';
import { WP_WEBSITE_URL } from '@constants/constants';
import { env } from 'next.config';
const stickyLogoImage = `${WP_WEBSITE_URL}/wp-content/uploads/2020/04/cropped-logo-nvd-01-1-150x150.png`;
var menuInstance = null;
function Header({ data, mobileMenuHtml, updateMobileMenuHtml }) {
    const router = useRouter();
    const {logo, menu} = data;
    useEffect(() => {
        const headerElem = document.querySelector('header');
        document.addEventListener('scroll', function() {
            if (window.scrollY > 0 ) {
                if ( ! headerElem.classList.contains('sticky') ) {
                    headerElem.classList.add('sticky');
                }
            }
            else {
                if ( headerElem.classList.contains('sticky') ) {
                    headerElem.classList.remove('sticky');
                }
            }
        });
    }, []);
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
        const menu = document.getElementById('menu');
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
                document.querySelector('.vk-header__mid-content')
                        .appendChild(nav);
                setTimeout(function() {
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
                                                    const index = Array.from(listMenuItems)
                                                                        .indexOf(e.parentElement);
                                                    const originMenuItemHref = document.querySelector(`.vk-menu__main > li:nth-child(${index + 1}) > a`)
                                                                                .getAttribute('href');
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
            }, 200);
        }
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
    return (
        <>
            <header className="vk-header">
                <div className="vk-header__mid">
                    <div className="vk-container">
                        <div className="vk-header__mid-content">
                            <Link href={logo.url}> 
                                <a className="vk-header__logo">
                                    <img src={logo.src} 
                                        alt={logo.alt} />
                                    <img className="sticky" src={stickyLogoImage}
                                        alt={logo.alt} />
                                </a>
                            </Link>
                            <nav id="menu" className="nav-mobile-menu" style={{ display: "none" }}>
                                <ul>
                                    <HeaderPrimaryMenu data = {menu}
                                                    mobile = {true} />
                                </ul>
                            </nav>
                            <nav className="vk-header__menu">
                                <ul className="vk-menu__main">
                                    <HeaderPrimaryMenu data = {menu} />
                                </ul>
                            </nav>
                            <a href="#menu" 
                                data-menu="#menu" 
                                className="vk-header__btn--menu d-lg-none">
                                    <i className="ti-menu"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
function mapStateToProps(state) {   
    return { 
        mobileMenuHtml : state.globalReducer.mobileMenuHtml
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
export default connect(mapStateToProps, mapDispatchToProps)(Header);
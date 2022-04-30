import React, {useState, useEffect} from 'preact/compat'
import { connect } from 'react-redux';
import { useCookies } from 'react-cookie';
import { useRouter } from "next/router"
import { getSlugPageByLocale } from '@js_dir/utils/urlUtils';
import { PAGES } from '@constants/constants';
var boolRedirect = false;
function onChangeLang(e, props) {
    e.preventDefault();
    const {router, locale, cookie, setCookie, activePolyLangUrl, updateActiveLang} = props;
    const {asPath, locale: activeLocale} = router;
    const activeUrl = getSlugPageByLocale(asPath); 
    const s = window.location.search;
    boolRedirect = false;
    if ( activeUrl === '' ) { 
        router.push('/', '/', {locale});
        boolRedirect = true;
    }
    else {
        Object.keys(PAGES)
            .forEach((key, i) => {
            const pageActiveUrl = PAGES[key][activeLocale.toUpperCase()].name;
            if ( activeUrl === pageActiveUrl ) {
                const redirectPageUrl = PAGES[key][locale.toUpperCase()].name;                 
                router.push(redirectPageUrl.concat(s ? s : ''), redirectPageUrl.concat(s ? s : ''), {locale});
                boolRedirect = true;
            }
        });
        if ( !boolRedirect ) { // single custom post type || single blog
            if ( activePolyLangUrl ) {
                if ( locale !== activeLocale ) {
                    router.push(activePolyLangUrl, activePolyLangUrl, {locale});
                }
                else {
                    router.push(asPath, asPath, {activeLocale});
                }
            }
            else {
                router.push('/', '/', {locale});
            }
            boolRedirect = true;
        }
    }
    if(cookie.NEXT_LOCALE !== locale){
        setCookie("NEXT_LOCALE", locale, { path: "/" });
    }
    updateActiveLang(locale);
}
function Lang({activeLang, updateActiveLang, activePolyLangUrl}) {
    const [ cookie, setCookie ] = useCookies(['NEXT_LOCALE']);
    const router = useRouter();
    return (
        <div className="lan">
            {/*<a className={activeLang === 'vi' ? 'active' : ''}
                href="#"
                onClick={e => onChangeLang(e, {router, locale: 'vi', cookie, setCookie, activePolyLangUrl, updateActiveLang})}>VIE</a>*/}
            {/*<a className={activeLang === 'en' ? 'active' : ''}
                href="#" 
                onClick={e => onChangeLang(e, {router, locale: 'en', cookie, setCookie, activePolyLangUrl, updateActiveLang})}>ENG</a>*/}
        </div>
    )
}
function mapStateToProps(state) {   
    return { 
        activeLang: state.globalReducer.activeLang,
        activePolyLangUrl: state.globalReducer.activePolyLangUrl
    }
}
function mapDispatchToProps(dispatch) {
    return {
        updateActiveLang : async (v) => await dispatch({
            type : "UPDATE_ACTIVE_LANGUAGE",           
            payload : v
        })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Lang);

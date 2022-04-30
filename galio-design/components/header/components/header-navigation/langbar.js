import React from 'preact/compat'
import { connect } from 'react-redux';
import { useCookies } from 'react-cookie';
import { useRouter } from "next/router"
import { getSlugByLocale } from '@js_dir/utils/urlUtils';
import { PAGES } from '@constants/constants';
var boolRedirect = false;
function onChangeLang(e, props) {
    const locale = e.target.value;
    const {router, cookie, setCookie} = props;
    const {asPath, locale: activeLocale} = router;
    const activeUrl = getSlugByLocale(asPath); 
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
                router.push(redirectPageUrl, redirectPageUrl, {locale});
                boolRedirect = true;
            }
        });
        if ( !boolRedirect ) { // single custom post type || single blog
            const {activePolyLangUrl} = window;
            router.push(activePolyLangUrl, activePolyLangUrl, {locale});
            boolRedirect = true;
        }
    }
    
    if(cookie.NEXT_LOCALE !== locale){
        setCookie("NEXT_LOCALE", locale, { path: "/" });
    }
}

function Langbar({activeLang}) {
    const [ cookie, setCookie ] = useCookies(['NEXT_LOCALE']);
    const router = useRouter();
    const { locale } = router;
    return (
        <select name="slLangBar" 
                id="slLangBar"
                defaultValue={locale}
                onChange={e => onChangeLang(e, {router, cookie, setCookie})}>
            <option value="vi" selected={activeLang === 'vi'}>VN</option>
            <option value="en" selected={activeLang === 'en'}>EN</option>
        </select>
    )
}

function mapStateToProps(state) {   

    return { 
        activeLang: state.globalReducer.activeLang
    }

}

function mapDispatchToProps(dispatch) {

    return {}

}

export default connect(mapStateToProps, mapDispatchToProps)(Langbar);

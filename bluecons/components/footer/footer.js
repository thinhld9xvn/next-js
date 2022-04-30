import { isEmptyObj } from '@js_dir/utils/arrayUtils'
import React from 'preact/compat'
import { connect } from 'react-redux'
import FooterCopyright from './templates/footer-copyright'
import FooterSecondary from './templates/footer-secondary'
import FooterTop from './templates/footer-top'
import ScrollToTop from './templates/scroll-to-top'
function Footer({ siteOptions }) {
    if ( isEmptyObj(siteOptions) ) return <></>
    const {siteLogo, siteFooter} = siteOptions;
    const {contact, info, socials, supporter, footer_menu, copyright} = siteFooter;
    return (
        <footer className="footer">
            <FooterTop data = {{siteLogo, contact, info, supporter, socials}} />
            <FooterSecondary data = {{footer_menu}} />
            <FooterCopyright data = {{copyright}} />
            <ScrollToTop />
        </footer>

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
export default connect(mapStateToProps, mapDispatchToProps)(Footer);

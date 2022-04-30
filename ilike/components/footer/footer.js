import React, {useState, useEffect} from 'preact/compat'
import Link from 'next/link'
import { DEFAULT_COPYRIGHT, DEFAULT_EMAIL, DEFAULT_FOOT_INFO, DEFAULT_LOGO, DEFAULT_PHONE, footerMenuEntries } from '@constants/constants';
import FooterLogo from './components/footer-logo';
import FooterMenu from './components/footer-menu';
import FooterDongGopColumn from './components/footer-donggop-column';
import FooterAdsColumn from './components/footer-ads-column';
import FooterCopyright from './components/footer-copyright';
import {connect} from 'react-redux'
import ScrollToTop from './components/scroll-to-top';
//import { FacebookProvider, Page  } from 'react-facebook';
function getTempItem(data) {
    const {slug, title} = data;
    return (
        <li>
            <Link href={slug}>
                <a title={title}>{title}</a>
            </Link>
        </li>
    )
}
function Footer({ siteOptions, showFooter }) {
    const [logoFooter, setLogoFooter] = useState(DEFAULT_LOGO);
    const [footerInfo, setFooterInfo] = useState(DEFAULT_FOOT_INFO);
    const [phoneInfo, setPhoneInfo] = useState(DEFAULT_PHONE);
    const [emailInfo, setEmailInfo] = useState(DEFAULT_EMAIL);
    const [copyrightInfo, setCopyrightInfo] = useState(DEFAULT_COPYRIGHT);
    useEffect(() => {
        if ( siteOptions ) {
            let logo_footer = siteOptions.filter(e => e.option_name === 'logo');
            setLogoFooter(logo_footer.length ? logo_footer[0].option_value : DEFAULT_LOGO);
            let footer_info = siteOptions.filter(e => e.option_name === 'footer_info');
            setFooterInfo(footer_info.length ? footer_info[0].option_value : DEFAULT_FOOT_INFO);
            let phone = siteOptions.filter(e => e.option_name === 'phone');
            setPhoneInfo(phone.length ? phone[0].option_value : DEFAULT_PHONE);
            let email = siteOptions.filter(e => e.option_name === 'email');
            setEmailInfo(email.length ? email[0].option_value : DEFAULT_EMAIL);
            let copyright = siteOptions.filter(e => e.option_name === 'copyright');
            setCopyrightInfo(copyright.length ? copyright[0].option_value : DEFAULT_COPYRIGHT);
        }
    }, [siteOptions]);
    
    const arrItemsList = [];
    footerMenuEntries.map(item => {
        arrItemsList.push(getTempItem(item));
    });
    return (
        <>
            {showFooter ? (
                <footer id="footer">
                    <div className="container">
                        <FooterLogo data = {logoFooter} />
                        <div className="footer__group">
                            <FooterMenu data = {arrItemsList} />
                            <FooterDongGopColumn /> 
                            <FooterAdsColumn data = {{
                                email: emailInfo,
                                phone: phoneInfo
                            }} />
                            {/*<FooterGiayPhepColumn data = {footerInfo} />    */}
                            {/*<FooterBaoGiaColumn />*/}
                        </div>
                        {/*<div>
                            <FacebookProvider appId={FB_ID}>
                                <Page href={FANPAGE_URL} />
                            </FacebookProvider>    
                        </div>*/}
                        <FooterCopyright data = {{
                            footer_info : footerInfo,
                            copyright : copyrightInfo
                        }} />                    
                    </div>
                </footer>
            ) : null}
            <ScrollToTop />
        </>
    )
}
function mapStateToProps(state) {   
    return {
        siteOptions : state.globalReducer.siteOptions,
        showFooter : state.globalReducer.showFooter
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
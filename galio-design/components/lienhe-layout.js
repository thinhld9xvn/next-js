import React, {useEffect} from 'preact/compat'
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { setupAnimationsUtils } from '@js_dir/utils/animations/setupAnimationsUtils';
import FooterPage from './templates/footer-page';
import ContactSection from './lienhe/contact-section';
import SeoHelmet from './seo-helmet';
import { getSeoExtrasPage } from '@js_dir/utils/seoUtils';
var isRunEffect = false;
function LienHeLayout({ pageContext, updateSiteOptions }) {
    const router = useRouter();
    const {options, data} = pageContext;
    const {getCtInfoList} = options;
    const {getFooterPageData, pages} = data;
    const {contact_form, gifts_form} = getCtInfoList;
    const footerPageData = {...getFooterPageData, contact_form, gifts_form};
    const seo = getSeoExtrasPage(pages); 
    useEffect(() => {
        updateSiteOptions({...options});        
    }, [router.locale]);
    useEffect(() => {
        if ( !isRunEffect ) {
            isRunEffect = true;
            setupAnimationsUtils();
            setTimeout(function() {
                isRunEffect = false;
            }, 500);
        }
    });
    return (
        <>
            <SeoHelmet data = {seo} />
            <main id="main" className="page-contact">
                <ContactSection data = {getCtInfoList} />
                <FooterPage data = {footerPageData} />
            </main>
        </>
    )
}
function mapStateToProps(state) {   
    return {}
}
function mapDispatchToProps(dispatch) {
    return {
        updateSiteOptions : async (v) => await dispatch({
            type : "UPDATE_SITE_OPTIONS",
            payload : v
        })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LienHeLayout);

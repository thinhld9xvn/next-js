import React, {useEffect} from 'preact/compat'
import { connect } from 'react-redux';
import AboutSection from './gioithieu/about-section'
import { useRouter } from 'next/router';
import FooterPage from '@templates/footer-page';
import { setupAnimationsUtils } from '@js_dir/utils/animations/setupAnimationsUtils';
import { getSeoExtrasPage } from '@js_dir/utils/seoUtils';
import SeoHelmet from './seo-helmet';
var isRunEffect = false;
function GioiThieuLayout({ pageContext,
                            updateSiteOptions }) {
    const router = useRouter();
    const {options, data} = pageContext;
    const {getGioiThieuPageData, getFooterPageData, pages} = data;
    const {heading, introduction, slider, 
            strength_heading, strength_desc, strength_lists,
            users_list,
            price_heading, price_contents, price_button_url,
            price_button_text, price_thumbnail,
            duration_working_heading, duration_working_desc, duration_working_lists } = getGioiThieuPageData;
    const aboutSectionData = {
        openingUs : {heading, introduction},
        slider,
        strengthUs : {strength_heading, strength_desc, strength_lists},
        users_list,
        price_box : {price_heading, price_contents, price_button_text, price_button_url, price_thumbnail},
        duration_working : {duration_working_heading, duration_working_desc, duration_working_lists}
    }
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
            <main id="main">
                <AboutSection data = {aboutSectionData} />
                <FooterPage data = {getFooterPageData} />
            </main>
        </>
    )
}
function mapStateToProps(state) {   
    return { 
    }
}
function mapDispatchToProps(dispatch) {
    return {
        updateSiteOptions : async (v) => await dispatch({
            type : "UPDATE_SITE_OPTIONS",
            payload : v
        })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GioiThieuLayout);